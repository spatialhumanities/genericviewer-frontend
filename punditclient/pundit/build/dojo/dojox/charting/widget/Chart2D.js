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

if (!dojo._hasResource["dijit._base.manager"]) {
	dojo._hasResource["dijit._base.manager"] = true;
	dojo.provide("dijit._base.manager");
	dojo.declare("dijit.WidgetSet", null, {constructor: function () {
		this._hash = {};
		this.length = 0;
	}, add: function (_1) {
		if (this._hash[_1.id]) {
			throw new Error("Tried to register widget with id==" + _1.id + " but that id is already registered");
		}
		this._hash[_1.id] = _1;
		this.length++;
	}, remove: function (id) {
		if (this._hash[id]) {
			delete this._hash[id];
			this.length--;
		}
	}, forEach: function (_2, _3) {
		_3 = _3 || dojo.global;
		var i = 0, id;
		for (id in this._hash) {
			_2.call(_3, this._hash[id], i++, this._hash);
		}
		return this;
	}, filter: function (_4, _5) {
		_5 = _5 || dojo.global;
		var _6 = new dijit.WidgetSet(), i = 0, id;
		for (id in this._hash) {
			var w = this._hash[id];
			if (_4.call(_5, w, i++, this._hash)) {
				_6.add(w);
			}
		}
		return _6;
	}, byId: function (id) {
		return this._hash[id];
	}, byClass: function (_7) {
		var _8 = new dijit.WidgetSet(), id, _9;
		for (id in this._hash) {
			_9 = this._hash[id];
			if (_9.declaredClass == _7) {
				_8.add(_9);
			}
		}
		return _8;
	}, toArray: function () {
		var ar = [];
		for (var id in this._hash) {
			ar.push(this._hash[id]);
		}
		return ar;
	}, map: function (_a, _b) {
		return dojo.map(this.toArray(), _a, _b);
	}, every: function (_c, _d) {
		_d = _d || dojo.global;
		var x = 0, i;
		for (i in this._hash) {
			if (!_c.call(_d, this._hash[i], x++, this._hash)) {
				return false;
			}
		}
		return true;
	}, some: function (_e, _f) {
		_f = _f || dojo.global;
		var x = 0, i;
		for (i in this._hash) {
			if (_e.call(_f, this._hash[i], x++, this._hash)) {
				return true;
			}
		}
		return false;
	}});
	(function () {
		dijit.registry = new dijit.WidgetSet();
		var _10 = dijit.registry._hash, _11 = dojo.attr, _12 = dojo.hasAttr, _13 = dojo.style;
		dijit.byId = function (id) {
			return typeof id == "string" ? _10[id] : id;
		};
		var _14 = {};
		dijit.getUniqueId = function (_15) {
			var id;
			do {
				id = _15 + "_" + (_15 in _14 ? ++_14[_15] : _14[_15] = 0);
			} while (_10[id]);
			return dijit._scopeName == "dijit" ? id : dijit._scopeName + "_" + id;
		};
		dijit.findWidgets = function (_16) {
			var _17 = [];

			function _18(_19) {
				for (var _1a = _19.firstChild; _1a; _1a = _1a.nextSibling) {
					if (_1a.nodeType == 1) {
						var _1b = _1a.getAttribute("widgetId");
						if (_1b) {
							var _1c = _10[_1b];
							if (_1c) {
								_17.push(_1c);
							}
						} else {
							_18(_1a);
						}
					}
				}
			};
			_18(_16);
			return _17;
		};
		dijit._destroyAll = function () {
			dijit._curFocus = null;
			dijit._prevFocus = null;
			dijit._activeStack = [];
			dojo.forEach(dijit.findWidgets(dojo.body()), function (_1d) {
				if (!_1d._destroyed) {
					if (_1d.destroyRecursive) {
						_1d.destroyRecursive();
					} else {
						if (_1d.destroy) {
							_1d.destroy();
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
		dijit.byNode = function (_1e) {
			return _10[_1e.getAttribute("widgetId")];
		};
		dijit.getEnclosingWidget = function (_1f) {
			while (_1f) {
				var id = _1f.getAttribute && _1f.getAttribute("widgetId");
				if (id) {
					return _10[id];
				}
				_1f = _1f.parentNode;
			}
			return null;
		};
		var _20 = (dijit._isElementShown = function (_21) {
			var s = _13(_21);
			return (s.visibility != "hidden") && (s.visibility != "collapsed") && (s.display != "none") && (_11(_21, "type") != "hidden");
		});
		dijit.hasDefaultTabStop = function (_22) {
			switch (_22.nodeName.toLowerCase()) {
				case "a":
					return _12(_22, "href");
				case "area":
				case "button":
				case "input":
				case "object":
				case "select":
				case "textarea":
					return true;
				case "iframe":
					var _23;
					try {
						var _24 = _22.contentDocument;
						if ("designMode" in _24 && _24.designMode == "on") {
							return true;
						}
						_23 = _24.body;
					} catch (e1) {
						try {
							_23 = _22.contentWindow.document.body;
						} catch (e2) {
							return false;
						}
					}
					return _23.contentEditable == "true" || (_23.firstChild && _23.firstChild.contentEditable == "true");
				default:
					return _22.contentEditable == "true";
			}
		};
		var _25 = (dijit.isTabNavigable = function (_26) {
			if (_11(_26, "disabled")) {
				return false;
			} else {
				if (_12(_26, "tabIndex")) {
					return _11(_26, "tabIndex") >= 0;
				} else {
					return dijit.hasDefaultTabStop(_26);
				}
			}
		});
		dijit._getTabNavigable = function (_27) {
			var _28, _29, _2a, _2b, _2c, _2d, _2e = {};

			function _2f(_30) {
				return _30 && _30.tagName.toLowerCase() == "input" && _30.type && _30.type.toLowerCase() == "radio" && _30.name && _30.name.toLowerCase();
			};
			var _31 = function (_32) {
				dojo.query("> *", _32).forEach(function (_33) {
					if ((dojo.isIE && _33.scopeName !== "HTML") || !_20(_33)) {
						return;
					}
					if (_25(_33)) {
						var _34 = _11(_33, "tabIndex");
						if (!_12(_33, "tabIndex") || _34 == 0) {
							if (!_28) {
								_28 = _33;
							}
							_29 = _33;
						} else {
							if (_34 > 0) {
								if (!_2a || _34 < _2b) {
									_2b = _34;
									_2a = _33;
								}
								if (!_2c || _34 >= _2d) {
									_2d = _34;
									_2c = _33;
								}
							}
						}
						var rn = _2f(_33);
						if (dojo.attr(_33, "checked") && rn) {
							_2e[rn] = _33;
						}
					}
					if (_33.nodeName.toUpperCase() != "SELECT") {
						_31(_33);
					}
				});
			};
			if (_20(_27)) {
				_31(_27);
			}
			function rs(_35) {
				return _2e[_2f(_35)] || _35;
			};
			return {first: rs(_28), last: rs(_29), lowest: rs(_2a), highest: rs(_2c)};
		};
		dijit.getFirstInTabbingOrder = function (_36) {
			var _37 = dijit._getTabNavigable(dojo.byId(_36));
			return _37.lowest ? _37.lowest : _37.first;
		};
		dijit.getLastInTabbingOrder = function (_38) {
			var _39 = dijit._getTabNavigable(dojo.byId(_38));
			return _39.last ? _39.last : _39.highest;
		};
		dijit.defaultDuration = dojo.config["defaultDuration"] || 200;
	})();
}
if (!dojo._hasResource["dojo.Stateful"]) {
	dojo._hasResource["dojo.Stateful"] = true;
	dojo.provide("dojo.Stateful");
	dojo.declare("dojo.Stateful", null, {postscript: function (_3a) {
		if (_3a) {
			dojo.mixin(this, _3a);
		}
	}, get: function (_3b) {
		return this[_3b];
	}, set: function (_3c, _3d) {
		if (typeof _3c === "object") {
			for (var x in _3c) {
				this.set(x, _3c[x]);
			}
			return this;
		}
		var _3e = this[_3c];
		this[_3c] = _3d;
		if (this._watchCallbacks) {
			this._watchCallbacks(_3c, _3e, _3d);
		}
		return this;
	}, watch: function (_3f, _40) {
		var _41 = this._watchCallbacks;
		if (!_41) {
			var _42 = this;
			_41 = this._watchCallbacks = function (_43, _44, _45, _46) {
				var _47 = function (_48) {
					if (_48) {
						_48 = _48.slice();
						for (var i = 0, l = _48.length; i < l; i++) {
							try {
								_48[i].call(_42, _43, _44, _45);
							} catch (e) {
								console.error(e);
							}
						}
					}
				};
				_47(_41["_" + _43]);
				if (!_46) {
					_47(_41["*"]);
				}
			};
		}
		if (!_40 && typeof _3f === "function") {
			_40 = _3f;
			_3f = "*";
		} else {
			_3f = "_" + _3f;
		}
		var _49 = _41[_3f];
		if (typeof _49 !== "object") {
			_49 = _41[_3f] = [];
		}
		_49.push(_40);
		return {unwatch: function () {
			_49.splice(dojo.indexOf(_49, _40), 1);
		}};
	}});
}
if (!dojo._hasResource["dijit._WidgetBase"]) {
	dojo._hasResource["dijit._WidgetBase"] = true;
	dojo.provide("dijit._WidgetBase");
	(function () {
		dojo.declare("dijit._WidgetBase", dojo.Stateful, {id: "", lang: "", dir: "", "class": "", style: "", title: "", tooltip: "", baseClass: "", srcNodeRef: null, domNode: null, containerNode: null, attributeMap: {id: "", dir: "", lang: "", "class": "", style: "", title: ""}, _blankGif: (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")).toString(), postscript: function (_4a, _4b) {
			this.create(_4a, _4b);
		}, create: function (_4c, _4d) {
			this.srcNodeRef = dojo.byId(_4d);
			this._connects = [];
			this._subscribes = [];
			if (this.srcNodeRef && (typeof this.srcNodeRef.id == "string")) {
				this.id = this.srcNodeRef.id;
			}
			if (_4c) {
				this.params = _4c;
				dojo._mixin(this, _4c);
			}
			this.postMixInProperties();
			if (!this.id) {
				this.id = dijit.getUniqueId(this.declaredClass.replace(/\./g, "_"));
			}
			dijit.registry.add(this);
			this.buildRendering();
			if (this.domNode) {
				this._applyAttributes();
				var _4e = this.srcNodeRef;
				if (_4e && _4e.parentNode && this.domNode !== _4e) {
					_4e.parentNode.replaceChild(this.domNode, _4e);
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
			var _4f = function (_50, _51) {
				if ((_51.params && _50 in _51.params) || _51[_50]) {
					_51.set(_50, _51[_50]);
				}
			};
			for (var _52 in this.attributeMap) {
				_4f(_52, this);
			}
			dojo.forEach(this._getSetterAttributes(), function (a) {
				if (!(a in this.attributeMap)) {
					_4f(a, this);
				}
			}, this);
		}, _getSetterAttributes: function () {
			var _53 = this.constructor;
			if (!_53._setterAttrs) {
				var r = (_53._setterAttrs = []), _54, _55 = _53.prototype;
				for (var _56 in _55) {
					if (dojo.isFunction(_55[_56]) && (_54 = _56.match(/^_set([a-zA-Z]*)Attr$/)) && _54[1]) {
						r.push(_54[1].charAt(0).toLowerCase() + _54[1].substr(1));
					}
				}
			}
			return _53._setterAttrs;
		}, postMixInProperties: function () {
		}, buildRendering: function () {
			if (!this.domNode) {
				this.domNode = this.srcNodeRef || dojo.create("div");
			}
			if (this.baseClass) {
				var _57 = this.baseClass.split(" ");
				if (!this.isLeftToRight()) {
					_57 = _57.concat(dojo.map(_57, function (_58) {
						return _58 + "Rtl";
					}));
				}
				dojo.addClass(this.domNode, _57);
			}
		}, postCreate: function () {
		}, startup: function () {
			this._started = true;
		}, destroyRecursive: function (_59) {
			this._beingDestroyed = true;
			this.destroyDescendants(_59);
			this.destroy(_59);
		}, destroy: function (_5a) {
			this._beingDestroyed = true;
			this.uninitialize();
			var d = dojo, dfe = d.forEach, dun = d.unsubscribe;
			dfe(this._connects, function (_5b) {
				dfe(_5b, d.disconnect);
			});
			dfe(this._subscribes, function (_5c) {
				dun(_5c);
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
			this.destroyRendering(_5a);
			dijit.registry.remove(this.id);
			this._destroyed = true;
		}, destroyRendering: function (_5d) {
			if (this.bgIframe) {
				this.bgIframe.destroy(_5d);
				delete this.bgIframe;
			}
			if (this.domNode) {
				if (_5d) {
					dojo.removeAttr(this.domNode, "widgetId");
				} else {
					dojo.destroy(this.domNode);
				}
				delete this.domNode;
			}
			if (this.srcNodeRef) {
				if (!_5d) {
					dojo.destroy(this.srcNodeRef);
				}
				delete this.srcNodeRef;
			}
		}, destroyDescendants: function (_5e) {
			dojo.forEach(this.getChildren(), function (_5f) {
				if (_5f.destroyRecursive) {
					_5f.destroyRecursive(_5e);
				}
			});
		}, uninitialize: function () {
			return false;
		}, _setClassAttr: function (_60) {
			var _61 = this[this.attributeMap["class"] || "domNode"];
			dojo.replaceClass(_61, _60, this["class"]);
			this._set("class", _60);
		}, _setStyleAttr: function (_62) {
			var _63 = this[this.attributeMap.style || "domNode"];
			if (dojo.isObject(_62)) {
				dojo.style(_63, _62);
			} else {
				if (_63.style.cssText) {
					_63.style.cssText += "; " + _62;
				} else {
					_63.style.cssText = _62;
				}
			}
			this._set("style", _62);
		}, _attrToDom: function (_64, _65) {
			var _66 = this.attributeMap[_64];
			dojo.forEach(dojo.isArray(_66) ? _66 : [_66], function (_67) {
				var _68 = this[_67.node || _67 || "domNode"];
				var _69 = _67.type || "attribute";
				switch (_69) {
					case "attribute":
						if (dojo.isFunction(_65)) {
							_65 = dojo.hitch(this, _65);
						}
						var _6a = _67.attribute ? _67.attribute : (/^on[A-Z][a-zA-Z]*$/.test(_64) ? _64.toLowerCase() : _64);
						dojo.attr(_68, _6a, _65);
						break;
					case "innerText":
						_68.innerHTML = "";
						_68.appendChild(dojo.doc.createTextNode(_65));
						break;
					case "innerHTML":
						_68.innerHTML = _65;
						break;
					case "class":
						dojo.replaceClass(_68, _65, this[_64]);
						break;
				}
			}, this);
		}, get: function (_6b) {
			var _6c = this._getAttrNames(_6b);
			return this[_6c.g] ? this[_6c.g]() : this[_6b];
		}, set: function (_6d, _6e) {
			if (typeof _6d === "object") {
				for (var x in _6d) {
					this.set(x, _6d[x]);
				}
				return this;
			}
			var _6f = this._getAttrNames(_6d);
			if (this[_6f.s]) {
				var _70 = this[_6f.s].apply(this, Array.prototype.slice.call(arguments, 1));
			} else {
				if (_6d in this.attributeMap) {
					this._attrToDom(_6d, _6e);
				}
				this._set(_6d, _6e);
			}
			return _70 || this;
		}, _attrPairNames: {}, _getAttrNames: function (_71) {
			var apn = this._attrPairNames;
			if (apn[_71]) {
				return apn[_71];
			}
			var uc = _71.charAt(0).toUpperCase() + _71.substr(1);
			return (apn[_71] = {n: _71 + "Node", s: "_set" + uc + "Attr", g: "_get" + uc + "Attr"});
		}, _set: function (_72, _73) {
			var _74 = this[_72];
			this[_72] = _73;
			if (this._watchCallbacks && this._created && _73 !== _74) {
				this._watchCallbacks(_72, _74, _73);
			}
		}, toString: function () {
			return "[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]";
		}, getDescendants: function () {
			return this.containerNode ? dojo.query("[widgetId]", this.containerNode).map(dijit.byNode) : [];
		}, getChildren: function () {
			return this.containerNode ? dijit.findWidgets(this.containerNode) : [];
		}, connect: function (obj, _75, _76) {
			var _77 = [dojo._connect(obj, _75, this, _76)];
			this._connects.push(_77);
			return _77;
		}, disconnect: function (_78) {
			for (var i = 0; i < this._connects.length; i++) {
				if (this._connects[i] == _78) {
					dojo.forEach(_78, dojo.disconnect);
					this._connects.splice(i, 1);
					return;
				}
			}
		}, subscribe: function (_79, _7a) {
			var _7b = dojo.subscribe(_79, this, _7a);
			this._subscribes.push(_7b);
			return _7b;
		}, unsubscribe: function (_7c) {
			for (var i = 0; i < this._subscribes.length; i++) {
				if (this._subscribes[i] == _7c) {
					dojo.unsubscribe(_7c);
					this._subscribes.splice(i, 1);
					return;
				}
			}
		}, isLeftToRight: function () {
			return this.dir ? (this.dir == "ltr") : dojo._isBodyLtr();
		}, placeAt: function (_7d, _7e) {
			if (_7d.declaredClass && _7d.addChild) {
				_7d.addChild(this, _7e);
			} else {
				dojo.place(this.domNode, _7d, _7e);
			}
			return this;
		}});
	})();
}
if (!dojo._hasResource["dojo.window"]) {
	dojo._hasResource["dojo.window"] = true;
	dojo.provide("dojo.window");
	dojo.getObject("window", true, dojo);
	dojo.window.getBox = function () {
		var _7f = (dojo.doc.compatMode == "BackCompat") ? dojo.body() : dojo.doc.documentElement;
		var _80 = dojo._docScroll();
		return {w: _7f.clientWidth, h: _7f.clientHeight, l: _80.x, t: _80.y};
	};
	dojo.window.get = function (doc) {
		if (dojo.isIE && window !== document.parentWindow) {
			doc.parentWindow.execScript("document._parentWindow = window;", "Javascript");
			var win = doc._parentWindow;
			doc._parentWindow = null;
			return win;
		}
		return doc.parentWindow || doc.defaultView;
	};
	dojo.window.scrollIntoView = function (_81, pos) {
		try {
			_81 = dojo.byId(_81);
			var doc = _81.ownerDocument || dojo.doc, _82 = doc.body || dojo.body(), _83 = doc.documentElement || _82.parentNode, _84 = dojo.isIE, _85 = dojo.isWebKit;
			if ((!(dojo.isMoz || _84 || _85 || dojo.isOpera) || _81 == _82 || _81 == _83) && (typeof _81.scrollIntoView != "undefined")) {
				_81.scrollIntoView(false);
				return;
			}
			var _86 = doc.compatMode == "BackCompat", _87 = (_84 >= 9 && _81.ownerDocument.parentWindow.frameElement) ? ((_83.clientHeight > 0 && _83.clientWidth > 0 && (_82.clientHeight == 0 || _82.clientWidth == 0 || _82.clientHeight > _83.clientHeight || _82.clientWidth > _83.clientWidth)) ? _83 : _82) : (_86 ? _82 : _83), _88 = _85 ? _82 : _87, _89 = _87.clientWidth, _8a = _87.clientHeight, rtl = !dojo._isBodyLtr(), _8b = pos || dojo.position(_81), el = _81.parentNode, _8c = function (el) {
				return ((_84 <= 6 || (_84 && _86)) ? false : (dojo.style(el, "position").toLowerCase() == "fixed"));
			};
			if (_8c(_81)) {
				return;
			}
			while (el) {
				if (el == _82) {
					el = _88;
				}
				var _8d = dojo.position(el), _8e = _8c(el);
				if (el == _88) {
					_8d.w = _89;
					_8d.h = _8a;
					if (_88 == _83 && _84 && rtl) {
						_8d.x += _88.offsetWidth - _8d.w;
					}
					if (_8d.x < 0 || !_84) {
						_8d.x = 0;
					}
					if (_8d.y < 0 || !_84) {
						_8d.y = 0;
					}
				} else {
					var pb = dojo._getPadBorderExtents(el);
					_8d.w -= pb.w;
					_8d.h -= pb.h;
					_8d.x += pb.l;
					_8d.y += pb.t;
					var _8f = el.clientWidth, _90 = _8d.w - _8f;
					if (_8f > 0 && _90 > 0) {
						_8d.w = _8f;
						_8d.x += (rtl && (_84 || el.clientLeft > pb.l)) ? _90 : 0;
					}
					_8f = el.clientHeight;
					_90 = _8d.h - _8f;
					if (_8f > 0 && _90 > 0) {
						_8d.h = _8f;
					}
				}
				if (_8e) {
					if (_8d.y < 0) {
						_8d.h += _8d.y;
						_8d.y = 0;
					}
					if (_8d.x < 0) {
						_8d.w += _8d.x;
						_8d.x = 0;
					}
					if (_8d.y + _8d.h > _8a) {
						_8d.h = _8a - _8d.y;
					}
					if (_8d.x + _8d.w > _89) {
						_8d.w = _89 - _8d.x;
					}
				}
				var l = _8b.x - _8d.x, t = _8b.y - Math.max(_8d.y, 0), r = l + _8b.w - _8d.w, bot = t + _8b.h - _8d.h;
				if (r * l > 0) {
					var s = Math[l < 0 ? "max" : "min"](l, r);
					if (rtl && ((_84 == 8 && !_86) || _84 >= 9)) {
						s = -s;
					}
					_8b.x += el.scrollLeft;
					el.scrollLeft += s;
					_8b.x -= el.scrollLeft;
				}
				if (bot * t > 0) {
					_8b.y += el.scrollTop;
					el.scrollTop += Math[t < 0 ? "max" : "min"](t, bot);
					_8b.y -= el.scrollTop;
				}
				el = (el != _88) && !_8e && el.parentNode;
			}
		} catch (error) {
			console.error("scrollIntoView: " + error);
			_81.scrollIntoView(false);
		}
	};
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
	}, moveToBookmark: function (_91) {
		var _92 = dojo.doc, _93 = _91.mark;
		if (_93) {
			if (dojo.global.getSelection) {
				var sel = dojo.global.getSelection();
				if (sel && sel.removeAllRanges) {
					if (_93.pRange) {
						var r = _93;
						var n = r.node;
						n.selectionStart = r.start;
						n.selectionEnd = r.end;
					} else {
						sel.removeAllRanges();
						sel.addRange(_93);
					}
				} else {
					console.warn("No idea how to restore selection for this browser!");
				}
			} else {
				if (_92.selection && _93) {
					var rg;
					if (_93.pRange) {
						rg = _93.range;
					} else {
						if (dojo.isArray(_93)) {
							rg = _92.body.createControlRange();
							dojo.forEach(_93, function (n) {
								rg.addElement(n);
							});
						} else {
							rg = _92.body.createTextRange();
							rg.moveToBookmark(_93);
						}
					}
					rg.select();
				}
			}
		}
	}, getFocus: function (_94, _95) {
		var _96 = !dijit._curFocus || (_94 && dojo.isDescendant(dijit._curFocus, _94.domNode)) ? dijit._prevFocus : dijit._curFocus;
		return {node: _96, bookmark: (_96 == dijit._curFocus) && dojo.withGlobal(_95 || dojo.global, dijit.getBookmark), openedForWindow: _95};
	}, focus: function (_97) {
		if (!_97) {
			return;
		}
		var _98 = "node" in _97 ? _97.node : _97, _99 = _97.bookmark, _9a = _97.openedForWindow, _9b = _99 ? _99.isCollapsed : false;
		if (_98) {
			var _9c = (_98.tagName.toLowerCase() == "iframe") ? _98.contentWindow : _98;
			if (_9c && _9c.focus) {
				try {
					_9c.focus();
				} catch (e) {
				}
			}
			dijit._onFocusNode(_98);
		}
		if (_99 && dojo.withGlobal(_9a || dojo.global, dijit.isCollapsed) && !_9b) {
			if (_9a) {
				_9a.focus();
			}
			try {
				dojo.withGlobal(_9a || dojo.global, dijit.moveToBookmark, null, [_99]);
			} catch (e2) {
			}
		}
	}, _activeStack: [], registerIframe: function (_9d) {
		return dijit.registerWin(_9d.contentWindow, _9d);
	}, unregisterIframe: function (_9e) {
		dijit.unregisterWin(_9e);
	}, registerWin: function (_9f, _a0) {
		var _a1 = function (evt) {
			dijit._justMouseDowned = true;
			setTimeout(function () {
				dijit._justMouseDowned = false;
			}, 0);
			if (dojo.isIE && evt && evt.srcElement && evt.srcElement.parentNode == null) {
				return;
			}
			dijit._onTouchNode(_a0 || evt.target || evt.srcElement, "mouse");
		};
		var doc = dojo.isIE ? _9f.document.documentElement : _9f.document;
		if (doc) {
			if (dojo.isIE) {
				_9f.document.body.attachEvent("onmousedown", _a1);
				var _a2 = function (evt) {
					if (evt.srcElement.tagName.toLowerCase() != "#document" && dijit.isTabNavigable(evt.srcElement)) {
						dijit._onFocusNode(_a0 || evt.srcElement);
					} else {
						dijit._onTouchNode(_a0 || evt.srcElement);
					}
				};
				doc.attachEvent("onactivate", _a2);
				var _a3 = function (evt) {
					dijit._onBlurNode(_a0 || evt.srcElement);
				};
				doc.attachEvent("ondeactivate", _a3);
				return function () {
					_9f.document.detachEvent("onmousedown", _a1);
					doc.detachEvent("onactivate", _a2);
					doc.detachEvent("ondeactivate", _a3);
					doc = null;
				};
			} else {
				doc.body.addEventListener("mousedown", _a1, true);
				var _a4 = function (evt) {
					dijit._onFocusNode(_a0 || evt.target);
				};
				doc.addEventListener("focus", _a4, true);
				var _a5 = function (evt) {
					dijit._onBlurNode(_a0 || evt.target);
				};
				doc.addEventListener("blur", _a5, true);
				return function () {
					doc.body.removeEventListener("mousedown", _a1, true);
					doc.removeEventListener("focus", _a4, true);
					doc.removeEventListener("blur", _a5, true);
					doc = null;
				};
			}
		}
	}, unregisterWin: function (_a6) {
		_a6 && _a6();
	}, _onBlurNode: function (_a7) {
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
	}, _onTouchNode: function (_a8, by) {
		if (dijit._clearActiveWidgetsTimer) {
			clearTimeout(dijit._clearActiveWidgetsTimer);
			delete dijit._clearActiveWidgetsTimer;
		}
		var _a9 = [];
		try {
			while (_a8) {
				var _aa = dojo.attr(_a8, "dijitPopupParent");
				if (_aa) {
					_a8 = dijit.byId(_aa).domNode;
				} else {
					if (_a8.tagName && _a8.tagName.toLowerCase() == "body") {
						if (_a8 === dojo.body()) {
							break;
						}
						_a8 = dojo.window.get(_a8.ownerDocument).frameElement;
					} else {
						var id = _a8.getAttribute && _a8.getAttribute("widgetId"), _ab = id && dijit.byId(id);
						if (_ab && !(by == "mouse" && _ab.get("disabled"))) {
							_a9.unshift(id);
						}
						_a8 = _a8.parentNode;
					}
				}
			}
		} catch (e) {
		}
		dijit._setStack(_a9, by);
	}, _onFocusNode: function (_ac) {
		if (!_ac) {
			return;
		}
		if (_ac.nodeType == 9) {
			return;
		}
		dijit._onTouchNode(_ac);
		if (_ac == dijit._curFocus) {
			return;
		}
		if (dijit._curFocus) {
			dijit._prevFocus = dijit._curFocus;
		}
		dijit._curFocus = _ac;
		dojo.publish("focusNode", [_ac]);
	}, _setStack: function (_ad, by) {
		var _ae = dijit._activeStack;
		dijit._activeStack = _ad;
		for (var _af = 0; _af < Math.min(_ae.length, _ad.length); _af++) {
			if (_ae[_af] != _ad[_af]) {
				break;
			}
		}
		var _b0;
		for (var i = _ae.length - 1; i >= _af; i--) {
			_b0 = dijit.byId(_ae[i]);
			if (_b0) {
				_b0._focused = false;
				_b0.set("focused", false);
				_b0._hasBeenBlurred = true;
				if (_b0._onBlur) {
					_b0._onBlur(by);
				}
				dojo.publish("widgetBlur", [_b0, by]);
			}
		}
		for (i = _af; i < _ad.length; i++) {
			_b0 = dijit.byId(_ad[i]);
			if (_b0) {
				_b0._focused = true;
				_b0.set("focused", true);
				if (_b0._onFocus) {
					_b0._onFocus(by);
				}
				dojo.publish("widgetFocus", [_b0, by]);
			}
		}
	}});
	dojo.addOnLoad(function () {
		var _b1 = dijit.registerWin(window);
		if (dojo.isIE) {
			dojo.addOnWindowUnload(function () {
				dijit.unregisterWin(_b1);
				_b1 = null;
			});
		}
	});
}
if (!dojo._hasResource["dojo.AdapterRegistry"]) {
	dojo._hasResource["dojo.AdapterRegistry"] = true;
	dojo.provide("dojo.AdapterRegistry");
	dojo.AdapterRegistry = function (_b2) {
		this.pairs = [];
		this.returnWrappers = _b2 || false;
	};
	dojo.extend(dojo.AdapterRegistry, {register: function (_b3, _b4, _b5, _b6, _b7) {
		this.pairs[((_b7) ? "unshift" : "push")]([_b3, _b4, _b5, _b6]);
	}, match: function () {
		for (var i = 0; i < this.pairs.length; i++) {
			var _b8 = this.pairs[i];
			if (_b8[1].apply(this, arguments)) {
				if ((_b8[3]) || (this.returnWrappers)) {
					return _b8[2];
				} else {
					return _b8[2].apply(this, arguments);
				}
			}
		}
		throw new Error("No match found");
	}, unregister: function (_b9) {
		for (var i = 0; i < this.pairs.length; i++) {
			var _ba = this.pairs[i];
			if (_ba[0] == _b9) {
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
	dijit.placeOnScreen = function (_bb, pos, _bc, _bd) {
		var _be = dojo.map(_bc, function (_bf) {
			var c = {corner: _bf, pos: {x: pos.x, y: pos.y}};
			if (_bd) {
				c.pos.x += _bf.charAt(1) == "L" ? _bd.x : -_bd.x;
				c.pos.y += _bf.charAt(0) == "T" ? _bd.y : -_bd.y;
			}
			return c;
		});
		return dijit._place(_bb, _be);
	};
	dijit._place = function (_c0, _c1, _c2, _c3) {
		var _c4 = dojo.window.getBox();
		if (!_c0.parentNode || String(_c0.parentNode.tagName).toLowerCase() != "body") {
			dojo.body().appendChild(_c0);
		}
		var _c5 = null;
		dojo.some(_c1, function (_c6) {
			var _c7 = _c6.corner;
			var pos = _c6.pos;
			var _c8 = 0;
			var _c9 = {w: _c7.charAt(1) == "L" ? (_c4.l + _c4.w) - pos.x : pos.x - _c4.l, h: _c7.charAt(1) == "T" ? (_c4.t + _c4.h) - pos.y : pos.y - _c4.t};
			if (_c2) {
				var res = _c2(_c0, _c6.aroundCorner, _c7, _c9, _c3);
				_c8 = typeof res == "undefined" ? 0 : res;
			}
			var _ca = _c0.style;
			var _cb = _ca.display;
			var _cc = _ca.visibility;
			_ca.visibility = "hidden";
			_ca.display = "";
			var mb = dojo.marginBox(_c0);
			_ca.display = _cb;
			_ca.visibility = _cc;
			var _cd = Math.max(_c4.l, _c7.charAt(1) == "L" ? pos.x : (pos.x - mb.w)), _ce = Math.max(_c4.t, _c7.charAt(0) == "T" ? pos.y : (pos.y - mb.h)), _cf = Math.min(_c4.l + _c4.w, _c7.charAt(1) == "L" ? (_cd + mb.w) : pos.x), _d0 = Math.min(_c4.t + _c4.h, _c7.charAt(0) == "T" ? (_ce + mb.h) : pos.y), _d1 = _cf - _cd, _d2 = _d0 - _ce;
			_c8 += (mb.w - _d1) + (mb.h - _d2);
			if (_c5 == null || _c8 < _c5.overflow) {
				_c5 = {corner: _c7, aroundCorner: _c6.aroundCorner, x: _cd, y: _ce, w: _d1, h: _d2, overflow: _c8, spaceAvailable: _c9};
			}
			return !_c8;
		});
		if (_c5.overflow && _c2) {
			_c2(_c0, _c5.aroundCorner, _c5.corner, _c5.spaceAvailable, _c3);
		}
		var l = dojo._isBodyLtr(), s = _c0.style;
		s.top = _c5.y + "px";
		s[l ? "left" : "right"] = (l ? _c5.x : _c4.w - _c5.x - _c5.w) + "px";
		return _c5;
	};
	dijit.placeOnScreenAroundNode = function (_d3, _d4, _d5, _d6) {
		_d4 = dojo.byId(_d4);
		var _d7 = dojo.position(_d4, true);
		return dijit._placeOnScreenAroundRect(_d3, _d7.x, _d7.y, _d7.w, _d7.h, _d5, _d6);
	};
	dijit.placeOnScreenAroundRectangle = function (_d8, _d9, _da, _db) {
		return dijit._placeOnScreenAroundRect(_d8, _d9.x, _d9.y, _d9.width, _d9.height, _da, _db);
	};
	dijit._placeOnScreenAroundRect = function (_dc, x, y, _dd, _de, _df, _e0) {
		var _e1 = [];
		for (var _e2 in _df) {
			_e1.push({aroundCorner: _e2, corner: _df[_e2], pos: {x: x + (_e2.charAt(1) == "L" ? 0 : _dd), y: y + (_e2.charAt(0) == "T" ? 0 : _de)}});
		}
		return dijit._place(_dc, _e1, _e0, {w: _dd, h: _de});
	};
	dijit.placementRegistry = new dojo.AdapterRegistry();
	dijit.placementRegistry.register("node", function (n, x) {
		return typeof x == "object" && typeof x.offsetWidth != "undefined" && typeof x.offsetHeight != "undefined";
	}, dijit.placeOnScreenAroundNode);
	dijit.placementRegistry.register("rect", function (n, x) {
		return typeof x == "object" && "x" in x && "y" in x && "width" in x && "height" in x;
	}, dijit.placeOnScreenAroundRectangle);
	dijit.placeOnScreenAroundElement = function (_e3, _e4, _e5, _e6) {
		return dijit.placementRegistry.match.apply(dijit.placementRegistry, arguments);
	};
	dijit.getPopupAroundAlignment = function (_e7, _e8) {
		var _e9 = {};
		dojo.forEach(_e7, function (pos) {
			switch (pos) {
				case "after":
					_e9[_e8 ? "BR" : "BL"] = _e8 ? "BL" : "BR";
					break;
				case "before":
					_e9[_e8 ? "BL" : "BR"] = _e8 ? "BR" : "BL";
					break;
				case "below-alt":
					_e8 = !_e8;
				case "below":
					_e9[_e8 ? "BL" : "BR"] = _e8 ? "TL" : "TR";
					_e9[_e8 ? "BR" : "BL"] = _e8 ? "TR" : "TL";
					break;
				case "above-alt":
					_e8 = !_e8;
				case "above":
				default:
					_e9[_e8 ? "TL" : "TR"] = _e8 ? "BL" : "BR";
					_e9[_e8 ? "TR" : "TL"] = _e8 ? "BR" : "BL";
					break;
			}
		});
		return _e9;
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
	dijit.popup = {_stack: [], _beginZIndex: 1000, _idGen: 1, _createWrapper: function (_ea) {
		var _eb = _ea.declaredClass ? _ea._popupWrapper : (_ea.parentNode && dojo.hasClass(_ea.parentNode, "dijitPopup")), _ec = _ea.domNode || _ea;
		if (!_eb) {
			_eb = dojo.create("div", {"class": "dijitPopup", style: {display: "none"}, role: "presentation"}, dojo.body());
			_eb.appendChild(_ec);
			var s = _ec.style;
			s.display = "";
			s.visibility = "";
			s.position = "";
			s.top = "0px";
			if (_ea.declaredClass) {
				_ea._popupWrapper = _eb;
				dojo.connect(_ea, "destroy", function () {
					dojo.destroy(_eb);
					delete _ea._popupWrapper;
				});
			}
		}
		return _eb;
	}, moveOffScreen: function (_ed) {
		var _ee = this._createWrapper(_ed);
		dojo.style(_ee, {visibility: "hidden", top: "-9999px", display: ""});
	}, hide: function (_ef) {
		var _f0 = this._createWrapper(_ef);
		dojo.style(_f0, "display", "none");
	}, getTopPopup: function () {
		var _f1 = this._stack;
		for (var pi = _f1.length - 1; pi > 0 && _f1[pi].parent === _f1[pi - 1].widget; pi--) {
		}
		return _f1[pi];
	}, open: function (_f2) {
		var _f3 = this._stack, _f4 = _f2.popup, _f5 = _f2.orient || ((_f2.parent ? _f2.parent.isLeftToRight() : dojo._isBodyLtr()) ? {"BL": "TL", "BR": "TR", "TL": "BL", "TR": "BR"} : {"BR": "TR", "BL": "TL", "TR": "BR", "TL": "BL"}), _f6 = _f2.around, id = (_f2.around && _f2.around.id) ? (_f2.around.id + "_dropdown") : ("popup_" + this._idGen++);
		while (_f3.length && (!_f2.parent || !dojo.isDescendant(_f2.parent.domNode, _f3[_f3.length - 1].widget.domNode))) {
			dijit.popup.close(_f3[_f3.length - 1].widget);
		}
		var _f7 = this._createWrapper(_f4);
		dojo.attr(_f7, {id: id, style: {zIndex: this._beginZIndex + _f3.length}, "class": "dijitPopup " + (_f4.baseClass || _f4["class"] || "").split(" ")[0] + "Popup", dijitPopupParent: _f2.parent ? _f2.parent.id : ""});
		if (dojo.isIE || dojo.isMoz) {
			if (!_f4.bgIframe) {
				_f4.bgIframe = new dijit.BackgroundIframe(_f7);
			}
		}
		var _f8 = _f6 ? dijit.placeOnScreenAroundElement(_f7, _f6, _f5, _f4.orient ? dojo.hitch(_f4, "orient") : null) : dijit.placeOnScreen(_f7, _f2, _f5 == "R" ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], _f2.padding);
		_f7.style.display = "";
		_f7.style.visibility = "visible";
		_f4.domNode.style.visibility = "visible";
		var _f9 = [];
		_f9.push(dojo.connect(_f7, "onkeypress", this, function (evt) {
			if (evt.charOrCode == dojo.keys.ESCAPE && _f2.onCancel) {
				dojo.stopEvent(evt);
				_f2.onCancel();
			} else {
				if (evt.charOrCode === dojo.keys.TAB) {
					dojo.stopEvent(evt);
					var _fa = this.getTopPopup();
					if (_fa && _fa.onCancel) {
						_fa.onCancel();
					}
				}
			}
		}));
		if (_f4.onCancel) {
			_f9.push(dojo.connect(_f4, "onCancel", _f2.onCancel));
		}
		_f9.push(dojo.connect(_f4, _f4.onExecute ? "onExecute" : "onChange", this, function () {
			var _fb = this.getTopPopup();
			if (_fb && _fb.onExecute) {
				_fb.onExecute();
			}
		}));
		_f3.push({widget: _f4, parent: _f2.parent, onExecute: _f2.onExecute, onCancel: _f2.onCancel, onClose: _f2.onClose, handlers: _f9});
		if (_f4.onOpen) {
			_f4.onOpen(_f8);
		}
		return _f8;
	}, close: function (_fc) {
		var _fd = this._stack;
		while ((_fc && dojo.some(_fd, function (_fe) {
			return _fe.widget == _fc;
		})) || (!_fc && _fd.length)) {
			var top = _fd.pop(), _ff = top.widget, _100 = top.onClose;
			if (_ff.onClose) {
				_ff.onClose();
			}
			dojo.forEach(top.handlers, dojo.disconnect);
			if (_ff && _ff.domNode) {
				this.hide(_ff);
			}
			if (_100) {
				_100();
			}
		}
	}};
	dijit._frames = new function () {
		var _101 = [];
		this.pop = function () {
			var _102;
			if (_101.length) {
				_102 = _101.pop();
				_102.style.display = "";
			} else {
				if (dojo.isIE < 9) {
					var burl = dojo.config["dojoBlankHtmlUrl"] || (dojo.moduleUrl("dojo", "resources/blank.html") + "") || "javascript:\"\"";
					var html = "<iframe src='" + burl + "'" + " style='position: absolute; left: 0px; top: 0px;" + "z-index: -1; filter:Alpha(Opacity=\"0\");'>";
					_102 = dojo.doc.createElement(html);
				} else {
					_102 = dojo.create("iframe");
					_102.src = "javascript:\"\"";
					_102.className = "dijitBackgroundIframe";
					dojo.style(_102, "opacity", 0.1);
				}
				_102.tabIndex = -1;
				dijit.setWaiRole(_102, "presentation");
			}
			return _102;
		};
		this.push = function (_103) {
			_103.style.display = "none";
			_101.push(_103);
		};
	}();
	dijit.BackgroundIframe = function (node) {
		if (!node.id) {
			throw new Error("no id");
		}
		if (dojo.isIE || dojo.isMoz) {
			var _104 = (this.iframe = dijit._frames.pop());
			node.appendChild(_104);
			if (dojo.isIE < 7 || dojo.isQuirks) {
				this.resize(node);
				this._conn = dojo.connect(node, "onresize", this, function () {
					this.resize(node);
				});
			} else {
				dojo.style(_104, {width: "100%", height: "100%"});
			}
		}
	};
	dojo.extend(dijit.BackgroundIframe, {resize: function (node) {
		if (this.iframe) {
			dojo.style(this.iframe, {width: node.offsetWidth + "px", height: node.offsetHeight + "px"});
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
	dijit.scrollIntoView = function (node, pos) {
		dojo.window.scrollIntoView(node, pos);
	};
}
if (!dojo._hasResource["dojo.uacss"]) {
	dojo._hasResource["dojo.uacss"] = true;
	dojo.provide("dojo.uacss");
	(function () {
		var d = dojo, html = d.doc.documentElement, ie = d.isIE, _105 = d.isOpera, maj = Math.floor, ff = d.isFF, _106 = d.boxModel.replace(/-/, ""), _107 = {dj_ie: ie, dj_ie6: maj(ie) == 6, dj_ie7: maj(ie) == 7, dj_ie8: maj(ie) == 8, dj_ie9: maj(ie) == 9, dj_quirks: d.isQuirks, dj_iequirks: ie && d.isQuirks, dj_opera: _105, dj_khtml: d.isKhtml, dj_webkit: d.isWebKit, dj_safari: d.isSafari, dj_chrome: d.isChrome, dj_gecko: d.isMozilla, dj_ff3: maj(ff) == 3};
		_107["dj_" + _106] = true;
		var _108 = "";
		for (var clz in _107) {
			if (_107[clz]) {
				_108 += clz + " ";
			}
		}
		html.className = d.trim(html.className + " " + _108);
		dojo._loaders.unshift(function () {
			if (!dojo._isBodyLtr()) {
				var _109 = "dj_rtl dijitRtl " + _108.replace(/ /g, "-rtl ");
				html.className = d.trim(html.className + " " + _109);
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
	}, trigger: function (evt, _10a, node, _10b, obj, _10c, _10d, _10e) {
		if (obj != this._obj) {
			this.stop();
			this._initialDelay = _10d || 500;
			this._subsequentDelay = _10c || 0.9;
			this._minDelay = _10e || 10;
			this._obj = obj;
			this._evt = evt;
			this._node = node;
			this._currentTimeout = -1;
			this._count = -1;
			this._callback = dojo.hitch(_10a, _10b);
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
	}, addKeyListener: function (node, _10f, _110, _111, _112, _113, _114) {
		if (_10f.keyCode) {
			_10f.charOrCode = _10f.keyCode;
			dojo.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
		} else {
			if (_10f.charCode) {
				_10f.charOrCode = String.fromCharCode(_10f.charCode);
				dojo.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
			}
		}
		return [dojo.connect(node, "onkeypress", this, function (evt) {
			if (evt.charOrCode == _10f.charOrCode && (_10f.ctrlKey === undefined || _10f.ctrlKey == evt.ctrlKey) && (_10f.altKey === undefined || _10f.altKey == evt.altKey) && (_10f.metaKey === undefined || _10f.metaKey == (evt.metaKey || false)) && (_10f.shiftKey === undefined || _10f.shiftKey == evt.shiftKey)) {
				dojo.stopEvent(evt);
				dijit.typematic.trigger(evt, _110, node, _111, _10f, _112, _113, _114);
			} else {
				if (dijit.typematic._obj == _10f) {
					dijit.typematic.stop();
				}
			}
		}), dojo.connect(node, "onkeyup", this, function (evt) {
			if (dijit.typematic._obj == _10f) {
				dijit.typematic.stop();
			}
		})];
	}, addMouseListener: function (node, _115, _116, _117, _118, _119) {
		var dc = dojo.connect;
		return [dc(node, "mousedown", this, function (evt) {
			dojo.stopEvent(evt);
			dijit.typematic.trigger(evt, _115, node, _116, node, _117, _118, _119);
		}), dc(node, "mouseup", this, function (evt) {
			dojo.stopEvent(evt);
			dijit.typematic.stop();
		}), dc(node, "mouseout", this, function (evt) {
			dojo.stopEvent(evt);
			dijit.typematic.stop();
		}), dc(node, "mousemove", this, function (evt) {
			evt.preventDefault();
		}), dc(node, "dblclick", this, function (evt) {
			dojo.stopEvent(evt);
			if (dojo.isIE) {
				dijit.typematic.trigger(evt, _115, node, _116, node, _117, _118, _119);
				setTimeout(dojo.hitch(this, dijit.typematic.stop), 50);
			}
		})];
	}, addListener: function (_11a, _11b, _11c, _11d, _11e, _11f, _120, _121) {
		return this.addKeyListener(_11b, _11c, _11d, _11e, _11f, _120, _121).concat(this.addMouseListener(_11a, _11d, _11e, _11f, _120, _121));
	}};
}
if (!dojo._hasResource["dijit._base.wai"]) {
	dojo._hasResource["dijit._base.wai"] = true;
	dojo.provide("dijit._base.wai");
	dijit.wai = {onload: function () {
		var div = dojo.create("div", {id: "a11yTestNode", style: {cssText: "border: 1px solid;" + "border-color:red green;" + "position: absolute;" + "height: 5px;" + "top: -999px;" + "background-image: url(\"" + (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")) + "\");"}}, dojo.body());
		var cs = dojo.getComputedStyle(div);
		if (cs) {
			var _122 = cs.backgroundImage;
			var _123 = (cs.borderTopColor == cs.borderRightColor) || (_122 != null && (_122 == "none" || _122 == "url(invalid-url:)"));
			dojo[_123 ? "addClass" : "removeClass"](dojo.body(), "dijit_a11y");
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
	dojo.mixin(dijit, {hasWaiRole: function (elem, role) {
		var _124 = this.getWaiRole(elem);
		return role ? (_124.indexOf(role) > -1) : (_124.length > 0);
	}, getWaiRole: function (elem) {
		return dojo.trim((dojo.attr(elem, "role") || "").replace("wairole:", ""));
	}, setWaiRole: function (elem, role) {
		dojo.attr(elem, "role", role);
	}, removeWaiRole: function (elem, role) {
		var _125 = dojo.attr(elem, "role");
		if (!_125) {
			return;
		}
		if (role) {
			var t = dojo.trim((" " + _125 + " ").replace(" " + role + " ", " "));
			dojo.attr(elem, "role", t);
		} else {
			elem.removeAttribute("role");
		}
	}, hasWaiState: function (elem, _126) {
		return elem.hasAttribute ? elem.hasAttribute("aria-" + _126) : !!elem.getAttribute("aria-" + _126);
	}, getWaiState: function (elem, _127) {
		return elem.getAttribute("aria-" + _127) || "";
	}, setWaiState: function (elem, _128, _129) {
		elem.setAttribute("aria-" + _128, _129);
	}, removeWaiState: function (elem, _12a) {
		elem.removeAttribute("aria-" + _12a);
	}});
}
if (!dojo._hasResource["dijit._base"]) {
	dojo._hasResource["dijit._base"] = true;
	dojo.provide("dijit._base");
}
if (!dojo._hasResource["dijit._Widget"]) {
	dojo._hasResource["dijit._Widget"] = true;
	dojo.provide("dijit._Widget");
	dojo.connect(dojo, "_connect", function (_12b, _12c) {
		if (_12b && dojo.isFunction(_12b._onConnect)) {
			_12b._onConnect(_12c);
		}
	});
	dijit._connectOnUseEventHandler = function (_12d) {
	};
	dijit._lastKeyDownNode = null;
	if (dojo.isIE) {
		(function () {
			var _12e = function (evt) {
				dijit._lastKeyDownNode = evt.srcElement;
			};
			dojo.doc.attachEvent("onkeydown", _12e);
			dojo.addOnWindowUnload(function () {
				dojo.doc.detachEvent("onkeydown", _12e);
			});
		})();
	} else {
		dojo.doc.addEventListener("keydown", function (evt) {
			dijit._lastKeyDownNode = evt.target;
		}, true);
	}
	(function () {
		dojo.declare("dijit._Widget", dijit._WidgetBase, {_deferredConnects: {onClick: "", onDblClick: "", onKeyDown: "", onKeyPress: "", onKeyUp: "", onMouseMove: "", onMouseDown: "", onMouseOut: "", onMouseOver: "", onMouseLeave: "", onMouseEnter: "", onMouseUp: ""}, onClick: dijit._connectOnUseEventHandler, onDblClick: dijit._connectOnUseEventHandler, onKeyDown: dijit._connectOnUseEventHandler, onKeyPress: dijit._connectOnUseEventHandler, onKeyUp: dijit._connectOnUseEventHandler, onMouseDown: dijit._connectOnUseEventHandler, onMouseMove: dijit._connectOnUseEventHandler, onMouseOut: dijit._connectOnUseEventHandler, onMouseOver: dijit._connectOnUseEventHandler, onMouseLeave: dijit._connectOnUseEventHandler, onMouseEnter: dijit._connectOnUseEventHandler, onMouseUp: dijit._connectOnUseEventHandler, create: function (_12f, _130) {
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
		}, _onConnect: function (_131) {
			if (_131 in this._deferredConnects) {
				var _132 = this[this._deferredConnects[_131] || "domNode"];
				this.connect(_132, _131.toLowerCase(), _131);
				delete this._deferredConnects[_131];
			}
		}, focused: false, isFocusable: function () {
			return this.focus && (dojo.style(this.domNode, "display") != "none");
		}, onFocus: function () {
		}, onBlur: function () {
		}, _onFocus: function (e) {
			this.onFocus();
		}, _onBlur: function () {
			this.onBlur();
		}, setAttribute: function (attr, _133) {
			dojo.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
			this.set(attr, _133);
		}, attr: function (name, _134) {
			if (dojo.config.isDebug) {
				var _135 = arguments.callee._ach || (arguments.callee._ach = {}), _136 = (arguments.callee.caller || "unknown caller").toString();
				if (!_135[_136]) {
					dojo.deprecated(this.declaredClass + "::attr() is deprecated. Use get() or set() instead, called from " + _136, "", "2.0");
					_135[_136] = true;
				}
			}
			var args = arguments.length;
			if (args >= 2 || typeof name === "object") {
				return this.set.apply(this, arguments);
			} else {
				return this.get(name);
			}
		}, nodesWithKeyClick: ["input", "button"], connect: function (obj, _137, _138) {
			var d = dojo, dc = d._connect, _139 = this.inherited(arguments, [obj, _137 == "ondijitclick" ? "onclick" : _137, _138]);
			if (_137 == "ondijitclick") {
				if (d.indexOf(this.nodesWithKeyClick, obj.nodeName.toLowerCase()) == -1) {
					var m = d.hitch(this, _138);
					_139.push(dc(obj, "onkeydown", this, function (e) {
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
			return _139;
		}, _onShow: function () {
			this.onShow();
		}, onShow: function () {
		}, onHide: function () {
		}, onClose: function () {
			return true;
		}});
	})();
}
if (!dojo._hasResource["dojox.gfx.matrix"]) {
	dojo._hasResource["dojox.gfx.matrix"] = true;
	dojo.provide("dojox.gfx.matrix");
	(function () {
		var m = dojox.gfx.matrix;
		var _13a = {};
		m._degToRad = function (_13b) {
			return _13a[_13b] || (_13a[_13b] = (Math.PI * _13b / 180));
		};
		m._radToDeg = function (_13c) {
			return _13c / Math.PI * 180;
		};
		m.Matrix2D = function (arg) {
			if (arg) {
				if (typeof arg == "number") {
					this.xx = this.yy = arg;
				} else {
					if (arg instanceof Array) {
						if (arg.length > 0) {
							var _13d = m.normalize(arg[0]);
							for (var i = 1; i < arg.length; ++i) {
								var l = _13d, r = dojox.gfx.matrix.normalize(arg[i]);
								_13d = new m.Matrix2D();
								_13d.xx = l.xx * r.xx + l.xy * r.yx;
								_13d.xy = l.xx * r.xy + l.xy * r.yy;
								_13d.yx = l.yx * r.xx + l.yy * r.yx;
								_13d.yy = l.yx * r.xy + l.yy * r.yy;
								_13d.dx = l.xx * r.dx + l.xy * r.dy + l.dx;
								_13d.dy = l.yx * r.dx + l.yy * r.dy + l.dy;
							}
							dojo.mixin(this, _13d);
						}
					} else {
						dojo.mixin(this, arg);
					}
				}
			}
		};
		dojo.extend(m.Matrix2D, {xx: 1, xy: 0, yx: 0, yy: 1, dx: 0, dy: 0});
		dojo.mixin(m, {identity: new m.Matrix2D(), flipX: new m.Matrix2D({xx: -1}), flipY: new m.Matrix2D({yy: -1}), flipXY: new m.Matrix2D({xx: -1, yy: -1}), translate: function (a, b) {
			if (arguments.length > 1) {
				return new m.Matrix2D({dx: a, dy: b});
			}
			return new m.Matrix2D({dx: a.x, dy: a.y});
		}, scale: function (a, b) {
			if (arguments.length > 1) {
				return new m.Matrix2D({xx: a, yy: b});
			}
			if (typeof a == "number") {
				return new m.Matrix2D({xx: a, yy: a});
			}
			return new m.Matrix2D({xx: a.x, yy: a.y});
		}, rotate: function (_13e) {
			var c = Math.cos(_13e);
			var s = Math.sin(_13e);
			return new m.Matrix2D({xx: c, xy: -s, yx: s, yy: c});
		}, rotateg: function (_13f) {
			return m.rotate(m._degToRad(_13f));
		}, skewX: function (_140) {
			return new m.Matrix2D({xy: Math.tan(_140)});
		}, skewXg: function (_141) {
			return m.skewX(m._degToRad(_141));
		}, skewY: function (_142) {
			return new m.Matrix2D({yx: Math.tan(_142)});
		}, skewYg: function (_143) {
			return m.skewY(m._degToRad(_143));
		}, reflect: function (a, b) {
			if (arguments.length == 1) {
				b = a.y;
				a = a.x;
			}
			var a2 = a * a, b2 = b * b, n2 = a2 + b2, xy = 2 * a * b / n2;
			return new m.Matrix2D({xx: 2 * a2 / n2 - 1, xy: xy, yx: xy, yy: 2 * b2 / n2 - 1});
		}, project: function (a, b) {
			if (arguments.length == 1) {
				b = a.y;
				a = a.x;
			}
			var a2 = a * a, b2 = b * b, n2 = a2 + b2, xy = a * b / n2;
			return new m.Matrix2D({xx: a2 / n2, xy: xy, yx: xy, yy: b2 / n2});
		}, normalize: function (_144) {
			return (_144 instanceof m.Matrix2D) ? _144 : new m.Matrix2D(_144);
		}, clone: function (_145) {
			var obj = new m.Matrix2D();
			for (var i in _145) {
				if (typeof (_145[i]) == "number" && typeof (obj[i]) == "number" && obj[i] != _145[i]) {
					obj[i] = _145[i];
				}
			}
			return obj;
		}, invert: function (_146) {
			var M = m.normalize(_146), D = M.xx * M.yy - M.xy * M.yx, M = new m.Matrix2D({xx: M.yy / D, xy: -M.xy / D, yx: -M.yx / D, yy: M.xx / D, dx: (M.xy * M.dy - M.yy * M.dx) / D, dy: (M.yx * M.dx - M.xx * M.dy) / D});
			return M;
		}, _multiplyPoint: function (_147, x, y) {
			return {x: _147.xx * x + _147.xy * y + _147.dx, y: _147.yx * x + _147.yy * y + _147.dy};
		}, multiplyPoint: function (_148, a, b) {
			var M = m.normalize(_148);
			if (typeof a == "number" && typeof b == "number") {
				return m._multiplyPoint(M, a, b);
			}
			return m._multiplyPoint(M, a.x, a.y);
		}, multiply: function (_149) {
			var M = m.normalize(_149);
			for (var i = 1; i < arguments.length; ++i) {
				var l = M, r = m.normalize(arguments[i]);
				M = new m.Matrix2D();
				M.xx = l.xx * r.xx + l.xy * r.yx;
				M.xy = l.xx * r.xy + l.xy * r.yy;
				M.yx = l.yx * r.xx + l.yy * r.yx;
				M.yy = l.yx * r.xy + l.yy * r.yy;
				M.dx = l.xx * r.dx + l.xy * r.dy + l.dx;
				M.dy = l.yx * r.dx + l.yy * r.dy + l.dy;
			}
			return M;
		}, _sandwich: function (_14a, x, y) {
			return m.multiply(m.translate(x, y), _14a, m.translate(-x, -y));
		}, scaleAt: function (a, b, c, d) {
			switch (arguments.length) {
				case 4:
					return m._sandwich(m.scale(a, b), c, d);
				case 3:
					if (typeof c == "number") {
						return m._sandwich(m.scale(a), b, c);
					}
					return m._sandwich(m.scale(a, b), c.x, c.y);
			}
			return m._sandwich(m.scale(a), b.x, b.y);
		}, rotateAt: function (_14b, a, b) {
			if (arguments.length > 2) {
				return m._sandwich(m.rotate(_14b), a, b);
			}
			return m._sandwich(m.rotate(_14b), a.x, a.y);
		}, rotategAt: function (_14c, a, b) {
			if (arguments.length > 2) {
				return m._sandwich(m.rotateg(_14c), a, b);
			}
			return m._sandwich(m.rotateg(_14c), a.x, a.y);
		}, skewXAt: function (_14d, a, b) {
			if (arguments.length > 2) {
				return m._sandwich(m.skewX(_14d), a, b);
			}
			return m._sandwich(m.skewX(_14d), a.x, a.y);
		}, skewXgAt: function (_14e, a, b) {
			if (arguments.length > 2) {
				return m._sandwich(m.skewXg(_14e), a, b);
			}
			return m._sandwich(m.skewXg(_14e), a.x, a.y);
		}, skewYAt: function (_14f, a, b) {
			if (arguments.length > 2) {
				return m._sandwich(m.skewY(_14f), a, b);
			}
			return m._sandwich(m.skewY(_14f), a.x, a.y);
		}, skewYgAt: function (_150, a, b) {
			if (arguments.length > 2) {
				return m._sandwich(m.skewYg(_150), a, b);
			}
			return m._sandwich(m.skewYg(_150), a.x, a.y);
		}});
	})();
	dojox.gfx.Matrix2D = dojox.gfx.matrix.Matrix2D;
}
if (!dojo._hasResource["dojox.gfx._base"]) {
	dojo._hasResource["dojox.gfx._base"] = true;
	dojo.provide("dojox.gfx._base");
	(function () {
		var g = dojox.gfx, b = g._base;
		g._hasClass = function (node, _151) {
			var cls = node.getAttribute("className");
			return cls && (" " + cls + " ").indexOf(" " + _151 + " ") >= 0;
		};
		g._addClass = function (node, _152) {
			var cls = node.getAttribute("className") || "";
			if (!cls || (" " + cls + " ").indexOf(" " + _152 + " ") < 0) {
				node.setAttribute("className", cls + (cls ? " " : "") + _152);
			}
		};
		g._removeClass = function (node, _153) {
			var cls = node.getAttribute("className");
			if (cls) {
				node.setAttribute("className", cls.replace(new RegExp("(^|\\s+)" + _153 + "(\\s+|$)"), "$1$2"));
			}
		};
		b._getFontMeasurements = function () {
			var _154 = {"1em": 0, "1ex": 0, "100%": 0, "12pt": 0, "16px": 0, "xx-small": 0, "x-small": 0, "small": 0, "medium": 0, "large": 0, "x-large": 0, "xx-large": 0};
			if (dojo.isIE) {
				dojo.doc.documentElement.style.fontSize = "100%";
			}
			var div = dojo.create("div", {style: {position: "absolute", left: "0", top: "-100px", width: "30px", height: "1000em", borderWidth: "0", margin: "0", padding: "0", outline: "none", lineHeight: "1", overflow: "hidden"}}, dojo.body());
			for (var p in _154) {
				div.style.fontSize = p;
				_154[p] = Math.round(div.offsetHeight * 12 / 16) * 16 / 12 / 1000;
			}
			dojo.body().removeChild(div);
			return _154;
		};
		var _155 = null;
		b._getCachedFontMeasurements = function (_156) {
			if (_156 || !_155) {
				_155 = b._getFontMeasurements();
			}
			return _155;
		};
		var _157 = null, _158 = {};
		b._getTextBox = function (text, _159, _15a) {
			var m, s, al = arguments.length;
			if (!_157) {
				_157 = dojo.create("div", {style: {position: "absolute", top: "-10000px", left: "0"}}, dojo.body());
			}
			m = _157;
			m.className = "";
			s = m.style;
			s.borderWidth = "0";
			s.margin = "0";
			s.padding = "0";
			s.outline = "0";
			if (al > 1 && _159) {
				for (var i in _159) {
					if (i in _158) {
						continue;
					}
					s[i] = _159[i];
				}
			}
			if (al > 2 && _15a) {
				m.className = _15a;
			}
			m.innerHTML = text;
			if (m["getBoundingClientRect"]) {
				var bcr = m.getBoundingClientRect();
				return {l: bcr.left, t: bcr.top, w: bcr.width || (bcr.right - bcr.left), h: bcr.height || (bcr.bottom - bcr.top)};
			} else {
				return dojo.marginBox(m);
			}
		};
		var _15b = 0;
		b._getUniqueId = function () {
			var id;
			do {
				id = dojo._scopeName + "Unique" + (++_15b);
			} while (dojo.byId(id));
			return id;
		};
	})();
	dojo.mixin(dojox.gfx, {defaultPath: {type: "path", path: ""}, defaultPolyline: {type: "polyline", points: []}, defaultRect: {type: "rect", x: 0, y: 0, width: 100, height: 100, r: 0}, defaultEllipse: {type: "ellipse", cx: 0, cy: 0, rx: 200, ry: 100}, defaultCircle: {type: "circle", cx: 0, cy: 0, r: 100}, defaultLine: {type: "line", x1: 0, y1: 0, x2: 100, y2: 100}, defaultImage: {type: "image", x: 0, y: 0, width: 0, height: 0, src: ""}, defaultText: {type: "text", x: 0, y: 0, text: "", align: "start", decoration: "none", rotated: false, kerning: true}, defaultTextPath: {type: "textpath", text: "", align: "start", decoration: "none", rotated: false, kerning: true}, defaultStroke: {type: "stroke", color: "black", style: "solid", width: 1, cap: "butt", join: 4}, defaultLinearGradient: {type: "linear", x1: 0, y1: 0, x2: 100, y2: 100, colors: [
		{offset: 0, color: "black"},
		{offset: 1, color: "white"}
	]}, defaultRadialGradient: {type: "radial", cx: 0, cy: 0, r: 100, colors: [
		{offset: 0, color: "black"},
		{offset: 1, color: "white"}
	]}, defaultPattern: {type: "pattern", x: 0, y: 0, width: 0, height: 0, src: ""}, defaultFont: {type: "font", style: "normal", variant: "normal", weight: "normal", size: "10pt", family: "serif"}, getDefault: (function () {
		var _15c = {};
		return function (type) {
			var t = _15c[type];
			if (t) {
				return new t();
			}
			t = _15c[type] = new Function;
			t.prototype = dojox.gfx["default" + type];
			return new t();
		};
	})(), normalizeColor: function (_15d) {
		return (_15d instanceof dojo.Color) ? _15d : new dojo.Color(_15d);
	}, normalizeParameters: function (_15e, _15f) {
		if (_15f) {
			var _160 = {};
			for (var x in _15e) {
				if (x in _15f && !(x in _160)) {
					_15e[x] = _15f[x];
				}
			}
		}
		return _15e;
	}, makeParameters: function (_161, _162) {
		if (!_162) {
			return dojo.delegate(_161);
		}
		var _163 = {};
		for (var i in _161) {
			if (!(i in _163)) {
				_163[i] = dojo.clone((i in _162) ? _162[i] : _161[i]);
			}
		}
		return _163;
	}, formatNumber: function (x, _164) {
		var val = x.toString();
		if (val.indexOf("e") >= 0) {
			val = x.toFixed(4);
		} else {
			var _165 = val.indexOf(".");
			if (_165 >= 0 && val.length - _165 > 5) {
				val = x.toFixed(4);
			}
		}
		if (x < 0) {
			return val;
		}
		return _164 ? " " + val : val;
	}, makeFontString: function (font) {
		return font.style + " " + font.variant + " " + font.weight + " " + font.size + " " + font.family;
	}, splitFontString: function (str) {
		var font = dojox.gfx.getDefault("Font");
		var t = str.split(/\s+/);
		do {
			if (t.length < 5) {
				break;
			}
			font.style = t[0];
			font.variant = t[1];
			font.weight = t[2];
			var i = t[3].indexOf("/");
			font.size = i < 0 ? t[3] : t[3].substring(0, i);
			var j = 4;
			if (i < 0) {
				if (t[4] == "/") {
					j = 6;
				} else {
					if (t[4].charAt(0) == "/") {
						j = 5;
					}
				}
			}
			if (j < t.length) {
				font.family = t.slice(j).join(" ");
			}
		} while (false);
		return font;
	}, cm_in_pt: 72 / 2.54, mm_in_pt: 7.2 / 2.54, px_in_pt: function () {
		return dojox.gfx._base._getCachedFontMeasurements()["12pt"] / 12;
	}, pt2px: function (len) {
		return len * dojox.gfx.px_in_pt();
	}, px2pt: function (len) {
		return len / dojox.gfx.px_in_pt();
	}, normalizedLength: function (len) {
		if (len.length == 0) {
			return 0;
		}
		if (len.length > 2) {
			var _166 = dojox.gfx.px_in_pt();
			var val = parseFloat(len);
			switch (len.slice(-2)) {
				case "px":
					return val;
				case "pt":
					return val * _166;
				case "in":
					return val * 72 * _166;
				case "pc":
					return val * 12 * _166;
				case "mm":
					return val * dojox.gfx.mm_in_pt * _166;
				case "cm":
					return val * dojox.gfx.cm_in_pt * _166;
			}
		}
		return parseFloat(len);
	}, pathVmlRegExp: /([A-Za-z]+)|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g, pathSvgRegExp: /([A-Za-z])|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g, equalSources: function (a, b) {
		return a && b && a == b;
	}, switchTo: function (_167) {
		var ns = dojox.gfx[_167];
		if (ns) {
			dojo.forEach(["Group", "Rect", "Ellipse", "Circle", "Line", "Polyline", "Image", "Text", "Path", "TextPath", "Surface", "createSurface"], function (name) {
				dojox.gfx[name] = ns[name];
			});
		}
	}});
}
if (!dojo._hasResource["dojox.gfx"]) {
	dojo._hasResource["dojox.gfx"] = true;
	dojo.provide("dojox.gfx");
	dojo.loadInit(function () {
		var gfx = dojo.getObject("dojox.gfx", true), sl, flag, _168;
		while (!gfx.renderer) {
			if (dojo.config.forceGfxRenderer) {
				dojox.gfx.renderer = dojo.config.forceGfxRenderer;
				break;
			}
			var _169 = (typeof dojo.config.gfxRenderer == "string" ? dojo.config.gfxRenderer : "svg,vml,canvas,silverlight").split(",");
			for (var i = 0; i < _169.length; ++i) {
				switch (_169[i]) {
					case "svg":
						if ("SVGAngle" in dojo.global) {
							dojox.gfx.renderer = "svg";
						}
						break;
					case "vml":
						if (dojo.isIE) {
							dojox.gfx.renderer = "vml";
						}
						break;
					case "silverlight":
						try {
							if (dojo.isIE) {
								sl = new ActiveXObject("AgControl.AgControl");
								if (sl && sl.IsVersionSupported("1.0")) {
									flag = true;
								}
							} else {
								if (navigator.plugins["Silverlight Plug-In"]) {
									flag = true;
								}
							}
						} catch (e) {
							flag = false;
						} finally {
							sl = null;
						}
						if (flag) {
							dojox.gfx.renderer = "silverlight";
						}
						break;
					case "canvas":
						if (dojo.global.CanvasRenderingContext2D) {
							dojox.gfx.renderer = "canvas";
						}
						break;
				}
				if (gfx.renderer) {
					break;
				}
			}
			break;
		}
		if (dojo.config.isDebug) {
		}
		if (gfx[gfx.renderer]) {
			gfx.switchTo(gfx.renderer);
		} else {
			gfx.loadAndSwitch = gfx.renderer;
			dojo["require"]("dojox.gfx." + gfx.renderer);
		}
	});
}
if (!dojo._hasResource["dojox.lang.functional.lambda"]) {
	dojo._hasResource["dojox.lang.functional.lambda"] = true;
	dojo.provide("dojox.lang.functional.lambda");
	(function () {
		var df = dojox.lang.functional, _16a = {};
		var _16b = "ab".split(/a*/).length > 1 ? String.prototype.split : function (sep) {
			var r = this.split.call(this, sep), m = sep.exec(this);
			if (m && m.index == 0) {
				r.unshift("");
			}
			return r;
		};
		var _16c = function (s) {
			var args = [], _16d = _16b.call(s, /\s*->\s*/m);
			if (_16d.length > 1) {
				while (_16d.length) {
					s = _16d.pop();
					args = _16d.pop().split(/\s*,\s*|\s+/m);
					if (_16d.length) {
						_16d.push("(function(" + args + "){return (" + s + ")})");
					}
				}
			} else {
				if (s.match(/\b_\b/)) {
					args = ["_"];
				} else {
					var l = s.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m), r = s.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);
					if (l || r) {
						if (l) {
							args.push("$1");
							s = "$1" + s;
						}
						if (r) {
							args.push("$2");
							s = s + "$2";
						}
					} else {
						var vars = s.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*:|this|true|false|null|undefined|typeof|instanceof|in|delete|new|void|arguments|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|isFinite|isNaN|parseFloat|parseInt|unescape|dojo|dijit|dojox|window|document|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g, "").match(/([a-z_$][a-z_$\d]*)/gi) || [], t = {};
						dojo.forEach(vars, function (v) {
							if (!(v in t)) {
								args.push(v);
								t[v] = 1;
							}
						});
					}
				}
			}
			return {args: args, body: s};
		};
		var _16e = function (a) {
			return a.length ? function () {
				var i = a.length - 1, x = df.lambda(a[i]).apply(this, arguments);
				for (--i; i >= 0; --i) {
					x = df.lambda(a[i]).call(this, x);
				}
				return x;
			} : function (x) {
				return x;
			};
		};
		dojo.mixin(df, {rawLambda: function (s) {
			return _16c(s);
		}, buildLambda: function (s) {
			s = _16c(s);
			return "function(" + s.args.join(",") + "){return (" + s.body + ");}";
		}, lambda: function (s) {
			if (typeof s == "function") {
				return s;
			}
			if (s instanceof Array) {
				return _16e(s);
			}
			if (s in _16a) {
				return _16a[s];
			}
			s = _16c(s);
			return _16a[s] = new Function(s.args, "return (" + s.body + ");");
		}, clearLambdaCache: function () {
			_16a = {};
		}});
	})();
}
if (!dojo._hasResource["dojox.lang.functional.array"]) {
	dojo._hasResource["dojox.lang.functional.array"] = true;
	dojo.provide("dojox.lang.functional.array");
	(function () {
		var d = dojo, df = dojox.lang.functional, _16f = {};
		d.mixin(df, {filter: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var t = [], v, i, n;
			if (d.isArray(a)) {
				for (i = 0, n = a.length; i < n; ++i) {
					v = a[i];
					if (f.call(o, v, i, a)) {
						t.push(v);
					}
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					for (i = 0; a.hasNext();) {
						v = a.next();
						if (f.call(o, v, i++, a)) {
							t.push(v);
						}
					}
				} else {
					for (i in a) {
						if (!(i in _16f)) {
							v = a[i];
							if (f.call(o, v, i, a)) {
								t.push(v);
							}
						}
					}
				}
			}
			return t;
		}, forEach: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var i, n;
			if (d.isArray(a)) {
				for (i = 0, n = a.length; i < n; f.call(o, a[i], i, a), ++i) {
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					for (i = 0; a.hasNext(); f.call(o, a.next(), i++, a)) {
					}
				} else {
					for (i in a) {
						if (!(i in _16f)) {
							f.call(o, a[i], i, a);
						}
					}
				}
			}
			return o;
		}, map: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var t, n, i;
			if (d.isArray(a)) {
				t = new Array(n = a.length);
				for (i = 0; i < n; t[i] = f.call(o, a[i], i, a), ++i) {
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					t = [];
					for (i = 0; a.hasNext(); t.push(f.call(o, a.next(), i++, a))) {
					}
				} else {
					t = [];
					for (i in a) {
						if (!(i in _16f)) {
							t.push(f.call(o, a[i], i, a));
						}
					}
				}
			}
			return t;
		}, every: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var i, n;
			if (d.isArray(a)) {
				for (i = 0, n = a.length; i < n; ++i) {
					if (!f.call(o, a[i], i, a)) {
						return false;
					}
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					for (i = 0; a.hasNext();) {
						if (!f.call(o, a.next(), i++, a)) {
							return false;
						}
					}
				} else {
					for (i in a) {
						if (!(i in _16f)) {
							if (!f.call(o, a[i], i, a)) {
								return false;
							}
						}
					}
				}
			}
			return true;
		}, some: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var i, n;
			if (d.isArray(a)) {
				for (i = 0, n = a.length; i < n; ++i) {
					if (f.call(o, a[i], i, a)) {
						return true;
					}
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					for (i = 0; a.hasNext();) {
						if (f.call(o, a.next(), i++, a)) {
							return true;
						}
					}
				} else {
					for (i in a) {
						if (!(i in _16f)) {
							if (f.call(o, a[i], i, a)) {
								return true;
							}
						}
					}
				}
			}
			return false;
		}});
	})();
}
if (!dojo._hasResource["dojox.lang.functional.object"]) {
	dojo._hasResource["dojox.lang.functional.object"] = true;
	dojo.provide("dojox.lang.functional.object");
	(function () {
		var d = dojo, df = dojox.lang.functional, _170 = {};
		d.mixin(df, {keys: function (obj) {
			var t = [];
			for (var i in obj) {
				if (!(i in _170)) {
					t.push(i);
				}
			}
			return t;
		}, values: function (obj) {
			var t = [];
			for (var i in obj) {
				if (!(i in _170)) {
					t.push(obj[i]);
				}
			}
			return t;
		}, filterIn: function (obj, f, o) {
			o = o || d.global;
			f = df.lambda(f);
			var t = {}, v, i;
			for (i in obj) {
				if (!(i in _170)) {
					v = obj[i];
					if (f.call(o, v, i, obj)) {
						t[i] = v;
					}
				}
			}
			return t;
		}, forIn: function (obj, f, o) {
			o = o || d.global;
			f = df.lambda(f);
			for (var i in obj) {
				if (!(i in _170)) {
					f.call(o, obj[i], i, obj);
				}
			}
			return o;
		}, mapIn: function (obj, f, o) {
			o = o || d.global;
			f = df.lambda(f);
			var t = {}, i;
			for (i in obj) {
				if (!(i in _170)) {
					t[i] = f.call(o, obj[i], i, obj);
				}
			}
			return t;
		}});
	})();
}
if (!dojo._hasResource["dojox.lang.functional"]) {
	dojo._hasResource["dojox.lang.functional"] = true;
	dojo.provide("dojox.lang.functional");
}
if (!dojo._hasResource["dojox.lang.functional.fold"]) {
	dojo._hasResource["dojox.lang.functional.fold"] = true;
	dojo.provide("dojox.lang.functional.fold");
	(function () {
		var d = dojo, df = dojox.lang.functional, _171 = {};
		d.mixin(df, {foldl: function (a, f, z, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var i, n;
			if (d.isArray(a)) {
				for (i = 0, n = a.length; i < n; z = f.call(o, z, a[i], i, a), ++i) {
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					for (i = 0; a.hasNext(); z = f.call(o, z, a.next(), i++, a)) {
					}
				} else {
					for (i in a) {
						if (!(i in _171)) {
							z = f.call(o, z, a[i], i, a);
						}
					}
				}
			}
			return z;
		}, foldl1: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var z, i, n;
			if (d.isArray(a)) {
				z = a[0];
				for (i = 1, n = a.length; i < n; z = f.call(o, z, a[i], i, a), ++i) {
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					if (a.hasNext()) {
						z = a.next();
						for (i = 1; a.hasNext(); z = f.call(o, z, a.next(), i++, a)) {
						}
					}
				} else {
					var _172 = true;
					for (i in a) {
						if (!(i in _171)) {
							if (_172) {
								z = a[i];
								_172 = false;
							} else {
								z = f.call(o, z, a[i], i, a);
							}
						}
					}
				}
			}
			return z;
		}, foldr: function (a, f, z, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			for (var i = a.length; i > 0; --i, z = f.call(o, z, a[i], i, a)) {
			}
			return z;
		}, foldr1: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var n = a.length, z = a[n - 1], i = n - 1;
			for (; i > 0; --i, z = f.call(o, z, a[i], i, a)) {
			}
			return z;
		}, reduce: function (a, f, z) {
			return arguments.length < 3 ? df.foldl1(a, f) : df.foldl(a, f, z);
		}, reduceRight: function (a, f, z) {
			return arguments.length < 3 ? df.foldr1(a, f) : df.foldr(a, f, z);
		}, unfold: function (pr, f, g, z, o) {
			o = o || d.global;
			f = df.lambda(f);
			g = df.lambda(g);
			pr = df.lambda(pr);
			var t = [];
			for (; !pr.call(o, z); t.push(f.call(o, z)), z = g.call(o, z)) {
			}
			return t;
		}});
	})();
}
if (!dojo._hasResource["dojox.lang.functional.reversed"]) {
	dojo._hasResource["dojox.lang.functional.reversed"] = true;
	dojo.provide("dojox.lang.functional.reversed");
	(function () {
		var d = dojo, df = dojox.lang.functional;
		d.mixin(df, {filterRev: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var t = [], v, i = a.length - 1;
			for (; i >= 0; --i) {
				v = a[i];
				if (f.call(o, v, i, a)) {
					t.push(v);
				}
			}
			return t;
		}, forEachRev: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			for (var i = a.length - 1; i >= 0; f.call(o, a[i], i, a), --i) {
			}
		}, mapRev: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var n = a.length, t = new Array(n), i = n - 1, j = 0;
			for (; i >= 0; t[j++] = f.call(o, a[i], i, a), --i) {
			}
			return t;
		}, everyRev: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			for (var i = a.length - 1; i >= 0; --i) {
				if (!f.call(o, a[i], i, a)) {
					return false;
				}
			}
			return true;
		}, someRev: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			for (var i = a.length - 1; i >= 0; --i) {
				if (f.call(o, a[i], i, a)) {
					return true;
				}
			}
			return false;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.Element"]) {
	dojo._hasResource["dojox.charting.Element"] = true;
	dojo.provide("dojox.charting.Element");
	dojo.declare("dojox.charting.Element", null, {chart: null, group: null, htmlElements: null, dirty: true, constructor: function (_173) {
		this.chart = _173;
		this.group = null;
		this.htmlElements = [];
		this.dirty = true;
		this.trailingSymbol = "...";
		this._events = [];
	}, createGroup: function (_174) {
		if (!_174) {
			_174 = this.chart.surface;
		}
		if (!this.group) {
			this.group = _174.createGroup();
		}
		return this;
	}, purgeGroup: function () {
		this.destroyHtmlElements();
		if (this.group) {
			this.group.clear();
			this.group.removeShape();
			this.group = null;
		}
		this.dirty = true;
		if (this._events.length) {
			dojo.forEach(this._events, function (item) {
				item.shape.disconnect(item.handle);
			});
			this._events = [];
		}
		return this;
	}, cleanGroup: function (_175) {
		this.destroyHtmlElements();
		if (!_175) {
			_175 = this.chart.surface;
		}
		if (this.group) {
			this.group.clear();
		} else {
			this.group = _175.createGroup();
		}
		this.dirty = true;
		return this;
	}, destroyHtmlElements: function () {
		if (this.htmlElements.length) {
			dojo.forEach(this.htmlElements, dojo.destroy);
			this.htmlElements = [];
		}
	}, destroy: function () {
		this.purgeGroup();
	}, getTextWidth: function (s, font) {
		return dojox.gfx._base._getTextBox(s, {font: font}).w || 0;
	}, getTextWithLimitLength: function (s, font, _176, _177) {
		if (!s || s.length <= 0) {
			return {text: "", truncated: _177 || false};
		}
		if (!_176 || _176 <= 0) {
			return {text: s, truncated: _177 || false};
		}
		var _178 = 2, _179 = 0.618, _17a = s.substring(0, 1) + this.trailingSymbol, _17b = this.getTextWidth(_17a, font);
		if (_176 <= _17b) {
			return {text: _17a, truncated: true};
		}
		var _17c = this.getTextWidth(s, font);
		if (_17c <= _176) {
			return {text: s, truncated: _177 || false};
		} else {
			var _17d = 0, end = s.length;
			while (_17d < end) {
				if (end - _17d <= _178) {
					while (this.getTextWidth(s.substring(0, _17d) + this.trailingSymbol, font) > _176) {
						_17d -= 1;
					}
					return {text: (s.substring(0, _17d) + this.trailingSymbol), truncated: true};
				}
				var _17e = _17d + Math.round((end - _17d) * _179), _17f = this.getTextWidth(s.substring(0, _17e), font);
				if (_17f < _176) {
					_17d = _17e;
					end = end;
				} else {
					_17d = _17d;
					end = _17e;
				}
			}
		}
	}, getTextWithLimitCharCount: function (s, font, _180, _181) {
		if (!s || s.length <= 0) {
			return {text: "", truncated: _181 || false};
		}
		if (!_180 || _180 <= 0 || s.length <= _180) {
			return {text: s, truncated: _181 || false};
		}
		return {text: s.substring(0, _180) + this.trailingSymbol, truncated: true};
	}, _plotFill: function (fill, dim, _182) {
		if (!fill || !fill.type || !fill.space) {
			return fill;
		}
		var _183 = fill.space;
		switch (fill.type) {
			case "linear":
				if (_183 === "plot" || _183 === "shapeX" || _183 === "shapeY") {
					fill = dojox.gfx.makeParameters(dojox.gfx.defaultLinearGradient, fill);
					fill.space = _183;
					if (_183 === "plot" || _183 === "shapeX") {
						var span = dim.height - _182.t - _182.b;
						fill.y1 = _182.t + span * fill.y1 / 100;
						fill.y2 = _182.t + span * fill.y2 / 100;
					}
					if (_183 === "plot" || _183 === "shapeY") {
						var span = dim.width - _182.l - _182.r;
						fill.x1 = _182.l + span * fill.x1 / 100;
						fill.x2 = _182.l + span * fill.x2 / 100;
					}
				}
				break;
			case "radial":
				if (_183 === "plot") {
					fill = dojox.gfx.makeParameters(dojox.gfx.defaultRadialGradient, fill);
					fill.space = _183;
					var _184 = dim.width - _182.l - _182.r, _185 = dim.height - _182.t - _182.b;
					fill.cx = _182.l + _184 * fill.cx / 100;
					fill.cy = _182.t + _185 * fill.cy / 100;
					fill.r = fill.r * Math.sqrt(_184 * _184 + _185 * _185) / 200;
				}
				break;
			case "pattern":
				if (_183 === "plot" || _183 === "shapeX" || _183 === "shapeY") {
					fill = dojox.gfx.makeParameters(dojox.gfx.defaultPattern, fill);
					fill.space = _183;
					if (_183 === "plot" || _183 === "shapeX") {
						var span = dim.height - _182.t - _182.b;
						fill.y = _182.t + span * fill.y / 100;
						fill.height = span * fill.height / 100;
					}
					if (_183 === "plot" || _183 === "shapeY") {
						var span = dim.width - _182.l - _182.r;
						fill.x = _182.l + span * fill.x / 100;
						fill.width = span * fill.width / 100;
					}
				}
				break;
		}
		return fill;
	}, _shapeFill: function (fill, bbox) {
		if (!fill || !fill.space) {
			return fill;
		}
		var _186 = fill.space;
		switch (fill.type) {
			case "linear":
				if (_186 === "shape" || _186 === "shapeX" || _186 === "shapeY") {
					fill = dojox.gfx.makeParameters(dojox.gfx.defaultLinearGradient, fill);
					fill.space = _186;
					if (_186 === "shape" || _186 === "shapeX") {
						var span = bbox.width;
						fill.x1 = bbox.x + span * fill.x1 / 100;
						fill.x2 = bbox.x + span * fill.x2 / 100;
					}
					if (_186 === "shape" || _186 === "shapeY") {
						var span = bbox.height;
						fill.y1 = bbox.y + span * fill.y1 / 100;
						fill.y2 = bbox.y + span * fill.y2 / 100;
					}
				}
				break;
			case "radial":
				if (_186 === "shape") {
					fill = dojox.gfx.makeParameters(dojox.gfx.defaultRadialGradient, fill);
					fill.space = _186;
					fill.cx = bbox.x + bbox.width / 2;
					fill.cy = bbox.y + bbox.height / 2;
					fill.r = fill.r * bbox.width / 200;
				}
				break;
			case "pattern":
				if (_186 === "shape" || _186 === "shapeX" || _186 === "shapeY") {
					fill = dojox.gfx.makeParameters(dojox.gfx.defaultPattern, fill);
					fill.space = _186;
					if (_186 === "shape" || _186 === "shapeX") {
						var span = bbox.width;
						fill.x = bbox.x + span * fill.x / 100;
						fill.width = span * fill.width / 100;
					}
					if (_186 === "shape" || _186 === "shapeY") {
						var span = bbox.height;
						fill.y = bbox.y + span * fill.y / 100;
						fill.height = span * fill.height / 100;
					}
				}
				break;
		}
		return fill;
	}, _pseudoRadialFill: function (fill, _187, _188, _189, end) {
		if (!fill || fill.type !== "radial" || fill.space !== "shape") {
			return fill;
		}
		var _18a = fill.space;
		fill = dojox.gfx.makeParameters(dojox.gfx.defaultRadialGradient, fill);
		fill.space = _18a;
		if (arguments.length < 4) {
			fill.cx = _187.x;
			fill.cy = _187.y;
			fill.r = fill.r * _188 / 100;
			return fill;
		}
		var _18b = arguments.length < 5 ? _189 : (end + _189) / 2;
		return {type: "linear", x1: _187.x, y1: _187.y, x2: _187.x + fill.r * _188 * Math.cos(_18b) / 100, y2: _187.y + fill.r * _188 * Math.sin(_18b) / 100, colors: fill.colors};
		return fill;
	}});
}
if (!dojo._hasResource["dojo.colors"]) {
	dojo._hasResource["dojo.colors"] = true;
	dojo.provide("dojo.colors");
	dojo.getObject("colors", true, dojo);
	(function () {
		var _18c = function (m1, m2, h) {
			if (h < 0) {
				++h;
			}
			if (h > 1) {
				--h;
			}
			var h6 = 6 * h;
			if (h6 < 1) {
				return m1 + (m2 - m1) * h6;
			}
			if (2 * h < 1) {
				return m2;
			}
			if (3 * h < 2) {
				return m1 + (m2 - m1) * (2 / 3 - h) * 6;
			}
			return m1;
		};
		dojo.colorFromRgb = function (_18d, obj) {
			var m = _18d.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);
			if (m) {
				var c = m[2].split(/\s*,\s*/), l = c.length, t = m[1], a;
				if ((t == "rgb" && l == 3) || (t == "rgba" && l == 4)) {
					var r = c[0];
					if (r.charAt(r.length - 1) == "%") {
						a = dojo.map(c, function (x) {
							return parseFloat(x) * 2.56;
						});
						if (l == 4) {
							a[3] = c[3];
						}
						return dojo.colorFromArray(a, obj);
					}
					return dojo.colorFromArray(c, obj);
				}
				if ((t == "hsl" && l == 3) || (t == "hsla" && l == 4)) {
					var H = ((parseFloat(c[0]) % 360) + 360) % 360 / 360, S = parseFloat(c[1]) / 100, L = parseFloat(c[2]) / 100, m2 = L <= 0.5 ? L * (S + 1) : L + S - L * S, m1 = 2 * L - m2;
					a = [_18c(m1, m2, H + 1 / 3) * 256, _18c(m1, m2, H) * 256, _18c(m1, m2, H - 1 / 3) * 256, 1];
					if (l == 4) {
						a[3] = c[3];
					}
					return dojo.colorFromArray(a, obj);
				}
			}
			return null;
		};
		var _18e = function (c, low, high) {
			c = Number(c);
			return isNaN(c) ? high : c < low ? low : c > high ? high : c;
		};
		dojo.Color.prototype.sanitize = function () {
			var t = this;
			t.r = Math.round(_18e(t.r, 0, 255));
			t.g = Math.round(_18e(t.g, 0, 255));
			t.b = Math.round(_18e(t.b, 0, 255));
			t.a = _18e(t.a, 0, 1);
			return this;
		};
	})();
	dojo.colors.makeGrey = function (g, a) {
		return dojo.colorFromArray([g, g, g, a]);
	};
	dojo.mixin(dojo.Color.named, {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], blanchedalmond: [255, 235, 205], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], oldlace: [253, 245, 230], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], thistle: [216, 191, 216], tomato: [255, 99, 71], transparent: [0, 0, 0, 0], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], whitesmoke: [245, 245, 245], yellowgreen: [154, 205, 50]});
}
if (!dojo._hasResource["dojox.color._base"]) {
	dojo._hasResource["dojox.color._base"] = true;
	dojo.provide("dojox.color._base");
	dojox.color.Color = dojo.Color;
	dojox.color.blend = dojo.blendColors;
	dojox.color.fromRgb = dojo.colorFromRgb;
	dojox.color.fromHex = dojo.colorFromHex;
	dojox.color.fromArray = dojo.colorFromArray;
	dojox.color.fromString = dojo.colorFromString;
	dojox.color.greyscale = dojo.colors.makeGrey;
	dojo.mixin(dojox.color, {fromCmy: function (cyan, _18f, _190) {
		if (dojo.isArray(cyan)) {
			_18f = cyan[1], _190 = cyan[2], cyan = cyan[0];
		} else {
			if (dojo.isObject(cyan)) {
				_18f = cyan.m, _190 = cyan.y, cyan = cyan.c;
			}
		}
		cyan /= 100, _18f /= 100, _190 /= 100;
		var r = 1 - cyan, g = 1 - _18f, b = 1 - _190;
		return new dojox.color.Color({r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)});
	}, fromCmyk: function (cyan, _191, _192, _193) {
		if (dojo.isArray(cyan)) {
			_191 = cyan[1], _192 = cyan[2], _193 = cyan[3], cyan = cyan[0];
		} else {
			if (dojo.isObject(cyan)) {
				_191 = cyan.m, _192 = cyan.y, _193 = cyan.b, cyan = cyan.c;
			}
		}
		cyan /= 100, _191 /= 100, _192 /= 100, _193 /= 100;
		var r, g, b;
		r = 1 - Math.min(1, cyan * (1 - _193) + _193);
		g = 1 - Math.min(1, _191 * (1 - _193) + _193);
		b = 1 - Math.min(1, _192 * (1 - _193) + _193);
		return new dojox.color.Color({r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)});
	}, fromHsl: function (hue, _194, _195) {
		if (dojo.isArray(hue)) {
			_194 = hue[1], _195 = hue[2], hue = hue[0];
		} else {
			if (dojo.isObject(hue)) {
				_194 = hue.s, _195 = hue.l, hue = hue.h;
			}
		}
		_194 /= 100;
		_195 /= 100;
		while (hue < 0) {
			hue += 360;
		}
		while (hue >= 360) {
			hue -= 360;
		}
		var r, g, b;
		if (hue < 120) {
			r = (120 - hue) / 60, g = hue / 60, b = 0;
		} else {
			if (hue < 240) {
				r = 0, g = (240 - hue) / 60, b = (hue - 120) / 60;
			} else {
				r = (hue - 240) / 60, g = 0, b = (360 - hue) / 60;
			}
		}
		r = 2 * _194 * Math.min(r, 1) + (1 - _194);
		g = 2 * _194 * Math.min(g, 1) + (1 - _194);
		b = 2 * _194 * Math.min(b, 1) + (1 - _194);
		if (_195 < 0.5) {
			r *= _195, g *= _195, b *= _195;
		} else {
			r = (1 - _195) * r + 2 * _195 - 1;
			g = (1 - _195) * g + 2 * _195 - 1;
			b = (1 - _195) * b + 2 * _195 - 1;
		}
		return new dojox.color.Color({r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)});
	}, fromHsv: function (hue, _196, _197) {
		if (dojo.isArray(hue)) {
			_196 = hue[1], _197 = hue[2], hue = hue[0];
		} else {
			if (dojo.isObject(hue)) {
				_196 = hue.s, _197 = hue.v, hue = hue.h;
			}
		}
		if (hue == 360) {
			hue = 0;
		}
		_196 /= 100;
		_197 /= 100;
		var r, g, b;
		if (_196 == 0) {
			r = _197, b = _197, g = _197;
		} else {
			var _198 = hue / 60, i = Math.floor(_198), f = _198 - i;
			var p = _197 * (1 - _196);
			var q = _197 * (1 - (_196 * f));
			var t = _197 * (1 - (_196 * (1 - f)));
			switch (i) {
				case 0:
					r = _197, g = t, b = p;
					break;
				case 1:
					r = q, g = _197, b = p;
					break;
				case 2:
					r = p, g = _197, b = t;
					break;
				case 3:
					r = p, g = q, b = _197;
					break;
				case 4:
					r = t, g = p, b = _197;
					break;
				case 5:
					r = _197, g = p, b = q;
					break;
			}
		}
		return new dojox.color.Color({r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)});
	}});
	dojo.extend(dojox.color.Color, {toCmy: function () {
		var cyan = 1 - (this.r / 255), _199 = 1 - (this.g / 255), _19a = 1 - (this.b / 255);
		return {c: Math.round(cyan * 100), m: Math.round(_199 * 100), y: Math.round(_19a * 100)};
	}, toCmyk: function () {
		var cyan, _19b, _19c, _19d;
		var r = this.r / 255, g = this.g / 255, b = this.b / 255;
		_19d = Math.min(1 - r, 1 - g, 1 - b);
		cyan = (1 - r - _19d) / (1 - _19d);
		_19b = (1 - g - _19d) / (1 - _19d);
		_19c = (1 - b - _19d) / (1 - _19d);
		return {c: Math.round(cyan * 100), m: Math.round(_19b * 100), y: Math.round(_19c * 100), b: Math.round(_19d * 100)};
	}, toHsl: function () {
		var r = this.r / 255, g = this.g / 255, b = this.b / 255;
		var min = Math.min(r, b, g), max = Math.max(r, g, b);
		var _19e = max - min;
		var h = 0, s = 0, l = (min + max) / 2;
		if (l > 0 && l < 1) {
			s = _19e / ((l < 0.5) ? (2 * l) : (2 - 2 * l));
		}
		if (_19e > 0) {
			if (max == r && max != g) {
				h += (g - b) / _19e;
			}
			if (max == g && max != b) {
				h += (2 + (b - r) / _19e);
			}
			if (max == b && max != r) {
				h += (4 + (r - g) / _19e);
			}
			h *= 60;
		}
		return {h: h, s: Math.round(s * 100), l: Math.round(l * 100)};
	}, toHsv: function () {
		var r = this.r / 255, g = this.g / 255, b = this.b / 255;
		var min = Math.min(r, b, g), max = Math.max(r, g, b);
		var _19f = max - min;
		var h = null, s = (max == 0) ? 0 : (_19f / max);
		if (s == 0) {
			h = 0;
		} else {
			if (r == max) {
				h = 60 * (g - b) / _19f;
			} else {
				if (g == max) {
					h = 120 + 60 * (b - r) / _19f;
				} else {
					h = 240 + 60 * (r - g) / _19f;
				}
			}
			if (h < 0) {
				h += 360;
			}
		}
		return {h: h, s: Math.round(s * 100), v: Math.round(max * 100)};
	}});
}
if (!dojo._hasResource["dojox.color"]) {
	dojo._hasResource["dojox.color"] = true;
	dojo.provide("dojox.color");
}
if (!dojo._hasResource["dojox.color.Palette"]) {
	dojo._hasResource["dojox.color.Palette"] = true;
	dojo.provide("dojox.color.Palette");
	(function () {
		var dxc = dojox.color;
		dxc.Palette = function (base) {
			this.colors = [];
			if (base instanceof dojox.color.Palette) {
				this.colors = base.colors.slice(0);
			} else {
				if (base instanceof dojox.color.Color) {
					this.colors = [null, null, base, null, null];
				} else {
					if (dojo.isArray(base)) {
						this.colors = dojo.map(base.slice(0), function (item) {
							if (dojo.isString(item)) {
								return new dojox.color.Color(item);
							}
							return item;
						});
					} else {
						if (dojo.isString(base)) {
							this.colors = [null, null, new dojox.color.Color(base), null, null];
						}
					}
				}
			}
		};
		function _1a0(p, _1a1, val) {
			var ret = new dojox.color.Palette();
			ret.colors = [];
			dojo.forEach(p.colors, function (item) {
				var r = (_1a1 == "dr") ? item.r + val : item.r, g = (_1a1 == "dg") ? item.g + val : item.g, b = (_1a1 == "db") ? item.b + val : item.b, a = (_1a1 == "da") ? item.a + val : item.a;
				ret.colors.push(new dojox.color.Color({r: Math.min(255, Math.max(0, r)), g: Math.min(255, Math.max(0, g)), b: Math.min(255, Math.max(0, b)), a: Math.min(1, Math.max(0, a))}));
			});
			return ret;
		};
		function tCMY(p, _1a2, val) {
			var ret = new dojox.color.Palette();
			ret.colors = [];
			dojo.forEach(p.colors, function (item) {
				var o = item.toCmy(), c = (_1a2 == "dc") ? o.c + val : o.c, m = (_1a2 == "dm") ? o.m + val : o.m, y = (_1a2 == "dy") ? o.y + val : o.y;
				ret.colors.push(dojox.color.fromCmy(Math.min(100, Math.max(0, c)), Math.min(100, Math.max(0, m)), Math.min(100, Math.max(0, y))));
			});
			return ret;
		};
		function _1a3(p, _1a4, val) {
			var ret = new dojox.color.Palette();
			ret.colors = [];
			dojo.forEach(p.colors, function (item) {
				var o = item.toCmyk(), c = (_1a4 == "dc") ? o.c + val : o.c, m = (_1a4 == "dm") ? o.m + val : o.m, y = (_1a4 == "dy") ? o.y + val : o.y, k = (_1a4 == "dk") ? o.b + val : o.b;
				ret.colors.push(dojox.color.fromCmyk(Math.min(100, Math.max(0, c)), Math.min(100, Math.max(0, m)), Math.min(100, Math.max(0, y)), Math.min(100, Math.max(0, k))));
			});
			return ret;
		};
		function tHSL(p, _1a5, val) {
			var ret = new dojox.color.Palette();
			ret.colors = [];
			dojo.forEach(p.colors, function (item) {
				var o = item.toHsl(), h = (_1a5 == "dh") ? o.h + val : o.h, s = (_1a5 == "ds") ? o.s + val : o.s, l = (_1a5 == "dl") ? o.l + val : o.l;
				ret.colors.push(dojox.color.fromHsl(h % 360, Math.min(100, Math.max(0, s)), Math.min(100, Math.max(0, l))));
			});
			return ret;
		};
		function tHSV(p, _1a6, val) {
			var ret = new dojox.color.Palette();
			ret.colors = [];
			dojo.forEach(p.colors, function (item) {
				var o = item.toHsv(), h = (_1a6 == "dh") ? o.h + val : o.h, s = (_1a6 == "ds") ? o.s + val : o.s, v = (_1a6 == "dv") ? o.v + val : o.v;
				ret.colors.push(dojox.color.fromHsv(h % 360, Math.min(100, Math.max(0, s)), Math.min(100, Math.max(0, v))));
			});
			return ret;
		};
		function _1a7(val, low, high) {
			return high - ((high - val) * ((high - low) / high));
		};
		dojo.extend(dxc.Palette, {transform: function (_1a8) {
			var fn = _1a0;
			if (_1a8.use) {
				var use = _1a8.use.toLowerCase();
				if (use.indexOf("hs") == 0) {
					if (use.charAt(2) == "l") {
						fn = tHSL;
					} else {
						fn = tHSV;
					}
				} else {
					if (use.indexOf("cmy") == 0) {
						if (use.charAt(3) == "k") {
							fn = _1a3;
						} else {
							fn = tCMY;
						}
					}
				}
			} else {
				if ("dc" in _1a8 || "dm" in _1a8 || "dy" in _1a8) {
					if ("dk" in _1a8) {
						fn = _1a3;
					} else {
						fn = tCMY;
					}
				} else {
					if ("dh" in _1a8 || "ds" in _1a8) {
						if ("dv" in _1a8) {
							fn = tHSV;
						} else {
							fn = tHSL;
						}
					}
				}
			}
			var _1a9 = this;
			for (var p in _1a8) {
				if (p == "use") {
					continue;
				}
				_1a9 = fn(_1a9, p, _1a8[p]);
			}
			return _1a9;
		}, clone: function () {
			return new dxc.Palette(this);
		}});
		dojo.mixin(dxc.Palette, {generators: {analogous: function (args) {
			var high = args.high || 60, low = args.low || 18, base = dojo.isString(args.base) ? new dojox.color.Color(args.base) : args.base, hsv = base.toHsv();
			var h = [(hsv.h + low + 360) % 360, (hsv.h + Math.round(low / 2) + 360) % 360, hsv.h, (hsv.h - Math.round(high / 2) + 360) % 360, (hsv.h - high + 360) % 360];
			var s1 = Math.max(10, (hsv.s <= 95) ? hsv.s + 5 : (100 - (hsv.s - 95))), s2 = (hsv.s > 1) ? hsv.s - 1 : 21 - hsv.s, v1 = (hsv.v >= 92) ? hsv.v - 9 : Math.max(hsv.v + 9, 20), v2 = (hsv.v <= 90) ? Math.max(hsv.v + 5, 20) : (95 + Math.ceil((hsv.v - 90) / 2)), s = [s1, s2, hsv.s, s1, s1], v = [v1, v2, hsv.v, v1, v2];
			return new dxc.Palette(dojo.map(h, function (hue, i) {
				return dojox.color.fromHsv(hue, s[i], v[i]);
			}));
		}, monochromatic: function (args) {
			var base = dojo.isString(args.base) ? new dojox.color.Color(args.base) : args.base, hsv = base.toHsv();
			var s1 = (hsv.s - 30 > 9) ? hsv.s - 30 : hsv.s + 30, s2 = hsv.s, v1 = _1a7(hsv.v, 20, 100), v2 = (hsv.v - 20 > 20) ? hsv.v - 20 : hsv.v + 60, v3 = (hsv.v - 50 > 20) ? hsv.v - 50 : hsv.v + 30;
			return new dxc.Palette([dojox.color.fromHsv(hsv.h, s1, v1), dojox.color.fromHsv(hsv.h, s2, v3), base, dojox.color.fromHsv(hsv.h, s1, v3), dojox.color.fromHsv(hsv.h, s2, v2)]);
		}, triadic: function (args) {
			var base = dojo.isString(args.base) ? new dojox.color.Color(args.base) : args.base, hsv = base.toHsv();
			var h1 = (hsv.h + 57 + 360) % 360, h2 = (hsv.h - 157 + 360) % 360, s1 = (hsv.s > 20) ? hsv.s - 10 : hsv.s + 10, s2 = (hsv.s > 90) ? hsv.s - 10 : hsv.s + 10, s3 = (hsv.s > 95) ? hsv.s - 5 : hsv.s + 5, v1 = (hsv.v - 20 > 20) ? hsv.v - 20 : hsv.v + 20, v2 = (hsv.v - 30 > 20) ? hsv.v - 30 : hsv.v + 30, v3 = (hsv.v - 30 > 70) ? hsv.v - 30 : hsv.v + 30;
			return new dxc.Palette([dojox.color.fromHsv(h1, s1, hsv.v), dojox.color.fromHsv(hsv.h, s2, v2), base, dojox.color.fromHsv(h2, s2, v1), dojox.color.fromHsv(h2, s3, v3)]);
		}, complementary: function (args) {
			var base = dojo.isString(args.base) ? new dojox.color.Color(args.base) : args.base, hsv = base.toHsv();
			var h1 = ((hsv.h * 2) + 137 < 360) ? (hsv.h * 2) + 137 : Math.floor(hsv.h / 2) - 137, s1 = Math.max(hsv.s - 10, 0), s2 = _1a7(hsv.s, 10, 100), s3 = Math.min(100, hsv.s + 20), v1 = Math.min(100, hsv.v + 30), v2 = (hsv.v > 20) ? hsv.v - 30 : hsv.v + 30;
			return new dxc.Palette([dojox.color.fromHsv(hsv.h, s1, v1), dojox.color.fromHsv(hsv.h, s2, v2), base, dojox.color.fromHsv(h1, s3, v2), dojox.color.fromHsv(h1, hsv.s, hsv.v)]);
		}, splitComplementary: function (args) {
			var base = dojo.isString(args.base) ? new dojox.color.Color(args.base) : args.base, _1aa = args.da || 30, hsv = base.toHsv();
			var _1ab = ((hsv.h * 2) + 137 < 360) ? (hsv.h * 2) + 137 : Math.floor(hsv.h / 2) - 137, h1 = (_1ab - _1aa + 360) % 360, h2 = (_1ab + _1aa) % 360, s1 = Math.max(hsv.s - 10, 0), s2 = _1a7(hsv.s, 10, 100), s3 = Math.min(100, hsv.s + 20), v1 = Math.min(100, hsv.v + 30), v2 = (hsv.v > 20) ? hsv.v - 30 : hsv.v + 30;
			return new dxc.Palette([dojox.color.fromHsv(h1, s1, v1), dojox.color.fromHsv(h1, s2, v2), base, dojox.color.fromHsv(h2, s3, v2), dojox.color.fromHsv(h2, hsv.s, hsv.v)]);
		}, compound: function (args) {
			var base = dojo.isString(args.base) ? new dojox.color.Color(args.base) : args.base, hsv = base.toHsv();
			var h1 = ((hsv.h * 2) + 18 < 360) ? (hsv.h * 2) + 18 : Math.floor(hsv.h / 2) - 18, h2 = ((hsv.h * 2) + 120 < 360) ? (hsv.h * 2) + 120 : Math.floor(hsv.h / 2) - 120, h3 = ((hsv.h * 2) + 99 < 360) ? (hsv.h * 2) + 99 : Math.floor(hsv.h / 2) - 99, s1 = (hsv.s - 40 > 10) ? hsv.s - 40 : hsv.s + 40, s2 = (hsv.s - 10 > 80) ? hsv.s - 10 : hsv.s + 10, s3 = (hsv.s - 25 > 10) ? hsv.s - 25 : hsv.s + 25, v1 = (hsv.v - 40 > 10) ? hsv.v - 40 : hsv.v + 40, v2 = (hsv.v - 20 > 80) ? hsv.v - 20 : hsv.v + 20, v3 = Math.max(hsv.v, 20);
			return new dxc.Palette([dojox.color.fromHsv(h1, s1, v1), dojox.color.fromHsv(h1, s2, v2), base, dojox.color.fromHsv(h2, s3, v3), dojox.color.fromHsv(h3, s2, v2)]);
		}, shades: function (args) {
			var base = dojo.isString(args.base) ? new dojox.color.Color(args.base) : args.base, hsv = base.toHsv();
			var s = (hsv.s == 100 && hsv.v == 0) ? 0 : hsv.s, v1 = (hsv.v - 50 > 20) ? hsv.v - 50 : hsv.v + 30, v2 = (hsv.v - 25 >= 20) ? hsv.v - 25 : hsv.v + 55, v3 = (hsv.v - 75 >= 20) ? hsv.v - 75 : hsv.v + 5, v4 = Math.max(hsv.v - 10, 20);
			return new dxc.Palette([new dojox.color.fromHsv(hsv.h, s, v1), new dojox.color.fromHsv(hsv.h, s, v2), base, new dojox.color.fromHsv(hsv.h, s, v3), new dojox.color.fromHsv(hsv.h, s, v4)]);
		}}, generate: function (base, type) {
			if (dojo.isFunction(type)) {
				return type({base: base});
			} else {
				if (dxc.Palette.generators[type]) {
					return dxc.Palette.generators[type]({base: base});
				}
			}
			throw new Error("dojox.color.Palette.generate: the specified generator ('" + type + "') does not exist.");
		}});
	})();
}
if (!dojo._hasResource["dojox.lang.utils"]) {
	dojo._hasResource["dojox.lang.utils"] = true;
	dojo.provide("dojox.lang.utils");
	(function () {
		var _1ac = {}, du = dojox.lang.utils, opts = Object.prototype.toString;
		var _1ad = function (o) {
			if (o) {
				switch (opts.call(o)) {
					case "[object Array]":
						return o.slice(0);
					case "[object Object]":
						return dojo.delegate(o);
				}
			}
			return o;
		};
		dojo.mixin(du, {coerceType: function (_1ae, _1af) {
			switch (typeof _1ae) {
				case "number":
					return Number(eval("(" + _1af + ")"));
				case "string":
					return String(_1af);
				case "boolean":
					return Boolean(eval("(" + _1af + ")"));
			}
			return eval("(" + _1af + ")");
		}, updateWithObject: function (_1b0, _1b1, conv) {
			if (!_1b1) {
				return _1b0;
			}
			for (var x in _1b0) {
				if (x in _1b1 && !(x in _1ac)) {
					var t = _1b0[x];
					if (t && typeof t == "object") {
						du.updateWithObject(t, _1b1[x], conv);
					} else {
						_1b0[x] = conv ? du.coerceType(t, _1b1[x]) : _1ad(_1b1[x]);
					}
				}
			}
			return _1b0;
		}, updateWithPattern: function (_1b2, _1b3, _1b4, conv) {
			if (!_1b3 || !_1b4) {
				return _1b2;
			}
			for (var x in _1b4) {
				if (x in _1b3 && !(x in _1ac)) {
					_1b2[x] = conv ? du.coerceType(_1b4[x], _1b3[x]) : _1ad(_1b3[x]);
				}
			}
			return _1b2;
		}, merge: function (_1b5, _1b6) {
			if (_1b6) {
				var _1b7 = opts.call(_1b5), _1b8 = opts.call(_1b6), t, i, l, m;
				switch (_1b8) {
					case "[object Array]":
						if (_1b8 == _1b7) {
							t = new Array(Math.max(_1b5.length, _1b6.length));
							for (i = 0, l = t.length; i < l; ++i) {
								t[i] = du.merge(_1b5[i], _1b6[i]);
							}
							return t;
						}
						return _1b6.slice(0);
					case "[object Object]":
						if (_1b8 == _1b7 && _1b5) {
							t = dojo.delegate(_1b5);
							for (i in _1b6) {
								if (i in _1b5) {
									l = _1b5[i];
									m = _1b6[i];
									if (m !== l) {
										t[i] = du.merge(l, m);
									}
								} else {
									t[i] = dojo.clone(_1b6[i]);
								}
							}
							return t;
						}
						return dojo.clone(_1b6);
				}
			}
			return _1b6;
		}});
	})();
}
if (!dojo._hasResource["dojox.gfx.gradutils"]) {
	dojo._hasResource["dojox.gfx.gradutils"] = true;
	dojo.provide("dojox.gfx.gradutils");
	(function () {
		var d = dojo, m = dojox.gfx.matrix, C = d.Color;

		function _1b9(o, c) {
			if (o <= 0) {
				return c[0].color;
			}
			var len = c.length;
			if (o >= 1) {
				return c[len - 1].color;
			}
			for (var i = 0; i < len; ++i) {
				var stop = c[i];
				if (stop.offset >= o) {
					if (i) {
						var prev = c[i - 1];
						return d.blendColors(new C(prev.color), new C(stop.color), (o - prev.offset) / (stop.offset - prev.offset));
					}
					return stop.color;
				}
			}
			return c[len - 1].color;
		};
		dojox.gfx.gradutils.getColor = function (fill, pt) {
			var o;
			if (fill) {
				switch (fill.type) {
					case "linear":
						var _1ba = Math.atan2(fill.y2 - fill.y1, fill.x2 - fill.x1), _1bb = m.rotate(-_1ba), _1bc = m.project(fill.x2 - fill.x1, fill.y2 - fill.y1), p = m.multiplyPoint(_1bc, pt), pf1 = m.multiplyPoint(_1bc, fill.x1, fill.y1), pf2 = m.multiplyPoint(_1bc, fill.x2, fill.y2), _1bd = m.multiplyPoint(_1bb, pf2.x - pf1.x, pf2.y - pf1.y).x, o = m.multiplyPoint(_1bb, p.x - pf1.x, p.y - pf1.y).x / _1bd;
						break;
					case "radial":
						var dx = pt.x - fill.cx, dy = pt.y - fill.cy, o = Math.sqrt(dx * dx + dy * dy) / fill.r;
						break;
				}
				return _1b9(o, fill.colors);
			}
			return new C(fill || [0, 0, 0, 0]);
		};
		dojox.gfx.gradutils.reverse = function (fill) {
			if (fill) {
				switch (fill.type) {
					case "linear":
					case "radial":
						fill = dojo.delegate(fill);
						if (fill.colors) {
							var c = fill.colors, l = c.length, i = 0, stop, n = fill.colors = new Array(c.length);
							for (; i < l; ++i) {
								stop = c[i];
								n[i] = {offset: 1 - stop.offset, color: stop.color};
							}
							n.sort(function (a, b) {
								return a.offset - b.offset;
							});
						}
						break;
				}
			}
			return fill;
		};
	})();
}
if (!dojo._hasResource["dojox.charting.Theme"]) {
	dojo._hasResource["dojox.charting.Theme"] = true;
	dojo.provide("dojox.charting.Theme");
	dojo.declare("dojox.charting.Theme", null, {shapeSpaces: {shape: 1, shapeX: 1, shapeY: 1}, constructor: function (_1be) {
		_1be = _1be || {};
		var def = dojox.charting.Theme.defaultTheme;
		dojo.forEach(["chart", "plotarea", "axis", "series", "marker"], function (name) {
			this[name] = dojo.delegate(def[name], _1be[name]);
		}, this);
		if (_1be.seriesThemes && _1be.seriesThemes.length) {
			this.colors = null;
			this.seriesThemes = _1be.seriesThemes.slice(0);
		} else {
			this.seriesThemes = null;
			this.colors = (_1be.colors || dojox.charting.Theme.defaultColors).slice(0);
		}
		this.markerThemes = null;
		if (_1be.markerThemes && _1be.markerThemes.length) {
			this.markerThemes = _1be.markerThemes.slice(0);
		}
		this.markers = _1be.markers ? dojo.clone(_1be.markers) : dojo.delegate(dojox.charting.Theme.defaultMarkers);
		this.noGradConv = _1be.noGradConv;
		this.noRadialConv = _1be.noRadialConv;
		if (_1be.reverseFills) {
			this.reverseFills();
		}
		this._current = 0;
		this._buildMarkerArray();
	}, clone: function () {
		var _1bf = new dojox.charting.Theme({chart: this.chart, plotarea: this.plotarea, axis: this.axis, series: this.series, marker: this.marker, colors: this.colors, markers: this.markers, seriesThemes: this.seriesThemes, markerThemes: this.markerThemes, noGradConv: this.noGradConv, noRadialConv: this.noRadialConv});
		dojo.forEach(["clone", "clear", "next", "skip", "addMixin", "post", "getTick"], function (name) {
			if (this.hasOwnProperty(name)) {
				_1bf[name] = this[name];
			}
		}, this);
		return _1bf;
	}, clear: function () {
		this._current = 0;
	}, next: function (_1c0, _1c1, _1c2) {
		var _1c3 = dojox.lang.utils.merge, _1c4, _1c5;
		if (this.colors) {
			_1c4 = dojo.delegate(this.series);
			_1c5 = dojo.delegate(this.marker);
			var _1c6 = new dojo.Color(this.colors[this._current % this.colors.length]), old;
			if (_1c4.stroke && _1c4.stroke.color) {
				_1c4.stroke = dojo.delegate(_1c4.stroke);
				old = new dojo.Color(_1c4.stroke.color);
				_1c4.stroke.color = new dojo.Color(_1c6);
				_1c4.stroke.color.a = old.a;
			} else {
				_1c4.stroke = {color: _1c6};
			}
			if (_1c5.stroke && _1c5.stroke.color) {
				_1c5.stroke = dojo.delegate(_1c5.stroke);
				old = new dojo.Color(_1c5.stroke.color);
				_1c5.stroke.color = new dojo.Color(_1c6);
				_1c5.stroke.color.a = old.a;
			} else {
				_1c5.stroke = {color: _1c6};
			}
			if (!_1c4.fill || _1c4.fill.type) {
				_1c4.fill = _1c6;
			} else {
				old = new dojo.Color(_1c4.fill);
				_1c4.fill = new dojo.Color(_1c6);
				_1c4.fill.a = old.a;
			}
			if (!_1c5.fill || _1c5.fill.type) {
				_1c5.fill = _1c6;
			} else {
				old = new dojo.Color(_1c5.fill);
				_1c5.fill = new dojo.Color(_1c6);
				_1c5.fill.a = old.a;
			}
		} else {
			_1c4 = this.seriesThemes ? _1c3(this.series, this.seriesThemes[this._current % this.seriesThemes.length]) : this.series;
			_1c5 = this.markerThemes ? _1c3(this.marker, this.markerThemes[this._current % this.markerThemes.length]) : _1c4;
		}
		var _1c7 = _1c5 && _1c5.symbol || this._markers[this._current % this._markers.length];
		var _1c8 = {series: _1c4, marker: _1c5, symbol: _1c7};
		++this._current;
		if (_1c1) {
			_1c8 = this.addMixin(_1c8, _1c0, _1c1);
		}
		if (_1c2) {
			_1c8 = this.post(_1c8, _1c0);
		}
		return _1c8;
	}, skip: function () {
		++this._current;
	}, addMixin: function (_1c9, _1ca, _1cb, _1cc) {
		if (dojo.isArray(_1cb)) {
			dojo.forEach(_1cb, function (m) {
				_1c9 = this.addMixin(_1c9, _1ca, m);
			}, this);
		} else {
			var t = {};
			if ("color" in _1cb) {
				if (_1ca == "line" || _1ca == "area") {
					dojo.setObject("series.stroke.color", _1cb.color, t);
					dojo.setObject("marker.stroke.color", _1cb.color, t);
				} else {
					dojo.setObject("series.fill", _1cb.color, t);
				}
			}
			dojo.forEach(["stroke", "outline", "shadow", "fill", "font", "fontColor", "labelWiring"], function (name) {
				var _1cd = "marker" + name.charAt(0).toUpperCase() + name.substr(1), b = _1cd in _1cb;
				if (name in _1cb) {
					dojo.setObject("series." + name, _1cb[name], t);
					if (!b) {
						dojo.setObject("marker." + name, _1cb[name], t);
					}
				}
				if (b) {
					dojo.setObject("marker." + name, _1cb[_1cd], t);
				}
			});
			if ("marker" in _1cb) {
				t.symbol = _1cb.marker;
			}
			_1c9 = dojox.lang.utils.merge(_1c9, t);
		}
		if (_1cc) {
			_1c9 = this.post(_1c9, _1ca);
		}
		return _1c9;
	}, post: function (_1ce, _1cf) {
		var fill = _1ce.series.fill, t;
		if (!this.noGradConv && this.shapeSpaces[fill.space] && fill.type == "linear") {
			if (_1cf == "bar") {
				t = {x1: fill.y1, y1: fill.x1, x2: fill.y2, y2: fill.x2};
			} else {
				if (!this.noRadialConv && fill.space == "shape" && (_1cf == "slice" || _1cf == "circle")) {
					t = {type: "radial", cx: 0, cy: 0, r: 100};
				}
			}
			if (t) {
				return dojox.lang.utils.merge(_1ce, {series: {fill: t}});
			}
		}
		return _1ce;
	}, getTick: function (name, _1d0) {
		var tick = this.axis.tick, _1d1 = name + "Tick";
		merge = dojox.lang.utils.merge;
		if (tick) {
			if (this.axis[_1d1]) {
				tick = merge(tick, this.axis[_1d1]);
			}
		} else {
			tick = this.axis[_1d1];
		}
		if (_1d0) {
			if (tick) {
				if (_1d0[_1d1]) {
					tick = merge(tick, _1d0[_1d1]);
				}
			} else {
				tick = _1d0[_1d1];
			}
		}
		return tick;
	}, inspectObjects: function (f) {
		dojo.forEach(["chart", "plotarea", "axis", "series", "marker"], function (name) {
			f(this[name]);
		}, this);
		if (this.seriesThemes) {
			dojo.forEach(this.seriesThemes, f);
		}
		if (this.markerThemes) {
			dojo.forEach(this.markerThemes, f);
		}
	}, reverseFills: function () {
		this.inspectObjects(function (o) {
			if (o && o.fill) {
				o.fill = dojox.gfx.gradutils.reverse(o.fill);
			}
		});
	}, addMarker: function (name, _1d2) {
		this.markers[name] = _1d2;
		this._buildMarkerArray();
	}, setMarkers: function (obj) {
		this.markers = obj;
		this._buildMarkerArray();
	}, _buildMarkerArray: function () {
		this._markers = [];
		for (var p in this.markers) {
			this._markers.push(this.markers[p]);
		}
	}});
	dojo.mixin(dojox.charting.Theme, {defaultMarkers: {CIRCLE: "m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0", SQUARE: "m-3,-3 l0,6 6,0 0,-6 z", DIAMOND: "m0,-3 l3,3 -3,3 -3,-3 z", CROSS: "m0,-3 l0,6 m-3,-3 l6,0", X: "m-3,-3 l6,6 m0,-6 l-6,6", TRIANGLE: "m-3,3 l3,-6 3,6 z", TRIANGLE_INVERTED: "m-3,-3 l3,6 3,-6 z"}, defaultColors: ["#54544c", "#858e94", "#6e767a", "#948585", "#474747"], defaultTheme: {chart: {stroke: null, fill: "white", pageStyle: null, titleGap: 20, titlePos: "top", titleFont: "normal normal bold 14pt Tahoma", titleFontColor: "#333"}, plotarea: {stroke: null, fill: "white"}, axis: {stroke: {color: "#333", width: 1}, tick: {color: "#666", position: "center", font: "normal normal normal 7pt Tahoma", fontColor: "#333", titleGap: 15, titleFont: "normal normal normal 11pt Tahoma", titleFontColor: "#333", titleOrientation: "axis"}, majorTick: {width: 1, length: 6}, minorTick: {width: 0.8, length: 3}, microTick: {width: 0.5, length: 1}}, series: {stroke: {width: 1.5, color: "#333"}, outline: {width: 0.1, color: "#ccc"}, shadow: null, fill: "#ccc", font: "normal normal normal 8pt Tahoma", fontColor: "#000", labelWiring: {width: 1, color: "#ccc"}}, marker: {stroke: {width: 1.5, color: "#333"}, outline: {width: 0.1, color: "#ccc"}, shadow: null, fill: "#ccc", font: "normal normal normal 8pt Tahoma", fontColor: "#000"}}, defineColors: function (_1d3) {
		_1d3 = _1d3 || {};
		var c = [], n = _1d3.num || 5;
		if (_1d3.colors) {
			var l = _1d3.colors.length;
			for (var i = 0; i < n; i++) {
				c.push(_1d3.colors[i % l]);
			}
			return c;
		}
		if (_1d3.hue) {
			var s = _1d3.saturation || 100;
			var st = _1d3.low || 30;
			var end = _1d3.high || 90;
			var l = (end + st) / 2;
			return dojox.color.Palette.generate(dojox.color.fromHsv(_1d3.hue, s, l), "monochromatic").colors;
		}
		if (_1d3.generator) {
			return dojox.color.Palette.generate(_1d3.base, _1d3.generator).colors;
		}
		return c;
	}, generateGradient: function (_1d4, _1d5, _1d6) {
		var fill = dojo.delegate(_1d4);
		fill.colors = [
			{offset: 0, color: _1d5},
			{offset: 1, color: _1d6}
		];
		return fill;
	}, generateHslColor: function (_1d7, _1d8) {
		_1d7 = new dojox.color.Color(_1d7);
		var hsl = _1d7.toHsl(), _1d9 = dojox.color.fromHsl(hsl.h, hsl.s, _1d8);
		_1d9.a = _1d7.a;
		return _1d9;
	}, generateHslGradient: function (_1da, _1db, _1dc, _1dd) {
		_1da = new dojox.color.Color(_1da);
		var hsl = _1da.toHsl(), _1de = dojox.color.fromHsl(hsl.h, hsl.s, _1dc), _1df = dojox.color.fromHsl(hsl.h, hsl.s, _1dd);
		_1de.a = _1df.a = _1da.a;
		return dojox.charting.Theme.generateGradient(_1db, _1de, _1df);
	}});
}
if (!dojo._hasResource["dojox.charting.Series"]) {
	dojo._hasResource["dojox.charting.Series"] = true;
	dojo.provide("dojox.charting.Series");
	dojo.declare("dojox.charting.Series", dojox.charting.Element, {constructor: function (_1e0, data, _1e1) {
		dojo.mixin(this, _1e1);
		if (typeof this.plot != "string") {
			this.plot = "default";
		}
		this.update(data);
	}, clear: function () {
		this.dyn = {};
	}, update: function (data) {
		if (dojo.isArray(data)) {
			this.data = data;
		} else {
			this.source = data;
			this.data = this.source.data;
			if (this.source.setSeriesObject) {
				this.source.setSeriesObject(this);
			}
		}
		this.dirty = true;
		this.clear();
	}});
}
if (!dojo._hasResource["dojox.charting.axis2d.common"]) {
	dojo._hasResource["dojox.charting.axis2d.common"] = true;
	dojo.provide("dojox.charting.axis2d.common");
	(function () {
		var g = dojox.gfx;
		var _1e2 = function (s) {
			s.marginLeft = "0px";
			s.marginTop = "0px";
			s.marginRight = "0px";
			s.marginBottom = "0px";
			s.paddingLeft = "0px";
			s.paddingTop = "0px";
			s.paddingRight = "0px";
			s.paddingBottom = "0px";
			s.borderLeftWidth = "0px";
			s.borderTopWidth = "0px";
			s.borderRightWidth = "0px";
			s.borderBottomWidth = "0px";
		};
		var _1e3 = function (n) {
			if (n["getBoundingClientRect"]) {
				var bcr = n.getBoundingClientRect();
				return bcr.width || (bcr.right - bcr.left);
			} else {
				return dojo.marginBox(n).w;
			}
		};
		dojo.mixin(dojox.charting.axis2d.common, {createText: {gfx: function (_1e4, _1e5, x, y, _1e6, text, font, _1e7) {
			return _1e5.createText({x: x, y: y, text: text, align: _1e6}).setFont(font).setFill(_1e7);
		}, html: function (_1e8, _1e9, x, y, _1ea, text, font, _1eb, _1ec) {
			var p = dojo.doc.createElement("div"), s = p.style, _1ed;
			_1e2(s);
			s.font = font;
			p.innerHTML = String(text).replace(/\s/g, "&nbsp;");
			s.color = _1eb;
			s.position = "absolute";
			s.left = "-10000px";
			dojo.body().appendChild(p);
			var size = g.normalizedLength(g.splitFontString(font).size);
			if (!_1ec) {
				_1ed = _1e3(p);
			}
			dojo.body().removeChild(p);
			s.position = "relative";
			if (_1ec) {
				s.width = _1ec + "px";
				switch (_1ea) {
					case "middle":
						s.textAlign = "center";
						s.left = (x - _1ec / 2) + "px";
						break;
					case "end":
						s.textAlign = "right";
						s.left = (x - _1ec) + "px";
						break;
					default:
						s.left = x + "px";
						s.textAlign = "left";
						break;
				}
			} else {
				switch (_1ea) {
					case "middle":
						s.left = Math.floor(x - _1ed / 2) + "px";
						break;
					case "end":
						s.left = Math.floor(x - _1ed) + "px";
						break;
					default:
						s.left = Math.floor(x) + "px";
						break;
				}
			}
			s.top = Math.floor(y - size) + "px";
			s.whiteSpace = "nowrap";
			var wrap = dojo.doc.createElement("div"), w = wrap.style;
			_1e2(w);
			w.width = "0px";
			w.height = "0px";
			wrap.appendChild(p);
			_1e8.node.insertBefore(wrap, _1e8.node.firstChild);
			return wrap;
		}}});
	})();
}
if (!dojo._hasResource["dojox.charting.Chart"]) {
	dojo._hasResource["dojox.charting.Chart"] = true;
	dojo.provide("dojox.charting.Chart");
	(function () {
		var df = dojox.lang.functional, dc = dojox.charting, g = dojox.gfx, _1ee = df.lambda("item.clear()"), _1ef = df.lambda("item.purgeGroup()"), _1f0 = df.lambda("item.destroy()"), _1f1 = df.lambda("item.dirty = false"), _1f2 = df.lambda("item.dirty = true"), _1f3 = df.lambda("item.name");
		dojo.declare("dojox.charting.Chart", null, {constructor: function (node, _1f4) {
			if (!_1f4) {
				_1f4 = {};
			}
			this.margins = _1f4.margins ? _1f4.margins : {l: 10, t: 10, r: 10, b: 10};
			this.stroke = _1f4.stroke;
			this.fill = _1f4.fill;
			this.delayInMs = _1f4.delayInMs || 200;
			this.title = _1f4.title;
			this.titleGap = _1f4.titleGap;
			this.titlePos = _1f4.titlePos;
			this.titleFont = _1f4.titleFont;
			this.titleFontColor = _1f4.titleFontColor;
			this.chartTitle = null;
			this.theme = null;
			this.axes = {};
			this.stack = [];
			this.plots = {};
			this.series = [];
			this.runs = {};
			this.dirty = true;
			this.coords = null;
			this.node = dojo.byId(node);
			var box = dojo.marginBox(node);
			this.surface = g.createSurface(this.node, box.w || 400, box.h || 300);
		}, destroy: function () {
			dojo.forEach(this.series, _1f0);
			dojo.forEach(this.stack, _1f0);
			df.forIn(this.axes, _1f0);
			if (this.chartTitle && this.chartTitle.tagName) {
				dojo.destroy(this.chartTitle);
			}
			this.surface.destroy();
		}, getCoords: function () {
			if (!this.coords) {
				this.coords = dojo.coords(this.node, true);
			}
			return this.coords;
		}, setTheme: function (_1f5) {
			this.theme = _1f5.clone();
			this.dirty = true;
			return this;
		}, addAxis: function (name, _1f6) {
			var axis, _1f7 = _1f6 && _1f6.type || "Default";
			if (typeof _1f7 == "string") {
				if (!dc.axis2d || !dc.axis2d[_1f7]) {
					throw Error("Can't find axis: " + _1f7 + " - didn't you forget to dojo" + ".require() it?");
				}
				axis = new dc.axis2d[_1f7](this, _1f6);
			} else {
				axis = new _1f7(this, _1f6);
			}
			axis.name = name;
			axis.dirty = true;
			if (name in this.axes) {
				this.axes[name].destroy();
			}
			this.axes[name] = axis;
			this.dirty = true;
			return this;
		}, getAxis: function (name) {
			return this.axes[name];
		}, removeAxis: function (name) {
			if (name in this.axes) {
				this.axes[name].destroy();
				delete this.axes[name];
				this.dirty = true;
			}
			return this;
		}, addPlot: function (name, _1f8) {
			var plot, _1f9 = _1f8 && _1f8.type || "Default";
			if (typeof _1f9 == "string") {
				if (!dc.plot2d || !dc.plot2d[_1f9]) {
					throw Error("Can't find plot: " + _1f9 + " - didn't you forget to dojo" + ".require() it?");
				}
				plot = new dc.plot2d[_1f9](this, _1f8);
			} else {
				plot = new _1f9(this, _1f8);
			}
			plot.name = name;
			plot.dirty = true;
			if (name in this.plots) {
				this.stack[this.plots[name]].destroy();
				this.stack[this.plots[name]] = plot;
			} else {
				this.plots[name] = this.stack.length;
				this.stack.push(plot);
			}
			this.dirty = true;
			return this;
		}, removePlot: function (name) {
			if (name in this.plots) {
				var _1fa = this.plots[name];
				delete this.plots[name];
				this.stack[_1fa].destroy();
				this.stack.splice(_1fa, 1);
				df.forIn(this.plots, function (idx, name, _1fb) {
					if (idx > _1fa) {
						_1fb[name] = idx - 1;
					}
				});
				var ns = dojo.filter(this.series, function (run) {
					return run.plot != name;
				});
				if (ns.length < this.series.length) {
					dojo.forEach(this.series, function (run) {
						if (run.plot == name) {
							run.destroy();
						}
					});
					this.runs = {};
					dojo.forEach(ns, function (run, _1fc) {
						this.runs[run.plot] = _1fc;
					}, this);
					this.series = ns;
				}
				this.dirty = true;
			}
			return this;
		}, getPlotOrder: function () {
			return df.map(this.stack, _1f3);
		}, setPlotOrder: function (_1fd) {
			var _1fe = {}, _1ff = df.filter(_1fd, function (name) {
				if (!(name in this.plots) || (name in _1fe)) {
					return false;
				}
				_1fe[name] = 1;
				return true;
			}, this);
			if (_1ff.length < this.stack.length) {
				df.forEach(this.stack, function (plot) {
					var name = plot.name;
					if (!(name in _1fe)) {
						_1ff.push(name);
					}
				});
			}
			var _200 = df.map(_1ff, function (name) {
				return this.stack[this.plots[name]];
			}, this);
			df.forEach(_200, function (plot, i) {
				this.plots[plot.name] = i;
			}, this);
			this.stack = _200;
			this.dirty = true;
			return this;
		}, movePlotToFront: function (name) {
			if (name in this.plots) {
				var _201 = this.plots[name];
				if (_201) {
					var _202 = this.getPlotOrder();
					_202.splice(_201, 1);
					_202.unshift(name);
					return this.setPlotOrder(_202);
				}
			}
			return this;
		}, movePlotToBack: function (name) {
			if (name in this.plots) {
				var _203 = this.plots[name];
				if (_203 < this.stack.length - 1) {
					var _204 = this.getPlotOrder();
					_204.splice(_203, 1);
					_204.push(name);
					return this.setPlotOrder(_204);
				}
			}
			return this;
		}, addSeries: function (name, data, _205) {
			var run = new dc.Series(this, data, _205);
			run.name = name;
			if (name in this.runs) {
				this.series[this.runs[name]].destroy();
				this.series[this.runs[name]] = run;
			} else {
				this.runs[name] = this.series.length;
				this.series.push(run);
			}
			this.dirty = true;
			if (!("ymin" in run) && "min" in run) {
				run.ymin = run.min;
			}
			if (!("ymax" in run) && "max" in run) {
				run.ymax = run.max;
			}
			return this;
		}, removeSeries: function (name) {
			if (name in this.runs) {
				var _206 = this.runs[name];
				delete this.runs[name];
				this.series[_206].destroy();
				this.series.splice(_206, 1);
				df.forIn(this.runs, function (idx, name, runs) {
					if (idx > _206) {
						runs[name] = idx - 1;
					}
				});
				this.dirty = true;
			}
			return this;
		}, updateSeries: function (name, data) {
			if (name in this.runs) {
				var run = this.series[this.runs[name]];
				run.update(data);
				this._invalidateDependentPlots(run.plot, false);
				this._invalidateDependentPlots(run.plot, true);
			}
			return this;
		}, getSeriesOrder: function (_207) {
			return df.map(df.filter(this.series, function (run) {
				return run.plot == _207;
			}), _1f3);
		}, setSeriesOrder: function (_208) {
			var _209, _20a = {}, _20b = df.filter(_208, function (name) {
				if (!(name in this.runs) || (name in _20a)) {
					return false;
				}
				var run = this.series[this.runs[name]];
				if (_209) {
					if (run.plot != _209) {
						return false;
					}
				} else {
					_209 = run.plot;
				}
				_20a[name] = 1;
				return true;
			}, this);
			df.forEach(this.series, function (run) {
				var name = run.name;
				if (!(name in _20a) && run.plot == _209) {
					_20b.push(name);
				}
			});
			var _20c = df.map(_20b, function (name) {
				return this.series[this.runs[name]];
			}, this);
			this.series = _20c.concat(df.filter(this.series, function (run) {
				return run.plot != _209;
			}));
			df.forEach(this.series, function (run, i) {
				this.runs[run.name] = i;
			}, this);
			this.dirty = true;
			return this;
		}, moveSeriesToFront: function (name) {
			if (name in this.runs) {
				var _20d = this.runs[name], _20e = this.getSeriesOrder(this.series[_20d].plot);
				if (name != _20e[0]) {
					_20e.splice(_20d, 1);
					_20e.unshift(name);
					return this.setSeriesOrder(_20e);
				}
			}
			return this;
		}, moveSeriesToBack: function (name) {
			if (name in this.runs) {
				var _20f = this.runs[name], _210 = this.getSeriesOrder(this.series[_20f].plot);
				if (name != _210[_210.length - 1]) {
					_210.splice(_20f, 1);
					_210.push(name);
					return this.setSeriesOrder(_210);
				}
			}
			return this;
		}, resize: function (_211, _212) {
			var box;
			switch (arguments.length) {
				case 1:
					box = dojo.mixin({}, _211);
					dojo.marginBox(this.node, box);
					break;
				case 2:
					box = {w: _211, h: _212};
					dojo.marginBox(this.node, box);
					break;
			}
			box = dojo.marginBox(this.node);
			this.surface.setDimensions(box.w, box.h);
			this.dirty = true;
			this.coords = null;
			return this.render();
		}, getGeometry: function () {
			var ret = {};
			df.forIn(this.axes, function (axis) {
				if (axis.initialized()) {
					ret[axis.name] = {name: axis.name, vertical: axis.vertical, scaler: axis.scaler, ticks: axis.ticks};
				}
			});
			return ret;
		}, setAxisWindow: function (name, _213, _214, zoom) {
			var axis = this.axes[name];
			if (axis) {
				axis.setWindow(_213, _214);
				dojo.forEach(this.stack, function (plot) {
					if (plot.hAxis == name || plot.vAxis == name) {
						plot.zoom = zoom;
					}
				});
			}
			return this;
		}, setWindow: function (sx, sy, dx, dy, zoom) {
			if (!("plotArea" in this)) {
				this.calculateGeometry();
			}
			df.forIn(this.axes, function (axis) {
				var _215, _216, _217 = axis.getScaler().bounds, s = _217.span / (_217.upper - _217.lower);
				if (axis.vertical) {
					_215 = sy;
					_216 = dy / s / _215;
				} else {
					_215 = sx;
					_216 = dx / s / _215;
				}
				axis.setWindow(_215, _216);
			});
			dojo.forEach(this.stack, function (plot) {
				plot.zoom = zoom;
			});
			return this;
		}, zoomIn: function (name, _218) {
			var axis = this.axes[name];
			if (axis) {
				var _219, _21a, _21b = axis.getScaler().bounds;
				var _21c = Math.min(_218[0], _218[1]);
				var _21d = Math.max(_218[0], _218[1]);
				_21c = _218[0] < _21b.lower ? _21b.lower : _21c;
				_21d = _218[1] > _21b.upper ? _21b.upper : _21d;
				_219 = (_21b.upper - _21b.lower) / (_21d - _21c);
				_21a = _21c - _21b.lower;
				this.setAxisWindow(name, _219, _21a);
				this.render();
			}
		}, calculateGeometry: function () {
			if (this.dirty) {
				return this.fullGeometry();
			}
			var _21e = dojo.filter(this.stack, function (plot) {
				return plot.dirty || (plot.hAxis && this.axes[plot.hAxis].dirty) || (plot.vAxis && this.axes[plot.vAxis].dirty);
			}, this);
			_21f(_21e, this.plotArea);
			return this;
		}, fullGeometry: function () {
			this._makeDirty();
			dojo.forEach(this.stack, _1ee);
			if (!this.theme) {
				this.setTheme(new dojox.charting.Theme(dojox.charting._def));
			}
			dojo.forEach(this.series, function (run) {
				if (!(run.plot in this.plots)) {
					if (!dc.plot2d || !dc.plot2d.Default) {
						throw Error("Can't find plot: Default - didn't you forget to dojo" + ".require() it?");
					}
					var plot = new dc.plot2d.Default(this, {});
					plot.name = run.plot;
					this.plots[run.plot] = this.stack.length;
					this.stack.push(plot);
				}
				this.stack[this.plots[run.plot]].addSeries(run);
			}, this);
			dojo.forEach(this.stack, function (plot) {
				if (plot.hAxis) {
					plot.setAxis(this.axes[plot.hAxis]);
				}
				if (plot.vAxis) {
					plot.setAxis(this.axes[plot.vAxis]);
				}
			}, this);
			var dim = this.dim = this.surface.getDimensions();
			dim.width = g.normalizedLength(dim.width);
			dim.height = g.normalizedLength(dim.height);
			df.forIn(this.axes, _1ee);
			_21f(this.stack, dim);
			var _220 = this.offsets = {l: 0, r: 0, t: 0, b: 0};
			df.forIn(this.axes, function (axis) {
				df.forIn(axis.getOffsets(), function (o, i) {
					_220[i] += o;
				});
			});
			if (this.title) {
				this.titleGap = (this.titleGap == 0) ? 0 : this.titleGap || this.theme.chart.titleGap || 20;
				this.titlePos = this.titlePos || this.theme.chart.titlePos || "top";
				this.titleFont = this.titleFont || this.theme.chart.titleFont;
				this.titleFontColor = this.titleFontColor || this.theme.chart.titleFontColor || "black";
				var _221 = g.normalizedLength(g.splitFontString(this.titleFont).size);
				_220[this.titlePos == "top" ? "t" : "b"] += (_221 + this.titleGap);
			}
			df.forIn(this.margins, function (o, i) {
				_220[i] += o;
			});
			this.plotArea = {width: dim.width - _220.l - _220.r, height: dim.height - _220.t - _220.b};
			df.forIn(this.axes, _1ee);
			_21f(this.stack, this.plotArea);
			return this;
		}, render: function () {
			if (this.theme) {
				this.theme.clear();
			}
			if (this.dirty) {
				return this.fullRender();
			}
			this.calculateGeometry();
			df.forEachRev(this.stack, function (plot) {
				plot.render(this.dim, this.offsets);
			}, this);
			df.forIn(this.axes, function (axis) {
				axis.render(this.dim, this.offsets);
			}, this);
			this._makeClean();
			if (this.surface.render) {
				this.surface.render();
			}
			return this;
		}, fullRender: function () {
			this.fullGeometry();
			var _222 = this.offsets, dim = this.dim, rect;
			dojo.forEach(this.series, _1ef);
			df.forIn(this.axes, _1ef);
			dojo.forEach(this.stack, _1ef);
			if (this.chartTitle && this.chartTitle.tagName) {
				dojo.destroy(this.chartTitle);
			}
			this.surface.clear();
			this.chartTitle = null;
			var t = this.theme, fill = t.plotarea && t.plotarea.fill, _223 = t.plotarea && t.plotarea.stroke, rect = {x: _222.l - 1, y: _222.t - 1, width: dim.width - _222.l - _222.r + 2, height: dim.height - _222.t - _222.b + 2};
			if (fill) {
				fill = dc.Element.prototype._shapeFill(dc.Element.prototype._plotFill(fill, dim, _222), rect);
				this.surface.createRect(rect).setFill(fill);
			}
			if (_223) {
				this.surface.createRect({x: _222.l, y: _222.t, width: dim.width - _222.l - _222.r + 1, height: dim.height - _222.t - _222.b + 1}).setStroke(_223);
			}
			df.foldr(this.stack, function (z, plot) {
				return plot.render(dim, _222), 0;
			}, 0);
			fill = this.fill !== undefined ? this.fill : (t.chart && t.chart.fill);
			_223 = this.stroke !== undefined ? this.stroke : (t.chart && t.chart.stroke);
			if (fill == "inherit") {
				var node = this.node, fill = new dojo.Color(dojo.style(node, "backgroundColor"));
				while (fill.a == 0 && node != document.documentElement) {
					fill = new dojo.Color(dojo.style(node, "backgroundColor"));
					node = node.parentNode;
				}
			}
			if (fill) {
				fill = dc.Element.prototype._plotFill(fill, dim, _222);
				if (_222.l) {
					rect = {width: _222.l, height: dim.height + 1};
					this.surface.createRect(rect).setFill(dc.Element.prototype._shapeFill(fill, rect));
				}
				if (_222.r) {
					rect = {x: dim.width - _222.r, width: _222.r + 1, height: dim.height + 2};
					this.surface.createRect(rect).setFill(dc.Element.prototype._shapeFill(fill, rect));
				}
				if (_222.t) {
					rect = {width: dim.width + 1, height: _222.t};
					this.surface.createRect(rect).setFill(dc.Element.prototype._shapeFill(fill, rect));
				}
				if (_222.b) {
					rect = {y: dim.height - _222.b, width: dim.width + 1, height: _222.b + 2};
					this.surface.createRect(rect).setFill(dc.Element.prototype._shapeFill(fill, rect));
				}
			}
			if (_223) {
				this.surface.createRect({width: dim.width - 1, height: dim.height - 1}).setStroke(_223);
			}
			if (this.title) {
				var _224 = (g.renderer == "canvas"), _225 = _224 || !dojo.isIE && !dojo.isOpera ? "html" : "gfx", _226 = g.normalizedLength(g.splitFontString(this.titleFont).size);
				this.chartTitle = dc.axis2d.common.createText[_225](this, this.surface, dim.width / 2, this.titlePos == "top" ? _226 + this.margins.t : dim.height - this.margins.b, "middle", this.title, this.titleFont, this.titleFontColor);
			}
			df.forIn(this.axes, function (axis) {
				axis.render(dim, _222);
			});
			this._makeClean();
			if (this.surface.render) {
				this.surface.render();
			}
			return this;
		}, delayedRender: function () {
			if (!this._delayedRenderHandle) {
				this._delayedRenderHandle = setTimeout(dojo.hitch(this, function () {
					clearTimeout(this._delayedRenderHandle);
					this._delayedRenderHandle = null;
					this.render();
				}), this.delayInMs);
			}
			return this;
		}, connectToPlot: function (name, _227, _228) {
			return name in this.plots ? this.stack[this.plots[name]].connect(_227, _228) : null;
		}, fireEvent: function (_229, _22a, _22b) {
			if (_229 in this.runs) {
				var _22c = this.series[this.runs[_229]].plot;
				if (_22c in this.plots) {
					var plot = this.stack[this.plots[_22c]];
					if (plot) {
						plot.fireEvent(_229, _22a, _22b);
					}
				}
			}
			return this;
		}, _makeClean: function () {
			dojo.forEach(this.axes, _1f1);
			dojo.forEach(this.stack, _1f1);
			dojo.forEach(this.series, _1f1);
			this.dirty = false;
		}, _makeDirty: function () {
			dojo.forEach(this.axes, _1f2);
			dojo.forEach(this.stack, _1f2);
			dojo.forEach(this.series, _1f2);
			this.dirty = true;
		}, _invalidateDependentPlots: function (_22d, _22e) {
			if (_22d in this.plots) {
				var plot = this.stack[this.plots[_22d]], axis, _22f = _22e ? "vAxis" : "hAxis";
				if (plot[_22f]) {
					axis = this.axes[plot[_22f]];
					if (axis && axis.dependOnData()) {
						axis.dirty = true;
						dojo.forEach(this.stack, function (p) {
							if (p[_22f] && p[_22f] == plot[_22f]) {
								p.dirty = true;
							}
						});
					}
				} else {
					plot.dirty = true;
				}
			}
		}});
		function _230(_231) {
			return {min: _231.hmin, max: _231.hmax};
		};
		function _232(_233) {
			return {min: _233.vmin, max: _233.vmax};
		};
		function _234(_235, h) {
			_235.hmin = h.min;
			_235.hmax = h.max;
		};
		function _236(_237, v) {
			_237.vmin = v.min;
			_237.vmax = v.max;
		};
		function _238(_239, _23a) {
			if (_239 && _23a) {
				_239.min = Math.min(_239.min, _23a.min);
				_239.max = Math.max(_239.max, _23a.max);
			}
			return _239 || _23a;
		};
		function _21f(_23b, _23c) {
			var _23d = {}, axes = {};
			dojo.forEach(_23b, function (plot) {
				var _23e = _23d[plot.name] = plot.getSeriesStats();
				if (plot.hAxis) {
					axes[plot.hAxis] = _238(axes[plot.hAxis], _230(_23e));
				}
				if (plot.vAxis) {
					axes[plot.vAxis] = _238(axes[plot.vAxis], _232(_23e));
				}
			});
			dojo.forEach(_23b, function (plot) {
				var _23f = _23d[plot.name];
				if (plot.hAxis) {
					_234(_23f, axes[plot.hAxis]);
				}
				if (plot.vAxis) {
					_236(_23f, axes[plot.vAxis]);
				}
				plot.initializeScalers(_23c, _23f);
			});
		};
	})();
}
if (!dojo._hasResource["dojox.charting.widget.Chart"]) {
	dojo._hasResource["dojox.charting.widget.Chart"] = true;
	dojo.provide("dojox.charting.widget.Chart");
	(function () {
		var _240, _241, _242, _243, _244, _245 = function (o) {
			return o;
		}, df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting, d = dojo;
		dojo.declare("dojox.charting.widget.Chart", dijit._Widget, {theme: null, margins: null, stroke: null, fill: null, buildRendering: function () {
			var n = this.domNode = this.srcNodeRef;
			var axes = d.query("> .axis", n).map(_241).filter(_245), _246 = d.query("> .plot", n).map(_242).filter(_245), _247 = d.query("> .action", n).map(_243).filter(_245), _248 = d.query("> .series", n).map(_244).filter(_245);
			n.innerHTML = "";
			var c = this.chart = new dc.Chart(n, {margins: this.margins, stroke: this.stroke, fill: this.fill});
			if (this.theme) {
				c.setTheme(this.theme);
			}
			axes.forEach(function (axis) {
				c.addAxis(axis.name, axis.kwArgs);
			});
			_246.forEach(function (plot) {
				c.addPlot(plot.name, plot.kwArgs);
			});
			this.actions = _247.map(function (_249) {
				return new _249.action(c, _249.plot, _249.kwArgs);
			});
			var _24a = df.foldl(_248, function (_24b, _24c) {
				if (_24c.type == "data") {
					c.addSeries(_24c.name, _24c.data, _24c.kwArgs);
					_24b = true;
				} else {
					c.addSeries(_24c.name, [0], _24c.kwArgs);
					var kw = {};
					du.updateWithPattern(kw, _24c.kwArgs, {"query": "", "queryOptions": null, "start": 0, "count": 1}, true);
					if (_24c.kwArgs.sort) {
						kw.sort = dojo.clone(_24c.kwArgs.sort);
					}
					d.mixin(kw, {onComplete: function (data) {
						var _24d;
						if ("valueFn" in _24c.kwArgs) {
							var fn = _24c.kwArgs.valueFn;
							_24d = d.map(data, function (x) {
								return fn(_24c.data.getValue(x, _24c.field, 0));
							});
						} else {
							_24d = d.map(data, function (x) {
								return _24c.data.getValue(x, _24c.field, 0);
							});
						}
						c.addSeries(_24c.name, _24d, _24c.kwArgs).render();
					}});
					_24c.data.fetch(kw);
				}
				return _24b;
			}, false);
			if (_24a) {
				c.render();
			}
		}, destroy: function () {
			this.chart.destroy();
			this.inherited(arguments);
		}, resize: function (box) {
			this.chart.resize(box);
		}});
		_240 = function (node, type, kw) {
			var dp = eval("(" + type + ".prototype.defaultParams)");
			var x, attr;
			for (x in dp) {
				if (x in kw) {
					continue;
				}
				attr = node.getAttribute(x);
				kw[x] = du.coerceType(dp[x], attr == null || typeof attr == "undefined" ? dp[x] : attr);
			}
			var op = eval("(" + type + ".prototype.optionalParams)");
			for (x in op) {
				if (x in kw) {
					continue;
				}
				attr = node.getAttribute(x);
				if (attr != null) {
					kw[x] = du.coerceType(op[x], attr);
				}
			}
		};
		_241 = function (node) {
			var name = node.getAttribute("name"), type = node.getAttribute("type");
			if (!name) {
				return null;
			}
			var o = {name: name, kwArgs: {}}, kw = o.kwArgs;
			if (type) {
				if (dc.axis2d[type]) {
					type = dojox._scopeName + ".charting.axis2d." + type;
				}
				var axis = eval("(" + type + ")");
				if (axis) {
					kw.type = axis;
				}
			} else {
				type = dojox._scopeName + ".charting.axis2d.Default";
			}
			_240(node, type, kw);
			if (kw.font || kw.fontColor) {
				if (!kw.tick) {
					kw.tick = {};
				}
				if (kw.font) {
					kw.tick.font = kw.font;
				}
				if (kw.fontColor) {
					kw.tick.fontColor = kw.fontColor;
				}
			}
			return o;
		};
		_242 = function (node) {
			var name = node.getAttribute("name"), type = node.getAttribute("type");
			if (!name) {
				return null;
			}
			var o = {name: name, kwArgs: {}}, kw = o.kwArgs;
			if (type) {
				if (dc.plot2d && dc.plot2d[type]) {
					type = dojox._scopeName + ".charting.plot2d." + type;
				}
				var plot = eval("(" + type + ")");
				if (plot) {
					kw.type = plot;
				}
			} else {
				type = dojox._scopeName + ".charting.plot2d.Default";
			}
			_240(node, type, kw);
			return o;
		};
		_243 = function (node) {
			var plot = node.getAttribute("plot"), type = node.getAttribute("type");
			if (!plot) {
				plot = "default";
			}
			var o = {plot: plot, kwArgs: {}}, kw = o.kwArgs;
			if (type) {
				if (dc.action2d[type]) {
					type = dojox._scopeName + ".charting.action2d." + type;
				}
				var _24e = eval("(" + type + ")");
				if (!_24e) {
					return null;
				}
				o.action = _24e;
			} else {
				return null;
			}
			_240(node, type, kw);
			return o;
		};
		_244 = function (node) {
			var ga = d.partial(d.attr, node);
			var name = ga("name");
			if (!name) {
				return null;
			}
			var o = {name: name, kwArgs: {}}, kw = o.kwArgs, t;
			t = ga("plot");
			if (t != null) {
				kw.plot = t;
			}
			t = ga("marker");
			if (t != null) {
				kw.marker = t;
			}
			t = ga("stroke");
			if (t != null) {
				kw.stroke = eval("(" + t + ")");
			}
			t = ga("outline");
			if (t != null) {
				kw.outline = eval("(" + t + ")");
			}
			t = ga("shadow");
			if (t != null) {
				kw.shadow = eval("(" + t + ")");
			}
			t = ga("fill");
			if (t != null) {
				kw.fill = eval("(" + t + ")");
			}
			t = ga("font");
			if (t != null) {
				kw.font = t;
			}
			t = ga("fontColor");
			if (t != null) {
				kw.fontColor = eval("(" + t + ")");
			}
			t = ga("legend");
			if (t != null) {
				kw.legend = t;
			}
			t = ga("data");
			if (t != null) {
				o.type = "data";
				o.data = t ? dojo.map(String(t).split(","), Number) : [];
				return o;
			}
			t = ga("array");
			if (t != null) {
				o.type = "data";
				o.data = eval("(" + t + ")");
				return o;
			}
			t = ga("store");
			if (t != null) {
				o.type = "store";
				o.data = eval("(" + t + ")");
				t = ga("field");
				o.field = t != null ? t : "value";
				t = ga("query");
				if (!!t) {
					kw.query = t;
				}
				t = ga("queryOptions");
				if (!!t) {
					kw.queryOptions = eval("(" + t + ")");
				}
				t = ga("start");
				if (!!t) {
					kw.start = Number(t);
				}
				t = ga("count");
				if (!!t) {
					kw.count = Number(t);
				}
				t = ga("sort");
				if (!!t) {
					kw.sort = eval("(" + t + ")");
				}
				t = ga("valueFn");
				if (!!t) {
					kw.valueFn = df.lambda(t);
				}
				return o;
			}
			return null;
		};
	})();
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
if (!dojo._hasResource["dojox.gfx.fx"]) {
	dojo._hasResource["dojox.gfx.fx"] = true;
	dojo.provide("dojox.gfx.fx");
	(function () {
		var d = dojo, g = dojox.gfx, m = g.matrix;

		function _24f(_250, end) {
			this.start = _250, this.end = end;
		};
		_24f.prototype.getValue = function (r) {
			return (this.end - this.start) * r + this.start;
		};
		function _251(_252, end, _253) {
			this.start = _252, this.end = end;
			this.units = _253;
		};
		_251.prototype.getValue = function (r) {
			return (this.end - this.start) * r + this.start + this.units;
		};
		function _254(_255, end) {
			this.start = _255, this.end = end;
			this.temp = new dojo.Color();
		};
		_254.prototype.getValue = function (r) {
			return d.blendColors(this.start, this.end, r, this.temp);
		};
		function _256(_257) {
			this.values = _257;
			this.length = _257.length;
		};
		_256.prototype.getValue = function (r) {
			return this.values[Math.min(Math.floor(r * this.length), this.length - 1)];
		};
		function _258(_259, def) {
			this.values = _259;
			this.def = def ? def : {};
		};
		_258.prototype.getValue = function (r) {
			var ret = dojo.clone(this.def);
			for (var i in this.values) {
				ret[i] = this.values[i].getValue(r);
			}
			return ret;
		};
		function _25a(_25b, _25c) {
			this.stack = _25b;
			this.original = _25c;
		};
		_25a.prototype.getValue = function (r) {
			var ret = [];
			dojo.forEach(this.stack, function (t) {
				if (t instanceof m.Matrix2D) {
					ret.push(t);
					return;
				}
				if (t.name == "original" && this.original) {
					ret.push(this.original);
					return;
				}
				if (!(t.name in m)) {
					return;
				}
				var f = m[t.name];
				if (typeof f != "function") {
					ret.push(f);
					return;
				}
				var val = dojo.map(t.start, function (v, i) {
					return (t.end[i] - v) * r + v;
				}), _25d = f.apply(m, val);
				if (_25d instanceof m.Matrix2D) {
					ret.push(_25d);
				}
			}, this);
			return ret;
		};
		var _25e = new d.Color(0, 0, 0, 0);

		function _25f(prop, obj, name, def) {
			if (prop.values) {
				return new _256(prop.values);
			}
			var _260, _261, end;
			if (prop.start) {
				_261 = g.normalizeColor(prop.start);
			} else {
				_261 = _260 = obj ? (name ? obj[name] : obj) : def;
			}
			if (prop.end) {
				end = g.normalizeColor(prop.end);
			} else {
				if (!_260) {
					_260 = obj ? (name ? obj[name] : obj) : def;
				}
				end = _260;
			}
			return new _254(_261, end);
		};
		function _262(prop, obj, name, def) {
			if (prop.values) {
				return new _256(prop.values);
			}
			var _263, _264, end;
			if (prop.start) {
				_264 = prop.start;
			} else {
				_264 = _263 = obj ? obj[name] : def;
			}
			if (prop.end) {
				end = prop.end;
			} else {
				if (typeof _263 != "number") {
					_263 = obj ? obj[name] : def;
				}
				end = _263;
			}
			return new _24f(_264, end);
		};
		g.fx.animateStroke = function (args) {
			if (!args.easing) {
				args.easing = d._defaultEasing;
			}
			var anim = new d.Animation(args), _265 = args.shape, _266;
			d.connect(anim, "beforeBegin", anim, function () {
				_266 = _265.getStroke();
				var prop = args.color, _267 = {}, _268, _269, end;
				if (prop) {
					_267.color = _25f(prop, _266, "color", _25e);
				}
				prop = args.style;
				if (prop && prop.values) {
					_267.style = new _256(prop.values);
				}
				prop = args.width;
				if (prop) {
					_267.width = _262(prop, _266, "width", 1);
				}
				prop = args.cap;
				if (prop && prop.values) {
					_267.cap = new _256(prop.values);
				}
				prop = args.join;
				if (prop) {
					if (prop.values) {
						_267.join = new _256(prop.values);
					} else {
						_269 = prop.start ? prop.start : (_266 && _266.join || 0);
						end = prop.end ? prop.end : (_266 && _266.join || 0);
						if (typeof _269 == "number" && typeof end == "number") {
							_267.join = new _24f(_269, end);
						}
					}
				}
				this.curve = new _258(_267, _266);
			});
			d.connect(anim, "onAnimate", _265, "setStroke");
			return anim;
		};
		g.fx.animateFill = function (args) {
			if (!args.easing) {
				args.easing = d._defaultEasing;
			}
			var anim = new d.Animation(args), _26a = args.shape, fill;
			d.connect(anim, "beforeBegin", anim, function () {
				fill = _26a.getFill();
				var prop = args.color, _26b = {};
				if (prop) {
					this.curve = _25f(prop, fill, "", _25e);
				}
			});
			d.connect(anim, "onAnimate", _26a, "setFill");
			return anim;
		};
		g.fx.animateFont = function (args) {
			if (!args.easing) {
				args.easing = d._defaultEasing;
			}
			var anim = new d.Animation(args), _26c = args.shape, font;
			d.connect(anim, "beforeBegin", anim, function () {
				font = _26c.getFont();
				var prop = args.style, _26d = {}, _26e, _26f, end;
				if (prop && prop.values) {
					_26d.style = new _256(prop.values);
				}
				prop = args.variant;
				if (prop && prop.values) {
					_26d.variant = new _256(prop.values);
				}
				prop = args.weight;
				if (prop && prop.values) {
					_26d.weight = new _256(prop.values);
				}
				prop = args.family;
				if (prop && prop.values) {
					_26d.family = new _256(prop.values);
				}
				prop = args.size;
				if (prop && prop.units) {
					_26f = parseFloat(prop.start ? prop.start : (_26c.font && _26c.font.size || "0"));
					end = parseFloat(prop.end ? prop.end : (_26c.font && _26c.font.size || "0"));
					_26d.size = new _251(_26f, end, prop.units);
				}
				this.curve = new _258(_26d, font);
			});
			d.connect(anim, "onAnimate", _26c, "setFont");
			return anim;
		};
		g.fx.animateTransform = function (args) {
			if (!args.easing) {
				args.easing = d._defaultEasing;
			}
			var anim = new d.Animation(args), _270 = args.shape, _271;
			d.connect(anim, "beforeBegin", anim, function () {
				_271 = _270.getTransform();
				this.curve = new _25a(args.transform, _271);
			});
			d.connect(anim, "onAnimate", _270, "setTransform");
			return anim;
		};
	})();
}
if (!dojo._hasResource["dojox.charting.action2d.Base"]) {
	dojo._hasResource["dojox.charting.action2d.Base"] = true;
	dojo.provide("dojox.charting.action2d.Base");
	(function () {
		var _272 = 400, _273 = dojo.fx.easing.backOut, df = dojox.lang.functional;
		dojo.declare("dojox.charting.action2d.Base", null, {overOutEvents: {onmouseover: 1, onmouseout: 1}, constructor: function (_274, plot, _275) {
			this.chart = _274;
			this.plot = plot || "default";
			this.anim = {};
			if (!_275) {
				_275 = {};
			}
			this.duration = _275.duration ? _275.duration : _272;
			this.easing = _275.easing ? _275.easing : _273;
		}, connect: function () {
			this.handle = this.chart.connectToPlot(this.plot, this, "process");
		}, disconnect: function () {
			if (this.handle) {
				dojo.disconnect(this.handle);
				this.handle = null;
			}
		}, reset: function () {
		}, destroy: function () {
			this.disconnect();
			df.forIn(this.anim, function (o) {
				df.forIn(o, function (anim) {
					anim.action.stop(true);
				});
			});
			this.anim = {};
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.action2d.Highlight"]) {
	dojo._hasResource["dojox.charting.action2d.Highlight"] = true;
	dojo.provide("dojox.charting.action2d.Highlight");
	(function () {
		var _276 = 100, _277 = 75, _278 = 50, c = dojox.color, cc = function (_279) {
			return function () {
				return _279;
			};
		}, hl = function (_27a) {
			var a = new c.Color(_27a), x = a.toHsl();
			if (x.s == 0) {
				x.l = x.l < 50 ? 100 : 0;
			} else {
				x.s = _276;
				if (x.l < _278) {
					x.l = _277;
				} else {
					if (x.l > _277) {
						x.l = _278;
					} else {
						x.l = x.l - _278 > _277 - x.l ? _278 : _277;
					}
				}
			}
			return c.fromHsl(x);
		};
		dojo.declare("dojox.charting.action2d.Highlight", dojox.charting.action2d.Base, {defaultParams: {duration: 400, easing: dojo.fx.easing.backOut}, optionalParams: {highlight: "red"}, constructor: function (_27b, plot, _27c) {
			var a = _27c && _27c.highlight;
			this.colorFun = a ? (dojo.isFunction(a) ? a : cc(a)) : hl;
			this.connect();
		}, process: function (o) {
			if (!o.shape || !(o.type in this.overOutEvents)) {
				return;
			}
			var _27d = o.run.name, _27e = o.index, anim, _27f, _280;
			if (_27d in this.anim) {
				anim = this.anim[_27d][_27e];
			} else {
				this.anim[_27d] = {};
			}
			if (anim) {
				anim.action.stop(true);
			} else {
				var _281 = o.shape.getFill();
				if (!_281 || !(_281 instanceof dojo.Color)) {
					return;
				}
				this.anim[_27d][_27e] = anim = {start: _281, end: this.colorFun(_281)};
			}
			var _282 = anim.start, end = anim.end;
			if (o.type == "onmouseout") {
				var t = _282;
				_282 = end;
				end = t;
			}
			anim.action = dojox.gfx.fx.animateFill({shape: o.shape, duration: this.duration, easing: this.easing, color: {start: _282, end: end}});
			if (o.type == "onmouseout") {
				dojo.connect(anim.action, "onEnd", this, function () {
					if (this.anim[_27d]) {
						delete this.anim[_27d][_27e];
					}
				});
			}
			anim.action.play();
		}});
	})();
}
if (!dojo._hasResource["dojo.fx.Toggler"]) {
	dojo._hasResource["dojo.fx.Toggler"] = true;
	dojo.provide("dojo.fx.Toggler");
	dojo.declare("dojo.fx.Toggler", null, {node: null, showFunc: dojo.fadeIn, hideFunc: dojo.fadeOut, showDuration: 200, hideDuration: 200, constructor: function (args) {
		var _283 = this;
		dojo.mixin(_283, args);
		_283.node = args.node;
		_283._showArgs = dojo.mixin({}, args);
		_283._showArgs.node = _283.node;
		_283._showArgs.duration = _283.showDuration;
		_283.showAnim = _283.showFunc(_283._showArgs);
		_283._hideArgs = dojo.mixin({}, args);
		_283._hideArgs.node = _283.node;
		_283._hideArgs.duration = _283.hideDuration;
		_283.hideAnim = _283.hideFunc(_283._hideArgs);
		dojo.connect(_283.showAnim, "beforeBegin", dojo.hitch(_283.hideAnim, "stop", true));
		dojo.connect(_283.hideAnim, "beforeBegin", dojo.hitch(_283.showAnim, "stop", true));
	}, show: function (_284) {
		return this.showAnim.play(_284 || 0);
	}, hide: function (_285) {
		return this.hideAnim.play(_285 || 0);
	}});
}
if (!dojo._hasResource["dojo.fx"]) {
	dojo._hasResource["dojo.fx"] = true;
	dojo.provide("dojo.fx");
	(function () {
		var d = dojo, _286 = {_fire: function (evt, args) {
			if (this[evt]) {
				this[evt].apply(this, args || []);
			}
			return this;
		}};
		var _287 = function (_288) {
			this._index = -1;
			this._animations = _288 || [];
			this._current = this._onAnimateCtx = this._onEndCtx = null;
			this.duration = 0;
			d.forEach(this._animations, function (a) {
				this.duration += a.duration;
				if (a.delay) {
					this.duration += a.delay;
				}
			}, this);
		};
		d.extend(_287, {_onAnimate: function () {
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
		}, play: function (_289, _28a) {
			if (!this._current) {
				this._current = this._animations[this._index = 0];
			}
			if (!_28a && this._current.status() == "playing") {
				return this;
			}
			var _28b = d.connect(this._current, "beforeBegin", this, function () {
				this._fire("beforeBegin");
			}), _28c = d.connect(this._current, "onBegin", this, function (arg) {
				this._fire("onBegin", arguments);
			}), _28d = d.connect(this._current, "onPlay", this, function (arg) {
				this._fire("onPlay", arguments);
				d.disconnect(_28b);
				d.disconnect(_28c);
				d.disconnect(_28d);
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
		}, gotoPercent: function (_28e, _28f) {
			this.pause();
			var _290 = this.duration * _28e;
			this._current = null;
			d.some(this._animations, function (a) {
				if (a.duration <= _290) {
					this._current = a;
					return true;
				}
				_290 -= a.duration;
				return false;
			});
			if (this._current) {
				this._current.gotoPercent(_290 / this._current.duration, _28f);
			}
			return this;
		}, stop: function (_291) {
			if (this._current) {
				if (_291) {
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
		d.extend(_287, _286);
		dojo.fx.chain = function (_292) {
			return new _287(_292);
		};
		var _293 = function (_294) {
			this._animations = _294 || [];
			this._connects = [];
			this._finished = 0;
			this.duration = 0;
			d.forEach(_294, function (a) {
				var _295 = a.duration;
				if (a.delay) {
					_295 += a.delay;
				}
				if (this.duration < _295) {
					this.duration = _295;
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
		d.extend(_293, {_doAction: function (_296, args) {
			d.forEach(this._animations, function (a) {
				a[_296].apply(a, args);
			});
			return this;
		}, _onEnd: function () {
			if (++this._finished > this._animations.length) {
				this._fire("onEnd");
			}
		}, _call: function (_297, args) {
			var t = this._pseudoAnimation;
			t[_297].apply(t, args);
		}, play: function (_298, _299) {
			this._finished = 0;
			this._doAction("play", arguments);
			this._call("play", arguments);
			return this;
		}, pause: function () {
			this._doAction("pause", arguments);
			this._call("pause", arguments);
			return this;
		}, gotoPercent: function (_29a, _29b) {
			var ms = this.duration * _29a;
			d.forEach(this._animations, function (a) {
				a.gotoPercent(a.duration < ms ? 1 : (ms / a.duration), _29b);
			});
			this._call("gotoPercent", arguments);
			return this;
		}, stop: function (_29c) {
			this._doAction("stop", arguments);
			this._call("stop", arguments);
			return this;
		}, status: function () {
			return this._pseudoAnimation.status();
		}, destroy: function () {
			d.forEach(this._connects, dojo.disconnect);
		}});
		d.extend(_293, _286);
		dojo.fx.combine = function (_29d) {
			return new _293(_29d);
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
					var _29e = d.style(node, "height");
					return Math.max(_29e, 1);
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
if (!dojo._hasResource["dojox.charting.action2d.Magnify"]) {
	dojo._hasResource["dojox.charting.action2d.Magnify"] = true;
	dojo.provide("dojox.charting.action2d.Magnify");
	(function () {
		var _29f = 2, m = dojox.gfx.matrix, gf = dojox.gfx.fx;
		dojo.declare("dojox.charting.action2d.Magnify", dojox.charting.action2d.Base, {defaultParams: {duration: 400, easing: dojo.fx.easing.backOut, scale: _29f}, optionalParams: {}, constructor: function (_2a0, plot, _2a1) {
			this.scale = _2a1 && typeof _2a1.scale == "number" ? _2a1.scale : _29f;
			this.connect();
		}, process: function (o) {
			if (!o.shape || !(o.type in this.overOutEvents) || !("cx" in o) || !("cy" in o)) {
				return;
			}
			var _2a2 = o.run.name, _2a3 = o.index, _2a4 = [], anim, init, _2a5;
			if (_2a2 in this.anim) {
				anim = this.anim[_2a2][_2a3];
			} else {
				this.anim[_2a2] = {};
			}
			if (anim) {
				anim.action.stop(true);
			} else {
				this.anim[_2a2][_2a3] = anim = {};
			}
			if (o.type == "onmouseover") {
				init = m.identity;
				_2a5 = this.scale;
			} else {
				init = m.scaleAt(this.scale, o.cx, o.cy);
				_2a5 = 1 / this.scale;
			}
			var _2a6 = {shape: o.shape, duration: this.duration, easing: this.easing, transform: [
				{name: "scaleAt", start: [1, o.cx, o.cy], end: [_2a5, o.cx, o.cy]},
				init
			]};
			if (o.shape) {
				_2a4.push(gf.animateTransform(_2a6));
			}
			if (o.oultine) {
				_2a6.shape = o.outline;
				_2a4.push(gf.animateTransform(_2a6));
			}
			if (o.shadow) {
				_2a6.shape = o.shadow;
				_2a4.push(gf.animateTransform(_2a6));
			}
			if (!_2a4.length) {
				delete this.anim[_2a2][_2a3];
				return;
			}
			anim.action = dojo.fx.combine(_2a4);
			if (o.type == "onmouseout") {
				dojo.connect(anim.action, "onEnd", this, function () {
					if (this.anim[_2a2]) {
						delete this.anim[_2a2][_2a3];
					}
				});
			}
			anim.action.play();
		}});
	})();
}
if (!dojo._hasResource["dojox.lang.functional.scan"]) {
	dojo._hasResource["dojox.lang.functional.scan"] = true;
	dojo.provide("dojox.lang.functional.scan");
	(function () {
		var d = dojo, df = dojox.lang.functional, _2a7 = {};
		d.mixin(df, {scanl: function (a, f, z, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var t, n, i;
			if (d.isArray(a)) {
				t = new Array((n = a.length) + 1);
				t[0] = z;
				for (i = 0; i < n; z = f.call(o, z, a[i], i, a), t[++i] = z) {
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					t = [z];
					for (i = 0; a.hasNext(); t.push(z = f.call(o, z, a.next(), i++, a))) {
					}
				} else {
					t = [z];
					for (i in a) {
						if (!(i in _2a7)) {
							t.push(z = f.call(o, z, a[i], i, a));
						}
					}
				}
			}
			return t;
		}, scanl1: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var t, n, z, _2a8 = true;
			if (d.isArray(a)) {
				t = new Array(n = a.length);
				t[0] = z = a[0];
				for (var i = 1; i < n; t[i] = z = f.call(o, z, a[i], i, a), ++i) {
				}
			} else {
				if (typeof a.hasNext == "function" && typeof a.next == "function") {
					if (a.hasNext()) {
						t = [z = a.next()];
						for (var i = 1; a.hasNext(); t.push(z = f.call(o, z, a.next(), i++, a))) {
						}
					}
				} else {
					for (var i in a) {
						if (!(i in _2a7)) {
							if (_2a8) {
								t = [z = a[i]];
								_2a8 = false;
							} else {
								t.push(z = f.call(o, z, a[i], i, a));
							}
						}
					}
				}
			}
			return t;
		}, scanr: function (a, f, z, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var n = a.length, t = new Array(n + 1), i = n;
			t[n] = z;
			for (; i > 0; --i, z = f.call(o, z, a[i], i, a), t[i] = z) {
			}
			return t;
		}, scanr1: function (a, f, o) {
			if (typeof a == "string") {
				a = a.split("");
			}
			o = o || d.global;
			f = df.lambda(f);
			var n = a.length, t = new Array(n), z = a[n - 1], i = n - 1;
			t[i] = z;
			for (; i > 0; --i, z = f.call(o, z, a[i], i, a), t[i] = z) {
			}
			return t;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.action2d.MoveSlice"]) {
	dojo._hasResource["dojox.charting.action2d.MoveSlice"] = true;
	dojo.provide("dojox.charting.action2d.MoveSlice");
	(function () {
		var _2a9 = 1.05, _2aa = 7, m = dojox.gfx.matrix, gf = dojox.gfx.fx, df = dojox.lang.functional;
		dojo.declare("dojox.charting.action2d.MoveSlice", dojox.charting.action2d.Base, {defaultParams: {duration: 400, easing: dojo.fx.easing.backOut, scale: _2a9, shift: _2aa}, optionalParams: {}, constructor: function (_2ab, plot, _2ac) {
			if (!_2ac) {
				_2ac = {};
			}
			this.scale = typeof _2ac.scale == "number" ? _2ac.scale : _2a9;
			this.shift = typeof _2ac.shift == "number" ? _2ac.shift : _2aa;
			this.connect();
		}, process: function (o) {
			if (!o.shape || o.element != "slice" || !(o.type in this.overOutEvents)) {
				return;
			}
			if (!this.angles) {
				var _2ad = m._degToRad(o.plot.opt.startAngle);
				if (typeof o.run.data[0] == "number") {
					this.angles = df.map(df.scanl(o.run.data, "+", _2ad), "* 2 * Math.PI / this", df.foldl(o.run.data, "+", 0));
				} else {
					this.angles = df.map(df.scanl(o.run.data, "a + b.y", _2ad), "* 2 * Math.PI / this", df.foldl(o.run.data, "a + b.y", 0));
				}
			}
			var _2ae = o.index, anim, _2af, _2b0, _2b1, _2b2, _2b3 = (this.angles[_2ae] + this.angles[_2ae + 1]) / 2, _2b4 = m.rotateAt(-_2b3, o.cx, o.cy), _2b5 = m.rotateAt(_2b3, o.cx, o.cy);
			anim = this.anim[_2ae];
			if (anim) {
				anim.action.stop(true);
			} else {
				this.anim[_2ae] = anim = {};
			}
			if (o.type == "onmouseover") {
				_2b1 = 0;
				_2b2 = this.shift;
				_2af = 1;
				_2b0 = this.scale;
			} else {
				_2b1 = this.shift;
				_2b2 = 0;
				_2af = this.scale;
				_2b0 = 1;
			}
			anim.action = dojox.gfx.fx.animateTransform({shape: o.shape, duration: this.duration, easing: this.easing, transform: [_2b5, {name: "translate", start: [_2b1, 0], end: [_2b2, 0]}, {name: "scaleAt", start: [_2af, o.cx, o.cy], end: [_2b0, o.cx, o.cy]}, _2b4]});
			if (o.type == "onmouseout") {
				dojo.connect(anim.action, "onEnd", this, function () {
					delete this.anim[_2ae];
				});
			}
			anim.action.play();
		}, reset: function () {
			delete this.angles;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.action2d.Shake"]) {
	dojo._hasResource["dojox.charting.action2d.Shake"] = true;
	dojo.provide("dojox.charting.action2d.Shake");
	(function () {
		var _2b6 = 3, m = dojox.gfx.matrix, gf = dojox.gfx.fx;
		dojo.declare("dojox.charting.action2d.Shake", dojox.charting.action2d.Base, {defaultParams: {duration: 400, easing: dojo.fx.easing.backOut, shiftX: _2b6, shiftY: _2b6}, optionalParams: {}, constructor: function (_2b7, plot, _2b8) {
			if (!_2b8) {
				_2b8 = {};
			}
			this.shiftX = typeof _2b8.shiftX == "number" ? _2b8.shiftX : _2b6;
			this.shiftY = typeof _2b8.shiftY == "number" ? _2b8.shiftY : _2b6;
			this.connect();
		}, process: function (o) {
			if (!o.shape || !(o.type in this.overOutEvents)) {
				return;
			}
			var _2b9 = o.run.name, _2ba = o.index, _2bb = [], anim, _2bc = o.type == "onmouseover" ? this.shiftX : -this.shiftX, _2bd = o.type == "onmouseover" ? this.shiftY : -this.shiftY;
			if (_2b9 in this.anim) {
				anim = this.anim[_2b9][_2ba];
			} else {
				this.anim[_2b9] = {};
			}
			if (anim) {
				anim.action.stop(true);
			} else {
				this.anim[_2b9][_2ba] = anim = {};
			}
			var _2be = {shape: o.shape, duration: this.duration, easing: this.easing, transform: [
				{name: "translate", start: [this.shiftX, this.shiftY], end: [0, 0]},
				m.identity
			]};
			if (o.shape) {
				_2bb.push(gf.animateTransform(_2be));
			}
			if (o.oultine) {
				_2be.shape = o.outline;
				_2bb.push(gf.animateTransform(_2be));
			}
			if (o.shadow) {
				_2be.shape = o.shadow;
				_2bb.push(gf.animateTransform(_2be));
			}
			if (!_2bb.length) {
				delete this.anim[_2b9][_2ba];
				return;
			}
			anim.action = dojo.fx.combine(_2bb);
			if (o.type == "onmouseout") {
				dojo.connect(anim.action, "onEnd", this, function () {
					if (this.anim[_2b9]) {
						delete this.anim[_2b9][_2ba];
					}
				});
			}
			anim.action.play();
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
	dojo.string.substitute = function (_2bf, map, _2c0, _2c1) {
		_2c1 = _2c1 || dojo.global;
		_2c0 = _2c0 ? dojo.hitch(_2c1, _2c0) : function (v) {
			return v;
		};
		return _2bf.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (_2c2, key, _2c3) {
			var _2c4 = dojo.getObject(key, false, map);
			if (_2c3) {
				_2c4 = dojo.getObject(_2c3, false, _2c1).call(_2c1, _2c4, key);
			}
			return _2c0(_2c4, key).toString();
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
if (!dojo._hasResource["dojo.date.stamp"]) {
	dojo._hasResource["dojo.date.stamp"] = true;
	dojo.provide("dojo.date.stamp");
	dojo.getObject("date.stamp", true, dojo);
	dojo.date.stamp.fromISOString = function (_2c5, _2c6) {
		if (!dojo.date.stamp._isoRegExp) {
			dojo.date.stamp._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
		}
		var _2c7 = dojo.date.stamp._isoRegExp.exec(_2c5), _2c8 = null;
		if (_2c7) {
			_2c7.shift();
			if (_2c7[1]) {
				_2c7[1]--;
			}
			if (_2c7[6]) {
				_2c7[6] *= 1000;
			}
			if (_2c6) {
				_2c6 = new Date(_2c6);
				dojo.forEach(dojo.map(["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"], function (prop) {
					return _2c6["get" + prop]();
				}), function (_2c9, _2ca) {
					_2c7[_2ca] = _2c7[_2ca] || _2c9;
				});
			}
			_2c8 = new Date(_2c7[0] || 1970, _2c7[1] || 0, _2c7[2] || 1, _2c7[3] || 0, _2c7[4] || 0, _2c7[5] || 0, _2c7[6] || 0);
			if (_2c7[0] < 100) {
				_2c8.setFullYear(_2c7[0] || 1970);
			}
			var _2cb = 0, _2cc = _2c7[7] && _2c7[7].charAt(0);
			if (_2cc != "Z") {
				_2cb = ((_2c7[8] || 0) * 60) + (Number(_2c7[9]) || 0);
				if (_2cc != "-") {
					_2cb *= -1;
				}
			}
			if (_2cc) {
				_2cb -= _2c8.getTimezoneOffset();
			}
			if (_2cb) {
				_2c8.setTime(_2c8.getTime() + _2cb * 60000);
			}
		}
		return _2c8;
	};
	dojo.date.stamp.toISOString = function (_2cd, _2ce) {
		var _2cf = function (n) {
			return (n < 10) ? "0" + n : n;
		};
		_2ce = _2ce || {};
		var _2d0 = [], _2d1 = _2ce.zulu ? "getUTC" : "get", date = "";
		if (_2ce.selector != "time") {
			var year = _2cd[_2d1 + "FullYear"]();
			date = ["0000".substr((year + "").length) + year, _2cf(_2cd[_2d1 + "Month"]() + 1), _2cf(_2cd[_2d1 + "Date"]())].join("-");
		}
		_2d0.push(date);
		if (_2ce.selector != "date") {
			var time = [_2cf(_2cd[_2d1 + "Hours"]()), _2cf(_2cd[_2d1 + "Minutes"]()), _2cf(_2cd[_2d1 + "Seconds"]())].join(":");
			var _2d2 = _2cd[_2d1 + "Milliseconds"]();
			if (_2ce.milliseconds) {
				time += "." + (_2d2 < 100 ? "0" : "") + _2cf(_2d2);
			}
			if (_2ce.zulu) {
				time += "Z";
			} else {
				if (_2ce.selector != "time") {
					var _2d3 = _2cd.getTimezoneOffset();
					var _2d4 = Math.abs(_2d3);
					time += (_2d3 > 0 ? "-" : "+") + _2cf(Math.floor(_2d4 / 60)) + ":" + _2cf(_2d4 % 60);
				}
			}
			_2d0.push(time);
		}
		return _2d0.join("T");
	};
}
if (!dojo._hasResource["dojo.parser"]) {
	dojo._hasResource["dojo.parser"] = true;
	dojo.provide("dojo.parser");
	new Date("X");
	dojo.parser = new function () {
		var d = dojo;

		function _2d5(_2d6) {
			if (d.isString(_2d6)) {
				return "string";
			}
			if (typeof _2d6 == "number") {
				return "number";
			}
			if (typeof _2d6 == "boolean") {
				return "boolean";
			}
			if (d.isFunction(_2d6)) {
				return "function";
			}
			if (d.isArray(_2d6)) {
				return "array";
			}
			if (_2d6 instanceof Date) {
				return "date";
			}
			if (_2d6 instanceof d._Url) {
				return "url";
			}
			return "object";
		};
		function _2d7(_2d8, type) {
			switch (type) {
				case "string":
					return _2d8;
				case "number":
					return _2d8.length ? Number(_2d8) : NaN;
				case "boolean":
					return typeof _2d8 == "boolean" ? _2d8 : !(_2d8.toLowerCase() == "false");
				case "function":
					if (d.isFunction(_2d8)) {
						_2d8 = _2d8.toString();
						_2d8 = d.trim(_2d8.substring(_2d8.indexOf("{") + 1, _2d8.length - 1));
					}
					try {
						if (_2d8 === "" || _2d8.search(/[^\w\.]+/i) != -1) {
							return new Function(_2d8);
						} else {
							return d.getObject(_2d8, false) || new Function(_2d8);
						}
					} catch (e) {
						return new Function();
					}
				case "array":
					return _2d8 ? _2d8.split(/\s*,\s*/) : [];
				case "date":
					switch (_2d8) {
						case "":
							return new Date("");
						case "now":
							return new Date();
						default:
							return d.date.stamp.fromISOString(_2d8);
					}
				case "url":
					return d.baseUrl + _2d8;
				default:
					return d.fromJson(_2d8);
			}
		};
		var _2d9 = {}, _2da = {};
		d.connect(d, "extend", function () {
			_2da = {};
		});
		function _2db(cls, _2dc) {
			for (var name in cls) {
				if (name.charAt(0) == "_") {
					continue;
				}
				if (name in _2d9) {
					continue;
				}
				_2dc[name] = _2d5(cls[name]);
			}
			return _2dc;
		};
		function _2dd(_2de, _2df) {
			var c = _2da[_2de];
			if (!c) {
				var cls = d.getObject(_2de), _2e0 = null;
				if (!cls) {
					return null;
				}
				if (!_2df) {
					_2e0 = _2db(cls.prototype, {});
				}
				c = {cls: cls, params: _2e0};
			} else {
				if (!_2df && !c.params) {
					c.params = _2db(c.cls.prototype, {});
				}
			}
			return c;
		};
		this._functionFromScript = function (_2e1, _2e2) {
			var _2e3 = "";
			var _2e4 = "";
			var _2e5 = (_2e1.getAttribute(_2e2 + "args") || _2e1.getAttribute("args"));
			if (_2e5) {
				d.forEach(_2e5.split(/\s*,\s*/), function (part, idx) {
					_2e3 += "var " + part + " = arguments[" + idx + "]; ";
				});
			}
			var _2e6 = _2e1.getAttribute("with");
			if (_2e6 && _2e6.length) {
				d.forEach(_2e6.split(/\s*,\s*/), function (part) {
					_2e3 += "with(" + part + "){";
					_2e4 += "}";
				});
			}
			return new Function(_2e3 + _2e1.innerHTML + _2e4);
		};
		this.instantiate = function (_2e7, _2e8, args) {
			var _2e9 = [], _2e8 = _2e8 || {};
			args = args || {};
			var _2ea = (args.scope || d._scopeName) + "Type", _2eb = "data-" + (args.scope || d._scopeName) + "-";
			d.forEach(_2e7, function (obj) {
				if (!obj) {
					return;
				}
				var node, type, _2ec, _2ed, _2ee, _2ef;
				if (obj.node) {
					node = obj.node;
					type = obj.type;
					_2ef = obj.fastpath;
					_2ec = obj.clsInfo || (type && _2dd(type, _2ef));
					_2ed = _2ec && _2ec.cls;
					_2ee = obj.scripts;
				} else {
					node = obj;
					type = _2ea in _2e8 ? _2e8[_2ea] : node.getAttribute(_2ea);
					_2ec = type && _2dd(type);
					_2ed = _2ec && _2ec.cls;
					_2ee = (_2ed && (_2ed._noScript || _2ed.prototype._noScript) ? [] : d.query("> script[type^='dojo/']", node));
				}
				if (!_2ec) {
					throw new Error("Could not load class '" + type);
				}
				var _2f0 = {};
				if (args.defaults) {
					d._mixin(_2f0, args.defaults);
				}
				if (obj.inherited) {
					d._mixin(_2f0, obj.inherited);
				}
				if (_2ef) {
					var _2f1 = node.getAttribute(_2eb + "props");
					if (_2f1 && _2f1.length) {
						try {
							_2f1 = d.fromJson.call(args.propsThis, "{" + _2f1 + "}");
							d._mixin(_2f0, _2f1);
						} catch (e) {
							throw new Error(e.toString() + " in data-dojo-props='" + _2f1 + "'");
						}
					}
					var _2f2 = node.getAttribute(_2eb + "attach-point");
					if (_2f2) {
						_2f0.dojoAttachPoint = _2f2;
					}
					var _2f3 = node.getAttribute(_2eb + "attach-event");
					if (_2f3) {
						_2f0.dojoAttachEvent = _2f3;
					}
					dojo.mixin(_2f0, _2e8);
				} else {
					var _2f4 = node.attributes;
					for (var name in _2ec.params) {
						var item = name in _2e8 ? {value: _2e8[name], specified: true} : _2f4.getNamedItem(name);
						if (!item || (!item.specified && (!dojo.isIE || name.toLowerCase() != "value"))) {
							continue;
						}
						var _2f5 = item.value;
						switch (name) {
							case "class":
								_2f5 = "className" in _2e8 ? _2e8.className : node.className;
								break;
							case "style":
								_2f5 = "style" in _2e8 ? _2e8.style : (node.style && node.style.cssText);
						}
						var _2f6 = _2ec.params[name];
						if (typeof _2f5 == "string") {
							_2f0[name] = _2d7(_2f5, _2f6);
						} else {
							_2f0[name] = _2f5;
						}
					}
				}
				var _2f7 = [], _2f8 = [];
				d.forEach(_2ee, function (_2f9) {
					node.removeChild(_2f9);
					var _2fa = (_2f9.getAttribute(_2eb + "event") || _2f9.getAttribute("event")), type = _2f9.getAttribute("type"), nf = d.parser._functionFromScript(_2f9, _2eb);
					if (_2fa) {
						if (type == "dojo/connect") {
							_2f7.push({event: _2fa, func: nf});
						} else {
							_2f0[_2fa] = nf;
						}
					} else {
						_2f8.push(nf);
					}
				});
				var _2fb = _2ed.markupFactory || _2ed.prototype && _2ed.prototype.markupFactory;
				var _2fc = _2fb ? _2fb(_2f0, node, _2ed) : new _2ed(_2f0, node);
				_2e9.push(_2fc);
				var _2fd = (node.getAttribute(_2eb + "id") || node.getAttribute("jsId"));
				if (_2fd) {
					d.setObject(_2fd, _2fc);
				}
				d.forEach(_2f7, function (_2fe) {
					d.connect(_2fc, _2fe.event, null, _2fe.func);
				});
				d.forEach(_2f8, function (func) {
					func.call(_2fc);
				});
			});
			if (!_2e8._started) {
				d.forEach(_2e9, function (_2ff) {
					if (!args.noStart && _2ff && dojo.isFunction(_2ff.startup) && !_2ff._started && (!_2ff.getParent || !_2ff.getParent())) {
						_2ff.startup();
					}
				});
			}
			return _2e9;
		};
		this.parse = function (_300, args) {
			var root;
			if (!args && _300 && _300.rootNode) {
				args = _300;
				root = args.rootNode;
			} else {
				root = _300;
			}
			root = root ? dojo.byId(root) : dojo.body();
			args = args || {};
			var _301 = (args.scope || d._scopeName) + "Type", _302 = "data-" + (args.scope || d._scopeName) + "-";

			function scan(_303, list) {
				var _304 = dojo.clone(_303.inherited);
				dojo.forEach(["dir", "lang"], function (name) {
					var val = _303.node.getAttribute(name);
					if (val) {
						_304[name] = val;
					}
				});
				var _305 = _303.clsInfo && !_303.clsInfo.cls.prototype._noScript ? _303.scripts : null;
				var _306 = (!_303.clsInfo || !_303.clsInfo.cls.prototype.stopParser) || (args && args.template);
				for (var _307 = _303.node.firstChild; _307; _307 = _307.nextSibling) {
					if (_307.nodeType == 1) {
						var type, _308 = _306 && _307.getAttribute(_302 + "type");
						if (_308) {
							type = _308;
						} else {
							type = _306 && _307.getAttribute(_301);
						}
						var _309 = _308 == type;
						if (type) {
							var _30a = {"type": type, fastpath: _309, clsInfo: _2dd(type, _309), node: _307, scripts: [], inherited: _304};
							list.push(_30a);
							scan(_30a, list);
						} else {
							if (_305 && _307.nodeName.toLowerCase() == "script") {
								type = _307.getAttribute("type");
								if (type && /^dojo\/\w/i.test(type)) {
									_305.push(_307);
								}
							} else {
								if (_306) {
									scan({node: _307, inherited: _304}, list);
								}
							}
						}
					}
				}
			};
			var _30b = {};
			if (args && args.inherited) {
				for (var key in args.inherited) {
					if (args.inherited[key]) {
						_30b[key] = args.inherited[key];
					}
				}
			}
			var list = [];
			scan({node: root, inherited: _30b}, list);
			var _30c = args && args.template ? {template: true} : null;
			return this.instantiate(list, _30c, args);
		};
	}();
	(function () {
		var _30d = function () {
			if (dojo.config.parseOnLoad) {
				dojo.parser.parse();
			}
		};
		if (dojo.getObject("dijit.wai.onload") === dojo._loaders[0]) {
			dojo._loaders.splice(1, 0, _30d);
		} else {
			dojo._loaders.unshift(_30d);
		}
	})();
}
if (!dojo._hasResource["dojo.cache"]) {
	dojo._hasResource["dojo.cache"] = true;
	dojo.provide("dojo.cache");
	var cache = {};
	dojo.cache = function (_30e, url, _30f) {
		if (typeof _30e == "string") {
			var _310 = dojo.moduleUrl(_30e, url);
		} else {
			_310 = _30e;
			_30f = url;
		}
		var key = _310.toString();
		var val = _30f;
		if (_30f != undefined && !dojo.isString(_30f)) {
			val = ("value" in _30f ? _30f.value : undefined);
		}
		var _311 = _30f && _30f.sanitize ? true : false;
		if (typeof val == "string") {
			val = cache[key] = _311 ? dojo.cache._sanitize(val) : val;
		} else {
			if (val === null) {
				delete cache[key];
			} else {
				if (!(key in cache)) {
					val = dojo._getText(key);
					cache[key] = _311 ? dojo.cache._sanitize(val) : val;
				}
				val = cache[key];
			}
		}
		return val;
	};
	dojo.cache._sanitize = function (val) {
		if (val) {
			val = val.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
			var _312 = val.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
			if (_312) {
				val = _312[1];
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
		var _313 = this.declaredClass, _314 = this;
		return dojo.string.substitute(tmpl, this, function (_315, key) {
			if (key.charAt(0) == "!") {
				_315 = dojo.getObject(key.substr(1), false, _314);
			}
			if (typeof _315 == "undefined") {
				throw new Error(_313 + " template:" + key);
			}
			if (_315 == null) {
				return "";
			}
			return key.charAt(0) == "!" ? _315 : _315.toString().replace(/"/g, "&quot;");
		}, this);
	}, buildRendering: function () {
		var _316 = dijit._Templated.getCachedTemplate(this.templatePath, this.templateString, this._skipNodeCache);
		var node;
		if (dojo.isString(_316)) {
			node = dojo._toDom(this._stringRepl(_316));
			if (node.nodeType != 1) {
				throw new Error("Invalid template: " + _316);
			}
		} else {
			node = _316.cloneNode(true);
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
	}, _fillContent: function (_317) {
		var dest = this.containerNode;
		if (_317 && dest) {
			while (_317.hasChildNodes()) {
				dest.appendChild(_317.firstChild);
			}
		}
	}, _attachTemplateNodes: function (_318, _319) {
		_319 = _319 || function (n, p) {
			return n.getAttribute(p);
		};
		var _31a = dojo.isArray(_318) ? _318 : (_318.all || _318.getElementsByTagName("*"));
		var x = dojo.isArray(_318) ? 0 : -1;
		for (; x < _31a.length; x++) {
			var _31b = (x == -1) ? _318 : _31a[x];
			if (this.widgetsInTemplate && (_319(_31b, "dojoType") || _319(_31b, "data-dojo-type"))) {
				continue;
			}
			var _31c = _319(_31b, "dojoAttachPoint") || _319(_31b, "data-dojo-attach-point");
			if (_31c) {
				var _31d, _31e = _31c.split(/\s*,\s*/);
				while ((_31d = _31e.shift())) {
					if (dojo.isArray(this[_31d])) {
						this[_31d].push(_31b);
					} else {
						this[_31d] = _31b;
					}
					this._attachPoints.push(_31d);
				}
			}
			var _31f = _319(_31b, "dojoAttachEvent") || _319(_31b, "data-dojo-attach-event");
			if (_31f) {
				var _320, _321 = _31f.split(/\s*,\s*/);
				var trim = dojo.trim;
				while ((_320 = _321.shift())) {
					if (_320) {
						var _322 = null;
						if (_320.indexOf(":") != -1) {
							var _323 = _320.split(":");
							_320 = trim(_323[0]);
							_322 = trim(_323[1]);
						} else {
							_320 = trim(_320);
						}
						if (!_322) {
							_322 = _320;
						}
						this._attachEvents.push(this.connect(_31b, _320, _322));
					}
				}
			}
			var role = _319(_31b, "waiRole");
			if (role) {
				dijit.setWaiRole(_31b, role);
			}
			var _324 = _319(_31b, "waiState");
			if (_324) {
				dojo.forEach(_324.split(/\s*,\s*/), function (_325) {
					if (_325.indexOf("-") != -1) {
						var pair = _325.split("-");
						dijit.setWaiState(_31b, pair[0], pair[1]);
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
		dojo.forEach(this._attachPoints, function (_326) {
			delete this[_326];
		}, this);
		this._attachPoints = [];
		dojo.forEach(this._attachEvents, this.disconnect, this);
		this._attachEvents = [];
		this.inherited(arguments);
	}});
	dijit._Templated._templateCache = {};
	dijit._Templated.getCachedTemplate = function (_327, _328, _329) {
		var _32a = dijit._Templated._templateCache;
		var key = _328 || _327;
		var _32b = _32a[key];
		if (_32b) {
			try {
				if (!_32b.ownerDocument || _32b.ownerDocument == dojo.doc) {
					return _32b;
				}
			} catch (e) {
			}
			dojo.destroy(_32b);
		}
		if (!_328) {
			_328 = dojo.cache(_327, {sanitize: true});
		}
		_328 = dojo.string.trim(_328);
		if (_329 || _328.match(/\$\{([^\}]+)\}/g)) {
			return (_32a[key] = _328);
		} else {
			var node = dojo._toDom(_328);
			if (node.nodeType != 1) {
				throw new Error("Invalid template: " + _328);
			}
			return (_32a[key] = node);
		}
	};
	if (dojo.isIE) {
		dojo.addOnWindowUnload(function () {
			var _32c = dijit._Templated._templateCache;
			for (var key in _32c) {
				var _32d = _32c[key];
				if (typeof _32d == "object") {
					dojo.destroy(_32d);
				}
				delete _32c[key];
			}
		});
	}
	dojo.extend(dijit._Widget, {dojoAttachEvent: "", dojoAttachPoint: "", waiRole: "", waiState: ""});
}
if (!dojo._hasResource["dijit.Tooltip"]) {
	dojo._hasResource["dijit.Tooltip"] = true;
	dojo.provide("dijit.Tooltip");
	dojo.declare("dijit._MasterTooltip", [dijit._Widget, dijit._Templated], {duration: dijit.defaultDuration, templateString: dojo.cache("dijit", "templates/Tooltip.html", "<div class=\"dijitTooltip dijitTooltipLeft\" id=\"dojoTooltip\"\n\t><div class=\"dijitTooltipContainer dijitTooltipContents\" dojoAttachPoint=\"containerNode\" role='alert'></div\n\t><div class=\"dijitTooltipConnector\" dojoAttachPoint=\"connectorNode\"></div\n></div>\n"), postCreate: function () {
		dojo.body().appendChild(this.domNode);
		this.bgIframe = new dijit.BackgroundIframe(this.domNode);
		this.fadeIn = dojo.fadeIn({node: this.domNode, duration: this.duration, onEnd: dojo.hitch(this, "_onShow")});
		this.fadeOut = dojo.fadeOut({node: this.domNode, duration: this.duration, onEnd: dojo.hitch(this, "_onHide")});
	}, show: function (_32e, _32f, _330, rtl) {
		if (this.aroundNode && this.aroundNode === _32f) {
			return;
		}
		this.domNode.width = "auto";
		if (this.fadeOut.status() == "playing") {
			this._onDeck = arguments;
			return;
		}
		this.containerNode.innerHTML = _32e;
		var pos = dijit.placeOnScreenAroundElement(this.domNode, _32f, dijit.getPopupAroundAlignment((_330 && _330.length) ? _330 : dijit.Tooltip.defaultPosition, !rtl), dojo.hitch(this, "orient"));
		dojo.style(this.domNode, "opacity", 0);
		this.fadeIn.play();
		this.isShowingNow = true;
		this.aroundNode = _32f;
	}, orient: function (node, _331, _332, _333, _334) {
		this.connectorNode.style.top = "";
		var _335 = _333.w - this.connectorNode.offsetWidth;
		node.className = "dijitTooltip " + {"BL-TL": "dijitTooltipBelow dijitTooltipABLeft", "TL-BL": "dijitTooltipAbove dijitTooltipABLeft", "BR-TR": "dijitTooltipBelow dijitTooltipABRight", "TR-BR": "dijitTooltipAbove dijitTooltipABRight", "BR-BL": "dijitTooltipRight", "BL-BR": "dijitTooltipLeft"}[_331 + "-" + _332];
		this.domNode.style.width = "auto";
		var size = dojo.contentBox(this.domNode);
		var _336 = Math.min((Math.max(_335, 1)), size.w);
		var _337 = _336 < size.w;
		this.domNode.style.width = _336 + "px";
		if (_337) {
			this.containerNode.style.overflow = "auto";
			var _338 = this.containerNode.scrollWidth;
			this.containerNode.style.overflow = "visible";
			if (_338 > _336) {
				_338 = _338 + dojo.style(this.domNode, "paddingLeft") + dojo.style(this.domNode, "paddingRight");
				this.domNode.style.width = _338 + "px";
			}
		}
		if (_332.charAt(0) == "B" && _331.charAt(0) == "B") {
			var mb = dojo.marginBox(node);
			var _339 = this.connectorNode.offsetHeight;
			if (mb.h > _333.h) {
				var _33a = _333.h - (_334.h / 2) - (_339 / 2);
				this.connectorNode.style.top = _33a + "px";
				this.connectorNode.style.bottom = "";
			} else {
				this.connectorNode.style.bottom = Math.min(Math.max(_334.h / 2 - _339 / 2, 0), mb.h - _339) + "px";
				this.connectorNode.style.top = "";
			}
		} else {
			this.connectorNode.style.top = "";
			this.connectorNode.style.bottom = "";
		}
		return Math.max(0, size.w - _335);
	}, _onShow: function () {
		if (dojo.isIE) {
			this.domNode.style.filter = "";
		}
	}, hide: function (_33b) {
		if (this._onDeck && this._onDeck[1] == _33b) {
			this._onDeck = null;
		} else {
			if (this.aroundNode === _33b) {
				this.fadeIn.stop();
				this.isShowingNow = false;
				this.aroundNode = null;
				this.fadeOut.play();
			} else {
			}
		}
	}, _onHide: function () {
		this.domNode.style.cssText = "";
		this.containerNode.innerHTML = "";
		if (this._onDeck) {
			this.show.apply(this, this._onDeck);
			this._onDeck = null;
		}
	}});
	dijit.showTooltip = function (_33c, _33d, _33e, rtl) {
		if (!dijit._masterTT) {
			dijit._masterTT = new dijit._MasterTooltip();
		}
		return dijit._masterTT.show(_33c, _33d, _33e, rtl);
	};
	dijit.hideTooltip = function (_33f) {
		if (!dijit._masterTT) {
			dijit._masterTT = new dijit._MasterTooltip();
		}
		return dijit._masterTT.hide(_33f);
	};
	dojo.declare("dijit.Tooltip", dijit._Widget, {label: "", showDelay: 400, connectId: [], position: [], _setConnectIdAttr: function (_340) {
		dojo.forEach(this._connections || [], function (_341) {
			dojo.forEach(_341, dojo.hitch(this, "disconnect"));
		}, this);
		var ary = dojo.isArrayLike(_340) ? _340 : (_340 ? [_340] : []);
		this._connections = dojo.map(ary, function (id) {
			var node = dojo.byId(id);
			return node ? [this.connect(node, "onmouseenter", "_onTargetMouseEnter"), this.connect(node, "onmouseleave", "_onTargetMouseLeave"), this.connect(node, "onfocus", "_onTargetFocus"), this.connect(node, "onblur", "_onTargetBlur")] : [];
		}, this);
		this._set("connectId", _340);
		this._connectIds = ary;
	}, addTarget: function (node) {
		var id = node.id || node;
		if (dojo.indexOf(this._connectIds, id) == -1) {
			this.set("connectId", this._connectIds.concat(id));
		}
	}, removeTarget: function (node) {
		var id = node.id || node, idx = dojo.indexOf(this._connectIds, id);
		if (idx >= 0) {
			this._connectIds.splice(idx, 1);
			this.set("connectId", this._connectIds);
		}
	}, buildRendering: function () {
		this.inherited(arguments);
		dojo.addClass(this.domNode, "dijitTooltipData");
	}, startup: function () {
		this.inherited(arguments);
		var ids = this.connectId;
		dojo.forEach(dojo.isArrayLike(ids) ? ids : [ids], this.addTarget, this);
	}, _onTargetMouseEnter: function (e) {
		this._onHover(e);
	}, _onTargetMouseLeave: function (e) {
		this._onUnHover(e);
	}, _onTargetFocus: function (e) {
		this._focus = true;
		this._onHover(e);
	}, _onTargetBlur: function (e) {
		this._focus = false;
		this._onUnHover(e);
	}, _onHover: function (e) {
		if (!this._showTimer) {
			var _342 = e.target;
			this._showTimer = setTimeout(dojo.hitch(this, function () {
				this.open(_342);
			}), this.showDelay);
		}
	}, _onUnHover: function (e) {
		if (this._focus) {
			return;
		}
		if (this._showTimer) {
			clearTimeout(this._showTimer);
			delete this._showTimer;
		}
		this.close();
	}, open: function (_343) {
		if (this._showTimer) {
			clearTimeout(this._showTimer);
			delete this._showTimer;
		}
		dijit.showTooltip(this.label || this.domNode.innerHTML, _343, this.position, !this.isLeftToRight());
		this._connectNode = _343;
		this.onShow(_343, this.position);
	}, close: function () {
		if (this._connectNode) {
			dijit.hideTooltip(this._connectNode);
			delete this._connectNode;
			this.onHide();
		}
		if (this._showTimer) {
			clearTimeout(this._showTimer);
			delete this._showTimer;
		}
	}, onShow: function (_344, _345) {
	}, onHide: function () {
	}, uninitialize: function () {
		this.close();
		this.inherited(arguments);
	}});
	dijit.Tooltip.defaultPosition = ["after", "before"];
}
if (!dojo._hasResource["dojox.charting.action2d.Tooltip"]) {
	dojo._hasResource["dojox.charting.action2d.Tooltip"] = true;
	dojo.provide("dojox.charting.action2d.Tooltip");
	(function () {
		var _346 = function (o) {
			var t = o.run && o.run.data && o.run.data[o.index];
			if (t && typeof t != "number" && (t.tooltip || t.text)) {
				return t.tooltip || t.text;
			}
			if (o.element == "candlestick") {
				return "<table cellpadding=\"1\" cellspacing=\"0\" border=\"0\" style=\"font-size:0.9em;\">" + "<tr><td>Open:</td><td align=\"right\"><strong>" + o.data.open + "</strong></td></tr>" + "<tr><td>High:</td><td align=\"right\"><strong>" + o.data.high + "</strong></td></tr>" + "<tr><td>Low:</td><td align=\"right\"><strong>" + o.data.low + "</strong></td></tr>" + "<tr><td>Close:</td><td align=\"right\"><strong>" + o.data.close + "</strong></td></tr>" + (o.data.mid !== undefined ? "<tr><td>Mid:</td><td align=\"right\"><strong>" + o.data.mid + "</strong></td></tr>" : "") + "</table>";
			}
			return o.element == "bar" ? o.x : o.y;
		};
		var df = dojox.lang.functional, m = dojox.gfx.matrix, pi4 = Math.PI / 4, pi2 = Math.PI / 2;
		dojo.declare("dojox.charting.action2d.Tooltip", dojox.charting.action2d.Base, {defaultParams: {text: _346}, optionalParams: {}, constructor: function (_347, plot, _348) {
			this.text = _348 && _348.text ? _348.text : _346;
			this.connect();
		}, process: function (o) {
			if (o.type === "onplotreset" || o.type === "onmouseout") {
				dijit.hideTooltip(this.aroundRect);
				this.aroundRect = null;
				if (o.type === "onplotreset") {
					delete this.angles;
				}
				return;
			}
			if (!o.shape || o.type !== "onmouseover") {
				return;
			}
			var _349 = {type: "rect"}, _34a = ["after", "before"];
			switch (o.element) {
				case "marker":
					_349.x = o.cx;
					_349.y = o.cy;
					_349.width = _349.height = 1;
					break;
				case "circle":
					_349.x = o.cx - o.cr;
					_349.y = o.cy - o.cr;
					_349.width = _349.height = 2 * o.cr;
					break;
				case "column":
					_34a = ["above", "below"];
				case "bar":
					_349 = dojo.clone(o.shape.getShape());
					break;
				case "candlestick":
					_349.x = o.x;
					_349.y = o.y;
					_349.width = o.width;
					_349.height = o.height;
					break;
				default:
					if (!this.angles) {
						if (typeof o.run.data[0] == "number") {
							this.angles = df.map(df.scanl(o.run.data, "+", 0), "* 2 * Math.PI / this", df.foldl(o.run.data, "+", 0));
						} else {
							this.angles = df.map(df.scanl(o.run.data, "a + b.y", 0), "* 2 * Math.PI / this", df.foldl(o.run.data, "a + b.y", 0));
						}
					}
					var _34b = m._degToRad(o.plot.opt.startAngle), _34c = (this.angles[o.index] + this.angles[o.index + 1]) / 2 + _34b;
					_349.x = o.cx + o.cr * Math.cos(_34c);
					_349.y = o.cy + o.cr * Math.sin(_34c);
					_349.width = _349.height = 1;
					if (_34c < pi4) {
					} else {
						if (_34c < pi2 + pi4) {
							_34a = ["below", "above"];
						} else {
							if (_34c < Math.PI + pi4) {
								_34a = ["before", "after"];
							} else {
								if (_34c < 2 * Math.PI - pi4) {
									_34a = ["above", "below"];
								}
							}
						}
					}
					break;
			}
			var lt = dojo.coords(this.chart.node, true);
			_349.x += lt.x;
			_349.y += lt.y;
			_349.x = Math.round(_349.x);
			_349.y = Math.round(_349.y);
			_349.width = Math.ceil(_349.width);
			_349.height = Math.ceil(_349.height);
			this.aroundRect = _349;
			var _34d = this.text(o);
			if (_34d) {
				dijit.showTooltip(_34d, this.aroundRect, _34a);
			}
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.scaler.common"]) {
	dojo._hasResource["dojox.charting.scaler.common"] = true;
	dojo.provide("dojox.charting.scaler.common");
	(function () {
		var eq = function (a, b) {
			return Math.abs(a - b) <= 0.000001 * (Math.abs(a) + Math.abs(b));
		};
		dojo.mixin(dojox.charting.scaler.common, {findString: function (val, text) {
			val = val.toLowerCase();
			for (var i = 0; i < text.length; ++i) {
				if (val == text[i]) {
					return true;
				}
			}
			return false;
		}, getNumericLabel: function (_34e, _34f, _350) {
			var def = "";
			if (dojo.number) {
				def = (_350.fixed ? dojo.number.format(_34e, {places: _34f < 0 ? -_34f : 0}) : dojo.number.format(_34e)) || "";
			} else {
				def = _350.fixed ? _34e.toFixed(_34f < 0 ? -_34f : 0) : _34e.toString();
			}
			if (_350.labelFunc) {
				var r = _350.labelFunc(def, _34e, _34f);
				if (r) {
					return r;
				}
			}
			if (_350.labels) {
				var l = _350.labels, lo = 0, hi = l.length;
				while (lo < hi) {
					var mid = Math.floor((lo + hi) / 2), val = l[mid].value;
					if (val < _34e) {
						lo = mid + 1;
					} else {
						hi = mid;
					}
				}
				if (lo < l.length && eq(l[lo].value, _34e)) {
					return l[lo].text;
				}
				--lo;
				if (lo >= 0 && lo < l.length && eq(l[lo].value, _34e)) {
					return l[lo].text;
				}
				lo += 2;
				if (lo < l.length && eq(l[lo].value, _34e)) {
					return l[lo].text;
				}
			}
			return def;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.scaler.linear"]) {
	dojo._hasResource["dojox.charting.scaler.linear"] = true;
	dojo.provide("dojox.charting.scaler.linear");
	(function () {
		var _351 = 3, dc = dojox.charting, dcs = dc.scaler, dcsc = dcs.common, _352 = dcsc.findString, _353 = dcsc.getNumericLabel;
		var _354 = function (min, max, _355, _356, _357, _358, span) {
			_355 = dojo.delegate(_355);
			if (!_356) {
				if (_355.fixUpper == "major") {
					_355.fixUpper = "minor";
				}
				if (_355.fixLower == "major") {
					_355.fixLower = "minor";
				}
			}
			if (!_357) {
				if (_355.fixUpper == "minor") {
					_355.fixUpper = "micro";
				}
				if (_355.fixLower == "minor") {
					_355.fixLower = "micro";
				}
			}
			if (!_358) {
				if (_355.fixUpper == "micro") {
					_355.fixUpper = "none";
				}
				if (_355.fixLower == "micro") {
					_355.fixLower = "none";
				}
			}
			var _359 = _352(_355.fixLower, ["major"]) ? Math.floor(_355.min / _356) * _356 : _352(_355.fixLower, ["minor"]) ? Math.floor(_355.min / _357) * _357 : _352(_355.fixLower, ["micro"]) ? Math.floor(_355.min / _358) * _358 : _355.min, _35a = _352(_355.fixUpper, ["major"]) ? Math.ceil(_355.max / _356) * _356 : _352(_355.fixUpper, ["minor"]) ? Math.ceil(_355.max / _357) * _357 : _352(_355.fixUpper, ["micro"]) ? Math.ceil(_355.max / _358) * _358 : _355.max;
			if (_355.useMin) {
				min = _359;
			}
			if (_355.useMax) {
				max = _35a;
			}
			var _35b = (!_356 || _355.useMin && _352(_355.fixLower, ["major"])) ? min : Math.ceil(min / _356) * _356, _35c = (!_357 || _355.useMin && _352(_355.fixLower, ["major", "minor"])) ? min : Math.ceil(min / _357) * _357, _35d = (!_358 || _355.useMin && _352(_355.fixLower, ["major", "minor", "micro"])) ? min : Math.ceil(min / _358) * _358, _35e = !_356 ? 0 : (_355.useMax && _352(_355.fixUpper, ["major"]) ? Math.round((max - _35b) / _356) : Math.floor((max - _35b) / _356)) + 1, _35f = !_357 ? 0 : (_355.useMax && _352(_355.fixUpper, ["major", "minor"]) ? Math.round((max - _35c) / _357) : Math.floor((max - _35c) / _357)) + 1, _360 = !_358 ? 0 : (_355.useMax && _352(_355.fixUpper, ["major", "minor", "micro"]) ? Math.round((max - _35d) / _358) : Math.floor((max - _35d) / _358)) + 1, _361 = _357 ? Math.round(_356 / _357) : 0, _362 = _358 ? Math.round(_357 / _358) : 0, _363 = _356 ? Math.floor(Math.log(_356) / Math.LN10) : 0, _364 = _357 ? Math.floor(Math.log(_357) / Math.LN10) : 0, _365 = span / (max - min);
			if (!isFinite(_365)) {
				_365 = 1;
			}
			return {bounds: {lower: _359, upper: _35a, from: min, to: max, scale: _365, span: span}, major: {tick: _356, start: _35b, count: _35e, prec: _363}, minor: {tick: _357, start: _35c, count: _35f, prec: _364}, micro: {tick: _358, start: _35d, count: _360, prec: 0}, minorPerMajor: _361, microPerMinor: _362, scaler: dcs.linear};
		};
		dojo.mixin(dojox.charting.scaler.linear, {buildScaler: function (min, max, span, _366) {
			var h = {fixUpper: "none", fixLower: "none", natural: false};
			if (_366) {
				if ("fixUpper" in _366) {
					h.fixUpper = String(_366.fixUpper);
				}
				if ("fixLower" in _366) {
					h.fixLower = String(_366.fixLower);
				}
				if ("natural" in _366) {
					h.natural = Boolean(_366.natural);
				}
			}
			if ("min" in _366) {
				min = _366.min;
			}
			if ("max" in _366) {
				max = _366.max;
			}
			if (_366.includeZero) {
				if (min > 0) {
					min = 0;
				}
				if (max < 0) {
					max = 0;
				}
			}
			h.min = min;
			h.useMin = true;
			h.max = max;
			h.useMax = true;
			if ("from" in _366) {
				min = _366.from;
				h.useMin = false;
			}
			if ("to" in _366) {
				max = _366.to;
				h.useMax = false;
			}
			if (max <= min) {
				return _354(min, max, h, 0, 0, 0, span);
			}
			var mag = Math.floor(Math.log(max - min) / Math.LN10), _367 = _366 && ("majorTickStep" in _366) ? _366.majorTickStep : Math.pow(10, mag), _368 = 0, _369 = 0, _36a;
			if (_366 && ("minorTickStep" in _366)) {
				_368 = _366.minorTickStep;
			} else {
				do {
					_368 = _367 / 10;
					if (!h.natural || _368 > 0.9) {
						_36a = _354(min, max, h, _367, _368, 0, span);
						if (_36a.bounds.scale * _36a.minor.tick > _351) {
							break;
						}
					}
					_368 = _367 / 5;
					if (!h.natural || _368 > 0.9) {
						_36a = _354(min, max, h, _367, _368, 0, span);
						if (_36a.bounds.scale * _36a.minor.tick > _351) {
							break;
						}
					}
					_368 = _367 / 2;
					if (!h.natural || _368 > 0.9) {
						_36a = _354(min, max, h, _367, _368, 0, span);
						if (_36a.bounds.scale * _36a.minor.tick > _351) {
							break;
						}
					}
					return _354(min, max, h, _367, 0, 0, span);
				} while (false);
			}
			if (_366 && ("microTickStep" in _366)) {
				_369 = _366.microTickStep;
				_36a = _354(min, max, h, _367, _368, _369, span);
			} else {
				do {
					_369 = _368 / 10;
					if (!h.natural || _369 > 0.9) {
						_36a = _354(min, max, h, _367, _368, _369, span);
						if (_36a.bounds.scale * _36a.micro.tick > _351) {
							break;
						}
					}
					_369 = _368 / 5;
					if (!h.natural || _369 > 0.9) {
						_36a = _354(min, max, h, _367, _368, _369, span);
						if (_36a.bounds.scale * _36a.micro.tick > _351) {
							break;
						}
					}
					_369 = _368 / 2;
					if (!h.natural || _369 > 0.9) {
						_36a = _354(min, max, h, _367, _368, _369, span);
						if (_36a.bounds.scale * _36a.micro.tick > _351) {
							break;
						}
					}
					_369 = 0;
				} while (false);
			}
			return _369 ? _36a : _354(min, max, h, _367, _368, 0, span);
		}, buildTicks: function (_36b, _36c) {
			var step, next, tick, _36d = _36b.major.start, _36e = _36b.minor.start, _36f = _36b.micro.start;
			if (_36c.microTicks && _36b.micro.tick) {
				step = _36b.micro.tick, next = _36f;
			} else {
				if (_36c.minorTicks && _36b.minor.tick) {
					step = _36b.minor.tick, next = _36e;
				} else {
					if (_36b.major.tick) {
						step = _36b.major.tick, next = _36d;
					} else {
						return null;
					}
				}
			}
			var _370 = 1 / _36b.bounds.scale;
			if (_36b.bounds.to <= _36b.bounds.from || isNaN(_370) || !isFinite(_370) || step <= 0 || isNaN(step) || !isFinite(step)) {
				return null;
			}
			var _371 = [], _372 = [], _373 = [];
			while (next <= _36b.bounds.to + _370) {
				if (Math.abs(_36d - next) < step / 2) {
					tick = {value: _36d};
					if (_36c.majorLabels) {
						tick.label = _353(_36d, _36b.major.prec, _36c);
					}
					_371.push(tick);
					_36d += _36b.major.tick;
					_36e += _36b.minor.tick;
					_36f += _36b.micro.tick;
				} else {
					if (Math.abs(_36e - next) < step / 2) {
						if (_36c.minorTicks) {
							tick = {value: _36e};
							if (_36c.minorLabels && (_36b.minMinorStep <= _36b.minor.tick * _36b.bounds.scale)) {
								tick.label = _353(_36e, _36b.minor.prec, _36c);
							}
							_372.push(tick);
						}
						_36e += _36b.minor.tick;
						_36f += _36b.micro.tick;
					} else {
						if (_36c.microTicks) {
							_373.push({value: _36f});
						}
						_36f += _36b.micro.tick;
					}
				}
				next += step;
			}
			return {major: _371, minor: _372, micro: _373};
		}, getTransformerFromModel: function (_374) {
			var _375 = _374.bounds.from, _376 = _374.bounds.scale;
			return function (x) {
				return (x - _375) * _376;
			};
		}, getTransformerFromPlot: function (_377) {
			var _378 = _377.bounds.from, _379 = _377.bounds.scale;
			return function (x) {
				return x / _379 + _378;
			};
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.axis2d.Base"]) {
	dojo._hasResource["dojox.charting.axis2d.Base"] = true;
	dojo.provide("dojox.charting.axis2d.Base");
	dojo.declare("dojox.charting.axis2d.Base", dojox.charting.Element, {constructor: function (_37a, _37b) {
		this.vertical = _37b && _37b.vertical;
	}, clear: function () {
		return this;
	}, initialized: function () {
		return false;
	}, calculate: function (min, max, span) {
		return this;
	}, getScaler: function () {
		return null;
	}, getTicks: function () {
		return null;
	}, getOffsets: function () {
		return {l: 0, r: 0, t: 0, b: 0};
	}, render: function (dim, _37c) {
		this.dirty = false;
		return this;
	}});
}
if (!dojo._hasResource["dojox.charting.axis2d.Invisible"]) {
	dojo._hasResource["dojox.charting.axis2d.Invisible"] = true;
	dojo.provide("dojox.charting.axis2d.Invisible");
	(function () {
		var dc = dojox.charting, df = dojox.lang.functional, du = dojox.lang.utils, g = dojox.gfx, lin = dc.scaler.linear, _37d = du.merge, _37e = 4, _37f = 45;
		dojo.declare("dojox.charting.axis2d.Invisible", dojox.charting.axis2d.Base, {defaultParams: {vertical: false, fixUpper: "none", fixLower: "none", natural: false, leftBottom: true, includeZero: false, fixed: true, majorLabels: true, minorTicks: true, minorLabels: true, microTicks: false, rotation: 0}, optionalParams: {min: 0, max: 1, from: 0, to: 1, majorTickStep: 4, minorTickStep: 2, microTickStep: 1, labels: [], labelFunc: null, maxLabelSize: 0, maxLabelCharCount: 0, trailingSymbol: null}, constructor: function (_380, _381) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _381);
			du.updateWithPattern(this.opt, _381, this.optionalParams);
		}, dependOnData: function () {
			return !("min" in this.opt) || !("max" in this.opt);
		}, clear: function () {
			delete this.scaler;
			delete this.ticks;
			this.dirty = true;
			return this;
		}, initialized: function () {
			return "scaler" in this && !(this.dirty && this.dependOnData());
		}, setWindow: function (_382, _383) {
			this.scale = _382;
			this.offset = _383;
			return this.clear();
		}, getWindowScale: function () {
			return "scale" in this ? this.scale : 1;
		}, getWindowOffset: function () {
			return "offset" in this ? this.offset : 0;
		}, _groupLabelWidth: function (_384, font, _385) {
			if (!_384.length) {
				return 0;
			}
			if (dojo.isObject(_384[0])) {
				_384 = df.map(_384, function (_386) {
					return _386.text;
				});
			}
			if (_385) {
				_384 = df.map(_384, function (_387) {
					return dojo.trim(_387).length == 0 ? "" : _387.substring(0, _385) + this.trailingSymbol;
				}, this);
			}
			var s = _384.join("<br>");
			return dojox.gfx._base._getTextBox(s, {font: font}).w || 0;
		}, calculate: function (min, max, span, _388) {
			if (this.initialized()) {
				return this;
			}
			var o = this.opt;
			this.labels = "labels" in o ? o.labels : _388;
			this.scaler = lin.buildScaler(min, max, span, o);
			var tsb = this.scaler.bounds;
			if ("scale" in this) {
				o.from = tsb.lower + this.offset;
				o.to = (tsb.upper - tsb.lower) / this.scale + o.from;
				if (!isFinite(o.from) || isNaN(o.from) || !isFinite(o.to) || isNaN(o.to) || o.to - o.from >= tsb.upper - tsb.lower) {
					delete o.from;
					delete o.to;
					delete this.scale;
					delete this.offset;
				} else {
					if (o.from < tsb.lower) {
						o.to += tsb.lower - o.from;
						o.from = tsb.lower;
					} else {
						if (o.to > tsb.upper) {
							o.from += tsb.upper - o.to;
							o.to = tsb.upper;
						}
					}
					this.offset = o.from - tsb.lower;
				}
				this.scaler = lin.buildScaler(min, max, span, o);
				tsb = this.scaler.bounds;
				if (this.scale == 1 && this.offset == 0) {
					delete this.scale;
					delete this.offset;
				}
			}
			var ta = this.chart.theme.axis, _389 = 0, _38a = o.rotation % 360, _38b = o.font || (ta.majorTick && ta.majorTick.font) || (ta.tick && ta.tick.font), size = _38b ? g.normalizedLength(g.splitFontString(_38b).size) : 0, cosr = Math.abs(Math.cos(_38a * Math.PI / 180)), sinr = Math.abs(Math.sin(_38a * Math.PI / 180));
			if (_38a < 0) {
				_38a += 360;
			}
			if (size) {
				if (this.vertical ? _38a != 0 && _38a != 180 : _38a != 90 && _38a != 270) {
					if (this.labels) {
						_389 = this._groupLabelWidth(this.labels, _38b, o.maxLabelCharCount);
					} else {
						var _38c = Math.ceil(Math.log(Math.max(Math.abs(tsb.from), Math.abs(tsb.to))) / Math.LN10), t = [];
						if (tsb.from < 0 || tsb.to < 0) {
							t.push("-");
						}
						t.push(dojo.string.rep("9", _38c));
						var _38d = Math.floor(Math.log(tsb.to - tsb.from) / Math.LN10);
						if (_38d > 0) {
							t.push(".");
							t.push(dojo.string.rep("9", _38d));
						}
						_389 = dojox.gfx._base._getTextBox(t.join(""), {font: _38b}).w;
					}
					_389 = o.maxLabelSize ? Math.min(o.maxLabelSize, _389) : _389;
				} else {
					_389 = size;
				}
				switch (_38a) {
					case 0:
					case 90:
					case 180:
					case 270:
						break;
					default:
						var gap1 = Math.sqrt(_389 * _389 + size * size), gap2 = this.vertical ? size * cosr + _389 * sinr : _389 * cosr + size * sinr;
						_389 = Math.min(gap1, gap2);
						break;
				}
			}
			this.scaler.minMinorStep = _389 + _37e;
			this.ticks = lin.buildTicks(this.scaler, o);
			return this;
		}, getScaler: function () {
			return this.scaler;
		}, getTicks: function () {
			return this.ticks;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.axis2d.Default"]) {
	dojo._hasResource["dojox.charting.axis2d.Default"] = true;
	dojo.provide("dojox.charting.axis2d.Default");
	(function () {
		var dc = dojox.charting, du = dojox.lang.utils, g = dojox.gfx, lin = dc.scaler.linear, _38e = 4, _38f = 45;
		dojo.declare("dojox.charting.axis2d.Default", dojox.charting.axis2d.Invisible, {defaultParams: {vertical: false, fixUpper: "none", fixLower: "none", natural: false, leftBottom: true, includeZero: false, fixed: true, majorLabels: true, minorTicks: true, minorLabels: true, microTicks: false, rotation: 0, htmlLabels: true}, optionalParams: {min: 0, max: 1, from: 0, to: 1, majorTickStep: 4, minorTickStep: 2, microTickStep: 1, labels: [], labelFunc: null, maxLabelSize: 0, maxLabelCharCount: 0, trailingSymbol: null, stroke: {}, majorTick: {}, minorTick: {}, microTick: {}, tick: {}, font: "", fontColor: "", title: "", titleGap: 0, titleFont: "", titleFontColor: "", titleOrientation: ""}, constructor: function (_390, _391) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _391);
			du.updateWithPattern(this.opt, _391, this.optionalParams);
		}, getOffsets: function () {
			var s = this.scaler, _392 = {l: 0, r: 0, t: 0, b: 0};
			if (!s) {
				return _392;
			}
			var o = this.opt, _393 = 0, a, b, c, d, gl = dc.scaler.common.getNumericLabel, _394 = 0, ma = s.major, mi = s.minor, ta = this.chart.theme.axis, _395 = o.font || (ta.majorTick && ta.majorTick.font) || (ta.tick && ta.tick.font), _396 = o.titleFont || (ta.tick && ta.tick.titleFont), _397 = (o.titleGap == 0) ? 0 : o.titleGap || (ta.tick && ta.tick.titleGap) || 15, _398 = this.chart.theme.getTick("major", o), _399 = this.chart.theme.getTick("minor", o), size = _395 ? g.normalizedLength(g.splitFontString(_395).size) : 0, _39a = _396 ? g.normalizedLength(g.splitFontString(_396).size) : 0, _39b = o.rotation % 360, _39c = o.leftBottom, cosr = Math.abs(Math.cos(_39b * Math.PI / 180)), sinr = Math.abs(Math.sin(_39b * Math.PI / 180));
			this.trailingSymbol = (o.trailingSymbol === undefined || o.trailingSymbol === null) ? this.trailingSymbol : o.trailingSymbol;
			if (_39b < 0) {
				_39b += 360;
			}
			if (size) {
				if (this.labels) {
					_393 = this._groupLabelWidth(this.labels, _395, o.maxLabelCharCount);
				} else {
					_393 = this._groupLabelWidth([gl(ma.start, ma.prec, o), gl(ma.start + ma.count * ma.tick, ma.prec, o), gl(mi.start, mi.prec, o), gl(mi.start + mi.count * mi.tick, mi.prec, o)], _395, o.maxLabelCharCount);
				}
				_393 = o.maxLabelSize ? Math.min(o.maxLabelSize, _393) : _393;
				if (this.vertical) {
					var side = _39c ? "l" : "r";
					switch (_39b) {
						case 0:
						case 180:
							_392[side] = _393;
							_392.t = _392.b = size / 2;
							break;
						case 90:
						case 270:
							_392[side] = size;
							_392.t = _392.b = _393 / 2;
							break;
						default:
							if (_39b <= _38f || (180 < _39b && _39b <= (180 + _38f))) {
								_392[side] = size * sinr / 2 + _393 * cosr;
								_392[_39c ? "t" : "b"] = size * cosr / 2 + _393 * sinr;
								_392[_39c ? "b" : "t"] = size * cosr / 2;
							} else {
								if (_39b > (360 - _38f) || (180 > _39b && _39b > (180 - _38f))) {
									_392[side] = size * sinr / 2 + _393 * cosr;
									_392[_39c ? "b" : "t"] = size * cosr / 2 + _393 * sinr;
									_392[_39c ? "t" : "b"] = size * cosr / 2;
								} else {
									if (_39b < 90 || (180 < _39b && _39b < 270)) {
										_392[side] = size * sinr + _393 * cosr;
										_392[_39c ? "t" : "b"] = size * cosr + _393 * sinr;
									} else {
										_392[side] = size * sinr + _393 * cosr;
										_392[_39c ? "b" : "t"] = size * cosr + _393 * sinr;
									}
								}
							}
							break;
					}
					_392[side] += _38e + Math.max(_398.length, _399.length) + (o.title ? (_39a + _397) : 0);
				} else {
					var side = _39c ? "b" : "t";
					switch (_39b) {
						case 0:
						case 180:
							_392[side] = size;
							_392.l = _392.r = _393 / 2;
							break;
						case 90:
						case 270:
							_392[side] = _393;
							_392.l = _392.r = size / 2;
							break;
						default:
							if ((90 - _38f) <= _39b && _39b <= 90 || (270 - _38f) <= _39b && _39b <= 270) {
								_392[side] = size * sinr / 2 + _393 * cosr;
								_392[_39c ? "r" : "l"] = size * cosr / 2 + _393 * sinr;
								_392[_39c ? "l" : "r"] = size * cosr / 2;
							} else {
								if (90 <= _39b && _39b <= (90 + _38f) || 270 <= _39b && _39b <= (270 + _38f)) {
									_392[side] = size * sinr / 2 + _393 * cosr;
									_392[_39c ? "l" : "r"] = size * cosr / 2 + _393 * sinr;
									_392[_39c ? "r" : "l"] = size * cosr / 2;
								} else {
									if (_39b < _38f || (180 < _39b && _39b < (180 - _38f))) {
										_392[side] = size * sinr + _393 * cosr;
										_392[_39c ? "r" : "l"] = size * cosr + _393 * sinr;
									} else {
										_392[side] = size * sinr + _393 * cosr;
										_392[_39c ? "l" : "r"] = size * cosr + _393 * sinr;
									}
								}
							}
							break;
					}
					_392[side] += _38e + Math.max(_398.length, _399.length) + (o.title ? (_39a + _397) : 0);
				}
			}
			if (_393) {
				this._cachedLabelWidth = _393;
			}
			return _392;
		}, render: function (dim, _39d) {
			if (!this.dirty) {
				return this;
			}
			var o = this.opt, ta = this.chart.theme.axis, _39e = o.leftBottom, _39f = o.rotation % 360, _3a0, stop, _3a1, _3a2 = 0, _3a3, _3a4, _3a5, _3a6, _3a7, _3a8, _3a9 = o.font || (ta.majorTick && ta.majorTick.font) || (ta.tick && ta.tick.font), _3aa = o.titleFont || (ta.tick && ta.tick.titleFont), _3ab = o.fontColor || (ta.majorTick && ta.majorTick.fontColor) || (ta.tick && ta.tick.fontColor) || "black", _3ac = o.titleFontColor || (ta.tick && ta.tick.titleFontColor) || "black", _3ad = (o.titleGap == 0) ? 0 : o.titleGap || (ta.tick && ta.tick.titleGap) || 15, _3ae = o.titleOrientation || (ta.tick && ta.tick.titleOrientation) || "axis", _3af = this.chart.theme.getTick("major", o), _3b0 = this.chart.theme.getTick("minor", o), _3b1 = this.chart.theme.getTick("micro", o), _3b2 = Math.max(_3af.length, _3b0.length, _3b1.length), _3b3 = "stroke" in o ? o.stroke : ta.stroke, size = _3a9 ? g.normalizedLength(g.splitFontString(_3a9).size) : 0, cosr = Math.abs(Math.cos(_39f * Math.PI / 180)), sinr = Math.abs(Math.sin(_39f * Math.PI / 180)), _3b4 = _3aa ? g.normalizedLength(g.splitFontString(_3aa).size) : 0;
			if (_39f < 0) {
				_39f += 360;
			}
			if (this.vertical) {
				_3a0 = {y: dim.height - _39d.b};
				stop = {y: _39d.t};
				_3a1 = {y: (dim.height - _39d.b + _39d.t) / 2};
				_3a3 = size * sinr + (this._cachedLabelWidth || 0) * cosr + _38e + Math.max(_3af.length, _3b0.length) + _3b4 + _3ad;
				_3a4 = {x: 0, y: -1};
				_3a7 = {x: 0, y: 0};
				_3a5 = {x: 1, y: 0};
				_3a6 = {x: _38e, y: 0};
				switch (_39f) {
					case 0:
						_3a8 = "end";
						_3a7.y = size * 0.4;
						break;
					case 90:
						_3a8 = "middle";
						_3a7.x = -size;
						break;
					case 180:
						_3a8 = "start";
						_3a7.y = -size * 0.4;
						break;
					case 270:
						_3a8 = "middle";
						break;
					default:
						if (_39f < _38f) {
							_3a8 = "end";
							_3a7.y = size * 0.4;
						} else {
							if (_39f < 90) {
								_3a8 = "end";
								_3a7.y = size * 0.4;
							} else {
								if (_39f < (180 - _38f)) {
									_3a8 = "start";
								} else {
									if (_39f < (180 + _38f)) {
										_3a8 = "start";
										_3a7.y = -size * 0.4;
									} else {
										if (_39f < 270) {
											_3a8 = "start";
											_3a7.x = _39e ? 0 : size * 0.4;
										} else {
											if (_39f < (360 - _38f)) {
												_3a8 = "end";
												_3a7.x = _39e ? 0 : size * 0.4;
											} else {
												_3a8 = "end";
												_3a7.y = size * 0.4;
											}
										}
									}
								}
							}
						}
				}
				if (_39e) {
					_3a0.x = stop.x = _39d.l;
					_3a2 = (_3ae && _3ae == "away") ? 90 : 270;
					_3a1.x = _39d.l - _3a3 + (_3a2 == 270 ? _3b4 : 0);
					_3a5.x = -1;
					_3a6.x = -_3a6.x;
				} else {
					_3a0.x = stop.x = dim.width - _39d.r;
					_3a2 = (_3ae && _3ae == "axis") ? 90 : 270;
					_3a1.x = dim.width - _39d.r + _3a3 - (_3a2 == 270 ? 0 : _3b4);
					switch (_3a8) {
						case "start":
							_3a8 = "end";
							break;
						case "end":
							_3a8 = "start";
							break;
						case "middle":
							_3a7.x += size;
							break;
					}
				}
			} else {
				_3a0 = {x: _39d.l};
				stop = {x: dim.width - _39d.r};
				_3a1 = {x: (dim.width - _39d.r + _39d.l) / 2};
				_3a3 = size * cosr + (this._cachedLabelWidth || 0) * sinr + _38e + Math.max(_3af.length, _3b0.length) + _3b4 + _3ad;
				_3a4 = {x: 1, y: 0};
				_3a7 = {x: 0, y: 0};
				_3a5 = {x: 0, y: 1};
				_3a6 = {x: 0, y: _38e};
				switch (_39f) {
					case 0:
						_3a8 = "middle";
						_3a7.y = size;
						break;
					case 90:
						_3a8 = "start";
						_3a7.x = -size * 0.4;
						break;
					case 180:
						_3a8 = "middle";
						break;
					case 270:
						_3a8 = "end";
						_3a7.x = size * 0.4;
						break;
					default:
						if (_39f < (90 - _38f)) {
							_3a8 = "start";
							_3a7.y = _39e ? size : 0;
						} else {
							if (_39f < (90 + _38f)) {
								_3a8 = "start";
								_3a7.x = -size * 0.4;
							} else {
								if (_39f < 180) {
									_3a8 = "start";
									_3a7.y = _39e ? 0 : -size;
								} else {
									if (_39f < (270 - _38f)) {
										_3a8 = "end";
										_3a7.y = _39e ? 0 : -size;
									} else {
										if (_39f < (270 + _38f)) {
											_3a8 = "end";
											_3a7.y = _39e ? size * 0.4 : 0;
										} else {
											_3a8 = "end";
											_3a7.y = _39e ? size : 0;
										}
									}
								}
							}
						}
				}
				if (_39e) {
					_3a0.y = stop.y = dim.height - _39d.b;
					_3a2 = (_3ae && _3ae == "axis") ? 180 : 0;
					_3a1.y = dim.height - _39d.b + _3a3 - (_3a2 ? _3b4 : 0);
				} else {
					_3a0.y = stop.y = _39d.t;
					_3a2 = (_3ae && _3ae == "away") ? 180 : 0;
					_3a1.y = _39d.t - _3a3 + (_3a2 ? 0 : _3b4);
					_3a5.y = -1;
					_3a6.y = -_3a6.y;
					switch (_3a8) {
						case "start":
							_3a8 = "end";
							break;
						case "end":
							_3a8 = "start";
							break;
						case "middle":
							_3a7.y -= size;
							break;
					}
				}
			}
			this.cleanGroup();
			try {
				var s = this.group, c = this.scaler, t = this.ticks, _3b5, f = lin.getTransformerFromModel(this.scaler), _3b6 = !_3a2 && !_39f && this.opt.htmlLabels && !dojo.isIE && !dojo.isOpera ? "html" : "gfx", dx = _3a5.x * _3af.length, dy = _3a5.y * _3af.length;
				s.createLine({x1: _3a0.x, y1: _3a0.y, x2: stop.x, y2: stop.y}).setStroke(_3b3);
				if (o.title) {
					var _3b7 = dc.axis2d.common.createText[_3b6](this.chart, s, _3a1.x, _3a1.y, "middle", o.title, _3aa, _3ac);
					if (_3b6 == "html") {
						this.htmlElements.push(_3b7);
					} else {
						_3b7.setTransform(g.matrix.rotategAt(_3a2, _3a1.x, _3a1.y));
					}
				}
				dojo.forEach(t.major, function (tick) {
					var _3b8 = f(tick.value), elem, x = _3a0.x + _3a4.x * _3b8, y = _3a0.y + _3a4.y * _3b8;
					s.createLine({x1: x, y1: y, x2: x + dx, y2: y + dy}).setStroke(_3af);
					if (tick.label) {
						var _3b9 = o.maxLabelCharCount ? this.getTextWithLimitCharCount(tick.label, _3a9, o.maxLabelCharCount) : {text: tick.label, truncated: false};
						_3b9 = o.maxLabelSize ? this.getTextWithLimitLength(_3b9.text, _3a9, o.maxLabelSize, _3b9.truncated) : _3b9;
						elem = dc.axis2d.common.createText[_3b6](this.chart, s, x + dx + _3a6.x + (_39f ? 0 : _3a7.x), y + dy + _3a6.y + (_39f ? 0 : _3a7.y), _3a8, _3b9.text, _3a9, _3ab);
						_3b9.truncated && this.labelTooltip(elem, this.chart, tick.label, _3b9.text, _3a9, _3b6);
						if (_3b6 == "html") {
							this.htmlElements.push(elem);
						} else {
							if (_39f) {
								elem.setTransform([
									{dx: _3a7.x, dy: _3a7.y},
									g.matrix.rotategAt(_39f, x + dx + _3a6.x, y + dy + _3a6.y)
								]);
							}
						}
					}
				}, this);
				dx = _3a5.x * _3b0.length;
				dy = _3a5.y * _3b0.length;
				_3b5 = c.minMinorStep <= c.minor.tick * c.bounds.scale;
				dojo.forEach(t.minor, function (tick) {
					var _3ba = f(tick.value), elem, x = _3a0.x + _3a4.x * _3ba, y = _3a0.y + _3a4.y * _3ba;
					s.createLine({x1: x, y1: y, x2: x + dx, y2: y + dy}).setStroke(_3b0);
					if (_3b5 && tick.label) {
						var _3bb = o.maxLabelCharCount ? this.getTextWithLimitCharCount(tick.label, _3a9, o.maxLabelCharCount) : {text: tick.label, truncated: false};
						_3bb = o.maxLabelSize ? this.getTextWithLimitLength(_3bb.text, _3a9, o.maxLabelSize, _3bb.truncated) : _3bb;
						elem = dc.axis2d.common.createText[_3b6](this.chart, s, x + dx + _3a6.x + (_39f ? 0 : _3a7.x), y + dy + _3a6.y + (_39f ? 0 : _3a7.y), _3a8, _3bb.text, _3a9, _3ab);
						_3bb.truncated && this.labelTooltip(elem, this.chart, tick.label, _3bb.text, _3a9, _3b6);
						if (_3b6 == "html") {
							this.htmlElements.push(elem);
						} else {
							if (_39f) {
								elem.setTransform([
									{dx: _3a7.x, dy: _3a7.y},
									g.matrix.rotategAt(_39f, x + dx + _3a6.x, y + dy + _3a6.y)
								]);
							}
						}
					}
				}, this);
				dx = _3a5.x * _3b1.length;
				dy = _3a5.y * _3b1.length;
				dojo.forEach(t.micro, function (tick) {
					var _3bc = f(tick.value), elem, x = _3a0.x + _3a4.x * _3bc, y = _3a0.y + _3a4.y * _3bc;
					s.createLine({x1: x, y1: y, x2: x + dx, y2: y + dy}).setStroke(_3b1);
				}, this);
			} catch (e) {
			}
			this.dirty = false;
			return this;
		}, labelTooltip: function (elem, _3bd, _3be, _3bf, font, _3c0) {
			if (!dijit || !dijit.Tooltip) {
				return;
			}
			var _3c1 = {type: "rect"}, _3c2 = ["above", "below"], _3c3 = dojox.gfx._base._getTextBox(_3bf, {font: font}).w || 0;
			fontHeight = font ? g.normalizedLength(g.splitFontString(font).size) : 0;
			if (_3c0 == "html") {
				dojo.mixin(_3c1, dojo.coords(elem.firstChild, true));
				_3c1.width = Math.ceil(_3c3);
				_3c1.height = Math.ceil(fontHeight);
				this._events.push({shape: dojo, handle: dojo.connect(elem.firstChild, "onmouseover", this, function (e) {
					dijit.showTooltip(_3be, _3c1, _3c2);
				})});
				this._events.push({shape: dojo, handle: dojo.connect(elem.firstChild, "onmouseout", this, function (e) {
					dijit.hideTooltip(_3c1);
				})});
			} else {
				var shp = elem.getShape(), lt = dojo.coords(_3bd.node, true);
				_3c1 = dojo.mixin(_3c1, {x: shp.x - _3c3 / 2, y: shp.y});
				_3c1.x += lt.x;
				_3c1.y += lt.y;
				_3c1.x = Math.round(_3c1.x);
				_3c1.y = Math.round(_3c1.y);
				_3c1.width = Math.ceil(_3c3);
				_3c1.height = Math.ceil(fontHeight);
				this._events.push({shape: elem, handle: elem.connect("onmouseenter", this, function (e) {
					dijit.showTooltip(_3be, _3c1, _3c2);
				})});
				this._events.push({shape: elem, handle: elem.connect("onmouseleave", this, function (e) {
					dijit.hideTooltip(_3c1);
				})});
			}
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.common"]) {
	dojo._hasResource["dojox.charting.plot2d.common"] = true;
	dojo.provide("dojox.charting.plot2d.common");
	(function () {
		var df = dojox.lang.functional, dc = dojox.charting.plot2d.common;
		dojo.mixin(dojox.charting.plot2d.common, {makeStroke: function (_3c4) {
			if (!_3c4) {
				return _3c4;
			}
			if (typeof _3c4 == "string" || _3c4 instanceof dojo.Color) {
				_3c4 = {color: _3c4};
			}
			return dojox.gfx.makeParameters(dojox.gfx.defaultStroke, _3c4);
		}, augmentColor: function (_3c5, _3c6) {
			var t = new dojo.Color(_3c5), c = new dojo.Color(_3c6);
			c.a = t.a;
			return c;
		}, augmentStroke: function (_3c7, _3c8) {
			var s = dc.makeStroke(_3c7);
			if (s) {
				s.color = dc.augmentColor(s.color, _3c8);
			}
			return s;
		}, augmentFill: function (fill, _3c9) {
			var fc, c = new dojo.Color(_3c9);
			if (typeof fill == "string" || fill instanceof dojo.Color) {
				return dc.augmentColor(fill, _3c9);
			}
			return fill;
		}, defaultStats: {vmin: Number.POSITIVE_INFINITY, vmax: Number.NEGATIVE_INFINITY, hmin: Number.POSITIVE_INFINITY, hmax: Number.NEGATIVE_INFINITY}, collectSimpleStats: function (_3ca) {
			var _3cb = dojo.delegate(dc.defaultStats);
			for (var i = 0; i < _3ca.length; ++i) {
				var run = _3ca[i];
				for (var j = 0; j < run.data.length; j++) {
					if (run.data[j] !== null) {
						if (typeof run.data[j] == "number") {
							var _3cc = _3cb.vmin, _3cd = _3cb.vmax;
							if (!("ymin" in run) || !("ymax" in run)) {
								dojo.forEach(run.data, function (val, i) {
									if (val !== null) {
										var x = i + 1, y = val;
										if (isNaN(y)) {
											y = 0;
										}
										_3cb.hmin = Math.min(_3cb.hmin, x);
										_3cb.hmax = Math.max(_3cb.hmax, x);
										_3cb.vmin = Math.min(_3cb.vmin, y);
										_3cb.vmax = Math.max(_3cb.vmax, y);
									}
								});
							}
							if ("ymin" in run) {
								_3cb.vmin = Math.min(_3cc, run.ymin);
							}
							if ("ymax" in run) {
								_3cb.vmax = Math.max(_3cd, run.ymax);
							}
						} else {
							var _3ce = _3cb.hmin, _3cf = _3cb.hmax, _3cc = _3cb.vmin, _3cd = _3cb.vmax;
							if (!("xmin" in run) || !("xmax" in run) || !("ymin" in run) || !("ymax" in run)) {
								dojo.forEach(run.data, function (val, i) {
									if (val !== null) {
										var x = "x" in val ? val.x : i + 1, y = val.y;
										if (isNaN(x)) {
											x = 0;
										}
										if (isNaN(y)) {
											y = 0;
										}
										_3cb.hmin = Math.min(_3cb.hmin, x);
										_3cb.hmax = Math.max(_3cb.hmax, x);
										_3cb.vmin = Math.min(_3cb.vmin, y);
										_3cb.vmax = Math.max(_3cb.vmax, y);
									}
								});
							}
							if ("xmin" in run) {
								_3cb.hmin = Math.min(_3ce, run.xmin);
							}
							if ("xmax" in run) {
								_3cb.hmax = Math.max(_3cf, run.xmax);
							}
							if ("ymin" in run) {
								_3cb.vmin = Math.min(_3cc, run.ymin);
							}
							if ("ymax" in run) {
								_3cb.vmax = Math.max(_3cd, run.ymax);
							}
						}
						break;
					}
				}
			}
			return _3cb;
		}, calculateBarSize: function (_3d0, opt, _3d1) {
			if (!_3d1) {
				_3d1 = 1;
			}
			var gap = opt.gap, size = (_3d0 - 2 * gap) / _3d1;
			if ("minBarSize" in opt) {
				size = Math.max(size, opt.minBarSize);
			}
			if ("maxBarSize" in opt) {
				size = Math.min(size, opt.maxBarSize);
			}
			size = Math.max(size, 1);
			gap = (_3d0 - size * _3d1) / 2;
			return {size: size, gap: gap};
		}, collectStackedStats: function (_3d2) {
			var _3d3 = dojo.clone(dc.defaultStats);
			if (_3d2.length) {
				_3d3.hmin = Math.min(_3d3.hmin, 1);
				_3d3.hmax = df.foldl(_3d2, "seed, run -> Math.max(seed, run.data.length)", _3d3.hmax);
				for (var i = 0; i < _3d3.hmax; ++i) {
					var v = _3d2[0].data[i];
					v = v && (typeof v == "number" ? v : v.y);
					if (isNaN(v)) {
						v = 0;
					}
					_3d3.vmin = Math.min(_3d3.vmin, v);
					for (var j = 1; j < _3d2.length; ++j) {
						var t = _3d2[j].data[i];
						t = t && (typeof t == "number" ? t : t.y);
						if (isNaN(t)) {
							t = 0;
						}
						v += t;
					}
					_3d3.vmax = Math.max(_3d3.vmax, v);
				}
			}
			return _3d3;
		}, curve: function (a, _3d4) {
			var arr = a.slice(0);
			if (_3d4 == "x") {
				arr[arr.length] = arr[0];
			}
			var p = dojo.map(arr, function (item, i) {
				if (i == 0) {
					return "M" + item.x + "," + item.y;
				}
				if (!isNaN(_3d4)) {
					var dx = item.x - arr[i - 1].x, dy = arr[i - 1].y;
					return "C" + (item.x - (_3d4 - 1) * (dx / _3d4)) + "," + dy + " " + (item.x - (dx / _3d4)) + "," + item.y + " " + item.x + "," + item.y;
				} else {
					if (_3d4 == "X" || _3d4 == "x" || _3d4 == "S") {
						var p0, p1 = arr[i - 1], p2 = arr[i], p3;
						var bz1x, bz1y, bz2x, bz2y;
						var f = 1 / 6;
						if (i == 1) {
							if (_3d4 == "x") {
								p0 = arr[arr.length - 2];
							} else {
								p0 = p1;
							}
							f = 1 / 3;
						} else {
							p0 = arr[i - 2];
						}
						if (i == (arr.length - 1)) {
							if (_3d4 == "x") {
								p3 = arr[1];
							} else {
								p3 = p2;
							}
							f = 1 / 3;
						} else {
							p3 = arr[i + 1];
						}
						var p1p2 = Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
						var p0p2 = Math.sqrt((p2.x - p0.x) * (p2.x - p0.x) + (p2.y - p0.y) * (p2.y - p0.y));
						var p1p3 = Math.sqrt((p3.x - p1.x) * (p3.x - p1.x) + (p3.y - p1.y) * (p3.y - p1.y));
						var _3d5 = p0p2 * f;
						var _3d6 = p1p3 * f;
						if (_3d5 > p1p2 / 2 && _3d6 > p1p2 / 2) {
							_3d5 = p1p2 / 2;
							_3d6 = p1p2 / 2;
						} else {
							if (_3d5 > p1p2 / 2) {
								_3d5 = p1p2 / 2;
								_3d6 = p1p2 / 2 * p1p3 / p0p2;
							} else {
								if (_3d6 > p1p2 / 2) {
									_3d6 = p1p2 / 2;
									_3d5 = p1p2 / 2 * p0p2 / p1p3;
								}
							}
						}
						if (_3d4 == "S") {
							if (p0 == p1) {
								_3d5 = 0;
							}
							if (p2 == p3) {
								_3d6 = 0;
							}
						}
						bz1x = p1.x + _3d5 * (p2.x - p0.x) / p0p2;
						bz1y = p1.y + _3d5 * (p2.y - p0.y) / p0p2;
						bz2x = p2.x - _3d6 * (p3.x - p1.x) / p1p3;
						bz2y = p2.y - _3d6 * (p3.y - p1.y) / p1p3;
					}
				}
				return "C" + (bz1x + "," + bz1y + " " + bz2x + "," + bz2y + " " + p2.x + "," + p2.y);
			});
			return p.join(" ");
		}, getLabel: function (_3d7, _3d8, _3d9) {
			if (dojo.number) {
				return (_3d8 ? dojo.number.format(_3d7, {places: _3d9}) : dojo.number.format(_3d7)) || "";
			}
			return _3d8 ? _3d7.toFixed(_3d9) : _3d7.toString();
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.scaler.primitive"]) {
	dojo._hasResource["dojox.charting.scaler.primitive"] = true;
	dojo.provide("dojox.charting.scaler.primitive");
	dojox.charting.scaler.primitive = {buildScaler: function (min, max, span, _3da) {
		if (min == max) {
			min -= 0.5;
			max += 0.5;
		}
		return {bounds: {lower: min, upper: max, from: min, to: max, scale: span / (max - min), span: span}, scaler: dojox.charting.scaler.primitive};
	}, buildTicks: function (_3db, _3dc) {
		return {major: [], minor: [], micro: []};
	}, getTransformerFromModel: function (_3dd) {
		var _3de = _3dd.bounds.from, _3df = _3dd.bounds.scale;
		return function (x) {
			return (x - _3de) * _3df;
		};
	}, getTransformerFromPlot: function (_3e0) {
		var _3e1 = _3e0.bounds.from, _3e2 = _3e0.bounds.scale;
		return function (x) {
			return x / _3e2 + _3e1;
		};
	}};
}
if (!dojo._hasResource["dojox.charting.plot2d._PlotEvents"]) {
	dojo._hasResource["dojox.charting.plot2d._PlotEvents"] = true;
	dojo.provide("dojox.charting.plot2d._PlotEvents");
	dojo.declare("dojox.charting.plot2d._PlotEvents", null, {constructor: function () {
		this._shapeEvents = [];
		this._eventSeries = {};
	}, destroy: function () {
		this.resetEvents();
		this.inherited(arguments);
	}, plotEvent: function (o) {
	}, raiseEvent: function (o) {
		this.plotEvent(o);
		var t = dojo.delegate(o);
		t.originalEvent = o.type;
		t.originalPlot = o.plot;
		t.type = "onindirect";
		dojo.forEach(this.chart.stack, function (plot) {
			if (plot !== this && plot.plotEvent) {
				t.plot = plot;
				plot.plotEvent(t);
			}
		}, this);
	}, connect: function (_3e3, _3e4) {
		this.dirty = true;
		return dojo.connect(this, "plotEvent", _3e3, _3e4);
	}, events: function () {
		var ls = this.plotEvent._listeners;
		if (!ls || !ls.length) {
			return false;
		}
		for (var i in ls) {
			if (!(i in Array.prototype)) {
				return true;
			}
		}
		return false;
	}, resetEvents: function () {
		if (this._shapeEvents.length) {
			dojo.forEach(this._shapeEvents, function (item) {
				item.shape.disconnect(item.handle);
			});
			this._shapeEvents = [];
		}
		this.raiseEvent({type: "onplotreset", plot: this});
	}, _connectSingleEvent: function (o, _3e5) {
		this._shapeEvents.push({shape: o.eventMask, handle: o.eventMask.connect(_3e5, this, function (e) {
			o.type = _3e5;
			o.event = e;
			this.raiseEvent(o);
			o.event = null;
		})});
	}, _connectEvents: function (o) {
		if (o) {
			o.chart = this.chart;
			o.plot = this;
			o.hAxis = this.hAxis || null;
			o.vAxis = this.vAxis || null;
			o.eventMask = o.eventMask || o.shape;
			this._connectSingleEvent(o, "onmouseover");
			this._connectSingleEvent(o, "onmouseout");
			this._connectSingleEvent(o, "onclick");
		}
	}, _reconnectEvents: function (_3e6) {
		var a = this._eventSeries[_3e6];
		if (a) {
			dojo.forEach(a, this._connectEvents, this);
		}
	}, fireEvent: function (_3e7, _3e8, _3e9, _3ea) {
		var s = this._eventSeries[_3e7];
		if (s && s.length && _3e9 < s.length) {
			var o = s[_3e9];
			o.type = _3e8;
			o.event = _3ea || null;
			this.raiseEvent(o);
			o.event = null;
		}
	}});
}
if (!dojo._hasResource["dojox.charting.plot2d.Base"]) {
	dojo._hasResource["dojox.charting.plot2d.Base"] = true;
	dojo.provide("dojox.charting.plot2d.Base");
	dojo.declare("dojox.charting.plot2d.Base", [dojox.charting.Element, dojox.charting.plot2d._PlotEvents], {constructor: function (_3eb, _3ec) {
		this.zoom = null, this.zoomQueue = [];
		this.lastWindow = {vscale: 1, hscale: 1, xoffset: 0, yoffset: 0};
	}, clear: function () {
		this.series = [];
		this._hAxis = null;
		this._vAxis = null;
		this.dirty = true;
		return this;
	}, setAxis: function (axis) {
		if (axis) {
			this[axis.vertical ? "_vAxis" : "_hAxis"] = axis;
		}
		return this;
	}, addSeries: function (run) {
		this.series.push(run);
		return this;
	}, getSeriesStats: function () {
		return dojox.charting.plot2d.common.collectSimpleStats(this.series);
	}, calculateAxes: function (dim) {
		this.initializeScalers(dim, this.getSeriesStats());
		return this;
	}, isDirty: function () {
		return this.dirty || this._hAxis && this._hAxis.dirty || this._vAxis && this._vAxis.dirty;
	}, isDataDirty: function () {
		return dojo.some(this.series, function (item) {
			return item.dirty;
		});
	}, performZoom: function (dim, _3ed) {
		var vs = this._vAxis.scale || 1, hs = this._hAxis.scale || 1, _3ee = dim.height - _3ed.b, _3ef = this._hScaler.bounds, _3f0 = (_3ef.from - _3ef.lower) * _3ef.scale, _3f1 = this._vScaler.bounds, _3f2 = (_3f1.from - _3f1.lower) * _3f1.scale;
		rVScale = vs / this.lastWindow.vscale, rHScale = hs / this.lastWindow.hscale, rXOffset = (this.lastWindow.xoffset - _3f0) / ((this.lastWindow.hscale == 1) ? hs : this.lastWindow.hscale), rYOffset = (_3f2 - this.lastWindow.yoffset) / ((this.lastWindow.vscale == 1) ? vs : this.lastWindow.vscale), shape = this.group, anim = dojox.gfx.fx.animateTransform(dojo.delegate({shape: shape, duration: 1200, transform: [
			{name: "translate", start: [0, 0], end: [_3ed.l * (1 - rHScale), _3ee * (1 - rVScale)]},
			{name: "scale", start: [1, 1], end: [rHScale, rVScale]},
			{name: "original"},
			{name: "translate", start: [0, 0], end: [rXOffset, rYOffset]}
		]}, this.zoom));
		dojo.mixin(this.lastWindow, {vscale: vs, hscale: hs, xoffset: _3f0, yoffset: _3f2});
		this.zoomQueue.push(anim);
		dojo.connect(anim, "onEnd", this, function () {
			this.zoom = null;
			this.zoomQueue.shift();
			if (this.zoomQueue.length > 0) {
				this.zoomQueue[0].play();
			}
		});
		if (this.zoomQueue.length == 1) {
			this.zoomQueue[0].play();
		}
		return this;
	}, render: function (dim, _3f3) {
		return this;
	}, getRequiredColors: function () {
		return this.series.length;
	}, initializeScalers: function (dim, _3f4) {
		if (this._hAxis) {
			if (!this._hAxis.initialized()) {
				this._hAxis.calculate(_3f4.hmin, _3f4.hmax, dim.width);
			}
			this._hScaler = this._hAxis.getScaler();
		} else {
			this._hScaler = dojox.charting.scaler.primitive.buildScaler(_3f4.hmin, _3f4.hmax, dim.width);
		}
		if (this._vAxis) {
			if (!this._vAxis.initialized()) {
				this._vAxis.calculate(_3f4.vmin, _3f4.vmax, dim.height);
			}
			this._vScaler = this._vAxis.getScaler();
		} else {
			this._vScaler = dojox.charting.scaler.primitive.buildScaler(_3f4.vmin, _3f4.vmax, dim.height);
		}
		return this;
	}});
}
if (!dojo._hasResource["dojox.charting.plot2d.Default"]) {
	dojo._hasResource["dojox.charting.plot2d.Default"] = true;
	dojo.provide("dojox.charting.plot2d.Default");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, _3f5 = df.lambda("item.purgeGroup()");
		var _3f6 = 1200;
		dojo.declare("dojox.charting.plot2d.Default", dojox.charting.plot2d.Base, {defaultParams: {hAxis: "x", vAxis: "y", lines: true, areas: false, markers: false, tension: "", animate: false}, optionalParams: {stroke: {}, outline: {}, shadow: {}, fill: {}, font: "", fontColor: "", markerStroke: {}, markerOutline: {}, markerShadow: {}, markerFill: {}, markerFont: "", markerFontColor: ""}, constructor: function (_3f7, _3f8) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _3f8);
			du.updateWithPattern(this.opt, _3f8, this.optionalParams);
			this.series = [];
			this.hAxis = this.opt.hAxis;
			this.vAxis = this.opt.vAxis;
			this.animate = this.opt.animate;
		}, render: function (dim, _3f9) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _3f9);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _3f5);
				this._eventSeries = {};
				this.cleanGroup();
				this.group.setTransform(null);
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, _3fa, _3fb, _3fc, _3fd = this.events();
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				if (!run.data.length) {
					run.dirty = false;
					t.skip();
					continue;
				}
				var _3fe = t.next(this.opt.areas ? "area" : "line", [this.opt, run], true), s = run.group, _3ff = [], _400 = [], rseg = null, _401, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _402 = this._eventSeries[run.name] = new Array(run.data.length);
				for (var j = 0; j < run.data.length; j++) {
					if (run.data[j] != null) {
						if (!rseg) {
							rseg = [];
							_400.push(j);
							_3ff.push(rseg);
						}
						rseg.push(run.data[j]);
					} else {
						rseg = null;
					}
				}
				for (var seg = 0; seg < _3ff.length; seg++) {
					if (typeof _3ff[seg][0] == "number") {
						_401 = dojo.map(_3ff[seg], function (v, i) {
							return {x: ht(i + _400[seg] + 1) + _3f9.l, y: dim.height - _3f9.b - vt(v)};
						}, this);
					} else {
						_401 = dojo.map(_3ff[seg], function (v, i) {
							return {x: ht(v.x) + _3f9.l, y: dim.height - _3f9.b - vt(v.y)};
						}, this);
					}
					var _403 = this.opt.tension ? dc.curve(_401, this.opt.tension) : "";
					if (this.opt.areas && _401.length > 1) {
						var fill = _3fe.series.fill;
						var _404 = dojo.clone(_401);
						if (this.opt.tension) {
							var _405 = "L" + _404[_404.length - 1].x + "," + (dim.height - _3f9.b) + " L" + _404[0].x + "," + (dim.height - _3f9.b) + " L" + _404[0].x + "," + _404[0].y;
							run.dyn.fill = s.createPath(_403 + " " + _405).setFill(fill).getFill();
						} else {
							_404.push({x: _401[_401.length - 1].x, y: dim.height - _3f9.b});
							_404.push({x: _401[0].x, y: dim.height - _3f9.b});
							_404.push(_401[0]);
							run.dyn.fill = s.createPolyline(_404).setFill(fill).getFill();
						}
					}
					if (this.opt.lines || this.opt.markers) {
						_3fa = _3fe.series.stroke;
						if (_3fe.series.outline) {
							_3fb = run.dyn.outline = dc.makeStroke(_3fe.series.outline);
							_3fb.width = 2 * _3fb.width + _3fa.width;
						}
					}
					if (this.opt.markers) {
						run.dyn.marker = _3fe.symbol;
					}
					var _406 = null, _407 = null, _408 = null;
					if (_3fa && _3fe.series.shadow && _401.length > 1) {
						var _409 = _3fe.series.shadow, _40a = dojo.map(_401, function (c) {
							return {x: c.x + _409.dx, y: c.y + _409.dy};
						});
						if (this.opt.lines) {
							if (this.opt.tension) {
								run.dyn.shadow = s.createPath(dc.curve(_40a, this.opt.tension)).setStroke(_409).getStroke();
							} else {
								run.dyn.shadow = s.createPolyline(_40a).setStroke(_409).getStroke();
							}
						}
						if (this.opt.markers && _3fe.marker.shadow) {
							_409 = _3fe.marker.shadow;
							_408 = dojo.map(_40a, function (c) {
								return s.createPath("M" + c.x + " " + c.y + " " + _3fe.symbol).setStroke(_409).setFill(_409.color);
							}, this);
						}
					}
					if (this.opt.lines && _401.length > 1) {
						if (_3fb) {
							if (this.opt.tension) {
								run.dyn.outline = s.createPath(_403).setStroke(_3fb).getStroke();
							} else {
								run.dyn.outline = s.createPolyline(_401).setStroke(_3fb).getStroke();
							}
						}
						if (this.opt.tension) {
							run.dyn.stroke = s.createPath(_403).setStroke(_3fa).getStroke();
						} else {
							run.dyn.stroke = s.createPolyline(_401).setStroke(_3fa).getStroke();
						}
					}
					if (this.opt.markers) {
						_406 = new Array(_401.length);
						_407 = new Array(_401.length);
						_3fb = null;
						if (_3fe.marker.outline) {
							_3fb = dc.makeStroke(_3fe.marker.outline);
							_3fb.width = 2 * _3fb.width + (_3fe.marker.stroke ? _3fe.marker.stroke.width : 0);
						}
						dojo.forEach(_401, function (c, i) {
							var path = "M" + c.x + " " + c.y + " " + _3fe.symbol;
							if (_3fb) {
								_407[i] = s.createPath(path).setStroke(_3fb);
							}
							_406[i] = s.createPath(path).setStroke(_3fe.marker.stroke).setFill(_3fe.marker.fill);
						}, this);
						run.dyn.markerFill = _3fe.marker.fill;
						run.dyn.markerStroke = _3fe.marker.stroke;
						if (_3fd) {
							dojo.forEach(_406, function (s, i) {
								var o = {element: "marker", index: i + _400[seg], run: run, shape: s, outline: _407[i] || null, shadow: _408 && _408[i] || null, cx: _401[i].x, cy: _401[i].y};
								if (typeof _3ff[seg][0] == "number") {
									o.x = i + _400[seg] + 1;
									o.y = _3ff[seg][i];
								} else {
									o.x = _3ff[seg][i].x;
									o.y = _3ff[seg][i].y;
								}
								this._connectEvents(o);
								_402[i + _400[seg]] = o;
							}, this);
						} else {
							delete this._eventSeries[run.name];
						}
					}
				}
				run.dirty = false;
			}
			if (this.animate) {
				var _40b = this.group;
				dojox.gfx.fx.animateTransform(dojo.delegate({shape: _40b, duration: _3f6, transform: [
					{name: "translate", start: [0, dim.height - _3f9.b], end: [0, 0]},
					{name: "scale", start: [1, 0], end: [1, 1]},
					{name: "original"}
				]}, this.animate)).play();
			}
			this.dirty = false;
			return this;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.Lines"]) {
	dojo._hasResource["dojox.charting.plot2d.Lines"] = true;
	dojo.provide("dojox.charting.plot2d.Lines");
	dojo.declare("dojox.charting.plot2d.Lines", dojox.charting.plot2d.Default, {constructor: function () {
		this.opt.lines = true;
	}});
}
if (!dojo._hasResource["dojox.charting.plot2d.Areas"]) {
	dojo._hasResource["dojox.charting.plot2d.Areas"] = true;
	dojo.provide("dojox.charting.plot2d.Areas");
	dojo.declare("dojox.charting.plot2d.Areas", dojox.charting.plot2d.Default, {constructor: function () {
		this.opt.lines = true;
		this.opt.areas = true;
	}});
}
if (!dojo._hasResource["dojox.charting.plot2d.Markers"]) {
	dojo._hasResource["dojox.charting.plot2d.Markers"] = true;
	dojo.provide("dojox.charting.plot2d.Markers");
	dojo.declare("dojox.charting.plot2d.Markers", dojox.charting.plot2d.Default, {constructor: function () {
		this.opt.markers = true;
	}});
}
if (!dojo._hasResource["dojox.charting.plot2d.MarkersOnly"]) {
	dojo._hasResource["dojox.charting.plot2d.MarkersOnly"] = true;
	dojo.provide("dojox.charting.plot2d.MarkersOnly");
	dojo.declare("dojox.charting.plot2d.MarkersOnly", dojox.charting.plot2d.Default, {constructor: function () {
		this.opt.lines = false;
		this.opt.markers = true;
	}});
}
if (!dojo._hasResource["dojox.charting.plot2d.Scatter"]) {
	dojo._hasResource["dojox.charting.plot2d.Scatter"] = true;
	dojo.provide("dojox.charting.plot2d.Scatter");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, _40c = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.Scatter", dojox.charting.plot2d.Base, {defaultParams: {hAxis: "x", vAxis: "y", shadows: null, animate: null}, optionalParams: {markerStroke: {}, markerOutline: {}, markerShadow: {}, markerFill: {}, markerFont: "", markerFontColor: ""}, constructor: function (_40d, _40e) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _40e);
			du.updateWithPattern(this.opt, _40e, this.optionalParams);
			this.series = [];
			this.hAxis = this.opt.hAxis;
			this.vAxis = this.opt.vAxis;
			this.animate = this.opt.animate;
		}, render: function (dim, _40f) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _40f);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _40c);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, _410 = this.events();
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				if (!run.data.length) {
					run.dirty = false;
					t.skip();
					continue;
				}
				var _411 = t.next("marker", [this.opt, run]), s = run.group, _412, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler);
				if (typeof run.data[0] == "number") {
					_412 = dojo.map(run.data, function (v, i) {
						return {x: ht(i + 1) + _40f.l, y: dim.height - _40f.b - vt(v)};
					}, this);
				} else {
					_412 = dojo.map(run.data, function (v, i) {
						return {x: ht(v.x) + _40f.l, y: dim.height - _40f.b - vt(v.y)};
					}, this);
				}
				var _413 = new Array(_412.length), _414 = new Array(_412.length), _415 = new Array(_412.length);
				dojo.forEach(_412, function (c, i) {
					var _416 = typeof run.data[i] == "number" ? t.post(_411, "marker") : t.addMixin(_411, "marker", run.data[i], true), path = "M" + c.x + " " + c.y + " " + _416.symbol;
					if (_416.marker.shadow) {
						_413[i] = s.createPath("M" + (c.x + _416.marker.shadow.dx) + " " + (c.y + _416.marker.shadow.dy) + " " + _416.symbol).setStroke(_416.marker.shadow).setFill(_416.marker.shadow.color);
						if (this.animate) {
							this._animateScatter(_413[i], dim.height - _40f.b);
						}
					}
					if (_416.marker.outline) {
						var _417 = dc.makeStroke(_416.marker.outline);
						_417.width = 2 * _417.width + _416.marker.stroke.width;
						_415[i] = s.createPath(path).setStroke(_417);
						if (this.animate) {
							this._animateScatter(_415[i], dim.height - _40f.b);
						}
					}
					var _418 = dc.makeStroke(_416.marker.stroke), fill = this._plotFill(_416.marker.fill, dim, _40f);
					if (fill && (fill.type === "linear" || fill.type == "radial")) {
						var _419 = dojox.gfx.gradutils.getColor(fill, {x: c.x, y: c.y});
						if (_418) {
							_418.color = _419;
						}
						_414[i] = s.createPath(path).setStroke(_418).setFill(_419);
					} else {
						_414[i] = s.createPath(path).setStroke(_418).setFill(fill);
					}
					if (this.animate) {
						this._animateScatter(_414[i], dim.height - _40f.b);
					}
				}, this);
				if (_414.length) {
					run.dyn.stroke = _414[_414.length - 1].getStroke();
					run.dyn.fill = _414[_414.length - 1].getFill();
				}
				if (_410) {
					var _41a = new Array(_414.length);
					dojo.forEach(_414, function (s, i) {
						var o = {element: "marker", index: i, run: run, shape: s, outline: _415 && _415[i] || null, shadow: _413 && _413[i] || null, cx: _412[i].x, cy: _412[i].y};
						if (typeof run.data[0] == "number") {
							o.x = i + 1;
							o.y = run.data[i];
						} else {
							o.x = run.data[i].x;
							o.y = run.data[i].y;
						}
						this._connectEvents(o);
						_41a[i] = o;
					}, this);
					this._eventSeries[run.name] = _41a;
				} else {
					delete this._eventSeries[run.name];
				}
				run.dirty = false;
			}
			this.dirty = false;
			return this;
		}, _animateScatter: function (_41b, _41c) {
			dojox.gfx.fx.animateTransform(dojo.delegate({shape: _41b, duration: 1200, transform: [
				{name: "translate", start: [0, _41c], end: [0, 0]},
				{name: "scale", start: [0, 0], end: [1, 1]},
				{name: "original"}
			]}, this.animate)).play();
		}});
	})();
}
if (!dojo._hasResource["dojox.lang.functional.sequence"]) {
	dojo._hasResource["dojox.lang.functional.sequence"] = true;
	dojo.provide("dojox.lang.functional.sequence");
	(function () {
		var d = dojo, df = dojox.lang.functional;
		d.mixin(df, {repeat: function (n, f, z, o) {
			o = o || d.global;
			f = df.lambda(f);
			var t = new Array(n), i = 1;
			t[0] = z;
			for (; i < n; t[i] = z = f.call(o, z), ++i) {
			}
			return t;
		}, until: function (pr, f, z, o) {
			o = o || d.global;
			f = df.lambda(f);
			pr = df.lambda(pr);
			var t = [];
			for (; !pr.call(o, z); t.push(z), z = f.call(o, z)) {
			}
			return t;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.Stacked"]) {
	dojo._hasResource["dojox.charting.plot2d.Stacked"] = true;
	dojo.provide("dojox.charting.plot2d.Stacked");
	(function () {
		var df = dojox.lang.functional, dc = dojox.charting.plot2d.common, _41d = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.Stacked", dojox.charting.plot2d.Default, {getSeriesStats: function () {
			var _41e = dc.collectStackedStats(this.series);
			this._maxRunLength = _41e.hmax;
			return _41e;
		}, render: function (dim, _41f) {
			if (this._maxRunLength <= 0) {
				return this;
			}
			var acc = df.repeat(this._maxRunLength, "-> 0", 0);
			for (var i = 0; i < this.series.length; ++i) {
				var run = this.series[i];
				for (var j = 0; j < run.data.length; ++j) {
					var v = run.data[j];
					if (v !== null) {
						if (isNaN(v)) {
							v = 0;
						}
						acc[j] += v;
					}
				}
			}
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _41f);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _41d);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, _420 = this.events(), ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler);
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _421 = t.next(this.opt.areas ? "area" : "line", [this.opt, run], true), s = run.group, _422, _423 = dojo.map(acc, function (v, i) {
					return {x: ht(i + 1) + _41f.l, y: dim.height - _41f.b - vt(v)};
				}, this);
				var _424 = this.opt.tension ? dc.curve(_423, this.opt.tension) : "";
				if (this.opt.areas) {
					var _425 = dojo.clone(_423);
					if (this.opt.tension) {
						var p = dc.curve(_425, this.opt.tension);
						p += " L" + _423[_423.length - 1].x + "," + (dim.height - _41f.b) + " L" + _423[0].x + "," + (dim.height - _41f.b) + " L" + _423[0].x + "," + _423[0].y;
						run.dyn.fill = s.createPath(p).setFill(_421.series.fill).getFill();
					} else {
						_425.push({x: _423[_423.length - 1].x, y: dim.height - _41f.b});
						_425.push({x: _423[0].x, y: dim.height - _41f.b});
						_425.push(_423[0]);
						run.dyn.fill = s.createPolyline(_425).setFill(_421.series.fill).getFill();
					}
				}
				if (this.opt.lines || this.opt.markers) {
					if (_421.series.outline) {
						_422 = dc.makeStroke(_421.series.outline);
						_422.width = 2 * _422.width + _421.series.stroke.width;
					}
				}
				if (this.opt.markers) {
					run.dyn.marker = _421.symbol;
				}
				var _426, _427, _428;
				if (_421.series.shadow && _421.series.stroke) {
					var _429 = _421.series.shadow, _42a = dojo.map(_423, function (c) {
						return {x: c.x + _429.dx, y: c.y + _429.dy};
					});
					if (this.opt.lines) {
						if (this.opt.tension) {
							run.dyn.shadow = s.createPath(dc.curve(_42a, this.opt.tension)).setStroke(_429).getStroke();
						} else {
							run.dyn.shadow = s.createPolyline(_42a).setStroke(_429).getStroke();
						}
					}
					if (this.opt.markers) {
						_429 = _421.marker.shadow;
						_428 = dojo.map(_42a, function (c) {
							return s.createPath("M" + c.x + " " + c.y + " " + _421.symbol).setStroke(_429).setFill(_429.color);
						}, this);
					}
				}
				if (this.opt.lines) {
					if (_422) {
						if (this.opt.tension) {
							run.dyn.outline = s.createPath(_424).setStroke(_422).getStroke();
						} else {
							run.dyn.outline = s.createPolyline(_423).setStroke(_422).getStroke();
						}
					}
					if (this.opt.tension) {
						run.dyn.stroke = s.createPath(_424).setStroke(_421.series.stroke).getStroke();
					} else {
						run.dyn.stroke = s.createPolyline(_423).setStroke(_421.series.stroke).getStroke();
					}
				}
				if (this.opt.markers) {
					_426 = new Array(_423.length);
					_427 = new Array(_423.length);
					_422 = null;
					if (_421.marker.outline) {
						_422 = dc.makeStroke(_421.marker.outline);
						_422.width = 2 * _422.width + (_421.marker.stroke ? _421.marker.stroke.width : 0);
					}
					dojo.forEach(_423, function (c, i) {
						var path = "M" + c.x + " " + c.y + " " + _421.symbol;
						if (_422) {
							_427[i] = s.createPath(path).setStroke(_422);
						}
						_426[i] = s.createPath(path).setStroke(_421.marker.stroke).setFill(_421.marker.fill);
					}, this);
					if (_420) {
						var _42b = new Array(_426.length);
						dojo.forEach(_426, function (s, i) {
							var o = {element: "marker", index: i, run: run, shape: s, outline: _427[i] || null, shadow: _428 && _428[i] || null, cx: _423[i].x, cy: _423[i].y, x: i + 1, y: run.data[i]};
							this._connectEvents(o);
							_42b[i] = o;
						}, this);
						this._eventSeries[run.name] = _42b;
					} else {
						delete this._eventSeries[run.name];
					}
				}
				run.dirty = false;
				for (var j = 0; j < run.data.length; ++j) {
					var v = run.data[j];
					if (v !== null) {
						if (isNaN(v)) {
							v = 0;
						}
						acc[j] -= v;
					}
				}
			}
			this.dirty = false;
			return this;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.StackedLines"]) {
	dojo._hasResource["dojox.charting.plot2d.StackedLines"] = true;
	dojo.provide("dojox.charting.plot2d.StackedLines");
	dojo.declare("dojox.charting.plot2d.StackedLines", dojox.charting.plot2d.Stacked, {constructor: function () {
		this.opt.lines = true;
	}});
}
if (!dojo._hasResource["dojox.charting.plot2d.StackedAreas"]) {
	dojo._hasResource["dojox.charting.plot2d.StackedAreas"] = true;
	dojo.provide("dojox.charting.plot2d.StackedAreas");
	dojo.declare("dojox.charting.plot2d.StackedAreas", dojox.charting.plot2d.Stacked, {constructor: function () {
		this.opt.lines = true;
		this.opt.areas = true;
	}});
}
if (!dojo._hasResource["dojox.charting.plot2d.Columns"]) {
	dojo._hasResource["dojox.charting.plot2d.Columns"] = true;
	dojo.provide("dojox.charting.plot2d.Columns");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, _42c = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.Columns", dojox.charting.plot2d.Base, {defaultParams: {hAxis: "x", vAxis: "y", gap: 0, animate: null}, optionalParams: {minBarSize: 1, maxBarSize: 1, stroke: {}, outline: {}, shadow: {}, fill: {}, font: "", fontColor: ""}, constructor: function (_42d, _42e) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _42e);
			du.updateWithPattern(this.opt, _42e, this.optionalParams);
			this.series = [];
			this.hAxis = this.opt.hAxis;
			this.vAxis = this.opt.vAxis;
			this.animate = this.opt.animate;
		}, getSeriesStats: function () {
			var _42f = dc.collectSimpleStats(this.series);
			_42f.hmin -= 0.5;
			_42f.hmax += 0.5;
			return _42f;
		}, render: function (dim, _430) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _430);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _42c);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, f, gap, _431, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _432 = Math.max(0, this._vScaler.bounds.lower), _433 = vt(_432), _434 = this.events();
			f = dc.calculateBarSize(this._hScaler.bounds.scale, this.opt);
			gap = f.gap;
			_431 = f.size;
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _435 = t.next("column", [this.opt, run]), s = run.group, _436 = new Array(run.data.length);
				for (var j = 0; j < run.data.length; ++j) {
					var _437 = run.data[j];
					if (_437 !== null) {
						var v = typeof _437 == "number" ? _437 : _437.y, vv = vt(v), _438 = vv - _433, h = Math.abs(_438), _439 = typeof _437 != "number" ? t.addMixin(_435, "column", _437, true) : t.post(_435, "column");
						if (_431 >= 1 && h >= 1) {
							var rect = {x: _430.l + ht(j + 0.5) + gap, y: dim.height - _430.b - (v > _432 ? vv : _433), width: _431, height: h};
							var _43a = this._plotFill(_439.series.fill, dim, _430);
							_43a = this._shapeFill(_43a, rect);
							var _43b = s.createRect(rect).setFill(_43a).setStroke(_439.series.stroke);
							run.dyn.fill = _43b.getFill();
							run.dyn.stroke = _43b.getStroke();
							if (_434) {
								var o = {element: "column", index: j, run: run, shape: _43b, x: j + 0.5, y: v};
								this._connectEvents(o);
								_436[j] = o;
							}
							if (this.animate) {
								this._animateColumn(_43b, dim.height - _430.b - _433, h);
							}
						}
					}
				}
				this._eventSeries[run.name] = _436;
				run.dirty = false;
			}
			this.dirty = false;
			return this;
		}, _animateColumn: function (_43c, _43d, _43e) {
			dojox.gfx.fx.animateTransform(dojo.delegate({shape: _43c, duration: 1200, transform: [
				{name: "translate", start: [0, _43d - (_43d / _43e)], end: [0, 0]},
				{name: "scale", start: [1, 1 / _43e], end: [1, 1]},
				{name: "original"}
			]}, this.animate)).play();
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.StackedColumns"]) {
	dojo._hasResource["dojox.charting.plot2d.StackedColumns"] = true;
	dojo.provide("dojox.charting.plot2d.StackedColumns");
	(function () {
		var df = dojox.lang.functional, dc = dojox.charting.plot2d.common, _43f = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.StackedColumns", dojox.charting.plot2d.Columns, {getSeriesStats: function () {
			var _440 = dc.collectStackedStats(this.series);
			this._maxRunLength = _440.hmax;
			_440.hmin -= 0.5;
			_440.hmax += 0.5;
			return _440;
		}, render: function (dim, _441) {
			if (this._maxRunLength <= 0) {
				return this;
			}
			var acc = df.repeat(this._maxRunLength, "-> 0", 0);
			for (var i = 0; i < this.series.length; ++i) {
				var run = this.series[i];
				for (var j = 0; j < run.data.length; ++j) {
					var _442 = run.data[j];
					if (_442 !== null) {
						var v = typeof _442 == "number" ? _442 : _442.y;
						if (isNaN(v)) {
							v = 0;
						}
						acc[j] += v;
					}
				}
			}
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _441);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _43f);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, f, gap, _443, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _444 = this.events();
			f = dc.calculateBarSize(this._hScaler.bounds.scale, this.opt);
			gap = f.gap;
			_443 = f.size;
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _445 = t.next("column", [this.opt, run]), s = run.group, _446 = new Array(acc.length);
				for (var j = 0; j < acc.length; ++j) {
					var _442 = run.data[j];
					if (_442 !== null) {
						var v = acc[j], _447 = vt(v), _448 = typeof _442 != "number" ? t.addMixin(_445, "column", _442, true) : t.post(_445, "column");
						if (_443 >= 1 && _447 >= 1) {
							var rect = {x: _441.l + ht(j + 0.5) + gap, y: dim.height - _441.b - vt(v), width: _443, height: _447};
							var _449 = this._plotFill(_448.series.fill, dim, _441);
							_449 = this._shapeFill(_449, rect);
							var _44a = s.createRect(rect).setFill(_449).setStroke(_448.series.stroke);
							run.dyn.fill = _44a.getFill();
							run.dyn.stroke = _44a.getStroke();
							if (_444) {
								var o = {element: "column", index: j, run: run, shape: _44a, x: j + 0.5, y: v};
								this._connectEvents(o);
								_446[j] = o;
							}
							if (this.animate) {
								this._animateColumn(_44a, dim.height - _441.b, _447);
							}
						}
					}
				}
				this._eventSeries[run.name] = _446;
				run.dirty = false;
				for (var j = 0; j < run.data.length; ++j) {
					var _442 = run.data[j];
					if (_442 !== null) {
						var v = typeof _442 == "number" ? _442 : _442.y;
						if (isNaN(v)) {
							v = 0;
						}
						acc[j] -= v;
					}
				}
			}
			this.dirty = false;
			return this;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.ClusteredColumns"]) {
	dojo._hasResource["dojox.charting.plot2d.ClusteredColumns"] = true;
	dojo.provide("dojox.charting.plot2d.ClusteredColumns");
	(function () {
		var df = dojox.lang.functional, dc = dojox.charting.plot2d.common, _44b = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.ClusteredColumns", dojox.charting.plot2d.Columns, {render: function (dim, _44c) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _44c);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _44b);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, f, gap, _44d, _44e, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _44f = Math.max(0, this._vScaler.bounds.lower), _450 = vt(_44f), _451 = this.events();
			f = dc.calculateBarSize(this._hScaler.bounds.scale, this.opt, this.series.length);
			gap = f.gap;
			_44d = _44e = f.size;
			for (var i = 0; i < this.series.length; ++i) {
				var run = this.series[i], _452 = _44e * i;
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _453 = t.next("column", [this.opt, run]), s = run.group, _454 = new Array(run.data.length);
				for (var j = 0; j < run.data.length; ++j) {
					var _455 = run.data[j];
					if (_455 !== null) {
						var v = typeof _455 == "number" ? _455 : _455.y, vv = vt(v), _456 = vv - _450, h = Math.abs(_456), _457 = typeof _455 != "number" ? t.addMixin(_453, "column", _455, true) : t.post(_453, "column");
						if (_44d >= 1 && h >= 1) {
							var rect = {x: _44c.l + ht(j + 0.5) + gap + _452, y: dim.height - _44c.b - (v > _44f ? vv : _450), width: _44d, height: h};
							var _458 = this._plotFill(_457.series.fill, dim, _44c);
							_458 = this._shapeFill(_458, rect);
							var _459 = s.createRect(rect).setFill(_458).setStroke(_457.series.stroke);
							run.dyn.fill = _459.getFill();
							run.dyn.stroke = _459.getStroke();
							if (_451) {
								var o = {element: "column", index: j, run: run, shape: _459, x: j + 0.5, y: v};
								this._connectEvents(o);
								_454[j] = o;
							}
							if (this.animate) {
								this._animateColumn(_459, dim.height - _44c.b - _450, h);
							}
						}
					}
				}
				this._eventSeries[run.name] = _454;
				run.dirty = false;
			}
			this.dirty = false;
			return this;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.Bars"]) {
	dojo._hasResource["dojox.charting.plot2d.Bars"] = true;
	dojo.provide("dojox.charting.plot2d.Bars");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, _45a = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.Bars", dojox.charting.plot2d.Base, {defaultParams: {hAxis: "x", vAxis: "y", gap: 0, animate: null}, optionalParams: {minBarSize: 1, maxBarSize: 1, stroke: {}, outline: {}, shadow: {}, fill: {}, font: "", fontColor: ""}, constructor: function (_45b, _45c) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _45c);
			du.updateWithPattern(this.opt, _45c, this.optionalParams);
			this.series = [];
			this.hAxis = this.opt.hAxis;
			this.vAxis = this.opt.vAxis;
			this.animate = this.opt.animate;
		}, getSeriesStats: function () {
			var _45d = dc.collectSimpleStats(this.series), t;
			_45d.hmin -= 0.5;
			_45d.hmax += 0.5;
			t = _45d.hmin, _45d.hmin = _45d.vmin, _45d.vmin = t;
			t = _45d.hmax, _45d.hmax = _45d.vmax, _45d.vmax = t;
			return _45d;
		}, render: function (dim, _45e) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _45e);
			}
			this.dirty = this.isDirty();
			this.resetEvents();
			if (this.dirty) {
				dojo.forEach(this.series, _45a);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, f, gap, _45f, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _460 = Math.max(0, this._hScaler.bounds.lower), _461 = ht(_460), _462 = this.events();
			f = dc.calculateBarSize(this._vScaler.bounds.scale, this.opt);
			gap = f.gap;
			_45f = f.size;
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _463 = t.next("bar", [this.opt, run]), s = run.group, _464 = new Array(run.data.length);
				for (var j = 0; j < run.data.length; ++j) {
					var _465 = run.data[j];
					if (_465 !== null) {
						var v = typeof _465 == "number" ? _465 : _465.y, hv = ht(v), _466 = hv - _461, w = Math.abs(_466), _467 = typeof _465 != "number" ? t.addMixin(_463, "bar", _465, true) : t.post(_463, "bar");
						if (w >= 1 && _45f >= 1) {
							var rect = {x: _45e.l + (v < _460 ? hv : _461), y: dim.height - _45e.b - vt(j + 1.5) + gap, width: w, height: _45f};
							var _468 = this._plotFill(_467.series.fill, dim, _45e);
							_468 = this._shapeFill(_468, rect);
							var _469 = s.createRect(rect).setFill(_468).setStroke(_467.series.stroke);
							run.dyn.fill = _469.getFill();
							run.dyn.stroke = _469.getStroke();
							if (_462) {
								var o = {element: "bar", index: j, run: run, shape: _469, x: v, y: j + 1.5};
								this._connectEvents(o);
								_464[j] = o;
							}
							if (this.animate) {
								this._animateBar(_469, _45e.l + _461, -w);
							}
						}
					}
				}
				this._eventSeries[run.name] = _464;
				run.dirty = false;
			}
			this.dirty = false;
			return this;
		}, _animateBar: function (_46a, _46b, _46c) {
			dojox.gfx.fx.animateTransform(dojo.delegate({shape: _46a, duration: 1200, transform: [
				{name: "translate", start: [_46b - (_46b / _46c), 0], end: [0, 0]},
				{name: "scale", start: [1 / _46c, 1], end: [1, 1]},
				{name: "original"}
			]}, this.animate)).play();
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.StackedBars"]) {
	dojo._hasResource["dojox.charting.plot2d.StackedBars"] = true;
	dojo.provide("dojox.charting.plot2d.StackedBars");
	(function () {
		var df = dojox.lang.functional, dc = dojox.charting.plot2d.common, _46d = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.StackedBars", dojox.charting.plot2d.Bars, {getSeriesStats: function () {
			var _46e = dc.collectStackedStats(this.series), t;
			this._maxRunLength = _46e.hmax;
			_46e.hmin -= 0.5;
			_46e.hmax += 0.5;
			t = _46e.hmin, _46e.hmin = _46e.vmin, _46e.vmin = t;
			t = _46e.hmax, _46e.hmax = _46e.vmax, _46e.vmax = t;
			return _46e;
		}, render: function (dim, _46f) {
			if (this._maxRunLength <= 0) {
				return this;
			}
			var acc = df.repeat(this._maxRunLength, "-> 0", 0);
			for (var i = 0; i < this.series.length; ++i) {
				var run = this.series[i];
				for (var j = 0; j < run.data.length; ++j) {
					var _470 = run.data[j];
					if (_470 !== null) {
						var v = typeof _470 == "number" ? _470 : _470.y;
						if (isNaN(v)) {
							v = 0;
						}
						acc[j] += v;
					}
				}
			}
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _46f);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _46d);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, f, gap, _471, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _472 = this.events();
			f = dc.calculateBarSize(this._vScaler.bounds.scale, this.opt);
			gap = f.gap;
			_471 = f.size;
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _473 = t.next("bar", [this.opt, run]), s = run.group, _474 = new Array(acc.length);
				for (var j = 0; j < acc.length; ++j) {
					var _470 = run.data[j];
					if (_470 !== null) {
						var v = acc[j], _475 = ht(v), _476 = typeof _470 != "number" ? t.addMixin(_473, "bar", _470, true) : t.post(_473, "bar");
						if (_475 >= 1 && _471 >= 1) {
							var rect = {x: _46f.l, y: dim.height - _46f.b - vt(j + 1.5) + gap, width: _475, height: _471};
							var _477 = this._plotFill(_476.series.fill, dim, _46f);
							_477 = this._shapeFill(_477, rect);
							var _478 = s.createRect(rect).setFill(_477).setStroke(_476.series.stroke);
							run.dyn.fill = _478.getFill();
							run.dyn.stroke = _478.getStroke();
							if (_472) {
								var o = {element: "bar", index: j, run: run, shape: _478, x: v, y: j + 1.5};
								this._connectEvents(o);
								_474[j] = o;
							}
							if (this.animate) {
								this._animateBar(_478, _46f.l, -_475);
							}
						}
					}
				}
				this._eventSeries[run.name] = _474;
				run.dirty = false;
				for (var j = 0; j < run.data.length; ++j) {
					var _470 = run.data[j];
					if (_470 !== null) {
						var v = typeof _470 == "number" ? _470 : _470.y;
						if (isNaN(v)) {
							v = 0;
						}
						acc[j] -= v;
					}
				}
			}
			this.dirty = false;
			return this;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.ClusteredBars"]) {
	dojo._hasResource["dojox.charting.plot2d.ClusteredBars"] = true;
	dojo.provide("dojox.charting.plot2d.ClusteredBars");
	(function () {
		var df = dojox.lang.functional, dc = dojox.charting.plot2d.common, _479 = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.ClusteredBars", dojox.charting.plot2d.Bars, {render: function (dim, _47a) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _47a);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _479);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, f, gap, _47b, _47c, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _47d = Math.max(0, this._hScaler.bounds.lower), _47e = ht(_47d), _47f = this.events();
			f = dc.calculateBarSize(this._vScaler.bounds.scale, this.opt, this.series.length);
			gap = f.gap;
			_47b = _47c = f.size;
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i], _480 = _47c * (this.series.length - i - 1);
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _481 = t.next("bar", [this.opt, run]), s = run.group, _482 = new Array(run.data.length);
				for (var j = 0; j < run.data.length; ++j) {
					var _483 = run.data[j];
					if (_483 !== null) {
						var v = typeof _483 == "number" ? _483 : _483.y, hv = ht(v), _484 = hv - _47e, w = Math.abs(_484), _485 = typeof _483 != "number" ? t.addMixin(_481, "bar", _483, true) : t.post(_481, "bar");
						if (w >= 1 && _47b >= 1) {
							var rect = {x: _47a.l + (v < _47d ? hv : _47e), y: dim.height - _47a.b - vt(j + 1.5) + gap + _480, width: w, height: _47b};
							var _486 = this._plotFill(_485.series.fill, dim, _47a);
							_486 = this._shapeFill(_486, rect);
							var _487 = s.createRect(rect).setFill(_486).setStroke(_485.series.stroke);
							run.dyn.fill = _487.getFill();
							run.dyn.stroke = _487.getStroke();
							if (_47f) {
								var o = {element: "bar", index: j, run: run, shape: _487, x: v, y: j + 1.5};
								this._connectEvents(o);
								_482[j] = o;
							}
							if (this.animate) {
								this._animateBar(_487, _47a.l + _47e, -_484);
							}
						}
					}
				}
				this._eventSeries[run.name] = _482;
				run.dirty = false;
			}
			this.dirty = false;
			return this;
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.Grid"]) {
	dojo._hasResource["dojox.charting.plot2d.Grid"] = true;
	dojo.provide("dojox.charting.plot2d.Grid");
	(function () {
		var du = dojox.lang.utils, dc = dojox.charting.plot2d.common;
		dojo.declare("dojox.charting.plot2d.Grid", dojox.charting.Element, {defaultParams: {hAxis: "x", vAxis: "y", hMajorLines: true, hMinorLines: false, vMajorLines: true, vMinorLines: false, hStripes: "none", vStripes: "none", animate: null}, optionalParams: {}, constructor: function (_488, _489) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _489);
			this.hAxis = this.opt.hAxis;
			this.vAxis = this.opt.vAxis;
			this.dirty = true;
			this.animate = this.opt.animate;
			this.zoom = null, this.zoomQueue = [];
			this.lastWindow = {vscale: 1, hscale: 1, xoffset: 0, yoffset: 0};
		}, clear: function () {
			this._hAxis = null;
			this._vAxis = null;
			this.dirty = true;
			return this;
		}, setAxis: function (axis) {
			if (axis) {
				this[axis.vertical ? "_vAxis" : "_hAxis"] = axis;
			}
			return this;
		}, addSeries: function (run) {
			return this;
		}, getSeriesStats: function () {
			return dojo.delegate(dc.defaultStats);
		}, initializeScalers: function () {
			return this;
		}, isDirty: function () {
			return this.dirty || this._hAxis && this._hAxis.dirty || this._vAxis && this._vAxis.dirty;
		}, performZoom: function (dim, _48a) {
			var vs = this._vAxis.scale || 1, hs = this._hAxis.scale || 1, _48b = dim.height - _48a.b, _48c = this._hAxis.getScaler().bounds, _48d = (_48c.from - _48c.lower) * _48c.scale, _48e = this._vAxis.getScaler().bounds, _48f = (_48e.from - _48e.lower) * _48e.scale;
			rVScale = vs / this.lastWindow.vscale, rHScale = hs / this.lastWindow.hscale, rXOffset = (this.lastWindow.xoffset - _48d) / ((this.lastWindow.hscale == 1) ? hs : this.lastWindow.hscale), rYOffset = (_48f - this.lastWindow.yoffset) / ((this.lastWindow.vscale == 1) ? vs : this.lastWindow.vscale), shape = this.group, anim = dojox.gfx.fx.animateTransform(dojo.delegate({shape: shape, duration: 1200, transform: [
				{name: "translate", start: [0, 0], end: [_48a.l * (1 - rHScale), _48b * (1 - rVScale)]},
				{name: "scale", start: [1, 1], end: [rHScale, rVScale]},
				{name: "original"},
				{name: "translate", start: [0, 0], end: [rXOffset, rYOffset]}
			]}, this.zoom));
			dojo.mixin(this.lastWindow, {vscale: vs, hscale: hs, xoffset: _48d, yoffset: _48f});
			this.zoomQueue.push(anim);
			dojo.connect(anim, "onEnd", this, function () {
				this.zoom = null;
				this.zoomQueue.shift();
				if (this.zoomQueue.length > 0) {
					this.zoomQueue[0].play();
				}
			});
			if (this.zoomQueue.length == 1) {
				this.zoomQueue[0].play();
			}
			return this;
		}, getRequiredColors: function () {
			return 0;
		}, render: function (dim, _490) {
			if (this.zoom) {
				return this.performZoom(dim, _490);
			}
			this.dirty = this.isDirty();
			if (!this.dirty) {
				return this;
			}
			this.cleanGroup();
			var s = this.group, ta = this.chart.theme.axis;
			try {
				var _491 = this._vAxis.getScaler(), vt = _491.scaler.getTransformerFromModel(_491), _492 = this._vAxis.getTicks();
				if (this.opt.hMinorLines) {
					dojo.forEach(_492.minor, function (tick) {
						var y = dim.height - _490.b - vt(tick.value);
						var _493 = s.createLine({x1: _490.l, y1: y, x2: dim.width - _490.r, y2: y}).setStroke(ta.minorTick);
						if (this.animate) {
							this._animateGrid(_493, "h", _490.l, _490.r + _490.l - dim.width);
						}
					}, this);
				}
				if (this.opt.hMajorLines) {
					dojo.forEach(_492.major, function (tick) {
						var y = dim.height - _490.b - vt(tick.value);
						var _494 = s.createLine({x1: _490.l, y1: y, x2: dim.width - _490.r, y2: y}).setStroke(ta.majorTick);
						if (this.animate) {
							this._animateGrid(_494, "h", _490.l, _490.r + _490.l - dim.width);
						}
					}, this);
				}
			} catch (e) {
			}
			try {
				var _495 = this._hAxis.getScaler(), ht = _495.scaler.getTransformerFromModel(_495), _492 = this._hAxis.getTicks();
				if (_492 && this.opt.vMinorLines) {
					dojo.forEach(_492.minor, function (tick) {
						var x = _490.l + ht(tick.value);
						var _496 = s.createLine({x1: x, y1: _490.t, x2: x, y2: dim.height - _490.b}).setStroke(ta.minorTick);
						if (this.animate) {
							this._animateGrid(_496, "v", dim.height - _490.b, dim.height - _490.b - _490.t);
						}
					}, this);
				}
				if (_492 && this.opt.vMajorLines) {
					dojo.forEach(_492.major, function (tick) {
						var x = _490.l + ht(tick.value);
						var _497 = s.createLine({x1: x, y1: _490.t, x2: x, y2: dim.height - _490.b}).setStroke(ta.majorTick);
						if (this.animate) {
							this._animateGrid(_497, "v", dim.height - _490.b, dim.height - _490.b - _490.t);
						}
					}, this);
				}
			} catch (e) {
			}
			this.dirty = false;
			return this;
		}, _animateGrid: function (_498, type, _499, size) {
			var _49a = type == "h" ? [_499, 0] : [0, _499];
			var _49b = type == "h" ? [1 / size, 1] : [1, 1 / size];
			dojox.gfx.fx.animateTransform(dojo.delegate({shape: _498, duration: 1200, transform: [
				{name: "translate", start: _49a, end: [0, 0]},
				{name: "scale", start: _49b, end: [1, 1]},
				{name: "original"}
			]}, this.animate)).play();
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.Pie"]) {
	dojo._hasResource["dojox.charting.plot2d.Pie"] = true;
	dojo.provide("dojox.charting.plot2d.Pie");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, da = dojox.charting.axis2d.common, g = dojox.gfx, m = g.matrix, _49c = 0.2;
		dojo.declare("dojox.charting.plot2d.Pie", [dojox.charting.Element, dojox.charting.plot2d._PlotEvents], {defaultParams: {labels: true, ticks: false, fixed: true, precision: 1, labelOffset: 20, labelStyle: "default", htmlLabels: true, radGrad: "native", fanSize: 5, startAngle: 0}, optionalParams: {radius: 0, stroke: {}, outline: {}, shadow: {}, fill: {}, font: "", fontColor: "", labelWiring: {}}, constructor: function (_49d, _49e) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _49e);
			du.updateWithPattern(this.opt, _49e, this.optionalParams);
			this.run = null;
			this.dyn = [];
		}, clear: function () {
			this.dirty = true;
			this.dyn = [];
			this.run = null;
			return this;
		}, setAxis: function (axis) {
			return this;
		}, addSeries: function (run) {
			this.run = run;
			return this;
		}, getSeriesStats: function () {
			return dojo.delegate(dc.defaultStats);
		}, initializeScalers: function () {
			return this;
		}, getRequiredColors: function () {
			return this.run ? this.run.data.length : 0;
		}, render: function (dim, _49f) {
			if (!this.dirty) {
				return this;
			}
			this.resetEvents();
			this.dirty = false;
			this._eventSeries = {};
			this.cleanGroup();
			var s = this.group, t = this.chart.theme;
			if (!this.run || !this.run.data.length) {
				return this;
			}
			var rx = (dim.width - _49f.l - _49f.r) / 2, ry = (dim.height - _49f.t - _49f.b) / 2, r = Math.min(rx, ry), _4a0 = "font" in this.opt ? this.opt.font : t.axis.font, size = _4a0 ? g.normalizedLength(g.splitFontString(_4a0).size) : 0, _4a1 = "fontColor" in this.opt ? this.opt.fontColor : t.axis.fontColor, _4a2 = m._degToRad(this.opt.startAngle), _4a3 = _4a2, step, _4a4, _4a5, _4a6, _4a7, _4a8, run = this.run.data, _4a9 = this.events();
			if (typeof run[0] == "number") {
				_4a4 = df.map(run, "x ? Math.max(x, 0) : 0");
				if (df.every(_4a4, "<= 0")) {
					return this;
				}
				_4a5 = df.map(_4a4, "/this", df.foldl(_4a4, "+", 0));
				if (this.opt.labels) {
					_4a6 = dojo.map(_4a5, function (x) {
						return x > 0 ? this._getLabel(x * 100) + "%" : "";
					}, this);
				}
			} else {
				_4a4 = df.map(run, "x ? Math.max(x.y, 0) : 0");
				if (df.every(_4a4, "<= 0")) {
					return this;
				}
				_4a5 = df.map(_4a4, "/this", df.foldl(_4a4, "+", 0));
				if (this.opt.labels) {
					_4a6 = dojo.map(_4a5, function (x, i) {
						if (x <= 0) {
							return "";
						}
						var v = run[i];
						return "text" in v ? v.text : this._getLabel(x * 100) + "%";
					}, this);
				}
			}
			var _4aa = df.map(run, function (v, i) {
				if (v === null || typeof v == "number") {
					return t.next("slice", [this.opt, this.run], true);
				}
				return t.next("slice", [this.opt, this.run, v], true);
			}, this);
			if (this.opt.labels) {
				_4a7 = df.foldl1(df.map(_4a6, function (_4ab, i) {
					var font = _4aa[i].series.font;
					return dojox.gfx._base._getTextBox(_4ab, {font: font}).w;
				}, this), "Math.max(a, b)") / 2;
				if (this.opt.labelOffset < 0) {
					r = Math.min(rx - 2 * _4a7, ry - size) + this.opt.labelOffset;
				}
				_4a8 = r - this.opt.labelOffset;
			}
			if ("radius" in this.opt) {
				r = this.opt.radius;
				_4a8 = r - this.opt.labelOffset;
			}
			var _4ac = {cx: _49f.l + rx, cy: _49f.t + ry, r: r};
			this.dyn = [];
			var _4ad = new Array(_4a5.length);
			dojo.some(_4a5, function (_4ae, i) {
				if (_4ae <= 0) {
					return false;
				}
				var v = run[i], _4af = _4aa[i], _4b0;
				if (_4ae >= 1) {
					_4b0 = this._plotFill(_4af.series.fill, dim, _49f);
					_4b0 = this._shapeFill(_4b0, {x: _4ac.cx - _4ac.r, y: _4ac.cy - _4ac.r, width: 2 * _4ac.r, height: 2 * _4ac.r});
					_4b0 = this._pseudoRadialFill(_4b0, {x: _4ac.cx, y: _4ac.cy}, _4ac.r);
					var _4b1 = s.createCircle(_4ac).setFill(_4b0).setStroke(_4af.series.stroke);
					this.dyn.push({fill: _4b0, stroke: _4af.series.stroke});
					if (_4a9) {
						var o = {element: "slice", index: i, run: this.run, shape: _4b1, x: i, y: typeof v == "number" ? v : v.y, cx: _4ac.cx, cy: _4ac.cy, cr: r};
						this._connectEvents(o);
						_4ad[i] = o;
					}
					return true;
				}
				var end = _4a3 + _4ae * 2 * Math.PI;
				if (i + 1 == _4a5.length) {
					end = _4a2 + 2 * Math.PI;
				}
				var step = end - _4a3, x1 = _4ac.cx + r * Math.cos(_4a3), y1 = _4ac.cy + r * Math.sin(_4a3), x2 = _4ac.cx + r * Math.cos(end), y2 = _4ac.cy + r * Math.sin(end);
				var _4b2 = m._degToRad(this.opt.fanSize);
				if (_4af.series.fill && _4af.series.fill.type === "radial" && this.opt.radGrad === "fan" && step > _4b2) {
					var _4b3 = s.createGroup(), _4b4 = Math.ceil(step / _4b2), _4b5 = step / _4b4;
					_4b0 = this._shapeFill(_4af.series.fill, {x: _4ac.cx - _4ac.r, y: _4ac.cy - _4ac.r, width: 2 * _4ac.r, height: 2 * _4ac.r});
					for (var j = 0; j < _4b4; ++j) {
						var _4b6 = j == 0 ? x1 : _4ac.cx + r * Math.cos(_4a3 + (j - _49c) * _4b5), _4b7 = j == 0 ? y1 : _4ac.cy + r * Math.sin(_4a3 + (j - _49c) * _4b5), _4b8 = j == _4b4 - 1 ? x2 : _4ac.cx + r * Math.cos(_4a3 + (j + 1 + _49c) * _4b5), _4b9 = j == _4b4 - 1 ? y2 : _4ac.cy + r * Math.sin(_4a3 + (j + 1 + _49c) * _4b5), fan = _4b3.createPath({}).moveTo(_4ac.cx, _4ac.cy).lineTo(_4b6, _4b7).arcTo(r, r, 0, _4b5 > Math.PI, true, _4b8, _4b9).lineTo(_4ac.cx, _4ac.cy).closePath().setFill(this._pseudoRadialFill(_4b0, {x: _4ac.cx, y: _4ac.cy}, r, _4a3 + (j + 0.5) * _4b5, _4a3 + (j + 0.5) * _4b5));
					}
					_4b3.createPath({}).moveTo(_4ac.cx, _4ac.cy).lineTo(x1, y1).arcTo(r, r, 0, step > Math.PI, true, x2, y2).lineTo(_4ac.cx, _4ac.cy).closePath().setStroke(_4af.series.stroke);
					_4b1 = _4b3;
				} else {
					_4b1 = s.createPath({}).moveTo(_4ac.cx, _4ac.cy).lineTo(x1, y1).arcTo(r, r, 0, step > Math.PI, true, x2, y2).lineTo(_4ac.cx, _4ac.cy).closePath().setStroke(_4af.series.stroke);
					var _4b0 = _4af.series.fill;
					if (_4b0 && _4b0.type === "radial") {
						_4b0 = this._shapeFill(_4b0, {x: _4ac.cx - _4ac.r, y: _4ac.cy - _4ac.r, width: 2 * _4ac.r, height: 2 * _4ac.r});
						if (this.opt.radGrad === "linear") {
							_4b0 = this._pseudoRadialFill(_4b0, {x: _4ac.cx, y: _4ac.cy}, r, _4a3, end);
						}
					} else {
						if (_4b0 && _4b0.type === "linear") {
							_4b0 = this._plotFill(_4b0, dim, _49f);
							_4b0 = this._shapeFill(_4b0, _4b1.getBoundingBox());
						}
					}
					_4b1.setFill(_4b0);
				}
				this.dyn.push({fill: _4b0, stroke: _4af.series.stroke});
				if (_4a9) {
					var o = {element: "slice", index: i, run: this.run, shape: _4b1, x: i, y: typeof v == "number" ? v : v.y, cx: _4ac.cx, cy: _4ac.cy, cr: r};
					this._connectEvents(o);
					_4ad[i] = o;
				}
				_4a3 = end;
				return false;
			}, this);
			if (this.opt.labels) {
				if (this.opt.labelStyle == "default") {
					_4a3 = _4a2;
					dojo.some(_4a5, function (_4ba, i) {
						if (_4ba <= 0) {
							return false;
						}
						var _4bb = _4aa[i];
						if (_4ba >= 1) {
							var v = run[i], elem = da.createText[this.opt.htmlLabels && dojox.gfx.renderer != "vml" ? "html" : "gfx"](this.chart, s, _4ac.cx, _4ac.cy + size / 2, "middle", _4a6[i], _4bb.series.font, _4bb.series.fontColor);
							if (this.opt.htmlLabels) {
								this.htmlElements.push(elem);
							}
							return true;
						}
						var end = _4a3 + _4ba * 2 * Math.PI, v = run[i];
						if (i + 1 == _4a5.length) {
							end = _4a2 + 2 * Math.PI;
						}
						var _4bc = (_4a3 + end) / 2, x = _4ac.cx + _4a8 * Math.cos(_4bc), y = _4ac.cy + _4a8 * Math.sin(_4bc) + size / 2;
						var elem = da.createText[this.opt.htmlLabels && dojox.gfx.renderer != "vml" ? "html" : "gfx"](this.chart, s, x, y, "middle", _4a6[i], _4bb.series.font, _4bb.series.fontColor);
						if (this.opt.htmlLabels) {
							this.htmlElements.push(elem);
						}
						_4a3 = end;
						return false;
					}, this);
				} else {
					if (this.opt.labelStyle == "columns") {
						_4a3 = _4a2;
						var _4bd = [];
						dojo.forEach(_4a5, function (_4be, i) {
							var end = _4a3 + _4be * 2 * Math.PI;
							if (i + 1 == _4a5.length) {
								end = _4a2 + 2 * Math.PI;
							}
							var _4bf = (_4a3 + end) / 2;
							_4bd.push({angle: _4bf, left: Math.cos(_4bf) < 0, theme: _4aa[i], index: i, omit: end - _4a3 < 0.001});
							_4a3 = end;
						});
						var _4c0 = dojox.gfx._base._getTextBox("a", {font: _4a0}).h;
						this._getProperLabelRadius(_4bd, _4c0, _4ac.r * 1.1);
						dojo.forEach(_4bd, function (_4c1, i) {
							if (!_4c1.omit) {
								var _4c2 = _4ac.cx - _4ac.r * 2, _4c3 = _4ac.cx + _4ac.r * 2, _4c4 = dojox.gfx._base._getTextBox(_4a6[i], {font: _4a0}).w, x = _4ac.cx + _4c1.labelR * Math.cos(_4c1.angle), y = _4ac.cy + _4c1.labelR * Math.sin(_4c1.angle), _4c5 = (_4c1.left) ? (_4c2 + _4c4) : (_4c3 - _4c4), _4c6 = (_4c1.left) ? _4c2 : _4c5;
								var _4c7 = s.createPath().moveTo(_4ac.cx + _4ac.r * Math.cos(_4c1.angle), _4ac.cy + _4ac.r * Math.sin(_4c1.angle));
								if (Math.abs(_4c1.labelR * Math.cos(_4c1.angle)) < _4ac.r * 2 - _4c4) {
									_4c7.lineTo(x, y);
								}
								_4c7.lineTo(_4c5, y).setStroke(_4c1.theme.series.labelWiring);
								var elem = da.createText[this.opt.htmlLabels && dojox.gfx.renderer != "vml" ? "html" : "gfx"](this.chart, s, _4c6, y, "left", _4a6[i], _4c1.theme.series.font, _4c1.theme.series.fontColor);
								if (this.opt.htmlLabels) {
									this.htmlElements.push(elem);
								}
							}
						}, this);
					}
				}
			}
			var esi = 0;
			this._eventSeries[this.run.name] = df.map(run, function (v) {
				return v <= 0 ? null : _4ad[esi++];
			});
			return this;
		}, _getProperLabelRadius: function (_4c8, _4c9, _4ca) {
			var _4cb = {}, _4cc = {}, _4cd = 1, _4ce = 1;
			if (_4c8.length == 1) {
				_4c8[0].labelR = _4ca;
				return;
			}
			for (var i = 0; i < _4c8.length; i++) {
				var _4cf = Math.abs(Math.sin(_4c8[i].angle));
				if (_4c8[i].left) {
					if (_4cd > _4cf) {
						_4cd = _4cf;
						_4cb = _4c8[i];
					}
				} else {
					if (_4ce > _4cf) {
						_4ce = _4cf;
						_4cc = _4c8[i];
					}
				}
			}
			_4cb.labelR = _4cc.labelR = _4ca;
			this._caculateLabelR(_4cb, _4c8, _4c9);
			this._caculateLabelR(_4cc, _4c8, _4c9);
		}, _caculateLabelR: function (_4d0, _4d1, _4d2) {
			var i = _4d0.index, _4d3 = _4d1.length, _4d4 = _4d0.labelR;
			while (!(_4d1[i % _4d3].left ^ _4d1[(i + 1) % _4d3].left)) {
				if (!_4d1[(i + 1) % _4d3].omit) {
					var _4d5 = (Math.sin(_4d1[i % _4d3].angle) * _4d4 + ((_4d1[i % _4d3].left) ? (-_4d2) : _4d2)) / Math.sin(_4d1[(i + 1) % _4d3].angle);
					_4d4 = (_4d5 < _4d0.labelR) ? _4d0.labelR : _4d5;
					_4d1[(i + 1) % _4d3].labelR = _4d4;
				}
				i++;
			}
			i = _4d0.index, j = (i == 0) ? _4d3 - 1 : i - 1;
			while (!(_4d1[i].left ^ _4d1[j].left)) {
				if (!_4d1[j].omit) {
					var _4d5 = (Math.sin(_4d1[i].angle) * _4d4 + ((_4d1[i].left) ? _4d2 : (-_4d2))) / Math.sin(_4d1[j].angle);
					_4d4 = (_4d5 < _4d0.labelR) ? _4d0.labelR : _4d5;
					_4d1[j].labelR = _4d4;
				}
				i--;
				j--;
				i = (i < 0) ? i + _4d1.length : i;
				j = (j < 0) ? j + _4d1.length : j;
			}
		}, _getLabel: function (_4d6) {
			return dc.getLabel(_4d6, this.opt.fixed, this.opt.precision);
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.Bubble"]) {
	dojo._hasResource["dojox.charting.plot2d.Bubble"] = true;
	dojo.provide("dojox.charting.plot2d.Bubble");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, _4d7 = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.Bubble", dojox.charting.plot2d.Base, {defaultParams: {hAxis: "x", vAxis: "y", animate: null}, optionalParams: {stroke: {}, outline: {}, shadow: {}, fill: {}, font: "", fontColor: ""}, constructor: function (_4d8, _4d9) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _4d9);
			du.updateWithPattern(this.opt, _4d9, this.optionalParams);
			this.series = [];
			this.hAxis = this.opt.hAxis;
			this.vAxis = this.opt.vAxis;
			this.animate = this.opt.animate;
		}, render: function (dim, _4da) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _4da);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _4d7);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _4db = this.events();
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				if (!run.data.length) {
					run.dirty = false;
					t.skip();
					continue;
				}
				if (typeof run.data[0] == "number") {
					console.warn("dojox.charting.plot2d.Bubble: the data in the following series cannot be rendered as a bubble chart; ", run);
					continue;
				}
				var _4dc = t.next("circle", [this.opt, run]), s = run.group, _4dd = dojo.map(run.data, function (v, i) {
					return v ? {x: ht(v.x) + _4da.l, y: dim.height - _4da.b - vt(v.y), radius: this._vScaler.bounds.scale * (v.size / 2)} : null;
				}, this);
				var _4de = null, _4df = null, _4e0 = null;
				if (_4dc.series.shadow) {
					_4e0 = dojo.map(_4dd, function (item) {
						if (item !== null) {
							var _4e1 = t.addMixin(_4dc, "circle", item, true), _4e2 = _4e1.series.shadow;
							var _4e3 = s.createCircle({cx: item.x + _4e2.dx, cy: item.y + _4e2.dy, r: item.radius}).setStroke(_4e2).setFill(_4e2.color);
							if (this.animate) {
								this._animateBubble(_4e3, dim.height - _4da.b, item.radius);
							}
							return _4e3;
						}
						return null;
					}, this);
					if (_4e0.length) {
						run.dyn.shadow = _4e0[_4e0.length - 1].getStroke();
					}
				}
				if (_4dc.series.outline) {
					_4df = dojo.map(_4dd, function (item) {
						if (item !== null) {
							var _4e4 = t.addMixin(_4dc, "circle", item, true), _4e5 = dc.makeStroke(_4e4.series.outline);
							_4e5.width = 2 * _4e5.width + _4dc.series.stroke.width;
							var _4e6 = s.createCircle({cx: item.x, cy: item.y, r: item.radius}).setStroke(_4e5);
							if (this.animate) {
								this._animateBubble(_4e6, dim.height - _4da.b, item.radius);
							}
							return _4e6;
						}
						return null;
					}, this);
					if (_4df.length) {
						run.dyn.outline = _4df[_4df.length - 1].getStroke();
					}
				}
				_4de = dojo.map(_4dd, function (item) {
					if (item !== null) {
						var _4e7 = t.addMixin(_4dc, "circle", item, true), rect = {x: item.x - item.radius, y: item.y - item.radius, width: 2 * item.radius, height: 2 * item.radius};
						var _4e8 = this._plotFill(_4e7.series.fill, dim, _4da);
						_4e8 = this._shapeFill(_4e8, rect);
						var _4e9 = s.createCircle({cx: item.x, cy: item.y, r: item.radius}).setFill(_4e8).setStroke(_4e7.series.stroke);
						if (this.animate) {
							this._animateBubble(_4e9, dim.height - _4da.b, item.radius);
						}
						return _4e9;
					}
					return null;
				}, this);
				if (_4de.length) {
					run.dyn.fill = _4de[_4de.length - 1].getFill();
					run.dyn.stroke = _4de[_4de.length - 1].getStroke();
				}
				if (_4db) {
					var _4ea = new Array(_4de.length);
					dojo.forEach(_4de, function (s, i) {
						if (s !== null) {
							var o = {element: "circle", index: i, run: run, shape: s, outline: _4df && _4df[i] || null, shadow: _4e0 && _4e0[i] || null, x: run.data[i].x, y: run.data[i].y, r: run.data[i].size / 2, cx: _4dd[i].x, cy: _4dd[i].y, cr: _4dd[i].radius};
							this._connectEvents(o);
							_4ea[i] = o;
						}
					}, this);
					this._eventSeries[run.name] = _4ea;
				} else {
					delete this._eventSeries[run.name];
				}
				run.dirty = false;
			}
			this.dirty = false;
			return this;
		}, _animateBubble: function (_4eb, _4ec, size) {
			dojox.gfx.fx.animateTransform(dojo.delegate({shape: _4eb, duration: 1200, transform: [
				{name: "translate", start: [0, _4ec], end: [0, 0]},
				{name: "scale", start: [0, 1 / size], end: [1, 1]},
				{name: "original"}
			]}, this.animate)).play();
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.Candlesticks"]) {
	dojo._hasResource["dojox.charting.plot2d.Candlesticks"] = true;
	dojo.provide("dojox.charting.plot2d.Candlesticks");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, _4ed = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.Candlesticks", dojox.charting.plot2d.Base, {defaultParams: {hAxis: "x", vAxis: "y", gap: 2, animate: null}, optionalParams: {minBarSize: 1, maxBarSize: 1, stroke: {}, outline: {}, shadow: {}, fill: {}, font: "", fontColor: ""}, constructor: function (_4ee, _4ef) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _4ef);
			du.updateWithPattern(this.opt, _4ef, this.optionalParams);
			this.series = [];
			this.hAxis = this.opt.hAxis;
			this.vAxis = this.opt.vAxis;
			this.animate = this.opt.animate;
		}, collectStats: function (_4f0) {
			var _4f1 = dojo.delegate(dc.defaultStats);
			for (var i = 0; i < _4f0.length; i++) {
				var run = _4f0[i];
				if (!run.data.length) {
					continue;
				}
				var _4f2 = _4f1.vmin, _4f3 = _4f1.vmax;
				if (!("ymin" in run) || !("ymax" in run)) {
					dojo.forEach(run.data, function (val, idx) {
						if (val !== null) {
							var x = val.x || idx + 1;
							_4f1.hmin = Math.min(_4f1.hmin, x);
							_4f1.hmax = Math.max(_4f1.hmax, x);
							_4f1.vmin = Math.min(_4f1.vmin, val.open, val.close, val.high, val.low);
							_4f1.vmax = Math.max(_4f1.vmax, val.open, val.close, val.high, val.low);
						}
					});
				}
				if ("ymin" in run) {
					_4f1.vmin = Math.min(_4f2, run.ymin);
				}
				if ("ymax" in run) {
					_4f1.vmax = Math.max(_4f3, run.ymax);
				}
			}
			return _4f1;
		}, getSeriesStats: function () {
			var _4f4 = this.collectStats(this.series);
			_4f4.hmin -= 0.5;
			_4f4.hmax += 0.5;
			return _4f4;
		}, render: function (dim, _4f5) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _4f5);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _4ed);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, f, gap, _4f6, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _4f7 = Math.max(0, this._vScaler.bounds.lower), _4f8 = vt(_4f7), _4f9 = this.events();
			f = dc.calculateBarSize(this._hScaler.bounds.scale, this.opt);
			gap = f.gap;
			_4f6 = f.size;
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _4fa = t.next("candlestick", [this.opt, run]), s = run.group, _4fb = new Array(run.data.length);
				for (var j = 0; j < run.data.length; ++j) {
					var v = run.data[j];
					if (v !== null) {
						var _4fc = t.addMixin(_4fa, "candlestick", v, true);
						var x = ht(v.x || (j + 0.5)) + _4f5.l + gap, y = dim.height - _4f5.b, open = vt(v.open), _4fd = vt(v.close), high = vt(v.high), low = vt(v.low);
						if ("mid" in v) {
							var mid = vt(v.mid);
						}
						if (low > high) {
							var tmp = high;
							high = low;
							low = tmp;
						}
						if (_4f6 >= 1) {
							var _4fe = open > _4fd;
							var line = {x1: _4f6 / 2, x2: _4f6 / 2, y1: y - high, y2: y - low}, rect = {x: 0, y: y - Math.max(open, _4fd), width: _4f6, height: Math.max(_4fe ? open - _4fd : _4fd - open, 1)};
							shape = s.createGroup();
							shape.setTransform({dx: x, dy: 0});
							var _4ff = shape.createGroup();
							_4ff.createLine(line).setStroke(_4fc.series.stroke);
							_4ff.createRect(rect).setStroke(_4fc.series.stroke).setFill(_4fe ? _4fc.series.fill : "white");
							if ("mid" in v) {
								_4ff.createLine({x1: (_4fc.series.stroke.width || 1), x2: _4f6 - (_4fc.series.stroke.width || 1), y1: y - mid, y2: y - mid}).setStroke(_4fe ? "white" : _4fc.series.stroke);
							}
							run.dyn.fill = _4fc.series.fill;
							run.dyn.stroke = _4fc.series.stroke;
							if (_4f9) {
								var o = {element: "candlestick", index: j, run: run, shape: _4ff, x: x, y: y - Math.max(open, _4fd), cx: _4f6 / 2, cy: (y - Math.max(open, _4fd)) + (Math.max(_4fe ? open - _4fd : _4fd - open, 1) / 2), width: _4f6, height: Math.max(_4fe ? open - _4fd : _4fd - open, 1), data: v};
								this._connectEvents(o);
								_4fb[j] = o;
							}
						}
						if (this.animate) {
							this._animateCandlesticks(shape, y - low, high - low);
						}
					}
				}
				this._eventSeries[run.name] = _4fb;
				run.dirty = false;
			}
			this.dirty = false;
			return this;
		}, _animateCandlesticks: function (_500, _501, _502) {
			dojox.gfx.fx.animateTransform(dojo.delegate({shape: _500, duration: 1200, transform: [
				{name: "translate", start: [0, _501 - (_501 / _502)], end: [0, 0]},
				{name: "scale", start: [1, 1 / _502], end: [1, 1]},
				{name: "original"}
			]}, this.animate)).play();
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.OHLC"]) {
	dojo._hasResource["dojox.charting.plot2d.OHLC"] = true;
	dojo.provide("dojox.charting.plot2d.OHLC");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, _503 = df.lambda("item.purgeGroup()");
		dojo.declare("dojox.charting.plot2d.OHLC", dojox.charting.plot2d.Base, {defaultParams: {hAxis: "x", vAxis: "y", gap: 2, animate: null}, optionalParams: {minBarSize: 1, maxBarSize: 1, stroke: {}, outline: {}, shadow: {}, fill: {}, font: "", fontColor: ""}, constructor: function (_504, _505) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _505);
			du.updateWithPattern(this.opt, _505, this.optionalParams);
			this.series = [];
			this.hAxis = this.opt.hAxis;
			this.vAxis = this.opt.vAxis;
			this.animate = this.opt.animate;
		}, collectStats: function (_506) {
			var _507 = dojo.delegate(dc.defaultStats);
			for (var i = 0; i < _506.length; i++) {
				var run = _506[i];
				if (!run.data.length) {
					continue;
				}
				var _508 = _507.vmin, _509 = _507.vmax;
				if (!("ymin" in run) || !("ymax" in run)) {
					dojo.forEach(run.data, function (val, idx) {
						if (val !== null) {
							var x = val.x || idx + 1;
							_507.hmin = Math.min(_507.hmin, x);
							_507.hmax = Math.max(_507.hmax, x);
							_507.vmin = Math.min(_507.vmin, val.open, val.close, val.high, val.low);
							_507.vmax = Math.max(_507.vmax, val.open, val.close, val.high, val.low);
						}
					});
				}
				if ("ymin" in run) {
					_507.vmin = Math.min(_508, run.ymin);
				}
				if ("ymax" in run) {
					_507.vmax = Math.max(_509, run.ymax);
				}
			}
			return _507;
		}, getSeriesStats: function () {
			var _50a = this.collectStats(this.series);
			_50a.hmin -= 0.5;
			_50a.hmax += 0.5;
			return _50a;
		}, render: function (dim, _50b) {
			if (this.zoom && !this.isDataDirty()) {
				return this.performZoom(dim, _50b);
			}
			this.resetEvents();
			this.dirty = this.isDirty();
			if (this.dirty) {
				dojo.forEach(this.series, _503);
				this._eventSeries = {};
				this.cleanGroup();
				var s = this.group;
				df.forEachRev(this.series, function (item) {
					item.cleanGroup(s);
				});
			}
			var t = this.chart.theme, f, gap, _50c, ht = this._hScaler.scaler.getTransformerFromModel(this._hScaler), vt = this._vScaler.scaler.getTransformerFromModel(this._vScaler), _50d = Math.max(0, this._vScaler.bounds.lower), _50e = vt(_50d), _50f = this.events();
			f = dc.calculateBarSize(this._hScaler.bounds.scale, this.opt);
			gap = f.gap;
			_50c = f.size;
			for (var i = this.series.length - 1; i >= 0; --i) {
				var run = this.series[i];
				if (!this.dirty && !run.dirty) {
					t.skip();
					this._reconnectEvents(run.name);
					continue;
				}
				run.cleanGroup();
				var _510 = t.next("candlestick", [this.opt, run]), s = run.group, _511 = new Array(run.data.length);
				for (var j = 0; j < run.data.length; ++j) {
					var v = run.data[j];
					if (v !== null) {
						var _512 = t.addMixin(_510, "candlestick", v, true);
						var x = ht(v.x || (j + 0.5)) + _50b.l + gap, y = dim.height - _50b.b, open = vt(v.open), _513 = vt(v.close), high = vt(v.high), low = vt(v.low);
						if (low > high) {
							var tmp = high;
							high = low;
							low = tmp;
						}
						if (_50c >= 1) {
							var hl = {x1: _50c / 2, x2: _50c / 2, y1: y - high, y2: y - low}, op = {x1: 0, x2: ((_50c / 2) + ((_512.series.stroke.width || 1) / 2)), y1: y - open, y2: y - open}, cl = {x1: ((_50c / 2) - ((_512.series.stroke.width || 1) / 2)), x2: _50c, y1: y - _513, y2: y - _513};
							shape = s.createGroup();
							shape.setTransform({dx: x, dy: 0});
							var _514 = shape.createGroup();
							_514.createLine(hl).setStroke(_512.series.stroke);
							_514.createLine(op).setStroke(_512.series.stroke);
							_514.createLine(cl).setStroke(_512.series.stroke);
							run.dyn.stroke = _512.series.stroke;
							if (_50f) {
								var o = {element: "candlestick", index: j, run: run, shape: _514, x: x, y: y - Math.max(open, _513), cx: _50c / 2, cy: (y - Math.max(open, _513)) + (Math.max(open > _513 ? open - _513 : _513 - open, 1) / 2), width: _50c, height: Math.max(open > _513 ? open - _513 : _513 - open, 1), data: v};
								this._connectEvents(o);
								_511[j] = o;
							}
						}
						if (this.animate) {
							this._animateOHLC(shape, y - low, high - low);
						}
					}
				}
				this._eventSeries[run.name] = _511;
				run.dirty = false;
			}
			this.dirty = false;
			return this;
		}, _animateOHLC: function (_515, _516, _517) {
			dojox.gfx.fx.animateTransform(dojo.delegate({shape: _515, duration: 1200, transform: [
				{name: "translate", start: [0, _516 - (_516 / _517)], end: [0, 0]},
				{name: "scale", start: [1, 1 / _517], end: [1, 1]},
				{name: "original"}
			]}, this.animate)).play();
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.plot2d.Spider"]) {
	dojo._hasResource["dojox.charting.plot2d.Spider"] = true;
	dojo.provide("dojox.charting.plot2d.Spider");
	dojo.experimental("dojox.charting.plot2d.Spider");
	(function () {
		var df = dojox.lang.functional, du = dojox.lang.utils, dc = dojox.charting.plot2d.common, da = dojox.charting.axis2d.common, g = dojox.gfx, m = g.matrix, _518 = 0.2;
		dojo.declare("dojox.charting.plot2d.Spider", [dojox.charting.Element, dojox.charting.plot2d._PlotEvents], {defaultParams: {labels: true, ticks: false, fixed: true, precision: 1, labelOffset: -10, labelStyle: "default", htmlLabels: true, startAngle: -90, divisions: 3, axisColor: "", axisWidth: 0, spiderColor: "", spiderWidth: 0, seriesWidth: 0, seriesFillAlpha: 0.2, spiderOrigin: 0.16, markerSize: 3, spiderType: "polygon", animationType: dojo.fx.easing.backOut, axisTickFont: "", axisTickFontColor: "", axisFont: "", axisFontColor: ""}, optionalParams: {radius: 0, font: "", fontColor: ""}, constructor: function (_519, _51a) {
			this.opt = dojo.clone(this.defaultParams);
			du.updateWithObject(this.opt, _51a);
			du.updateWithPattern(this.opt, _51a, this.optionalParams);
			this.series = [];
			this.dyn = [];
			this.datas = {};
			this.labelKey = [];
			this.oldSeriePoints = {};
			this.animations = {};
		}, clear: function () {
			this.dirty = true;
			this.dyn = [];
			this.series = [];
			this.datas = {};
			this.labelKey = [];
			this.oldSeriePoints = {};
			this.animations = {};
			return this;
		}, setAxis: function (axis) {
			return this;
		}, addSeries: function (run) {
			var _51b = false;
			this.series.push(run);
			for (var key in run.data) {
				var val = run.data[key], data = this.datas[key];
				if (data) {
					data.vlist.push(val);
					data.min = Math.min(data.min, val);
					data.max = Math.max(data.max, val);
				} else {
					this.datas[key] = {min: val, max: val, vlist: [val]};
				}
			}
			if (this.labelKey.length <= 0) {
				for (var key in run.data) {
					this.labelKey.push(key);
				}
			}
			return this;
		}, getSeriesStats: function () {
			return dojox.charting.plot2d.common.collectSimpleStats(this.series);
		}, calculateAxes: function (dim) {
			this.initializeScalers(dim, this.getSeriesStats());
			return this;
		}, getRequiredColors: function () {
			return this.series.length;
		}, initializeScalers: function (dim, _51c) {
			if (this._hAxis) {
				if (!this._hAxis.initialized()) {
					this._hAxis.calculate(_51c.hmin, _51c.hmax, dim.width);
				}
				this._hScaler = this._hAxis.getScaler();
			} else {
				this._hScaler = dojox.charting.scaler.primitive.buildScaler(_51c.hmin, _51c.hmax, dim.width);
			}
			if (this._vAxis) {
				if (!this._vAxis.initialized()) {
					this._vAxis.calculate(_51c.vmin, _51c.vmax, dim.height);
				}
				this._vScaler = this._vAxis.getScaler();
			} else {
				this._vScaler = dojox.charting.scaler.primitive.buildScaler(_51c.vmin, _51c.vmax, dim.height);
			}
			return this;
		}, render: function (dim, _51d) {
			if (!this.dirty) {
				return this;
			}
			this.dirty = false;
			this.cleanGroup();
			var s = this.group, t = this.chart.theme;
			this.resetEvents();
			if (!this.series || !this.series.length) {
				return this;
			}
			var o = this.opt, ta = t.axis, rx = (dim.width - _51d.l - _51d.r) / 2, ry = (dim.height - _51d.t - _51d.b) / 2, r = Math.min(rx, ry), _51e = o.font || (ta.majorTick && ta.majorTick.font) || (ta.tick && ta.tick.font) || "normal normal normal 7pt Tahoma", _51f = o.axisFont || (ta.tick && ta.tick.titleFont) || "normal normal normal 11pt Tahoma", _520 = o.axisTickFontColor || (ta.majorTick && ta.majorTick.fontColor) || (ta.tick && ta.tick.fontColor) || "silver", _521 = o.axisFontColor || (ta.tick && ta.tick.titleFontColor) || "black", _522 = o.axisColor || (ta.tick && ta.tick.axisColor) || "silver", _523 = o.spiderColor || (ta.tick && ta.tick.spiderColor) || "silver", _524 = o.axisWidth || (ta.stroke && ta.stroke.width) || 2, _525 = o.spiderWidth || (ta.stroke && ta.stroke.width) || 2, _526 = o.seriesWidth || (ta.stroke && ta.stroke.width) || 2, _527 = g.normalizedLength(g.splitFontString(_51f).size), _528 = m._degToRad(o.startAngle), _529 = _528, step, _52a, _52b, _52c, _52d, _52e, _52f, _530, _531, _532, _533, ro = o.spiderOrigin, dv = o.divisions >= 3 ? o.divisions : 3, ms = o.markerSize, spt = o.spiderType, at = o.animationType, _534 = o.labelOffset < -10 ? o.labelOffset : -10, _535 = 0.2;
			if (o.labels) {
				_52c = dojo.map(this.series, function (s) {
					return s.name;
				}, this);
				_52d = df.foldl1(df.map(_52c, function (_536, i) {
					var font = t.series.font;
					return dojox.gfx._base._getTextBox(_536, {font: font}).w;
				}, this), "Math.max(a, b)") / 2;
				r = Math.min(rx - 2 * _52d, ry - _527) + _534;
				_52e = r - _534;
			}
			if ("radius" in o) {
				r = o.radius;
				_52e = r - _534;
			}
			r /= (1 + _535);
			var _537 = {cx: _51d.l + rx, cy: _51d.t + ry, r: r};
			for (var i = this.series.length - 1; i >= 0; i--) {
				var _538 = this.series[i];
				if (!this.dirty && !_538.dirty) {
					t.skip();
					continue;
				}
				_538.cleanGroup();
				var run = _538.data;
				if (run !== null) {
					var len = this._getObjectLength(run);
					if (!_52f || _52f.length <= 0) {
						_52f = [], _530 = [], _533 = [];
						this._buildPoints(_52f, len, _537, r, _529, true);
						this._buildPoints(_530, len, _537, r * ro, _529, true);
						this._buildPoints(_533, len, _537, _52e, _529);
						if (dv > 2) {
							_531 = [], _532 = [];
							for (var j = 0; j < dv - 2; j++) {
								_531[j] = [];
								this._buildPoints(_531[j], len, _537, r * (ro + (1 - ro) * (j + 1) / (dv - 1)), _529, true);
								_532[j] = r * (ro + (1 - ro) * (j + 1) / (dv - 1));
							}
						}
					}
				}
			}
			var _539 = s.createGroup(), _53a = {color: _522, width: _524}, _53b = {color: _523, width: _525};
			for (var j = _52f.length - 1; j >= 0; --j) {
				var _53c = _52f[j], st = {x: _53c.x + (_53c.x - _537.cx) * _535, y: _53c.y + (_53c.y - _537.cy) * _535}, nd = {x: _53c.x + (_53c.x - _537.cx) * _535 / 2, y: _53c.y + (_53c.y - _537.cy) * _535 / 2};
				_539.createLine({x1: _537.cx, y1: _537.cy, x2: st.x, y2: st.y}).setStroke(_53a);
				this._drawArrow(_539, st, nd, _53a);
			}
			var _53d = s.createGroup();
			for (var j = _533.length - 1; j >= 0; --j) {
				var _53c = _533[j], _53e = dojox.gfx._base._getTextBox(this.labelKey[j], {font: _51f}).w || 0, _53f = this.opt.htmlLabels && dojox.gfx.renderer != "vml" ? "html" : "gfx";
				elem = da.createText[_53f](this.chart, _53d, (!dojo._isBodyLtr() && _53f == "html") ? (_53c.x + _53e - dim.width) : _53c.x, _53c.y, "middle", this.labelKey[j], _51f, _521);
				if (this.opt.htmlLabels) {
					this.htmlElements.push(elem);
				}
			}
			var _540 = s.createGroup();
			if (spt == "polygon") {
				_540.createPolyline(_52f).setStroke(_53b);
				_540.createPolyline(_530).setStroke(_53b);
				if (_531.length > 0) {
					for (var j = _531.length - 1; j >= 0; --j) {
						_540.createPolyline(_531[j]).setStroke(_53b);
					}
				}
			} else {
				var _541 = this._getObjectLength(this.datas);
				_540.createCircle({cx: _537.cx, cy: _537.cy, r: r}).setStroke(_53b);
				_540.createCircle({cx: _537.cx, cy: _537.cy, r: r * ro}).setStroke(_53b);
				if (_532.length > 0) {
					for (var j = _532.length - 1; j >= 0; --j) {
						_540.createCircle({cx: _537.cx, cy: _537.cy, r: _532[j]}).setStroke(_53b);
					}
				}
			}
			var _542 = s.createGroup(), len = this._getObjectLength(this.datas), k = 0;
			for (var key in this.datas) {
				var data = this.datas[key], min = data.min, max = data.max, _543 = max - min, end = _529 + 2 * Math.PI * k / len;
				for (var i = 0; i < dv; i++) {
					var text = min + _543 * i / (dv - 1), _53c = this._getCoordinate(_537, r * (ro + (1 - ro) * i / (dv - 1)), end);
					text = this._getLabel(text);
					var _53e = dojox.gfx._base._getTextBox(text, {font: _51e}).w || 0, _53f = this.opt.htmlLabels && dojox.gfx.renderer != "vml" ? "html" : "gfx";
					if (this.opt.htmlLabels) {
						this.htmlElements.push(da.createText[_53f](this.chart, _542, (!dojo._isBodyLtr() && _53f == "html") ? (_53c.x + _53e - dim.width) : _53c.x, _53c.y, "start", text, _51e, _520));
					}
				}
				k++;
			}
			this.chart.seriesShapes = {};
			var _544 = [];
			for (var i = this.series.length - 1; i >= 0; i--) {
				var _538 = this.series[i], run = _538.data;
				if (run !== null) {
					var _545 = [], k = 0, _546 = [];
					for (var key in run) {
						var data = this.datas[key], min = data.min, max = data.max, _543 = max - min, _547 = run[key], end = _529 + 2 * Math.PI * k / len, _53c = this._getCoordinate(_537, r * (ro + (1 - ro) * (_547 - min) / _543), end);
						_545.push(_53c);
						_546.push({sname: _538.name, key: key, data: _547});
						k++;
					}
					_545[_545.length] = _545[0];
					_546[_546.length] = _546[0];
					var _548 = this._getBoundary(_545), _549 = t.next("spider", [o, _538]), ts = _538.group, f = g.normalizeColor(_549.series.fill), sk = {color: _549.series.fill, width: _526};
					f.a = o.seriesFillAlpha;
					_538.dyn = {fill: f, stroke: sk};
					var osps = this.oldSeriePoints[_538.name];
					var cs = this._createSeriesEntry(ts, (osps || _530), _545, f, sk, r, ro, ms, at);
					this.chart.seriesShapes[_538.name] = cs;
					this.oldSeriePoints[_538.name] = _545;
					var po = {element: "spider_poly", index: i, id: "spider_poly_" + _538.name, run: _538, plot: this, shape: cs.poly, parent: ts, brect: _548, cx: _537.cx, cy: _537.cy, cr: r, f: f, s: s};
					this._connectEvents(po);
					var so = {element: "spider_plot", index: i, id: "spider_plot_" + _538.name, run: _538, plot: this, shape: _538.group};
					this._connectEvents(so);
					dojo.forEach(cs.circles, function (c, i) {
						var _54a = c.getShape(), co = {element: "spider_circle", index: i, id: "spider_circle_" + _538.name + i, run: _538, plot: this, shape: c, parent: ts, tdata: _546[i], cx: _545[i].x, cy: _545[i].y, f: f, s: s};
						this._connectEvents(co);
					}, this);
				}
			}
			return this;
		}, _createSeriesEntry: function (ts, osps, sps, f, sk, r, ro, ms, at) {
			var _54b = ts.createPolyline(osps).setFill(f).setStroke(sk), _54c = [];
			for (var j = 0; j < osps.length; j++) {
				var _54d = osps[j], cr = ms;
				var _54e = ts.createCircle({cx: _54d.x, cy: _54d.y, r: cr}).setFill(f).setStroke(sk);
				_54c.push(_54e);
			}
			var _54f = dojo.map(sps, function (np, j) {
				var sp = osps[j], anim = new dojo._Animation({duration: 1000, easing: at, curve: [sp.y, np.y]});
				var spl = _54b, sc = _54c[j];
				dojo.connect(anim, "onAnimate", function (y) {
					var _550 = spl.getShape();
					_550.points[j].y = y;
					spl.setShape(_550);
					var _551 = sc.getShape();
					_551.cy = y;
					sc.setShape(_551);
				});
				return anim;
			});
			var _552 = dojo.map(sps, function (np, j) {
				var sp = osps[j], anim = new dojo._Animation({duration: 1000, easing: at, curve: [sp.x, np.x]});
				var spl = _54b, sc = _54c[j];
				dojo.connect(anim, "onAnimate", function (x) {
					var _553 = spl.getShape();
					_553.points[j].x = x;
					spl.setShape(_553);
					var _554 = sc.getShape();
					_554.cx = x;
					sc.setShape(_554);
				});
				return anim;
			});
			var _555 = dojo.fx.combine(_54f.concat(_552));
			_555.play();
			return {group: ts, poly: _54b, circles: _54c};
		}, plotEvent: function (o) {
			var _556 = o.id ? o.id : "default", a;
			if (_556 in this.animations) {
				a = this.animations[_556];
				a.anim && a.anim.stop(true);
			} else {
				a = this.animations[_556] = {};
			}
			if (o.element == "spider_poly") {
				if (!a.color) {
					var _557 = o.shape.getFill();
					if (!_557 || !(_557 instanceof dojo.Color)) {
						return;
					}
					a.color = {start: _557, end: _558(_557)};
				}
				var _559 = a.color.start, end = a.color.end;
				if (o.type == "onmouseout") {
					var t = _559;
					_559 = end;
					end = t;
				}
				a.anim = dojox.gfx.fx.animateFill({shape: o.shape, duration: 800, easing: dojo.fx.easing.backOut, color: {start: _559, end: end}});
				a.anim.play();
			} else {
				if (o.element == "spider_circle") {
					var init, _55a, _55b = 1.5;
					if (o.type == "onmouseover") {
						init = dojox.gfx.matrix.identity;
						_55a = _55b;
						var _55c = {type: "rect"};
						_55c.x = o.cx;
						_55c.y = o.cy;
						_55c.width = _55c.height = 1;
						var lt = dojo.coords(this.chart.node, true);
						_55c.x += lt.x;
						_55c.y += lt.y;
						_55c.x = Math.round(_55c.x);
						_55c.y = Math.round(_55c.y);
						_55c.width = Math.ceil(_55c.width);
						_55c.height = Math.ceil(_55c.height);
						this.aroundRect = _55c;
						var _55d = ["after", "before"];
						if (dijit && dijit.Tooltip) {
							dijit.showTooltip(o.tdata.sname + "<br/>" + o.tdata.key + "<br/>" + o.tdata.data, this.aroundRect, _55d);
						}
					} else {
						init = dojox.gfx.matrix.scaleAt(_55b, o.cx, o.cy);
						_55a = 1 / _55b;
						if (dijit && dijit.Tooltip) {
							this.aroundRect && dijit.hideTooltip(this.aroundRect);
						}
					}
					var cs = o.shape.getShape(), init = m.scaleAt(_55b, cs.cx, cs.cy), _55e = {shape: o.shape, duration: 200, easing: dojo.fx.easing.backOut, transform: [
						{name: "scaleAt", start: [1, cs.cx, cs.cy], end: [_55a, cs.cx, cs.cy]},
						init
					]};
					a.anim = dojox.gfx.fx.animateTransform(_55e);
					a.anim.play();
				} else {
					if (o.element == "spider_plot") {
						if (o.type == "onmouseover" && !dojo.isIE) {
							o.shape.moveToFront();
						}
					}
				}
			}
		}, _getBoundary: function (_55f) {
			var xmax = _55f[0].x, xmin = _55f[0].x, ymax = _55f[0].y, ymin = _55f[0].y;
			for (var i = 0; i < _55f.length; i++) {
				var _560 = _55f[i];
				xmax = Math.max(_560.x, xmax);
				ymax = Math.max(_560.y, ymax);
				xmin = Math.min(_560.x, xmin);
				ymin = Math.min(_560.y, ymin);
			}
			return {x: xmin, y: ymin, width: xmax - xmin, height: ymax - ymin};
		}, _drawArrow: function (s, _561, end, _562) {
			var len = Math.sqrt(Math.pow(end.x - _561.x, 2) + Math.pow(end.y - _561.y, 2)), sin = (end.y - _561.y) / len, cos = (end.x - _561.x) / len, _563 = {x: end.x + (len / 3) * (-sin), y: end.y + (len / 3) * cos}, _564 = {x: end.x + (len / 3) * sin, y: end.y + (len / 3) * (-cos)};
			s.createPolyline([_561, _563, _564]).setFill(_562.color).setStroke(_562);
		}, _buildPoints: function (_565, _566, _567, _568, _569, _56a) {
			for (var i = 0; i < _566; i++) {
				var end = _569 + 2 * Math.PI * i / _566;
				_565.push(this._getCoordinate(_567, _568, end));
			}
			if (_56a) {
				_565.push(this._getCoordinate(_567, _568, _569 + 2 * Math.PI));
			}
		}, _getCoordinate: function (_56b, _56c, _56d) {
			return {x: _56b.cx + _56c * Math.cos(_56d), y: _56b.cy + _56c * Math.sin(_56d)};
		}, _getObjectLength: function (obj) {
			var _56e = 0;
			if (dojo.isObject(obj)) {
				for (var key in obj) {
					_56e++;
				}
			}
			return _56e;
		}, _getLabel: function (_56f) {
			return dc.getLabel(_56f, this.opt.fixed, this.opt.precision);
		}});
		function _558(_570) {
			var a = new dojox.color.Color(_570), x = a.toHsl();
			if (x.s == 0) {
				x.l = x.l < 50 ? 100 : 0;
			} else {
				x.s = 100;
				if (x.l < 50) {
					x.l = 75;
				} else {
					if (x.l > 75) {
						x.l = 50;
					} else {
						x.l = x.l - 50 > 75 - x.l ? 50 : 75;
					}
				}
			}
			var _570 = dojox.color.fromHsl(x);
			_570.a = 0.7;
			return _570;
		};
	})();
}
if (!dojo._hasResource["dojox.charting.Chart2D"]) {
	dojo._hasResource["dojox.charting.Chart2D"] = true;
	dojo.provide("dojox.charting.Chart2D");
	dojo.deprecated("dojox.charting.Chart2D", "Use dojo.charting.Chart instead and require all other components explicitly", "2.0");
	dojox.charting.Chart2D = dojox.charting.Chart;
}
if (!dojo._hasResource["dojox.charting.widget.Chart2D"]) {
	dojo._hasResource["dojox.charting.widget.Chart2D"] = true;
	dojo.provide("dojox.charting.widget.Chart2D");
	dojo.deprecated("dojox.charting.widget.Chart2D", "Use dojo.charting.widget.Chart instead and require all other components explicitly", "2.0");
	dojox.charting.widget.Chart2D = dojox.charting.widget.Chart;
}
if (!dojo._hasResource["dojox.charting.themes.GreySkies"]) {
	dojo._hasResource["dojox.charting.themes.GreySkies"] = true;
	dojo.provide("dojox.charting.themes.GreySkies");
	(function () {
		var dxc = dojox.charting;
		dxc.themes.GreySkies = new dxc.Theme(dxc.Theme._def);
	})();
}
if (!dojo._hasResource["dojox.charting.widget.Sparkline"]) {
	dojo._hasResource["dojox.charting.widget.Sparkline"] = true;
	dojo.provide("dojox.charting.widget.Sparkline");
	(function () {
		var d = dojo;
		dojo.declare("dojox.charting.widget.Sparkline", dojox.charting.widget.Chart2D, {theme: dojox.charting.themes.GreySkies, margins: {l: 0, r: 0, t: 0, b: 0}, type: "Lines", valueFn: "Number(x)", store: "", field: "", query: "", queryOptions: "", start: "0", count: "Infinity", sort: "", data: "", name: "default", buildRendering: function () {
			var n = this.srcNodeRef;
			if (!n.childNodes.length || !d.query("> .axis, > .plot, > .action, > .series", n).length) {
				var plot = document.createElement("div");
				d.attr(plot, {"class": "plot", "name": "default", "type": this.type});
				n.appendChild(plot);
				var _571 = document.createElement("div");
				d.attr(_571, {"class": "series", plot: "default", name: this.name, start: this.start, count: this.count, valueFn: this.valueFn});
				d.forEach(["store", "field", "query", "queryOptions", "sort", "data"], function (i) {
					if (this[i].length) {
						d.attr(_571, i, this[i]);
					}
				}, this);
				n.appendChild(_571);
			}
			this.inherited(arguments);
		}});
	})();
}
if (!dojo._hasResource["dojox.charting.widget.Legend"]) {
	dojo._hasResource["dojox.charting.widget.Legend"] = true;
	dojo.provide("dojox.charting.widget.Legend");
	dojo.declare("dojox.charting.widget.Legend", [dijit._Widget, dijit._Templated], {chartRef: "", horizontal: true, swatchSize: 18, templateString: "<table dojoAttachPoint='legendNode' class='dojoxLegendNode' role='group' aria-label='chart legend'><tbody dojoAttachPoint='legendBody'></tbody></table>", legendNode: null, legendBody: null, postCreate: function () {
		if (!this.chart) {
			if (!this.chartRef) {
				return;
			}
			this.chart = dijit.byId(this.chartRef);
			if (!this.chart) {
				var node = dojo.byId(this.chartRef);
				if (node) {
					this.chart = dijit.byNode(node);
				} else {
					return;
				}
			}
			this.series = this.chart.chart.series;
		} else {
			this.series = this.chart.series;
		}
		this.refresh();
	}, refresh: function () {
		var df = dojox.lang.functional;
		if (this._surfaces) {
			dojo.forEach(this._surfaces, function (_572) {
				_572.destroy();
			});
		}
		this._surfaces = [];
		while (this.legendBody.lastChild) {
			dojo.destroy(this.legendBody.lastChild);
		}
		if (this.horizontal) {
			dojo.addClass(this.legendNode, "dojoxLegendHorizontal");
			this._tr = dojo.create("tr", null, this.legendBody);
			this._inrow = 0;
		}
		var s = this.series;
		if (s.length == 0) {
			return;
		}
		if (s[0].chart.stack[0].declaredClass == "dojox.charting.plot2d.Pie") {
			var t = s[0].chart.stack[0];
			if (typeof t.run.data[0] == "number") {
				var _573 = df.map(t.run.data, "Math.max(x, 0)");
				if (df.every(_573, "<= 0")) {
					return;
				}
				var _574 = df.map(_573, "/this", df.foldl(_573, "+", 0));
				dojo.forEach(_574, function (x, i) {
					this._addLabel(t.dyn[i], t._getLabel(x * 100) + "%");
				}, this);
			} else {
				dojo.forEach(t.run.data, function (x, i) {
					this._addLabel(t.dyn[i], x.legend || x.text || x.y);
				}, this);
			}
		} else {
			dojo.forEach(s, function (x) {
				this._addLabel(x.dyn, x.legend || x.name);
			}, this);
		}
	}, _addLabel: function (dyn, _575) {
		var _576 = dojo.create("td"), icon = dojo.create("div", null, _576), text = dojo.create("label", null, _576), div = dojo.create("div", {style: {"width": this.swatchSize + "px", "height": this.swatchSize + "px", "float": "left"}}, icon);
		dojo.addClass(icon, "dojoxLegendIcon dijitInline");
		dojo.addClass(text, "dojoxLegendText");
		if (this._tr) {
			this._tr.appendChild(_576);
			if (++this._inrow === this.horizontal) {
				this._tr = dojo.create("tr", null, this.legendBody);
				this._inrow = 0;
			}
		} else {
			var tr = dojo.create("tr", null, this.legendBody);
			tr.appendChild(_576);
		}
		this._makeIcon(div, dyn);
		text.innerHTML = String(_575);
	}, _makeIcon: function (div, dyn) {
		var mb = {h: this.swatchSize, w: this.swatchSize};
		var _577 = dojox.gfx.createSurface(div, mb.w, mb.h);
		this._surfaces.push(_577);
		if (dyn.fill) {
			_577.createRect({x: 2, y: 2, width: mb.w - 4, height: mb.h - 4}).setFill(dyn.fill).setStroke(dyn.stroke);
		} else {
			if (dyn.stroke || dyn.marker) {
				var line = {x1: 0, y1: mb.h / 2, x2: mb.w, y2: mb.h / 2};
				if (dyn.stroke) {
					_577.createLine(line).setStroke(dyn.stroke);
				}
				if (dyn.marker) {
					var c = {x: mb.w / 2, y: mb.h / 2};
					if (dyn.stroke) {
						_577.createPath({path: "M" + c.x + " " + c.y + " " + dyn.marker}).setFill(dyn.stroke.color).setStroke(dyn.stroke);
					} else {
						_577.createPath({path: "M" + c.x + " " + c.y + " " + dyn.marker}).setFill(dyn.color).setStroke(dyn.color);
					}
				}
			} else {
				_577.createRect({x: 2, y: 2, width: mb.w - 4, height: mb.h - 4}).setStroke("black");
				_577.createLine({x1: 2, y1: 2, x2: mb.w - 2, y2: mb.h - 2}).setStroke("black");
				_577.createLine({x1: 2, y1: mb.h - 2, x2: mb.w - 2, y2: 2}).setStroke("black");
			}
		}
	}});
}
