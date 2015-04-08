/*Temporär für die Verwendung im alten GenericViewer*/
/**
 * Created by felixlange, 
 * Akademie der Wissenschaften und der Literatur | Mainz,
 * on 19.12.13.
 */http://adwserv58.adwudlit.uni-mainz.de:8080/openrdf-sesame/repositories/ibr_triplestore?query=SELECT+*+%0AWHERE+%7B%3Fs+%3Fp+%3Fo%7D


/*Beispielquery: SELECT ?featureWHERE {{?di cdwa:heraldry "Lutern".}{?feature shrel:describedIn ?di.}} */

function FeatureQuery(query) {
	var sesBaseURL = 'http://adwserv58.adwudlit.uni-mainz.de/openrdf-sesame/repositories/ibr_triplestore?query=';
	var q = encodeURI('PREFIX shrel:<http://voc.spatialhumanities.de/properties/> PREFIX cdwa:<http://www.getty.edu/research/publications/electronic_publications/cdwa/> SELECT ?feature WHERE { {?di cdwa:heraldry "Lutern".} {?feature shrel:describedIn ?di.} }');
	var req = new XMLHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			req.overrideMimeType('text/xml');
			var resp =  req.responseXML;
			if (resp == null || resp == '') {

				return resp;
			}
			else {
				//var xpres=resp.evaluate('//results/result/binding/uri',resp, null, XPathResult.ANY_TYPE, null);
				 var $xml = $( resp );
				var $uris= $xml.find("uri").text();
				return $uris;
			}
		}
	};
	req.open('get', sesBaseURL + q);
	//TODO:  Base-URL des Servers als klassenglobale Variable festlegen.
	req.send(null);
}


function GETcallSesame(){
	    var sesBaseURL = 'http://adwserv58.adwudlit.uni-mainz.de/openrdf-sesame/repositories/ibr_triplestore?query=';
    //var q = encodeURI('SELECT * WHERE ?s ?p ?o LIMIT 50');
	var q="SELECT+*+%0AWHERE+%7B%3Fs+%3Fp+%3Fo%7D+LIMIT+50";
    var req = new XMLHttpRequest();
    //req.withCredentials = true;//triggers CORS-problema
	//req.setRequestHeader('Origin','http://adwserv58.adwudlit.uni-mainz.de:8080/');
//	http://adwserv58.adwudlit.uni-mainz.de:8080/
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            var resp = req.responseText;
            if (resp == null || resp == '') {
                alert('empty response');
            }
            else {
                alert(resp);
            }
            //callback();

        }
        //TODO: Serverseitige Fehler abfangen

    };
    req.open('get', sesBaseURL+q);
    //TODO:  Base-URL des Servers als klassenglobale Variable festlegen.
    req.send(null);
}



function loadPundit() {
	var baseURL = "http://adwserv58.adwudlit.uni-mainz.de/pundit-client-sources/old/pundit/build";
	var h = document.getElementsByTagName('head')[0];
	var l = document.createElement('link');
	l.rel = 'stylesheet';
	l.href = 'http://www.spatialhumanities.de/fileadmin/bookmarklet/pundit.css';
	l.type = 'text/css';
	l.media = 'screen';
	l.charset = 'utf-8';
	l.async = false;
	h.appendChild(l);
	$.getScript(baseURL + "/dojo/dojo/dojo.js.uncompressed.js", function (data, textStatus, jqxhr) {
		console.log(textStatus); // Success
		console.log(jqxhr.status); // 200
		console.log("Load was performed.");
		dojo.registerModulePath("dojo", baseURL + "/dojo/dojo");
		dojo.registerModulePath("dijit", baseURL + "/dojo/dijit");
		dojo.registerModulePath("dojox", baseURL + "/dojo/dojox");
		dojo.registerModulePath("pundit", baseURL + "/src");
		dojo.require("pundit.Init");
	});

}

function geo2pundit(geometryURI, picURL, label, description) {

	geometryURI = undefined ? "http://s.spatialhumanities.de/oberwesel/features/noID" : geometryURI;
	picURL = undefined ? "http://www.spatialhumanities.de/fileadmin/bookmarklet/wandbild_ow_fx_1.png": picURL;
	description = undefined ? "Geometry ID " + geometryURI + " from GenericViewer (IBR)" : description;
	label = "3D Geometry No. " + geometryURI.substr(geometryURI.length - 3, geometryURI.length - 1); // TODO:
	getFavs(geometryURI, picURL, label, description, postFavs);
}

function getFavs(geometryURI, picURL, label, description, callback) {
	var favs;
	var old = new XMLHttpRequest();
	old.withCredentials = true;
	old.onreadystatechange = function () {
		if (old.readyState == 4) {
			var resp = old.responseText;
			if (resp == null || resp == "") {
				favs = {"value": [], "created": 1392747438296}; //TODO: Generierung von Kalenderdatum
			} else {
				favs = JSON.parse(resp, null);
			}
			callback(geometryURI, picURL, label, description, favs);
		}//TODO: Serverseitige Fehler abfangen
	};
	old.open("get", "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/services/favorites");//TODO:  Base-URL des Servers als klassenglobale Variable festlegen.
	old.send(null);
}

