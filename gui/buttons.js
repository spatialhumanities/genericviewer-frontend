﻿GV.GUI.showFeature = function(fid) {
	var spatialcontext = GV.setting.spatialstore.getSpatialcontext();
	if (spatialcontext.getFeature(fid)) {
		spatialcontext.setSelectedFeatures([fid]);
		$("#tabs").tabs({active:3});
		GV.setting.setTab("draw");
		var viewpoint = spatialcontext.getFeature(fid).getViewpoint();
		if (viewpoint)
			spatialcontext.setViewpoint(viewpoint.getID());
		var spherical = spatialcontext.getFeature(fid).getGeometry().getTransformedCenter().toSpherical();
		GV.setting.setAzim(spherical.getHorAngle());
		GV.setting.setElev(spherical.getVerAngle());
	}
}

GV.GUI.Buttons = function() {
	var allButtons = [];
	for (var i in document.getElementById("toolbar").childNodes)
		if (document.getElementById("toolbar").childNodes[i].getAttribute && document.getElementById("toolbar").childNodes[i].getAttribute('id'))
			allButtons.push(document.getElementById("toolbar").childNodes[i].getAttribute('id'));
	for (var i in document.getElementById("shortcuts").childNodes)
		if (document.getElementById("shortcuts").childNodes[i].getAttribute && document.getElementById("shortcuts").childNodes[i].getAttribute('id'))
			allButtons.push(document.getElementById("shortcuts").childNodes[i].getAttribute('id'));
	var displayFeatures = function(divID) {
		var spatialcontexts = GV.setting.spatialstore.getSpatialcontexts();
		for (var id in spatialcontexts) {
			var fids = spatialcontexts[id].getFeatures();
			for (var i in fids) {
				fids[i].display(false);
			}
		}
		var visfids = GV.setting.spatialstore.getSpatialcontext().getDisplayedFeatures();
		var visfidsKeys = keys(visfids).sort(function(a,b){return visfids[b].getName() - visfids[a].getName()});
		for (var i in visfidsKeys) {
			visfids[visfidsKeys[i]].display(divID);
		}
	}
	var showButtons = function(buttons) {
		for (var i in allButtons) {
			document.getElementById(allButtons[i]).setAttribute("style","display: none;");
		}
		for (var i in buttons) {
			if (document.getElementById(buttons[i]))
				document.getElementById(buttons[i]).removeAttribute("style");
			if (document.getElementById(buttons[i]+"Key"))
				document.getElementById(buttons[i]+"Key").removeAttribute("style");
		}
	}
	showButtons([]);
	this.isVisible = function(buttonID) {
		return !document.getElementById(buttonID).getAttribute("style");
	}
	this.updateTab = function(tab) {
		var measurement = GV.setting.getMeasurement();
		if (measurement) {
			var list = [];
			if (measurement.planarizable())
				list.push("planarize");
			if (measurement.missclick())
				list.push("missclick");
			if (measurement.visible() != -1)
				list.push(measurement.visible() ? "invisible" : "visible");
			var mode = measurement.closed();
			if (!mode)
				list.push("close");
			else {
				if (mode != "drag")
					list.push("editDrag");
				if (mode != "delete")
					list.push("editDelete");
				if (mode != "add")
					list.push("editAdd");
			}
			list.push("abort");
			list.push("save");
			showButtons(list);
		}
		else {
			var selfids = GV.setting.spatialstore.getSpatialcontext().getSelectedFeatures();
			var nr = size(selfids);
			if (nr == 0) {
				if (tab == "draw")
					showButtons(["all","linestring","polygon","prism","navi","zoom","tab"]);
				else {
					showButtons(["all"]);
				}
			}
			if (nr == 1) {
				if (!first(selfids).getCreator() || first(selfids).getCreator() == GV.openid.getUser())
					showButtons(["all","edit","delete","pointcloud","export","deselect","visibility"]);
				else
					showButtons(["all","pointcloud","export","deselect"]);
			}
			if (nr > 1) {
				var permission = true;
				for (var i in selfids) {
					if (selfids[i].getCreator() && selfids[i].getCreator() != GV.openid.getUser())
						permission = false;
				}
				showButtons(permission ? ["all","delete","export","deselect","visibility"] : ["all","export","deselect"]);
			}
		}
		
		if (tab == "menu" || tab == "connect" || tab == "sparql" )
			document.getElementById("navigationmap").setAttribute("style","display:none");
		else
			document.getElementById("navigationmap").removeAttribute("style");
		
		if (tab == "sparql") {
			displayFeatures("gvobjects2");
			
		}
		else if (tab == "overview") {
			displayFeatures("gvobjects");
			
		}
		
	}

GV.GUI.Buttons.xport = function() {
	var selfids = GV.setting.spatialstore.getSpatialcontext().getSelectedFeatures();
	var format = selectedRadioValue("geometry_format");
	var url = GV.setting.spatialstore.getSpatialcontext().getID() + "/features."+format+"?fids=";
	for (var id in selfids) {
		url += id.substring(id.lastIndexOf("/")+1) + ",";
	}
	window.location.href = url.substring(0,url.length-1);
}
document.getElementById("export").onclick = GV.GUI.Buttons.xport;

/*GV.GUI.Buttons.visibility = function() {
	var sid = GV.setting.spatialstore.getSpatialcontext().getID();
	var selfids = GV.setting.spatialstore.getSpatialcontext().getSelectedFeatures();
	for (var fid in selfids) {
		IO.checkVisibility(sid,fid);
	}
}
document.getElementById("visibility").onclick = GV.GUI.Buttons.visibility;*/


GV.GUI.Buttons.pointcloud = function() {
	var selfids = GV.setting.spatialstore.getSpatialcontext().getSelectedFeatures();
	var format = selectedRadioValue("pointcloud_format");
	window.location.href = first(selfids).getID() + "." + format;
}
document.getElementById("pointcloud").onclick = GV.GUI.Buttons.pointcloud;

document.getElementById("delete").onclick = IO.deleteFeatures;
document.getElementById("deleteKey").onclick = IO.deleteFeatures;

GV.GUI.Buttons.edit = function() {
	var feature = first(GV.setting.spatialstore.getSpatialcontext().getSelectedFeatures());
	var type = feature.getGeometry().getType();
	if (type == "POINT" || type == "LINESTRING")
		GV.setting.setMeasurement(new GV.Draw.Measurement("linestring",feature));
	if (type == "MULTIPOLYGON")
		GV.setting.setMeasurement(new GV.Draw.Measurement("polygon",feature));
	if (type == "GEOMETRYCOLLECTION")
		GV.setting.setMeasurement(new GV.Draw.Measurement("prism",feature));
	GV.Filter.filter(GV.setting.spatialstore.getSpatialcontext());
	GV.info.measurement();
}
document.getElementById("edit").onclick = GV.GUI.Buttons.edit;


GV.GUI.Buttons.linestring = function() {
	GV.setting.setMeasurement(new GV.Draw.Measurement("linestring"));
	GV.info.measurement();
}
document.getElementById("linestring").onclick = GV.GUI.Buttons.linestring;

GV.GUI.Buttons.polygon = function() {
	GV.setting.setMeasurement(new GV.Draw.Measurement("polygon"));
	GV.info.measurement();
}
document.getElementById("polygon").onclick = GV.GUI.Buttons.polygon;

GV.GUI.Buttons.prism = function() {
	GV.setting.setMeasurement(new GV.Draw.Measurement("prism"));
	GV.info.measurement();
}
document.getElementById("prism").onclick = GV.GUI.Buttons.prism;

document.getElementById("save").onclick = IO.saveFeature;
document.getElementById("saveKey").onclick = IO.saveFeature;

GV.GUI.Buttons.visible = function() {
	var fid = GV.setting.getMeasurement().getFid();
	var sid = GV.setting.spatialstore.getSpatialcontext().getID();
	var vid = GV.setting.spatialstore.getSpatialcontext().getViewpoint().getID();
	IO.setVisible(sid,fid,vid);
}
document.getElementById("visible").onclick = GV.GUI.Buttons.visible;

GV.GUI.Buttons.invisible = function() {
	var fid = GV.setting.getMeasurement().getFid();
	var sid = GV.setting.spatialstore.getSpatialcontext().getID();
	var vid = GV.setting.spatialstore.getSpatialcontext().getViewpoint().getID();
	IO.setInvisible(sid,fid,vid);
}
document.getElementById("invisible").onclick = GV.GUI.Buttons.invisible;

/*GV.GUI.Buttons.planarize = function() {
	alert("NOT IMPLEMENTED YET");
}
document.getElementById("planarize").onclick = GV.GUI.Buttons.planarize;*/

/*GV.GUI.Buttons.missclick = function() {
	alert("NOT IMPLEMENTED YET");
}
document.getElementById("missclick").onclick = GV.GUI.Buttons.missclick;*/

GV.GUI.Buttons.close = function() {
	GV.setting.getMeasurement().click();
	GV.setting.changeViewerMeasurement();
}
document.getElementById("closeKey").onclick = GV.GUI.Buttons.close;

GV.GUI.Buttons.abort = function() {
	GV.setting.setMeasurement(false);
	GV.info.select(GV.setting.spatialstore.getSpatialcontext().getSelectedFeatures());
}
document.getElementById("abort").onclick = GV.GUI.Buttons.abort;
document.getElementById("abortKey").onclick = GV.GUI.Buttons.abort;

GV.GUI.Buttons.editAdd = function() {
	GV.setting.getMeasurement().close("add");
	GV.info.measurement();
}
document.getElementById("editAdd").onclick = GV.GUI.Buttons.editAdd;

GV.GUI.Buttons.editDelete = function() {
	GV.setting.getMeasurement().close("delete");
	GV.info.measurement();
}
document.getElementById("editDelete").onclick = GV.GUI.Buttons.editDelete;

GV.GUI.Buttons.editDrag = function() {
	GV.setting.getMeasurement().close("drag");
	GV.info.measurement();
}
document.getElementById("editDrag").onclick = GV.GUI.Buttons.editDrag;

GV.GUI.Buttons.displayAll = function() {
	var spatialcontext = GV.setting.spatialstore.getSpatialcontext();
	if (spatialcontext)
		spatialcontext.setDisplayedFeatures(keys(spatialcontext.getFeatures()))
}
GV.GUI.Buttons.displayOwn = function() {
	var spatialcontext = GV.setting.spatialstore.getSpatialcontext();
	if (spatialcontext) {
		var features = spatialcontext.getFeatures();
		var list = [];
		for (var id in features) {
			if (features[id].getCreator() == GV.openid.getUser())
				list.push(id);
		}
		spatialcontext.setDisplayedFeatures(list);
	}
}
GV.GUI.Buttons.display48 = function() {
	var spatialcontext = GV.setting.spatialstore.getSpatialcontext();
	if (spatialcontext) {
		var features = spatialcontext.getFeatures();
		var list = [];
		var timestamp = (new Date()) - (2*1000*60*60*24);
		for (var id in features) {
			if (features[id].getDate() - timestamp > 0)
				list.push(id);
		}
		spatialcontext.setDisplayedFeatures(list);
	}
}

}

