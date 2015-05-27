/* 
 Pundit: a novel semantic web annotation tool
 Copyright (c) 2013 Net7 SRL, <http://www.netseven.it/>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 See LICENSE.TXT or visit http://thepund.it for the full text of the license.
 */
/**
 * @class pundit.TripleComposer
 * @extends pundit.baseComponent
 * @description Offers a cute drag 'n drop GUI to create triples. Interacts
 * with other components to show possible drop targets for a given dragged
 * pundit item and, the other way around, highlights pundit items
 * which are accepted by a clicked drop target. It will use item rdf types and
 * predicates ranges/domains of already present items in the subject, predicate
 * and object targets, to be as accurate as possible with the suggestions.
 */
dojo.provide("pundit.TripleComposer");
dojo.declare("pundit.TripleComposer", pundit.BaseComponent, {

	// Will contain DnD objects for subject, predicate, object
	tripleDnD: {},
	collectiveGeoObj: false,//edit IBR
	collectiveObjIDs: [],
	// TODO: move this comment to some @property and some into the class declaration
	/*
	 * @constructor
	 * @description Initializes the component
	 * @param options {object}
	 * @param options.debug {boolean} wether or not to activate debug mode for this component
	 */
	constructor: function (options) {

		var self = this,
				pu = "<div id=\"pundit-tc-container\" class=\"pundit-tab pundit-selected\">";
		pu += "    <div class=\"pundit-tab-header\">"; //todo: Listener für den Save-Button muss auf den ganzen Block, nicht nur auf den Text-Span
		pu += "      <span class=\"pundit-gui-button\" id=\"pundit-tc-add-triple-button\"><span class=\"pundit-bicon pundit-add-triple-icon\"></span>Add a new triple</span>";
		pu += "    </div>";
		pu += "    <div id=\"pundit-tc-triples-container\" class=\"pundit-tab-content\">";
		pu += "    </div>";
		pu += "    </div>";
		pu += "  </div>";
		dojo.query("#pundit-gui-right").append(pu);
		self.saver = new pundit.AnnotationWriter();
		self.subjSuggestionPanel = new pundit.ResourcesPanel({
			name: 'subj-suggestions',
			searchType: 'filter',
			field: 'subject',
			namedEntitiesSources: _PUNDIT.config.activeEntitySources
		});
		self.subjSuggestionPanel.onItemAdded(function (item) {
			self.addItem(item);
			self.subjSuggestionPanel.hide();
		});

		// TODO: check if selectors are active
		self.objSuggestionPanel = new pundit.ResourcesPanel({
			name: 'obj-suggestions',
			field: 'object',
			searchType: 'filter',
			namedEntitiesSources: _PUNDIT.config.activeEntitySources
		});

		self.objSuggestionPanel.onItemAdded(function (item) {
			self.addItem(item);
			self.objSuggestionPanel.hide();
		});

		self.propSuggestionPanel = new pundit.ResourcesPanel({
			name: 'pred-suggestions',
			field: 'predicate',
			searchType: 'filter'
		});
		self.propSuggestionPanel.onItemAdded(function (item) {
			self.addItem(item);
			self.propSuggestionPanel.hide();
		});

		semlibWindow.onWindowResize(function (semlibWindowHeight) {
			self.checkNeedToHideResourcePanel(semlibWindowHeight);
		});
		semlibWindow.onWindowClose(function () {
			self.subjSuggestionPanel.hide();
			self.propSuggestionPanel.hide();
			self.objSuggestionPanel.hide();
		})

		self.collectiveObjIDs = new Array();//todo Felix: wird nicht im DOM angezeigt?
		self.collectiveGeoObj = false;
		self.initDnD();
		//self.initBehaviors();




		/**
		 * @event onSave
		 * @param f() {function} function to be called, no parameters.
		 * @description Called when pundit succesfully saves a batch of
		 * user built triples to the server.
		 */
		self.createCallback(['save']);
		self.log("Pundit up and running!");

	}, // constructor()

	initBehaviors: function () {
		var self = this;

		// Saver OnError and OnSave
		self.saver.onError(function (m) {
			self.log('ERROR!!! Saver answered with ' + m);
			dojo.query('#pundit-tc-container').removeClass('pundit-panel-loading');
		});

		self.saver.onSave(function (m) {
			self.log('Saver answered with ' + m);
			self.saveItems(m);
		});

		self.saver.onSaveItems(function (annotationID) {
			self.clearDnDTriples();
			dojo.query('#pundit-tc-container').removeClass('pundit-panel-loading');
			self.tryToShowAnnotation = annotationID;
			self.fireOnSave();
		});

		// Saves the current annotation
		dojo.connect(dojo.byId('pundit-tc-save-button'), 'onclick', function () {
			//dojo.query('#pundit-tc-container').addClass('pundit-panel-loading');
			self.saveTriples();
			//dojo.query('#pundit-tc-container').removeClass('pundit-panel-loading');//edit IBR: Zur Sicherheit, falls ein nicht korrektes Triple gespeichert werden soll.besser mit Timeout
		});

		//todo felix: sollte eigentlich zu init-behaviours, wird dort aber zu häufig aufgerufen
		//edit IBR //send current Graph Pattern in Triple Browser as
		dojo.connect(dojo.byId('pundit-tc-sparql-button'), 'onclick', function () {
			self.triple2Sparql();
		});//triple2Sparql


		// Adds a new triple row
		dojo.connect(dojo.byId('pundit-tc-add-triple-button'), 'onclick', function () {
			self.subjSuggestionPanel.hide();
			self.objSuggestionPanel.hide();
			self.propSuggestionPanel.hide();
			self.addDnDTriple();
		});

		dojo.subscribe("/dnd/start", null, function (s, nodes) {
			self.highlightDnDTargetsReceivingNodes(s, nodes);
		});

		// Drop or not drop.. clear the highlights
		dojo.subscribe("/dnd/cancel", null, function () {
			dojo.query('.pundit-tc-dnd-container ul').removeClass('dnd_selected');
		});

		dojo.subscribe("/dnd/drop", function (source, nodes, copy, target) {

			dojo.query('.pundit-tc-dnd-container ul').removeClass('dnd_selected');
			self.resetSelections();
			// DEBUG: delayed the application of behaviours a bit, to make
			// sure it's always applied correctly
			if (target.node.id.substring(0, 10) === 'pundit-tc-') {
				var item,
						treeItem,
						uri;
				if (typeof(source.semlibTree) !== 'undefined') {

					for (var i = nodes.length - 1; i >= 0; i--) {
						treeItem = source.getItem(nodes[i].id);
						item = {
							description: treeItem.data.item.description[0],
							label: treeItem.data.item.label[0],
							rdftype: treeItem.data.item.rdftype,
							type: treeItem.data.item.type,
							value: treeItem.data.item.value[0]
						};
						if (typeof(treeItem.data.item.image) !== 'undefined')
							item.image = treeItem.data.item.image[0];
						uri = item.value;
						item.rdfData = semlibMyItems.createBucketForVocabItem(item).bucket;
						//TODO WHY this is not parametric?
						if (!semlibMyItems.uriInItems(uri)) {
							semlibMyItems.addItem(item, true);
						}
						setTimeout("dojo.behavior.apply();", 50);
						return;
					}
				}



				// DEBUG check that suorce is in semlibwindow to prevent that tags
				// in the comment tag panel are added
				// if ((source === semlibItems.itemsDnD) || (source === recon.itemsDnD)){
				for (var i = nodes.length - 1; i >= 0; i--) {
					var id = dojo.attr(nodes[i], 'id');
					item = source.map[id];
					// In the case of a vocab item that is dragged from a triple composer box to another
					// the source doen' correspond with the real item source which is the tree
					// resulting in an error when looking for the item in the map.
					if (typeof item !== 'undefined') {
						uri = item.data.value;
						//TODO WHY this is not parametric?
						if (!semlibMyItems.uriInItems(uri))
							semlibMyItems.addItem(item.data, true);
					}

				}


			}

				/*edit Felix: Konsistenzcheck: wenn nach dem Drag&Drop eine Kollektionen durch ein Singularobjekt ersetzt wurde,
				 müssen die collectiveObj-Statusvariablen entsprechend auf null und [] gesetzt werden.
				  */
			var singularSubj=true;//nur eine von diesen beiden variablen false ist, dürfen die Statusvariablen für Kollektionen gesetzt bleiben.
			var singularObj=true;
				for (var row in tripleComposer.tripleDnD) {
					var map = tripleComposer.tripleDnD[row]['s'].map;
					for (var i in map) {//i ist der String dojoUniquexxx. Schleife bricht ab, wenn map (slot) leer
						var itemObj = tripleComposer.tripleDnD[row].s.map[i];
						if (itemObj.data.label == ns.collective_object_label) {
							singularSubj=false;//in diesem Fall müssen die Variablen nicht geleert werden.
						}
					}
				}

				for (var row in tripleComposer.tripleDnD) {
					if (!singularSubj)break; //wenn am Subjekt eine Kollektion ist, sind die Statusvariablen richtig gesetzt.
					var map = tripleComposer.tripleDnD[row]['o'].map;
					for (var i in map) {//i ist der String dojoUniquexxx. Schleife bricht ab, wenn map (slot) leer
						var itemObj = tripleComposer.tripleDnD[row].o.map[i];
						if (itemObj.data.label == ns.collective_object_label) {//ASSERT: singularSubj==true, an ObjektPosition ist eine Kollektion
							singularObj=false;
						}//todo: Beide Schleifen können zusammengefasst werden. Logik: Wenn beide Werte true sind, müssen die Statusvariablen geleert werden.
					}
				}
			if (singularSubj&&singularObj){
				tripleComposer.collectiveGeoObj = false;
				tripleComposer.collectiveObjIDs = [];
			}
			//edit IBR
			setTimeout("dojo.behavior.apply();", 50);

		});

		dojo.behavior.add({

			// Context button shows the contextual menu for this type
			'#pundit-tc-triples-container li.dojoDndItem span.pundit-icon-context-button': {
				'onclick': function (e) {
					//cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, dojo.query(e.target).parent()[0].id, 'pundititem');
					dojo.stopEvent(e);
				}
			},

			// Mouseover on an item activates the preview
			'#pundit-tc-triples-container li.dojoDndItem': {
				'onmouseover': function (e) {
					var id = (dojo.hasClass(e.target, 'pundit-icon-context-button')) ? dojo.query(e.target).parent()[0].id : e.target.id,
							item;

					item = self.getItemFromId(id);
					if (typeof(item) !== 'undefined')
					//previewer.selectAndPreviewItemWithId(id, item.data.value);
						previewer.show(item.data.value);

					//dojo.stopEvent(e);
				},
				'onclick': function (e) {
					//Why are you stopping the event????
					dojo.stopEvent(e);
				}
			}

		});

		// Pundit Item: remove if it's a pundit item but it's not consolidated
		/*cMenu.addAction({
			type: ['pundititem'],
			name: 'removePunditItem',
			label: 'Remove this item',
			showIf: function (id) {
				return true;
			},
			onclick: function (id) {

				// todo: dont use an ID but the URI, so other
				// components can use this call to show their context menu
				// items (eg: favorites, zoom, web page... )
				// PROBLEM: what if more containers have the same URI? How we know
				// what item to delete? :(
				dojo.destroy(id);
				for (var i in self.tripleDnD) { //ok object
					['s', 'p', 'o'].forEach(function (resourceType) {
						var cItem = self.tripleDnD[i][resourceType].getItem(id);
						if (typeof(cItem) !== 'undefined') {
							//previewer.deselectCurrentSelectedItem();
							self.tripleDnD[i][resourceType].delItem(id);
							self.tripleDnD[i][resourceType].sync();

							//todo
							// Re-add the item into the resourcesPanel...
							// if it is open
							//semlibResourcesPanel.addItemInExistingPanel(cItem, resourceType);
						}
					});
				}
				return true;
			}
		});*/

	}, // initBehaviours()

	initDnD: function () {
		var self = this;

		self.addDnDTriple();
	}, // initDnD()

	/**
	 * @method getItemFromId
	 * @description Looks for the given ID among the items currently
	 * present in the dnd targets.
	 * @param id {string} HTML ID of an item present in the pundit targets.
	 * @return {object - Dojo DND item} The item for that ID, undefined otherwise.
	 */
	getItemFromId: function (id) {
		var self = this,
				bits = ['s', 'p', 'o'],
				ret;

		for (var i in self.tripleDnD)
			//for (var j in bits)
			for (var j = bits.length; j--;)
				if (ret = self.tripleDnD[i][bits[j]].getItem(id))
					return ret;

		return undefined;
	},

	/**
	 * @method addDnDTriple
	 * @description Adds a triple row to the pundit area, thus adding three new
	 * subject, predicate and object targets.
	 * @param append {boolean} wether to append (true) or prepend (false) the new
	 * row to the already existing ones.
	 */
	addDnDTriple: function (append) { //todo: kann diese methode weg?
		var self = this,
				c = '',
				u = '';

		for (var i = 5; i--;) u += 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(0 | Math.random() * 36);

		c += "<div class=\"pundit-tc-dnd-container expanded\" id=\"pundit-tc-dnd-container " + u + "\">";//Felix: Leerzeichen hinter id=\"pundit-tc-dnd-container
		c += "  <ul class=\"felix-spo-container \" id=\"subj-container\"><ul class=\"pundit-tc-dnd sub pundit-items pundit-small-items\" id=\"pundit-tc-s-" + u + "\">Subject</ul></ul>";
		c += "  <ul class=\"felix-spo-container \" id=\"pred-container\"><ul class=\"pundit-tc-dnd pre pundit-items pundit-small-items\" id=\"pundit-tc-p-" + u + "\">Predicate</ul></ul>";
		c += "  <ul class=\"felix-spo-container \" id=\"obj-container\"><ul class=\"pundit-tc-dnd obj pundit-items pundit-small-items\" id=\"pundit-tc-o-" + u + "\">Object</ul></ul>";
		c += "  <ul class=\"felix-spo-container \" id=\"save-container\"><ul id=\"felix-tc-save-button\" class=\"pundit-tc-dndButtons\"><span class=\"pundit-gui-button\" id=\"pundit-tc-save-button\">Save</span></ul>" +
		"<ul class=\"pundit-tc-dndButtons\" id=\"pundit-tc-sparql-button\"><span class=\"pundit-gui-button\" id=\"pundit-tc-sparql-button\">SPARQL</span></ul></ul>";
		c += "    <span id=\"punditRemoveTriple" + u + "\"><span class=\"pundit-remove-icon pundit-icon\"></span></span>";
		c += "  </div>";
		c += "</div>";
		dojo.query("#pundit-tc-triples-container .pundit-tc-dnd-container").removeClass("expanded").addClass("collapsed");
		if (!append) {
			dojo.query('#pundit-tc-triples-container').prepend(c);
		} else {
			dojo.query('#pundit-tc-triples-container').append(c);
		}

		// Initialize the DnD targets for this triple
		self.tripleDnD[u] = {};
		self.tripleDnD[u]['s'] = new dojo.dnd.Source("pundit-tc-s-" + u, {
			creator: semlibItems.itemNodeCreator,
			checkAcceptance: function (s, n) {
				return self.checkAcceptance(s, n, this);
			},
			onDndDrop: function (s, n, c, t) {
				if (this == t) {
					if (this.getAllNodes().length > 0) {
						this.clearItems();
						dojo.empty(dojo.byId('pundit-tc-s-' + u));
					}

					this.onDrop(s, n, c);
					self.subjSuggestionPanel.hide();
					self.propSuggestionPanel.hide();
					self.objSuggestionPanel.hide();
				}

				this.onDndCancel();
			},
			accept: ["subject", "object"] //edit IBR: War 'subject'. test, ob dadurch andere vokabulare im sugg-panel auftauchen. und um d&d von objekt nach subjekt zu erlauben.
		});
		self.tripleDnD[u]['p'] = new dojo.dnd.Source("pundit-tc-p-" + u, {
			creator: semlibItems.itemNodeCreator,
			checkAcceptance: function (s, n) {
				return self.checkAcceptance(s, n, this);
			},
			onDndDrop: function (s, n, c, t) {
				if (this == t) {
					if (this.getAllNodes().length > 0) {
						this.clearItems();
						dojo.empty(dojo.byId('pundit-tc-p-' + u));
					}

					this.onDrop(s, n, c);
					self.propSuggestionPanel.hide();
				}

				this.onDndCancel();
			},
			accept: ["predicate"]
		});
		self.tripleDnD[u]['o'] = new dojo.dnd.Source("pundit-tc-o-" + u, {
			creator: semlibItems.itemNodeCreator,
			checkAcceptance: function (s, n) {
				return self.checkAcceptance(s, n, this);
			},
			onDndDrop: function (s, n, c, t) {
				if (this == t) {
					if (this.getAllNodes().length > 0) {
						this.clearItems();
						dojo.empty(dojo.byId('pundit-tc-o-' + u));
					}

					this.onDrop(s, n, c);
					self.subjSuggestionPanel.hide();
					self.propSuggestionPanel.hide();
					self.objSuggestionPanel.hide();
				}

				this.onDndCancel();
			},
			accept: ["subject", "object"]
		});



		// DnD targets clicks highlights only suitable pundit items for the given box
		dojo.connect(dojo.byId("pundit-tc-s-" + u), 'onclick', function (e) {

			self.dndTargetsClickHandler(e, this, 's');
		});
		dojo.connect(dojo.byId("pundit-tc-p-" + u), 'onclick', function (e) {
			self.dndTargetsClickHandler(e, this, 'p');
		});
		dojo.connect(dojo.byId("pundit-tc-o-" + u), 'onclick', function (e) {
			self.dndTargetsClickHandler(e, this, 'o');
		});
		//edit IBR: Listener auf Save-Button. War ursprünglich nur beim Konstruktor (initBehaviors)) aufgerufen worden.=> todo: deswegen wird SaveTriples 2mal aufgerufen!
		this.initBehaviors();
		/*dojo.connect(dojo.byId('pundit-tc-save-button'), 'onclick', function () {
			_PUNDIT.ga.track('gui-button', 'click', '#pundit-tc-save-button');
			//dojo.query('#pundit-tc-container').addClass('pundit-panel-loading');
			self.saveTriples();
			//dojo.query('#pundit-tc-container').removeClass('pundit-panel-loading');//todo: Felix: Klasse hinzufügen und wieder wegnehmen mit Timeout??
		});

		//edit IBR //send current Graph Pattern in Triple Browser as
		dojo.connect(dojo.byId('pundit-tc-sparql-button'), 'onclick', function () {
			//_PUNDIT.ga.track('gui-button', 'click', '#pundit-tc-sparql-button');
			self.triple2Sparql();
		});//triple2Sparql*/

		return u;
	}, // addDnDTriple()

	/**
	 * @method removeTripleRow
	 * @description Removes an entire row from its ID
	 * @param row {string} Identifier of the row, taken from the HTML container or
	 * in the pundit data structures.
	 */
	removeTripleRow: function (row) {
		var self = this;

		self.log("Removing triple row " + row);
		self.tripleDnD[row]['s'].destroy();
		self.tripleDnD[row]['p'].destroy();
		self.tripleDnD[row]['o'].destroy();
		dojo.destroy('pundit-tc-dnd-container ' + row);
		delete self.tripleDnD[row];
	},

	/**
	 * @method clearDnDTriples
	 * @description Removes all of the pundit target rows, and adds a new empty one.
	 */
	clearDnDTriples: function () {
		var self = this;

		for (var row in self.tripleDnD)
			self.removeTripleRow(row);

		self.subjSuggestionPanel.hide();
		self.propSuggestionPanel.hide();
		self.objSuggestionPanel.hide();
		self.objSuggestionPanel.reset();

		self.addDnDTriple();
	},
	dndTargetsClickHandler: function (e, target, type) {
		var self = this,
				u = dojo.attr(target, 'id').substr(-5),
				position = dojo.position(target),
				y = position.y + position.h,
				x, title, arrow;

		self.currentDnd = self.tripleDnD[u][type];

		if (type === 'p') {
			x = (position.x + (position.w / 2)) - 200;
			title = 'Relations';
			arrow = 'center';
		} else if (type === 's') {
			x = position.x;
			title = 'Subjects';
			arrow = 'left';
		} else if (type === 'o') {
			x = (position.x + position.w) - 400;
			title = 'Objects';
			arrow = 'right';
		}

		if (type === 'p') {
			var ranges = [],
					domains = [];
			if (typeof self.tripleDnD[u]['s'].map !== 'undefined')
				for (var i in self.tripleDnD[u]['s'].map) {
					domains = self.tripleDnD[u]['s'].map[i].data.rdftype;
				}
			if (typeof self.tripleDnD[u]['o'].map !== 'undefined')
				for (var i in self.tripleDnD[u]['o'].map) {
					ranges = self.tripleDnD[u]['o'].map[i].data.rdftype;
				}
			//semlibResourcesPanel.showProperties(target, type, ranges, domains);
			var props = semlibItems.getProperties(ranges, domains);
			var propsObject = {
				properties: {
					label: 'Relations',
					items: props
				}
			}
			self.propSuggestionPanel.load(propsObject);
			self.propSuggestionPanel.show(x, y, {
				title: title,
				arrow: arrow
			});
			self.subjSuggestionPanel.hide();
			self.objSuggestionPanel.hide();

		} else if (type === 's') {
//edit IBR. Subjekt und Objektposition hier gleich
			var acceptedTypes = self.getAcceptedTypes(u, target);//todo: geometric_object hier entfernen
			var myitems = semlibMyItems.getItemsFromTerm('', acceptedTypes, [ns.geometric_object_class], ns.text_repository_title) ;//keine geometrien und keine items aus dem textrepositorium werden geladen.
			var displayedFeatures = keys(GV.setting.spatialstore.getSpatialcontext().getDisplayedFeatures());//todo Felix: Fall für leere Featuremenge abfangen
			var filteredGeometries = displayedFeatures.length == 0 ? [] : semlibMyItems.getItemsfromUris(displayedFeatures, [ns.geometric_object_class]);
			var geometries = semlibMyItems.getItemsFromTerm('', [ns.geometric_object_class]);
			var textrepository = semlibMyItems.getItemsFromTerm(ns.text_repository_title, [ns.page]);
			var itemsObject = {
				filteredgeometries: {
					label: 'Filtered Geometries',
					items: filteredGeometries
				},
				geometries: {
					label: 'All Geometries',//edit IBR
					items: geometries
				},
				textrepository: {
					label: 'Repository texts',//edit IBR
					items: textrepository
				}/*,edit ibr: disabled due to problems with the bookmarklet
				myitems: {
					label: 'My Items',
					items: myitems
				}*/
			}

			for (var v in _PUNDIT['vocab'].vocabs) {
				var vItems = _PUNDIT['vocab'].getItemsForTermInVocab('', v);//edit IBR: Taxonomien im Suggestion-Panel
				itemsObject[v] = {
					label: v,
					items: vItems
				}
			}

			self.subjSuggestionPanel.load(itemsObject);
			if (type === 'o') {
				if (acceptedTypes.length === 0) {
					self.subjSuggestionPanel.show(x, y, {
						title: title,
						arrow: arrow,
						literalMode: 'literalEnabled'
					});
				} else if (acceptedTypes[0] === ns.rdfs_literal) {

					self.subjSuggestionPanel.show(x, y, {
						title: title,
						arrow: arrow,
						literalMode: 'literalOnly'
					});

				} else {
					self.subjSuggestionPanel.show(x, y, {
						title: title,
						arrow: arrow
					});
				}
			} else {
				self.subjSuggestionPanel.show(x, y, {
					title: title,
					arrow: arrow
				});
			}

			self.propSuggestionPanel.hide();
			self.objSuggestionPanel.hide();

		} else if (type === 'o') {

//edit IBR. subject and object-positions almost identical
			var acceptedTypes = self.getAcceptedTypes(u, target);//todo: geometric_object hier entfernen
			var myitems = semlibMyItems.getItemsFromTerm('', acceptedTypes, [ns.geometric_object_class], ns.text_repository_title) ;//keine geometrien und keine items aus dem textrepositorium werden geladen.
			var displayedFeatures = keys(GV.setting.spatialstore.getSpatialcontext().getDisplayedFeatures());//todo Felix: Fall für leere Featuremenge abfangen
			var filteredGeometries = displayedFeatures.length == 0 ? [] : semlibMyItems.getItemsfromUris(displayedFeatures, [ns.geometric_object_class]);
			var geometries = semlibMyItems.getItemsFromTerm('', [ns.geometric_object_class]);
			var textrepository = semlibMyItems.getItemsFromTerm(ns.text_repository_title, [ns.page]);
			var itemsObject = {
				filteredgeometries: {
					label: 'Filtered Geometries',
					items: filteredGeometries
				},
				geometries: {
					label: 'Geometries',//edit IBR: hinzugefügt
					items: geometries
				},
				textrepository: {
					label: 'Repository texts',//edit IBR: hinzugefügt
					items: textrepository
				}/*,
				myitems: {
					label: 'My Items',
					items: myitems
				}*/
			}



			for (var v in _PUNDIT['vocab'].vocabs) {
				var vItems = _PUNDIT['vocab'].getItemsForTermInVocab('', v);//edit IBR: Taxonomien im Suggestion-Panel
				itemsObject[v] = {
					label: v,
					items: vItems
				}
			}

			self.objSuggestionPanel.load(itemsObject);
			if (type === 'o') {
				if (acceptedTypes.length === 0) {
					self.objSuggestionPanel.show(x, y, {
						title: title,
						arrow: arrow,
						literalMode: 'literalEnabled'
					});
				} else if (acceptedTypes[0] === ns.rdfs_literal) {

					// todo: how to check if the predicate needs a date or a pure
					// literal??
					var label = dojo.query('#pundit-tc-p-' + u + ' li span.pundit-item-label')[0]
							.innerHTML.toLowerCase();

					self.objSuggestionPanel.show(x, y, {
						title: title,
						arrow: arrow,
						literalMode: label.match(/date/) === null ? 'literalOnly' : 'dateOnly'
					});

				} else {
					self.objSuggestionPanel.show(x, y, {
						title: title,
						arrow: arrow
					});
				}
			} else {
				self.objSuggestionPanel.show(x, y, {
					title: title,
					arrow: arrow
				});
			}

			self.propSuggestionPanel.hide();
			self.subjSuggestionPanel.hide();

		}

		dojo.query('.pundit-tc-dnd-container ul').removeClass('dnd_selected');
		dojo.query(e.target).addClass('dnd_selected');

	}, // dndTargetsClickHandler

	highlightDnDTargetsReceivingNodes: function (source, nodes) {
		var self = this,
				bits = ['s', 'p', 'o'];

		dojo.query('.pundit-tc-dnd-container ul').removeClass('dnd_selected');

		// Foreach possible target: row * (sub, pred, ob), highlight
		// if it can receive these items
		for (var row in self.tripleDnD) {
			//for (var j in bits)
			for (var j = bits; j--;)
				if (self.checkAcceptance(source, nodes, self.tripleDnD[row][bits[j]]))
					dojo.addClass('pundit-tc-' + bits[j] + '-' + row, 'dnd_selected');
		}
	},

	addItem: function (item) {
		var self = this;
		var nodes = self.currentDnd.getAllNodes();
		if (nodes.length > 0) {
			self.currentDnd.clearItems();
			nodes.forEach(function (item) {
				dojo.destroy(item)
			})
		}
		self.currentDnd.insertNodes(false, [item]);
	},

	//nodesUri serve a qualcosa?
	checkAcceptance: function (source, nodes, target, nodesUri) {

		// forbid self drop
		if (target === source) {
			return false;
		}

		// Dragging a tree item uses a separate function
		if (typeof(source.semlibTree) !== 'undefined') {
			// Check item type vs target accept
			for (i = nodes.length - 1; i >= 0; i--) {
				var id = nodes[i].id,
						item = source.getItem(id),
						flag = false;

				if (typeof(item.data.item.type) !== 'undefined') {
					var type = item.data.item.type;
					for (j = type.length - 1; j >= 0; j--) {
						if (type[j] in target.accept) { //ok object
							flag = true;
							break;
						}
					}
					if (flag === false) return false;
				} else
					return false;
			}

			var u = target.parent.id.substr(-5),
					self = this,
					items = [],
					values = [];

			// Forbid two+ copies of the same item in a target
			//SIMONE DEBUG: This can be removed since now just only one item for container can be added
			target.forInItems(function (item) {
				values.push(item.data.value);
			});
			for (var i = nodes.length - 1; i >= 0; i--) {
				items[i] = source.getItem(nodes[i].id);
				if (values.length > 0 && dojo.indexOf(values, items[i].data.item.value) !== -1)
				//DEBUG this shuold be break if managing multiple items in drag and drop
					return false;
			}

			return self.rowAcceptItems(u, items, target);
		} // typeof(source.semlibTree) !== 'undefined'

		// Check item's types vs target's accept
		for (var i = nodes.length - 1; i >= 0; i--) {
			var type = source.getItem(nodes[i].id).type,
					uri = source.getItem(nodes[i].id).data.value,
					flag = false;

			for (var j = type.length - 1; j >= 0; j--) {
				if (type[j] in target.accept) {
					flag = true;
					break;
				}
			}
			if (flag === false) return false;
		}

		var u = target.parent.id.substr(-5),
				self = this,
				items = [],
				values = [];

		// Forbid two+ copies of the same item in a target
		target.forInItems(function (item) {
			values.push(item.data.value);
		});
		for (var i = nodes.length - 1; i >= 0; i--) {
			items[i] = source.getItem(nodes[i].id);
			if (values.length > 0 && dojo.indexOf(values, items[i].data.value) !== -1)
				return false;
		}

		return self.rowAcceptItems(u, items, target);

	}, // checkAcceptance()

	rowAcceptItems: function (row, item, target) {

		var self = this,
		//targetType = target.parent.id.substr(6,1);
				targetType = target.parent.id.substr(10, 1);

		//TODO Currently use a cloned version of the array to cope with
		//the different structure of the tree items changing it on the fly
		//Clone the array
		var items = item.slice(0);

		//If the item is a tree cope with the different data model
		if (typeof(items[0].data.type) === 'undefined') {
			//for (var j in items){
			for (var j = items.length; j--;) {
				items[j].data = items[j].data.item;
			}
		}

		if (targetType === 's') {

			// Get all the common domains of the predicates in the given row
			var domains, allDomains = [];
			self.tripleDnD[row]['p'].forInItems(function (item) {
				// If this predicate domain is empty, dont add an empty array
				if (item.data.domain.length > 0)
					allDomains.push(item.data.domain);
			});
			domains = self._intersection(allDomains);

			// No domains > no predicates > all is good
			if (domains.length === 0) {
				// Domains intersection empty??! Something is wrong
				if (allDomains.length !== 0) {
					self.log("Error in the predicate? No possible domains found!");
					return false;
				}
				// No domains:
				// - no predicates > all is good
				// - predicates with domain empty > all is good
				return true;
			} else {

				var rdftypes = [];
				for (var i = items.length - 1; i >= 0; i--)
					rdftypes.push(items[i].data.rdftype);
				rdftypes = self._intersection(rdftypes);

				if (self._intersection([rdftypes, domains]).length === 0)
					return false;
				else
					return true;

			}

		} else if (targetType === 'o') {

			// Get all the common ranges of the predicates in the given row
			var ranges, allRanges = [];
			self.tripleDnD[row]['p'].forInItems(function (item) {
				// If this predicate range is empty, dont add an empty array
				if (item.data.range.length > 0)
					allRanges.push(item.data.range);
			});
			ranges = self._intersection(allRanges);

			if (ranges.length === 0) {
				// Ranges intersection empty??! Something is wrong
				if (allRanges.length !== 0) {
					self.log("Error in the predicate? No possible ranges found!");
					return false;
				}
				// No ranges:
				// - no predicates > all is good
				// - predicates with range empty > all is good
				return true;
			} else {

				var rdftypes = [];
				for (var i = items.length - 1; i >= 0; i--)
					rdftypes.push(items[i].data.rdftype);
				rdftypes = self._intersection(rdftypes);

				if (self._intersection([rdftypes, ranges]).length === 0)
					return false;
				else
					return true;
			}

		} else if (targetType === 'p') {

			var suTypes = [], suL, suNum = 0,
					obTypes = [], obL, obNum = 0,
					obLiteral = false;

			self.tripleDnD[row]['s'].forInItems(function (item) {
				suNum++;
				// If this item rdftype is empty, dont add an empty array: LITERAL!
				if (item.data.rdftype.length > 0)
					suTypes.push(item.data.rdftype);
			});
			self.tripleDnD[row]['o'].forInItems(function (item) {
				obNum++;
				// If this item rdftype is empty, dont add an empty array: LITERAL!
				//DEBUG You are not hanldying the case in which you don't have an object!
				if (item.data.rdftype.length === 0)
					obLiteral = true;
				if (item.data.rdftype.length > 0)
					obTypes.push(item.data.rdftype);
			});

			obL = obTypes.length;
			suL = suTypes.length;
			suTypes = self._intersection(suTypes);
			obTypes = self._intersection(obTypes);

			if (obL + suL > 0) {

				if (suTypes.length === 0 && suL > 0) {
					self.log("Subjects types intersection is empty!! Error in the subject panel.")
					return;
				}
				if (obTypes.length === 0 && obL > 0) {
					self.log("Objects type intersection is empty!! Error in the object panel.")
					return;
				}

				var domains = [], ranges = [];
				for (var i = items.length - 1; i >= 0; i--) {
					if (items[i].data.domain.length > 0)
						domains.push(items[i].data.domain);
					if (items[i].data.range.length > 0)
						ranges.push(items[i].data.range);
				}

				domains = self._intersection(domains);
				ranges = self._intersection(ranges);

				// If there's subject types to check and they dont intersect items'
				// domains.. we cant accept them
				if (suL > 0 && domains.length > 0 && self._intersection([domains, suTypes]).length === 0)
					return false;

				// If there's object types to check and they dont intersect items'
				// ranges.. we cant accept them
				if (obL > 0 && ranges.length > 0 && self._intersection([ranges, obTypes]).length === 0)
					return false;

				//DEBUG Some problem with this!
				//obL can be 0 also when no object is added
				// No object types (it's a literal!!), but the predicate has ranges: refuse it
				//if (obL === 0 && ranges.length > 0)
				//    return false;
				if (obLiteral === true && ranges.length > 0)
					return false;

				// We reached this point if one of the predicates range/domain
				// were empty.. (ranges.length > 0)
				self.log("Items passed matches domains '" + domains.join(', ') + "' and ranges '" + ranges.join(', ') + "'");
				return true;
			} else {

				// Subject and object with no types at all: could be a literal!
				// .. or they could be empty.
				var ranges = [];
				for (var i = items.length - 1; i >= 0; i--)
					if (items[i].data.range.length > 0)
						ranges.push(items[i].data.range);
				ranges = self._intersection(ranges);

				if (obNum + suNum === 0) {
					self.log('Items passing test: no items in subject nor object containers!');
					return true;
				}

				// object and subject types are both empty .. might be a literal? Yay..
				if (ranges.length === 0 && obTypes.length === 0) {
					self.log('Items passing test: empty ranges .. Found a literal?')
					return true;
				}

			}

		} // targetType = P

		return false;
	}, // rowAcceptItems

	//TODO It would be so nice to have an Helper to provide functions like this to reuse in other components!!!
	// Given an array of arrays a=[A=[..],B=[..],C=[..],..]
	// will return an array with the items found in all of the
	// children array A, B, C..
	_intersection: function (a) {
		if (a.length === 0)
			return [];

		// There's only 1 array
		if (a.length === 1)
			return a[0];

		var ret = [], val, foo;
		// For each element of the first array, check if there's
		// the same value in all of the other arrays ..
		for (var i = a[0].length - 1; i >= 0; i--) {
			val = a[0][i];
			foo = true;

			for (var j = a.length - 1; j > 0; j--)
				if (dojo.indexOf(a[j], val) === -1)
					foo = false;

			if (foo) ret.push(val);
		}
		;
		return ret;

	}, // _intersection

	//Return the accepted type by a certain dndtriple container
	//Return the array
	//Empty array if no restriction
	getAcceptedTypes: function (row, target) {
		var self = this,
				acceptedTypes = [],
				domains, allDomains = [],
				targetType = target.id.substr(10, 1);

		if (targetType === 's') {

			/*edit Felix: allow geometries in the TripleComposer */
			return [ns.fragments.text, ns.fragments.image, ns.image, ns.page, ns.pundit_VocabCategory];//edit IBR: nur die Typen, die nicht schon in anderen Kategorien vorkommen.
		}
		if (targetType === 'p') {
			// Felix: hier müsste doch ns.property hin.
		}
		if (targetType === 'o') {
			// Get all the common ranges of the predicates in the given row
/*			var ranges, allRanges = [ns.fragments.text, ns.fragments.image, ns.image, ns.page, ns.pundit_VocabCategory];
			if (self.tripleDnD[row]['p']._lastX==0&&self.tripleDnD[row]['p']._lastY==0){//edit IBR ASSERT: Prädikat ist leer, keine Einschränkung von Prädikaten.
				return [ns.fragments.text, ns.fragments.image, ns.image, ns.page, ns.pundit_VocabCategory];
			}
			self.tripleDnD[row]['p'].forInItems(function (item) {
				// I f this predicate range is empty, don't add an empty array
				if (item.data.range.length > 0){

					allRanges.push(item.data.range);}
				else {//edit IBR: interpretiere leere Range als Wildcard
					return [ns.fragments.text, ns.fragments.image, ns.image, ns.page, ns.pundit_VocabCategory];//edit IBR: nur die Typen, die nicht schon in anderen Kategorien vorkommen.
				}
			});
			return self._intersection(allRanges);*/
			//edit IBR: Beschränkung möglicher prädikate deaktiviert
						return [ns.fragments.text, ns.fragments.image, ns.image, ns.page, ns.pundit_VocabCategory];//edit IBR: nur die Typen, die nicht schon in anderen Kategorien vorkommen.

		}

	},

	/**
	 * Deselects any selected item in every target of every
	 * row currently present in TripleComposer
	 * @method resetSelections
	 */
	resetSelections: function () {
		var self = this;

		for (var i in self.tripleDnD) {
			self.tripleDnD[i]['s'].selectNone();
			self.tripleDnD[i]['p'].selectNone();
			self.tripleDnD[i]['o'].selectNone();
		}
	}, // resetSelections()

	/**
	 * Gets a safe page context, stripping out pundit-related
	 * query parameters
	 * @method getSafePageContext
	 */
	getSafePageContext: function () {
		var self = this,
				uri = window.location.href,
				fragment, query, queryObject, ret;

		// If there's a fragment, save it and remove it from the uri
		if (uri.indexOf("#") !== -1) {
			fragment = uri.substring(uri.indexOf("#") + 1, uri.length);
			uri = uri.substring(0, uri.indexOf("#"));
		}

		// If there's a query, decode it and remove it from the uri
		if (uri.indexOf("?") !== -1) {
			query = uri.substring(uri.indexOf("?") + 1, uri.length);
			uri = uri.substring(0, uri.indexOf("?"));

			queryObject = dojo.queryToObject(query);
			delete queryObject['pundit-show'];
			query = dojo.objectToQuery(queryObject);
		}

		// Build back the URI
		if (query) uri += '?' + query;
		if (fragment) uri += '#' + fragment;

		return uri;
	},

	/**
	 * Gets a query parameters object, stripping out the fragment
	 * (#...) if present
	 * @method getQueryParametersObject
	 */
	getQueryParametersObject: function () {
		var uri = window.location.href,
				query;

		// If there's a fragment, save it and remove it from the uri
		if (uri.indexOf("#") !== -1)
			uri = uri.substring(0, uri.indexOf("#"));

		query = uri.substring(uri.indexOf("?") + 1, uri.length);

		return dojo.queryToObject(query);
	},

	/**
	 * Saves to the pundit server the current composed triples.
	 * @method saveTriples
	 */

	saveTriples: function () {

		var self = this,
				targets = [],
				annotationPageContext = self.getSafePageContext(),//todo Felix: kann von der URL der Web-Anwendung (abzulegen in NamespaceHelper) abgeleitet werden
				b = new pundit.TriplesBucket();

		var oldRow = "";
		for (var row in self.tripleDnD) {
			var s = [], p = [], o = [];
			oldRow = row;//Felix: Bugfix für doppelte Row nach Speichern, die unten in dieser Methode gelöscht wird (dojo.destroy)
			/*todo: die variable wird erst neu gesetzt, wenn nach kollektivem dnditem ein einfaches auf die subjektstelle gesetzt wird. wenn es aber möglich sein soll, von subjekt- auf objekt-stelle
			 zu wechseln, wird das
			  */

			if (this.collectiveGeoObj) {//edit IBR: Hinzufügung kollektiver Objekte aus Features
				for (var i = 0; i < _PUNDIT.tripleComposer.collectiveObjIDs.length; i++) {
					var itemObj = semlibMyItems.getItemFromUri(_PUNDIT.tripleComposer.collectiveObjIDs[i]);//bsp 'http://ibr.spatialhumanities.de/ibr/rest/oberwesel/features/1128'
					var sItem = createGeoItemFromURI(_PUNDIT.tripleComposer.collectiveObjIDs[i], itemObj.image, itemObj.label, ns.geometric_object_description);
					s.push({data: sItem});
				}

				self.tripleDnD[row]['p'].forInItems(function (pItem) {
					for (var i = 0; i < _PUNDIT.tripleComposer.collectiveObjIDs.length; i++) {
						p.push(pItem);
					}
				});
				self.tripleDnD[row]['o'].forInItems(function (oItem) {
					for (var i = 0; i < _PUNDIT.tripleComposer.collectiveObjIDs.length; i++) {
						o.push(oItem);
					}
				});

			} else {
				self.tripleDnD[row]['s'].forInItems(function (item) {
					s.push(item);
				});
				self.tripleDnD[row]['p'].forInItems(function (item) {
					p.push(item);
				});
				self.tripleDnD[row]['o'].forInItems(function (item) {
					o.push(item);
				});
			}

			// Skip the row if there's no sub/pred or obj
			if ((typeof(s) === 'undefined') || (typeof(p) === 'undefined') || (typeof(o) === 'undefined'))
				break;
			// Add the triples to the bucket
			for (var i = s.length; i--;) {

				var ob_type,
						sd = s[i].data, sv = sd.value,
						pd = p[i].data, pv = pd.value,
						od = o[i].data, ov = od.value;

				// If type array contains only 'object' AND
				// there's no rdftype or the only type is rdfs_literal .. then
				// it is a literal.
				if (o[i].data.type[0] === 'object' && (o[i].data.rdftype.length === 0 || o[i].data.rdftype[0] === ns.rdfs_literal))
					ob_type = 'literal';
				else
					ob_type = 'uri';
//todo Felix: Alle Abfragen zu Text- und Bildmarkierungen löschen.
				// Add the triple
				b.addTriple(sv, pv, ov, ob_type);

			} // for i

			self.log('Added TripleComposer row ' + row + ' to save bucket');
		}

		if (b.isEmpty()) {
			self.log("Cannot save an incomplete annotation");
			dojo.query('#pundit-tc-container').removeClass('pundit-panel-loading');
			return;
		}

		// isEditing is set by the tooltipAnnotationViewer with the id
		// of the annotation. Delete the original annotation, and hope the new
		// one gets saved correctly!
		if (self.isEditing) {
			self.saver.deleteAnnotation(self.isEditing, function () {
				self.log('Deleted annotation ' + self.isEditing);
				semlibWindow.destroyPanelById(self.isEditing);
				self.isEditing = false;
				dojo.query('#pundit-tc-container').removeClass("pundit-edit-mode");
			});
		}

		self.log('Saving current: ' + dojo.toJson(b.getTalisJson()));
		self.saver.writeAnnotationContent(b, targets, annotationPageContext);

	}, // saveTriples()

	//edit IBR: SPARQL-Anfragen aus dem TripleComposer
	triple2Sparql: function () {

		var self = this,
				targets = [];


		var row="";
		for (var r in self.tripleDnD){
			row=r;
		}
		var s = [], p = [], o = [];

			//todo: statt collective-Abfrage: hier am besten den Typ des dnd-Items selbst prüfen, und dann erst in die Schleife.
		//Die Variable collectiveGeoObj wird neu gesetzt , wenn ein neues dnd-items an die stelle gesetzt wird. bleibt die stelle leer, bleibt aber auch die variable auf true. daher muss
		//hier direkt der inhalt der subjekt-slots abgefragt werden, nicht die variable collectiveGeoObj wie bei saveitems.
		var collectiveObjSize=1;//zahl der uris in einem dnditem im triplebrowser
		var sEmpty,oEmpty,pEmpty=false;
		//prüfen, ob an Subjekt- oder Objektstelle ein kollektives Objekt ist

		//subjektposition prüfen
		if (first(tripleComposer.tripleDnD[row].s.map)==undefined){
			sEmpty=true;
			s[0]='?s';
		}
		else if (first(tripleComposer.tripleDnD[row].s.map).data.label==_PUNDIT.ns.current_geo_collection){//ASSERT: Kollektives GeoObjekt an Subj-Position
			s=first(tripleComposer.tripleDnD[row].s.map).data.value.split(",");
			//todo: s. currentFeaturesToTripleBrowser. Typbezeichnung in URL wird dort gesetzt.
			s[0]=(s[0].replace("http://ibr.spatialhumanities.de/geometries/collectiveGeoObj/","")).trim();
			sEmpty=false;
			collectiveObjSize= s.length;//ASSERT: es gibt ein koll obj. entweder an s oder an o position.
		} else {//ein einzelnes Objekt an Subjektposition
			s[0]='<'+first(tripleComposer.tripleDnD[row].s.map).data.value.trim()+'>';
			sEmpty=false;
		}
			//Objektposition prüfen
		if (first(tripleComposer.tripleDnD[row].o.map)==undefined){
			oEmpty=true;
			o[0]='?o';
		} else if (first(tripleComposer.tripleDnD[row].o.map).data.label==_PUNDIT.ns.current_geo_collection){//ASSERT: Kollektives GeoObjekt an Obj-Position
			o=first(tripleComposer.tripleDnD[row].o.map).data.value.split(",");
			collectiveObjSize= o.length;
/*			self.tripleDnD[row]['s'].forInItems(function (oItem) {//ASSERT: keine exception, wenn leer.
					for (var i = 0; i < collectiveObjSize; i++) {
						s.push(sItem.data.value);//todo: methode, um ein array ganz mit einem wert zu füllen?
					}
				});*/
		} else {
			o[0]='<'+(first(tripleComposer.tripleDnD[row].o.map).data.value).trim()+'>';
		}

		//prädikatsposition prüfen
		if (first(tripleComposer.tripleDnD[row].p.map)==undefined){
			pEmpty=true;
			p[0]='?p';
		} else {
			p[0]='<'+(first(tripleComposer.tripleDnD[row].p.map).data.value).trim()+'>';
		}

//ASSERT: Länge des größten dndItems steht fest, sowie Zahl aller SPO-Slots

//construct the actual query
			var querystart="select * where{";
			var queryend="}";
			var query=querystart;
			for (var i = 0; i<collectiveObjSize; i++) {
				var sParam=sEmpty? (s[0]+i).trim():(s[0]).trim();//Variablen für SPO-Stellen werden mit Laufvariable versehen, damit die einzelnen Graphmuster nicht durch gleiche Variablen korreliert sind.
				var pParam=pEmpty? (p[0]+i).trim():(p[0]).trim();//Werte werden eingesetzt, wenn der entsprechende Slot entweder leer ist oder ein einzelnes Objekt (kein Kollektiv-Objekt) hat.
				var oParam=oEmpty? (o[0]+i).trim():(o[0]).trim();//todo: trim kann weg.
				if (i>0)query+=" UNION ";

				if(s.length<collectiveObjSize){//ASSERT: Es gibt ein kollektives GeoObjekt und es ist nicht das nicht das Subjekt, sondern das Objekt
					query+="{"+sParam+" "+pParam+" <"+(o[i]).trim()+">}";
				} else if(o.length<collectiveObjSize){//ASSERT: Es gibt ein kollektives GeoObjekt und es ist nicht das Objekt, sondern das Subjekt
					query+="{<"+(s[i]).trim()+"> "+pParam+" "+oParam+"}";
				}
				else {//ASSERT: Es gibt KEIN kollektives GeoObjekt. Alle Literale für die query befinden sich in den spo Arrays.
					query+="{"+sParam+" "+pParam+" "+oParam+"}";//beinhaltet auch query ?s ?p ?o
				}
			} // for i
			query+=queryend;

			//query absenden
			IO.sparql(query,GV.Filter.addSparql);
			//todo: hier variablen neu setzen

	}, // triple2Sparql()

	/**
	 * Saves to the pundit server the current composed triples.
	 * @method saveTriples  //Felix ??? Warum steht (standen) hier die gleichen Code-Zeilen wie bei saveTriples, warum ist die Javadoc-Annotation die gleiche?
	 */
	saveItems: function (annotationID) {
		var self = this,
				b = new pundit.TriplesBucket(),
				dndItems = [];
		for (var row in self.tripleDnD) {
			var s = [], p = [], o = [];

			if (this.collectiveGeoObj) {//edit IBR: Hinzufügung kollektiver Objekte aus Features

				for (var i = 0; i < _PUNDIT.tripleComposer.collectiveObjIDs.length; i++) {
					var itemObj = semlibMyItems.getItemFromUri(_PUNDIT.tripleComposer.collectiveObjIDs[i]); //Bsp. 'http://ibr.spatialhumanities.de/ibr/rest/oberwesel/features/1128'

					var sItem =createGeoItemFromURI(_PUNDIT.tripleComposer.collectiveObjIDs[i], itemObj.image, itemObj.label, ns.geometric_object_description);
					s.push({data: sItem});
				}

				self.tripleDnD[row]['p'].forInItems(function (pItem) {
					for (var i = 0; i < _PUNDIT.tripleComposer.collectiveObjIDs.length; i++) {
						p.push(pItem);
					}
				});
				self.tripleDnD[row]['o'].forInItems(function (oItem) {
					for (var i = 0; i < _PUNDIT.tripleComposer.collectiveObjIDs.length; i++) {
						o.push(oItem);
					}
				});

			} else {
				self.tripleDnD[row]['s'].forInItems(function (item) {
					s.push(item);
				});
				self.tripleDnD[row]['p'].forInItems(function (item) {
					p.push(item);
				});
				self.tripleDnD[row]['o'].forInItems(function (item) {
					o.push(item);
				});
			}

			// Skip the row if there's no sub/pred or obj
			if (s.length === 0 || p.length === 0 || o.length === 0) {
				self.log('No items to save in row ' + row + ': skipping it.');
				break;
			}

			dndItems = dndItems.concat(s).concat(p).concat(o);

		} // for row in tripleDnD

		// Get the bucket out of the DnD item
		for (var i = dndItems.length; i--;)
			b.concatBucket(dndItems[i].data.rdfData);

		if (!b.isEmpty()) {
			self.log('Posting ' + dndItems.length + ' items with ' + b.bucket.length + ' triples..');
			self.saver.writeAnnotationItems(annotationID, dojo.toJson(b.getTalisJson()));
		} else {
			self.log('saveItems with an empty bucket??!');
		}
		this.collectiveGeoObj = false;//edit IBR
		this.collectiveObjIDs = [];//todo: sollte eigentlich in die Fallabfrage für Kollektionen oben.

	}, // saveItems()

	itemExists: function (myitem) {
		var exist = false;
		self.itemsDnD.forInItems(function (item) {
			if (item.data.value == myitem.value) {
				exist = true;
				return;
			}
		});
		return exist;
	},

	tripleExists: function (mytriple) {
		var exist = false,
				keys = [];
		for (var i in self.tripleDnD) {
			keys.push(i);
		}
		//for (var j in keys){
		for (var j = keys.length; j--;) {
			if (typeof(self.tripleDnD) !== 'undefined' && (keys.length > 0)) {
				if ((typeof(self.tripleDnD[keys[j]]['s']) !== "undefined") && (typeof(self.tripleDnD[keys[j]]['p']) !== "undefined") && (typeof(self.tripleDnD[keys[j]]['o']) !== "undefined")) {
					if ((self.itemInDnDContainer(self.tripleDnD[keys[j]]['s'], mytriple['s'])) && (self.itemInDnDContainer(self.tripleDnD[keys[j]]['p'], mytriple['p'])) && (self.itemInDnDContainer(self.tripleDnD[keys[j]]['o'], mytriple['o']))) {
						exist = true;
						return exist;
					}
				}
			}
		}
		return exist;
	},

	// Some Helper to deal with the DnD objects
	itemInDnDContainer: function (container, item) {
		var exist = false,
				myItem = item;
		container.forInItems(function (cItem) {
			//DEBUG For the item in the store I don't have the data field
			//to reduce amount of stored information. SHould be added in any
			//case to be used also in other scenarios?
			//DEBUG I consider only one item in every triple
			for (var i in myItem) {
				if (cItem.data.value == myItem[i].value) {
					exist = true;
				}
			}
		});

		return exist;
	},
//Felix: Muss aufgerufen werden, wenn im "Zeichnen"-Tab eine Geometrie markiert wird.
	// Adds an item to the first dnd row, deleting all of the present items,
	// if there's any

	addItemToSubject: function (itemData) {
		var self = this,
				selDnd = dojo.query('#subj-container .sub')[0],
				completeId = dojo.attr(selDnd, 'id'),
				item = {data: itemData},
				id = completeId.substring(12);

		var nodes = self.tripleDnD[id].s.getAllNodes();
		if (nodes.length > 0) {
			self.tripleDnD[id].s.clearItems();
			nodes.forEach(function (item) {
				dojo.destroy(item)
			});
		}

		if (self.tripleDnD[id].s.getAllNodes().length === 0) {
			if (self.rowAcceptItems(id, [item], self.tripleDnD[id].s)) {
				self.tripleDnD[id].s.insertNodes(false, [itemData]);
				dojo.behavior.apply();
			}
		}

	},

	addItemToObject: function (itemData) {
		var self = this,
				selDnd = dojo.query('#obj-container .obj')[0],
				completeId = dojo.attr(selDnd, 'id'),
				item = {data: itemData},
				id = completeId.substring(12);
		if (self.tripleDnD[id].o.getAllNodes().length === 0) {
			if (self.rowAcceptItems(id, [item], self.tripleDnD[id].o)) {
				self.tripleDnD[id].o.insertNodes(false, [itemData]);
				dojo.behavior.apply();
			}
		}
	},

	addItemToPredicate: function (itemData) {
		var self = this,
				selDnd = dojo.query('#pred-container .pre')[0],
				completeId = dojo.attr(selDnd, 'id'),
				item = {data: itemData},
				id = completeId.substring(12);
		if (self.tripleDnD[id].p.getAllNodes().length === 0) {
			if (self.rowAcceptItems(id, [item], self.tripleDnD[id].p)) {
				self.tripleDnD[id].p.insertNodes(false, [itemData]);
				dojo.behavior.apply();
			}
		}
	},

	getNumberOfTriples: function () {
		var self = this,
				ret = 0;
		for (var t in self.tripleDnD)
			ret++;
		return ret;
	},

	checkNeedToHideResourcePanel: function (semlibWindowHeight) {
		var self = this;

		if (self.subjSuggestionPanel.isVisible()) {
			if (self.subjSuggestionPanel.getPosition().y > semlibWindowHeight + 15) {
				self.subjSuggestionPanel.hide();
			}
		}

		if (self.propSuggestionPanel.isVisible()) {
			if (self.propSuggestionPanel.getPosition().y > semlibWindowHeight + 15) {
				self.propSuggestionPanel.hide();
			}
		}
		if (self.objSuggestionPanel.isVisible()) {
			if (self.objSuggestionPanel.getPosition().y > semlibWindowHeight + 15) {
				self.objSuggestionPanel.hide();
			}
		}
	}// checkNeedToHideResourcePanel

});