function postFavs(geometryURI, picURL, label, description, favs, callback) {
	description = "A 3D Geometric Object from a Point Cloud, identified in the GenericViewer Web Application (IBR) ";
	var nuFav = {
		"type": ["subject"],
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
		"favorite": true
	};
	favs.value.push(nuFav);
	var sendFav = new XMLHttpRequest();
	sendFav.withCredentials = true;
	sendFav.open("post", "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/services/favorites");
	serializedFavs = JSON.stringify(favs);
	sendFav.send(serializedFavs);
}

//deletes a geometry-URI from the  triple store, along with all annotations attached to it

function deleteGeoObject(geometryURI) {
	//get NotebookID (für SPARQL Calls)
	var nIDCall = new XMLHttpRequest();
	nIDCall.withCredentials = true;
	nIDCall.onreadystatechange = function () {
		if (nIDCall.readyState == 4) {
			//TODO: Hier: Server-Response-Text abfragen.
			var response = JSON.parse(nIDCall.responseText);
			deleteAnnotations(response.NotebookID, geometryURI);
		}//TODO: Serverseitige Fehler abfangen: Wenn Bad Request oder 404, entweder nicht Login, oder übergebene Argumente falsch.Abbruch in jedem Fall
	};
	nIDCall.open("get", "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/notebooks/current");
	nIDCall.send(null);
}

/*Abfrage für alle Triple mit der übergebenen Geometrie-URI
 * select ?g
 where
 {
 {GRAPH ?g {<http://143.93.114.133/ibr/rest/oberwesel/features/208> ?p ?o }} UNION
 {GRAPH ?g {?s ?p <http://143.93.114.133/ibr/rest/oberwesel/features/208> }}
 }
 * */
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
						delCall.open('delete', 'http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/annotations/' + curr);
						delCall.send(null);//TODO: Hier findet keine Überprüfung des Erfolgs der Löschung statt.
					}
				}
			}
			deleteFavs(geometryURI);
		}//TODO: Serverseitige Fehler abfangen
	}
	//Query-Schema: select ?id where { {GRAPH ?g {<http://143.93.114.133/ibr/rest/oberwesel/features/208> ?p ?o }}{?resource <http://www.openannotation.org/ns/hasBody> ?g }{?resource <http://purl.org/pundit/ont/ao#id> ?id}}
	annoCall.open("get", "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/open/notebooks/" + notebookID + "/sparql?query=" + encodeURIComponent('select ?g where {GRAPH ?g {<' + geometryURI + '> ?p ?o }}'));
	annoCall.setRequestHeader("Accept", "application/json");
	annoCall.send(null);
}

//TODO: Erst die Annotationen löschen, dann den Favorites-Eintrag selbst
function deleteFavs(geometryURI) {
//delete Element from favorites
	var favCall = new XMLHttpRequest();
	favCall.withCredentials = true;
	favCall.onreadystatechange = function () {
		if (favCall.readyState == 4) {
			var resp = favCall.responseText;
			if (resp == null || resp == "") {
				//interner Fehler: Zu löschende Geometrie ist nicht mehr vorhanden.TODO:auch für den anderen Fall abfangen. hier log-nachricht
				console.log('error: callback for pundit favorites did not return data.');
			} else {
				var favs = JSON.parse(resp, null);
				var filteredArray = favs.value.filter(function (element) {
					if (element.value != geometryURI) {
						return true;
					}
					else return false;
				});
				favs.value = [];
				var nuFavs = favs;
				nuFavs.value = filteredArray;
				var sendFav = new XMLHttpRequest();
				sendFav.withCredentials = true;
				sendFav.open("post", "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/services/favorites");
				var serializedFavs = JSON.stringify(nuFavs);
				sendFav.send(serializedFavs);
				window.setTimeout("refreshItems()", 900);//TODO: Vorläufige Lösung
			}//TODO: Serverseitige Fehler abfangen
		}
	};
	favCall.open("get", "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/services/favorites");
	favCall.send(null);

}

function refreshItems() {
	if (window._PUNDIT.toString != null)    window._PUNDIT.myItems.loadMyItems();
	else console.log("Items cannot be refreshed. _Pundit object not accessible in the DOM.");//TODO:  throw error
}


