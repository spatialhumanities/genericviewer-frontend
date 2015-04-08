GV.Filter = GV.Filter || {};

GV.Filter.list = [];
GV.Filter.DAY = 1000*60*60*24;

GV.Filter.select = function(filterID) {
	var spatialcontext = GV.setting.spatialstore.getSpatialcontext();
	switch(filterID) {
		case "creator":
			var features = spatialcontext.getFeatures();
			var list = [];
			document.getElementById("filter_creator").innerHTML = "<a href=\"javascript: GV.Filter.add('creator')\">MY OWN</a><br />";
			for (var i in features) {
				var creator = features[i].getCreator();
				if (!contains(list,creator)) {
					list.push(creator);
					document.getElementById("filter_creator").innerHTML += "<a href=\"javascript: GV.Filter.add('creator'," + (creator?"'"+creator+"'":false) + ")\">"+(creator?creator:"not logged in")+"</a><br />";
				}
			}
		break;
		case "viewpoint":
			var viewpoints = spatialcontext.getViewpoints();
			document.getElementById("filter_viewpoint").innerHTML = "<a href=\"javascript: GV.Filter.add('viewpoint')\">Current viewpoint</a><br />";
			for (var id in viewpoints) {
				document.getElementById("filter_viewpoint").innerHTML += "<a href=\"javascript: GV.Filter.add('viewpoint','"+id+"')\">"+viewpoints[id].getName()+"</a><br />";
			}
		break;
	}
	var nodes = document.getElementById("filterinput").childNodes;
	for (var i in nodes)
		if (nodes[i].setAttribute)
			nodes[i].setAttribute("style","display:none");
	document.getElementById("filter_"+filterID).removeAttribute("style");
}

GV.Filter.addSet = function(filterID,fids) {
	var spatialcontext = GV.setting.spatialstore.getSpatialcontext();
	document.getElementById("filter_"+filterID).setAttribute("style","display:none");
	if (!document.getElementById("_filter_"+filterID)) {
		var li = document.createElement("li");
		li.setAttribute("id","_filter_"+filterID);
		var a = document.createElement("a");
		a.href = "javascript: GV.Filter.remove('"+filterID+"')";
		var name = document.getElementById("filter_"+filterID).getAttribute("name");
		a.appendChild(document.createTextNode("remove " + name));
		li.appendChild(a);
		document.getElementById("activefilters").appendChild(li);
	}
	GV.Filter.list[filterID] = fids;
	var list = GV.Filter.filter(spatialcontext);
	spatialcontext.setSelectedFeatures(list);
}

GV.Filter.savedQueries = function(name) {
	document.getElementById("sparql").value = GV.Filter.savedQueries.list[name];
}
GV.Filter.savedQueries.list = [];

GV.Filter.addSparql = function(xml) {
	var fids = [];
	var uris = xml.getElementsByTagName("uri");
	for (var i in uris) {
		if (uris[i].textContent)
			fids.push(uris[i].textContent);
	}
	GV.Filter.addSet("sparql",fids);
}

GV.Filter.add = function(filterID,param) {
	var spatialcontext = GV.setting.spatialstore.getSpatialcontext();
	var fids = [];
	switch(filterID) {
		case "date":
			var features = spatialcontext.getFeatures();
			var from = $("#filterDateFrom").datepicker("getDate");
			var to = $("#filterDateTo").datepicker("getDate");
			if (param == "today") {
				from = new Date();
				from.setHours(0,0,0,0);
				to = new Date();
				to.setHours(0,0,0,0);
			}
			if (param == "yesterday") {
				from = new Date();
				from.setHours(0,0,0,0);
				from.setDate(from.getDate()-1);
				to = new Date();
				to.setHours(0,0,0,0);
				to.setDate(to.getDate()-1);
			}
			for (var id in features) {
				if ((features[id].getDate() - from >= 0) && (features[id].getDate() - to < GV.Filter.DAY))
					fids.push(id);
			}
		break;
		case "sparql":
			var query = document.getElementById("sparql").value;
			IO.sparql(query,GV.Filter.addSparql);
		break;
		case "creator":
			var features = spatialcontext.getFeatures();
			for (var id in features) {
				if (features[id].getCreator() == (arguments.length == 1 ? GV.openid.getUser() : param))
					fids.push(id);
			}
		break;
		case "geom":
			var features = spatialcontext.getFeatures();
			var type = document.getElementById("filterGeomType").value;
			var minSize = 0;
			if (document.getElementById("filterGeomFrom").value)
				minSize = Number(document.getElementById("filterGeomFrom").value);
			var maxSize = 0;
			if (document.getElementById("filterGeomTo").value)
				maxSize = Number(document.getElementById("filterGeomTo").value);
			for (var id in features) {
				if (features[id].getGeometry().getType() == type && features[id].getSize() >= minSize && (maxSize == 0 || features[id].getSize() <= maxSize))
					fids.push(id);
			}
		break;
		case "viewpoint":
			fids = keys(spatialcontext.getViewpoint(param).getFeatures());
		break;
		case "default":
			if (param)
				fids = setSubstract(keys(spatialcontext.getFeatures()),keys(spatialcontext.getSelectedFeatures()));
			else
				fids = keys(spatialcontext.getSelectedFeatures());
		break;
	}
	if (filterID != "sparql")
		GV.Filter.addSet(filterID,fids);
}

GV.Filter.remove = function(filterID) {
	document.getElementById("activefilters").removeChild(document.getElementById("_filter_"+filterID));
	delete GV.Filter.list[filterID];
	GV.Filter.filter(GV.setting.spatialstore.getSpatialcontext());
}

GV.Filter.filter = function(spatialcontext) {
	var features = keys(spatialcontext.getFeatures());
	var measurement = GV.setting.getMeasurement();
	var fid = measurement ? measurement.getFid() : false;
	var list = [];
	for (var i in features) {
		if (features[i] == fid)
			continue;
		var c = true;
		for (var index in GV.Filter.list)
			if (!contains(GV.Filter.list[index],features[i]))
				c = false;
		if (c)
			list.push(features[i]);
	}
	spatialcontext.setDisplayedFeatures(list);
	//spatialcontext.setSelectedFeatures(list);
	return list;
}


GV.Filter.viewpoint = function(set) {
	var spatialcontext = GV.setting.spatialstore.getSpatialcontext();
	if (spatialcontext) {
		GV.Filter.filter(spatialcontext,"viewpoint",keys(spatialcontext.getViewpoint().getFeatures()),set);
		GV.Filter.display("filterViewpoint",set);
	}
}
