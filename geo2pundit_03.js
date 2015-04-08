/*Temporär für die Verwendung im neuen GenericViewer*/
/**
 * Created by felixlange,
 * Akademie der Wissenschaften und der Literatur | Mainz,
 * on 19.12.13.
 */


function loadPundit() {
	var baseURL = "/viewer/punditclient/pundit/build/";// : //"http://adwserv58.adwudlit.uni-mainz.de/pundit-client-sources/pundit/build/";
	var h = document.getElementsByTagName('head')[0];
	var l = document.createElement('link');
	l.rel = 'stylesheet';
	l.href = 'pundit.css';
	l.type = 'text/css';
	l.media = 'screen';
	l.charset = 'utf-8';
	l.async = false;
	h.appendChild(l);
	$.getScript(baseURL+"dojo/dojo/dojo.js.uncompressed.js", function (data, textStatus, jqxhr) {
		console.log(textStatus); // Success
		console.log(jqxhr.status); // 200
		console.log("Load was performed.");
		dojo.registerModulePath("dojo", baseURL + "/dojo/dojo");
		dojo.registerModulePath("dijit", baseURL + "/dojo/dijit");
		dojo.registerModulePath("dojox", baseURL + "/dojo/dojox");
		dojo.registerModulePath("pundit", baseURL + "src");
		dojo.require("pundit.Init");
	});

}

function geo2pundit(geometryURI, picURL, label, description) {
	geometryURI = undefined ? "http://s.spatialhumanities.de/oberwesel/features/noID" : geometryURI;
	picURL = undefined ? "http://www.spatialhumanities.de/fileadmin/bookmarklet/wandbild_ow_fx_1.png" : geometryURI+'.png';
	description = "A 3D Geometric Object from a Point Cloud, identified in the GenericViewer Web Application (IBR)";
	//label = "3D Geometry No. " + geometryURI.substr(geometryURI.length - 3, geometryURI.length - 1); // TODO: flexibler
	/*alternative Implementierung POST und Aktualisierung im Frontend integriert. wie bei PageHandler.js:83. vorher an dieser stelle: getFavs*/
	var item = createGeoItemFromURI(geometryURI, picURL, label, description);
	previewer.buildPreviewForItem(item);
	/*TODO: hat item das richtige Format?*/
	semlibMyItems.addItem(item, true);//alternative: zu semlibitems hinzufügen??
	tripleComposer.addItemToSubject(item);
	tripleComposer.subjSuggestionPanel.hide();
	/*POST zum Triple Store. wird wohl schon von den an;deren Methoden erledigt.    TODO: hier wird das json-objekt ein zweites mal erstellt*/
	// getFavs(geometryURI, picURL, label, description, postFavs);//POST per Callback

}

function getFavs(geometryURI, picURL, label, description, callback) {
	var favs;
	var old = new XMLHttpRequest();
	old.withCredentials = true;
	old.onreadystatechange = function () {
		if (old.readyState == 4) {
			var resp = old.responseText;
			if (resp == null || resp == "") {
				favs = {"value": [], "created": 1392747438296}; //todo IBR: Generierung von Kalenderdatum
			} else {
				favs = JSON.parse(resp, null);
			}
			callback(geometryURI, picURL, label, description, favs);
		}//TODO: Serverseitige Fehler abfangen
	};
	old.open("get", "http://localhost/annotationserver/api/services/preferences/geometries");//EXTERNAL_SERVER_ADDRESS
	old.send(null);
}

function postFavs(geometryURI, picURL, label, description, favs) {  //TODO: Neue ANordnung der neuen und alten Items. testen...
	description = "A 3D Geometric Object from a Point Cloud, identified in the GenericViewer Web Application (IBR) ";
	var nuFav = createGeoItemFromURI(geometryURI, picURL, label, description);
	var nuVals = "[]";
	nuVals.push(nuFav);
	nuVals.concat(favs.value);
	favs.value = nuVals;
	var sendFav = new XMLHttpRequest();
	sendFav.withCredentials = true;
	sendFav.open("post", "http://localhost/annotationserver/api/services/preferences/geometries");//EXTERNAL_SERVER_ADDRESS
	serializedFavs = JSON.stringify(favs);
	sendFav.send(serializedFavs);
}

