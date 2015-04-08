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
if (!dojo._hasResource["dojo.Stateful"]) {
	dojo._hasResource["dojo.Stateful"] = true;
	dojo.provide("dojo.Stateful");
	dojo.declare("dojo.Stateful", null, {postscript: function (_fb) {
		if (_fb) {
			dojo.mixin(this, _fb);
		}
	}, get: function (_fc) {
		return this[_fc];
	}, set: function (_fd, _fe) {
		if (typeof _fd === "object") {
			for (var x in _fd) {
				this.set(x, _fd[x]);
			}
			return this;
		}
		var _ff = this[_fd];
		this[_fd] = _fe;
		if (this._watchCallbacks) {
			this._watchCallbacks(_fd, _ff, _fe);
		}
		return this;
	}, watch: function (name, _100) {
		var _101 = this._watchCallbacks;
		if (!_101) {
			var self = this;
			_101 = this._watchCallbacks = function (name, _102, _103, _104) {
				var _105 = function (_106) {
					if (_106) {
						_106 = _106.slice();
						for (var i = 0, l = _106.length; i < l; i++) {
							try {
								_106[i].call(self, name, _102, _103);
							} catch (e) {
								console.error(e);
							}
						}
					}
				};
				_105(_101["_" + name]);
				if (!_104) {
					_105(_101["*"]);
				}
			};
		}
		if (!_100 && typeof name === "function") {
			_100 = name;
			name = "*";
		} else {
			name = "_" + name;
		}
		var _107 = _101[name];
		if (typeof _107 !== "object") {
			_107 = _101[name] = [];
		}
		_107.push(_100);
		return {unwatch: function () {
			_107.splice(dojo.indexOf(_107, _100), 1);
		}};
	}});
}
if (!dojo._hasResource["dijit._WidgetBase"]) {
	dojo._hasResource["dijit._WidgetBase"] = true;
	dojo.provide("dijit._WidgetBase");
	(function () {
		dojo.declare("dijit._WidgetBase", dojo.Stateful, {id: "", lang: "", dir: "", "class": "", style: "", title: "", tooltip: "", baseClass: "", srcNodeRef: null, domNode: null, containerNode: null, attributeMap: {id: "", dir: "", lang: "", "class": "", style: "", title: ""}, _blankGif: (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")).toString(), postscript: function (_108, _109) {
			this.create(_108, _109);
		}, create: function (_10a, _10b) {
			this.srcNodeRef = dojo.byId(_10b);
			this._connects = [];
			this._subscribes = [];
			if (this.srcNodeRef && (typeof this.srcNodeRef.id == "string")) {
				this.id = this.srcNodeRef.id;
			}
			if (_10a) {
				this.params = _10a;
				dojo._mixin(this, _10a);
			}
			this.postMixInProperties();
			if (!this.id) {
				this.id = dijit.getUniqueId(this.declaredClass.replace(/\./g, "_"));
			}
			dijit.registry.add(this);
			this.buildRendering();
			if (this.domNode) {
				this._applyAttributes();
				var _10c = this.srcNodeRef;
				if (_10c && _10c.parentNode && this.domNode !== _10c) {
					_10c.parentNode.replaceChild(this.domNode, _10c);
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
			var _10d = function (attr, _10e) {
				if ((_10e.params && attr in _10e.params) || _10e[attr]) {
					_10e.set(attr, _10e[attr]);
				}
			};
			for (var attr in this.attributeMap) {
				_10d(attr, this);
			}
			dojo.forEach(this._getSetterAttributes(), function (a) {
				if (!(a in this.attributeMap)) {
					_10d(a, this);
				}
			}, this);
		}, _getSetterAttributes: function () {
			var ctor = this.constructor;
			if (!ctor._setterAttrs) {
				var r = (ctor._setterAttrs = []), _10f, _110 = ctor.prototype;
				for (var _111 in _110) {
					if (dojo.isFunction(_110[_111]) && (_10f = _111.match(/^_set([a-zA-Z]*)Attr$/)) && _10f[1]) {
						r.push(_10f[1].charAt(0).toLowerCase() + _10f[1].substr(1));
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
				var _112 = this.baseClass.split(" ");
				if (!this.isLeftToRight()) {
					_112 = _112.concat(dojo.map(_112, function (name) {
						return name + "Rtl";
					}));
				}
				dojo.addClass(this.domNode, _112);
			}
		}, postCreate: function () {
		}, startup: function () {
			this._started = true;
		}, destroyRecursive: function (_113) {
			this._beingDestroyed = true;
			this.destroyDescendants(_113);
			this.destroy(_113);
		}, destroy: function (_114) {
			this._beingDestroyed = true;
			this.uninitialize();
			var d = dojo, dfe = d.forEach, dun = d.unsubscribe;
			dfe(this._connects, function (_115) {
				dfe(_115, d.disconnect);
			});
			dfe(this._subscribes, function (_116) {
				dun(_116);
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
			this.destroyRendering(_114);
			dijit.registry.remove(this.id);
			this._destroyed = true;
		}, destroyRendering: function (_117) {
			if (this.bgIframe) {
				this.bgIframe.destroy(_117);
				delete this.bgIframe;
			}
			if (this.domNode) {
				if (_117) {
					dojo.removeAttr(this.domNode, "widgetId");
				} else {
					dojo.destroy(this.domNode);
				}
				delete this.domNode;
			}
			if (this.srcNodeRef) {
				if (!_117) {
					dojo.destroy(this.srcNodeRef);
				}
				delete this.srcNodeRef;
			}
		}, destroyDescendants: function (_118) {
			dojo.forEach(this.getChildren(), function (_119) {
				if (_119.destroyRecursive) {
					_119.destroyRecursive(_118);
				}
			});
		}, uninitialize: function () {
			return false;
		}, _setClassAttr: function (_11a) {
			var _11b = this[this.attributeMap["class"] || "domNode"];
			dojo.replaceClass(_11b, _11a, this["class"]);
			this._set("class", _11a);
		}, _setStyleAttr: function (_11c) {
			var _11d = this[this.attributeMap.style || "domNode"];
			if (dojo.isObject(_11c)) {
				dojo.style(_11d, _11c);
			} else {
				if (_11d.style.cssText) {
					_11d.style.cssText += "; " + _11c;
				} else {
					_11d.style.cssText = _11c;
				}
			}
			this._set("style", _11c);
		}, _attrToDom: function (attr, _11e) {
			var _11f = this.attributeMap[attr];
			dojo.forEach(dojo.isArray(_11f) ? _11f : [_11f], function (_120) {
				var _121 = this[_120.node || _120 || "domNode"];
				var type = _120.type || "attribute";
				switch (type) {
					case "attribute":
						if (dojo.isFunction(_11e)) {
							_11e = dojo.hitch(this, _11e);
						}
						var _122 = _120.attribute ? _120.attribute : (/^on[A-Z][a-zA-Z]*$/.test(attr) ? attr.toLowerCase() : attr);
						dojo.attr(_121, _122, _11e);
						break;
					case "innerText":
						_121.innerHTML = "";
						_121.appendChild(dojo.doc.createTextNode(_11e));
						break;
					case "innerHTML":
						_121.innerHTML = _11e;
						break;
					case "class":
						dojo.replaceClass(_121, _11e, this[attr]);
						break;
				}
			}, this);
		}, get: function (name) {
			var _123 = this._getAttrNames(name);
			return this[_123.g] ? this[_123.g]() : this[name];
		}, set: function (name, _124) {
			if (typeof name === "object") {
				for (var x in name) {
					this.set(x, name[x]);
				}
				return this;
			}
			var _125 = this._getAttrNames(name);
			if (this[_125.s]) {
				var _126 = this[_125.s].apply(this, Array.prototype.slice.call(arguments, 1));
			} else {
				if (name in this.attributeMap) {
					this._attrToDom(name, _124);
				}
				this._set(name, _124);
			}
			return _126 || this;
		}, _attrPairNames: {}, _getAttrNames: function (name) {
			var apn = this._attrPairNames;
			if (apn[name]) {
				return apn[name];
			}
			var uc = name.charAt(0).toUpperCase() + name.substr(1);
			return (apn[name] = {n: name + "Node", s: "_set" + uc + "Attr", g: "_get" + uc + "Attr"});
		}, _set: function (name, _127) {
			var _128 = this[name];
			this[name] = _127;
			if (this._watchCallbacks && this._created && _127 !== _128) {
				this._watchCallbacks(name, _128, _127);
			}
		}, toString: function () {
			return "[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]";
		}, getDescendants: function () {
			return this.containerNode ? dojo.query("[widgetId]", this.containerNode).map(dijit.byNode) : [];
		}, getChildren: function () {
			return this.containerNode ? dijit.findWidgets(this.containerNode) : [];
		}, connect: function (obj, _129, _12a) {
			var _12b = [dojo._connect(obj, _129, this, _12a)];
			this._connects.push(_12b);
			return _12b;
		}, disconnect: function (_12c) {
			for (var i = 0; i < this._connects.length; i++) {
				if (this._connects[i] == _12c) {
					dojo.forEach(_12c, dojo.disconnect);
					this._connects.splice(i, 1);
					return;
				}
			}
		}, subscribe: function (_12d, _12e) {
			var _12f = dojo.subscribe(_12d, this, _12e);
			this._subscribes.push(_12f);
			return _12f;
		}, unsubscribe: function (_130) {
			for (var i = 0; i < this._subscribes.length; i++) {
				if (this._subscribes[i] == _130) {
					dojo.unsubscribe(_130);
					this._subscribes.splice(i, 1);
					return;
				}
			}
		}, isLeftToRight: function () {
			return this.dir ? (this.dir == "ltr") : dojo._isBodyLtr();
		}, placeAt: function (_131, _132) {
			if (_131.declaredClass && _131.addChild) {
				_131.addChild(this, _132);
			} else {
				dojo.place(this.domNode, _131, _132);
			}
			return this;
		}});
	})();
}
if (!dojo._hasResource["dojox.mobile._base"]) {
	dojo._hasResource["dojox.mobile._base"] = true;
	dojo.provide("dojox.mobile._base");
	dojo.isBB = (navigator.userAgent.indexOf("BlackBerry") != -1) && !dojo.isWebKit;
	dojo.declare("dojox.mobile.View", dijit._WidgetBase, {selected: false, keepScrollPos: true, _started: false, constructor: function (_133, node) {
		if (node) {
			dojo.byId(node).style.visibility = "hidden";
		}
	}, buildRendering: function () {
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("DIV");
		this.domNode.className = "mblView";
		this.connect(this.domNode, "webkitAnimationEnd", "onAnimationEnd");
		this.connect(this.domNode, "webkitAnimationStart", "onAnimationStart");
		var id = location.href.match(/#(\w+)([^\w=]|$)/) ? RegExp.$1 : null;
		this._visible = this.selected && !id || this.id == id;
		if (this.selected) {
			dojox.mobile._defaultView = this;
		}
	}, startup: function () {
		if (this._started) {
			return;
		}
		var _134 = this;
		setTimeout(function () {
			if (!_134._visible) {
				_134.domNode.style.display = "none";
			} else {
				dojox.mobile.currentView = _134;
				_134.onStartView();
			}
			_134.domNode.style.visibility = "visible";
		}, dojo.isIE ? 100 : 0);
		this._started = true;
	}, onStartView: function () {
	}, onBeforeTransitionIn: function (_135, dir, _136, _137, _138) {
	}, onAfterTransitionIn: function (_139, dir, _13a, _13b, _13c) {
	}, onBeforeTransitionOut: function (_13d, dir, _13e, _13f, _140) {
	}, onAfterTransitionOut: function (_141, dir, _142, _143, _144) {
	}, _saveState: function (_145, dir, _146, _147, _148) {
		this._context = _147;
		this._method = _148;
		if (_146 == "none" || !dojo.isWebKit) {
			_146 = null;
		}
		this._moveTo = _145;
		this._dir = dir;
		this._transition = _146;
		this._arguments = [];
		var i;
		for (i = 0; i < arguments.length; i++) {
			this._arguments.push(arguments[i]);
		}
		this._args = [];
		if (_147 || _148) {
			for (i = 5; i < arguments.length; i++) {
				this._args.push(arguments[i]);
			}
		}
	}, performTransition: function (_149, dir, _14a, _14b, _14c) {
		if (dojo.hash) {
			if (typeof (_149) == "string" && _149.charAt(0) == "#" && !dojox.mobile._params) {
				dojox.mobile._params = [];
				for (var i = 0; i < arguments.length; i++) {
					dojox.mobile._params.push(arguments[i]);
				}
				dojo.hash(_149);
				return;
			}
		}
		this._saveState.apply(this, arguments);
		var _14d;
		if (_149) {
			if (typeof (_149) == "string") {
				_149.match(/^#?([^&]+)/);
				_14d = RegExp.$1;
			} else {
				_14d = _149;
			}
		} else {
			if (!this._dummyNode) {
				this._dummyNode = dojo.doc.createElement("DIV");
				dojo.body().appendChild(this._dummyNode);
			}
			_14d = this._dummyNode;
		}
		var _14e = this.domNode;
		_14d = this.toNode = dojo.byId(_14d);
		if (!_14d) {
			alert("dojox.mobile.View#performTransition: destination view not found: " + _14d);
		}
		_14d.style.visibility = "hidden";
		_14d.style.display = "";
		this.onBeforeTransitionOut.apply(this, arguments);
		var _14f = dijit.byNode(_14d);
		if (_14f) {
			if (this.keepScrollPos && !dijit.getEnclosingWidget(this.domNode.parentNode)) {
				var _150 = dojo.body().scrollTop || dojo.doc.documentElement.scrollTop || dojo.global.pageYOffset || 0;
				if (dir == 1) {
					_14d.style.top = "0px";
					if (_150 > 1) {
						_14e.style.top = -_150 + "px";
						if (dojo.config["mblHideAddressBar"] !== false) {
							setTimeout(function () {
								dojo.global.scrollTo(0, 1);
							}, 0);
						}
					}
				} else {
					if (_150 > 1 || _14d.offsetTop !== 0) {
						var _151 = -_14d.offsetTop;
						_14d.style.top = "0px";
						_14e.style.top = _151 - _150 + "px";
						if (dojo.config["mblHideAddressBar"] !== false && _151 > 0) {
							setTimeout(function () {
								dojo.global.scrollTo(0, _151 + 1);
							}, 0);
						}
					}
				}
			} else {
				_14d.style.top = "0px";
			}
			_14f.onBeforeTransitionIn.apply(_14f, arguments);
		}
		_14d.style.display = "none";
		_14d.style.visibility = "visible";
		this._doTransition(_14e, _14d, _14a, dir);
	}, _doTransition: function (_152, _153, _154, dir) {
		var rev = (dir == -1) ? " reverse" : "";
		_153.style.display = "";
		if (!_154 || _154 == "none") {
			this.domNode.style.display = "none";
			this.invokeCallback();
		} else {
			dojo.addClass(_152, _154 + " out" + rev);
			dojo.addClass(_153, _154 + " in" + rev);
		}
	}, onAnimationStart: function (e) {
	}, onAnimationEnd: function (e) {
		var _155 = false;
		if (dojo.hasClass(this.domNode, "out")) {
			_155 = true;
			this.domNode.style.display = "none";
			dojo.forEach([this._transition, "in", "out", "reverse"], function (s) {
				dojo.removeClass(this.domNode, s);
			}, this);
		}
		if (e.animationName.indexOf("shrink") === 0) {
			var li = e.target;
			li.style.display = "none";
			dojo.removeClass(li, "mblCloseContent");
		}
		if (_155) {
			this.invokeCallback();
		}
		this.domNode && (this.domNode.className = "mblView");
	}, invokeCallback: function () {
		this.onAfterTransitionOut.apply(this, this._arguments);
		var _156 = dijit.byNode(this.toNode);
		if (_156) {
			_156.onAfterTransitionIn.apply(_156, this._arguments);
		}
		dojox.mobile.currentView = _156;
		var c = this._context, m = this._method;
		if (!c && !m) {
			return;
		}
		if (!m) {
			m = c;
			c = null;
		}
		c = c || dojo.global;
		if (typeof (m) == "string") {
			c[m].apply(c, this._args);
		} else {
			m.apply(c, this._args);
		}
	}, getShowingView: function () {
		var _157 = this.domNode.parentNode.childNodes;
		for (var i = 0; i < _157.length; i++) {
			if (dojo.hasClass(_157[i], "mblView") && dojo.style(_157[i], "display") != "none") {
				return dijit.byNode(_157[i]);
			}
		}
	}, show: function () {
		var fs = this.getShowingView().domNode.style;
		var ts = this.domNode.style;
		fs.display = "none";
		ts.display = "";
		dojox.mobile.currentView = this;
	}, addChild: function (_158) {
		this.containerNode.appendChild(_158.domNode);
	}});
	dojo.declare("dojox.mobile.Heading", dijit._WidgetBase, {back: "", href: "", moveTo: "", transition: "slide", label: "", iconBase: "", buildRendering: function () {
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("H1");
		this.domNode.className = "mblHeading";
		this._view = dijit.getEnclosingWidget(this.domNode.parentNode);
		if (this.label) {
			this.domNode.appendChild(document.createTextNode(this.label));
		} else {
			this.label = "";
			dojo.forEach(this.domNode.childNodes, function (n) {
				if (n.nodeType == 3) {
					this.label += n.nodeValue;
				}
			}, this);
			this.label = dojo.trim(this.label);
		}
		if (this.back) {
			var btn = dojo.create("DIV", {className: "mblArrowButton"}, this.domNode, "first");
			var head = dojo.create("DIV", {className: "mblArrowButtonHead"}, btn);
			var body = dojo.create("DIV", {className: "mblArrowButtonBody mblArrowButtonText"}, btn);
			this._body = body;
			this._head = head;
			this._btn = btn;
			body.innerHTML = this.back;
			this.connect(body, "onclick", "onClick");
			var neck = dojo.create("DIV", {className: "mblArrowButtonNeck"}, btn);
			btn.style.width = body.offsetWidth + head.offsetWidth + "px";
			this.setLabel(this.label);
		}
	}, startup: function () {
		if (this._btn) {
			this._btn.style.width = this._body.offsetWidth + this._head.offsetWidth + "px";
		}
	}, onClick: function (e) {
		var h1 = this.domNode;
		dojo.addClass(h1, "mblArrowButtonSelected");
		setTimeout(function () {
			dojo.removeClass(h1, "mblArrowButtonSelected");
		}, 1000);
		this.goTo(this.moveTo, this.href);
	}, setLabel: function (_159) {
		if (_159 != this.label) {
			this.label = _159;
			this.domNode.firstChild.nodeValue = _159;
		}
	}, goTo: function (_15a, href) {
		if (!this._view) {
			this._view = dijit.byNode(this.domNode.parentNode);
		}
		if (!this._view) {
			return;
		}
		if (href) {
			this._view.performTransition(null, -1, this.transition, this, function () {
				location.href = href;
			});
		} else {
			if (dojox.mobile.app && dojox.mobile.app.STAGE_CONTROLLER_ACTIVE) {
				dojo.publish("/dojox/mobile/app/goback");
			} else {
				this._view.performTransition(_15a, -1, this.transition);
			}
		}
	}});
	dojo.declare("dojox.mobile.RoundRect", dijit._WidgetBase, {shadow: false, buildRendering: function () {
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("DIV");
		this.domNode.className = this.shadow ? "mblRoundRect mblShadow" : "mblRoundRect";
	}});
	dojo.declare("dojox.mobile.RoundRectCategory", dijit._WidgetBase, {label: "", buildRendering: function () {
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("H2");
		this.domNode.className = "mblRoundRectCategory";
		if (this.label) {
			this.domNode.innerHTML = this.label;
		} else {
			this.label = this.domNode.innerHTML;
		}
	}});
	dojo.declare("dojox.mobile.EdgeToEdgeCategory", dojox.mobile.RoundRectCategory, {buildRendering: function () {
		this.inherited(arguments);
		this.domNode.className = "mblEdgeToEdgeCategory";
	}});
	dojo.declare("dojox.mobile.RoundRectList", dijit._WidgetBase, {transition: "slide", iconBase: "", iconPos: "", buildRendering: function () {
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("UL");
		this.domNode.className = "mblRoundRectList";
	}, addChild: function (_15b) {
		this.containerNode.appendChild(_15b.domNode);
		_15b.inheritParams();
		_15b.setIcon();
	}});
	dojo.declare("dojox.mobile.EdgeToEdgeList", dojox.mobile.RoundRectList, {stateful: false, buildRendering: function () {
		this.inherited(arguments);
		this.domNode.className = "mblEdgeToEdgeList";
	}});
	dojo.declare("dojox.mobile.AbstractItem", dijit._WidgetBase, {icon: "", iconPos: "", href: "", hrefTarget: "", moveTo: "", scene: "", clickable: false, url: "", urlTarget: "", transition: "", transitionDir: 1, callback: null, sync: true, label: "", toggle: false, _duration: 800, inheritParams: function () {
		var _15c = this.getParentWidget();
		if (_15c) {
			if (!this.transition) {
				this.transition = _15c.transition;
			}
			if (!this.icon) {
				this.icon = _15c.iconBase;
			}
			if (!this.iconPos) {
				this.iconPos = _15c.iconPos;
			}
		}
	}, findCurrentView: function (_15d) {
		var w;
		if (_15d) {
			w = dijit.byId(_15d);
			if (w) {
				return w.getShowingView();
			}
		}
		var n = this.domNode.parentNode;
		while (true) {
			w = dijit.getEnclosingWidget(n);
			if (!w) {
				return null;
			}
			if (w.performTransition) {
				break;
			}
			n = w.domNode.parentNode;
		}
		return w;
	}, transitionTo: function (_15e, href, url, _15f) {
		var w = this.findCurrentView(_15e);
		if (!w || _15e && w === dijit.byId(_15e)) {
			return;
		}
		if (href) {
			if (this.hrefTarget) {
				dojox.mobile.openWindow(this.href, this.hrefTarget);
			} else {
				w.performTransition(null, this.transitionDir, this.transition, this, function () {
					location.href = href;
				});
			}
			return;
		} else {
			if (_15f) {
				dojo.publish("/dojox/mobile/app/pushScene", [_15f]);
				return;
			}
		}
		if (url) {
			var id;
			if (dojox.mobile._viewMap && dojox.mobile._viewMap[url]) {
				id = dojox.mobile._viewMap[url];
			} else {
				var text = this._text;
				if (!text) {
					if (this.sync) {
						text = dojo.trim(dojo._getText(url));
					} else {
						dojo["require"]("dojo._base.xhr");
						var prog = dojox.mobile.ProgressIndicator.getInstance();
						dojo.body().appendChild(prog.domNode);
						prog.start();
						var xhr = dojo.xhrGet({url: url, handleAs: "text"});
						xhr.addCallback(dojo.hitch(this, function (_160, _161) {
							prog.stop();
							if (_160) {
								this._text = _160;
								this.transitionTo(_15e, href, url, _15f);
							}
						}));
						xhr.addErrback(function (_162) {
							prog.stop();
							alert("Failed to load " + url + "\n" + (_162.description || _162));
						});
						return;
					}
				}
				this._text = null;
				id = this._parse(text);
				if (!dojox.mobile._viewMap) {
					dojox.mobile._viewMap = [];
				}
				dojox.mobile._viewMap[url] = id;
			}
			_15e = id;
			w = this.findCurrentView(_15e) || w;
		}
		w.performTransition(_15e, this.transitionDir, this.transition, this.callback && this, this.callback);
	}, _parse: function (text) {
		var _163 = dojo.create("DIV");
		var view;
		var id = this.urlTarget;
		var _164 = dijit.byId(id) && dijit.byId(id).containerNode || dojo.byId(id) || dojox.mobile.currentView && dojox.mobile.currentView.domNode.parentNode || dojo.body();
		if (text.charAt(0) == "<") {
			_163.innerHTML = text;
			view = _163.firstChild;
			if (!view && view.nodeType != 1) {
				alert("dojox.mobile.AbstractItem#transitionTo: invalid view content");
				return;
			}
			view.setAttribute("_started", "true");
			view.style.visibility = "hidden";
			_164.appendChild(_163);
			(dojox.mobile.parser || dojo.parser).parse(_163);
			_164.appendChild(_164.removeChild(_163).firstChild);
		} else {
			if (text.charAt(0) == "{") {
				_164.appendChild(_163);
				this._ws = [];
				view = this._instantiate(eval("(" + text + ")"), _163);
				for (var i = 0; i < this._ws.length; i++) {
					var w = this._ws[i];
					w.startup && !w._started && (!w.getParent || !w.getParent()) && w.startup();
				}
				this._ws = null;
			}
		}
		view.style.display = "none";
		view.style.visibility = "visible";
		var id = view.id;
		return dojo.hash ? "#" + id : id;
	}, _instantiate: function (obj, node, _165) {
		var _166;
		for (var key in obj) {
			if (key.charAt(0) == "@") {
				continue;
			}
			var cls = dojo.getObject(key);
			if (!cls) {
				continue;
			}
			var _167 = {};
			var _168 = cls.prototype;
			var objs = dojo.isArray(obj[key]) ? obj[key] : [obj[key]];
			for (var i = 0; i < objs.length; i++) {
				for (var prop in objs[i]) {
					if (prop.charAt(0) == "@") {
						var val = objs[i][prop];
						prop = prop.substring(1);
						if (typeof _168[prop] == "string") {
							_167[prop] = val;
						} else {
							if (typeof _168[prop] == "number") {
								_167[prop] = val - 0;
							} else {
								if (typeof _168[prop] == "boolean") {
									_167[prop] = (val != "false");
								} else {
									if (typeof _168[prop] == "object") {
										_167[prop] = eval("(" + val + ")");
									}
								}
							}
						}
					}
				}
				_166 = new cls(_167, node);
				if (!node) {
					this._ws.push(_166);
				}
				if (_165 && _165.addChild) {
					_165.addChild(_166);
				}
				this._instantiate(objs[i], null, _166);
			}
		}
		return _166 && _166.domNode;
	}, createDomButton: function (_169, _16a) {
		var s = _169.className;
		if (s.match(/mblDomButton\w+_(\d+)/)) {
			var nDiv = RegExp.$1 - 0;
			for (var i = 0, p = (_16a || _169); i < nDiv; i++) {
				p = dojo.create("DIV", null, p);
			}
		}
	}, select: function (_16b) {
	}, defaultClickAction: function () {
		if (this.toggle) {
			this.select(this.selected);
		} else {
			if (!this.selected) {
				this.select();
				if (!this.selectOne) {
					var _16c = this;
					setTimeout(function () {
						_16c.select(true);
					}, this._duration);
				}
				if (this.moveTo || this.href || this.url || this.scene) {
					this.transitionTo(this.moveTo, this.href, this.url, this.scene);
				}
			}
		}
	}, getParentWidget: function () {
		var ref = this.srcNodeRef || this.domNode;
		return ref && ref.parentNode ? dijit.getEnclosingWidget(ref.parentNode) : null;
	}});
	dojo.declare("dojox.mobile.ListItem", dojox.mobile.AbstractItem, {rightText: "", btnClass: "", anchorLabel: false, noArrow: false, selected: false, buildRendering: function () {
		this.inheritParams();
		var a = this.anchorNode = dojo.create("A");
		a.className = "mblListItemAnchor";
		var box = dojo.create("DIV");
		box.className = "mblListItemTextBox";
		if (this.anchorLabel) {
			box.style.cursor = "pointer";
		}
		var r = this.srcNodeRef;
		if (r) {
			for (var i = 0, len = r.childNodes.length; i < len; i++) {
				box.appendChild(r.removeChild(r.firstChild));
			}
		}
		if (this.label) {
			box.appendChild(dojo.doc.createTextNode(this.label));
		}
		a.appendChild(box);
		if (this.rightText) {
			this._setRightTextAttr(this.rightText);
		}
		if (this.moveTo || this.href || this.url || this.clickable) {
			var _16d = this.getParentWidget();
			if (!this.noArrow && !(_16d && _16d.stateful)) {
				var _16e = dojo.create("DIV");
				_16e.className = "mblArrow";
				a.appendChild(_16e);
			}
			this.connect(a, "onclick", "onClick");
		} else {
			if (this.btnClass) {
				var div = this.btnNode = dojo.create("DIV");
				div.className = this.btnClass + " mblRightButton";
				div.appendChild(dojo.create("DIV"));
				div.appendChild(dojo.create("P"));
				var _16f = dojo.create("DIV");
				_16f.className = "mblRightButtonContainer";
				_16f.appendChild(div);
				a.appendChild(_16f);
				dojo.addClass(a, "mblListItemAnchorHasRightButton");
				setTimeout(function () {
					_16f.style.width = div.offsetWidth + "px";
					_16f.style.height = div.offsetHeight + "px";
					if (dojo.isIE) {
						a.parentNode.style.height = a.parentNode.offsetHeight + "px";
					}
				}, 0);
			}
		}
		if (this.anchorLabel) {
			box.style.display = "inline";
		}
		var li = this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("LI");
		li.className = "mblListItem" + (this.selected ? " mblItemSelected" : "");
		li.appendChild(a);
		this.setIcon();
	}, setIcon: function () {
		if (this.iconNode) {
			return;
		}
		var a = this.anchorNode;
		if (this.icon && this.icon != "none") {
			var img = this.iconNode = dojo.create("IMG");
			img.className = "mblListItemIcon";
			img.src = this.icon;
			this.domNode.insertBefore(img, a);
			dojox.mobile.setupIcon(this.iconNode, this.iconPos);
			dojo.removeClass(a, "mblListItemAnchorNoIcon");
		} else {
			dojo.addClass(a, "mblListItemAnchorNoIcon");
		}
	}, onClick: function (e) {
		var a = e.currentTarget;
		var li = a.parentNode;
		if (dojo.hasClass(li, "mblItemSelected")) {
			return;
		}
		if (this.anchorLabel) {
			for (var p = e.target; p.tagName != "LI"; p = p.parentNode) {
				if (p.className == "mblListItemTextBox") {
					dojo.addClass(p, "mblListItemTextBoxSelected");
					setTimeout(function () {
						dojo.removeClass(p, "mblListItemTextBoxSelected");
					}, 1000);
					this.onAnchorLabelClicked(e);
					return;
				}
			}
		}
		if (this.getParentWidget().stateful) {
			for (var i = 0, c = li.parentNode.childNodes; i < c.length; i++) {
				dojo.removeClass(c[i], "mblItemSelected");
			}
		} else {
			setTimeout(function () {
				dojo.removeClass(li, "mblItemSelected");
			}, 1000);
		}
		dojo.addClass(li, "mblItemSelected");
		this.transitionTo(this.moveTo, this.href, this.url, this.scene);
	}, onAnchorLabelClicked: function (e) {
	}, _setRightTextAttr: function (text) {
		this.rightText = text;
		if (!this._rightTextNode) {
			this._rightTextNode = dojo.create("DIV", {className: "mblRightText"}, this.anchorNode);
		}
		this._rightTextNode.innerHTML = text;
	}});
	dojo.declare("dojox.mobile.Switch", dijit._WidgetBase, {value: "on", leftLabel: "ON", rightLabel: "OFF", _width: 53, buildRendering: function () {
		this.domNode = this.srcNodeRef || dojo.doc.createElement("DIV");
		this.domNode.className = "mblSwitch";
		this.domNode.innerHTML = "<div class=\"mblSwitchInner\">" + "<div class=\"mblSwitchBg mblSwitchBgLeft\">" + "<div class=\"mblSwitchText mblSwitchTextLeft\">" + this.leftLabel + "</div>" + "</div>" + "<div class=\"mblSwitchBg mblSwitchBgRight\">" + "<div class=\"mblSwitchText mblSwitchTextRight\">" + this.rightLabel + "</div>" + "</div>" + "<div class=\"mblSwitchKnob\"></div>" + "</div>";
		var n = this.inner = this.domNode.firstChild;
		this.left = n.childNodes[0];
		this.right = n.childNodes[1];
		this.knob = n.childNodes[2];
		dojo.addClass(this.domNode, (this.value == "on") ? "mblSwitchOn" : "mblSwitchOff");
		this[this.value == "off" ? "left" : "right"].style.display = "none";
	}, postCreate: function () {
		this.connect(this.knob, "onclick", "onClick");
		this.connect(this.knob, "touchstart", "onTouchStart");
		this.connect(this.knob, "mousedown", "onTouchStart");
	}, _changeState: function (_170) {
		this.inner.style.left = "";
		dojo.addClass(this.domNode, "mblSwitchAnimation");
		dojo.removeClass(this.domNode, (_170 == "on") ? "mblSwitchOff" : "mblSwitchOn");
		dojo.addClass(this.domNode, (_170 == "on") ? "mblSwitchOn" : "mblSwitchOff");
		var _171 = this;
		setTimeout(function () {
			_171[_170 == "off" ? "left" : "right"].style.display = "none";
			dojo.removeClass(_171.domNode, "mblSwitchAnimation");
		}, 300);
	}, onClick: function (e) {
		if (this._moved) {
			return;
		}
		this.value = (this.value == "on") ? "off" : "on";
		this._changeState(this.value);
		this.onStateChanged(this.value);
	}, onTouchStart: function (e) {
		this._moved = false;
		this.innerStartX = this.inner.offsetLeft;
		if (e.targetTouches) {
			this.touchStartX = e.targetTouches[0].clientX;
			this._conn1 = dojo.connect(this.inner, "touchmove", this, "onTouchMove");
			this._conn2 = dojo.connect(this.inner, "touchend", this, "onTouchEnd");
		}
		this.left.style.display = "block";
		this.right.style.display = "block";
		dojo.stopEvent(e);
	}, onTouchMove: function (e) {
		e.preventDefault();
		var dx;
		if (e.targetTouches) {
			if (e.targetTouches.length != 1) {
				return false;
			}
			dx = e.targetTouches[0].clientX - this.touchStartX;
		} else {
			dx = e.clientX - this.touchStartX;
		}
		var pos = this.innerStartX + dx;
		var d = 10;
		if (pos <= -(this._width - d)) {
			pos = -this._width;
		}
		if (pos >= -d) {
			pos = 0;
		}
		this.inner.style.left = pos + "px";
		this._moved = true;
	}, onTouchEnd: function (e) {
		dojo.disconnect(this._conn1);
		dojo.disconnect(this._conn2);
		if (this.innerStartX == this.inner.offsetLeft) {
			if (dojo.isWebKit) {
				var ev = dojo.doc.createEvent("MouseEvents");
				ev.initEvent("click", true, true);
				this.knob.dispatchEvent(ev);
			}
			return;
		}
		var _172 = (this.inner.offsetLeft < -(this._width / 2)) ? "off" : "on";
		this._changeState(_172);
		if (_172 != this.value) {
			this.value = _172;
			this.onStateChanged(this.value);
		}
	}, onStateChanged: function (_173) {
	}});
	dojo.declare("dojox.mobile.Button", dijit._WidgetBase, {btnClass: "mblBlueButton", duration: 1000, label: null, buildRendering: function () {
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("BUTTON");
		this.domNode.className = "mblButton " + this.btnClass;
		if (this.label) {
			this.domNode.innerHTML = this.label;
		}
		this.connect(this.domNode, "onclick", "onClick");
	}, onClick: function (e) {
		var _174 = this.domNode;
		var c = "mblButtonSelected " + this.btnClass + "Selected";
		dojo.addClass(_174, c);
		setTimeout(function () {
			dojo.removeClass(_174, c);
		}, this.duration);
	}});
	dojo.declare("dojox.mobile.ToolBarButton", dojox.mobile.AbstractItem, {selected: false, _defaultColor: "mblColorDefault", _selColor: "mblColorDefaultSel", buildRendering: function () {
		this.inheritParams();
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("div");
		dojo.addClass(this.domNode, "mblToolbarButton mblArrowButtonText");
		var _175;
		if (this.selected) {
			_175 = this._selColor;
		} else {
			if (this.domNode.className.indexOf("mblColor") == -1) {
				_175 = this._defaultColor;
			}
		}
		dojo.addClass(this.domNode, _175);
		if (this.label) {
			this.domNode.innerHTML = this.label;
		} else {
			this.label = this.domNode.innerHTML;
		}
		if (this.icon && this.icon != "none") {
			var img;
			if (this.iconPos) {
				var _176 = dojo.create("DIV", null, this.domNode);
				img = dojo.create("IMG", null, _176);
				img.style.position = "absolute";
				var arr = this.iconPos.split(/[ ,]/);
				dojo.style(_176, {position: "relative", width: arr[2] + "px", height: arr[3] + "px"});
			} else {
				img = dojo.create("IMG", null, this.domNode);
			}
			img.src = this.icon;
			dojox.mobile.setupIcon(img, this.iconPos);
			this.iconNode = img;
		}
		this.createDomButton(this.domNode);
		this.connect(this.domNode, "onclick", "onClick");
	}, select: function (_177) {
		dojo.toggleClass(this.domNode, this._selColor, !_177);
		this.selected = !_177;
	}, onClick: function (e) {
		this.defaultClickAction();
	}});
	dojo.declare("dojox.mobile.ProgressIndicator", null, {interval: 100, colors: ["#C0C0C0", "#C0C0C0", "#C0C0C0", "#C0C0C0", "#C0C0C0", "#C0C0C0", "#B8B9B8", "#AEAFAE", "#A4A5A4", "#9A9A9A", "#8E8E8E", "#838383"], _bars: [], constructor: function () {
		this.domNode = dojo.create("DIV");
		this.domNode.className = "mblProgContainer";
		for (var i = 0; i < 12; i++) {
			var div = dojo.create("DIV");
			div.className = "mblProg mblProg" + i;
			this.domNode.appendChild(div);
			this._bars.push(div);
		}
	}, start: function () {
		var cntr = 0;
		var _178 = this;
		this.timer = setInterval(function () {
			cntr--;
			cntr = cntr < 0 ? 11 : cntr;
			var c = _178.colors;
			for (var i = 0; i < 12; i++) {
				var idx = (cntr + i) % 12;
				_178._bars[i].style.backgroundColor = c[idx];
			}
		}, this.interval);
	}, stop: function () {
		if (this.timer) {
			clearInterval(this.timer);
		}
		this.timer = null;
		if (this.domNode.parentNode) {
			this.domNode.parentNode.removeChild(this.domNode);
		}
	}});
	dojox.mobile.ProgressIndicator._instance = null;
	dojox.mobile.ProgressIndicator.getInstance = function () {
		if (!dojox.mobile.ProgressIndicator._instance) {
			dojox.mobile.ProgressIndicator._instance = new dojox.mobile.ProgressIndicator();
		}
		return dojox.mobile.ProgressIndicator._instance;
	};
	dojox.mobile.addClass = function () {
		var _179 = document.getElementsByTagName("link");
		for (var i = 0, len = _179.length; i < len; i++) {
			if (_179[i].href.match(/dojox\/mobile\/themes\/(\w+)\//)) {
				dojox.mobile.theme = RegExp.$1;
				dojo.addClass(dojo.body(), dojox.mobile.theme);
				break;
			}
		}
	};
	dojox.mobile.setupIcon = function (_17a, _17b) {
		if (_17a && _17b) {
			var arr = dojo.map(_17b.split(/[ ,]/), function (item) {
				return item - 0;
			});
			var t = arr[0];
			var r = arr[1] + arr[2];
			var b = arr[0] + arr[3];
			var l = arr[1];
			_17a.style.clip = "rect(" + t + "px " + r + "px " + b + "px " + l + "px)";
			_17a.style.top = dojo.style(_17a, "top") - t + "px";
			_17a.style.left = dojo.style(_17a.parentNode, "paddingLeft") - l + "px";
		}
	};
	dojox.mobile.hideAddressBar = function () {
		dojo.body().style.minHeight = "1000px";
		setTimeout(function () {
			scrollTo(0, 1);
		}, 100);
		setTimeout(function () {
			scrollTo(0, 1);
		}, 400);
		setTimeout(function () {
			scrollTo(0, 1);
			dojo.body().style.minHeight = (dojo.global.innerHeight || dojo.doc.documentElement.clientHeight) + "px";
		}, 1000);
	};
	dojox.mobile.openWindow = function (url, _17c) {
		dojo.global.open(url, _17c || "_blank");
	};
	dojo._loaders.unshift(function () {
		var _17d = dojo.body().getElementsByTagName("*");
		var i, len, s;
		len = _17d.length;
		for (i = 0; i < len; i++) {
			s = _17d[i].getAttribute("dojoType");
			if (s) {
				if (_17d[i].parentNode.getAttribute("lazy") == "true") {
					_17d[i].setAttribute("__dojoType", s);
					_17d[i].removeAttribute("dojoType");
				}
			}
		}
	});
	dojo.addOnLoad(function () {
		dojox.mobile.addClass();
		if (dojo.config["mblApplyPageStyles"] !== false) {
			dojo.addClass(dojo.doc.documentElement, "mobile");
		}
		if (dojo.config["mblHideAddressBar"] !== false) {
			dojox.mobile.hideAddressBar();
			if (dojo.config["mblAlwaysHideAddressBar"] == true) {
				if (dojo.global.onorientationchange !== undefined) {
					dojo.connect(dojo.global, "onorientationchange", dojox.mobile.hideAddressBar);
				} else {
					dojo.connect(dojo.global, "onresize", dojox.mobile.hideAddressBar);
				}
			}
		}
		var _17e = dojo.body().getElementsByTagName("*");
		var i, len = _17e.length, s;
		for (i = 0; i < len; i++) {
			s = _17e[i].getAttribute("__dojoType");
			if (s) {
				_17e[i].setAttribute("dojoType", s);
				_17e[i].removeAttribute("__dojoType");
			}
		}
		if (dojo.hash) {
			var _17f = function (root) {
				var arr;
				arr = dijit.findWidgets(root);
				var _180 = arr;
				for (var i = 0; i < _180.length; i++) {
					arr = arr.concat(_17f(_180[i].containerNode));
				}
				return arr;
			};
			dojo.subscribe("/dojo/hashchange", null, function (_181) {
				var view = dojox.mobile.currentView;
				if (!view) {
					return;
				}
				var _182 = dojox.mobile._params;
				if (!_182) {
					var _183 = _181 ? _181 : dojox.mobile._defaultView.id;
					var _184 = _17f(view.domNode);
					var dir = 1, _185 = "slide";
					for (i = 0; i < _184.length; i++) {
						var w = _184[i];
						if ("#" + _183 == w.moveTo) {
							_185 = w.transition;
							dir = (w instanceof dojox.mobile.Heading) ? -1 : 1;
							break;
						}
					}
					_182 = [_183, dir, _185];
				}
				view.performTransition.apply(view, _182);
				dojox.mobile._params = null;
			});
		}
		dojo.body().style.visibility = "visible";
	});
	dijit.getEnclosingWidget = function (node) {
		while (node && node.tagName !== "BODY") {
			if (node.getAttribute && node.getAttribute("widgetId")) {
				return dijit.registry.byId(node.getAttribute("widgetId"));
			}
			node = node._parentNode || node.parentNode;
		}
		return null;
	};
}
if (!dojo._hasResource["dojox.mobile"]) {
	dojo._hasResource["dojox.mobile"] = true;
	dojo.provide("dojox.mobile");
	dojo.experimental("dojox.mobile");
}
if (!dojo._hasResource["dojox.mobile.parser"]) {
	dojo._hasResource["dojox.mobile.parser"] = true;
	dojo.provide("dojox.mobile.parser");
	dojo.provide("dojo.parser");
	dojox.mobile.parser = new function () {
		this.instantiate = function (list, _186) {
			var ws = [];
			if (list) {
				var i, len;
				len = list.length;
				for (i = 0; i < len; i++) {
					var node = list[i];
					var cls = dojo.getObject(dojo.attr(node, "dojoType"));
					var _187 = cls.prototype;
					var _188 = {};
					if (_186) {
						for (var name in _186) {
							_188[name] = _186[name];
						}
					}
					for (var prop in _187) {
						var val = dojo.attr(node, prop);
						if (!val) {
							continue;
						}
						if (typeof _187[prop] == "string") {
							_188[prop] = val;
						} else {
							if (typeof _187[prop] == "number") {
								_188[prop] = val - 0;
							} else {
								if (typeof _187[prop] == "boolean") {
									_188[prop] = (val != "false");
								} else {
									if (typeof _187[prop] == "object") {
										_188[prop] = eval("(" + val + ")");
									}
								}
							}
						}
					}
					_188["class"] = node.className;
					_188["style"] = node.style && node.style.cssText;
					var _189 = new cls(_188, node);
					ws.push(_189);
					var jsId = node.getAttribute("jsId");
					if (jsId) {
						dojo.setObject(jsId, _189);
					}
				}
				len = ws.length;
				for (i = 0; i < len; i++) {
					var w = ws[i];
					w.startup && !w._started && (!w.getParent || !w.getParent()) && w.startup();
				}
			}
			return ws;
		};
		this.parse = function (_18a, _18b) {
			if (!_18a) {
				_18a = dojo.body();
			} else {
				if (!_18b && _18a.rootNode) {
					_18a = _18a.rootNode;
				}
			}
			var _18c = _18a.getElementsByTagName("*");
			var list = [];
			for (var i = 0, len = _18c.length; i < len; i++) {
				if (_18c[i].getAttribute("dojoType")) {
					list.push(_18c[i]);
				}
			}
			return this.instantiate(list, _18b);
		};
	}();
	dojo._loaders.unshift(function () {
		if (dojo.config.parseOnLoad) {
			dojox.mobile.parser.parse();
		}
	});
}
if (!dojo._hasResource["dojox.mobile.app._event"]) {
	dojo._hasResource["dojox.mobile.app._event"] = true;
	dojo.provide("dojox.mobile.app._event");
	dojo.experimental("dojox.mobile.app._event.js");
	dojo.mixin(dojox.mobile.app, {eventMap: {}, connectFlick: function (_18d, _18e, _18f) {
		var _190;
		var _191;
		var _192 = false;
		var _193;
		var _194;
		var _195;
		var _196;
		var _197;
		var time;
		var _198 = dojo.connect("onmousedown", _18d, function (_199) {
			_192 = false;
			_190 = _199.targetTouches ? _199.targetTouches[0].clientX : _199.clientX;
			_191 = _199.targetTouches ? _199.targetTouches[0].clientY : _199.clientY;
			time = (new Date()).getTime();
			_195 = dojo.connect(_18d, "onmousemove", _19a);
			_196 = dojo.connect(_18d, "onmouseup", onUp);
		});
		var _19a = function (_19b) {
			dojo.stopEvent(_19b);
			_193 = _19b.targetTouches ? _19b.targetTouches[0].clientX : _19b.clientX;
			_194 = _19b.targetTouches ? _19b.targetTouches[0].clientY : _19b.clientY;
			if (Math.abs(Math.abs(_193) - Math.abs(_190)) > 15) {
				_192 = true;
				_197 = (_193 > _190) ? "ltr" : "rtl";
			} else {
				if (Math.abs(Math.abs(_194) - Math.abs(_191)) > 15) {
					_192 = true;
					_197 = (_194 > _191) ? "ttb" : "btt";
				}
			}
		};
		var onUp = function (_19c) {
			dojo.stopEvent(_19c);
			_195 && dojo.disconnect(_195);
			_196 && dojo.disconnect(_196);
			if (_192) {
				var _19d = {target: _18d, direction: _197, duration: (new Date()).getTime() - time};
				if (_18e && _18f) {
					_18e[_18f](_19d);
				} else {
					_18f(_19d);
				}
			}
		};
	}});
	dojox.mobile.app.isIPhone = (dojo.isSafari && (navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPod") > -1));
	dojox.mobile.app.isWebOS = (navigator.userAgent.indexOf("webOS") > -1);
	dojox.mobile.app.isAndroid = (navigator.userAgent.toLowerCase().indexOf("android") > -1);
	if (dojox.mobile.app.isIPhone || dojox.mobile.app.isAndroid) {
		dojox.mobile.app.eventMap = {onmousedown: "ontouchstart", mousedown: "ontouchstart", onmouseup: "ontouchend", mouseup: "ontouchend", onmousemove: "ontouchmove", mousemove: "ontouchmove"};
	}
	dojo._oldConnect = dojo._connect;
	dojo._connect = function (obj, _19e, _19f, _1a0, _1a1) {
		_19e = dojox.mobile.app.eventMap[_19e] || _19e;
		if (_19e == "flick" || _19e == "onflick") {
			if (dojo.global["Mojo"]) {
				_19e = Mojo.Event.flick;
			} else {
				return dojox.mobile.app.connectFlick(obj, _19f, _1a0);
			}
		}
		return dojo._oldConnect(obj, _19e, _19f, _1a0, _1a1);
	};
}
if (!dojo._hasResource["dojox.mobile.app._Widget"]) {
	dojo._hasResource["dojox.mobile.app._Widget"] = true;
	dojo.provide("dojox.mobile.app._Widget");
	dojo.experimental("dojox.mobile.app._Widget");
	dojo.declare("dojox.mobile.app._Widget", dijit._WidgetBase, {getScroll: function () {
		return {x: dojo.global.scrollX, y: dojo.global.scrollY};
	}, connect: function (_1a2, _1a3, fn) {
		if (_1a3.toLowerCase() == "dblclick" || _1a3.toLowerCase() == "ondblclick") {
			if (dojo.global["Mojo"]) {
				return this.connect(_1a2, Mojo.Event.tap, fn);
			}
		}
		return this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dojox.mobile.app.SceneController"]) {
	dojo._hasResource["dojox.mobile.app.SceneController"] = true;
	dojo.provide("dojox.mobile.app.SceneController");
	dojo.experimental("dojox.mobile.app.SceneController");
	(function () {
		var app = dojox.mobile.app;
		var _1a4 = {};
		dojo.declare("dojox.mobile.app.SceneController", dojox.mobile.View, {stageController: null, keepScrollPos: false, init: function (_1a5, _1a6) {
			this.sceneName = _1a5;
			this.params = _1a6;
			var _1a7 = app.resolveTemplate(_1a5);
			this._deferredInit = new dojo.Deferred();
			if (_1a4[_1a5]) {
				this._setContents(_1a4[_1a5]);
			} else {
				dojo.xhrGet({url: _1a7, handleAs: "text"}).addCallback(dojo.hitch(this, this._setContents));
			}
			return this._deferredInit;
		}, _setContents: function (_1a8) {
			_1a4[this.sceneName] = _1a8;
			this.domNode.innerHTML = "<div>" + _1a8 + "</div>";
			var _1a9 = "";
			var _1aa = this.sceneName.split("-");
			for (var i = 0; i < _1aa.length; i++) {
				_1a9 += _1aa[i].substring(0, 1).toUpperCase() + _1aa[i].substring(1);
			}
			_1a9 += "Assistant";
			this.sceneAssistantName = _1a9;
			var _1ab = this;
			dojox.mobile.app.loadResourcesForScene(this.sceneName, function () {
				var _1ac;
				if (typeof (dojo.global[_1a9]) != "undefined") {
					_1ab._initAssistant();
				} else {
					var _1ad = app.resolveAssistant(_1ab.sceneName);
					dojo.xhrGet({url: _1ad, handleAs: "text"}).addCallback(function (text) {
						try {
							dojo.eval(text);
						} catch (e) {
							throw e;
						}
						_1ab._initAssistant();
					});
				}
			});
		}, _initAssistant: function () {
			var cls = dojo.getObject(this.sceneAssistantName);
			if (!cls) {
				throw Error("Unable to resolve scene assistant " + this.sceneAssistantName);
			}
			this.assistant = new cls(this.params);
			this.assistant.controller = this;
			this.assistant.domNode = this.domNode.firstChild;
			this.assistant.setup();
			this._deferredInit.callback();
		}, query: function (_1ae, node) {
			return dojo.query(_1ae, node || this.domNode);
		}, parse: function (node) {
			var _1af = this._widgets = dojox.mobile.parser.parse(node || this.domNode, {controller: this});
			for (var i = 0; i < _1af.length; i++) {
				_1af[i].set("controller", this);
			}
		}, getWindowSize: function () {
			return {w: dojo.global.innerWidth, h: dojo.global.innerHeight};
		}, showAlertDialog: function (_1b0) {
			var size = dojo.marginBox(this.assistant.domNode);
			var _1b1 = new dojox.mobile.app.AlertDialog(dojo.mixin(_1b0, {controller: this}));
			this.assistant.domNode.appendChild(_1b1.domNode);
			_1b1.show();
		}, popupSubMenu: function (info) {
			var _1b2 = new dojox.mobile.app.ListSelector({controller: this, destroyOnHide: true, onChoose: info.onChoose});
			this.assistant.domNode.appendChild(_1b2.domNode);
			_1b2.set("data", info.choices);
			_1b2.show(info.fromNode);
		}});
	})();
}
if (!dojo._hasResource["dojox.mobile.app.StageController"]) {
	dojo._hasResource["dojox.mobile.app.StageController"] = true;
	dojo.provide("dojox.mobile.app.StageController");
	dojo.experimental("dojox.mobile.app.StageController");
	dojo.declare("dojox.mobile.app.StageController", null, {scenes: null, effect: "fade", constructor: function (node) {
		this.domNode = node;
		this.scenes = [];
		if (dojo.config.mobileAnim) {
			this.effect = dojo.config.mobileAnim;
		}
	}, getActiveSceneController: function () {
		return this.scenes[this.scenes.length - 1];
	}, pushScene: function (_1b3, _1b4) {
		if (this._opInProgress) {
			return;
		}
		this._opInProgress = true;
		var node = dojo.create("div", {"class": "scene-wrapper", style: {visibility: "hidden"}}, this.domNode);
		var _1b5 = new dojox.mobile.app.SceneController({}, node);
		if (this.scenes.length > 0) {
			this.scenes[this.scenes.length - 1].assistant.deactivate();
		}
		this.scenes.push(_1b5);
		var _1b6 = this;
		dojo.forEach(this.scenes, this.setZIndex);
		_1b5.stageController = this;
		_1b5.init(_1b3, _1b4).addCallback(function () {
			if (_1b6.scenes.length == 1) {
				_1b5.domNode.style.visibility = "visible";
				_1b6.scenes[_1b6.scenes.length - 1].assistant.activate(_1b4);
				_1b6._opInProgress = false;
			} else {
				_1b6.scenes[_1b6.scenes.length - 2].performTransition(_1b6.scenes[_1b6.scenes.length - 1].domNode, 1, _1b6.effect, null, function () {
					_1b6.scenes[_1b6.scenes.length - 1].assistant.activate(_1b4);
					_1b6._opInProgress = false;
				});
			}
		});
	}, setZIndex: function (_1b7, idx) {
		dojo.style(_1b7.domNode, "zIndex", idx + 1);
	}, popScene: function (data) {
		if (this._opInProgress) {
			return;
		}
		var _1b8 = this;
		if (this.scenes.length > 1) {
			this._opInProgress = true;
			this.scenes[_1b8.scenes.length - 2].assistant.activate(data);
			this.scenes[_1b8.scenes.length - 1].performTransition(_1b8.scenes[this.scenes.length - 2].domNode, -1, this.effect, null, function () {
				_1b8._destroyScene(_1b8.scenes[_1b8.scenes.length - 1]);
				_1b8.scenes.splice(_1b8.scenes.length - 1, 1);
				_1b8._opInProgress = false;
			});
		} else {
		}
	}, popScenesTo: function (_1b9, data) {
		if (this._opInProgress) {
			return;
		}
		while (this.scenes.length > 2 && this.scenes[this.scenes.length - 2].sceneName != _1b9) {
			this._destroyScene(this.scenes[this.scenes.length - 2]);
			this.scenes.splice(this.scenes.length - 2, 1);
		}
		this.popScene(data);
	}, _destroyScene: function (_1ba) {
		_1ba.assistant.deactivate();
		_1ba.assistant.destroy();
		_1ba.destroyRecursive();
	}});
}
if (!dojo._hasResource["dojox.mobile.app.SceneAssistant"]) {
	dojo._hasResource["dojox.mobile.app.SceneAssistant"] = true;
	dojo.provide("dojox.mobile.app.SceneAssistant");
	dojo.experimental("dojox.mobile.app.SceneAssistant");
	dojo.declare("dojox.mobile.app.SceneAssistant", null, {constructor: function () {
	}, setup: function () {
	}, activate: function (_1bb) {
	}, deactivate: function () {
	}, destroy: function () {
		var _1bc = dojo.query("> [widgetId]", this.containerNode).map(dijit.byNode);
		dojo.forEach(_1bc, function (_1bd) {
			_1bd.destroyRecursive();
		});
		this.disconnect();
	}, connect: function (obj, _1be, _1bf) {
		if (!this._connects) {
			this._connects = [];
		}
		this._connects.push(dojo.connect(obj, _1be, _1bf));
	}, disconnect: function () {
		dojo.forEach(this._connects, dojo.disconnect);
		this._connects = [];
	}});
}
if (!dojo._hasResource["dojox.mobile.app.AlertDialog"]) {
	dojo._hasResource["dojox.mobile.app.AlertDialog"] = true;
	dojo.provide("dojox.mobile.app.AlertDialog");
	dojo.experimental("dojox.mobile.app.AlertDialog");
	dojo.declare("dojox.mobile.app.AlertDialog", dijit._WidgetBase, {title: "", text: "", controller: null, buttons: null, defaultButtonLabel: "OK", onChoose: null, constructor: function () {
		this.onClick = dojo.hitch(this, this.onClick);
		this._handleSelect = dojo.hitch(this, this._handleSelect);
	}, buildRendering: function () {
		this.domNode = dojo.create("div", {"class": "alertDialog"});
		var _1c0 = dojo.create("div", {"class": "alertDialogBody"}, this.domNode);
		dojo.create("div", {"class": "alertTitle", innerHTML: this.title || ""}, _1c0);
		dojo.create("div", {"class": "alertText", innerHTML: this.text || ""}, _1c0);
		var _1c1 = dojo.create("div", {"class": "alertBtns"}, _1c0);
		if (!this.buttons || this.buttons.length == 0) {
			this.buttons = [
				{label: this.defaultButtonLabel, value: "ok", "class": "affirmative"}
			];
		}
		var _1c2 = this;
		dojo.forEach(this.buttons, function (_1c3) {
			var btn = new dojox.mobile.Button({btnClass: _1c3["class"] || "", label: _1c3.label});
			btn._dialogValue = _1c3.value;
			dojo.place(btn.domNode, _1c1);
			_1c2.connect(btn, "onClick", _1c2._handleSelect);
		});
		var _1c4 = this.controller.getWindowSize();
		this.mask = dojo.create("div", {"class": "dialogUnderlayWrapper", innerHTML: "<div class=\"dialogUnderlay\"></div>", style: {width: _1c4.w + "px", height: _1c4.h + "px"}}, this.controller.assistant.domNode);
		this.connect(this.mask, "onclick", function () {
			_1c2.onChoose && _1c2.onChoose();
			_1c2.hide();
		});
	}, postCreate: function () {
		this.subscribe("/dojox/mobile/app/goback", this._handleSelect);
	}, _handleSelect: function (_1c5) {
		var node;
		if (_1c5 && _1c5.target) {
			node = _1c5.target;
			while (!dijit.byNode(node)) {
				node - node.parentNode;
			}
		}
		if (this.onChoose) {
			this.onChoose(node ? dijit.byNode(node)._dialogValue : undefined);
		}
		this.hide();
	}, show: function () {
		this._doTransition(1);
	}, hide: function () {
		this._doTransition(-1);
	}, _doTransition: function (dir) {
		var anim;
		var h = dojo.marginBox(this.domNode.firstChild).h;
		var _1c6 = this.controller.getWindowSize().h;
		var high = _1c6 - h;
		var low = _1c6;
		var _1c7 = dojo.fx.slideTo({node: this.domNode, duration: 400, top: {start: dir < 0 ? high : low, end: dir < 0 ? low : high}});
		var _1c8 = dojo[dir < 0 ? "fadeOut" : "fadeIn"]({node: this.mask, duration: 400});
		var anim = dojo.fx.combine([_1c7, _1c8]);
		var _1c9 = this;
		dojo.connect(anim, "onEnd", this, function () {
			if (dir < 0) {
				_1c9.domNode.style.display = "none";
				dojo.destroy(_1c9.domNode);
				dojo.destroy(_1c9.mask);
			}
		});
		anim.play();
	}, destroy: function () {
		this.inherited(arguments);
		dojo.destroy(this.mask);
	}, onClick: function () {
	}});
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
	dojo.string.substitute = function (_1ca, map, _1cb, _1cc) {
		_1cc = _1cc || dojo.global;
		_1cb = _1cb ? dojo.hitch(_1cc, _1cb) : function (v) {
			return v;
		};
		return _1ca.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (_1cd, key, _1ce) {
			var _1cf = dojo.getObject(key, false, map);
			if (_1ce) {
				_1cf = dojo.getObject(_1ce, false, _1cc).call(_1cc, _1cf, key);
			}
			return _1cb(_1cf, key).toString();
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
if (!dojo._hasResource["dojox.mobile.app.List"]) {
	dojo._hasResource["dojox.mobile.app.List"] = true;
	dojo.provide("dojox.mobile.app.List");
	dojo.experimental("dojox.mobile.app.List");
	(function () {
		var _1d0 = {};
		dojo.declare("dojox.mobile.app.List", dijit._WidgetBase, {items: null, itemTemplate: "", emptyTemplate: "", dividerTemplate: "", dividerFunction: null, labelDelete: "Delete", labelCancel: "Cancel", controller: null, autoDelete: true, enableDelete: true, enableHold: true, formatters: null, _templateLoadCount: 0, _mouseDownPos: null, baseClass: "list", constructor: function () {
			this._checkLoadComplete = dojo.hitch(this, this._checkLoadComplete);
			this._replaceToken = dojo.hitch(this, this._replaceToken);
			this._postDeleteAnim = dojo.hitch(this, this._postDeleteAnim);
		}, postCreate: function () {
			var _1d1 = this;
			if (this.emptyTemplate) {
				this._templateLoadCount++;
			}
			if (this.itemTemplate) {
				this._templateLoadCount++;
			}
			if (this.dividerTemplate) {
				this._templateLoadCount++;
			}
			this.connect(this.domNode, "onmousedown", function (_1d2) {
				var _1d3 = _1d2;
				if (_1d2.targetTouches && _1d2.targetTouches.length > 0) {
					_1d3 = _1d2.targetTouches[0];
				}
				var _1d4 = _1d1._getRowNode(_1d2.target);
				if (_1d4) {
					_1d1._setDataInfo(_1d4, _1d2);
					_1d1._selectRow(_1d4);
					_1d1._mouseDownPos = {x: _1d3.pageX, y: _1d3.pageY};
					_1d1._dragThreshold = null;
				}
			});
			this.connect(this.domNode, "onmouseup", function (_1d5) {
				if (_1d5.targetTouches && _1d5.targetTouches.length > 0) {
					_1d5 = _1d5.targetTouches[0];
				}
				var _1d6 = _1d1._getRowNode(_1d5.target);
				if (_1d6) {
					_1d1._setDataInfo(_1d6, _1d5);
					if (_1d1._selectedRow) {
						_1d1.onSelect(_1d6._data, _1d6._idx, _1d6);
					}
					this._deselectRow();
				}
			});
			if (this.enableDelete) {
				this.connect(this.domNode, "mousemove", function (_1d7) {
					dojo.stopEvent(_1d7);
					if (!_1d1._selectedRow) {
						return;
					}
					var _1d8 = _1d1._getRowNode(_1d7.target);
					if (_1d1.enableDelete && _1d8 && !_1d1._deleting) {
						_1d1.handleDrag(_1d7);
					}
				});
			}
			this.connect(this.domNode, "onclick", function (_1d9) {
				if (_1d9.touches && _1d9.touches.length > 0) {
					_1d9 = _1d9.touches[0];
				}
				var _1da = _1d1._getRowNode(_1d9.target, true);
				if (_1da) {
					_1d1._setDataInfo(_1da, _1d9);
				}
			});
			this.connect(this.domNode, "mouseout", function (_1db) {
				if (_1db.touches && _1db.touches.length > 0) {
					_1db = _1db.touches[0];
				}
				if (_1db.target == _1d1._selectedRow) {
					_1d1._deselectRow();
				}
			});
			if (!this.itemTemplate) {
				throw Error("An item template must be provided to " + this.declaredClass);
			}
			this._loadTemplate(this.itemTemplate, "itemTemplate", this._checkLoadComplete);
			if (this.emptyTemplate) {
				this._loadTemplate(this.emptyTemplate, "emptyTemplate", this._checkLoadComplete);
			}
			if (this.dividerTemplate) {
				this._loadTemplate(this.dividerTemplate, "dividerTemplate", this._checkLoadComplete);
			}
		}, handleDrag: function (_1dc) {
			var _1dd = _1dc;
			if (_1dc.targetTouches && _1dc.targetTouches.length > 0) {
				_1dd = _1dc.targetTouches[0];
			}
			var diff = _1dd.pageX - this._mouseDownPos.x;
			var _1de = Math.abs(diff);
			if (_1de > 10 && !this._dragThreshold) {
				this._dragThreshold = dojo.marginBox(this._selectedRow).w * 0.6;
				if (!this.autoDelete) {
					this.createDeleteButtons(this._selectedRow);
				}
			}
			this._selectedRow.style.left = (_1de > 10 ? diff : 0) + "px";
			if (this._dragThreshold && this._dragThreshold < _1de) {
				this.preDelete(diff);
			}
		}, handleDragCancel: function () {
			if (this._deleting) {
				return;
			}
			dojo.removeClass(this._selectedRow, "hold");
			this._selectedRow.style.left = 0;
			this._mouseDownPos = null;
			this._dragThreshold = null;
			this._deleteBtns && dojo.style(this._deleteBtns, "display", "none");
		}, preDelete: function (_1df) {
			var self = this;
			this._deleting = true;
			dojo.animateProperty({node: this._selectedRow, duration: 400, properties: {left: {end: _1df + ((_1df > 0 ? 1 : -1) * this._dragThreshold * 0.8)}}, onEnd: dojo.hitch(this, function () {
				if (this.autoDelete) {
					this.deleteRow(this._selectedRow);
				}
			})}).play();
		}, deleteRow: function (row) {
			dojo.style(row, {visibility: "hidden", minHeight: "0px"});
			dojo.removeClass(row, "hold");
			this._deleteAnimConn = this.connect(row, "webkitAnimationEnd", this._postDeleteAnim);
			dojo.addClass(row, "collapsed");
		}, _postDeleteAnim: function (_1e0) {
			if (this._deleteAnimConn) {
				this.disconnect(this._deleteAnimConn);
				this._deleteAnimConn = null;
			}
			var row = this._selectedRow;
			var _1e1 = row.nextSibling;
			var _1e2 = row.previousSibling;
			if (_1e2 && _1e2._isDivider) {
				if (!_1e1 || _1e1._isDivider) {
					_1e2.parentNode.removeChild(_1e2);
				}
			}
			row.parentNode.removeChild(row);
			this.onDelete(row._data, row._idx, this.items);
			while (_1e1) {
				if (_1e1._idx) {
					_1e1._idx--;
				}
				_1e1 = _1e1.nextSibling;
			}
			dojo.destroy(row);
			dojo.query("> *:not(.buttons)", this.domNode).forEach(this.applyClass);
			this._deleting = false;
			this._deselectRow();
		}, createDeleteButtons: function (_1e3) {
			var mb = dojo.marginBox(_1e3);
			var pos = dojo._abs(_1e3, true);
			if (!this._deleteBtns) {
				this._deleteBtns = dojo.create("div", {"class": "buttons"}, this.domNode);
				this.buttons = [];
				this.buttons.push(new dojox.mobile.Button({btnClass: "mblRedButton", label: this.labelDelete}));
				this.buttons.push(new dojox.mobile.Button({btnClass: "mblBlueButton", label: this.labelCancel}));
				dojo.place(this.buttons[0].domNode, this._deleteBtns);
				dojo.place(this.buttons[1].domNode, this._deleteBtns);
				dojo.addClass(this.buttons[0].domNode, "deleteBtn");
				dojo.addClass(this.buttons[1].domNode, "cancelBtn");
				this._handleButtonClick = dojo.hitch(this._handleButtonClick);
				this.connect(this._deleteBtns, "onclick", this._handleButtonClick);
			}
			dojo.removeClass(this._deleteBtns, "fade out fast");
			dojo.style(this._deleteBtns, {display: "", width: mb.w + "px", height: mb.h + "px", top: (_1e3.offsetTop) + "px", left: "0px"});
		}, onDelete: function (data, _1e4, _1e5) {
			_1e5.splice(_1e4, 1);
			if (_1e5.length < 1) {
				this.render();
			}
		}, cancelDelete: function () {
			this._deleting = false;
			this.handleDragCancel();
		}, _handleButtonClick: function (_1e6) {
			if (_1e6.touches && _1e6.touches.length > 0) {
				_1e6 = _1e6.touches[0];
			}
			var node = _1e6.target;
			if (dojo.hasClass(node, "deleteBtn")) {
				this.deleteRow(this._selectedRow);
			} else {
				if (dojo.hasClass(node, "cancelBtn")) {
					this.cancelDelete();
				} else {
					return;
				}
			}
			dojo.addClass(this._deleteBtns, "fade out");
		}, applyClass: function (node, idx, _1e7) {
			dojo.removeClass(node, "first last");
			if (idx == 0) {
				dojo.addClass(node, "first");
			}
			if (idx == _1e7.length - 1) {
				dojo.addClass(node, "last");
			}
		}, _setDataInfo: function (_1e8, _1e9) {
			_1e9.item = _1e8._data;
			_1e9.index = _1e8._idx;
		}, onSelect: function (data, _1ea, _1eb) {
		}, _selectRow: function (row) {
			if (this._deleting && this._selectedRow && row != this._selectedRow) {
				this.cancelDelete();
			}
			if (!dojo.hasClass(row, "row")) {
				return;
			}
			if (this.enableHold || this.enableDelete) {
				dojo.addClass(row, "hold");
			}
			this._selectedRow = row;
		}, _deselectRow: function () {
			if (!this._selectedRow || this._deleting) {
				return;
			}
			this.handleDragCancel();
			dojo.removeClass(this._selectedRow, "hold");
			this._selectedRow = null;
		}, _getRowNode: function (_1ec, _1ed) {
			while (_1ec && !_1ec._data && _1ec != this.domNode) {
				if (!_1ed && dojo.hasClass(_1ec, "noclick")) {
					return null;
				}
				_1ec = _1ec.parentNode;
			}
			return _1ec == this.domNode ? null : _1ec;
		}, applyTemplate: function (_1ee, data) {
			return dojo._toDom(dojo.string.substitute(_1ee, data, this._replaceToken, this.formatters || this));
		}, render: function () {
			dojo.query("> *:not(.buttons)", this.domNode).forEach(dojo.destroy);
			if (this.items.length < 1 && this.emptyTemplate) {
				dojo.place(dojo._toDom(this.emptyTemplate), this.domNode, "first");
			} else {
				this.domNode.appendChild(this._renderRange(0, this.items.length));
			}
			if (dojo.hasClass(this.domNode.parentNode, "mblRoundRect")) {
				dojo.addClass(this.domNode.parentNode, "mblRoundRectList");
			}
			var divs = dojo.query("> .row", this.domNode);
			if (divs.length > 0) {
				dojo.addClass(divs[0], "first");
				dojo.addClass(divs[divs.length - 1], "last");
			}
		}, _renderRange: function (_1ef, _1f0) {
			var rows = [];
			var row, i;
			var frag = document.createDocumentFragment();
			_1ef = Math.max(0, _1ef);
			_1f0 = Math.min(_1f0, this.items.length);
			for (i = _1ef; i < _1f0; i++) {
				row = this.applyTemplate(this.itemTemplate, this.items[i]);
				dojo.addClass(row, "row");
				row._data = this.items[i];
				row._idx = i;
				rows.push(row);
			}
			if (!this.dividerFunction || !this.dividerTemplate) {
				for (i = _1ef; i < _1f0; i++) {
					rows[i]._data = this.items[i];
					rows[i]._idx = i;
					frag.appendChild(rows[i]);
				}
			} else {
				var _1f1 = null;
				var _1f2;
				var _1f3;
				for (i = _1ef; i < _1f0; i++) {
					rows[i]._data = this.items[i];
					rows[i]._idx = i;
					_1f2 = this.dividerFunction(this.items[i]);
					if (_1f2 && _1f2 != _1f1) {
						_1f3 = this.applyTemplate(this.dividerTemplate, {label: _1f2, item: this.items[i]});
						_1f3._isDivider = true;
						frag.appendChild(_1f3);
						_1f1 = _1f2;
					}
					frag.appendChild(rows[i]);
				}
			}
			return frag;
		}, _replaceToken: function (_1f4, key) {
			if (key.charAt(0) == "!") {
				_1f4 = dojo.getObject(key.substr(1), false, _this);
			}
			if (typeof _1f4 == "undefined") {
				return "";
			}
			if (_1f4 == null) {
				return "";
			}
			return key.charAt(0) == "!" ? _1f4 : _1f4.toString().replace(/"/g, "&quot;");
		}, _checkLoadComplete: function () {
			this._templateLoadCount--;
			if (this._templateLoadCount < 1 && this.get("items")) {
				this.render();
			}
		}, _loadTemplate: function (url, _1f5, _1f6) {
			if (!url) {
				_1f6();
				return;
			}
			if (_1d0[url]) {
				this.set(_1f5, _1d0[url]);
				_1f6();
			} else {
				var _1f7 = this;
				dojo.xhrGet({url: url, sync: false, handleAs: "text", load: function (text) {
					_1d0[url] = dojo.trim(text);
					_1f7.set(_1f5, _1d0[url]);
					_1f6();
				}});
			}
		}, _setFormattersAttr: function (_1f8) {
			this.formatters = _1f8;
		}, _setItemsAttr: function (_1f9) {
			this.items = _1f9 || [];
			if (this._templateLoadCount < 1 && _1f9) {
				this.render();
			}
		}, destroy: function () {
			if (this.buttons) {
				dojo.forEach(this.buttons, function (_1fa) {
					_1fa.destroy();
				});
				this.buttons = null;
			}
			this.inherited(arguments);
		}});
	})();
}
if (!dojo._hasResource["dojo.fx.Toggler"]) {
	dojo._hasResource["dojo.fx.Toggler"] = true;
	dojo.provide("dojo.fx.Toggler");
	dojo.declare("dojo.fx.Toggler", null, {node: null, showFunc: dojo.fadeIn, hideFunc: dojo.fadeOut, showDuration: 200, hideDuration: 200, constructor: function (args) {
		var _1fb = this;
		dojo.mixin(_1fb, args);
		_1fb.node = args.node;
		_1fb._showArgs = dojo.mixin({}, args);
		_1fb._showArgs.node = _1fb.node;
		_1fb._showArgs.duration = _1fb.showDuration;
		_1fb.showAnim = _1fb.showFunc(_1fb._showArgs);
		_1fb._hideArgs = dojo.mixin({}, args);
		_1fb._hideArgs.node = _1fb.node;
		_1fb._hideArgs.duration = _1fb.hideDuration;
		_1fb.hideAnim = _1fb.hideFunc(_1fb._hideArgs);
		dojo.connect(_1fb.showAnim, "beforeBegin", dojo.hitch(_1fb.hideAnim, "stop", true));
		dojo.connect(_1fb.hideAnim, "beforeBegin", dojo.hitch(_1fb.showAnim, "stop", true));
	}, show: function (_1fc) {
		return this.showAnim.play(_1fc || 0);
	}, hide: function (_1fd) {
		return this.hideAnim.play(_1fd || 0);
	}});
}
if (!dojo._hasResource["dojo.fx"]) {
	dojo._hasResource["dojo.fx"] = true;
	dojo.provide("dojo.fx");
	(function () {
		var d = dojo, _1fe = {_fire: function (evt, args) {
			if (this[evt]) {
				this[evt].apply(this, args || []);
			}
			return this;
		}};
		var _1ff = function (_200) {
			this._index = -1;
			this._animations = _200 || [];
			this._current = this._onAnimateCtx = this._onEndCtx = null;
			this.duration = 0;
			d.forEach(this._animations, function (a) {
				this.duration += a.duration;
				if (a.delay) {
					this.duration += a.delay;
				}
			}, this);
		};
		d.extend(_1ff, {_onAnimate: function () {
			this._fire("onAnimate", arguments);
		}, _onEnd: function () {
			d.disconnect(this._onAnimateCtx);
			d.disconnect(this._onEndCtx);
			this._onAnimateCtx = this._onEndCtx = null;
			if (this._index + 1 == this._animations.length) {
				this._fire("onEnd");
			} else {
				this._current = this._animations[++this._index];
				this._onAnimateCtx = d.connect(this._current, "onAnimate", this, "_onAnimate");
				this._onEndCtx = d.connect(this._current, "onEnd", this, "_onEnd");
				this._current.play(0, true);
			}
		}, play: function (_201, _202) {
			if (!this._current) {
				this._current = this._animations[this._index = 0];
			}
			if (!_202 && this._current.status() == "playing") {
				return this;
			}
			var _203 = d.connect(this._current, "beforeBegin", this, function () {
				this._fire("beforeBegin");
			}), _204 = d.connect(this._current, "onBegin", this, function (arg) {
				this._fire("onBegin", arguments);
			}), _205 = d.connect(this._current, "onPlay", this, function (arg) {
				this._fire("onPlay", arguments);
				d.disconnect(_203);
				d.disconnect(_204);
				d.disconnect(_205);
			});
			if (this._onAnimateCtx) {
				d.disconnect(this._onAnimateCtx);
			}
			this._onAnimateCtx = d.connect(this._current, "onAnimate", this, "_onAnimate");
			if (this._onEndCtx) {
				d.disconnect(this._onEndCtx);
			}
			this._onEndCtx = d.connect(this._current, "onEnd", this, "_onEnd");
			this._current.play.apply(this._current, arguments);
			return this;
		}, pause: function () {
			if (this._current) {
				var e = d.connect(this._current, "onPause", this, function (arg) {
					this._fire("onPause", arguments);
					d.disconnect(e);
				});
				this._current.pause();
			}
			return this;
		}, gotoPercent: function (_206, _207) {
			this.pause();
			var _208 = this.duration * _206;
			this._current = null;
			d.some(this._animations, function (a) {
				if (a.duration <= _208) {
					this._current = a;
					return true;
				}
				_208 -= a.duration;
				return false;
			});
			if (this._current) {
				this._current.gotoPercent(_208 / this._current.duration, _207);
			}
			return this;
		}, stop: function (_209) {
			if (this._current) {
				if (_209) {
					for (; this._index + 1 < this._animations.length; ++this._index) {
						this._animations[this._index].stop(true);
					}
					this._current = this._animations[this._index];
				}
				var e = d.connect(this._current, "onStop", this, function (arg) {
					this._fire("onStop", arguments);
					d.disconnect(e);
				});
				this._current.stop();
			}
			return this;
		}, status: function () {
			return this._current ? this._current.status() : "stopped";
		}, destroy: function () {
			if (this._onAnimateCtx) {
				d.disconnect(this._onAnimateCtx);
			}
			if (this._onEndCtx) {
				d.disconnect(this._onEndCtx);
			}
		}});
		d.extend(_1ff, _1fe);
		dojo.fx.chain = function (_20a) {
			return new _1ff(_20a);
		};
		var _20b = function (_20c) {
			this._animations = _20c || [];
			this._connects = [];
			this._finished = 0;
			this.duration = 0;
			d.forEach(_20c, function (a) {
				var _20d = a.duration;
				if (a.delay) {
					_20d += a.delay;
				}
				if (this.duration < _20d) {
					this.duration = _20d;
				}
				this._connects.push(d.connect(a, "onEnd", this, "_onEnd"));
			}, this);
			this._pseudoAnimation = new d.Animation({curve: [0, 1], duration: this.duration});
			var self = this;
			d.forEach(["beforeBegin", "onBegin", "onPlay", "onAnimate", "onPause", "onStop", "onEnd"], function (evt) {
				self._connects.push(d.connect(self._pseudoAnimation, evt, function () {
					self._fire(evt, arguments);
				}));
			});
		};
		d.extend(_20b, {_doAction: function (_20e, args) {
			d.forEach(this._animations, function (a) {
				a[_20e].apply(a, args);
			});
			return this;
		}, _onEnd: function () {
			if (++this._finished > this._animations.length) {
				this._fire("onEnd");
			}
		}, _call: function (_20f, args) {
			var t = this._pseudoAnimation;
			t[_20f].apply(t, args);
		}, play: function (_210, _211) {
			this._finished = 0;
			this._doAction("play", arguments);
			this._call("play", arguments);
			return this;
		}, pause: function () {
			this._doAction("pause", arguments);
			this._call("pause", arguments);
			return this;
		}, gotoPercent: function (_212, _213) {
			var ms = this.duration * _212;
			d.forEach(this._animations, function (a) {
				a.gotoPercent(a.duration < ms ? 1 : (ms / a.duration), _213);
			});
			this._call("gotoPercent", arguments);
			return this;
		}, stop: function (_214) {
			this._doAction("stop", arguments);
			this._call("stop", arguments);
			return this;
		}, status: function () {
			return this._pseudoAnimation.status();
		}, destroy: function () {
			d.forEach(this._connects, dojo.disconnect);
		}});
		d.extend(_20b, _1fe);
		dojo.fx.combine = function (_215) {
			return new _20b(_215);
		};
		dojo.fx.wipeIn = function (args) {
			var node = args.node = d.byId(args.node), s = node.style, o;
			var anim = d.animateProperty(d.mixin({properties: {height: {start: function () {
				o = s.overflow;
				s.overflow = "hidden";
				if (s.visibility == "hidden" || s.display == "none") {
					s.height = "1px";
					s.display = "";
					s.visibility = "";
					return 1;
				} else {
					var _216 = d.style(node, "height");
					return Math.max(_216, 1);
				}
			}, end: function () {
				return node.scrollHeight;
			}}}}, args));
			d.connect(anim, "onEnd", function () {
				s.height = "auto";
				s.overflow = o;
			});
			return anim;
		};
		dojo.fx.wipeOut = function (args) {
			var node = args.node = d.byId(args.node), s = node.style, o;
			var anim = d.animateProperty(d.mixin({properties: {height: {end: 1}}}, args));
			d.connect(anim, "beforeBegin", function () {
				o = s.overflow;
				s.overflow = "hidden";
				s.display = "";
			});
			d.connect(anim, "onEnd", function () {
				s.overflow = o;
				s.height = "auto";
				s.display = "none";
			});
			return anim;
		};
		dojo.fx.slideTo = function (args) {
			var node = args.node = d.byId(args.node), top = null, left = null;
			var init = (function (n) {
				return function () {
					var cs = d.getComputedStyle(n);
					var pos = cs.position;
					top = (pos == "absolute" ? n.offsetTop : parseInt(cs.top) || 0);
					left = (pos == "absolute" ? n.offsetLeft : parseInt(cs.left) || 0);
					if (pos != "absolute" && pos != "relative") {
						var ret = d.position(n, true);
						top = ret.y;
						left = ret.x;
						n.style.position = "absolute";
						n.style.top = top + "px";
						n.style.left = left + "px";
					}
				};
			})(node);
			init();
			var anim = d.animateProperty(d.mixin({properties: {top: args.top || 0, left: args.left || 0}}, args));
			d.connect(anim, "beforeBegin", anim, init);
			return anim;
		};
	})();
}
if (!dojo._hasResource["dojox.mobile.app.ListSelector"]) {
	dojo._hasResource["dojox.mobile.app.ListSelector"] = true;
	dojo.provide("dojox.mobile.app.ListSelector");
	dojo.experimental("dojox.mobile.app.ListSelector");
	dojo.declare("dojox.mobile.app.ListSelector", dojox.mobile.app._Widget, {data: null, controller: null, onChoose: null, destroyOnHide: false, _setDataAttr: function (data) {
		this.data = data;
		if (this.data) {
			this.render();
		}
	}, postCreate: function () {
		dojo.addClass(this.domNode, "listSelector");
		var _217 = this;
		this.connect(this.domNode, "onclick", function (_218) {
			if (!dojo.hasClass(_218.target, "listSelectorRow")) {
				return;
			}
			if (_217.onChoose) {
				_217.onChoose(_217.data[_218.target._idx].value);
			}
			_217.hide();
		});
		this.connect(this.domNode, "onmousedown", function (_219) {
			if (!dojo.hasClass(_219.target, "listSelectorRow")) {
				return;
			}
			dojo.addClass(_219.target, "listSelectorRow-selected");
		});
		this.connect(this.domNode, "onmouseup", function (_21a) {
			if (!dojo.hasClass(_21a.target, "listSelectorRow")) {
				return;
			}
			dojo.removeClass(_21a.target, "listSelectorRow-selected");
		});
		this.connect(this.domNode, "onmouseout", function (_21b) {
			if (!dojo.hasClass(_21b.target, "listSelectorRow")) {
				return;
			}
			dojo.removeClass(_21b.target, "listSelectorRow-selected");
		});
		var _21c = this.controller.getWindowSize();
		this.mask = dojo.create("div", {"class": "dialogUnderlayWrapper", innerHTML: "<div class=\"dialogUnderlay\"></div>"}, this.controller.assistant.domNode);
		this.connect(this.mask, "onclick", function () {
			_217.onChoose && _217.onChoose();
			_217.hide();
		});
	}, show: function (_21d) {
		var _21e;
		var _21f = this.controller.getWindowSize();
		var _220;
		if (_21d) {
			_220 = dojo._abs(_21d);
			_21e = _220;
		} else {
			_21e.x = _21f.w / 2;
			_21e.y = 200;
		}
		dojo.style(this.domNode, {opacity: 0, display: "", width: Math.floor(_21f.w * 0.8) + "px"});
		var _221 = 0;
		dojo.query(">", this.domNode).forEach(function (node) {
			dojo.style(node, {"float": "left"});
			_221 = Math.max(_221, dojo.marginBox(node).w);
			dojo.style(node, {"float": "none"});
		});
		_221 = Math.min(_221, Math.round(_21f.w * 0.8)) + dojo.style(this.domNode, "paddingLeft") + dojo.style(this.domNode, "paddingRight") + 1;
		dojo.style(this.domNode, "width", _221 + "px");
		var _222 = dojo.marginBox(this.domNode).h;
		var _223 = this;
		var _224 = _220 ? Math.max(30, _220.y - _222 - 10) : this.getScroll().y + 30;
		var _225 = dojo.animateProperty({node: this.domNode, duration: 400, properties: {width: {start: 1, end: _221}, height: {start: 1, end: _222}, top: {start: _21e.y, end: _224}, left: {start: _21e.x, end: (_21f.w / 2 - _221 / 2)}, opacity: {start: 0, end: 1}, fontSize: {start: 1}}, onEnd: function () {
			dojo.style(_223.domNode, "width", "inherit");
		}});
		var _226 = dojo.fadeIn({node: this.mask, duration: 400});
		dojo.fx.combine([_225, _226]).play();
	}, hide: function () {
		var _227 = this;
		var _228 = dojo.animateProperty({node: this.domNode, duration: 500, properties: {width: {end: 1}, height: {end: 1}, opacity: {end: 0}, fontSize: {end: 1}}, onEnd: function () {
			if (_227.get("destroyOnHide")) {
				_227.destroy();
			}
		}});
		var _229 = dojo.fadeOut({node: this.mask, duration: 400});
		dojo.fx.combine([_228, _229]).play();
	}, render: function () {
		dojo.empty(this.domNode);
		dojo.style(this.domNode, "opacity", 0);
		var row;
		for (var i = 0; i < this.data.length; i++) {
			row = dojo.create("div", {"class": "listSelectorRow " + (this.data[i].className || ""), innerHTML: this.data[i].label}, this.domNode);
			row._idx = i;
			if (i == 0) {
				dojo.addClass(row, "first");
			}
			if (i == this.data.length - 1) {
				dojo.addClass(row, "last");
			}
		}
	}, destroy: function () {
		this.inherited(arguments);
		dojo.destroy(this.mask);
	}});
}
if (!dojo._hasResource["dojox.mobile.app._FormWidget"]) {
	dojo._hasResource["dojox.mobile.app._FormWidget"] = true;
	dojo.provide("dojox.mobile.app._FormWidget");
	dojo.experimental("dojox.mobile.app._FormWidget");
	dojo.declare("dojox.mobile.app._FormWidget", dijit._WidgetBase, {name: "", alt: "", value: "", type: "text", disabled: false, intermediateChanges: false, scrollOnFocus: false, attributeMap: dojo.delegate(dijit._WidgetBase.prototype.attributeMap, {value: "focusNode", id: "focusNode", alt: "focusNode", title: "focusNode"}), postMixInProperties: function () {
		this.nameAttrSetting = this.name ? ("name=\"" + this.name.replace(/'/g, "&quot;") + "\"") : "";
		this.inherited(arguments);
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this.domNode, "onmousedown", "_onMouseDown");
	}, _setDisabledAttr: function (_22a) {
		this.disabled = _22a;
		dojo.attr(this.focusNode, "disabled", _22a);
		if (this.valueNode) {
			dojo.attr(this.valueNode, "disabled", _22a);
		}
	}, _onFocus: function (e) {
		if (this.scrollOnFocus) {
			dojo.window.scrollIntoView(this.domNode);
		}
		this.inherited(arguments);
	}, isFocusable: function () {
		return !this.disabled && !this.readOnly && this.focusNode && (dojo.style(this.domNode, "display") != "none");
	}, focus: function () {
		this.focusNode.focus();
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
	}, onChange: function (_22b) {
	}, _onChangeActive: false, _handleOnChange: function (_22c, _22d) {
		this._lastValue = _22c;
		if (this._lastValueReported == undefined && (_22d === null || !this._onChangeActive)) {
			this._resetValue = this._lastValueReported = _22c;
		}
		if ((this.intermediateChanges || _22d || _22d === undefined) && ((typeof _22c != typeof this._lastValueReported) || this.compare(_22c, this._lastValueReported) != 0)) {
			this._lastValueReported = _22c;
			if (this._onChangeActive) {
				if (this._onChangeHandle) {
					clearTimeout(this._onChangeHandle);
				}
				this._onChangeHandle = setTimeout(dojo.hitch(this, function () {
					this._onChangeHandle = null;
					this.onChange(_22c);
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
	}, _onMouseDown: function (e) {
		if (this.isFocusable()) {
			var _22e = this.connect(dojo.body(), "onmouseup", function () {
				if (this.isFocusable()) {
					this.focus();
				}
				this.disconnect(_22e);
			});
		}
	}, selectInputText: function (_22f, _230, stop) {
		var _231 = dojo.global;
		var _232 = dojo.doc;
		_22f = dojo.byId(_22f);
		if (isNaN(_230)) {
			_230 = 0;
		}
		if (isNaN(stop)) {
			stop = _22f.value ? _22f.value.length : 0;
		}
		dijit.focus(_22f);
		if (_231["getSelection"] && _22f.setSelectionRange) {
			_22f.setSelectionRange(_230, stop);
		}
	}});
	dojo.declare("dojox.mobile.app._FormValueWidget", dojox.mobile.app._FormWidget, {readOnly: false, attributeMap: dojo.delegate(dojox.mobile.app._FormWidget.prototype.attributeMap, {value: "", readOnly: "focusNode"}), _setReadOnlyAttr: function (_233) {
		this.readOnly = _233;
		dojo.attr(this.focusNode, "readOnly", _233);
	}, postCreate: function () {
		this.inherited(arguments);
		if (this._resetValue === undefined) {
			this._resetValue = this.value;
		}
	}, _setValueAttr: function (_234, _235) {
		this.value = _234;
		this._handleOnChange(_234, _235);
	}, _getValueAttr: function () {
		return this._lastValue;
	}, undo: function () {
		this._setValueAttr(this._lastValueReported, false);
	}, reset: function () {
		this._hasBeenBlurred = false;
		this._setValueAttr(this._resetValue, true);
	}});
}
if (!dojo._hasResource["dojox.mobile.app.TextBox"]) {
	dojo._hasResource["dojox.mobile.app.TextBox"] = true;
	dojo.provide("dojox.mobile.app.TextBox");
	dojo.experimental("dojox.mobile.app.TextBox");
	dojo.declare("dojox.mobile.app.TextBox", dojox.mobile.app._FormValueWidget, {trim: false, uppercase: false, lowercase: false, propercase: false, maxLength: "", selectOnClick: false, placeHolder: "", baseClass: "mblTextBox", attributeMap: dojo.delegate(dojox.mobile.app._FormValueWidget.prototype.attributeMap, {maxLength: "focusNode"}), buildRendering: function () {
		var node = this.srcNodeRef;
		if (!node || node.tagName != "INPUT") {
			node = dojo.create("input", {});
		}
		dojo.attr(node, {type: "text", value: dojo.attr(node, "value") || "", placeholder: this.placeHolder || null});
		this.domNode = this.textbox = this.focusNode = node;
	}, _setPlaceHolderAttr: function (v) {
		this.placeHolder = v;
		if (this.textbox) {
			dojo.attr(this.textbox, "placeholder", v);
		}
	}, _getValueAttr: function () {
		return this.parse(this.get("displayedValue"), this.constraints);
	}, _setValueAttr: function (_236, _237, _238) {
		var _239;
		if (_236 !== undefined) {
			_239 = this.filter(_236);
			if (typeof _238 != "string") {
				if (_239 !== null && ((typeof _239 != "number") || !isNaN(_239))) {
					_238 = this.filter(this.format(_239, this.constraints));
				} else {
					_238 = "";
				}
			}
		}
		if (_238 != null && _238 != undefined && ((typeof _238) != "number" || !isNaN(_238)) && this.textbox.value != _238) {
			this.textbox.value = _238;
		}
		this.inherited(arguments, [_239, _237]);
	}, displayedValue: "", _getDisplayedValueAttr: function () {
		return this.filter(this.textbox.value);
	}, _setDisplayedValueAttr: function (_23a) {
		if (_23a === null || _23a === undefined) {
			_23a = "";
		} else {
			if (typeof _23a != "string") {
				_23a = String(_23a);
			}
		}
		this.textbox.value = _23a;
		this._setValueAttr(this.get("value"), undefined, _23a);
	}, format: function (_23b, _23c) {
		return ((_23b == null || _23b == undefined) ? "" : (_23b.toString ? _23b.toString() : _23b));
	}, parse: function (_23d, _23e) {
		return _23d;
	}, _refreshState: function () {
	}, _onInput: function (e) {
		if (e && e.type && /key/i.test(e.type) && e.keyCode) {
			switch (e.keyCode) {
				case dojo.keys.SHIFT:
				case dojo.keys.ALT:
				case dojo.keys.CTRL:
				case dojo.keys.TAB:
					return;
			}
		}
		if (this.intermediateChanges) {
			var _23f = this;
			setTimeout(function () {
				_23f._handleOnChange(_23f.get("value"), false);
			}, 0);
		}
		this._refreshState();
	}, postCreate: function () {
		this.textbox.setAttribute("value", this.textbox.value);
		this.inherited(arguments);
		if (dojo.isMoz || dojo.isOpera) {
			this.connect(this.textbox, "oninput", this._onInput);
		} else {
			this.connect(this.textbox, "onkeydown", this._onInput);
			this.connect(this.textbox, "onkeyup", this._onInput);
			this.connect(this.textbox, "onpaste", this._onInput);
			this.connect(this.textbox, "oncut", this._onInput);
		}
	}, _blankValue: "", filter: function (val) {
		if (val === null) {
			return this._blankValue;
		}
		if (typeof val != "string") {
			return val;
		}
		if (this.trim) {
			val = dojo.trim(val);
		}
		if (this.uppercase) {
			val = val.toUpperCase();
		}
		if (this.lowercase) {
			val = val.toLowerCase();
		}
		if (this.propercase) {
			val = val.replace(/[^\s]+/g, function (word) {
				return word.substring(0, 1).toUpperCase() + word.substring(1);
			});
		}
		return val;
	}, _setBlurValue: function () {
		this._setValueAttr(this.get("value"), true);
	}, _onBlur: function (e) {
		if (this.disabled) {
			return;
		}
		this._setBlurValue();
		this.inherited(arguments);
		if (this._selectOnClickHandle) {
			this.disconnect(this._selectOnClickHandle);
		}
		if (this.selectOnClick && dojo.isMoz) {
			this.textbox.selectionStart = this.textbox.selectionEnd = undefined;
		}
	}, _onFocus: function (by) {
		if (this.disabled || this.readOnly) {
			return;
		}
		if (this.selectOnClick && by == "mouse") {
			this._selectOnClickHandle = this.connect(this.domNode, "onmouseup", function () {
				this.disconnect(this._selectOnClickHandle);
				var _240;
				_240 = this.textbox.selectionStart == this.textbox.selectionEnd;
				if (_240) {
					this.selectInputText(this.textbox);
				}
			});
		}
		this._refreshState();
		this.inherited(arguments);
	}, reset: function () {
		this.textbox.value = "";
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dojo.fx.easing"]) {
	dojo._hasResource["dojo.fx.easing"] = true;
	dojo.provide("dojo.fx.easing");
	dojo.getObject("fx.easing", true, dojo);
	dojo.fx.easing = {linear: function (n) {
		return n;
	}, quadIn: function (n) {
		return Math.pow(n, 2);
	}, quadOut: function (n) {
		return n * (n - 2) * -1;
	}, quadInOut: function (n) {
		n = n * 2;
		if (n < 1) {
			return Math.pow(n, 2) / 2;
		}
		return -1 * ((--n) * (n - 2) - 1) / 2;
	}, cubicIn: function (n) {
		return Math.pow(n, 3);
	}, cubicOut: function (n) {
		return Math.pow(n - 1, 3) + 1;
	}, cubicInOut: function (n) {
		n = n * 2;
		if (n < 1) {
			return Math.pow(n, 3) / 2;
		}
		n -= 2;
		return (Math.pow(n, 3) + 2) / 2;
	}, quartIn: function (n) {
		return Math.pow(n, 4);
	}, quartOut: function (n) {
		return -1 * (Math.pow(n - 1, 4) - 1);
	}, quartInOut: function (n) {
		n = n * 2;
		if (n < 1) {
			return Math.pow(n, 4) / 2;
		}
		n -= 2;
		return -1 / 2 * (Math.pow(n, 4) - 2);
	}, quintIn: function (n) {
		return Math.pow(n, 5);
	}, quintOut: function (n) {
		return Math.pow(n - 1, 5) + 1;
	}, quintInOut: function (n) {
		n = n * 2;
		if (n < 1) {
			return Math.pow(n, 5) / 2;
		}
		n -= 2;
		return (Math.pow(n, 5) + 2) / 2;
	}, sineIn: function (n) {
		return -1 * Math.cos(n * (Math.PI / 2)) + 1;
	}, sineOut: function (n) {
		return Math.sin(n * (Math.PI / 2));
	}, sineInOut: function (n) {
		return -1 * (Math.cos(Math.PI * n) - 1) / 2;
	}, expoIn: function (n) {
		return (n == 0) ? 0 : Math.pow(2, 10 * (n - 1));
	}, expoOut: function (n) {
		return (n == 1) ? 1 : (-1 * Math.pow(2, -10 * n) + 1);
	}, expoInOut: function (n) {
		if (n == 0) {
			return 0;
		}
		if (n == 1) {
			return 1;
		}
		n = n * 2;
		if (n < 1) {
			return Math.pow(2, 10 * (n - 1)) / 2;
		}
		--n;
		return (-1 * Math.pow(2, -10 * n) + 2) / 2;
	}, circIn: function (n) {
		return -1 * (Math.sqrt(1 - Math.pow(n, 2)) - 1);
	}, circOut: function (n) {
		n = n - 1;
		return Math.sqrt(1 - Math.pow(n, 2));
	}, circInOut: function (n) {
		n = n * 2;
		if (n < 1) {
			return -1 / 2 * (Math.sqrt(1 - Math.pow(n, 2)) - 1);
		}
		n -= 2;
		return 1 / 2 * (Math.sqrt(1 - Math.pow(n, 2)) + 1);
	}, backIn: function (n) {
		var s = 1.70158;
		return Math.pow(n, 2) * ((s + 1) * n - s);
	}, backOut: function (n) {
		n = n - 1;
		var s = 1.70158;
		return Math.pow(n, 2) * ((s + 1) * n + s) + 1;
	}, backInOut: function (n) {
		var s = 1.70158 * 1.525;
		n = n * 2;
		if (n < 1) {
			return (Math.pow(n, 2) * ((s + 1) * n - s)) / 2;
		}
		n -= 2;
		return (Math.pow(n, 2) * ((s + 1) * n + s) + 2) / 2;
	}, elasticIn: function (n) {
		if (n == 0 || n == 1) {
			return n;
		}
		var p = 0.3;
		var s = p / 4;
		n = n - 1;
		return -1 * Math.pow(2, 10 * n) * Math.sin((n - s) * (2 * Math.PI) / p);
	}, elasticOut: function (n) {
		if (n == 0 || n == 1) {
			return n;
		}
		var p = 0.3;
		var s = p / 4;
		return Math.pow(2, -10 * n) * Math.sin((n - s) * (2 * Math.PI) / p) + 1;
	}, elasticInOut: function (n) {
		if (n == 0) {
			return 0;
		}
		n = n * 2;
		if (n == 2) {
			return 1;
		}
		var p = 0.3 * 1.5;
		var s = p / 4;
		if (n < 1) {
			n -= 1;
			return -0.5 * (Math.pow(2, 10 * n) * Math.sin((n - s) * (2 * Math.PI) / p));
		}
		n -= 1;
		return 0.5 * (Math.pow(2, -10 * n) * Math.sin((n - s) * (2 * Math.PI) / p)) + 1;
	}, bounceIn: function (n) {
		return (1 - dojo.fx.easing.bounceOut(1 - n));
	}, bounceOut: function (n) {
		var s = 7.5625;
		var p = 2.75;
		var l;
		if (n < (1 / p)) {
			l = s * Math.pow(n, 2);
		} else {
			if (n < (2 / p)) {
				n -= (1.5 / p);
				l = s * Math.pow(n, 2) + 0.75;
			} else {
				if (n < (2.5 / p)) {
					n -= (2.25 / p);
					l = s * Math.pow(n, 2) + 0.9375;
				} else {
					n -= (2.625 / p);
					l = s * Math.pow(n, 2) + 0.984375;
				}
			}
		}
		return l;
	}, bounceInOut: function (n) {
		if (n < 0.5) {
			return dojo.fx.easing.bounceIn(n * 2) / 2;
		}
		return (dojo.fx.easing.bounceOut(n * 2 - 1) / 2) + 0.5;
	}};
}
if (!dojo._hasResource["dojox.mobile.app.ImageView"]) {
	dojo._hasResource["dojox.mobile.app.ImageView"] = true;
	dojo.provide("dojox.mobile.app.ImageView");
	dojo.experimental("dojox.mobile.app.ImageView");
	dojo.declare("dojox.mobile.app.ImageView", dojox.mobile.app._Widget, {zoom: 1, zoomCenterX: 0, zoomCenterY: 0, maxZoom: 5, autoZoomLevel: 3, disableAutoZoom: false, disableSwipe: false, autoZoomEvent: null, _leftImg: null, _centerImg: null, _rightImg: null, _leftSmallImg: null, _centerSmallImg: null, _rightSmallImg: null, constructor: function () {
		this.panX = 0;
		this.panY = 0;
		this.handleLoad = dojo.hitch(this, this.handleLoad);
		this._updateAnimatedZoom = dojo.hitch(this, this._updateAnimatedZoom);
		this._updateAnimatedPan = dojo.hitch(this, this._updateAnimatedPan);
		this._onAnimPanEnd = dojo.hitch(this, this._onAnimPanEnd);
	}, buildRendering: function () {
		this.inherited(arguments);
		this.canvas = dojo.create("canvas", {}, this.domNode);
		dojo.addClass(this.domNode, "mblImageView");
	}, postCreate: function () {
		this.inherited(arguments);
		this.size = dojo.marginBox(this.domNode);
		dojo.style(this.canvas, {width: this.size.w + "px", height: this.size.h + "px"});
		this.canvas.height = this.size.h;
		this.canvas.width = this.size.w;
		var _241 = this;
		this.connect(this.domNode, "onmousedown", function (_242) {
			if (_241.isAnimating()) {
				return;
			}
			if (_241.panX) {
				_241.handleDragEnd();
			}
			_241.downX = _242.targetTouches ? _242.targetTouches[0].clientX : _242.clientX;
			_241.downY = _242.targetTouches ? _242.targetTouches[0].clientY : _242.clientY;
		});
		this.connect(this.domNode, "onmousemove", function (_243) {
			if (_241.isAnimating()) {
				return;
			}
			if ((!_241.downX && _241.downX !== 0) || (!_241.downY && _241.downY !== 0)) {
				return;
			}
			if ((!_241.disableSwipe && _241.zoom == 1) || (!_241.disableAutoZoom && _241.zoom != 1)) {
				var x = _243.targetTouches ? _243.targetTouches[0].clientX : _243.pageX;
				var y = _243.targetTouches ? _243.targetTouches[0].clientY : _243.pageY;
				_241.panX = x - _241.downX;
				_241.panY = y - _241.downY;
				if (_241.zoom == 1) {
					if (Math.abs(_241.panX) > 10) {
						_241.render();
					}
				} else {
					if (Math.abs(_241.panX) > 10 || Math.abs(_241.panY) > 10) {
						_241.render();
					}
				}
			}
		});
		this.connect(this.domNode, "onmouseout", function (_244) {
			if (!_241.isAnimating() && _241.panX) {
				_241.handleDragEnd();
			}
		});
		this.connect(this.domNode, "onmouseover", function (_245) {
			_241.downX = _241.downY = null;
		});
		this.connect(this.domNode, "onclick", function (_246) {
			if (_241.isAnimating()) {
				return;
			}
			if (_241.downX == null || _241.downY == null) {
				return;
			}
			var x = (_246.targetTouches ? _246.targetTouches[0].clientX : _246.pageX);
			var y = (_246.targetTouches ? _246.targetTouches[0].clientY : _246.pageY);
			if (Math.abs(_241.panX) > 14 || Math.abs(_241.panY) > 14) {
				_241.downX = _241.downY = null;
				_241.handleDragEnd();
				return;
			}
			_241.downX = _241.downY = null;
			if (!_241.disableAutoZoom) {
				if (!_241._centerImg || !_241._centerImg._loaded) {
					return;
				}
				if (_241.zoom != 1) {
					_241.set("animatedZoom", 1);
					return;
				}
				var pos = dojo._abs(_241.domNode);
				var _247 = _241.size.w / _241._centerImg.width;
				var _248 = _241.size.h / _241._centerImg.height;
				_241.zoomTo(((x - pos.x) / _247) - _241.panX, ((y - pos.y) / _248) - _241.panY, _241.autoZoomLevel);
			}
		});
		dojo.connect(this.domNode, "flick", this, "handleFlick");
	}, isAnimating: function () {
		return this._anim && this._anim.status() == "playing";
	}, handleDragEnd: function () {
		this.downX = this.downY = null;
		if (this.zoom == 1) {
			if (!this.panX) {
				return;
			}
			var _249 = (this._leftImg && this._leftImg._loaded) || (this._leftSmallImg && this._leftSmallImg._loaded);
			var _24a = (this._rightImg && this._rightImg._loaded) || (this._rightSmallImg && this._rightSmallImg._loaded);
			var _24b = !(Math.abs(this.panX) < this._centerImg._baseWidth / 2) && ((this.panX > 0 && _249 ? 1 : 0) || (this.panX < 0 && _24a ? 1 : 0));
			if (!_24b) {
				this._animPanTo(0, dojo.fx.easing.expoOut, 700);
			} else {
				this.moveTo(this.panX);
			}
		} else {
			if (!this.panX && !this.panY) {
				return;
			}
			this.zoomCenterX -= (this.panX / this.zoom);
			this.zoomCenterY -= (this.panY / this.zoom);
			this.panX = this.panY = 0;
		}
	}, handleFlick: function (_24c) {
		if (this.zoom == 1 && _24c.duration < 500) {
			if (_24c.direction == "ltr") {
				this.moveTo(1);
			} else {
				if (_24c.direction == "rtl") {
					this.moveTo(-1);
				}
			}
			this.downX = this.downY = null;
		}
	}, moveTo: function (_24d) {
		_24d = _24d > 0 ? 1 : -1;
		var _24e;
		if (_24d < 1) {
			if (this._rightImg && this._rightImg._loaded) {
				_24e = this._rightImg;
			} else {
				if (this._rightSmallImg && this._rightSmallImg._loaded) {
					_24e = this._rightSmallImg;
				}
			}
		} else {
			if (this._leftImg && this._leftImg._loaded) {
				_24e = this._leftImg;
			} else {
				if (this._leftSmallImg && this._leftSmallImg._loaded) {
					_24e = this._leftSmallImg;
				}
			}
		}
		this._moveDir = _24d;
		var _24f = this;
		if (_24e && _24e._loaded) {
			this._animPanTo(this.size.w * _24d, null, 500, function () {
				_24f.panX = 0;
				_24f.panY = 0;
				if (_24d < 0) {
					_24f._switchImage("left", "right");
				} else {
					_24f._switchImage("right", "left");
				}
				_24f.render();
				_24f.onChange(_24d * -1);
			});
		} else {
			this._animPanTo(0, dojo.fx.easing.expoOut, 700);
		}
	}, _switchImage: function (_250, _251) {
		var _252 = "_" + _250 + "SmallImg";
		var _253 = "_" + _250 + "Img";
		var _254 = "_" + _251 + "SmallImg";
		var _255 = "_" + _251 + "Img";
		this[_253] = this._centerImg;
		this[_252] = this._centerSmallImg;
		this[_253]._type = _250;
		if (this[_252]) {
			this[_252]._type = _250;
		}
		this._centerImg = this[_255];
		this._centerSmallImg = this[_254];
		this._centerImg._type = "center";
		if (this._centerSmallImg) {
			this._centerSmallImg._type = "center";
		}
		this[_255] = this[_254] = null;
	}, _animPanTo: function (to, _256, _257, _258) {
		this._animCallback = _258;
		this._anim = new dojo.Animation({curve: [this.panX, to], onAnimate: this._updateAnimatedPan, duration: _257 || 500, easing: _256, onEnd: this._onAnimPanEnd});
		this._anim.play();
		return this._anim;
	}, onChange: function (_259) {
	}, _updateAnimatedPan: function (_25a) {
		this.panX = _25a;
		this.render();
	}, _onAnimPanEnd: function () {
		this.panX = this.panY = 0;
		if (this._animCallback) {
			this._animCallback();
		}
	}, zoomTo: function (_25b, _25c, zoom) {
		this.set("zoomCenterX", _25b);
		this.set("zoomCenterY", _25c);
		this.set("animatedZoom", zoom);
	}, render: function () {
		var cxt = this.canvas.getContext("2d");
		cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this._renderImg(this._centerSmallImg, this._centerImg, this.zoom == 1 ? (this.panX < 0 ? 1 : this.panX > 0 ? -1 : 0) : 0);
		if (this.zoom == 1 && this.panX != 0) {
			if (this.panX > 0) {
				this._renderImg(this._leftSmallImg, this._leftImg, 1);
			} else {
				this._renderImg(this._rightSmallImg, this._rightImg, -1);
			}
		}
	}, _renderImg: function (_25d, _25e, _25f) {
		var img = (_25e && _25e._loaded) ? _25e : _25d;
		if (!img || !img._loaded) {
			return;
		}
		var cxt = this.canvas.getContext("2d");
		var _260 = img._baseWidth;
		var _261 = img._baseHeight;
		var _262 = _260 * this.zoom;
		var _263 = _261 * this.zoom;
		var _264 = Math.min(this.size.w, _262);
		var _265 = Math.min(this.size.h, _263);
		var _266 = this.dispWidth = img.width * (_264 / _262);
		var _267 = this.dispHeight = img.height * (_265 / _263);
		var _268 = this.zoomCenterX - (this.panX / this.zoom);
		var _269 = this.zoomCenterY - (this.panY / this.zoom);
		var _26a = Math.floor(Math.max(_266 / 2, Math.min(img.width - _266 / 2, _268)));
		var _26b = Math.floor(Math.max(_267 / 2, Math.min(img.height - _267 / 2, _269)));
		var _26c = Math.max(0, Math.round((img.width - _266) / 2 + (_26a - img._centerX)));
		var _26d = Math.max(0, Math.round((img.height - _267) / 2 + (_26b - img._centerY)));
		var _26e = Math.round(Math.max(0, this.canvas.width - _264) / 2);
		var _26f = Math.round(Math.max(0, this.canvas.height - _265) / 2);
		var _270 = _264;
		var _271 = _266;
		if (this.zoom == 1 && _25f && this.panX) {
			if (this.panX < 0) {
				if (_25f > 0) {
					_264 -= Math.abs(this.panX);
					_26e = 0;
				} else {
					if (_25f < 0) {
						_264 = Math.max(1, Math.abs(this.panX) - 5);
						_26e = this.size.w - _264;
					}
				}
			} else {
				if (_25f > 0) {
					_264 = Math.max(1, Math.abs(this.panX) - 5);
					_26e = 0;
				} else {
					if (_25f < 0) {
						_264 -= Math.abs(this.panX);
						_26e = this.size.w - _264;
					}
				}
			}
			_266 = Math.max(1, Math.floor(_266 * (_264 / _270)));
			if (_25f > 0) {
				_26c = (_26c + _271) - (_266);
			}
			_26c = Math.floor(_26c);
		}
		try {
			cxt.drawImage(img, Math.max(0, _26c), _26d, Math.min(_271, _266), _267, _26e, _26f, Math.min(_270, _264), _265);
		} catch (e) {
		}
	}, _setZoomAttr: function (_272) {
		this.zoom = Math.min(this.maxZoom, Math.max(1, _272));
		if (this.zoom == 1 && this._centerImg && this._centerImg._loaded) {
			if (!this.isAnimating()) {
				this.zoomCenterX = this._centerImg.width / 2;
				this.zoomCenterY = this._centerImg.height / 2;
			}
			this.panX = this.panY = 0;
		}
		this.render();
	}, _setZoomCenterXAttr: function (_273) {
		if (_273 != this.zoomCenterX) {
			if (this._centerImg && this._centerImg._loaded) {
				_273 = Math.min(this._centerImg.width, _273);
			}
			this.zoomCenterX = Math.max(0, Math.round(_273));
		}
	}, _setZoomCenterYAttr: function (_274) {
		if (_274 != this.zoomCenterY) {
			if (this._centerImg && this._centerImg._loaded) {
				_274 = Math.min(this._centerImg.height, _274);
			}
			this.zoomCenterY = Math.max(0, Math.round(_274));
		}
	}, _setZoomCenterAttr: function (_275) {
		if (_275.x != this.zoomCenterX || _275.y != this.zoomCenterY) {
			this.set("zoomCenterX", _275.x);
			this.set("zoomCenterY", _275.y);
			this.render();
		}
	}, _setAnimatedZoomAttr: function (_276) {
		if (this._anim && this._anim.status() == "playing") {
			return;
		}
		this._anim = new dojo.Animation({curve: [this.zoom, _276], onAnimate: this._updateAnimatedZoom, onEnd: this._onAnimEnd});
		this._anim.play();
	}, _updateAnimatedZoom: function (_277) {
		this._setZoomAttr(_277);
	}, _setCenterUrlAttr: function (_278) {
		this._setImage("center", _278);
	}, _setLeftUrlAttr: function (_279) {
		this._setImage("left", _279);
	}, _setRightUrlAttr: function (_27a) {
		this._setImage("right", _27a);
	}, _setImage: function (name, _27b) {
		var _27c = null;
		var _27d = null;
		if (dojo.isString(_27b)) {
			_27d = _27b;
		} else {
			_27d = _27b.large;
			_27c = _27b.small;
		}
		if (this["_" + name + "Img"] && this["_" + name + "Img"]._src == _27d) {
			return;
		}
		var _27e = this["_" + name + "Img"] = new Image();
		_27e._type = name;
		_27e._loaded = false;
		_27e._src = _27d;
		_27e._conn = dojo.connect(_27e, "onload", this.handleLoad);
		if (_27c) {
			var _27f = this["_" + name + "SmallImg"] = new Image();
			_27f._type = name;
			_27f._loaded = false;
			_27f._conn = dojo.connect(_27f, "onload", this.handleLoad);
			_27f._isSmall = true;
			_27f._src = _27c;
			_27f.src = _27c;
		}
		_27e.src = _27d;
	}, handleLoad: function (evt) {
		var img = evt.target;
		img._loaded = true;
		dojo.disconnect(img._conn);
		var type = img._type;
		switch (type) {
			case "center":
				this.zoomCenterX = img.width / 2;
				this.zoomCenterY = img.height / 2;
				break;
		}
		var _280 = img.height;
		var _281 = img.width;
		if (_281 / this.size.w < _280 / this.size.h) {
			img._baseHeight = this.canvas.height;
			img._baseWidth = _281 / (_280 / this.size.h);
		} else {
			img._baseWidth = this.canvas.width;
			img._baseHeight = _280 / (_281 / this.size.w);
		}
		img._centerX = _281 / 2;
		img._centerY = _280 / 2;
		this.render();
		this.onLoad(img._type, img._src, img._isSmall);
	}, onLoad: function (type, url, _282) {
	}});
}
if (!dojo._hasResource["dojox.mobile.app.ImageThumbView"]) {
	dojo._hasResource["dojox.mobile.app.ImageThumbView"] = true;
	dojo.provide("dojox.mobile.app.ImageThumbView");
	dojo.experimental("dojox.mobile.app.ImageThumbView");
	dojo.declare("dojox.mobile.app.ImageThumbView", dijit._WidgetBase, {items: [], urlParam: "url", labelParam: null, itemTemplate: "<div class=\"mblThumbInner\">" + "<div class=\"mblThumbOverlay\"></div>" + "<div class=\"mblThumbMask\">" + "<div class=\"mblThumbSrc\" style=\"background-image:url(${url})\"></div>" + "</div>" + "</div>", minPadding: 4, maxPerRow: 3, maxRows: -1, baseClass: "mblImageThumbView", thumbSize: "medium", animationEnabled: true, selectedIndex: -1, cache: null, cacheMustMatch: false, clickEvent: "onclick", cacheBust: false, disableHide: false, constructor: function (_283, node) {
	}, postCreate: function () {
		this.inherited(arguments);
		var _284 = this;
		var _285 = "mblThumbHover";
		this.addThumb = dojo.hitch(this, this.addThumb);
		this.handleImgLoad = dojo.hitch(this, this.handleImgLoad);
		this.hideCached = dojo.hitch(this, this.hideCached);
		this._onLoadImages = {};
		this.cache = [];
		this.visibleImages = [];
		this._cacheCounter = 0;
		this.connect(this.domNode, this.clickEvent, function (_286) {
			var _287 = _284._getItemNodeFromEvent(_286);
			if (_287 && !_287._cached) {
				_284.onSelect(_287._item, _287._index, _284.items);
				dojo.query(".selected", this.domNode).removeClass("selected");
				dojo.addClass(_287, "selected");
			}
		});
		dojo.addClass(this.domNode, this.thumbSize);
		this.resize();
		this.render();
	}, onSelect: function (item, _288, _289) {
	}, _setAnimationEnabledAttr: function (_28a) {
		this.animationEnabled = _28a;
		dojo[_28a ? "addClass" : "removeClass"](this.domNode, "animated");
	}, _setItemsAttr: function (_28b) {
		this.items = _28b || [];
		var urls = {};
		var i;
		for (i = 0; i < this.items.length; i++) {
			urls[this.items[i][this.urlParam]] = 1;
		}
		var _28c = [];
		for (var url in this._onLoadImages) {
			if (!urls[url] && this._onLoadImages[url]._conn) {
				dojo.disconnect(this._onLoadImages[url]._conn);
				this._onLoadImages[url].src = null;
				_28c.push(url);
			}
		}
		for (i = 0; i < _28c.length; i++) {
			delete this._onLoadImages[url];
		}
		this.render();
	}, _getItemNode: function (node) {
		while (node && !dojo.hasClass(node, "mblThumb") && node != this.domNode) {
			node = node.parentNode;
		}
		return (node == this.domNode) ? null : node;
	}, _getItemNodeFromEvent: function (_28d) {
		if (_28d.touches && _28d.touches.length > 0) {
			_28d = _28d.touches[0];
		}
		return this._getItemNode(_28d.target);
	}, resize: function () {
		this._thumbSize = null;
		this._size = dojo.contentBox(this.domNode);
		this.disableHide = true;
		this.render();
		this.disableHide = false;
	}, hideCached: function () {
		for (var i = 0; i < this.cache.length; i++) {
			if (this.cache[i]) {
				dojo.style(this.cache[i], "display", "none");
			}
		}
	}, render: function () {
		var i;
		var url;
		var item;
		var _28e;
		while (this.visibleImages && this.visibleImages.length > 0) {
			_28e = this.visibleImages.pop();
			this.cache.push(_28e);
			if (!this.disableHide) {
				dojo.addClass(_28e, "hidden");
			}
			_28e._cached = true;
		}
		if (this.cache && this.cache.length > 0) {
			setTimeout(this.hideCached, 1000);
		}
		if (!this.items || this.items.length == 0) {
			return;
		}
		for (i = 0; i < this.items.length; i++) {
			item = this.items[i];
			url = (dojo.isString(item) ? item : item[this.urlParam]);
			this.addThumb(item, url, i);
			if (this.maxRows > 0 && (i + 1) / this.maxPerRow >= this.maxRows) {
				break;
			}
		}
		if (!this._thumbSize) {
			return;
		}
		var _28f = 0;
		var row = -1;
		var _290 = this._thumbSize.w + (this.padding * 2);
		var _291 = this._thumbSize.h + (this.padding * 2);
		var _292 = this.thumbNodes = dojo.query(".mblThumb", this.domNode);
		var pos = 0;
		_292 = this.visibleImages;
		for (i = 0; i < _292.length; i++) {
			if (_292[i]._cached) {
				continue;
			}
			if (pos % this.maxPerRow == 0) {
				row++;
			}
			_28f = pos % this.maxPerRow;
			this.place(_292[i], (_28f * _290) + this.padding, (row * _291) + this.padding);
			if (!_292[i]._loading) {
				dojo.removeClass(_292[i], "hidden");
			}
			if (pos == this.selectedIndex) {
				dojo[pos == this.selectedIndex ? "addClass" : "removeClass"](_292[i], "selected");
			}
			pos++;
		}
		var _293 = Math.ceil(pos / this.maxPerRow);
		this._numRows = _293;
		this.setContainerHeight((_293 * (this._thumbSize.h + this.padding * 2)));
	}, setContainerHeight: function (_294) {
		dojo.style(this.domNode, "height", _294 + "px");
	}, addThumb: function (item, url, _295) {
		var _296;
		var _297 = false;
		if (this.cache.length > 0) {
			var _298 = false;
			for (var i = 0; i < this.cache.length; i++) {
				if (this.cache[i]._url == url) {
					_296 = this.cache.splice(i, 1)[0];
					_298 = true;
					break;
				}
			}
			if (!_296 && !this.cacheMustMatch) {
				_296 = this.cache.pop();
				dojo.removeClass(_296, "selected");
			} else {
				_297 = true;
			}
		}
		if (!_296) {
			_296 = dojo.create("div", {"class": "mblThumb hidden", innerHTML: dojo.string.substitute(this.itemTemplate, {url: url}, null, this)}, this.domNode);
		}
		if (this.labelParam) {
			var _299 = dojo.query(".mblThumbLabel", _296)[0];
			if (!_299) {
				_299 = dojo.create("div", {"class": "mblThumbLabel"}, _296);
			}
			_299.innerHTML = item[this.labelParam] || "";
		}
		dojo.style(_296, "display", "");
		if (!this.disableHide) {
			dojo.addClass(_296, "hidden");
		}
		if (!_297) {
			var _29a = dojo.create("img", {});
			_29a._thumbDiv = _296;
			_29a._conn = dojo.connect(_29a, "onload", this.handleImgLoad);
			_29a._url = url;
			_296._loading = true;
			this._onLoadImages[url] = _29a;
			if (_29a) {
				_29a.src = url;
			}
		}
		this.visibleImages.push(_296);
		_296._index = _295;
		_296._item = item;
		_296._url = url;
		_296._cached = false;
		if (!this._thumbSize) {
			this._thumbSize = dojo.marginBox(_296);
			if (this._thumbSize.h == 0) {
				this._thumbSize.h = 100;
				this._thumbSize.w = 100;
			}
			if (this.labelParam) {
				this._thumbSize.h += 8;
			}
			this.calcPadding();
		}
	}, handleImgLoad: function (_29b) {
		var img = _29b.target;
		dojo.disconnect(img._conn);
		dojo.removeClass(img._thumbDiv, "hidden");
		img._thumbDiv._loading = false;
		img._conn = null;
		var url = img._url;
		if (this.cacheBust) {
			url += (url.indexOf("?") > -1 ? "&" : "?") + "cacheBust=" + (new Date()).getTime() + "_" + (this._cacheCounter++);
		}
		dojo.query(".mblThumbSrc", img._thumbDiv).style("backgroundImage", "url(" + url + ")");
		delete this._onLoadImages[img._url];
	}, calcPadding: function () {
		var _29c = this._size.w;
		var _29d = this._thumbSize.w;
		var _29e = _29d + this.minPadding;
		this.maxPerRow = Math.floor(_29c / _29e);
		this.padding = Math.floor((_29c - (_29d * this.maxPerRow)) / (this.maxPerRow * 2));
	}, place: function (node, x, y) {
		dojo.style(node, {"-webkit-transform": "translate(" + x + "px," + y + "px)"});
	}, destroy: function () {
		var img;
		var _29f = 0;
		for (var url in this._onLoadImages) {
			img = this._onLoadImages[url];
			if (img) {
				img.src = null;
				_29f++;
			}
		}
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dojox.mobile.app._base"]) {
	dojo._hasResource["dojox.mobile.app._base"] = true;
	dojo.provide("dojox.mobile.app._base");
	dojo.experimental("dojox.mobile.app._base");
	(function () {
		var _2a0;
		var _2a1;
		var _2a2 = ["dojox.mobile", "dojox.mobile.parser"];
		var _2a3 = {};
		var _2a4;
		var _2a5;
		var _2a6 = [];

		function _2a7(_2a8, _2a9) {
			var _2aa;
			var url;
			do {
				_2aa = _2a8.pop();
				if (_2aa.source) {
					url = _2aa.source;
				} else {
					if (_2aa.module) {
						url = dojo.baseUrl + dojo._getModuleSymbols(_2aa.module).join("/") + ".js";
					} else {
						alert("Error: invalid JavaScript resource " + dojo.toJson(_2aa));
						return;
					}
				}
			} while (_2a8.length > 0 && _2a3[url]);
			if (_2a8.length < 1 && _2a3[url]) {
				_2a9();
				return;
			}
			dojo.xhrGet({url: url, sync: false}).addCallbacks(function (text) {
				dojo["eval"](text);
				_2a3[url] = true;
				if (_2a8.length > 0) {
					_2a7(_2a8, _2a9);
				} else {
					_2a9();
				}
			}, function () {
				alert("Failed to load resource " + url);
			});
		};
		var _2ab = function () {
			_2a0 = new dojox.mobile.app.StageController(_2a5);
			var _2ac = {id: "com.test.app", version: "1.0.0", initialScene: "main"};
			if (dojo.global["appInfo"]) {
				dojo.mixin(_2ac, dojo.global["appInfo"]);
			}
			_2a1 = dojox.mobile.app.info = _2ac;
			if (_2a1.title) {
				var _2ad = dojo.query("head title")[0] || dojo.create("title", {}, dojo.query("head")[0]);
				document.title = _2a1.title;
			}
			_2a0.pushScene(_2a1.initialScene);
		};
		var _2ae = function () {
			var _2af = false;
			if (dojo.global.BackButton) {
				BackButton.override();
				dojo.connect(document, "backKeyDown", function (e) {
					dojo.publish("/dojox/mobile/app/goback");
				});
				_2af = true;
			} else {
				if (dojo.global.Mojo) {
				}
			}
			if (_2af) {
				dojo.addClass(dojo.body(), "mblNativeBack");
			}
		};
		dojo.mixin(dojox.mobile.app, {init: function (node) {
			_2a5 = node || dojo.body();
			dojox.mobile.app.STAGE_CONTROLLER_ACTIVE = true;
			dojo.subscribe("/dojox/mobile/app/goback", function () {
				_2a0.popScene();
			});
			dojo.subscribe("/dojox/mobile/app/alert", function (_2b0) {
				dojox.mobile.app.getActiveSceneController().showAlertDialog(_2b0);
			});
			dojo.subscribe("/dojox/mobile/app/pushScene", function (_2b1, _2b2) {
				_2a0.pushScene(_2b1, _2b2 || {});
			});
			dojo.xhrGet({url: "view-resources.json", load: function (data) {
				var _2b3 = [];
				if (data) {
					_2a6 = data = dojo.fromJson(data);
					for (var i = 0; i < data.length; i++) {
						if (!data[i].scene) {
							_2b3.push(data[i]);
						}
					}
				}
				if (_2b3.length > 0) {
					_2a7(_2b3, _2ab);
				} else {
					_2ab();
				}
			}, error: _2ab});
			_2ae();
		}, getActiveSceneController: function () {
			return _2a0.getActiveSceneController();
		}, getStageController: function () {
			return _2a0;
		}, loadResources: function (_2b4, _2b5) {
			_2a7(_2b4, _2b5);
		}, loadResourcesForScene: function (_2b6, _2b7) {
			var _2b8 = [];
			for (var i = 0; i < _2a6.length; i++) {
				if (_2a6[i].scene == _2b6) {
					_2b8.push(_2a6[i]);
				}
			}
			if (_2b8.length > 0) {
				_2a7(_2b8, _2b7);
			} else {
				_2b7();
			}
		}, resolveTemplate: function (_2b9) {
			return "app/views/" + _2b9 + "/" + _2b9 + "-scene.html";
		}, resolveAssistant: function (_2ba) {
			return "app/assistants/" + _2ba + "-assistant.js";
		}});
	})();
}
if (!dojo._hasResource["dojox.mobileApp"]) {
	dojo._hasResource["dojox.mobileApp"] = true;
	dojo.provide("dojox.mobileApp");
}