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
if (!dojo._hasResource["dojox.mobile._base"]) {
	dojo._hasResource["dojox.mobile._base"] = true;
	dojo.provide("dojox.mobile._base");
	dojo.isBB = (navigator.userAgent.indexOf("BlackBerry") != -1) && !dojo.isWebKit;
	dojo.declare("dojox.mobile.View", dijit._WidgetBase, {selected: false, keepScrollPos: true, _started: false, constructor: function (_7f, _80) {
		if (_80) {
			dojo.byId(_80).style.visibility = "hidden";
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
		var _81 = this;
		setTimeout(function () {
			if (!_81._visible) {
				_81.domNode.style.display = "none";
			} else {
				dojox.mobile.currentView = _81;
				_81.onStartView();
			}
			_81.domNode.style.visibility = "visible";
		}, dojo.isIE ? 100 : 0);
		this._started = true;
	}, onStartView: function () {
	}, onBeforeTransitionIn: function (_82, dir, _83, _84, _85) {
	}, onAfterTransitionIn: function (_86, dir, _87, _88, _89) {
	}, onBeforeTransitionOut: function (_8a, dir, _8b, _8c, _8d) {
	}, onAfterTransitionOut: function (_8e, dir, _8f, _90, _91) {
	}, _saveState: function (_92, dir, _93, _94, _95) {
		this._context = _94;
		this._method = _95;
		if (_93 == "none" || !dojo.isWebKit) {
			_93 = null;
		}
		this._moveTo = _92;
		this._dir = dir;
		this._transition = _93;
		this._arguments = [];
		var i;
		for (i = 0; i < arguments.length; i++) {
			this._arguments.push(arguments[i]);
		}
		this._args = [];
		if (_94 || _95) {
			for (i = 5; i < arguments.length; i++) {
				this._args.push(arguments[i]);
			}
		}
	}, performTransition: function (_96, dir, _97, _98, _99) {
		if (dojo.hash) {
			if (typeof (_96) == "string" && _96.charAt(0) == "#" && !dojox.mobile._params) {
				dojox.mobile._params = [];
				for (var i = 0; i < arguments.length; i++) {
					dojox.mobile._params.push(arguments[i]);
				}
				dojo.hash(_96);
				return;
			}
		}
		this._saveState.apply(this, arguments);
		var _9a;
		if (_96) {
			if (typeof (_96) == "string") {
				_96.match(/^#?([^&]+)/);
				_9a = RegExp.$1;
			} else {
				_9a = _96;
			}
		} else {
			if (!this._dummyNode) {
				this._dummyNode = dojo.doc.createElement("DIV");
				dojo.body().appendChild(this._dummyNode);
			}
			_9a = this._dummyNode;
		}
		var _9b = this.domNode;
		_9a = this.toNode = dojo.byId(_9a);
		if (!_9a) {
			alert("dojox.mobile.View#performTransition: destination view not found: " + _9a);
		}
		_9a.style.visibility = "hidden";
		_9a.style.display = "";
		this.onBeforeTransitionOut.apply(this, arguments);
		var _9c = dijit.byNode(_9a);
		if (_9c) {
			if (this.keepScrollPos && !dijit.getEnclosingWidget(this.domNode.parentNode)) {
				var _9d = dojo.body().scrollTop || dojo.doc.documentElement.scrollTop || dojo.global.pageYOffset || 0;
				if (dir == 1) {
					_9a.style.top = "0px";
					if (_9d > 1) {
						_9b.style.top = -_9d + "px";
						if (dojo.config["mblHideAddressBar"] !== false) {
							setTimeout(function () {
								dojo.global.scrollTo(0, 1);
							}, 0);
						}
					}
				} else {
					if (_9d > 1 || _9a.offsetTop !== 0) {
						var _9e = -_9a.offsetTop;
						_9a.style.top = "0px";
						_9b.style.top = _9e - _9d + "px";
						if (dojo.config["mblHideAddressBar"] !== false && _9e > 0) {
							setTimeout(function () {
								dojo.global.scrollTo(0, _9e + 1);
							}, 0);
						}
					}
				}
			} else {
				_9a.style.top = "0px";
			}
			_9c.onBeforeTransitionIn.apply(_9c, arguments);
		}
		_9a.style.display = "none";
		_9a.style.visibility = "visible";
		this._doTransition(_9b, _9a, _97, dir);
	}, _doTransition: function (_9f, _a0, _a1, dir) {
		var rev = (dir == -1) ? " reverse" : "";
		_a0.style.display = "";
		if (!_a1 || _a1 == "none") {
			this.domNode.style.display = "none";
			this.invokeCallback();
		} else {
			dojo.addClass(_9f, _a1 + " out" + rev);
			dojo.addClass(_a0, _a1 + " in" + rev);
		}
	}, onAnimationStart: function (e) {
	}, onAnimationEnd: function (e) {
		var _a2 = false;
		if (dojo.hasClass(this.domNode, "out")) {
			_a2 = true;
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
		if (_a2) {
			this.invokeCallback();
		}
		this.domNode && (this.domNode.className = "mblView");
	}, invokeCallback: function () {
		this.onAfterTransitionOut.apply(this, this._arguments);
		var _a3 = dijit.byNode(this.toNode);
		if (_a3) {
			_a3.onAfterTransitionIn.apply(_a3, this._arguments);
		}
		dojox.mobile.currentView = _a3;
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
		var _a4 = this.domNode.parentNode.childNodes;
		for (var i = 0; i < _a4.length; i++) {
			if (dojo.hasClass(_a4[i], "mblView") && dojo.style(_a4[i], "display") != "none") {
				return dijit.byNode(_a4[i]);
			}
		}
	}, show: function () {
		var fs = this.getShowingView().domNode.style;
		var ts = this.domNode.style;
		fs.display = "none";
		ts.display = "";
		dojox.mobile.currentView = this;
	}, addChild: function (_a5) {
		this.containerNode.appendChild(_a5.domNode);
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
			var _a6 = dojo.create("DIV", {className: "mblArrowButtonHead"}, btn);
			var _a7 = dojo.create("DIV", {className: "mblArrowButtonBody mblArrowButtonText"}, btn);
			this._body = _a7;
			this._head = _a6;
			this._btn = btn;
			_a7.innerHTML = this.back;
			this.connect(_a7, "onclick", "onClick");
			var _a8 = dojo.create("DIV", {className: "mblArrowButtonNeck"}, btn);
			btn.style.width = _a7.offsetWidth + _a6.offsetWidth + "px";
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
	}, setLabel: function (_a9) {
		if (_a9 != this.label) {
			this.label = _a9;
			this.domNode.firstChild.nodeValue = _a9;
		}
	}, goTo: function (_aa, _ab) {
		if (!this._view) {
			this._view = dijit.byNode(this.domNode.parentNode);
		}
		if (!this._view) {
			return;
		}
		if (_ab) {
			this._view.performTransition(null, -1, this.transition, this, function () {
				location.href = _ab;
			});
		} else {
			if (dojox.mobile.app && dojox.mobile.app.STAGE_CONTROLLER_ACTIVE) {
				dojo.publish("/dojox/mobile/app/goback");
			} else {
				this._view.performTransition(_aa, -1, this.transition);
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
	}, addChild: function (_ac) {
		this.containerNode.appendChild(_ac.domNode);
		_ac.inheritParams();
		_ac.setIcon();
	}});
	dojo.declare("dojox.mobile.EdgeToEdgeList", dojox.mobile.RoundRectList, {stateful: false, buildRendering: function () {
		this.inherited(arguments);
		this.domNode.className = "mblEdgeToEdgeList";
	}});
	dojo.declare("dojox.mobile.AbstractItem", dijit._WidgetBase, {icon: "", iconPos: "", href: "", hrefTarget: "", moveTo: "", scene: "", clickable: false, url: "", urlTarget: "", transition: "", transitionDir: 1, callback: null, sync: true, label: "", toggle: false, _duration: 800, inheritParams: function () {
		var _ad = this.getParentWidget();
		if (_ad) {
			if (!this.transition) {
				this.transition = _ad.transition;
			}
			if (!this.icon) {
				this.icon = _ad.iconBase;
			}
			if (!this.iconPos) {
				this.iconPos = _ad.iconPos;
			}
		}
	}, findCurrentView: function (_ae) {
		var w;
		if (_ae) {
			w = dijit.byId(_ae);
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
	}, transitionTo: function (_af, _b0, url, _b1) {
		var w = this.findCurrentView(_af);
		if (!w || _af && w === dijit.byId(_af)) {
			return;
		}
		if (_b0) {
			if (this.hrefTarget) {
				dojox.mobile.openWindow(this.href, this.hrefTarget);
			} else {
				w.performTransition(null, this.transitionDir, this.transition, this, function () {
					location.href = _b0;
				});
			}
			return;
		} else {
			if (_b1) {
				dojo.publish("/dojox/mobile/app/pushScene", [_b1]);
				return;
			}
		}
		if (url) {
			var id;
			if (dojox.mobile._viewMap && dojox.mobile._viewMap[url]) {
				id = dojox.mobile._viewMap[url];
			} else {
				var _b2 = this._text;
				if (!_b2) {
					if (this.sync) {
						_b2 = dojo.trim(dojo._getText(url));
					} else {
						dojo["require"]("dojo._base.xhr");
						var _b3 = dojox.mobile.ProgressIndicator.getInstance();
						dojo.body().appendChild(_b3.domNode);
						_b3.start();
						var xhr = dojo.xhrGet({url: url, handleAs: "text"});
						xhr.addCallback(dojo.hitch(this, function (_b4, _b5) {
							_b3.stop();
							if (_b4) {
								this._text = _b4;
								this.transitionTo(_af, _b0, url, _b1);
							}
						}));
						xhr.addErrback(function (_b6) {
							_b3.stop();
							alert("Failed to load " + url + "\n" + (_b6.description || _b6));
						});
						return;
					}
				}
				this._text = null;
				id = this._parse(_b2);
				if (!dojox.mobile._viewMap) {
					dojox.mobile._viewMap = [];
				}
				dojox.mobile._viewMap[url] = id;
			}
			_af = id;
			w = this.findCurrentView(_af) || w;
		}
		w.performTransition(_af, this.transitionDir, this.transition, this.callback && this, this.callback);
	}, _parse: function (_b7) {
		var _b8 = dojo.create("DIV");
		var _b9;
		var id = this.urlTarget;
		var _ba = dijit.byId(id) && dijit.byId(id).containerNode || dojo.byId(id) || dojox.mobile.currentView && dojox.mobile.currentView.domNode.parentNode || dojo.body();
		if (_b7.charAt(0) == "<") {
			_b8.innerHTML = _b7;
			_b9 = _b8.firstChild;
			if (!_b9 && _b9.nodeType != 1) {
				alert("dojox.mobile.AbstractItem#transitionTo: invalid view content");
				return;
			}
			_b9.setAttribute("_started", "true");
			_b9.style.visibility = "hidden";
			_ba.appendChild(_b8);
			(dojox.mobile.parser || dojo.parser).parse(_b8);
			_ba.appendChild(_ba.removeChild(_b8).firstChild);
		} else {
			if (_b7.charAt(0) == "{") {
				_ba.appendChild(_b8);
				this._ws = [];
				_b9 = this._instantiate(eval("(" + _b7 + ")"), _b8);
				for (var i = 0; i < this._ws.length; i++) {
					var w = this._ws[i];
					w.startup && !w._started && (!w.getParent || !w.getParent()) && w.startup();
				}
				this._ws = null;
			}
		}
		_b9.style.display = "none";
		_b9.style.visibility = "visible";
		var id = _b9.id;
		return dojo.hash ? "#" + id : id;
	}, _instantiate: function (obj, _bb, _bc) {
		var _bd;
		for (var key in obj) {
			if (key.charAt(0) == "@") {
				continue;
			}
			var cls = dojo.getObject(key);
			if (!cls) {
				continue;
			}
			var _be = {};
			var _bf = cls.prototype;
			var _c0 = dojo.isArray(obj[key]) ? obj[key] : [obj[key]];
			for (var i = 0; i < _c0.length; i++) {
				for (var _c1 in _c0[i]) {
					if (_c1.charAt(0) == "@") {
						var val = _c0[i][_c1];
						_c1 = _c1.substring(1);
						if (typeof _bf[_c1] == "string") {
							_be[_c1] = val;
						} else {
							if (typeof _bf[_c1] == "number") {
								_be[_c1] = val - 0;
							} else {
								if (typeof _bf[_c1] == "boolean") {
									_be[_c1] = (val != "false");
								} else {
									if (typeof _bf[_c1] == "object") {
										_be[_c1] = eval("(" + val + ")");
									}
								}
							}
						}
					}
				}
				_bd = new cls(_be, _bb);
				if (!_bb) {
					this._ws.push(_bd);
				}
				if (_bc && _bc.addChild) {
					_bc.addChild(_bd);
				}
				this._instantiate(_c0[i], null, _bd);
			}
		}
		return _bd && _bd.domNode;
	}, createDomButton: function (_c2, _c3) {
		var s = _c2.className;
		if (s.match(/mblDomButton\w+_(\d+)/)) {
			var _c4 = RegExp.$1 - 0;
			for (var i = 0, p = (_c3 || _c2); i < _c4; i++) {
				p = dojo.create("DIV", null, p);
			}
		}
	}, select: function (_c5) {
	}, defaultClickAction: function () {
		if (this.toggle) {
			this.select(this.selected);
		} else {
			if (!this.selected) {
				this.select();
				if (!this.selectOne) {
					var _c6 = this;
					setTimeout(function () {
						_c6.select(true);
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
			var _c7 = this.getParentWidget();
			if (!this.noArrow && !(_c7 && _c7.stateful)) {
				var _c8 = dojo.create("DIV");
				_c8.className = "mblArrow";
				a.appendChild(_c8);
			}
			this.connect(a, "onclick", "onClick");
		} else {
			if (this.btnClass) {
				var div = this.btnNode = dojo.create("DIV");
				div.className = this.btnClass + " mblRightButton";
				div.appendChild(dojo.create("DIV"));
				div.appendChild(dojo.create("P"));
				var _c9 = dojo.create("DIV");
				_c9.className = "mblRightButtonContainer";
				_c9.appendChild(div);
				a.appendChild(_c9);
				dojo.addClass(a, "mblListItemAnchorHasRightButton");
				setTimeout(function () {
					_c9.style.width = div.offsetWidth + "px";
					_c9.style.height = div.offsetHeight + "px";
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
	}, _setRightTextAttr: function (_ca) {
		this.rightText = _ca;
		if (!this._rightTextNode) {
			this._rightTextNode = dojo.create("DIV", {className: "mblRightText"}, this.anchorNode);
		}
		this._rightTextNode.innerHTML = _ca;
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
	}, _changeState: function (_cb) {
		this.inner.style.left = "";
		dojo.addClass(this.domNode, "mblSwitchAnimation");
		dojo.removeClass(this.domNode, (_cb == "on") ? "mblSwitchOff" : "mblSwitchOn");
		dojo.addClass(this.domNode, (_cb == "on") ? "mblSwitchOn" : "mblSwitchOff");
		var _cc = this;
		setTimeout(function () {
			_cc[_cb == "off" ? "left" : "right"].style.display = "none";
			dojo.removeClass(_cc.domNode, "mblSwitchAnimation");
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
		var _cd = (this.inner.offsetLeft < -(this._width / 2)) ? "off" : "on";
		this._changeState(_cd);
		if (_cd != this.value) {
			this.value = _cd;
			this.onStateChanged(this.value);
		}
	}, onStateChanged: function (_ce) {
	}});
	dojo.declare("dojox.mobile.Button", dijit._WidgetBase, {btnClass: "mblBlueButton", duration: 1000, label: null, buildRendering: function () {
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("BUTTON");
		this.domNode.className = "mblButton " + this.btnClass;
		if (this.label) {
			this.domNode.innerHTML = this.label;
		}
		this.connect(this.domNode, "onclick", "onClick");
	}, onClick: function (e) {
		var _cf = this.domNode;
		var c = "mblButtonSelected " + this.btnClass + "Selected";
		dojo.addClass(_cf, c);
		setTimeout(function () {
			dojo.removeClass(_cf, c);
		}, this.duration);
	}});
	dojo.declare("dojox.mobile.ToolBarButton", dojox.mobile.AbstractItem, {selected: false, _defaultColor: "mblColorDefault", _selColor: "mblColorDefaultSel", buildRendering: function () {
		this.inheritParams();
		this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("div");
		dojo.addClass(this.domNode, "mblToolbarButton mblArrowButtonText");
		var _d0;
		if (this.selected) {
			_d0 = this._selColor;
		} else {
			if (this.domNode.className.indexOf("mblColor") == -1) {
				_d0 = this._defaultColor;
			}
		}
		dojo.addClass(this.domNode, _d0);
		if (this.label) {
			this.domNode.innerHTML = this.label;
		} else {
			this.label = this.domNode.innerHTML;
		}
		if (this.icon && this.icon != "none") {
			var img;
			if (this.iconPos) {
				var _d1 = dojo.create("DIV", null, this.domNode);
				img = dojo.create("IMG", null, _d1);
				img.style.position = "absolute";
				var arr = this.iconPos.split(/[ ,]/);
				dojo.style(_d1, {position: "relative", width: arr[2] + "px", height: arr[3] + "px"});
			} else {
				img = dojo.create("IMG", null, this.domNode);
			}
			img.src = this.icon;
			dojox.mobile.setupIcon(img, this.iconPos);
			this.iconNode = img;
		}
		this.createDomButton(this.domNode);
		this.connect(this.domNode, "onclick", "onClick");
	}, select: function (_d2) {
		dojo.toggleClass(this.domNode, this._selColor, !_d2);
		this.selected = !_d2;
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
		var _d3 = 0;
		var _d4 = this;
		this.timer = setInterval(function () {
			_d3--;
			_d3 = _d3 < 0 ? 11 : _d3;
			var c = _d4.colors;
			for (var i = 0; i < 12; i++) {
				var idx = (_d3 + i) % 12;
				_d4._bars[i].style.backgroundColor = c[idx];
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
		var _d5 = document.getElementsByTagName("link");
		for (var i = 0, len = _d5.length; i < len; i++) {
			if (_d5[i].href.match(/dojox\/mobile\/themes\/(\w+)\//)) {
				dojox.mobile.theme = RegExp.$1;
				dojo.addClass(dojo.body(), dojox.mobile.theme);
				break;
			}
		}
	};
	dojox.mobile.setupIcon = function (_d6, _d7) {
		if (_d6 && _d7) {
			var arr = dojo.map(_d7.split(/[ ,]/), function (_d8) {
				return _d8 - 0;
			});
			var t = arr[0];
			var r = arr[1] + arr[2];
			var b = arr[0] + arr[3];
			var l = arr[1];
			_d6.style.clip = "rect(" + t + "px " + r + "px " + b + "px " + l + "px)";
			_d6.style.top = dojo.style(_d6, "top") - t + "px";
			_d6.style.left = dojo.style(_d6.parentNode, "paddingLeft") - l + "px";
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
	dojox.mobile.openWindow = function (url, _d9) {
		dojo.global.open(url, _d9 || "_blank");
	};
	dojo._loaders.unshift(function () {
		var _da = dojo.body().getElementsByTagName("*");
		var i, len, s;
		len = _da.length;
		for (i = 0; i < len; i++) {
			s = _da[i].getAttribute("dojoType");
			if (s) {
				if (_da[i].parentNode.getAttribute("lazy") == "true") {
					_da[i].setAttribute("__dojoType", s);
					_da[i].removeAttribute("dojoType");
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
		var _db = dojo.body().getElementsByTagName("*");
		var i, len = _db.length, s;
		for (i = 0; i < len; i++) {
			s = _db[i].getAttribute("__dojoType");
			if (s) {
				_db[i].setAttribute("dojoType", s);
				_db[i].removeAttribute("__dojoType");
			}
		}
		if (dojo.hash) {
			var _dc = function (_dd) {
				var arr;
				arr = dijit.findWidgets(_dd);
				var _de = arr;
				for (var i = 0; i < _de.length; i++) {
					arr = arr.concat(_dc(_de[i].containerNode));
				}
				return arr;
			};
			dojo.subscribe("/dojo/hashchange", null, function (_df) {
				var _e0 = dojox.mobile.currentView;
				if (!_e0) {
					return;
				}
				var _e1 = dojox.mobile._params;
				if (!_e1) {
					var _e2 = _df ? _df : dojox.mobile._defaultView.id;
					var _e3 = _dc(_e0.domNode);
					var dir = 1, _e4 = "slide";
					for (i = 0; i < _e3.length; i++) {
						var w = _e3[i];
						if ("#" + _e2 == w.moveTo) {
							_e4 = w.transition;
							dir = (w instanceof dojox.mobile.Heading) ? -1 : 1;
							break;
						}
					}
					_e1 = [_e2, dir, _e4];
				}
				_e0.performTransition.apply(_e0, _e1);
				dojox.mobile._params = null;
			});
		}
		dojo.body().style.visibility = "visible";
	});
	dijit.getEnclosingWidget = function (_e5) {
		while (_e5 && _e5.tagName !== "BODY") {
			if (_e5.getAttribute && _e5.getAttribute("widgetId")) {
				return dijit.registry.byId(_e5.getAttribute("widgetId"));
			}
			_e5 = _e5._parentNode || _e5.parentNode;
		}
		return null;
	};
}
if (!dojo._hasResource["dojox.mobile"]) {
	dojo._hasResource["dojox.mobile"] = true;
	dojo.provide("dojox.mobile");
	dojo.experimental("dojox.mobile");
}