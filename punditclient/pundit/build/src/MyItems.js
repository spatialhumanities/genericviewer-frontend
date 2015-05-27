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
dojo.provide("pundit.MyItems");
dojo.declare("pundit.MyItems", pundit.Items, {

	constructor: function () {
		var self = this;

		self.name = 'my-items';

		self.init(self.name);
		self.initContextualMenu();

		self.newAddedItems = [];
		self.createCallback(['myItemAdded']);

		// Id of the init job
		self.loadJobId = _PUNDIT.init.waitBeforeInit();

		// Id of the loading box jobs for read and write
		self.readJobId = null;
		self.writeJobId = null;

		self.store = new pundit.RemoteStorageHandler({debug: self.opts.debug});
		self.store.onStoreRead(function (favoriteItems) {
			if (favoriteItems.length === 0) {
				//check for datatypes of empty favorite items:

				self.log('no favorites or geometric data written so far: initializing');//client-side initalization only necessary for keys "favorites" and "preferences"
				//self.resetFavoriteItems();//edit Felix: Reset löscht alle items. nicht nötig.
				favoriteItems = {value: []};
			}


			for (var i = favoriteItems.value.length; i--;) {
				var item = favoriteItems.value[i];

				// Add the item
				if (!self.uriInItems(item.value)) {
					previewer.buildPreviewForItem(item);

					self.addItem(item);
				}

			} // for i in favoriteItems.value

			dojo.behavior.apply();

			// First time we execute this: call the doneBeforeInit command
			if (self.loadJobId) {
				_PUNDIT.init.doneBeforeInit(self.loadJobId);
				self.loxadJobId = null;
			}
			_PUNDIT.loadingBox.setJobOk(self.ddJobId);

		});

		// Start loading favorite items straight away
		self.loadMyItems();

		self.store.onStoreError(function () {
			console.log('TODO: store is not available');
			if (self.loadJobId) {
				_PUNDIT.init.doneBeforeInit(self.loadJobId);
				self.loadJobId = null;
			}
		});

		// DEBUG TODO: marco wtf is this?!!
		_PUNDIT.init.onInitDone(function () {

			// On pundit item remove, save the favorite items: a fav item
			// could have been removed.
			self.onItemRemoved(function (removedGeoURIs) {//edit IBR: removedGeoURIs is the array of delta data, i.e the data to be deleted.
			removedGeoURIs=removedGeoURIs.replace('"','');
				self.saveFavoriteItems(removedGeoURIs,"deletion");
			});

			self.onItemAdded(function (addedItems) {
				self.saveFavoriteItems(addedItems,"addition");
			});
		});

	},

	addItem: function (item, userAdded) {//edit IBR: additional case GeoItem //ASSERT: is a geometry. only geometries can be save in the GenericViewer.
		this.inherited(arguments);

		if (userAdded && !this.isMyItemTabVisible()) {
			var self = this;
			self.newAddedItems.push(item.value);
			self.fireOnMyItemAdded(self.newAddedItems,"addition");
		}
	},

	isFavoriteFromUri: function (uri) {
		var self = this,
				ret = false;

		self.itemsDnD.forInItems(function (item) {
			if (item.data.value === uri && item.data.favorite === true)
				ret = true;
		});
		return ret;
	},

	// TODO: this will be replaced when my items will be just another
	// korbo vocabulary, after korbo ACL + auth + sso
	resetFavoriteItems: function (datakey) {//not needed anymore
		var self = this;
		//if (datakey==)
		//self.store.save('geometries', [], []);
		//self.store.save('favorites', [], []);//favorites
	},


	//for deletions, data is an comma-separated string of URIs. For addition, its an json-array of complete geo-data-sets
	saveFavoriteItems: function (data, opcode) {//edit IBR ASSERT: Nur Geometrien werden im GenericViewer gespeichert. removedGEoURIs für den Fall, dass Geom gelöscht wurden

		var self = this,
				favoriteItems = [];

		self.itemsDnD.forInItems(function (item) {

			if (item.data.geometry == true) {//data sanity check

				favoriteItems.push(item.data);
			}

		});
			self.store.save('geometries', data, opcode);

	},



	// TODO: this will be replaced when my items will be just another
	// korbo vocabulary, after korbo ACL + auth + sso
	loadMyItems: function () {
		var self = this;

		self.readJobId = _PUNDIT.loadingBox.addJob('Reading your items');
		//echo("store favorites");
		self.store.read('favorites');//Frage zum debuggen: was wird hier gelesen? warum ist das leer ??
		//WINDOW.setTimeout("","");//Synchronisierung abwarten => OD
				//echo("store geometries");

		self.store.read('geometries');//edit IBR//todo: lädt er beide Items, und Geometrien?
	},

	initContextualMenu: function () {
		var self = this;
		this.inherited(arguments);

	},

	zoomURLXPointer: function () {
		// If it's already loaded, dont do anything
		var self = this;

		if (self.loaded) {
			return;
		}

		// If the whole URL in the browser's location input does not
		// contain a #, dont do anything
		var pageLocation = decodeURIComponent(_PUNDIT.tripleComposer.getSafePageContext());
		if (pageLocation.indexOf('#') === -1)
			return;

		// If the URL part after the # contains an @about, it is an xpointer which
		// points to a thc content
		var fragment = pageLocation.split('#')[1];
		if (fragment.indexOf("@about=") === -1)
			return;

		var thcUri;

		semlibMyItems.itemsDnD.forInItems(function (item) {
			if (item.data.value.indexOf('#') !== -1 && item.data.value.split('#')[1] === fragment)
				thcUri = item.data.value;
		});

		if (typeof(thcUri) !== 'undefined') {
			semlibItems.itemsDnD.forInItems(function (item) {
				if (item.data.value.indexOf('#') !== -1 && item.data.value.split('#')[1] === fragment)
					thcUri = item.data.value;
			});
		}

		// If exist zoom it
		if (typeof(thcUri) !== 'undefined') {
			//tooltip_viewer.zoomOnXpointer(thcUri);
			self.loaded = true;
		} else {
			var path = new RegExp("@about='.+?'");
			//Otherwise create the fragment and zoom it
			if (path.test(fragment)) {
				//tooltip_viewer.zoomOnXpointer(thcUri);
			}
			self.loaded = true;
		}
	},

	isMyItemTabVisible: function () {

		return (dojo.hasClass('pundit-gui', 'pundit-shown') && dojo.hasClass('pundit-tab-my-items', 'pundit-selected'));
	},

	emptyNewMyItems: function () {
		var self = this;
		self.newAddedItems = [];
	}

});