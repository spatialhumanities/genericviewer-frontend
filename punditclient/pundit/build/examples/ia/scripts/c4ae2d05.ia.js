angular.module("ImageAnnotator", ["ui.bootstrap", "PolygonModule", "ConfirmModule", "APIModule"]), angular.module("ImageAnnotator").constant("CONSTANT", {TOOLBAR_EVT: {clickSelect: "clickSelect", clickPan: "clickPan", clickDraw: "clickDraw", clickZoomIn: "clickZoomIn", clickZoomOut: "clickZoomOut", clickUndo: "clickUndo", clickRedo: "clickRedo", clickCollapse: "clickCollapse", exit: "ia-close-confirmed"}, IA_EVENT: {updatePolygons: "ia-update-polygon", selectedPolygon: "polygon_selected", deselectedPolygon: "polygon_deselected", deletedPolygon: "delete-selected-poly", changeOpMode: "ia-change-operative-mode", exitFullscreen: "ia-exit-fullscreen", openContextMenu: "ia-open-ctx-menu", closeContextMenu: "ia-close-ctx-menu", imageChange: "ia-image-change", close: "ia-close"}, MODE_TYPE: {select: "selectMode", draw: "drawMode", pan: "panMode", any: "any"}, POLYGON_STYLE: {select_status: "select-status", hover_status: "hover-status", normal_status: "normal-status"}, BTN_CLASS: {selected: "btn btn-default button_selected", unselected: "btn btn-default"}, BTN_ICON: {close: "fa fa-sign-out fa-lg", collapseUp: "fa fa-caret-square-o-up fa-lg", collapseDown: "fa fa-caret-square-o-down fa-lg", enterFullScreen: "fa fa-expand fa-lg", exitFullScreen: "fa fa-compress fa-lg"}}), angular.module("ImageAnnotator").controller("imageAnnotatorController", ["$scope", "$modal", "$rootScope", "CONSTANT", function (a, b, c, d) {
	var e;
	c.$on(d.TOOLBAR_EVT.exit, function () {
		a.close()
	}), a.close = function () {
		a.modalInstance && "function" == typeof a.modalInstance.close && (a.modalInstance.close(), a.api.fireOnClose(e)), a.modalInstance = null
	}, a.modalInstance = null, a.open = function () {
		a.modalInstance || (e = "myUniqueName" + Math.floor(1e4 * Math.random()), a.modalInstance = b.open({templateUrl: "templates/modal_template.html", controller: "modalController", backdrop: "static", keyboard: !1, windowClass: e, resolve: {myUniqueClassName: function () {
			return e
		}}}))
	}
}]), angular.module("ImageAnnotator").directive("imageAnnotator", ["$window", "APIService", "ConfService", "appState", function (a, b, c, d) {
	return{restrict: "E", templateUrl: function (b, d) {
		var e = c.init(a[d.confName]);
		return e.useOnlyCallbacks === !0 ? "templates/empty.directive.tmpl.html" : "templates/image-annotator.directive.tmpl.html"
	}, scope: {}, link: function (e) {
		var f = c.getConf();
		e.api = b.init({globalObjectName: f.globalObjectName}), d.setAPIName(f.globalObjectName);
		var g = ["Open", "Close", "SetImg"], h = ["ChangeOperativeMode", "Open", "Close", "PolyAdd", "PolyRemove", "PolyRename", "PolyMove", "PolyClose", "NodeAdd", "NodeRemove", "NodeMove", "ImageChange"];
		e.api.addEvent(h), e.api.addFeature(g), e.api.exposeOpen(function () {
			e.open()
		}), e.api.exposeClose(function () {
			e.close()
		}), e.api.exposeSetImg(function (b) {
			var d = f.globalObjectName;
			e.modalInstance ? a[d].callSetHotImg(b) : c.setImg(b)
		}), "function" == typeof f.onLoad && f.onLoad()
	}, controller: "imageAnnotatorController"}
}]), angular.module("ImageAnnotator").controller("modalController", ["$scope", "$rootScope", "$modalInstance", "$window", "CONSTANT", "myUniqueClassName", "appState", "ConfService", "APIService", "keyboardService", "utilityService", "conversionService", "fullScreenService", "zoomService", "panService", function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
	function p() {
		q = {worldZoomLevel: 1, evtWorld: {isMousedown: !1}, modalBodyDim: {height: 320, width: 598}, panInfo: {enableVertical: !1, enableOrizontal: !1, x: 0, y: 0, left: 0, top: 0}, panStopped: {up: !1, down: !1, right: !1, left: !1, x: 0, y: 0}, maskDim: {width: 0, height: 0}, worldDim: {width: 0, height: 0, fitWidth: 0, fitHeight: 0, leftToFit: 0, topToFit: 0}, modalDialogPos: {left: 0, top: 0}, domElement: {modalDialog: void 0, modalContainer: void 0, modalBody: void 0, modalHeader: void 0, modalFooter: void 0, mask: void 0, world: void 0, image: void 0}}
	}

	a.conf = h.getConf();
	var q;
	p();
	var r, s = function () {
		clearTimeout(r), r = setTimeout(function () {
			var a = q.domElement, c = d.innerHeight - a.modalHeader.offsetHeight - a.modalFooter.offsetHeight - 25;
			m.isFullScreen ? (k.setElementHeight(a.modalBody, c), k.setElementHeight(a.mask, a.modalBody.offsetHeight), k.setElementWidth(a.mask, a.modalBody.offsetWidth), q.maskDim.height = a.modalBody.offsetHeight, q.maskDim.width = a.modalBody.offsetWidth, q.worldDim = k.fitWorld(q.domElement), b.$emit(e.IA_EVENT.updatePolygons)) : v()
		}, 100)
	};
	b.$on(e.IA_EVENT.exitFullscreen, function () {
		var a = q.domElement;
		k.setElementHeight(a.mask, a.modalBody.offsetHeight), k.setElementWidth(a.mask, a.modalBody.offsetWidth), q.maskDim.height = a.modalBody.offsetHeight, q.maskDim.width = a.modalBody.offsetWidth, q.worldDim = k.fitWorld(q.domElement), q.panInfo.enableOrizontal = !1, q.panInfo.enableVertical = !1, b.$emit(e.IA_EVENT.updatePolygons)
	});
	var t = function () {
		var a = q.modalBodyDim;
		angular.element(q.domElement.mask).css("height", a.height + "px"), angular.element(q.domElement.mask).css("width", a.width + "px"), q.maskDim.height = a.height, q.maskDim.width = a.width, q.worldDim = k.fitWorld(q.domElement), v()
	}, u = function () {
		p();
		var a = q.domElement;
		a.modalContainer = d.document.querySelector("div." + f), a.modalBody = a.modalContainer.querySelector(".modal-body"), a.modalDialog = a.modalContainer.querySelector("div.modal-dialog"), a.modalHeader = a.modalContainer.querySelector("div.modal-header"), a.modalFooter = a.modalContainer.querySelector("div.modal-footer"), a.mask = a.modalBody.querySelector("div.ia-mask"), a.world = a.modalBody.querySelector("div.ia-world"), a.image = a.world.querySelector(".ia-main-img"), a.modalContainer.focus(), angular.element(a.modalContainer).addClass("ia-modal"), angular.element(a.world).addClass("world-pan"), m.addFullScreenElement(a.modalContainer, a.modalBody), m.addFullScreenListener(d.document), d.navigator.userAgent.indexOf("Firefox") > -1 ? d3.select(a.world).on("DOMMouseScroll", C) : d3.select(a.world).on("mousewheel", C), angular.element(d).bind("resize", s), angular.element(a.image).bind("load", t), angular.element(d.document).bind("keydown", j.onKeyDown), angular.element(d.document).bind("keyup", j.onKeyUp)
	}, v = function () {
		var a = q.domElement, b = (d.innerWidth - a.modalDialog.offsetWidth) / 2, c = (d.innerHeight - a.modalDialog.offsetHeight) / 2;
		k.setElementMarginLeft(a.modalDialog, b), k.setElementMarginTop(a.modalDialog, c), q.modalDialogPos.left = b, q.modalDialogPos.top = c
	}, w = function (a, b) {
		b.exit === e.MODE_TYPE.draw && angular.element(q.domElement.world).removeClass("world-draw"), b.exit === e.MODE_TYPE.pan && angular.element(q.domElement.world).removeClass("world-pan"), b.enter === e.MODE_TYPE.draw && angular.element(q.domElement.world).addClass("world-draw"), b.enter === e.MODE_TYPE.pan && angular.element(q.domElement.world).addClass("world-pan")
	};
	b.$on(e.IA_EVENT.changeOpMode, w), c.opened.then(function () {
		a.$watch(function () {
			return d.document.querySelector("div." + f + ".fade.modal.in")
		}, function () {
			d.document.querySelector("div." + f + ".fade.modal.in") && (u(), B.fireOnOpen(f))
		})
	});
	var x, y = function () {
		var a = q;
		a.worldZoomLevel = n.zoom(a.domElement.world, a.worldDim, a.maskDim, a.worldZoomLevel, -.2, .5, .5), g.getAppMode() === e.MODE_TYPE.pan && o.tryToDisablePan(a.worldDim, a.maskDim, a.panInfo), b.$emit(e.IA_EVENT.updatePolygons)
	}, z = function () {
		var a = q;
		a.worldZoomLevel = n.zoom(a.domElement.world, a.worldDim, a.maskDim, a.worldZoomLevel, .2, .5, .5), g.getAppMode() === e.MODE_TYPE.pan && o.tryToEnablePan(a.worldDim, a.maskDim, a.panInfo), b.$emit(e.IA_EVENT.updatePolygons)
	}, w = function (a, b) {
		var c = q;
		b.enter !== e.MODE_TYPE.pan ? (c.panInfo.enableOrizontal = !1, c.panInfo.enableVertical = !1) : o.tryToEnablePan(c.worldDim, c.maskDim, c.panInfo)
	}, A = function (a, c) {
		{
			var d, f = q.domElement;
			k.getElementTop(q.domElement.world)
		}
		c ? (x = f.modalHeader.offsetHeight, d = f.modalBody.offsetHeight + x, angular.element(f.modalHeader).addClass("ia-collapsed")) : (d = f.modalBody.offsetHeight - x, angular.element(f.modalHeader).removeClass("ia-collapsed")), k.setElementHeight(f.modalBody, d), k.setElementHeight(f.mask, f.modalBody.offsetHeight), q.maskDim.height = f.mask.offsetHeight;
		var g = f.mask.offsetWidth / q.worldDim.fitWidth, h = f.mask.offsetHeight / q.worldDim.fitHeight, i = h >= g ? g : h;
		q.worldDim.fitHeight = q.worldDim.fitHeight * i, q.worldDim.fitWidth = q.worldDim.fitWidth * i, f.world.offsetHeight < f.mask.offsetHeight && (q.worldZoomLevel = n.zoom(f.world, q.worldDim, q.maskDim, 1, 0, .5, .5)), b.$emit(e.IA_EVENT.updatePolygons)
	}, B = i.get(h.getAPIName());
	B.addFeature("SetHotImg"), B.exposeSetHotImg(function (c) {
		h.setImg(c), a.conf = h.getConf(), b.$emit(e.IA_EVENT.imageChange), u(), a.$apply(), B.fireOnImageChange(c)
	}), b.$on(e.IA_EVENT.changeOpMode, w), b.$on(e.TOOLBAR_EVT.clickZoomIn, z), b.$on(e.TOOLBAR_EVT.clickZoomOut, y), b.$on(e.TOOLBAR_EVT.clickCollapse, A), a.dbclickWorld = function (a) {
		var c = q;
		if (g.getAppMode() !== e.MODE_TYPE.draw) {
			var d = l.windowToMask(c.modalDialogPos, c.domElement, {x: a.clientX, y: a.clientY}), f = l.maskToWorld(c.domElement.world, d), h = l.normalize(c.worldDim, f);
			c.worldZoomLevel = n.zoom(c.domElement.world, c.worldDim, c.maskDim, c.worldZoomLevel, .2, h.x, h.y), g.getAppMode() === e.MODE_TYPE.pan && o.tryToEnablePan(c.worldDim, c.maskDim, c.panInfo), b.$emit(e.IA_EVENT.updatePolygons)
		}
	};
	var C = function () {
		var a = q, c = d.event || d3.event, f = Math.max(-1, Math.min(1, c.wheelDelta || -c.detail)), h = d3.mouse(a.domElement.world), i = {x: h[0], y: h[1]}, j = l.normalize(a.worldDim, i);
		a.worldZoomLevel = n.zoom(a.domElement.world, a.worldDim, a.maskDim, a.worldZoomLevel, .2 * f, j.x, j.y), g.getAppMode() === e.MODE_TYPE.pan && (f > 0 ? o.tryToEnablePan(a.worldDim, a.maskDim, a.panInfo) : o.tryToDisablePan(a.worldDim, a.maskDim, a.panInfo)), b.$emit(e.IA_EVENT.updatePolygons)
	};
	a.mousedownWorld = function (a) {
		if (g.getAppMode() === e.MODE_TYPE.pan && 0 === a.button) {
			var b = k.getElementLeft(q.domElement.world), c = k.getElementTop(q.domElement.world);
			q.evtWorld.isMousedown = !0, q.panInfo.x = a.clientX, q.panInfo.y = a.clientY, q.panInfo.left = b, q.panInfo.top = c
		}
	}, a.mouseupWorld = function () {
		q.evtWorld.isMousedown = !1
	}, a.mousemoveWorld = function (a) {
		var b = q;
		if (g.getAppMode() === e.MODE_TYPE.pan && b.evtWorld.isMousedown) {
			if (b.panInfo.enableOrizontal) {
				var c = b.maskDim.width;
				o.panOrizontal(a, a.clientX - b.panInfo.x, b.domElement.world, c, b.panInfo, b.panStopped)
			}
			if (b.panInfo.enableVertical) {
				var d = b.maskDim.height;
				o.panVertical(a, a.clientY - b.panInfo.y, b.domElement.world, d, b.panInfo, b.panStopped)
			}
		}
	}, a.mouseenterWorld = function () {
	}, a.mouseleaveWorld = function () {
		q.evtWorld.isMousedown = !1
	}, a.clickWorld = function () {
	}
}]), angular.module("ImageAnnotator").controller("toolbarController", ["$scope", "$rootScope", "CONSTANT", "appState", "APIService", "ConfService", "viewService", "selectService", "fullScreenService", "ConfirmDialog", function (a, b, c, d, e, f, g, h, i, j) {
	var k = e.get(f.getAPIName()), l = {draw: !1, select: !1, pan: !0}, m = {select: d3.select(".ia-select"), draw: d3.select(".ia-draw"), pan: d3.select(".ia-pan"), polygons: d3.select(".ia-polygons"), undo: d3.select(".ia-undo"), redo: d3.select(".ia-redo"), dropdownNameCont: d3.select(".ia-name-container"), dropdownInput: d3.select(".ia-input-polyname"), dropdownDelete: d3.select(".ia-delete-poly")}, n = {btn_selected: "button-selected", btn_disable: "disabled", link_disable: "link-disabled"}, o = {enter: c.MODE_TYPE.pan, exit: c.MODE_TYPE.pan};
	a.buttonIcon = {close: c.BTN_ICON.close, collapse: c.BTN_ICON.collapseUp, fullScreen: c.BTN_ICON.enterFullScreen}, a.toolbarCollapse = !1, a.actions = f.getActions();
	var p = f.getActions();
	a.polyname = "";
	var q = void 0;
	m.pan.classed(n.btn_selected, l.pan), b.$on(c.IA_EVENT.selectedPolygon, function (d, e) {
		q = e, m.polygons.classed(n.btn_disable, !1), a.polyname = e.name, e.editable || (m.dropdownDelete.classed(n.link_disable, !0), m.dropdownInput.attr("disabled", ""));
		for (var f in p) {
			var g = d3.select(".ia-action-" + p[f].id);
			p[f].showIf(q) ? (g.classed(n.link_disable, !1), g.on("click", function (a) {
				return function () {
					p[a].action(q), b.$emit(c.IA_EVENT.updatePolygons)
				}
			}(f))) : g.classed(n.link_disable, !0).on("click", function () {
				d3.event.stopPropagation()
			})
		}
		a.$$phase || b.$digest()
	}), b.$on(c.IA_EVENT.deselectedPolygon, function () {
		q = void 0, a.polyname = "", d3.selectAll(".ia-action").on("click", null), m.dropdownDelete.classed(n.link_disable, !1), m.dropdownInput.attr("disabled", null), m.polygons.classed(n.btn_disable, !0)
	}), m.dropdownNameCont.on("click", function () {
		d3.event.stopPropagation()
	}), m.dropdownInput.on("keydown", function () {
		13 == d3.event.keyCode && (this.blur(), k.fireOnPolyRename(angular.copy(q)))
	}), a.$watch("polyname", function () {
		void 0 !== q && (q.name = a.polyname)
	}), a.deletepoly = function (d) {
		q.editable ? (q = void 0, a.polyname = "", m.polygons.classed(n.btn_disable, !0), b.$emit(c.IA_EVENT.deletedPolygon)) : d.stopPropagation()
	}, a.bringfrontpoly = function () {
		g.bringfrontpoly()
	}, a.sendbackpoly = function () {
		g.sendbackpoly()
	}, a.onClickClose = function () {
		j.confirmation("Are you sure you want to close the editor? You will lose any unsaved changes or polygons", "Are you sure?").then(function () {
			b.$emit(c.TOOLBAR_EVT.exit)
		})
	}, a.onClickPolygons = function () {
		a.polyname = q.name, a.$$phase || b.$digest()
	}, a.onClickCollapse = function () {
		var d = a.toolbarCollapse;
		a.buttonIcon.collapse = d ? c.BTN_ICON.collapseUp : c.BTN_ICON.collapseDown, a.toolbarCollapse = !d, b.$emit(c.TOOLBAR_EVT.clickCollapse, a.toolbarCollapse)
	}, a.onClickFullScreen = function () {
		i.isFullScreen ? (i.exitFullScreen(), a.buttonIcon.fullScreen = c.BTN_ICON.enterFullScreen) : (i.goFullScreen(), a.buttonIcon.fullScreen = c.BTN_ICON.exitFullScreen)
	}, a.onClickZoomOut = function () {
		b.$emit(c.TOOLBAR_EVT.clickZoomOut)
	}, a.onClickZoomIn = function () {
		b.$emit(c.TOOLBAR_EVT.clickZoomIn)
	}, a.onClickUndo = function () {
		b.$emit(c.TOOLBAR_EVT.clickUndo)
	}, a.onClickRedo = function () {
		b.$emit(c.TOOLBAR_EVT.clickRedo)
	}, a.onClickSelect = function () {
		l.select || (d.setAppMode(c.MODE_TYPE.select), l.select = !0, l.draw = !1, l.pan = !1, m.select.classed(n.btn_selected, l.select), m.pan.classed(n.btn_selected, !1), m.draw.classed(n.btn_selected, !1), o.exit = o.enter, o.enter = c.MODE_TYPE.select, b.$emit(c.TOOLBAR_EVT.clickSelect, o), b.$emit(c.IA_EVENT.changeOpMode, o))
	}, a.onClickPan = function () {
		l.pan || (d.setAppMode(c.MODE_TYPE.pan), l.select = !1, l.draw = !1, l.pan = !0, m.select.classed(n.btn_selected, !1), m.draw.classed(n.btn_selected, !1), m.pan.classed(n.btn_selected, l.pan), o.exit = o.enter, o.enter = c.MODE_TYPE.pan, b.$emit(c.TOOLBAR_EVT.clickPan, o), b.$emit(c.IA_EVENT.changeOpMode, o))
	}, a.onClickDraw = function () {
		l.draw || (d.setAppMode(c.MODE_TYPE.draw), l.pan = !1, l.select = !1, l.draw = !0, m.select.classed(n.btn_selected, !1), m.pan.classed(n.btn_selected, !1), m.draw.classed(n.btn_selected, l.draw), o.exit = o.enter, o.enter = c.MODE_TYPE.draw, b.$emit(c.TOOLBAR_EVT.clickDraw, o), b.$emit(c.IA_EVENT.changeOpMode, o))
	};
	var r = function (a, b) {
		switch (b.enter) {
			case c.MODE_TYPE.select:
				l.select = !0, l.draw = !1, l.pan = !1, m.select.classed(n.btn_selected, l.select), m.pan.classed(n.btn_selected, !1), m.draw.classed(n.btn_selected, !1);
				break;
			case c.MODE_TYPE.draw:
				l.pan = !1, l.select = !1, l.draw = !0, m.select.classed(n.btn_selected, !1), m.pan.classed(n.btn_selected, !1), m.draw.classed(n.btn_selected, l.draw);
				break;
			case c.MODE_TYPE.pan:
				l.select = !1, l.draw = !1, l.pan = !0, m.select.classed(n.btn_selected, !1), m.draw.classed(n.btn_selected, !1), m.pan.classed(n.btn_selected, l.pan)
		}
	};
	b.$on(c.IA_EVENT.changeOpMode, r)
}]), angular.module("ImageAnnotator").controller("svgController", ["$scope", "$rootScope", "$window", "CONSTANT", "appState", "ConfService", "APIService", "selectService", "dragService", "utilityService", "viewService", "conversionService", "polygonService", function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
	var n;
	initState = function () {
		n = {drawing: !1, drawingPoly: void 0, ctxMenuOpened: !1, d3: {svg: d3.select(".ia-main-svg"), world: d3.select(".ia-world"), firstNode: void 0, openPolyContainer: void 0, tmpNode: void 0, tmpLine: void 0}, dom: {mask: d3.select(".ia-mask")[0][0], world: d3.select(".ia-world")[0][0], svg: d3.select(".ia-main-svg")[0][0]}, drag: {maxX: void 0, maxY: void 0, minX: void 0, minY: void 0, d3Preline: void 0, d3Succline: void 0}, polygons: []}, i.initialize(n), h.initialize(n.polygons, void 0)
	}, initState(), b.$on(d.IA_EVENT.imageChange, function () {
		initState(), o()
	});
	var o, p, q = k.node.rad, r = 1.5 * q, s = {normal_status: "normal-status", hover_status: "hover-status", select_status: "select-status", not_editable_status: "not-editable-status", first_node: "first-node", closed_poly: "close-status", line_hover: "line-hover", node_hover: "node-hover", node_hover_drawmode: "node-hover-drawmode"}, t = d3.behavior.drag(), u = d3.behavior.drag();
	t.on("dragstart", i.nodedragstarted).on("dragend", i.nodedragended).on("drag", i.nodedraged), u.on("dragstart", i.dragstartpoly).on("drag", i.dragpoly).on("dragend", i.dragendpoly);
	var v = function (a) {
		var b = 0, c = Number(a);
		for (polyindex = -1; b < n.polygons.length && -1 === polyindex;)polyindex = n.polygons[b].id === c ? b : -1, b += 1;
		return polyindex
	}, w = {enterpoly: function () {
		if (!i.dragNodeInfo.dragging) {
			var a = d3.select(this);
			Number(a.attr("data-ia-id")) !== Number(h.selected.id) && a.classed(s.normal_status, !1).classed(s.hover_status, !0)
		}
	}, leavepoly: function () {
		if (!i.dragNodeInfo.dragging && !i.dragedPolyInfo.dragging) {
			var a = d3.select(this);
			a.classed(s.hover_status, !1), Number(a.attr("data-ia-id")) !== Number(h.selected.id) && a.classed(s.normal_status, !0)
		}
	}, rightclickpoly: function () {
		var a = d3.mouse(n.dom.mask), c = d3.select(this), e = n.polygons[v(c.attr("data-ia-id"))];
		h.deselectpoly(), h.selectpoly(c, e), n.ctxMenuOpened = !0, b.$emit(d.IA_EVENT.openContextMenu, a, e), d3.event.preventDefault()
	}, enternode: function () {
		d3.select(this).attr("r", r)
	}, enternodeDrawMode: function () {
		d3.select(this).attr("r", r).classed(s.node_hover_drawmode, !0).classed(s.node_hover, !0)
	}, enternodeSelectMode: function () {
		d3.select(this).classed(s.node_hover, !0).attr("r", r)
	}, leavenode: function () {
		d3.select(this).attr("r", q)
	}, leavenodeDrawMode: function () {
		d3.select(this).attr("r", q).classed(s.node_hover_drawmode, !1).classed(s.node_hover, !1)
	}, leavenodeSelectMode: function () {
		d3.select(this).classed(s.node_hover, !1).attr("r", q)
	}, enterline: function () {
		var a = d3.select(this).classed(s.line_hover, !0).style("opacity", 0), b = {x1: a.attr("x1"), x2: a.attr("x2"), y1: a.attr("y1"), y2: a.attr("y2")}, c = d3.mouse(n.dom.svg);
		n.d3.tmpNode = d3.select(this.parentNode).insert("circle", "line").attr("cx", c[0]).attr("cy", c[1]).attr("r", r).classed("tmp-node", !0), n.d3.tmpLine = d3.select(this.parentNode).insert("line", "circle").attr("x1", b.x1).attr("y1", b.y1).attr("x2", b.x2).attr("y2", b.y2)
	}, leaveline: function () {
		n.d3.tmpNode.remove(), n.d3.tmpLine.remove(), d3.select(this).classed(s.line_hover, !1).style("opacity", 1)
	}, moveline: function () {
		var a = d3.mouse(n.dom.svg);
		n.d3.tmpNode.attr("cx", a[0]).attr("cy", a[1])
	}, clicknode: function () {
		e.pushUndoState(e.createStateObj(n.polygons, h.selected.id)), e.clearRedo();
		var a = Number(d3.select(this).attr("data-ia-node")), b = d3.select(this.parentNode), c = b.attr("data-ia-id"), d = v(c);
		n.drawing || (h.deselectpoly(), h.selectpoly(b, n.polygons[d])), m.deleteNode(n.polygons[d], a), n.polygons[d].points.length <= 3 && b.selectAll("circle").on("click", null).on("mouseover", null).on("mouseleave", null), o(), D.fireOnNodeRemove(angular.copy(n.polygons[d])), d3.event.stopPropagation()
	}, clickline: function () {
		e.pushUndoState(e.createStateObj(n.polygons, h.selected.id)), e.clearRedo();
		var a = Number(d3.select(this).attr("data-ia-line")), b = d3.select(this.parentNode), c = b.attr("data-ia-id"), d = v(c), f = d3.mouse(n.dom.svg), g = {width: n.dom.world.offsetWidth, height: n.dom.world.offsetHeight}, i = l.normalize(g, {x: f[0], y: f[1]});
		n.drawing || (h.deselectpoly(), h.selectpoly(b, n.polygons[d])), m.addNodeAtIndex(n.polygons[d], i, a + 1), o(), D.fireOnNodeAdd(angular.copy(n.polygons[d])), d3.event.stopPropagation()
	}}, x = function (a, b) {
		if (b.exit === d.MODE_TYPE.select && (n.d3.svg.selectAll("g").on("mousedown", null), n.d3.svg.selectAll("circle").on("mousedown", null), n.d3.svg.selectAll("g").classed(s.closed_poly, !1), n.d3.svg.selectAll("circle").on("mouseenter", null).on("mouseleave", null), t.on("drag", null).on("dragend", null).on("dragstart", null), u.on("dragstart", null).on("drag", null).on("dragend", null)), b.exit === d.MODE_TYPE.draw && (n.d3.svg.on("click", null), void 0 !== n.d3.firstNode && n.d3.firstNode.on("click", null).on("mouseenter", null).on("mouseleave", null), n.d3.svg.selectAll("line").on("mouseenter", null).on("mouseleave", null).on("mousemove", null).on("click", null), n.d3.svg.selectAll("circle").on("mouseenter", null).on("mouseleave", null).on("click", null)), b.enter === d.MODE_TYPE.draw) {
			n.d3.svg.on("click", p);
			for (var c = 0; c < n.polygons.length; c += 1) {
				var e = n.polygons[c].id, f = n.d3.svg.select("[data-ia-id='" + e + "']");
				n.polygons[c].closed ? n.polygons[n.polygons.length - 1].closed && n.polygons[c].editable && (f.selectAll("line").on("click", w.clickline).on("mouseenter", w.enterline).on("mousemove", w.moveline).on("mouseleave", w.leaveline), n.polygons[c].points.length > 3 && f.selectAll("circle").on("mouseenter", w.enternodeDrawMode).on("mouseleave", w.leavenodeDrawMode).on("click", w.clicknode)) : (f.select("[data-ia-node='0']").on("mouseenter", w.enternode).on("mouseleave", w.leavenode).on("click", B), f.on("mouseenter", null).on("mouseleave", null))
			}
			n.drawing && (h.deselectpoly(), n.d3.openPolyContainer.classed(s.normal_status, !1), h.selectpoly(n.d3.openPolyContainer, n.drawingPoly))
		}
		if (b.enter === d.MODE_TYPE.select) {
			n.d3.svg.selectAll("g").on("mousedown", h.mousedownpoly), n.d3.svg.selectAll("circle").on("mousedown", h.mousedownnode), n.d3.svg.selectAll("g").classed(s.closed_poly, !0), void 0 !== n.d3.openPolyContainer && n.d3.openPolyContainer.classed(s.closed_poly, !1), t.on("drag", i.nodedraged).on("dragend", i.nodedragended).on("dragstart", i.nodedragstarted), u.on("dragstart", i.dragstartpoly).on("drag", i.dragpoly).on("dragend", i.dragendpoly);
			for (var c = 0; c < n.polygons.length; c += 1) {
				var e = n.polygons[c].id, f = n.d3.svg.select("[data-ia-id='" + e + "']");
				if (n.polygons[c].closed && (f.on("mouseenter", w.enterpoly).on("mouseleave", w.leavepoly), n.polygons[c].editable)) {
					f.call(u);
					var g = f.selectAll("circle").on("mouseenter", w.enternodeSelectMode).on("mouseleave", w.leavenodeSelectMode);
					g.call(t)
				}
			}
		}
	}, y = function () {
		var a = e.popUndoState();
		if (void 0 !== a) {
			e.pushRedoState(e.createStateObj(n.polygons, h.selected.id)), n.polygons = a.polygons, h.deselectpoly();
			var b = a.polygons.length;
			if (b > 0 && void 0 !== a.selectedPolyId) {
				var c = v(a.selectedPolyId), d = n.d3.svg.select("[data-ia-id='" + a.selectedPolyId + "']");
				h.initialize(n.polygons, void 0), h.selectpoly(d, n.polygons[c])
			} else h.initialize(n.polygons, void 0);
			o()
		}
	}, z = function () {
		var a = e.popRedoState();
		if (void 0 !== a) {
			e.pushUndoState(e.createStateObj(n.polygons, h.selected.id)), n.polygons = a.polygons, h.deselectpoly();
			var b = a.polygons.length;
			if (b > 0 && void 0 !== a.selectedPolyId) {
				var c = v(a.selectedPolyId), d = n.d3.svg.select("[data-ia-id='" + a.selectedPolyId + "']");
				h.initialize(n.polygons, void 0), h.selectpoly(d, n.polygons[c])
			} else h.initialize(n.polygons, void 0);
			o()
		}
	}, A = function () {
		e.pushUndoState(e.createStateObj(n.polygons, h.selected.id)), e.clearRedo();
		var a = h.selected.id, b = v(a);
		h.deselectpoly(), n.polygons[b] === n.drawingPoly && (n.drawing = !1, n.d3.firstNode = void 0, n.d3.openPolyContainer = void 0);
		var c = n.polygons.splice(b, 1), d = n.d3.svg.select("[data-ia-id='" + a + "']");
		d.remove(), n.drawing && h.selectpoly(n.d3.openPolyContainer, n.drawingPoly), D.fireOnPolyRemove(angular.copy(c))
	};
	b.$on(d.IA_EVENT.changeOpMode, x), b.$on(d.TOOLBAR_EVT.clickUndo, y), b.$on(d.TOOLBAR_EVT.clickRedo, z), b.$on(d.IA_EVENT.updatePolygons, function () {
		n.polygons.length > 0 && o()
	}), b.$on(d.IA_EVENT.deletedPolygon, A), o = function () {
		var a = {width: n.dom.world.offsetWidth, height: n.dom.world.offsetHeight};
		n.ctxMenuOpened === !0 && (b.$emit(d.IA_EVENT.closeContextMenu), n.ctxMenuOpened = !1), n.d3.svg.selectAll("g").remove();
		for (var c, f = 0; f < n.polygons.length; f++) {
			if (c = k.createSvgPolygon(n.d3.svg, a, n.polygons[f]), c.polyContainer.classed(s.normal_status, !0), n.polygons[f].editable || c.polyContainer.classed(s.not_editable_status, !0), c.polyContainer.on("contextmenu", w.rightclickpoly), e.getAppMode() === d.MODE_TYPE.select && (c.polyContainer.on("mousedown", h.mousedownpoly), c.polyContainer.selectAll("circle").on("mousedown", h.mousedownnode), n.polygons[f].closed && (c.polyContainer.classed(s.closed_poly, !0), n.polygons[f].editable))) {
				c.polyContainer.call(u);
				var g = c.polyContainer.selectAll("circle").on("mouseenter", w.enternodeSelectMode).on("mouseleave", w.leavenodeSelectMode);
				g.call(t)
			}
			n.polygons[f].closed && (c.polyContainer.on("mouseenter", w.enterpoly), c.polyContainer.on("mouseleave", w.leavepoly), e.getAppMode() === d.MODE_TYPE.draw && n.polygons[n.polygons.length - 1].closed && n.polygons[f].editable && (c.polyContainer.selectAll("line").on("mouseenter", w.enterline).on("mousemove", w.moveline).on("mouseleave", w.leaveline).on("click", w.clickline), n.polygons[f].points.length > 3 && c.polyContainer.selectAll("circle").on("mouseenter", w.enternodeDrawMode).on("mouseleave", w.leavenodeDrawMode).on("click", w.clicknode)), k.createInsidePolygon(c.polyContainer, a, n.polygons[f].points))
		}
		if (n.polygons.length > 0) {
			if (n.polygons[n.polygons.length - 1].closed ? (n.d3.openPolyContainer = void 0, n.d3.firstNode = void 0, n.drawing = !1, n.drawingPoly = void 0) : (e.getAppMode() === d.MODE_TYPE.draw && (c.polyContainer.classed(s.normal_status, !1), c.firstNode.on("click", B), c.firstNode.on("mouseenter", w.enternode), c.firstNode.on("mouseleave", w.leavenode)), c.firstNode.classed(s.first_node, !0), n.d3.openPolyContainer = c.polyContainer, n.d3.firstNode = c.firstNode, n.drawing = !0, n.drawingPoly = n.polygons[n.polygons.length - 1]), void 0 !== h.selected.d3ref) {
				var i = n.d3.svg.select("[data-ia-id='" + h.selected.id + "']");
				h.selectpoly(i, n.polygons[v(Number(h.selected.id))])
			}
		} else n.d3.openPolyContainer = void 0, n.d3.firstNode = void 0, n.drawing = !1, n.drawingPoly = void 0
	};
	var B = function () {
		if (n.ctxMenuOpened === !0 && (b.$emit(d.IA_EVENT.closeContextMenu), n.ctxMenuOpened = !1), n.drawingPoly.points.length < 3)return d3.event.stopPropagation(), void 0;
		var a = {width: n.dom.world.offsetWidth, height: n.dom.world.offsetHeight};
		e.pushUndoState(e.createStateObj(n.polygons, h.selected.id)), e.clearRedo(), m.closePolygon(n.drawingPoly);
		var c = n.drawingPoly.points.length, f = l.deNormalize(a, n.drawingPoly.points[c - 1]), g = l.deNormalize(a, n.drawingPoly.points[0]);
		k.addSvgLine(f, g, n.d3.openPolyContainer, c - 1), k.createInsidePolygon(n.d3.openPolyContainer, a, n.drawingPoly.points), n.d3.firstNode.attr("r", q).classed(s.first_node, !1), n.d3.firstNode.on("click", null).on("mouseenter", null).on("mouseleave", null), n.d3.openPolyContainer.on("mouseenter", w.enterpoly).on("mouseleave", w.leavepoly);
		for (var i = 0; i < n.polygons.length; i += 1) {
			var j = n.d3.svg.select("[data-ia-id='" + n.polygons[i].id + "']");
			j.selectAll("line").on("mouseenter", w.enterline).on("mousemove", w.moveline).on("mouseleave", w.leaveline).on("click", w.clickline), n.polygons[i].points.length > 3 && j.selectAll("circle").on("mouseenter", w.enternodeDrawMode).on("mouseleave", w.leavenodeDrawMode).on("click", w.clicknode)
		}
		D.fireOnPolyClose(angular.copy(n.drawingPoly)), n.drawing = !1, n.d3.firstNode = void 0, n.d3.openPolyContainer = void 0, d3.event.stopPropagation()
	};
	p = function () {
		n.ctxMenuOpened === !0 && (b.$emit(d.IA_EVENT.closeContextMenu), n.ctxMenuOpened = !1);
		var a = d3.mouse(n.dom.svg), c = {width: n.dom.world.offsetWidth, height: n.dom.world.offsetHeight}, f = l.normalize(c, {x: a[0], y: a[1]});
		if (e.pushUndoState(e.createStateObj(n.polygons, h.selected.id)), e.clearRedo(), n.drawing) {
			h.selected.id !== n.drawingPoly.id && (h.deselectpoly(), h.selectpoly(n.d3.openPolyContainer, n.drawingPoly)), m.addNode(n.drawingPoly, f);
			var g = {x: a[0], y: a[1]}, i = n.drawingPoly.points.length, j = l.deNormalize(c, n.drawingPoly.points[i - 2]);
			k.addSvgLine(j, g, n.d3.openPolyContainer, i - 2), k.addSvgNode(n.d3.openPolyContainer, g, i - 1), 3 === i && (n.d3.firstNode.on("mouseenter", w.enternode), n.d3.firstNode.on("mouseleave", w.leavenode)), D.fireOnNodeAdd(angular.copy(n.drawingPoly))
		} else {
			h.deselectpoly(), n.d3.svg.selectAll("circle").on("mouseenter", null).on("mouseleave", null).on("click", null), n.d3.svg.selectAll("line").on("mouseenter", null).on("mouseleave", null).on("click", null);
			var o = m.createNode(f.x, f.y), p = m.createPoly([o]);
			n.polygons.push(p), n.drawingPoly = p;
			var q = k.createSvgPolygon(n.d3.svg, c, p);
			h.selectpoly(q.polyContainer, p), n.d3.firstNode = q.firstNode, n.d3.openPolyContainer = q.polyContainer, n.drawing = !0, n.d3.firstNode.on("click", B), n.d3.openPolyContainer.on("contextmenu", w.rightclickpoly), n.d3.firstNode.classed(s.first_node, !0), D.fireOnPolyAdd(angular.copy(p))
		}
	};
	var C = ["PolyAdd", "PolyRemove", "PolyRename", "PolySetEditable", "PolyGetAll"], D = g.get(f.getAPIName());
	D.addFeature(C), D.exposePolyAdd(function (a) {
		if (a.points.length >= 3) {
			var b = "string" == typeof a.name ? a.name : void 0, c = "boolean" == typeof a.editable ? a.editable : void 0, d = m.createPoly(a.points, b, !0, c);
			n.polygons.splice(0, 0, d), o(), D.fireOnPolyAdd(angular.copy(d))
		}
		return angular.copy(d)
	}), D.exposePolyRemove(function (a) {
		var b = v(a);
		if (b > -1) {
			var c = n.polygons.splice(b, 1);
			h.selected.id === a && h.deselectpoly();
			{
				n.d3.svg.select("[data-ia-id='" + a + "']")
			}
			return D.fireOnPolyRemove(angular.copy(localPoly)), angular.copy(c)
		}
	}), D.exposePolyRename(function (a, b) {
		var c = v(a);
		return c > -1 ? ("string" == typeof b && (n.polygons[c].name = angular.copy(b)), D.fireOnPolyRename(angular.copy(n.polygons[c])), angular.copy(n.polygons[c])) : void 0
	}), D.exposePolySetEditable(function (a, b) {
		var c = v(a);
		return c > -1 ? ("boolean" == typeof b && (n.polygons[c].editable = angular.copy(b)), o(), angular.copy(n.polygons[c])) : void 0
	}), D.exposePolyGetAll(function () {
		return angular.copy(n.polygons)
	})
}]), angular.module("ImageAnnotator").controller("contextMenuController", ["$scope", "$rootScope", "CONSTANT", "APIService", "ConfService", "appState", "viewService", function (a, b, c, d, e, f, g) {
	var h = d.get(e.getAPIName()), i = {d3: {menu: d3.select(".ia-poly-context-menu"), container: d3.select(".ia-mask"), polygonsBtn: d3.select(".ia-polygons"), input: d3.select(".ia-pcm-input-polyname"), "delete": d3.select(".ia-pcm-delete-poly")}, dom: {}, event: {open_menu: c.IA_EVENT.openContextMenu, close_menu: c.IA_EVENT.closeContextMenu}, polygon: void 0};
	i.dom.menu = i.d3.menu[0][0], i.dom.container = i.d3.container[0][0];
	var j = {link_disable: "link-disabled"};
	a.pcmPolyname = "", a.actions = e.getActions();
	var k = a.actions;
	a.$watch("pcmPolyname", function () {
		void 0 !== i.polygon && (i.polygon.name = a.pcmPolyname)
	});
	var l, m = 1250, n = function () {
		clearTimeout(l), l = setTimeout(function () {
			q()
		}, m)
	};
	i.d3.input.on("keydown", function () {
		13 == d3.event.keyCode && (this.blur(), h.fireOnPolyRename(angular.copy(i.polygon)))
	});
	var o = function (a) {
		var b = [], c = d3.select(".ia-poly-context-menu")[0][0], d = d3.select(".ia-mask")[0][0];
		return a[0] + c.offsetWidth > d.offsetWidth ? b.push(a[0] - c.offsetWidth) : b.push(a[0]), a[1] + c.offsetHeight > d.offsetHeight ? b.push(a[1] - c.offsetHeight + 50) : b.push(a[1]), b
	}, p = function (d, e, f) {
		i.polygon = f, a.pcmPolyname = f.name, f.editable ? (i.d3.delete.classed(j.link_disable, !1), i.d3.input.attr("disabled", null)) : (i.d3.delete.classed(j.link_disable, !0), i.d3.input.attr("disabled", ""));
		for (var g in k) {
			console.log("Open i in actions ", g, k[g].id, k[g].label);
			var h = d3.select(".ia-pcm-action-" + k[g].id);
			k[g].showIf(f) ? (h.classed(j.link_disable, !1), h.on("click", function (a) {
				return function () {
					console.log("Click on action ", a, f), k[a].action(f), q(), b.$emit(c.IA_EVENT.updatePolygons)
				}
			}(g))) : h.classed(j.link_disable, !0).on("click", function () {
				d3.event.stopPropagation()
			})
		}
		a.$$phase || b.$digest(), i.d3.menu.style("display", "block");
		var l = o(e);
		i.d3.menu.style("left", l[0] + "px"), i.d3.menu.style("top", l[1] + "px"), n()
	}, q = function () {
		i.d3.menu.style("display", "none"), h.fireOnPolyRename(angular.copy(i.polygon)), i.polygon = void 0
	};
	b.$on(i.event.open_menu, p), b.$on(i.event.close_menu, q), a.mouseenterMenu = function () {
		clearTimeout(l)
	}, a.mouseleaveMenu = function () {
		n()
	}, a.deletepoly = function (d) {
		i.polygon.editable && (a.pcmPolyname = "", i.d3.polygonsBtn.classed("disabled", !0), b.$emit(c.IA_EVENT.deletedPolygon), q()), d.stopPropagation()
	}, a.bringfrontpoly = function (a) {
		g.bringfrontpoly(), q(), a.stopPropagation()
	}, a.sendbackpoly = function (a) {
		g.sendbackpoly(), q(), a.stopPropagation()
	}
}]), angular.module("ImageAnnotator").service("appState", ["CONSTANT", "APIService", "ConfService", "$rootScope", function (a, b, c, d) {
	var e = {operativeMode: a.MODE_TYPE.pan, undoPipe: [], redoPipe: []};
	return d.$on(a.IA_EVENT.imageChange, function () {
		e.undoPipe = [], e.redoPipe = []
	}), e.MAX_STATE = 100, e.setAppMode = function (a) {
		e.operativeMode = a, b.get(c.getAPIName()).fireOnChangeOperativeMode(angular.copy(a))
	}, e.getAppMode = function () {
		return e.operativeMode
	}, e.setAPIName = function (a) {
		e.APIName = a
	}, e.getAPIName = function () {
		return e.APIName
	}, e.createStateObj = function (a, b) {
		return{polygons: angular.copy(a), selectedPolyId: b}
	}, e.pushUndoState = function (a) {
		var b = e.undoPipe.push(a);
		b > e.MAX_STATE && e.undoPipe.shift()
	}, e.popUndoState = function () {
		return e.undoPipe.pop()
	}, e.pushRedoState = function (a) {
		var b = e.redoPipe.push(a);
		b > e.MAX_STATE && e.redoPipe.shift()
	}, e.popRedoState = function () {
		return e.redoPipe.pop()
	}, e.clearRedo = function () {
		e.redoPipe.length > 0 && (e.redoPipe = [])
	}, e
}]), angular.module("ImageAnnotator").service("utilityService", function () {
	var a = {};
	return a.setElementWidth = function (a, b) {
		angular.element(a).css("width", b + "px")
	}, a.getElementWidth = function (a) {
		var b = angular.element(a).css("width");
		return parseInt(b, 10)
	}, a.setElementHeight = function (a, b) {
		angular.element(a).css("height", b + "px")
	}, a.getElementHeight = function (a) {
		var b = angular.element(a).css("height");
		return parseInt(b, 10)
	}, a.getElementTop = function (a) {
		var b = angular.element(a).css("top");
		return b = b.substring(0, b.length - 2), Number(b)
	}, a.setElementTop = function (a, b) {
		angular.element(a).css("top", b + "px")
	}, a.setElementMarginTop = function (a, b) {
		angular.element(a).css("margin-top", b + "px")
	}, a.getElementLeft = function (a) {
		var b = angular.element(a).css("left");
		return b = b.substring(0, b.length - 2), Number(b)
	}, a.setElementLeft = function (a, b) {
		angular.element(a).css("left", b + "px")
	}, a.setElementMarginLeft = function (a, b) {
		angular.element(a).css("margin-left", b + "px")
	}, a.translateElement = function (a, b, c) {
		angular.element(a).css("left", b + "px"), angular.element(a).css("top", c + "px")
	}, a.setCursorToPointer = function (a) {
		angular.element(a).css("cursor", "pointer")
	}, a.setCursorToMove = function (a) {
		angular.element(a).css("cursor", "move")
	}, a.setCursorToAuto = function (a) {
		angular.element(a).css("cursor", "auto")
	}, a.fitWorld = function (b) {
		var c = b.image.naturalWidth, d = b.image.naturalHeight, e = a.getElementHeight(b.mask), f = a.getElementWidth(b.mask), g = e / d, h = f / c, i = g >= h ? h : g, j = Math.round(d * i), k = Math.round(c * i);
		angular.element(b.world).css("height", j + "px"), angular.element(b.world).css("width", k + "px");
		var l = (f - k) / 2, m = (e - j) / 2;
		return a.translateElement(b.world, l, m), res = {fitHeight: j, fitWidth: k, leftToFit: l, topToFit: m, width: k, height: j}
	}, a
}), angular.module("ImageAnnotator").service("fullScreenService", ["$window", "$rootScope", "CONSTANT", "utilityService", function (a, b, c, d) {
	var e = {fullScreenElement: void 0, isFullScreen: !1, preFullScreenHeight: 0, modalBody: void 0}, f = function () {
		e.isFullScreen ? (angular.element(e.fullScreenElement).toggleClass("fullscreen"), d.setElementHeight(e.modalBody, e.preFullScreenHeight), b.$emit(c.IA_EVENT.exitFullscreen)) : (e.preFullScreenHeight = e.modalBody.offsetHeight, angular.element(e.fullScreenElement).toggleClass("fullscreen")), e.isFullScreen = !e.isFullScreen
	};
	return e.addFullScreenElement = function (a, b) {
		e.fullScreenElement = a, e.modalBody = b
	}, e.goFullScreen = function () {
		console.log("fullscreen service go fullsceen"), void 0 !== e.fullScreenElement && (e.fullScreenElement.requestFullScreen ? e.fullScreenElement.requestFullScreen() : e.fullScreenElement.mozRequestFullScreen ? e.fullScreenElement.mozRequestFullScreen() : e.fullScreenElement.webkitRequestFullScreen ? e.fullScreenElement.webkitRequestFullscreen() : e.fullScreenElement.msRequestFullScreen && e.fullScreenElement.msRequestFullScreen())
	}, e.exitFullScreen = function () {
		console.log("fullscreen service exit fullsceen"), void 0 !== e.fullScreenElement && (document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
	}, e.addFullScreenListener = function (a) {
		a.addEventListener("fullscreenchange", f, !1), a.addEventListener("mozfullscreenchange", f, !1), a.addEventListener("webkitfullscreenchange", f, !1)
	}, e.removeFullScreenListener = function (a) {
		a.removeEventListener("fullscreenchange", f, !1), a.removeEventListener("mozfullscreenchange", f, !1), a.removeEventListener("webkitfullscreenchange", f, !1)
	}, e
}]), angular.module("ImageAnnotator").service("conversionService", function () {
	var a = {};
	return a.windowToMask = function (a, b, c) {
		var d = {};
		return d.x = c.x - a.left, d.y = c.y - a.top - b.modalHeader.offsetHeight, d
	}, a.maskToWorld = function (a, b) {
		var c = {}, d = angular.element(a).css("left");
		d = d.substring(0, d.length - 2);
		var e = angular.element(a).css("top");
		return e = e.substring(0, e.length - 2), c.x = b.x - Number(d), c.y = b.y - Number(e), c
	}, a.normalize = function (a, b) {
		var c = {};
		return c.x = b.x / a.width, c.y = b.y / a.height, c
	}, a.deNormalize = function (a, b) {
		var c = {};
		return c.x = b.x * a.width, c.y = b.y * a.height, c
	}, a
}), angular.module("ImageAnnotator").service("zoomService", ["utilityService", function (a) {
	var b = {};
	b.zoom = function (b, d, e, f, g, h, i) {
		f += g;
		var j = d.width * g + d.width, k = d.height * g + d.height;
		if (j < d.fitWidth || k < d.fitHeight)f = 1, j = d.fitWidth, k = d.fitHeight; else {
			var l = a.getElementLeft(b), m = a.getElementTop(b), n = l + (d.width - j) * h, o = m + (d.height - k) * i;
			angular.element(b).css("left", n + "px"), angular.element(b).css("top", o + "px")
		}
		return angular.element(b).css("width", j + "px"), angular.element(b).css("height", k + "px"), d.width = j, d.height = k, c(b, d, e), f
	};
	var c = function (b, c, d) {
		var e = a.getElementLeft(b), f = a.getElementTop(b), g = c.width - d.width;
		if (0 >= g)a.setElementLeft(b, g / 2 * -1); else {
			e > 0 && a.setElementLeft(b, 0);
			var h = e + c.width;
			h < d.width && a.setElementLeft(b, e + d.width - h)
		}
		var i = c.height - d.height;
		if (0 >= i)a.setElementTop(b, i / 2 * -1); else {
			f > 0 && a.setElementTop(b, 0);
			var j = f + c.height;
			j < d.height && a.setElementTop(b, f + d.height - j)
		}
	};
	return b
}]), angular.module("ImageAnnotator").service("panService", ["utilityService", function (a) {
	var b = {};
	return b.tryToEnablePan = function (a, b, c) {
		var d = !1;
		return a.height > b.height && (c.enableVertical = !0, d = !0), a.width > b.width && (c.enableOrizontal = !0, d = !0), d
	}, b.tryToDisablePan = function (a, b, c) {
		var d = !1, e = !1;
		return a.height <= b.height && (c.enableVertical = !1, e = !0), a.width <= b.width && (c.enableOrizontal = !1, d = !0), d && e
	}, b.panOrizontal = function (b, c, d, e, f, g) {
		var h = a.getElementWidth(d), i = f.left + c;
		if (!g.right && i > 0)i = 0, f.left = 0, g.right = !0, g.x = b.clientX, angular.element(d).css("left", i + "px"); else if (!g.left && e > i + h) {
			var j = e - h;
			i = j, f.left = j, g.left = !0, g.x = b.clientX, angular.element(d).css("left", i + "px")
		}
		g.right ? (b.clientX - g.x < 0 && (g.right = !1, f.x = b.clientX), g.x = b.clientX) : g.left ? (b.clientX - g.x > 0 && (g.left = !1, f.x = b.clientX), g.x = b.clientX) : angular.element(d).css("left", i + "px")
	}, b.panVertical = function (b, c, d, e, f, g) {
		var h = a.getElementHeight(d), i = f.top + c;
		if (!g.down && i > 0)i = 0, f.top = 0, g.down = !0, g.y = b.clientY, angular.element(d).css("top", i + "px"); else if (!g.up && e > i + h) {
			var j = e - h;
			i = j, f.top = j, g.up = !0, g.y = b.clientY, angular.element(d).css("top", i + "px")
		}
		g.up ? (b.clientY - g.y > 0 && (g.up = !1, f.y = b.clientY), g.y = b.clientY) : g.down ? (b.clientY - g.y < 0 && (g.down = !1, f.y = b.clientY), g.y = b.clientY) : angular.element(d).css("top", i + "px")
	}, b
}]), angular.module("ImageAnnotator").service("keyboardService", ["$rootScope", "CONSTANT", "appState", function (a, b, c) {
	var d = {primaryBtn: !1, orgMode: void 0, tempMode: void 0, listening: !0, tmpChange: void 0}, e = {PAN: 67, SELECT: 88, DRAW: 90}, f = function (f) {
		switch (d.orgMode = c.getAppMode(), f) {
			case e.PAN:
				d.tempMode = b.MODE_TYPE.pan;
				break;
			case e.DRAW:
				d.tempMode = b.MODE_TYPE.draw;
				break;
			case e.SELECT:
				d.tempMode = b.MODE_TYPE.select
		}
		c.setAppMode(d.tempMode), a.$emit(b.IA_EVENT.changeOpMode, {enter: d.tempMode, exit: d.orgMode})
	}, g = function (f) {
		switch (f) {
			case e.PAN:
				d.tempMode = b.MODE_TYPE.pan;
				break;
			case e.DRAW:
				d.tempMode = b.MODE_TYPE.draw;
				break;
			case e.SELECT:
				d.tempMode = b.MODE_TYPE.select
		}
		c.setAppMode(d.orgMode), a.$emit(b.IA_EVENT.changeOpMode, {enter: d.orgMode, exit: d.tempMode})
	};
	return d.onKeyDown = function (a) {
		var b = a.keyCode;
		if (d.listening)switch (b) {
			case e.PAN:
				d.listening = !1, d.tmpChange = a.shiftKey, f(e.PAN);
				break;
			case e.DRAW:
				d.listening = !1, d.tmpChange = a.shiftKey, f(e.DRAW);
				break;
			case e.SELECT:
				d.listening = !1, d.tmpChange = a.shiftKey, f(e.SELECT)
		}
	}, d.onKeyUp = function (a) {
		var b = a.keyCode;
		switch (b) {
			case e.PAN:
				d.listening = !0, d.tmpChange && g(b);
				break;
			case e.DRAW:
				d.listening = !0, d.tmpChange && g(b);
				break;
			case e.SELECT:
				d.listening = !0, d.tmpChange && g(b)
		}
	}, d
}]), angular.module("PolygonModule", []), angular.module("PolygonModule").service("polygonService", function () {
	var a = {}, b = {id: 0, name: "polygon"};
	return a.createNode = function (a, b) {
		return{x: a, y: b}
	}, a.createPoly = function (a, c, d, e) {
		var f = b.id, g = "undefined" == typeof a ? [] : a, h = "undefined" == typeof c ? b.name.concat(f) : c, i = "undefined" == typeof d ? !1 : d, j = "undefined" == typeof e ? !0 : e;
		return b.id = b.id + 1, {id: f, name: h, closed: i, editable: j, points: g}
	}, a.addNode = function (b, c) {
		return b.points.push(a.createNode(c.x, c.y)), b
	}, a.deleteNode = function (a, b) {
		a.points.splice(b, 1)
	}, a.addNodeAtIndex = function (b, c, d) {
		return b.points.splice(d, 0, a.createNode(c.x, c.y)), b
	}, a.closePolygon = function (a) {
		a.closed = !0
	}, a
}), angular.module("PolygonModule").service("viewService", ["conversionService", "selectService", function (a, b) {
	var c = {};
	return c.node = {rad: 5}, c.addSvgNode = function (a, b, d) {
		return a.append("circle").attr("cx", b.x).attr("cy", b.y).attr("r", c.node.rad).attr("data-ia-node", d)
	}, c.addSvgLine = function (a, b, c, d) {
		return c.insert("line", ":first-child").attr("x1", a.x).attr("y1", a.y).attr("x2", b.x).attr("y2", b.y).attr("data-ia-line", d)
	}, c.detectLine = function (a, b, c) {
		var d = 0 > b - 1 ? c.points.length - 1 : b - 1, e = {pre: a.select("[data-ia-line='" + d + "']"), succ: a.select("[data-ia-line='" + b + "']")};
		return e
	}, c.toPointAttr = function (a) {
		return a.x + "," + a.y + " "
	}, c.createInsidePolygon = function (b, d, e, f, g) {
		var h, i = "";
		if (dim = d, "number" == typeof f && f < e.length) {
			for (h = 0; h < e.length; h += 1)i += f === h ? c.toPointAttr(g) : c.toPointAttr(a.deNormalize(dim, e[h]));
			i += 0 === f ? c.toPointAttr(g) : c.toPointAttr(a.deNormalize(dim, e[0]))
		} else {
			for (h = 0; h < e.length; h += 1)i += c.toPointAttr(a.deNormalize(dim, e[h]));
			i += c.toPointAttr(a.deNormalize(dim, e[0]))
		}
		b.insert("polygon", ":first-child").attr("points", i)
	}, c.modifyInsidePolygon = function (b, d, e, f, g) {
		var h, i = "";
		if (dim = d, "number" == typeof f && f < e.length) {
			for (h = 0; h < e.length; h += 1)i += f === h ? c.toPointAttr(g) : c.toPointAttr(a.deNormalize(dim, e[h]));
			i += 0 === f ? c.toPointAttr(g) : c.toPointAttr(a.deNormalize(dim, e[0]))
		}
		b.attr("points", i)
	}, c.bringfrontpoly = function () {
		var a = b.selected.d3ref.remove();
		d3.select(".ia-main-svg").append(function () {
			return a[0][0]
		})
	}, c.sendbackpoly = function () {
		var a = b.selected.d3ref.remove();
		d3.select(".ia-main-svg").insert(function () {
			return a[0][0]
		}, ":first-child")
	}, c.createSvgPolygon = function (b, d, e) {
		var f, g, h, i = {polyContainer: b.append("g").attr("data-ia-id", e.id), firstNode: void 0}, j = e.points, k = d;
		for (f = 0; f < j.length; f += 1)g = a.deNormalize(k, j[f]), h = f + 1 < j.length ? a.deNormalize(k, j[f + 1]) : a.deNormalize(k, j[0]), (f < j.length - 1 || e.closed) && i.polyContainer.insert("line", ":first-child").attr("x1", g.x).attr("y1", g.y).attr("x2", h.x).attr("y2", h.y).attr("data-ia-line", f), 0 === f ? i.firstNode = i.polyContainer.append("circle").attr("cx", g.x).attr("cy", g.y).attr("r", c.node.rad).attr("data-ia-node", 0) : i.polyContainer.append("circle").attr("cx", g.x).attr("cy", g.y).attr("r", c.node.rad).attr("data-ia-node", f);
		return i
	}, c
}]), angular.module("PolygonModule").service("dragService", ["appState", "APIService", "ConfService", "selectService", "viewService", "conversionService", "utilityService", function (a, b, c, d, e, f, g) {
	var h = {dragedPolyInfo: {dragging: !1, index: void 0, id: void 0, nodes: [], lines: []}, dragNodeInfo: {dragging: !1, polyIndex: void 0, nodeIndex: void 0, d3FillPolygon: void 0}}, i = void 0, j = b.get(c.getAPIName()), k = !1;
	h.initialize = function (a) {
		i = a
	};
	var l = function () {
		d3.event.stopPropagation()
	}, m = function () {
		i.d3.svg.on("mousewheel", l)
	}, n = function () {
		i.d3.svg.on("mousewheel", null)
	};
	return h.nodedragstarted = function () {
		if (0 === d3.event.sourceEvent.button) {
			i.drag.maxX = void 0, i.drag.maxY = void 0, i.drag.minX = void 0, i.drag.minY = void 0;
			for (var a = d3.select(this.parentNode), b = a.attr("data-ia-id"), c = 0, d = -1; c < i.polygons.length && -1 === d;)d = i.polygons[c].id === Number(b) ? c : -1, c += 1;
			var f = Number(d3.select(this).attr("data-ia-node")), g = e.detectLine(a, f, i.polygons[d]);
			h.dragNodeInfo.dragging = !0, h.dragNodeInfo.d3FillPolygon = a.select("polygon"), h.dragNodeInfo.polyIndex = d, h.dragNodeInfo.nodeIndex = f, i.drag.d3Preline = g.pre, i.drag.d3Succline = g.succ, m()
		}
	}, h.nodedragended = function () {
		if (0 === d3.event.sourceEvent.button) {
			k && (a.pushUndoState(a.createStateObj(i.polygons, d.selected.id)), a.clearRedo(), k = !1), h.dragNodeInfo.dragging = !1, h.dragNodeInfo.d3FillPolygon = void 0, h.dragNodeInfo.polyIndex = void 0, h.dragNodeInfo.nodeIndex = void 0;
			var b = d3.select(this), c = d3.select(this.parentNode), e = c.attr("data-ia-id"), g = b.attr("data-ia-node"), l = {x: b.attr("cx"), y: b.attr("cy")}, m = {width: i.dom.world.offsetWidth, height: i.dom.world.offsetHeight};
			l = f.normalize(m, l);
			for (var o = 0, p = -1; o < i.polygons.length && -1 === p;)p = i.polygons[o].id === Number(e) ? o : -1, o += 1;
			if (i.polygons[p].points[g].x = l.x, i.polygons[p].points[g].y = l.y, 0 === g) {
				var q = i.polygons[p].points.length;
				i.polygons[p].points[q - 1].x = l.x, i.polygons[p].points[q - 1].y = l.y
			}
			j.fireOnNodeMove(angular.copy(i.polygons[p])), n()
		}
	}, h.nodedraged = function () {
		if (0 === d3.event.sourceEvent.button) {
			k = !0;
			var a = {width: i.dom.world.offsetWidth, height: i.dom.world.offsetHeight}, b = d3.mouse(i.dom.mask), c = d3.mouse(i.dom.world), d = i.dom.mask, f = i.dom.world, j = {x: c[0], y: c[1]}, l = i.drag, m = {};
			margin = 4.5;
			var n = g.getElementLeft(f), o = g.getElementTop(f), p = g.getElementHeight(f), q = g.getElementWidth(f);
			m.left = Math.max(0, n), m.right = Math.min(d.offsetWidth, n + q), m.top = Math.max(0, o), m.bottom = Math.min(d.offsetHeight, o + p), b[0] > m.right && void 0 === l.maxX && (l.maxX = j.x - margin), b[1] > m.bottom && void 0 === l.maxY && (l.maxY = j.y - margin), b[0] < m.left && void 0 === l.minX && (l.minX = j.x + margin), b[1] < m.top && void 0 === l.minY && (l.minY = j.y + margin), j.x = j.x > l.maxX ? l.maxX : j.x, j.y = j.y > l.maxY ? l.maxY : j.y, j.x = j.x < l.minX ? l.minX : j.x, j.y = j.y < l.minY ? l.minY : j.y;
			{
				d3.select(this).attr("cx", j.x).attr("cy", j.y)
			}
			i.drag.d3Preline.attr("x2", j.x).attr("y2", j.y), i.drag.d3Succline.attr("x1", j.x).attr("y1", j.y), e.modifyInsidePolygon(h.dragNodeInfo.d3FillPolygon, a, i.polygons[h.dragNodeInfo.polyIndex].points, h.dragNodeInfo.nodeIndex, j)
		}
	}, h.dragstartpoly = function () {
		if (0 === d3.event.sourceEvent.button) {
			h.dragedPolyInfo.dragging = !0;
			var a = d3.select(this), b = {width: i.dom.world.offsetWidth, height: i.dom.world.offsetHeight}, c = h.dragedPolyInfo, d = a.attr("data-ia-id");
			h.dragedPolyInfo.id = d;
			for (var e = 0, g = -1; e < i.polygons.length && -1 === g;)g = i.polygons[e].id === Number(d) ? e : -1, e += 1;
			h.dragedPolyInfo.index = g, c.nodes = [], c.lines = [];
			var e, j = i.polygons[g];
			for (e = 0; e < j.points.length; e += 1)c.nodes.push(f.deNormalize(b, j.points[e]));
			for (e = 0; e < j.points.length; e += 1) {
				var k = "undefined" == typeof c.nodes[e + 1] ? c.nodes[0] : c.nodes[e + 1], l = {x1: c.nodes[e].x, x2: k.x, y1: c.nodes[e].y, y2: k.y};
				c.lines.push(l)
			}
			m()
		}
	}, h.dragpoly = function () {
		if (0 === d3.event.sourceEvent.button) {
			k = !0;
			var a, b = d3.select(this), c = "";
			for (a = 0; a < h.dragedPolyInfo.nodes.length; a += 1)h.dragedPolyInfo.nodes[a].x += d3.event.dx, h.dragedPolyInfo.nodes[a].y += d3.event.dy, b.select("[data-ia-node='" + a + "']").attr("cx", h.dragedPolyInfo.nodes[a].x).attr("cy", h.dragedPolyInfo.nodes[a].y), c += e.toPointAttr(h.dragedPolyInfo.nodes[a]);
			var a;
			for (a = 0; a < h.dragedPolyInfo.lines.length; a += 1)h.dragedPolyInfo.lines[a].x1 += d3.event.dx, h.dragedPolyInfo.lines[a].y1 += d3.event.dy, h.dragedPolyInfo.lines[a].x2 += d3.event.dx, h.dragedPolyInfo.lines[a].y2 += d3.event.dy, b.select("[data-ia-line='" + a + "']").attr("x1", h.dragedPolyInfo.lines[a].x1).attr("y1", h.dragedPolyInfo.lines[a].y1).attr("x2", h.dragedPolyInfo.lines[a].x2).attr("y2", h.dragedPolyInfo.lines[a].y2);
			b.select("polygon").attr("points", c)
		}
	}, h.dragendpoly = function () {
		if (0 === d3.event.sourceEvent.button) {
			k && (a.pushUndoState(a.createStateObj(i.polygons, d.selected.id)), a.clearRedo(), k = !1), h.dragedPolyInfo.dragging = !1;
			var b = {width: i.dom.world.offsetWidth, height: i.dom.world.offsetHeight}, c = i.polygons[h.dragedPolyInfo.index], e = h.dragedPolyInfo;
			c.points = [];
			var g;
			for (g = 0; g < e.nodes.length; g += 1)c.points.push(f.normalize(b, e.nodes[g]));
			j.fireOnPolyMove(angular.copy(c)), h.dragedPolyInfo.id = void 0, h.dragedPolyInfo.index = void 0, n()
		}
	}, h
}]), angular.module("PolygonModule").service("selectService", ["$rootScope", "CONSTANT", "appState", function (a, b, c) {
	var d = {selected: {id: void 0, d3ref: void 0}}, e = [];
	return d.initialize = function (a, b) {
		e = a, d.selected.d3ref = b
	}, d.deselectpoly = function () {
		void 0 !== d.selected.d3ref && (d.selected.d3ref.classed(b.POLYGON_STYLE.select_status, !1).classed(b.POLYGON_STYLE.hover_status, !1).classed(b.POLYGON_STYLE.normal_status, !0), a.$emit(b.IA_EVENT.deselectedPolygon)), d.selected.d3ref = void 0, d.selected.id = void 0
	}, d.selectpoly = function (c, e) {
		c.classed(b.POLYGON_STYLE.select_status, !0), c.classed(b.POLYGON_STYLE.normal_status, !1), d.selected.d3ref = c, d.selected.id = e.id, a.$emit(b.IA_EVENT.selectedPolygon, e)
	}, d.mousedownpoly = function () {
		var f = d3.select(this), g = Number(f.attr("data-ia-id"));
		g !== d.selected.id && (c.pushUndoState(c.createStateObj(e, d.selected.id)), c.clearRedo()), d.deselectpoly(), f.classed(b.POLYGON_STYLE.select_status, !0).classed(b.POLYGON_STYLE.hover_status, !0).classed(b.POLYGON_STYLE.normal_status, !1), d.selected.id = g, d.selected.d3ref = f;
		for (var h = 0, i = -1; h < e.length && -1 === i;)i = e[h].id === Number(d.selected.id) ? h : -1, h += 1;
		a.$emit(b.IA_EVENT.selectedPolygon, e[i]), d3.event.stopPropagation()
	}, d.mousedownnode = function () {
		var f = (d3.select(this), d3.select(this.parentNode)), g = Number(f.attr("data-ia-id"));
		d.selected.id !== g && (c.pushUndoState(c.createStateObj(e, d.selected.id)), c.clearRedo()), d.deselectpoly(), f.classed(b.POLYGON_STYLE.select_status, !0).classed(b.POLYGON_STYLE.normal_status, !1), d.selected.id = g, d.selected.d3ref = f;
		for (var h = 0, i = -1; h < e.length && -1 === i;)i = e[h].id === Number(d.selected.id) ? h : -1, h += 1;
		a.$emit(b.IA_EVENT.selectedPolygon, e[i]), d3.event.stopPropagation()
	}, d
}]), angular.module("ConfirmModule", ["ui.bootstrap"]).factory("ConfirmDialog", ["$modal", function (a) {
	function b(b, c) {
		var d = a.open({templateUrl: "src/ConfirmModule/confirm.tmpl.html", backdrop: "static", keyboard: !1, resolve: {data: function () {
			return{title: c ? c : "Confirm", message: b}
		}}, controller: "ConfirmController"});
		return d.result
	}

	return{confirmation: b}
}]), angular.module("ConfirmModule").controller("ConfirmController", ["$scope", "$modalInstance", "data", function (a, b, c) {
	a.data = c, a.ok = function () {
		b.close()
	}, a.cancel = function () {
		b.dismiss()
	}
}]), angular.module("APIModule", []).service("APIService", ["$window", function (a) {
	function b(a) {
		return this.conf = a, this.eventCallbacks = {}, this.featureCallbacks = {}, this.global = {}, this
	}

	var c = [], d = {};
	return b.prototype.addEvent = function (a) {
		var b = this, c = b.eventCallbacks, d = a;
		"string" == typeof a && (d = [a]);
		for (var e in d) {
			var f = d[e];
			c[f] = [], b.global["on" + f] = function (a) {
				return function (b) {
					"function" == typeof b && c[a].push(b)
				}
			}(f), b["fireOn" + f] = function (a) {
				return function () {
					var b = Array.prototype.splice.call(arguments, 0);
					for (var d in c[a])c[a][d].apply(this, b)
				}
			}(f)
		}
	}, b.prototype.addFeature = function (a) {
		var b = this, c = b.featureCallbacks, d = a;
		"string" == typeof a && (d = [a]);
		for (var e in d) {
			var f = d[e];
			b["expose" + f] = function (a) {
				return function (b) {
					"function" == typeof b && (c[a] = b)
				}
			}(f), b.global["call" + f] = function (a) {
				return function () {
					if (a in c) {
						var d = Array.prototype.splice.call(arguments, 0);
						return c[a].apply(b, d)
					}
				}
			}(f)
		}
	}, d.init = function (d) {
		if ("globalObjectName"in d) {
			var e = new b(d);
			return a[d.globalObjectName] = e.global, c[d.globalObjectName] = e, e
		}
	}, d.get = function (a) {
		return c[a]
	}, d
}]), angular.module("ImageAnnotator").service("ConfService", function () {
	var a, b, c = {};
	b = {globalObjectName: "IA", useOnlyCallbacks: !1, onLoad: null};
	var d = 0, e = function () {
		return"identifier" + d++
	}, f = function () {
		for (var b in a.actions)a.actions[b].id = e()
	};
	return c.init = function (d) {
		return a = angular.copy(b), angular.extend(a, d), f(), c.getConf()
	}, c.getActionsLabel = function () {
		var b = [];
		for (var c in a.actions)b.push(a.actions[c].label);
		return b
	}, c.getActions = function () {
		return a.actions
	}, c.getAPIName = function () {
		return a.globalObjectName
	}, c.getConf = function () {
		return angular.copy(a)
	}, c.setImg = function (b) {
		a.img = b
	}, c
}), angular.module("ImageAnnotator").run(["$templateCache", function (a) {
	"use strict";
	a.put("index.html", '<!DOCTYPE html>\n<html ng-app="ImageAnnotator">\n<head>\n    <title>Image Annotator</title>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="description" content="Image Annotator">\n    <meta name="viewport" content="width=device-width">\n   \n    <!-- build:css css/main.css -->\n    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css">\n    <link rel="stylesheet" href="../bower_components/font-awesome/css/font-awesome.css">\n\n    <link rel="stylesheet" href="styles/modal_style.css" type="text/css">\n    <link rel="stylesheet" href="styles/polygon_style.css" type="text/css">\n    <link rel="stylesheet" href="styles/toolbar_style.css" type="text/css">\n    <!-- endbuild -->\n    \n    <!-- build:js scripts/libs.js -->\n    <script src="../bower_components/angular/angular.js"></script>\n    <script src="../bower_components/d3/d3.js"></script>\n    <script src="../bower_components/bootstrap-ui/dist/ui-bootstrap-tpls-0.10.0.js"></script>\n    <!-- endbuild -->\n\n    <!-- build:js({.tmp,app}) scripts/ia.js -->\n    <script src="src/app.js"></script>\n\n    <script src="src/imageAnnotator.constants.js"></script>\n    <script src="src/imageAnnotator.ctrl.js"></script>\n    <script src="src/imageAnnotator.directive.js"></script>\n\n    <script src="src/controllers/modalController.js"></script>\n    <script src="src/controllers/toolbarController.js"></script>\n    <script src="src/controllers/svgController.js"></script>\n    <script src="src/controllers/contextMenuController.js"></script>\n\n    <script src="src/services/appState.js"></script>\n    <script src="src/services/utilityService.js"></script>\n    <script src="src/services/fullScreenService.js"></script>\n    <script src="src/services/conversionService.js"></script>\n    <script src="src/services/zoomService.js"></script>\n    <script src="src/services/panService.js"></script>\n    <script src="src/services/keyboardService.js"></script>\n\n    <script src="src/PolygonModule/PolygonModule.js"></script>\n    <script src="src/PolygonModule/polygonService.js"></script>\n    <script src="src/PolygonModule/viewService.js"></script>\n    <script src="src/PolygonModule/dragService.js"></script>\n    <script src="src/PolygonModule/selectService.js"></script>\n\n    <script src="src/ConfirmModule/confirm.factory.js"></script>\n    <script src="src/ConfirmModule/confirm.ctrl.js"></script>\n\n    <script src="src/APIModule/APIService.service.js"></script>\n\n    <script src="src/config/ConfService.js"></script>\n    <!-- endbuild -->\n\n</head>\n<body>\n\n    <script>\n        var confObject = {\n            img: "dante3.jpg",\n            globalObjectName: \'IA\', //nome dell\'oggetto che sarà esposto su window e conterrà i metodi della API\n            onLoad: function() {\n                console.log(\'IA is loaded!\');\n                IA.onOpen(function() { \n                    console.log(\'Modal is open\');\n                });\n                IA.onClose(function() { \n                    console.log(\'Modal is open\');\n                });\n            },\n            actions: [\n                {\n                    label: \'action1\',\n                    action: function(poly) {\n                        console.log(\'exe action 1\');\n                    },\n                    showIf: function(poly) {\n                        console.log(\'Show if 1\', poly);\n                        return true;\n                    }\n                },\n                {\n                    label: \'actionPippo\',\n                    action: function(poly) {\n                        console.log(\'exe action pippo\');\n                    },\n                    showIf: function(poly) {\n                        console.log(\'Show if 2\', poly);\n                        return true;\n                    }\n                },\n                {\n                    label: \'action3\',\n                    action: function(poly) {\n                        console.log(\'exe action 3\');\n                    },\n                    showIf: function(poly) {\n                        console.log(\'Show if 3\', poly);\n                        if(poly.name === \'polygon1\'){\n                            return false;\n                        }else{\n                            return true;\n                        }\n                    }\n                }\n            ]\n        }\n    </script>\n\n    <!-- conf-name è il nome dell\'oggetto di configurazione aggiunto a window -->\n    <image-annotator conf-name="confObject"></image-annotator>\n\n</body>\n</html>'), a.put("src/ConfirmModule/confirm.tmpl.html", '<div class="modal-header">\n    <h3>{{ data.title }}</h3>\n</div>\n<div class="modal-body">\n    {{ data.message }}\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">OK</button>\n    <button class="btn btn-warning" ng-click="cancel()">Cancel</button>\n</div>'), a.put("templates/empty.directive.tmpl.html", "<!-- \n  The image annotator has been initialized with the useOnlyCallbacks option to true.\n  If not configured differently, an IA object is exposed on window ready to interact.\n-->"), a.put("templates/image-annotator.directive.tmpl.html", '<button ng-click="open()">Open Modal!</button>'), a.put("templates/modal_template.html", '<div ng-controller="toolbarController">\n    \n    <div class="btn-group btn-group-sm ia-modal-actions">\n\n        <!--Collapse Button-->\n        <button type="button" class="btn btn-default ia-collapse" tooltip-append-to-body="true" tooltip="Collapse Toolbar" tooltip-placement="bottom" ng-click="onClickCollapse()">\n            <i class="{{buttonIcon.collapse}}"></i>\n        </button>\n\n        <!--Close Button-->        \n        <button type="button" class="btn btn-default ia-close-modal" tooltip-append-to-body="true" tooltip="Close" tooltip-placement="bottom" ng-click="onClickClose()">\n            <i class="{{buttonIcon.close}}"></i>\n        </button>\n        \n    </div>\n\n    <!--Modal Header-->\n    <div class="modal-header">\n\n        <!--Toolbar-->\n        <div class="ia-toolbar" ng-hide="toolbarCollapse">\n\n            <!--Operative Buttons-->\n            <div class="btn-group btn-group-sm">\n                <button type="button" class="btn btn-default ia-draw" tooltip-append-to-body="true" tooltip="Draw Polygon (cmd Z)" tooltip-placement="bottom" ng-click="onClickDraw()">\n                    <i class="fa fa-pencil fa-lg"></i>\n                </button>\n                <button type="button" class="btn btn-default ia-select" tooltip-append-to-body="true" tooltip="Select Polygon (cmd X)" tooltip-placement="bottom" ng-click="onClickSelect()">\n                    <i class="fa fa-hand-o-up fa-lg"></i>\n                </button>\n                <button type="button" class="btn btn-default ia-pan" tooltip-append-to-body="true" tooltip="Pan Image (cmd C)" tooltip-placement="bottom" ng-click="onClickPan()">\n                    <i class="fa fa-arrows fa-lg"></i>\n                </button>\n            </div>\n        \n            <!--Polygons Button-->\n            <div class="btn-group btn-group-sm">\n                <button type="button" class="btn btn-default dropdown-toggle ia-polygons disabled" tooltip-append-to-body="true" tooltip="Actions Menu" tooltip-placement="bottom" ng-click="onClickPolygons()">\n                    <i class="fa fa-dot-circle-o fa-lg"></i>\n                    <span class="caret"></span>\n                </button>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="ia-name-container">\n                            <input type="text" class="ia-input-polyname form-control" ng-model="polyname">\n                        </a>\n                        <hr>\n                        <a ng-repeat="action in actions" class="{{\'ia-action-\'+action.id}}">{{action.label}}</a>\n                        <a class="ia-delete-poly" ng-click="deletepoly($event)">Delete</a>\n                        <hr>\n                        <a class="ia-bring-front-poly" ng-click="bringfrontpoly()">Bring to front</a>\n                        <a class="ia-send-back-poly" ng-click="sendbackpoly()">Send to Back</a>\n                    </li>\n                </ul>\n            </div>\n        \n            <!--Undo/Redo Buttons-->\n            <div class="btn-group btn-group-sm">\n                <button type="button" class="btn btn-default ia-undo" tooltip-append-to-body="true" tooltip="Undo" tooltip-placement="bottom" ng-click="onClickUndo()">\n                    <i class="fa fa-undo fa-lg"></i>\n                </button>\n                <button type="button" class="btn btn-default ia-redo" tooltip-append-to-body="true" tooltip="Redo" tooltip-placement="bottom" ng-click="onClickRedo()">\n                    <!--<span class="glyphicon glyphicon-step-forward"></span>-->\n                    <i class="fa fa-repeat fa-lg"></i>\n                </button>\n            </div>\n        \n            <!--Fullscreen-->\n            <div class="btn-group btn-group-sm pull-right">\n                <button type="button" class="btn btn-default ia-fullscreen" tooltip-append-to-body="true" tooltip="FullScreen" tooltip-placement="bottom" ng-click="onClickFullScreen()">\n                    <i class="{{buttonIcon.fullScreen}}"></i>\n                </button>\n                <!--PolygonList Buttons\n                <button type="button"\n                        class="btn btn-default ia-polygons-list"\n                        tooltip-append-to-body="true"\n                        tooltip="Polygon List">\n                    <i class="fa fa-list-ul fa-lg"></i>\n                </button>-->\n            </div>\n        \n            <!--Zoom Buttons-->\n            <div class="btn-group btn-group-sm pull-right">\n                <button type="button" class="btn btn-default ia-zoom-in" tooltip-append-to-body="true" tooltip="Zoom In" tooltip-placement="bottom" ng-click="onClickZoomIn()">\n                    <i class="fa fa-search-plus fa-lg"></i>\n                </button>\n                <button type="button" class="btn btn-default ia-zoom-out" tooltip-append-to-body="true" tooltip="Zoom Out" tooltip-placement="bottom" ng-click="onClickZoomOut()">\n                    <i class="fa fa-search-minus fa-lg"></i>\n                </button>\n            </div>            \n\n        </div><!--/Toolbar-->\n\n    </div><!--/Modal Header-->\n\n</div><!--/Toolbar Controller-->\n\n\n<div class="modal-body" autofocus="">\n    <!--Plugin Container-->\n    <div class="ia-mask">\n\n        <!--Image and Polygon Container-->\n        <div class="ia-world" ng-mouseenter="mouseenterWorld()" ng-mouseleave="mouseleaveWorld()" ng-dblclick="dbclickWorld($event)" ng-mousedown="mousedownWorld($event)" ng-mouseup="mouseupWorld()" ng-mousemove="mousemoveWorld($event)" ng-click="clickWorld()">\n\n            <!--SVG-->\n            <svg class="ia-main-svg" ng-controller="svgController"></svg>       \n            \n            <!--Image-->            \n            <img class="ia-main-img" ng-src="{{conf.img}}">\n\n        </div><!--/World-->\n\n        <!--tmp node when mouseover line in drawmode-->\n        <div class="ia-tmp-node"></div>\n        \n\n        <!--Context Menu-->\n        <ul class="ia-poly-context-menu dropdown-menu" ng-controller="contextMenuController" ng-mouseenter="mouseenterMenu()" ng-mouseleave="mouseleaveMenu()">\n\n            <li>\n                <a class="ia-pcm-name-container">\n                    <input type="text" class="ia-pcm-input-polyname form-control" ng-model="pcmPolyname">\n                </a>\n                \n                <hr>\n\n                <a ng-repeat="action in actions" class="{{\'ia-pcm-action-\'+action.id}}">{{action.label}}</a>\n\n                <a class="ia-pcm-delete-poly" ng-click="deletepoly($event)">Delete</a>\n                \n                <hr>\n                <a class="ia-pcm-bring-front-poly" ng-click="bringfrontpoly($event)">\n                    Bring to front\n                </a>\n                <a class="ia-pcm-send-back-poly" ng-click="sendbackpoly($event)">\n                    Send to Back\n                </a>                        \n            </li>\n            \n        </ul>\n\n    </div><!--/Mask-->\n\n</div><!--/Modal Body-->\n\n<div class="modal-footer"></div>')
}]);