/*neues item als pundit-konformes objekt, nicht roher json-datensatz*/
function createGeoItemFromURI(geometryURI, picURL, label, description) {
	/*						var self = this,
	 item = {};
	 item = self.getPageMetadata();
	 item.value = window.location.href;
	 item.label = document.title || "No title";
	 if (typeof item.description === "undefined") {
	 item.description = item.label;
	 }
	 item.rdftype = [ns.page];
	 item.type = ["subject"];
	 item.rdfData = semlibItems.createBucketForPage(item).bucket;
	 return item;*/
	var nuFav = {
		"type": ["subject", "object"],
		"value": geometryURI,
		"label": label,
		"description": description,
		"rdftype": ["http://www.w3.org/2000/01/rdf-schema#Resource", "http://voc.spatialhumanities.de/ibr/classes#geometric_object"],
		"image": picURL,
		"rdfData": [
			{
				"s": geometryURI,
				"p": "http://www.w3.org/2000/01/rdf-schema#label",
				"o": label,
				"otype": "literal"
			},
			{
				"s": geometryURI,
				"p": "http://purl.org/dc/elements/1.1/description",
				"o": description,
				"otype": "literal"
			},
			{
				"s": geometryURI,
				"p": "http://xmlns.com/foaf/0.1/depiction",
				"o": picURL,
				"otype": "literal"
			},
			{
				"s": geometryURI,
				"p": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
				"o": "http://voc.spatialhumanities.de/ibr/classes#geometric_object",
				"otype": "uri"
			},
			{
				"s": geometryURI,
				"p": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
				"o": "http://www.w3.org/2000/01/rdf-schema#Resource",
				"otype": "uri"
			},
			{
				"s": "http://voc.spatialhumanities.de/ibr/classes#geometric_object",
				"p": "http://www.w3.org/2000/01/rdf-schema#label",
				"o": "Geometry in Point Cloud",
				"otype": "literal"
			},
			{
				"s": "http://www.w3.org/2000/01/rdf-schema#Resource",
				"p": "http://www.w3.org/2000/01/rdf-schema#label",
				"o": "Resource",
				"otype": "literal"
			},
			{
				"s": geometryURI,
				"p": "http://www.w3.org/2004/02/skos/core#prefLabel",
				"o": label,
				"otype": "literal"
			}
		],
		"geometry": true
	};

	return nuFav;
}


function deleteAnnotations(notebookID, geometryURI) {

	var annoCall = new XMLHttpRequest();
	annoCall.withCredentials = true;
	annoCall.
			annoCall.onreadystatechange = function () {
		if (annoCall.readyState == 4) {
			var response = annoCall.responseText;//TODO: Parse Anno-IDs aus dem Graphen
			var respJSON = JSON.parse(response).results.bindings;
			var delCall = new XMLHttpRequest();
			delCall.withCredentials = true;

			var idArray = new Array();
			for (var i in respJSON) {
				var curr = respJSON[i].g.value;
				if (curr.match('http://swickynotes.org/notebook/resource/itemsGraph-')) {
					curr = curr.replace('http://swickynotes.org/notebook/resource/itemsGraph-', '');
					if ($.inArray(curr, idArray, 0) == -1) {
						idArray.push(curr);
						delCall.open('delete', 'http://localhost/annotationserver/api/annotations/' + curr);//EXTERNAL_SERVER_ADDRESS
						delCall.send(null);//TODO: Hier findet keine Überprüfung des Erfolgs der Löschung statt.
					}
				}
			}
			deleteFavs(geometryURI);
		}//TODO: Serverseitige Fehler abfangen
	}
	//Query-Schema: select ?id where { {GRAPH ?g {<http://143.93.114.133/ibr/rest/gedenkfriedhof/features/208> ?p ?o }}{?resource <http://www.openannotation.org/ns/hasBody> ?g }{?resource <http://purl.org/pundit/ont/ao#id> ?id}}
	annoCall.open("get", "http://localhost/annotationserver/api/open/notebooks/" + notebookID + "/sparql?query=" + encodeURIComponent('select ?g where {GRAPH ?g {<' + geometryURI + '> ?p ?o }}'));//EXTERNAL_SERVER_ADDRESS
	annoCall.setRequestHeader("Accept", "application/json");
	annoCall.send(null);
}

