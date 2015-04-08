/*
 Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
 Available via Academic Free License >= 2.1 OR the modified BSD license.
 see: http://dojotoolkit.org/license for details
 */

/*
 This is an optimized version of Dojo, built for deployment and not for
 development. To get sources and documentation, please visit:

 http://dojotoolkit.org
 */

if (!dojo._hasResource["dojo.window"]) {
	dojo._hasResource["dojo.window"] = true;
	dojo.provide("dojo.window");
	dojo.getObject("window", true, dojo);
	dojo.window.getBox = function () {
		var _1 = (dojo.doc.compatMode == "BackCompat") ? dojo.body() : dojo.doc.documentElement;
		var _2 = dojo._docScroll();
		return {w: _1.clientWidth, h: _1.clientHeight, l: _2.x, t: _2.y};
	};
	dojo.window.get = function (_3) {
		if (dojo.isIE && window !== document.parentWindow) {
			_3.parentWindow.execScript("document._parentWindow = window;", "Javascript");
			var _4 = _3._parentWindow;
			_3._parentWindow = null;
			return _4;
		}
		return _3.parentWindow || _3.defaultView;
	};
	dojo.window.scrollIntoView = function (_5, _6) {
		try {
			_5 = dojo.byId(_5);
			var _7 = _5.ownerDocument || dojo.doc, _8 = _7.body || dojo.body(), _9 = _7.documentElement || _8.parentNode, _a = dojo.isIE, _b = dojo.isWebKit;
			if ((!(dojo.isMoz || _a || _b || dojo.isOpera) || _5 == _8 || _5 == _9) && (typeof _5.scrollIntoView != "undefined")) {
				_5.scrollIntoView(false);
				return;
			}
			var _c = _7.compatMode == "BackCompat", _d = (_a >= 9 && _5.ownerDocument.parentWindow.frameElement) ? ((_9.clientHeight > 0 && _9.clientWidth > 0 && (_8.clientHeight == 0 || _8.clientWidth == 0 || _8.clientHeight > _9.clientHeight || _8.clientWidth > _9.clientWidth)) ? _9 : _8) : (_c ? _8 : _9), _e = _b ? _8 : _d, _f = _d.clientWidth, _10 = _d.clientHeight, rtl = !dojo._isBodyLtr(), _11 = _6 || dojo.position(_5), el = _5.parentNode, _12 = function (el) {
				return ((_a <= 6 || (_a && _c)) ? false : (dojo.style(el, "position").toLowerCase() == "fixed"));
			};
			if (_12(_5)) {
				return;
			}
			while (el) {
				if (el == _8) {
					el = _e;
				}
				var _13 = dojo.position(el), _14 = _12(el);
				if (el == _e) {
					_13.w = _f;
					_13.h = _10;
					if (_e == _9 && _a && rtl) {
						_13.x += _e.offsetWidth - _13.w;
					}
					if (_13.x < 0 || !_a) {
						_13.x = 0;
					}
					if (_13.y < 0 || !_a) {
						_13.y = 0;
					}
				} else {
					var pb = dojo._getPadBorderExtents(el);
					_13.w -= pb.w;
					_13.h -= pb.h;
					_13.x += pb.l;
					_13.y += pb.t;
					var _15 = el.clientWidth, _16 = _13.w - _15;
					if (_15 > 0 && _16 > 0) {
						_13.w = _15;
						_13.x += (rtl && (_a || el.clientLeft > pb.l)) ? _16 : 0;
					}
					_15 = el.clientHeight;
					_16 = _13.h - _15;
					if (_15 > 0 && _16 > 0) {
						_13.h = _15;
					}
				}
				if (_14) {
					if (_13.y < 0) {
						_13.h += _13.y;
						_13.y = 0;
					}
					if (_13.x < 0) {
						_13.w += _13.x;
						_13.x = 0;
					}
					if (_13.y + _13.h > _10) {
						_13.h = _10 - _13.y;
					}
					if (_13.x + _13.w > _f) {
						_13.w = _f - _13.x;
					}
				}
				var l = _11.x - _13.x, t = _11.y - Math.max(_13.y, 0), r = l + _11.w - _13.w, bot = t + _11.h - _13.h;
				if (r * l > 0) {
					var s = Math[l < 0 ? "max" : "min"](l, r);
					if (rtl && ((_a == 8 && !_c) || _a >= 9)) {
						s = -s;
					}
					_11.x += el.scrollLeft;
					el.scrollLeft += s;
					_11.x -= el.scrollLeft;
				}
				if (bot * t > 0) {
					_11.y += el.scrollTop;
					el.scrollTop += Math[t < 0 ? "max" : "min"](t, bot);
					_11.y -= el.scrollTop;
				}
				el = (el != _e) && !_14 && el.parentNode;
			}
		} catch (error) {
			console.error("scrollIntoView: " + error);
			_5.scrollIntoView(false);
		}
	};
}
if (!dojo._hasResource["dijit._base.manager"]) {
	dojo._hasResource["dijit._base.manager"] = true;
	dojo.provide("dijit._base.manager");
	dojo.declare("dijit.WidgetSet", null, {constructor: function () {
		this._hash = {};
		this.length = 0;
	}, add: function (_17) {
		if (this._hash[_17.id]) {
			throw new Error("Tried to register widget with id==" + _17.id + " but that id is already registered");
		}
		this._hash[_17.id] = _17;
		this.length++;
	}, remove: function (id) {
		if (this._hash[id]) {
			delete this._hash[id];
			this.length--;
		}
	}, forEach: function (_18, _19) {
		_19 = _19 || dojo.global;
		var i = 0, id;
		for (id in this._hash) {
			_18.call(_19, this._hash[id], i++, this._hash);
		}
		return this;
	}, filter: function (_1a, _1b) {
		_1b = _1b || dojo.global;
		var res = new dijit.WidgetSet(), i = 0, id;
		for (id in this._hash) {
			var w = this._hash[id];
			if (_1a.call(_1b, w, i++, this._hash)) {
				res.add(w);
			}
		}
		return res;
	}, byId: function (id) {
		return this._hash[id];
	}, byClass: function (cls) {
		var res = new dijit.WidgetSet(), id, _1c;
		for (id in this._hash) {
			_1c = this._hash[id];
			if (_1c.declaredClass == cls) {
				res.add(_1c);
			}
		}
		return res;
	}, toArray: function () {
		var ar = [];
		for (var id in this._hash) {
			ar.push(this._hash[id]);
		}
		return ar;
	}, map: function (_1d, _1e) {
		return dojo.map(this.toArray(), _1d, _1e);
	}, every: function (_1f, _20) {
		_20 = _20 || dojo.global;
		var x = 0, i;
		for (i in this._hash) {
			if (!_1f.call(_20, this._hash[i], x++, this._hash)) {
				return false;
			}
		}
		return true;
	}, some: function (_21, _22) {
		_22 = _22 || dojo.global;
		var x = 0, i;
		for (i in this._hash) {
			if (_21.call(_22, this._hash[i], x++, this._hash)) {
				return true;
			}
		}
		return false;
	}});
	(function () {
		dijit.registry = new dijit.WidgetSet();
		var _23 = dijit.registry._hash, _24 = dojo.attr, _25 = dojo.hasAttr, _26 = dojo.style;
		dijit.byId = function (id) {
			return typeof id == "string" ? _23[id] : id;
		};
		var _27 = {};
		dijit.getUniqueId = function (_28) {
			var id;
			do {
				id = _28 + "_" + (_28 in _27 ? ++_27[_28] : _27[_28] = 0);
			} while (_23[id]);
			return dijit._scopeName == "dijit" ? id : dijit._scopeName + "_" + id;
		};
		dijit.findWidgets = function (_29) {
			var _2a = [];

			function _2b(_2c) {
				for (var _2d = _2c.firstChild; _2d; _2d = _2d.nextSibling) {
					if (_2d.nodeType == 1) {
						var _2e = _2d.getAttribute("widgetId");
						if (_2e) {
							var _2f = _23[_2e];
							if (_2f) {
								_2a.push(_2f);
							}
						} else {
							_2b(_2d);
						}
					}
				}
			};
			_2b(_29);
			return _2a;
		};
		dijit._destroyAll = function () {
			dijit._curFocus = null;
			dijit._prevFocus = null;
			dijit._activeStack = [];
			dojo.forEach(dijit.findWidgets(dojo.body()), function (_30) {
				if (!_30._destroyed) {
					if (_30.destroyRecursive) {
						_30.destroyRecursive();
					} else {
						if (_30.destroy) {
							_30.destroy();
						}
					}
				}
			});
		};
		if (dojo.isIE) {
			dojo.addOnWindowUnload(function () {
				dijit._destroyAll();
			});
		}
		dijit.byNode = function (_31) {
			return _23[_31.getAttribute("widgetId")];
		};
		dijit.getEnclosingWidget = function (_32) {
			while (_32) {
				var id = _32.getAttribute && _32.getAttribute("widgetId");
				if (id) {
					return _23[id];
				}
				_32 = _32.parentNode;
			}
			return null;
		};
		var _33 = (dijit._isElementShown = function (_34) {
			var s = _26(_34);
			return (s.visibility != "hidden") && (s.visibility != "collapsed") && (s.display != "none") && (_24(_34, "type") != "hidden");
		});
		dijit.hasDefaultTabStop = function (_35) {
			switch (_35.nodeName.toLowerCase()) {
				case "a":
					return _25(_35, "href");
				case "area":
				case "button":
				case "input":
				case "object":
				case "select":
				case "textarea":
					return true;
				case "iframe":
					var _36;
					try {
						var _37 = _35.contentDocument;
						if ("designMode" in _37 && _37.designMode == "on") {
							return true;
						}
						_36 = _37.body;
					} catch (e1) {
						try {
							_36 = _35.contentWindow.document.body;
						} catch (e2) {
							return false;
						}
					}
					return _36.contentEditable == "true" || (_36.firstChild && _36.firstChild.contentEditable == "true");
				default:
					return _35.contentEditable == "true";
			}
		};
		var _38 = (dijit.isTabNavigable = function (_39) {
			if (_24(_39, "disabled")) {
				return false;
			} else {
				if (_25(_39, "tabIndex")) {
					return _24(_39, "tabIndex") >= 0;
				} else {
					return dijit.hasDefaultTabStop(_39);
				}
			}
		});
		dijit._getTabNavigable = function (_3a) {
			var _3b, _3c, _3d, _3e, _3f, _40, _41 = {};

			function _42(_43) {
				return _43 && _43.tagName.toLowerCase() == "input" && _43.type && _43.type.toLowerCase() == "radio" && _43.name && _43.name.toLowerCase();
			};
			var _44 = function (_45) {
				dojo.query("> *", _45).forEach(function (_46) {
					if ((dojo.isIE && _46.scopeName !== "HTML") || !_33(_46)) {
						return;
					}
					if (_38(_46)) {
						var _47 = _24(_46, "tabIndex");
						if (!_25(_46, "tabIndex") || _47 == 0) {
							if (!_3b) {
								_3b = _46;
							}
							_3c = _46;
						} else {
							if (_47 > 0) {
								if (!_3d || _47 < _3e) {
									_3e = _47;
									_3d = _46;
								}
								if (!_3f || _47 >= _40) {
									_40 = _47;
									_3f = _46;
								}
							}
						}
						var rn = _42(_46);
						if (dojo.attr(_46, "checked") && rn) {
							_41[rn] = _46;
						}
					}
					if (_46.nodeName.toUpperCase() != "SELECT") {
						_44(_46);
					}
				});
			};
			if (_33(_3a)) {
				_44(_3a);
			}
			function rs(_48) {
				return _41[_42(_48)] || _48;
			};
			return {first: rs(_3b), last: rs(_3c), lowest: rs(_3d), highest: rs(_3f)};
		};
		dijit.getFirstInTabbingOrder = function (_49) {
			var _4a = dijit._getTabNavigable(dojo.byId(_49));
			return _4a.lowest ? _4a.lowest : _4a.first;
		};
		dijit.getLastInTabbingOrder = function (_4b) {
			var _4c = dijit._getTabNavigable(dojo.byId(_4b));
			return _4c.last ? _4c.last : _4c.highest;
		};
		dijit.defaultDuration = dojo.config["defaultDuration"] || 200;
	})();
}
if (!dojo._hasResource["dijit._base.focus"]) {
	dojo._hasResource["dijit._base.focus"] = true;
	dojo.provide("dijit._base.focus");
	dojo.mixin(dijit, {_curFocus: null, _prevFocus: null, isCollapsed: function () {
		return dijit.getBookmark().isCollapsed;
	}, getBookmark: function () {
		var bm, rg, tg, sel = dojo.doc.selection, cf = dijit._curFocus;
		if (dojo.global.getSelection) {
			sel = dojo.global.getSelection();
			if (sel) {
				if (sel.isCollapsed) {
					tg = cf ? cf.tagName : "";
					if (tg) {
						tg = tg.toLowerCase();
						if (tg == "textarea" || (tg == "input" && (!cf.type || cf.type.toLowerCase() == "text"))) {
							sel = {start: cf.selectionStart, end: cf.selectionEnd, node: cf, pRange: true};
							return {isCollapsed: (sel.end <= sel.start), mark: sel};
						}
					}
					bm = {isCollapsed: true};
					if (sel.rangeCount) {
						bm.mark = sel.getRangeAt(0).cloneRange();
					}
				} else {
					rg = sel.getRangeAt(0);
					bm = {isCollapsed: false, mark: rg.cloneRange()};
				}
			}
		} else {
			if (sel) {
				tg = cf ? cf.tagName : "";
				tg = tg.toLowerCase();
				if (cf && tg && (tg == "button" || tg == "textarea" || tg == "input")) {
					if (sel.type && sel.type.toLowerCase() == "none") {
						return {isCollapsed: true, mark: null};
					} else {
						rg = sel.createRange();
						return {isCollapsed: rg.text && rg.text.length ? false : true, mark: {range: rg, pRange: true}};
					}
				}
				bm = {};
				try {
					rg = sel.createRange();
					bm.isCollapsed = !(sel.type == "Text" ? rg.htmlText.length : rg.length);
				} catch (e) {
					bm.isCollapsed = true;
					return bm;
				}
				if (sel.type.toUpperCase() == "CONTROL") {
					if (rg.length) {
						bm.mark = [];
						var i = 0, len = rg.length;
						while (i < len) {
							bm.mark.push(rg.item(i++));
						}
					} else {
						bm.isCollapsed = true;
						bm.mark = null;
					}
				} else {
					bm.mark = rg.getBookmark();
				}
			} else {
				console.warn("No idea how to store the current selection for this browser!");
			}
		}
		return bm;
	}, moveToBookmark: function (_4d) {
		var _4e = dojo.doc, _4f = _4d.mark;
		if (_4f) {
			if (dojo.global.getSelection) {
				var sel = dojo.global.getSelection();
				if (sel && sel.removeAllRanges) {
					if (_4f.pRange) {
						var r = _4f;
						var n = r.node;
						n.selectionStart = r.start;
						n.selectionEnd = r.end;
					} else {
						sel.removeAllRanges();
						sel.addRange(_4f);
					}
				} else {
					console.warn("No idea how to restore selection for this browser!");
				}
			} else {
				if (_4e.selection && _4f) {
					var rg;
					if (_4f.pRange) {
						rg = _4f.range;
					} else {
						if (dojo.isArray(_4f)) {
							rg = _4e.body.createControlRange();
							dojo.forEach(_4f, function (n) {
								rg.addElement(n);
							});
						} else {
							rg = _4e.body.createTextRange();
							rg.moveToBookmark(_4f);
						}
					}
					rg.select();
				}
			}
		}
	}, getFocus: function (_50, _51) {
		var _52 = !dijit._curFocus || (_50 && dojo.isDescendant(dijit._curFocus, _50.domNode)) ? dijit._prevFocus : dijit._curFocus;
		return {node: _52, bookmark: (_52 == dijit._curFocus) && dojo.withGlobal(_51 || dojo.global, dijit.getBookmark), openedForWindow: _51};
	}, focus: function (_53) {
		if (!_53) {
			return;
		}
		var _54 = "node" in _53 ? _53.node : _53, _55 = _53.bookmark, _56 = _53.openedForWindow, _57 = _55 ? _55.isCollapsed : false;
		if (_54) {
			var _58 = (_54.tagName.toLowerCase() == "iframe") ? _54.contentWindow : _54;
			if (_58 && _58.focus) {
				try {
					_58.focus();
				} catch (e) {
				}
			}
			dijit._onFocusNode(_54);
		}
		if (_55 && dojo.withGlobal(_56 || dojo.global, dijit.isCollapsed) && !_57) {
			if (_56) {
				_56.focus();
			}
			try {
				dojo.withGlobal(_56 || dojo.global, dijit.moveToBookmark, null, [_55]);
			} catch (e2) {
			}
		}
	}, _activeStack: [], registerIframe: function (_59) {
		return dijit.registerWin(_59.contentWindow, _59);
	}, unregisterIframe: function (_5a) {
		dijit.unregisterWin(_5a);
	}, registerWin: function (_5b, _5c) {
		var _5d = function (evt) {
			dijit._justMouseDowned = true;
			setTimeout(function () {
				dijit._justMouseDowned = false;
			}, 0);
			if (dojo.isIE && evt && evt.srcElement && evt.srcElement.parentNode == null) {
				return;
			}
			dijit._onTouchNode(_5c || evt.target || evt.srcElement, "mouse");
		};
		var doc = dojo.isIE ? _5b.document.documentElement : _5b.document;
		if (doc) {
			if (dojo.isIE) {
				_5b.document.body.attachEvent("onmousedown", _5d);
				var _5e = function (evt) {
					if (evt.srcElement.tagName.toLowerCase() != "#document" && dijit.isTabNavigable(evt.srcElement)) {
						dijit._onFocusNode(_5c || evt.srcElement);
					} else {
						dijit._onTouchNode(_5c || evt.srcElement);
					}
				};
				doc.attachEvent("onactivate", _5e);
				var _5f = function (evt) {
					dijit._onBlurNode(_5c || evt.srcElement);
				};
				doc.attachEvent("ondeactivate", _5f);
				return function () {
					_5b.document.detachEvent("onmousedown", _5d);
					doc.detachEvent("onactivate", _5e);
					doc.detachEvent("ondeactivate", _5f);
					doc = null;
				};
			} else {
				doc.body.addEventListener("mousedown", _5d, true);
				var _60 = function (evt) {
					dijit._onFocusNode(_5c || evt.target);
				};
				doc.addEventListener("focus", _60, true);
				var _61 = function (evt) {
					dijit._onBlurNode(_5c || evt.target);
				};
				doc.addEventListener("blur", _61, true);
				return function () {
					doc.body.removeEventListener("mousedown", _5d, true);
					doc.removeEventListener("focus", _60, true);
					doc.removeEventListener("blur", _61, true);
					doc = null;
				};
			}
		}
	}, unregisterWin: function (_62) {
		_62 && _62();
	}, _onBlurNode: function (_63) {
		dijit._prevFocus = dijit._curFocus;
		dijit._curFocus = null;
		if (dijit._justMouseDowned) {
			return;
		}
		if (dijit._clearActiveWidgetsTimer) {
			clearTimeout(dijit._clearActiveWidgetsTimer);
		}
		dijit._clearActiveWidgetsTimer = setTimeout(function () {
			delete dijit._clearActiveWidgetsTimer;
			dijit._setStack([]);
			dijit._prevFocus = null;
		}, 100);
	}, _onTouchNode: function (_64, by) {
		if (dijit._clearActiveWidgetsTimer) {
			clearTimeout(dijit._clearActiveWidgetsTimer);
			delete dijit._clearActiveWidgetsTimer;
		}
		var _65 = [];
		try {
			while (_64) {
				var _66 = dojo.attr(_64, "dijitPopupParent");
				if (_66) {
					_64 = dijit.byId(_66).domNode;
				} else {
					if (_64.tagName && _64.tagName.toLowerCase() == "body") {
						if (_64 === dojo.body()) {
							break;
						}
						_64 = dojo.window.get(_64.ownerDocument).frameElement;
					} else {
						var id = _64.getAttribute && _64.getAttribute("widgetId"), _67 = id && dijit.byId(id);
						if (_67 && !(by == "mouse" && _67.get("disabled"))) {
							_65.unshift(id);
						}
						_64 = _64.parentNode;
					}
				}
			}
		} catch (e) {
		}
		dijit._setStack(_65, by);
	}, _onFocusNode: function (_68) {
		if (!_68) {
			return;
		}
		if (_68.nodeType == 9) {
			return;
		}
		dijit._onTouchNode(_68);
		if (_68 == dijit._curFocus) {
			return;
		}
		if (dijit._curFocus) {
			dijit._prevFocus = dijit._curFocus;
		}
		dijit._curFocus = _68;
		dojo.publish("focusNode", [_68]);
	}, _setStack: function (_69, by) {
		var _6a = dijit._activeStack;
		dijit._activeStack = _69;
		for (var _6b = 0; _6b < Math.min(_6a.length, _69.length); _6b++) {
			if (_6a[_6b] != _69[_6b]) {
				break;
			}
		}
		var _6c;
		for (var i = _6a.length - 1; i >= _6b; i--) {
			_6c = dijit.byId(_6a[i]);
			if (_6c) {
				_6c._focused = false;
				_6c.set("focused", false);
				_6c._hasBeenBlurred = true;
				if (_6c._onBlur) {
					_6c._onBlur(by);
				}
				dojo.publish("widgetBlur", [_6c, by]);
			}
		}
		for (i = _6b; i < _69.length; i++) {
			_6c = dijit.byId(_69[i]);
			if (_6c) {
				_6c._focused = true;
				_6c.set("focused", true);
				if (_6c._onFocus) {
					_6c._onFocus(by);
				}
				dojo.publish("widgetFocus", [_6c, by]);
			}
		}
	}});
	dojo.addOnLoad(function () {
		var _6d = dijit.registerWin(window);
		if (dojo.isIE) {
			dojo.addOnWindowUnload(function () {
				dijit.unregisterWin(_6d);
				_6d = null;
			});
		}
	});
}
if (!dojo._hasResource["dojo.AdapterRegistry"]) {
	dojo._hasResource["dojo.AdapterRegistry"] = true;
	dojo.provide("dojo.AdapterRegistry");
	dojo.AdapterRegistry = function (_6e) {
		this.pairs = [];
		this.returnWrappers = _6e || false;
	};
	dojo.extend(dojo.AdapterRegistry, {register: function (_6f, _70, _71, _72, _73) {
		this.pairs[((_73) ? "unshift" : "push")]([_6f, _70, _71, _72]);
	}, match: function () {
		for (var i = 0; i < this.pairs.length; i++) {
			var _74 = this.pairs[i];
			if (_74[1].apply(this, arguments)) {
				if ((_74[3]) || (this.returnWrappers)) {
					return _74[2];
				} else {
					return _74[2].apply(this, arguments);
				}
			}
		}
		throw new Error("No match found");
	}, unregister: function (_75) {
		for (var i = 0; i < this.pairs.length; i++) {
			var _76 = this.pairs[i];
			if (_76[0] == _75) {
				this.pairs.splice(i, 1);
				return true;
			}
		}
		return false;
	}});
}
if (!dojo._hasResource["dijit._base.place"]) {
	dojo._hasResource["dijit._base.place"] = true;
	dojo.provide("dijit._base.place");
	dijit.getViewport = function () {
		return dojo.window.getBox();
	};
	dijit.placeOnScreen = function (_77, pos, _78, _79) {
		var _7a = dojo.map(_78, function (_7b) {
			var c = {corner: _7b, pos: {x: pos.x, y: pos.y}};
			if (_79) {
				c.pos.x += _7b.charAt(1) == "L" ? _79.x : -_79.x;
				c.pos.y += _7b.charAt(0) == "T" ? _79.y : -_79.y;
			}
			return c;
		});
		return dijit._place(_77, _7a);
	};
	dijit._place = function (_7c, _7d, _7e, _7f) {
		var _80 = dojo.window.getBox();
		if (!_7c.parentNode || String(_7c.parentNode.tagName).toLowerCase() != "body") {
			dojo.body().appendChild(_7c);
		}
		var _81 = null;
		dojo.some(_7d, function (_82) {
			var _83 = _82.corner;
			var pos = _82.pos;
			var _84 = 0;
			var _85 = {w: _83.charAt(1) == "L" ? (_80.l + _80.w) - pos.x : pos.x - _80.l, h: _83.charAt(1) == "T" ? (_80.t + _80.h) - pos.y : pos.y - _80.t};
			if (_7e) {
				var res = _7e(_7c, _82.aroundCorner, _83, _85, _7f);
				_84 = typeof res == "undefined" ? 0 : res;
			}
			var _86 = _7c.style;
			var _87 = _86.display;
			var _88 = _86.visibility;
			_86.visibility = "hidden";
			_86.display = "";
			var mb = dojo.marginBox(_7c);
			_86.display = _87;
			_86.visibility = _88;
			var _89 = Math.max(_80.l, _83.charAt(1) == "L" ? pos.x : (pos.x - mb.w)), _8a = Math.max(_80.t, _83.charAt(0) == "T" ? pos.y : (pos.y - mb.h)), _8b = Math.min(_80.l + _80.w, _83.charAt(1) == "L" ? (_89 + mb.w) : pos.x), _8c = Math.min(_80.t + _80.h, _83.charAt(0) == "T" ? (_8a + mb.h) : pos.y), _8d = _8b - _89, _8e = _8c - _8a;
			_84 += (mb.w - _8d) + (mb.h - _8e);
			if (_81 == null || _84 < _81.overflow) {
				_81 = {corner: _83, aroundCorner: _82.aroundCorner, x: _89, y: _8a, w: _8d, h: _8e, overflow: _84, spaceAvailable: _85};
			}
			return !_84;
		});
		if (_81.overflow && _7e) {
			_7e(_7c, _81.aroundCorner, _81.corner, _81.spaceAvailable, _7f);
		}
		var l = dojo._isBodyLtr(), s = _7c.style;
		s.top = _81.y + "px";
		s[l ? "left" : "right"] = (l ? _81.x : _80.w - _81.x - _81.w) + "px";
		return _81;
	};
	dijit.placeOnScreenAroundNode = function (_8f, _90, _91, _92) {
		_90 = dojo.byId(_90);
		var _93 = dojo.position(_90, true);
		return dijit._placeOnScreenAroundRect(_8f, _93.x, _93.y, _93.w, _93.h, _91, _92);
	};
	dijit.placeOnScreenAroundRectangle = function (_94, _95, _96, _97) {
		return dijit._placeOnScreenAroundRect(_94, _95.x, _95.y, _95.width, _95.height, _96, _97);
	};
	dijit._placeOnScreenAroundRect = function (_98, x, y, _99, _9a, _9b, _9c) {
		var _9d = [];
		for (var _9e in _9b) {
			_9d.push({aroundCorner: _9e, corner: _9b[_9e], pos: {x: x + (_9e.charAt(1) == "L" ? 0 : _99), y: y + (_9e.charAt(0) == "T" ? 0 : _9a)}});
		}
		return dijit._place(_98, _9d, _9c, {w: _99, h: _9a});
	};
	dijit.placementRegistry = new dojo.AdapterRegistry();
	dijit.placementRegistry.register("node", function (n, x) {
		return typeof x == "object" && typeof x.offsetWidth != "undefined" && typeof x.offsetHeight != "undefined";
	}, dijit.placeOnScreenAroundNode);
	dijit.placementRegistry.register("rect", function (n, x) {
		return typeof x == "object" && "x" in x && "y" in x && "width" in x && "height" in x;
	}, dijit.placeOnScreenAroundRectangle);
	dijit.placeOnScreenAroundElement = function (_9f, _a0, _a1, _a2) {
		return dijit.placementRegistry.match.apply(dijit.placementRegistry, arguments);
	};
	dijit.getPopupAroundAlignment = function (_a3, _a4) {
		var _a5 = {};
		dojo.forEach(_a3, function (pos) {
			switch (pos) {
				case "after":
					_a5[_a4 ? "BR" : "BL"] = _a4 ? "BL" : "BR";
					break;
				case "before":
					_a5[_a4 ? "BL" : "BR"] = _a4 ? "BR" : "BL";
					break;
				case "below-alt":
					_a4 = !_a4;
				case "below":
					_a5[_a4 ? "BL" : "BR"] = _a4 ? "TL" : "TR";
					_a5[_a4 ? "BR" : "BL"] = _a4 ? "TR" : "TL";
					break;
				case "above-alt":
					_a4 = !_a4;
				case "above":
				default:
					_a5[_a4 ? "TL" : "TR"] = _a4 ? "BL" : "BR";
					_a5[_a4 ? "TR" : "TL"] = _a4 ? "BR" : "BL";
					break;
			}
		});
		return _a5;
	};
}
if (!dojo._hasResource["dijit._base.window"]) {
	dojo._hasResource["dijit._base.window"] = true;
	dojo.provide("dijit._base.window");
	dijit.getDocumentWindow = function (doc) {
		return dojo.window.get(doc);
	};
}
if (!dojo._hasResource["dijit._base.popup"]) {
	dojo._hasResource["dijit._base.popup"] = true;
	dojo.provide("dijit._base.popup");
	dijit.popup = {_stack: [], _beginZIndex: 1000, _idGen: 1, _createWrapper: function (_a6) {
		var _a7 = _a6.declaredClass ? _a6._popupWrapper : (_a6.parentNode && dojo.hasClass(_a6.parentNode, "dijitPopup")), _a8 = _a6.domNode || _a6;
		if (!_a7) {
			_a7 = dojo.create("div", {"class": "dijitPopup", style: {display: "none"}, role: "presentation"}, dojo.body());
			_a7.appendChild(_a8);
			var s = _a8.style;
			s.display = "";
			s.visibility = "";
			s.position = "";
			s.top = "0px";
			if (_a6.declaredClass) {
				_a6._popupWrapper = _a7;
				dojo.connect(_a6, "destroy", function () {
					dojo.destroy(_a7);
					delete _a6._popupWrapper;
				});
			}
		}
		return _a7;
	}, moveOffScreen: function (_a9) {
		var _aa = this._createWrapper(_a9);
		dojo.style(_aa, {visibility: "hidden", top: "-9999px", display: ""});
	}, hide: function (_ab) {
		var _ac = this._createWrapper(_ab);
		dojo.style(_ac, "display", "none");
	}, getTopPopup: function () {
		var _ad = this._stack;
		for (var pi = _ad.length - 1; pi > 0 && _ad[pi].parent === _ad[pi - 1].widget; pi--) {
		}
		return _ad[pi];
	}, open: function (_ae) {
		var _af = this._stack, _b0 = _ae.popup, _b1 = _ae.orient || ((_ae.parent ? _ae.parent.isLeftToRight() : dojo._isBodyLtr()) ? {"BL": "TL", "BR": "TR", "TL": "BL", "TR": "BR"} : {"BR": "TR", "BL": "TL", "TR": "BR", "TL": "BL"}), _b2 = _ae.around, id = (_ae.around && _ae.around.id) ? (_ae.around.id + "_dropdown") : ("popup_" + this._idGen++);
		while (_af.length && (!_ae.parent || !dojo.isDescendant(_ae.parent.domNode, _af[_af.length - 1].widget.domNode))) {
			dijit.popup.close(_af[_af.length - 1].widget);
		}
		var _b3 = this._createWrapper(_b0);
		dojo.attr(_b3, {id: id, style: {zIndex: this._beginZIndex + _af.length}, "class": "dijitPopup " + (_b0.baseClass || _b0["class"] || "").split(" ")[0] + "Popup", dijitPopupParent: _ae.parent ? _ae.parent.id : ""});
		if (dojo.isIE || dojo.isMoz) {
			if (!_b0.bgIframe) {
				_b0.bgIframe = new dijit.BackgroundIframe(_b3);
			}
		}
		var _b4 = _b2 ? dijit.placeOnScreenAroundElement(_b3, _b2, _b1, _b0.orient ? dojo.hitch(_b0, "orient") : null) : dijit.placeOnScreen(_b3, _ae, _b1 == "R" ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], _ae.padding);
		_b3.style.display = "";
		_b3.style.visibility = "visible";
		_b0.domNode.style.visibility = "visible";
		var _b5 = [];
		_b5.push(dojo.connect(_b3, "onkeypress", this, function (evt) {
			if (evt.charOrCode == dojo.keys.ESCAPE && _ae.onCancel) {
				dojo.stopEvent(evt);
				_ae.onCancel();
			} else {
				if (evt.charOrCode === dojo.keys.TAB) {
					dojo.stopEvent(evt);
					var _b6 = this.getTopPopup();
					if (_b6 && _b6.onCancel) {
						_b6.onCancel();
					}
				}
			}
		}));
		if (_b0.onCancel) {
			_b5.push(dojo.connect(_b0, "onCancel", _ae.onCancel));
		}
		_b5.push(dojo.connect(_b0, _b0.onExecute ? "onExecute" : "onChange", this, function () {
			var _b7 = this.getTopPopup();
			if (_b7 && _b7.onExecute) {
				_b7.onExecute();
			}
		}));
		_af.push({widget: _b0, parent: _ae.parent, onExecute: _ae.onExecute, onCancel: _ae.onCancel, onClose: _ae.onClose, handlers: _b5});
		if (_b0.onOpen) {
			_b0.onOpen(_b4);
		}
		return _b4;
	}, close: function (_b8) {
		var _b9 = this._stack;
		while ((_b8 && dojo.some(_b9, function (_ba) {
			return _ba.widget == _b8;
		})) || (!_b8 && _b9.length)) {
			var top = _b9.pop(), _bb = top.widget, _bc = top.onClose;
			if (_bb.onClose) {
				_bb.onClose();
			}
			dojo.forEach(top.handlers, dojo.disconnect);
			if (_bb && _bb.domNode) {
				this.hide(_bb);
			}
			if (_bc) {
				_bc();
			}
		}
	}};
	dijit._frames = new function () {
		var _bd = [];
		this.pop = function () {
			var _be;
			if (_bd.length) {
				_be = _bd.pop();
				_be.style.display = "";
			} else {
				if (dojo.isIE < 9) {
					var _bf = dojo.config["dojoBlankHtmlUrl"] || (dojo.moduleUrl("dojo", "resources/blank.html") + "") || "javascript:\"\"";
					var _c0 = "<iframe src='" + _bf + "'" + " style='position: absolute; left: 0px; top: 0px;" + "z-index: -1; filter:Alpha(Opacity=\"0\");'>";
					_be = dojo.doc.createElement(_c0);
				} else {
					_be = dojo.create("iframe");
					_be.src = "javascript:\"\"";
					_be.className = "dijitBackgroundIframe";
					dojo.style(_be, "opacity", 0.1);
				}
				_be.tabIndex = -1;
				dijit.setWaiRole(_be, "presentation");
			}
			return _be;
		};
		this.push = function (_c1) {
			_c1.style.display = "none";
			_bd.push(_c1);
		};
	}();
	dijit.BackgroundIframe = function (_c2) {
		if (!_c2.id) {
			throw new Error("no id");
		}
		if (dojo.isIE || dojo.isMoz) {
			var _c3 = (this.iframe = dijit._frames.pop());
			_c2.appendChild(_c3);
			if (dojo.isIE < 7 || dojo.isQuirks) {
				this.resize(_c2);
				this._conn = dojo.connect(_c2, "onresize", this, function () {
					this.resize(_c2);
				});
			} else {
				dojo.style(_c3, {width: "100%", height: "100%"});
			}
		}
	};
	dojo.extend(dijit.BackgroundIframe, {resize: function (_c4) {
		if (this.iframe) {
			dojo.style(this.iframe, {width: _c4.offsetWidth + "px", height: _c4.offsetHeight + "px"});
		}
	}, destroy: function () {
		if (this._conn) {
			dojo.disconnect(this._conn);
			this._conn = null;
		}
		if (this.iframe) {
			dijit._frames.push(this.iframe);
			delete this.iframe;
		}
	}});
}
if (!dojo._hasResource["dijit._base.scroll"]) {
	dojo._hasResource["dijit._base.scroll"] = true;
	dojo.provide("dijit._base.scroll");
	dijit.scrollIntoView = function (_c5, pos) {
		dojo.window.scrollIntoView(_c5, pos);
	};
}
if (!dojo._hasResource["dojo.uacss"]) {
	dojo._hasResource["dojo.uacss"] = true;
	dojo.provide("dojo.uacss");
	(function () {
		var d = dojo, _c6 = d.doc.documentElement, ie = d.isIE, _c7 = d.isOpera, maj = Math.floor, ff = d.isFF, _c8 = d.boxModel.replace(/-/, ""), _c9 = {dj_ie: ie, dj_ie6: maj(ie) == 6, dj_ie7: maj(ie) == 7, dj_ie8: maj(ie) == 8, dj_ie9: maj(ie) == 9, dj_quirks: d.isQuirks, dj_iequirks: ie && d.isQuirks, dj_opera: _c7, dj_khtml: d.isKhtml, dj_webkit: d.isWebKit, dj_safari: d.isSafari, dj_chrome: d.isChrome, dj_gecko: d.isMozilla, dj_ff3: maj(ff) == 3};
		_c9["dj_" + _c8] = true;
		var _ca = "";
		for (var clz in _c9) {
			if (_c9[clz]) {
				_ca += clz + " ";
			}
		}
		_c6.className = d.trim(_c6.className + " " + _ca);
		dojo._loaders.unshift(function () {
			if (!dojo._isBodyLtr()) {
				var _cb = "dj_rtl dijitRtl " + _ca.replace(/ /g, "-rtl ");
				_c6.className = d.trim(_c6.className + " " + _cb);
			}
		});
	})();
}
if (!dojo._hasResource["dijit._base.sniff"]) {
	dojo._hasResource["dijit._base.sniff"] = true;
	dojo.provide("dijit._base.sniff");
}
if (!dojo._hasResource["dijit._base.typematic"]) {
	dojo._hasResource["dijit._base.typematic"] = true;
	dojo.provide("dijit._base.typematic");
	dijit.typematic = {_fireEventAndReload: function () {
		this._timer = null;
		this._callback(++this._count, this._node, this._evt);
		this._currentTimeout = Math.max(this._currentTimeout < 0 ? this._initialDelay : (this._subsequentDelay > 1 ? this._subsequentDelay : Math.round(this._currentTimeout * this._subsequentDelay)), this._minDelay);
		this._timer = setTimeout(dojo.hitch(this, "_fireEventAndReload"), this._currentTimeout);
	}, trigger: function (evt, _cc, _cd, _ce, obj, _cf, _d0, _d1) {
		if (obj != this._obj) {
			this.stop();
			this._initialDelay = _d0 || 500;
			this._subsequentDelay = _cf || 0.9;
			this._minDelay = _d1 || 10;
			this._obj = obj;
			this._evt = evt;
			this._node = _cd;
			this._currentTimeout = -1;
			this._count = -1;
			this._callback = dojo.hitch(_cc, _ce);
			this._fireEventAndReload();
			this._evt = dojo.mixin({faux: true}, evt);
		}
	}, stop: function () {
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = null;
		}
		if (this._obj) {
			this._callback(-1, this._node, this._evt);
			this._obj = null;
		}
	}, addKeyListener: function (_d2, _d3, _d4, _d5, _d6, _d7, _d8) {
		if (_d3.keyCode) {
			_d3.charOrCode = _d3.keyCode;
			dojo.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
		} else {
			if (_d3.charCode) {
				_d3.charOrCode = String.fromCharCode(_d3.charCode);
				dojo.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
			}
		}
		return [dojo.connect(_d2, "onkeypress", this, function (evt) {
			if (evt.charOrCode == _d3.charOrCode && (_d3.ctrlKey === undefined || _d3.ctrlKey == evt.ctrlKey) && (_d3.altKey === undefined || _d3.altKey == evt.altKey) && (_d3.metaKey === undefined || _d3.metaKey == (evt.metaKey || false)) && (_d3.shiftKey === undefined || _d3.shiftKey == evt.shiftKey)) {
				dojo.stopEvent(evt);
				dijit.typematic.trigger(evt, _d4, _d2, _d5, _d3, _d6, _d7, _d8);
			} else {
				if (dijit.typematic._obj == _d3) {
					dijit.typematic.stop();
				}
			}
		}), dojo.connect(_d2, "onkeyup", this, function (evt) {
			if (dijit.typematic._obj == _d3) {
				dijit.typematic.stop();
			}
		})];
	}, addMouseListener: function (_d9, _da, _db, _dc, _dd, _de) {
		var dc = dojo.connect;
		return [dc(_d9, "mousedown", this, function (evt) {
			dojo.stopEvent(evt);
			dijit.typematic.trigger(evt, _da, _d9, _db, _d9, _dc, _dd, _de);
		}), dc(_d9, "mouseup", this, function (evt) {
			dojo.stopEvent(evt);
			dijit.typematic.stop();
		}), dc(_d9, "mouseout", this, function (evt) {
			dojo.stopEvent(evt);
			dijit.typematic.stop();
		}), dc(_d9, "mousemove", this, function (evt) {
			evt.preventDefault();
		}), dc(_d9, "dblclick", this, function (evt) {
			dojo.stopEvent(evt);
			if (dojo.isIE) {
				dijit.typematic.trigger(evt, _da, _d9, _db, _d9, _dc, _dd, _de);
				setTimeout(dojo.hitch(this, dijit.typematic.stop), 50);
			}
		})];
	}, addListener: function (_df, _e0, _e1, _e2, _e3, _e4, _e5, _e6) {
		return this.addKeyListener(_e0, _e1, _e2, _e3, _e4, _e5, _e6).concat(this.addMouseListener(_df, _e2, _e3, _e4, _e5, _e6));
	}};
}
if (!dojo._hasResource["dijit._base.wai"]) {
	dojo._hasResource["dijit._base.wai"] = true;
	dojo.provide("dijit._base.wai");
	dijit.wai = {onload: function () {
		var div = dojo.create("div", {id: "a11yTestNode", style: {cssText: "border: 1px solid;" + "border-color:red green;" + "position: absolute;" + "height: 5px;" + "top: -999px;" + "background-image: url(\"" + (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")) + "\");"}}, dojo.body());
		var cs = dojo.getComputedStyle(div);
		if (cs) {
			var _e7 = cs.backgroundImage;
			var _e8 = (cs.borderTopColor == cs.borderRightColor) || (_e7 != null && (_e7 == "none" || _e7 == "url(invalid-url:)"));
			dojo[_e8 ? "addClass" : "removeClass"](dojo.body(), "dijit_a11y");
			if (dojo.isIE) {
				div.outerHTML = "";
			} else {
				dojo.body().removeChild(div);
			}
		}
	}};
	if (dojo.isIE || dojo.isMoz) {
		dojo._loaders.unshift(dijit.wai.onload);
	}
	dojo.mixin(dijit, {hasWaiRole: function (_e9, _ea) {
		var _eb = this.getWaiRole(_e9);
		return _ea ? (_eb.indexOf(_ea) > -1) : (_eb.length > 0);
	}, getWaiRole: function (_ec) {
		return dojo.trim((dojo.attr(_ec, "role") || "").replace("wairole:", ""));
	}, setWaiRole: function (_ed, _ee) {
		dojo.attr(_ed, "role", _ee);
	}, removeWaiRole: function (_ef, _f0) {
		var _f1 = dojo.attr(_ef, "role");
		if (!_f1) {
			return;
		}
		if (_f0) {
			var t = dojo.trim((" " + _f1 + " ").replace(" " + _f0 + " ", " "));
			dojo.attr(_ef, "role", t);
		} else {
			_ef.removeAttribute("role");
		}
	}, hasWaiState: function (_f2, _f3) {
		return _f2.hasAttribute ? _f2.hasAttribute("aria-" + _f3) : !!_f2.getAttribute("aria-" + _f3);
	}, getWaiState: function (_f4, _f5) {
		return _f4.getAttribute("aria-" + _f5) || "";
	}, setWaiState: function (_f6, _f7, _f8) {
		_f6.setAttribute("aria-" + _f7, _f8);
	}, removeWaiState: function (_f9, _fa) {
		_f9.removeAttribute("aria-" + _fa);
	}});
}
if (!dojo._hasResource["dijit._base"]) {
	dojo._hasResource["dijit._base"] = true;
	dojo.provide("dijit._base");
}
if (!dojo._hasResource["dojo.date.stamp"]) {
	dojo._hasResource["dojo.date.stamp"] = true;
	dojo.provide("dojo.date.stamp");
	dojo.getObject("date.stamp", true, dojo);
	dojo.date.stamp.fromISOString = function (_fb, _fc) {
		if (!dojo.date.stamp._isoRegExp) {
			dojo.date.stamp._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
		}
		var _fd = dojo.date.stamp._isoRegExp.exec(_fb), _fe = null;
		if (_fd) {
			_fd.shift();
			if (_fd[1]) {
				_fd[1]--;
			}
			if (_fd[6]) {
				_fd[6] *= 1000;
			}
			if (_fc) {
				_fc = new Date(_fc);
				dojo.forEach(dojo.map(["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"], function (_ff) {
					return _fc["get" + _ff]();
				}), function (_100, _101) {
					_fd[_101] = _fd[_101] || _100;
				});
			}
			_fe = new Date(_fd[0] || 1970, _fd[1] || 0, _fd[2] || 1, _fd[3] || 0, _fd[4] || 0, _fd[5] || 0, _fd[6] || 0);
			if (_fd[0] < 100) {
				_fe.setFullYear(_fd[0] || 1970);
			}
			var _102 = 0, _103 = _fd[7] && _fd[7].charAt(0);
			if (_103 != "Z") {
				_102 = ((_fd[8] || 0) * 60) + (Number(_fd[9]) || 0);
				if (_103 != "-") {
					_102 *= -1;
				}
			}
			if (_103) {
				_102 -= _fe.getTimezoneOffset();
			}
			if (_102) {
				_fe.setTime(_fe.getTime() + _102 * 60000);
			}
		}
		return _fe;
	};
	dojo.date.stamp.toISOString = function (_104, _105) {
		var _106 = function (n) {
			return (n < 10) ? "0" + n : n;
		};
		_105 = _105 || {};
		var _107 = [], _108 = _105.zulu ? "getUTC" : "get", date = "";
		if (_105.selector != "time") {
			var year = _104[_108 + "FullYear"]();
			date = ["0000".substr((year + "").length) + year, _106(_104[_108 + "Month"]() + 1), _106(_104[_108 + "Date"]())].join("-");
		}
		_107.push(date);
		if (_105.selector != "date") {
			var time = [_106(_104[_108 + "Hours"]()), _106(_104[_108 + "Minutes"]()), _106(_104[_108 + "Seconds"]())].join(":");
			var _109 = _104[_108 + "Milliseconds"]();
			if (_105.milliseconds) {
				time += "." + (_109 < 100 ? "0" : "") + _106(_109);
			}
			if (_105.zulu) {
				time += "Z";
			} else {
				if (_105.selector != "time") {
					var _10a = _104.getTimezoneOffset();
					var _10b = Math.abs(_10a);
					time += (_10a > 0 ? "-" : "+") + _106(Math.floor(_10b / 60)) + ":" + _106(_10b % 60);
				}
			}
			_107.push(time);
		}
		return _107.join("T");
	};
}
if (!dojo._hasResource["dojo.parser"]) {
	dojo._hasResource["dojo.parser"] = true;
	dojo.provide("dojo.parser");
	new Date("X");
	dojo.parser = new function () {
		var d = dojo;

		function _10c(_10d) {
			if (d.isString(_10d)) {
				return "string";
			}
			if (typeof _10d == "number") {
				return "number";
			}
			if (typeof _10d == "boolean") {
				return "boolean";
			}
			if (d.isFunction(_10d)) {
				return "function";
			}
			if (d.isArray(_10d)) {
				return "array";
			}
			if (_10d instanceof Date) {
				return "date";
			}
			if (_10d instanceof d._Url) {
				return "url";
			}
			return "object";
		};
		function _10e(_10f, type) {
			switch (type) {
				case "string":
					return _10f;
				case "number":
					return _10f.length ? Number(_10f) : NaN;
				case "boolean":
					return typeof _10f == "boolean" ? _10f : !(_10f.toLowerCase() == "false");
				case "function":
					if (d.isFunction(_10f)) {
						_10f = _10f.toString();
						_10f = d.trim(_10f.substring(_10f.indexOf("{") + 1, _10f.length - 1));
					}
					try {
						if (_10f === "" || _10f.search(/[^\w\.]+/i) != -1) {
							return new Function(_10f);
						} else {
							return d.getObject(_10f, false) || new Function(_10f);
						}
					} catch (e) {
						return new Function();
					}
				case "array":
					return _10f ? _10f.split(/\s*,\s*/) : [];
				case "date":
					switch (_10f) {
						case "":
							return new Date("");
						case "now":
							return new Date();
						default:
							return d.date.stamp.fromISOString(_10f);
					}
				case "url":
					return d.baseUrl + _10f;
				default:
					return d.fromJson(_10f);
			}
		};
		var _110 = {}, _111 = {};
		d.connect(d, "extend", function () {
			_111 = {};
		});
		function _112(cls, _113) {
			for (var name in cls) {
				if (name.charAt(0) == "_") {
					continue;
				}
				if (name in _110) {
					continue;
				}
				_113[name] = _10c(cls[name]);
			}
			return _113;
		};
		function _114(_115, _116) {
			var c = _111[_115];
			if (!c) {
				var cls = d.getObject(_115), _117 = null;
				if (!cls) {
					return null;
				}
				if (!_116) {
					_117 = _112(cls.prototype, {});
				}
				c = {cls: cls, params: _117};
			} else {
				if (!_116 && !c.params) {
					c.params = _112(c.cls.prototype, {});
				}
			}
			return c;
		};
		this._functionFromScript = function (_118, _119) {
			var _11a = "";
			var _11b = "";
			var _11c = (_118.getAttribute(_119 + "args") || _118.getAttribute("args"));
			if (_11c) {
				d.forEach(_11c.split(/\s*,\s*/), function (part, idx) {
					_11a += "var " + part + " = arguments[" + idx + "]; ";
				});
			}
			var _11d = _118.getAttribute("with");
			if (_11d && _11d.length) {
				d.forEach(_11d.split(/\s*,\s*/), function (part) {
					_11a += "with(" + part + "){";
					_11b += "}";
				});
			}
			return new Function(_11a + _118.innerHTML + _11b);
		};
		this.instantiate = function (_11e, _11f, args) {
			var _120 = [], _11f = _11f || {};
			args = args || {};
			var _121 = (args.scope || d._scopeName) + "Type", _122 = "data-" + (args.scope || d._scopeName) + "-";
			d.forEach(_11e, function (obj) {
				if (!obj) {
					return;
				}
				var node, type, _123, _124, _125, _126;
				if (obj.node) {
					node = obj.node;
					type = obj.type;
					_126 = obj.fastpath;
					_123 = obj.clsInfo || (type && _114(type, _126));
					_124 = _123 && _123.cls;
					_125 = obj.scripts;
				} else {
					node = obj;
					type = _121 in _11f ? _11f[_121] : node.getAttribute(_121);
					_123 = type && _114(type);
					_124 = _123 && _123.cls;
					_125 = (_124 && (_124._noScript || _124.prototype._noScript) ? [] : d.query("> script[type^='dojo/']", node));
				}
				if (!_123) {
					throw new Error("Could not load class '" + type);
				}
				var _127 = {};
				if (args.defaults) {
					d._mixin(_127, args.defaults);
				}
				if (obj.inherited) {
					d._mixin(_127, obj.inherited);
				}
				if (_126) {
					var _128 = node.getAttribute(_122 + "props");
					if (_128 && _128.length) {
						try {
							_128 = d.fromJson.call(args.propsThis, "{" + _128 + "}");
							d._mixin(_127, _128);
						} catch (e) {
							throw new Error(e.toString() + " in data-dojo-props='" + _128 + "'");
						}
					}
					var _129 = node.getAttribute(_122 + "attach-point");
					if (_129) {
						_127.dojoAttachPoint = _129;
					}
					var _12a = node.getAttribute(_122 + "attach-event");
					if (_12a) {
						_127.dojoAttachEvent = _12a;
					}
					dojo.mixin(_127, _11f);
				} else {
					var _12b = node.attributes;
					for (var name in _123.params) {
						var item = name in _11f ? {value: _11f[name], specified: true} : _12b.getNamedItem(name);
						if (!item || (!item.specified && (!dojo.isIE || name.toLowerCase() != "value"))) {
							continue;
						}
						var _12c = item.value;
						switch (name) {
							case "class":
								_12c = "className" in _11f ? _11f.className : node.className;
								break;
							case "style":
								_12c = "style" in _11f ? _11f.style : (node.style && node.style.cssText);
						}
						var _12d = _123.params[name];
						if (typeof _12c == "string") {
							_127[name] = _10e(_12c, _12d);
						} else {
							_127[name] = _12c;
						}
					}
				}
				var _12e = [], _12f = [];
				d.forEach(_125, function (_130) {
					node.removeChild(_130);
					var _131 = (_130.getAttribute(_122 + "event") || _130.getAttribute("event")), type = _130.getAttribute("type"), nf = d.parser._functionFromScript(_130, _122);
					if (_131) {
						if (type == "dojo/connect") {
							_12e.push({event: _131, func: nf});
						} else {
							_127[_131] = nf;
						}
					} else {
						_12f.push(nf);
					}
				});
				var _132 = _124.markupFactory || _124.prototype && _124.prototype.markupFactory;
				var _133 = _132 ? _132(_127, node, _124) : new _124(_127, node);
				_120.push(_133);
				var _134 = (node.getAttribute(_122 + "id") || node.getAttribute("jsId"));
				if (_134) {
					d.setObject(_134, _133);
				}
				d.forEach(_12e, function (_135) {
					d.connect(_133, _135.event, null, _135.func);
				});
				d.forEach(_12f, function (func) {
					func.call(_133);
				});
			});
			if (!_11f._started) {
				d.forEach(_120, function (_136) {
					if (!args.noStart && _136 && dojo.isFunction(_136.startup) && !_136._started && (!_136.getParent || !_136.getParent())) {
						_136.startup();
					}
				});
			}
			return _120;
		};
		this.parse = function (_137, args) {
			var root;
			if (!args && _137 && _137.rootNode) {
				args = _137;
				root = args.rootNode;
			} else {
				root = _137;
			}
			root = root ? dojo.byId(root) : dojo.body();
			args = args || {};
			var _138 = (args.scope || d._scopeName) + "Type", _139 = "data-" + (args.scope || d._scopeName) + "-";

			function scan(_13a, list) {
				var _13b = dojo.clone(_13a.inherited);
				dojo.forEach(["dir", "lang"], function (name) {
					var val = _13a.node.getAttribute(name);
					if (val) {
						_13b[name] = val;
					}
				});
				var _13c = _13a.clsInfo && !_13a.clsInfo.cls.prototype._noScript ? _13a.scripts : null;
				var _13d = (!_13a.clsInfo || !_13a.clsInfo.cls.prototype.stopParser) || (args && args.template);
				for (var _13e = _13a.node.firstChild; _13e; _13e = _13e.nextSibling) {
					if (_13e.nodeType == 1) {
						var type, _13f = _13d && _13e.getAttribute(_139 + "type");
						if (_13f) {
							type = _13f;
						} else {
							type = _13d && _13e.getAttribute(_138);
						}
						var _140 = _13f == type;
						if (type) {
							var _141 = {"type": type, fastpath: _140, clsInfo: _114(type, _140), node: _13e, scripts: [], inherited: _13b};
							list.push(_141);
							scan(_141, list);
						} else {
							if (_13c && _13e.nodeName.toLowerCase() == "script") {
								type = _13e.getAttribute("type");
								if (type && /^dojo\/\w/i.test(type)) {
									_13c.push(_13e);
								}
							} else {
								if (_13d) {
									scan({node: _13e, inherited: _13b}, list);
								}
							}
						}
					}
				}
			};
			var _142 = {};
			if (args && args.inherited) {
				for (var key in args.inherited) {
					if (args.inherited[key]) {
						_142[key] = args.inherited[key];
					}
				}
			}
			var list = [];
			scan({node: root, inherited: _142}, list);
			var _143 = args && args.template ? {template: true} : null;
			return this.instantiate(list, _143, args);
		};
	}();
	(function () {
		var _144 = function () {
			if (dojo.config.parseOnLoad) {
				dojo.parser.parse();
			}
		};
		if (dojo.getObject("dijit.wai.onload") === dojo._loaders[0]) {
			dojo._loaders.splice(1, 0, _144);
		} else {
			dojo._loaders.unshift(_144);
		}
	})();
}
if (!dojo._hasResource["dojo.Stateful"]) {
	dojo._hasResource["dojo.Stateful"] = true;
	dojo.provide("dojo.Stateful");
	dojo.declare("dojo.Stateful", null, {postscript: function (_145) {
		if (_145) {
			dojo.mixin(this, _145);
		}
	}, get: function (name) {
		return this[name];
	}, set: function (name, _146) {
		if (typeof name === "object") {
			for (var x in name) {
				this.set(x, name[x]);
			}
			return this;
		}
		var _147 = this[name];
		this[name] = _146;
		if (this._watchCallbacks) {
			this._watchCallbacks(name, _147, _146);
		}
		return this;
	}, watch: function (name, _148) {
		var _149 = this._watchCallbacks;
		if (!_149) {
			var self = this;
			_149 = this._watchCallbacks = function (name, _14a, _14b, _14c) {
				var _14d = function (_14e) {
					if (_14e) {
						_14e = _14e.slice();
						for (var i = 0, l = _14e.length; i < l; i++) {
							try {
								_14e[i].call(self, name, _14a, _14b);
							} catch (e) {
								console.error(e);
							}
						}
					}
				};
				_14d(_149["_" + name]);
				if (!_14c) {
					_14d(_149["*"]);
				}
			};
		}
		if (!_148 && typeof name === "function") {
			_148 = name;
			name = "*";
		} else {
			name = "_" + name;
		}
		var _14f = _149[name];
		if (typeof _14f !== "object") {
			_14f = _149[name] = [];
		}
		_14f.push(_148);
		return {unwatch: function () {
			_14f.splice(dojo.indexOf(_14f, _148), 1);
		}};
	}});
}
if (!dojo._hasResource["dijit._WidgetBase"]) {
	dojo._hasResource["dijit._WidgetBase"] = true;
	dojo.provide("dijit._WidgetBase");
	(function () {
		dojo.declare("dijit._WidgetBase", dojo.Stateful, {id: "", lang: "", dir: "", "class": "", style: "", title: "", tooltip: "", baseClass: "", srcNodeRef: null, domNode: null, containerNode: null, attributeMap: {id: "", dir: "", lang: "", "class": "", style: "", title: ""}, _blankGif: (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")).toString(), postscript: function (_150, _151) {
			this.create(_150, _151);
		}, create: function (_152, _153) {
			this.srcNodeRef = dojo.byId(_153);
			this._connects = [];
			this._subscribes = [];
			if (this.srcNodeRef && (typeof this.srcNodeRef.id == "string")) {
				this.id = this.srcNodeRef.id;
			}
			if (_152) {
				this.params = _152;
				dojo._mixin(this, _152);
			}
			this.postMixInProperties();
			if (!this.id) {
				this.id = dijit.getUniqueId(this.declaredClass.replace(/\./g, "_"));
			}
			dijit.registry.add(this);
			this.buildRendering();
			if (this.domNode) {
				this._applyAttributes();
				var _154 = this.srcNodeRef;
				if (_154 && _154.parentNode && this.domNode !== _154) {
					_154.parentNode.replaceChild(this.domNode, _154);
				}
			}
			if (this.domNode) {
				this.domNode.setAttribute("widgetId", this.id);
			}
			this.postCreate();
			if (this.srcNodeRef && !this.srcNodeRef.parentNode) {
				delete this.srcNodeRef;
			}
			this._created = true;
		}, _applyAttributes: function () {
			var _155 = function (attr, _156) {
				if ((_156.params && attr in _156.params) || _156[attr]) {
					_156.set(attr, _156[attr]);
				}
			};
			for (var attr in this.attributeMap) {
				_155(attr, this);
			}
			dojo.forEach(this._getSetterAttributes(), function (a) {
				if (!(a in this.attributeMap)) {
					_155(a, this);
				}
			}, this);
		}, _getSetterAttributes: function () {
			var ctor = this.constructor;
			if (!ctor._setterAttrs) {
				var r = (ctor._setterAttrs = []), _157, _158 = ctor.prototype;
				for (var _159 in _158) {
					if (dojo.isFunction(_158[_159]) && (_157 = _159.match(/^_set([a-zA-Z]*)Attr$/)) && _157[1]) {
						r.push(_157[1].charAt(0).toLowerCase() + _157[1].substr(1));
					}
				}
			}
			return ctor._setterAttrs;
		}, postMixInProperties: function () {
		}, buildRendering: function () {
			if (!this.domNode) {
				this.domNode = this.srcNodeRef || dojo.create("div");
			}
			if (this.baseClass) {
				var _15a = this.baseClass.split(" ");
				if (!this.isLeftToRight()) {
					_15a = _15a.concat(dojo.map(_15a, function (name) {
						return name + "Rtl";
					}));
				}
				dojo.addClass(this.domNode, _15a);
			}
		}, postCreate: function () {
		}, startup: function () {
			this._started = true;
		}, destroyRecursive: function (_15b) {
			this._beingDestroyed = true;
			this.destroyDescendants(_15b);
			this.destroy(_15b);
		}, destroy: function (_15c) {
			this._beingDestroyed = true;
			this.uninitialize();
			var d = dojo, dfe = d.forEach, dun = d.unsubscribe;
			dfe(this._connects, function (_15d) {
				dfe(_15d, d.disconnect);
			});
			dfe(this._subscribes, function (_15e) {
				dun(_15e);
			});
			dfe(this._supportingWidgets || [], function (w) {
				if (w.destroyRecursive) {
					w.destroyRecursive();
				} else {
					if (w.destroy) {
						w.destroy();
					}
				}
			});
			this.destroyRendering(_15c);
			dijit.registry.remove(this.id);
			this._destroyed = true;
		}, destroyRendering: function (_15f) {
			if (this.bgIframe) {
				this.bgIframe.destroy(_15f);
				delete this.bgIframe;
			}
			if (this.domNode) {
				if (_15f) {
					dojo.removeAttr(this.domNode, "widgetId");
				} else {
					dojo.destroy(this.domNode);
				}
				delete this.domNode;
			}
			if (this.srcNodeRef) {
				if (!_15f) {
					dojo.destroy(this.srcNodeRef);
				}
				delete this.srcNodeRef;
			}
		}, destroyDescendants: function (_160) {
			dojo.forEach(this.getChildren(), function (_161) {
				if (_161.destroyRecursive) {
					_161.destroyRecursive(_160);
				}
			});
		}, uninitialize: function () {
			return false;
		}, _setClassAttr: function (_162) {
			var _163 = this[this.attributeMap["class"] || "domNode"];
			dojo.replaceClass(_163, _162, this["class"]);
			this._set("class", _162);
		}, _setStyleAttr: function (_164) {
			var _165 = this[this.attributeMap.style || "domNode"];
			if (dojo.isObject(_164)) {
				dojo.style(_165, _164);
			} else {
				if (_165.style.cssText) {
					_165.style.cssText += "; " + _164;
				} else {
					_165.style.cssText = _164;
				}
			}
			this._set("style", _164);
		}, _attrToDom: function (attr, _166) {
			var _167 = this.attributeMap[attr];
			dojo.forEach(dojo.isArray(_167) ? _167 : [_167], function (_168) {
				var _169 = this[_168.node || _168 || "domNode"];
				var type = _168.type || "attribute";
				switch (type) {
					case "attribute":
						if (dojo.isFunction(_166)) {
							_166 = dojo.hitch(this, _166);
						}
						var _16a = _168.attribute ? _168.attribute : (/^on[A-Z][a-zA-Z]*$/.test(attr) ? attr.toLowerCase() : attr);
						dojo.attr(_169, _16a, _166);
						break;
					case "innerText":
						_169.innerHTML = "";
						_169.appendChild(dojo.doc.createTextNode(_166));
						break;
					case "innerHTML":
						_169.innerHTML = _166;
						break;
					case "class":
						dojo.replaceClass(_169, _166, this[attr]);
						break;
				}
			}, this);
		}, get: function (name) {
			var _16b = this._getAttrNames(name);
			return this[_16b.g] ? this[_16b.g]() : this[name];
		}, set: function (name, _16c) {
			if (typeof name === "object") {
				for (var x in name) {
					this.set(x, name[x]);
				}
				return this;
			}
			var _16d = this._getAttrNames(name);
			if (this[_16d.s]) {
				var _16e = this[_16d.s].apply(this, Array.prototype.slice.call(arguments, 1));
			} else {
				if (name in this.attributeMap) {
					this._attrToDom(name, _16c);
				}
				this._set(name, _16c);
			}
			return _16e || this;
		}, _attrPairNames: {}, _getAttrNames: function (name) {
			var apn = this._attrPairNames;
			if (apn[name]) {
				return apn[name];
			}
			var uc = name.charAt(0).toUpperCase() + name.substr(1);
			return (apn[name] = {n: name + "Node", s: "_set" + uc + "Attr", g: "_get" + uc + "Attr"});
		}, _set: function (name, _16f) {
			var _170 = this[name];
			this[name] = _16f;
			if (this._watchCallbacks && this._created && _16f !== _170) {
				this._watchCallbacks(name, _170, _16f);
			}
		}, toString: function () {
			return "[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]";
		}, getDescendants: function () {
			return this.containerNode ? dojo.query("[widgetId]", this.containerNode).map(dijit.byNode) : [];
		}, getChildren: function () {
			return this.containerNode ? dijit.findWidgets(this.containerNode) : [];
		}, connect: function (obj, _171, _172) {
			var _173 = [dojo._connect(obj, _171, this, _172)];
			this._connects.push(_173);
			return _173;
		}, disconnect: function (_174) {
			for (var i = 0; i < this._connects.length; i++) {
				if (this._connects[i] == _174) {
					dojo.forEach(_174, dojo.disconnect);
					this._connects.splice(i, 1);
					return;
				}
			}
		}, subscribe: function (_175, _176) {
			var _177 = dojo.subscribe(_175, this, _176);
			this._subscribes.push(_177);
			return _177;
		}, unsubscribe: function (_178) {
			for (var i = 0; i < this._subscribes.length; i++) {
				if (this._subscribes[i] == _178) {
					dojo.unsubscribe(_178);
					this._subscribes.splice(i, 1);
					return;
				}
			}
		}, isLeftToRight: function () {
			return this.dir ? (this.dir == "ltr") : dojo._isBodyLtr();
		}, placeAt: function (_179, _17a) {
			if (_179.declaredClass && _179.addChild) {
				_179.addChild(this, _17a);
			} else {
				dojo.place(this.domNode, _179, _17a);
			}
			return this;
		}});
	})();
}
if (!dojo._hasResource["dijit._Widget"]) {
	dojo._hasResource["dijit._Widget"] = true;
	dojo.provide("dijit._Widget");
	dojo.connect(dojo, "_connect", function (_17b, _17c) {
		if (_17b && dojo.isFunction(_17b._onConnect)) {
			_17b._onConnect(_17c);
		}
	});
	dijit._connectOnUseEventHandler = function (_17d) {
	};
	dijit._lastKeyDownNode = null;
	if (dojo.isIE) {
		(function () {
			var _17e = function (evt) {
				dijit._lastKeyDownNode = evt.srcElement;
			};
			dojo.doc.attachEvent("onkeydown", _17e);
			dojo.addOnWindowUnload(function () {
				dojo.doc.detachEvent("onkeydown", _17e);
			});
		})();
	} else {
		dojo.doc.addEventListener("keydown", function (evt) {
			dijit._lastKeyDownNode = evt.target;
		}, true);
	}
	(function () {
		dojo.declare("dijit._Widget", dijit._WidgetBase, {_deferredConnects: {onClick: "", onDblClick: "", onKeyDown: "", onKeyPress: "", onKeyUp: "", onMouseMove: "", onMouseDown: "", onMouseOut: "", onMouseOver: "", onMouseLeave: "", onMouseEnter: "", onMouseUp: ""}, onClick: dijit._connectOnUseEventHandler, onDblClick: dijit._connectOnUseEventHandler, onKeyDown: dijit._connectOnUseEventHandler, onKeyPress: dijit._connectOnUseEventHandler, onKeyUp: dijit._connectOnUseEventHandler, onMouseDown: dijit._connectOnUseEventHandler, onMouseMove: dijit._connectOnUseEventHandler, onMouseOut: dijit._connectOnUseEventHandler, onMouseOver: dijit._connectOnUseEventHandler, onMouseLeave: dijit._connectOnUseEventHandler, onMouseEnter: dijit._connectOnUseEventHandler, onMouseUp: dijit._connectOnUseEventHandler, create: function (_17f, _180) {
			this._deferredConnects = dojo.clone(this._deferredConnects);
			for (var attr in this.attributeMap) {
				delete this._deferredConnects[attr];
			}
			for (attr in this._deferredConnects) {
				if (this[attr] !== dijit._connectOnUseEventHandler) {
					delete this._deferredConnects[attr];
				}
			}
			this.inherited(arguments);
			if (this.domNode) {
				for (attr in this.params) {
					this._onConnect(attr);
				}
			}
		}, _onConnect: function (_181) {
			if (_181 in this._deferredConnects) {
				var _182 = this[this._deferredConnects[_181] || "domNode"];
				this.connect(_182, _181.toLowerCase(), _181);
				delete this._deferredConnects[_181];
			}
		}, focused: false, isFocusable: function () {
			return this.focus && (dojo.style(this.domNode, "display") != "none");
		}, onFocus: function () {
		}, onBlur: function () {
		}, _onFocus: function (e) {
			this.onFocus();
		}, _onBlur: function () {
			this.onBlur();
		}, setAttribute: function (attr, _183) {
			dojo.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
			this.set(attr, _183);
		}, attr: function (name, _184) {
			if (dojo.config.isDebug) {
				var _185 = arguments.callee._ach || (arguments.callee._ach = {}), _186 = (arguments.callee.caller || "unknown caller").toString();
				if (!_185[_186]) {
					dojo.deprecated(this.declaredClass + "::attr() is deprecated. Use get() or set() instead, called from " + _186, "", "2.0");
					_185[_186] = true;
				}
			}
			var args = arguments.length;
			if (args >= 2 || typeof name === "object") {
				return this.set.apply(this, arguments);
			} else {
				return this.get(name);
			}
		}, nodesWithKeyClick: ["input", "button"], connect: function (obj, _187, _188) {
			var d = dojo, dc = d._connect, _189 = this.inherited(arguments, [obj, _187 == "ondijitclick" ? "onclick" : _187, _188]);
			if (_187 == "ondijitclick") {
				if (d.indexOf(this.nodesWithKeyClick, obj.nodeName.toLowerCase()) == -1) {
					var m = d.hitch(this, _188);
					_189.push(dc(obj, "onkeydown", this, function (e) {
						if ((e.keyCode == d.keys.ENTER || e.keyCode == d.keys.SPACE) && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
							dijit._lastKeyDownNode = e.target;
							if (!("openDropDown" in this && obj == this._buttonNode)) {
								e.preventDefault();
							}
						}
					}), dc(obj, "onkeyup", this, function (e) {
						if ((e.keyCode == d.keys.ENTER || e.keyCode == d.keys.SPACE) && e.target == dijit._lastKeyDownNode && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
							dijit._lastKeyDownNode = null;
							return m(e);
						}
					}));
				}
			}
			return _189;
		}, _onShow: function () {
			this.onShow();
		}, onShow: function () {
		}, onHide: function () {
		}, onClose: function () {
			return true;
		}});
	})();
}
if (!dojo._hasResource["dojo.string"]) {
	dojo._hasResource["dojo.string"] = true;
	dojo.provide("dojo.string");
	dojo.getObject("string", true, dojo);
	dojo.string.rep = function (str, num) {
		if (num <= 0 || !str) {
			return "";
		}
		var buf = [];
		for (; ;) {
			if (num & 1) {
				buf.push(str);
			}
			if (!(num >>= 1)) {
				break;
			}
			str += str;
		}
		return buf.join("");
	};
	dojo.string.pad = function (text, size, ch, end) {
		if (!ch) {
			ch = "0";
		}
		var out = String(text), pad = dojo.string.rep(ch, Math.ceil((size - out.length) / ch.length));
		return end ? out + pad : pad + out;
	};
	dojo.string.substitute = function (_18a, map, _18b, _18c) {
		_18c = _18c || dojo.global;
		_18b = _18b ? dojo.hitch(_18c, _18b) : function (v) {
			return v;
		};
		return _18a.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (_18d, key, _18e) {
			var _18f = dojo.getObject(key, false, map);
			if (_18e) {
				_18f = dojo.getObject(_18e, false, _18c).call(_18c, _18f, key);
			}
			return _18b(_18f, key).toString();
		});
	};
	dojo.string.trim = String.prototype.trim ? dojo.trim : function (str) {
		str = str.replace(/^\s+/, "");
		for (var i = str.length - 1; i >= 0; i--) {
			if (/\S/.test(str.charAt(i))) {
				str = str.substring(0, i + 1);
				break;
			}
		}
		return str;
	};
}
if (!dojo._hasResource["dojo.cache"]) {
	dojo._hasResource["dojo.cache"] = true;
	dojo.provide("dojo.cache");
	var cache = {};
	dojo.cache = function (_190, url, _191) {
		if (typeof _190 == "string") {
			var _192 = dojo.moduleUrl(_190, url);
		} else {
			_192 = _190;
			_191 = url;
		}
		var key = _192.toString();
		var val = _191;
		if (_191 != undefined && !dojo.isString(_191)) {
			val = ("value" in _191 ? _191.value : undefined);
		}
		var _193 = _191 && _191.sanitize ? true : false;
		if (typeof val == "string") {
			val = cache[key] = _193 ? dojo.cache._sanitize(val) : val;
		} else {
			if (val === null) {
				delete cache[key];
			} else {
				if (!(key in cache)) {
					val = dojo._getText(key);
					cache[key] = _193 ? dojo.cache._sanitize(val) : val;
				}
				val = cache[key];
			}
		}
		return val;
	};
	dojo.cache._sanitize = function (val) {
		if (val) {
			val = val.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
			var _194 = val.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
			if (_194) {
				val = _194[1];
			}
		} else {
			val = "";
		}
		return val;
	};
}
if (!dojo._hasResource["dijit._Templated"]) {
	dojo._hasResource["dijit._Templated"] = true;
	dojo.provide("dijit._Templated");
	dojo.declare("dijit._Templated", null, {templateString: null, templatePath: null, widgetsInTemplate: false, _skipNodeCache: false, _earlyTemplatedStartup: false, constructor: function () {
		this._attachPoints = [];
		this._attachEvents = [];
	}, _stringRepl: function (tmpl) {
		var _195 = this.declaredClass, _196 = this;
		return dojo.string.substitute(tmpl, this, function (_197, key) {
			if (key.charAt(0) == "!") {
				_197 = dojo.getObject(key.substr(1), false, _196);
			}
			if (typeof _197 == "undefined") {
				throw new Error(_195 + " template:" + key);
			}
			if (_197 == null) {
				return "";
			}
			return key.charAt(0) == "!" ? _197 : _197.toString().replace(/"/g, "&quot;");
		}, this);
	}, buildRendering: function () {
		var _198 = dijit._Templated.getCachedTemplate(this.templatePath, this.templateString, this._skipNodeCache);
		var node;
		if (dojo.isString(_198)) {
			node = dojo._toDom(this._stringRepl(_198));
			if (node.nodeType != 1) {
				throw new Error("Invalid template: " + _198);
			}
		} else {
			node = _198.cloneNode(true);
		}
		this.domNode = node;
		this.inherited(arguments);
		this._attachTemplateNodes(node);
		if (this.widgetsInTemplate) {
			var cw = (this._startupWidgets = dojo.parser.parse(node, {noStart: !this._earlyTemplatedStartup, template: true, inherited: {dir: this.dir, lang: this.lang}, propsThis: this, scope: "dojo"}));
			this._supportingWidgets = dijit.findWidgets(node);
			this._attachTemplateNodes(cw, function (n, p) {
				return n[p];
			});
		}
		this._fillContent(this.srcNodeRef);
	}, _fillContent: function (_199) {
		var dest = this.containerNode;
		if (_199 && dest) {
			while (_199.hasChildNodes()) {
				dest.appendChild(_199.firstChild);
			}
		}
	}, _attachTemplateNodes: function (_19a, _19b) {
		_19b = _19b || function (n, p) {
			return n.getAttribute(p);
		};
		var _19c = dojo.isArray(_19a) ? _19a : (_19a.all || _19a.getElementsByTagName("*"));
		var x = dojo.isArray(_19a) ? 0 : -1;
		for (; x < _19c.length; x++) {
			var _19d = (x == -1) ? _19a : _19c[x];
			if (this.widgetsInTemplate && (_19b(_19d, "dojoType") || _19b(_19d, "data-dojo-type"))) {
				continue;
			}
			var _19e = _19b(_19d, "dojoAttachPoint") || _19b(_19d, "data-dojo-attach-point");
			if (_19e) {
				var _19f, _1a0 = _19e.split(/\s*,\s*/);
				while ((_19f = _1a0.shift())) {
					if (dojo.isArray(this[_19f])) {
						this[_19f].push(_19d);
					} else {
						this[_19f] = _19d;
					}
					this._attachPoints.push(_19f);
				}
			}
			var _1a1 = _19b(_19d, "dojoAttachEvent") || _19b(_19d, "data-dojo-attach-event");
			if (_1a1) {
				var _1a2, _1a3 = _1a1.split(/\s*,\s*/);
				var trim = dojo.trim;
				while ((_1a2 = _1a3.shift())) {
					if (_1a2) {
						var _1a4 = null;
						if (_1a2.indexOf(":") != -1) {
							var _1a5 = _1a2.split(":");
							_1a2 = trim(_1a5[0]);
							_1a4 = trim(_1a5[1]);
						} else {
							_1a2 = trim(_1a2);
						}
						if (!_1a4) {
							_1a4 = _1a2;
						}
						this._attachEvents.push(this.connect(_19d, _1a2, _1a4));
					}
				}
			}
			var role = _19b(_19d, "waiRole");
			if (role) {
				dijit.setWaiRole(_19d, role);
			}
			var _1a6 = _19b(_19d, "waiState");
			if (_1a6) {
				dojo.forEach(_1a6.split(/\s*,\s*/), function (_1a7) {
					if (_1a7.indexOf("-") != -1) {
						var pair = _1a7.split("-");
						dijit.setWaiState(_19d, pair[0], pair[1]);
					}
				});
			}
		}
	}, startup: function () {
		dojo.forEach(this._startupWidgets, function (w) {
			if (w && !w._started && w.startup) {
				w.startup();
			}
		});
		this.inherited(arguments);
	}, destroyRendering: function () {
		dojo.forEach(this._attachPoints, function (_1a8) {
			delete this[_1a8];
		}, this);
		this._attachPoints = [];
		dojo.forEach(this._attachEvents, this.disconnect, this);
		this._attachEvents = [];
		this.inherited(arguments);
	}});
	dijit._Templated._templateCache = {};
	dijit._Templated.getCachedTemplate = function (_1a9, _1aa, _1ab) {
		var _1ac = dijit._Templated._templateCache;
		var key = _1aa || _1a9;
		var _1ad = _1ac[key];
		if (_1ad) {
			try {
				if (!_1ad.ownerDocument || _1ad.ownerDocument == dojo.doc) {
					return _1ad;
				}
			} catch (e) {
			}
			dojo.destroy(_1ad);
		}
		if (!_1aa) {
			_1aa = dojo.cache(_1a9, {sanitize: true});
		}
		_1aa = dojo.string.trim(_1aa);
		if (_1ab || _1aa.match(/\$\{([^\}]+)\}/g)) {
			return (_1ac[key] = _1aa);
		} else {
			var node = dojo._toDom(_1aa);
			if (node.nodeType != 1) {
				throw new Error("Invalid template: " + _1aa);
			}
			return (_1ac[key] = node);
		}
	};
	if (dojo.isIE) {
		dojo.addOnWindowUnload(function () {
			var _1ae = dijit._Templated._templateCache;
			for (var key in _1ae) {
				var _1af = _1ae[key];
				if (typeof _1af == "object") {
					dojo.destroy(_1af);
				}
				delete _1ae[key];
			}
		});
	}
	dojo.extend(dijit._Widget, {dojoAttachEvent: "", dojoAttachPoint: "", waiRole: "", waiState: ""});
}
if (!dojo._hasResource["dijit._Container"]) {
	dojo._hasResource["dijit._Container"] = true;
	dojo.provide("dijit._Container");
	dojo.declare("dijit._Container", null, {isContainer: true, buildRendering: function () {
		this.inherited(arguments);
		if (!this.containerNode) {
			this.containerNode = this.domNode;
		}
	}, addChild: function (_1b0, _1b1) {
		var _1b2 = this.containerNode;
		if (_1b1 && typeof _1b1 == "number") {
			var _1b3 = this.getChildren();
			if (_1b3 && _1b3.length >= _1b1) {
				_1b2 = _1b3[_1b1 - 1].domNode;
				_1b1 = "after";
			}
		}
		dojo.place(_1b0.domNode, _1b2, _1b1);
		if (this._started && !_1b0._started) {
			_1b0.startup();
		}
	}, removeChild: function (_1b4) {
		if (typeof _1b4 == "number") {
			_1b4 = this.getChildren()[_1b4];
		}
		if (_1b4) {
			var node = _1b4.domNode;
			if (node && node.parentNode) {
				node.parentNode.removeChild(node);
			}
		}
	}, hasChildren: function () {
		return this.getChildren().length > 0;
	}, destroyDescendants: function (_1b5) {
		dojo.forEach(this.getChildren(), function (_1b6) {
			_1b6.destroyRecursive(_1b5);
		});
	}, _getSiblingOfChild: function (_1b7, dir) {
		var node = _1b7.domNode, _1b8 = (dir > 0 ? "nextSibling" : "previousSibling");
		do {
			node = node[_1b8];
		} while (node && (node.nodeType != 1 || !dijit.byNode(node)));
		return node && dijit.byNode(node);
	}, getIndexOfChild: function (_1b9) {
		return dojo.indexOf(this.getChildren(), _1b9);
	}, startup: function () {
		if (this._started) {
			return;
		}
		dojo.forEach(this.getChildren(), function (_1ba) {
			_1ba.startup();
		});
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit._Contained"]) {
	dojo._hasResource["dijit._Contained"] = true;
	dojo.provide("dijit._Contained");
	dojo.declare("dijit._Contained", null, {getParent: function () {
		var _1bb = dijit.getEnclosingWidget(this.domNode.parentNode);
		return _1bb && _1bb.isContainer ? _1bb : null;
	}, _getSibling: function (_1bc) {
		var node = this.domNode;
		do {
			node = node[_1bc + "Sibling"];
		} while (node && node.nodeType != 1);
		return node && dijit.byNode(node);
	}, getPreviousSibling: function () {
		return this._getSibling("previous");
	}, getNextSibling: function () {
		return this._getSibling("next");
	}, getIndexInParent: function () {
		var p = this.getParent();
		if (!p || !p.getIndexOfChild) {
			return -1;
		}
		return p.getIndexOfChild(this);
	}});
}
if (!dojo._hasResource["dijit.layout._LayoutWidget"]) {
	dojo._hasResource["dijit.layout._LayoutWidget"] = true;
	dojo.provide("dijit.layout._LayoutWidget");
	dojo.declare("dijit.layout._LayoutWidget", [dijit._Widget, dijit._Container, dijit._Contained], {baseClass: "dijitLayoutContainer", isLayoutContainer: true, buildRendering: function () {
		this.inherited(arguments);
		dojo.addClass(this.domNode, "dijitContainer");
	}, startup: function () {
		if (this._started) {
			return;
		}
		this.inherited(arguments);
		var _1bd = this.getParent && this.getParent();
		if (!(_1bd && _1bd.isLayoutContainer)) {
			this.resize();
			this.connect(dojo.isIE ? this.domNode : dojo.global, "onresize", function () {
				this.resize();
			});
		}
	}, resize: function (_1be, _1bf) {
		var node = this.domNode;
		if (_1be) {
			dojo.marginBox(node, _1be);
			if (_1be.t) {
				node.style.top = _1be.t + "px";
			}
			if (_1be.l) {
				node.style.left = _1be.l + "px";
			}
		}
		var mb = _1bf || {};
		dojo.mixin(mb, _1be || {});
		if (!("h" in mb) || !("w" in mb)) {
			mb = dojo.mixin(dojo.marginBox(node), mb);
		}
		var cs = dojo.getComputedStyle(node);
		var me = dojo._getMarginExtents(node, cs);
		var be = dojo._getBorderExtents(node, cs);
		var bb = (this._borderBox = {w: mb.w - (me.w + be.w), h: mb.h - (me.h + be.h)});
		var pe = dojo._getPadExtents(node, cs);
		this._contentBox = {l: dojo._toPixelValue(node, cs.paddingLeft), t: dojo._toPixelValue(node, cs.paddingTop), w: bb.w - pe.w, h: bb.h - pe.h};
		this.layout();
	}, layout: function () {
	}, _setupChild: function (_1c0) {
		var cls = this.baseClass + "-child " + (_1c0.baseClass ? this.baseClass + "-" + _1c0.baseClass : "");
		dojo.addClass(_1c0.domNode, cls);
	}, addChild: function (_1c1, _1c2) {
		this.inherited(arguments);
		if (this._started) {
			this._setupChild(_1c1);
		}
	}, removeChild: function (_1c3) {
		var cls = this.baseClass + "-child" + (_1c3.baseClass ? " " + this.baseClass + "-" + _1c3.baseClass : "");
		dojo.removeClass(_1c3.domNode, cls);
		this.inherited(arguments);
	}});
	dijit.layout.marginBox2contentBox = function (node, mb) {
		var cs = dojo.getComputedStyle(node);
		var me = dojo._getMarginExtents(node, cs);
		var pb = dojo._getPadBorderExtents(node, cs);
		return {l: dojo._toPixelValue(node, cs.paddingLeft), t: dojo._toPixelValue(node, cs.paddingTop), w: mb.w - (me.w + pb.w), h: mb.h - (me.h + pb.h)};
	};
	(function () {
		var _1c4 = function (word) {
			return word.substring(0, 1).toUpperCase() + word.substring(1);
		};
		var size = function (_1c5, dim) {
			var _1c6 = _1c5.resize ? _1c5.resize(dim) : dojo.marginBox(_1c5.domNode, dim);
			if (_1c6) {
				dojo.mixin(_1c5, _1c6);
			} else {
				dojo.mixin(_1c5, dojo.marginBox(_1c5.domNode));
				dojo.mixin(_1c5, dim);
			}
		};
		dijit.layout.layoutChildren = function (_1c7, dim, _1c8, _1c9, _1ca) {
			dim = dojo.mixin({}, dim);
			dojo.addClass(_1c7, "dijitLayoutContainer");
			_1c8 = dojo.filter(_1c8, function (item) {
				return item.region != "center" && item.layoutAlign != "client";
			}).concat(dojo.filter(_1c8, function (item) {
				return item.region == "center" || item.layoutAlign == "client";
			}));
			dojo.forEach(_1c8, function (_1cb) {
				var elm = _1cb.domNode, pos = (_1cb.region || _1cb.layoutAlign);
				var _1cc = elm.style;
				_1cc.left = dim.l + "px";
				_1cc.top = dim.t + "px";
				_1cc.position = "absolute";
				dojo.addClass(elm, "dijitAlign" + _1c4(pos));
				var _1cd = {};
				if (_1c9 && _1c9 == _1cb.id) {
					_1cd[_1cb.region == "top" || _1cb.region == "bottom" ? "h" : "w"] = _1ca;
				}
				if (pos == "top" || pos == "bottom") {
					_1cd.w = dim.w;
					size(_1cb, _1cd);
					dim.h -= _1cb.h;
					if (pos == "top") {
						dim.t += _1cb.h;
					} else {
						_1cc.top = dim.t + dim.h + "px";
					}
				} else {
					if (pos == "left" || pos == "right") {
						_1cd.h = dim.h;
						size(_1cb, _1cd);
						dim.w -= _1cb.w;
						if (pos == "left") {
							dim.l += _1cb.w;
						} else {
							_1cc.left = dim.l + dim.w + "px";
						}
					} else {
						if (pos == "client" || pos == "center") {
							size(_1cb, dim);
						}
					}
				}
			});
		};
	})();
}
if (!dojo._hasResource["dijit._CssStateMixin"]) {
	dojo._hasResource["dijit._CssStateMixin"] = true;
	dojo.provide("dijit._CssStateMixin");
	dojo.declare("dijit._CssStateMixin", [], {cssStateNodes: {}, hovering: false, active: false, _applyAttributes: function () {
		this.inherited(arguments);
		dojo.forEach(["onmouseenter", "onmouseleave", "onmousedown"], function (e) {
			this.connect(this.domNode, e, "_cssMouseEvent");
		}, this);
		dojo.forEach(["disabled", "readOnly", "checked", "selected", "focused", "state", "hovering", "active"], function (attr) {
			this.watch(attr, dojo.hitch(this, "_setStateClass"));
		}, this);
		for (var ap in this.cssStateNodes) {
			this._trackMouseState(this[ap], this.cssStateNodes[ap]);
		}
		this._setStateClass();
	}, _cssMouseEvent: function (_1ce) {
		if (!this.disabled) {
			switch (_1ce.type) {
				case "mouseenter":
				case "mouseover":
					this._set("hovering", true);
					this._set("active", this._mouseDown);
					break;
				case "mouseleave":
				case "mouseout":
					this._set("hovering", false);
					this._set("active", false);
					break;
				case "mousedown":
					this._set("active", true);
					this._mouseDown = true;
					var _1cf = this.connect(dojo.body(), "onmouseup", function () {
						this._mouseDown = false;
						this._set("active", false);
						this.disconnect(_1cf);
					});
					break;
			}
		}
	}, _setStateClass: function () {
		var _1d0 = this.baseClass.split(" ");

		function _1d1(_1d2) {
			_1d0 = _1d0.concat(dojo.map(_1d0, function (c) {
				return c + _1d2;
			}), "dijit" + _1d2);
		};
		if (!this.isLeftToRight()) {
			_1d1("Rtl");
		}
		if (this.checked) {
			_1d1("Checked");
		}
		if (this.state) {
			_1d1(this.state);
		}
		if (this.selected) {
			_1d1("Selected");
		}
		if (this.disabled) {
			_1d1("Disabled");
		} else {
			if (this.readOnly) {
				_1d1("ReadOnly");
			} else {
				if (this.active) {
					_1d1("Active");
				} else {
					if (this.hovering) {
						_1d1("Hover");
					}
				}
			}
		}
		if (this._focused) {
			_1d1("Focused");
		}
		var tn = this.stateNode || this.domNode, _1d3 = {};
		dojo.forEach(tn.className.split(" "), function (c) {
			_1d3[c] = true;
		});
		if ("_stateClasses" in this) {
			dojo.forEach(this._stateClasses, function (c) {
				delete _1d3[c];
			});
		}
		dojo.forEach(_1d0, function (c) {
			_1d3[c] = true;
		});
		var _1d4 = [];
		for (var c in _1d3) {
			_1d4.push(c);
		}
		tn.className = _1d4.join(" ");
		this._stateClasses = _1d0;
	}, _trackMouseState: function (node, _1d5) {
		var _1d6 = false, _1d7 = false, _1d8 = false;
		var self = this, cn = dojo.hitch(this, "connect", node);

		function _1d9() {
			var _1da = ("disabled" in self && self.disabled) || ("readonly" in self && self.readonly);
			dojo.toggleClass(node, _1d5 + "Hover", _1d6 && !_1d7 && !_1da);
			dojo.toggleClass(node, _1d5 + "Active", _1d7 && !_1da);
			dojo.toggleClass(node, _1d5 + "Focused", _1d8 && !_1da);
		};
		cn("onmouseenter", function () {
			_1d6 = true;
			_1d9();
		});
		cn("onmouseleave", function () {
			_1d6 = false;
			_1d7 = false;
			_1d9();
		});
		cn("onmousedown", function () {
			_1d7 = true;
			_1d9();
		});
		cn("onmouseup", function () {
			_1d7 = false;
			_1d9();
		});
		cn("onfocus", function () {
			_1d8 = true;
			_1d9();
		});
		cn("onblur", function () {
			_1d8 = false;
			_1d9();
		});
		this.watch("disabled", _1d9);
		this.watch("readOnly", _1d9);
	}});
}
if (!dojo._hasResource["dijit.form._FormWidget"]) {
	dojo._hasResource["dijit.form._FormWidget"] = true;
	dojo.provide("dijit.form._FormWidget");
	dojo.declare("dijit.form._FormWidget", [dijit._Widget, dijit._Templated, dijit._CssStateMixin], {name: "", alt: "", value: "", type: "text", tabIndex: "0", disabled: false, intermediateChanges: false, scrollOnFocus: true, attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {value: "focusNode", id: "focusNode", tabIndex: "focusNode", alt: "focusNode", title: "focusNode"}), postMixInProperties: function () {
		this.nameAttrSetting = this.name ? ("name=\"" + this.name.replace(/'/g, "&quot;") + "\"") : "";
		this.inherited(arguments);
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this.domNode, "onmousedown", "_onMouseDown");
	}, _setDisabledAttr: function (_1db) {
		this._set("disabled", _1db);
		dojo.attr(this.focusNode, "disabled", _1db);
		if (this.valueNode) {
			dojo.attr(this.valueNode, "disabled", _1db);
		}
		dijit.setWaiState(this.focusNode, "disabled", _1db);
		if (_1db) {
			this._set("hovering", false);
			this._set("active", false);
			var _1dc = "tabIndex" in this.attributeMap ? this.attributeMap.tabIndex : "focusNode";
			dojo.forEach(dojo.isArray(_1dc) ? _1dc : [_1dc], function (_1dd) {
				var node = this[_1dd];
				if (dojo.isWebKit || dijit.hasDefaultTabStop(node)) {
					node.setAttribute("tabIndex", "-1");
				} else {
					node.removeAttribute("tabIndex");
				}
			}, this);
		} else {
			if (this.tabIndex != "") {
				this.focusNode.setAttribute("tabIndex", this.tabIndex);
			}
		}
	}, setDisabled: function (_1de) {
		dojo.deprecated("setDisabled(" + _1de + ") is deprecated. Use set('disabled'," + _1de + ") instead.", "", "2.0");
		this.set("disabled", _1de);
	}, _onFocus: function (e) {
		if (this.scrollOnFocus) {
			dojo.window.scrollIntoView(this.domNode);
		}
		this.inherited(arguments);
	}, isFocusable: function () {
		return !this.disabled && this.focusNode && (dojo.style(this.domNode, "display") != "none");
	}, focus: function () {
		if (!this.disabled) {
			dijit.focus(this.focusNode);
		}
	}, compare: function (val1, val2) {
		if (typeof val1 == "number" && typeof val2 == "number") {
			return (isNaN(val1) && isNaN(val2)) ? 0 : val1 - val2;
		} else {
			if (val1 > val2) {
				return 1;
			} else {
				if (val1 < val2) {
					return -1;
				} else {
					return 0;
				}
			}
		}
	}, onChange: function (_1df) {
	}, _onChangeActive: false, _handleOnChange: function (_1e0, _1e1) {
		if (this._lastValueReported == undefined && (_1e1 === null || !this._onChangeActive)) {
			this._resetValue = this._lastValueReported = _1e0;
		}
		this._pendingOnChange = this._pendingOnChange || (typeof _1e0 != typeof this._lastValueReported) || (this.compare(_1e0, this._lastValueReported) != 0);
		if ((this.intermediateChanges || _1e1 || _1e1 === undefined) && this._pendingOnChange) {
			this._lastValueReported = _1e0;
			this._pendingOnChange = false;
			if (this._onChangeActive) {
				if (this._onChangeHandle) {
					clearTimeout(this._onChangeHandle);
				}
				this._onChangeHandle = setTimeout(dojo.hitch(this, function () {
					this._onChangeHandle = null;
					this.onChange(_1e0);
				}), 0);
			}
		}
	}, create: function () {
		this.inherited(arguments);
		this._onChangeActive = true;
	}, destroy: function () {
		if (this._onChangeHandle) {
			clearTimeout(this._onChangeHandle);
			this.onChange(this._lastValueReported);
		}
		this.inherited(arguments);
	}, setValue: function (_1e2) {
		dojo.deprecated("dijit.form._FormWidget:setValue(" + _1e2 + ") is deprecated.  Use set('value'," + _1e2 + ") instead.", "", "2.0");
		this.set("value", _1e2);
	}, getValue: function () {
		dojo.deprecated(this.declaredClass + "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
		return this.get("value");
	}, _onMouseDown: function (e) {
		if (!e.ctrlKey && dojo.mouseButtons.isLeft(e) && this.isFocusable()) {
			var _1e3 = this.connect(dojo.body(), "onmouseup", function () {
				if (this.isFocusable()) {
					this.focus();
				}
				this.disconnect(_1e3);
			});
		}
	}});
	dojo.declare("dijit.form._FormValueWidget", dijit.form._FormWidget, {readOnly: false, attributeMap: dojo.delegate(dijit.form._FormWidget.prototype.attributeMap, {value: "", readOnly: "focusNode"}), _setReadOnlyAttr: function (_1e4) {
		dojo.attr(this.focusNode, "readOnly", _1e4);
		dijit.setWaiState(this.focusNode, "readonly", _1e4);
		this._set("readOnly", _1e4);
	}, postCreate: function () {
		this.inherited(arguments);
		if (dojo.isIE < 9 || (dojo.isIE && dojo.isQuirks)) {
			this.connect(this.focusNode || this.domNode, "onkeydown", this._onKeyDown);
		}
		if (this._resetValue === undefined) {
			this._lastValueReported = this._resetValue = this.value;
		}
	}, _setValueAttr: function (_1e5, _1e6) {
		this._handleOnChange(_1e5, _1e6);
	}, _handleOnChange: function (_1e7, _1e8) {
		this._set("value", _1e7);
		this.inherited(arguments);
	}, undo: function () {
		this._setValueAttr(this._lastValueReported, false);
	}, reset: function () {
		this._hasBeenBlurred = false;
		this._setValueAttr(this._resetValue, true);
	}, _onKeyDown: function (e) {
		if (e.keyCode == dojo.keys.ESCAPE && !(e.ctrlKey || e.altKey || e.metaKey)) {
			var te;
			if (dojo.isIE) {
				e.preventDefault();
				te = document.createEventObject();
				te.keyCode = dojo.keys.ESCAPE;
				te.shiftKey = e.shiftKey;
				e.srcElement.fireEvent("onkeypress", te);
			}
		}
	}, _layoutHackIE7: function () {
		if (dojo.isIE == 7) {
			var _1e9 = this.domNode;
			var _1ea = _1e9.parentNode;
			var _1eb = _1e9.firstChild || _1e9;
			var _1ec = _1eb.style.filter;
			var _1ed = this;
			while (_1ea && _1ea.clientHeight == 0) {
				(function ping() {
					var _1ee = _1ed.connect(_1ea, "onscroll", function (e) {
						_1ed.disconnect(_1ee);
						_1eb.style.filter = (new Date()).getMilliseconds();
						setTimeout(function () {
							_1eb.style.filter = _1ec;
						}, 0);
					});
				})();
				_1ea = _1ea.parentNode;
			}
		}
	}});
}
if (!dojo._hasResource["dijit.dijit"]) {
	dojo._hasResource["dijit.dijit"] = true;
	dojo.provide("dijit.dijit");
}
