/**
 * Created by felixlange on 19.12.13.
 */


//TODO: Delete-Funktion für Geometrien

function geo2pundit(geometryURI, picURL, authenticated){

	//TODO: Synchronisierung und Abfrage OpenID Authentification.

	//main function

	if (!authenticated || authenticated==undefined) {
		window.open("http://as.thepund.it:8080/annotationserver/login.jsp", "_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=800, height=400");
		alert("authentificated?");
		geo2pundit(geometryURI, picURL, 1);
	}

	picURL = picURL || "http://www.spatialhumanities.de/fileadmin/bookmarklet/wandbild_ow_fx_1.png";
	var sampleDesc="Geometry ID "+geometryURI+"from GenericViewer/IBR";
	var sampleLabel="3D Geometry";

	var resp="";
	old=new XMLHttpRequest();
	old.withCredentials=true;
	old.onreadystatechange=function() {
		if (old.readyState==4){
			resp=old.responseText;
			favs=JSON.parse(resp,null);
			//alert("Data from Triple Store received");
			postFavs();
		}
	}

	old.open("get","http://as.thepund.it:8080/annotationserver/api/services/favorites");
	old.send(null);


	function postFavs(){
		fav=new XMLHttpRequest();
		fav.withCredentials=true;
		fav.open("post","http://as.thepund.it:8080/annotationserver/api/services/favorites",true);

		var nuFav={
	        "type": ["subject"],
	        "value": geometryURI,
	        "label": sampleLabel,
	        "description": sampleDesc,
	        "rdftype": ["http://www.w3.org/2000/01/rdf-schema#Resource"],
	        "image": picURL,
	        "rdfData": [
	            {
	                "s": geometryURI,
	                "p": "http://www.w3.org/2000/01/rdf-schema#label",
	                "o": sampleLabel,
	                "otype": "literal"
	           },
	            {
	                "s": geometryURI,
	                "p": "http://purl.org/dc/elements/1.1/description",
	                "o": sampleDesc,
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
	                "o": "http://www.w3.org/2000/01/rdf-schema#Resource",
	                "otype": "uri"
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
	                "o": sampleLabel,
	                "otype": "literal"
	            }
	        ]
	    };


		favs.value.push(nuFav);

		sendFav=new XMLHttpRequest();
		sendFav.withCredentials=true;
		sendFav.open("post","http://as.thepund.it:8080/annotationserver/api/services/favorites",true);
		serializedFavs=JSON.stringify(favs);
		sendFav.send(serializedFavs);
		//alert("POST erfolgreich");
	}

}