//TODO: Erst die Annotationen löschen, dann den Favorites-Eintrag selbst
function deleteGeoObject(geometryURIs) {
	if (!Array.isArray(geometryURIs)) {
		geometryURIs=[geometryURIs];
	}
	semlibMyItems.removeItemFromUri('xxx', geometryURIs);
}

/*Logout from the Pundit Server*/
function logoutFromPundit(){

	var logoutCall = new XMLHttpRequest();
	logoutCall.withCredentials = true;//todo: error codes vom server abfangen.
	logoutCall.open("get", "http://localhost/annotationserver/api/users/logout");//EXTERNAL_SERVER_ADDRESS
	logoutCall.send(Favs);
}

function refreshItems() {//TODO: funktioniert so nicht. siehe textRep2Pundit
	if (window._PUNDIT.toString != null)    window._PUNDIT.myItems.loadMyItems();
	else console.log("Items cannot be refreshed. _Pundit object not accessible in the DOM.");//TODO:  throw error
}

function textRep2Pundit(catalogIDs, baseURL, description, author, baseLabel) { //bsp. di060-0043


	var nuVals = [];

	for (var i = 0; i < catalogIDs.length; i++) {//todo IBR: generic. not only for DIO

		var nuFav = {
			"author": "Akademie der Wissenschaften und der Literatur | Mainz",
			"description": "Deutsche Inschriften Online",
			"keywords": [
				"critical epigraphic edition"
			],
			"value": "http://www.inschriften.net/rest/di060/articles/" + catalogIDs[i],
			"label": "DI 60, Nr. " + catalogIDs[i],
			"rdftype": ["http://schema.org/WebPage"],
//TODO: hier "image" gelöscht. klären, ob es auch ohne geht.
			"type": ["subject", "object"],
			"rdfData": [
				{
					"s": "http://www.inschriften.net/rest/di060/articles/" + catalogIDs[i],
					"p": "http://www.w3.org/2000/01/rdf-schema#label",
					"o": "DI 60, Nr. " + catalogIDs[i],
					"otype": "literal"
				},
				{
					"s": "http://www.inschriften.net/rest/di060/articles/" + catalogIDs[i],
					"p": "http://purl.org/dc/elements/1.1/description",
					"o": "Deutsche Inschriften Online",
					"otype": "literal"
				},
				{
					"s": "http://www.inschriften.net/rest/di060/articles/" + catalogIDs[i],
					"p": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
					"o": "http://schema.org/WebPage",
					"otype": "uri"
				},
				{
					"s": "http://schema.org/WebPage",
					"p": "http://www.w3.org/2000/01/rdf-schema#label",
					"o": "WebPage",
					"otype": "literal"
				},
				{
					"s": "http://www.inschriften.net/rest/di060/articles/" + catalogIDs[i],
					"p": "http://www.w3.org/2004/02/skos/core#prefLabel",
					"o": "DI 60, Nr. " + catalogIDs[i],
					"otype": "literal"
				}
			]
		};
		nuVals.push(nuFav);
	};

	var getReq = new XMLHttpRequest();
	getReq.withCredentials = true;
	getReq.onreadystatechange = function () {
		if (getReq.readyState == 4) {
			debugger;
			var resp = getReq.responseText;
			if (!(resp == null || resp == "")) {
				var oldFavs = JSON.parse(resp, null); //todo: alte und neue werte konkatenieren.
				nuVals = nuVals.concat(oldFavs.value);
			}
			semlibMyItems.store.save('favorites',nuVals,[]);
		}//TODO: Serverseitige Fehler abfangen
	}
	getReq.open("get", "http://localhost/annotationserver/api/services/preferences/favorites");//EXTERNAL_SERVER_ADDRESS
	getReq.send(null);
}