function EpidocDio2PunditFavorites() {
	var favs;
	var old = new XMLHttpRequest();
	old.withCredentials = true;
	old.onreadystatechange = function () {
		if (old.readyState == 4) {
			var resp = old.responseText;
			if (resp == null || resp == "") {
				//favs = {"value": [], "created": 1392747438296}; //TODO: Generierung von Kalenderdatum
				console.log("favorites data set empty. will exit.");
			} else {
				favs = JSON.parse(resp, null);
				katalognummern=new Array("di060-0019",
"di060-0027",
"di060-0029",
"di060-0030",
"di060-0032",
"di060-0033",
"di060-0034",
"di060-0035",
"di060-0036",
"di060-0037",
"di060-0039",
"di060-0041",
"di060-0042",
"di060-0046",
"di060-0052",
"di060-0061",
"di060-0062",
"di060-0068",
"di060-0073",
"di060-0075",
"di060-0077",
"di060-0078",
"di060-0081",
"di060-0084",
"di060-0086",
"di060-0111",
"di060-0120",
"di060-0122",
"di060-0123",
"di060-0128",
"di060-0129",
"di060-0130",
"di060-0131",
"di060-0132",
"di060-0135",
"di060-0138",
"di060-0139",
"di060-0140",
"di060-0141",
"di060-0144",
"di060-0151",
"di060-0153",
"di060-0157",
"di060-0158",
"di060-0159",
"di060-0163",
"di060-0169",
"di060-0171",
"di060-0177",
"di060-0179",
"di060-0180",
"di060-0181",
"di060-0182",
"di060-0183",
"di060-0184",
"di060-0185",
"di060-0197",
"di060-0204",
"di060-0207",
"di060-0229",
"di060-0231",
"di060-0232",
"di060-0241",
"di060-0242",
"di060-0252",
"di060-0257",
"di060-0260",
"di060-0264",
"di060-0270",
"di060-0273",
"di060-0277",
"di060-0283",
"di060-0284",
"di060-0290",
"di060-0293",
"di060-0311",
"di060-0317",
"di060-0337",
"di060-0339",
"di060-0343",
"di060-0345",
"di060-0356",
"di060-0362",
"di060-0371",
"di060-0383",
"di060-0384",
"di060-0401",
"di060-0423",
"di060-0430",
"di060-0461",
"di060-0464") ; //new Array();
	for (i=0; i<katalognummern.length;i++){

					var nuFav = {
				        "author": "Akademie der Wissenschaften und der Literatur | Mainz",
				        "description": "Deutsche Inschriften Online",
				        "keywords": [
				            " Endemol | bleibt leer"
				        ],
				        "value": "http://www.inschriften.net/rest/di060/articles/"+katalognummern[i],
				        "label": "DI 60, Nr. "+katalognummern[i],
				        "rdftype": ["http://schema.org/WebPage"],
						"image": "http://www.inschriften.net/fileadmin/user_upload/abbildungen/di60-1_"+katalognummern[i]+"_1.jpg",
				        "type": ["subject","object"],
				        "rdfData": [
				            {
				                "s": "http://www.inschriften.net/rest/di060/articles/"+katalognummern[i],
				                "p": "http://www.w3.org/2000/01/rdf-schema#label",
				                "o": "DI 60, Nr. "+katalognummern[i],
				                "otype": "literal"
				            },
				            {
				                "s": "http://www.inschriften.net/rest/di060/articles/"+katalognummern[i],
				                "p": "http://purl.org/dc/elements/1.1/description",
				                "o": "Deutsche Inschriften Online",
				                "otype": "literal"
				            },
				            {
				                "s": "http://www.inschriften.net/rest/di060/articles/"+katalognummern[i],
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
				                "s": "http://www.inschriften.net/rest/di060/articles/"+katalognummern[i],
				                "p": "http://www.w3.org/2004/02/skos/core#prefLabel",
				                "o": "DI 60, Nr. "+katalognummern[i],
				                "otype": "literal"
				            }
				        ]
				    };
					favs.value.push(nuFav);
				};

/*var nuFav = {
			        "author": "Akademie der Wissenschaften und der Literatur | Mainz",
			        "description": "Deutsche Inschriften Online",
			        "keywords": [
			            " Endemol | bleibt leer"
			        ],
			        "value": "http://www.inschriften.net/rest/di060/articles/di060-0027",
			        "label": "DI 60, Nr. 27",
			        "rdftype": ["http://schema.org/WebPage"],
			        "type": ["subject","object"],
			        "rdfData": [
			            {
			                "s": "http://www.inschriften.net/rest/di060/articles/di060-0027",
			                "p": "http://www.w3.org/2000/01/rdf-schema#label",
			                "o": "DI 60, Nr. 27",
			                "otype": "literal"
			            },
			            {
			                "s": "http://www.inschriften.net/rest/di060/articles/di060-0027",
			                "p": "http://purl.org/dc/elements/1.1/description",
			                "o": "Deutsche Inschriften Online",
			                "otype": "literal"
			            },
			            {
			                "s": "http://www.inschriften.net/rest/di060/articles/di060-0027",
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
			                "s": "http://www.inschriften.net/rest/di060/articles/di060-0027",
			                "p": "http://www.w3.org/2004/02/skos/core#prefLabel",
			                "o": "DI 60, Nr. 27",
			                "otype": "literal"
			            }
			        ]
			    };*/
//einzelner neuer Datensatz
				//favs.value.push(nuFav);
				var sendFav = new XMLHttpRequest();
				sendFav.withCredentials = true;
				sendFav.open("post", "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/services/favorites");
				serializedFavs = JSON.stringify(favs);
				sendFav.send(serializedFavs);
			}
		}//TODO: Serverseitige Fehler abfangen
	};
	old.open("get", "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/api/services/favorites");//TODO:  Base-URL des Servers als klassenglobale Variable festlegen.
	old.send(null);

}
