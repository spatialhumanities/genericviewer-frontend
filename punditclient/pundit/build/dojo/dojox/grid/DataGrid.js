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
if (!dojo._hasResource["dijit._KeyNavContainer"]) {
	dojo._hasResource["dijit._KeyNavContainer"] = true;
	dojo.provide("dijit._KeyNavContainer");
	dojo.declare("dijit._KeyNavContainer", dijit._Container, {tabIndex: "0", _keyNavCodes: {}, connectKeyNavHandlers: function (_1ef, _1f0) {
		var _1f1 = (this._keyNavCodes = {});
		var prev = dojo.hitch(this, this.focusPrev);
		var next = dojo.hitch(this, this.focusNext);
		dojo.forEach(_1ef, function (code) {
			_1f1[code] = prev;
		});
		dojo.forEach(_1f0, function (code) {
			_1f1[code] = next;
		});
		_1f1[dojo.keys.HOME] = dojo.hitch(this, "focusFirstChild");
		_1f1[dojo.keys.END] = dojo.hitch(this, "focusLastChild");
		this.connect(this.domNode, "onkeypress", "_onContainerKeypress");
		this.connect(this.domNode, "onfocus", "_onContainerFocus");
	}, startupKeyNavChildren: function () {
		dojo.forEach(this.getChildren(), dojo.hitch(this, "_startupChild"));
	}, addChild: function (_1f2, _1f3) {
		dijit._KeyNavContainer.superclass.addChild.apply(this, arguments);
		this._startupChild(_1f2);
	}, focus: function () {
		this.focusFirstChild();
	}, focusFirstChild: function () {
		var _1f4 = this._getFirstFocusableChild();
		if (_1f4) {
			this.focusChild(_1f4);
		}
	}, focusLastChild: function () {
		var _1f5 = this._getLastFocusableChild();
		if (_1f5) {
			this.focusChild(_1f5);
		}
	}, focusNext: function () {
		var _1f6 = this._getNextFocusableChild(this.focusedChild, 1);
		this.focusChild(_1f6);
	}, focusPrev: function () {
		var _1f7 = this._getNextFocusableChild(this.focusedChild, -1);
		this.focusChild(_1f7, true);
	}, focusChild: function (_1f8, last) {
		if (this.focusedChild && _1f8 !== this.focusedChild) {
			this._onChildBlur(this.focusedChild);
		}
		_1f8.set("tabIndex", this.tabIndex);
		_1f8.focus(last ? "end" : "start");
		this._set("focusedChild", _1f8);
	}, _startupChild: function (_1f9) {
		_1f9.set("tabIndex", "-1");
		this.connect(_1f9, "_onFocus", function () {
			_1f9.set("tabIndex", this.tabIndex);
		});
		this.connect(_1f9, "_onBlur", function () {
			_1f9.set("tabIndex", "-1");
		});
	}, _onContainerFocus: function (evt) {
		if (evt.target !== this.domNode) {
			return;
		}
		this.focusFirstChild();
		dojo.attr(this.domNode, "tabIndex", "-1");
	}, _onBlur: function (evt) {
		if (this.tabIndex) {
			dojo.attr(this.domNode, "tabIndex", this.tabIndex);
		}
		this.inherited(arguments);
	}, _onContainerKeypress: function (evt) {
		if (evt.ctrlKey || evt.altKey) {
			return;
		}
		var func = this._keyNavCodes[evt.charOrCode];
		if (func) {
			func();
			dojo.stopEvent(evt);
		}
	}, _onChildBlur: function (_1fa) {
	}, _getFirstFocusableChild: function () {
		return this._getNextFocusableChild(null, 1);
	}, _getLastFocusableChild: function () {
		return this._getNextFocusableChild(null, -1);
	}, _getNextFocusableChild: function (_1fb, dir) {
		if (_1fb) {
			_1fb = this._getSiblingOfChild(_1fb, dir);
		}
		var _1fc = this.getChildren();
		for (var i = 0; i < _1fc.length; i++) {
			if (!_1fb) {
				_1fb = _1fc[(dir > 0) ? 0 : (_1fc.length - 1)];
			}
			if (_1fb.isFocusable()) {
				return _1fb;
			}
			_1fb = this._getSiblingOfChild(_1fb, dir);
		}
		return null;
	}});
}
if (!dojo._hasResource["dijit.MenuItem"]) {
	dojo._hasResource["dijit.MenuItem"] = true;
	dojo.provide("dijit.MenuItem");
	dojo.declare("dijit.MenuItem", [dijit._Widget, dijit._Templated, dijit._Contained, dijit._CssStateMixin], {templateString: dojo.cache("dijit", "templates/MenuItem.html", "<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" role=\"menuitem\" tabIndex=\"-1\"\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitIcon dijitMenuItemIcon\" dojoAttachPoint=\"iconNode\"/>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">\n\t\t<div dojoAttachPoint=\"arrowWrapper\" style=\"visibility: hidden\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuExpand\"/>\n\t\t\t<span class=\"dijitMenuExpandA11y\">+</span>\n\t\t</div>\n\t</td>\n</tr>\n"), attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {label: {node: "containerNode", type: "innerHTML"}, iconClass: {node: "iconNode", type: "class"}}), baseClass: "dijitMenuItem", label: "", iconClass: "", accelKey: "", disabled: false, _fillContent: function (_1fd) {
		if (_1fd && !("label" in this.params)) {
			this.set("label", _1fd.innerHTML);
		}
	}, buildRendering: function () {
		this.inherited(arguments);
		var _1fe = this.id + "_text";
		dojo.attr(this.containerNode, "id", _1fe);
		if (this.accelKeyNode) {
			dojo.attr(this.accelKeyNode, "id", this.id + "_accel");
			_1fe += " " + this.id + "_accel";
		}
		dijit.setWaiState(this.domNode, "labelledby", _1fe);
		dojo.setSelectable(this.domNode, false);
	}, _onHover: function () {
		this.getParent().onItemHover(this);
	}, _onUnhover: function () {
		this.getParent().onItemUnhover(this);
		this._set("hovering", false);
	}, _onClick: function (evt) {
		this.getParent().onItemClick(this, evt);
		dojo.stopEvent(evt);
	}, onClick: function (evt) {
	}, focus: function () {
		try {
			if (dojo.isIE == 8) {
				this.containerNode.focus();
			}
			dijit.focus(this.focusNode);
		} catch (e) {
		}
	}, _onFocus: function () {
		this._setSelected(true);
		this.getParent()._onItemFocus(this);
		this.inherited(arguments);
	}, _setSelected: function (_1ff) {
		dojo.toggleClass(this.domNode, "dijitMenuItemSelected", _1ff);
	}, setLabel: function (_200) {
		dojo.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
		this.set("label", _200);
	}, setDisabled: function (_201) {
		dojo.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
		this.set("disabled", _201);
	}, _setDisabledAttr: function (_202) {
		dijit.setWaiState(this.focusNode, "disabled", _202 ? "true" : "false");
		this._set("disabled", _202);
	}, _setAccelKeyAttr: function (_203) {
		this.accelKeyNode.style.display = _203 ? "" : "none";
		this.accelKeyNode.innerHTML = _203;
		dojo.attr(this.containerNode, "colSpan", _203 ? "1" : "2");
		this._set("accelKey", _203);
	}});
}
if (!dojo._hasResource["dijit.PopupMenuItem"]) {
	dojo._hasResource["dijit.PopupMenuItem"] = true;
	dojo.provide("dijit.PopupMenuItem");
	dojo.declare("dijit.PopupMenuItem", dijit.MenuItem, {_fillContent: function () {
		if (this.srcNodeRef) {
			var _204 = dojo.query("*", this.srcNodeRef);
			dijit.PopupMenuItem.superclass._fillContent.call(this, _204[0]);
			this.dropDownContainer = this.srcNodeRef;
		}
	}, startup: function () {
		if (this._started) {
			return;
		}
		this.inherited(arguments);
		if (!this.popup) {
			var node = dojo.query("[widgetId]", this.dropDownContainer)[0];
			this.popup = dijit.byNode(node);
		}
		dojo.body().appendChild(this.popup.domNode);
		this.popup.startup();
		this.popup.domNode.style.display = "none";
		if (this.arrowWrapper) {
			dojo.style(this.arrowWrapper, "visibility", "");
		}
		dijit.setWaiState(this.focusNode, "haspopup", "true");
	}, destroyDescendants: function () {
		if (this.popup) {
			if (!this.popup._destroyed) {
				this.popup.destroyRecursive();
			}
			delete this.popup;
		}
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit.CheckedMenuItem"]) {
	dojo._hasResource["dijit.CheckedMenuItem"] = true;
	dojo.provide("dijit.CheckedMenuItem");
	dojo.declare("dijit.CheckedMenuItem", dijit.MenuItem, {templateString: dojo.cache("dijit", "templates/CheckedMenuItem.html", "<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" role=\"menuitemcheckbox\" tabIndex=\"-1\"\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon dijitCheckedMenuItemIcon\" dojoAttachPoint=\"iconNode\"/>\n\t\t<span class=\"dijitCheckedMenuItemIconChar\">&#10003;</span>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode,labelNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">&nbsp;</td>\n</tr>\n"), checked: false, _setCheckedAttr: function (_205) {
		dojo.toggleClass(this.domNode, "dijitCheckedMenuItemChecked", _205);
		dijit.setWaiState(this.domNode, "checked", _205);
		this._set("checked", _205);
	}, onChange: function (_206) {
	}, _onClick: function (e) {
		if (!this.disabled) {
			this.set("checked", !this.checked);
			this.onChange(this.checked);
		}
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit.MenuSeparator"]) {
	dojo._hasResource["dijit.MenuSeparator"] = true;
	dojo.provide("dijit.MenuSeparator");
	dojo.declare("dijit.MenuSeparator", [dijit._Widget, dijit._Templated, dijit._Contained], {templateString: dojo.cache("dijit", "templates/MenuSeparator.html", "<tr class=\"dijitMenuSeparator\">\n\t<td class=\"dijitMenuSeparatorIconCell\">\n\t\t<div class=\"dijitMenuSeparatorTop\"></div>\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\n\t</td>\n\t<td colspan=\"3\" class=\"dijitMenuSeparatorLabelCell\">\n\t\t<div class=\"dijitMenuSeparatorTop dijitMenuSeparatorLabel\"></div>\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\n\t</td>\n</tr>\n"), buildRendering: function () {
		this.inherited(arguments);
		dojo.setSelectable(this.domNode, false);
	}, isFocusable: function () {
		return false;
	}});
}
if (!dojo._hasResource["dijit.Menu"]) {
	dojo._hasResource["dijit.Menu"] = true;
	dojo.provide("dijit.Menu");
	dojo.declare("dijit._MenuBase", [dijit._Widget, dijit._Templated, dijit._KeyNavContainer], {parentMenu: null, popupDelay: 500, startup: function () {
		if (this._started) {
			return;
		}
		dojo.forEach(this.getChildren(), function (_207) {
			_207.startup();
		});
		this.startupKeyNavChildren();
		this.inherited(arguments);
	}, onExecute: function () {
	}, onCancel: function (_208) {
	}, _moveToPopup: function (evt) {
		if (this.focusedChild && this.focusedChild.popup && !this.focusedChild.disabled) {
			this.focusedChild._onClick(evt);
		} else {
			var _209 = this._getTopMenu();
			if (_209 && _209._isMenuBar) {
				_209.focusNext();
			}
		}
	}, _onPopupHover: function (evt) {
		if (this.currentPopup && this.currentPopup._pendingClose_timer) {
			var _20a = this.currentPopup.parentMenu;
			if (_20a.focusedChild) {
				_20a.focusedChild._setSelected(false);
			}
			_20a.focusedChild = this.currentPopup.from_item;
			_20a.focusedChild._setSelected(true);
			this._stopPendingCloseTimer(this.currentPopup);
		}
	}, onItemHover: function (item) {
		if (this.isActive) {
			this.focusChild(item);
			if (this.focusedChild.popup && !this.focusedChild.disabled && !this.hover_timer) {
				this.hover_timer = setTimeout(dojo.hitch(this, "_openPopup"), this.popupDelay);
			}
		}
		if (this.focusedChild) {
			this.focusChild(item);
		}
		this._hoveredChild = item;
	}, _onChildBlur: function (item) {
		this._stopPopupTimer();
		item._setSelected(false);
		var _20b = item.popup;
		if (_20b) {
			this._stopPendingCloseTimer(_20b);
			_20b._pendingClose_timer = setTimeout(function () {
				_20b._pendingClose_timer = null;
				if (_20b.parentMenu) {
					_20b.parentMenu.currentPopup = null;
				}
				dijit.popup.close(_20b);
			}, this.popupDelay);
		}
	}, onItemUnhover: function (item) {
		if (this.isActive) {
			this._stopPopupTimer();
		}
		if (this._hoveredChild == item) {
			this._hoveredChild = null;
		}
	}, _stopPopupTimer: function () {
		if (this.hover_timer) {
			clearTimeout(this.hover_timer);
			this.hover_timer = null;
		}
	}, _stopPendingCloseTimer: function (_20c) {
		if (_20c._pendingClose_timer) {
			clearTimeout(_20c._pendingClose_timer);
			_20c._pendingClose_timer = null;
		}
	}, _stopFocusTimer: function () {
		if (this._focus_timer) {
			clearTimeout(this._focus_timer);
			this._focus_timer = null;
		}
	}, _getTopMenu: function () {
		for (var top = this; top.parentMenu; top = top.parentMenu) {
		}
		return top;
	}, onItemClick: function (item, evt) {
		if (typeof this.isShowingNow == "undefined") {
			this._markActive();
		}
		this.focusChild(item);
		if (item.disabled) {
			return false;
		}
		if (item.popup) {
			this._openPopup();
		} else {
			this.onExecute();
			item.onClick(evt);
		}
	}, _openPopup: function () {
		this._stopPopupTimer();
		var _20d = this.focusedChild;
		if (!_20d) {
			return;
		}
		var _20e = _20d.popup;
		if (_20e.isShowingNow) {
			return;
		}
		if (this.currentPopup) {
			this._stopPendingCloseTimer(this.currentPopup);
			dijit.popup.close(this.currentPopup);
		}
		_20e.parentMenu = this;
		_20e.from_item = _20d;
		var self = this;
		dijit.popup.open({parent: this, popup: _20e, around: _20d.domNode, orient: this._orient || (this.isLeftToRight() ? {"TR": "TL", "TL": "TR", "BR": "BL", "BL": "BR"} : {"TL": "TR", "TR": "TL", "BL": "BR", "BR": "BL"}), onCancel: function () {
			self.focusChild(_20d);
			self._cleanUp();
			_20d._setSelected(true);
			self.focusedChild = _20d;
		}, onExecute: dojo.hitch(this, "_cleanUp")});
		this.currentPopup = _20e;
		_20e.connect(_20e.domNode, "onmouseenter", dojo.hitch(self, "_onPopupHover"));
		if (_20e.focus) {
			_20e._focus_timer = setTimeout(dojo.hitch(_20e, function () {
				this._focus_timer = null;
				this.focus();
			}), 0);
		}
	}, _markActive: function () {
		this.isActive = true;
		dojo.replaceClass(this.domNode, "dijitMenuActive", "dijitMenuPassive");
	}, onOpen: function (e) {
		this.isShowingNow = true;
		this._markActive();
	}, _markInactive: function () {
		this.isActive = false;
		dojo.replaceClass(this.domNode, "dijitMenuPassive", "dijitMenuActive");
	}, onClose: function () {
		this._stopFocusTimer();
		this._markInactive();
		this.isShowingNow = false;
		this.parentMenu = null;
	}, _closeChild: function () {
		this._stopPopupTimer();
		var _20f = this.focusedChild && this.focusedChild.from_item;
		if (this.currentPopup) {
			if (dijit._curFocus && dojo.isDescendant(dijit._curFocus, this.currentPopup.domNode)) {
				this.focusedChild.focusNode.focus();
			}
			dijit.popup.close(this.currentPopup);
			this.currentPopup = null;
		}
		if (this.focusedChild) {
			this.focusedChild._setSelected(false);
			this.focusedChild._onUnhover();
			this.focusedChild = null;
		}
	}, _onItemFocus: function (item) {
		if (this._hoveredChild && this._hoveredChild != item) {
			this._hoveredChild._onUnhover();
		}
	}, _onBlur: function () {
		this._cleanUp();
		this.inherited(arguments);
	}, _cleanUp: function () {
		this._closeChild();
		if (typeof this.isShowingNow == "undefined") {
			this._markInactive();
		}
	}});
	dojo.declare("dijit.Menu", dijit._MenuBase, {constructor: function () {
		this._bindings = [];
	}, templateString: dojo.cache("dijit", "templates/Menu.html", "<table class=\"dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable\" role=\"menu\" tabIndex=\"${tabIndex}\" dojoAttachEvent=\"onkeypress:_onKeyPress\" cellspacing=\"0\">\n\t<tbody class=\"dijitReset\" dojoAttachPoint=\"containerNode\"></tbody>\n</table>\n"), baseClass: "dijitMenu", targetNodeIds: [], contextMenuForWindow: false, leftClickToOpen: false, refocus: true, postCreate: function () {
		if (this.contextMenuForWindow) {
			this.bindDomNode(dojo.body());
		} else {
			dojo.forEach(this.targetNodeIds, this.bindDomNode, this);
		}
		var k = dojo.keys, l = this.isLeftToRight();
		this._openSubMenuKey = l ? k.RIGHT_ARROW : k.LEFT_ARROW;
		this._closeSubMenuKey = l ? k.LEFT_ARROW : k.RIGHT_ARROW;
		this.connectKeyNavHandlers([k.UP_ARROW], [k.DOWN_ARROW]);
	}, _onKeyPress: function (evt) {
		if (evt.ctrlKey || evt.altKey) {
			return;
		}
		switch (evt.charOrCode) {
			case this._openSubMenuKey:
				this._moveToPopup(evt);
				dojo.stopEvent(evt);
				break;
			case this._closeSubMenuKey:
				if (this.parentMenu) {
					if (this.parentMenu._isMenuBar) {
						this.parentMenu.focusPrev();
					} else {
						this.onCancel(false);
					}
				} else {
					dojo.stopEvent(evt);
				}
				break;
		}
	}, _iframeContentWindow: function (_210) {
		var win = dojo.window.get(this._iframeContentDocument(_210)) || this._iframeContentDocument(_210)["__parent__"] || (_210.name && dojo.doc.frames[_210.name]) || null;
		return win;
	}, _iframeContentDocument: function (_211) {
		var doc = _211.contentDocument || (_211.contentWindow && _211.contentWindow.document) || (_211.name && dojo.doc.frames[_211.name] && dojo.doc.frames[_211.name].document) || null;
		return doc;
	}, bindDomNode: function (node) {
		node = dojo.byId(node);
		var cn;
		if (node.tagName.toLowerCase() == "iframe") {
			var _212 = node, win = this._iframeContentWindow(_212);
			cn = dojo.withGlobal(win, dojo.body);
		} else {
			cn = (node == dojo.body() ? dojo.doc.documentElement : node);
		}
		var _213 = {node: node, iframe: _212};
		dojo.attr(node, "_dijitMenu" + this.id, this._bindings.push(_213));
		var _214 = dojo.hitch(this, function (cn) {
			return [dojo.connect(cn, this.leftClickToOpen ? "onclick" : "oncontextmenu", this, function (evt) {
				dojo.stopEvent(evt);
				this._scheduleOpen(evt.target, _212, {x: evt.pageX, y: evt.pageY});
			}), dojo.connect(cn, "onkeydown", this, function (evt) {
				if (evt.shiftKey && evt.keyCode == dojo.keys.F10) {
					dojo.stopEvent(evt);
					this._scheduleOpen(evt.target, _212);
				}
			})];
		});
		_213.connects = cn ? _214(cn) : [];
		if (_212) {
			_213.onloadHandler = dojo.hitch(this, function () {
				var win = this._iframeContentWindow(_212);
				cn = dojo.withGlobal(win, dojo.body);
				_213.connects = _214(cn);
			});
			if (_212.addEventListener) {
				_212.addEventListener("load", _213.onloadHandler, false);
			} else {
				_212.attachEvent("onload", _213.onloadHandler);
			}
		}
	}, unBindDomNode: function (_215) {
		var node;
		try {
			node = dojo.byId(_215);
		} catch (e) {
			return;
		}
		var _216 = "_dijitMenu" + this.id;
		if (node && dojo.hasAttr(node, _216)) {
			var bid = dojo.attr(node, _216) - 1, b = this._bindings[bid];
			dojo.forEach(b.connects, dojo.disconnect);
			var _217 = b.iframe;
			if (_217) {
				if (_217.removeEventListener) {
					_217.removeEventListener("load", b.onloadHandler, false);
				} else {
					_217.detachEvent("onload", b.onloadHandler);
				}
			}
			dojo.removeAttr(node, _216);
			delete this._bindings[bid];
		}
	}, _scheduleOpen: function (_218, _219, _21a) {
		if (!this._openTimer) {
			this._openTimer = setTimeout(dojo.hitch(this, function () {
				delete this._openTimer;
				this._openMyself({target: _218, iframe: _219, coords: _21a});
			}), 1);
		}
	}, _openMyself: function (args) {
		var _21b = args.target, _21c = args.iframe, _21d = args.coords;
		if (_21d) {
			if (_21c) {
				var od = _21b.ownerDocument, ifc = dojo.position(_21c, true), win = this._iframeContentWindow(_21c), _21e = dojo.withGlobal(win, "_docScroll", dojo);
				var cs = dojo.getComputedStyle(_21c), tp = dojo._toPixelValue, left = (dojo.isIE && dojo.isQuirks ? 0 : tp(_21c, cs.paddingLeft)) + (dojo.isIE && dojo.isQuirks ? tp(_21c, cs.borderLeftWidth) : 0), top = (dojo.isIE && dojo.isQuirks ? 0 : tp(_21c, cs.paddingTop)) + (dojo.isIE && dojo.isQuirks ? tp(_21c, cs.borderTopWidth) : 0);
				_21d.x += ifc.x + left - _21e.x;
				_21d.y += ifc.y + top - _21e.y;
			}
		} else {
			_21d = dojo.position(_21b, true);
			_21d.x += 10;
			_21d.y += 10;
		}
		var self = this;
		var _21f = dijit.getFocus(this);

		function _220() {
			if (self.refocus) {
				dijit.focus(_21f);
			}
			dijit.popup.close(self);
		};
		dijit.popup.open({popup: this, x: _21d.x, y: _21d.y, onExecute: _220, onCancel: _220, orient: this.isLeftToRight() ? "L" : "R"});
		this.focus();
		this._onBlur = function () {
			this.inherited("_onBlur", arguments);
			dijit.popup.close(this);
		};
	}, uninitialize: function () {
		dojo.forEach(this._bindings, function (b) {
			if (b) {
				this.unBindDomNode(b.node);
			}
		}, this);
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dojox.html.metrics"]) {
	dojo._hasResource["dojox.html.metrics"] = true;
	dojo.provide("dojox.html.metrics");
	(function () {
		var dhm = dojox.html.metrics;
		dhm.getFontMeasurements = function () {
			var _221 = {"1em": 0, "1ex": 0, "100%": 0, "12pt": 0, "16px": 0, "xx-small": 0, "x-small": 0, "small": 0, "medium": 0, "large": 0, "x-large": 0, "xx-large": 0};
			if (dojo.isIE) {
				dojo.doc.documentElement.style.fontSize = "100%";
			}
			var div = dojo.doc.createElement("div");
			var ds = div.style;
			ds.position = "absolute";
			ds.left = "-100px";
			ds.top = "0";
			ds.width = "30px";
			ds.height = "1000em";
			ds.borderWidth = "0";
			ds.margin = "0";
			ds.padding = "0";
			ds.outline = "0";
			ds.lineHeight = "1";
			ds.overflow = "hidden";
			dojo.body().appendChild(div);
			for (var p in _221) {
				ds.fontSize = p;
				_221[p] = Math.round(div.offsetHeight * 12 / 16) * 16 / 12 / 1000;
			}
			dojo.body().removeChild(div);
			div = null;
			return _221;
		};
		var _222 = null;
		dhm.getCachedFontMeasurements = function (_223) {
			if (_223 || !_222) {
				_222 = dhm.getFontMeasurements();
			}
			return _222;
		};
		var _224 = null, _225 = {};
		dhm.getTextBox = function (text, _226, _227) {
			var m, s;
			if (!_224) {
				m = _224 = dojo.doc.createElement("div");
				var c = dojo.doc.createElement("div");
				c.appendChild(m);
				s = c.style;
				s.overflow = "scroll";
				s.position = "absolute";
				s.left = "0px";
				s.top = "-10000px";
				s.width = "1px";
				s.height = "1px";
				s.visibility = "hidden";
				s.borderWidth = "0";
				s.margin = "0";
				s.padding = "0";
				s.outline = "0";
				dojo.body().appendChild(c);
			} else {
				m = _224;
			}
			m.className = "";
			s = m.style;
			s.borderWidth = "0";
			s.margin = "0";
			s.padding = "0";
			s.outline = "0";
			if (arguments.length > 1 && _226) {
				for (var i in _226) {
					if (i in _225) {
						continue;
					}
					s[i] = _226[i];
				}
			}
			if (arguments.length > 2 && _227) {
				m.className = _227;
			}
			m.innerHTML = text;
			var box = dojo.position(m);
			box.w = m.parentNode.scrollWidth;
			return box;
		};
		var _228 = {w: 16, h: 16};
		dhm.getScrollbar = function () {
			return {w: _228.w, h: _228.h};
		};
		dhm._fontResizeNode = null;
		dhm.initOnFontResize = function (_229) {
			var f = dhm._fontResizeNode = dojo.doc.createElement("iframe");
			var fs = f.style;
			fs.position = "absolute";
			fs.width = "5em";
			fs.height = "10em";
			fs.top = "-10000px";
			if (dojo.isIE) {
				f.onreadystatechange = function () {
					if (f.contentWindow.document.readyState == "complete") {
						f.onresize = f.contentWindow.parent[dojox._scopeName].html.metrics._fontresize;
					}
				};
			} else {
				f.onload = function () {
					f.contentWindow.onresize = f.contentWindow.parent[dojox._scopeName].html.metrics._fontresize;
				};
			}
			f.setAttribute("src", "javascript:'<html><head><script>if(\"loadFirebugConsole\" in window){window.loadFirebugConsole();}</script></head><body></body></html>'");
			dojo.body().appendChild(f);
			dhm.initOnFontResize = function () {
			};
		};
		dhm.onFontResize = function () {
		};
		dhm._fontresize = function () {
			dhm.onFontResize();
		};
		dojo.addOnUnload(function () {
			var f = dhm._fontResizeNode;
			if (f) {
				if (dojo.isIE && f.onresize) {
					f.onresize = null;
				} else {
					if (f.contentWindow && f.contentWindow.onresize) {
						f.contentWindow.onresize = null;
					}
				}
				dhm._fontResizeNode = null;
			}
		});
		dojo.addOnLoad(function () {
			try {
				var n = dojo.doc.createElement("div");
				n.style.cssText = "top:0;left:0;width:100px;height:100px;overflow:scroll;position:absolute;visibility:hidden;";
				dojo.body().appendChild(n);
				_228.w = n.offsetWidth - n.clientWidth;
				_228.h = n.offsetHeight - n.clientHeight;
				dojo.body().removeChild(n);
				delete n;
			} catch (e) {
			}
			if ("fontSizeWatch" in dojo.config && !!dojo.config.fontSizeWatch) {
				dhm.initOnFontResize();
			}
		});
	})();
}
if (!dojo._hasResource["dojox.grid.util"]) {
	dojo._hasResource["dojox.grid.util"] = true;
	dojo.provide("dojox.grid.util");
	(function () {
		var dgu = dojox.grid.util;
		dgu.na = "...";
		dgu.rowIndexTag = "gridRowIndex";
		dgu.gridViewTag = "gridView";
		dgu.fire = function (ob, ev, args) {
			var fn = ob && ev && ob[ev];
			return fn && (args ? fn.apply(ob, args) : ob[ev]());
		};
		dgu.setStyleHeightPx = function (_22a, _22b) {
			if (_22b >= 0) {
				var s = _22a.style;
				var v = _22b + "px";
				if (_22a && s["height"] != v) {
					s["height"] = v;
				}
			}
		};
		dgu.mouseEvents = ["mouseover", "mouseout", "mousedown", "mouseup", "click", "dblclick", "contextmenu"];
		dgu.keyEvents = ["keyup", "keydown", "keypress"];
		dgu.funnelEvents = function (_22c, _22d, _22e, _22f) {
			var evts = (_22f ? _22f : dgu.mouseEvents.concat(dgu.keyEvents));
			for (var i = 0, l = evts.length; i < l; i++) {
				_22d.connect(_22c, "on" + evts[i], _22e);
			}
		};
		dgu.removeNode = function (_230) {
			_230 = dojo.byId(_230);
			_230 && _230.parentNode && _230.parentNode.removeChild(_230);
			return _230;
		};
		dgu.arrayCompare = function (inA, inB) {
			for (var i = 0, l = inA.length; i < l; i++) {
				if (inA[i] != inB[i]) {
					return false;
				}
			}
			return (inA.length == inB.length);
		};
		dgu.arrayInsert = function (_231, _232, _233) {
			if (_231.length <= _232) {
				_231[_232] = _233;
			} else {
				_231.splice(_232, 0, _233);
			}
		};
		dgu.arrayRemove = function (_234, _235) {
			_234.splice(_235, 1);
		};
		dgu.arraySwap = function (_236, inI, inJ) {
			var _237 = _236[inI];
			_236[inI] = _236[inJ];
			_236[inJ] = _237;
		};
	})();
}
if (!dojo._hasResource["dojox.grid._Scroller"]) {
	dojo._hasResource["dojox.grid._Scroller"] = true;
	dojo.provide("dojox.grid._Scroller");
	(function () {
		var _238 = function (_239) {
			var i = 0, n, p = _239.parentNode;
			while ((n = p.childNodes[i++])) {
				if (n == _239) {
					return i - 1;
				}
			}
			return -1;
		};
		var _23a = function (_23b) {
			if (!_23b) {
				return;
			}
			var _23c = function (inW) {
				return inW.domNode && dojo.isDescendant(inW.domNode, _23b, true);
			};
			var ws = dijit.registry.filter(_23c);
			for (var i = 0, w; (w = ws[i]); i++) {
				w.destroy();
			}
			delete ws;
		};
		var _23d = function (_23e) {
			var node = dojo.byId(_23e);
			return (node && node.tagName ? node.tagName.toLowerCase() : "");
		};
		var _23f = function (_240, _241) {
			var _242 = [];
			var i = 0, n;
			while ((n = _240.childNodes[i])) {
				i++;
				if (_23d(n) == _241) {
					_242.push(n);
				}
			}
			return _242;
		};
		var _243 = function (_244) {
			return _23f(_244, "div");
		};
		dojo.declare("dojox.grid._Scroller", null, {constructor: function (_245) {
			this.setContentNodes(_245);
			this.pageHeights = [];
			this.pageNodes = [];
			this.stack = [];
		}, rowCount: 0, defaultRowHeight: 32, keepRows: 100, contentNode: null, scrollboxNode: null, defaultPageHeight: 0, keepPages: 10, pageCount: 0, windowHeight: 0, firstVisibleRow: 0, lastVisibleRow: 0, averageRowHeight: 0, page: 0, pageTop: 0, init: function (_246, _247, _248) {
			switch (arguments.length) {
				case 3:
					this.rowsPerPage = _248;
				case 2:
					this.keepRows = _247;
				case 1:
					this.rowCount = _246;
				default:
					break;
			}
			this.defaultPageHeight = this.defaultRowHeight * this.rowsPerPage;
			this.pageCount = this._getPageCount(this.rowCount, this.rowsPerPage);
			this.setKeepInfo(this.keepRows);
			this.invalidate();
			if (this.scrollboxNode) {
				this.scrollboxNode.scrollTop = 0;
				this.scroll(0);
				this.scrollboxNode.onscroll = dojo.hitch(this, "onscroll");
			}
		}, _getPageCount: function (_249, _24a) {
			return _249 ? (Math.ceil(_249 / _24a) || 1) : 0;
		}, destroy: function () {
			this.invalidateNodes();
			delete this.contentNodes;
			delete this.contentNode;
			delete this.scrollboxNode;
		}, setKeepInfo: function (_24b) {
			this.keepRows = _24b;
			this.keepPages = !this.keepRows ? this.keepPages : Math.max(Math.ceil(this.keepRows / this.rowsPerPage), 2);
		}, setContentNodes: function (_24c) {
			this.contentNodes = _24c;
			this.colCount = (this.contentNodes ? this.contentNodes.length : 0);
			this.pageNodes = [];
			for (var i = 0; i < this.colCount; i++) {
				this.pageNodes[i] = [];
			}
		}, getDefaultNodes: function () {
			return this.pageNodes[0] || [];
		}, invalidate: function () {
			this._invalidating = true;
			this.invalidateNodes();
			this.pageHeights = [];
			this.height = (this.pageCount ? (this.pageCount - 1) * this.defaultPageHeight + this.calcLastPageHeight() : 0);
			this.resize();
			this._invalidating = false;
		}, updateRowCount: function (_24d) {
			this.invalidateNodes();
			this.rowCount = _24d;
			var _24e = this.pageCount;
			if (_24e === 0) {
				this.height = 1;
			}
			this.pageCount = this._getPageCount(this.rowCount, this.rowsPerPage);
			if (this.pageCount < _24e) {
				for (var i = _24e - 1; i >= this.pageCount; i--) {
					this.height -= this.getPageHeight(i);
					delete this.pageHeights[i];
				}
			} else {
				if (this.pageCount > _24e) {
					this.height += this.defaultPageHeight * (this.pageCount - _24e - 1) + this.calcLastPageHeight();
				}
			}
			this.resize();
		}, pageExists: function (_24f) {
			return Boolean(this.getDefaultPageNode(_24f));
		}, measurePage: function (_250) {
			if (this.grid.rowHeight) {
				var _251 = this.grid.rowHeight + 1;
				return ((_250 + 1) * this.rowsPerPage > this.rowCount ? this.rowCount - _250 * this.rowsPerPage : this.rowsPerPage) * _251;
			}
			var n = this.getDefaultPageNode(_250);
			return (n && n.innerHTML) ? n.offsetHeight : undefined;
		}, positionPage: function (_252, _253) {
			for (var i = 0; i < this.colCount; i++) {
				this.pageNodes[i][_252].style.top = _253 + "px";
			}
		}, repositionPages: function (_254) {
			var _255 = this.getDefaultNodes();
			var last = 0;
			for (var i = 0; i < this.stack.length; i++) {
				last = Math.max(this.stack[i], last);
			}
			var n = _255[_254];
			var y = (n ? this.getPageNodePosition(n) + this.getPageHeight(_254) : 0);
			for (var p = _254 + 1; p <= last; p++) {
				n = _255[p];
				if (n) {
					if (this.getPageNodePosition(n) == y) {
						return;
					}
					this.positionPage(p, y);
				}
				y += this.getPageHeight(p);
			}
		}, installPage: function (_256) {
			for (var i = 0; i < this.colCount; i++) {
				this.contentNodes[i].appendChild(this.pageNodes[i][_256]);
			}
		}, preparePage: function (_257, _258) {
			var p = (_258 ? this.popPage() : null);
			for (var i = 0; i < this.colCount; i++) {
				var _259 = this.pageNodes[i];
				var _25a = (p === null ? this.createPageNode() : this.invalidatePageNode(p, _259));
				_25a.pageIndex = _257;
				_259[_257] = _25a;
			}
		}, renderPage: function (_25b) {
			var _25c = [];
			var i, j;
			for (i = 0; i < this.colCount; i++) {
				_25c[i] = this.pageNodes[i][_25b];
			}
			for (i = 0, j = _25b * this.rowsPerPage; (i < this.rowsPerPage) && (j < this.rowCount); i++, j++) {
				this.renderRow(j, _25c);
			}
		}, removePage: function (_25d) {
			for (var i = 0, j = _25d * this.rowsPerPage; i < this.rowsPerPage; i++, j++) {
				this.removeRow(j);
			}
		}, destroyPage: function (_25e) {
			for (var i = 0; i < this.colCount; i++) {
				var n = this.invalidatePageNode(_25e, this.pageNodes[i]);
				if (n) {
					dojo.destroy(n);
				}
			}
		}, pacify: function (_25f) {
		}, pacifying: false, pacifyTicks: 200, setPacifying: function (_260) {
			if (this.pacifying != _260) {
				this.pacifying = _260;
				this.pacify(this.pacifying);
			}
		}, startPacify: function () {
			this.startPacifyTicks = new Date().getTime();
		}, doPacify: function () {
			var _261 = (new Date().getTime() - this.startPacifyTicks) > this.pacifyTicks;
			this.setPacifying(true);
			this.startPacify();
			return _261;
		}, endPacify: function () {
			this.setPacifying(false);
		}, resize: function () {
			if (this.scrollboxNode) {
				this.windowHeight = this.scrollboxNode.clientHeight;
			}
			for (var i = 0; i < this.colCount; i++) {
				dojox.grid.util.setStyleHeightPx(this.contentNodes[i], Math.max(1, this.height));
			}
			var _262 = (!this._invalidating);
			if (!_262) {
				var ah = this.grid.get("autoHeight");
				if (typeof ah == "number" && ah <= Math.min(this.rowsPerPage, this.rowCount)) {
					_262 = true;
				}
			}
			if (_262) {
				this.needPage(this.page, this.pageTop);
			}
			var _263 = (this.page < this.pageCount - 1) ? this.rowsPerPage : ((this.rowCount % this.rowsPerPage) || this.rowsPerPage);
			var _264 = this.getPageHeight(this.page);
			this.averageRowHeight = (_264 > 0 && _263 > 0) ? (_264 / _263) : 0;
		}, calcLastPageHeight: function () {
			if (!this.pageCount) {
				return 0;
			}
			var _265 = this.pageCount - 1;
			var _266 = ((this.rowCount % this.rowsPerPage) || (this.rowsPerPage)) * this.defaultRowHeight;
			this.pageHeights[_265] = _266;
			return _266;
		}, updateContentHeight: function (inDh) {
			this.height += inDh;
			this.resize();
		}, updatePageHeight: function (_267, _268, _269) {
			if (this.pageExists(_267)) {
				var oh = this.getPageHeight(_267);
				var h = (this.measurePage(_267));
				if (h === undefined) {
					h = oh;
				}
				this.pageHeights[_267] = h;
				if (oh != h) {
					this.updateContentHeight(h - oh);
					var ah = this.grid.get("autoHeight");
					if ((typeof ah == "number" && ah > this.rowCount) || (ah === true && !_268)) {
						if (!_269) {
							this.grid.sizeChange();
						} else {
							var ns = this.grid.viewsNode.style;
							ns.height = parseInt(ns.height) + h - oh + "px";
							this.repositionPages(_267);
						}
					} else {
						this.repositionPages(_267);
					}
				}
				return h;
			}
			return 0;
		}, rowHeightChanged: function (_26a, _26b) {
			this.updatePageHeight(Math.floor(_26a / this.rowsPerPage), false, _26b);
		}, invalidateNodes: function () {
			while (this.stack.length) {
				this.destroyPage(this.popPage());
			}
		}, createPageNode: function () {
			var p = document.createElement("div");
			dojo.attr(p, "role", "presentation");
			p.style.position = "absolute";
			p.style[dojo._isBodyLtr() ? "left" : "right"] = "0";
			return p;
		}, getPageHeight: function (_26c) {
			var ph = this.pageHeights[_26c];
			return (ph !== undefined ? ph : this.defaultPageHeight);
		}, pushPage: function (_26d) {
			return this.stack.push(_26d);
		}, popPage: function () {
			return this.stack.shift();
		}, findPage: function (_26e) {
			var i = 0, h = 0;
			for (var ph = 0; i < this.pageCount; i++, h += ph) {
				ph = this.getPageHeight(i);
				if (h + ph >= _26e) {
					break;
				}
			}
			this.page = i;
			this.pageTop = h;
		}, buildPage: function (_26f, _270, _271) {
			this.preparePage(_26f, _270);
			this.positionPage(_26f, _271);
			this.installPage(_26f);
			this.renderPage(_26f);
			this.pushPage(_26f);
		}, needPage: function (_272, _273) {
			var h = this.getPageHeight(_272), oh = h;
			if (!this.pageExists(_272)) {
				this.buildPage(_272, (!this.grid._autoHeight && this.keepPages && (this.stack.length >= this.keepPages)), _273);
				h = this.updatePageHeight(_272, true);
			} else {
				this.positionPage(_272, _273);
			}
			return h;
		}, onscroll: function () {
			this.scroll(this.scrollboxNode.scrollTop);
		}, scroll: function (_274) {
			this.grid.scrollTop = _274;
			if (this.colCount) {
				this.startPacify();
				this.findPage(_274);
				var h = this.height;
				var b = this.getScrollBottom(_274);
				for (var p = this.page, y = this.pageTop; (p < this.pageCount) && ((b < 0) || (y < b)); p++) {
					y += this.needPage(p, y);
				}
				this.firstVisibleRow = this.getFirstVisibleRow(this.page, this.pageTop, _274);
				this.lastVisibleRow = this.getLastVisibleRow(p - 1, y, b);
				if (h != this.height) {
					this.repositionPages(p - 1);
				}
				this.endPacify();
			}
		}, getScrollBottom: function (_275) {
			return (this.windowHeight >= 0 ? _275 + this.windowHeight : -1);
		}, processNodeEvent: function (e, _276) {
			var t = e.target;
			while (t && (t != _276) && t.parentNode && (t.parentNode.parentNode != _276)) {
				t = t.parentNode;
			}
			if (!t || !t.parentNode || (t.parentNode.parentNode != _276)) {
				return false;
			}
			var page = t.parentNode;
			e.topRowIndex = page.pageIndex * this.rowsPerPage;
			e.rowIndex = e.topRowIndex + _238(t);
			e.rowTarget = t;
			return true;
		}, processEvent: function (e) {
			return this.processNodeEvent(e, this.contentNode);
		}, renderRow: function (_277, _278) {
		}, removeRow: function (_279) {
		}, getDefaultPageNode: function (_27a) {
			return this.getDefaultNodes()[_27a];
		}, positionPageNode: function (_27b, _27c) {
		}, getPageNodePosition: function (_27d) {
			return _27d.offsetTop;
		}, invalidatePageNode: function (_27e, _27f) {
			var p = _27f[_27e];
			if (p) {
				delete _27f[_27e];
				this.removePage(_27e, p);
				_23a(p);
				p.innerHTML = "";
			}
			return p;
		}, getPageRow: function (_280) {
			return _280 * this.rowsPerPage;
		}, getLastPageRow: function (_281) {
			return Math.min(this.rowCount, this.getPageRow(_281 + 1)) - 1;
		}, getFirstVisibleRow: function (_282, _283, _284) {
			if (!this.pageExists(_282)) {
				return 0;
			}
			var row = this.getPageRow(_282);
			var _285 = this.getDefaultNodes();
			var rows = _243(_285[_282]);
			for (var i = 0, l = rows.length; i < l && _283 < _284; i++, row++) {
				_283 += rows[i].offsetHeight;
			}
			return (row ? row - 1 : row);
		}, getLastVisibleRow: function (_286, _287, _288) {
			if (!this.pageExists(_286)) {
				return 0;
			}
			var _289 = this.getDefaultNodes();
			var row = this.getLastPageRow(_286);
			var rows = _243(_289[_286]);
			for (var i = rows.length - 1; i >= 0 && _287 > _288; i--, row--) {
				_287 -= rows[i].offsetHeight;
			}
			return row + 1;
		}, findTopRow: function (_28a) {
			var _28b = this.getDefaultNodes();
			var rows = _243(_28b[this.page]);
			for (var i = 0, l = rows.length, t = this.pageTop, h; i < l; i++) {
				h = rows[i].offsetHeight;
				t += h;
				if (t >= _28a) {
					this.offset = h - (t - _28a);
					return i + this.page * this.rowsPerPage;
				}
			}
			return -1;
		}, findScrollTop: function (_28c) {
			var _28d = Math.floor(_28c / this.rowsPerPage);
			var t = 0;
			var i, l;
			for (i = 0; i < _28d; i++) {
				t += this.getPageHeight(i);
			}
			this.pageTop = t;
			this.page = _28d;
			this.needPage(_28d, this.pageTop);
			var _28e = this.getDefaultNodes();
			var rows = _243(_28e[_28d]);
			var r = _28c - this.rowsPerPage * _28d;
			for (i = 0, l = rows.length; i < l && i < r; i++) {
				t += rows[i].offsetHeight;
			}
			return t;
		}, dummy: 0});
	})();
}
if (!dojo._hasResource["dojox.grid.cells._base"]) {
	dojo._hasResource["dojox.grid.cells._base"] = true;
	dojo.provide("dojox.grid.cells._base");
	dojo.declare("dojox.grid._DeferredTextWidget", dijit._Widget, {deferred: null, _destroyOnRemove: true, postCreate: function () {
		if (this.deferred) {
			this.deferred.addBoth(dojo.hitch(this, function (text) {
				if (this.domNode) {
					this.domNode.innerHTML = text;
				}
			}));
		}
	}});
	(function () {
		var _28f = function (_290) {
			try {
				dojox.grid.util.fire(_290, "focus");
				dojox.grid.util.fire(_290, "select");
			} catch (e) {
			}
		};
		var _291 = function () {
			setTimeout(dojo.hitch.apply(dojo, arguments), 0);
		};
		var dgc = dojox.grid.cells;
		dojo.declare("dojox.grid.cells._Base", null, {styles: "", classes: "", editable: false, alwaysEditing: false, formatter: null, defaultValue: "...", value: null, hidden: false, noresize: false, draggable: true, _valueProp: "value", _formatPending: false, constructor: function (_292) {
			this._props = _292 || {};
			dojo.mixin(this, _292);
			if (this.draggable === undefined) {
				this.draggable = true;
			}
		}, _defaultFormat: function (_293, _294) {
			var s = this.grid.formatterScope || this;
			var f = this.formatter;
			if (f && s && typeof f == "string") {
				f = this.formatter = s[f];
			}
			var v = (_293 != this.defaultValue && f) ? f.apply(s, _294) : _293;
			if (typeof v == "undefined") {
				return this.defaultValue;
			}
			if (v && v.addBoth) {
				v = new dojox.grid._DeferredTextWidget({deferred: v}, dojo.create("span", {innerHTML: this.defaultValue}));
			}
			if (v && v.declaredClass && v.startup) {
				return "<div class='dojoxGridStubNode' linkWidget='" + v.id + "' cellIdx='" + this.index + "'>" + this.defaultValue + "</div>";
			}
			return v;
		}, format: function (_295, _296) {
			var f, i = this.grid.edit.info, d = this.get ? this.get(_295, _296) : (this.value || this.defaultValue);
			d = (d && d.replace && this.grid.escapeHTMLInData) ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;") : d;
			if (this.editable && (this.alwaysEditing || (i.rowIndex == _295 && i.cell == this))) {
				return this.formatEditing(d, _295);
			} else {
				return this._defaultFormat(d, [d, _295, this]);
			}
		}, formatEditing: function (_297, _298) {
		}, getNode: function (_299) {
			return this.view.getCellNode(_299, this.index);
		}, getHeaderNode: function () {
			return this.view.getHeaderCellNode(this.index);
		}, getEditNode: function (_29a) {
			return (this.getNode(_29a) || 0).firstChild || 0;
		}, canResize: function () {
			var uw = this.unitWidth;
			return uw && (uw !== "auto");
		}, isFlex: function () {
			var uw = this.unitWidth;
			return uw && dojo.isString(uw) && (uw == "auto" || uw.slice(-1) == "%");
		}, applyEdit: function (_29b, _29c) {
			this.grid.edit.applyCellEdit(_29b, this, _29c);
		}, cancelEdit: function (_29d) {
			this.grid.doCancelEdit(_29d);
		}, _onEditBlur: function (_29e) {
			if (this.grid.edit.isEditCell(_29e, this.index)) {
				this.grid.edit.apply();
			}
		}, registerOnBlur: function (_29f, _2a0) {
			if (this.commitOnBlur) {
				dojo.connect(_29f, "onblur", function (e) {
					setTimeout(dojo.hitch(this, "_onEditBlur", _2a0), 250);
				});
			}
		}, needFormatNode: function (_2a1, _2a2) {
			this._formatPending = true;
			_291(this, "_formatNode", _2a1, _2a2);
		}, cancelFormatNode: function () {
			this._formatPending = false;
		}, _formatNode: function (_2a3, _2a4) {
			if (this._formatPending) {
				this._formatPending = false;
				dojo.setSelectable(this.grid.domNode, true);
				this.formatNode(this.getEditNode(_2a4), _2a3, _2a4);
			}
		}, formatNode: function (_2a5, _2a6, _2a7) {
			if (dojo.isIE) {
				_291(this, "focus", _2a7, _2a5);
			} else {
				this.focus(_2a7, _2a5);
			}
		}, dispatchEvent: function (m, e) {
			if (m in this) {
				return this[m](e);
			}
		}, getValue: function (_2a8) {
			return this.getEditNode(_2a8)[this._valueProp];
		}, setValue: function (_2a9, _2aa) {
			var n = this.getEditNode(_2a9);
			if (n) {
				n[this._valueProp] = _2aa;
			}
		}, focus: function (_2ab, _2ac) {
			_28f(_2ac || this.getEditNode(_2ab));
		}, save: function (_2ad) {
			this.value = this.value || this.getValue(_2ad);
		}, restore: function (_2ae) {
			this.setValue(_2ae, this.value);
		}, _finish: function (_2af) {
			dojo.setSelectable(this.grid.domNode, false);
			this.cancelFormatNode();
		}, apply: function (_2b0) {
			this.applyEdit(this.getValue(_2b0), _2b0);
			this._finish(_2b0);
		}, cancel: function (_2b1) {
			this.cancelEdit(_2b1);
			this._finish(_2b1);
		}});
		dgc._Base.markupFactory = function (node, _2b2) {
			var d = dojo;
			var _2b3 = d.trim(d.attr(node, "formatter") || "");
			if (_2b3) {
				_2b2.formatter = dojo.getObject(_2b3) || _2b3;
			}
			var get = d.trim(d.attr(node, "get") || "");
			if (get) {
				_2b2.get = dojo.getObject(get);
			}
			var _2b4 = function (attr, cell, _2b5) {
				var _2b6 = d.trim(d.attr(node, attr) || "");
				if (_2b6) {
					cell[_2b5 || attr] = !(_2b6.toLowerCase() == "false");
				}
			};
			_2b4("sortDesc", _2b2);
			_2b4("editable", _2b2);
			_2b4("alwaysEditing", _2b2);
			_2b4("noresize", _2b2);
			_2b4("draggable", _2b2);
			var _2b7 = d.trim(d.attr(node, "loadingText") || d.attr(node, "defaultValue") || "");
			if (_2b7) {
				_2b2.defaultValue = _2b7;
			}
			var _2b8 = function (attr, cell, _2b9) {
				var _2ba = d.trim(d.attr(node, attr) || "") || undefined;
				if (_2ba) {
					cell[_2b9 || attr] = _2ba;
				}
			};
			_2b8("styles", _2b2);
			_2b8("headerStyles", _2b2);
			_2b8("cellStyles", _2b2);
			_2b8("classes", _2b2);
			_2b8("headerClasses", _2b2);
			_2b8("cellClasses", _2b2);
		};
		dojo.declare("dojox.grid.cells.Cell", dgc._Base, {constructor: function () {
			this.keyFilter = this.keyFilter;
		}, keyFilter: null, formatEditing: function (_2bb, _2bc) {
			this.needFormatNode(_2bb, _2bc);
			return "<input class=\"dojoxGridInput\" type=\"text\" value=\"" + _2bb + "\">";
		}, formatNode: function (_2bd, _2be, _2bf) {
			this.inherited(arguments);
			this.registerOnBlur(_2bd, _2bf);
		}, doKey: function (e) {
			if (this.keyFilter) {
				var key = String.fromCharCode(e.charCode);
				if (key.search(this.keyFilter) == -1) {
					dojo.stopEvent(e);
				}
			}
		}, _finish: function (_2c0) {
			this.inherited(arguments);
			var n = this.getEditNode(_2c0);
			try {
				dojox.grid.util.fire(n, "blur");
			} catch (e) {
			}
		}});
		dgc.Cell.markupFactory = function (node, _2c1) {
			dgc._Base.markupFactory(node, _2c1);
			var d = dojo;
			var _2c2 = d.trim(d.attr(node, "keyFilter") || "");
			if (_2c2) {
				_2c1.keyFilter = new RegExp(_2c2);
			}
		};
		dojo.declare("dojox.grid.cells.RowIndex", dgc.Cell, {name: "Row", postscript: function () {
			this.editable = false;
		}, get: function (_2c3) {
			return _2c3 + 1;
		}});
		dgc.RowIndex.markupFactory = function (node, _2c4) {
			dgc.Cell.markupFactory(node, _2c4);
		};
		dojo.declare("dojox.grid.cells.Select", dgc.Cell, {options: null, values: null, returnIndex: -1, constructor: function (_2c5) {
			this.values = this.values || this.options;
		}, formatEditing: function (_2c6, _2c7) {
			this.needFormatNode(_2c6, _2c7);
			var h = ["<select class=\"dojoxGridSelect\">"];
			for (var i = 0, o, v; ((o = this.options[i]) !== undefined) && ((v = this.values[i]) !== undefined); i++) {
				h.push("<option", (_2c6 == v ? " selected" : ""), " value=\"" + v + "\"", ">", o, "</option>");
			}
			h.push("</select>");
			return h.join("");
		}, getValue: function (_2c8) {
			var n = this.getEditNode(_2c8);
			if (n) {
				var i = n.selectedIndex, o = n.options[i];
				return this.returnIndex > -1 ? i : o.value || o.innerHTML;
			}
		}});
		dgc.Select.markupFactory = function (node, cell) {
			dgc.Cell.markupFactory(node, cell);
			var d = dojo;
			var _2c9 = d.trim(d.attr(node, "options") || "");
			if (_2c9) {
				var o = _2c9.split(",");
				if (o[0] != _2c9) {
					cell.options = o;
				}
			}
			var _2ca = d.trim(d.attr(node, "values") || "");
			if (_2ca) {
				var v = _2ca.split(",");
				if (v[0] != _2ca) {
					cell.values = v;
				}
			}
		};
		dojo.declare("dojox.grid.cells.AlwaysEdit", dgc.Cell, {alwaysEditing: true, _formatNode: function (_2cb, _2cc) {
			this.formatNode(this.getEditNode(_2cc), _2cb, _2cc);
		}, applyStaticValue: function (_2cd) {
			var e = this.grid.edit;
			e.applyCellEdit(this.getValue(_2cd), this, _2cd);
			e.start(this, _2cd, true);
		}});
		dgc.AlwaysEdit.markupFactory = function (node, cell) {
			dgc.Cell.markupFactory(node, cell);
		};
		dojo.declare("dojox.grid.cells.Bool", dgc.AlwaysEdit, {_valueProp: "checked", formatEditing: function (_2ce, _2cf) {
			return "<input class=\"dojoxGridInput\" type=\"checkbox\"" + (_2ce ? " checked=\"checked\"" : "") + " style=\"width: auto\" />";
		}, doclick: function (e) {
			if (e.target.tagName == "INPUT") {
				this.applyStaticValue(e.rowIndex);
			}
		}});
		dgc.Bool.markupFactory = function (node, cell) {
			dgc.AlwaysEdit.markupFactory(node, cell);
		};
	})();
}
if (!dojo._hasResource["dojox.grid.cells"]) {
	dojo._hasResource["dojox.grid.cells"] = true;
	dojo.provide("dojox.grid.cells");
}
if (!dojo._hasResource["dojo.dnd.common"]) {
	dojo._hasResource["dojo.dnd.common"] = true;
	dojo.provide("dojo.dnd.common");
	dojo.getObject("dnd", true, dojo);
	dojo.dnd.getCopyKeyState = dojo.isCopyKey;
	dojo.dnd._uniqueId = 0;
	dojo.dnd.getUniqueId = function () {
		var id;
		do {
			id = dojo._scopeName + "Unique" + (++dojo.dnd._uniqueId);
		} while (dojo.byId(id));
		return id;
	};
	dojo.dnd._empty = {};
	dojo.dnd.isFormElement = function (e) {
		var t = e.target;
		if (t.nodeType == 3) {
			t = t.parentNode;
		}
		return " button textarea input select option ".indexOf(" " + t.tagName.toLowerCase() + " ") >= 0;
	};
}
if (!dojo._hasResource["dojo.dnd.autoscroll"]) {
	dojo._hasResource["dojo.dnd.autoscroll"] = true;
	dojo.provide("dojo.dnd.autoscroll");
	dojo.getObject("dnd", true, dojo);
	dojo.dnd.getViewport = dojo.window.getBox;
	dojo.dnd.V_TRIGGER_AUTOSCROLL = 32;
	dojo.dnd.H_TRIGGER_AUTOSCROLL = 32;
	dojo.dnd.V_AUTOSCROLL_VALUE = 16;
	dojo.dnd.H_AUTOSCROLL_VALUE = 16;
	dojo.dnd.autoScroll = function (e) {
		var v = dojo.window.getBox(), dx = 0, dy = 0;
		if (e.clientX < dojo.dnd.H_TRIGGER_AUTOSCROLL) {
			dx = -dojo.dnd.H_AUTOSCROLL_VALUE;
		} else {
			if (e.clientX > v.w - dojo.dnd.H_TRIGGER_AUTOSCROLL) {
				dx = dojo.dnd.H_AUTOSCROLL_VALUE;
			}
		}
		if (e.clientY < dojo.dnd.V_TRIGGER_AUTOSCROLL) {
			dy = -dojo.dnd.V_AUTOSCROLL_VALUE;
		} else {
			if (e.clientY > v.h - dojo.dnd.V_TRIGGER_AUTOSCROLL) {
				dy = dojo.dnd.V_AUTOSCROLL_VALUE;
			}
		}
		window.scrollBy(dx, dy);
	};
	dojo.dnd._validNodes = {"div": 1, "p": 1, "td": 1};
	dojo.dnd._validOverflow = {"auto": 1, "scroll": 1};
	dojo.dnd.autoScrollNodes = function (e) {
		for (var n = e.target; n;) {
			if (n.nodeType == 1 && (n.tagName.toLowerCase() in dojo.dnd._validNodes)) {
				var s = dojo.getComputedStyle(n);
				if (s.overflow.toLowerCase() in dojo.dnd._validOverflow) {
					var b = dojo._getContentBox(n, s), t = dojo.position(n, true);
					var w = Math.min(dojo.dnd.H_TRIGGER_AUTOSCROLL, b.w / 2), h = Math.min(dojo.dnd.V_TRIGGER_AUTOSCROLL, b.h / 2), rx = e.pageX - t.x, ry = e.pageY - t.y, dx = 0, dy = 0;
					if (dojo.isWebKit || dojo.isOpera) {
						rx += dojo.body().scrollLeft;
						ry += dojo.body().scrollTop;
					}
					if (rx > 0 && rx < b.w) {
						if (rx < w) {
							dx = -w;
						} else {
							if (rx > b.w - w) {
								dx = w;
							}
						}
					}
					if (ry > 0 && ry < b.h) {
						if (ry < h) {
							dy = -h;
						} else {
							if (ry > b.h - h) {
								dy = h;
							}
						}
					}
					var _2d0 = n.scrollLeft, _2d1 = n.scrollTop;
					n.scrollLeft = n.scrollLeft + dx;
					n.scrollTop = n.scrollTop + dy;
					if (_2d0 != n.scrollLeft || _2d1 != n.scrollTop) {
						return;
					}
				}
			}
			try {
				n = n.parentNode;
			} catch (x) {
				n = null;
			}
		}
		dojo.dnd.autoScroll(e);
	};
}
if (!dojo._hasResource["dojo.dnd.Mover"]) {
	dojo._hasResource["dojo.dnd.Mover"] = true;
	dojo.provide("dojo.dnd.Mover");
	dojo.declare("dojo.dnd.Mover", null, {constructor: function (node, e, host) {
		this.node = dojo.byId(node);
		var pos = e.touches ? e.touches[0] : e;
		this.marginBox = {l: pos.pageX, t: pos.pageY};
		this.mouseButton = e.button;
		var h = (this.host = host), d = node.ownerDocument;
		this.events = [dojo.connect(d, "onmousemove", this, "onFirstMove"), dojo.connect(d, "ontouchmove", this, "onFirstMove"), dojo.connect(d, "onmousemove", this, "onMouseMove"), dojo.connect(d, "ontouchmove", this, "onMouseMove"), dojo.connect(d, "onmouseup", this, "onMouseUp"), dojo.connect(d, "ontouchend", this, "onMouseUp"), dojo.connect(d, "ondragstart", dojo.stopEvent), dojo.connect(d.body, "onselectstart", dojo.stopEvent)];
		if (h && h.onMoveStart) {
			h.onMoveStart(this);
		}
	}, onMouseMove: function (e) {
		dojo.dnd.autoScroll(e);
		var m = this.marginBox, pos = e.touches ? e.touches[0] : e;
		this.host.onMove(this, {l: m.l + pos.pageX, t: m.t + pos.pageY}, e);
		dojo.stopEvent(e);
	}, onMouseUp: function (e) {
		if (dojo.isWebKit && dojo.isMac && this.mouseButton == 2 ? e.button == 0 : this.mouseButton == e.button) {
			this.destroy();
		}
		dojo.stopEvent(e);
	}, onFirstMove: function (e) {
		var s = this.node.style, l, t, h = this.host;
		switch (s.position) {
			case "relative":
			case "absolute":
				l = Math.round(parseFloat(s.left)) || 0;
				t = Math.round(parseFloat(s.top)) || 0;
				break;
			default:
				s.position = "absolute";
				var m = dojo.marginBox(this.node);
				var b = dojo.doc.body;
				var bs = dojo.getComputedStyle(b);
				var bm = dojo._getMarginBox(b, bs);
				var bc = dojo._getContentBox(b, bs);
				l = m.l - (bc.l - bm.l);
				t = m.t - (bc.t - bm.t);
				break;
		}
		this.marginBox.l = l - this.marginBox.l;
		this.marginBox.t = t - this.marginBox.t;
		if (h && h.onFirstMove) {
			h.onFirstMove(this, e);
		}
		dojo.disconnect(this.events.shift());
		dojo.disconnect(this.events.shift());
	}, destroy: function () {
		dojo.forEach(this.events, dojo.disconnect);
		var h = this.host;
		if (h && h.onMoveStop) {
			h.onMoveStop(this);
		}
		this.events = this.node = this.host = null;
	}});
}
if (!dojo._hasResource["dojo.dnd.Moveable"]) {
	dojo._hasResource["dojo.dnd.Moveable"] = true;
	dojo.provide("dojo.dnd.Moveable");
	dojo.declare("dojo.dnd.Moveable", null, {handle: "", delay: 0, skip: false, constructor: function (node, _2d2) {
		this.node = dojo.byId(node);
		if (!_2d2) {
			_2d2 = {};
		}
		this.handle = _2d2.handle ? dojo.byId(_2d2.handle) : null;
		if (!this.handle) {
			this.handle = this.node;
		}
		this.delay = _2d2.delay > 0 ? _2d2.delay : 0;
		this.skip = _2d2.skip;
		this.mover = _2d2.mover ? _2d2.mover : dojo.dnd.Mover;
		this.events = [dojo.connect(this.handle, "onmousedown", this, "onMouseDown"), dojo.connect(this.handle, "ontouchstart", this, "onMouseDown"), dojo.connect(this.handle, "ondragstart", this, "onSelectStart"), dojo.connect(this.handle, "onselectstart", this, "onSelectStart")];
	}, markupFactory: function (_2d3, node) {
		return new dojo.dnd.Moveable(node, _2d3);
	}, destroy: function () {
		dojo.forEach(this.events, dojo.disconnect);
		this.events = this.node = this.handle = null;
	}, onMouseDown: function (e) {
		if (this.skip && dojo.dnd.isFormElement(e)) {
			return;
		}
		if (this.delay) {
			this.events.push(dojo.connect(this.handle, "onmousemove", this, "onMouseMove"), dojo.connect(this.handle, "ontouchmove", this, "onMouseMove"), dojo.connect(this.handle, "onmouseup", this, "onMouseUp"), dojo.connect(this.handle, "ontouchend", this, "onMouseUp"));
			var pos = e.touches ? e.touches[0] : e;
			this._lastX = pos.pageX;
			this._lastY = pos.pageY;
		} else {
			this.onDragDetected(e);
		}
		dojo.stopEvent(e);
	}, onMouseMove: function (e) {
		var pos = e.touches ? e.touches[0] : e;
		if (Math.abs(pos.pageX - this._lastX) > this.delay || Math.abs(pos.pageY - this._lastY) > this.delay) {
			this.onMouseUp(e);
			this.onDragDetected(e);
		}
		dojo.stopEvent(e);
	}, onMouseUp: function (e) {
		for (var i = 0; i < 2; ++i) {
			dojo.disconnect(this.events.pop());
		}
		dojo.stopEvent(e);
	}, onSelectStart: function (e) {
		if (!this.skip || !dojo.dnd.isFormElement(e)) {
			dojo.stopEvent(e);
		}
	}, onDragDetected: function (e) {
		new this.mover(this.node, e, this);
	}, onMoveStart: function (_2d4) {
		dojo.publish("/dnd/move/start", [_2d4]);
		dojo.addClass(dojo.body(), "dojoMove");
		dojo.addClass(this.node, "dojoMoveItem");
	}, onMoveStop: function (_2d5) {
		dojo.publish("/dnd/move/stop", [_2d5]);
		dojo.removeClass(dojo.body(), "dojoMove");
		dojo.removeClass(this.node, "dojoMoveItem");
	}, onFirstMove: function (_2d6, e) {
	}, onMove: function (_2d7, _2d8, e) {
		this.onMoving(_2d7, _2d8);
		var s = _2d7.node.style;
		s.left = _2d8.l + "px";
		s.top = _2d8.t + "px";
		this.onMoved(_2d7, _2d8);
	}, onMoving: function (_2d9, _2da) {
	}, onMoved: function (_2db, _2dc) {
	}});
}
if (!dojo._hasResource["dojox.grid._Builder"]) {
	dojo._hasResource["dojox.grid._Builder"] = true;
	dojo.provide("dojox.grid._Builder");
	(function () {
		var dg = dojox.grid;
		var _2dd = function (td) {
			return td.cellIndex >= 0 ? td.cellIndex : dojo.indexOf(td.parentNode.cells, td);
		};
		var _2de = function (tr) {
			return tr.rowIndex >= 0 ? tr.rowIndex : dojo.indexOf(tr.parentNode.childNodes, tr);
		};
		var _2df = function (_2e0, _2e1) {
			return _2e0 && ((_2e0.rows || 0)[_2e1] || _2e0.childNodes[_2e1]);
		};
		var _2e2 = function (node) {
			for (var n = node; n && n.tagName != "TABLE"; n = n.parentNode) {
			}
			return n;
		};
		var _2e3 = function (_2e4, _2e5) {
			for (var n = _2e4; n && _2e5(n); n = n.parentNode) {
			}
			return n;
		};
		var _2e6 = function (_2e7) {
			var name = _2e7.toUpperCase();
			return function (node) {
				return node.tagName != name;
			};
		};
		var _2e8 = dojox.grid.util.rowIndexTag;
		var _2e9 = dojox.grid.util.gridViewTag;
		dg._Builder = dojo.extend(function (view) {
			if (view) {
				this.view = view;
				this.grid = view.grid;
			}
		}, {view: null, _table: "<table class=\"dojoxGridRowTable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\"", getTableArray: function () {
			var html = [this._table];
			if (this.view.viewWidth) {
				html.push([" style=\"width:", this.view.viewWidth, ";\""].join(""));
			}
			html.push(">");
			return html;
		}, generateCellMarkup: function (_2ea, _2eb, _2ec, _2ed) {
			var _2ee = [], html;
			if (_2ed) {
				var _2ef = _2ea.index != _2ea.grid.getSortIndex() ? "" : _2ea.grid.sortInfo > 0 ? "aria-sort=\"ascending\"" : "aria-sort=\"descending\"";
				if (!_2ea.id) {
					_2ea.id = this.grid.id + "Hdr" + _2ea.index;
				}
				html = ["<th tabIndex=\"-1\" aria-readonly=\"true\" role=\"columnheader\"", _2ef, "id=\"", _2ea.id, "\""];
			} else {
				var _2f0 = this.grid.editable && !_2ea.editable ? "aria-readonly=\"true\"" : "";
				html = ["<td tabIndex=\"-1\" role=\"gridcell\"", _2f0];
			}
			if (_2ea.colSpan) {
				html.push(" colspan=\"", _2ea.colSpan, "\"");
			}
			if (_2ea.rowSpan) {
				html.push(" rowspan=\"", _2ea.rowSpan, "\"");
			}
			html.push(" class=\"dojoxGridCell ");
			if (_2ea.classes) {
				html.push(_2ea.classes, " ");
			}
			if (_2ec) {
				html.push(_2ec, " ");
			}
			_2ee.push(html.join(""));
			_2ee.push("");
			html = ["\" idx=\"", _2ea.index, "\" style=\""];
			if (_2eb && _2eb[_2eb.length - 1] != ";") {
				_2eb += ";";
			}
			html.push(_2ea.styles, _2eb || "", _2ea.hidden ? "display:none;" : "");
			if (_2ea.unitWidth) {
				html.push("width:", _2ea.unitWidth, ";");
			}
			_2ee.push(html.join(""));
			_2ee.push("");
			html = ["\""];
			if (_2ea.attrs) {
				html.push(" ", _2ea.attrs);
			}
			html.push(">");
			_2ee.push(html.join(""));
			_2ee.push("");
			_2ee.push(_2ed ? "</th>" : "</td>");
			return _2ee;
		}, isCellNode: function (_2f1) {
			return Boolean(_2f1 && _2f1 != dojo.doc && dojo.attr(_2f1, "idx"));
		}, getCellNodeIndex: function (_2f2) {
			return _2f2 ? Number(dojo.attr(_2f2, "idx")) : -1;
		}, getCellNode: function (_2f3, _2f4) {
			for (var i = 0, row; ((row = _2df(_2f3.firstChild, i)) && row.cells); i++) {
				for (var j = 0, cell; (cell = row.cells[j]); j++) {
					if (this.getCellNodeIndex(cell) == _2f4) {
						return cell;
					}
				}
			}
			return null;
		}, findCellTarget: function (_2f5, _2f6) {
			var n = _2f5;
			while (n && (!this.isCellNode(n) || (n.offsetParent && _2e9 in n.offsetParent.parentNode && n.offsetParent.parentNode[_2e9] != this.view.id)) && (n != _2f6)) {
				n = n.parentNode;
			}
			return n != _2f6 ? n : null;
		}, baseDecorateEvent: function (e) {
			e.dispatch = "do" + e.type;
			e.grid = this.grid;
			e.sourceView = this.view;
			e.cellNode = this.findCellTarget(e.target, e.rowNode);
			e.cellIndex = this.getCellNodeIndex(e.cellNode);
			e.cell = (e.cellIndex >= 0 ? this.grid.getCell(e.cellIndex) : null);
		}, findTarget: function (_2f7, _2f8) {
			var n = _2f7;
			while (n && (n != this.domNode) && (!(_2f8 in n) || (_2e9 in n && n[_2e9] != this.view.id))) {
				n = n.parentNode;
			}
			return (n != this.domNode) ? n : null;
		}, findRowTarget: function (_2f9) {
			return this.findTarget(_2f9, _2e8);
		}, isIntraNodeEvent: function (e) {
			try {
				return (e.cellNode && e.relatedTarget && dojo.isDescendant(e.relatedTarget, e.cellNode));
			} catch (x) {
				return false;
			}
		}, isIntraRowEvent: function (e) {
			try {
				var row = e.relatedTarget && this.findRowTarget(e.relatedTarget);
				return !row && (e.rowIndex == -1) || row && (e.rowIndex == row.gridRowIndex);
			} catch (x) {
				return false;
			}
		}, dispatchEvent: function (e) {
			if (e.dispatch in this) {
				return this[e.dispatch](e);
			}
			return false;
		}, domouseover: function (e) {
			if (e.cellNode && (e.cellNode != this.lastOverCellNode)) {
				this.lastOverCellNode = e.cellNode;
				this.grid.onMouseOver(e);
			}
			this.grid.onMouseOverRow(e);
		}, domouseout: function (e) {
			if (e.cellNode && (e.cellNode == this.lastOverCellNode) && !this.isIntraNodeEvent(e, this.lastOverCellNode)) {
				this.lastOverCellNode = null;
				this.grid.onMouseOut(e);
				if (!this.isIntraRowEvent(e)) {
					this.grid.onMouseOutRow(e);
				}
			}
		}, domousedown: function (e) {
			if (e.cellNode) {
				this.grid.onMouseDown(e);
			}
			this.grid.onMouseDownRow(e);
		}});
		dg._ContentBuilder = dojo.extend(function (view) {
			dg._Builder.call(this, view);
		}, dg._Builder.prototype, {update: function () {
			this.prepareHtml();
		}, prepareHtml: function () {
			var _2fa = this.grid.get, _2fb = this.view.structure.cells;
			for (var j = 0, row; (row = _2fb[j]); j++) {
				for (var i = 0, cell; (cell = row[i]); i++) {
					cell.get = cell.get || (cell.value == undefined) && _2fa;
					cell.markup = this.generateCellMarkup(cell, cell.cellStyles, cell.cellClasses, false);
					if (!this.grid.editable && cell.editable) {
						this.grid.editable = true;
					}
				}
			}
		}, generateHtml: function (_2fc, _2fd) {
			var html = this.getTableArray(), v = this.view, _2fe = v.structure.cells, item = this.grid.getItem(_2fd);
			dojox.grid.util.fire(this.view, "onBeforeRow", [_2fd, _2fe]);
			for (var j = 0, row; (row = _2fe[j]); j++) {
				if (row.hidden || row.header) {
					continue;
				}
				html.push(!row.invisible ? "<tr>" : "<tr class=\"dojoxGridInvisible\">");
				for (var i = 0, cell, m, cc, cs; (cell = row[i]); i++) {
					m = cell.markup;
					cc = cell.customClasses = [];
					cs = cell.customStyles = [];
					m[5] = cell.format(_2fd, item);
					m[1] = cc.join(" ");
					m[3] = cs.join(";");
					html.push.apply(html, m);
				}
				html.push("</tr>");
			}
			html.push("</table>");
			return html.join("");
		}, decorateEvent: function (e) {
			e.rowNode = this.findRowTarget(e.target);
			if (!e.rowNode) {
				return false;
			}
			e.rowIndex = e.rowNode[_2e8];
			this.baseDecorateEvent(e);
			e.cell = this.grid.getCell(e.cellIndex);
			return true;
		}});
		dg._HeaderBuilder = dojo.extend(function (view) {
			this.moveable = null;
			dg._Builder.call(this, view);
		}, dg._Builder.prototype, {_skipBogusClicks: false, overResizeWidth: 4, minColWidth: 1, update: function () {
			if (this.tableMap) {
				this.tableMap.mapRows(this.view.structure.cells);
			} else {
				this.tableMap = new dg._TableMap(this.view.structure.cells);
			}
		}, generateHtml: function (_2ff, _300) {
			var html = this.getTableArray(), _301 = this.view.structure.cells;
			dojox.grid.util.fire(this.view, "onBeforeRow", [-1, _301]);
			for (var j = 0, row; (row = _301[j]); j++) {
				if (row.hidden) {
					continue;
				}
				html.push(!row.invisible ? "<tr>" : "<tr class=\"dojoxGridInvisible\">");
				for (var i = 0, cell, _302; (cell = row[i]); i++) {
					cell.customClasses = [];
					cell.customStyles = [];
					if (this.view.simpleStructure) {
						if (cell.draggable) {
							if (cell.headerClasses) {
								if (cell.headerClasses.indexOf("dojoDndItem") == -1) {
									cell.headerClasses += " dojoDndItem";
								}
							} else {
								cell.headerClasses = "dojoDndItem";
							}
						}
						if (cell.attrs) {
							if (cell.attrs.indexOf("dndType='gridColumn_") == -1) {
								cell.attrs += " dndType='gridColumn_" + this.grid.id + "'";
							}
						} else {
							cell.attrs = "dndType='gridColumn_" + this.grid.id + "'";
						}
					}
					_302 = this.generateCellMarkup(cell, cell.headerStyles, cell.headerClasses, true);
					_302[5] = (_300 != undefined ? _300 : _2ff(cell));
					_302[3] = cell.customStyles.join(";");
					_302[1] = cell.customClasses.join(" ");
					html.push(_302.join(""));
				}
				html.push("</tr>");
			}
			html.push("</table>");
			return html.join("");
		}, getCellX: function (e) {
			var n, x = e.layerX;
			if (dojo.isMoz || dojo.isIE >= 9) {
				n = _2e3(e.target, _2e6("th"));
				x -= (n && n.offsetLeft) || 0;
				var t = e.sourceView.getScrollbarWidth();
				if (!dojo._isBodyLtr()) {
					table = _2e3(n, _2e6("table"));
					x -= (table && table.offsetLeft) || 0;
				}
			}
			n = _2e3(e.target, function () {
				if (!n || n == e.cellNode) {
					return false;
				}
				x += (n.offsetLeft < 0 ? 0 : n.offsetLeft);
				return true;
			});
			return x;
		}, decorateEvent: function (e) {
			this.baseDecorateEvent(e);
			e.rowIndex = -1;
			e.cellX = this.getCellX(e);
			return true;
		}, prepareResize: function (e, mod) {
			do {
				var i = _2dd(e.cellNode);
				e.cellNode = (i ? e.cellNode.parentNode.cells[i + mod] : null);
				e.cellIndex = (e.cellNode ? this.getCellNodeIndex(e.cellNode) : -1);
			} while (e.cellNode && e.cellNode.style.display == "none");
			return Boolean(e.cellNode);
		}, canResize: function (e) {
			if (!e.cellNode || e.cellNode.colSpan > 1) {
				return false;
			}
			var cell = this.grid.getCell(e.cellIndex);
			return !cell.noresize && cell.canResize();
		}, overLeftResizeArea: function (e) {
			if (dojo.hasClass(dojo.body(), "dojoDndMove")) {
				return false;
			}
			if (dojo.isIE) {
				var tN = e.target;
				if (dojo.hasClass(tN, "dojoxGridArrowButtonNode") || dojo.hasClass(tN, "dojoxGridArrowButtonChar")) {
					return false;
				}
			}
			if (dojo._isBodyLtr()) {
				return (e.cellIndex > 0) && (e.cellX > 0 && e.cellX < this.overResizeWidth) && this.prepareResize(e, -1);
			}
			var t = e.cellNode && (e.cellX > 0 && e.cellX < this.overResizeWidth);
			return t;
		}, overRightResizeArea: function (e) {
			if (dojo.hasClass(dojo.body(), "dojoDndMove")) {
				return false;
			}
			if (dojo.isIE) {
				var tN = e.target;
				if (dojo.hasClass(tN, "dojoxGridArrowButtonNode") || dojo.hasClass(tN, "dojoxGridArrowButtonChar")) {
					return false;
				}
			}
			if (dojo._isBodyLtr()) {
				return e.cellNode && (e.cellX >= e.cellNode.offsetWidth - this.overResizeWidth);
			}
			return (e.cellIndex > 0) && (e.cellX >= e.cellNode.offsetWidth - this.overResizeWidth) && this.prepareResize(e, -1);
		}, domousemove: function (e) {
			if (!this.moveable) {
				var c = (this.overRightResizeArea(e) ? "dojoxGridColResize" : (this.overLeftResizeArea(e) ? "dojoxGridColResize" : ""));
				if (c && !this.canResize(e)) {
					c = "dojoxGridColNoResize";
				}
				dojo.toggleClass(e.sourceView.headerNode, "dojoxGridColNoResize", (c == "dojoxGridColNoResize"));
				dojo.toggleClass(e.sourceView.headerNode, "dojoxGridColResize", (c == "dojoxGridColResize"));
				if (dojo.isIE) {
					var t = e.sourceView.headerNode.scrollLeft;
					e.sourceView.headerNode.scrollLeft = t;
				}
				if (c) {
					dojo.stopEvent(e);
				}
			}
		}, domousedown: function (e) {
			if (!this.moveable) {
				if ((this.overRightResizeArea(e) || this.overLeftResizeArea(e)) && this.canResize(e)) {
					this.beginColumnResize(e);
				} else {
					this.grid.onMouseDown(e);
					this.grid.onMouseOverRow(e);
				}
			}
		}, doclick: function (e) {
			if (this._skipBogusClicks) {
				dojo.stopEvent(e);
				return true;
			}
			return false;
		}, colResizeSetup: function (e, _303) {
			var _304 = dojo.contentBox(e.sourceView.headerNode);
			if (_303) {
				this.lineDiv = document.createElement("div");
				var vw = (dojo.position || dojo._abs)(e.sourceView.headerNode, true);
				var _305 = dojo.contentBox(e.sourceView.domNode);
				var l = e.pageX;
				if (!dojo._isBodyLtr() && dojo.isIE < 8) {
					l -= dojox.html.metrics.getScrollbar().w;
				}
				dojo.style(this.lineDiv, {top: vw.y + "px", left: l + "px", height: (_305.h + _304.h) + "px"});
				dojo.addClass(this.lineDiv, "dojoxGridResizeColLine");
				this.lineDiv._origLeft = l;
				dojo.body().appendChild(this.lineDiv);
			}
			var _306 = [], _307 = this.tableMap.findOverlappingNodes(e.cellNode);
			for (var i = 0, cell; (cell = _307[i]); i++) {
				_306.push({node: cell, index: this.getCellNodeIndex(cell), width: cell.offsetWidth});
			}
			var view = e.sourceView;
			var adj = dojo._isBodyLtr() ? 1 : -1;
			var _308 = e.grid.views.views;
			var _309 = [];
			for (var j = view.idx + adj, _30a; (_30a = _308[j]); j = j + adj) {
				_309.push({node: _30a.headerNode, left: window.parseInt(_30a.headerNode.style.left)});
			}
			var _30b = view.headerContentNode.firstChild;
			var drag = {scrollLeft: e.sourceView.headerNode.scrollLeft, view: view, node: e.cellNode, index: e.cellIndex, w: dojo.contentBox(e.cellNode).w, vw: _304.w, table: _30b, tw: dojo.contentBox(_30b).w, spanners: _306, followers: _309};
			return drag;
		}, beginColumnResize: function (e) {
			this.moverDiv = document.createElement("div");
			dojo.style(this.moverDiv, {position: "absolute", left: 0});
			dojo.body().appendChild(this.moverDiv);
			dojo.addClass(this.grid.domNode, "dojoxGridColumnResizing");
			var m = (this.moveable = new dojo.dnd.Moveable(this.moverDiv));
			var drag = this.colResizeSetup(e, true);
			m.onMove = dojo.hitch(this, "doResizeColumn", drag);
			dojo.connect(m, "onMoveStop", dojo.hitch(this, function () {
				this.endResizeColumn(drag);
				if (drag.node.releaseCapture) {
					drag.node.releaseCapture();
				}
				this.moveable.destroy();
				delete this.moveable;
				this.moveable = null;
				dojo.removeClass(this.grid.domNode, "dojoxGridColumnResizing");
			}));
			if (e.cellNode.setCapture) {
				e.cellNode.setCapture();
			}
			m.onMouseDown(e);
		}, doResizeColumn: function (_30c, _30d, _30e) {
			var _30f = _30e.l;
			var data = {deltaX: _30f, w: _30c.w + (dojo._isBodyLtr() ? _30f : -_30f), vw: _30c.vw + _30f, tw: _30c.tw + _30f};
			this.dragRecord = {inDrag: _30c, mover: _30d, leftTop: _30e};
			if (data.w >= this.minColWidth) {
				if (!_30d) {
					this.doResizeNow(_30c, data);
				} else {
					dojo.style(this.lineDiv, "left", (this.lineDiv._origLeft + data.deltaX) + "px");
				}
			}
		}, endResizeColumn: function (_310) {
			if (this.dragRecord) {
				var _311 = this.dragRecord.leftTop;
				var _312 = dojo._isBodyLtr() ? _311.l : -_311.l;
				_312 += Math.max(_310.w + _312, this.minColWidth) - (_310.w + _312);
				if (dojo.isWebKit && _310.spanners.length) {
					_312 += dojo._getPadBorderExtents(_310.spanners[0].node).w;
				}
				var data = {deltaX: _312, w: _310.w + _312, vw: _310.vw + _312, tw: _310.tw + _312};
				this.doResizeNow(_310, data);
				delete this.dragRecord;
			}
			dojo.destroy(this.lineDiv);
			dojo.destroy(this.moverDiv);
			dojo.destroy(this.moverDiv);
			delete this.moverDiv;
			this._skipBogusClicks = true;
			_310.view.update();
			this._skipBogusClicks = false;
			this.grid.onResizeColumn(_310.index);
		}, doResizeNow: function (_313, data) {
			_313.view.convertColPctToFixed();
			if (_313.view.flexCells && !_313.view.testFlexCells()) {
				var t = _2e2(_313.node);
				if (t) {
					(t.style.width = "");
				}
			}
			var i, s, sw, f, fl;
			for (i = 0; (s = _313.spanners[i]); i++) {
				sw = s.width + data.deltaX;
				if (sw > 0) {
					s.node.style.width = sw + "px";
					_313.view.setColWidth(s.index, sw);
				}
			}
			if (dojo._isBodyLtr() || !dojo.isIE) {
				for (i = 0; (f = _313.followers[i]); i++) {
					fl = f.left + data.deltaX;
					f.node.style.left = fl + "px";
				}
			}
			_313.node.style.width = data.w + "px";
			_313.view.setColWidth(_313.index, data.w);
			_313.view.headerNode.style.width = data.vw + "px";
			_313.view.setColumnsWidth(data.tw);
			if (!dojo._isBodyLtr()) {
				_313.view.headerNode.scrollLeft = _313.scrollLeft + data.deltaX;
			}
		}});
		dg._TableMap = dojo.extend(function (rows) {
			this.mapRows(rows);
		}, {map: null, mapRows: function (_314) {
			var _315 = _314.length;
			if (!_315) {
				return;
			}
			this.map = [];
			var row;
			for (var k = 0; (row = _314[k]); k++) {
				this.map[k] = [];
			}
			for (var j = 0; (row = _314[j]); j++) {
				for (var i = 0, x = 0, cell, _316, _317; (cell = row[i]); i++) {
					while (this.map[j][x]) {
						x++;
					}
					this.map[j][x] = {c: i, r: j};
					_317 = cell.rowSpan || 1;
					_316 = cell.colSpan || 1;
					for (var y = 0; y < _317; y++) {
						for (var s = 0; s < _316; s++) {
							this.map[j + y][x + s] = this.map[j][x];
						}
					}
					x += _316;
				}
			}
		}, dumpMap: function () {
			for (var j = 0, row, h = ""; (row = this.map[j]); j++, h = "") {
				for (var i = 0, cell; (cell = row[i]); i++) {
					h += cell.r + "," + cell.c + "   ";
				}
			}
		}, getMapCoords: function (_318, _319) {
			for (var j = 0, row; (row = this.map[j]); j++) {
				for (var i = 0, cell; (cell = row[i]); i++) {
					if (cell.c == _319 && cell.r == _318) {
						return {j: j, i: i};
					}
				}
			}
			return {j: -1, i: -1};
		}, getNode: function (_31a, _31b, _31c) {
			var row = _31a && _31a.rows[_31b];
			return row && row.cells[_31c];
		}, _findOverlappingNodes: function (_31d, _31e, _31f) {
			var _320 = [];
			var m = this.getMapCoords(_31e, _31f);
			for (var j = 0, row; (row = this.map[j]); j++) {
				if (j == m.j) {
					continue;
				}
				var rw = row[m.i];
				var n = (rw ? this.getNode(_31d, rw.r, rw.c) : null);
				if (n) {
					_320.push(n);
				}
			}
			return _320;
		}, findOverlappingNodes: function (_321) {
			return this._findOverlappingNodes(_2e2(_321), _2de(_321.parentNode), _2dd(_321));
		}});
	})();
}
if (!dojo._hasResource["dojo.dnd.Container"]) {
	dojo._hasResource["dojo.dnd.Container"] = true;
	dojo.provide("dojo.dnd.Container");
	dojo.declare("dojo.dnd.Container", null, {skipForm: false, constructor: function (node, _322) {
		this.node = dojo.byId(node);
		if (!_322) {
			_322 = {};
		}
		this.creator = _322.creator || null;
		this.skipForm = _322.skipForm;
		this.parent = _322.dropParent && dojo.byId(_322.dropParent);
		this.map = {};
		this.current = null;
		this.containerState = "";
		dojo.addClass(this.node, "dojoDndContainer");
		if (!(_322 && _322._skipStartup)) {
			this.startup();
		}
		this.events = [dojo.connect(this.node, "onmouseover", this, "onMouseOver"), dojo.connect(this.node, "onmouseout", this, "onMouseOut"), dojo.connect(this.node, "ondragstart", this, "onSelectStart"), dojo.connect(this.node, "onselectstart", this, "onSelectStart")];
	}, creator: function () {
	}, getItem: function (key) {
		return this.map[key];
	}, setItem: function (key, data) {
		this.map[key] = data;
	}, delItem: function (key) {
		delete this.map[key];
	}, forInItems: function (f, o) {
		o = o || dojo.global;
		var m = this.map, e = dojo.dnd._empty;
		for (var i in m) {
			if (i in e) {
				continue;
			}
			f.call(o, m[i], i, this);
		}
		return o;
	}, clearItems: function () {
		this.map = {};
	}, getAllNodes: function () {
		return dojo.query("> .dojoDndItem", this.parent);
	}, sync: function () {
		var map = {};
		this.getAllNodes().forEach(function (node) {
			if (node.id) {
				var item = this.getItem(node.id);
				if (item) {
					map[node.id] = item;
					return;
				}
			} else {
				node.id = dojo.dnd.getUniqueId();
			}
			var type = node.getAttribute("dndType"), data = node.getAttribute("dndData");
			map[node.id] = {data: data || node.innerHTML, type: type ? type.split(/\s*,\s*/) : ["text"]};
		}, this);
		this.map = map;
		return this;
	}, insertNodes: function (data, _323, _324) {
		if (!this.parent.firstChild) {
			_324 = null;
		} else {
			if (_323) {
				if (!_324) {
					_324 = this.parent.firstChild;
				}
			} else {
				if (_324) {
					_324 = _324.nextSibling;
				}
			}
		}
		if (_324) {
			for (var i = 0; i < data.length; ++i) {
				var t = this._normalizedCreator(data[i]);
				this.setItem(t.node.id, {data: t.data, type: t.type});
				this.parent.insertBefore(t.node, _324);
			}
		} else {
			for (var i = 0; i < data.length; ++i) {
				var t = this._normalizedCreator(data[i]);
				this.setItem(t.node.id, {data: t.data, type: t.type});
				this.parent.appendChild(t.node);
			}
		}
		return this;
	}, destroy: function () {
		dojo.forEach(this.events, dojo.disconnect);
		this.clearItems();
		this.node = this.parent = this.current = null;
	}, markupFactory: function (_325, node) {
		_325._skipStartup = true;
		return new dojo.dnd.Container(node, _325);
	}, startup: function () {
		if (!this.parent) {
			this.parent = this.node;
			if (this.parent.tagName.toLowerCase() == "table") {
				var c = this.parent.getElementsByTagName("tbody");
				if (c && c.length) {
					this.parent = c[0];
				}
			}
		}
		this.defaultCreator = dojo.dnd._defaultCreator(this.parent);
		this.sync();
	}, onMouseOver: function (e) {
		var n = e.relatedTarget;
		while (n) {
			if (n == this.node) {
				break;
			}
			try {
				n = n.parentNode;
			} catch (x) {
				n = null;
			}
		}
		if (!n) {
			this._changeState("Container", "Over");
			this.onOverEvent();
		}
		n = this._getChildByEvent(e);
		if (this.current == n) {
			return;
		}
		if (this.current) {
			this._removeItemClass(this.current, "Over");
		}
		if (n) {
			this._addItemClass(n, "Over");
		}
		this.current = n;
	}, onMouseOut: function (e) {
		for (var n = e.relatedTarget; n;) {
			if (n == this.node) {
				return;
			}
			try {
				n = n.parentNode;
			} catch (x) {
				n = null;
			}
		}
		if (this.current) {
			this._removeItemClass(this.current, "Over");
			this.current = null;
		}
		this._changeState("Container", "");
		this.onOutEvent();
	}, onSelectStart: function (e) {
		if (!this.skipForm || !dojo.dnd.isFormElement(e)) {
			dojo.stopEvent(e);
		}
	}, onOverEvent: function () {
	}, onOutEvent: function () {
	}, _changeState: function (type, _326) {
		var _327 = "dojoDnd" + type;
		var _328 = type.toLowerCase() + "State";
		dojo.replaceClass(this.node, _327 + _326, _327 + this[_328]);
		this[_328] = _326;
	}, _addItemClass: function (node, type) {
		dojo.addClass(node, "dojoDndItem" + type);
	}, _removeItemClass: function (node, type) {
		dojo.removeClass(node, "dojoDndItem" + type);
	}, _getChildByEvent: function (e) {
		var node = e.target;
		if (node) {
			for (var _329 = node.parentNode; _329; node = _329, _329 = node.parentNode) {
				if (_329 == this.parent && dojo.hasClass(node, "dojoDndItem")) {
					return node;
				}
			}
		}
		return null;
	}, _normalizedCreator: function (item, hint) {
		var t = (this.creator || this.defaultCreator).call(this, item, hint);
		if (!dojo.isArray(t.type)) {
			t.type = ["text"];
		}
		if (!t.node.id) {
			t.node.id = dojo.dnd.getUniqueId();
		}
		dojo.addClass(t.node, "dojoDndItem");
		return t;
	}});
	dojo.dnd._createNode = function (tag) {
		if (!tag) {
			return dojo.dnd._createSpan;
		}
		return function (text) {
			return dojo.create(tag, {innerHTML: text});
		};
	};
	dojo.dnd._createTrTd = function (text) {
		var tr = dojo.create("tr");
		dojo.create("td", {innerHTML: text}, tr);
		return tr;
	};
	dojo.dnd._createSpan = function (text) {
		return dojo.create("span", {innerHTML: text});
	};
	dojo.dnd._defaultCreatorNodes = {ul: "li", ol: "li", div: "div", p: "div"};
	dojo.dnd._defaultCreator = function (node) {
		var tag = node.tagName.toLowerCase();
		var c = tag == "tbody" || tag == "thead" ? dojo.dnd._createTrTd : dojo.dnd._createNode(dojo.dnd._defaultCreatorNodes[tag]);
		return function (item, hint) {
			var _32a = item && dojo.isObject(item), data, type, n;
			if (_32a && item.tagName && item.nodeType && item.getAttribute) {
				data = item.getAttribute("dndData") || item.innerHTML;
				type = item.getAttribute("dndType");
				type = type ? type.split(/\s*,\s*/) : ["text"];
				n = item;
			} else {
				data = (_32a && item.data) ? item.data : item;
				type = (_32a && item.type) ? item.type : ["text"];
				n = (hint == "avatar" ? dojo.dnd._createSpan : c)(String(data));
			}
			if (!n.id) {
				n.id = dojo.dnd.getUniqueId();
			}
			return {node: n, data: data, type: type};
		};
	};
}
if (!dojo._hasResource["dojo.dnd.Selector"]) {
	dojo._hasResource["dojo.dnd.Selector"] = true;
	dojo.provide("dojo.dnd.Selector");
	dojo.declare("dojo.dnd.Selector", dojo.dnd.Container, {constructor: function (node, _32b) {
		if (!_32b) {
			_32b = {};
		}
		this.singular = _32b.singular;
		this.autoSync = _32b.autoSync;
		this.selection = {};
		this.anchor = null;
		this.simpleSelection = false;
		this.events.push(dojo.connect(this.node, "onmousedown", this, "onMouseDown"), dojo.connect(this.node, "onmouseup", this, "onMouseUp"));
	}, singular: false, getSelectedNodes: function () {
		var t = new dojo.NodeList();
		var e = dojo.dnd._empty;
		for (var i in this.selection) {
			if (i in e) {
				continue;
			}
			t.push(dojo.byId(i));
		}
		return t;
	}, selectNone: function () {
		return this._removeSelection()._removeAnchor();
	}, selectAll: function () {
		this.forInItems(function (data, id) {
			this._addItemClass(dojo.byId(id), "Selected");
			this.selection[id] = 1;
		}, this);
		return this._removeAnchor();
	}, deleteSelectedNodes: function () {
		var e = dojo.dnd._empty;
		for (var i in this.selection) {
			if (i in e) {
				continue;
			}
			var n = dojo.byId(i);
			this.delItem(i);
			dojo.destroy(n);
		}
		this.anchor = null;
		this.selection = {};
		return this;
	}, forInSelectedItems: function (f, o) {
		o = o || dojo.global;
		var s = this.selection, e = dojo.dnd._empty;
		for (var i in s) {
			if (i in e) {
				continue;
			}
			f.call(o, this.getItem(i), i, this);
		}
	}, sync: function () {
		dojo.dnd.Selector.superclass.sync.call(this);
		if (this.anchor) {
			if (!this.getItem(this.anchor.id)) {
				this.anchor = null;
			}
		}
		var t = [], e = dojo.dnd._empty;
		for (var i in this.selection) {
			if (i in e) {
				continue;
			}
			if (!this.getItem(i)) {
				t.push(i);
			}
		}
		dojo.forEach(t, function (i) {
			delete this.selection[i];
		}, this);
		return this;
	}, insertNodes: function (_32c, data, _32d, _32e) {
		var _32f = this._normalizedCreator;
		this._normalizedCreator = function (item, hint) {
			var t = _32f.call(this, item, hint);
			if (_32c) {
				if (!this.anchor) {
					this.anchor = t.node;
					this._removeItemClass(t.node, "Selected");
					this._addItemClass(this.anchor, "Anchor");
				} else {
					if (this.anchor != t.node) {
						this._removeItemClass(t.node, "Anchor");
						this._addItemClass(t.node, "Selected");
					}
				}
				this.selection[t.node.id] = 1;
			} else {
				this._removeItemClass(t.node, "Selected");
				this._removeItemClass(t.node, "Anchor");
			}
			return t;
		};
		dojo.dnd.Selector.superclass.insertNodes.call(this, data, _32d, _32e);
		this._normalizedCreator = _32f;
		return this;
	}, destroy: function () {
		dojo.dnd.Selector.superclass.destroy.call(this);
		this.selection = this.anchor = null;
	}, markupFactory: function (_330, node) {
		_330._skipStartup = true;
		return new dojo.dnd.Selector(node, _330);
	}, onMouseDown: function (e) {
		if (this.autoSync) {
			this.sync();
		}
		if (!this.current) {
			return;
		}
		if (!this.singular && !dojo.isCopyKey(e) && !e.shiftKey && (this.current.id in this.selection)) {
			this.simpleSelection = true;
			if (e.button === dojo.mouseButtons.LEFT) {
				dojo.stopEvent(e);
			}
			return;
		}
		if (!this.singular && e.shiftKey) {
			if (!dojo.isCopyKey(e)) {
				this._removeSelection();
			}
			var c = this.getAllNodes();
			if (c.length) {
				if (!this.anchor) {
					this.anchor = c[0];
					this._addItemClass(this.anchor, "Anchor");
				}
				this.selection[this.anchor.id] = 1;
				if (this.anchor != this.current) {
					var i = 0;
					for (; i < c.length; ++i) {
						var node = c[i];
						if (node == this.anchor || node == this.current) {
							break;
						}
					}
					for (++i; i < c.length; ++i) {
						var node = c[i];
						if (node == this.anchor || node == this.current) {
							break;
						}
						this._addItemClass(node, "Selected");
						this.selection[node.id] = 1;
					}
					this._addItemClass(this.current, "Selected");
					this.selection[this.current.id] = 1;
				}
			}
		} else {
			if (this.singular) {
				if (this.anchor == this.current) {
					if (dojo.isCopyKey(e)) {
						this.selectNone();
					}
				} else {
					this.selectNone();
					this.anchor = this.current;
					this._addItemClass(this.anchor, "Anchor");
					this.selection[this.current.id] = 1;
				}
			} else {
				if (dojo.isCopyKey(e)) {
					if (this.anchor == this.current) {
						delete this.selection[this.anchor.id];
						this._removeAnchor();
					} else {
						if (this.current.id in this.selection) {
							this._removeItemClass(this.current, "Selected");
							delete this.selection[this.current.id];
						} else {
							if (this.anchor) {
								this._removeItemClass(this.anchor, "Anchor");
								this._addItemClass(this.anchor, "Selected");
							}
							this.anchor = this.current;
							this._addItemClass(this.current, "Anchor");
							this.selection[this.current.id] = 1;
						}
					}
				} else {
					if (!(this.current.id in this.selection)) {
						this.selectNone();
						this.anchor = this.current;
						this._addItemClass(this.current, "Anchor");
						this.selection[this.current.id] = 1;
					}
				}
			}
		}
		dojo.stopEvent(e);
	}, onMouseUp: function (e) {
		if (!this.simpleSelection) {
			return;
		}
		this.simpleSelection = false;
		this.selectNone();
		if (this.current) {
			this.anchor = this.current;
			this._addItemClass(this.anchor, "Anchor");
			this.selection[this.current.id] = 1;
		}
	}, onMouseMove: function (e) {
		this.simpleSelection = false;
	}, onOverEvent: function () {
		this.onmousemoveEvent = dojo.connect(this.node, "onmousemove", this, "onMouseMove");
	}, onOutEvent: function () {
		dojo.disconnect(this.onmousemoveEvent);
		delete this.onmousemoveEvent;
	}, _removeSelection: function () {
		var e = dojo.dnd._empty;
		for (var i in this.selection) {
			if (i in e) {
				continue;
			}
			var node = dojo.byId(i);
			if (node) {
				this._removeItemClass(node, "Selected");
			}
		}
		this.selection = {};
		return this;
	}, _removeAnchor: function () {
		if (this.anchor) {
			this._removeItemClass(this.anchor, "Anchor");
			this.anchor = null;
		}
		return this;
	}});
}
if (!dojo._hasResource["dojo.dnd.Avatar"]) {
	dojo._hasResource["dojo.dnd.Avatar"] = true;
	dojo.provide("dojo.dnd.Avatar");
	dojo.declare("dojo.dnd.Avatar", null, {constructor: function (_331) {
		this.manager = _331;
		this.construct();
	}, construct: function () {
		this.isA11y = dojo.hasClass(dojo.body(), "dijit_a11y");
		var a = dojo.create("table", {"class": "dojoDndAvatar", style: {position: "absolute", zIndex: "1999", margin: "0px"}}), _332 = this.manager.source, node, b = dojo.create("tbody", null, a), tr = dojo.create("tr", null, b), td = dojo.create("td", null, tr), icon = this.isA11y ? dojo.create("span", {id: "a11yIcon", innerHTML: this.manager.copy ? "+" : "<"}, td) : null, span = dojo.create("span", {innerHTML: _332.generateText ? this._generateText() : ""}, td), k = Math.min(5, this.manager.nodes.length), i = 0;
		dojo.attr(tr, {"class": "dojoDndAvatarHeader", style: {opacity: 0.9}});
		for (; i < k; ++i) {
			if (_332.creator) {
				node = _332._normalizedCreator(_332.getItem(this.manager.nodes[i].id).data, "avatar").node;
			} else {
				node = this.manager.nodes[i].cloneNode(true);
				if (node.tagName.toLowerCase() == "tr") {
					var _333 = dojo.create("table"), _334 = dojo.create("tbody", null, _333);
					_334.appendChild(node);
					node = _333;
				}
			}
			node.id = "";
			tr = dojo.create("tr", null, b);
			td = dojo.create("td", null, tr);
			td.appendChild(node);
			dojo.attr(tr, {"class": "dojoDndAvatarItem", style: {opacity: (9 - i) / 10}});
		}
		this.node = a;
	}, destroy: function () {
		dojo.destroy(this.node);
		this.node = false;
	}, update: function () {
		dojo[(this.manager.canDropFlag ? "add" : "remove") + "Class"](this.node, "dojoDndAvatarCanDrop");
		if (this.isA11y) {
			var icon = dojo.byId("a11yIcon");
			var text = "+";
			if (this.manager.canDropFlag && !this.manager.copy) {
				text = "< ";
			} else {
				if (!this.manager.canDropFlag && !this.manager.copy) {
					text = "o";
				} else {
					if (!this.manager.canDropFlag) {
						text = "x";
					}
				}
			}
			icon.innerHTML = text;
		}
		dojo.query(("tr.dojoDndAvatarHeader td span" + (this.isA11y ? " span" : "")), this.node).forEach(function (node) {
			node.innerHTML = this._generateText();
		}, this);
	}, _generateText: function () {
		return this.manager.nodes.length.toString();
	}});
}
if (!dojo._hasResource["dojo.dnd.Manager"]) {
	dojo._hasResource["dojo.dnd.Manager"] = true;
	dojo.provide("dojo.dnd.Manager");
	dojo.declare("dojo.dnd.Manager", null, {constructor: function () {
		this.avatar = null;
		this.source = null;
		this.nodes = [];
		this.copy = true;
		this.target = null;
		this.canDropFlag = false;
		this.events = [];
	}, OFFSET_X: 16, OFFSET_Y: 16, overSource: function (_335) {
		if (this.avatar) {
			this.target = (_335 && _335.targetState != "Disabled") ? _335 : null;
			this.canDropFlag = Boolean(this.target);
			this.avatar.update();
		}
		dojo.publish("/dnd/source/over", [_335]);
	}, outSource: function (_336) {
		if (this.avatar) {
			if (this.target == _336) {
				this.target = null;
				this.canDropFlag = false;
				this.avatar.update();
				dojo.publish("/dnd/source/over", [null]);
			}
		} else {
			dojo.publish("/dnd/source/over", [null]);
		}
	}, startDrag: function (_337, _338, copy) {
		this.source = _337;
		this.nodes = _338;
		this.copy = Boolean(copy);
		this.avatar = this.makeAvatar();
		dojo.body().appendChild(this.avatar.node);
		dojo.publish("/dnd/start", [_337, _338, this.copy]);
		this.events = [dojo.connect(dojo.doc, "onmousemove", this, "onMouseMove"), dojo.connect(dojo.doc, "onmouseup", this, "onMouseUp"), dojo.connect(dojo.doc, "onkeydown", this, "onKeyDown"), dojo.connect(dojo.doc, "onkeyup", this, "onKeyUp"), dojo.connect(dojo.doc, "ondragstart", dojo.stopEvent), dojo.connect(dojo.body(), "onselectstart", dojo.stopEvent)];
		var c = "dojoDnd" + (copy ? "Copy" : "Move");
		dojo.addClass(dojo.body(), c);
	}, canDrop: function (flag) {
		var _339 = Boolean(this.target && flag);
		if (this.canDropFlag != _339) {
			this.canDropFlag = _339;
			this.avatar.update();
		}
	}, stopDrag: function () {
		dojo.removeClass(dojo.body(), ["dojoDndCopy", "dojoDndMove"]);
		dojo.forEach(this.events, dojo.disconnect);
		this.events = [];
		this.avatar.destroy();
		this.avatar = null;
		this.source = this.target = null;
		this.nodes = [];
	}, makeAvatar: function () {
		return new dojo.dnd.Avatar(this);
	}, updateAvatar: function () {
		this.avatar.update();
	}, onMouseMove: function (e) {
		var a = this.avatar;
		if (a) {
			dojo.dnd.autoScrollNodes(e);
			var s = a.node.style;
			s.left = (e.pageX + this.OFFSET_X) + "px";
			s.top = (e.pageY + this.OFFSET_Y) + "px";
			var copy = Boolean(this.source.copyState(dojo.isCopyKey(e)));
			if (this.copy != copy) {
				this._setCopyStatus(copy);
			}
		}
	}, onMouseUp: function (e) {
		if (this.avatar) {
			if (this.target && this.canDropFlag) {
				var copy = Boolean(this.source.copyState(dojo.isCopyKey(e))), _33a = [this.source, this.nodes, copy, this.target, e];
				dojo.publish("/dnd/drop/before", _33a);
				dojo.publish("/dnd/drop", _33a);
			} else {
				dojo.publish("/dnd/cancel");
			}
			this.stopDrag();
		}
	}, onKeyDown: function (e) {
		if (this.avatar) {
			switch (e.keyCode) {
				case dojo.keys.CTRL:
					var copy = Boolean(this.source.copyState(true));
					if (this.copy != copy) {
						this._setCopyStatus(copy);
					}
					break;
				case dojo.keys.ESCAPE:
					dojo.publish("/dnd/cancel");
					this.stopDrag();
					break;
			}
		}
	}, onKeyUp: function (e) {
		if (this.avatar && e.keyCode == dojo.keys.CTRL) {
			var copy = Boolean(this.source.copyState(false));
			if (this.copy != copy) {
				this._setCopyStatus(copy);
			}
		}
	}, _setCopyStatus: function (copy) {
		this.copy = copy;
		this.source._markDndStatus(this.copy);
		this.updateAvatar();
		dojo.replaceClass(dojo.body(), "dojoDnd" + (this.copy ? "Copy" : "Move"), "dojoDnd" + (this.copy ? "Move" : "Copy"));
	}});
	dojo.dnd._manager = null;
	dojo.dnd.manager = function () {
		if (!dojo.dnd._manager) {
			dojo.dnd._manager = new dojo.dnd.Manager();
		}
		return dojo.dnd._manager;
	};
}
if (!dojo._hasResource["dojo.dnd.Source"]) {
	dojo._hasResource["dojo.dnd.Source"] = true;
	dojo.provide("dojo.dnd.Source");
	dojo.declare("dojo.dnd.Source", dojo.dnd.Selector, {isSource: true, horizontal: false, copyOnly: false, selfCopy: false, selfAccept: true, skipForm: false, withHandles: false, autoSync: false, delay: 0, accept: ["text"], generateText: true, constructor: function (node, _33b) {
		dojo.mixin(this, dojo.mixin({}, _33b));
		var type = this.accept;
		if (type.length) {
			this.accept = {};
			for (var i = 0; i < type.length; ++i) {
				this.accept[type[i]] = 1;
			}
		}
		this.isDragging = false;
		this.mouseDown = false;
		this.targetAnchor = null;
		this.targetBox = null;
		this.before = true;
		this._lastX = 0;
		this._lastY = 0;
		this.sourceState = "";
		if (this.isSource) {
			dojo.addClass(this.node, "dojoDndSource");
		}
		this.targetState = "";
		if (this.accept) {
			dojo.addClass(this.node, "dojoDndTarget");
		}
		if (this.horizontal) {
			dojo.addClass(this.node, "dojoDndHorizontal");
		}
		this.topics = [dojo.subscribe("/dnd/source/over", this, "onDndSourceOver"), dojo.subscribe("/dnd/start", this, "onDndStart"), dojo.subscribe("/dnd/drop", this, "onDndDrop"), dojo.subscribe("/dnd/cancel", this, "onDndCancel")];
	}, checkAcceptance: function (_33c, _33d) {
		if (this == _33c) {
			return !this.copyOnly || this.selfAccept;
		}
		for (var i = 0; i < _33d.length; ++i) {
			var type = _33c.getItem(_33d[i].id).type;
			var flag = false;
			for (var j = 0; j < type.length; ++j) {
				if (type[j] in this.accept) {
					flag = true;
					break;
				}
			}
			if (!flag) {
				return false;
			}
		}
		return true;
	}, copyState: function (_33e, self) {
		if (_33e) {
			return true;
		}
		if (arguments.length < 2) {
			self = this == dojo.dnd.manager().target;
		}
		if (self) {
			if (this.copyOnly) {
				return this.selfCopy;
			}
		} else {
			return this.copyOnly;
		}
		return false;
	}, destroy: function () {
		dojo.dnd.Source.superclass.destroy.call(this);
		dojo.forEach(this.topics, dojo.unsubscribe);
		this.targetAnchor = null;
	}, markupFactory: function (_33f, node) {
		_33f._skipStartup = true;
		return new dojo.dnd.Source(node, _33f);
	}, onMouseMove: function (e) {
		if (this.isDragging && this.targetState == "Disabled") {
			return;
		}
		dojo.dnd.Source.superclass.onMouseMove.call(this, e);
		var m = dojo.dnd.manager();
		if (!this.isDragging) {
			if (this.mouseDown && this.isSource && (Math.abs(e.pageX - this._lastX) > this.delay || Math.abs(e.pageY - this._lastY) > this.delay)) {
				var _340 = this.getSelectedNodes();
				if (_340.length) {
					m.startDrag(this, _340, this.copyState(dojo.isCopyKey(e), true));
				}
			}
		}
		if (this.isDragging) {
			var _341 = false;
			if (this.current) {
				if (!this.targetBox || this.targetAnchor != this.current) {
					this.targetBox = dojo.position(this.current, true);
				}
				if (this.horizontal) {
					_341 = (e.pageX - this.targetBox.x) < (this.targetBox.w / 2);
				} else {
					_341 = (e.pageY - this.targetBox.y) < (this.targetBox.h / 2);
				}
			}
			if (this.current != this.targetAnchor || _341 != this.before) {
				this._markTargetAnchor(_341);
				m.canDrop(!this.current || m.source != this || !(this.current.id in this.selection));
			}
		}
	}, onMouseDown: function (e) {
		if (!this.mouseDown && this._legalMouseDown(e) && (!this.skipForm || !dojo.dnd.isFormElement(e))) {
			this.mouseDown = true;
			this._lastX = e.pageX;
			this._lastY = e.pageY;
			dojo.dnd.Source.superclass.onMouseDown.call(this, e);
		}
	}, onMouseUp: function (e) {
		if (this.mouseDown) {
			this.mouseDown = false;
			dojo.dnd.Source.superclass.onMouseUp.call(this, e);
		}
	}, onDndSourceOver: function (_342) {
		if (this != _342) {
			this.mouseDown = false;
			if (this.targetAnchor) {
				this._unmarkTargetAnchor();
			}
		} else {
			if (this.isDragging) {
				var m = dojo.dnd.manager();
				m.canDrop(this.targetState != "Disabled" && (!this.current || m.source != this || !(this.current.id in this.selection)));
			}
		}
	}, onDndStart: function (_343, _344, copy) {
		if (this.autoSync) {
			this.sync();
		}
		if (this.isSource) {
			this._changeState("Source", this == _343 ? (copy ? "Copied" : "Moved") : "");
		}
		var _345 = this.accept && this.checkAcceptance(_343, _344);
		this._changeState("Target", _345 ? "" : "Disabled");
		if (this == _343) {
			dojo.dnd.manager().overSource(this);
		}
		this.isDragging = true;
	}, onDndDrop: function (_346, _347, copy, _348) {
		if (this == _348) {
			this.onDrop(_346, _347, copy);
		}
		this.onDndCancel();
	}, onDndCancel: function () {
		if (this.targetAnchor) {
			this._unmarkTargetAnchor();
			this.targetAnchor = null;
		}
		this.before = true;
		this.isDragging = false;
		this.mouseDown = false;
		this._changeState("Source", "");
		this._changeState("Target", "");
	}, onDrop: function (_349, _34a, copy) {
		if (this != _349) {
			this.onDropExternal(_349, _34a, copy);
		} else {
			this.onDropInternal(_34a, copy);
		}
	}, onDropExternal: function (_34b, _34c, copy) {
		var _34d = this._normalizedCreator;
		if (this.creator) {
			this._normalizedCreator = function (node, hint) {
				return _34d.call(this, _34b.getItem(node.id).data, hint);
			};
		} else {
			if (copy) {
				this._normalizedCreator = function (node, hint) {
					var t = _34b.getItem(node.id);
					var n = node.cloneNode(true);
					n.id = dojo.dnd.getUniqueId();
					return {node: n, data: t.data, type: t.type};
				};
			} else {
				this._normalizedCreator = function (node, hint) {
					var t = _34b.getItem(node.id);
					_34b.delItem(node.id);
					return {node: node, data: t.data, type: t.type};
				};
			}
		}
		this.selectNone();
		if (!copy && !this.creator) {
			_34b.selectNone();
		}
		this.insertNodes(true, _34c, this.before, this.current);
		if (!copy && this.creator) {
			_34b.deleteSelectedNodes();
		}
		this._normalizedCreator = _34d;
	}, onDropInternal: function (_34e, copy) {
		var _34f = this._normalizedCreator;
		if (this.current && this.current.id in this.selection) {
			return;
		}
		if (copy) {
			if (this.creator) {
				this._normalizedCreator = function (node, hint) {
					return _34f.call(this, this.getItem(node.id).data, hint);
				};
			} else {
				this._normalizedCreator = function (node, hint) {
					var t = this.getItem(node.id);
					var n = node.cloneNode(true);
					n.id = dojo.dnd.getUniqueId();
					return {node: n, data: t.data, type: t.type};
				};
			}
		} else {
			if (!this.current) {
				return;
			}
			this._normalizedCreator = function (node, hint) {
				var t = this.getItem(node.id);
				return {node: node, data: t.data, type: t.type};
			};
		}
		this._removeSelection();
		this.insertNodes(true, _34e, this.before, this.current);
		this._normalizedCreator = _34f;
	}, onDraggingOver: function () {
	}, onDraggingOut: function () {
	}, onOverEvent: function () {
		dojo.dnd.Source.superclass.onOverEvent.call(this);
		dojo.dnd.manager().overSource(this);
		if (this.isDragging && this.targetState != "Disabled") {
			this.onDraggingOver();
		}
	}, onOutEvent: function () {
		dojo.dnd.Source.superclass.onOutEvent.call(this);
		dojo.dnd.manager().outSource(this);
		if (this.isDragging && this.targetState != "Disabled") {
			this.onDraggingOut();
		}
	}, _markTargetAnchor: function (_350) {
		if (this.current == this.targetAnchor && this.before == _350) {
			return;
		}
		if (this.targetAnchor) {
			this._removeItemClass(this.targetAnchor, this.before ? "Before" : "After");
		}
		this.targetAnchor = this.current;
		this.targetBox = null;
		this.before = _350;
		if (this.targetAnchor) {
			this._addItemClass(this.targetAnchor, this.before ? "Before" : "After");
		}
	}, _unmarkTargetAnchor: function () {
		if (!this.targetAnchor) {
			return;
		}
		this._removeItemClass(this.targetAnchor, this.before ? "Before" : "After");
		this.targetAnchor = null;
		this.targetBox = null;
		this.before = true;
	}, _markDndStatus: function (copy) {
		this._changeState("Source", copy ? "Copied" : "Moved");
	}, _legalMouseDown: function (e) {
		if (!dojo.mouseButtons.isLeft(e)) {
			return false;
		}
		if (!this.withHandles) {
			return true;
		}
		for (var node = e.target; node && node !== this.node; node = node.parentNode) {
			if (dojo.hasClass(node, "dojoDndHandle")) {
				return true;
			}
			if (dojo.hasClass(node, "dojoDndItem") || dojo.hasClass(node, "dojoDndIgnore")) {
				break;
			}
		}
		return false;
	}});
	dojo.declare("dojo.dnd.Target", dojo.dnd.Source, {constructor: function (node, _351) {
		this.isSource = false;
		dojo.removeClass(this.node, "dojoDndSource");
	}, markupFactory: function (_352, node) {
		_352._skipStartup = true;
		return new dojo.dnd.Target(node, _352);
	}});
	dojo.declare("dojo.dnd.AutoSource", dojo.dnd.Source, {constructor: function (node, _353) {
		this.autoSync = true;
	}, markupFactory: function (_354, node) {
		_354._skipStartup = true;
		return new dojo.dnd.AutoSource(node, _354);
	}});
}
if (!dojo._hasResource["dojox.grid._View"]) {
	dojo._hasResource["dojox.grid._View"] = true;
	dojo.provide("dojox.grid._View");
	(function () {
		var _355 = function (_356, _357) {
			return _356.style.cssText == undefined ? _356.getAttribute("style") : _356.style.cssText;
		};
		dojo.declare("dojox.grid._View", [dijit._Widget, dijit._Templated], {defaultWidth: "18em", viewWidth: "", templateString: "<div class=\"dojoxGridView\" role=\"presentation\">\n\t<div class=\"dojoxGridHeader\" dojoAttachPoint=\"headerNode\" role=\"presentation\">\n\t\t<div dojoAttachPoint=\"headerNodeContainer\" style=\"width:9000em\" role=\"presentation\">\n\t\t\t<div dojoAttachPoint=\"headerContentNode\" role=\"row\"></div>\n\t\t</div>\n\t</div>\n\t<input type=\"checkbox\" class=\"dojoxGridHiddenFocus\" dojoAttachPoint=\"hiddenFocusNode\" role=\"presentation\" />\n\t<input type=\"checkbox\" class=\"dojoxGridHiddenFocus\" role=\"presentation\" />\n\t<div class=\"dojoxGridScrollbox\" dojoAttachPoint=\"scrollboxNode\" role=\"presentation\">\n\t\t<div class=\"dojoxGridContent\" dojoAttachPoint=\"contentNode\" hidefocus=\"hidefocus\" role=\"presentation\"></div>\n\t</div>\n</div>\n", themeable: false, classTag: "dojoxGrid", marginBottom: 0, rowPad: 2, _togglingColumn: -1, _headerBuilderClass: dojox.grid._HeaderBuilder, _contentBuilderClass: dojox.grid._ContentBuilder, postMixInProperties: function () {
			this.rowNodes = {};
		}, postCreate: function () {
			this.connect(this.scrollboxNode, "onscroll", "doscroll");
			dojox.grid.util.funnelEvents(this.contentNode, this, "doContentEvent", ["mouseover", "mouseout", "click", "dblclick", "contextmenu", "mousedown"]);
			dojox.grid.util.funnelEvents(this.headerNode, this, "doHeaderEvent", ["dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "click", "contextmenu"]);
			this.content = new this._contentBuilderClass(this);
			this.header = new this._headerBuilderClass(this);
			if (!dojo._isBodyLtr()) {
				this.headerNodeContainer.style.width = "";
			}
		}, destroy: function () {
			dojo.destroy(this.headerNode);
			delete this.headerNode;
			for (var i in this.rowNodes) {
				dojo.destroy(this.rowNodes[i]);
			}
			this.rowNodes = {};
			if (this.source) {
				this.source.destroy();
			}
			this.inherited(arguments);
		}, focus: function () {
			if (dojo.isIE || dojo.isWebKit || dojo.isOpera) {
				this.hiddenFocusNode.focus();
			} else {
				this.scrollboxNode.focus();
			}
		}, setStructure: function (_358) {
			var vs = (this.structure = _358);
			if (vs.width && !isNaN(vs.width)) {
				this.viewWidth = vs.width + "em";
			} else {
				this.viewWidth = vs.width || (vs.noscroll ? "auto" : this.viewWidth);
			}
			this._onBeforeRow = vs.onBeforeRow || function () {
			};
			this._onAfterRow = vs.onAfterRow || function () {
			};
			this.noscroll = vs.noscroll;
			if (this.noscroll) {
				this.scrollboxNode.style.overflow = "hidden";
			}
			this.simpleStructure = Boolean(vs.cells.length == 1);
			this.testFlexCells();
			this.updateStructure();
		}, _cleanupRowWidgets: function (_359) {
			if (_359) {
				dojo.forEach(dojo.query("[widgetId]", _359).map(dijit.byNode), function (w) {
					if (w._destroyOnRemove) {
						w.destroy();
						delete w;
					} else {
						if (w.domNode && w.domNode.parentNode) {
							w.domNode.parentNode.removeChild(w.domNode);
						}
					}
				});
			}
		}, onBeforeRow: function (_35a, _35b) {
			this._onBeforeRow(_35a, _35b);
			if (_35a >= 0) {
				this._cleanupRowWidgets(this.getRowNode(_35a));
			}
		}, onAfterRow: function (_35c, _35d, _35e) {
			this._onAfterRow(_35c, _35d, _35e);
			var g = this.grid;
			dojo.forEach(dojo.query(".dojoxGridStubNode", _35e), function (n) {
				if (n && n.parentNode) {
					var lw = n.getAttribute("linkWidget");
					var _35f = window.parseInt(dojo.attr(n, "cellIdx"), 10);
					var _360 = g.getCell(_35f);
					var w = dijit.byId(lw);
					if (w) {
						n.parentNode.replaceChild(w.domNode, n);
						if (!w._started) {
							w.startup();
						}
					} else {
						n.innerHTML = "";
					}
				}
			}, this);
		}, testFlexCells: function () {
			this.flexCells = false;
			for (var j = 0, row; (row = this.structure.cells[j]); j++) {
				for (var i = 0, cell; (cell = row[i]); i++) {
					cell.view = this;
					this.flexCells = this.flexCells || cell.isFlex();
				}
			}
			return this.flexCells;
		}, updateStructure: function () {
			this.header.update();
			this.content.update();
		}, getScrollbarWidth: function () {
			var _361 = this.hasVScrollbar();
			var _362 = dojo.style(this.scrollboxNode, "overflow");
			if (this.noscroll || !_362 || _362 == "hidden") {
				_361 = false;
			} else {
				if (_362 == "scroll") {
					_361 = true;
				}
			}
			return (_361 ? dojox.html.metrics.getScrollbar().w : 0);
		}, getColumnsWidth: function () {
			var h = this.headerContentNode;
			return h && h.firstChild ? h.firstChild.offsetWidth : 0;
		}, setColumnsWidth: function (_363) {
			this.headerContentNode.firstChild.style.width = _363 + "px";
			if (this.viewWidth) {
				this.viewWidth = _363 + "px";
			}
		}, getWidth: function () {
			return this.viewWidth || (this.getColumnsWidth() + this.getScrollbarWidth()) + "px";
		}, getContentWidth: function () {
			return Math.max(0, dojo._getContentBox(this.domNode).w - this.getScrollbarWidth()) + "px";
		}, render: function () {
			this.scrollboxNode.style.height = "";
			this.renderHeader();
			if (this._togglingColumn >= 0) {
				this.setColumnsWidth(this.getColumnsWidth() - this._togglingColumn);
				this._togglingColumn = -1;
			}
			var _364 = this.grid.layout.cells;
			var _365 = dojo.hitch(this, function (node, _366) {
				!dojo._isBodyLtr() && (_366 = !_366);
				var inc = _366 ? -1 : 1;
				var idx = this.header.getCellNodeIndex(node) + inc;
				var cell = _364[idx];
				while (cell && cell.getHeaderNode() && cell.getHeaderNode().style.display == "none") {
					idx += inc;
					cell = _364[idx];
				}
				if (cell) {
					return cell.getHeaderNode();
				}
				return null;
			});
			if (this.grid.columnReordering && this.simpleStructure) {
				if (this.source) {
					this.source.destroy();
				}
				var _367 = "dojoxGrid_bottomMarker";
				var _368 = "dojoxGrid_topMarker";
				if (this.bottomMarker) {
					dojo.destroy(this.bottomMarker);
				}
				this.bottomMarker = dojo.byId(_367);
				if (this.topMarker) {
					dojo.destroy(this.topMarker);
				}
				this.topMarker = dojo.byId(_368);
				if (!this.bottomMarker) {
					this.bottomMarker = dojo.create("div", {"id": _367, "class": "dojoxGridColPlaceBottom"}, dojo.body());
					this._hide(this.bottomMarker);
					this.topMarker = dojo.create("div", {"id": _368, "class": "dojoxGridColPlaceTop"}, dojo.body());
					this._hide(this.topMarker);
				}
				this.arrowDim = dojo.contentBox(this.bottomMarker);
				var _369 = dojo.contentBox(this.headerContentNode.firstChild.rows[0]).h;
				this.source = new dojo.dnd.Source(this.headerContentNode.firstChild.rows[0], {horizontal: true, accept: ["gridColumn_" + this.grid.id], viewIndex: this.index, generateText: false, onMouseDown: dojo.hitch(this, function (e) {
					this.header.decorateEvent(e);
					if ((this.header.overRightResizeArea(e) || this.header.overLeftResizeArea(e)) && this.header.canResize(e) && !this.header.moveable) {
						this.header.beginColumnResize(e);
					} else {
						if (this.grid.headerMenu) {
							this.grid.headerMenu.onCancel(true);
						}
						if (e.button === (dojo.isIE ? 1 : 0)) {
							dojo.dnd.Source.prototype.onMouseDown.call(this.source, e);
						}
					}
				}), onMouseOver: dojo.hitch(this, function (e) {
					var src = this.source;
					if (src._getChildByEvent(e)) {
						dojo.dnd.Source.prototype.onMouseOver.apply(src, arguments);
					}
				}), _markTargetAnchor: dojo.hitch(this, function (_36a) {
					var src = this.source;
					if (src.current == src.targetAnchor && src.before == _36a) {
						return;
					}
					if (src.targetAnchor && _365(src.targetAnchor, src.before)) {
						src._removeItemClass(_365(src.targetAnchor, src.before), src.before ? "After" : "Before");
					}
					dojo.dnd.Source.prototype._markTargetAnchor.call(src, _36a);
					var _36b = _36a ? src.targetAnchor : _365(src.targetAnchor, src.before);
					var _36c = 0;
					if (!_36b) {
						_36b = src.targetAnchor;
						_36c = dojo.contentBox(_36b).w + this.arrowDim.w / 2 + 2;
					}
					var pos = (dojo.position || dojo._abs)(_36b, true);
					var left = Math.floor(pos.x - this.arrowDim.w / 2 + _36c);
					dojo.style(this.bottomMarker, "visibility", "visible");
					dojo.style(this.topMarker, "visibility", "visible");
					dojo.style(this.bottomMarker, {"left": left + "px", "top": (_369 + pos.y) + "px"});
					dojo.style(this.topMarker, {"left": left + "px", "top": (pos.y - this.arrowDim.h) + "px"});
					if (src.targetAnchor && _365(src.targetAnchor, src.before)) {
						src._addItemClass(_365(src.targetAnchor, src.before), src.before ? "After" : "Before");
					}
				}), _unmarkTargetAnchor: dojo.hitch(this, function () {
					var src = this.source;
					if (!src.targetAnchor) {
						return;
					}
					if (src.targetAnchor && _365(src.targetAnchor, src.before)) {
						src._removeItemClass(_365(src.targetAnchor, src.before), src.before ? "After" : "Before");
					}
					this._hide(this.bottomMarker);
					this._hide(this.topMarker);
					dojo.dnd.Source.prototype._unmarkTargetAnchor.call(src);
				}), destroy: dojo.hitch(this, function () {
					dojo.disconnect(this._source_conn);
					dojo.unsubscribe(this._source_sub);
					dojo.dnd.Source.prototype.destroy.call(this.source);
					if (this.bottomMarker) {
						dojo.destroy(this.bottomMarker);
						delete this.bottomMarker;
					}
					if (this.topMarker) {
						dojo.destroy(this.topMarker);
						delete this.topMarker;
					}
				}), onDndCancel: dojo.hitch(this, function () {
					dojo.dnd.Source.prototype.onDndCancel.call(this.source);
					this._hide(this.bottomMarker);
					this._hide(this.topMarker);
				})});
				this._source_conn = dojo.connect(this.source, "onDndDrop", this, "_onDndDrop");
				this._source_sub = dojo.subscribe("/dnd/drop/before", this, "_onDndDropBefore");
				this.source.startup();
			}
		}, _hide: function (node) {
			dojo.style(node, {left: "-10000px", top: "-10000px", "visibility": "hidden"});
		}, _onDndDropBefore: function (_36d, _36e, copy) {
			if (dojo.dnd.manager().target !== this.source) {
				return;
			}
			this.source._targetNode = this.source.targetAnchor;
			this.source._beforeTarget = this.source.before;
			var _36f = this.grid.views.views;
			var _370 = _36f[_36d.viewIndex];
			var _371 = _36f[this.index];
			if (_371 != _370) {
				_370.convertColPctToFixed();
				_371.convertColPctToFixed();
			}
		}, _onDndDrop: function (_372, _373, copy) {
			if (dojo.dnd.manager().target !== this.source) {
				if (dojo.dnd.manager().source === this.source) {
					this._removingColumn = true;
				}
				return;
			}
			this._hide(this.bottomMarker);
			this._hide(this.topMarker);
			var _374 = function (n) {
				return n ? dojo.attr(n, "idx") : null;
			};
			var w = dojo.marginBox(_373[0]).w;
			if (_372.viewIndex !== this.index) {
				var _375 = this.grid.views.views;
				var _376 = _375[_372.viewIndex];
				var _377 = _375[this.index];
				if (_376.viewWidth && _376.viewWidth != "auto") {
					_376.setColumnsWidth(_376.getColumnsWidth() - w);
				}
				if (_377.viewWidth && _377.viewWidth != "auto") {
					_377.setColumnsWidth(_377.getColumnsWidth());
				}
			}
			var stn = this.source._targetNode;
			var stb = this.source._beforeTarget;
			!dojo._isBodyLtr() && (stb = !stb);
			var _378 = this.grid.layout;
			var idx = this.index;
			delete this.source._targetNode;
			delete this.source._beforeTarget;
			_378.moveColumn(_372.viewIndex, idx, _374(_373[0]), _374(stn), stb);
		}, renderHeader: function () {
			this.headerContentNode.innerHTML = this.header.generateHtml(this._getHeaderContent);
			if (this.flexCells) {
				this.contentWidth = this.getContentWidth();
				this.headerContentNode.firstChild.style.width = this.contentWidth;
			}
			dojox.grid.util.fire(this, "onAfterRow", [-1, this.structure.cells, this.headerContentNode]);
		}, _getHeaderContent: function (_379) {
			var n = _379.name || _379.grid.getCellName(_379);
			var ret = ["<div class=\"dojoxGridSortNode"];
			if (_379.index != _379.grid.getSortIndex()) {
				ret.push("\">");
			} else {
				ret = ret.concat([" ", _379.grid.sortInfo > 0 ? "dojoxGridSortUp" : "dojoxGridSortDown", "\"><div class=\"dojoxGridArrowButtonChar\">", _379.grid.sortInfo > 0 ? "&#9650;" : "&#9660;", "</div><div class=\"dojoxGridArrowButtonNode\" role=\"presentation\"></div>", "<div class=\"dojoxGridColCaption\">"]);
			}
			ret = ret.concat([n, "</div></div>"]);
			return ret.join("");
		}, resize: function () {
			this.adaptHeight();
			this.adaptWidth();
		}, hasHScrollbar: function (_37a) {
			var _37b = this._hasHScroll || false;
			if (this._hasHScroll == undefined || _37a) {
				if (this.noscroll) {
					this._hasHScroll = false;
				} else {
					var _37c = dojo.style(this.scrollboxNode, "overflow");
					if (_37c == "hidden") {
						this._hasHScroll = false;
					} else {
						if (_37c == "scroll") {
							this._hasHScroll = true;
						} else {
							this._hasHScroll = (this.scrollboxNode.offsetWidth - this.getScrollbarWidth() < this.contentNode.offsetWidth);
						}
					}
				}
			}
			if (_37b !== this._hasHScroll) {
				this.grid.update();
			}
			return this._hasHScroll;
		}, hasVScrollbar: function (_37d) {
			var _37e = this._hasVScroll || false;
			if (this._hasVScroll == undefined || _37d) {
				if (this.noscroll) {
					this._hasVScroll = false;
				} else {
					var _37f = dojo.style(this.scrollboxNode, "overflow");
					if (_37f == "hidden") {
						this._hasVScroll = false;
					} else {
						if (_37f == "scroll") {
							this._hasVScroll = true;
						} else {
							this._hasVScroll = (this.scrollboxNode.scrollHeight > this.scrollboxNode.clientHeight);
						}
					}
				}
			}
			if (_37e !== this._hasVScroll) {
				this.grid.update();
			}
			return this._hasVScroll;
		}, convertColPctToFixed: function () {
			var _380 = false;
			this.grid.initialWidth = "";
			var _381 = dojo.query("th", this.headerContentNode);
			var _382 = dojo.map(_381, function (c, vIdx) {
				var w = c.style.width;
				dojo.attr(c, "vIdx", vIdx);
				if (w && w.slice(-1) == "%") {
					_380 = true;
				} else {
					if (w && w.slice(-2) == "px") {
						return window.parseInt(w, 10);
					}
				}
				return dojo.contentBox(c).w;
			});
			if (_380) {
				dojo.forEach(this.grid.layout.cells, function (cell, idx) {
					if (cell.view == this) {
						var _383 = cell.view.getHeaderCellNode(cell.index);
						if (_383 && dojo.hasAttr(_383, "vIdx")) {
							var vIdx = window.parseInt(dojo.attr(_383, "vIdx"));
							this.setColWidth(idx, _382[vIdx]);
							dojo.removeAttr(_383, "vIdx");
						}
					}
				}, this);
				return true;
			}
			return false;
		}, adaptHeight: function (_384) {
			if (!this.grid._autoHeight) {
				var h = (this.domNode.style.height && parseInt(this.domNode.style.height.replace(/px/, ""), 10)) || this.domNode.clientHeight;
				var self = this;
				var _385 = function () {
					var v;
					for (var i in self.grid.views.views) {
						v = self.grid.views.views[i];
						if (v !== self && v.hasHScrollbar()) {
							return true;
						}
					}
					return false;
				};
				if (_384 || (this.noscroll && _385())) {
					h -= dojox.html.metrics.getScrollbar().h;
				}
				dojox.grid.util.setStyleHeightPx(this.scrollboxNode, h);
			}
			this.hasVScrollbar(true);
		}, adaptWidth: function () {
			if (this.flexCells) {
				this.contentWidth = this.getContentWidth();
				this.headerContentNode.firstChild.style.width = this.contentWidth;
			}
			var w = this.scrollboxNode.offsetWidth - this.getScrollbarWidth();
			if (!this._removingColumn) {
				w = Math.max(w, this.getColumnsWidth()) + "px";
			} else {
				w = Math.min(w, this.getColumnsWidth()) + "px";
				this._removingColumn = false;
			}
			var cn = this.contentNode;
			cn.style.width = w;
			this.hasHScrollbar(true);
		}, setSize: function (w, h) {
			var ds = this.domNode.style;
			var hs = this.headerNode.style;
			if (w) {
				ds.width = w;
				hs.width = w;
			}
			ds.height = (h >= 0 ? h + "px" : "");
		}, renderRow: function (_386) {
			var _387 = this.createRowNode(_386);
			this.buildRow(_386, _387);
			this.grid.edit.restore(this, _386);
			return _387;
		}, createRowNode: function (_388) {
			var node = document.createElement("div");
			node.className = this.classTag + "Row";
			if (this instanceof dojox.grid._RowSelector) {
				dojo.attr(node, "role", "presentation");
			} else {
				dojo.attr(node, "role", "row");
				if (this.grid.selectionMode != "none") {
					dojo.attr(node, "aria-selected", "false");
				}
			}
			node[dojox.grid.util.gridViewTag] = this.id;
			node[dojox.grid.util.rowIndexTag] = _388;
			this.rowNodes[_388] = node;
			return node;
		}, buildRow: function (_389, _38a) {
			this.buildRowContent(_389, _38a);
			this.styleRow(_389, _38a);
		}, buildRowContent: function (_38b, _38c) {
			_38c.innerHTML = this.content.generateHtml(_38b, _38b);
			if (this.flexCells && this.contentWidth) {
				_38c.firstChild.style.width = this.contentWidth;
			}
			dojox.grid.util.fire(this, "onAfterRow", [_38b, this.structure.cells, _38c]);
		}, rowRemoved: function (_38d) {
			if (_38d >= 0) {
				this._cleanupRowWidgets(this.getRowNode(_38d));
			}
			this.grid.edit.save(this, _38d);
			delete this.rowNodes[_38d];
		}, getRowNode: function (_38e) {
			return this.rowNodes[_38e];
		}, getCellNode: function (_38f, _390) {
			var row = this.getRowNode(_38f);
			if (row) {
				return this.content.getCellNode(row, _390);
			}
		}, getHeaderCellNode: function (_391) {
			if (this.headerContentNode) {
				return this.header.getCellNode(this.headerContentNode, _391);
			}
		}, styleRow: function (_392, _393) {
			_393._style = _355(_393);
			this.styleRowNode(_392, _393);
		}, styleRowNode: function (_394, _395) {
			if (_395) {
				this.doStyleRowNode(_394, _395);
			}
		}, doStyleRowNode: function (_396, _397) {
			this.grid.styleRowNode(_396, _397);
		}, updateRow: function (_398) {
			var _399 = this.getRowNode(_398);
			if (_399) {
				_399.style.height = "";
				this.buildRow(_398, _399);
			}
			return _399;
		}, updateRowStyles: function (_39a) {
			this.styleRowNode(_39a, this.getRowNode(_39a));
		}, lastTop: 0, firstScroll: 0, doscroll: function (_39b) {
			var _39c = dojo._isBodyLtr();
			if (this.firstScroll < 2) {
				if ((!_39c && this.firstScroll == 1) || (_39c && this.firstScroll === 0)) {
					var s = dojo.marginBox(this.headerNodeContainer);
					if (dojo.isIE) {
						this.headerNodeContainer.style.width = s.w + this.getScrollbarWidth() + "px";
					} else {
						if (dojo.isMoz) {
							this.headerNodeContainer.style.width = s.w - this.getScrollbarWidth() + "px";
							this.scrollboxNode.scrollLeft = _39c ? this.scrollboxNode.clientWidth - this.scrollboxNode.scrollWidth : this.scrollboxNode.scrollWidth - this.scrollboxNode.clientWidth;
						}
					}
				}
				this.firstScroll++;
			}
			this.headerNode.scrollLeft = this.scrollboxNode.scrollLeft;
			var top = this.scrollboxNode.scrollTop;
			if (top !== this.lastTop) {
				this.grid.scrollTo(top);
			}
		}, setScrollTop: function (_39d) {
			this.lastTop = _39d;
			this.scrollboxNode.scrollTop = _39d;
			return this.scrollboxNode.scrollTop;
		}, doContentEvent: function (e) {
			if (this.content.decorateEvent(e)) {
				this.grid.onContentEvent(e);
			}
		}, doHeaderEvent: function (e) {
			if (this.header.decorateEvent(e)) {
				this.grid.onHeaderEvent(e);
			}
		}, dispatchContentEvent: function (e) {
			return this.content.dispatchEvent(e);
		}, dispatchHeaderEvent: function (e) {
			return this.header.dispatchEvent(e);
		}, setColWidth: function (_39e, _39f) {
			this.grid.setCellWidth(_39e, _39f + "px");
		}, update: function () {
			if (!this.domNode) {
				return;
			}
			this.content.update();
			this.grid.update();
			var left = this.scrollboxNode.scrollLeft;
			this.scrollboxNode.scrollLeft = left;
			this.headerNode.scrollLeft = left;
		}});
		dojo.declare("dojox.grid._GridAvatar", dojo.dnd.Avatar, {construct: function () {
			var dd = dojo.doc;
			var a = dd.createElement("table");
			a.cellPadding = a.cellSpacing = "0";
			a.className = "dojoxGridDndAvatar";
			a.style.position = "absolute";
			a.style.zIndex = 1999;
			a.style.margin = "0px";
			var b = dd.createElement("tbody");
			var tr = dd.createElement("tr");
			var td = dd.createElement("td");
			var img = dd.createElement("td");
			tr.className = "dojoxGridDndAvatarItem";
			img.className = "dojoxGridDndAvatarItemImage";
			img.style.width = "16px";
			var _3a0 = this.manager.source, node;
			if (_3a0.creator) {
				node = _3a0._normalizedCreator(_3a0.getItem(this.manager.nodes[0].id).data, "avatar").node;
			} else {
				node = this.manager.nodes[0].cloneNode(true);
				var _3a1, _3a2;
				if (node.tagName.toLowerCase() == "tr") {
					_3a1 = dd.createElement("table");
					_3a2 = dd.createElement("tbody");
					_3a2.appendChild(node);
					_3a1.appendChild(_3a2);
					node = _3a1;
				} else {
					if (node.tagName.toLowerCase() == "th") {
						_3a1 = dd.createElement("table");
						_3a2 = dd.createElement("tbody");
						var r = dd.createElement("tr");
						_3a1.cellPadding = _3a1.cellSpacing = "0";
						r.appendChild(node);
						_3a2.appendChild(r);
						_3a1.appendChild(_3a2);
						node = _3a1;
					}
				}
			}
			node.id = "";
			td.appendChild(node);
			tr.appendChild(img);
			tr.appendChild(td);
			dojo.style(tr, "opacity", 0.9);
			b.appendChild(tr);
			a.appendChild(b);
			this.node = a;
			var m = dojo.dnd.manager();
			this.oldOffsetY = m.OFFSET_Y;
			m.OFFSET_Y = 1;
		}, destroy: function () {
			dojo.dnd.manager().OFFSET_Y = this.oldOffsetY;
			this.inherited(arguments);
		}});
		var _3a3 = dojo.dnd.manager().makeAvatar;
		dojo.dnd.manager().makeAvatar = function () {
			var src = this.source;
			if (src.viewIndex !== undefined && !dojo.hasClass(dojo.body(), "dijit_a11y")) {
				return new dojox.grid._GridAvatar(this);
			}
			return _3a3.call(dojo.dnd.manager());
		};
	})();
}
if (!dojo._hasResource["dojox.grid._RowSelector"]) {
	dojo._hasResource["dojox.grid._RowSelector"] = true;
	dojo.provide("dojox.grid._RowSelector");
	dojo.declare("dojox.grid._RowSelector", dojox.grid._View, {defaultWidth: "2em", noscroll: true, padBorderWidth: 2, buildRendering: function () {
		this.inherited("buildRendering", arguments);
		this.scrollboxNode.style.overflow = "hidden";
		this.headerNode.style.visibility = "hidden";
	}, getWidth: function () {
		return this.viewWidth || this.defaultWidth;
	}, buildRowContent: function (_3a4, _3a5) {
		var w = this.contentWidth || 0;
		_3a5.innerHTML = "<table class=\"dojoxGridRowbarTable\" style=\"width:" + w + "px;height:1px;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\"><tr><td class=\"dojoxGridRowbarInner\">&nbsp;</td></tr></table>";
	}, renderHeader: function () {
	}, updateRow: function () {
	}, resize: function () {
		this.adaptHeight();
	}, adaptWidth: function () {
		if (!("contentWidth" in this) && this.contentNode) {
			this.contentWidth = this.contentNode.offsetWidth - this.padBorderWidth;
		}
	}, doStyleRowNode: function (_3a6, _3a7) {
		var n = ["dojoxGridRowbar dojoxGridNonNormalizedCell"];
		if (this.grid.rows.isOver(_3a6)) {
			n.push("dojoxGridRowbarOver");
		}
		if (this.grid.selection.isSelected(_3a6)) {
			n.push("dojoxGridRowbarSelected");
		}
		_3a7.className = n.join(" ");
	}, domouseover: function (e) {
		this.grid.onMouseOverRow(e);
	}, domouseout: function (e) {
		if (!this.isIntraRowEvent(e)) {
			this.grid.onMouseOutRow(e);
		}
	}});
}
if (!dojo._hasResource["dojox.grid._Layout"]) {
	dojo._hasResource["dojox.grid._Layout"] = true;
	dojo.provide("dojox.grid._Layout");
	dojo.declare("dojox.grid._Layout", null, {constructor: function (_3a8) {
		this.grid = _3a8;
	}, cells: [], structure: null, defaultWidth: "6em", moveColumn: function (_3a9, _3aa, _3ab, _3ac, _3ad) {
		var _3ae = this.structure[_3a9].cells[0];
		var _3af = this.structure[_3aa].cells[0];
		var cell = null;
		var _3b0 = 0;
		var _3b1 = 0;
		for (var i = 0, c; c = _3ae[i]; i++) {
			if (c.index == _3ab) {
				_3b0 = i;
				break;
			}
		}
		cell = _3ae.splice(_3b0, 1)[0];
		cell.view = this.grid.views.views[_3aa];
		for (i = 0, c = null; c = _3af[i]; i++) {
			if (c.index == _3ac) {
				_3b1 = i;
				break;
			}
		}
		if (!_3ad) {
			_3b1 += 1;
		}
		_3af.splice(_3b1, 0, cell);
		var _3b2 = this.grid.getCell(this.grid.getSortIndex());
		if (_3b2) {
			_3b2._currentlySorted = this.grid.getSortAsc();
		}
		this.cells = [];
		_3ab = 0;
		var v;
		for (i = 0; v = this.structure[i]; i++) {
			for (var j = 0, cs; cs = v.cells[j]; j++) {
				for (var k = 0; c = cs[k]; k++) {
					c.index = _3ab;
					this.cells.push(c);
					if ("_currentlySorted" in c) {
						var si = _3ab + 1;
						si *= c._currentlySorted ? 1 : -1;
						this.grid.sortInfo = si;
						delete c._currentlySorted;
					}
					_3ab++;
				}
			}
		}
		dojo.forEach(this.cells, function (c) {
			var _3b3 = c.markup[2].split(" ");
			var _3b4 = parseInt(_3b3[1].substring(5));
			if (_3b4 != c.index) {
				_3b3[1] = "idx=\"" + c.index + "\"";
				c.markup[2] = _3b3.join(" ");
			}
		});
		this.grid.setupHeaderMenu();
	}, setColumnVisibility: function (_3b5, _3b6) {
		var cell = this.cells[_3b5];
		if (cell.hidden == _3b6) {
			cell.hidden = !_3b6;
			var v = cell.view, w = v.viewWidth;
			if (w && w != "auto") {
				v._togglingColumn = dojo.marginBox(cell.getHeaderNode()).w || 0;
			}
			v.update();
			return true;
		} else {
			return false;
		}
	}, addCellDef: function (_3b7, _3b8, _3b9) {
		var self = this;
		var _3ba = function (_3bb) {
			var w = 0;
			if (_3bb.colSpan > 1) {
				w = 0;
			} else {
				w = _3bb.width || self._defaultCellProps.width || self.defaultWidth;
				if (!isNaN(w)) {
					w = w + "em";
				}
			}
			return w;
		};
		var _3bc = {grid: this.grid, subrow: _3b7, layoutIndex: _3b8, index: this.cells.length};
		if (_3b9 && _3b9 instanceof dojox.grid.cells._Base) {
			var _3bd = dojo.clone(_3b9);
			_3bc.unitWidth = _3ba(_3bd._props);
			_3bd = dojo.mixin(_3bd, this._defaultCellProps, _3b9._props, _3bc);
			return _3bd;
		}
		var _3be = _3b9.type || _3b9.cellType || this._defaultCellProps.type || this._defaultCellProps.cellType || dojox.grid.cells.Cell;
		_3bc.unitWidth = _3ba(_3b9);
		return new _3be(dojo.mixin({}, this._defaultCellProps, _3b9, _3bc));
	}, addRowDef: function (_3bf, _3c0) {
		var _3c1 = [];
		var _3c2 = 0, _3c3 = 0, _3c4 = true;
		for (var i = 0, def, cell; (def = _3c0[i]); i++) {
			cell = this.addCellDef(_3bf, i, def);
			_3c1.push(cell);
			this.cells.push(cell);
			if (_3c4 && cell.relWidth) {
				_3c2 += cell.relWidth;
			} else {
				if (cell.width) {
					var w = cell.width;
					if (typeof w == "string" && w.slice(-1) == "%") {
						_3c3 += window.parseInt(w, 10);
					} else {
						if (w == "auto") {
							_3c4 = false;
						}
					}
				}
			}
		}
		if (_3c2 && _3c4) {
			dojo.forEach(_3c1, function (cell) {
				if (cell.relWidth) {
					cell.width = cell.unitWidth = ((cell.relWidth / _3c2) * (100 - _3c3)) + "%";
				}
			});
		}
		return _3c1;
	}, addRowsDef: function (_3c5) {
		var _3c6 = [];
		if (dojo.isArray(_3c5)) {
			if (dojo.isArray(_3c5[0])) {
				for (var i = 0, row; _3c5 && (row = _3c5[i]); i++) {
					_3c6.push(this.addRowDef(i, row));
				}
			} else {
				_3c6.push(this.addRowDef(0, _3c5));
			}
		}
		return _3c6;
	}, addViewDef: function (_3c7) {
		this._defaultCellProps = _3c7.defaultCell || {};
		if (_3c7.width && _3c7.width == "auto") {
			delete _3c7.width;
		}
		return dojo.mixin({}, _3c7, {cells: this.addRowsDef(_3c7.rows || _3c7.cells)});
	}, setStructure: function (_3c8) {
		this.fieldIndex = 0;
		this.cells = [];
		var s = this.structure = [];
		if (this.grid.rowSelector) {
			var sel = {type: dojox._scopeName + ".grid._RowSelector"};
			if (dojo.isString(this.grid.rowSelector)) {
				var _3c9 = this.grid.rowSelector;
				if (_3c9 == "false") {
					sel = null;
				} else {
					if (_3c9 != "true") {
						sel["width"] = _3c9;
					}
				}
			} else {
				if (!this.grid.rowSelector) {
					sel = null;
				}
			}
			if (sel) {
				s.push(this.addViewDef(sel));
			}
		}
		var _3ca = function (def) {
			return ("name" in def || "field" in def || "get" in def);
		};
		var _3cb = function (def) {
			if (dojo.isArray(def)) {
				if (dojo.isArray(def[0]) || _3ca(def[0])) {
					return true;
				}
			}
			return false;
		};
		var _3cc = function (def) {
			return (def !== null && dojo.isObject(def) && ("cells" in def || "rows" in def || ("type" in def && !_3ca(def))));
		};
		if (dojo.isArray(_3c8)) {
			var _3cd = false;
			for (var i = 0, st; (st = _3c8[i]); i++) {
				if (_3cc(st)) {
					_3cd = true;
					break;
				}
			}
			if (!_3cd) {
				s.push(this.addViewDef({cells: _3c8}));
			} else {
				for (i = 0; (st = _3c8[i]); i++) {
					if (_3cb(st)) {
						s.push(this.addViewDef({cells: st}));
					} else {
						if (_3cc(st)) {
							s.push(this.addViewDef(st));
						}
					}
				}
			}
		} else {
			if (_3cc(_3c8)) {
				s.push(this.addViewDef(_3c8));
			}
		}
		this.cellCount = this.cells.length;
		this.grid.setupHeaderMenu();
	}});
}
if (!dojo._hasResource["dojox.grid._ViewManager"]) {
	dojo._hasResource["dojox.grid._ViewManager"] = true;
	dojo.provide("dojox.grid._ViewManager");
	dojo.declare("dojox.grid._ViewManager", null, {constructor: function (_3ce) {
		this.grid = _3ce;
	}, defaultWidth: 200, views: [], resize: function () {
		this.onEach("resize");
	}, render: function () {
		this.onEach("render");
	}, addView: function (_3cf) {
		_3cf.idx = this.views.length;
		this.views.push(_3cf);
	}, destroyViews: function () {
		for (var i = 0, v; v = this.views[i]; i++) {
			v.destroy();
		}
		this.views = [];
	}, getContentNodes: function () {
		var _3d0 = [];
		for (var i = 0, v; v = this.views[i]; i++) {
			_3d0.push(v.contentNode);
		}
		return _3d0;
	}, forEach: function (_3d1) {
		for (var i = 0, v; v = this.views[i]; i++) {
			_3d1(v, i);
		}
	}, onEach: function (_3d2, _3d3) {
		_3d3 = _3d3 || [];
		for (var i = 0, v; v = this.views[i]; i++) {
			if (_3d2 in v) {
				v[_3d2].apply(v, _3d3);
			}
		}
	}, normalizeHeaderNodeHeight: function () {
		var _3d4 = [];
		for (var i = 0, v; (v = this.views[i]); i++) {
			if (v.headerContentNode.firstChild) {
				_3d4.push(v.headerContentNode);
			}
		}
		this.normalizeRowNodeHeights(_3d4);
	}, normalizeRowNodeHeights: function (_3d5) {
		var h = 0;
		var _3d6 = [];
		if (this.grid.rowHeight) {
			h = this.grid.rowHeight;
		} else {
			if (_3d5.length <= 1) {
				return;
			}
			for (var i = 0, n; (n = _3d5[i]); i++) {
				if (!dojo.hasClass(n, "dojoxGridNonNormalizedCell")) {
					_3d6[i] = n.firstChild.offsetHeight;
					h = Math.max(h, _3d6[i]);
				}
			}
			h = (h >= 0 ? h : 0);
			if (dojo.isMoz && h) {
				h++;
			}
		}
		for (i = 0; (n = _3d5[i]); i++) {
			if (_3d6[i] != h) {
				n.firstChild.style.height = h + "px";
			}
		}
	}, resetHeaderNodeHeight: function () {
		for (var i = 0, v, n; (v = this.views[i]); i++) {
			n = v.headerContentNode.firstChild;
			if (n) {
				n.style.height = "";
			}
		}
	}, renormalizeRow: function (_3d7) {
		var _3d8 = [];
		for (var i = 0, v, n; (v = this.views[i]) && (n = v.getRowNode(_3d7)); i++) {
			n.firstChild.style.height = "";
			_3d8.push(n);
		}
		this.normalizeRowNodeHeights(_3d8);
	}, getViewWidth: function (_3d9) {
		return this.views[_3d9].getWidth() || this.defaultWidth;
	}, measureHeader: function () {
		this.resetHeaderNodeHeight();
		this.forEach(function (_3da) {
			_3da.headerContentNode.style.height = "";
		});
		var h = 0;
		this.forEach(function (_3db) {
			h = Math.max(_3db.headerNode.offsetHeight, h);
		});
		return h;
	}, measureContent: function () {
		var h = 0;
		this.forEach(function (_3dc) {
			h = Math.max(_3dc.domNode.offsetHeight, h);
		});
		return h;
	}, findClient: function (_3dd) {
		var c = this.grid.elasticView || -1;
		if (c < 0) {
			for (var i = 1, v; (v = this.views[i]); i++) {
				if (v.viewWidth) {
					for (i = 1; (v = this.views[i]); i++) {
						if (!v.viewWidth) {
							c = i;
							break;
						}
					}
					break;
				}
			}
		}
		if (c < 0) {
			c = Math.floor(this.views.length / 2);
		}
		return c;
	}, arrange: function (l, w) {
		var i, v, vw, len = this.views.length;
		var c = (w <= 0 ? len : this.findClient());
		var _3de = function (v, l) {
			var ds = v.domNode.style;
			var hs = v.headerNode.style;
			if (!dojo._isBodyLtr()) {
				ds.right = l + "px";
				if (dojo.isMoz) {
					hs.right = l + v.getScrollbarWidth() + "px";
					hs.width = parseInt(hs.width, 10) - v.getScrollbarWidth() + "px";
				} else {
					hs.right = l + "px";
				}
			} else {
				ds.left = l + "px";
				hs.left = l + "px";
			}
			ds.top = 0 + "px";
			hs.top = 0;
		};
		for (i = 0; (v = this.views[i]) && (i < c); i++) {
			vw = this.getViewWidth(i);
			v.setSize(vw, 0);
			_3de(v, l);
			if (v.headerContentNode && v.headerContentNode.firstChild) {
				vw = v.getColumnsWidth() + v.getScrollbarWidth();
			} else {
				vw = v.domNode.offsetWidth;
			}
			l += vw;
		}
		i++;
		var r = w;
		for (var j = len - 1; (v = this.views[j]) && (i <= j); j--) {
			vw = this.getViewWidth(j);
			v.setSize(vw, 0);
			vw = v.domNode.offsetWidth;
			r -= vw;
			_3de(v, r);
		}
		if (c < len) {
			v = this.views[c];
			vw = Math.max(1, r - l);
			v.setSize(vw + "px", 0);
			_3de(v, l);
		}
		return l;
	}, renderRow: function (_3df, _3e0, _3e1) {
		var _3e2 = [];
		for (var i = 0, v, n, _3e3; (v = this.views[i]) && (n = _3e0[i]); i++) {
			_3e3 = v.renderRow(_3df);
			n.appendChild(_3e3);
			_3e2.push(_3e3);
		}
		if (!_3e1) {
			this.normalizeRowNodeHeights(_3e2);
		}
	}, rowRemoved: function (_3e4) {
		this.onEach("rowRemoved", [_3e4]);
	}, updateRow: function (_3e5, _3e6) {
		for (var i = 0, v; v = this.views[i]; i++) {
			v.updateRow(_3e5);
		}
		if (!_3e6) {
			this.renormalizeRow(_3e5);
		}
	}, updateRowStyles: function (_3e7) {
		this.onEach("updateRowStyles", [_3e7]);
	}, setScrollTop: function (_3e8) {
		var top = _3e8;
		for (var i = 0, v; v = this.views[i]; i++) {
			top = v.setScrollTop(_3e8);
			if (dojo.isIE && v.headerNode && v.scrollboxNode) {
				v.headerNode.scrollLeft = v.scrollboxNode.scrollLeft;
			}
		}
		return top;
	}, getFirstScrollingView: function () {
		for (var i = 0, v; (v = this.views[i]); i++) {
			if (v.hasHScrollbar() || v.hasVScrollbar()) {
				return v;
			}
		}
		return null;
	}});
}
if (!dojo._hasResource["dojox.grid._RowManager"]) {
	dojo._hasResource["dojox.grid._RowManager"] = true;
	dojo.provide("dojox.grid._RowManager");
	(function () {
		var _3e9 = function (_3ea, _3eb) {
			if (_3ea.style.cssText == undefined) {
				_3ea.setAttribute("style", _3eb);
			} else {
				_3ea.style.cssText = _3eb;
			}
		};
		dojo.declare("dojox.grid._RowManager", null, {constructor: function (_3ec) {
			this.grid = _3ec;
		}, linesToEms: 2, overRow: -2, prepareStylingRow: function (_3ed, _3ee) {
			return {index: _3ed, node: _3ee, odd: Boolean(_3ed & 1), selected: !!this.grid.selection.isSelected(_3ed), over: this.isOver(_3ed), customStyles: "", customClasses: "dojoxGridRow"};
		}, styleRowNode: function (_3ef, _3f0) {
			var row = this.prepareStylingRow(_3ef, _3f0);
			this.grid.onStyleRow(row);
			this.applyStyles(row);
		}, applyStyles: function (_3f1) {
			var i = _3f1;
			i.node.className = i.customClasses;
			var h = i.node.style.height;
			_3e9(i.node, i.customStyles + ";" + (i.node._style || ""));
			i.node.style.height = h;
		}, updateStyles: function (_3f2) {
			this.grid.updateRowStyles(_3f2);
		}, setOverRow: function (_3f3) {
			var last = this.overRow;
			this.overRow = _3f3;
			if ((last != this.overRow) && (dojo.isString(last) || last >= 0)) {
				this.updateStyles(last);
			}
			this.updateStyles(this.overRow);
		}, isOver: function (_3f4) {
			return (this.overRow == _3f4 && !dojo.hasClass(this.grid.domNode, "dojoxGridColumnResizing"));
		}});
	})();
}
if (!dojo._hasResource["dojox.grid._FocusManager"]) {
	dojo._hasResource["dojox.grid._FocusManager"] = true;
	dojo.provide("dojox.grid._FocusManager");
	dojo.declare("dojox.grid._FocusManager", null, {constructor: function (_3f5) {
		this.grid = _3f5;
		this.cell = null;
		this.rowIndex = -1;
		this._connects = [];
		this._headerConnects = [];
		this.headerMenu = this.grid.headerMenu;
		this._connects.push(dojo.connect(this.grid.domNode, "onfocus", this, "doFocus"));
		this._connects.push(dojo.connect(this.grid.domNode, "onblur", this, "doBlur"));
		this._connects.push(dojo.connect(this.grid.domNode, "oncontextmenu", this, "doContextMenu"));
		this._connects.push(dojo.connect(this.grid.lastFocusNode, "onfocus", this, "doLastNodeFocus"));
		this._connects.push(dojo.connect(this.grid.lastFocusNode, "onblur", this, "doLastNodeBlur"));
		this._connects.push(dojo.connect(this.grid, "_onFetchComplete", this, "_delayedCellFocus"));
		this._connects.push(dojo.connect(this.grid, "postrender", this, "_delayedHeaderFocus"));
	}, destroy: function () {
		dojo.forEach(this._connects, dojo.disconnect);
		dojo.forEach(this._headerConnects, dojo.disconnect);
		delete this.grid;
		delete this.cell;
	}, _colHeadNode: null, _colHeadFocusIdx: null, _contextMenuBindNode: null, tabbingOut: false, focusClass: "dojoxGridCellFocus", focusView: null, initFocusView: function () {
		this.focusView = this.grid.views.getFirstScrollingView() || this.focusView || this.grid.views.views[0];
		this._initColumnHeaders();
	}, isFocusCell: function (_3f6, _3f7) {
		return (this.cell == _3f6) && (this.rowIndex == _3f7);
	}, isLastFocusCell: function () {
		if (this.cell) {
			return (this.rowIndex == this.grid.rowCount - 1) && (this.cell.index == this.grid.layout.cellCount - 1);
		}
		return false;
	}, isFirstFocusCell: function () {
		if (this.cell) {
			return (this.rowIndex === 0) && (this.cell.index === 0);
		}
		return false;
	}, isNoFocusCell: function () {
		return (this.rowIndex < 0) || !this.cell;
	}, isNavHeader: function () {
		return (!!this._colHeadNode);
	}, getHeaderIndex: function () {
		if (this._colHeadNode) {
			return dojo.indexOf(this._findHeaderCells(), this._colHeadNode);
		} else {
			return -1;
		}
	}, _focusifyCellNode: function (_3f8) {
		var n = this.cell && this.cell.getNode(this.rowIndex);
		if (n) {
			dojo.toggleClass(n, this.focusClass, _3f8);
			if (_3f8) {
				var sl = this.scrollIntoView();
				try {
					if (!this.grid.edit.isEditing()) {
						dojox.grid.util.fire(n, "focus");
						if (sl) {
							this.cell.view.scrollboxNode.scrollLeft = sl;
						}
					}
				} catch (e) {
				}
			}
		}
	}, _delayedCellFocus: function () {
		if (this.isNavHeader() || !this.grid._focused) {
			return;
		}
		var n = this.cell && this.cell.getNode(this.rowIndex);
		if (n) {
			try {
				if (!this.grid.edit.isEditing()) {
					dojo.toggleClass(n, this.focusClass, true);
					this.blurHeader();
					dojox.grid.util.fire(n, "focus");
				}
			} catch (e) {
			}
		}
	}, _delayedHeaderFocus: function () {
		if (this.isNavHeader()) {
			this.focusHeader();
			this.grid.domNode.focus();
		}
	}, _initColumnHeaders: function () {
		dojo.forEach(this._headerConnects, dojo.disconnect);
		this._headerConnects = [];
		var _3f9 = this._findHeaderCells();
		for (var i = 0; i < _3f9.length; i++) {
			this._headerConnects.push(dojo.connect(_3f9[i], "onfocus", this, "doColHeaderFocus"));
			this._headerConnects.push(dojo.connect(_3f9[i], "onblur", this, "doColHeaderBlur"));
		}
	}, _findHeaderCells: function () {
		var _3fa = dojo.query("th", this.grid.viewsHeaderNode);
		var _3fb = [];
		for (var i = 0; i < _3fa.length; i++) {
			var _3fc = _3fa[i];
			var _3fd = dojo.hasAttr(_3fc, "tabIndex");
			var _3fe = dojo.attr(_3fc, "tabIndex");
			if (_3fd && _3fe < 0) {
				_3fb.push(_3fc);
			}
		}
		return _3fb;
	}, _setActiveColHeader: function (_3ff, _400, _401) {
		dojo.attr(this.grid.domNode, "aria-activedescendant", _3ff.id);
		if (_401 != null && _401 >= 0 && _401 != _400) {
			dojo.toggleClass(this._findHeaderCells()[_401], this.focusClass, false);
		}
		dojo.toggleClass(_3ff, this.focusClass, true);
		this._colHeadNode = _3ff;
		this._colHeadFocusIdx = _400;
		this._scrollHeader(this._colHeadFocusIdx);
	}, scrollIntoView: function () {
		var info = (this.cell ? this._scrollInfo(this.cell) : null);
		if (!info || !info.s) {
			return null;
		}
		var rt = this.grid.scroller.findScrollTop(this.rowIndex);
		if (info.n && info.sr) {
			if (info.n.offsetLeft + info.n.offsetWidth > info.sr.l + info.sr.w) {
				info.s.scrollLeft = info.n.offsetLeft + info.n.offsetWidth - info.sr.w;
			} else {
				if (info.n.offsetLeft < info.sr.l) {
					info.s.scrollLeft = info.n.offsetLeft;
				}
			}
		}
		if (info.r && info.sr) {
			if (rt + info.r.offsetHeight > info.sr.t + info.sr.h) {
				this.grid.setScrollTop(rt + info.r.offsetHeight - info.sr.h);
			} else {
				if (rt < info.sr.t) {
					this.grid.setScrollTop(rt);
				}
			}
		}
		return info.s.scrollLeft;
	}, _scrollInfo: function (cell, _402) {
		if (cell) {
			var cl = cell, sbn = cl.view.scrollboxNode, sbnr = {w: sbn.clientWidth, l: sbn.scrollLeft, t: sbn.scrollTop, h: sbn.clientHeight}, rn = cl.view.getRowNode(this.rowIndex);
			return {c: cl, s: sbn, sr: sbnr, n: (_402 ? _402 : cell.getNode(this.rowIndex)), r: rn};
		}
		return null;
	}, _scrollHeader: function (_403) {
		var info = null;
		if (this._colHeadNode) {
			var cell = this.grid.getCell(_403);
			info = this._scrollInfo(cell, cell.getNode(0));
		}
		if (info && info.s && info.sr && info.n) {
			var _404 = info.sr.l + info.sr.w;
			if (info.n.offsetLeft + info.n.offsetWidth > _404) {
				info.s.scrollLeft = info.n.offsetLeft + info.n.offsetWidth - info.sr.w;
			} else {
				if (info.n.offsetLeft < info.sr.l) {
					info.s.scrollLeft = info.n.offsetLeft;
				} else {
					if (dojo.isIE <= 7 && cell && cell.view.headerNode) {
						cell.view.headerNode.scrollLeft = info.s.scrollLeft;
					}
				}
			}
		}
	}, _isHeaderHidden: function () {
		var _405 = this.focusView;
		if (!_405) {
			for (var i = 0, _406; (_406 = this.grid.views.views[i]); i++) {
				if (_406.headerNode) {
					_405 = _406;
					break;
				}
			}
		}
		return (_405 && dojo.getComputedStyle(_405.headerNode).display == "none");
	}, colSizeAdjust: function (e, _407, _408) {
		var _409 = this._findHeaderCells();
		var view = this.focusView;
		if (!view) {
			for (var i = 0, _40a; (_40a = this.grid.views.views[i]); i++) {
				if (_40a.header.tableMap.map) {
					view = _40a;
					break;
				}
			}
		}
		var _40b = _409[_407];
		if (!view || (_407 == _409.length - 1 && _407 === 0)) {
			return;
		}
		view.content.baseDecorateEvent(e);
		e.cellNode = _40b;
		e.cellIndex = view.content.getCellNodeIndex(e.cellNode);
		e.cell = (e.cellIndex >= 0 ? this.grid.getCell(e.cellIndex) : null);
		if (view.header.canResize(e)) {
			var _40c = {l: _408};
			var drag = view.header.colResizeSetup(e, false);
			view.header.doResizeColumn(drag, null, _40c);
			view.update();
		}
	}, styleRow: function (_40d) {
		return;
	}, setFocusIndex: function (_40e, _40f) {
		this.setFocusCell(this.grid.getCell(_40f), _40e);
	}, setFocusCell: function (_410, _411) {
		if (_410 && !this.isFocusCell(_410, _411)) {
			this.tabbingOut = false;
			if (this._colHeadNode) {
				this.blurHeader();
			}
			this._colHeadNode = this._colHeadFocusIdx = null;
			this.focusGridView();
			this._focusifyCellNode(false);
			this.cell = _410;
			this.rowIndex = _411;
			this._focusifyCellNode(true);
		}
		if (dojo.isOpera) {
			setTimeout(dojo.hitch(this.grid, "onCellFocus", this.cell, this.rowIndex), 1);
		} else {
			this.grid.onCellFocus(this.cell, this.rowIndex);
		}
	}, next: function () {
		if (this.cell) {
			var row = this.rowIndex, col = this.cell.index + 1, cc = this.grid.layout.cellCount - 1, rc = this.grid.rowCount - 1;
			if (col > cc) {
				col = 0;
				row++;
			}
			if (row > rc) {
				col = cc;
				row = rc;
			}
			if (this.grid.edit.isEditing()) {
				var _412 = this.grid.getCell(col);
				if (!this.isLastFocusCell() && (!_412.editable || this.grid.canEdit && !this.grid.canEdit(_412, row))) {
					this.cell = _412;
					this.rowIndex = row;
					this.next();
					return;
				}
			}
			this.setFocusIndex(row, col);
		}
	}, previous: function () {
		if (this.cell) {
			var row = (this.rowIndex || 0), col = (this.cell.index || 0) - 1;
			if (col < 0) {
				col = this.grid.layout.cellCount - 1;
				row--;
			}
			if (row < 0) {
				row = 0;
				col = 0;
			}
			if (this.grid.edit.isEditing()) {
				var _413 = this.grid.getCell(col);
				if (!this.isFirstFocusCell() && !_413.editable) {
					this.cell = _413;
					this.rowIndex = row;
					this.previous();
					return;
				}
			}
			this.setFocusIndex(row, col);
		}
	}, move: function (_414, _415) {
		var _416 = _415 < 0 ? -1 : 1;
		if (this.isNavHeader()) {
			var _417 = this._findHeaderCells();
			var _418 = currentIdx = dojo.indexOf(_417, this._colHeadNode);
			currentIdx += _415;
			while (currentIdx >= 0 && currentIdx < _417.length && _417[currentIdx].style.display == "none") {
				currentIdx += _416;
			}
			if ((currentIdx >= 0) && (currentIdx < _417.length)) {
				this._setActiveColHeader(_417[currentIdx], currentIdx, _418);
			}
		} else {
			if (this.cell) {
				var sc = this.grid.scroller, r = this.rowIndex, rc = this.grid.rowCount - 1, row = Math.min(rc, Math.max(0, r + _414));
				if (_414) {
					if (_414 > 0) {
						if (row > sc.getLastPageRow(sc.page)) {
							this.grid.setScrollTop(this.grid.scrollTop + sc.findScrollTop(row) - sc.findScrollTop(r));
						}
					} else {
						if (_414 < 0) {
							if (row <= sc.getPageRow(sc.page)) {
								this.grid.setScrollTop(this.grid.scrollTop - sc.findScrollTop(r) - sc.findScrollTop(row));
							}
						}
					}
				}
				var cc = this.grid.layout.cellCount - 1, i = this.cell.index, col = Math.min(cc, Math.max(0, i + _415));
				var cell = this.grid.getCell(col);
				while (col >= 0 && col < cc && cell && cell.hidden === true) {
					col += _416;
					cell = this.grid.getCell(col);
				}
				if (!cell || cell.hidden === true) {
					col = i;
				}
				var n = cell.getNode(row);
				if (!n && _414) {
					if ((row + _414) >= 0 && (row + _414) <= rc) {
						this.move(_414 > 0 ? ++_414 : --_414, _415);
					}
					return;
				} else {
					if ((!n || dojo.style(n, "display") === "none") && _415) {
						if ((col + _414) >= 0 && (col + _414) <= cc) {
							this.move(_414, _415 > 0 ? ++_415 : --_415);
						}
						return;
					}
				}
				this.setFocusIndex(row, col);
				if (_414) {
					this.grid.updateRow(r);
				}
			}
		}
	}, previousKey: function (e) {
		if (this.grid.edit.isEditing()) {
			dojo.stopEvent(e);
			this.previous();
		} else {
			if (!this.isNavHeader() && !this._isHeaderHidden()) {
				this.grid.domNode.focus();
				dojo.stopEvent(e);
			} else {
				this.tabOut(this.grid.domNode);
				if (this._colHeadFocusIdx != null) {
					dojo.toggleClass(this._findHeaderCells()[this._colHeadFocusIdx], this.focusClass, false);
					this._colHeadFocusIdx = null;
				}
				this._focusifyCellNode(false);
			}
		}
	}, nextKey: function (e) {
		var _419 = (this.grid.rowCount === 0);
		if (e.target === this.grid.domNode && this._colHeadFocusIdx == null) {
			this.focusHeader();
			dojo.stopEvent(e);
		} else {
			if (this.isNavHeader()) {
				this.blurHeader();
				if (!this.findAndFocusGridCell()) {
					this.tabOut(this.grid.lastFocusNode);
				}
				this._colHeadNode = this._colHeadFocusIdx = null;
			} else {
				if (this.grid.edit.isEditing()) {
					dojo.stopEvent(e);
					this.next();
				} else {
					this.tabOut(this.grid.lastFocusNode);
				}
			}
		}
	}, tabOut: function (_41a) {
		this.tabbingOut = true;
		_41a.focus();
	}, focusGridView: function () {
		dojox.grid.util.fire(this.focusView, "focus");
	}, focusGrid: function (_41b) {
		this.focusGridView();
		this._focusifyCellNode(true);
	}, findAndFocusGridCell: function () {
		var _41c = true;
		var _41d = (this.grid.rowCount === 0);
		if (this.isNoFocusCell() && !_41d) {
			var _41e = 0;
			var cell = this.grid.getCell(_41e);
			if (cell.hidden) {
				_41e = this.isNavHeader() ? this._colHeadFocusIdx : 0;
			}
			this.setFocusIndex(0, _41e);
		} else {
			if (this.cell && !_41d) {
				if (this.focusView && !this.focusView.rowNodes[this.rowIndex]) {
					this.grid.scrollToRow(this.rowIndex);
				}
				this.focusGrid();
			} else {
				_41c = false;
			}
		}
		this._colHeadNode = this._colHeadFocusIdx = null;
		return _41c;
	}, focusHeader: function () {
		var _41f = this._findHeaderCells();
		var _420 = this._colHeadFocusIdx;
		if (this._isHeaderHidden()) {
			this.findAndFocusGridCell();
		} else {
			if (!this._colHeadFocusIdx) {
				if (this.isNoFocusCell()) {
					this._colHeadFocusIdx = 0;
				} else {
					this._colHeadFocusIdx = this.cell.index;
				}
			}
		}
		this._colHeadNode = _41f[this._colHeadFocusIdx];
		while (this._colHeadNode && this._colHeadFocusIdx >= 0 && this._colHeadFocusIdx < _41f.length && this._colHeadNode.style.display == "none") {
			this._colHeadFocusIdx++;
			this._colHeadNode = _41f[this._colHeadFocusIdx];
		}
		if (this._colHeadNode && this._colHeadNode.style.display != "none") {
			if (this.headerMenu && this._contextMenuBindNode != this.grid.domNode) {
				this.headerMenu.unBindDomNode(this.grid.viewsHeaderNode);
				this.headerMenu.bindDomNode(this.grid.domNode);
				this._contextMenuBindNode = this.grid.domNode;
			}
			this._setActiveColHeader(this._colHeadNode, this._colHeadFocusIdx, _420);
			this._scrollHeader(this._colHeadFocusIdx);
			this._focusifyCellNode(false);
		} else {
			this.findAndFocusGridCell();
		}
	}, blurHeader: function () {
		dojo.removeClass(this._colHeadNode, this.focusClass);
		dojo.removeAttr(this.grid.domNode, "aria-activedescendant");
		if (this.headerMenu && this._contextMenuBindNode == this.grid.domNode) {
			var _421 = this.grid.viewsHeaderNode;
			this.headerMenu.unBindDomNode(this.grid.domNode);
			this.headerMenu.bindDomNode(_421);
			this._contextMenuBindNode = _421;
		}
	}, doFocus: function (e) {
		if (e && e.target != e.currentTarget) {
			dojo.stopEvent(e);
			return;
		}
		if (!this.tabbingOut) {
			this.focusHeader();
		}
		this.tabbingOut = false;
		dojo.stopEvent(e);
	}, doBlur: function (e) {
		dojo.stopEvent(e);
	}, doContextMenu: function (e) {
		if (!this.headerMenu) {
			dojo.stopEvent(e);
		}
	}, doLastNodeFocus: function (e) {
		if (this.tabbingOut) {
			this._focusifyCellNode(false);
		} else {
			if (this.grid.rowCount > 0) {
				if (this.isNoFocusCell()) {
					this.setFocusIndex(0, 0);
				}
				this._focusifyCellNode(true);
			} else {
				this.focusHeader();
			}
		}
		this.tabbingOut = false;
		dojo.stopEvent(e);
	}, doLastNodeBlur: function (e) {
		dojo.stopEvent(e);
	}, doColHeaderFocus: function (e) {
		this._setActiveColHeader(e.target, dojo.attr(e.target, "idx"), this._colHeadFocusIdx);
		this._scrollHeader(this.getHeaderIndex());
		dojo.stopEvent(e);
	}, doColHeaderBlur: function (e) {
		dojo.toggleClass(e.target, this.focusClass, false);
	}});
}
if (!dojo._hasResource["dojox.grid._EditManager"]) {
	dojo._hasResource["dojox.grid._EditManager"] = true;
	dojo.provide("dojox.grid._EditManager");
	dojo.declare("dojox.grid._EditManager", null, {constructor: function (_422) {
		this.grid = _422;
		if (dojo.isIE) {
			this.connections = [dojo.connect(document.body, "onfocus", dojo.hitch(this, "_boomerangFocus"))];
		} else {
			this.connections = [dojo.connect(this.grid, "onBlur", this, "apply")];
		}
	}, info: {}, destroy: function () {
		dojo.forEach(this.connections, dojo.disconnect);
	}, cellFocus: function (_423, _424) {
		if (this.grid.singleClickEdit || this.isEditRow(_424)) {
			this.setEditCell(_423, _424);
		} else {
			this.apply();
		}
		if (this.isEditing() || (_423 && _423.editable && _423.alwaysEditing)) {
			this._focusEditor(_423, _424);
		}
	}, rowClick: function (e) {
		if (this.isEditing() && !this.isEditRow(e.rowIndex)) {
			this.apply();
		}
	}, styleRow: function (_425) {
		if (_425.index == this.info.rowIndex) {
			_425.customClasses += " dojoxGridRowEditing";
		}
	}, dispatchEvent: function (e) {
		var c = e.cell, ed = (c && c["editable"]) ? c : 0;
		return ed && ed.dispatchEvent(e.dispatch, e);
	}, isEditing: function () {
		return this.info.rowIndex !== undefined;
	}, isEditCell: function (_426, _427) {
		return (this.info.rowIndex === _426) && (this.info.cell.index == _427);
	}, isEditRow: function (_428) {
		return this.info.rowIndex === _428;
	}, setEditCell: function (_429, _42a) {
		if (!this.isEditCell(_42a, _429.index) && this.grid.canEdit && this.grid.canEdit(_429, _42a)) {
			this.start(_429, _42a, this.isEditRow(_42a) || _429.editable);
		}
	}, _focusEditor: function (_42b, _42c) {
		dojox.grid.util.fire(_42b, "focus", [_42c]);
	}, focusEditor: function () {
		if (this.isEditing()) {
			this._focusEditor(this.info.cell, this.info.rowIndex);
		}
	}, _boomerangWindow: 500, _shouldCatchBoomerang: function () {
		return this._catchBoomerang > new Date().getTime();
	}, _boomerangFocus: function () {
		if (this._shouldCatchBoomerang()) {
			this.grid.focus.focusGrid();
			this.focusEditor();
			this._catchBoomerang = 0;
		}
	}, _doCatchBoomerang: function () {
		if (dojo.isIE) {
			this._catchBoomerang = new Date().getTime() + this._boomerangWindow;
		}
	}, start: function (_42d, _42e, _42f) {
		this.grid.beginUpdate();
		this.editorApply();
		if (this.isEditing() && !this.isEditRow(_42e)) {
			this.applyRowEdit();
			this.grid.updateRow(_42e);
		}
		if (_42f) {
			this.info = {cell: _42d, rowIndex: _42e};
			this.grid.doStartEdit(_42d, _42e);
			this.grid.updateRow(_42e);
		} else {
			this.info = {};
		}
		this.grid.endUpdate();
		this.grid.focus.focusGrid();
		this._focusEditor(_42d, _42e);
		this._doCatchBoomerang();
	}, _editorDo: function (_430) {
		var c = this.info.cell;
		if (c && c.editable) {
			c[_430](this.info.rowIndex);
		}
	}, editorApply: function () {
		this._editorDo("apply");
	}, editorCancel: function () {
		this._editorDo("cancel");
	}, applyCellEdit: function (_431, _432, _433) {
		if (this.grid.canEdit(_432, _433)) {
			this.grid.doApplyCellEdit(_431, _433, _432.field);
		}
	}, applyRowEdit: function () {
		this.grid.doApplyEdit(this.info.rowIndex, this.info.cell.field);
	}, apply: function () {
		if (this.isEditing()) {
			this.grid.beginUpdate();
			this.editorApply();
			this.applyRowEdit();
			this.info = {};
			this.grid.endUpdate();
			this.grid.focus.focusGrid();
			this._doCatchBoomerang();
		}
	}, cancel: function () {
		if (this.isEditing()) {
			this.grid.beginUpdate();
			this.editorCancel();
			this.info = {};
			this.grid.endUpdate();
			this.grid.focus.focusGrid();
			this._doCatchBoomerang();
		}
	}, save: function (_434, _435) {
		var c = this.info.cell;
		if (this.isEditRow(_434) && (!_435 || c.view == _435) && c.editable) {
			c.save(c, this.info.rowIndex);
		}
	}, restore: function (_436, _437) {
		var c = this.info.cell;
		if (this.isEditRow(_437) && c.view == _436 && c.editable) {
			c.restore(c, this.info.rowIndex);
		}
	}});
}
if (!dojo._hasResource["dojox.grid.Selection"]) {
	dojo._hasResource["dojox.grid.Selection"] = true;
	dojo.provide("dojox.grid.Selection");
	dojo.declare("dojox.grid.Selection", null, {constructor: function (_438) {
		this.grid = _438;
		this.selected = [];
		this.setMode(_438.selectionMode);
	}, mode: "extended", selected: null, updating: 0, selectedIndex: -1, setMode: function (mode) {
		if (this.selected.length) {
			this.deselectAll();
		}
		if (mode != "extended" && mode != "multiple" && mode != "single" && mode != "none") {
			this.mode = "extended";
		} else {
			this.mode = mode;
		}
	}, onCanSelect: function (_439) {
		return this.grid.onCanSelect(_439);
	}, onCanDeselect: function (_43a) {
		return this.grid.onCanDeselect(_43a);
	}, onSelected: function (_43b) {
	}, onDeselected: function (_43c) {
	}, onChanging: function () {
	}, onChanged: function () {
	}, isSelected: function (_43d) {
		if (this.mode == "none") {
			return false;
		}
		return this.selected[_43d];
	}, getFirstSelected: function () {
		if (!this.selected.length || this.mode == "none") {
			return -1;
		}
		for (var i = 0, l = this.selected.length; i < l; i++) {
			if (this.selected[i]) {
				return i;
			}
		}
		return -1;
	}, getNextSelected: function (_43e) {
		if (this.mode == "none") {
			return -1;
		}
		for (var i = _43e + 1, l = this.selected.length; i < l; i++) {
			if (this.selected[i]) {
				return i;
			}
		}
		return -1;
	}, getSelected: function () {
		var _43f = [];
		for (var i = 0, l = this.selected.length; i < l; i++) {
			if (this.selected[i]) {
				_43f.push(i);
			}
		}
		return _43f;
	}, getSelectedCount: function () {
		var c = 0;
		for (var i = 0; i < this.selected.length; i++) {
			if (this.selected[i]) {
				c++;
			}
		}
		return c;
	}, _beginUpdate: function () {
		if (this.updating === 0) {
			this.onChanging();
		}
		this.updating++;
	}, _endUpdate: function () {
		this.updating--;
		if (this.updating === 0) {
			this.onChanged();
		}
	}, select: function (_440) {
		if (this.mode == "none") {
			return;
		}
		if (this.mode != "multiple") {
			this.deselectAll(_440);
			this.addToSelection(_440);
		} else {
			this.toggleSelect(_440);
		}
	}, addToSelection: function (_441) {
		if (this.mode == "none") {
			return;
		}
		if (dojo.isArray(_441)) {
			dojo.forEach(_441, this.addToSelection, this);
			return;
		}
		_441 = Number(_441);
		if (this.selected[_441]) {
			this.selectedIndex = _441;
		} else {
			if (this.onCanSelect(_441) !== false) {
				this.selectedIndex = _441;
				var _442 = this.grid.getRowNode(_441);
				if (_442) {
					dojo.attr(_442, "aria-selected", "true");
				}
				this._beginUpdate();
				this.selected[_441] = true;
				this.onSelected(_441);
				this._endUpdate();
			}
		}
	}, deselect: function (_443) {
		if (this.mode == "none") {
			return;
		}
		if (dojo.isArray(_443)) {
			dojo.forEach(_443, this.deselect, this);
			return;
		}
		_443 = Number(_443);
		if (this.selectedIndex == _443) {
			this.selectedIndex = -1;
		}
		if (this.selected[_443]) {
			if (this.onCanDeselect(_443) === false) {
				return;
			}
			var _444 = this.grid.getRowNode(_443);
			if (_444) {
				dojo.attr(_444, "aria-selected", "false");
			}
			this._beginUpdate();
			delete this.selected[_443];
			this.onDeselected(_443);
			this._endUpdate();
		}
	}, setSelected: function (_445, _446) {
		this[(_446 ? "addToSelection" : "deselect")](_445);
	}, toggleSelect: function (_447) {
		if (dojo.isArray(_447)) {
			dojo.forEach(_447, this.toggleSelect, this);
			return;
		}
		this.setSelected(_447, !this.selected[_447]);
	}, _range: function (_448, inTo, func) {
		var s = (_448 >= 0 ? _448 : inTo), e = inTo;
		if (s > e) {
			e = s;
			s = inTo;
		}
		for (var i = s; i <= e; i++) {
			func(i);
		}
	}, selectRange: function (_449, inTo) {
		this._range(_449, inTo, dojo.hitch(this, "addToSelection"));
	}, deselectRange: function (_44a, inTo) {
		this._range(_44a, inTo, dojo.hitch(this, "deselect"));
	}, insert: function (_44b) {
		this.selected.splice(_44b, 0, false);
		if (this.selectedIndex >= _44b) {
			this.selectedIndex++;
		}
	}, remove: function (_44c) {
		this.selected.splice(_44c, 1);
		if (this.selectedIndex >= _44c) {
			this.selectedIndex--;
		}
	}, deselectAll: function (_44d) {
		for (var i in this.selected) {
			if ((i != _44d) && (this.selected[i] === true)) {
				this.deselect(i);
			}
		}
	}, clickSelect: function (_44e, _44f, _450) {
		if (this.mode == "none") {
			return;
		}
		this._beginUpdate();
		if (this.mode != "extended") {
			this.select(_44e);
		} else {
			var _451 = this.selectedIndex;
			if (!_44f) {
				this.deselectAll(_44e);
			}
			if (_450) {
				this.selectRange(_451, _44e);
			} else {
				if (_44f) {
					this.toggleSelect(_44e);
				} else {
					this.addToSelection(_44e);
				}
			}
		}
		this._endUpdate();
	}, clickSelectEvent: function (e) {
		this.clickSelect(e.rowIndex, dojo.isCopyKey(e), e.shiftKey);
	}, clear: function () {
		this._beginUpdate();
		this.deselectAll();
		this._endUpdate();
	}});
}
if (!dojo._hasResource["dojox.grid._Events"]) {
	dojo._hasResource["dojox.grid._Events"] = true;
	dojo.provide("dojox.grid._Events");
	dojo.declare("dojox.grid._Events", null, {cellOverClass: "dojoxGridCellOver", onKeyEvent: function (e) {
		this.dispatchKeyEvent(e);
	}, onContentEvent: function (e) {
		this.dispatchContentEvent(e);
	}, onHeaderEvent: function (e) {
		this.dispatchHeaderEvent(e);
	}, onStyleRow: function (_452) {
		var i = _452;
		i.customClasses += (i.odd ? " dojoxGridRowOdd" : "") + (i.selected ? " dojoxGridRowSelected" : "") + (i.over ? " dojoxGridRowOver" : "");
		this.focus.styleRow(_452);
		this.edit.styleRow(_452);
	}, onKeyDown: function (e) {
		if (e.altKey || e.metaKey) {
			return;
		}
		var dk = dojo.keys;
		var _453;
		switch (e.keyCode) {
			case dk.ESCAPE:
				this.edit.cancel();
				break;
			case dk.ENTER:
				if (!this.edit.isEditing()) {
					_453 = this.focus.getHeaderIndex();
					if (_453 >= 0) {
						this.setSortIndex(_453);
						break;
					} else {
						this.selection.clickSelect(this.focus.rowIndex, dojo.isCopyKey(e), e.shiftKey);
					}
					dojo.stopEvent(e);
				}
				if (!e.shiftKey) {
					var _454 = this.edit.isEditing();
					this.edit.apply();
					if (!_454) {
						this.edit.setEditCell(this.focus.cell, this.focus.rowIndex);
					}
				}
				if (!this.edit.isEditing()) {
					var _455 = this.focus.focusView || this.views.views[0];
					_455.content.decorateEvent(e);
					this.onRowClick(e);
					dojo.stopEvent(e);
				}
				break;
			case dk.SPACE:
				if (!this.edit.isEditing()) {
					_453 = this.focus.getHeaderIndex();
					if (_453 >= 0) {
						this.setSortIndex(_453);
						break;
					} else {
						this.selection.clickSelect(this.focus.rowIndex, dojo.isCopyKey(e), e.shiftKey);
					}
					dojo.stopEvent(e);
				}
				break;
			case dk.TAB:
				this.focus[e.shiftKey ? "previousKey" : "nextKey"](e);
				break;
			case dk.LEFT_ARROW:
			case dk.RIGHT_ARROW:
				if (!this.edit.isEditing()) {
					var _456 = e.keyCode;
					dojo.stopEvent(e);
					_453 = this.focus.getHeaderIndex();
					if (_453 >= 0 && (e.shiftKey && e.ctrlKey)) {
						this.focus.colSizeAdjust(e, _453, (_456 == dk.LEFT_ARROW ? -1 : 1) * 5);
					} else {
						var _457 = (_456 == dk.LEFT_ARROW) ? 1 : -1;
						if (dojo._isBodyLtr()) {
							_457 *= -1;
						}
						this.focus.move(0, _457);
					}
				}
				break;
			case dk.UP_ARROW:
				if (!this.edit.isEditing() && this.focus.rowIndex !== 0) {
					dojo.stopEvent(e);
					this.focus.move(-1, 0);
				}
				break;
			case dk.DOWN_ARROW:
				if (!this.edit.isEditing() && this.focus.rowIndex + 1 != this.rowCount) {
					dojo.stopEvent(e);
					this.focus.move(1, 0);
				}
				break;
			case dk.PAGE_UP:
				if (!this.edit.isEditing() && this.focus.rowIndex !== 0) {
					dojo.stopEvent(e);
					if (this.focus.rowIndex != this.scroller.firstVisibleRow + 1) {
						this.focus.move(this.scroller.firstVisibleRow - this.focus.rowIndex, 0);
					} else {
						this.setScrollTop(this.scroller.findScrollTop(this.focus.rowIndex - 1));
						this.focus.move(this.scroller.firstVisibleRow - this.scroller.lastVisibleRow + 1, 0);
					}
				}
				break;
			case dk.PAGE_DOWN:
				if (!this.edit.isEditing() && this.focus.rowIndex + 1 != this.rowCount) {
					dojo.stopEvent(e);
					if (this.focus.rowIndex != this.scroller.lastVisibleRow - 1) {
						this.focus.move(this.scroller.lastVisibleRow - this.focus.rowIndex - 1, 0);
					} else {
						this.setScrollTop(this.scroller.findScrollTop(this.focus.rowIndex + 1));
						this.focus.move(this.scroller.lastVisibleRow - this.scroller.firstVisibleRow - 1, 0);
					}
				}
				break;
			default:
				break;
		}
	}, onMouseOver: function (e) {
		e.rowIndex == -1 ? this.onHeaderCellMouseOver(e) : this.onCellMouseOver(e);
	}, onMouseOut: function (e) {
		e.rowIndex == -1 ? this.onHeaderCellMouseOut(e) : this.onCellMouseOut(e);
	}, onMouseDown: function (e) {
		e.rowIndex == -1 ? this.onHeaderCellMouseDown(e) : this.onCellMouseDown(e);
	}, onMouseOverRow: function (e) {
		if (!this.rows.isOver(e.rowIndex)) {
			this.rows.setOverRow(e.rowIndex);
			e.rowIndex == -1 ? this.onHeaderMouseOver(e) : this.onRowMouseOver(e);
		}
	}, onMouseOutRow: function (e) {
		if (this.rows.isOver(-1)) {
			this.onHeaderMouseOut(e);
		} else {
			if (!this.rows.isOver(-2)) {
				this.rows.setOverRow(-2);
				this.onRowMouseOut(e);
			}
		}
	}, onMouseDownRow: function (e) {
		if (e.rowIndex != -1) {
			this.onRowMouseDown(e);
		}
	}, onCellMouseOver: function (e) {
		if (e.cellNode) {
			dojo.addClass(e.cellNode, this.cellOverClass);
		}
	}, onCellMouseOut: function (e) {
		if (e.cellNode) {
			dojo.removeClass(e.cellNode, this.cellOverClass);
		}
	}, onCellMouseDown: function (e) {
	}, onCellClick: function (e) {
		this._click[0] = this._click[1];
		this._click[1] = e;
		if (!this.edit.isEditCell(e.rowIndex, e.cellIndex)) {
			this.focus.setFocusCell(e.cell, e.rowIndex);
		}
		this.onRowClick(e);
	}, onCellDblClick: function (e) {
		if (this._click.length > 1 && dojo.isIE) {
			this.edit.setEditCell(this._click[1].cell, this._click[1].rowIndex);
		} else {
			if (this._click.length > 1 && this._click[0].rowIndex != this._click[1].rowIndex) {
				this.edit.setEditCell(this._click[0].cell, this._click[0].rowIndex);
			} else {
				this.edit.setEditCell(e.cell, e.rowIndex);
			}
		}
		this.onRowDblClick(e);
	}, onCellContextMenu: function (e) {
		this.onRowContextMenu(e);
	}, onCellFocus: function (_458, _459) {
		this.edit.cellFocus(_458, _459);
	}, onRowClick: function (e) {
		this.edit.rowClick(e);
		this.selection.clickSelectEvent(e);
	}, onRowDblClick: function (e) {
	}, onRowMouseOver: function (e) {
	}, onRowMouseOut: function (e) {
	}, onRowMouseDown: function (e) {
	}, onRowContextMenu: function (e) {
		dojo.stopEvent(e);
	}, onHeaderMouseOver: function (e) {
	}, onHeaderMouseOut: function (e) {
	}, onHeaderCellMouseOver: function (e) {
		if (e.cellNode) {
			dojo.addClass(e.cellNode, this.cellOverClass);
		}
	}, onHeaderCellMouseOut: function (e) {
		if (e.cellNode) {
			dojo.removeClass(e.cellNode, this.cellOverClass);
		}
	}, onHeaderCellMouseDown: function (e) {
	}, onHeaderClick: function (e) {
	}, onHeaderCellClick: function (e) {
		this.setSortIndex(e.cell.index);
		this.onHeaderClick(e);
	}, onHeaderDblClick: function (e) {
	}, onHeaderCellDblClick: function (e) {
		this.onHeaderDblClick(e);
	}, onHeaderCellContextMenu: function (e) {
		this.onHeaderContextMenu(e);
	}, onHeaderContextMenu: function (e) {
		if (!this.headerMenu) {
			dojo.stopEvent(e);
		}
	}, onStartEdit: function (_45a, _45b) {
	}, onApplyCellEdit: function (_45c, _45d, _45e) {
	}, onCancelEdit: function (_45f) {
	}, onApplyEdit: function (_460) {
	}, onCanSelect: function (_461) {
		return true;
	}, onCanDeselect: function (_462) {
		return true;
	}, onSelected: function (_463) {
		this.updateRowStyles(_463);
	}, onDeselected: function (_464) {
		this.updateRowStyles(_464);
	}, onSelectionChanged: function () {
	}});
}
if (!dojo._hasResource["dojo.i18n"]) {
	dojo._hasResource["dojo.i18n"] = true;
	dojo.provide("dojo.i18n");
	dojo.getObject("i18n", true, dojo);
	dojo.i18n.getLocalization = dojo.i18n.getLocalization || function (_465, _466, _467) {
		_467 = dojo.i18n.normalizeLocale(_467);
		var _468 = _467.split("-");
		var _469 = [_465, "nls", _466].join(".");
		var _46a = dojo._loadedModules[_469];
		if (_46a) {
			var _46b;
			for (var i = _468.length; i > 0; i--) {
				var loc = _468.slice(0, i).join("_");
				if (_46a[loc]) {
					_46b = _46a[loc];
					break;
				}
			}
			if (!_46b) {
				_46b = _46a.ROOT;
			}
			if (_46b) {
				var _46c = function () {
				};
				_46c.prototype = _46b;
				return new _46c();
			}
		}
		throw new Error("Bundle not found: " + _466 + " in " + _465 + " , locale=" + _467);
	};
	dojo.i18n.normalizeLocale = function (_46d) {
		var _46e = _46d ? _46d.toLowerCase() : dojo.locale;
		if (_46e == "root") {
			_46e = "ROOT";
		}
		return _46e;
	};
	dojo.i18n._requireLocalization = function (_46f, _470, _471, _472) {
		var _473 = dojo.i18n.normalizeLocale(_471);
		var _474 = [_46f, "nls", _470].join(".");
		var _475 = "";
		if (_472) {
			var _476 = _472.split(",");
			for (var i = 0; i < _476.length; i++) {
				if (_473["indexOf"](_476[i]) == 0) {
					if (_476[i].length > _475.length) {
						_475 = _476[i];
					}
				}
			}
			if (!_475) {
				_475 = "ROOT";
			}
		}
		var _477 = _472 ? _475 : _473;
		var _478 = dojo._loadedModules[_474];
		var _479 = null;
		if (_478) {
			if (dojo.config.localizationComplete && _478._built) {
				return;
			}
			var _47a = _477.replace(/-/g, "_");
			var _47b = _474 + "." + _47a;
			_479 = dojo._loadedModules[_47b];
		}
		if (!_479) {
			_478 = dojo["provide"](_474);
			var syms = dojo._getModuleSymbols(_46f);
			var _47c = syms.concat("nls").join("/");
			var _47d;
			dojo.i18n._searchLocalePath(_477, _472, function (loc) {
				var _47e = loc.replace(/-/g, "_");
				var _47f = _474 + "." + _47e;
				var _480 = false;
				if (!dojo._loadedModules[_47f]) {
					dojo["provide"](_47f);
					var _481 = [_47c];
					if (loc != "ROOT") {
						_481.push(loc);
					}
					_481.push(_470);
					var _482 = _481.join("/") + ".js";
					_480 = dojo._loadPath(_482, null, function (hash) {
						hash = hash.root || hash;
						var _483 = function () {
						};
						_483.prototype = _47d;
						_478[_47e] = new _483();
						for (var j in hash) {
							_478[_47e][j] = hash[j];
						}
					});
				} else {
					_480 = true;
				}
				if (_480 && _478[_47e]) {
					_47d = _478[_47e];
				} else {
					_478[_47e] = _47d;
				}
				if (_472) {
					return true;
				}
			});
		}
		if (_472 && _473 != _475) {
			_478[_473.replace(/-/g, "_")] = _478[_475.replace(/-/g, "_")];
		}
	};
	(function () {
		var _484 = dojo.config.extraLocale;
		if (_484) {
			if (!_484 instanceof Array) {
				_484 = [_484];
			}
			var req = dojo.i18n._requireLocalization;
			dojo.i18n._requireLocalization = function (m, b, _485, _486) {
				req(m, b, _485, _486);
				if (_485) {
					return;
				}
				for (var i = 0; i < _484.length; i++) {
					req(m, b, _484[i], _486);
				}
			};
		}
	})();
	dojo.i18n._searchLocalePath = function (_487, down, _488) {
		_487 = dojo.i18n.normalizeLocale(_487);
		var _489 = _487.split("-");
		var _48a = [];
		for (var i = _489.length; i > 0; i--) {
			_48a.push(_489.slice(0, i).join("-"));
		}
		_48a.push(false);
		if (down) {
			_48a.reverse();
		}
		for (var j = _48a.length - 1; j >= 0; j--) {
			var loc = _48a[j] || "ROOT";
			var stop = _488(loc);
			if (stop) {
				break;
			}
		}
	};
	dojo.i18n._preloadLocalizations = function (_48b, _48c) {
		function _48d(_48e) {
			_48e = dojo.i18n.normalizeLocale(_48e);
			dojo.i18n._searchLocalePath(_48e, true, function (loc) {
				for (var i = 0; i < _48c.length; i++) {
					if (_48c[i] == loc) {
						dojo["require"](_48b + "_" + loc);
						return true;
					}
				}
				return false;
			});
		};
		_48d();
		var _48f = dojo.config.extraLocale || [];
		for (var i = 0; i < _48f.length; i++) {
			_48d(_48f[i]);
		}
	};
}
if (!dojo._hasResource["dojox.grid._Grid"]) {
	dojo._hasResource["dojox.grid._Grid"] = true;
	dojo.provide("dojox.grid._Grid");
	(function () {
		if (!dojo.isCopyKey) {
			dojo.isCopyKey = dojo.dnd.getCopyKeyState;
		}
		dojo.declare("dojox.grid._Grid", [dijit._Widget, dijit._Templated, dojox.grid._Events], {templateString: "<div hidefocus=\"hidefocus\" role=\"grid\" dojoAttachEvent=\"onmouseout:_mouseOut\">\n\t<div class=\"dojoxGridMasterHeader\" dojoAttachPoint=\"viewsHeaderNode\" role=\"presentation\"></div>\n\t<div class=\"dojoxGridMasterView\" dojoAttachPoint=\"viewsNode\" role=\"presentation\"></div>\n\t<div class=\"dojoxGridMasterMessages\" style=\"display: none;\" dojoAttachPoint=\"messagesNode\"></div>\n\t<span dojoAttachPoint=\"lastFocusNode\" tabindex=\"0\"></span>\n</div>\n", classTag: "dojoxGrid", rowCount: 5, keepRows: 75, rowsPerPage: 25, autoWidth: false, initialWidth: "", autoHeight: "", rowHeight: 0, autoRender: true, defaultHeight: "15em", height: "", structure: null, elasticView: -1, singleClickEdit: false, selectionMode: "extended", rowSelector: "", columnReordering: false, headerMenu: null, placeholderLabel: "GridColumns", selectable: false, _click: null, loadingMessage: "<span class='dojoxGridLoading'>${loadingState}</span>", errorMessage: "<span class='dojoxGridError'>${errorState}</span>", noDataMessage: "", escapeHTMLInData: true, formatterScope: null, editable: false, sortInfo: 0, themeable: true, _placeholders: null, _layoutClass: dojox.grid._Layout, buildRendering: function () {
			this.inherited(arguments);
			if (!this.domNode.getAttribute("tabIndex")) {
				this.domNode.tabIndex = "0";
			}
			this.createScroller();
			this.createLayout();
			this.createViews();
			this.createManagers();
			this.createSelection();
			this.connect(this.selection, "onSelected", "onSelected");
			this.connect(this.selection, "onDeselected", "onDeselected");
			this.connect(this.selection, "onChanged", "onSelectionChanged");
			dojox.html.metrics.initOnFontResize();
			this.connect(dojox.html.metrics, "onFontResize", "textSizeChanged");
			dojox.grid.util.funnelEvents(this.domNode, this, "doKeyEvent", dojox.grid.util.keyEvents);
			if (this.selectionMode != "none") {
				dojo.attr(this.domNode, "aria-multiselectable", this.selectionMode == "single" ? "false" : "true");
			}
			dojo.addClass(this.domNode, this.classTag);
			if (!this.isLeftToRight()) {
				dojo.addClass(this.domNode, this.classTag + "Rtl");
			}
		}, postMixInProperties: function () {
			this.inherited(arguments);
			var _490 = dojo.i18n.getLocalization("dijit", "loading", this.lang);
			this.loadingMessage = dojo.string.substitute(this.loadingMessage, _490);
			this.errorMessage = dojo.string.substitute(this.errorMessage, _490);
			if (this.srcNodeRef && this.srcNodeRef.style.height) {
				this.height = this.srcNodeRef.style.height;
			}
			this._setAutoHeightAttr(this.autoHeight, true);
			this.lastScrollTop = this.scrollTop = 0;
		}, postCreate: function () {
			this._placeholders = [];
			this._setHeaderMenuAttr(this.headerMenu);
			this._setStructureAttr(this.structure);
			this._click = [];
			this.inherited(arguments);
			if (this.domNode && this.autoWidth && this.initialWidth) {
				this.domNode.style.width = this.initialWidth;
			}
			if (this.domNode && !this.editable) {
				dojo.attr(this.domNode, "aria-readonly", "true");
			}
		}, destroy: function () {
			this.domNode.onReveal = null;
			this.domNode.onSizeChange = null;
			delete this._click;
			this.edit.destroy();
			delete this.edit;
			this.views.destroyViews();
			if (this.scroller) {
				this.scroller.destroy();
				delete this.scroller;
			}
			if (this.focus) {
				this.focus.destroy();
				delete this.focus;
			}
			if (this.headerMenu && this._placeholders.length) {
				dojo.forEach(this._placeholders, function (p) {
					p.unReplace(true);
				});
				this.headerMenu.unBindDomNode(this.viewsHeaderNode);
			}
			this.inherited(arguments);
		}, _setAutoHeightAttr: function (ah, _491) {
			if (typeof ah == "string") {
				if (!ah || ah == "false") {
					ah = false;
				} else {
					if (ah == "true") {
						ah = true;
					} else {
						ah = window.parseInt(ah, 10);
					}
				}
			}
			if (typeof ah == "number") {
				if (isNaN(ah)) {
					ah = false;
				}
				if (ah < 0) {
					ah = true;
				} else {
					if (ah === 0) {
						ah = false;
					}
				}
			}
			this.autoHeight = ah;
			if (typeof ah == "boolean") {
				this._autoHeight = ah;
			} else {
				if (typeof ah == "number") {
					this._autoHeight = (ah >= this.get("rowCount"));
				} else {
					this._autoHeight = false;
				}
			}
			if (this._started && !_491) {
				this.render();
			}
		}, _getRowCountAttr: function () {
			return this.updating && this.invalidated && this.invalidated.rowCount != undefined ? this.invalidated.rowCount : this.rowCount;
		}, textSizeChanged: function () {
			this.render();
		}, sizeChange: function () {
			this.update();
		}, createManagers: function () {
			this.rows = new dojox.grid._RowManager(this);
			this.focus = new dojox.grid._FocusManager(this);
			this.edit = new dojox.grid._EditManager(this);
		}, createSelection: function () {
			this.selection = new dojox.grid.Selection(this);
		}, createScroller: function () {
			this.scroller = new dojox.grid._Scroller();
			this.scroller.grid = this;
			this.scroller.renderRow = dojo.hitch(this, "renderRow");
			this.scroller.removeRow = dojo.hitch(this, "rowRemoved");
		}, createLayout: function () {
			this.layout = new this._layoutClass(this);
			this.connect(this.layout, "moveColumn", "onMoveColumn");
		}, onMoveColumn: function () {
			this.render();
		}, onResizeColumn: function (_492) {
		}, createViews: function () {
			this.views = new dojox.grid._ViewManager(this);
			this.views.createView = dojo.hitch(this, "createView");
		}, createView: function (_493, idx) {
			var c = dojo.getObject(_493);
			var view = new c({grid: this, index: idx});
			this.viewsNode.appendChild(view.domNode);
			this.viewsHeaderNode.appendChild(view.headerNode);
			this.views.addView(view);
			dojo.attr(this.domNode, "align", dojo._isBodyLtr() ? "left" : "right");
			return view;
		}, buildViews: function () {
			for (var i = 0, vs; (vs = this.layout.structure[i]); i++) {
				this.createView(vs.type || dojox._scopeName + ".grid._View", i).setStructure(vs);
			}
			this.scroller.setContentNodes(this.views.getContentNodes());
		}, _setStructureAttr: function (_494) {
			var s = _494;
			if (s && dojo.isString(s)) {
				dojo.deprecated("dojox.grid._Grid.set('structure', 'objVar')", "use dojox.grid._Grid.set('structure', objVar) instead", "2.0");
				s = dojo.getObject(s);
			}
			this.structure = s;
			if (!s) {
				if (this.layout.structure) {
					s = this.layout.structure;
				} else {
					return;
				}
			}
			this.views.destroyViews();
			this.focus.focusView = null;
			if (s !== this.layout.structure) {
				this.layout.setStructure(s);
			}
			this._structureChanged();
		}, setStructure: function (_495) {
			dojo.deprecated("dojox.grid._Grid.setStructure(obj)", "use dojox.grid._Grid.set('structure', obj) instead.", "2.0");
			this._setStructureAttr(_495);
		}, getColumnTogglingItems: function () {
			return dojo.map(this.layout.cells, function (cell) {
				if (!cell.menuItems) {
					cell.menuItems = [];
				}
				var self = this;
				var item = new dijit.CheckedMenuItem({label: cell.name, checked: !cell.hidden, _gridCell: cell, onChange: function (_496) {
					if (self.layout.setColumnVisibility(this._gridCell.index, _496)) {
						var _497 = this._gridCell.menuItems;
						if (_497.length > 1) {
							dojo.forEach(_497, function (item) {
								if (item !== this) {
									item.setAttribute("checked", _496);
								}
							}, this);
						}
						_496 = dojo.filter(self.layout.cells, function (c) {
							if (c.menuItems.length > 1) {
								dojo.forEach(c.menuItems, "item.set('disabled', false);");
							} else {
								c.menuItems[0].set("disabled", false);
							}
							return !c.hidden;
						});
						if (_496.length == 1) {
							dojo.forEach(_496[0].menuItems, "item.set('disabled', true);");
						}
					}
				}, destroy: function () {
					var _498 = dojo.indexOf(this._gridCell.menuItems, this);
					this._gridCell.menuItems.splice(_498, 1);
					delete this._gridCell;
					dijit.CheckedMenuItem.prototype.destroy.apply(this, arguments);
				}});
				cell.menuItems.push(item);
				return item;
			}, this);
		}, _setHeaderMenuAttr: function (menu) {
			if (this._placeholders && this._placeholders.length) {
				dojo.forEach(this._placeholders, function (p) {
					p.unReplace(true);
				});
				this._placeholders = [];
			}
			if (this.headerMenu) {
				this.headerMenu.unBindDomNode(this.viewsHeaderNode);
			}
			this.headerMenu = menu;
			if (!menu) {
				return;
			}
			this.headerMenu.bindDomNode(this.viewsHeaderNode);
			if (this.headerMenu.getPlaceholders) {
				this._placeholders = this.headerMenu.getPlaceholders(this.placeholderLabel);
			}
		}, setHeaderMenu: function (menu) {
			dojo.deprecated("dojox.grid._Grid.setHeaderMenu(obj)", "use dojox.grid._Grid.set('headerMenu', obj) instead.", "2.0");
			this._setHeaderMenuAttr(menu);
		}, setupHeaderMenu: function () {
			if (this._placeholders && this._placeholders.length) {
				dojo.forEach(this._placeholders, function (p) {
					if (p._replaced) {
						p.unReplace(true);
					}
					p.replace(this.getColumnTogglingItems());
				}, this);
			}
		}, _fetch: function (_499) {
			this.setScrollTop(0);
		}, getItem: function (_49a) {
			return null;
		}, showMessage: function (_49b) {
			if (_49b) {
				this.messagesNode.innerHTML = _49b;
				this.messagesNode.style.display = "";
			} else {
				this.messagesNode.innerHTML = "";
				this.messagesNode.style.display = "none";
			}
		}, _structureChanged: function () {
			this.buildViews();
			if (this.autoRender && this._started) {
				this.render();
			}
		}, hasLayout: function () {
			return this.layout.cells.length;
		}, resize: function (_49c, _49d) {
			this._pendingChangeSize = _49c;
			this._pendingResultSize = _49d;
			this.sizeChange();
		}, _getPadBorder: function () {
			this._padBorder = this._padBorder || dojo._getPadBorderExtents(this.domNode);
			return this._padBorder;
		}, _getHeaderHeight: function () {
			var vns = this.viewsHeaderNode.style, t = vns.display == "none" ? 0 : this.views.measureHeader();
			vns.height = t + "px";
			this.views.normalizeHeaderNodeHeight();
			return t;
		}, _resize: function (_49e, _49f) {
			_49e = _49e || this._pendingChangeSize;
			_49f = _49f || this._pendingResultSize;
			delete this._pendingChangeSize;
			delete this._pendingResultSize;
			if (!this.domNode) {
				return;
			}
			var pn = this.domNode.parentNode;
			if (!pn || pn.nodeType != 1 || !this.hasLayout() || pn.style.visibility == "hidden" || pn.style.display == "none") {
				return;
			}
			var _4a0 = this._getPadBorder();
			var hh = undefined;
			var h;
			if (this._autoHeight) {
				this.domNode.style.height = "auto";
			} else {
				if (typeof this.autoHeight == "number") {
					h = hh = this._getHeaderHeight();
					h += (this.scroller.averageRowHeight * this.autoHeight);
					this.domNode.style.height = h + "px";
				} else {
					if (this.domNode.clientHeight <= _4a0.h) {
						if (pn == document.body) {
							this.domNode.style.height = this.defaultHeight;
						} else {
							if (this.height) {
								this.domNode.style.height = this.height;
							} else {
								this.fitTo = "parent";
							}
						}
					}
				}
			}
			if (_49f) {
				_49e = _49f;
			}
			if (_49e) {
				dojo.marginBox(this.domNode, _49e);
				this.height = this.domNode.style.height;
				delete this.fitTo;
			} else {
				if (this.fitTo == "parent") {
					h = this._parentContentBoxHeight = this._parentContentBoxHeight || dojo._getContentBox(pn).h;
					this.domNode.style.height = Math.max(0, h) + "px";
				}
			}
			var _4a1 = dojo.some(this.views.views, function (v) {
				return v.flexCells;
			});
			if (!this._autoHeight && (h || dojo._getContentBox(this.domNode).h) === 0) {
				this.viewsHeaderNode.style.display = "none";
			} else {
				this.viewsHeaderNode.style.display = "block";
				if (!_4a1 && hh === undefined) {
					hh = this._getHeaderHeight();
				}
			}
			if (_4a1) {
				hh = undefined;
			}
			this.adaptWidth();
			this.adaptHeight(hh);
			this.postresize();
		}, adaptWidth: function () {
			var _4a2 = (!this.initialWidth && this.autoWidth);
			var w = _4a2 ? 0 : this.domNode.clientWidth || (this.domNode.offsetWidth - this._getPadBorder().w), vw = this.views.arrange(1, w);
			this.views.onEach("adaptWidth");
			if (_4a2) {
				this.domNode.style.width = vw + "px";
			}
		}, adaptHeight: function (_4a3) {
			var t = _4a3 === undefined ? this._getHeaderHeight() : _4a3;
			var h = (this._autoHeight ? -1 : Math.max(this.domNode.clientHeight - t, 0) || 0);
			this.views.onEach("setSize", [0, h]);
			this.views.onEach("adaptHeight");
			if (!this._autoHeight) {
				var _4a4 = 0, _4a5 = 0;
				var _4a6 = dojo.filter(this.views.views, function (v) {
					var has = v.hasHScrollbar();
					if (has) {
						_4a4++;
					} else {
						_4a5++;
					}
					return (!has);
				});
				if (_4a4 > 0 && _4a5 > 0) {
					dojo.forEach(_4a6, function (v) {
						v.adaptHeight(true);
					});
				}
			}
			if (this.autoHeight === true || h != -1 || (typeof this.autoHeight == "number" && this.autoHeight >= this.get("rowCount"))) {
				this.scroller.windowHeight = h;
			} else {
				this.scroller.windowHeight = Math.max(this.domNode.clientHeight - t, 0);
			}
		}, startup: function () {
			if (this._started) {
				return;
			}
			this.inherited(arguments);
			if (this.autoRender) {
				this.render();
			}
		}, render: function () {
			if (!this.domNode) {
				return;
			}
			if (!this._started) {
				return;
			}
			if (!this.hasLayout()) {
				this.scroller.init(0, this.keepRows, this.rowsPerPage);
				return;
			}
			this.update = this.defaultUpdate;
			this._render();
		}, _render: function () {
			this.scroller.init(this.get("rowCount"), this.keepRows, this.rowsPerPage);
			this.prerender();
			this.setScrollTop(0);
			this.postrender();
		}, prerender: function () {
			this.keepRows = this._autoHeight ? 0 : this.keepRows;
			this.scroller.setKeepInfo(this.keepRows);
			this.views.render();
			this._resize();
		}, postrender: function () {
			this.postresize();
			this.focus.initFocusView();
			dojo.setSelectable(this.domNode, this.selectable);
		}, postresize: function () {
			if (this._autoHeight) {
				var size = Math.max(this.views.measureContent()) + "px";
				this.viewsNode.style.height = size;
			}
		}, renderRow: function (_4a7, _4a8) {
			this.views.renderRow(_4a7, _4a8, this._skipRowRenormalize);
		}, rowRemoved: function (_4a9) {
			this.views.rowRemoved(_4a9);
		}, invalidated: null, updating: false, beginUpdate: function () {
			this.invalidated = [];
			this.updating = true;
		}, endUpdate: function () {
			this.updating = false;
			var i = this.invalidated, r;
			if (i.all) {
				this.update();
			} else {
				if (i.rowCount != undefined) {
					this.updateRowCount(i.rowCount);
				} else {
					for (r in i) {
						this.updateRow(Number(r));
					}
				}
			}
			this.invalidated = [];
		}, defaultUpdate: function () {
			if (!this.domNode) {
				return;
			}
			if (this.updating) {
				this.invalidated.all = true;
				return;
			}
			this.lastScrollTop = this.scrollTop;
			this.prerender();
			this.scroller.invalidateNodes();
			this.setScrollTop(this.lastScrollTop);
			this.postrender();
		}, update: function () {
			this.render();
		}, updateRow: function (_4aa) {
			_4aa = Number(_4aa);
			if (this.updating) {
				this.invalidated[_4aa] = true;
			} else {
				this.views.updateRow(_4aa);
				this.scroller.rowHeightChanged(_4aa);
			}
		}, updateRows: function (_4ab, _4ac) {
			_4ab = Number(_4ab);
			_4ac = Number(_4ac);
			var i;
			if (this.updating) {
				for (i = 0; i < _4ac; i++) {
					this.invalidated[i + _4ab] = true;
				}
			} else {
				for (i = 0; i < _4ac; i++) {
					this.views.updateRow(i + _4ab, this._skipRowRenormalize);
				}
				this.scroller.rowHeightChanged(_4ab);
			}
		}, updateRowCount: function (_4ad) {
			if (this.updating) {
				this.invalidated.rowCount = _4ad;
			} else {
				this.rowCount = _4ad;
				this._setAutoHeightAttr(this.autoHeight, true);
				if (this.layout.cells.length) {
					this.scroller.updateRowCount(_4ad);
				}
				this._resize();
				if (this.layout.cells.length) {
					this.setScrollTop(this.scrollTop);
				}
			}
		}, updateRowStyles: function (_4ae) {
			this.views.updateRowStyles(_4ae);
		}, getRowNode: function (_4af) {
			if (this.focus.focusView && !(this.focus.focusView instanceof dojox.grid._RowSelector)) {
				return this.focus.focusView.rowNodes[_4af];
			} else {
				for (var i = 0, _4b0; (_4b0 = this.views.views[i]); i++) {
					if (!(_4b0 instanceof dojox.grid._RowSelector)) {
						return _4b0.rowNodes[_4af];
					}
				}
			}
			return null;
		}, rowHeightChanged: function (_4b1) {
			this.views.renormalizeRow(_4b1);
			this.scroller.rowHeightChanged(_4b1);
		}, fastScroll: true, delayScroll: false, scrollRedrawThreshold: (dojo.isIE ? 100 : 50), scrollTo: function (_4b2) {
			if (!this.fastScroll) {
				this.setScrollTop(_4b2);
				return;
			}
			var _4b3 = Math.abs(this.lastScrollTop - _4b2);
			this.lastScrollTop = _4b2;
			if (_4b3 > this.scrollRedrawThreshold || this.delayScroll) {
				this.delayScroll = true;
				this.scrollTop = _4b2;
				this.views.setScrollTop(_4b2);
				if (this._pendingScroll) {
					window.clearTimeout(this._pendingScroll);
				}
				var _4b4 = this;
				this._pendingScroll = window.setTimeout(function () {
					delete _4b4._pendingScroll;
					_4b4.finishScrollJob();
				}, 200);
			} else {
				this.setScrollTop(_4b2);
			}
		}, finishScrollJob: function () {
			this.delayScroll = false;
			this.setScrollTop(this.scrollTop);
		}, setScrollTop: function (_4b5) {
			this.scroller.scroll(this.views.setScrollTop(_4b5));
		}, scrollToRow: function (_4b6) {
			this.setScrollTop(this.scroller.findScrollTop(_4b6) + 1);
		}, styleRowNode: function (_4b7, _4b8) {
			if (_4b8) {
				this.rows.styleRowNode(_4b7, _4b8);
			}
		}, _mouseOut: function (e) {
			this.rows.setOverRow(-2);
		}, getCell: function (_4b9) {
			return this.layout.cells[_4b9];
		}, setCellWidth: function (_4ba, _4bb) {
			this.getCell(_4ba).unitWidth = _4bb;
		}, getCellName: function (_4bc) {
			return "Cell " + _4bc.index;
		}, canSort: function (_4bd) {
		}, sort: function () {
		}, getSortAsc: function (_4be) {
			_4be = _4be == undefined ? this.sortInfo : _4be;
			return Boolean(_4be > 0);
		}, getSortIndex: function (_4bf) {
			_4bf = _4bf == undefined ? this.sortInfo : _4bf;
			return Math.abs(_4bf) - 1;
		}, setSortIndex: function (_4c0, _4c1) {
			var si = _4c0 + 1;
			if (_4c1 != undefined) {
				si *= (_4c1 ? 1 : -1);
			} else {
				if (this.getSortIndex() == _4c0) {
					si = -this.sortInfo;
				}
			}
			this.setSortInfo(si);
		}, setSortInfo: function (_4c2) {
			if (this.canSort(_4c2)) {
				this.sortInfo = _4c2;
				this.sort();
				this.update();
			}
		}, doKeyEvent: function (e) {
			e.dispatch = "do" + e.type;
			this.onKeyEvent(e);
		}, _dispatch: function (m, e) {
			if (m in this) {
				return this[m](e);
			}
			return false;
		}, dispatchKeyEvent: function (e) {
			this._dispatch(e.dispatch, e);
		}, dispatchContentEvent: function (e) {
			this.edit.dispatchEvent(e) || e.sourceView.dispatchContentEvent(e) || this._dispatch(e.dispatch, e);
		}, dispatchHeaderEvent: function (e) {
			e.sourceView.dispatchHeaderEvent(e) || this._dispatch("doheader" + e.type, e);
		}, dokeydown: function (e) {
			this.onKeyDown(e);
		}, doclick: function (e) {
			if (e.cellNode) {
				this.onCellClick(e);
			} else {
				this.onRowClick(e);
			}
		}, dodblclick: function (e) {
			if (e.cellNode) {
				this.onCellDblClick(e);
			} else {
				this.onRowDblClick(e);
			}
		}, docontextmenu: function (e) {
			if (e.cellNode) {
				this.onCellContextMenu(e);
			} else {
				this.onRowContextMenu(e);
			}
		}, doheaderclick: function (e) {
			if (e.cellNode) {
				this.onHeaderCellClick(e);
			} else {
				this.onHeaderClick(e);
			}
		}, doheaderdblclick: function (e) {
			if (e.cellNode) {
				this.onHeaderCellDblClick(e);
			} else {
				this.onHeaderDblClick(e);
			}
		}, doheadercontextmenu: function (e) {
			if (e.cellNode) {
				this.onHeaderCellContextMenu(e);
			} else {
				this.onHeaderContextMenu(e);
			}
		}, doStartEdit: function (_4c3, _4c4) {
			this.onStartEdit(_4c3, _4c4);
		}, doApplyCellEdit: function (_4c5, _4c6, _4c7) {
			this.onApplyCellEdit(_4c5, _4c6, _4c7);
		}, doCancelEdit: function (_4c8) {
			this.onCancelEdit(_4c8);
		}, doApplyEdit: function (_4c9) {
			this.onApplyEdit(_4c9);
		}, addRow: function () {
			this.updateRowCount(this.get("rowCount") + 1);
		}, removeSelectedRows: function () {
			if (this.allItemsSelected) {
				this.updateRowCount(0);
			} else {
				this.updateRowCount(Math.max(0, this.get("rowCount") - this.selection.getSelected().length));
			}
			this.selection.clear();
		}});
		dojox.grid._Grid.markupFactory = function (_4ca, node, ctor, _4cb) {
			var d = dojo;
			var _4cc = function (n) {
				var w = d.attr(n, "width") || "auto";
				if ((w != "auto") && (w.slice(-2) != "em") && (w.slice(-1) != "%")) {
					w = parseInt(w, 10) + "px";
				}
				return w;
			};
			if (!_4ca.structure && node.nodeName.toLowerCase() == "table") {
				_4ca.structure = d.query("> colgroup", node).map(function (cg) {
					var sv = d.attr(cg, "span");
					var v = {noscroll: (d.attr(cg, "noscroll") == "true") ? true : false, __span: (!!sv ? parseInt(sv, 10) : 1), cells: []};
					if (d.hasAttr(cg, "width")) {
						v.width = _4cc(cg);
					}
					return v;
				});
				if (!_4ca.structure.length) {
					_4ca.structure.push({__span: Infinity, cells: []});
				}
				d.query("thead > tr", node).forEach(function (tr, _4cd) {
					var _4ce = 0;
					var _4cf = 0;
					var _4d0;
					var _4d1 = null;
					d.query("> th", tr).map(function (th) {
						if (!_4d1) {
							_4d0 = 0;
							_4d1 = _4ca.structure[0];
						} else {
							if (_4ce >= (_4d0 + _4d1.__span)) {
								_4cf++;
								_4d0 += _4d1.__span;
								var _4d2 = _4d1;
								_4d1 = _4ca.structure[_4cf];
							}
						}
						var cell = {name: d.trim(d.attr(th, "name") || th.innerHTML), colSpan: parseInt(d.attr(th, "colspan") || 1, 10), type: d.trim(d.attr(th, "cellType") || ""), id: d.trim(d.attr(th, "id") || "")};
						_4ce += cell.colSpan;
						var _4d3 = d.attr(th, "rowspan");
						if (_4d3) {
							cell.rowSpan = _4d3;
						}
						if (d.hasAttr(th, "width")) {
							cell.width = _4cc(th);
						}
						if (d.hasAttr(th, "relWidth")) {
							cell.relWidth = window.parseInt(dojo.attr(th, "relWidth"), 10);
						}
						if (d.hasAttr(th, "hidden")) {
							cell.hidden = (d.attr(th, "hidden") == "true" || d.attr(th, "hidden") === true);
						}
						if (_4cb) {
							_4cb(th, cell);
						}
						cell.type = cell.type ? dojo.getObject(cell.type) : dojox.grid.cells.Cell;
						if (cell.type && cell.type.markupFactory) {
							cell.type.markupFactory(th, cell);
						}
						if (!_4d1.cells[_4cd]) {
							_4d1.cells[_4cd] = [];
						}
						_4d1.cells[_4cd].push(cell);
					});
				});
			}
			return new ctor(_4ca, node);
		};
	})();
}
if (!dojo._hasResource["dojox.grid.DataSelection"]) {
	dojo._hasResource["dojox.grid.DataSelection"] = true;
	dojo.provide("dojox.grid.DataSelection");
	dojo.declare("dojox.grid.DataSelection", dojox.grid.Selection, {getFirstSelected: function () {
		var idx = dojox.grid.Selection.prototype.getFirstSelected.call(this);
		if (idx == -1) {
			return null;
		}
		return this.grid.getItem(idx);
	}, getNextSelected: function (_4d4) {
		var _4d5 = this.grid.getItemIndex(_4d4);
		var idx = dojox.grid.Selection.prototype.getNextSelected.call(this, _4d5);
		if (idx == -1) {
			return null;
		}
		return this.grid.getItem(idx);
	}, getSelected: function () {
		var _4d6 = [];
		for (var i = 0, l = this.selected.length; i < l; i++) {
			if (this.selected[i]) {
				_4d6.push(this.grid.getItem(i));
			}
		}
		return _4d6;
	}, addToSelection: function (_4d7) {
		if (this.mode == "none") {
			return;
		}
		var idx = null;
		if (typeof _4d7 == "number" || typeof _4d7 == "string") {
			idx = _4d7;
		} else {
			idx = this.grid.getItemIndex(_4d7);
		}
		dojox.grid.Selection.prototype.addToSelection.call(this, idx);
	}, deselect: function (_4d8) {
		if (this.mode == "none") {
			return;
		}
		var idx = null;
		if (typeof _4d8 == "number" || typeof _4d8 == "string") {
			idx = _4d8;
		} else {
			idx = this.grid.getItemIndex(_4d8);
		}
		dojox.grid.Selection.prototype.deselect.call(this, idx);
	}, deselectAll: function (_4d9) {
		var idx = null;
		if (_4d9 || typeof _4d9 == "number") {
			if (typeof _4d9 == "number" || typeof _4d9 == "string") {
				idx = _4d9;
			} else {
				idx = this.grid.getItemIndex(_4d9);
			}
			dojox.grid.Selection.prototype.deselectAll.call(this, idx);
		} else {
			this.inherited(arguments);
		}
	}});
}
if (!dojo._hasResource["dojox.grid.DataGrid"]) {
	dojo._hasResource["dojox.grid.DataGrid"] = true;
	dojo.provide("dojox.grid.DataGrid");
	dojo.declare("dojox.grid.DataGrid", dojox.grid._Grid, {store: null, query: null, queryOptions: null, fetchText: "...", sortFields: null, updateDelay: 1, items: null, _store_connects: null, _by_idty: null, _by_idx: null, _cache: null, _pages: null, _pending_requests: null, _bop: -1, _eop: -1, _requests: 0, rowCount: 0, _isLoaded: false, _isLoading: false, postCreate: function () {
		this._pages = [];
		this._store_connects = [];
		this._by_idty = {};
		this._by_idx = [];
		this._cache = [];
		this._pending_requests = {};
		this._setStore(this.store);
		this.inherited(arguments);
	}, createSelection: function () {
		this.selection = new dojox.grid.DataSelection(this);
	}, get: function (_4da, _4db) {
		if (_4db && this.field == "_item" && !this.fields) {
			return _4db;
		} else {
			if (_4db && this.fields) {
				var ret = [];
				var s = this.grid.store;
				dojo.forEach(this.fields, function (f) {
					ret = ret.concat(s.getValues(_4db, f));
				});
				return ret;
			} else {
				if (!_4db && typeof _4da === "string") {
					return this.inherited(arguments);
				}
			}
		}
		return (!_4db ? this.defaultValue : (!this.field ? this.value : (this.field == "_item" ? _4db : this.grid.store.getValue(_4db, this.field))));
	}, _checkUpdateStatus: function () {
		if (this.updateDelay > 0) {
			var _4dc = false;
			if (this._endUpdateDelay) {
				clearTimeout(this._endUpdateDelay);
				delete this._endUpdateDelay;
				_4dc = true;
			}
			if (!this.updating) {
				this.beginUpdate();
				_4dc = true;
			}
			if (_4dc) {
				var _4dd = this;
				this._endUpdateDelay = setTimeout(function () {
					delete _4dd._endUpdateDelay;
					_4dd.endUpdate();
				}, this.updateDelay);
			}
		}
	}, _onSet: function (item, _4de, _4df, _4e0) {
		this._checkUpdateStatus();
		var idx = this.getItemIndex(item);
		if (idx > -1) {
			this.updateRow(idx);
		}
	}, _createItem: function (item, _4e1) {
		var idty = this._hasIdentity ? this.store.getIdentity(item) : dojo.toJson(this.query) + ":idx:" + _4e1 + ":sort:" + dojo.toJson(this.getSortProps());
		var o = this._by_idty[idty] = {idty: idty, item: item};
		return o;
	}, _addItem: function (item, _4e2, _4e3) {
		this._by_idx[_4e2] = this._createItem(item, _4e2);
		if (!_4e3) {
			this.updateRow(_4e2);
		}
	}, _onNew: function (item, _4e4) {
		this._checkUpdateStatus();
		var _4e5 = this.get("rowCount");
		this._addingItem = true;
		this.updateRowCount(_4e5 + 1);
		this._addingItem = false;
		this._addItem(item, _4e5);
		this.showMessage();
	}, _onDelete: function (item) {
		this._checkUpdateStatus();
		var idx = this._getItemIndex(item, true);
		if (idx >= 0) {
			this._pages = [];
			this._bop = -1;
			this._eop = -1;
			var o = this._by_idx[idx];
			this._by_idx.splice(idx, 1);
			delete this._by_idty[o.idty];
			this.updateRowCount(this.get("rowCount") - 1);
			if (this.get("rowCount") === 0) {
				this.showMessage(this.noDataMessage);
			}
		}
	}, _onRevert: function () {
		this._refresh();
	}, setStore: function (_4e6, _4e7, _4e8) {
		this._setQuery(_4e7, _4e8);
		this._setStore(_4e6);
		this._refresh(true);
	}, setQuery: function (_4e9, _4ea) {
		this._setQuery(_4e9, _4ea);
		this._refresh(true);
	}, setItems: function (_4eb) {
		this.items = _4eb;
		this._setStore(this.store);
		this._refresh(true);
	}, _setQuery: function (_4ec, _4ed) {
		this.query = _4ec;
		this.queryOptions = _4ed || this.queryOptions;
	}, _setStore: function (_4ee) {
		if (this.store && this._store_connects) {
			dojo.forEach(this._store_connects, this.disconnect, this);
		}
		this.store = _4ee;
		if (this.store) {
			var f = this.store.getFeatures();
			var h = [];
			this._canEdit = !!f["dojo.data.api.Write"] && !!f["dojo.data.api.Identity"];
			this._hasIdentity = !!f["dojo.data.api.Identity"];
			if (!!f["dojo.data.api.Notification"] && !this.items) {
				h.push(this.connect(this.store, "onSet", "_onSet"));
				h.push(this.connect(this.store, "onNew", "_onNew"));
				h.push(this.connect(this.store, "onDelete", "_onDelete"));
			}
			if (this._canEdit) {
				h.push(this.connect(this.store, "revert", "_onRevert"));
			}
			this._store_connects = h;
		}
	}, _onFetchBegin: function (size, req) {
		if (!this.scroller) {
			return;
		}
		if (this.rowCount != size) {
			if (req.isRender) {
				this.scroller.init(size, this.keepRows, this.rowsPerPage);
				this.rowCount = size;
				this._setAutoHeightAttr(this.autoHeight, true);
				this._skipRowRenormalize = true;
				this.prerender();
				this._skipRowRenormalize = false;
			} else {
				this.updateRowCount(size);
			}
		}
		if (!size) {
			this.views.render();
			this._resize();
			this.showMessage(this.noDataMessage);
			this.focus.initFocusView();
		} else {
			this.showMessage();
		}
	}, _onFetchComplete: function (_4ef, req) {
		if (!this.scroller) {
			return;
		}
		if (_4ef && _4ef.length > 0) {
			dojo.forEach(_4ef, function (item, idx) {
				this._addItem(item, req.start + idx, true);
			}, this);
			this.updateRows(req.start, _4ef.length);
			if (req.isRender) {
				this.setScrollTop(0);
				this.postrender();
			} else {
				if (this._lastScrollTop) {
					this.setScrollTop(this._lastScrollTop);
				}
			}
		}
		delete this._lastScrollTop;
		if (!this._isLoaded) {
			this._isLoading = false;
			this._isLoaded = true;
		}
		this._pending_requests[req.start] = false;
	}, _onFetchError: function (err, req) {
		delete this._lastScrollTop;
		if (!this._isLoaded) {
			this._isLoading = false;
			this._isLoaded = true;
			this.showMessage(this.errorMessage);
		}
		this._pending_requests[req.start] = false;
		this.onFetchError(err, req);
	}, onFetchError: function (err, req) {
	}, _fetch: function (_4f0, _4f1) {
		_4f0 = _4f0 || 0;
		if (this.store && !this._pending_requests[_4f0]) {
			if (!this._isLoaded && !this._isLoading) {
				this._isLoading = true;
				this.showMessage(this.loadingMessage);
			}
			this._pending_requests[_4f0] = true;
			try {
				if (this.items) {
					var _4f2 = this.items;
					var _4f3 = this.store;
					this.rowsPerPage = _4f2.length;
					var req = {start: _4f0, count: this.rowsPerPage, isRender: _4f1};
					this._onFetchBegin(_4f2.length, req);
					var _4f4 = 0;
					dojo.forEach(_4f2, function (i) {
						if (!_4f3.isItemLoaded(i)) {
							_4f4++;
						}
					});
					if (_4f4 === 0) {
						this._onFetchComplete(_4f2, req);
					} else {
						var _4f5 = function (item) {
							_4f4--;
							if (_4f4 === 0) {
								this._onFetchComplete(_4f2, req);
							}
						};
						dojo.forEach(_4f2, function (i) {
							if (!_4f3.isItemLoaded(i)) {
								_4f3.loadItem({item: i, onItem: _4f5, scope: this});
							}
						}, this);
					}
				} else {
					this.store.fetch({start: _4f0, count: this.rowsPerPage, query: this.query, sort: this.getSortProps(), queryOptions: this.queryOptions, isRender: _4f1, onBegin: dojo.hitch(this, "_onFetchBegin"), onComplete: dojo.hitch(this, "_onFetchComplete"), onError: dojo.hitch(this, "_onFetchError")});
				}
			} catch (e) {
				this._onFetchError(e, {start: _4f0, count: this.rowsPerPage});
			}
		}
	}, _clearData: function () {
		this.updateRowCount(0);
		this._by_idty = {};
		this._by_idx = [];
		this._pages = [];
		this._bop = this._eop = -1;
		this._isLoaded = false;
		this._isLoading = false;
	}, getItem: function (idx) {
		var data = this._by_idx[idx];
		if (!data || (data && !data.item)) {
			this._preparePage(idx);
			return null;
		}
		return data.item;
	}, getItemIndex: function (item) {
		return this._getItemIndex(item, false);
	}, _getItemIndex: function (item, _4f6) {
		if (!_4f6 && !this.store.isItem(item)) {
			return -1;
		}
		var idty = this._hasIdentity ? this.store.getIdentity(item) : null;
		for (var i = 0, l = this._by_idx.length; i < l; i++) {
			var d = this._by_idx[i];
			if (d && ((idty && d.idty == idty) || (d.item === item))) {
				return i;
			}
		}
		return -1;
	}, filter: function (_4f7, _4f8) {
		this.query = _4f7;
		if (_4f8) {
			this._clearData();
		}
		this._fetch();
	}, _getItemAttr: function (idx, attr) {
		var item = this.getItem(idx);
		return (!item ? this.fetchText : this.store.getValue(item, attr));
	}, _render: function () {
		if (this.domNode.parentNode) {
			this.scroller.init(this.get("rowCount"), this.keepRows, this.rowsPerPage);
			this.prerender();
			this._fetch(0, true);
		}
	}, _requestsPending: function (_4f9) {
		return this._pending_requests[_4f9];
	}, _rowToPage: function (_4fa) {
		return (this.rowsPerPage ? Math.floor(_4fa / this.rowsPerPage) : _4fa);
	}, _pageToRow: function (_4fb) {
		return (this.rowsPerPage ? this.rowsPerPage * _4fb : _4fb);
	}, _preparePage: function (_4fc) {
		if ((_4fc < this._bop || _4fc >= this._eop) && !this._addingItem) {
			var _4fd = this._rowToPage(_4fc);
			this._needPage(_4fd);
			this._bop = _4fd * this.rowsPerPage;
			this._eop = this._bop + (this.rowsPerPage || this.get("rowCount"));
		}
	}, _needPage: function (_4fe) {
		if (!this._pages[_4fe]) {
			this._pages[_4fe] = true;
			this._requestPage(_4fe);
		}
	}, _requestPage: function (_4ff) {
		var row = this._pageToRow(_4ff);
		var _500 = Math.min(this.rowsPerPage, this.get("rowCount") - row);
		if (_500 > 0) {
			this._requests++;
			if (!this._requestsPending(row)) {
				setTimeout(dojo.hitch(this, "_fetch", row, false), 1);
			}
		}
	}, getCellName: function (_501) {
		return _501.field;
	}, _refresh: function (_502) {
		this._clearData();
		this._fetch(0, _502);
	}, sort: function () {
		this.edit.apply();
		this._lastScrollTop = this.scrollTop;
		this._refresh();
	}, canSort: function () {
		return (!this._isLoading);
	}, getSortProps: function () {
		var c = this.getCell(this.getSortIndex());
		if (!c) {
			if (this.sortFields) {
				return this.sortFields;
			}
			return null;
		} else {
			var desc = c["sortDesc"];
			var si = !(this.sortInfo > 0);
			if (typeof desc == "undefined") {
				desc = si;
			} else {
				desc = si ? !desc : desc;
			}
			return [
				{attribute: c.field, descending: desc}
			];
		}
	}, styleRowState: function (_503) {
		if (this.store && this.store.getState) {
			var _504 = this.store.getState(_503.index), c = "";
			for (var i = 0, ss = ["inflight", "error", "inserting"], s; s = ss[i]; i++) {
				if (_504[s]) {
					c = " dojoxGridRow-" + s;
					break;
				}
			}
			_503.customClasses += c;
		}
	}, onStyleRow: function (_505) {
		this.styleRowState(_505);
		this.inherited(arguments);
	}, canEdit: function (_506, _507) {
		return this._canEdit;
	}, _copyAttr: function (idx, attr) {
		var row = {};
		var _508 = {};
		var src = this.getItem(idx);
		return this.store.getValue(src, attr);
	}, doStartEdit: function (_509, _50a) {
		if (!this._cache[_50a]) {
			this._cache[_50a] = this._copyAttr(_50a, _509.field);
		}
		this.onStartEdit(_509, _50a);
	}, doApplyCellEdit: function (_50b, _50c, _50d) {
		this.store.fetchItemByIdentity({identity: this._by_idx[_50c].idty, onItem: dojo.hitch(this, function (item) {
			var _50e = this.store.getValue(item, _50d);
			if (typeof _50e == "number") {
				_50b = isNaN(_50b) ? _50b : parseFloat(_50b);
			} else {
				if (typeof _50e == "boolean") {
					_50b = _50b == "true" ? true : _50b == "false" ? false : _50b;
				} else {
					if (_50e instanceof Date) {
						var _50f = new Date(_50b);
						_50b = isNaN(_50f.getTime()) ? _50b : _50f;
					}
				}
			}
			this.store.setValue(item, _50d, _50b);
			this.onApplyCellEdit(_50b, _50c, _50d);
		})});
	}, doCancelEdit: function (_510) {
		var _511 = this._cache[_510];
		if (_511) {
			this.updateRow(_510);
			delete this._cache[_510];
		}
		this.onCancelEdit.apply(this, arguments);
	}, doApplyEdit: function (_512, _513) {
		var _514 = this._cache[_512];
		this.onApplyEdit(_512);
	}, removeSelectedRows: function () {
		if (this._canEdit) {
			this.edit.apply();
			var fx = dojo.hitch(this, function (_515) {
				if (_515.length) {
					dojo.forEach(_515, this.store.deleteItem, this.store);
					this.selection.clear();
				}
			});
			if (this.allItemsSelected) {
				this.store.fetch({query: this.query, queryOptions: this.queryOptions, onComplete: fx});
			} else {
				fx(this.selection.getSelected());
			}
		}
	}});
	dojox.grid.DataGrid.cell_markupFactory = function (_516, node, _517) {
		var _518 = dojo.trim(dojo.attr(node, "field") || "");
		if (_518) {
			_517.field = _518;
		}
		_517.field = _517.field || _517.name;
		var _519 = dojo.trim(dojo.attr(node, "fields") || "");
		if (_519) {
			_517.fields = _519.split(",");
		}
		if (_516) {
			_516(node, _517);
		}
	};
	dojox.grid.DataGrid.markupFactory = function (_51a, node, ctor, _51b) {
		return dojox.grid._Grid.markupFactory(_51a, node, ctor, dojo.partial(dojox.grid.DataGrid.cell_markupFactory, _51b));
	};
}
dojo.i18n._preloadLocalizations("dojox.grid.nls.DataGrid", ["ROOT", "ar", "ca", "cs", "da", "de", "de-de", "el", "en", "en-gb", "en-us", "es", "es-es", "fi", "fi-fi", "fr", "fr-fr", "he", "he-il", "hu", "it", "it-it", "ja", "ja-jp", "ko", "ko-kr", "nb", "nl", "nl-nl", "pl", "pt", "pt-br", "pt-pt", "ru", "sk", "sl", "sv", "th", "tr", "xx", "zh", "zh-cn", "zh-tw"]);