/*setzt die aktuellen, bereits bestehenden Features in den Semantik-Tab TODO: Erstelle kumulatives Frontend-Item für alle Selektionen*/

function currentFeaturesToTripleBrowser() {
//Aktualisierung von SuggestionPanels

	//nimm alle ids weg, die gerade unter "filter" stehen
/*	tripleComposer.subjSuggestionPanel.hide();
	tripleComposer.objSuggestionPanel.hide();
	alle ids: var dndGeoId=semlibMyItems.getItemIdFromUri(collectiveGEoObjektURIS);
	dojo.destroy(dojo.query(dndGeoId));*/



	var features = keys(GV.setting.spatialstore.getSpatialcontext().getSelectedFeatures());//TODO: Hier wird nur jeweils das erste Feature aktiviert.//
	tripleComposer.collectiveObjIDs = [];//muss für beide Fälle geleert werden.
	if (features.length > 1) {
		tripleComposer.collectiveGeoObj = true;//wird im TripleComposer wieder auf false gesetzt.
		var FeatureNoString = "";
		while (features.length>0) {
			var feetscha = features.pop();
			if (FeatureNoString == "") {
				FeatureNoString= feetscha;
			}
			else {
				FeatureNoString=FeatureNoString.concat( ", " + feetscha);
			}
			tripleComposer.collectiveObjIDs.push(feetscha);
		}
		var desc = "The currently selected geometric objects with IDs " + FeatureNoString;
		//create collective object
		var itemURI="http://ibr.spatialhumanities.de/geometries/collectiveGeoObj/"+FeatureNoString;//todo: Stört bei der SPARQL-Abfrage, muss dort wieder weg-genommen werden.
		var item = createGeoItemFromURI(itemURI, null, ns.collective_object_label, desc);//geometryURI, picURL, label, description //TODO: Moreinfo-Tab müsste eigentlich raus.
		tripleComposer.addItemToSubject(item);
		previewer.buildPreviewForItem(item, true);
		previewer.show(itemURI, null, true);
	} else if (features.length == 1) {
//das gleiche für ein Item
		var featureID = first(GV.setting.spatialstore.getSpatialcontext().getSelectedFeatures()).getID();
		var itemObj = semlibMyItems.getItemFromUri(featureID);//bsp 'http://ibr.spatialhumanities.de/ibr/rest/gedenkfriedhof/features/1128'
		var item = createGeoItemFromURI(featureID, itemObj.image, itemObj.label, ns.geometric_object_description);//geometryURI, picURL, label, description
		tripleComposer.addItemToSubject(item);
		//previewer.buildPreviewForItem(item);
		previewer.show(item.value, '#pundit-gui-preview', true);
	}
	else return; //keine Geometrien markiert.
}

function itemsDnDURIFilter(URIs) {//gibt map-keys von DnD-Items nach URIs gefiltert zurück
	var ret = [];
	var itemMap = _PUNDIT.myItems.itemsDnD.map;
	for (item in itemMap) {
		if ($.inArray(_PUNDIT.myItems.itemsDnD.getItem(item).data.value, URIs) != -1) {
			ret.push(item);
		}//$.inArray(_PUNDIT.myItems.itemsDnD.map.dojoUnique73.data.value,["fsdglkndflkgjdfng","http://ibr.spatialhumanities.de/ibr/rest/Gamma/features/1134"]);
	}
	return ret;
}
