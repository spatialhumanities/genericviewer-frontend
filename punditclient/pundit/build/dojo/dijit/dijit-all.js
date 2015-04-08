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

if (!dojo._hasResource["dojo.colors"]) {
	dojo._hasResource["dojo.colors"] = true;
	dojo.provide("dojo.colors");
	dojo.getObject("colors", true, dojo);
	(function () {
		var _1 = function (m1, m2, h) {
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
		dojo.colorFromRgb = function (_2, _3) {
			var m = _2.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);
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
						return dojo.colorFromArray(a, _3);
					}
					return dojo.colorFromArray(c, _3);
				}
				if ((t == "hsl" && l == 3) || (t == "hsla" && l == 4)) {
					var H = ((parseFloat(c[0]) % 360) + 360) % 360 / 360, S = parseFloat(c[1]) / 100, L = parseFloat(c[2]) / 100, m2 = L <= 0.5 ? L * (S + 1) : L + S - L * S, m1 = 2 * L - m2;
					a = [_1(m1, m2, H + 1 / 3) * 256, _1(m1, m2, H) * 256, _1(m1, m2, H - 1 / 3) * 256, 1];
					if (l == 4) {
						a[3] = c[3];
					}
					return dojo.colorFromArray(a, _3);
				}
			}
			return null;
		};
		var _4 = function (c, _5, _6) {
			c = Number(c);
			return isNaN(c) ? _6 : c < _5 ? _5 : c > _6 ? _6 : c;
		};
		dojo.Color.prototype.sanitize = function () {
			var t = this;
			t.r = Math.round(_4(t.r, 0, 255));
			t.g = Math.round(_4(t.g, 0, 255));
			t.b = Math.round(_4(t.b, 0, 255));
			t.a = _4(t.a, 0, 1);
			return this;
		};
	})();
	dojo.colors.makeGrey = function (g, a) {
		return dojo.colorFromArray([g, g, g, a]);
	};
	dojo.mixin(dojo.Color.named, {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], blanchedalmond: [255, 235, 205], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], oldlace: [253, 245, 230], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], thistle: [216, 191, 216], tomato: [255, 99, 71], transparent: [0, 0, 0, 0], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], whitesmoke: [245, 245, 245], yellowgreen: [154, 205, 50]});
}
if (!dojo._hasResource["dojo.i18n"]) {
	dojo._hasResource["dojo.i18n"] = true;
	dojo.provide("dojo.i18n");
	dojo.getObject("i18n", true, dojo);
	dojo.i18n.getLocalization = dojo.i18n.getLocalization || function (_7, _8, _9) {
		_9 = dojo.i18n.normalizeLocale(_9);
		var _a = _9.split("-");
		var _b = [_7, "nls", _8].join(".");
		var _c = dojo._loadedModules[_b];
		if (_c) {
			var _d;
			for (var i = _a.length; i > 0; i--) {
				var _e = _a.slice(0, i).join("_");
				if (_c[_e]) {
					_d = _c[_e];
					break;
				}
			}
			if (!_d) {
				_d = _c.ROOT;
			}
			if (_d) {
				var _f = function () {
				};
				_f.prototype = _d;
				return new _f();
			}
		}
		throw new Error("Bundle not found: " + _8 + " in " + _7 + " , locale=" + _9);
	};
	dojo.i18n.normalizeLocale = function (_10) {
		var _11 = _10 ? _10.toLowerCase() : dojo.locale;
		if (_11 == "root") {
			_11 = "ROOT";
		}
		return _11;
	};
	dojo.i18n._requireLocalization = function (_12, _13, _14, _15) {
		var _16 = dojo.i18n.normalizeLocale(_14);
		var _17 = [_12, "nls", _13].join(".");
		var _18 = "";
		if (_15) {
			var _19 = _15.split(",");
			for (var i = 0; i < _19.length; i++) {
				if (_16["indexOf"](_19[i]) == 0) {
					if (_19[i].length > _18.length) {
						_18 = _19[i];
					}
				}
			}
			if (!_18) {
				_18 = "ROOT";
			}
		}
		var _1a = _15 ? _18 : _16;
		var _1b = dojo._loadedModules[_17];
		var _1c = null;
		if (_1b) {
			if (dojo.config.localizationComplete && _1b._built) {
				return;
			}
			var _1d = _1a.replace(/-/g, "_");
			var _1e = _17 + "." + _1d;
			_1c = dojo._loadedModules[_1e];
		}
		if (!_1c) {
			_1b = dojo["provide"](_17);
			var _1f = dojo._getModuleSymbols(_12);
			var _20 = _1f.concat("nls").join("/");
			var _21;
			dojo.i18n._searchLocalePath(_1a, _15, function (loc) {
				var _22 = loc.replace(/-/g, "_");
				var _23 = _17 + "." + _22;
				var _24 = false;
				if (!dojo._loadedModules[_23]) {
					dojo["provide"](_23);
					var _25 = [_20];
					if (loc != "ROOT") {
						_25.push(loc);
					}
					_25.push(_13);
					var _26 = _25.join("/") + ".js";
					_24 = dojo._loadPath(_26, null, function (_27) {
						_27 = _27.root || _27;
						var _28 = function () {
						};
						_28.prototype = _21;
						_1b[_22] = new _28();
						for (var j in _27) {
							_1b[_22][j] = _27[j];
						}
					});
				} else {
					_24 = true;
				}
				if (_24 && _1b[_22]) {
					_21 = _1b[_22];
				} else {
					_1b[_22] = _21;
				}
				if (_15) {
					return true;
				}
			});
		}
		if (_15 && _16 != _18) {
			_1b[_16.replace(/-/g, "_")] = _1b[_18.replace(/-/g, "_")];
		}
	};
	(function () {
		var _29 = dojo.config.extraLocale;
		if (_29) {
			if (!_29 instanceof Array) {
				_29 = [_29];
			}
			var req = dojo.i18n._requireLocalization;
			dojo.i18n._requireLocalization = function (m, b, _2a, _2b) {
				req(m, b, _2a, _2b);
				if (_2a) {
					return;
				}
				for (var i = 0; i < _29.length; i++) {
					req(m, b, _29[i], _2b);
				}
			};
		}
	})();
	dojo.i18n._searchLocalePath = function (_2c, _2d, _2e) {
		_2c = dojo.i18n.normalizeLocale(_2c);
		var _2f = _2c.split("-");
		var _30 = [];
		for (var i = _2f.length; i > 0; i--) {
			_30.push(_2f.slice(0, i).join("-"));
		}
		_30.push(false);
		if (_2d) {
			_30.reverse();
		}
		for (var j = _30.length - 1; j >= 0; j--) {
			var loc = _30[j] || "ROOT";
			var _31 = _2e(loc);
			if (_31) {
				break;
			}
		}
	};
	dojo.i18n._preloadLocalizations = function (_32, _33) {
		function _34(_35) {
			_35 = dojo.i18n.normalizeLocale(_35);
			dojo.i18n._searchLocalePath(_35, true, function (loc) {
				for (var i = 0; i < _33.length; i++) {
					if (_33[i] == loc) {
						dojo["require"](_32 + "_" + loc);
						return true;
					}
				}
				return false;
			});
		};
		_34();
		var _36 = dojo.config.extraLocale || [];
		for (var i = 0; i < _36.length; i++) {
			_34(_36[i]);
		}
	};
}
if (!dojo._hasResource["dijit._PaletteMixin"]) {
	dojo._hasResource["dijit._PaletteMixin"] = true;
	dojo.provide("dijit._PaletteMixin");
	dojo.declare("dijit._PaletteMixin", [dijit._CssStateMixin], {defaultTimeout: 500, timeoutChangeRate: 0.9, value: null, _selectedCell: -1, tabIndex: "0", cellClass: "dijitPaletteCell", dyeClass: "", _preparePalette: function (_37, _38, _39) {
		this._cells = [];
		var url = this._blankGif;
		_39 = _39 || dojo.getObject(this.dyeClass);
		for (var row = 0; row < _37.length; row++) {
			var _3a = dojo.create("tr", {tabIndex: "-1"}, this.gridNode);
			for (var col = 0; col < _37[row].length; col++) {
				var _3b = _37[row][col];
				if (_3b) {
					var _3c = new _39(_3b, row, col);
					var _3d = dojo.create("td", {"class": this.cellClass, tabIndex: "-1", title: _38[_3b]});
					_3c.fillCell(_3d, url);
					this.connect(_3d, "ondijitclick", "_onCellClick");
					this._trackMouseState(_3d, this.cellClass);
					dojo.place(_3d, _3a);
					_3d.index = this._cells.length;
					this._cells.push({node: _3d, dye: _3c});
				}
			}
		}
		this._xDim = _37[0].length;
		this._yDim = _37.length;
		var _3e = {UP_ARROW: -this._xDim, DOWN_ARROW: this._xDim, RIGHT_ARROW: this.isLeftToRight() ? 1 : -1, LEFT_ARROW: this.isLeftToRight() ? -1 : 1};
		for (var key in _3e) {
			this._connects.push(dijit.typematic.addKeyListener(this.domNode, {charOrCode: dojo.keys[key], ctrlKey: false, altKey: false, shiftKey: false}, this, function () {
				var _3f = _3e[key];
				return function (_40) {
					this._navigateByKey(_3f, _40);
				};
			}(), this.timeoutChangeRate, this.defaultTimeout));
		}
	}, postCreate: function () {
		this.inherited(arguments);
		this._setCurrent(this._cells[0].node);
	}, focus: function () {
		dijit.focus(this._currentFocus);
	}, _onCellClick: function (evt) {
		var _41 = evt.currentTarget, _42 = this._getDye(_41).getValue();
		this._setCurrent(_41);
		setTimeout(dojo.hitch(this, function () {
			dijit.focus(_41);
			this._setValueAttr(_42, true);
		}));
		dojo.removeClass(_41, "dijitPaletteCellHover");
		dojo.stopEvent(evt);
	}, _setCurrent: function (_43) {
		if ("_currentFocus" in this) {
			dojo.attr(this._currentFocus, "tabIndex", "-1");
		}
		this._currentFocus = _43;
		if (_43) {
			dojo.attr(_43, "tabIndex", this.tabIndex);
		}
	}, _setValueAttr: function (_44, _45) {
		if (this._selectedCell >= 0) {
			dojo.removeClass(this._cells[this._selectedCell].node, "dijitPaletteCellSelected");
		}
		this._selectedCell = -1;
		if (_44) {
			for (var i = 0; i < this._cells.length; i++) {
				if (_44 == this._cells[i].dye.getValue()) {
					this._selectedCell = i;
					dojo.addClass(this._cells[i].node, "dijitPaletteCellSelected");
					break;
				}
			}
		}
		this._set("value", this._selectedCell >= 0 ? _44 : null);
		if (_45 || _45 === undefined) {
			this.onChange(_44);
		}
	}, onChange: function (_46) {
	}, _navigateByKey: function (_47, _48) {
		if (_48 == -1) {
			return;
		}
		var _49 = this._currentFocus.index + _47;
		if (_49 < this._cells.length && _49 > -1) {
			var _4a = this._cells[_49].node;
			this._setCurrent(_4a);
			setTimeout(dojo.hitch(dijit, "focus", _4a), 0);
		}
	}, _getDye: function (_4b) {
		return this._cells[_4b.index].dye;
	}});
}
if (!dojo._hasResource["dijit.ColorPalette"]) {
	dojo._hasResource["dijit.ColorPalette"] = true;
	dojo.provide("dijit.ColorPalette");
	dojo.declare("dijit.ColorPalette", [dijit._Widget, dijit._Templated, dijit._PaletteMixin], {palette: "7x10", _palettes: {"7x10": [
		["white", "seashell", "cornsilk", "lemonchiffon", "lightyellow", "palegreen", "paleturquoise", "lightcyan", "lavender", "plum"],
		["lightgray", "pink", "bisque", "moccasin", "khaki", "lightgreen", "lightseagreen", "lightskyblue", "cornflowerblue", "violet"],
		["silver", "lightcoral", "sandybrown", "orange", "palegoldenrod", "chartreuse", "mediumturquoise", "skyblue", "mediumslateblue", "orchid"],
		["gray", "red", "orangered", "darkorange", "yellow", "limegreen", "darkseagreen", "royalblue", "slateblue", "mediumorchid"],
		["dimgray", "crimson", "chocolate", "coral", "gold", "forestgreen", "seagreen", "blue", "blueviolet", "darkorchid"],
		["darkslategray", "firebrick", "saddlebrown", "sienna", "olive", "green", "darkcyan", "mediumblue", "darkslateblue", "darkmagenta"],
		["black", "darkred", "maroon", "brown", "darkolivegreen", "darkgreen", "midnightblue", "navy", "indigo", "purple"]
	], "3x4": [
		["white", "lime", "green", "blue"],
		["silver", "yellow", "fuchsia", "navy"],
		["gray", "red", "purple", "black"]
	]}, templateString: dojo.cache("dijit", "templates/ColorPalette.html", "<div class=\"dijitInline dijitColorPalette\">\n\t<table class=\"dijitPaletteTable\" cellSpacing=\"0\" cellPadding=\"0\">\n\t\t<tbody dojoAttachPoint=\"gridNode\"></tbody>\n\t</table>\n</div>\n"), baseClass: "dijitColorPalette", buildRendering: function () {
		this.inherited(arguments);
		this._preparePalette(this._palettes[this.palette], dojo.i18n.getLocalization("dojo", "colors", this.lang), dojo.declare(dijit._Color, {hc: dojo.hasClass(dojo.body(), "dijit_a11y"), palette: this.palette}));
	}});
	dojo.declare("dijit._Color", dojo.Color, {template: "<span class='dijitInline dijitPaletteImg'>" + "<img src='${blankGif}' alt='${alt}' class='dijitColorPaletteSwatch' style='background-color: ${color}'/>" + "</span>", hcTemplate: "<span class='dijitInline dijitPaletteImg' style='position: relative; overflow: hidden; height: 12px; width: 14px;'>" + "<img src='${image}' alt='${alt}' style='position: absolute; left: ${left}px; top: ${top}px; ${size}'/>" + "</span>", _imagePaths: {"7x10": dojo.moduleUrl("dijit.themes", "a11y/colors7x10.png"), "3x4": dojo.moduleUrl("dijit.themes", "a11y/colors3x4.png")}, constructor: function (_4c, row, col) {
		this._alias = _4c;
		this._row = row;
		this._col = col;
		this.setColor(dojo.Color.named[_4c]);
	}, getValue: function () {
		return this.toHex();
	}, fillCell: function (_4d, _4e) {
		var _4f = dojo.string.substitute(this.hc ? this.hcTemplate : this.template, {color: this.toHex(), blankGif: _4e, alt: this._alias, image: this._imagePaths[this.palette].toString(), left: this._col * -20 - 5, top: this._row * -20 - 5, size: this.palette == "7x10" ? "height: 145px; width: 206px" : "height: 64px; width: 86px"});
		dojo.place(_4f, _4d);
	}});
}
if (!dojo._hasResource["dijit.Declaration"]) {
	dojo._hasResource["dijit.Declaration"] = true;
	dojo.provide("dijit.Declaration");
	dojo.declare("dijit.Declaration", dijit._Widget, {_noScript: true, stopParser: true, widgetClass: "", defaults: null, mixins: [], buildRendering: function () {
		var src = this.srcNodeRef.parentNode.removeChild(this.srcNodeRef), _50 = dojo.query("> script[type^='dojo/method']", src).orphan(), _51 = dojo.query("> script[type^='dojo/connect']", src).orphan(), _52 = src.nodeName;
		var _53 = this.defaults || {};
		dojo.forEach(_50, function (s) {
			var evt = s.getAttribute("event") || s.getAttribute("data-dojo-event"), _54 = dojo.parser._functionFromScript(s);
			if (evt) {
				_53[evt] = _54;
			} else {
				_51.push(s);
			}
		});
		this.mixins = this.mixins.length ? dojo.map(this.mixins, function (_55) {
			return dojo.getObject(_55);
		}) : [dijit._Widget, dijit._Templated];
		_53.widgetsInTemplate = true;
		_53._skipNodeCache = true;
		_53.templateString = "<" + _52 + " class='" + src.className + "' dojoAttachPoint='" + (src.getAttribute("dojoAttachPoint") || "") + "' dojoAttachEvent='" + (src.getAttribute("dojoAttachEvent") || "") + "' >" + src.innerHTML.replace(/\%7B/g, "{").replace(/\%7D/g, "}") + "</" + _52 + ">";
		dojo.query("[dojoType]", src).forEach(function (_56) {
			_56.removeAttribute("dojoType");
		});
		var wc = dojo.declare(this.widgetClass, this.mixins, _53);
		dojo.forEach(_51, function (s) {
			var evt = s.getAttribute("event") || s.getAttribute("data-dojo-event") || "postscript", _57 = dojo.parser._functionFromScript(s);
			dojo.connect(wc.prototype, evt, _57);
		});
	}});
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
					var _58 = n.scrollLeft, _59 = n.scrollTop;
					n.scrollLeft = n.scrollLeft + dx;
					n.scrollTop = n.scrollTop + dy;
					if (_58 != n.scrollLeft || _59 != n.scrollTop) {
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
	dojo.declare("dojo.dnd.Mover", null, {constructor: function (_5a, e, _5b) {
		this.node = dojo.byId(_5a);
		var pos = e.touches ? e.touches[0] : e;
		this.marginBox = {l: pos.pageX, t: pos.pageY};
		this.mouseButton = e.button;
		var h = (this.host = _5b), d = _5a.ownerDocument;
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
	dojo.declare("dojo.dnd.Moveable", null, {handle: "", delay: 0, skip: false, constructor: function (_5c, _5d) {
		this.node = dojo.byId(_5c);
		if (!_5d) {
			_5d = {};
		}
		this.handle = _5d.handle ? dojo.byId(_5d.handle) : null;
		if (!this.handle) {
			this.handle = this.node;
		}
		this.delay = _5d.delay > 0 ? _5d.delay : 0;
		this.skip = _5d.skip;
		this.mover = _5d.mover ? _5d.mover : dojo.dnd.Mover;
		this.events = [dojo.connect(this.handle, "onmousedown", this, "onMouseDown"), dojo.connect(this.handle, "ontouchstart", this, "onMouseDown"), dojo.connect(this.handle, "ondragstart", this, "onSelectStart"), dojo.connect(this.handle, "onselectstart", this, "onSelectStart")];
	}, markupFactory: function (_5e, _5f) {
		return new dojo.dnd.Moveable(_5f, _5e);
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
	}, onMoveStart: function (_60) {
		dojo.publish("/dnd/move/start", [_60]);
		dojo.addClass(dojo.body(), "dojoMove");
		dojo.addClass(this.node, "dojoMoveItem");
	}, onMoveStop: function (_61) {
		dojo.publish("/dnd/move/stop", [_61]);
		dojo.removeClass(dojo.body(), "dojoMove");
		dojo.removeClass(this.node, "dojoMoveItem");
	}, onFirstMove: function (_62, e) {
	}, onMove: function (_63, _64, e) {
		this.onMoving(_63, _64);
		var s = _63.node.style;
		s.left = _64.l + "px";
		s.top = _64.t + "px";
		this.onMoved(_63, _64);
	}, onMoving: function (_65, _66) {
	}, onMoved: function (_67, _68) {
	}});
}
if (!dojo._hasResource["dojo.dnd.move"]) {
	dojo._hasResource["dojo.dnd.move"] = true;
	dojo.provide("dojo.dnd.move");
	dojo.declare("dojo.dnd.move.constrainedMoveable", dojo.dnd.Moveable, {constraints: function () {
	}, within: false, markupFactory: function (_69, _6a) {
		return new dojo.dnd.move.constrainedMoveable(_6a, _69);
	}, constructor: function (_6b, _6c) {
		if (!_6c) {
			_6c = {};
		}
		this.constraints = _6c.constraints;
		this.within = _6c.within;
	}, onFirstMove: function (_6d) {
		var c = this.constraintBox = this.constraints.call(this, _6d);
		c.r = c.l + c.w;
		c.b = c.t + c.h;
		if (this.within) {
			var mb = dojo._getMarginSize(_6d.node);
			c.r -= mb.w;
			c.b -= mb.h;
		}
	}, onMove: function (_6e, _6f) {
		var c = this.constraintBox, s = _6e.node.style;
		this.onMoving(_6e, _6f);
		_6f.l = _6f.l < c.l ? c.l : c.r < _6f.l ? c.r : _6f.l;
		_6f.t = _6f.t < c.t ? c.t : c.b < _6f.t ? c.b : _6f.t;
		s.left = _6f.l + "px";
		s.top = _6f.t + "px";
		this.onMoved(_6e, _6f);
	}});
	dojo.declare("dojo.dnd.move.boxConstrainedMoveable", dojo.dnd.move.constrainedMoveable, {box: {}, markupFactory: function (_70, _71) {
		return new dojo.dnd.move.boxConstrainedMoveable(_71, _70);
	}, constructor: function (_72, _73) {
		var box = _73 && _73.box;
		this.constraints = function () {
			return box;
		};
	}});
	dojo.declare("dojo.dnd.move.parentConstrainedMoveable", dojo.dnd.move.constrainedMoveable, {area: "content", markupFactory: function (_74, _75) {
		return new dojo.dnd.move.parentConstrainedMoveable(_75, _74);
	}, constructor: function (_76, _77) {
		var _78 = _77 && _77.area;
		this.constraints = function () {
			var n = this.node.parentNode, s = dojo.getComputedStyle(n), mb = dojo._getMarginBox(n, s);
			if (_78 == "margin") {
				return mb;
			}
			var t = dojo._getMarginExtents(n, s);
			mb.l += t.l, mb.t += t.t, mb.w -= t.w, mb.h -= t.h;
			if (_78 == "border") {
				return mb;
			}
			t = dojo._getBorderExtents(n, s);
			mb.l += t.l, mb.t += t.t, mb.w -= t.w, mb.h -= t.h;
			if (_78 == "padding") {
				return mb;
			}
			t = dojo._getPadExtents(n, s);
			mb.l += t.l, mb.t += t.t, mb.w -= t.w, mb.h -= t.h;
			return mb;
		};
	}});
	dojo.dnd.constrainedMover = dojo.dnd.move.constrainedMover;
	dojo.dnd.boxConstrainedMover = dojo.dnd.move.boxConstrainedMover;
	dojo.dnd.parentConstrainedMover = dojo.dnd.move.parentConstrainedMover;
}
if (!dojo._hasResource["dojo.dnd.TimedMoveable"]) {
	dojo._hasResource["dojo.dnd.TimedMoveable"] = true;
	dojo.provide("dojo.dnd.TimedMoveable");
	(function () {
		var _79 = dojo.dnd.Moveable.prototype.onMove;
		dojo.declare("dojo.dnd.TimedMoveable", dojo.dnd.Moveable, {timeout: 40, constructor: function (_7a, _7b) {
			if (!_7b) {
				_7b = {};
			}
			if (_7b.timeout && typeof _7b.timeout == "number" && _7b.timeout >= 0) {
				this.timeout = _7b.timeout;
			}
		}, markupFactory: function (_7c, _7d) {
			return new dojo.dnd.TimedMoveable(_7d, _7c);
		}, onMoveStop: function (_7e) {
			if (_7e._timer) {
				clearTimeout(_7e._timer);
				_79.call(this, _7e, _7e._leftTop);
			}
			dojo.dnd.Moveable.prototype.onMoveStop.apply(this, arguments);
		}, onMove: function (_7f, _80) {
			_7f._leftTop = _80;
			if (!_7f._timer) {
				var _81 = this;
				_7f._timer = setTimeout(function () {
					_7f._timer = null;
					_79.call(_81, _7f, _7f._leftTop);
				}, this.timeout);
			}
		}});
	})();
}
if (!dojo._hasResource["dojo.fx.Toggler"]) {
	dojo._hasResource["dojo.fx.Toggler"] = true;
	dojo.provide("dojo.fx.Toggler");
	dojo.declare("dojo.fx.Toggler", null, {node: null, showFunc: dojo.fadeIn, hideFunc: dojo.fadeOut, showDuration: 200, hideDuration: 200, constructor: function (_82) {
		var _83 = this;
		dojo.mixin(_83, _82);
		_83.node = _82.node;
		_83._showArgs = dojo.mixin({}, _82);
		_83._showArgs.node = _83.node;
		_83._showArgs.duration = _83.showDuration;
		_83.showAnim = _83.showFunc(_83._showArgs);
		_83._hideArgs = dojo.mixin({}, _82);
		_83._hideArgs.node = _83.node;
		_83._hideArgs.duration = _83.hideDuration;
		_83.hideAnim = _83.hideFunc(_83._hideArgs);
		dojo.connect(_83.showAnim, "beforeBegin", dojo.hitch(_83.hideAnim, "stop", true));
		dojo.connect(_83.hideAnim, "beforeBegin", dojo.hitch(_83.showAnim, "stop", true));
	}, show: function (_84) {
		return this.showAnim.play(_84 || 0);
	}, hide: function (_85) {
		return this.hideAnim.play(_85 || 0);
	}});
}
if (!dojo._hasResource["dojo.fx"]) {
	dojo._hasResource["dojo.fx"] = true;
	dojo.provide("dojo.fx");
	(function () {
		var d = dojo, _86 = {_fire: function (evt, _87) {
			if (this[evt]) {
				this[evt].apply(this, _87 || []);
			}
			return this;
		}};
		var _88 = function (_89) {
			this._index = -1;
			this._animations = _89 || [];
			this._current = this._onAnimateCtx = this._onEndCtx = null;
			this.duration = 0;
			d.forEach(this._animations, function (a) {
				this.duration += a.duration;
				if (a.delay) {
					this.duration += a.delay;
				}
			}, this);
		};
		d.extend(_88, {_onAnimate: function () {
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
		}, play: function (_8a, _8b) {
			if (!this._current) {
				this._current = this._animations[this._index = 0];
			}
			if (!_8b && this._current.status() == "playing") {
				return this;
			}
			var _8c = d.connect(this._current, "beforeBegin", this, function () {
				this._fire("beforeBegin");
			}), _8d = d.connect(this._current, "onBegin", this, function (arg) {
				this._fire("onBegin", arguments);
			}), _8e = d.connect(this._current, "onPlay", this, function (arg) {
				this._fire("onPlay", arguments);
				d.disconnect(_8c);
				d.disconnect(_8d);
				d.disconnect(_8e);
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
		}, gotoPercent: function (_8f, _90) {
			this.pause();
			var _91 = this.duration * _8f;
			this._current = null;
			d.some(this._animations, function (a) {
				if (a.duration <= _91) {
					this._current = a;
					return true;
				}
				_91 -= a.duration;
				return false;
			});
			if (this._current) {
				this._current.gotoPercent(_91 / this._current.duration, _90);
			}
			return this;
		}, stop: function (_92) {
			if (this._current) {
				if (_92) {
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
		d.extend(_88, _86);
		dojo.fx.chain = function (_93) {
			return new _88(_93);
		};
		var _94 = function (_95) {
			this._animations = _95 || [];
			this._connects = [];
			this._finished = 0;
			this.duration = 0;
			d.forEach(_95, function (a) {
				var _96 = a.duration;
				if (a.delay) {
					_96 += a.delay;
				}
				if (this.duration < _96) {
					this.duration = _96;
				}
				this._connects.push(d.connect(a, "onEnd", this, "_onEnd"));
			}, this);
			this._pseudoAnimation = new d.Animation({curve: [0, 1], duration: this.duration});
			var _97 = this;
			d.forEach(["beforeBegin", "onBegin", "onPlay", "onAnimate", "onPause", "onStop", "onEnd"], function (evt) {
				_97._connects.push(d.connect(_97._pseudoAnimation, evt, function () {
					_97._fire(evt, arguments);
				}));
			});
		};
		d.extend(_94, {_doAction: function (_98, _99) {
			d.forEach(this._animations, function (a) {
				a[_98].apply(a, _99);
			});
			return this;
		}, _onEnd: function () {
			if (++this._finished > this._animations.length) {
				this._fire("onEnd");
			}
		}, _call: function (_9a, _9b) {
			var t = this._pseudoAnimation;
			t[_9a].apply(t, _9b);
		}, play: function (_9c, _9d) {
			this._finished = 0;
			this._doAction("play", arguments);
			this._call("play", arguments);
			return this;
		}, pause: function () {
			this._doAction("pause", arguments);
			this._call("pause", arguments);
			return this;
		}, gotoPercent: function (_9e, _9f) {
			var ms = this.duration * _9e;
			d.forEach(this._animations, function (a) {
				a.gotoPercent(a.duration < ms ? 1 : (ms / a.duration), _9f);
			});
			this._call("gotoPercent", arguments);
			return this;
		}, stop: function (_a0) {
			this._doAction("stop", arguments);
			this._call("stop", arguments);
			return this;
		}, status: function () {
			return this._pseudoAnimation.status();
		}, destroy: function () {
			d.forEach(this._connects, dojo.disconnect);
		}});
		d.extend(_94, _86);
		dojo.fx.combine = function (_a1) {
			return new _94(_a1);
		};
		dojo.fx.wipeIn = function (_a2) {
			var _a3 = _a2.node = d.byId(_a2.node), s = _a3.style, o;
			var _a4 = d.animateProperty(d.mixin({properties: {height: {start: function () {
				o = s.overflow;
				s.overflow = "hidden";
				if (s.visibility == "hidden" || s.display == "none") {
					s.height = "1px";
					s.display = "";
					s.visibility = "";
					return 1;
				} else {
					var _a5 = d.style(_a3, "height");
					return Math.max(_a5, 1);
				}
			}, end: function () {
				return _a3.scrollHeight;
			}}}}, _a2));
			d.connect(_a4, "onEnd", function () {
				s.height = "auto";
				s.overflow = o;
			});
			return _a4;
		};
		dojo.fx.wipeOut = function (_a6) {
			var _a7 = _a6.node = d.byId(_a6.node), s = _a7.style, o;
			var _a8 = d.animateProperty(d.mixin({properties: {height: {end: 1}}}, _a6));
			d.connect(_a8, "beforeBegin", function () {
				o = s.overflow;
				s.overflow = "hidden";
				s.display = "";
			});
			d.connect(_a8, "onEnd", function () {
				s.overflow = o;
				s.height = "auto";
				s.display = "none";
			});
			return _a8;
		};
		dojo.fx.slideTo = function (_a9) {
			var _aa = _a9.node = d.byId(_a9.node), top = null, _ab = null;
			var _ac = (function (n) {
				return function () {
					var cs = d.getComputedStyle(n);
					var pos = cs.position;
					top = (pos == "absolute" ? n.offsetTop : parseInt(cs.top) || 0);
					_ab = (pos == "absolute" ? n.offsetLeft : parseInt(cs.left) || 0);
					if (pos != "absolute" && pos != "relative") {
						var ret = d.position(n, true);
						top = ret.y;
						_ab = ret.x;
						n.style.position = "absolute";
						n.style.top = top + "px";
						n.style.left = _ab + "px";
					}
				};
			})(_aa);
			_ac();
			var _ad = d.animateProperty(d.mixin({properties: {top: _a9.top || 0, left: _a9.left || 0}}, _a9));
			d.connect(_ad, "beforeBegin", _ad, _ac);
			return _ad;
		};
	})();
}
if (!dojo._hasResource["dijit.form._FormMixin"]) {
	dojo._hasResource["dijit.form._FormMixin"] = true;
	dojo.provide("dijit.form._FormMixin");
	dojo.declare("dijit.form._FormMixin", null, {state: "", reset: function () {
		dojo.forEach(this.getDescendants(), function (_ae) {
			if (_ae.reset) {
				_ae.reset();
			}
		});
	}, validate: function () {
		var _af = false;
		return dojo.every(dojo.map(this.getDescendants(), function (_b0) {
			_b0._hasBeenBlurred = true;
			var _b1 = _b0.disabled || !_b0.validate || _b0.validate();
			if (!_b1 && !_af) {
				dojo.window.scrollIntoView(_b0.containerNode || _b0.domNode);
				_b0.focus();
				_af = true;
			}
			return _b1;
		}), function (_b2) {
			return _b2;
		});
	}, setValues: function (val) {
		dojo.deprecated(this.declaredClass + "::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
		return this.set("value", val);
	}, _setValueAttr: function (obj) {
		var map = {};
		dojo.forEach(this.getDescendants(), function (_b3) {
			if (!_b3.name) {
				return;
			}
			var _b4 = map[_b3.name] || (map[_b3.name] = []);
			_b4.push(_b3);
		});
		for (var _b5 in map) {
			if (!map.hasOwnProperty(_b5)) {
				continue;
			}
			var _b6 = map[_b5], _b7 = dojo.getObject(_b5, false, obj);
			if (_b7 === undefined) {
				continue;
			}
			if (!dojo.isArray(_b7)) {
				_b7 = [_b7];
			}
			if (typeof _b6[0].checked == "boolean") {
				dojo.forEach(_b6, function (w, i) {
					w.set("value", dojo.indexOf(_b7, w.value) != -1);
				});
			} else {
				if (_b6[0].multiple) {
					_b6[0].set("value", _b7);
				} else {
					dojo.forEach(_b6, function (w, i) {
						w.set("value", _b7[i]);
					});
				}
			}
		}
	}, getValues: function () {
		dojo.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
		return this.get("value");
	}, _getValueAttr: function () {
		var obj = {};
		dojo.forEach(this.getDescendants(), function (_b8) {
			var _b9 = _b8.name;
			if (!_b9 || _b8.disabled) {
				return;
			}
			var _ba = _b8.get("value");
			if (typeof _b8.checked == "boolean") {
				if (/Radio/.test(_b8.declaredClass)) {
					if (_ba !== false) {
						dojo.setObject(_b9, _ba, obj);
					} else {
						_ba = dojo.getObject(_b9, false, obj);
						if (_ba === undefined) {
							dojo.setObject(_b9, null, obj);
						}
					}
				} else {
					var ary = dojo.getObject(_b9, false, obj);
					if (!ary) {
						ary = [];
						dojo.setObject(_b9, ary, obj);
					}
					if (_ba !== false) {
						ary.push(_ba);
					}
				}
			} else {
				var _bb = dojo.getObject(_b9, false, obj);
				if (typeof _bb != "undefined") {
					if (dojo.isArray(_bb)) {
						_bb.push(_ba);
					} else {
						dojo.setObject(_b9, [_bb, _ba], obj);
					}
				} else {
					dojo.setObject(_b9, _ba, obj);
				}
			}
		});
		return obj;
	}, isValid: function () {
		return this.state == "";
	}, onValidStateChange: function (_bc) {
	}, _getState: function () {
		var _bd = dojo.map(this._descendants, function (w) {
			return w.get("state") || "";
		});
		return dojo.indexOf(_bd, "Error") >= 0 ? "Error" : dojo.indexOf(_bd, "Incomplete") >= 0 ? "Incomplete" : "";
	}, disconnectChildren: function () {
		dojo.forEach(this._childConnections || [], dojo.hitch(this, "disconnect"));
		dojo.forEach(this._childWatches || [], function (w) {
			w.unwatch();
		});
	}, connectChildren: function (_be) {
		var _bf = this;
		this.disconnectChildren();
		this._descendants = this.getDescendants();
		var set = _be ? function (_c0, val) {
			_bf[_c0] = val;
		} : dojo.hitch(this, "_set");
		set("value", this.get("value"));
		set("state", this._getState());
		var _c1 = (this._childConnections = []), _c2 = (this._childWatches = []);
		dojo.forEach(dojo.filter(this._descendants, function (_c3) {
			return _c3.validate;
		}), function (_c4) {
			dojo.forEach(["state", "disabled"], function (_c5) {
				_c2.push(_c4.watch(_c5, function (_c6, _c7, _c8) {
					_bf.set("state", _bf._getState());
				}));
			});
		});
		var _c9 = function () {
			if (_bf._onChangeDelayTimer) {
				clearTimeout(_bf._onChangeDelayTimer);
			}
			_bf._onChangeDelayTimer = setTimeout(function () {
				delete _bf._onChangeDelayTimer;
				_bf._set("value", _bf.get("value"));
			}, 10);
		};
		dojo.forEach(dojo.filter(this._descendants, function (_ca) {
			return _ca.onChange;
		}), function (_cb) {
			_c1.push(_bf.connect(_cb, "onChange", _c9));
			_c2.push(_cb.watch("disabled", _c9));
		});
	}, startup: function () {
		this.inherited(arguments);
		this.connectChildren(true);
		this.watch("state", function (_cc, _cd, _ce) {
			this.onValidStateChange(_ce == "");
		});
	}, destroy: function () {
		this.disconnectChildren();
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit._DialogMixin"]) {
	dojo._hasResource["dijit._DialogMixin"] = true;
	dojo.provide("dijit._DialogMixin");
	dojo.declare("dijit._DialogMixin", null, {attributeMap: dijit._Widget.prototype.attributeMap, execute: function (_cf) {
	}, onCancel: function () {
	}, onExecute: function () {
	}, _onSubmit: function () {
		this.onExecute();
		this.execute(this.get("value"));
	}, _getFocusItems: function () {
		var _d0 = dijit._getTabNavigable(this.containerNode);
		this._firstFocusItem = _d0.lowest || _d0.first || this.closeButtonNode || this.domNode;
		this._lastFocusItem = _d0.last || _d0.highest || this._firstFocusItem;
	}});
}
if (!dojo._hasResource["dijit.DialogUnderlay"]) {
	dojo._hasResource["dijit.DialogUnderlay"] = true;
	dojo.provide("dijit.DialogUnderlay");
	dojo.declare("dijit.DialogUnderlay", [dijit._Widget, dijit._Templated], {templateString: "<div class='dijitDialogUnderlayWrapper'><div class='dijitDialogUnderlay' dojoAttachPoint='node'></div></div>", dialogId: "", "class": "", attributeMap: {id: "domNode"}, _setDialogIdAttr: function (id) {
		dojo.attr(this.node, "id", id + "_underlay");
		this._set("dialogId", id);
	}, _setClassAttr: function (_d1) {
		this.node.className = "dijitDialogUnderlay " + _d1;
		this._set("class", _d1);
	}, postCreate: function () {
		dojo.body().appendChild(this.domNode);
	}, layout: function () {
		var is = this.node.style, os = this.domNode.style;
		os.display = "none";
		var _d2 = dojo.window.getBox();
		os.top = _d2.t + "px";
		os.left = _d2.l + "px";
		is.width = _d2.w + "px";
		is.height = _d2.h + "px";
		os.display = "block";
	}, show: function () {
		this.domNode.style.display = "block";
		this.layout();
		this.bgIframe = new dijit.BackgroundIframe(this.domNode);
	}, hide: function () {
		this.bgIframe.destroy();
		delete this.bgIframe;
		this.domNode.style.display = "none";
	}});
}
if (!dojo._hasResource["dijit.layout._ContentPaneResizeMixin"]) {
	dojo._hasResource["dijit.layout._ContentPaneResizeMixin"] = true;
	dojo.provide("dijit.layout._ContentPaneResizeMixin");
	dojo.declare("dijit.layout._ContentPaneResizeMixin", null, {doLayout: true, isContainer: true, isLayoutContainer: true, _startChildren: function () {
		dojo.forEach(this.getChildren(), function (_d3) {
			_d3.startup();
			_d3._started = true;
		});
	}, startup: function () {
		if (this._started) {
			return;
		}
		var _d4 = dijit._Contained.prototype.getParent.call(this);
		this._childOfLayoutWidget = _d4 && _d4.isLayoutContainer;
		this._needLayout = !this._childOfLayoutWidget;
		this.inherited(arguments);
		this._startChildren();
		if (this._isShown()) {
			this._onShow();
		}
		if (!this._childOfLayoutWidget) {
			this.connect(dojo.isIE ? this.domNode : dojo.global, "onresize", function () {
				this._needLayout = !this._childOfLayoutWidget;
				this.resize();
			});
		}
	}, _checkIfSingleChild: function () {
		var _d5 = dojo.query("> *", this.containerNode).filter(function (_d6) {
			return _d6.tagName !== "SCRIPT";
		}), _d7 = _d5.filter(function (_d8) {
			return dojo.hasAttr(_d8, "data-dojo-type") || dojo.hasAttr(_d8, "dojoType") || dojo.hasAttr(_d8, "widgetId");
		}), _d9 = dojo.filter(_d7.map(dijit.byNode), function (_da) {
			return _da && _da.domNode && _da.resize;
		});
		if (_d5.length == _d7.length && _d9.length == 1) {
			this._singleChild = _d9[0];
		} else {
			delete this._singleChild;
		}
		dojo.toggleClass(this.containerNode, this.baseClass + "SingleChild", !!this._singleChild);
	}, resize: function (_db, _dc) {
		if (!this._wasShown && this.open !== false) {
			this._onShow();
		}
		this._resizeCalled = true;
		this._scheduleLayout(_db, _dc);
	}, _scheduleLayout: function (_dd, _de) {
		if (this._isShown()) {
			this._layout(_dd, _de);
		} else {
			this._needLayout = true;
			this._changeSize = _dd;
			this._resultSize = _de;
		}
	}, _layout: function (_df, _e0) {
		if (_df) {
			dojo.marginBox(this.domNode, _df);
		}
		var cn = this.containerNode;
		if (cn === this.domNode) {
			var mb = _e0 || {};
			dojo.mixin(mb, _df || {});
			if (!("h" in mb) || !("w" in mb)) {
				mb = dojo.mixin(dojo.marginBox(cn), mb);
			}
			this._contentBox = dijit.layout.marginBox2contentBox(cn, mb);
		} else {
			this._contentBox = dojo.contentBox(cn);
		}
		this._layoutChildren();
		delete this._needLayout;
	}, _layoutChildren: function () {
		if (this.doLayout) {
			this._checkIfSingleChild();
		}
		if (this._singleChild && this._singleChild.resize) {
			var cb = this._contentBox || dojo.contentBox(this.containerNode);
			this._singleChild.resize({w: cb.w, h: cb.h});
		} else {
			dojo.forEach(this.getChildren(), function (_e1) {
				if (_e1.resize) {
					_e1.resize();
				}
			});
		}
	}, _isShown: function () {
		if (this._childOfLayoutWidget) {
			if (this._resizeCalled && "open" in this) {
				return this.open;
			}
			return this._resizeCalled;
		} else {
			if ("open" in this) {
				return this.open;
			} else {
				var _e2 = this.domNode, _e3 = this.domNode.parentNode;
				return (_e2.style.display != "none") && (_e2.style.visibility != "hidden") && !dojo.hasClass(_e2, "dijitHidden") && _e3 && _e3.style && (_e3.style.display != "none");
			}
		}
	}, _onShow: function () {
		if (this._needLayout) {
			this._layout(this._changeSize, this._resultSize);
		}
		this.inherited(arguments);
		this._wasShown = true;
	}});
}
if (!dojo._hasResource["dojo.html"]) {
	dojo._hasResource["dojo.html"] = true;
	dojo.provide("dojo.html");
	dojo.getObject("html", true, dojo);
	(function () {
		var _e4 = 0, d = dojo;
		dojo.html._secureForInnerHtml = function (_e5) {
			return _e5.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "");
		};
		dojo.html._emptyNode = dojo.empty;
		dojo.html._setNodeContent = function (_e6, _e7) {
			d.empty(_e6);
			if (_e7) {
				if (typeof _e7 == "string") {
					_e7 = d._toDom(_e7, _e6.ownerDocument);
				}
				if (!_e7.nodeType && d.isArrayLike(_e7)) {
					for (var _e8 = _e7.length, i = 0; i < _e7.length; i = _e8 == _e7.length ? i + 1 : 0) {
						d.place(_e7[i], _e6, "last");
					}
				} else {
					d.place(_e7, _e6, "last");
				}
			}
			return _e6;
		};
		dojo.declare("dojo.html._ContentSetter", null, {node: "", content: "", id: "", cleanContent: false, extractContent: false, parseContent: false, parserScope: dojo._scopeName, startup: true, constructor: function (_e9, _ea) {
			dojo.mixin(this, _e9 || {});
			_ea = this.node = dojo.byId(this.node || _ea);
			if (!this.id) {
				this.id = ["Setter", (_ea) ? _ea.id || _ea.tagName : "", _e4++].join("_");
			}
		}, set: function (_eb, _ec) {
			if (undefined !== _eb) {
				this.content = _eb;
			}
			if (_ec) {
				this._mixin(_ec);
			}
			this.onBegin();
			this.setContent();
			this.onEnd();
			return this.node;
		}, setContent: function () {
			var _ed = this.node;
			if (!_ed) {
				throw new Error(this.declaredClass + ": setContent given no node");
			}
			try {
				_ed = dojo.html._setNodeContent(_ed, this.content);
			} catch (e) {
				var _ee = this.onContentError(e);
				try {
					_ed.innerHTML = _ee;
				} catch (e) {
					console.error("Fatal " + this.declaredClass + ".setContent could not change content due to " + e.message, e);
				}
			}
			this.node = _ed;
		}, empty: function () {
			if (this.parseResults && this.parseResults.length) {
				dojo.forEach(this.parseResults, function (w) {
					if (w.destroy) {
						w.destroy();
					}
				});
				delete this.parseResults;
			}
			dojo.html._emptyNode(this.node);
		}, onBegin: function () {
			var _ef = this.content;
			if (dojo.isString(_ef)) {
				if (this.cleanContent) {
					_ef = dojo.html._secureForInnerHtml(_ef);
				}
				if (this.extractContent) {
					var _f0 = _ef.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
					if (_f0) {
						_ef = _f0[1];
					}
				}
			}
			this.empty();
			this.content = _ef;
			return this.node;
		}, onEnd: function () {
			if (this.parseContent) {
				this._parse();
			}
			return this.node;
		}, tearDown: function () {
			delete this.parseResults;
			delete this.node;
			delete this.content;
		}, onContentError: function (err) {
			return "Error occured setting content: " + err;
		}, _mixin: function (_f1) {
			var _f2 = {}, key;
			for (key in _f1) {
				if (key in _f2) {
					continue;
				}
				this[key] = _f1[key];
			}
		}, _parse: function () {
			var _f3 = this.node;
			try {
				var _f4 = {};
				dojo.forEach(["dir", "lang", "textDir"], function (_f5) {
					if (this[_f5]) {
						_f4[_f5] = this[_f5];
					}
				}, this);
				this.parseResults = dojo.parser.parse({rootNode: _f3, noStart: !this.startup, inherited: _f4, scope: this.parserScope});
			} catch (e) {
				this._onError("Content", e, "Error parsing in _ContentSetter#" + this.id);
			}
		}, _onError: function (_f6, err, _f7) {
			var _f8 = this["on" + _f6 + "Error"].call(this, err);
			if (_f7) {
				console.error(_f7, err);
			} else {
				if (_f8) {
					dojo.html._setNodeContent(this.node, _f8, true);
				}
			}
		}});
		dojo.html.set = function (_f9, _fa, _fb) {
			if (undefined == _fa) {
				console.warn("dojo.html.set: no cont argument provided, using empty string");
				_fa = "";
			}
			if (!_fb) {
				return dojo.html._setNodeContent(_f9, _fa, true);
			} else {
				var op = new dojo.html._ContentSetter(dojo.mixin(_fb, {content: _fa, node: _f9}));
				return op.set();
			}
		};
	})();
}
if (!dojo._hasResource["dijit.layout.ContentPane"]) {
	dojo._hasResource["dijit.layout.ContentPane"] = true;
	dojo.provide("dijit.layout.ContentPane");
	dojo.declare("dijit.layout.ContentPane", [dijit._Widget, dijit.layout._ContentPaneResizeMixin], {href: "", extractContent: false, parseOnLoad: true, parserScope: dojo._scopeName, preventCache: false, preload: false, refreshOnShow: false, loadingMessage: "<span class='dijitContentPaneLoading'>${loadingState}</span>", errorMessage: "<span class='dijitContentPaneError'>${errorState}</span>", isLoaded: false, baseClass: "dijitContentPane", ioArgs: {}, onLoadDeferred: null, attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {title: []}), stopParser: true, template: false, create: function (_fc, _fd) {
		if ((!_fc || !_fc.template) && _fd && !("href" in _fc) && !("content" in _fc)) {
			var df = dojo.doc.createDocumentFragment();
			_fd = dojo.byId(_fd);
			while (_fd.firstChild) {
				df.appendChild(_fd.firstChild);
			}
			_fc = dojo.delegate(_fc, {content: df});
		}
		this.inherited(arguments, [_fc, _fd]);
	}, postMixInProperties: function () {
		this.inherited(arguments);
		var _fe = dojo.i18n.getLocalization("dijit", "loading", this.lang);
		this.loadingMessage = dojo.string.substitute(this.loadingMessage, _fe);
		this.errorMessage = dojo.string.substitute(this.errorMessage, _fe);
	}, buildRendering: function () {
		this.inherited(arguments);
		if (!this.containerNode) {
			this.containerNode = this.domNode;
		}
		this.domNode.title = "";
		if (!dojo.attr(this.domNode, "role")) {
			dijit.setWaiRole(this.domNode, "group");
		}
	}, _startChildren: function () {
		this.inherited(arguments);
		if (this._contentSetter) {
			dojo.forEach(this._contentSetter.parseResults, function (obj) {
				if (!obj._started && !obj._destroyed && dojo.isFunction(obj.startup)) {
					obj.startup();
					obj._started = true;
				}
			}, this);
		}
	}, setHref: function (_ff) {
		dojo.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
		return this.set("href", _ff);
	}, _setHrefAttr: function (href) {
		this.cancel();
		this.onLoadDeferred = new dojo.Deferred(dojo.hitch(this, "cancel"));
		this.onLoadDeferred.addCallback(dojo.hitch(this, "onLoad"));
		this._set("href", href);
		if (this.preload || (this._created && this._isShown())) {
			this._load();
		} else {
			this._hrefChanged = true;
		}
		return this.onLoadDeferred;
	}, setContent: function (data) {
		dojo.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
		this.set("content", data);
	}, _setContentAttr: function (data) {
		this._set("href", "");
		this.cancel();
		this.onLoadDeferred = new dojo.Deferred(dojo.hitch(this, "cancel"));
		if (this._created) {
			this.onLoadDeferred.addCallback(dojo.hitch(this, "onLoad"));
		}
		this._setContent(data || "");
		this._isDownloaded = false;
		return this.onLoadDeferred;
	}, _getContentAttr: function () {
		return this.containerNode.innerHTML;
	}, cancel: function () {
		if (this._xhrDfd && (this._xhrDfd.fired == -1)) {
			this._xhrDfd.cancel();
		}
		delete this._xhrDfd;
		this.onLoadDeferred = null;
	}, uninitialize: function () {
		if (this._beingDestroyed) {
			this.cancel();
		}
		this.inherited(arguments);
	}, destroyRecursive: function (_100) {
		if (this._beingDestroyed) {
			return;
		}
		this.inherited(arguments);
	}, _onShow: function () {
		this.inherited(arguments);
		if (this.href) {
			if (!this._xhrDfd && (!this.isLoaded || this._hrefChanged || this.refreshOnShow)) {
				return this.refresh();
			}
		}
	}, refresh: function () {
		this.cancel();
		this.onLoadDeferred = new dojo.Deferred(dojo.hitch(this, "cancel"));
		this.onLoadDeferred.addCallback(dojo.hitch(this, "onLoad"));
		this._load();
		return this.onLoadDeferred;
	}, _load: function () {
		this._setContent(this.onDownloadStart(), true);
		var self = this;
		var _101 = {preventCache: (this.preventCache || this.refreshOnShow), url: this.href, handleAs: "text"};
		if (dojo.isObject(this.ioArgs)) {
			dojo.mixin(_101, this.ioArgs);
		}
		var hand = (this._xhrDfd = (this.ioMethod || dojo.xhrGet)(_101));
		hand.addCallback(function (html) {
			try {
				self._isDownloaded = true;
				self._setContent(html, false);
				self.onDownloadEnd();
			} catch (err) {
				self._onError("Content", err);
			}
			delete self._xhrDfd;
			return html;
		});
		hand.addErrback(function (err) {
			if (!hand.canceled) {
				self._onError("Download", err);
			}
			delete self._xhrDfd;
			return err;
		});
		delete this._hrefChanged;
	}, _onLoadHandler: function (data) {
		this._set("isLoaded", true);
		try {
			this.onLoadDeferred.callback(data);
		} catch (e) {
			console.error("Error " + this.widgetId + " running custom onLoad code: " + e.message);
		}
	}, _onUnloadHandler: function () {
		this._set("isLoaded", false);
		try {
			this.onUnload();
		} catch (e) {
			console.error("Error " + this.widgetId + " running custom onUnload code: " + e.message);
		}
	}, destroyDescendants: function () {
		if (this.isLoaded) {
			this._onUnloadHandler();
		}
		var _102 = this._contentSetter;
		dojo.forEach(this.getChildren(), function (_103) {
			if (_103.destroyRecursive) {
				_103.destroyRecursive();
			}
		});
		if (_102) {
			dojo.forEach(_102.parseResults, function (_104) {
				if (_104.destroyRecursive && _104.domNode && _104.domNode.parentNode == dojo.body()) {
					_104.destroyRecursive();
				}
			});
			delete _102.parseResults;
		}
		dojo.html._emptyNode(this.containerNode);
		delete this._singleChild;
	}, _setContent: function (cont, _105) {
		this.destroyDescendants();
		var _106 = this._contentSetter;
		if (!(_106 && _106 instanceof dojo.html._ContentSetter)) {
			_106 = this._contentSetter = new dojo.html._ContentSetter({node: this.containerNode, _onError: dojo.hitch(this, this._onError), onContentError: dojo.hitch(this, function (e) {
				var _107 = this.onContentError(e);
				try {
					this.containerNode.innerHTML = _107;
				} catch (e) {
					console.error("Fatal " + this.id + " could not change content due to " + e.message, e);
				}
			})});
		}
		var _108 = dojo.mixin({cleanContent: this.cleanContent, extractContent: this.extractContent, parseContent: this.parseOnLoad, parserScope: this.parserScope, startup: false, dir: this.dir, lang: this.lang}, this._contentSetterParams || {});
		_106.set((dojo.isObject(cont) && cont.domNode) ? cont.domNode : cont, _108);
		delete this._contentSetterParams;
		if (this.doLayout) {
			this._checkIfSingleChild();
		}
		if (!_105) {
			if (this._started) {
				this._startChildren();
				this._scheduleLayout();
			}
			this._onLoadHandler(cont);
		}
	}, _onError: function (type, err, _109) {
		this.onLoadDeferred.errback(err);
		var _10a = this["on" + type + "Error"].call(this, err);
		if (_109) {
			console.error(_109, err);
		} else {
			if (_10a) {
				this._setContent(_10a, true);
			}
		}
	}, onLoad: function (data) {
	}, onUnload: function () {
	}, onDownloadStart: function () {
		return this.loadingMessage;
	}, onContentError: function (_10b) {
	}, onDownloadError: function (_10c) {
		return this.errorMessage;
	}, onDownloadEnd: function () {
	}});
}
if (!dojo._hasResource["dijit.TooltipDialog"]) {
	dojo._hasResource["dijit.TooltipDialog"] = true;
	dojo.provide("dijit.TooltipDialog");
	dojo.declare("dijit.TooltipDialog", [dijit.layout.ContentPane, dijit._Templated, dijit.form._FormMixin, dijit._DialogMixin], {title: "", doLayout: false, autofocus: true, baseClass: "dijitTooltipDialog", _firstFocusItem: null, _lastFocusItem: null, templateString: dojo.cache("dijit", "templates/TooltipDialog.html", "<div role=\"presentation\" tabIndex=\"-1\">\n\t<div class=\"dijitTooltipContainer\" role=\"presentation\">\n\t\t<div class =\"dijitTooltipContents dijitTooltipFocusNode\" dojoAttachPoint=\"containerNode\" role=\"dialog\"></div>\n\t</div>\n\t<div class=\"dijitTooltipConnector\" role=\"presentation\"></div>\n</div>\n"), _setTitleAttr: function (_10d) {
		this.containerNode.title = _10d;
		this._set("title", _10d);
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this.containerNode, "onkeypress", "_onKey");
	}, orient: function (node, _10e, _10f) {
		var newC = "dijitTooltipAB" + (_10f.charAt(1) == "L" ? "Left" : "Right") + " dijitTooltip" + (_10f.charAt(0) == "T" ? "Below" : "Above");
		dojo.replaceClass(this.domNode, newC, this._currentOrientClass || "");
		this._currentOrientClass = newC;
	}, focus: function () {
		this._getFocusItems(this.containerNode);
		dijit.focus(this._firstFocusItem);
	}, onOpen: function (pos) {
		this.orient(this.domNode, pos.aroundCorner, pos.corner);
		this._onShow();
	}, onClose: function () {
		this.onHide();
	}, _onKey: function (evt) {
		var node = evt.target;
		var dk = dojo.keys;
		if (evt.charOrCode === dk.TAB) {
			this._getFocusItems(this.containerNode);
		}
		var _110 = (this._firstFocusItem == this._lastFocusItem);
		if (evt.charOrCode == dk.ESCAPE) {
			setTimeout(dojo.hitch(this, "onCancel"), 0);
			dojo.stopEvent(evt);
		} else {
			if (node == this._firstFocusItem && evt.shiftKey && evt.charOrCode === dk.TAB) {
				if (!_110) {
					dijit.focus(this._lastFocusItem);
				}
				dojo.stopEvent(evt);
			} else {
				if (node == this._lastFocusItem && evt.charOrCode === dk.TAB && !evt.shiftKey) {
					if (!_110) {
						dijit.focus(this._firstFocusItem);
					}
					dojo.stopEvent(evt);
				} else {
					if (evt.charOrCode === dk.TAB) {
						evt.stopPropagation();
					}
				}
			}
		}
	}});
}
if (!dojo._hasResource["dijit.Dialog"]) {
	dojo._hasResource["dijit.Dialog"] = true;
	dojo.provide("dijit.Dialog");
	dojo.declare("dijit._DialogBase", [dijit._Templated, dijit.form._FormMixin, dijit._DialogMixin, dijit._CssStateMixin], {templateString: dojo.cache("dijit", "templates/Dialog.html", "<div class=\"dijitDialog\" role=\"dialog\" aria-labelledby=\"${id}_title\">\n\t<div dojoAttachPoint=\"titleBar\" class=\"dijitDialogTitleBar\">\n\t<span dojoAttachPoint=\"titleNode\" class=\"dijitDialogTitle\" id=\"${id}_title\"></span>\n\t<span dojoAttachPoint=\"closeButtonNode\" class=\"dijitDialogCloseIcon\" dojoAttachEvent=\"ondijitclick: onCancel\" title=\"${buttonCancel}\" role=\"button\" tabIndex=\"-1\">\n\t\t<span dojoAttachPoint=\"closeText\" class=\"closeText\" title=\"${buttonCancel}\">x</span>\n\t</span>\n\t</div>\n\t\t<div dojoAttachPoint=\"containerNode\" class=\"dijitDialogPaneContent\"></div>\n</div>\n"), baseClass: "dijitDialog", cssStateNodes: {closeButtonNode: "dijitDialogCloseIcon"}, attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {title: [
		{node: "titleNode", type: "innerHTML"},
		{node: "titleBar", type: "attribute"}
	], "aria-describedby": ""}), open: false, duration: dijit.defaultDuration, refocus: true, autofocus: true, _firstFocusItem: null, _lastFocusItem: null, doLayout: false, draggable: true, "aria-describedby": "", postMixInProperties: function () {
		var _111 = dojo.i18n.getLocalization("dijit", "common");
		dojo.mixin(this, _111);
		this.inherited(arguments);
	}, postCreate: function () {
		dojo.style(this.domNode, {display: "none", position: "absolute"});
		dojo.body().appendChild(this.domNode);
		this.inherited(arguments);
		this.connect(this, "onExecute", "hide");
		this.connect(this, "onCancel", "hide");
		this._modalconnects = [];
	}, onLoad: function () {
		this._position();
		if (this.autofocus && dijit._DialogLevelManager.isTop(this)) {
			this._getFocusItems(this.domNode);
			dijit.focus(this._firstFocusItem);
		}
		this.inherited(arguments);
	}, _endDrag: function (e) {
		if (e && e.node && e.node === this.domNode) {
			this._relativePosition = dojo.position(e.node);
		}
	}, _setup: function () {
		var node = this.domNode;
		if (this.titleBar && this.draggable) {
			this._moveable = (dojo.isIE == 6) ? new dojo.dnd.TimedMoveable(node, {handle: this.titleBar}) : new dojo.dnd.Moveable(node, {handle: this.titleBar, timeout: 0});
			this._dndListener = dojo.subscribe("/dnd/move/stop", this, "_endDrag");
		} else {
			dojo.addClass(node, "dijitDialogFixed");
		}
		this.underlayAttrs = {dialogId: this.id, "class": dojo.map(this["class"].split(/\s/), function (s) {
			return s + "_underlay";
		}).join(" ")};
	}, _size: function () {
		this._checkIfSingleChild();
		if (this._singleChild) {
			if (this._singleChildOriginalStyle) {
				this._singleChild.domNode.style.cssText = this._singleChildOriginalStyle;
			}
			delete this._singleChildOriginalStyle;
		} else {
			dojo.style(this.containerNode, {width: "auto", height: "auto"});
		}
		var mb = dojo._getMarginSize(this.domNode);
		var _112 = dojo.window.getBox();
		if (mb.w >= _112.w || mb.h >= _112.h) {
			var w = Math.min(mb.w, Math.floor(_112.w * 0.75)), h = Math.min(mb.h, Math.floor(_112.h * 0.75));
			if (this._singleChild && this._singleChild.resize) {
				this._singleChildOriginalStyle = this._singleChild.domNode.style.cssText;
				this._singleChild.resize({w: w, h: h});
			} else {
				dojo.style(this.containerNode, {width: w + "px", height: h + "px", overflow: "auto", position: "relative"});
			}
		} else {
			if (this._singleChild && this._singleChild.resize) {
				this._singleChild.resize();
			}
		}
	}, _position: function () {
		if (!dojo.hasClass(dojo.body(), "dojoMove")) {
			var node = this.domNode, _113 = dojo.window.getBox(), p = this._relativePosition, bb = p ? null : dojo._getBorderBox(node), l = Math.floor(_113.l + (p ? p.x : (_113.w - bb.w) / 2)), t = Math.floor(_113.t + (p ? p.y : (_113.h - bb.h) / 2));
			dojo.style(node, {left: l + "px", top: t + "px"});
		}
	}, _onKey: function (evt) {
		if (evt.charOrCode) {
			var dk = dojo.keys;
			var node = evt.target;
			if (evt.charOrCode === dk.TAB) {
				this._getFocusItems(this.domNode);
			}
			var _114 = (this._firstFocusItem == this._lastFocusItem);
			if (node == this._firstFocusItem && evt.shiftKey && evt.charOrCode === dk.TAB) {
				if (!_114) {
					dijit.focus(this._lastFocusItem);
				}
				dojo.stopEvent(evt);
			} else {
				if (node == this._lastFocusItem && evt.charOrCode === dk.TAB && !evt.shiftKey) {
					if (!_114) {
						dijit.focus(this._firstFocusItem);
					}
					dojo.stopEvent(evt);
				} else {
					while (node) {
						if (node == this.domNode || dojo.hasClass(node, "dijitPopup")) {
							if (evt.charOrCode == dk.ESCAPE) {
								this.onCancel();
							} else {
								return;
							}
						}
						node = node.parentNode;
					}
					if (evt.charOrCode !== dk.TAB) {
						dojo.stopEvent(evt);
					} else {
						if (!dojo.isOpera) {
							try {
								this._firstFocusItem.focus();
							} catch (e) {
							}
						}
					}
				}
			}
		}
	}, show: function () {
		if (this.open) {
			return;
		}
		if (!this._started) {
			this.startup();
		}
		if (!this._alreadyInitialized) {
			this._setup();
			this._alreadyInitialized = true;
		}
		if (this._fadeOutDeferred) {
			this._fadeOutDeferred.cancel();
		}
		this._modalconnects.push(dojo.connect(window, "onscroll", this, "layout"));
		this._modalconnects.push(dojo.connect(window, "onresize", this, function () {
			var _115 = dojo.window.getBox();
			if (!this._oldViewport || _115.h != this._oldViewport.h || _115.w != this._oldViewport.w) {
				this.layout();
				this._oldViewport = _115;
			}
		}));
		this._modalconnects.push(dojo.connect(this.domNode, "onkeypress", this, "_onKey"));
		dojo.style(this.domNode, {opacity: 0, display: ""});
		this._set("open", true);
		this._onShow();
		this._size();
		this._position();
		var _116;
		this._fadeInDeferred = new dojo.Deferred(dojo.hitch(this, function () {
			_116.stop();
			delete this._fadeInDeferred;
		}));
		_116 = dojo.fadeIn({node: this.domNode, duration: this.duration, beforeBegin: dojo.hitch(this, function () {
			dijit._DialogLevelManager.show(this, this.underlayAttrs);
		}), onEnd: dojo.hitch(this, function () {
			if (this.autofocus && dijit._DialogLevelManager.isTop(this)) {
				this._getFocusItems(this.domNode);
				dijit.focus(this._firstFocusItem);
			}
			this._fadeInDeferred.callback(true);
			delete this._fadeInDeferred;
		})}).play();
		return this._fadeInDeferred;
	}, hide: function () {
		if (!this._alreadyInitialized) {
			return;
		}
		if (this._fadeInDeferred) {
			this._fadeInDeferred.cancel();
		}
		var _117;
		this._fadeOutDeferred = new dojo.Deferred(dojo.hitch(this, function () {
			_117.stop();
			delete this._fadeOutDeferred;
		}));
		_117 = dojo.fadeOut({node: this.domNode, duration: this.duration, onEnd: dojo.hitch(this, function () {
			this.domNode.style.display = "none";
			dijit._DialogLevelManager.hide(this);
			this.onHide();
			this._fadeOutDeferred.callback(true);
			delete this._fadeOutDeferred;
		})}).play();
		if (this._scrollConnected) {
			this._scrollConnected = false;
		}
		dojo.forEach(this._modalconnects, dojo.disconnect);
		this._modalconnects = [];
		if (this._relativePosition) {
			delete this._relativePosition;
		}
		this._set("open", false);
		return this._fadeOutDeferred;
	}, layout: function () {
		if (this.domNode.style.display != "none") {
			if (dijit._underlay) {
				dijit._underlay.layout();
			}
			this._position();
		}
	}, destroy: function () {
		if (this._fadeInDeferred) {
			this._fadeInDeferred.cancel();
		}
		if (this._fadeOutDeferred) {
			this._fadeOutDeferred.cancel();
		}
		if (this._moveable) {
			this._moveable.destroy();
		}
		if (this._dndListener) {
			dojo.unsubscribe(this._dndListener);
		}
		dojo.forEach(this._modalconnects, dojo.disconnect);
		dijit._DialogLevelManager.hide(this);
		this.inherited(arguments);
	}});
	dojo.declare("dijit.Dialog", [dijit.layout.ContentPane, dijit._DialogBase], {});
	dijit._DialogLevelManager = {show: function (_118, _119) {
		var ds = dijit._dialogStack;
		ds[ds.length - 1].focus = dijit.getFocus(_118);
		var _11a = dijit._underlay;
		if (!_11a || _11a._destroyed) {
			_11a = dijit._underlay = new dijit.DialogUnderlay(_119);
		} else {
			_11a.set(_118.underlayAttrs);
		}
		var _11b = ds[ds.length - 1].dialog ? ds[ds.length - 1].zIndex + 2 : 950;
		if (ds.length == 1) {
			_11a.show();
		}
		dojo.style(dijit._underlay.domNode, "zIndex", _11b - 1);
		dojo.style(_118.domNode, "zIndex", _11b);
		ds.push({dialog: _118, underlayAttrs: _119, zIndex: _11b});
	}, hide: function (_11c) {
		var ds = dijit._dialogStack;
		if (ds[ds.length - 1].dialog == _11c) {
			ds.pop();
			var pd = ds[ds.length - 1];
			if (ds.length == 1) {
				if (!dijit._underlay._destroyed) {
					dijit._underlay.hide();
				}
			} else {
				dojo.style(dijit._underlay.domNode, "zIndex", pd.zIndex - 1);
				dijit._underlay.set(pd.underlayAttrs);
			}
			if (_11c.refocus) {
				var _11d = pd.focus;
				if (!_11d || (pd.dialog && !dojo.isDescendant(_11d.node, pd.dialog.domNode))) {
					pd.dialog._getFocusItems(pd.dialog.domNode);
					_11d = pd.dialog._firstFocusItem;
				}
				try {
					dijit.focus(_11d);
				} catch (e) {
				}
			}
		} else {
			var idx = dojo.indexOf(dojo.map(ds, function (elem) {
				return elem.dialog;
			}), _11c);
			if (idx != -1) {
				ds.splice(idx, 1);
			}
		}
	}, isTop: function (_11e) {
		var ds = dijit._dialogStack;
		return ds[ds.length - 1].dialog == _11e;
	}};
	dijit._dialogStack = [
		{dialog: null, focus: null, underlayAttrs: null}
	];
}
if (!dojo._hasResource["dijit._editor.selection"]) {
	dojo._hasResource["dijit._editor.selection"] = true;
	dojo.provide("dijit._editor.selection");
	dojo.getObject("_editor.selection", true, dijit);
	dojo.mixin(dijit._editor.selection, {getType: function () {
		if (dojo.isIE < 9) {
			return dojo.doc.selection.type.toLowerCase();
		} else {
			var _11f = "text";
			var oSel;
			try {
				oSel = dojo.global.getSelection();
			} catch (e) {
			}
			if (oSel && oSel.rangeCount == 1) {
				var _120 = oSel.getRangeAt(0);
				if ((_120.startContainer == _120.endContainer) && ((_120.endOffset - _120.startOffset) == 1) && (_120.startContainer.nodeType != 3)) {
					_11f = "control";
				}
			}
			return _11f;
		}
	}, getSelectedText: function () {
		if (dojo.isIE < 9) {
			if (dijit._editor.selection.getType() == "control") {
				return null;
			}
			return dojo.doc.selection.createRange().text;
		} else {
			var _121 = dojo.global.getSelection();
			if (_121) {
				return _121.toString();
			}
		}
		return "";
	}, getSelectedHtml: function () {
		if (dojo.isIE < 9) {
			if (dijit._editor.selection.getType() == "control") {
				return null;
			}
			return dojo.doc.selection.createRange().htmlText;
		} else {
			var _122 = dojo.global.getSelection();
			if (_122 && _122.rangeCount) {
				var i;
				var html = "";
				for (i = 0; i < _122.rangeCount; i++) {
					var frag = _122.getRangeAt(i).cloneContents();
					var div = dojo.doc.createElement("div");
					div.appendChild(frag);
					html += div.innerHTML;
				}
				return html;
			}
			return null;
		}
	}, getSelectedElement: function () {
		if (dijit._editor.selection.getType() == "control") {
			if (dojo.isIE < 9) {
				var _123 = dojo.doc.selection.createRange();
				if (_123 && _123.item) {
					return dojo.doc.selection.createRange().item(0);
				}
			} else {
				var _124 = dojo.global.getSelection();
				return _124.anchorNode.childNodes[_124.anchorOffset];
			}
		}
		return null;
	}, getParentElement: function () {
		if (dijit._editor.selection.getType() == "control") {
			var p = this.getSelectedElement();
			if (p) {
				return p.parentNode;
			}
		} else {
			if (dojo.isIE < 9) {
				var r = dojo.doc.selection.createRange();
				r.collapse(true);
				return r.parentElement();
			} else {
				var _125 = dojo.global.getSelection();
				if (_125) {
					var node = _125.anchorNode;
					while (node && (node.nodeType != 1)) {
						node = node.parentNode;
					}
					return node;
				}
			}
		}
		return null;
	}, hasAncestorElement: function (_126) {
		return this.getAncestorElement.apply(this, arguments) != null;
	}, getAncestorElement: function (_127) {
		var node = this.getSelectedElement() || this.getParentElement();
		return this.getParentOfType(node, arguments);
	}, isTag: function (node, tags) {
		if (node && node.tagName) {
			var _128 = node.tagName.toLowerCase();
			for (var i = 0; i < tags.length; i++) {
				var _129 = String(tags[i]).toLowerCase();
				if (_128 == _129) {
					return _129;
				}
			}
		}
		return "";
	}, getParentOfType: function (node, tags) {
		while (node) {
			if (this.isTag(node, tags).length) {
				return node;
			}
			node = node.parentNode;
		}
		return null;
	}, collapse: function (_12a) {
		if (window.getSelection) {
			var _12b = dojo.global.getSelection();
			if (_12b.removeAllRanges) {
				if (_12a) {
					_12b.collapseToStart();
				} else {
					_12b.collapseToEnd();
				}
			} else {
				_12b.collapse(_12a);
			}
		} else {
			if (dojo.isIE) {
				var _12c = dojo.doc.selection.createRange();
				_12c.collapse(_12a);
				_12c.select();
			}
		}
	}, remove: function () {
		var sel = dojo.doc.selection;
		if (dojo.isIE < 9) {
			if (sel.type.toLowerCase() != "none") {
				sel.clear();
			}
			return sel;
		} else {
			sel = dojo.global.getSelection();
			sel.deleteFromDocument();
			return sel;
		}
	}, selectElementChildren: function (_12d, _12e) {
		var win = dojo.global;
		var doc = dojo.doc;
		var _12f;
		_12d = dojo.byId(_12d);
		if (doc.selection && dojo.isIE < 9 && dojo.body().createTextRange) {
			_12f = _12d.ownerDocument.body.createTextRange();
			_12f.moveToElementText(_12d);
			if (!_12e) {
				try {
					_12f.select();
				} catch (e) {
				}
			}
		} else {
			if (win.getSelection) {
				var _130 = dojo.global.getSelection();
				if (dojo.isOpera) {
					if (_130.rangeCount) {
						_12f = _130.getRangeAt(0);
					} else {
						_12f = doc.createRange();
					}
					_12f.setStart(_12d, 0);
					_12f.setEnd(_12d, (_12d.nodeType == 3) ? _12d.length : _12d.childNodes.length);
					_130.addRange(_12f);
				} else {
					_130.selectAllChildren(_12d);
				}
			}
		}
	}, selectElement: function (_131, _132) {
		var _133;
		var doc = dojo.doc;
		var win = dojo.global;
		_131 = dojo.byId(_131);
		if (dojo.isIE < 9 && dojo.body().createTextRange) {
			try {
				var tg = _131.tagName ? _131.tagName.toLowerCase() : "";
				if (tg === "img" || tg === "table") {
					_133 = dojo.body().createControlRange();
				} else {
					_133 = dojo.body().createRange();
				}
				_133.addElement(_131);
				if (!_132) {
					_133.select();
				}
			} catch (e) {
				this.selectElementChildren(_131, _132);
			}
		} else {
			if (dojo.global.getSelection) {
				var _134 = win.getSelection();
				_133 = doc.createRange();
				if (_134.removeAllRanges) {
					if (dojo.isOpera) {
						if (_134.getRangeAt(0)) {
							_133 = _134.getRangeAt(0);
						}
					}
					_133.selectNode(_131);
					_134.removeAllRanges();
					_134.addRange(_133);
				}
			}
		}
	}, inSelection: function (node) {
		if (node) {
			var _135;
			var doc = dojo.doc;
			var _136;
			if (dojo.global.getSelection) {
				var sel = dojo.global.getSelection();
				if (sel && sel.rangeCount > 0) {
					_136 = sel.getRangeAt(0);
				}
				if (_136 && _136.compareBoundaryPoints && doc.createRange) {
					try {
						_135 = doc.createRange();
						_135.setStart(node, 0);
						if (_136.compareBoundaryPoints(_136.START_TO_END, _135) === 1) {
							return true;
						}
					} catch (e) {
					}
				}
			} else {
				if (doc.selection) {
					_136 = doc.selection.createRange();
					try {
						_135 = node.ownerDocument.body.createControlRange();
						if (_135) {
							_135.addElement(node);
						}
					} catch (e1) {
						try {
							_135 = node.ownerDocument.body.createTextRange();
							_135.moveToElementText(node);
						} catch (e2) {
						}
					}
					if (_136 && _135) {
						if (_136.compareEndPoints("EndToStart", _135) === 1) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}});
}
if (!dojo._hasResource["dijit._editor.range"]) {
	dojo._hasResource["dijit._editor.range"] = true;
	dojo.provide("dijit._editor.range");
	dijit.range = {};
	dijit.range.getIndex = function (node, _137) {
		var ret = [], retR = [];
		var stop = _137;
		var _138 = node;
		var _139, n;
		while (node != stop) {
			var i = 0;
			_139 = node.parentNode;
			while ((n = _139.childNodes[i++])) {
				if (n === node) {
					--i;
					break;
				}
			}
			ret.unshift(i);
			retR.unshift(i - _139.childNodes.length);
			node = _139;
		}
		if (ret.length > 0 && _138.nodeType == 3) {
			n = _138.previousSibling;
			while (n && n.nodeType == 3) {
				ret[ret.length - 1]--;
				n = n.previousSibling;
			}
			n = _138.nextSibling;
			while (n && n.nodeType == 3) {
				retR[retR.length - 1]++;
				n = n.nextSibling;
			}
		}
		return {o: ret, r: retR};
	};
	dijit.range.getNode = function (_13a, _13b) {
		if (!dojo.isArray(_13a) || _13a.length == 0) {
			return _13b;
		}
		var node = _13b;
		dojo.every(_13a, function (i) {
			if (i >= 0 && i < node.childNodes.length) {
				node = node.childNodes[i];
			} else {
				node = null;
				return false;
			}
			return true;
		});
		return node;
	};
	dijit.range.getCommonAncestor = function (n1, n2, root) {
		root = root || n1.ownerDocument.body;
		var _13c = function (n) {
			var as
			= [];
			while (n) {as.
				unshift(n);
				if (n !== root) {
					n = n.parentNode;
				} else {
					break;
				}
			}
			return
			as
			;
		};
		var n1as = _13c(n1);
		var n2as = _13c(n2);
		var m = Math.min(n1as.length, n2as.length);
		var com = n1as[0];
		for (var i = 1; i < m; i++) {
			if (n1as[i] === n2as[i]) {
				com = n1as[i];
			} else {
				break;
			}
		}
		return com;
	};
	dijit.range.getAncestor = function (node, _13d, root) {
		root = root || node.ownerDocument.body;
		while (node && node !== root) {
			var name = node.nodeName.toUpperCase();
			if (_13d.test(name)) {
				return node;
			}
			node = node.parentNode;
		}
		return null;
	};
	dijit.range.BlockTagNames = /^(?:P|DIV|H1|H2|H3|H4|H5|H6|ADDRESS|PRE|OL|UL|LI|DT|DE)$/;
	dijit.range.getBlockAncestor = function (node, _13e, root) {
		root = root || node.ownerDocument.body;
		_13e = _13e || dijit.range.BlockTagNames;
		var _13f = null, _140;
		while (node && node !== root) {
			var name = node.nodeName.toUpperCase();
			if (!_13f && _13e.test(name)) {
				_13f = node;
			}
			if (!_140 && (/^(?:BODY|TD|TH|CAPTION)$/).test(name)) {
				_140 = node;
			}
			node = node.parentNode;
		}
		return {blockNode: _13f, blockContainer: _140 || node.ownerDocument.body};
	};
	dijit.range.atBeginningOfContainer = function (_141, node, _142) {
		var _143 = false;
		var _144 = (_142 == 0);
		if (!_144 && node.nodeType == 3) {
			if (/^[\s\xA0]+$/.test(node.nodeValue.substr(0, _142))) {
				_144 = true;
			}
		}
		if (_144) {
			var _145 = node;
			_143 = true;
			while (_145 && _145 !== _141) {
				if (_145.previousSibling) {
					_143 = false;
					break;
				}
				_145 = _145.parentNode;
			}
		}
		return _143;
	};
	dijit.range.atEndOfContainer = function (_146, node, _147) {
		var _148 = false;
		var _149 = (_147 == (node.length || node.childNodes.length));
		if (!_149 && node.nodeType == 3) {
			if (/^[\s\xA0]+$/.test(node.nodeValue.substr(_147))) {
				_149 = true;
			}
		}
		if (_149) {
			var _14a = node;
			_148 = true;
			while (_14a && _14a !== _146) {
				if (_14a.nextSibling) {
					_148 = false;
					break;
				}
				_14a = _14a.parentNode;
			}
		}
		return _148;
	};
	dijit.range.adjacentNoneTextNode = function (_14b, next) {
		var node = _14b;
		var len = (0 - _14b.length) || 0;
		var prop = next ? "nextSibling" : "previousSibling";
		while (node) {
			if (node.nodeType != 3) {
				break;
			}
			len += node.length;
			node = node[prop];
		}
		return [node, len];
	};
	dijit.range._w3c = Boolean(window["getSelection"]);
	dijit.range.create = function (win) {
		if (dijit.range._w3c) {
			return (win || dojo.global).document.createRange();
		} else {
			return new dijit.range.W3CRange;
		}
	};
	dijit.range.getSelection = function (win, _14c) {
		if (dijit.range._w3c) {
			return win.getSelection();
		} else {
			var s = new dijit.range.ie.selection(win);
			if (!_14c) {
				s._getCurrentSelection();
			}
			return s;
		}
	};
	if (!dijit.range._w3c) {
		dijit.range.ie = {cachedSelection: {}, selection: function (win) {
			this._ranges = [];
			this.addRange = function (r, _14d) {
				this._ranges.push(r);
				if (!_14d) {
					r._select();
				}
				this.rangeCount = this._ranges.length;
			};
			this.removeAllRanges = function () {
				this._ranges = [];
				this.rangeCount = 0;
			};
			var _14e = function () {
				var r = win.document.selection.createRange();
				var type = win.document.selection.type.toUpperCase();
				if (type == "CONTROL") {
					return new dijit.range.W3CRange(dijit.range.ie.decomposeControlRange(r));
				} else {
					return new dijit.range.W3CRange(dijit.range.ie.decomposeTextRange(r));
				}
			};
			this.getRangeAt = function (i) {
				return this._ranges[i];
			};
			this._getCurrentSelection = function () {
				this.removeAllRanges();
				var r = _14e();
				if (r) {
					this.addRange(r, true);
				}
			};
		}, decomposeControlRange: function (_14f) {
			var _150 = _14f.item(0), _151 = _14f.item(_14f.length - 1);
			var _152 = _150.parentNode, _153 = _151.parentNode;
			var _154 = dijit.range.getIndex(_150, _152).o;
			var _155 = dijit.range.getIndex(_151, _153).o + 1;
			return [_152, _154, _153, _155];
		}, getEndPoint: function (_156, end) {
			var _157 = _156.duplicate();
			_157.collapse(!end);
			var _158 = "EndTo" + (end ? "End" : "Start");
			var _159 = _157.parentElement();
			var _15a, _15b, _15c;
			if (_159.childNodes.length > 0) {
				dojo.every(_159.childNodes, function (node, i) {
					var _15d;
					if (node.nodeType != 3) {
						_157.moveToElementText(node);
						if (_157.compareEndPoints(_158, _156) > 0) {
							if (_15c && _15c.nodeType == 3) {
								_15a = _15c;
								_15d = true;
							} else {
								_15a = _159;
								_15b = i;
								return false;
							}
						} else {
							if (i == _159.childNodes.length - 1) {
								_15a = _159;
								_15b = _159.childNodes.length;
								return false;
							}
						}
					} else {
						if (i == _159.childNodes.length - 1) {
							_15a = node;
							_15d = true;
						}
					}
					if (_15d && _15a) {
						var _15e = dijit.range.adjacentNoneTextNode(_15a)[0];
						if (_15e) {
							_15a = _15e.nextSibling;
						} else {
							_15a = _159.firstChild;
						}
						var _15f = dijit.range.adjacentNoneTextNode(_15a);
						_15e = _15f[0];
						var _160 = _15f[1];
						if (_15e) {
							_157.moveToElementText(_15e);
							_157.collapse(false);
						} else {
							_157.moveToElementText(_159);
						}
						_157.setEndPoint(_158, _156);
						_15b = _157.text.length - _160;
						return false;
					}
					_15c = node;
					return true;
				});
			} else {
				_15a = _159;
				_15b = 0;
			}
			if (!end && _15a.nodeType == 1 && _15b == _15a.childNodes.length) {
				var _161 = _15a.nextSibling;
				if (_161 && _161.nodeType == 3) {
					_15a = _161;
					_15b = 0;
				}
			}
			return [_15a, _15b];
		}, setEndPoint: function (_162, _163, _164) {
			var _165 = _162.duplicate(), node, len;
			if (_163.nodeType != 3) {
				if (_164 > 0) {
					node = _163.childNodes[_164 - 1];
					if (node) {
						if (node.nodeType == 3) {
							_163 = node;
							_164 = node.length;
						} else {
							if (node.nextSibling && node.nextSibling.nodeType == 3) {
								_163 = node.nextSibling;
								_164 = 0;
							} else {
								_165.moveToElementText(node.nextSibling ? node : _163);
								var _166 = node.parentNode;
								var _167 = _166.insertBefore(node.ownerDocument.createTextNode(" "), node.nextSibling);
								_165.collapse(false);
								_166.removeChild(_167);
							}
						}
					}
				} else {
					_165.moveToElementText(_163);
					_165.collapse(true);
				}
			}
			if (_163.nodeType == 3) {
				var _168 = dijit.range.adjacentNoneTextNode(_163);
				var _169 = _168[0];
				len = _168[1];
				if (_169) {
					_165.moveToElementText(_169);
					_165.collapse(false);
					if (_169.contentEditable != "inherit") {
						len++;
					}
				} else {
					_165.moveToElementText(_163.parentNode);
					_165.collapse(true);
				}
				_164 += len;
				if (_164 > 0) {
					if (_165.move("character", _164) != _164) {
						console.error("Error when moving!");
					}
				}
			}
			return _165;
		}, decomposeTextRange: function (_16a) {
			var _16b = dijit.range.ie.getEndPoint(_16a);
			var _16c = _16b[0], _16d = _16b[1];
			var _16e = _16b[0], _16f = _16b[1];
			if (_16a.htmlText.length) {
				if (_16a.htmlText == _16a.text) {
					_16f = _16d + _16a.text.length;
				} else {
					_16b = dijit.range.ie.getEndPoint(_16a, true);
					_16e = _16b[0], _16f = _16b[1];
				}
			}
			return [_16c, _16d, _16e, _16f];
		}, setRange: function (_170, _171, _172, _173, _174, _175) {
			var _176 = dijit.range.ie.setEndPoint(_170, _171, _172);
			_170.setEndPoint("StartToStart", _176);
			if (!_175) {
				var end = dijit.range.ie.setEndPoint(_170, _173, _174);
			}
			_170.setEndPoint("EndToEnd", end || _176);
			return _170;
		}};
		dojo.declare("dijit.range.W3CRange", null, {constructor: function () {
			if (arguments.length > 0) {
				this.setStart(arguments[0][0], arguments[0][1]);
				this.setEnd(arguments[0][2], arguments[0][3]);
			} else {
				this.commonAncestorContainer = null;
				this.startContainer = null;
				this.startOffset = 0;
				this.endContainer = null;
				this.endOffset = 0;
				this.collapsed = true;
			}
		}, _updateInternal: function () {
			if (this.startContainer !== this.endContainer) {
				this.commonAncestorContainer = dijit.range.getCommonAncestor(this.startContainer, this.endContainer);
			} else {
				this.commonAncestorContainer = this.startContainer;
			}
			this.collapsed = (this.startContainer === this.endContainer) && (this.startOffset == this.endOffset);
		}, setStart: function (node, _177) {
			_177 = parseInt(_177);
			if (this.startContainer === node && this.startOffset == _177) {
				return;
			}
			delete this._cachedBookmark;
			this.startContainer = node;
			this.startOffset = _177;
			if (!this.endContainer) {
				this.setEnd(node, _177);
			} else {
				this._updateInternal();
			}
		}, setEnd: function (node, _178) {
			_178 = parseInt(_178);
			if (this.endContainer === node && this.endOffset == _178) {
				return;
			}
			delete this._cachedBookmark;
			this.endContainer = node;
			this.endOffset = _178;
			if (!this.startContainer) {
				this.setStart(node, _178);
			} else {
				this._updateInternal();
			}
		}, setStartAfter: function (node, _179) {
			this._setPoint("setStart", node, _179, 1);
		}, setStartBefore: function (node, _17a) {
			this._setPoint("setStart", node, _17a, 0);
		}, setEndAfter: function (node, _17b) {
			this._setPoint("setEnd", node, _17b, 1);
		}, setEndBefore: function (node, _17c) {
			this._setPoint("setEnd", node, _17c, 0);
		}, _setPoint: function (what, node, _17d, ext) {
			var _17e = dijit.range.getIndex(node, node.parentNode).o;
			this[what](node.parentNode, _17e.pop() + ext);
		}, _getIERange: function () {
			var r = (this._body || this.endContainer.ownerDocument.body).createTextRange();
			dijit.range.ie.setRange(r, this.startContainer, this.startOffset, this.endContainer, this.endOffset, this.collapsed);
			return r;
		}, getBookmark: function (body) {
			this._getIERange();
			return this._cachedBookmark;
		}, _select: function () {
			var r = this._getIERange();
			r.select();
		}, deleteContents: function () {
			var r = this._getIERange();
			r.pasteHTML("");
			this.endContainer = this.startContainer;
			this.endOffset = this.startOffset;
			this.collapsed = true;
		}, cloneRange: function () {
			var r = new dijit.range.W3CRange([this.startContainer, this.startOffset, this.endContainer, this.endOffset]);
			r._body = this._body;
			return r;
		}, detach: function () {
			this._body = null;
			this.commonAncestorContainer = null;
			this.startContainer = null;
			this.startOffset = 0;
			this.endContainer = null;
			this.endOffset = 0;
			this.collapsed = true;
		}});
	}
}
if (!dojo._hasResource["dijit._editor.html"]) {
	dojo._hasResource["dijit._editor.html"] = true;
	dojo.provide("dijit._editor.html");
	dojo.getObject("_editor", true, dijit);
	dijit._editor.escapeXml = function (str, _17f) {
		str = str.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;");
		if (!_17f) {
			str = str.replace(/'/gm, "&#39;");
		}
		return str;
	};
	dijit._editor.getNodeHtml = function (node) {
		var _180;
		switch (node.nodeType) {
			case 1:
				var _181 = node.nodeName.toLowerCase();
				if (!_181 || _181.charAt(0) == "/") {
					return "";
				}
				_180 = "<" + _181;
				var _182 = [];
				var attr;
				if (dojo.isIE && node.outerHTML) {
					var s = node.outerHTML;
					s = s.substr(0, s.indexOf(">")).replace(/(['"])[^"']*\1/g, "");
					var reg = /(\b\w+)\s?=/g;
					var m, key;
					while ((m = reg.exec(s))) {
						key = m[1];
						if (key.substr(0, 3) != "_dj") {
							if (key == "src" || key == "href") {
								if (node.getAttribute("_djrealurl")) {
									_182.push([key, node.getAttribute("_djrealurl")]);
									continue;
								}
							}
							var val, _183;
							switch (key) {
								case "style":
									val = node.style.cssText.toLowerCase();
									break;
								case "class":
									val = node.className;
									break;
								case "width":
									if (_181 === "img") {
										_183 = /width=(\S+)/i.exec(s);
										if (_183) {
											val = _183[1];
										}
										break;
									}
								case "height":
									if (_181 === "img") {
										_183 = /height=(\S+)/i.exec(s);
										if (_183) {
											val = _183[1];
										}
										break;
									}
								default:
									val = node.getAttribute(key);
							}
							if (val != null) {
								_182.push([key, val.toString()]);
							}
						}
					}
				} else {
					var i = 0;
					while ((attr = node.attributes[i++])) {
						var n = attr.name;
						if (n.substr(0, 3) != "_dj") {
							var v = attr.value;
							if (n == "src" || n == "href") {
								if (node.getAttribute("_djrealurl")) {
									v = node.getAttribute("_djrealurl");
								}
							}
							_182.push([n, v]);
						}
					}
				}
				_182.sort(function (a, b) {
					return a[0] < b[0] ? -1 : (a[0] == b[0] ? 0 : 1);
				});
				var j = 0;
				while ((attr = _182[j++])) {
					_180 += " " + attr[0] + "=\"" + (dojo.isString(attr[1]) ? dijit._editor.escapeXml(attr[1], true) : attr[1]) + "\"";
				}
				if (_181 === "script") {
					_180 += ">" + node.innerHTML + "</" + _181 + ">";
				} else {
					if (node.childNodes.length) {
						_180 += ">" + dijit._editor.getChildrenHtml(node) + "</" + _181 + ">";
					} else {
						switch (_181) {
							case "br":
							case "hr":
							case "img":
							case "input":
							case "base":
							case "meta":
							case "area":
							case "basefont":
								_180 += " />";
								break;
							default:
								_180 += "></" + _181 + ">";
						}
					}
				}
				break;
			case 4:
			case 3:
				_180 = dijit._editor.escapeXml(node.nodeValue, true);
				break;
			case 8:
				_180 = "<!--" + dijit._editor.escapeXml(node.nodeValue, true) + "-->";
				break;
			default:
				_180 = "<!-- Element not recognized - Type: " + node.nodeType + " Name: " + node.nodeName + "-->";
		}
		return _180;
	};
	dijit._editor.getChildrenHtml = function (dom) {
		var out = "";
		if (!dom) {
			return out;
		}
		var _184 = dom["childNodes"] || dom;
		var _185 = !dojo.isIE || _184 !== dom;
		var node, i = 0;
		while ((node = _184[i++])) {
			if (!_185 || node.parentNode == dom) {
				out += dijit._editor.getNodeHtml(node);
			}
		}
		return out;
	};
}
if (!dojo._hasResource["dijit._editor.RichText"]) {
	dojo._hasResource["dijit._editor.RichText"] = true;
	dojo.provide("dijit._editor.RichText");
	if (!dojo.config["useXDomain"] || dojo.config["allowXdRichTextSave"]) {
		if (dojo._postLoad) {
			(function () {
				var _186 = dojo.doc.createElement("textarea");
				_186.id = dijit._scopeName + "._editor.RichText.value";
				dojo.style(_186, {display: "none", position: "absolute", top: "-100px", height: "3px", width: "3px"});
				dojo.body().appendChild(_186);
			})();
		} else {
			try {
				dojo.doc.write("<textarea id=\"" + dijit._scopeName + "._editor.RichText.value\" " + "style=\"display:none;position:absolute;top:-100px;left:-100px;height:3px;width:3px;overflow:hidden;\"></textarea>");
			} catch (e) {
			}
		}
	}
	dojo.declare("dijit._editor.RichText", [dijit._Widget, dijit._CssStateMixin], {constructor: function (_187) {
		this.contentPreFilters = [];
		this.contentPostFilters = [];
		this.contentDomPreFilters = [];
		this.contentDomPostFilters = [];
		this.editingAreaStyleSheets = [];
		this.events = [].concat(this.events);
		this._keyHandlers = {};
		if (_187 && dojo.isString(_187.value)) {
			this.value = _187.value;
		}
		this.onLoadDeferred = new dojo.Deferred();
	}, baseClass: "dijitEditor", inheritWidth: false, focusOnLoad: false, name: "", styleSheets: "", height: "300px", minHeight: "1em", isClosed: true, isLoaded: false, _SEPARATOR: "@@**%%__RICHTEXTBOUNDRY__%%**@@", _NAME_CONTENT_SEP: "@@**%%:%%**@@", onLoadDeferred: null, isTabIndent: false, disableSpellCheck: false, postCreate: function () {
		if ("textarea" == this.domNode.tagName.toLowerCase()) {
			console.warn("RichText should not be used with the TEXTAREA tag.  See dijit._editor.RichText docs.");
		}
		this.contentPreFilters = [dojo.hitch(this, "_preFixUrlAttributes")].concat(this.contentPreFilters);
		if (dojo.isMoz) {
			this.contentPreFilters = [this._normalizeFontStyle].concat(this.contentPreFilters);
			this.contentPostFilters = [this._removeMozBogus].concat(this.contentPostFilters);
		}
		if (dojo.isWebKit) {
			this.contentPreFilters = [this._removeWebkitBogus].concat(this.contentPreFilters);
			this.contentPostFilters = [this._removeWebkitBogus].concat(this.contentPostFilters);
		}
		if (dojo.isIE) {
			this.contentPostFilters = [this._normalizeFontStyle].concat(this.contentPostFilters);
		}
		this.inherited(arguments);
		dojo.publish(dijit._scopeName + "._editor.RichText::init", [this]);
		this.open();
		this.setupDefaultShortcuts();
	}, setupDefaultShortcuts: function () {
		var exec = dojo.hitch(this, function (cmd, arg) {
			return function () {
				return !this.execCommand(cmd, arg);
			};
		});
		var _188 = {b: exec("bold"), i: exec("italic"), u: exec("underline"), a: exec("selectall"), s: function () {
			this.save(true);
		}, m: function () {
			this.isTabIndent = !this.isTabIndent;
		}, "1": exec("formatblock", "h1"), "2": exec("formatblock", "h2"), "3": exec("formatblock", "h3"), "4": exec("formatblock", "h4"), "\\": exec("insertunorderedlist")};
		if (!dojo.isIE) {
			_188.Z = exec("redo");
		}
		for (var key in _188) {
			this.addKeyHandler(key, true, false, _188[key]);
		}
	}, events: ["onKeyPress", "onKeyDown", "onKeyUp"], captureEvents: [], _editorCommandsLocalized: false, _localizeEditorCommands: function () {
		if (dijit._editor._editorCommandsLocalized) {
			this._local2NativeFormatNames = dijit._editor._local2NativeFormatNames;
			this._native2LocalFormatNames = dijit._editor._native2LocalFormatNames;
			return;
		}
		dijit._editor._editorCommandsLocalized = true;
		dijit._editor._local2NativeFormatNames = {};
		dijit._editor._native2LocalFormatNames = {};
		this._local2NativeFormatNames = dijit._editor._local2NativeFormatNames;
		this._native2LocalFormatNames = dijit._editor._native2LocalFormatNames;
		var _189 = ["div", "p", "pre", "h1", "h2", "h3", "h4", "h5", "h6", "ol", "ul", "address"];
		var _18a = "", _18b, i = 0;
		while ((_18b = _189[i++])) {
			if (_18b.charAt(1) !== "l") {
				_18a += "<" + _18b + "><span>content</span></" + _18b + "><br/>";
			} else {
				_18a += "<" + _18b + "><li>content</li></" + _18b + "><br/>";
			}
		}
		var _18c = {position: "absolute", top: "0px", zIndex: 10, opacity: 0.01};
		var div = dojo.create("div", {style: _18c, innerHTML: _18a});
		dojo.body().appendChild(div);
		var _18d = dojo.hitch(this, function () {
			var node = div.firstChild;
			while (node) {
				try {
					dijit._editor.selection.selectElement(node.firstChild);
					var _18e = node.tagName.toLowerCase();
					this._local2NativeFormatNames[_18e] = document.queryCommandValue("formatblock");
					this._native2LocalFormatNames[this._local2NativeFormatNames[_18e]] = _18e;
					node = node.nextSibling.nextSibling;
				} catch (e) {
				}
			}
			div.parentNode.removeChild(div);
			div.innerHTML = "";
		});
		setTimeout(_18d, 0);
	}, open: function (_18f) {
		if (!this.onLoadDeferred || this.onLoadDeferred.fired >= 0) {
			this.onLoadDeferred = new dojo.Deferred();
		}
		if (!this.isClosed) {
			this.close();
		}
		dojo.publish(dijit._scopeName + "._editor.RichText::open", [this]);
		if (arguments.length == 1 && _18f.nodeName) {
			this.domNode = _18f;
		}
		var dn = this.domNode;
		var html;
		if (dojo.isString(this.value)) {
			html = this.value;
			delete this.value;
			dn.innerHTML = "";
		} else {
			if (dn.nodeName && dn.nodeName.toLowerCase() == "textarea") {
				var ta = (this.textarea = dn);
				this.name = ta.name;
				html = ta.value;
				dn = this.domNode = dojo.doc.createElement("div");
				dn.setAttribute("widgetId", this.id);
				ta.removeAttribute("widgetId");
				dn.cssText = ta.cssText;
				dn.className += " " + ta.className;
				dojo.place(dn, ta, "before");
				var _190 = dojo.hitch(this, function () {
					dojo.style(ta, {display: "block", position: "absolute", top: "-1000px"});
					if (dojo.isIE) {
						var s = ta.style;
						this.__overflow = s.overflow;
						s.overflow = "hidden";
					}
				});
				if (dojo.isIE) {
					setTimeout(_190, 10);
				} else {
					_190();
				}
				if (ta.form) {
					var _191 = ta.value;
					this.reset = function () {
						var _192 = this.getValue();
						if (_192 != _191) {
							this.replaceValue(_191);
						}
					};
					dojo.connect(ta.form, "onsubmit", this, function () {
						dojo.attr(ta, "disabled", this.disabled);
						ta.value = this.getValue();
					});
				}
			} else {
				html = dijit._editor.getChildrenHtml(dn);
				dn.innerHTML = "";
			}
		}
		var _193 = dojo.contentBox(dn);
		this._oldHeight = _193.h;
		this._oldWidth = _193.w;
		this.value = html;
		if (dn.nodeName && dn.nodeName == "LI") {
			dn.innerHTML = " <br>";
		}
		this.header = dn.ownerDocument.createElement("div");
		dn.appendChild(this.header);
		this.editingArea = dn.ownerDocument.createElement("div");
		dn.appendChild(this.editingArea);
		this.footer = dn.ownerDocument.createElement("div");
		dn.appendChild(this.footer);
		if (!this.name) {
			this.name = this.id + "_AUTOGEN";
		}
		if (this.name !== "" && (!dojo.config["useXDomain"] || dojo.config["allowXdRichTextSave"])) {
			var _194 = dojo.byId(dijit._scopeName + "._editor.RichText.value");
			if (_194 && _194.value !== "") {
				var _195 = _194.value.split(this._SEPARATOR), i = 0, dat;
				while ((dat = _195[i++])) {
					var data = dat.split(this._NAME_CONTENT_SEP);
					if (data[0] == this.name) {
						html = data[1];
						_195 = _195.splice(i, 1);
						_194.value = _195.join(this._SEPARATOR);
						break;
					}
				}
			}
			if (!dijit._editor._globalSaveHandler) {
				dijit._editor._globalSaveHandler = {};
				dojo.addOnUnload(function () {
					var id;
					for (id in dijit._editor._globalSaveHandler) {
						var f = dijit._editor._globalSaveHandler[id];
						if (dojo.isFunction(f)) {
							f();
						}
					}
				});
			}
			dijit._editor._globalSaveHandler[this.id] = dojo.hitch(this, "_saveContent");
		}
		this.isClosed = false;
		var ifr = (this.editorObject = this.iframe = dojo.doc.createElement("iframe"));
		ifr.id = this.id + "_iframe";
		this._iframeSrc = this._getIframeDocTxt();
		ifr.style.border = "none";
		ifr.style.width = "100%";
		if (this._layoutMode) {
			ifr.style.height = "100%";
		} else {
			if (dojo.isIE >= 7) {
				if (this.height) {
					ifr.style.height = this.height;
				}
				if (this.minHeight) {
					ifr.style.minHeight = this.minHeight;
				}
			} else {
				ifr.style.height = this.height ? this.height : this.minHeight;
			}
		}
		ifr.frameBorder = 0;
		ifr._loadFunc = dojo.hitch(this, function (win) {
			this.window = win;
			this.document = this.window.document;
			if (dojo.isIE) {
				this._localizeEditorCommands();
			}
			this.onLoad(html);
		});
		var s = "javascript:parent." + dijit._scopeName + ".byId(\"" + this.id + "\")._iframeSrc";
		ifr.setAttribute("src", s);
		this.editingArea.appendChild(ifr);
		if (dojo.isSafari <= 4) {
			var src = ifr.getAttribute("src");
			if (!src || src.indexOf("javascript") == -1) {
				setTimeout(function () {
					ifr.setAttribute("src", s);
				}, 0);
			}
		}
		if (dn.nodeName == "LI") {
			dn.lastChild.style.marginTop = "-1.2em";
		}
		dojo.addClass(this.domNode, this.baseClass);
	}, _local2NativeFormatNames: {}, _native2LocalFormatNames: {}, _getIframeDocTxt: function () {
		var _196 = dojo.getComputedStyle(this.domNode);
		var html = "";
		var _197 = true;
		if (dojo.isIE || dojo.isWebKit || (!this.height && !dojo.isMoz)) {
			html = "<div id='dijitEditorBody'></div>";
			_197 = false;
		} else {
			if (dojo.isMoz) {
				this._cursorToStart = true;
				html = "&nbsp;";
			}
		}
		var font = [_196.fontWeight, _196.fontSize, _196.fontFamily].join(" ");
		var _198 = _196.lineHeight;
		if (_198.indexOf("px") >= 0) {
			_198 = parseFloat(_198) / parseFloat(_196.fontSize);
		} else {
			if (_198.indexOf("em") >= 0) {
				_198 = parseFloat(_198);
			} else {
				_198 = "normal";
			}
		}
		var _199 = "";
		var self = this;
		this.style.replace(/(^|;)\s*(line-|font-?)[^;]+/ig, function (_19a) {
			_19a = _19a.replace(/^;/ig, "") + ";";
			var s = _19a.split(":")[0];
			if (s) {
				s = dojo.trim(s);
				s = s.toLowerCase();
				var i;
				var sC = "";
				for (i = 0; i < s.length; i++) {
					var c = s.charAt(i);
					switch (c) {
						case "-":
							i++;
							c = s.charAt(i).toUpperCase();
						default:
							sC += c;
					}
				}
				dojo.style(self.domNode, sC, "");
			}
			_199 += _19a + ";";
		});
		var _19b = dojo.query("label[for=\"" + this.id + "\"]");
		return [this.isLeftToRight() ? "<html>\n<head>\n" : "<html dir='rtl'>\n<head>\n", (dojo.isMoz && _19b.length ? "<title>" + _19b[0].innerHTML + "</title>\n" : ""), "<meta http-equiv='Content-Type' content='text/html'>\n", "<style>\n", "\tbody,html {\n", "\t\tbackground:transparent;\n", "\t\tpadding: 1px 0 0 0;\n", "\t\tmargin: -1px 0 0 0;\n", ((dojo.isWebKit) ? "\t\twidth: 100%;\n" : ""), ((dojo.isWebKit) ? "\t\theight: 100%;\n" : ""), "\t}\n", "\tbody{\n", "\t\ttop:0px;\n", "\t\tleft:0px;\n", "\t\tright:0px;\n", "\t\tfont:", font, ";\n", ((this.height || dojo.isOpera) ? "" : "\t\tposition: fixed;\n"), "\t\tmin-height:", this.minHeight, ";\n", "\t\tline-height:", _198, ";\n", "\t}\n", "\tp{ margin: 1em 0; }\n", (!_197 && !this.height ? "\tbody,html {overflow-y: hidden;}\n" : ""), "\t#dijitEditorBody{overflow-x: auto; overflow-y:" + (this.height ? "auto;" : "hidden;") + " outline: 0px;}\n", "\tli > ul:-moz-first-node, li > ol:-moz-first-node{ padding-top: 1.2em; }\n", (!dojo.isIE ? "\tli{ min-height:1.2em; }\n" : ""), "</style>\n", this._applyEditingAreaStyleSheets(), "\n", "</head>\n<body ", (_197 ? "id='dijitEditorBody' " : ""), "onload='frameElement._loadFunc(window,document)' style='" + _199 + "'>", html, "</body>\n</html>"].join("");
	}, _applyEditingAreaStyleSheets: function () {
		var _19c = [];
		if (this.styleSheets) {
			_19c = this.styleSheets.split(";");
			this.styleSheets = "";
		}
		_19c = _19c.concat(this.editingAreaStyleSheets);
		this.editingAreaStyleSheets = [];
		var text = "", i = 0, url;
		while ((url = _19c[i++])) {
			var _19d = (new dojo._Url(dojo.global.location, url)).toString();
			this.editingAreaStyleSheets.push(_19d);
			text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + _19d + "\"/>";
		}
		return text;
	}, addStyleSheet: function (uri) {
		var url = uri.toString();
		if (url.charAt(0) == "." || (url.charAt(0) != "/" && !uri.host)) {
			url = (new dojo._Url(dojo.global.location, url)).toString();
		}
		if (dojo.indexOf(this.editingAreaStyleSheets, url) > -1) {
			return;
		}
		this.editingAreaStyleSheets.push(url);
		this.onLoadDeferred.addCallback(dojo.hitch(this, function () {
			if (this.document.createStyleSheet) {
				this.document.createStyleSheet(url);
			} else {
				var head = this.document.getElementsByTagName("head")[0];
				var _19e = this.document.createElement("link");
				_19e.rel = "stylesheet";
				_19e.type = "text/css";
				_19e.href = url;
				head.appendChild(_19e);
			}
		}));
	}, removeStyleSheet: function (uri) {
		var url = uri.toString();
		if (url.charAt(0) == "." || (url.charAt(0) != "/" && !uri.host)) {
			url = (new dojo._Url(dojo.global.location, url)).toString();
		}
		var _19f = dojo.indexOf(this.editingAreaStyleSheets, url);
		if (_19f == -1) {
			return;
		}
		delete this.editingAreaStyleSheets[_19f];
		dojo.withGlobal(this.window, "query", dojo, ["link:[href=\"" + url + "\"]"]).orphan();
	}, disabled: false, _mozSettingProps: {"styleWithCSS": false}, _setDisabledAttr: function (_1a0) {
		_1a0 = !!_1a0;
		this._set("disabled", _1a0);
		if (!this.isLoaded) {
			return;
		}
		if (dojo.isIE || dojo.isWebKit || dojo.isOpera) {
			var _1a1 = dojo.isIE && (this.isLoaded || !this.focusOnLoad);
			if (_1a1) {
				this.editNode.unselectable = "on";
			}
			this.editNode.contentEditable = !_1a0;
			if (_1a1) {
				var _1a2 = this;
				setTimeout(function () {
					_1a2.editNode.unselectable = "off";
				}, 0);
			}
		} else {
			try {
				this.document.designMode = (_1a0 ? "off" : "on");
			} catch (e) {
				return;
			}
			if (!_1a0 && this._mozSettingProps) {
				var ps = this._mozSettingProps;
				for (var n in ps) {
					if (ps.hasOwnProperty(n)) {
						try {
							this.document.execCommand(n, false, ps[n]);
						} catch (e2) {
						}
					}
				}
			}
		}
		this._disabledOK = true;
	}, onLoad: function (html) {
		if (!this.window.__registeredWindow) {
			this.window.__registeredWindow = true;
			this._iframeRegHandle = dijit.registerIframe(this.iframe);
		}
		if (!dojo.isIE && !dojo.isWebKit && (this.height || dojo.isMoz)) {
			this.editNode = this.document.body;
		} else {
			this.editNode = this.document.body.firstChild;
			var _1a3 = this;
			if (dojo.isIE) {
				this.tabStop = dojo.create("div", {tabIndex: -1}, this.editingArea);
				this.iframe.onfocus = function () {
					_1a3.editNode.setActive();
				};
			}
		}
		this.focusNode = this.editNode;
		var _1a4 = this.events.concat(this.captureEvents);
		var ap = this.iframe ? this.document : this.editNode;
		dojo.forEach(_1a4, function (item) {
			this.connect(ap, item.toLowerCase(), item);
		}, this);
		this.connect(ap, "onmouseup", "onClick");
		if (dojo.isIE) {
			this.connect(this.document, "onmousedown", "_onIEMouseDown");
			this.editNode.style.zoom = 1;
		} else {
			this.connect(this.document, "onmousedown", function () {
				delete this._cursorToStart;
			});
		}
		if (dojo.isWebKit) {
			this._webkitListener = this.connect(this.document, "onmouseup", "onDisplayChanged");
			this.connect(this.document, "onmousedown", function (e) {
				var t = e.target;
				if (t && (t === this.document.body || t === this.document)) {
					setTimeout(dojo.hitch(this, "placeCursorAtEnd"), 0);
				}
			});
		}
		if (dojo.isIE) {
			try {
				this.document.execCommand("RespectVisibilityInDesign", true, null);
			} catch (e) {
			}
		}
		this.isLoaded = true;
		this.set("disabled", this.disabled);
		var _1a5 = dojo.hitch(this, function () {
			this.setValue(html);
			if (this.onLoadDeferred) {
				this.onLoadDeferred.callback(true);
			}
			this.onDisplayChanged();
			if (this.focusOnLoad) {
				dojo.addOnLoad(dojo.hitch(this, function () {
					setTimeout(dojo.hitch(this, "focus"), this.updateInterval);
				}));
			}
			this.value = this.getValue(true);
		});
		if (this.setValueDeferred) {
			this.setValueDeferred.addCallback(_1a5);
		} else {
			_1a5();
		}
	}, onKeyDown: function (e) {
		if (e.keyCode === dojo.keys.TAB && this.isTabIndent) {
			dojo.stopEvent(e);
			if (this.queryCommandEnabled((e.shiftKey ? "outdent" : "indent"))) {
				this.execCommand((e.shiftKey ? "outdent" : "indent"));
			}
		}
		if (dojo.isIE) {
			if (e.keyCode == dojo.keys.TAB && !this.isTabIndent) {
				if (e.shiftKey && !e.ctrlKey && !e.altKey) {
					this.iframe.focus();
				} else {
					if (!e.shiftKey && !e.ctrlKey && !e.altKey) {
						this.tabStop.focus();
					}
				}
			} else {
				if (e.keyCode === dojo.keys.BACKSPACE && this.document.selection.type === "Control") {
					dojo.stopEvent(e);
					this.execCommand("delete");
				} else {
					if ((65 <= e.keyCode && e.keyCode <= 90) || (e.keyCode >= 37 && e.keyCode <= 40)) {
						e.charCode = e.keyCode;
						this.onKeyPress(e);
					}
				}
			}
		}
		return true;
	}, onKeyUp: function (e) {
		return;
	}, setDisabled: function (_1a6) {
		dojo.deprecated("dijit.Editor::setDisabled is deprecated", "use dijit.Editor::attr(\"disabled\",boolean) instead", 2);
		this.set("disabled", _1a6);
	}, _setValueAttr: function (_1a7) {
		this.setValue(_1a7);
	}, _setDisableSpellCheckAttr: function (_1a8) {
		if (this.document) {
			dojo.attr(this.document.body, "spellcheck", !_1a8);
		} else {
			this.onLoadDeferred.addCallback(dojo.hitch(this, function () {
				dojo.attr(this.document.body, "spellcheck", !_1a8);
			}));
		}
		this._set("disableSpellCheck", _1a8);
	}, onKeyPress: function (e) {
		var c = (e.keyChar && e.keyChar.toLowerCase()) || e.keyCode, _1a9 = this._keyHandlers[c], args = arguments;
		if (_1a9 && !e.altKey) {
			dojo.some(_1a9, function (h) {
				if (!(h.shift ^ e.shiftKey) && !(h.ctrl ^ (e.ctrlKey || e.metaKey))) {
					if (!h.handler.apply(this, args)) {
						e.preventDefault();
					}
					return true;
				}
			}, this);
		}
		if (!this._onKeyHitch) {
			this._onKeyHitch = dojo.hitch(this, "onKeyPressed");
		}
		setTimeout(this._onKeyHitch, 1);
		return true;
	}, addKeyHandler: function (key, ctrl, _1aa, _1ab) {
		if (!dojo.isArray(this._keyHandlers[key])) {
			this._keyHandlers[key] = [];
		}
		this._keyHandlers[key].push({shift: _1aa || false, ctrl: ctrl || false, handler: _1ab});
	}, onKeyPressed: function () {
		this.onDisplayChanged();
	}, onClick: function (e) {
		this.onDisplayChanged(e);
	}, _onIEMouseDown: function (e) {
		if (!this._focused && !this.disabled) {
			this.focus();
		}
	}, _onBlur: function (e) {
		this.inherited(arguments);
		var _1ac = this.getValue(true);
		if (_1ac != this.value) {
			this.onChange(_1ac);
		}
		this._set("value", _1ac);
	}, _onFocus: function (e) {
		if (!this.disabled) {
			if (!this._disabledOK) {
				this.set("disabled", false);
			}
			this.inherited(arguments);
		}
	}, blur: function () {
		if (!dojo.isIE && this.window.document.documentElement && this.window.document.documentElement.focus) {
			this.window.document.documentElement.focus();
		} else {
			if (dojo.doc.body.focus) {
				dojo.doc.body.focus();
			}
		}
	}, focus: function () {
		if (!this.isLoaded) {
			this.focusOnLoad = true;
			return;
		}
		if (this._cursorToStart) {
			delete this._cursorToStart;
			if (this.editNode.childNodes) {
				this.placeCursorAtStart();
				return;
			}
		}
		if (!dojo.isIE) {
			dijit.focus(this.iframe);
		} else {
			if (this.editNode && this.editNode.focus) {
				this.iframe.fireEvent("onfocus", document.createEventObject());
			}
		}
	}, updateInterval: 200, _updateTimer: null, onDisplayChanged: function (e) {
		if (this._updateTimer) {
			clearTimeout(this._updateTimer);
		}
		if (!this._updateHandler) {
			this._updateHandler = dojo.hitch(this, "onNormalizedDisplayChanged");
		}
		this._updateTimer = setTimeout(this._updateHandler, this.updateInterval);
	}, onNormalizedDisplayChanged: function () {
		delete this._updateTimer;
	}, onChange: function (_1ad) {
	}, _normalizeCommand: function (cmd, _1ae) {
		var _1af = cmd.toLowerCase();
		if (_1af == "formatblock") {
			if (dojo.isSafari && _1ae === undefined) {
				_1af = "heading";
			}
		} else {
			if (_1af == "hilitecolor" && !dojo.isMoz) {
				_1af = "backcolor";
			}
		}
		return _1af;
	}, _qcaCache: {}, queryCommandAvailable: function (_1b0) {
		var ca = this._qcaCache[_1b0];
		if (ca !== undefined) {
			return ca;
		}
		return (this._qcaCache[_1b0] = this._queryCommandAvailable(_1b0));
	}, _queryCommandAvailable: function (_1b1) {
		var ie = 1;
		var _1b2 = 1 << 1;
		var _1b3 = 1 << 2;
		var _1b4 = 1 << 3;

		function _1b5(_1b6) {
			return {ie: Boolean(_1b6 & ie), mozilla: Boolean(_1b6 & _1b2), webkit: Boolean(_1b6 & _1b3), opera: Boolean(_1b6 & _1b4)};
		};
		var _1b7 = null;
		switch (_1b1.toLowerCase()) {
			case "bold":
			case "italic":
			case "underline":
			case "subscript":
			case "superscript":
			case "fontname":
			case "fontsize":
			case "forecolor":
			case "hilitecolor":
			case "justifycenter":
			case "justifyfull":
			case "justifyleft":
			case "justifyright":
			case "delete":
			case "selectall":
			case "toggledir":
				_1b7 = _1b5(_1b2 | ie | _1b3 | _1b4);
				break;
			case "createlink":
			case "unlink":
			case "removeformat":
			case "inserthorizontalrule":
			case "insertimage":
			case "insertorderedlist":
			case "insertunorderedlist":
			case "indent":
			case "outdent":
			case "formatblock":
			case "inserthtml":
			case "undo":
			case "redo":
			case "strikethrough":
			case "tabindent":
				_1b7 = _1b5(_1b2 | ie | _1b4 | _1b3);
				break;
			case "blockdirltr":
			case "blockdirrtl":
			case "dirltr":
			case "dirrtl":
			case "inlinedirltr":
			case "inlinedirrtl":
				_1b7 = _1b5(ie);
				break;
			case "cut":
			case "copy":
			case "paste":
				_1b7 = _1b5(ie | _1b2 | _1b3);
				break;
			case "inserttable":
				_1b7 = _1b5(_1b2 | ie);
				break;
			case "insertcell":
			case "insertcol":
			case "insertrow":
			case "deletecells":
			case "deletecols":
			case "deleterows":
			case "mergecells":
			case "splitcell":
				_1b7 = _1b5(ie | _1b2);
				break;
			default:
				return false;
		}
		return (dojo.isIE && _1b7.ie) || (dojo.isMoz && _1b7.mozilla) || (dojo.isWebKit && _1b7.webkit) || (dojo.isOpera && _1b7.opera);
	}, execCommand: function (_1b8, _1b9) {
		var _1ba;
		this.focus();
		_1b8 = this._normalizeCommand(_1b8, _1b9);
		if (_1b9 !== undefined) {
			if (_1b8 == "heading") {
				throw new Error("unimplemented");
			} else {
				if ((_1b8 == "formatblock") && dojo.isIE) {
					_1b9 = "<" + _1b9 + ">";
				}
			}
		}
		var _1bb = "_" + _1b8 + "Impl";
		if (this[_1bb]) {
			_1ba = this[_1bb](_1b9);
		} else {
			_1b9 = arguments.length > 1 ? _1b9 : null;
			if (_1b9 || _1b8 != "createlink") {
				_1ba = this.document.execCommand(_1b8, false, _1b9);
			}
		}
		this.onDisplayChanged();
		return _1ba;
	}, queryCommandEnabled: function (_1bc) {
		if (this.disabled || !this._disabledOK) {
			return false;
		}
		_1bc = this._normalizeCommand(_1bc);
		if (dojo.isMoz || dojo.isWebKit) {
			if (_1bc == "unlink") {
				return this._sCall("hasAncestorElement", ["a"]);
			} else {
				if (_1bc == "inserttable") {
					return true;
				}
			}
		}
		if (dojo.isWebKit) {
			if (_1bc == "cut" || _1bc == "copy") {
				var sel = this.window.getSelection();
				if (sel) {
					sel = sel.toString();
				}
				return !!sel;
			} else {
				if (_1bc == "paste") {
					return true;
				}
			}
		}
		var elem = dojo.isIE ? this.document.selection.createRange() : this.document;
		try {
			return elem.queryCommandEnabled(_1bc);
		} catch (e) {
			return false;
		}
	}, queryCommandState: function (_1bd) {
		if (this.disabled || !this._disabledOK) {
			return false;
		}
		_1bd = this._normalizeCommand(_1bd);
		try {
			return this.document.queryCommandState(_1bd);
		} catch (e) {
			return false;
		}
	}, queryCommandValue: function (_1be) {
		if (this.disabled || !this._disabledOK) {
			return false;
		}
		var r;
		_1be = this._normalizeCommand(_1be);
		if (dojo.isIE && _1be == "formatblock") {
			r = this._native2LocalFormatNames[this.document.queryCommandValue(_1be)];
		} else {
			if (dojo.isMoz && _1be === "hilitecolor") {
				var _1bf;
				try {
					_1bf = this.document.queryCommandValue("styleWithCSS");
				} catch (e) {
					_1bf = false;
				}
				this.document.execCommand("styleWithCSS", false, true);
				r = this.document.queryCommandValue(_1be);
				this.document.execCommand("styleWithCSS", false, _1bf);
			} else {
				r = this.document.queryCommandValue(_1be);
			}
		}
		return r;
	}, _sCall: function (name, args) {
		return dojo.withGlobal(this.window, name, dijit._editor.selection, args);
	}, placeCursorAtStart: function () {
		this.focus();
		var _1c0 = false;
		if (dojo.isMoz) {
			var _1c1 = this.editNode.firstChild;
			while (_1c1) {
				if (_1c1.nodeType == 3) {
					if (_1c1.nodeValue.replace(/^\s+|\s+$/g, "").length > 0) {
						_1c0 = true;
						this._sCall("selectElement", [_1c1]);
						break;
					}
				} else {
					if (_1c1.nodeType == 1) {
						_1c0 = true;
						var tg = _1c1.tagName ? _1c1.tagName.toLowerCase() : "";
						if (/br|input|img|base|meta|area|basefont|hr|link/.test(tg)) {
							this._sCall("selectElement", [_1c1]);
						} else {
							this._sCall("selectElementChildren", [_1c1]);
						}
						break;
					}
				}
				_1c1 = _1c1.nextSibling;
			}
		} else {
			_1c0 = true;
			this._sCall("selectElementChildren", [this.editNode]);
		}
		if (_1c0) {
			this._sCall("collapse", [true]);
		}
	}, placeCursorAtEnd: function () {
		this.focus();
		var _1c2 = false;
		if (dojo.isMoz) {
			var last = this.editNode.lastChild;
			while (last) {
				if (last.nodeType == 3) {
					if (last.nodeValue.replace(/^\s+|\s+$/g, "").length > 0) {
						_1c2 = true;
						this._sCall("selectElement", [last]);
						break;
					}
				} else {
					if (last.nodeType == 1) {
						_1c2 = true;
						if (last.lastChild) {
							this._sCall("selectElement", [last.lastChild]);
						} else {
							this._sCall("selectElement", [last]);
						}
						break;
					}
				}
				last = last.previousSibling;
			}
		} else {
			_1c2 = true;
			this._sCall("selectElementChildren", [this.editNode]);
		}
		if (_1c2) {
			this._sCall("collapse", [false]);
		}
	}, getValue: function (_1c3) {
		if (this.textarea) {
			if (this.isClosed || !this.isLoaded) {
				return this.textarea.value;
			}
		}
		return this._postFilterContent(null, _1c3);
	}, _getValueAttr: function () {
		return this.getValue(true);
	}, setValue: function (html) {
		if (!this.isLoaded) {
			this.onLoadDeferred.addCallback(dojo.hitch(this, function () {
				this.setValue(html);
			}));
			return;
		}
		this._cursorToStart = true;
		if (this.textarea && (this.isClosed || !this.isLoaded)) {
			this.textarea.value = html;
		} else {
			html = this._preFilterContent(html);
			var node = this.isClosed ? this.domNode : this.editNode;
			if (html && dojo.isMoz && html.toLowerCase() == "<p></p>") {
				html = "<p>&nbsp;</p>";
			}
			if (!html && dojo.isWebKit) {
				html = "&nbsp;";
			}
			node.innerHTML = html;
			this._preDomFilterContent(node);
		}
		this.onDisplayChanged();
		this._set("value", this.getValue(true));
	}, replaceValue: function (html) {
		if (this.isClosed) {
			this.setValue(html);
		} else {
			if (this.window && this.window.getSelection && !dojo.isMoz) {
				this.setValue(html);
			} else {
				if (this.window && this.window.getSelection) {
					html = this._preFilterContent(html);
					this.execCommand("selectall");
					if (!html) {
						this._cursorToStart = true;
						html = "&nbsp;";
					}
					this.execCommand("inserthtml", html);
					this._preDomFilterContent(this.editNode);
				} else {
					if (this.document && this.document.selection) {
						this.setValue(html);
					}
				}
			}
		}
		this._set("value", this.getValue(true));
	}, _preFilterContent: function (html) {
		var ec = html;
		dojo.forEach(this.contentPreFilters, function (ef) {
			if (ef) {
				ec = ef(ec);
			}
		});
		return ec;
	}, _preDomFilterContent: function (dom) {
		dom = dom || this.editNode;
		dojo.forEach(this.contentDomPreFilters, function (ef) {
			if (ef && dojo.isFunction(ef)) {
				ef(dom);
			}
		}, this);
	}, _postFilterContent: function (dom, _1c4) {
		var ec;
		if (!dojo.isString(dom)) {
			dom = dom || this.editNode;
			if (this.contentDomPostFilters.length) {
				if (_1c4) {
					dom = dojo.clone(dom);
				}
				dojo.forEach(this.contentDomPostFilters, function (ef) {
					dom = ef(dom);
				});
			}
			ec = dijit._editor.getChildrenHtml(dom);
		} else {
			ec = dom;
		}
		if (!dojo.trim(ec.replace(/^\xA0\xA0*/, "").replace(/\xA0\xA0*$/, "")).length) {
			ec = "";
		}
		dojo.forEach(this.contentPostFilters, function (ef) {
			ec = ef(ec);
		});
		return ec;
	}, _saveContent: function (e) {
		var _1c5 = dojo.byId(dijit._scopeName + "._editor.RichText.value");
		if (_1c5.value) {
			_1c5.value += this._SEPARATOR;
		}
		_1c5.value += this.name + this._NAME_CONTENT_SEP + this.getValue(true);
	}, escapeXml: function (str, _1c6) {
		str = str.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;");
		if (!_1c6) {
			str = str.replace(/'/gm, "&#39;");
		}
		return str;
	}, getNodeHtml: function (node) {
		dojo.deprecated("dijit.Editor::getNodeHtml is deprecated", "use dijit._editor.getNodeHtml instead", 2);
		return dijit._editor.getNodeHtml(node);
	}, getNodeChildrenHtml: function (dom) {
		dojo.deprecated("dijit.Editor::getNodeChildrenHtml is deprecated", "use dijit._editor.getChildrenHtml instead", 2);
		return dijit._editor.getChildrenHtml(dom);
	}, close: function (save) {
		if (this.isClosed) {
			return;
		}
		if (!arguments.length) {
			save = true;
		}
		if (save) {
			this._set("value", this.getValue(true));
		}
		if (this.interval) {
			clearInterval(this.interval);
		}
		if (this._webkitListener) {
			this.disconnect(this._webkitListener);
			delete this._webkitListener;
		}
		if (dojo.isIE) {
			this.iframe.onfocus = null;
		}
		this.iframe._loadFunc = null;
		if (this._iframeRegHandle) {
			dijit.unregisterIframe(this._iframeRegHandle);
			delete this._iframeRegHandle;
		}
		if (this.textarea) {
			var s = this.textarea.style;
			s.position = "";
			s.left = s.top = "";
			if (dojo.isIE) {
				s.overflow = this.__overflow;
				this.__overflow = null;
			}
			this.textarea.value = this.value;
			dojo.destroy(this.domNode);
			this.domNode = this.textarea;
		} else {
			this.domNode.innerHTML = this.value;
		}
		delete this.iframe;
		dojo.removeClass(this.domNode, this.baseClass);
		this.isClosed = true;
		this.isLoaded = false;
		delete this.editNode;
		delete this.focusNode;
		if (this.window && this.window._frameElement) {
			this.window._frameElement = null;
		}
		this.window = null;
		this.document = null;
		this.editingArea = null;
		this.editorObject = null;
	}, destroy: function () {
		if (!this.isClosed) {
			this.close(false);
		}
		this.inherited(arguments);
		if (dijit._editor._globalSaveHandler) {
			delete dijit._editor._globalSaveHandler[this.id];
		}
	}, _removeMozBogus: function (html) {
		return html.replace(/\stype="_moz"/gi, "").replace(/\s_moz_dirty=""/gi, "").replace(/_moz_resizing="(true|false)"/gi, "");
	}, _removeWebkitBogus: function (html) {
		html = html.replace(/\sclass="webkit-block-placeholder"/gi, "");
		html = html.replace(/\sclass="apple-style-span"/gi, "");
		html = html.replace(/<meta charset=\"utf-8\" \/>/gi, "");
		return html;
	}, _normalizeFontStyle: function (html) {
		return html.replace(/<(\/)?strong([ \>])/gi, "<$1b$2").replace(/<(\/)?em([ \>])/gi, "<$1i$2");
	}, _preFixUrlAttributes: function (html) {
		return html.replace(/(?:(<a(?=\s).*?\shref=)("|')(.*?)\2)|(?:(<a\s.*?href=)([^"'][^ >]+))/gi, "$1$4$2$3$5$2 _djrealurl=$2$3$5$2").replace(/(?:(<img(?=\s).*?\ssrc=)("|')(.*?)\2)|(?:(<img\s.*?src=)([^"'][^ >]+))/gi, "$1$4$2$3$5$2 _djrealurl=$2$3$5$2");
	}, _inserthorizontalruleImpl: function (_1c7) {
		if (dojo.isIE) {
			return this._inserthtmlImpl("<hr>");
		}
		return this.document.execCommand("inserthorizontalrule", false, _1c7);
	}, _unlinkImpl: function (_1c8) {
		if ((this.queryCommandEnabled("unlink")) && (dojo.isMoz || dojo.isWebKit)) {
			var a = this._sCall("getAncestorElement", ["a"]);
			this._sCall("selectElement", [a]);
			return this.document.execCommand("unlink", false, null);
		}
		return this.document.execCommand("unlink", false, _1c8);
	}, _hilitecolorImpl: function (_1c9) {
		var _1ca;
		if (dojo.isMoz) {
			this.document.execCommand("styleWithCSS", false, true);
			_1ca = this.document.execCommand("hilitecolor", false, _1c9);
			this.document.execCommand("styleWithCSS", false, false);
		} else {
			_1ca = this.document.execCommand("hilitecolor", false, _1c9);
		}
		return _1ca;
	}, _backcolorImpl: function (_1cb) {
		if (dojo.isIE) {
			_1cb = _1cb ? _1cb : null;
		}
		return this.document.execCommand("backcolor", false, _1cb);
	}, _forecolorImpl: function (_1cc) {
		if (dojo.isIE) {
			_1cc = _1cc ? _1cc : null;
		}
		return this.document.execCommand("forecolor", false, _1cc);
	}, _inserthtmlImpl: function (_1cd) {
		_1cd = this._preFilterContent(_1cd);
		var rv = true;
		if (dojo.isIE) {
			var _1ce = this.document.selection.createRange();
			if (this.document.selection.type.toUpperCase() == "CONTROL") {
				var n = _1ce.item(0);
				while (_1ce.length) {
					_1ce.remove(_1ce.item(0));
				}
				n.outerHTML = _1cd;
			} else {
				_1ce.pasteHTML(_1cd);
			}
			_1ce.select();
		} else {
			if (dojo.isMoz && !_1cd.length) {
				this._sCall("remove");
			} else {
				rv = this.document.execCommand("inserthtml", false, _1cd);
			}
		}
		return rv;
	}, _boldImpl: function (_1cf) {
		if (dojo.isIE) {
			this._adaptIESelection();
		}
		return this.document.execCommand("bold", false, _1cf);
	}, _italicImpl: function (_1d0) {
		if (dojo.isIE) {
			this._adaptIESelection();
		}
		return this.document.execCommand("italic", false, _1d0);
	}, _underlineImpl: function (_1d1) {
		if (dojo.isIE) {
			this._adaptIESelection();
		}
		return this.document.execCommand("underline", false, _1d1);
	}, _strikethroughImpl: function (_1d2) {
		if (dojo.isIE) {
			this._adaptIESelection();
		}
		return this.document.execCommand("strikethrough", false, _1d2);
	}, getHeaderHeight: function () {
		return this._getNodeChildrenHeight(this.header);
	}, getFooterHeight: function () {
		return this._getNodeChildrenHeight(this.footer);
	}, _getNodeChildrenHeight: function (node) {
		var h = 0;
		if (node && node.childNodes) {
			var i;
			for (i = 0; i < node.childNodes.length; i++) {
				var size = dojo.position(node.childNodes[i]);
				h += size.h;
			}
		}
		return h;
	}, _isNodeEmpty: function (node, _1d3) {
		if (node.nodeType == 1) {
			if (node.childNodes.length > 0) {
				return this._isNodeEmpty(node.childNodes[0], _1d3);
			}
			return true;
		} else {
			if (node.nodeType == 3) {
				return (node.nodeValue.substring(_1d3) == "");
			}
		}
		return false;
	}, _removeStartingRangeFromRange: function (node, _1d4) {
		if (node.nextSibling) {
			_1d4.setStart(node.nextSibling, 0);
		} else {
			var _1d5 = node.parentNode;
			while (_1d5 && _1d5.nextSibling == null) {
				_1d5 = _1d5.parentNode;
			}
			if (_1d5) {
				_1d4.setStart(_1d5.nextSibling, 0);
			}
		}
		return _1d4;
	}, _adaptIESelection: function () {
		var _1d6 = dijit.range.getSelection(this.window);
		if (_1d6 && _1d6.rangeCount && !_1d6.isCollapsed) {
			var _1d7 = _1d6.getRangeAt(0);
			var _1d8 = _1d7.startContainer;
			var _1d9 = _1d7.startOffset;
			while (_1d8.nodeType == 3 && _1d9 >= _1d8.length && _1d8.nextSibling) {
				_1d9 = _1d9 - _1d8.length;
				_1d8 = _1d8.nextSibling;
			}
			var _1da = null;
			while (this._isNodeEmpty(_1d8, _1d9) && _1d8 != _1da) {
				_1da = _1d8;
				_1d7 = this._removeStartingRangeFromRange(_1d8, _1d7);
				_1d8 = _1d7.startContainer;
				_1d9 = 0;
			}
			_1d6.removeAllRanges();
			_1d6.addRange(_1d7);
		}
	}});
}
if (!dojo._hasResource["dijit._KeyNavContainer"]) {
	dojo._hasResource["dijit._KeyNavContainer"] = true;
	dojo.provide("dijit._KeyNavContainer");
	dojo.declare("dijit._KeyNavContainer", dijit._Container, {tabIndex: "0", _keyNavCodes: {}, connectKeyNavHandlers: function (_1db, _1dc) {
		var _1dd = (this._keyNavCodes = {});
		var prev = dojo.hitch(this, this.focusPrev);
		var next = dojo.hitch(this, this.focusNext);
		dojo.forEach(_1db, function (code) {
			_1dd[code] = prev;
		});
		dojo.forEach(_1dc, function (code) {
			_1dd[code] = next;
		});
		_1dd[dojo.keys.HOME] = dojo.hitch(this, "focusFirstChild");
		_1dd[dojo.keys.END] = dojo.hitch(this, "focusLastChild");
		this.connect(this.domNode, "onkeypress", "_onContainerKeypress");
		this.connect(this.domNode, "onfocus", "_onContainerFocus");
	}, startupKeyNavChildren: function () {
		dojo.forEach(this.getChildren(), dojo.hitch(this, "_startupChild"));
	}, addChild: function (_1de, _1df) {
		dijit._KeyNavContainer.superclass.addChild.apply(this, arguments);
		this._startupChild(_1de);
	}, focus: function () {
		this.focusFirstChild();
	}, focusFirstChild: function () {
		var _1e0 = this._getFirstFocusableChild();
		if (_1e0) {
			this.focusChild(_1e0);
		}
	}, focusLastChild: function () {
		var _1e1 = this._getLastFocusableChild();
		if (_1e1) {
			this.focusChild(_1e1);
		}
	}, focusNext: function () {
		var _1e2 = this._getNextFocusableChild(this.focusedChild, 1);
		this.focusChild(_1e2);
	}, focusPrev: function () {
		var _1e3 = this._getNextFocusableChild(this.focusedChild, -1);
		this.focusChild(_1e3, true);
	}, focusChild: function (_1e4, last) {
		if (this.focusedChild && _1e4 !== this.focusedChild) {
			this._onChildBlur(this.focusedChild);
		}
		_1e4.set("tabIndex", this.tabIndex);
		_1e4.focus(last ? "end" : "start");
		this._set("focusedChild", _1e4);
	}, _startupChild: function (_1e5) {
		_1e5.set("tabIndex", "-1");
		this.connect(_1e5, "_onFocus", function () {
			_1e5.set("tabIndex", this.tabIndex);
		});
		this.connect(_1e5, "_onBlur", function () {
			_1e5.set("tabIndex", "-1");
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
	}, _onChildBlur: function (_1e6) {
	}, _getFirstFocusableChild: function () {
		return this._getNextFocusableChild(null, 1);
	}, _getLastFocusableChild: function () {
		return this._getNextFocusableChild(null, -1);
	}, _getNextFocusableChild: function (_1e7, dir) {
		if (_1e7) {
			_1e7 = this._getSiblingOfChild(_1e7, dir);
		}
		var _1e8 = this.getChildren();
		for (var i = 0; i < _1e8.length; i++) {
			if (!_1e7) {
				_1e7 = _1e8[(dir > 0) ? 0 : (_1e8.length - 1)];
			}
			if (_1e7.isFocusable()) {
				return _1e7;
			}
			_1e7 = this._getSiblingOfChild(_1e7, dir);
		}
		return null;
	}});
}
if (!dojo._hasResource["dijit.ToolbarSeparator"]) {
	dojo._hasResource["dijit.ToolbarSeparator"] = true;
	dojo.provide("dijit.ToolbarSeparator");
	dojo.declare("dijit.ToolbarSeparator", [dijit._Widget, dijit._Templated], {templateString: "<div class=\"dijitToolbarSeparator dijitInline\" role=\"presentation\"></div>", buildRendering: function () {
		this.inherited(arguments);
		dojo.setSelectable(this.domNode, false);
	}, isFocusable: function () {
		return false;
	}});
}
if (!dojo._hasResource["dijit.Toolbar"]) {
	dojo._hasResource["dijit.Toolbar"] = true;
	dojo.provide("dijit.Toolbar");
	dojo.declare("dijit.Toolbar", [dijit._Widget, dijit._Templated, dijit._KeyNavContainer], {templateString: "<div class=\"dijit\" role=\"toolbar\" tabIndex=\"${tabIndex}\" dojoAttachPoint=\"containerNode\">" + "</div>", baseClass: "dijitToolbar", postCreate: function () {
		this.inherited(arguments);
		this.connectKeyNavHandlers(this.isLeftToRight() ? [dojo.keys.LEFT_ARROW] : [dojo.keys.RIGHT_ARROW], this.isLeftToRight() ? [dojo.keys.RIGHT_ARROW] : [dojo.keys.LEFT_ARROW]);
	}, startup: function () {
		if (this._started) {
			return;
		}
		this.startupKeyNavChildren();
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit._HasDropDown"]) {
	dojo._hasResource["dijit._HasDropDown"] = true;
	dojo.provide("dijit._HasDropDown");
	dojo.declare("dijit._HasDropDown", null, {_buttonNode: null, _arrowWrapperNode: null, _popupStateNode: null, _aroundNode: null, dropDown: null, autoWidth: true, forceWidth: false, maxHeight: 0, dropDownPosition: ["below", "above"], _stopClickEvents: true, _onDropDownMouseDown: function (e) {
		if (this.disabled || this.readOnly) {
			return;
		}
		dojo.stopEvent(e);
		this._docHandler = this.connect(dojo.doc, "onmouseup", "_onDropDownMouseUp");
		this.toggleDropDown();
	}, _onDropDownMouseUp: function (e) {
		if (e && this._docHandler) {
			this.disconnect(this._docHandler);
		}
		var _1e9 = this.dropDown, _1ea = false;
		if (e && this._opened) {
			var c = dojo.position(this._buttonNode, true);
			if (!(e.pageX >= c.x && e.pageX <= c.x + c.w) || !(e.pageY >= c.y && e.pageY <= c.y + c.h)) {
				var t = e.target;
				while (t && !_1ea) {
					if (dojo.hasClass(t, "dijitPopup")) {
						_1ea = true;
					} else {
						t = t.parentNode;
					}
				}
				if (_1ea) {
					t = e.target;
					if (_1e9.onItemClick) {
						var _1eb;
						while (t && !(_1eb = dijit.byNode(t))) {
							t = t.parentNode;
						}
						if (_1eb && _1eb.onClick && _1eb.getParent) {
							_1eb.getParent().onItemClick(_1eb, e);
						}
					}
					return;
				}
			}
		}
		if (this._opened && _1e9.focus && _1e9.autoFocus !== false) {
			window.setTimeout(dojo.hitch(_1e9, "focus"), 1);
		}
	}, _onDropDownClick: function (e) {
		if (this._stopClickEvents) {
			dojo.stopEvent(e);
		}
	}, buildRendering: function () {
		this.inherited(arguments);
		this._buttonNode = this._buttonNode || this.focusNode || this.domNode;
		this._popupStateNode = this._popupStateNode || this.focusNode || this._buttonNode;
		var _1ec = {"after": this.isLeftToRight() ? "Right" : "Left", "before": this.isLeftToRight() ? "Left" : "Right", "above": "Up", "below": "Down", "left": "Left", "right": "Right"}[this.dropDownPosition[0]] || this.dropDownPosition[0] || "Down";
		dojo.addClass(this._arrowWrapperNode || this._buttonNode, "dijit" + _1ec + "ArrowButton");
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this._buttonNode, "onmousedown", "_onDropDownMouseDown");
		this.connect(this._buttonNode, "onclick", "_onDropDownClick");
		this.connect(this.focusNode, "onkeypress", "_onKey");
		this.connect(this.focusNode, "onkeyup", "_onKeyUp");
	}, destroy: function () {
		if (this.dropDown) {
			if (!this.dropDown._destroyed) {
				this.dropDown.destroyRecursive();
			}
			delete this.dropDown;
		}
		this.inherited(arguments);
	}, _onKey: function (e) {
		if (this.disabled || this.readOnly) {
			return;
		}
		var d = this.dropDown, _1ed = e.target;
		if (d && this._opened && d.handleKey) {
			if (d.handleKey(e) === false) {
				dojo.stopEvent(e);
				return;
			}
		}
		if (d && this._opened && e.charOrCode == dojo.keys.ESCAPE) {
			this.closeDropDown();
			dojo.stopEvent(e);
		} else {
			if (!this._opened && (e.charOrCode == dojo.keys.DOWN_ARROW || ((e.charOrCode == dojo.keys.ENTER || e.charOrCode == " ") && ((_1ed.tagName || "").toLowerCase() !== "input" || (_1ed.type && _1ed.type.toLowerCase() !== "text"))))) {
				this._toggleOnKeyUp = true;
				dojo.stopEvent(e);
			}
		}
	}, _onKeyUp: function () {
		if (this._toggleOnKeyUp) {
			delete this._toggleOnKeyUp;
			this.toggleDropDown();
			var d = this.dropDown;
			if (d && d.focus) {
				setTimeout(dojo.hitch(d, "focus"), 1);
			}
		}
	}, _onBlur: function () {
		var _1ee = dijit._curFocus && this.dropDown && dojo.isDescendant(dijit._curFocus, this.dropDown.domNode);
		this.closeDropDown(_1ee);
		this.inherited(arguments);
	}, isLoaded: function () {
		return true;
	}, loadDropDown: function (_1ef) {
		_1ef();
	}, toggleDropDown: function () {
		if (this.disabled || this.readOnly) {
			return;
		}
		if (!this._opened) {
			if (!this.isLoaded()) {
				this.loadDropDown(dojo.hitch(this, "openDropDown"));
				return;
			} else {
				this.openDropDown();
			}
		} else {
			this.closeDropDown();
		}
	}, openDropDown: function () {
		var _1f0 = this.dropDown, _1f1 = _1f0.domNode, _1f2 = this._aroundNode || this.domNode, self = this;
		if (!this._preparedNode) {
			this._preparedNode = true;
			if (_1f1.style.width) {
				this._explicitDDWidth = true;
			}
			if (_1f1.style.height) {
				this._explicitDDHeight = true;
			}
		}
		if (this.maxHeight || this.forceWidth || this.autoWidth) {
			var _1f3 = {display: "", visibility: "hidden"};
			if (!this._explicitDDWidth) {
				_1f3.width = "";
			}
			if (!this._explicitDDHeight) {
				_1f3.height = "";
			}
			dojo.style(_1f1, _1f3);
			var _1f4 = this.maxHeight;
			if (_1f4 == -1) {
				var _1f5 = dojo.window.getBox(), _1f6 = dojo.position(_1f2, false);
				_1f4 = Math.floor(Math.max(_1f6.y, _1f5.h - (_1f6.y + _1f6.h)));
			}
			if (_1f0.startup && !_1f0._started) {
				_1f0.startup();
			}
			dijit.popup.moveOffScreen(_1f0);
			var mb = dojo._getMarginSize(_1f1);
			var _1f7 = (_1f4 && mb.h > _1f4);
			dojo.style(_1f1, {overflowX: "hidden", overflowY: _1f7 ? "auto" : "hidden"});
			if (_1f7) {
				mb.h = _1f4;
				if ("w" in mb) {
					mb.w += 16;
				}
			} else {
				delete mb.h;
			}
			if (this.forceWidth) {
				mb.w = _1f2.offsetWidth;
			} else {
				if (this.autoWidth) {
					mb.w = Math.max(mb.w, _1f2.offsetWidth);
				} else {
					delete mb.w;
				}
			}
			if (dojo.isFunction(_1f0.resize)) {
				_1f0.resize(mb);
			} else {
				dojo.marginBox(_1f1, mb);
			}
		}
		var _1f8 = dijit.popup.open({parent: this, popup: _1f0, around: _1f2, orient: dijit.getPopupAroundAlignment((this.dropDownPosition && this.dropDownPosition.length) ? this.dropDownPosition : ["below"], this.isLeftToRight()), onExecute: function () {
			self.closeDropDown(true);
		}, onCancel: function () {
			self.closeDropDown(true);
		}, onClose: function () {
			dojo.attr(self._popupStateNode, "popupActive", false);
			dojo.removeClass(self._popupStateNode, "dijitHasDropDownOpen");
			self._opened = false;
		}});
		dojo.attr(this._popupStateNode, "popupActive", "true");
		dojo.addClass(self._popupStateNode, "dijitHasDropDownOpen");
		this._opened = true;
		return _1f8;
	}, closeDropDown: function (_1f9) {
		if (this._opened) {
			if (_1f9) {
				this.focus();
			}
			dijit.popup.close(this.dropDown);
			this._opened = false;
		}
	}});
}
if (!dojo._hasResource["dijit.form.Button"]) {
	dojo._hasResource["dijit.form.Button"] = true;
	dojo.provide("dijit.form.Button");
	dojo.declare("dijit.form.Button", dijit.form._FormWidget, {label: "", showLabel: true, iconClass: "", type: "button", baseClass: "dijitButton", templateString: dojo.cache("dijit.form", "templates/Button.html", "<span class=\"dijit dijitReset dijitInline\"\n\t><span class=\"dijitReset dijitInline dijitButtonNode\"\n\t\tdojoAttachEvent=\"ondijitclick:_onButtonClick\"\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\n\t\t\tdojoAttachPoint=\"titleNode,focusNode\"\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\" dojoAttachPoint=\"iconNode\"></span\n\t\t\t><span class=\"dijitReset dijitToggleButtonIconChar\">&#x25CF;</span\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\n\t\t\t\tid=\"${id}_label\"\n\t\t\t\tdojoAttachPoint=\"containerNode\"\n\t\t\t></span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\n\t\tdojoAttachPoint=\"valueNode\"\n/></span>\n"), attributeMap: dojo.delegate(dijit.form._FormWidget.prototype.attributeMap, {value: "valueNode"}), _onClick: function (e) {
		if (this.disabled) {
			return false;
		}
		this._clicked();
		return this.onClick(e);
	}, _onButtonClick: function (e) {
		if (this._onClick(e) === false) {
			e.preventDefault();
		} else {
			if (this.type == "submit" && !(this.valueNode || this.focusNode).form) {
				for (var node = this.domNode; node.parentNode; node = node.parentNode) {
					var _1fa = dijit.byNode(node);
					if (_1fa && typeof _1fa._onSubmit == "function") {
						_1fa._onSubmit(e);
						break;
					}
				}
			} else {
				if (this.valueNode) {
					this.valueNode.click();
					e.preventDefault();
				}
			}
		}
	}, buildRendering: function () {
		this.inherited(arguments);
		dojo.setSelectable(this.focusNode, false);
	}, _fillContent: function (_1fb) {
		if (_1fb && (!this.params || !("label" in this.params))) {
			this.set("label", _1fb.innerHTML);
		}
	}, _setShowLabelAttr: function (val) {
		if (this.containerNode) {
			dojo.toggleClass(this.containerNode, "dijitDisplayNone", !val);
		}
		this._set("showLabel", val);
	}, onClick: function (e) {
		return true;
	}, _clicked: function (e) {
	}, setLabel: function (_1fc) {
		dojo.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
		this.set("label", _1fc);
	}, _setLabelAttr: function (_1fd) {
		this._set("label", _1fd);
		this.containerNode.innerHTML = _1fd;
		if (this.showLabel == false && !this.params.title) {
			this.titleNode.title = dojo.trim(this.containerNode.innerText || this.containerNode.textContent || "");
		}
	}, _setIconClassAttr: function (val) {
		var _1fe = this.iconClass || "dijitNoIcon", _1ff = val || "dijitNoIcon";
		dojo.replaceClass(this.iconNode, _1ff, _1fe);
		this._set("iconClass", val);
	}});
	dojo.declare("dijit.form.DropDownButton", [dijit.form.Button, dijit._Container, dijit._HasDropDown], {baseClass: "dijitDropDownButton", templateString: dojo.cache("dijit.form", "templates/DropDownButton.html", "<span class=\"dijit dijitReset dijitInline\"\n\t><span class='dijitReset dijitInline dijitButtonNode'\n\t\tdojoAttachEvent=\"ondijitclick:_onButtonClick\" dojoAttachPoint=\"_buttonNode\"\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\n\t\t\tdojoAttachPoint=\"focusNode,titleNode,_arrowWrapperNode\"\n\t\t\trole=\"button\" aria-haspopup=\"true\" aria-labelledby=\"${id}_label\"\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\"\n\t\t\t\tdojoAttachPoint=\"iconNode\"\n\t\t\t></span\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\n\t\t\t\tdojoAttachPoint=\"containerNode,_popupStateNode\"\n\t\t\t\tid=\"${id}_label\"\n\t\t\t></span\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonInner\"></span\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonChar\">&#9660;</span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\n\t\tdojoAttachPoint=\"valueNode\"\n/></span>\n"), _fillContent: function () {
		if (this.srcNodeRef) {
			var _200 = dojo.query("*", this.srcNodeRef);
			dijit.form.DropDownButton.superclass._fillContent.call(this, _200[0]);
			this.dropDownContainer = this.srcNodeRef;
		}
	}, startup: function () {
		if (this._started) {
			return;
		}
		if (!this.dropDown && this.dropDownContainer) {
			var _201 = dojo.query("[widgetId]", this.dropDownContainer)[0];
			this.dropDown = dijit.byNode(_201);
			delete this.dropDownContainer;
		}
		if (this.dropDown) {
			dijit.popup.hide(this.dropDown);
		}
		this.inherited(arguments);
	}, isLoaded: function () {
		var _202 = this.dropDown;
		return (!!_202 && (!_202.href || _202.isLoaded));
	}, loadDropDown: function () {
		var _203 = this.dropDown;
		if (!_203) {
			return;
		}
		if (!this.isLoaded()) {
			var _204 = dojo.connect(_203, "onLoad", this, function () {
				dojo.disconnect(_204);
				this.openDropDown();
			});
			_203.refresh();
		} else {
			this.openDropDown();
		}
	}, isFocusable: function () {
		return this.inherited(arguments) && !this._mouseDown;
	}});
	dojo.declare("dijit.form.ComboButton", dijit.form.DropDownButton, {templateString: dojo.cache("dijit.form", "templates/ComboButton.html", "<table class=\"dijit dijitReset dijitInline dijitLeft\"\n\tcellspacing='0' cellpadding='0' role=\"presentation\"\n\t><tbody role=\"presentation\"><tr role=\"presentation\"\n\t\t><td class=\"dijitReset dijitStretch dijitButtonNode\" dojoAttachPoint=\"buttonNode\" dojoAttachEvent=\"ondijitclick:_onButtonClick,onkeypress:_onButtonKeyPress\"\n\t\t><div id=\"${id}_button\" class=\"dijitReset dijitButtonContents\"\n\t\t\tdojoAttachPoint=\"titleNode\"\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\n\t\t\t><div class=\"dijitReset dijitInline dijitIcon\" dojoAttachPoint=\"iconNode\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitInline dijitButtonText\" id=\"${id}_label\" dojoAttachPoint=\"containerNode\" role=\"presentation\"></div\n\t\t></div\n\t\t></td\n\t\t><td id=\"${id}_arrow\" class='dijitReset dijitRight dijitButtonNode dijitArrowButton'\n\t\t\tdojoAttachPoint=\"_popupStateNode,focusNode,_buttonNode\"\n\t\t\tdojoAttachEvent=\"onkeypress:_onArrowKeyPress\"\n\t\t\ttitle=\"${optionsTitle}\"\n\t\t\trole=\"button\" aria-haspopup=\"true\"\n\t\t\t><div class=\"dijitReset dijitArrowButtonInner\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitArrowButtonChar\" role=\"presentation\">&#9660;</div\n\t\t></td\n\t\t><td style=\"display:none !important;\"\n\t\t\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" dojoAttachPoint=\"valueNode\"\n\t\t/></td></tr></tbody\n></table>\n"), attributeMap: dojo.mixin(dojo.clone(dijit.form.Button.prototype.attributeMap), {id: "", tabIndex: ["focusNode", "titleNode"], title: "titleNode"}), optionsTitle: "", baseClass: "dijitComboButton", cssStateNodes: {"buttonNode": "dijitButtonNode", "titleNode": "dijitButtonContents", "_popupStateNode": "dijitDownArrowButton"}, _focusedNode: null, _onButtonKeyPress: function (evt) {
		if (evt.charOrCode == dojo.keys[this.isLeftToRight() ? "RIGHT_ARROW" : "LEFT_ARROW"]) {
			dijit.focus(this._popupStateNode);
			dojo.stopEvent(evt);
		}
	}, _onArrowKeyPress: function (evt) {
		if (evt.charOrCode == dojo.keys[this.isLeftToRight() ? "LEFT_ARROW" : "RIGHT_ARROW"]) {
			dijit.focus(this.titleNode);
			dojo.stopEvent(evt);
		}
	}, focus: function (_205) {
		if (!this.disabled) {
			dijit.focus(_205 == "start" ? this.titleNode : this._popupStateNode);
		}
	}});
	dojo.declare("dijit.form.ToggleButton", dijit.form.Button, {baseClass: "dijitToggleButton", checked: false, attributeMap: dojo.mixin(dojo.clone(dijit.form.Button.prototype.attributeMap), {checked: "focusNode"}), _clicked: function (evt) {
		this.set("checked", !this.checked);
	}, _setCheckedAttr: function (_206, _207) {
		this._set("checked", _206);
		dojo.attr(this.focusNode || this.domNode, "checked", _206);
		dijit.setWaiState(this.focusNode || this.domNode, "pressed", _206);
		this._handleOnChange(_206, _207);
	}, setChecked: function (_208) {
		dojo.deprecated("setChecked(" + _208 + ") is deprecated. Use set('checked'," + _208 + ") instead.", "", "2.0");
		this.set("checked", _208);
	}, reset: function () {
		this._hasBeenBlurred = false;
		this.set("checked", this.params.checked || false);
	}});
}
if (!dojo._hasResource["dijit._editor._Plugin"]) {
	dojo._hasResource["dijit._editor._Plugin"] = true;
	dojo.provide("dijit._editor._Plugin");
	dojo.declare("dijit._editor._Plugin", null, {constructor: function (args, node) {
		this.params = args || {};
		dojo.mixin(this, this.params);
		this._connects = [];
		this._attrPairNames = {};
	}, editor: null, iconClassPrefix: "dijitEditorIcon", button: null, command: "", useDefaultCommand: true, buttonClass: dijit.form.Button, disabled: false, getLabel: function (key) {
		return this.editor.commands[key];
	}, _initButton: function () {
		if (this.command.length) {
			var _209 = this.getLabel(this.command), _20a = this.editor, _20b = this.iconClassPrefix + " " + this.iconClassPrefix + this.command.charAt(0).toUpperCase() + this.command.substr(1);
			if (!this.button) {
				var _20c = dojo.mixin({label: _209, dir: _20a.dir, lang: _20a.lang, showLabel: false, iconClass: _20b, dropDown: this.dropDown, tabIndex: "-1"}, this.params || {});
				this.button = new this.buttonClass(_20c);
			}
		}
		if (this.get("disabled") && this.button) {
			this.button.set("disabled", this.get("disabled"));
		}
	}, destroy: function () {
		dojo.forEach(this._connects, dojo.disconnect);
		if (this.dropDown) {
			this.dropDown.destroyRecursive();
		}
	}, connect: function (o, f, tf) {
		this._connects.push(dojo.connect(o, f, this, tf));
	}, updateState: function () {
		var e = this.editor, c = this.command, _20d, _20e;
		if (!e || !e.isLoaded || !c.length) {
			return;
		}
		var _20f = this.get("disabled");
		if (this.button) {
			try {
				_20e = !_20f && e.queryCommandEnabled(c);
				if (this.enabled !== _20e) {
					this.enabled = _20e;
					this.button.set("disabled", !_20e);
				}
				if (typeof this.button.checked == "boolean") {
					_20d = e.queryCommandState(c);
					if (this.checked !== _20d) {
						this.checked = _20d;
						this.button.set("checked", e.queryCommandState(c));
					}
				}
			} catch (e) {
			}
		}
	}, setEditor: function (_210) {
		this.editor = _210;
		this._initButton();
		if (this.button && this.useDefaultCommand) {
			if (this.editor.queryCommandAvailable(this.command)) {
				this.connect(this.button, "onClick", dojo.hitch(this.editor, "execCommand", this.command, this.commandArg));
			} else {
				this.button.domNode.style.display = "none";
			}
		}
		this.connect(this.editor, "onNormalizedDisplayChanged", "updateState");
	}, setToolbar: function (_211) {
		if (this.button) {
			_211.addChild(this.button);
		}
	}, set: function (name, _212) {
		if (typeof name === "object") {
			for (var x in name) {
				this.set(x, name[x]);
			}
			return this;
		}
		var _213 = this._getAttrNames(name);
		if (this[_213.s]) {
			var _214 = this[_213.s].apply(this, Array.prototype.slice.call(arguments, 1));
		} else {
			this._set(name, _212);
		}
		return _214 || this;
	}, get: function (name) {
		var _215 = this._getAttrNames(name);
		return this[_215.g] ? this[_215.g]() : this[name];
	}, _setDisabledAttr: function (_216) {
		this.disabled = _216;
		this.updateState();
	}, _getAttrNames: function (name) {
		var apn = this._attrPairNames;
		if (apn[name]) {
			return apn[name];
		}
		var uc = name.charAt(0).toUpperCase() + name.substr(1);
		return (apn[name] = {s: "_set" + uc + "Attr", g: "_get" + uc + "Attr"});
	}, _set: function (name, _217) {
		var _218 = this[name];
		this[name] = _217;
	}});
}
if (!dojo._hasResource["dijit._editor.plugins.EnterKeyHandling"]) {
	dojo._hasResource["dijit._editor.plugins.EnterKeyHandling"] = true;
	dojo.provide("dijit._editor.plugins.EnterKeyHandling");
	dojo.declare("dijit._editor.plugins.EnterKeyHandling", dijit._editor._Plugin, {blockNodeForEnter: "BR", constructor: function (args) {
		if (args) {
			if ("blockNodeForEnter" in args) {
				args.blockNodeForEnter = args.blockNodeForEnter.toUpperCase();
			}
			dojo.mixin(this, args);
		}
	}, setEditor: function (_219) {
		if (this.editor === _219) {
			return;
		}
		this.editor = _219;
		if (this.blockNodeForEnter == "BR") {
			this.editor.customUndo = true;
			_219.onLoadDeferred.addCallback(dojo.hitch(this, function (d) {
				this.connect(_219.document, "onkeypress", function (e) {
					if (e.charOrCode == dojo.keys.ENTER) {
						var ne = dojo.mixin({}, e);
						ne.shiftKey = true;
						if (!this.handleEnterKey(ne)) {
							dojo.stopEvent(e);
						}
					}
				});
				return d;
			}));
		} else {
			if (this.blockNodeForEnter) {
				var h = dojo.hitch(this, this.handleEnterKey);
				_219.addKeyHandler(13, 0, 0, h);
				_219.addKeyHandler(13, 0, 1, h);
				this.connect(this.editor, "onKeyPressed", "onKeyPressed");
			}
		}
	}, onKeyPressed: function (e) {
		if (this._checkListLater) {
			if (dojo.withGlobal(this.editor.window, "isCollapsed", dijit)) {
				var _21a = dojo.withGlobal(this.editor.window, "getAncestorElement", dijit._editor.selection, ["LI"]);
				if (!_21a) {
					dijit._editor.RichText.prototype.execCommand.call(this.editor, "formatblock", this.blockNodeForEnter);
					var _21b = dojo.withGlobal(this.editor.window, "getAncestorElement", dijit._editor.selection, [this.blockNodeForEnter]);
					if (_21b) {
						_21b.innerHTML = this.bogusHtmlContent;
						if (dojo.isIE) {
							var r = this.editor.document.selection.createRange();
							r.move("character", -1);
							r.select();
						}
					} else {
						console.error("onKeyPressed: Cannot find the new block node");
					}
				} else {
					if (dojo.isMoz) {
						if (_21a.parentNode.parentNode.nodeName == "LI") {
							_21a = _21a.parentNode.parentNode;
						}
					}
					var fc = _21a.firstChild;
					if (fc && fc.nodeType == 1 && (fc.nodeName == "UL" || fc.nodeName == "OL")) {
						_21a.insertBefore(fc.ownerDocument.createTextNode(" "), fc);
						var _21c = dijit.range.create(this.editor.window);
						_21c.setStart(_21a.firstChild, 0);
						var _21d = dijit.range.getSelection(this.editor.window, true);
						_21d.removeAllRanges();
						_21d.addRange(_21c);
					}
				}
			}
			this._checkListLater = false;
		}
		if (this._pressedEnterInBlock) {
			if (this._pressedEnterInBlock.previousSibling) {
				this.removeTrailingBr(this._pressedEnterInBlock.previousSibling);
			}
			delete this._pressedEnterInBlock;
		}
	}, bogusHtmlContent: "&nbsp;", blockNodes: /^(?:P|H1|H2|H3|H4|H5|H6|LI)$/, handleEnterKey: function (e) {
		var _21e, _21f, _220, _221, _222, _223, doc = this.editor.document, br, rs, txt;
		if (e.shiftKey) {
			var _224 = dojo.withGlobal(this.editor.window, "getParentElement", dijit._editor.selection);
			var _225 = dijit.range.getAncestor(_224, this.blockNodes);
			if (_225) {
				if (_225.tagName == "LI") {
					return true;
				}
				_21e = dijit.range.getSelection(this.editor.window);
				_21f = _21e.getRangeAt(0);
				if (!_21f.collapsed) {
					_21f.deleteContents();
					_21e = dijit.range.getSelection(this.editor.window);
					_21f = _21e.getRangeAt(0);
				}
				if (dijit.range.atBeginningOfContainer(_225, _21f.startContainer, _21f.startOffset)) {
					br = doc.createElement("br");
					_220 = dijit.range.create(this.editor.window);
					_225.insertBefore(br, _225.firstChild);
					_220.setStartBefore(br.nextSibling);
					_21e.removeAllRanges();
					_21e.addRange(_220);
				} else {
					if (dijit.range.atEndOfContainer(_225, _21f.startContainer, _21f.startOffset)) {
						_220 = dijit.range.create(this.editor.window);
						br = doc.createElement("br");
						_225.appendChild(br);
						_225.appendChild(doc.createTextNode(" "));
						_220.setStart(_225.lastChild, 0);
						_21e.removeAllRanges();
						_21e.addRange(_220);
					} else {
						rs = _21f.startContainer;
						if (rs && rs.nodeType == 3) {
							txt = rs.nodeValue;
							dojo.withGlobal(this.editor.window, function () {
								_221 = doc.createTextNode(txt.substring(0, _21f.startOffset));
								_222 = doc.createTextNode(txt.substring(_21f.startOffset));
								_223 = doc.createElement("br");
								if (_222.nodeValue == "" && dojo.isWebKit) {
									_222 = doc.createTextNode(" ");
								}
								dojo.place(_221, rs, "after");
								dojo.place(_223, _221, "after");
								dojo.place(_222, _223, "after");
								dojo.destroy(rs);
								_220 = dijit.range.create(dojo.gobal);
								_220.setStart(_222, 0);
								_21e.removeAllRanges();
								_21e.addRange(_220);
							});
							return false;
						}
						return true;
					}
				}
			} else {
				_21e = dijit.range.getSelection(this.editor.window);
				if (_21e.rangeCount) {
					_21f = _21e.getRangeAt(0);
					if (_21f && _21f.startContainer) {
						if (!_21f.collapsed) {
							_21f.deleteContents();
							_21e = dijit.range.getSelection(this.editor.window);
							_21f = _21e.getRangeAt(0);
						}
						rs = _21f.startContainer;
						if (rs && rs.nodeType == 3) {
							dojo.withGlobal(this.editor.window, dojo.hitch(this, function () {
								var _226 = false;
								var _227 = _21f.startOffset;
								if (rs.length < _227) {
									ret = this._adjustNodeAndOffset(rs, _227);
									rs = ret.node;
									_227 = ret.offset;
								}
								txt = rs.nodeValue;
								_221 = doc.createTextNode(txt.substring(0, _227));
								_222 = doc.createTextNode(txt.substring(_227));
								_223 = doc.createElement("br");
								if (!_222.length) {
									_222 = doc.createTextNode(" ");
									_226 = true;
								}
								if (_221.length) {
									dojo.place(_221, rs, "after");
								} else {
									_221 = rs;
								}
								dojo.place(_223, _221, "after");
								dojo.place(_222, _223, "after");
								dojo.destroy(rs);
								_220 = dijit.range.create(dojo.gobal);
								_220.setStart(_222, 0);
								_220.setEnd(_222, _222.length);
								_21e.removeAllRanges();
								_21e.addRange(_220);
								if (_226 && !dojo.isWebKit) {
									dijit._editor.selection.remove();
								} else {
									dijit._editor.selection.collapse(true);
								}
							}));
						} else {
							dojo.withGlobal(this.editor.window, dojo.hitch(this, function () {
								var _228 = doc.createElement("br");
								rs.appendChild(_228);
								var _229 = doc.createTextNode(" ");
								rs.appendChild(_229);
								_220 = dijit.range.create(dojo.global);
								_220.setStart(_229, 0);
								_220.setEnd(_229, _229.length);
								_21e.removeAllRanges();
								_21e.addRange(_220);
								dijit._editor.selection.collapse(true);
							}));
						}
					}
				} else {
					dijit._editor.RichText.prototype.execCommand.call(this.editor, "inserthtml", "<br>");
				}
			}
			return false;
		}
		var _22a = true;
		_21e = dijit.range.getSelection(this.editor.window);
		_21f = _21e.getRangeAt(0);
		if (!_21f.collapsed) {
			_21f.deleteContents();
			_21e = dijit.range.getSelection(this.editor.window);
			_21f = _21e.getRangeAt(0);
		}
		var _22b = dijit.range.getBlockAncestor(_21f.endContainer, null, this.editor.editNode);
		var _22c = _22b.blockNode;
		if ((this._checkListLater = (_22c && (_22c.nodeName == "LI" || _22c.parentNode.nodeName == "LI")))) {
			if (dojo.isMoz) {
				this._pressedEnterInBlock = _22c;
			}
			if (/^(\s|&nbsp;|\xA0|<span\b[^>]*\bclass=['"]Apple-style-span['"][^>]*>(\s|&nbsp;|\xA0)<\/span>)?(<br>)?$/.test(_22c.innerHTML)) {
				_22c.innerHTML = "";
				if (dojo.isWebKit) {
					_220 = dijit.range.create(this.editor.window);
					_220.setStart(_22c, 0);
					_21e.removeAllRanges();
					_21e.addRange(_220);
				}
				this._checkListLater = false;
			}
			return true;
		}
		if (!_22b.blockNode || _22b.blockNode === this.editor.editNode) {
			try {
				dijit._editor.RichText.prototype.execCommand.call(this.editor, "formatblock", this.blockNodeForEnter);
			} catch (e2) {
			}
			_22b = {blockNode: dojo.withGlobal(this.editor.window, "getAncestorElement", dijit._editor.selection, [this.blockNodeForEnter]), blockContainer: this.editor.editNode};
			if (_22b.blockNode) {
				if (_22b.blockNode != this.editor.editNode && (!(_22b.blockNode.textContent || _22b.blockNode.innerHTML).replace(/^\s+|\s+$/g, "").length)) {
					this.removeTrailingBr(_22b.blockNode);
					return false;
				}
			} else {
				_22b.blockNode = this.editor.editNode;
			}
			_21e = dijit.range.getSelection(this.editor.window);
			_21f = _21e.getRangeAt(0);
		}
		var _22d = doc.createElement(this.blockNodeForEnter);
		_22d.innerHTML = this.bogusHtmlContent;
		this.removeTrailingBr(_22b.blockNode);
		var _22e = _21f.endOffset;
		var node = _21f.endContainer;
		if (node.length < _22e) {
			var ret = this._adjustNodeAndOffset(node, _22e);
			node = ret.node;
			_22e = ret.offset;
		}
		if (dijit.range.atEndOfContainer(_22b.blockNode, node, _22e)) {
			if (_22b.blockNode === _22b.blockContainer) {
				_22b.blockNode.appendChild(_22d);
			} else {
				dojo.place(_22d, _22b.blockNode, "after");
			}
			_22a = false;
			_220 = dijit.range.create(this.editor.window);
			_220.setStart(_22d, 0);
			_21e.removeAllRanges();
			_21e.addRange(_220);
			if (this.editor.height) {
				dojo.window.scrollIntoView(_22d);
			}
		} else {
			if (dijit.range.atBeginningOfContainer(_22b.blockNode, _21f.startContainer, _21f.startOffset)) {
				dojo.place(_22d, _22b.blockNode, _22b.blockNode === _22b.blockContainer ? "first" : "before");
				if (_22d.nextSibling && this.editor.height) {
					_220 = dijit.range.create(this.editor.window);
					_220.setStart(_22d.nextSibling, 0);
					_21e.removeAllRanges();
					_21e.addRange(_220);
					dojo.window.scrollIntoView(_22d.nextSibling);
				}
				_22a = false;
			} else {
				if (_22b.blockNode === _22b.blockContainer) {
					_22b.blockNode.appendChild(_22d);
				} else {
					dojo.place(_22d, _22b.blockNode, "after");
				}
				_22a = false;
				if (_22b.blockNode.style) {
					if (_22d.style) {
						if (_22b.blockNode.style.cssText) {
							_22d.style.cssText = _22b.blockNode.style.cssText;
						}
					}
				}
				rs = _21f.startContainer;
				var _22f;
				if (rs && rs.nodeType == 3) {
					var _230, _231;
					_22e = _21f.endOffset;
					if (rs.length < _22e) {
						ret = this._adjustNodeAndOffset(rs, _22e);
						rs = ret.node;
						_22e = ret.offset;
					}
					txt = rs.nodeValue;
					_221 = doc.createTextNode(txt.substring(0, _22e));
					_222 = doc.createTextNode(txt.substring(_22e, txt.length));
					dojo.place(_221, rs, "before");
					dojo.place(_222, rs, "after");
					dojo.destroy(rs);
					var _232 = _221.parentNode;
					while (_232 !== _22b.blockNode) {
						var tg = _232.tagName;
						var _233 = doc.createElement(tg);
						if (_232.style) {
							if (_233.style) {
								if (_232.style.cssText) {
									_233.style.cssText = _232.style.cssText;
								}
							}
						}
						if (_232.tagName === "FONT") {
							if (_232.color) {
								_233.color = _232.color;
							}
							if (_232.face) {
								_233.face = _232.face;
							}
							if (_232.size) {
								_233.size = _232.size;
							}
						}
						_230 = _222;
						while (_230) {
							_231 = _230.nextSibling;
							_233.appendChild(_230);
							_230 = _231;
						}
						dojo.place(_233, _232, "after");
						_221 = _232;
						_222 = _233;
						_232 = _232.parentNode;
					}
					_230 = _222;
					if (_230.nodeType == 1 || (_230.nodeType == 3 && _230.nodeValue)) {
						_22d.innerHTML = "";
					}
					_22f = _230;
					while (_230) {
						_231 = _230.nextSibling;
						_22d.appendChild(_230);
						_230 = _231;
					}
				}
				_220 = dijit.range.create(this.editor.window);
				var _234;
				var _235 = _22f;
				if (this.blockNodeForEnter !== "BR") {
					while (_235) {
						_234 = _235;
						_231 = _235.firstChild;
						_235 = _231;
					}
					if (_234 && _234.parentNode) {
						_22d = _234.parentNode;
						_220.setStart(_22d, 0);
						_21e.removeAllRanges();
						_21e.addRange(_220);
						if (this.editor.height) {
							dijit.scrollIntoView(_22d);
						}
						if (dojo.isMoz) {
							this._pressedEnterInBlock = _22b.blockNode;
						}
					} else {
						_22a = true;
					}
				} else {
					_220.setStart(_22d, 0);
					_21e.removeAllRanges();
					_21e.addRange(_220);
					if (this.editor.height) {
						dijit.scrollIntoView(_22d);
					}
					if (dojo.isMoz) {
						this._pressedEnterInBlock = _22b.blockNode;
					}
				}
			}
		}
		return _22a;
	}, _adjustNodeAndOffset: function (node, _236) {
		while (node.length < _236 && node.nextSibling && node.nextSibling.nodeType == 3) {
			_236 = _236 - node.length;
			node = node.nextSibling;
		}
		var ret = {"node": node, "offset": _236};
		return ret;
	}, removeTrailingBr: function (_237) {
		var para = /P|DIV|LI/i.test(_237.tagName) ? _237 : dijit._editor.selection.getParentOfType(_237, ["P", "DIV", "LI"]);
		if (!para) {
			return;
		}
		if (para.lastChild) {
			if ((para.childNodes.length > 1 && para.lastChild.nodeType == 3 && /^[\s\xAD]*$/.test(para.lastChild.nodeValue)) || para.lastChild.tagName == "BR") {
				dojo.destroy(para.lastChild);
			}
		}
		if (!para.childNodes.length) {
			para.innerHTML = this.bogusHtmlContent;
		}
	}});
}
if (!dojo._hasResource["dijit.Editor"]) {
	dojo._hasResource["dijit.Editor"] = true;
	dojo.provide("dijit.Editor");
	dojo.declare("dijit.Editor", dijit._editor.RichText, {plugins: null, extraPlugins: null, constructor: function () {
		if (!dojo.isArray(this.plugins)) {
			this.plugins = ["undo", "redo", "|", "cut", "copy", "paste", "|", "bold", "italic", "underline", "strikethrough", "|", "insertOrderedList", "insertUnorderedList", "indent", "outdent", "|", "justifyLeft", "justifyRight", "justifyCenter", "justifyFull", "dijit._editor.plugins.EnterKeyHandling"];
		}
		this._plugins = [];
		this._editInterval = this.editActionInterval * 1000;
		if (dojo.isIE) {
			this.events.push("onBeforeDeactivate");
			this.events.push("onBeforeActivate");
		}
	}, postMixInProperties: function () {
		this.setValueDeferred = new dojo.Deferred();
		this.inherited(arguments);
	}, postCreate: function () {
		this._steps = this._steps.slice(0);
		this._undoedSteps = this._undoedSteps.slice(0);
		if (dojo.isArray(this.extraPlugins)) {
			this.plugins = this.plugins.concat(this.extraPlugins);
		}
		this.inherited(arguments);
		this.commands = dojo.i18n.getLocalization("dijit._editor", "commands", this.lang);
		if (!this.toolbar) {
			this.toolbar = new dijit.Toolbar({dir: this.dir, lang: this.lang});
			this.header.appendChild(this.toolbar.domNode);
		}
		dojo.forEach(this.plugins, this.addPlugin, this);
		this.setValueDeferred.callback(true);
		dojo.addClass(this.iframe.parentNode, "dijitEditorIFrameContainer");
		dojo.addClass(this.iframe, "dijitEditorIFrame");
		dojo.attr(this.iframe, "allowTransparency", true);
		if (dojo.isWebKit) {
			dojo.style(this.domNode, "KhtmlUserSelect", "none");
		}
		this.toolbar.startup();
		this.onNormalizedDisplayChanged();
	}, destroy: function () {
		dojo.forEach(this._plugins, function (p) {
			if (p && p.destroy) {
				p.destroy();
			}
		});
		this._plugins = [];
		this.toolbar.destroyRecursive();
		delete this.toolbar;
		this.inherited(arguments);
	}, addPlugin: function (_238, _239) {
		var args = dojo.isString(_238) ? {name: _238} : _238;
		if (!args.setEditor) {
			var o = {"args": args, "plugin": null, "editor": this};
			dojo.publish(dijit._scopeName + ".Editor.getPlugin", [o]);
			if (!o.plugin) {
				var pc = dojo.getObject(args.name);
				if (pc) {
					o.plugin = new pc(args);
				}
			}
			if (!o.plugin) {
				console.warn("Cannot find plugin", _238);
				return;
			}
			_238 = o.plugin;
		}
		if (arguments.length > 1) {
			this._plugins[_239] = _238;
		} else {
			this._plugins.push(_238);
		}
		_238.setEditor(this);
		if (dojo.isFunction(_238.setToolbar)) {
			_238.setToolbar(this.toolbar);
		}
	}, startup: function () {
	}, resize: function (size) {
		if (size) {
			dijit.layout._LayoutWidget.prototype.resize.apply(this, arguments);
		}
	}, layout: function () {
		var _23a = (this._contentBox.h - (this.getHeaderHeight() + this.getFooterHeight() + dojo._getPadBorderExtents(this.iframe.parentNode).h + dojo._getMarginExtents(this.iframe.parentNode).h));
		this.editingArea.style.height = _23a + "px";
		if (this.iframe) {
			this.iframe.style.height = "100%";
		}
		this._layoutMode = true;
	}, _onIEMouseDown: function (e) {
		var _23b;
		var b = this.document.body;
		var _23c = b.clientWidth;
		var _23d = b.clientHeight;
		var _23e = b.clientLeft;
		var _23f = b.offsetWidth;
		var _240 = b.offsetHeight;
		var _241 = b.offsetLeft;
		bodyDir = b.dir ? b.dir.toLowerCase() : "";
		if (bodyDir != "rtl") {
			if (_23c < _23f && e.x > _23c && e.x < _23f) {
				_23b = true;
			}
		} else {
			if (e.x < _23e && e.x > _241) {
				_23b = true;
			}
		}
		if (!_23b) {
			if (_23d < _240 && e.y > _23d && e.y < _240) {
				_23b = true;
			}
		}
		if (!_23b) {
			delete this._cursorToStart;
			delete this._savedSelection;
			if (e.target.tagName == "BODY") {
				setTimeout(dojo.hitch(this, "placeCursorAtEnd"), 0);
			}
			this.inherited(arguments);
		}
	}, onBeforeActivate: function (e) {
		this._restoreSelection();
	}, onBeforeDeactivate: function (e) {
		if (this.customUndo) {
			this.endEditing(true);
		}
		if (e.target.tagName != "BODY") {
			this._saveSelection();
		}
	}, customUndo: true, editActionInterval: 3, beginEditing: function (cmd) {
		if (!this._inEditing) {
			this._inEditing = true;
			this._beginEditing(cmd);
		}
		if (this.editActionInterval > 0) {
			if (this._editTimer) {
				clearTimeout(this._editTimer);
			}
			this._editTimer = setTimeout(dojo.hitch(this, this.endEditing), this._editInterval);
		}
	}, _steps: [], _undoedSteps: [], execCommand: function (cmd) {
		if (this.customUndo && (cmd == "undo" || cmd == "redo")) {
			return this[cmd]();
		} else {
			if (this.customUndo) {
				this.endEditing();
				this._beginEditing();
			}
			var r;
			var _242 = /copy|cut|paste/.test(cmd);
			try {
				r = this.inherited(arguments);
				if (dojo.isWebKit && _242 && !r) {
					throw {code: 1011};
				}
			} catch (e) {
				if (e.code == 1011 && _242) {
					var sub = dojo.string.substitute, _243 = {cut: "X", copy: "C", paste: "V"};
					alert(sub(this.commands.systemShortcut, [this.commands[cmd], sub(this.commands[dojo.isMac ? "appleKey" : "ctrlKey"], [_243[cmd]])]));
				}
				r = false;
			}
			if (this.customUndo) {
				this._endEditing();
			}
			return r;
		}
	}, queryCommandEnabled: function (cmd) {
		if (this.customUndo && (cmd == "undo" || cmd == "redo")) {
			return cmd == "undo" ? (this._steps.length > 1) : (this._undoedSteps.length > 0);
		} else {
			return this.inherited(arguments);
		}
	}, _moveToBookmark: function (b) {
		var _244 = b.mark;
		var mark = b.mark;
		var col = b.isCollapsed;
		var r, _245, _246, sel;
		if (mark) {
			if (dojo.isIE < 9) {
				if (dojo.isArray(mark)) {
					_244 = [];
					dojo.forEach(mark, function (n) {
						_244.push(dijit.range.getNode(n, this.editNode));
					}, this);
					dojo.withGlobal(this.window, "moveToBookmark", dijit, [
						{mark: _244, isCollapsed: col}
					]);
				} else {
					if (mark.startContainer && mark.endContainer) {
						sel = dijit.range.getSelection(this.window);
						if (sel && sel.removeAllRanges) {
							sel.removeAllRanges();
							r = dijit.range.create(this.window);
							_245 = dijit.range.getNode(mark.startContainer, this.editNode);
							_246 = dijit.range.getNode(mark.endContainer, this.editNode);
							if (_245 && _246) {
								r.setStart(_245, mark.startOffset);
								r.setEnd(_246, mark.endOffset);
								sel.addRange(r);
							}
						}
					}
				}
			} else {
				sel = dijit.range.getSelection(this.window);
				if (sel && sel.removeAllRanges) {
					sel.removeAllRanges();
					r = dijit.range.create(this.window);
					_245 = dijit.range.getNode(mark.startContainer, this.editNode);
					_246 = dijit.range.getNode(mark.endContainer, this.editNode);
					if (_245 && _246) {
						r.setStart(_245, mark.startOffset);
						r.setEnd(_246, mark.endOffset);
						sel.addRange(r);
					}
				}
			}
		}
	}, _changeToStep: function (from, to) {
		this.setValue(to.text);
		var b = to.bookmark;
		if (!b) {
			return;
		}
		this._moveToBookmark(b);
	}, undo: function () {
		var ret = false;
		if (!this._undoRedoActive) {
			this._undoRedoActive = true;
			this.endEditing(true);
			var s = this._steps.pop();
			if (s && this._steps.length > 0) {
				this.focus();
				this._changeToStep(s, this._steps[this._steps.length - 1]);
				this._undoedSteps.push(s);
				this.onDisplayChanged();
				delete this._undoRedoActive;
				ret = true;
			}
			delete this._undoRedoActive;
		}
		return ret;
	}, redo: function () {
		var ret = false;
		if (!this._undoRedoActive) {
			this._undoRedoActive = true;
			this.endEditing(true);
			var s = this._undoedSteps.pop();
			if (s && this._steps.length > 0) {
				this.focus();
				this._changeToStep(this._steps[this._steps.length - 1], s);
				this._steps.push(s);
				this.onDisplayChanged();
				ret = true;
			}
			delete this._undoRedoActive;
		}
		return ret;
	}, endEditing: function (_247) {
		if (this._editTimer) {
			clearTimeout(this._editTimer);
		}
		if (this._inEditing) {
			this._endEditing(_247);
			this._inEditing = false;
		}
	}, _getBookmark: function () {
		var b = dojo.withGlobal(this.window, dijit.getBookmark);
		var tmp = [];
		if (b && b.mark) {
			var mark = b.mark;
			if (dojo.isIE < 9) {
				var sel = dijit.range.getSelection(this.window);
				if (!dojo.isArray(mark)) {
					if (sel) {
						var _248;
						if (sel.rangeCount) {
							_248 = sel.getRangeAt(0);
						}
						if (_248) {
							b.mark = _248.cloneRange();
						} else {
							b.mark = dojo.withGlobal(this.window, dijit.getBookmark);
						}
					}
				} else {
					dojo.forEach(b.mark, function (n) {
						tmp.push(dijit.range.getIndex(n, this.editNode).o);
					}, this);
					b.mark = tmp;
				}
			}
			try {
				if (b.mark && b.mark.startContainer) {
					tmp = dijit.range.getIndex(b.mark.startContainer, this.editNode).o;
					b.mark = {startContainer: tmp, startOffset: b.mark.startOffset, endContainer: b.mark.endContainer === b.mark.startContainer ? tmp : dijit.range.getIndex(b.mark.endContainer, this.editNode).o, endOffset: b.mark.endOffset};
				}
			} catch (e) {
				b.mark = null;
			}
		}
		return b;
	}, _beginEditing: function (cmd) {
		if (this._steps.length === 0) {
			this._steps.push({"text": dijit._editor.getChildrenHtml(this.editNode), "bookmark": this._getBookmark()});
		}
	}, _endEditing: function (_249) {
		var v = dijit._editor.getChildrenHtml(this.editNode);
		this._undoedSteps = [];
		this._steps.push({text: v, bookmark: this._getBookmark()});
	}, onKeyDown: function (e) {
		if (!dojo.isIE && !this.iframe && e.keyCode == dojo.keys.TAB && !this.tabIndent) {
			this._saveSelection();
		}
		if (!this.customUndo) {
			this.inherited(arguments);
			return;
		}
		var k = e.keyCode, ks = dojo.keys;
		if (e.ctrlKey && !e.altKey) {
			if (k == 90 || k == 122) {
				dojo.stopEvent(e);
				this.undo();
				return;
			} else {
				if (k == 89 || k == 121) {
					dojo.stopEvent(e);
					this.redo();
					return;
				}
			}
		}
		this.inherited(arguments);
		switch (k) {
			case ks.ENTER:
			case ks.BACKSPACE:
			case ks.DELETE:
				this.beginEditing();
				break;
			case 88:
			case 86:
				if (e.ctrlKey && !e.altKey && !e.metaKey) {
					this.endEditing();
					if (e.keyCode == 88) {
						this.beginEditing("cut");
						setTimeout(dojo.hitch(this, this.endEditing), 1);
					} else {
						this.beginEditing("paste");
						setTimeout(dojo.hitch(this, this.endEditing), 1);
					}
					break;
				}
			default:
				if (!e.ctrlKey && !e.altKey && !e.metaKey && (e.keyCode < dojo.keys.F1 || e.keyCode > dojo.keys.F15)) {
					this.beginEditing();
					break;
				}
			case ks.ALT:
				this.endEditing();
				break;
			case ks.UP_ARROW:
			case ks.DOWN_ARROW:
			case ks.LEFT_ARROW:
			case ks.RIGHT_ARROW:
			case ks.HOME:
			case ks.END:
			case ks.PAGE_UP:
			case ks.PAGE_DOWN:
				this.endEditing(true);
				break;
			case ks.CTRL:
			case ks.SHIFT:
			case ks.TAB:
				break;
		}
	}, _onBlur: function () {
		this.inherited(arguments);
		this.endEditing(true);
	}, _saveSelection: function () {
		try {
			this._savedSelection = this._getBookmark();
		} catch (e) {
		}
	}, _restoreSelection: function () {
		if (this._savedSelection) {
			delete this._cursorToStart;
			if (dojo.withGlobal(this.window, "isCollapsed", dijit)) {
				this._moveToBookmark(this._savedSelection);
			}
			delete this._savedSelection;
		}
	}, onClick: function () {
		this.endEditing(true);
		this.inherited(arguments);
	}, replaceValue: function (html) {
		if (!this.customUndo) {
			this.inherited(arguments);
		} else {
			if (this.isClosed) {
				this.setValue(html);
			} else {
				this.beginEditing();
				if (!html) {
					html = "&nbsp;";
				}
				this.setValue(html);
				this.endEditing();
			}
		}
	}, _setDisabledAttr: function (_24a) {
		var _24b = dojo.hitch(this, function () {
			if ((!this.disabled && _24a) || (!this._buttonEnabledPlugins && _24a)) {
				dojo.forEach(this._plugins, function (p) {
					p.set("disabled", true);
				});
			} else {
				if (this.disabled && !_24a) {
					dojo.forEach(this._plugins, function (p) {
						p.set("disabled", false);
					});
				}
			}
		});
		this.setValueDeferred.addCallback(_24b);
		this.inherited(arguments);
	}, _setStateClass: function () {
		try {
			this.inherited(arguments);
			if (this.document && this.document.body) {
				dojo.style(this.document.body, "color", dojo.style(this.iframe, "color"));
			}
		} catch (e) {
		}
	}});
	dojo.subscribe(dijit._scopeName + ".Editor.getPlugin", null, function (o) {
		if (o.plugin) {
			return;
		}
		var args = o.args, p;
		var _24c = dijit._editor._Plugin;
		var name = args.name;
		switch (name) {
			case "undo":
			case "redo":
			case "cut":
			case "copy":
			case "paste":
			case "insertOrderedList":
			case "insertUnorderedList":
			case "indent":
			case "outdent":
			case "justifyCenter":
			case "justifyFull":
			case "justifyLeft":
			case "justifyRight":
			case "delete":
			case "selectAll":
			case "removeFormat":
			case "unlink":
			case "insertHorizontalRule":
				p = new _24c({command: name});
				break;
			case "bold":
			case "italic":
			case "underline":
			case "strikethrough":
			case "subscript":
			case "superscript":
				p = new _24c({buttonClass: dijit.form.ToggleButton, command: name});
				break;
			case "|":
				p = new _24c({button: new dijit.ToolbarSeparator(), setEditor: function (_24d) {
					this.editor = _24d;
				}});
		}
		o.plugin = p;
	});
}
if (!dojo._hasResource["dojo.regexp"]) {
	dojo._hasResource["dojo.regexp"] = true;
	dojo.provide("dojo.regexp");
	dojo.getObject("regexp", true, dojo);
	dojo.regexp.escapeString = function (str, _24e) {
		return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (ch) {
			if (_24e && _24e.indexOf(ch) != -1) {
				return ch;
			}
			return "\\" + ch;
		});
	};
	dojo.regexp.buildGroupRE = function (arr, re, _24f) {
		if (!(arr instanceof Array)) {
			return re(arr);
		}
		var b = [];
		for (var i = 0; i < arr.length; i++) {
			b.push(re(arr[i]));
		}
		return dojo.regexp.group(b.join("|"), _24f);
	};
	dojo.regexp.group = function (_250, _251) {
		return "(" + (_251 ? "?:" : "") + _250 + ")";
	};
}
if (!dojo._hasResource["dojo.data.util.sorter"]) {
	dojo._hasResource["dojo.data.util.sorter"] = true;
	dojo.provide("dojo.data.util.sorter");
	dojo.getObject("data.util.sorter", true, dojo);
	dojo.data.util.sorter.basicComparator = function (a, b) {
		var r = -1;
		if (a === null) {
			a = undefined;
		}
		if (b === null) {
			b = undefined;
		}
		if (a == b) {
			r = 0;
		} else {
			if (a > b || a == null) {
				r = 1;
			}
		}
		return r;
	};
	dojo.data.util.sorter.createSortFunction = function (_252, _253) {
		var _254 = [];

		function _255(attr, dir, comp, s) {
			return function (_256, _257) {
				var a = s.getValue(_256, attr);
				var b = s.getValue(_257, attr);
				return dir * comp(a, b);
			};
		};
		var _258;
		var map = _253.comparatorMap;
		var bc = dojo.data.util.sorter.basicComparator;
		for (var i = 0; i < _252.length; i++) {
			_258 = _252[i];
			var attr = _258.attribute;
			if (attr) {
				var dir = (_258.descending) ? -1 : 1;
				var comp = bc;
				if (map) {
					if (typeof attr !== "string" && ("toString" in attr)) {
						attr = attr.toString();
					}
					comp = map[attr] || bc;
				}
				_254.push(_255(attr, dir, comp, _253));
			}
		}
		return function (rowA, rowB) {
			var i = 0;
			while (i < _254.length) {
				var ret = _254[i++](rowA, rowB);
				if (ret !== 0) {
					return ret;
				}
			}
			return 0;
		};
	};
}
if (!dojo._hasResource["dojo.data.util.simpleFetch"]) {
	dojo._hasResource["dojo.data.util.simpleFetch"] = true;
	dojo.provide("dojo.data.util.simpleFetch");
	dojo.getObject("data.util.simpleFetch", true, dojo);
	dojo.data.util.simpleFetch.fetch = function (_259) {
		_259 = _259 || {};
		if (!_259.store) {
			_259.store = this;
		}
		var self = this;
		var _25a = function (_25b, _25c) {
			if (_25c.onError) {
				var _25d = _25c.scope || dojo.global;
				_25c.onError.call(_25d, _25b, _25c);
			}
		};
		var _25e = function (_25f, _260) {
			var _261 = _260.abort || null;
			var _262 = false;
			var _263 = _260.start ? _260.start : 0;
			var _264 = (_260.count && (_260.count !== Infinity)) ? (_263 + _260.count) : _25f.length;
			_260.abort = function () {
				_262 = true;
				if (_261) {
					_261.call(_260);
				}
			};
			var _265 = _260.scope || dojo.global;
			if (!_260.store) {
				_260.store = self;
			}
			if (_260.onBegin) {
				_260.onBegin.call(_265, _25f.length, _260);
			}
			if (_260.sort) {
				_25f.sort(dojo.data.util.sorter.createSortFunction(_260.sort, self));
			}
			if (_260.onItem) {
				for (var i = _263; (i < _25f.length) && (i < _264); ++i) {
					var item = _25f[i];
					if (!_262) {
						_260.onItem.call(_265, item, _260);
					}
				}
			}
			if (_260.onComplete && !_262) {
				var _266 = null;
				if (!_260.onItem) {
					_266 = _25f.slice(_263, _264);
				}
				_260.onComplete.call(_265, _266, _260);
			}
		};
		this._fetchItems(_259, _25e, _25a);
		return _259;
	};
}
if (!dojo._hasResource["dojo.data.util.filter"]) {
	dojo._hasResource["dojo.data.util.filter"] = true;
	dojo.provide("dojo.data.util.filter");
	dojo.getObject("data.util.filter", true, dojo);
	dojo.data.util.filter.patternToRegExp = function (_267, _268) {
		var rxp = "^";
		var c = null;
		for (var i = 0; i < _267.length; i++) {
			c = _267.charAt(i);
			switch (c) {
				case "\\":
					rxp += c;
					i++;
					rxp += _267.charAt(i);
					break;
				case "*":
					rxp += ".*";
					break;
				case "?":
					rxp += ".";
					break;
				case "$":
				case "^":
				case "/":
				case "+":
				case ".":
				case "|":
				case "(":
				case ")":
				case "{":
				case "}":
				case "[":
				case "]":
					rxp += "\\";
				default:
					rxp += c;
			}
		}
		rxp += "$";
		if (_268) {
			return new RegExp(rxp, "mi");
		} else {
			return new RegExp(rxp, "m");
		}
	};
}
if (!dojo._hasResource["dijit.form.TextBox"]) {
	dojo._hasResource["dijit.form.TextBox"] = true;
	dojo.provide("dijit.form.TextBox");
	dojo.declare("dijit.form.TextBox", dijit.form._FormValueWidget, {trim: false, uppercase: false, lowercase: false, propercase: false, maxLength: "", selectOnClick: false, placeHolder: "", templateString: dojo.cache("dijit.form", "templates/TextBox.html", "<div class=\"dijit dijitReset dijitInline dijitLeft\" id=\"widget_${id}\" role=\"presentation\"\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\n\t\t><input class=\"dijitReset dijitInputInner\" dojoAttachPoint='textbox,focusNode' autocomplete=\"off\"\n\t\t\t${!nameAttrSetting} type='${type}'\n\t/></div\n></div>\n"), _singleNodeTemplate: "<input class=\"dijit dijitReset dijitLeft dijitInputField\" dojoAttachPoint=\"textbox,focusNode\" autocomplete=\"off\" type=\"${type}\" ${!nameAttrSetting} />", _buttonInputDisabled: dojo.isIE ? "disabled" : "", baseClass: "dijitTextBox", attributeMap: dojo.delegate(dijit.form._FormValueWidget.prototype.attributeMap, {maxLength: "focusNode"}), postMixInProperties: function () {
		var type = this.type.toLowerCase();
		if (this.templateString && this.templateString.toLowerCase() == "input" || ((type == "hidden" || type == "file") && this.templateString == dijit.form.TextBox.prototype.templateString)) {
			this.templateString = this._singleNodeTemplate;
		}
		this.inherited(arguments);
	}, _setPlaceHolderAttr: function (v) {
		this._set("placeHolder", v);
		if (!this._phspan) {
			this._attachPoints.push("_phspan");
			this._phspan = dojo.create("span", {className: "dijitPlaceHolder dijitInputField"}, this.textbox, "after");
		}
		this._phspan.innerHTML = "";
		this._phspan.appendChild(document.createTextNode(v));
		this._updatePlaceHolder();
	}, _updatePlaceHolder: function () {
		if (this._phspan) {
			this._phspan.style.display = (this.placeHolder && !this._focused && !this.textbox.value) ? "" : "none";
		}
	}, _getValueAttr: function () {
		return this.parse(this.get("displayedValue"), this.constraints);
	}, _setValueAttr: function (_269, _26a, _26b) {
		var _26c;
		if (_269 !== undefined) {
			_26c = this.filter(_269);
			if (typeof _26b != "string") {
				if (_26c !== null && ((typeof _26c != "number") || !isNaN(_26c))) {
					_26b = this.filter(this.format(_26c, this.constraints));
				} else {
					_26b = "";
				}
			}
		}
		if (_26b != null && _26b != undefined && ((typeof _26b) != "number" || !isNaN(_26b)) && this.textbox.value != _26b) {
			this.textbox.value = _26b;
			this._set("displayedValue", this.get("displayedValue"));
		}
		this._updatePlaceHolder();
		this.inherited(arguments, [_26c, _26a]);
	}, displayedValue: "", getDisplayedValue: function () {
		dojo.deprecated(this.declaredClass + "::getDisplayedValue() is deprecated. Use set('displayedValue') instead.", "", "2.0");
		return this.get("displayedValue");
	}, _getDisplayedValueAttr: function () {
		return this.filter(this.textbox.value);
	}, setDisplayedValue: function (_26d) {
		dojo.deprecated(this.declaredClass + "::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.", "", "2.0");
		this.set("displayedValue", _26d);
	}, _setDisplayedValueAttr: function (_26e) {
		if (_26e === null || _26e === undefined) {
			_26e = "";
		} else {
			if (typeof _26e != "string") {
				_26e = String(_26e);
			}
		}
		this.textbox.value = _26e;
		this._setValueAttr(this.get("value"), undefined);
		this._set("displayedValue", this.get("displayedValue"));
	}, format: function (_26f, _270) {
		return ((_26f == null || _26f == undefined) ? "" : (_26f.toString ? _26f.toString() : _26f));
	}, parse: function (_271, _272) {
		return _271;
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
			var _273 = this;
			setTimeout(function () {
				_273._handleOnChange(_273.get("value"), false);
			}, 0);
		}
		this._refreshState();
		this._set("displayedValue", this.get("displayedValue"));
	}, postCreate: function () {
		if (dojo.isIE) {
			setTimeout(dojo.hitch(this, function () {
				var s = dojo.getComputedStyle(this.domNode);
				if (s) {
					var ff = s.fontFamily;
					if (ff) {
						var _274 = this.domNode.getElementsByTagName("INPUT");
						if (_274) {
							for (var i = 0; i < _274.length; i++) {
								_274[i].style.fontFamily = ff;
							}
						}
					}
				}
			}), 0);
		}
		this.textbox.setAttribute("value", this.textbox.value);
		this.inherited(arguments);
		if (dojo.isMoz || dojo.isOpera) {
			this.connect(this.textbox, "oninput", "_onInput");
		} else {
			this.connect(this.textbox, "onkeydown", "_onInput");
			this.connect(this.textbox, "onkeyup", "_onInput");
			this.connect(this.textbox, "onpaste", "_onInput");
			this.connect(this.textbox, "oncut", "_onInput");
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
		this._updatePlaceHolder();
	}, _onFocus: function (by) {
		if (this.disabled || this.readOnly) {
			return;
		}
		if (this.selectOnClick && by == "mouse") {
			this._selectOnClickHandle = this.connect(this.domNode, "onmouseup", function () {
				this.disconnect(this._selectOnClickHandle);
				var _275;
				if (dojo.isIE) {
					var _276 = dojo.doc.selection.createRange();
					var _277 = _276.parentElement();
					_275 = _277 == this.textbox && _276.text.length == 0;
				} else {
					_275 = this.textbox.selectionStart == this.textbox.selectionEnd;
				}
				if (_275) {
					dijit.selectInputText(this.textbox);
				}
			});
		}
		this._updatePlaceHolder();
		this.inherited(arguments);
		this._refreshState();
	}, reset: function () {
		this.textbox.value = "";
		this.inherited(arguments);
	}});
	dijit.selectInputText = function (_278, _279, stop) {
		var _27a = dojo.global;
		var _27b = dojo.doc;
		_278 = dojo.byId(_278);
		if (isNaN(_279)) {
			_279 = 0;
		}
		if (isNaN(stop)) {
			stop = _278.value ? _278.value.length : 0;
		}
		dijit.focus(_278);
		if (_27b["selection"] && dojo.body()["createTextRange"]) {
			if (_278.createTextRange) {
				var r = _278.createTextRange();
				r.collapse(true);
				r.moveStart("character", -99999);
				r.moveStart("character", _279);
				r.moveEnd("character", stop - _279);
				r.select();
			}
		} else {
			if (_27a["getSelection"]) {
				if (_278.setSelectionRange) {
					_278.setSelectionRange(_279, stop);
				}
			}
		}
	};
}
if (!dojo._hasResource["dijit.Tooltip"]) {
	dojo._hasResource["dijit.Tooltip"] = true;
	dojo.provide("dijit.Tooltip");
	dojo.declare("dijit._MasterTooltip", [dijit._Widget, dijit._Templated], {duration: dijit.defaultDuration, templateString: dojo.cache("dijit", "templates/Tooltip.html", "<div class=\"dijitTooltip dijitTooltipLeft\" id=\"dojoTooltip\"\n\t><div class=\"dijitTooltipContainer dijitTooltipContents\" dojoAttachPoint=\"containerNode\" role='alert'></div\n\t><div class=\"dijitTooltipConnector\" dojoAttachPoint=\"connectorNode\"></div\n></div>\n"), postCreate: function () {
		dojo.body().appendChild(this.domNode);
		this.bgIframe = new dijit.BackgroundIframe(this.domNode);
		this.fadeIn = dojo.fadeIn({node: this.domNode, duration: this.duration, onEnd: dojo.hitch(this, "_onShow")});
		this.fadeOut = dojo.fadeOut({node: this.domNode, duration: this.duration, onEnd: dojo.hitch(this, "_onHide")});
	}, show: function (_27c, _27d, _27e, rtl) {
		if (this.aroundNode && this.aroundNode === _27d) {
			return;
		}
		this.domNode.width = "auto";
		if (this.fadeOut.status() == "playing") {
			this._onDeck = arguments;
			return;
		}
		this.containerNode.innerHTML = _27c;
		var pos = dijit.placeOnScreenAroundElement(this.domNode, _27d, dijit.getPopupAroundAlignment((_27e && _27e.length) ? _27e : dijit.Tooltip.defaultPosition, !rtl), dojo.hitch(this, "orient"));
		dojo.style(this.domNode, "opacity", 0);
		this.fadeIn.play();
		this.isShowingNow = true;
		this.aroundNode = _27d;
	}, orient: function (node, _27f, _280, _281, _282) {
		this.connectorNode.style.top = "";
		var _283 = _281.w - this.connectorNode.offsetWidth;
		node.className = "dijitTooltip " + {"BL-TL": "dijitTooltipBelow dijitTooltipABLeft", "TL-BL": "dijitTooltipAbove dijitTooltipABLeft", "BR-TR": "dijitTooltipBelow dijitTooltipABRight", "TR-BR": "dijitTooltipAbove dijitTooltipABRight", "BR-BL": "dijitTooltipRight", "BL-BR": "dijitTooltipLeft"}[_27f + "-" + _280];
		this.domNode.style.width = "auto";
		var size = dojo.contentBox(this.domNode);
		var _284 = Math.min((Math.max(_283, 1)), size.w);
		var _285 = _284 < size.w;
		this.domNode.style.width = _284 + "px";
		if (_285) {
			this.containerNode.style.overflow = "auto";
			var _286 = this.containerNode.scrollWidth;
			this.containerNode.style.overflow = "visible";
			if (_286 > _284) {
				_286 = _286 + dojo.style(this.domNode, "paddingLeft") + dojo.style(this.domNode, "paddingRight");
				this.domNode.style.width = _286 + "px";
			}
		}
		if (_280.charAt(0) == "B" && _27f.charAt(0) == "B") {
			var mb = dojo.marginBox(node);
			var _287 = this.connectorNode.offsetHeight;
			if (mb.h > _281.h) {
				var _288 = _281.h - (_282.h / 2) - (_287 / 2);
				this.connectorNode.style.top = _288 + "px";
				this.connectorNode.style.bottom = "";
			} else {
				this.connectorNode.style.bottom = Math.min(Math.max(_282.h / 2 - _287 / 2, 0), mb.h - _287) + "px";
				this.connectorNode.style.top = "";
			}
		} else {
			this.connectorNode.style.top = "";
			this.connectorNode.style.bottom = "";
		}
		return Math.max(0, size.w - _283);
	}, _onShow: function () {
		if (dojo.isIE) {
			this.domNode.style.filter = "";
		}
	}, hide: function (_289) {
		if (this._onDeck && this._onDeck[1] == _289) {
			this._onDeck = null;
		} else {
			if (this.aroundNode === _289) {
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
	dijit.showTooltip = function (_28a, _28b, _28c, rtl) {
		if (!dijit._masterTT) {
			dijit._masterTT = new dijit._MasterTooltip();
		}
		return dijit._masterTT.show(_28a, _28b, _28c, rtl);
	};
	dijit.hideTooltip = function (_28d) {
		if (!dijit._masterTT) {
			dijit._masterTT = new dijit._MasterTooltip();
		}
		return dijit._masterTT.hide(_28d);
	};
	dojo.declare("dijit.Tooltip", dijit._Widget, {label: "", showDelay: 400, connectId: [], position: [], _setConnectIdAttr: function (_28e) {
		dojo.forEach(this._connections || [], function (_28f) {
			dojo.forEach(_28f, dojo.hitch(this, "disconnect"));
		}, this);
		var ary = dojo.isArrayLike(_28e) ? _28e : (_28e ? [_28e] : []);
		this._connections = dojo.map(ary, function (id) {
			var node = dojo.byId(id);
			return node ? [this.connect(node, "onmouseenter", "_onTargetMouseEnter"), this.connect(node, "onmouseleave", "_onTargetMouseLeave"), this.connect(node, "onfocus", "_onTargetFocus"), this.connect(node, "onblur", "_onTargetBlur")] : [];
		}, this);
		this._set("connectId", _28e);
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
			var _290 = e.target;
			this._showTimer = setTimeout(dojo.hitch(this, function () {
				this.open(_290);
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
	}, open: function (_291) {
		if (this._showTimer) {
			clearTimeout(this._showTimer);
			delete this._showTimer;
		}
		dijit.showTooltip(this.label || this.domNode.innerHTML, _291, this.position, !this.isLeftToRight());
		this._connectNode = _291;
		this.onShow(_291, this.position);
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
	}, onShow: function (_292, _293) {
	}, onHide: function () {
	}, uninitialize: function () {
		this.close();
		this.inherited(arguments);
	}});
	dijit.Tooltip.defaultPosition = ["after", "before"];
}
if (!dojo._hasResource["dijit.form.ValidationTextBox"]) {
	dojo._hasResource["dijit.form.ValidationTextBox"] = true;
	dojo.provide("dijit.form.ValidationTextBox");
	dojo.declare("dijit.form.ValidationTextBox", dijit.form.TextBox, {templateString: dojo.cache("dijit.form", "templates/ValidationTextBox.html", "<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\n\tid=\"widget_${id}\" role=\"presentation\"\n\t><div class='dijitReset dijitValidationContainer'\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t/></div\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\n\t\t><input class=\"dijitReset dijitInputInner\" dojoAttachPoint='textbox,focusNode' autocomplete=\"off\"\n\t\t\t${!nameAttrSetting} type='${type}'\n\t/></div\n></div>\n"), baseClass: "dijitTextBox dijitValidationTextBox", required: false, promptMessage: "", invalidMessage: "$_unset_$", missingMessage: "$_unset_$", message: "", constraints: {}, regExp: ".*", regExpGen: function (_294) {
		return this.regExp;
	}, state: "", tooltipPosition: [], _setValueAttr: function () {
		this.inherited(arguments);
		this.validate(this._focused);
	}, validator: function (_295, _296) {
		return (new RegExp("^(?:" + this.regExpGen(_296) + ")" + (this.required ? "" : "?") + "$")).test(_295) && (!this.required || !this._isEmpty(_295)) && (this._isEmpty(_295) || this.parse(_295, _296) !== undefined);
	}, _isValidSubset: function () {
		return this.textbox.value.search(this._partialre) == 0;
	}, isValid: function (_297) {
		return this.validator(this.textbox.value, this.constraints);
	}, _isEmpty: function (_298) {
		return (this.trim ? /^\s*$/ : /^$/).test(_298);
	}, getErrorMessage: function (_299) {
		return (this.required && this._isEmpty(this.textbox.value)) ? this.missingMessage : this.invalidMessage;
	}, getPromptMessage: function (_29a) {
		return this.promptMessage;
	}, _maskValidSubsetError: true, validate: function (_29b) {
		var _29c = "";
		var _29d = this.disabled || this.isValid(_29b);
		if (_29d) {
			this._maskValidSubsetError = true;
		}
		var _29e = this._isEmpty(this.textbox.value);
		var _29f = !_29d && _29b && this._isValidSubset();
		this._set("state", _29d ? "" : (((((!this._hasBeenBlurred || _29b) && _29e) || _29f) && this._maskValidSubsetError) ? "Incomplete" : "Error"));
		dijit.setWaiState(this.focusNode, "invalid", _29d ? "false" : "true");
		if (this.state == "Error") {
			this._maskValidSubsetError = _29b && _29f;
			_29c = this.getErrorMessage(_29b);
		} else {
			if (this.state == "Incomplete") {
				_29c = this.getPromptMessage(_29b);
				this._maskValidSubsetError = !this._hasBeenBlurred || _29b;
			} else {
				if (_29e) {
					_29c = this.getPromptMessage(_29b);
				}
			}
		}
		this.set("message", _29c);
		return _29d;
	}, displayMessage: function (_2a0) {
		dijit.hideTooltip(this.domNode);
		if (_2a0 && this._focused) {
			dijit.showTooltip(_2a0, this.domNode, this.tooltipPosition, !this.isLeftToRight());
		}
	}, _refreshState: function () {
		this.validate(this._focused);
		this.inherited(arguments);
	}, constructor: function () {
		this.constraints = {};
	}, _setConstraintsAttr: function (_2a1) {
		if (!_2a1.locale && this.lang) {
			_2a1.locale = this.lang;
		}
		this._set("constraints", _2a1);
		this._computePartialRE();
	}, _computePartialRE: function () {
		var p = this.regExpGen(this.constraints);
		this.regExp = p;
		var _2a2 = "";
		if (p != ".*") {
			this.regExp.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g, function (re) {
				switch (re.charAt(0)) {
					case "{":
					case "+":
					case "?":
					case "*":
					case "^":
					case "$":
					case "|":
					case "(":
						_2a2 += re;
						break;
					case ")":
						_2a2 += "|$)";
						break;
					default:
						_2a2 += "(?:" + re + "|$)";
						break;
				}
			});
		}
		try {
			"".search(_2a2);
		} catch (e) {
			_2a2 = this.regExp;
			console.warn("RegExp error in " + this.declaredClass + ": " + this.regExp);
		}
		this._partialre = "^(?:" + _2a2 + ")$";
	}, postMixInProperties: function () {
		this.inherited(arguments);
		this.messages = dojo.i18n.getLocalization("dijit.form", "validate", this.lang);
		if (this.invalidMessage == "$_unset_$") {
			this.invalidMessage = this.messages.invalidMessage;
		}
		if (!this.invalidMessage) {
			this.invalidMessage = this.promptMessage;
		}
		if (this.missingMessage == "$_unset_$") {
			this.missingMessage = this.messages.missingMessage;
		}
		if (!this.missingMessage) {
			this.missingMessage = this.invalidMessage;
		}
		this._setConstraintsAttr(this.constraints);
	}, _setDisabledAttr: function (_2a3) {
		this.inherited(arguments);
		this._refreshState();
	}, _setRequiredAttr: function (_2a4) {
		this._set("required", _2a4);
		dijit.setWaiState(this.focusNode, "required", _2a4);
		this._refreshState();
	}, _setMessageAttr: function (_2a5) {
		this._set("message", _2a5);
		this.displayMessage(_2a5);
	}, reset: function () {
		this._maskValidSubsetError = true;
		this.inherited(arguments);
	}, _onBlur: function () {
		this.displayMessage("");
		this.inherited(arguments);
	}});
	dojo.declare("dijit.form.MappedTextBox", dijit.form.ValidationTextBox, {postMixInProperties: function () {
		this.inherited(arguments);
		this.nameAttrSetting = "";
	}, serialize: function (val, _2a6) {
		return val.toString ? val.toString() : "";
	}, toString: function () {
		var val = this.filter(this.get("value"));
		return val != null ? (typeof val == "string" ? val : this.serialize(val, this.constraints)) : "";
	}, validate: function () {
		this.valueNode.value = this.toString();
		return this.inherited(arguments);
	}, buildRendering: function () {
		this.inherited(arguments);
		this.valueNode = dojo.place("<input type='hidden'" + (this.name ? " name='" + this.name.replace(/'/g, "&quot;") + "'" : "") + "/>", this.textbox, "after");
	}, reset: function () {
		this.valueNode.value = "";
		this.inherited(arguments);
	}});
	dojo.declare("dijit.form.RangeBoundTextBox", dijit.form.MappedTextBox, {rangeMessage: "", rangeCheck: function (_2a7, _2a8) {
		return ("min" in _2a8 ? (this.compare(_2a7, _2a8.min) >= 0) : true) && ("max" in _2a8 ? (this.compare(_2a7, _2a8.max) <= 0) : true);
	}, isInRange: function (_2a9) {
		return this.rangeCheck(this.get("value"), this.constraints);
	}, _isDefinitelyOutOfRange: function () {
		var val = this.get("value");
		var _2aa = false;
		var _2ab = false;
		if ("min" in this.constraints) {
			var min = this.constraints.min;
			min = this.compare(val, ((typeof min == "number") && min >= 0 && val != 0) ? 0 : min);
			_2aa = (typeof min == "number") && min < 0;
		}
		if ("max" in this.constraints) {
			var max = this.constraints.max;
			max = this.compare(val, ((typeof max != "number") || max > 0) ? max : 0);
			_2ab = (typeof max == "number") && max > 0;
		}
		return _2aa || _2ab;
	}, _isValidSubset: function () {
		return this.inherited(arguments) && !this._isDefinitelyOutOfRange();
	}, isValid: function (_2ac) {
		return this.inherited(arguments) && ((this._isEmpty(this.textbox.value) && !this.required) || this.isInRange(_2ac));
	}, getErrorMessage: function (_2ad) {
		var v = this.get("value");
		if (v !== null && v !== "" && v !== undefined && (typeof v != "number" || !isNaN(v)) && !this.isInRange(_2ad)) {
			return this.rangeMessage;
		}
		return this.inherited(arguments);
	}, postMixInProperties: function () {
		this.inherited(arguments);
		if (!this.rangeMessage) {
			this.messages = dojo.i18n.getLocalization("dijit.form", "validate", this.lang);
			this.rangeMessage = this.messages.rangeMessage;
		}
	}, _setConstraintsAttr: function (_2ae) {
		this.inherited(arguments);
		if (this.focusNode) {
			if (this.constraints.min !== undefined) {
				dijit.setWaiState(this.focusNode, "valuemin", this.constraints.min);
			} else {
				dijit.removeWaiState(this.focusNode, "valuemin");
			}
			if (this.constraints.max !== undefined) {
				dijit.setWaiState(this.focusNode, "valuemax", this.constraints.max);
			} else {
				dijit.removeWaiState(this.focusNode, "valuemax");
			}
		}
	}, _setValueAttr: function (_2af, _2b0) {
		dijit.setWaiState(this.focusNode, "valuenow", _2af);
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit.form.ComboBox"]) {
	dojo._hasResource["dijit.form.ComboBox"] = true;
	dojo.provide("dijit.form.ComboBox");
	dojo.declare("dijit.form.ComboBoxMixin", dijit._HasDropDown, {item: null, pageSize: Infinity, store: null, fetchProperties: {}, query: {}, autoComplete: true, highlightMatch: "first", searchDelay: 100, searchAttr: "name", labelAttr: "", labelType: "text", queryExpr: "${0}*", ignoreCase: true, hasDownArrow: true, templateString: dojo.cache("dijit.form", "templates/DropDownBox.html", "<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\n\tid=\"widget_${id}\"\n\trole=\"combobox\"\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\n\t\t><input class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t\t\t${_buttonInputDisabled}\n\t/></div\n\t><div class='dijitReset dijitValidationContainer'\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t/></div\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\n\t/></div\n></div>\n"), baseClass: "dijitTextBox dijitComboBox", dropDownClass: "dijit.form._ComboBoxMenu", cssStateNodes: {"_buttonNode": "dijitDownArrowButton"}, maxHeight: -1, _stopClickEvents: false, _getCaretPos: function (_2b1) {
		var pos = 0;
		if (typeof (_2b1.selectionStart) == "number") {
			pos = _2b1.selectionStart;
		} else {
			if (dojo.isIE) {
				var tr = dojo.doc.selection.createRange().duplicate();
				var ntr = _2b1.createTextRange();
				tr.move("character", 0);
				ntr.move("character", 0);
				try {
					ntr.setEndPoint("EndToEnd", tr);
					pos = String(ntr.text).replace(/\r/g, "").length;
				} catch (e) {
				}
			}
		}
		return pos;
	}, _setCaretPos: function (_2b2, _2b3) {
		_2b3 = parseInt(_2b3);
		dijit.selectInputText(_2b2, _2b3, _2b3);
	}, _setDisabledAttr: function (_2b4) {
		this.inherited(arguments);
		dijit.setWaiState(this.domNode, "disabled", _2b4);
	}, _abortQuery: function () {
		if (this.searchTimer) {
			clearTimeout(this.searchTimer);
			this.searchTimer = null;
		}
		if (this._fetchHandle) {
			if (this._fetchHandle.abort) {
				this._fetchHandle.abort();
			}
			this._fetchHandle = null;
		}
	}, _onInput: function (evt) {
		if (!this.searchTimer && (evt.type == "paste" || evt.type == "input") && this._lastInput != this.textbox.value) {
			this.searchTimer = setTimeout(dojo.hitch(this, function () {
				this._onKey({charOrCode: 229});
			}), 100);
		}
		this.inherited(arguments);
	}, _onKey: function (evt) {
		var key = evt.charOrCode;
		if (evt.altKey || ((evt.ctrlKey || evt.metaKey) && (key != "x" && key != "v")) || key == dojo.keys.SHIFT) {
			return;
		}
		var _2b5 = false;
		var pw = this.dropDown;
		var dk = dojo.keys;
		var _2b6 = null;
		this._prev_key_backspace = false;
		this._abortQuery();
		this.inherited(arguments);
		if (this._opened) {
			_2b6 = pw.getHighlightedOption();
		}
		switch (key) {
			case dk.PAGE_DOWN:
			case dk.DOWN_ARROW:
			case dk.PAGE_UP:
			case dk.UP_ARROW:
				if (this._opened) {
					this._announceOption(_2b6);
				}
				dojo.stopEvent(evt);
				break;
			case dk.ENTER:
				if (_2b6) {
					if (_2b6 == pw.nextButton) {
						this._nextSearch(1);
						dojo.stopEvent(evt);
						break;
					} else {
						if (_2b6 == pw.previousButton) {
							this._nextSearch(-1);
							dojo.stopEvent(evt);
							break;
						}
					}
				} else {
					this._setBlurValue();
					this._setCaretPos(this.focusNode, this.focusNode.value.length);
				}
				if (this._opened || this._fetchHandle) {
					evt.preventDefault();
				}
			case dk.TAB:
				var _2b7 = this.get("displayedValue");
				if (pw && (_2b7 == pw._messages["previousMessage"] || _2b7 == pw._messages["nextMessage"])) {
					break;
				}
				if (_2b6) {
					this._selectOption();
				}
				if (this._opened) {
					this._lastQuery = null;
					this.closeDropDown();
				}
				break;
			case " ":
				if (_2b6) {
					dojo.stopEvent(evt);
					this._selectOption();
					this.closeDropDown();
				} else {
					_2b5 = true;
				}
				break;
			case dk.DELETE:
			case dk.BACKSPACE:
				this._prev_key_backspace = true;
				_2b5 = true;
				break;
			default:
				_2b5 = typeof key == "string" || key == 229;
		}
		if (_2b5) {
			this.item = undefined;
			this.searchTimer = setTimeout(dojo.hitch(this, "_startSearchFromInput"), 1);
		}
	}, _autoCompleteText: function (text) {
		var fn = this.focusNode;
		dijit.selectInputText(fn, fn.value.length);
		var _2b8 = this.ignoreCase ? "toLowerCase" : "substr";
		if (text[_2b8](0).indexOf(this.focusNode.value[_2b8](0)) == 0) {
			var cpos = this._getCaretPos(fn);
			if ((cpos + 1) > fn.value.length) {
				fn.value = text;
				dijit.selectInputText(fn, cpos);
			}
		} else {
			fn.value = text;
			dijit.selectInputText(fn);
		}
	}, _openResultList: function (_2b9, _2ba) {
		this._fetchHandle = null;
		if (this.disabled || this.readOnly || (_2ba.query[this.searchAttr] != this._lastQuery)) {
			return;
		}
		var _2bb = this.dropDown._highlighted_option && dojo.hasClass(this.dropDown._highlighted_option, "dijitMenuItemSelected");
		this.dropDown.clearResultList();
		if (!_2b9.length && !this._maxOptions) {
			this.closeDropDown();
			return;
		}
		_2ba._maxOptions = this._maxOptions;
		var _2bc = this.dropDown.createOptions(_2b9, _2ba, dojo.hitch(this, "_getMenuLabelFromItem"));
		this._showResultList();
		if (_2ba.direction) {
			if (1 == _2ba.direction) {
				this.dropDown.highlightFirstOption();
			} else {
				if (-1 == _2ba.direction) {
					this.dropDown.highlightLastOption();
				}
			}
			if (_2bb) {
				this._announceOption(this.dropDown.getHighlightedOption());
			}
		} else {
			if (this.autoComplete && !this._prev_key_backspace && !/^[*]+$/.test(_2ba.query[this.searchAttr])) {
				this._announceOption(_2bc[1]);
			}
		}
	}, _showResultList: function () {
		this.closeDropDown(true);
		this.displayMessage("");
		this.openDropDown();
		dijit.setWaiState(this.domNode, "expanded", "true");
	}, loadDropDown: function (_2bd) {
		this._startSearchAll();
	}, isLoaded: function () {
		return false;
	}, closeDropDown: function () {
		this._abortQuery();
		if (this._opened) {
			this.inherited(arguments);
			dijit.setWaiState(this.domNode, "expanded", "false");
			dijit.removeWaiState(this.focusNode, "activedescendant");
		}
	}, _setBlurValue: function () {
		var _2be = this.get("displayedValue");
		var pw = this.dropDown;
		if (pw && (_2be == pw._messages["previousMessage"] || _2be == pw._messages["nextMessage"])) {
			this._setValueAttr(this._lastValueReported, true);
		} else {
			if (typeof this.item == "undefined") {
				this.item = null;
				this.set("displayedValue", _2be);
			} else {
				if (this.value != this._lastValueReported) {
					dijit.form._FormValueWidget.prototype._setValueAttr.call(this, this.value, true);
				}
				this._refreshState();
			}
		}
	}, _onBlur: function () {
		this.closeDropDown();
		this.inherited(arguments);
	}, _setItemAttr: function (item, _2bf, _2c0) {
		if (!_2c0) {
			_2c0 = this.store.getValue(item, this.searchAttr);
		}
		var _2c1 = this._getValueField() != this.searchAttr ? this.store.getIdentity(item) : _2c0;
		this._set("item", item);
		dijit.form.ComboBox.superclass._setValueAttr.call(this, _2c1, _2bf, _2c0);
	}, _announceOption: function (node) {
		if (!node) {
			return;
		}
		var _2c2;
		if (node == this.dropDown.nextButton || node == this.dropDown.previousButton) {
			_2c2 = node.innerHTML;
			this.item = undefined;
			this.value = "";
		} else {
			_2c2 = this.store.getValue(node.item, this.searchAttr).toString();
			this.set("item", node.item, false, _2c2);
		}
		this.focusNode.value = this.focusNode.value.substring(0, this._lastInput.length);
		dijit.setWaiState(this.focusNode, "activedescendant", dojo.attr(node, "id"));
		this._autoCompleteText(_2c2);
	}, _selectOption: function (evt) {
		if (evt) {
			this._announceOption(evt.target);
		}
		this.closeDropDown();
		this._setCaretPos(this.focusNode, this.focusNode.value.length);
		dijit.form._FormValueWidget.prototype._setValueAttr.call(this, this.value, true);
	}, _startSearchAll: function () {
		this._startSearch("");
	}, _startSearchFromInput: function () {
		this._startSearch(this.focusNode.value.replace(/([\\\*\?])/g, "\\$1"));
	}, _getQueryString: function (text) {
		return dojo.string.substitute(this.queryExpr, [text]);
	}, _startSearch: function (key) {
		if (!this.dropDown) {
			var _2c3 = this.id + "_popup", _2c4 = dojo.getObject(this.dropDownClass, false);
			this.dropDown = new _2c4({onChange: dojo.hitch(this, this._selectOption), id: _2c3, dir: this.dir});
			dijit.removeWaiState(this.focusNode, "activedescendant");
			dijit.setWaiState(this.textbox, "owns", _2c3);
		}
		var _2c5 = dojo.clone(this.query);
		this._lastInput = key;
		this._lastQuery = _2c5[this.searchAttr] = this._getQueryString(key);
		this.searchTimer = setTimeout(dojo.hitch(this, function (_2c6, _2c7) {
			this.searchTimer = null;
			var _2c8 = {queryOptions: {ignoreCase: this.ignoreCase, deep: true}, query: _2c6, onBegin: dojo.hitch(this, "_setMaxOptions"), onComplete: dojo.hitch(this, "_openResultList"), onError: function (_2c9) {
				_2c7._fetchHandle = null;
				console.error("dijit.form.ComboBox: " + _2c9);
				_2c7.closeDropDown();
			}, start: 0, count: this.pageSize};
			dojo.mixin(_2c8, _2c7.fetchProperties);
			this._fetchHandle = _2c7.store.fetch(_2c8);
			var _2ca = function (_2cb, _2cc) {
				_2cb.start += _2cb.count * _2cc;
				_2cb.direction = _2cc;
				this._fetchHandle = this.store.fetch(_2cb);
				this.focus();
			};
			this._nextSearch = this.dropDown.onPage = dojo.hitch(this, _2ca, this._fetchHandle);
		}, _2c5, this), this.searchDelay);
	}, _setMaxOptions: function (size, _2cd) {
		this._maxOptions = size;
	}, _getValueField: function () {
		return this.searchAttr;
	}, constructor: function () {
		this.query = {};
		this.fetchProperties = {};
	}, postMixInProperties: function () {
		if (!this.store) {
			var _2ce = this.srcNodeRef;
			this.store = new dijit.form._ComboBoxDataStore(_2ce);
			if (!("value" in this.params)) {
				var item = (this.item = this.store.fetchSelectedItem());
				if (item) {
					var _2cf = this._getValueField();
					this.value = this.store.getValue(item, _2cf);
				}
			}
		}
		this.inherited(arguments);
	}, postCreate: function () {
		var _2d0 = dojo.query("label[for=\"" + this.id + "\"]");
		if (_2d0.length) {
			_2d0[0].id = (this.id + "_label");
			dijit.setWaiState(this.domNode, "labelledby", _2d0[0].id);
		}
		this.inherited(arguments);
	}, _setHasDownArrowAttr: function (val) {
		this.hasDownArrow = val;
		this._buttonNode.style.display = val ? "" : "none";
	}, _getMenuLabelFromItem: function (item) {
		var _2d1 = this.labelFunc(item, this.store), _2d2 = this.labelType;
		if (this.highlightMatch != "none" && this.labelType == "text" && this._lastInput) {
			_2d1 = this.doHighlight(_2d1, this._escapeHtml(this._lastInput));
			_2d2 = "html";
		}
		return {html: _2d2 == "html", label: _2d1};
	}, doHighlight: function (_2d3, find) {
		var _2d4 = (this.ignoreCase ? "i" : "") + (this.highlightMatch == "all" ? "g" : ""), i = this.queryExpr.indexOf("${0}");
		find = dojo.regexp.escapeString(find);
		return this._escapeHtml(_2d3).replace(new RegExp((i == 0 ? "^" : "") + "(" + find + ")" + (i == (this.queryExpr.length - 4) ? "$" : ""), _2d4), "<span class=\"dijitComboBoxHighlightMatch\">$1</span>");
	}, _escapeHtml: function (str) {
		str = String(str).replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;");
		return str;
	}, reset: function () {
		this.item = null;
		this.inherited(arguments);
	}, labelFunc: function (item, _2d5) {
		return _2d5.getValue(item, this.labelAttr || this.searchAttr).toString();
	}});
	dojo.declare("dijit.form._ComboBoxMenu", [dijit._Widget, dijit._Templated, dijit._CssStateMixin], {templateString: "<ul class='dijitReset dijitMenu' dojoAttachEvent='onmousedown:_onMouseDown,onmouseup:_onMouseUp,onmouseover:_onMouseOver,onmouseout:_onMouseOut' style='overflow: \"auto\"; overflow-x: \"hidden\";'>" + "<li class='dijitMenuItem dijitMenuPreviousButton' dojoAttachPoint='previousButton' role='option'></li>" + "<li class='dijitMenuItem dijitMenuNextButton' dojoAttachPoint='nextButton' role='option'></li>" + "</ul>", _messages: null, baseClass: "dijitComboBoxMenu", postMixInProperties: function () {
		this.inherited(arguments);
		this._messages = dojo.i18n.getLocalization("dijit.form", "ComboBox", this.lang);
	}, buildRendering: function () {
		this.inherited(arguments);
		this.previousButton.innerHTML = this._messages["previousMessage"];
		this.nextButton.innerHTML = this._messages["nextMessage"];
	}, _setValueAttr: function (_2d6) {
		this.value = _2d6;
		this.onChange(_2d6);
	}, onChange: function (_2d7) {
	}, onPage: function (_2d8) {
	}, onClose: function () {
		this._blurOptionNode();
	}, _createOption: function (item, _2d9) {
		var _2da = dojo.create("li", {"class": "dijitReset dijitMenuItem" + (this.isLeftToRight() ? "" : " dijitMenuItemRtl"), role: "option"});
		var _2db = _2d9(item);
		if (_2db.html) {
			_2da.innerHTML = _2db.label;
		} else {
			_2da.appendChild(dojo.doc.createTextNode(_2db.label));
		}
		if (_2da.innerHTML == "") {
			_2da.innerHTML = "&nbsp;";
		}
		_2da.item = item;
		return _2da;
	}, createOptions: function (_2dc, _2dd, _2de) {
		this.previousButton.style.display = (_2dd.start == 0) ? "none" : "";
		dojo.attr(this.previousButton, "id", this.id + "_prev");
		dojo.forEach(_2dc, function (item, i) {
			var _2df = this._createOption(item, _2de);
			dojo.attr(_2df, "id", this.id + i);
			this.domNode.insertBefore(_2df, this.nextButton);
		}, this);
		var _2e0 = false;
		if (_2dd._maxOptions && _2dd._maxOptions != -1) {
			if ((_2dd.start + _2dd.count) < _2dd._maxOptions) {
				_2e0 = true;
			} else {
				if ((_2dd.start + _2dd.count) > _2dd._maxOptions && _2dd.count == _2dc.length) {
					_2e0 = true;
				}
			}
		} else {
			if (_2dd.count == _2dc.length) {
				_2e0 = true;
			}
		}
		this.nextButton.style.display = _2e0 ? "" : "none";
		dojo.attr(this.nextButton, "id", this.id + "_next");
		return this.domNode.childNodes;
	}, clearResultList: function () {
		while (this.domNode.childNodes.length > 2) {
			this.domNode.removeChild(this.domNode.childNodes[this.domNode.childNodes.length - 2]);
		}
		this._blurOptionNode();
	}, _onMouseDown: function (evt) {
		dojo.stopEvent(evt);
	}, _onMouseUp: function (evt) {
		if (evt.target === this.domNode || !this._highlighted_option) {
			return;
		} else {
			if (evt.target == this.previousButton) {
				this._blurOptionNode();
				this.onPage(-1);
			} else {
				if (evt.target == this.nextButton) {
					this._blurOptionNode();
					this.onPage(1);
				} else {
					var tgt = evt.target;
					while (!tgt.item) {
						tgt = tgt.parentNode;
					}
					this._setValueAttr({target: tgt}, true);
				}
			}
		}
	}, _onMouseOver: function (evt) {
		if (evt.target === this.domNode) {
			return;
		}
		var tgt = evt.target;
		if (!(tgt == this.previousButton || tgt == this.nextButton)) {
			while (!tgt.item) {
				tgt = tgt.parentNode;
			}
		}
		this._focusOptionNode(tgt);
	}, _onMouseOut: function (evt) {
		if (evt.target === this.domNode) {
			return;
		}
		this._blurOptionNode();
	}, _focusOptionNode: function (node) {
		if (this._highlighted_option != node) {
			this._blurOptionNode();
			this._highlighted_option = node;
			dojo.addClass(this._highlighted_option, "dijitMenuItemSelected");
		}
	}, _blurOptionNode: function () {
		if (this._highlighted_option) {
			dojo.removeClass(this._highlighted_option, "dijitMenuItemSelected");
			this._highlighted_option = null;
		}
	}, _highlightNextOption: function () {
		if (!this.getHighlightedOption()) {
			var fc = this.domNode.firstChild;
			this._focusOptionNode(fc.style.display == "none" ? fc.nextSibling : fc);
		} else {
			var ns = this._highlighted_option.nextSibling;
			if (ns && ns.style.display != "none") {
				this._focusOptionNode(ns);
			} else {
				this.highlightFirstOption();
			}
		}
		dojo.window.scrollIntoView(this._highlighted_option);
	}, highlightFirstOption: function () {
		var _2e1 = this.domNode.firstChild;
		var _2e2 = _2e1.nextSibling;
		this._focusOptionNode(_2e2.style.display == "none" ? _2e1 : _2e2);
		dojo.window.scrollIntoView(this._highlighted_option);
	}, highlightLastOption: function () {
		this._focusOptionNode(this.domNode.lastChild.previousSibling);
		dojo.window.scrollIntoView(this._highlighted_option);
	}, _highlightPrevOption: function () {
		if (!this.getHighlightedOption()) {
			var lc = this.domNode.lastChild;
			this._focusOptionNode(lc.style.display == "none" ? lc.previousSibling : lc);
		} else {
			var ps = this._highlighted_option.previousSibling;
			if (ps && ps.style.display != "none") {
				this._focusOptionNode(ps);
			} else {
				this.highlightLastOption();
			}
		}
		dojo.window.scrollIntoView(this._highlighted_option);
	}, _page: function (up) {
		var _2e3 = 0;
		var _2e4 = this.domNode.scrollTop;
		var _2e5 = dojo.style(this.domNode, "height");
		if (!this.getHighlightedOption()) {
			this._highlightNextOption();
		}
		while (_2e3 < _2e5) {
			if (up) {
				if (!this.getHighlightedOption().previousSibling || this._highlighted_option.previousSibling.style.display == "none") {
					break;
				}
				this._highlightPrevOption();
			} else {
				if (!this.getHighlightedOption().nextSibling || this._highlighted_option.nextSibling.style.display == "none") {
					break;
				}
				this._highlightNextOption();
			}
			var _2e6 = this.domNode.scrollTop;
			_2e3 += (_2e6 - _2e4) * (up ? -1 : 1);
			_2e4 = _2e6;
		}
	}, pageUp: function () {
		this._page(true);
	}, pageDown: function () {
		this._page(false);
	}, getHighlightedOption: function () {
		var ho = this._highlighted_option;
		return (ho && ho.parentNode) ? ho : null;
	}, handleKey: function (evt) {
		switch (evt.charOrCode) {
			case dojo.keys.DOWN_ARROW:
				this._highlightNextOption();
				return false;
			case dojo.keys.PAGE_DOWN:
				this.pageDown();
				return false;
			case dojo.keys.UP_ARROW:
				this._highlightPrevOption();
				return false;
			case dojo.keys.PAGE_UP:
				this.pageUp();
				return false;
			default:
				return true;
		}
	}});
	dojo.declare("dijit.form.ComboBox", [dijit.form.ValidationTextBox, dijit.form.ComboBoxMixin], {_setValueAttr: function (_2e7, _2e8, _2e9) {
		this._set("item", null);
		if (!_2e7) {
			_2e7 = "";
		}
		dijit.form.ValidationTextBox.prototype._setValueAttr.call(this, _2e7, _2e8, _2e9);
	}});
	dojo.declare("dijit.form._ComboBoxDataStore", null, {constructor: function (root) {
		this.root = root;
		if (root.tagName != "SELECT" && root.firstChild) {
			root = dojo.query("select", root);
			if (root.length > 0) {
				root = root[0];
			} else {
				this.root.innerHTML = "<SELECT>" + this.root.innerHTML + "</SELECT>";
				root = this.root.firstChild;
			}
			this.root = root;
		}
		dojo.query("> option", root).forEach(function (node) {
			node.innerHTML = dojo.trim(node.innerHTML);
		});
	}, getValue: function (item, _2ea, _2eb) {
		return (_2ea == "value") ? item.value : (item.innerText || item.textContent || "");
	}, isItemLoaded: function (_2ec) {
		return true;
	}, getFeatures: function () {
		return {"dojo.data.api.Read": true, "dojo.data.api.Identity": true};
	}, _fetchItems: function (args, _2ed, _2ee) {
		if (!args.query) {
			args.query = {};
		}
		if (!args.query.name) {
			args.query.name = "";
		}
		if (!args.queryOptions) {
			args.queryOptions = {};
		}
		var _2ef = dojo.data.util.filter.patternToRegExp(args.query.name, args.queryOptions.ignoreCase), _2f0 = dojo.query("> option", this.root).filter(function (_2f1) {
			return (_2f1.innerText || _2f1.textContent || "").match(_2ef);
		});
		if (args.sort) {
			_2f0.sort(dojo.data.util.sorter.createSortFunction(args.sort, this));
		}
		_2ed(_2f0, args);
	}, close: function (_2f2) {
		return;
	}, getLabel: function (item) {
		return item.innerHTML;
	}, getIdentity: function (item) {
		return dojo.attr(item, "value");
	}, fetchItemByIdentity: function (args) {
		var item = dojo.query("> option[value='" + args.identity + "']", this.root)[0];
		args.onItem(item);
	}, fetchSelectedItem: function () {
		var root = this.root, si = root.selectedIndex;
		return typeof si == "number" ? dojo.query("> option:nth-child(" + (si != -1 ? si + 1 : 1) + ")", root)[0] : null;
	}});
	dojo.extend(dijit.form._ComboBoxDataStore, dojo.data.util.simpleFetch);
}
if (!dojo._hasResource["dijit.form.FilteringSelect"]) {
	dojo._hasResource["dijit.form.FilteringSelect"] = true;
	dojo.provide("dijit.form.FilteringSelect");
	dojo.declare("dijit.form.FilteringSelect", [dijit.form.MappedTextBox, dijit.form.ComboBoxMixin], {required: true, _lastDisplayedValue: "", _isValidSubset: function () {
		return this._opened;
	}, isValid: function () {
		return this.item || (!this.required && this.get("displayedValue") == "");
	}, _refreshState: function () {
		if (!this.searchTimer) {
			this.inherited(arguments);
		}
	}, _callbackSetLabel: function (_2f3, _2f4, _2f5) {
		if ((_2f4 && _2f4.query[this.searchAttr] != this._lastQuery) || (!_2f4 && _2f3.length && this.store.getIdentity(_2f3[0]) != this._lastQuery)) {
			return;
		}
		if (!_2f3.length) {
			this.valueNode.value = "";
			dijit.form.TextBox.superclass._setValueAttr.call(this, "", _2f5 || (_2f5 === undefined && !this._focused));
			this._set("item", null);
			this.validate(this._focused);
		} else {
			this.set("item", _2f3[0], _2f5);
		}
	}, _openResultList: function (_2f6, _2f7) {
		if (_2f7.query[this.searchAttr] != this._lastQuery) {
			return;
		}
		dijit.form.ComboBoxMixin.prototype._openResultList.apply(this, arguments);
		if (this.item === undefined) {
			this.validate(true);
		}
	}, _getValueAttr: function () {
		return this.valueNode.value;
	}, _getValueField: function () {
		return "value";
	}, _setValueAttr: function (_2f8, _2f9) {
		if (!this._onChangeActive) {
			_2f9 = null;
		}
		this._lastQuery = _2f8;
		if (_2f8 === null || _2f8 === "") {
			this._setDisplayedValueAttr("", _2f9);
			return;
		}
		var self = this;
		this.store.fetchItemByIdentity({identity: _2f8, onItem: function (item) {
			self._callbackSetLabel(item ? [item] : [], undefined, _2f9);
		}});
	}, _setItemAttr: function (item, _2fa, _2fb) {
		this.inherited(arguments);
		this.valueNode.value = this.value;
		this._lastDisplayedValue = this.textbox.value;
	}, _getDisplayQueryString: function (text) {
		return text.replace(/([\\\*\?])/g, "\\$1");
	}, _setDisplayedValueAttr: function (_2fc, _2fd) {
		if (_2fc == null) {
			_2fc = "";
		}
		if (!this._created) {
			if (!("displayedValue" in this.params)) {
				return;
			}
			_2fd = false;
		}
		if (this.store) {
			this.closeDropDown();
			var _2fe = dojo.clone(this.query);
			this._lastQuery = _2fe[this.searchAttr] = this._getDisplayQueryString(_2fc);
			this.textbox.value = _2fc;
			this._lastDisplayedValue = _2fc;
			this._set("displayedValue", _2fc);
			var _2ff = this;
			var _300 = {query: _2fe, queryOptions: {ignoreCase: this.ignoreCase, deep: true}, onComplete: function (_301, _302) {
				_2ff._fetchHandle = null;
				dojo.hitch(_2ff, "_callbackSetLabel")(_301, _302, _2fd);
			}, onError: function (_303) {
				_2ff._fetchHandle = null;
				console.error("dijit.form.FilteringSelect: " + _303);
				dojo.hitch(_2ff, "_callbackSetLabel")([], undefined, false);
			}};
			dojo.mixin(_300, this.fetchProperties);
			this._fetchHandle = this.store.fetch(_300);
		}
	}, undo: function () {
		this.set("displayedValue", this._lastDisplayedValue);
	}});
}
if (!dojo._hasResource["dojo.data.ItemFileReadStore"]) {
	dojo._hasResource["dojo.data.ItemFileReadStore"] = true;
	dojo.provide("dojo.data.ItemFileReadStore");
	dojo.declare("dojo.data.ItemFileReadStore", null, {constructor: function (_304) {
		this._arrayOfAllItems = [];
		this._arrayOfTopLevelItems = [];
		this._loadFinished = false;
		this._jsonFileUrl = _304.url;
		this._ccUrl = _304.url;
		this.url = _304.url;
		this._jsonData = _304.data;
		this.data = null;
		this._datatypeMap = _304.typeMap || {};
		if (!this._datatypeMap["Date"]) {
			this._datatypeMap["Date"] = {type: Date, deserialize: function (_305) {
				return dojo.date.stamp.fromISOString(_305);
			}};
		}
		this._features = {"dojo.data.api.Read": true, "dojo.data.api.Identity": true};
		this._itemsByIdentity = null;
		this._storeRefPropName = "_S";
		this._itemNumPropName = "_0";
		this._rootItemPropName = "_RI";
		this._reverseRefMap = "_RRM";
		this._loadInProgress = false;
		this._queuedFetches = [];
		if (_304.urlPreventCache !== undefined) {
			this.urlPreventCache = _304.urlPreventCache ? true : false;
		}
		if (_304.hierarchical !== undefined) {
			this.hierarchical = _304.hierarchical ? true : false;
		}
		if (_304.clearOnClose) {
			this.clearOnClose = true;
		}
		if ("failOk" in _304) {
			this.failOk = _304.failOk ? true : false;
		}
	}, url: "", _ccUrl: "", data: null, typeMap: null, clearOnClose: false, urlPreventCache: false, failOk: false, hierarchical: true, _assertIsItem: function (item) {
		if (!this.isItem(item)) {
			throw new Error("dojo.data.ItemFileReadStore: Invalid item argument.");
		}
	}, _assertIsAttribute: function (_306) {
		if (typeof _306 !== "string") {
			throw new Error("dojo.data.ItemFileReadStore: Invalid attribute argument.");
		}
	}, getValue: function (item, _307, _308) {
		var _309 = this.getValues(item, _307);
		return (_309.length > 0) ? _309[0] : _308;
	}, getValues: function (item, _30a) {
		this._assertIsItem(item);
		this._assertIsAttribute(_30a);
		return (item[_30a] || []).slice(0);
	}, getAttributes: function (item) {
		this._assertIsItem(item);
		var _30b = [];
		for (var key in item) {
			if ((key !== this._storeRefPropName) && (key !== this._itemNumPropName) && (key !== this._rootItemPropName) && (key !== this._reverseRefMap)) {
				_30b.push(key);
			}
		}
		return _30b;
	}, hasAttribute: function (item, _30c) {
		this._assertIsItem(item);
		this._assertIsAttribute(_30c);
		return (_30c in item);
	}, containsValue: function (item, _30d, _30e) {
		var _30f = undefined;
		if (typeof _30e === "string") {
			_30f = dojo.data.util.filter.patternToRegExp(_30e, false);
		}
		return this._containsValue(item, _30d, _30e, _30f);
	}, _containsValue: function (item, _310, _311, _312) {
		return dojo.some(this.getValues(item, _310), function (_313) {
			if (_313 !== null && !dojo.isObject(_313) && _312) {
				if (_313.toString().match(_312)) {
					return true;
				}
			} else {
				if (_311 === _313) {
					return true;
				}
			}
		});
	}, isItem: function (_314) {
		if (_314 && _314[this._storeRefPropName] === this) {
			if (this._arrayOfAllItems[_314[this._itemNumPropName]] === _314) {
				return true;
			}
		}
		return false;
	}, isItemLoaded: function (_315) {
		return this.isItem(_315);
	}, loadItem: function (_316) {
		this._assertIsItem(_316.item);
	}, getFeatures: function () {
		return this._features;
	}, getLabel: function (item) {
		if (this._labelAttr && this.isItem(item)) {
			return this.getValue(item, this._labelAttr);
		}
		return undefined;
	}, getLabelAttributes: function (item) {
		if (this._labelAttr) {
			return [this._labelAttr];
		}
		return null;
	}, _fetchItems: function (_317, _318, _319) {
		var self = this, _31a = function (_31b, _31c) {
			var _31d = [], i, key;
			if (_31b.query) {
				var _31e, _31f = _31b.queryOptions ? _31b.queryOptions.ignoreCase : false;
				var _320 = {};
				for (key in _31b.query) {
					_31e = _31b.query[key];
					if (typeof _31e === "string") {
						_320[key] = dojo.data.util.filter.patternToRegExp(_31e, _31f);
					} else {
						if (_31e instanceof RegExp) {
							_320[key] = _31e;
						}
					}
				}
				for (i = 0; i < _31c.length; ++i) {
					var _321 = true;
					var _322 = _31c[i];
					if (_322 === null) {
						_321 = false;
					} else {
						for (key in _31b.query) {
							_31e = _31b.query[key];
							if (!self._containsValue(_322, key, _31e, _320[key])) {
								_321 = false;
							}
						}
					}
					if (_321) {
						_31d.push(_322);
					}
				}
				_318(_31d, _31b);
			} else {
				for (i = 0; i < _31c.length; ++i) {
					var item = _31c[i];
					if (item !== null) {
						_31d.push(item);
					}
				}
				_318(_31d, _31b);
			}
		};
		if (this._loadFinished) {
			_31a(_317, this._getItemsArray(_317.queryOptions));
		} else {
			if (this._jsonFileUrl !== this._ccUrl) {
				dojo.deprecated("dojo.data.ItemFileReadStore: ", "To change the url, set the url property of the store," + " not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
				this._ccUrl = this._jsonFileUrl;
				this.url = this._jsonFileUrl;
			} else {
				if (this.url !== this._ccUrl) {
					this._jsonFileUrl = this.url;
					this._ccUrl = this.url;
				}
			}
			if (this.data != null) {
				this._jsonData = this.data;
				this.data = null;
			}
			if (this._jsonFileUrl) {
				if (this._loadInProgress) {
					this._queuedFetches.push({args: _317, filter: _31a});
				} else {
					this._loadInProgress = true;
					var _323 = {url: self._jsonFileUrl, handleAs: "json-comment-optional", preventCache: this.urlPreventCache, failOk: this.failOk};
					var _324 = dojo.xhrGet(_323);
					_324.addCallback(function (data) {
						try {
							self._getItemsFromLoadedData(data);
							self._loadFinished = true;
							self._loadInProgress = false;
							_31a(_317, self._getItemsArray(_317.queryOptions));
							self._handleQueuedFetches();
						} catch (e) {
							self._loadFinished = true;
							self._loadInProgress = false;
							_319(e, _317);
						}
					});
					_324.addErrback(function (_325) {
						self._loadInProgress = false;
						_319(_325, _317);
					});
					var _326 = null;
					if (_317.abort) {
						_326 = _317.abort;
					}
					_317.abort = function () {
						var df = _324;
						if (df && df.fired === -1) {
							df.cancel();
							df = null;
						}
						if (_326) {
							_326.call(_317);
						}
					};
				}
			} else {
				if (this._jsonData) {
					try {
						this._loadFinished = true;
						this._getItemsFromLoadedData(this._jsonData);
						this._jsonData = null;
						_31a(_317, this._getItemsArray(_317.queryOptions));
					} catch (e) {
						_319(e, _317);
					}
				} else {
					_319(new Error("dojo.data.ItemFileReadStore: No JSON source data was provided as either URL or a nested Javascript object."), _317);
				}
			}
		}
	}, _handleQueuedFetches: function () {
		if (this._queuedFetches.length > 0) {
			for (var i = 0; i < this._queuedFetches.length; i++) {
				var _327 = this._queuedFetches[i], _328 = _327.args, _329 = _327.filter;
				if (_329) {
					_329(_328, this._getItemsArray(_328.queryOptions));
				} else {
					this.fetchItemByIdentity(_328);
				}
			}
			this._queuedFetches = [];
		}
	}, _getItemsArray: function (_32a) {
		if (_32a && _32a.deep) {
			return this._arrayOfAllItems;
		}
		return this._arrayOfTopLevelItems;
	}, close: function (_32b) {
		if (this.clearOnClose && this._loadFinished && !this._loadInProgress) {
			if (((this._jsonFileUrl == "" || this._jsonFileUrl == null) && (this.url == "" || this.url == null)) && this.data == null) {
			}
			this._arrayOfAllItems = [];
			this._arrayOfTopLevelItems = [];
			this._loadFinished = false;
			this._itemsByIdentity = null;
			this._loadInProgress = false;
			this._queuedFetches = [];
		}
	}, _getItemsFromLoadedData: function (_32c) {
		var _32d = false, self = this;

		function _32e(_32f) {
			var _330 = ((_32f !== null) && (typeof _32f === "object") && (!dojo.isArray(_32f) || _32d) && (!dojo.isFunction(_32f)) && (_32f.constructor == Object || dojo.isArray(_32f)) && (typeof _32f._reference === "undefined") && (typeof _32f._type === "undefined") && (typeof _32f._value === "undefined") && self.hierarchical);
			return _330;
		};
		function _331(_332) {
			self._arrayOfAllItems.push(_332);
			for (var _333 in _332) {
				var _334 = _332[_333];
				if (_334) {
					if (dojo.isArray(_334)) {
						var _335 = _334;
						for (var k = 0; k < _335.length; ++k) {
							var _336 = _335[k];
							if (_32e(_336)) {
								_331(_336);
							}
						}
					} else {
						if (_32e(_334)) {
							_331(_334);
						}
					}
				}
			}
		};
		this._labelAttr = _32c.label;
		var i, item;
		this._arrayOfAllItems = [];
		this._arrayOfTopLevelItems = _32c.items;
		for (i = 0; i < this._arrayOfTopLevelItems.length; ++i) {
			item = this._arrayOfTopLevelItems[i];
			if (dojo.isArray(item)) {
				_32d = true;
			}
			_331(item);
			item[this._rootItemPropName] = true;
		}
		var _337 = {}, key;
		for (i = 0; i < this._arrayOfAllItems.length; ++i) {
			item = this._arrayOfAllItems[i];
			for (key in item) {
				if (key !== this._rootItemPropName) {
					var _338 = item[key];
					if (_338 !== null) {
						if (!dojo.isArray(_338)) {
							item[key] = [_338];
						}
					} else {
						item[key] = [null];
					}
				}
				_337[key] = key;
			}
		}
		while (_337[this._storeRefPropName]) {
			this._storeRefPropName += "_";
		}
		while (_337[this._itemNumPropName]) {
			this._itemNumPropName += "_";
		}
		while (_337[this._reverseRefMap]) {
			this._reverseRefMap += "_";
		}
		var _339;
		var _33a = _32c.identifier;
		if (_33a) {
			this._itemsByIdentity = {};
			this._features["dojo.data.api.Identity"] = _33a;
			for (i = 0; i < this._arrayOfAllItems.length; ++i) {
				item = this._arrayOfAllItems[i];
				_339 = item[_33a];
				var _33b = _339[0];
				if (!Object.hasOwnProperty.call(this._itemsByIdentity, _33b)) {
					this._itemsByIdentity[_33b] = item;
				} else {
					if (this._jsonFileUrl) {
						throw new Error("dojo.data.ItemFileReadStore:  The json data as specified by: [" + this._jsonFileUrl + "] is malformed.  Items within the list have identifier: [" + _33a + "].  Value collided: [" + _33b + "]");
					} else {
						if (this._jsonData) {
							throw new Error("dojo.data.ItemFileReadStore:  The json data provided by the creation arguments is malformed.  Items within the list have identifier: [" + _33a + "].  Value collided: [" + _33b + "]");
						}
					}
				}
			}
		} else {
			this._features["dojo.data.api.Identity"] = Number;
		}
		for (i = 0; i < this._arrayOfAllItems.length; ++i) {
			item = this._arrayOfAllItems[i];
			item[this._storeRefPropName] = this;
			item[this._itemNumPropName] = i;
		}
		for (i = 0; i < this._arrayOfAllItems.length; ++i) {
			item = this._arrayOfAllItems[i];
			for (key in item) {
				_339 = item[key];
				for (var j = 0; j < _339.length; ++j) {
					_338 = _339[j];
					if (_338 !== null && typeof _338 == "object") {
						if (("_type" in _338) && ("_value" in _338)) {
							var type = _338._type;
							var _33c = this._datatypeMap[type];
							if (!_33c) {
								throw new Error("dojo.data.ItemFileReadStore: in the typeMap constructor arg, no object class was specified for the datatype '" + type + "'");
							} else {
								if (dojo.isFunction(_33c)) {
									_339[j] = new _33c(_338._value);
								} else {
									if (dojo.isFunction(_33c.deserialize)) {
										_339[j] = _33c.deserialize(_338._value);
									} else {
										throw new Error("dojo.data.ItemFileReadStore: Value provided in typeMap was neither a constructor, nor a an object with a deserialize function");
									}
								}
							}
						}
						if (_338._reference) {
							var _33d = _338._reference;
							if (!dojo.isObject(_33d)) {
								_339[j] = this._getItemByIdentity(_33d);
							} else {
								for (var k = 0; k < this._arrayOfAllItems.length; ++k) {
									var _33e = this._arrayOfAllItems[k], _33f = true;
									for (var _340 in _33d) {
										if (_33e[_340] != _33d[_340]) {
											_33f = false;
										}
									}
									if (_33f) {
										_339[j] = _33e;
									}
								}
							}
							if (this.referenceIntegrity) {
								var _341 = _339[j];
								if (this.isItem(_341)) {
									this._addReferenceToMap(_341, item, key);
								}
							}
						} else {
							if (this.isItem(_338)) {
								if (this.referenceIntegrity) {
									this._addReferenceToMap(_338, item, key);
								}
							}
						}
					}
				}
			}
		}
	}, _addReferenceToMap: function (_342, _343, _344) {
	}, getIdentity: function (item) {
		var _345 = this._features["dojo.data.api.Identity"];
		if (_345 === Number) {
			return item[this._itemNumPropName];
		} else {
			var _346 = item[_345];
			if (_346) {
				return _346[0];
			}
		}
		return null;
	}, fetchItemByIdentity: function (_347) {
		var item, _348;
		if (!this._loadFinished) {
			var self = this;
			if (this._jsonFileUrl !== this._ccUrl) {
				dojo.deprecated("dojo.data.ItemFileReadStore: ", "To change the url, set the url property of the store," + " not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
				this._ccUrl = this._jsonFileUrl;
				this.url = this._jsonFileUrl;
			} else {
				if (this.url !== this._ccUrl) {
					this._jsonFileUrl = this.url;
					this._ccUrl = this.url;
				}
			}
			if (this.data != null && this._jsonData == null) {
				this._jsonData = this.data;
				this.data = null;
			}
			if (this._jsonFileUrl) {
				if (this._loadInProgress) {
					this._queuedFetches.push({args: _347});
				} else {
					this._loadInProgress = true;
					var _349 = {url: self._jsonFileUrl, handleAs: "json-comment-optional", preventCache: this.urlPreventCache, failOk: this.failOk};
					var _34a = dojo.xhrGet(_349);
					_34a.addCallback(function (data) {
						var _34b = _347.scope ? _347.scope : dojo.global;
						try {
							self._getItemsFromLoadedData(data);
							self._loadFinished = true;
							self._loadInProgress = false;
							item = self._getItemByIdentity(_347.identity);
							if (_347.onItem) {
								_347.onItem.call(_34b, item);
							}
							self._handleQueuedFetches();
						} catch (error) {
							self._loadInProgress = false;
							if (_347.onError) {
								_347.onError.call(_34b, error);
							}
						}
					});
					_34a.addErrback(function (_34c) {
						self._loadInProgress = false;
						if (_347.onError) {
							var _34d = _347.scope ? _347.scope : dojo.global;
							_347.onError.call(_34d, _34c);
						}
					});
				}
			} else {
				if (this._jsonData) {
					self._getItemsFromLoadedData(self._jsonData);
					self._jsonData = null;
					self._loadFinished = true;
					item = self._getItemByIdentity(_347.identity);
					if (_347.onItem) {
						_348 = _347.scope ? _347.scope : dojo.global;
						_347.onItem.call(_348, item);
					}
				}
			}
		} else {
			item = this._getItemByIdentity(_347.identity);
			if (_347.onItem) {
				_348 = _347.scope ? _347.scope : dojo.global;
				_347.onItem.call(_348, item);
			}
		}
	}, _getItemByIdentity: function (_34e) {
		var item = null;
		if (this._itemsByIdentity && Object.hasOwnProperty.call(this._itemsByIdentity, _34e)) {
			item = this._itemsByIdentity[_34e];
		} else {
			if (Object.hasOwnProperty.call(this._arrayOfAllItems, _34e)) {
				item = this._arrayOfAllItems[_34e];
			}
		}
		if (item === undefined) {
			item = null;
		}
		return item;
	}, getIdentityAttributes: function (item) {
		var _34f = this._features["dojo.data.api.Identity"];
		if (_34f === Number) {
			return null;
		} else {
			return [_34f];
		}
	}, _forceLoad: function () {
		var self = this;
		if (this._jsonFileUrl !== this._ccUrl) {
			dojo.deprecated("dojo.data.ItemFileReadStore: ", "To change the url, set the url property of the store," + " not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
			this._ccUrl = this._jsonFileUrl;
			this.url = this._jsonFileUrl;
		} else {
			if (this.url !== this._ccUrl) {
				this._jsonFileUrl = this.url;
				this._ccUrl = this.url;
			}
		}
		if (this.data != null) {
			this._jsonData = this.data;
			this.data = null;
		}
		if (this._jsonFileUrl) {
			var _350 = {url: this._jsonFileUrl, handleAs: "json-comment-optional", preventCache: this.urlPreventCache, failOk: this.failOk, sync: true};
			var _351 = dojo.xhrGet(_350);
			_351.addCallback(function (data) {
				try {
					if (self._loadInProgress !== true && !self._loadFinished) {
						self._getItemsFromLoadedData(data);
						self._loadFinished = true;
					} else {
						if (self._loadInProgress) {
							throw new Error("dojo.data.ItemFileReadStore:  Unable to perform a synchronous load, an async load is in progress.");
						}
					}
				} catch (e) {
					throw e;
				}
			});
			_351.addErrback(function (_352) {
				throw _352;
			});
		} else {
			if (this._jsonData) {
				self._getItemsFromLoadedData(self._jsonData);
				self._jsonData = null;
				self._loadFinished = true;
			}
		}
	}});
	dojo.extend(dojo.data.ItemFileReadStore, dojo.data.util.simpleFetch);
}
if (!dojo._hasResource["dijit._editor.plugins.FontChoice"]) {
	dojo._hasResource["dijit._editor.plugins.FontChoice"] = true;
	dojo.provide("dijit._editor.plugins.FontChoice");
	dojo.declare("dijit._editor.plugins._FontDropDown", [dijit._Widget, dijit._Templated], {label: "", widgetsInTemplate: true, plainText: false, templateString: "<span style='white-space: nowrap' class='dijit dijitReset dijitInline'>" + "<label class='dijitLeft dijitInline' for='${selectId}'>${label}</label>" + "<input dojoType='dijit.form.FilteringSelect' required='false' labelType='html' labelAttr='label' searchAttr='name' " + "tabIndex='-1' id='${selectId}' dojoAttachPoint='select' value=''/>" + "</span>", postMixInProperties: function () {
		this.inherited(arguments);
		this.strings = dojo.i18n.getLocalization("dijit._editor", "FontChoice");
		this.label = this.strings[this.command];
		this.id = dijit.getUniqueId(this.declaredClass.replace(/\./g, "_"));
		this.selectId = this.id + "_select";
		this.inherited(arguments);
	}, postCreate: function () {
		var _353 = dojo.map(this.values, function (_354) {
			var name = this.strings[_354] || _354;
			return {label: this.getLabel(_354, name), name: name, value: _354};
		}, this);
		this.select.store = new dojo.data.ItemFileReadStore({data: {identifier: "value", items: _353}});
		this.select.set("value", "", false);
		this.disabled = this.select.get("disabled");
	}, _setValueAttr: function (_355, _356) {
		_356 = _356 !== false ? true : false;
		this.select.set("value", dojo.indexOf(this.values, _355) < 0 ? "" : _355, _356);
		if (!_356) {
			this.select._lastValueReported = null;
		}
	}, _getValueAttr: function () {
		return this.select.get("value");
	}, focus: function () {
		this.select.focus();
	}, _setDisabledAttr: function (_357) {
		this.disabled = _357;
		this.select.set("disabled", _357);
	}});
	dojo.declare("dijit._editor.plugins._FontNameDropDown", dijit._editor.plugins._FontDropDown, {generic: false, command: "fontName", postMixInProperties: function () {
		if (!this.values) {
			this.values = this.generic ? ["serif", "sans-serif", "monospace", "cursive", "fantasy"] : ["Arial", "Times New Roman", "Comic Sans MS", "Courier New"];
		}
		this.inherited(arguments);
	}, getLabel: function (_358, name) {
		if (this.plainText) {
			return name;
		} else {
			return "<div style='font-family: " + _358 + "'>" + name + "</div>";
		}
	}, _setValueAttr: function (_359, _35a) {
		_35a = _35a !== false ? true : false;
		if (this.generic) {
			var map = {"Arial": "sans-serif", "Helvetica": "sans-serif", "Myriad": "sans-serif", "Times": "serif", "Times New Roman": "serif", "Comic Sans MS": "cursive", "Apple Chancery": "cursive", "Courier": "monospace", "Courier New": "monospace", "Papyrus": "fantasy"};
			_359 = map[_359] || _359;
		}
		this.inherited(arguments, [_359, _35a]);
	}});
	dojo.declare("dijit._editor.plugins._FontSizeDropDown", dijit._editor.plugins._FontDropDown, {command: "fontSize", values: [1, 2, 3, 4, 5, 6, 7], getLabel: function (_35b, name) {
		if (this.plainText) {
			return name;
		} else {
			return "<font size=" + _35b + "'>" + name + "</font>";
		}
	}, _setValueAttr: function (_35c, _35d) {
		_35d = _35d !== false ? true : false;
		if (_35c.indexOf && _35c.indexOf("px") != -1) {
			var _35e = parseInt(_35c, 10);
			_35c = {10: 1, 13: 2, 16: 3, 18: 4, 24: 5, 32: 6, 48: 7}[_35e] || _35c;
		}
		this.inherited(arguments, [_35c, _35d]);
	}});
	dojo.declare("dijit._editor.plugins._FormatBlockDropDown", dijit._editor.plugins._FontDropDown, {command: "formatBlock", values: ["noFormat", "p", "h1", "h2", "h3", "pre"], postCreate: function () {
		this.inherited(arguments);
		this.set("value", "noFormat", false);
	}, getLabel: function (_35f, name) {
		if (this.plainText || _35f == "noFormat") {
			return name;
		} else {
			return "<" + _35f + ">" + name + "</" + _35f + ">";
		}
	}, _execCommand: function (_360, _361, _362) {
		if (_362 === "noFormat") {
			var _363;
			var end;
			var sel = dijit.range.getSelection(_360.window);
			if (sel && sel.rangeCount > 0) {
				var _364 = sel.getRangeAt(0);
				var node, tag;
				if (_364) {
					_363 = _364.startContainer;
					end = _364.endContainer;
					while (_363 && _363 !== _360.editNode && _363 !== _360.document.body && _363.nodeType !== 1) {
						_363 = _363.parentNode;
					}
					while (end && end !== _360.editNode && end !== _360.document.body && end.nodeType !== 1) {
						end = end.parentNode;
					}
					var _365 = dojo.hitch(this, function (node, _366) {
						if (node.childNodes && node.childNodes.length) {
							var i;
							for (i = 0; i < node.childNodes.length; i++) {
								var c = node.childNodes[i];
								if (c.nodeType == 1) {
									if (dojo.withGlobal(_360.window, "inSelection", dijit._editor.selection, [c])) {
										var tag = c.tagName ? c.tagName.toLowerCase() : "";
										if (dojo.indexOf(this.values, tag) !== -1) {
											_366.push(c);
										}
										_365(c, _366);
									}
								}
							}
						}
					});
					var _367 = dojo.hitch(this, function (_368) {
						if (_368 && _368.length) {
							_360.beginEditing();
							while (_368.length) {
								this._removeFormat(_360, _368.pop());
							}
							_360.endEditing();
						}
					});
					var _369 = [];
					if (_363 == end) {
						var _36a;
						node = _363;
						while (node && node !== _360.editNode && node !== _360.document.body) {
							if (node.nodeType == 1) {
								tag = node.tagName ? node.tagName.toLowerCase() : "";
								if (dojo.indexOf(this.values, tag) !== -1) {
									_36a = node;
									break;
								}
							}
							node = node.parentNode;
						}
						_365(_363, _369);
						if (_36a) {
							_369 = [_36a].concat(_369);
						}
						_367(_369);
					} else {
						node = _363;
						while (dojo.withGlobal(_360.window, "inSelection", dijit._editor.selection, [node])) {
							if (node.nodeType == 1) {
								tag = node.tagName ? node.tagName.toLowerCase() : "";
								if (dojo.indexOf(this.values, tag) !== -1) {
									_369.push(node);
								}
								_365(node, _369);
							}
							node = node.nextSibling;
						}
						_367(_369);
					}
					_360.onDisplayChanged();
				}
			}
		} else {
			_360.execCommand(_361, _362);
		}
	}, _removeFormat: function (_36b, node) {
		if (_36b.customUndo) {
			while (node.firstChild) {
				dojo.place(node.firstChild, node, "before");
			}
			node.parentNode.removeChild(node);
		} else {
			dojo.withGlobal(_36b.window, "selectElementChildren", dijit._editor.selection, [node]);
			var html = dojo.withGlobal(_36b.window, "getSelectedHtml", dijit._editor.selection, [null]);
			dojo.withGlobal(_36b.window, "selectElement", dijit._editor.selection, [node]);
			_36b.execCommand("inserthtml", html || "");
		}
	}});
	dojo.declare("dijit._editor.plugins.FontChoice", dijit._editor._Plugin, {useDefaultCommand: false, _initButton: function () {
		var _36c = {fontName: dijit._editor.plugins._FontNameDropDown, fontSize: dijit._editor.plugins._FontSizeDropDown, formatBlock: dijit._editor.plugins._FormatBlockDropDown}[this.command], _36d = this.params;
		if (this.params.custom) {
			_36d.values = this.params.custom;
		}
		var _36e = this.editor;
		this.button = new _36c(dojo.delegate({dir: _36e.dir, lang: _36e.lang}, _36d));
		this.connect(this.button.select, "onChange", function (_36f) {
			this.editor.focus();
			if (this.command == "fontName" && _36f.indexOf(" ") != -1) {
				_36f = "'" + _36f + "'";
			}
			if (this.button._execCommand) {
				this.button._execCommand(this.editor, this.command, _36f);
			} else {
				this.editor.execCommand(this.command, _36f);
			}
		});
	}, updateState: function () {
		var _370 = this.editor;
		var _371 = this.command;
		if (!_370 || !_370.isLoaded || !_371.length) {
			return;
		}
		if (this.button) {
			var _372 = this.get("disabled");
			this.button.set("disabled", _372);
			if (_372) {
				return;
			}
			var _373;
			try {
				_373 = _370.queryCommandValue(_371) || "";
			} catch (e) {
				_373 = "";
			}
			var _374 = dojo.isString(_373) && _373.match(/'([^']*)'/);
			if (_374) {
				_373 = _374[1];
			}
			if (_371 === "formatBlock") {
				if (!_373 || _373 == "p") {
					_373 = null;
					var elem;
					var sel = dijit.range.getSelection(this.editor.window);
					if (sel && sel.rangeCount > 0) {
						var _375 = sel.getRangeAt(0);
						if (_375) {
							elem = _375.endContainer;
						}
					}
					while (elem && elem !== _370.editNode && elem !== _370.document) {
						var tg = elem.tagName ? elem.tagName.toLowerCase() : "";
						if (tg && dojo.indexOf(this.button.values, tg) > -1) {
							_373 = tg;
							break;
						}
						elem = elem.parentNode;
					}
					if (!_373) {
						_373 = "noFormat";
					}
				} else {
					if (dojo.indexOf(this.button.values, _373) < 0) {
						_373 = "noFormat";
					}
				}
			}
			if (_373 !== this.button.get("value")) {
				this.button.set("value", _373, false);
			}
		}
	}});
	dojo.subscribe(dijit._scopeName + ".Editor.getPlugin", null, function (o) {
		if (o.plugin) {
			return;
		}
		switch (o.args.name) {
			case "fontName":
			case "fontSize":
			case "formatBlock":
				o.plugin = new dijit._editor.plugins.FontChoice({command: o.args.name, plainText: o.args.plainText ? o.args.plainText : false});
		}
	});
}
if (!dojo._hasResource["dijit.form.DropDownButton"]) {
	dojo._hasResource["dijit.form.DropDownButton"] = true;
	dojo.provide("dijit.form.DropDownButton");
}
if (!dojo._hasResource["dijit.form._FormSelectWidget"]) {
	dojo._hasResource["dijit.form._FormSelectWidget"] = true;
	dojo.provide("dijit.form._FormSelectWidget");
	dojo.declare("dijit.form._FormSelectWidget", dijit.form._FormValueWidget, {multiple: false, options: null, store: null, query: null, queryOptions: null, onFetch: null, sortByLabel: true, loadChildrenOnOpen: false, getOptions: function (_376) {
		var _377 = _376, opts = this.options || [], l = opts.length;
		if (_377 === undefined) {
			return opts;
		}
		if (dojo.isArray(_377)) {
			return dojo.map(_377, "return this.getOptions(item);", this);
		}
		if (dojo.isObject(_376)) {
			if (!dojo.some(this.options, function (o, idx) {
				if (o === _377 || (o.value && o.value === _377.value)) {
					_377 = idx;
					return true;
				}
				return false;
			})) {
				_377 = -1;
			}
		}
		if (typeof _377 == "string") {
			for (var i = 0; i < l; i++) {
				if (opts[i].value === _377) {
					_377 = i;
					break;
				}
			}
		}
		if (typeof _377 == "number" && _377 >= 0 && _377 < l) {
			return this.options[_377];
		}
		return null;
	}, addOption: function (_378) {
		if (!dojo.isArray(_378)) {
			_378 = [_378];
		}
		dojo.forEach(_378, function (i) {
			if (i && dojo.isObject(i)) {
				this.options.push(i);
			}
		}, this);
		this._loadChildren();
	}, removeOption: function (_379) {
		if (!dojo.isArray(_379)) {
			_379 = [_379];
		}
		var _37a = this.getOptions(_379);
		dojo.forEach(_37a, function (i) {
			if (i) {
				this.options = dojo.filter(this.options, function (node, idx) {
					return (node.value !== i.value || node.label !== i.label);
				});
				this._removeOptionItem(i);
			}
		}, this);
		this._loadChildren();
	}, updateOption: function (_37b) {
		if (!dojo.isArray(_37b)) {
			_37b = [_37b];
		}
		dojo.forEach(_37b, function (i) {
			var _37c = this.getOptions(i), k;
			if (_37c) {
				for (k in i) {
					_37c[k] = i[k];
				}
			}
		}, this);
		this._loadChildren();
	}, setStore: function (_37d, _37e, _37f) {
		var _380 = this.store;
		_37f = _37f || {};
		if (_380 !== _37d) {
			dojo.forEach(this._notifyConnections || [], dojo.disconnect);
			delete this._notifyConnections;
			if (_37d && _37d.getFeatures()["dojo.data.api.Notification"]) {
				this._notifyConnections = [dojo.connect(_37d, "onNew", this, "_onNewItem"), dojo.connect(_37d, "onDelete", this, "_onDeleteItem"), dojo.connect(_37d, "onSet", this, "_onSetItem")];
			}
			this._set("store", _37d);
		}
		this._onChangeActive = false;
		if (this.options && this.options.length) {
			this.removeOption(this.options);
		}
		if (_37d) {
			this._loadingStore = true;
			_37d.fetch(dojo.delegate(_37f, {onComplete: function (_381, opts) {
				if (this.sortByLabel && !_37f.sort && _381.length) {
					_381.sort(dojo.data.util.sorter.createSortFunction([
						{attribute: _37d.getLabelAttributes(_381[0])[0]}
					], _37d));
				}
				if (_37f.onFetch) {
					_381 = _37f.onFetch.call(this, _381, opts);
				}
				dojo.forEach(_381, function (i) {
					this._addOptionForItem(i);
				}, this);
				this._loadingStore = false;
				this.set("value", "_pendingValue" in this ? this._pendingValue : _37e);
				delete this._pendingValue;
				if (!this.loadChildrenOnOpen) {
					this._loadChildren();
				} else {
					this._pseudoLoadChildren(_381);
				}
				this._fetchedWith = opts;
				this._lastValueReported = this.multiple ? [] : null;
				this._onChangeActive = true;
				this.onSetStore();
				this._handleOnChange(this.value);
			}, scope: this}));
		} else {
			delete this._fetchedWith;
		}
		return _380;
	}, _setValueAttr: function (_382, _383) {
		if (this._loadingStore) {
			this._pendingValue = _382;
			return;
		}
		var opts = this.getOptions() || [];
		if (!dojo.isArray(_382)) {
			_382 = [_382];
		}
		dojo.forEach(_382, function (i, idx) {
			if (!dojo.isObject(i)) {
				i = i + "";
			}
			if (typeof i === "string") {
				_382[idx] = dojo.filter(opts, function (node) {
					return node.value === i;
				})[0] || {value: "", label: ""};
			}
		}, this);
		_382 = dojo.filter(_382, function (i) {
			return i && i.value;
		});
		if (!this.multiple && (!_382[0] || !_382[0].value) && opts.length) {
			_382[0] = opts[0];
		}
		dojo.forEach(opts, function (i) {
			i.selected = dojo.some(_382, function (v) {
				return v.value === i.value;
			});
		});
		var val = dojo.map(_382, function (i) {
			return i.value;
		}), disp = dojo.map(_382, function (i) {
			return i.label;
		});
		this._set("value", this.multiple ? val : val[0]);
		this._setDisplay(this.multiple ? disp : disp[0]);
		this._updateSelection();
		this._handleOnChange(this.value, _383);
	}, _getDisplayedValueAttr: function () {
		var val = this.get("value");
		if (!dojo.isArray(val)) {
			val = [val];
		}
		var ret = dojo.map(this.getOptions(val), function (v) {
			if (v && "label" in v) {
				return v.label;
			} else {
				if (v) {
					return v.value;
				}
			}
			return null;
		}, this);
		return this.multiple ? ret : ret[0];
	}, _loadChildren: function () {
		if (this._loadingStore) {
			return;
		}
		dojo.forEach(this._getChildren(), function (_384) {
			_384.destroyRecursive();
		});
		dojo.forEach(this.options, this._addOptionItem, this);
		this._updateSelection();
	}, _updateSelection: function () {
		this._set("value", this._getValueFromOpts());
		var val = this.value;
		if (!dojo.isArray(val)) {
			val = [val];
		}
		if (val && val[0]) {
			dojo.forEach(this._getChildren(), function (_385) {
				var _386 = dojo.some(val, function (v) {
					return _385.option && (v === _385.option.value);
				});
				dojo.toggleClass(_385.domNode, this.baseClass + "SelectedOption", _386);
				dijit.setWaiState(_385.domNode, "selected", _386);
			}, this);
		}
	}, _getValueFromOpts: function () {
		var opts = this.getOptions() || [];
		if (!this.multiple && opts.length) {
			var opt = dojo.filter(opts, function (i) {
				return i.selected;
			})[0];
			if (opt && opt.value) {
				return opt.value;
			} else {
				opts[0].selected = true;
				return opts[0].value;
			}
		} else {
			if (this.multiple) {
				return dojo.map(dojo.filter(opts, function (i) {
					return i.selected;
				}), function (i) {
					return i.value;
				}) || [];
			}
		}
		return "";
	}, _onNewItem: function (item, _387) {
		if (!_387 || !_387.parent) {
			this._addOptionForItem(item);
		}
	}, _onDeleteItem: function (item) {
		var _388 = this.store;
		this.removeOption(_388.getIdentity(item));
	}, _onSetItem: function (item) {
		this.updateOption(this._getOptionObjForItem(item));
	}, _getOptionObjForItem: function (item) {
		var _389 = this.store, _38a = _389.getLabel(item), _38b = (_38a ? _389.getIdentity(item) : null);
		return {value: _38b, label: _38a, item: item};
	}, _addOptionForItem: function (item) {
		var _38c = this.store;
		if (!_38c.isItemLoaded(item)) {
			_38c.loadItem({item: item, onComplete: function (i) {
				this._addOptionForItem(item);
			}, scope: this});
			return;
		}
		var _38d = this._getOptionObjForItem(item);
		this.addOption(_38d);
	}, constructor: function (_38e) {
		this._oValue = (_38e || {}).value || null;
	}, buildRendering: function () {
		this.inherited(arguments);
		dojo.setSelectable(this.focusNode, false);
	}, _fillContent: function () {
		var opts = this.options;
		if (!opts) {
			opts = this.options = this.srcNodeRef ? dojo.query(">", this.srcNodeRef).map(function (node) {
				if (node.getAttribute("type") === "separator") {
					return {value: "", label: "", selected: false, disabled: false};
				}
				return {value: (node.getAttribute("data-" + dojo._scopeName + "-value") || node.getAttribute("value")), label: String(node.innerHTML), selected: node.getAttribute("selected") || false, disabled: node.getAttribute("disabled") || false};
			}, this) : [];
		}
		if (!this.value) {
			this._set("value", this._getValueFromOpts());
		} else {
			if (this.multiple && typeof this.value == "string") {
				this_set("value", this.value.split(","));
			}
		}
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this, "onChange", "_updateSelection");
		this.connect(this, "startup", "_loadChildren");
		this._setValueAttr(this.value, null);
	}, startup: function () {
		this.inherited(arguments);
		var _38f = this.store, _390 = {};
		dojo.forEach(["query", "queryOptions", "onFetch"], function (i) {
			if (this[i]) {
				_390[i] = this[i];
			}
			delete this[i];
		}, this);
		if (_38f && _38f.getFeatures()["dojo.data.api.Identity"]) {
			this.store = null;
			this.setStore(_38f, this._oValue, _390);
		}
	}, destroy: function () {
		dojo.forEach(this._notifyConnections || [], dojo.disconnect);
		this.inherited(arguments);
	}, _addOptionItem: function (_391) {
	}, _removeOptionItem: function (_392) {
	}, _setDisplay: function (_393) {
	}, _getChildren: function () {
		return [];
	}, _getSelectedOptionsAttr: function () {
		return this.getOptions(this.get("value"));
	}, _pseudoLoadChildren: function (_394) {
	}, onSetStore: function () {
	}});
}
if (!dojo._hasResource["dijit.MenuItem"]) {
	dojo._hasResource["dijit.MenuItem"] = true;
	dojo.provide("dijit.MenuItem");
	dojo.declare("dijit.MenuItem", [dijit._Widget, dijit._Templated, dijit._Contained, dijit._CssStateMixin], {templateString: dojo.cache("dijit", "templates/MenuItem.html", "<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" role=\"menuitem\" tabIndex=\"-1\"\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitIcon dijitMenuItemIcon\" dojoAttachPoint=\"iconNode\"/>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">\n\t\t<div dojoAttachPoint=\"arrowWrapper\" style=\"visibility: hidden\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuExpand\"/>\n\t\t\t<span class=\"dijitMenuExpandA11y\">+</span>\n\t\t</div>\n\t</td>\n</tr>\n"), attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {label: {node: "containerNode", type: "innerHTML"}, iconClass: {node: "iconNode", type: "class"}}), baseClass: "dijitMenuItem", label: "", iconClass: "", accelKey: "", disabled: false, _fillContent: function (_395) {
		if (_395 && !("label" in this.params)) {
			this.set("label", _395.innerHTML);
		}
	}, buildRendering: function () {
		this.inherited(arguments);
		var _396 = this.id + "_text";
		dojo.attr(this.containerNode, "id", _396);
		if (this.accelKeyNode) {
			dojo.attr(this.accelKeyNode, "id", this.id + "_accel");
			_396 += " " + this.id + "_accel";
		}
		dijit.setWaiState(this.domNode, "labelledby", _396);
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
	}, _setSelected: function (_397) {
		dojo.toggleClass(this.domNode, "dijitMenuItemSelected", _397);
	}, setLabel: function (_398) {
		dojo.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
		this.set("label", _398);
	}, setDisabled: function (_399) {
		dojo.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
		this.set("disabled", _399);
	}, _setDisabledAttr: function (_39a) {
		dijit.setWaiState(this.focusNode, "disabled", _39a ? "true" : "false");
		this._set("disabled", _39a);
	}, _setAccelKeyAttr: function (_39b) {
		this.accelKeyNode.style.display = _39b ? "" : "none";
		this.accelKeyNode.innerHTML = _39b;
		dojo.attr(this.containerNode, "colSpan", _39b ? "1" : "2");
		this._set("accelKey", _39b);
	}});
}
if (!dojo._hasResource["dijit.PopupMenuItem"]) {
	dojo._hasResource["dijit.PopupMenuItem"] = true;
	dojo.provide("dijit.PopupMenuItem");
	dojo.declare("dijit.PopupMenuItem", dijit.MenuItem, {_fillContent: function () {
		if (this.srcNodeRef) {
			var _39c = dojo.query("*", this.srcNodeRef);
			dijit.PopupMenuItem.superclass._fillContent.call(this, _39c[0]);
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
	dojo.declare("dijit.CheckedMenuItem", dijit.MenuItem, {templateString: dojo.cache("dijit", "templates/CheckedMenuItem.html", "<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" role=\"menuitemcheckbox\" tabIndex=\"-1\"\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon dijitCheckedMenuItemIcon\" dojoAttachPoint=\"iconNode\"/>\n\t\t<span class=\"dijitCheckedMenuItemIconChar\">&#10003;</span>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode,labelNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">&nbsp;</td>\n</tr>\n"), checked: false, _setCheckedAttr: function (_39d) {
		dojo.toggleClass(this.domNode, "dijitCheckedMenuItemChecked", _39d);
		dijit.setWaiState(this.domNode, "checked", _39d);
		this._set("checked", _39d);
	}, onChange: function (_39e) {
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
		dojo.forEach(this.getChildren(), function (_39f) {
			_39f.startup();
		});
		this.startupKeyNavChildren();
		this.inherited(arguments);
	}, onExecute: function () {
	}, onCancel: function (_3a0) {
	}, _moveToPopup: function (evt) {
		if (this.focusedChild && this.focusedChild.popup && !this.focusedChild.disabled) {
			this.focusedChild._onClick(evt);
		} else {
			var _3a1 = this._getTopMenu();
			if (_3a1 && _3a1._isMenuBar) {
				_3a1.focusNext();
			}
		}
	}, _onPopupHover: function (evt) {
		if (this.currentPopup && this.currentPopup._pendingClose_timer) {
			var _3a2 = this.currentPopup.parentMenu;
			if (_3a2.focusedChild) {
				_3a2.focusedChild._setSelected(false);
			}
			_3a2.focusedChild = this.currentPopup.from_item;
			_3a2.focusedChild._setSelected(true);
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
		var _3a3 = item.popup;
		if (_3a3) {
			this._stopPendingCloseTimer(_3a3);
			_3a3._pendingClose_timer = setTimeout(function () {
				_3a3._pendingClose_timer = null;
				if (_3a3.parentMenu) {
					_3a3.parentMenu.currentPopup = null;
				}
				dijit.popup.close(_3a3);
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
	}, _stopPendingCloseTimer: function (_3a4) {
		if (_3a4._pendingClose_timer) {
			clearTimeout(_3a4._pendingClose_timer);
			_3a4._pendingClose_timer = null;
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
		var _3a5 = this.focusedChild;
		if (!_3a5) {
			return;
		}
		var _3a6 = _3a5.popup;
		if (_3a6.isShowingNow) {
			return;
		}
		if (this.currentPopup) {
			this._stopPendingCloseTimer(this.currentPopup);
			dijit.popup.close(this.currentPopup);
		}
		_3a6.parentMenu = this;
		_3a6.from_item = _3a5;
		var self = this;
		dijit.popup.open({parent: this, popup: _3a6, around: _3a5.domNode, orient: this._orient || (this.isLeftToRight() ? {"TR": "TL", "TL": "TR", "BR": "BL", "BL": "BR"} : {"TL": "TR", "TR": "TL", "BL": "BR", "BR": "BL"}), onCancel: function () {
			self.focusChild(_3a5);
			self._cleanUp();
			_3a5._setSelected(true);
			self.focusedChild = _3a5;
		}, onExecute: dojo.hitch(this, "_cleanUp")});
		this.currentPopup = _3a6;
		_3a6.connect(_3a6.domNode, "onmouseenter", dojo.hitch(self, "_onPopupHover"));
		if (_3a6.focus) {
			_3a6._focus_timer = setTimeout(dojo.hitch(_3a6, function () {
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
		var _3a7 = this.focusedChild && this.focusedChild.from_item;
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
	}, _iframeContentWindow: function (_3a8) {
		var win = dojo.window.get(this._iframeContentDocument(_3a8)) || this._iframeContentDocument(_3a8)["__parent__"] || (_3a8.name && dojo.doc.frames[_3a8.name]) || null;
		return win;
	}, _iframeContentDocument: function (_3a9) {
		var doc = _3a9.contentDocument || (_3a9.contentWindow && _3a9.contentWindow.document) || (_3a9.name && dojo.doc.frames[_3a9.name] && dojo.doc.frames[_3a9.name].document) || null;
		return doc;
	}, bindDomNode: function (node) {
		node = dojo.byId(node);
		var cn;
		if (node.tagName.toLowerCase() == "iframe") {
			var _3aa = node, win = this._iframeContentWindow(_3aa);
			cn = dojo.withGlobal(win, dojo.body);
		} else {
			cn = (node == dojo.body() ? dojo.doc.documentElement : node);
		}
		var _3ab = {node: node, iframe: _3aa};
		dojo.attr(node, "_dijitMenu" + this.id, this._bindings.push(_3ab));
		var _3ac = dojo.hitch(this, function (cn) {
			return [dojo.connect(cn, this.leftClickToOpen ? "onclick" : "oncontextmenu", this, function (evt) {
				dojo.stopEvent(evt);
				this._scheduleOpen(evt.target, _3aa, {x: evt.pageX, y: evt.pageY});
			}), dojo.connect(cn, "onkeydown", this, function (evt) {
				if (evt.shiftKey && evt.keyCode == dojo.keys.F10) {
					dojo.stopEvent(evt);
					this._scheduleOpen(evt.target, _3aa);
				}
			})];
		});
		_3ab.connects = cn ? _3ac(cn) : [];
		if (_3aa) {
			_3ab.onloadHandler = dojo.hitch(this, function () {
				var win = this._iframeContentWindow(_3aa);
				cn = dojo.withGlobal(win, dojo.body);
				_3ab.connects = _3ac(cn);
			});
			if (_3aa.addEventListener) {
				_3aa.addEventListener("load", _3ab.onloadHandler, false);
			} else {
				_3aa.attachEvent("onload", _3ab.onloadHandler);
			}
		}
	}, unBindDomNode: function (_3ad) {
		var node;
		try {
			node = dojo.byId(_3ad);
		} catch (e) {
			return;
		}
		var _3ae = "_dijitMenu" + this.id;
		if (node && dojo.hasAttr(node, _3ae)) {
			var bid = dojo.attr(node, _3ae) - 1, b = this._bindings[bid];
			dojo.forEach(b.connects, dojo.disconnect);
			var _3af = b.iframe;
			if (_3af) {
				if (_3af.removeEventListener) {
					_3af.removeEventListener("load", b.onloadHandler, false);
				} else {
					_3af.detachEvent("onload", b.onloadHandler);
				}
			}
			dojo.removeAttr(node, _3ae);
			delete this._bindings[bid];
		}
	}, _scheduleOpen: function (_3b0, _3b1, _3b2) {
		if (!this._openTimer) {
			this._openTimer = setTimeout(dojo.hitch(this, function () {
				delete this._openTimer;
				this._openMyself({target: _3b0, iframe: _3b1, coords: _3b2});
			}), 1);
		}
	}, _openMyself: function (args) {
		var _3b3 = args.target, _3b4 = args.iframe, _3b5 = args.coords;
		if (_3b5) {
			if (_3b4) {
				var od = _3b3.ownerDocument, ifc = dojo.position(_3b4, true), win = this._iframeContentWindow(_3b4), _3b6 = dojo.withGlobal(win, "_docScroll", dojo);
				var cs = dojo.getComputedStyle(_3b4), tp = dojo._toPixelValue, left = (dojo.isIE && dojo.isQuirks ? 0 : tp(_3b4, cs.paddingLeft)) + (dojo.isIE && dojo.isQuirks ? tp(_3b4, cs.borderLeftWidth) : 0), top = (dojo.isIE && dojo.isQuirks ? 0 : tp(_3b4, cs.paddingTop)) + (dojo.isIE && dojo.isQuirks ? tp(_3b4, cs.borderTopWidth) : 0);
				_3b5.x += ifc.x + left - _3b6.x;
				_3b5.y += ifc.y + top - _3b6.y;
			}
		} else {
			_3b5 = dojo.position(_3b3, true);
			_3b5.x += 10;
			_3b5.y += 10;
		}
		var self = this;
		var _3b7 = dijit.getFocus(this);

		function _3b8() {
			if (self.refocus) {
				dijit.focus(_3b7);
			}
			dijit.popup.close(self);
		};
		dijit.popup.open({popup: this, x: _3b5.x, y: _3b5.y, onExecute: _3b8, onCancel: _3b8, orient: this.isLeftToRight() ? "L" : "R"});
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
if (!dojo._hasResource["dijit.form.Select"]) {
	dojo._hasResource["dijit.form.Select"] = true;
	dojo.provide("dijit.form.Select");
	dojo.declare("dijit.form._SelectMenu", dijit.Menu, {buildRendering: function () {
		this.inherited(arguments);
		var o = (this.menuTableNode = this.domNode);
		var n = (this.domNode = dojo.create("div", {style: {overflowX: "hidden", overflowY: "scroll"}}));
		if (o.parentNode) {
			o.parentNode.replaceChild(n, o);
		}
		dojo.removeClass(o, "dijitMenuTable");
		n.className = o.className + " dijitSelectMenu";
		o.className = "dijitReset dijitMenuTable";
		dijit.setWaiRole(o, "listbox");
		dijit.setWaiRole(n, "presentation");
		n.appendChild(o);
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this.domNode, "onmousemove", dojo.stopEvent);
	}, resize: function (mb) {
		if (mb) {
			dojo.marginBox(this.domNode, mb);
			if ("w" in mb) {
				this.menuTableNode.style.width = "100%";
			}
		}
	}});
	dojo.declare("dijit.form.Select", [dijit.form._FormSelectWidget, dijit._HasDropDown], {baseClass: "dijitSelect", templateString: dojo.cache("dijit.form", "templates/Select.html", "<table class=\"dijit dijitReset dijitInline dijitLeft\"\n\tdojoAttachPoint=\"_buttonNode,tableNode,focusNode\" cellspacing='0' cellpadding='0'\n\trole=\"combobox\" aria-haspopup=\"true\"\n\t><tbody role=\"presentation\"><tr role=\"presentation\"\n\t\t><td class=\"dijitReset dijitStretch dijitButtonContents dijitButtonNode\" role=\"presentation\"\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"  dojoAttachPoint=\"containerNode,_popupStateNode\"></span\n\t\t\t><input type=\"hidden\" ${!nameAttrSetting} dojoAttachPoint=\"valueNode\" value=\"${value}\" aria-hidden=\"true\"\n\t\t/></td><td class=\"dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton\"\n\t\t\t\tdojoAttachPoint=\"titleNode\" role=\"presentation\"\n\t\t\t><div class=\"dijitReset dijitArrowButtonInner\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitArrowButtonChar\" role=\"presentation\">&#9660;</div\n\t\t></td\n\t></tr></tbody\n></table>\n"), attributeMap: dojo.mixin(dojo.clone(dijit.form._FormSelectWidget.prototype.attributeMap), {style: "tableNode"}), required: false, state: "", message: "", tooltipPosition: [], emptyLabel: "&nbsp;", _isLoaded: false, _childrenLoaded: false, _fillContent: function () {
		this.inherited(arguments);
		if (this.options.length && !this.value && this.srcNodeRef) {
			var si = this.srcNodeRef.selectedIndex || 0;
			this.value = this.options[si >= 0 ? si : 0].value;
		}
		this.dropDown = new dijit.form._SelectMenu({id: this.id + "_menu"});
		dojo.addClass(this.dropDown.domNode, this.baseClass + "Menu");
	}, _getMenuItemForOption: function (_3b9) {
		if (!_3b9.value && !_3b9.label) {
			return new dijit.MenuSeparator();
		} else {
			var _3ba = dojo.hitch(this, "_setValueAttr", _3b9);
			var item = new dijit.MenuItem({option: _3b9, label: _3b9.label || this.emptyLabel, onClick: _3ba, disabled: _3b9.disabled || false});
			dijit.setWaiRole(item.focusNode, "listitem");
			return item;
		}
	}, _addOptionItem: function (_3bb) {
		if (this.dropDown) {
			this.dropDown.addChild(this._getMenuItemForOption(_3bb));
		}
	}, _getChildren: function () {
		if (!this.dropDown) {
			return [];
		}
		return this.dropDown.getChildren();
	}, _loadChildren: function (_3bc) {
		if (_3bc === true) {
			if (this.dropDown) {
				delete this.dropDown.focusedChild;
			}
			if (this.options.length) {
				this.inherited(arguments);
			} else {
				dojo.forEach(this._getChildren(), function (_3bd) {
					_3bd.destroyRecursive();
				});
				var item = new dijit.MenuItem({label: "&nbsp;"});
				this.dropDown.addChild(item);
			}
		} else {
			this._updateSelection();
		}
		this._isLoaded = false;
		this._childrenLoaded = true;
		if (!this._loadingStore) {
			this._setValueAttr(this.value);
		}
	}, _setValueAttr: function (_3be) {
		this.inherited(arguments);
		dojo.attr(this.valueNode, "value", this.get("value"));
	}, _setDisplay: function (_3bf) {
		var lbl = _3bf || this.emptyLabel;
		this.containerNode.innerHTML = "<span class=\"dijitReset dijitInline " + this.baseClass + "Label\">" + lbl + "</span>";
		dijit.setWaiState(this.focusNode, "valuetext", lbl);
	}, validate: function (_3c0) {
		var _3c1 = this.isValid(_3c0);
		this._set("state", _3c1 ? "" : "Error");
		dijit.setWaiState(this.focusNode, "invalid", _3c1 ? "false" : "true");
		var _3c2 = _3c1 ? "" : this._missingMsg;
		if (this.message !== _3c2) {
			this._set("message", _3c2);
			dijit.hideTooltip(this.domNode);
			if (_3c2) {
				dijit.showTooltip(_3c2, this.domNode, this.tooltipPosition, !this.isLeftToRight());
			}
		}
		return _3c1;
	}, isValid: function (_3c3) {
		return (!this.required || this.value === 0 || !(/^\s*$/.test(this.value || "")));
	}, reset: function () {
		this.inherited(arguments);
		dijit.hideTooltip(this.domNode);
		this._set("state", "");
		this._set("message", "");
	}, postMixInProperties: function () {
		this.inherited(arguments);
		this._missingMsg = dojo.i18n.getLocalization("dijit.form", "validate", this.lang).missingMessage;
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this.domNode, "onmousemove", dojo.stopEvent);
	}, _setStyleAttr: function (_3c4) {
		this.inherited(arguments);
		dojo.toggleClass(this.domNode, this.baseClass + "FixedWidth", !!this.tableNode.style.width);
	}, isLoaded: function () {
		return this._isLoaded;
	}, loadDropDown: function (_3c5) {
		this._loadChildren(true);
		this._isLoaded = true;
		_3c5();
	}, closeDropDown: function () {
		this.inherited(arguments);
		if (this.dropDown && this.dropDown.menuTableNode) {
			this.dropDown.menuTableNode.style.width = "";
		}
	}, uninitialize: function (_3c6) {
		if (this.dropDown && !this.dropDown._destroyed) {
			this.dropDown.destroyRecursive(_3c6);
			delete this.dropDown;
		}
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit._editor.plugins.LinkDialog"]) {
	dojo._hasResource["dijit._editor.plugins.LinkDialog"] = true;
	dojo.provide("dijit._editor.plugins.LinkDialog");
	dojo.declare("dijit._editor.plugins.LinkDialog", dijit._editor._Plugin, {buttonClass: dijit.form.DropDownButton, useDefaultCommand: false, urlRegExp: "((https?|ftps?|file)\\://|./|/|)(/[a-zA-Z]{1,1}:/|)(((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)*(?:[a-zA-Z](?:[-\\da-zA-Z]{0,80}[\\da-zA-Z])?)\\.?)|(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])|(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]|(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]|(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])|0[xX]0*[\\da-fA-F]{1,8}|([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}|([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))(\\:\\d+)?(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]{0,}(?:\\?[^?#\\s/]*)?(?:#.*)?)?)?", emailRegExp: "<?(mailto\\:)([!#-'*+\\-\\/-9=?A-Z^-~]+[.])*[!#-'*+\\-\\/-9=?A-Z^-~]+" + "@" + "((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)+(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)\\.?)|localhost|^[^-][a-zA-Z0-9_-]*>?", htmlTemplate: "<a href=\"${urlInput}\" _djrealurl=\"${urlInput}\"" + " target=\"${targetSelect}\"" + ">${textInput}</a>", tag: "a", _hostRxp: new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"), _userAtRxp: new RegExp("^([!#-'*+\\-\\/-9=?A-Z^-~]+[.])*[!#-'*+\\-\\/-9=?A-Z^-~]+@", "i"), linkDialogTemplate: ["<table><tr><td>", "<label for='${id}_urlInput'>${url}</label>", "</td><td>", "<input dojoType='dijit.form.ValidationTextBox' required='true' " + "id='${id}_urlInput' name='urlInput' intermediateChanges='true'/>", "</td></tr><tr><td>", "<label for='${id}_textInput'>${text}</label>", "</td><td>", "<input dojoType='dijit.form.ValidationTextBox' required='true' id='${id}_textInput' " + "name='textInput' intermediateChanges='true'/>", "</td></tr><tr><td>", "<label for='${id}_targetSelect'>${target}</label>", "</td><td>", "<select id='${id}_targetSelect' name='targetSelect' dojoType='dijit.form.Select'>", "<option selected='selected' value='_self'>${currentWindow}</option>", "<option value='_blank'>${newWindow}</option>", "<option value='_top'>${topWindow}</option>", "<option value='_parent'>${parentWindow}</option>", "</select>", "</td></tr><tr><td colspan='2'>", "<button dojoType='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>", "<button dojoType='dijit.form.Button' type='button' id='${id}_cancelButton'>${buttonCancel}</button>", "</td></tr></table>"].join(""), _initButton: function () {
		var _3c7 = this;
		this.tag = this.command == "insertImage" ? "img" : "a";
		var _3c8 = dojo.mixin(dojo.i18n.getLocalization("dijit", "common", this.lang), dojo.i18n.getLocalization("dijit._editor", "LinkDialog", this.lang));
		var _3c9 = (this.dropDown = new dijit.TooltipDialog({title: _3c8[this.command + "Title"], execute: dojo.hitch(this, "setValue"), onOpen: function () {
			_3c7._onOpenDialog();
			dijit.TooltipDialog.prototype.onOpen.apply(this, arguments);
		}, onCancel: function () {
			setTimeout(dojo.hitch(_3c7, "_onCloseDialog"), 0);
		}}));
		_3c8.urlRegExp = this.urlRegExp;
		_3c8.id = dijit.getUniqueId(this.editor.id);
		this._uniqueId = _3c8.id;
		this._setContent(_3c9.title + "<div style='border-bottom: 1px black solid;padding-bottom:2pt;margin-bottom:4pt'></div>" + dojo.string.substitute(this.linkDialogTemplate, _3c8));
		_3c9.startup();
		this._urlInput = dijit.byId(this._uniqueId + "_urlInput");
		this._textInput = dijit.byId(this._uniqueId + "_textInput");
		this._setButton = dijit.byId(this._uniqueId + "_setButton");
		this.connect(dijit.byId(this._uniqueId + "_cancelButton"), "onClick", function () {
			this.dropDown.onCancel();
		});
		if (this._urlInput) {
			this.connect(this._urlInput, "onChange", "_checkAndFixInput");
		}
		if (this._textInput) {
			this.connect(this._textInput, "onChange", "_checkAndFixInput");
		}
		this._urlRegExp = new RegExp("^" + this.urlRegExp + "$", "i");
		this._emailRegExp = new RegExp("^" + this.emailRegExp + "$", "i");
		this._urlInput.isValid = dojo.hitch(this, function () {
			var _3ca = this._urlInput.get("value");
			return this._urlRegExp.test(_3ca) || this._emailRegExp.test(_3ca);
		});
		this._connectTagEvents();
		this.inherited(arguments);
	}, _checkAndFixInput: function () {
		var self = this;
		var url = this._urlInput.get("value");
		var _3cb = function (url) {
			var _3cc = false;
			var _3cd = false;
			if (url && url.length > 1) {
				url = dojo.trim(url);
				if (url.indexOf("mailto:") !== 0) {
					if (url.indexOf("/") > 0) {
						if (url.indexOf("://") === -1) {
							if (url.charAt(0) !== "/" && url.indexOf("./") !== 0) {
								if (self._hostRxp.test(url)) {
									_3cc = true;
								}
							}
						}
					} else {
						if (self._userAtRxp.test(url)) {
							_3cd = true;
						}
					}
				}
			}
			if (_3cc) {
				self._urlInput.set("value", "http://" + url);
			}
			if (_3cd) {
				self._urlInput.set("value", "mailto:" + url);
			}
			self._setButton.set("disabled", !self._isValid());
		};
		if (this._delayedCheck) {
			clearTimeout(this._delayedCheck);
			this._delayedCheck = null;
		}
		this._delayedCheck = setTimeout(function () {
			_3cb(url);
		}, 250);
	}, _connectTagEvents: function () {
		this.editor.onLoadDeferred.addCallback(dojo.hitch(this, function () {
			this.connect(this.editor.editNode, "ondblclick", this._onDblClick);
		}));
	}, _isValid: function () {
		return this._urlInput.isValid() && this._textInput.isValid();
	}, _setContent: function (_3ce) {
		this.dropDown.set({parserScope: "dojo", content: _3ce});
	}, _checkValues: function (args) {
		if (args && args.urlInput) {
			args.urlInput = args.urlInput.replace(/"/g, "&quot;");
		}
		return args;
	}, setValue: function (args) {
		this._onCloseDialog();
		if (dojo.isIE < 9) {
			var sel = dijit.range.getSelection(this.editor.window);
			var _3cf = sel.getRangeAt(0);
			var a = _3cf.endContainer;
			if (a.nodeType === 3) {
				a = a.parentNode;
			}
			if (a && (a.nodeName && a.nodeName.toLowerCase() !== this.tag)) {
				a = dojo.withGlobal(this.editor.window, "getSelectedElement", dijit._editor.selection, [this.tag]);
			}
			if (a && (a.nodeName && a.nodeName.toLowerCase() === this.tag)) {
				if (this.editor.queryCommandEnabled("unlink")) {
					dojo.withGlobal(this.editor.window, "selectElementChildren", dijit._editor.selection, [a]);
					this.editor.execCommand("unlink");
				}
			}
		}
		args = this._checkValues(args);
		this.editor.execCommand("inserthtml", dojo.string.substitute(this.htmlTemplate, args));
	}, _onCloseDialog: function () {
		this.editor.focus();
	}, _getCurrentValues: function (a) {
		var url, text, _3d0;
		if (a && a.tagName.toLowerCase() === this.tag) {
			url = a.getAttribute("_djrealurl") || a.getAttribute("href");
			_3d0 = a.getAttribute("target") || "_self";
			text = a.textContent || a.innerText;
			dojo.withGlobal(this.editor.window, "selectElement", dijit._editor.selection, [a, true]);
		} else {
			text = dojo.withGlobal(this.editor.window, dijit._editor.selection.getSelectedText);
		}
		return {urlInput: url || "", textInput: text || "", targetSelect: _3d0 || ""};
	}, _onOpenDialog: function () {
		var a;
		if (dojo.isIE < 9) {
			var sel = dijit.range.getSelection(this.editor.window);
			var _3d1 = sel.getRangeAt(0);
			a = _3d1.endContainer;
			if (a.nodeType === 3) {
				a = a.parentNode;
			}
			if (a && (a.nodeName && a.nodeName.toLowerCase() !== this.tag)) {
				a = dojo.withGlobal(this.editor.window, "getSelectedElement", dijit._editor.selection, [this.tag]);
			}
		} else {
			a = dojo.withGlobal(this.editor.window, "getAncestorElement", dijit._editor.selection, [this.tag]);
		}
		this.dropDown.reset();
		this._setButton.set("disabled", true);
		this.dropDown.set("value", this._getCurrentValues(a));
	}, _onDblClick: function (e) {
		if (e && e.target) {
			var t = e.target;
			var tg = t.tagName ? t.tagName.toLowerCase() : "";
			if (tg === this.tag && dojo.attr(t, "href")) {
				dojo.withGlobal(this.editor.window, "selectElement", dijit._editor.selection, [t]);
				this.editor.onDisplayChanged();
				setTimeout(dojo.hitch(this, function () {
					this.button.set("disabled", false);
					this.button.openDropDown();
				}), 10);
			}
		}
	}});
	dojo.declare("dijit._editor.plugins.ImgLinkDialog", [dijit._editor.plugins.LinkDialog], {linkDialogTemplate: ["<table><tr><td>", "<label for='${id}_urlInput'>${url}</label>", "</td><td>", "<input dojoType='dijit.form.ValidationTextBox' regExp='${urlRegExp}' " + "required='true' id='${id}_urlInput' name='urlInput' intermediateChanges='true'/>", "</td></tr><tr><td>", "<label for='${id}_textInput'>${text}</label>", "</td><td>", "<input dojoType='dijit.form.ValidationTextBox' required='false' id='${id}_textInput' " + "name='textInput' intermediateChanges='true'/>", "</td></tr><tr><td>", "</td><td>", "</td></tr><tr><td colspan='2'>", "<button dojoType='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>", "<button dojoType='dijit.form.Button' type='button' id='${id}_cancelButton'>${buttonCancel}</button>", "</td></tr></table>"].join(""), htmlTemplate: "<img src=\"${urlInput}\" _djrealurl=\"${urlInput}\" alt=\"${textInput}\" />", tag: "img", _getCurrentValues: function (img) {
		var url, text;
		if (img && img.tagName.toLowerCase() === this.tag) {
			url = img.getAttribute("_djrealurl") || img.getAttribute("src");
			text = img.getAttribute("alt");
			dojo.withGlobal(this.editor.window, "selectElement", dijit._editor.selection, [img, true]);
		} else {
			text = dojo.withGlobal(this.editor.window, dijit._editor.selection.getSelectedText);
		}
		return {urlInput: url || "", textInput: text || ""};
	}, _isValid: function () {
		return this._urlInput.isValid();
	}, _connectTagEvents: function () {
		this.inherited(arguments);
		this.editor.onLoadDeferred.addCallback(dojo.hitch(this, function () {
			this.connect(this.editor.editNode, "onmousedown", this._selectTag);
		}));
	}, _selectTag: function (e) {
		if (e && e.target) {
			var t = e.target;
			var tg = t.tagName ? t.tagName.toLowerCase() : "";
			if (tg === this.tag) {
				dojo.withGlobal(this.editor.window, "selectElement", dijit._editor.selection, [t]);
			}
		}
	}, _checkValues: function (args) {
		if (args && args.urlInput) {
			args.urlInput = args.urlInput.replace(/"/g, "&quot;");
		}
		if (args && args.textInput) {
			args.textInput = args.textInput.replace(/"/g, "&quot;");
		}
		return args;
	}, _onDblClick: function (e) {
		if (e && e.target) {
			var t = e.target;
			var tg = t.tagName ? t.tagName.toLowerCase() : "";
			if (tg === this.tag && dojo.attr(t, "src")) {
				dojo.withGlobal(this.editor.window, "selectElement", dijit._editor.selection, [t]);
				this.editor.onDisplayChanged();
				setTimeout(dojo.hitch(this, function () {
					this.button.set("disabled", false);
					this.button.openDropDown();
				}), 10);
			}
		}
	}});
	dojo.subscribe(dijit._scopeName + ".Editor.getPlugin", null, function (o) {
		if (o.plugin) {
			return;
		}
		switch (o.args.name) {
			case "createLink":
				o.plugin = new dijit._editor.plugins.LinkDialog({command: o.args.name});
				break;
			case "insertImage":
				o.plugin = new dijit._editor.plugins.ImgLinkDialog({command: o.args.name});
				break;
		}
	});
}
if (!dojo._hasResource["dijit.MenuBar"]) {
	dojo._hasResource["dijit.MenuBar"] = true;
	dojo.provide("dijit.MenuBar");
	dojo.declare("dijit.MenuBar", dijit._MenuBase, {templateString: dojo.cache("dijit", "templates/MenuBar.html", "<div class=\"dijitMenuBar dijitMenuPassive\" dojoAttachPoint=\"containerNode\"  role=\"menubar\" tabIndex=\"${tabIndex}\" dojoAttachEvent=\"onkeypress: _onKeyPress\"></div>\n"), baseClass: "dijitMenuBar", _isMenuBar: true, postCreate: function () {
		var k = dojo.keys, l = this.isLeftToRight();
		this.connectKeyNavHandlers(l ? [k.LEFT_ARROW] : [k.RIGHT_ARROW], l ? [k.RIGHT_ARROW] : [k.LEFT_ARROW]);
		this._orient = this.isLeftToRight() ? {BL: "TL"} : {BR: "TR"};
	}, focusChild: function (item) {
		var _3d2 = this.focusedChild, _3d3 = _3d2 && _3d2.popup && _3d2.popup.isShowingNow;
		this.inherited(arguments);
		if (_3d3 && item.popup && !item.disabled) {
			this._openPopup();
		}
	}, _onKeyPress: function (evt) {
		if (evt.ctrlKey || evt.altKey) {
			return;
		}
		switch (evt.charOrCode) {
			case dojo.keys.DOWN_ARROW:
				this._moveToPopup(evt);
				dojo.stopEvent(evt);
		}
	}, onItemClick: function (item, evt) {
		if (item.popup && item.popup.isShowingNow) {
			item.popup.onCancel();
		} else {
			this.inherited(arguments);
		}
	}});
}
if (!dojo._hasResource["dijit.MenuBarItem"]) {
	dojo._hasResource["dijit.MenuBarItem"] = true;
	dojo.provide("dijit.MenuBarItem");
	dojo.declare("dijit._MenuBarItemMixin", null, {templateString: dojo.cache("dijit", "templates/MenuBarItem.html", "<div class=\"dijitReset dijitInline dijitMenuItem dijitMenuItemLabel\" dojoAttachPoint=\"focusNode\" role=\"menuitem\" tabIndex=\"-1\"\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<span dojoAttachPoint=\"containerNode\"></span>\n</div>\n"), attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {label: {node: "containerNode", type: "innerHTML"}})});
	dojo.declare("dijit.MenuBarItem", [dijit.MenuItem, dijit._MenuBarItemMixin], {});
}
if (!dojo._hasResource["dijit.PopupMenuBarItem"]) {
	dojo._hasResource["dijit.PopupMenuBarItem"] = true;
	dojo.provide("dijit.PopupMenuBarItem");
	dojo.declare("dijit.PopupMenuBarItem", [dijit.PopupMenuItem, dijit._MenuBarItemMixin], {});
}
if (!dojo._hasResource["dojo.number"]) {
	dojo._hasResource["dojo.number"] = true;
	dojo.provide("dojo.number");
	dojo.getObject("number", true, dojo);
	dojo.number.format = function (_3d4, _3d5) {
		_3d5 = dojo.mixin({}, _3d5 || {});
		var _3d6 = dojo.i18n.normalizeLocale(_3d5.locale), _3d7 = dojo.i18n.getLocalization("dojo.cldr", "number", _3d6);
		_3d5.customs = _3d7;
		var _3d8 = _3d5.pattern || _3d7[(_3d5.type || "decimal") + "Format"];
		if (isNaN(_3d4) || Math.abs(_3d4) == Infinity) {
			return null;
		}
		return dojo.number._applyPattern(_3d4, _3d8, _3d5);
	};
	dojo.number._numberPatternRE = /[#0,]*[#0](?:\.0*#*)?/;
	dojo.number._applyPattern = function (_3d9, _3da, _3db) {
		_3db = _3db || {};
		var _3dc = _3db.customs.group, _3dd = _3db.customs.decimal, _3de = _3da.split(";"), _3df = _3de[0];
		_3da = _3de[(_3d9 < 0) ? 1 : 0] || ("-" + _3df);
		if (_3da.indexOf("%") != -1) {
			_3d9 *= 100;
		} else {
			if (_3da.indexOf("‰") != -1) {
				_3d9 *= 1000;
			} else {
				if (_3da.indexOf("¤") != -1) {
					_3dc = _3db.customs.currencyGroup || _3dc;
					_3dd = _3db.customs.currencyDecimal || _3dd;
					_3da = _3da.replace(/\u00a4{1,3}/, function (_3e0) {
						var prop = ["symbol", "currency", "displayName"][_3e0.length - 1];
						return _3db[prop] || _3db.currency || "";
					});
				} else {
					if (_3da.indexOf("E") != -1) {
						throw new Error("exponential notation not supported");
					}
				}
			}
		}
		var _3e1 = dojo.number._numberPatternRE;
		var _3e2 = _3df.match(_3e1);
		if (!_3e2) {
			throw new Error("unable to find a number expression in pattern: " + _3da);
		}
		if (_3db.fractional === false) {
			_3db.places = 0;
		}
		return _3da.replace(_3e1, dojo.number._formatAbsolute(_3d9, _3e2[0], {decimal: _3dd, group: _3dc, places: _3db.places, round: _3db.round}));
	};
	dojo.number.round = function (_3e3, _3e4, _3e5) {
		var _3e6 = 10 / (_3e5 || 10);
		return (_3e6 * +_3e3).toFixed(_3e4) / _3e6;
	};
	if ((0.9).toFixed() == 0) {
		(function () {
			var _3e7 = dojo.number.round;
			dojo.number.round = function (v, p, m) {
				var d = Math.pow(10, -p || 0), a = Math.abs(v);
				if (!v || a >= d || a * Math.pow(10, p + 1) < 5) {
					d = 0;
				}
				return _3e7(v, p, m) + (v > 0 ? d : -d);
			};
		})();
	}
	dojo.number._formatAbsolute = function (_3e8, _3e9, _3ea) {
		_3ea = _3ea || {};
		if (_3ea.places === true) {
			_3ea.places = 0;
		}
		if (_3ea.places === Infinity) {
			_3ea.places = 6;
		}
		var _3eb = _3e9.split("."), _3ec = typeof _3ea.places == "string" && _3ea.places.indexOf(","), _3ed = _3ea.places;
		if (_3ec) {
			_3ed = _3ea.places.substring(_3ec + 1);
		} else {
			if (!(_3ed >= 0)) {
				_3ed = (_3eb[1] || []).length;
			}
		}
		if (!(_3ea.round < 0)) {
			_3e8 = dojo.number.round(_3e8, _3ed, _3ea.round);
		}
		var _3ee = String(Math.abs(_3e8)).split("."), _3ef = _3ee[1] || "";
		if (_3eb[1] || _3ea.places) {
			if (_3ec) {
				_3ea.places = _3ea.places.substring(0, _3ec);
			}
			var pad = _3ea.places !== undefined ? _3ea.places : (_3eb[1] && _3eb[1].lastIndexOf("0") + 1);
			if (pad > _3ef.length) {
				_3ee[1] = dojo.string.pad(_3ef, pad, "0", true);
			}
			if (_3ed < _3ef.length) {
				_3ee[1] = _3ef.substr(0, _3ed);
			}
		} else {
			if (_3ee[1]) {
				_3ee.pop();
			}
		}
		var _3f0 = _3eb[0].replace(",", "");
		pad = _3f0.indexOf("0");
		if (pad != -1) {
			pad = _3f0.length - pad;
			if (pad > _3ee[0].length) {
				_3ee[0] = dojo.string.pad(_3ee[0], pad);
			}
			if (_3f0.indexOf("#") == -1) {
				_3ee[0] = _3ee[0].substr(_3ee[0].length - pad);
			}
		}
		var _3f1 = _3eb[0].lastIndexOf(","), _3f2, _3f3;
		if (_3f1 != -1) {
			_3f2 = _3eb[0].length - _3f1 - 1;
			var _3f4 = _3eb[0].substr(0, _3f1);
			_3f1 = _3f4.lastIndexOf(",");
			if (_3f1 != -1) {
				_3f3 = _3f4.length - _3f1 - 1;
			}
		}
		var _3f5 = [];
		for (var _3f6 = _3ee[0]; _3f6;) {
			var off = _3f6.length - _3f2;
			_3f5.push((off > 0) ? _3f6.substr(off) : _3f6);
			_3f6 = (off > 0) ? _3f6.slice(0, off) : "";
			if (_3f3) {
				_3f2 = _3f3;
				delete _3f3;
			}
		}
		_3ee[0] = _3f5.reverse().join(_3ea.group || ",");
		return _3ee.join(_3ea.decimal || ".");
	};
	dojo.number.regexp = function (_3f7) {
		return dojo.number._parseInfo(_3f7).regexp;
	};
	dojo.number._parseInfo = function (_3f8) {
		_3f8 = _3f8 || {};
		var _3f9 = dojo.i18n.normalizeLocale(_3f8.locale), _3fa = dojo.i18n.getLocalization("dojo.cldr", "number", _3f9), _3fb = _3f8.pattern || _3fa[(_3f8.type || "decimal") + "Format"], _3fc = _3fa.group, _3fd = _3fa.decimal, _3fe = 1;
		if (_3fb.indexOf("%") != -1) {
			_3fe /= 100;
		} else {
			if (_3fb.indexOf("‰") != -1) {
				_3fe /= 1000;
			} else {
				var _3ff = _3fb.indexOf("¤") != -1;
				if (_3ff) {
					_3fc = _3fa.currencyGroup || _3fc;
					_3fd = _3fa.currencyDecimal || _3fd;
				}
			}
		}
		var _400 = _3fb.split(";");
		if (_400.length == 1) {
			_400.push("-" + _400[0]);
		}
		var re = dojo.regexp.buildGroupRE(_400, function (_401) {
			_401 = "(?:" + dojo.regexp.escapeString(_401, ".") + ")";
			return _401.replace(dojo.number._numberPatternRE, function (_402) {
				var _403 = {signed: false, separator: _3f8.strict ? _3fc : [_3fc, ""], fractional: _3f8.fractional, decimal: _3fd, exponent: false}, _404 = _402.split("."), _405 = _3f8.places;
				if (_404.length == 1 && _3fe != 1) {
					_404[1] = "###";
				}
				if (_404.length == 1 || _405 === 0) {
					_403.fractional = false;
				} else {
					if (_405 === undefined) {
						_405 = _3f8.pattern ? _404[1].lastIndexOf("0") + 1 : Infinity;
					}
					if (_405 && _3f8.fractional == undefined) {
						_403.fractional = true;
					}
					if (!_3f8.places && (_405 < _404[1].length)) {
						_405 += "," + _404[1].length;
					}
					_403.places = _405;
				}
				var _406 = _404[0].split(",");
				if (_406.length > 1) {
					_403.groupSize = _406.pop().length;
					if (_406.length > 1) {
						_403.groupSize2 = _406.pop().length;
					}
				}
				return "(" + dojo.number._realNumberRegexp(_403) + ")";
			});
		}, true);
		if (_3ff) {
			re = re.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g, function (_407, _408, _409, _40a) {
				var prop = ["symbol", "currency", "displayName"][_409.length - 1], _40b = dojo.regexp.escapeString(_3f8[prop] || _3f8.currency || "");
				_408 = _408 ? "[\\s\\xa0]" : "";
				_40a = _40a ? "[\\s\\xa0]" : "";
				if (!_3f8.strict) {
					if (_408) {
						_408 += "*";
					}
					if (_40a) {
						_40a += "*";
					}
					return "(?:" + _408 + _40b + _40a + ")?";
				}
				return _408 + _40b + _40a;
			});
		}
		return {regexp: re.replace(/[\xa0 ]/g, "[\\s\\xa0]"), group: _3fc, decimal: _3fd, factor: _3fe};
	};
	dojo.number.parse = function (_40c, _40d) {
		var info = dojo.number._parseInfo(_40d), _40e = (new RegExp("^" + info.regexp + "$")).exec(_40c);
		if (!_40e) {
			return NaN;
		}
		var _40f = _40e[1];
		if (!_40e[1]) {
			if (!_40e[2]) {
				return NaN;
			}
			_40f = _40e[2];
			info.factor *= -1;
		}
		_40f = _40f.replace(new RegExp("[" + info.group + "\\s\\xa0" + "]", "g"), "").replace(info.decimal, ".");
		return _40f * info.factor;
	};
	dojo.number._realNumberRegexp = function (_410) {
		_410 = _410 || {};
		if (!("places" in _410)) {
			_410.places = Infinity;
		}
		if (typeof _410.decimal != "string") {
			_410.decimal = ".";
		}
		if (!("fractional" in _410) || /^0/.test(_410.places)) {
			_410.fractional = [true, false];
		}
		if (!("exponent" in _410)) {
			_410.exponent = [true, false];
		}
		if (!("eSigned" in _410)) {
			_410.eSigned = [true, false];
		}
		var _411 = dojo.number._integerRegexp(_410), _412 = dojo.regexp.buildGroupRE(_410.fractional, function (q) {
			var re = "";
			if (q && (_410.places !== 0)) {
				re = "\\" + _410.decimal;
				if (_410.places == Infinity) {
					re = "(?:" + re + "\\d+)?";
				} else {
					re += "\\d{" + _410.places + "}";
				}
			}
			return re;
		}, true);
		var _413 = dojo.regexp.buildGroupRE(_410.exponent, function (q) {
			if (q) {
				return "([eE]" + dojo.number._integerRegexp({signed: _410.eSigned}) + ")";
			}
			return "";
		});
		var _414 = _411 + _412;
		if (_412) {
			_414 = "(?:(?:" + _414 + ")|(?:" + _412 + "))";
		}
		return _414 + _413;
	};
	dojo.number._integerRegexp = function (_415) {
		_415 = _415 || {};
		if (!("signed" in _415)) {
			_415.signed = [true, false];
		}
		if (!("separator" in _415)) {
			_415.separator = "";
		} else {
			if (!("groupSize" in _415)) {
				_415.groupSize = 3;
			}
		}
		var _416 = dojo.regexp.buildGroupRE(_415.signed, function (q) {
			return q ? "[-+]" : "";
		}, true);
		var _417 = dojo.regexp.buildGroupRE(_415.separator, function (sep) {
			if (!sep) {
				return "(?:\\d+)";
			}
			sep = dojo.regexp.escapeString(sep);
			if (sep == " ") {
				sep = "\\s";
			} else {
				if (sep == " ") {
					sep = "\\s\\xa0";
				}
			}
			var grp = _415.groupSize, grp2 = _415.groupSize2;
			if (grp2) {
				var _418 = "(?:0|[1-9]\\d{0," + (grp2 - 1) + "}(?:[" + sep + "]\\d{" + grp2 + "})*[" + sep + "]\\d{" + grp + "})";
				return ((grp - grp2) > 0) ? "(?:" + _418 + "|(?:0|[1-9]\\d{0," + (grp - 1) + "}))" : _418;
			}
			return "(?:0|[1-9]\\d{0," + (grp - 1) + "}(?:[" + sep + "]\\d{" + grp + "})*)";
		}, true);
		return _416 + _417;
	};
}
if (!dojo._hasResource["dijit.ProgressBar"]) {
	dojo._hasResource["dijit.ProgressBar"] = true;
	dojo.provide("dijit.ProgressBar");
	dojo.declare("dijit.ProgressBar", [dijit._Widget, dijit._Templated], {progress: "0", value: "", maximum: 100, places: 0, indeterminate: false, label: "", name: "", templateString: dojo.cache("dijit", "templates/ProgressBar.html", "<div class=\"dijitProgressBar dijitProgressBarEmpty\" role=\"progressbar\"\n\t><div  dojoAttachPoint=\"internalProgress\" class=\"dijitProgressBarFull\"\n\t\t><div class=\"dijitProgressBarTile\" role=\"presentation\"></div\n\t\t><span style=\"visibility:hidden\">&nbsp;</span\n\t></div\n\t><div dojoAttachPoint=\"labelNode\" class=\"dijitProgressBarLabel\" id=\"${id}_label\"></div\n\t><img dojoAttachPoint=\"indeterminateHighContrastImage\" class=\"dijitProgressBarIndeterminateHighContrastImage\" alt=\"\"\n/></div>\n"), _indeterminateHighContrastImagePath: dojo.moduleUrl("dijit", "themes/a11y/indeterminate_progress.gif"), postMixInProperties: function () {
		this.inherited(arguments);
		if (!("value" in this.params)) {
			this.value = this.indeterminate ? Infinity : this.progress;
		}
	}, buildRendering: function () {
		this.inherited(arguments);
		this.indeterminateHighContrastImage.setAttribute("src", this._indeterminateHighContrastImagePath.toString());
		this.update();
	}, update: function (_419) {
		dojo.mixin(this, _419 || {});
		var tip = this.internalProgress, ap = this.domNode;
		var _41a = 1;
		if (this.indeterminate) {
			dijit.removeWaiState(ap, "valuenow");
			dijit.removeWaiState(ap, "valuemin");
			dijit.removeWaiState(ap, "valuemax");
		} else {
			if (String(this.progress).indexOf("%") != -1) {
				_41a = Math.min(parseFloat(this.progress) / 100, 1);
				this.progress = _41a * this.maximum;
			} else {
				this.progress = Math.min(this.progress, this.maximum);
				_41a = this.progress / this.maximum;
			}
			dijit.setWaiState(ap, "describedby", this.labelNode.id);
			dijit.setWaiState(ap, "valuenow", this.progress);
			dijit.setWaiState(ap, "valuemin", 0);
			dijit.setWaiState(ap, "valuemax", this.maximum);
		}
		this.labelNode.innerHTML = this.report(_41a);
		dojo.toggleClass(this.domNode, "dijitProgressBarIndeterminate", this.indeterminate);
		tip.style.width = (_41a * 100) + "%";
		this.onChange();
	}, _setValueAttr: function (v) {
		this._set("value", v);
		if (v == Infinity) {
			this.update({indeterminate: true});
		} else {
			this.update({indeterminate: false, progress: v});
		}
	}, _setLabelAttr: function (_41b) {
		this._set("label", _41b);
		this.update();
	}, _setIndeterminateAttr: function (_41c) {
		this.indeterminate = _41c;
		this.update();
	}, report: function (_41d) {
		return this.label ? this.label : (this.indeterminate ? "&nbsp;" : dojo.number.format(_41d, {type: "percent", places: this.places, locale: this.lang}));
	}, onChange: function () {
	}});
}
if (!dojo._hasResource["dijit.TitlePane"]) {
	dojo._hasResource["dijit.TitlePane"] = true;
	dojo.provide("dijit.TitlePane");
	dojo.declare("dijit.TitlePane", [dijit.layout.ContentPane, dijit._Templated, dijit._CssStateMixin], {title: "", open: true, toggleable: true, tabIndex: "0", duration: dijit.defaultDuration, baseClass: "dijitTitlePane", templateString: dojo.cache("dijit", "templates/TitlePane.html", "<div>\n\t<div dojoAttachEvent=\"onclick:_onTitleClick, onkeypress:_onTitleKey\"\n\t\t\tclass=\"dijitTitlePaneTitle\" dojoAttachPoint=\"titleBarNode\">\n\t\t<div class=\"dijitTitlePaneTitleFocus\" dojoAttachPoint=\"focusNode\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint=\"arrowNode\" class=\"dijitArrowNode\" role=\"presentation\"\n\t\t\t/><span dojoAttachPoint=\"arrowNodeInner\" class=\"dijitArrowNodeInner\"></span\n\t\t\t><span dojoAttachPoint=\"titleNode\" class=\"dijitTitlePaneTextNode\"></span>\n\t\t</div>\n\t</div>\n\t<div class=\"dijitTitlePaneContentOuter\" dojoAttachPoint=\"hideNode\" role=\"presentation\">\n\t\t<div class=\"dijitReset\" dojoAttachPoint=\"wipeNode\" role=\"presentation\">\n\t\t\t<div class=\"dijitTitlePaneContentInner\" dojoAttachPoint=\"containerNode\" role=\"region\" id=\"${id}_pane\">\n\t\t\t\t<!-- nested divs because wipeIn()/wipeOut() doesn't work right on node w/padding etc.  Put padding on inner div. -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"), attributeMap: dojo.delegate(dijit.layout.ContentPane.prototype.attributeMap, {title: {node: "titleNode", type: "innerHTML"}, tooltip: {node: "focusNode", type: "attribute", attribute: "title"}, id: ""}), buildRendering: function () {
		this.inherited(arguments);
		dojo.setSelectable(this.titleNode, false);
	}, postCreate: function () {
		this.inherited(arguments);
		if (this.toggleable) {
			this._trackMouseState(this.titleBarNode, "dijitTitlePaneTitle");
		}
		var _41e = this.hideNode, _41f = this.wipeNode;
		this._wipeIn = dojo.fx.wipeIn({node: this.wipeNode, duration: this.duration, beforeBegin: function () {
			_41e.style.display = "";
		}});
		this._wipeOut = dojo.fx.wipeOut({node: this.wipeNode, duration: this.duration, onEnd: function () {
			_41e.style.display = "none";
		}});
	}, _setOpenAttr: function (open, _420) {
		dojo.forEach([this._wipeIn, this._wipeOut], function (_421) {
			if (_421 && _421.status() == "playing") {
				_421.stop();
			}
		});
		if (_420) {
			var anim = this[open ? "_wipeIn" : "_wipeOut"];
			anim.play();
		} else {
			this.hideNode.style.display = this.wipeNode.style.display = open ? "" : "none";
		}
		if (this._started) {
			if (open) {
				this._onShow();
			} else {
				this.onHide();
			}
		}
		this.arrowNodeInner.innerHTML = open ? "-" : "+";
		dijit.setWaiState(this.containerNode, "hidden", open ? "false" : "true");
		dijit.setWaiState(this.focusNode, "pressed", open ? "true" : "false");
		this._set("open", open);
		this._setCss();
	}, _setToggleableAttr: function (_422) {
		dijit.setWaiRole(this.focusNode, _422 ? "button" : "heading");
		if (_422) {
			dijit.setWaiState(this.focusNode, "controls", this.id + "_pane");
			dojo.attr(this.focusNode, "tabIndex", this.tabIndex);
		} else {
			dojo.removeAttr(this.focusNode, "tabIndex");
		}
		this._set("toggleable", _422);
		this._setCss();
	}, _setContentAttr: function (_423) {
		if (!this.open || !this._wipeOut || this._wipeOut.status() == "playing") {
			this.inherited(arguments);
		} else {
			if (this._wipeIn && this._wipeIn.status() == "playing") {
				this._wipeIn.stop();
			}
			dojo.marginBox(this.wipeNode, {h: dojo.marginBox(this.wipeNode).h});
			this.inherited(arguments);
			if (this._wipeIn) {
				this._wipeIn.play();
			} else {
				this.hideNode.style.display = "";
			}
		}
	}, toggle: function () {
		this._setOpenAttr(!this.open, true);
	}, _setCss: function () {
		var node = this.titleBarNode || this.focusNode;
		var _424 = this._titleBarClass;
		this._titleBarClass = "dijit" + (this.toggleable ? "" : "Fixed") + (this.open ? "Open" : "Closed");
		dojo.replaceClass(node, this._titleBarClass, _424 || "");
		this.arrowNodeInner.innerHTML = this.open ? "-" : "+";
	}, _onTitleKey: function (e) {
		if (e.charOrCode == dojo.keys.ENTER || e.charOrCode == " ") {
			if (this.toggleable) {
				this.toggle();
			}
			dojo.stopEvent(e);
		} else {
			if (e.charOrCode == dojo.keys.DOWN_ARROW && this.open) {
				this.containerNode.focus();
				e.preventDefault();
			}
		}
	}, _onTitleClick: function () {
		if (this.toggleable) {
			this.toggle();
		}
	}, setTitle: function (_425) {
		dojo.deprecated("dijit.TitlePane.setTitle() is deprecated.  Use set('title', ...) instead.", "", "2.0");
		this.set("title", _425);
	}});
}
if (!dojo._hasResource["dojo.DeferredList"]) {
	dojo._hasResource["dojo.DeferredList"] = true;
	dojo.provide("dojo.DeferredList");
	dojo.DeferredList = function (list, _426, _427, _428, _429) {
		var _42a = [];
		dojo.Deferred.call(this);
		var self = this;
		if (list.length === 0 && !_426) {
			this.resolve([0, []]);
		}
		var _42b = 0;
		dojo.forEach(list, function (item, i) {
			item.then(function (_42c) {
				if (_426) {
					self.resolve([i, _42c]);
				} else {
					_42d(true, _42c);
				}
			}, function (_42e) {
				if (_427) {
					self.reject(_42e);
				} else {
					_42d(false, _42e);
				}
				if (_428) {
					return null;
				}
				throw _42e;
			});
			function _42d(_42f, _430) {
				_42a[i] = [_42f, _430];
				_42b++;
				if (_42b === list.length) {
					self.resolve(_42a);
				}
			};
		});
	};
	dojo.DeferredList.prototype = new dojo.Deferred();
	dojo.DeferredList.prototype.gatherResults = function (_431) {
		var d = new dojo.DeferredList(_431, false, true, false);
		d.addCallback(function (_432) {
			var ret = [];
			dojo.forEach(_432, function (_433) {
				ret.push(_433[1]);
			});
			return ret;
		});
		return d;
	};
}
if (!dojo._hasResource["dojo.cookie"]) {
	dojo._hasResource["dojo.cookie"] = true;
	dojo.provide("dojo.cookie");
	dojo.cookie = function (name, _434, _435) {
		var c = document.cookie;
		if (arguments.length == 1) {
			var _436 = c.match(new RegExp("(?:^|; )" + dojo.regexp.escapeString(name) + "=([^;]*)"));
			return _436 ? decodeURIComponent(_436[1]) : undefined;
		} else {
			_435 = _435 || {};
			var exp = _435.expires;
			if (typeof exp == "number") {
				var d = new Date();
				d.setTime(d.getTime() + exp * 24 * 60 * 60 * 1000);
				exp = _435.expires = d;
			}
			if (exp && exp.toUTCString) {
				_435.expires = exp.toUTCString();
			}
			_434 = encodeURIComponent(_434);
			var _437 = name + "=" + _434, _438;
			for (_438 in _435) {
				_437 += "; " + _438;
				var _439 = _435[_438];
				if (_439 !== true) {
					_437 += "=" + _439;
				}
			}
			document.cookie = _437;
		}
	};
	dojo.cookie.isSupported = function () {
		if (!("cookieEnabled" in navigator)) {
			this("__djCookieTest__", "CookiesAllowed");
			navigator.cookieEnabled = this("__djCookieTest__") == "CookiesAllowed";
			if (navigator.cookieEnabled) {
				this("__djCookieTest__", "", {expires: -1});
			}
		}
		return navigator.cookieEnabled;
	};
}
if (!dojo._hasResource["dijit.tree.TreeStoreModel"]) {
	dojo._hasResource["dijit.tree.TreeStoreModel"] = true;
	dojo.provide("dijit.tree.TreeStoreModel");
	dojo.declare("dijit.tree.TreeStoreModel", null, {store: null, childrenAttrs: ["children"], newItemIdAttr: "id", labelAttr: "", root: null, query: null, deferItemLoadingUntilExpand: false, constructor: function (args) {
		dojo.mixin(this, args);
		this.connects = [];
		var _43a = this.store;
		if (!_43a.getFeatures()["dojo.data.api.Identity"]) {
			throw new Error("dijit.Tree: store must support dojo.data.Identity");
		}
		if (_43a.getFeatures()["dojo.data.api.Notification"]) {
			this.connects = this.connects.concat([dojo.connect(_43a, "onNew", this, "onNewItem"), dojo.connect(_43a, "onDelete", this, "onDeleteItem"), dojo.connect(_43a, "onSet", this, "onSetItem")]);
		}
	}, destroy: function () {
		dojo.forEach(this.connects, dojo.disconnect);
	}, getRoot: function (_43b, _43c) {
		if (this.root) {
			_43b(this.root);
		} else {
			this.store.fetch({query: this.query, onComplete: dojo.hitch(this, function (_43d) {
				if (_43d.length != 1) {
					throw new Error(this.declaredClass + ": query " + dojo.toJson(this.query) + " returned " + _43d.length + " items, but must return exactly one item");
				}
				this.root = _43d[0];
				_43b(this.root);
			}), onError: _43c});
		}
	}, mayHaveChildren: function (item) {
		return dojo.some(this.childrenAttrs, function (attr) {
			return this.store.hasAttribute(item, attr);
		}, this);
	}, getChildren: function (_43e, _43f, _440) {
		var _441 = this.store;
		if (!_441.isItemLoaded(_43e)) {
			var _442 = dojo.hitch(this, arguments.callee);
			_441.loadItem({item: _43e, onItem: function (_443) {
				_442(_443, _43f, _440);
			}, onError: _440});
			return;
		}
		var _444 = [];
		for (var i = 0; i < this.childrenAttrs.length; i++) {
			var vals = _441.getValues(_43e, this.childrenAttrs[i]);
			_444 = _444.concat(vals);
		}
		var _445 = 0;
		if (!this.deferItemLoadingUntilExpand) {
			dojo.forEach(_444, function (item) {
				if (!_441.isItemLoaded(item)) {
					_445++;
				}
			});
		}
		if (_445 == 0) {
			_43f(_444);
		} else {
			dojo.forEach(_444, function (item, idx) {
				if (!_441.isItemLoaded(item)) {
					_441.loadItem({item: item, onItem: function (item) {
						_444[idx] = item;
						if (--_445 == 0) {
							_43f(_444);
						}
					}, onError: _440});
				}
			});
		}
	}, isItem: function (_446) {
		return this.store.isItem(_446);
	}, fetchItemByIdentity: function (_447) {
		this.store.fetchItemByIdentity(_447);
	}, getIdentity: function (item) {
		return this.store.getIdentity(item);
	}, getLabel: function (item) {
		if (this.labelAttr) {
			return this.store.getValue(item, this.labelAttr);
		} else {
			return this.store.getLabel(item);
		}
	}, newItem: function (args, _448, _449) {
		var _44a = {parent: _448, attribute: this.childrenAttrs[0]}, _44b;
		if (this.newItemIdAttr && args[this.newItemIdAttr]) {
			this.fetchItemByIdentity({identity: args[this.newItemIdAttr], scope: this, onItem: function (item) {
				if (item) {
					this.pasteItem(item, null, _448, true, _449);
				} else {
					_44b = this.store.newItem(args, _44a);
					if (_44b && (_449 != undefined)) {
						this.pasteItem(_44b, _448, _448, false, _449);
					}
				}
			}});
		} else {
			_44b = this.store.newItem(args, _44a);
			if (_44b && (_449 != undefined)) {
				this.pasteItem(_44b, _448, _448, false, _449);
			}
		}
	}, pasteItem: function (_44c, _44d, _44e, _44f, _450) {
		var _451 = this.store, _452 = this.childrenAttrs[0];
		if (_44d) {
			dojo.forEach(this.childrenAttrs, function (attr) {
				if (_451.containsValue(_44d, attr, _44c)) {
					if (!_44f) {
						var _453 = dojo.filter(_451.getValues(_44d, attr), function (x) {
							return x != _44c;
						});
						_451.setValues(_44d, attr, _453);
					}
					_452 = attr;
				}
			});
		}
		if (_44e) {
			if (typeof _450 == "number") {
				var _454 = _451.getValues(_44e, _452).slice();
				_454.splice(_450, 0, _44c);
				_451.setValues(_44e, _452, _454);
			} else {
				_451.setValues(_44e, _452, _451.getValues(_44e, _452).concat(_44c));
			}
		}
	}, onChange: function (item) {
	}, onChildrenChange: function (_455, _456) {
	}, onDelete: function (_457, _458) {
	}, onNewItem: function (item, _459) {
		if (!_459) {
			return;
		}
		this.getChildren(_459.item, dojo.hitch(this, function (_45a) {
			this.onChildrenChange(_459.item, _45a);
		}));
	}, onDeleteItem: function (item) {
		this.onDelete(item);
	}, onSetItem: function (item, _45b, _45c, _45d) {
		if (dojo.indexOf(this.childrenAttrs, _45b) != -1) {
			this.getChildren(item, dojo.hitch(this, function (_45e) {
				this.onChildrenChange(item, _45e);
			}));
		} else {
			this.onChange(item);
		}
	}});
}
if (!dojo._hasResource["dijit.tree.ForestStoreModel"]) {
	dojo._hasResource["dijit.tree.ForestStoreModel"] = true;
	dojo.provide("dijit.tree.ForestStoreModel");
	dojo.declare("dijit.tree.ForestStoreModel", dijit.tree.TreeStoreModel, {rootId: "$root$", rootLabel: "ROOT", query: null, constructor: function (_45f) {
		this.root = {store: this, root: true, id: _45f.rootId, label: _45f.rootLabel, children: _45f.rootChildren};
	}, mayHaveChildren: function (item) {
		return item === this.root || this.inherited(arguments);
	}, getChildren: function (_460, _461, _462) {
		if (_460 === this.root) {
			if (this.root.children) {
				_461(this.root.children);
			} else {
				this.store.fetch({query: this.query, onComplete: dojo.hitch(this, function (_463) {
					this.root.children = _463;
					_461(_463);
				}), onError: _462});
			}
		} else {
			this.inherited(arguments);
		}
	}, isItem: function (_464) {
		return (_464 === this.root) ? true : this.inherited(arguments);
	}, fetchItemByIdentity: function (_465) {
		if (_465.identity == this.root.id) {
			var _466 = _465.scope ? _465.scope : dojo.global;
			if (_465.onItem) {
				_465.onItem.call(_466, this.root);
			}
		} else {
			this.inherited(arguments);
		}
	}, getIdentity: function (item) {
		return (item === this.root) ? this.root.id : this.inherited(arguments);
	}, getLabel: function (item) {
		return (item === this.root) ? this.root.label : this.inherited(arguments);
	}, newItem: function (args, _467, _468) {
		if (_467 === this.root) {
			this.onNewRootItem(args);
			return this.store.newItem(args);
		} else {
			return this.inherited(arguments);
		}
	}, onNewRootItem: function (args) {
	}, pasteItem: function (_469, _46a, _46b, _46c, _46d) {
		if (_46a === this.root) {
			if (!_46c) {
				this.onLeaveRoot(_469);
			}
		}
		dijit.tree.TreeStoreModel.prototype.pasteItem.call(this, _469, _46a === this.root ? null : _46a, _46b === this.root ? null : _46b, _46c, _46d);
		if (_46b === this.root) {
			this.onAddToRoot(_469);
		}
	}, onAddToRoot: function (item) {
	}, onLeaveRoot: function (item) {
	}, _requeryTop: function () {
		var _46e = this.root.children || [];
		this.store.fetch({query: this.query, onComplete: dojo.hitch(this, function (_46f) {
			this.root.children = _46f;
			if (_46e.length != _46f.length || dojo.some(_46e, function (item, idx) {
				return _46f[idx] != item;
			})) {
				this.onChildrenChange(this.root, _46f);
			}
		})});
	}, onNewItem: function (item, _470) {
		this._requeryTop();
		this.inherited(arguments);
	}, onDeleteItem: function (item) {
		if (dojo.indexOf(this.root.children, item) != -1) {
			this._requeryTop();
		}
		this.inherited(arguments);
	}, onSetItem: function (item, _471, _472, _473) {
		this._requeryTop();
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dojo.dnd.Container"]) {
	dojo._hasResource["dojo.dnd.Container"] = true;
	dojo.provide("dojo.dnd.Container");
	dojo.declare("dojo.dnd.Container", null, {skipForm: false, constructor: function (node, _474) {
		this.node = dojo.byId(node);
		if (!_474) {
			_474 = {};
		}
		this.creator = _474.creator || null;
		this.skipForm = _474.skipForm;
		this.parent = _474.dropParent && dojo.byId(_474.dropParent);
		this.map = {};
		this.current = null;
		this.containerState = "";
		dojo.addClass(this.node, "dojoDndContainer");
		if (!(_474 && _474._skipStartup)) {
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
	}, insertNodes: function (data, _475, _476) {
		if (!this.parent.firstChild) {
			_476 = null;
		} else {
			if (_475) {
				if (!_476) {
					_476 = this.parent.firstChild;
				}
			} else {
				if (_476) {
					_476 = _476.nextSibling;
				}
			}
		}
		if (_476) {
			for (var i = 0; i < data.length; ++i) {
				var t = this._normalizedCreator(data[i]);
				this.setItem(t.node.id, {data: t.data, type: t.type});
				this.parent.insertBefore(t.node, _476);
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
	}, markupFactory: function (_477, node) {
		_477._skipStartup = true;
		return new dojo.dnd.Container(node, _477);
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
	}, _changeState: function (type, _478) {
		var _479 = "dojoDnd" + type;
		var _47a = type.toLowerCase() + "State";
		dojo.replaceClass(this.node, _479 + _478, _479 + this[_47a]);
		this[_47a] = _478;
	}, _addItemClass: function (node, type) {
		dojo.addClass(node, "dojoDndItem" + type);
	}, _removeItemClass: function (node, type) {
		dojo.removeClass(node, "dojoDndItem" + type);
	}, _getChildByEvent: function (e) {
		var node = e.target;
		if (node) {
			for (var _47b = node.parentNode; _47b; node = _47b, _47b = node.parentNode) {
				if (_47b == this.parent && dojo.hasClass(node, "dojoDndItem")) {
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
			var _47c = item && dojo.isObject(item), data, type, n;
			if (_47c && item.tagName && item.nodeType && item.getAttribute) {
				data = item.getAttribute("dndData") || item.innerHTML;
				type = item.getAttribute("dndType");
				type = type ? type.split(/\s*,\s*/) : ["text"];
				n = item;
			} else {
				data = (_47c && item.data) ? item.data : item;
				type = (_47c && item.type) ? item.type : ["text"];
				n = (hint == "avatar" ? dojo.dnd._createSpan : c)(String(data));
			}
			if (!n.id) {
				n.id = dojo.dnd.getUniqueId();
			}
			return {node: n, data: data, type: type};
		};
	};
}
if (!dojo._hasResource["dijit.tree._dndContainer"]) {
	dojo._hasResource["dijit.tree._dndContainer"] = true;
	dojo.provide("dijit.tree._dndContainer");
	dojo.getObject("tree", true, dojo);
	dijit.tree._compareNodes = function (n1, n2) {
		if (n1 === n2) {
			return 0;
		}
		if ("sourceIndex" in document.documentElement) {
			return n1.sourceIndex - n2.sourceIndex;
		} else {
			if ("compareDocumentPosition" in document.documentElement) {
				return n1.compareDocumentPosition(n2) & 2 ? 1 : -1;
			} else {
				if (document.createRange) {
					var r1 = doc.createRange();
					r1.setStartBefore(n1);
					var r2 = doc.createRange();
					r2.setStartBefore(n2);
					return r1.compareBoundaryPoints(r1.END_TO_END, r2);
				} else {
					throw Error("dijit.tree._compareNodes don't know how to compare two different nodes in this browser");
				}
			}
		}
	};
	dojo.declare("dijit.tree._dndContainer", null, {constructor: function (tree, _47d) {
		this.tree = tree;
		this.node = tree.domNode;
		dojo.mixin(this, _47d);
		this.map = {};
		this.current = null;
		this.containerState = "";
		dojo.addClass(this.node, "dojoDndContainer");
		this.events = [dojo.connect(this.node, "onmouseenter", this, "onOverEvent"), dojo.connect(this.node, "onmouseleave", this, "onOutEvent"), dojo.connect(this.tree, "_onNodeMouseEnter", this, "onMouseOver"), dojo.connect(this.tree, "_onNodeMouseLeave", this, "onMouseOut"), dojo.connect(this.node, "ondragstart", dojo, "stopEvent"), dojo.connect(this.node, "onselectstart", dojo, "stopEvent")];
	}, getItem: function (key) {
		var _47e = this.selection[key], ret = {data: _47e, type: ["treeNode"]};
		return ret;
	}, destroy: function () {
		dojo.forEach(this.events, dojo.disconnect);
		this.node = this.parent = null;
	}, onMouseOver: function (_47f, evt) {
		this.current = _47f;
	}, onMouseOut: function (_480, evt) {
		this.current = null;
	}, _changeState: function (type, _481) {
		var _482 = "dojoDnd" + type;
		var _483 = type.toLowerCase() + "State";
		dojo.replaceClass(this.node, _482 + _481, _482 + this[_483]);
		this[_483] = _481;
	}, _addItemClass: function (node, type) {
		dojo.addClass(node, "dojoDndItem" + type);
	}, _removeItemClass: function (node, type) {
		dojo.removeClass(node, "dojoDndItem" + type);
	}, onOverEvent: function () {
		this._changeState("Container", "Over");
	}, onOutEvent: function () {
		this._changeState("Container", "");
	}});
}
if (!dojo._hasResource["dijit.tree._dndSelector"]) {
	dojo._hasResource["dijit.tree._dndSelector"] = true;
	dojo.provide("dijit.tree._dndSelector");
	dojo.declare("dijit.tree._dndSelector", dijit.tree._dndContainer, {constructor: function (tree, _484) {
		this.selection = {};
		this.anchor = null;
		dijit.setWaiState(this.tree.domNode, "multiselect", !this.singular);
		this.events.push(dojo.connect(this.tree.domNode, "onmousedown", this, "onMouseDown"), dojo.connect(this.tree.domNode, "onmouseup", this, "onMouseUp"), dojo.connect(this.tree.domNode, "onmousemove", this, "onMouseMove"));
	}, singular: false, getSelectedTreeNodes: function () {
		var _485 = [], sel = this.selection;
		for (var i in sel) {
			_485.push(sel[i]);
		}
		return _485;
	}, selectNone: function () {
		this.setSelection([]);
		return this;
	}, destroy: function () {
		this.inherited(arguments);
		this.selection = this.anchor = null;
	}, addTreeNode: function (node, _486) {
		this.setSelection(this.getSelectedTreeNodes().concat([node]));
		if (_486) {
			this.anchor = node;
		}
		return node;
	}, removeTreeNode: function (node) {
		this.setSelection(this._setDifference(this.getSelectedTreeNodes(), [node]));
		return node;
	}, isTreeNodeSelected: function (node) {
		return node.id && !!this.selection[node.id];
	}, setSelection: function (_487) {
		var _488 = this.getSelectedTreeNodes();
		dojo.forEach(this._setDifference(_488, _487), dojo.hitch(this, function (node) {
			node.setSelected(false);
			if (this.anchor == node) {
				delete this.anchor;
			}
			delete this.selection[node.id];
		}));
		dojo.forEach(this._setDifference(_487, _488), dojo.hitch(this, function (node) {
			node.setSelected(true);
			this.selection[node.id] = node;
		}));
		this._updateSelectionProperties();
	}, _setDifference: function (xs, ys) {
		dojo.forEach(ys, function (y) {
			y.__exclude__ = true;
		});
		var ret = dojo.filter(xs, function (x) {
			return !x.__exclude__;
		});
		dojo.forEach(ys, function (y) {
			delete y["__exclude__"];
		});
		return ret;
	}, _updateSelectionProperties: function () {
		var _489 = this.getSelectedTreeNodes();
		var _48a = [], _48b = [];
		dojo.forEach(_489, function (node) {
			_48b.push(node);
			_48a.push(node.getTreePath());
		});
		var _48c = dojo.map(_48b, function (node) {
			return node.item;
		});
		this.tree._set("paths", _48a);
		this.tree._set("path", _48a[0] || []);
		this.tree._set("selectedNodes", _48b);
		this.tree._set("selectedNode", _48b[0] || null);
		this.tree._set("selectedItems", _48c);
		this.tree._set("selectedItem", _48c[0] || null);
	}, onMouseDown: function (e) {
		if (!this.current || this.tree.isExpandoNode(e.target, this.current)) {
			return;
		}
		if (e.button == dojo.mouseButtons.RIGHT) {
			return;
		}
		dojo.stopEvent(e);
		var _48d = this.current, copy = dojo.isCopyKey(e), id = _48d.id;
		if (!this.singular && !e.shiftKey && this.selection[id]) {
			this._doDeselect = true;
			return;
		} else {
			this._doDeselect = false;
		}
		this.userSelect(_48d, copy, e.shiftKey);
	}, onMouseUp: function (e) {
		if (!this._doDeselect) {
			return;
		}
		this._doDeselect = false;
		this.userSelect(this.current, dojo.isCopyKey(e), e.shiftKey);
	}, onMouseMove: function (e) {
		this._doDeselect = false;
	}, userSelect: function (node, _48e, _48f) {
		if (this.singular) {
			if (this.anchor == node && _48e) {
				this.selectNone();
			} else {
				this.setSelection([node]);
				this.anchor = node;
			}
		} else {
			if (_48f && this.anchor) {
				var cr = dijit.tree._compareNodes(this.anchor.rowNode, node.rowNode), _490, end, _491 = this.anchor;
				if (cr < 0) {
					_490 = _491;
					end = node;
				} else {
					_490 = node;
					end = _491;
				}
				nodes = [];
				while (_490 != end) {
					nodes.push(_490);
					_490 = this.tree._getNextNode(_490);
				}
				nodes.push(end);
				this.setSelection(nodes);
			} else {
				if (this.selection[node.id] && _48e) {
					this.removeTreeNode(node);
				} else {
					if (_48e) {
						this.addTreeNode(node, true);
					} else {
						this.setSelection([node]);
						this.anchor = node;
					}
				}
			}
		}
	}, forInSelectedItems: function (f, o) {
		o = o || dojo.global;
		for (var id in this.selection) {
			f.call(o, this.getItem(id), id, this);
		}
	}});
}
if (!dojo._hasResource["dijit.Tree"]) {
	dojo._hasResource["dijit.Tree"] = true;
	dojo.provide("dijit.Tree");
	dojo.declare("dijit._TreeNode", [dijit._Widget, dijit._Templated, dijit._Container, dijit._Contained, dijit._CssStateMixin], {item: null, isTreeNode: true, label: "", isExpandable: null, isExpanded: false, state: "UNCHECKED", templateString: dojo.cache("dijit", "templates/TreeNode.html", "<div class=\"dijitTreeNode\" role=\"presentation\"\n\t><div dojoAttachPoint=\"rowNode\" class=\"dijitTreeRow\" role=\"presentation\" dojoAttachEvent=\"onmouseenter:_onMouseEnter, onmouseleave:_onMouseLeave, onclick:_onClick, ondblclick:_onDblClick\"\n\t\t><img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint=\"expandoNode\" class=\"dijitTreeExpando\" role=\"presentation\"\n\t\t/><span dojoAttachPoint=\"expandoNodeText\" class=\"dijitExpandoText\" role=\"presentation\"\n\t\t></span\n\t\t><span dojoAttachPoint=\"contentNode\"\n\t\t\tclass=\"dijitTreeContent\" role=\"presentation\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint=\"iconNode\" class=\"dijitIcon dijitTreeIcon\" role=\"presentation\"\n\t\t\t/><span dojoAttachPoint=\"labelNode\" class=\"dijitTreeLabel\" role=\"treeitem\" tabindex=\"-1\" aria-selected=\"false\" dojoAttachEvent=\"onfocus:_onLabelFocus\"></span>\n\t\t</span\n\t></div>\n\t<div dojoAttachPoint=\"containerNode\" class=\"dijitTreeContainer\" role=\"presentation\" style=\"display: none;\"></div>\n</div>\n"), baseClass: "dijitTreeNode", cssStateNodes: {rowNode: "dijitTreeRow", labelNode: "dijitTreeLabel"}, attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {label: {node: "labelNode", type: "innerText"}, tooltip: {node: "rowNode", type: "attribute", attribute: "title"}}), buildRendering: function () {
		this.inherited(arguments);
		this._setExpando();
		this._updateItemClasses(this.item);
		if (this.isExpandable) {
			dijit.setWaiState(this.labelNode, "expanded", this.isExpanded);
		}
		this.setSelected(false);
	}, _setIndentAttr: function (_492) {
		var _493 = (Math.max(_492, 0) * this.tree._nodePixelIndent) + "px";
		dojo.style(this.domNode, "backgroundPosition", _493 + " 0px");
		dojo.style(this.rowNode, this.isLeftToRight() ? "paddingLeft" : "paddingRight", _493);
		dojo.forEach(this.getChildren(), function (_494) {
			_494.set("indent", _492 + 1);
		});
		this._set("indent", _492);
	}, markProcessing: function () {
		this.state = "LOADING";
		this._setExpando(true);
	}, unmarkProcessing: function () {
		this._setExpando(false);
	}, _updateItemClasses: function (item) {
		var tree = this.tree, _495 = tree.model;
		if (tree._v10Compat && item === _495.root) {
			item = null;
		}
		this._applyClassAndStyle(item, "icon", "Icon");
		this._applyClassAndStyle(item, "label", "Label");
		this._applyClassAndStyle(item, "row", "Row");
	}, _applyClassAndStyle: function (item, _496, _497) {
		var _498 = "_" + _496 + "Class";
		var _499 = _496 + "Node";
		var _49a = this[_498];
		this[_498] = this.tree["get" + _497 + "Class"](item, this.isExpanded);
		dojo.replaceClass(this[_499], this[_498] || "", _49a || "");
		dojo.style(this[_499], this.tree["get" + _497 + "Style"](item, this.isExpanded) || {});
	}, _updateLayout: function () {
		var _49b = this.getParent();
		if (!_49b || _49b.rowNode.style.display == "none") {
			dojo.addClass(this.domNode, "dijitTreeIsRoot");
		} else {
			dojo.toggleClass(this.domNode, "dijitTreeIsLast", !this.getNextSibling());
		}
	}, _setExpando: function (_49c) {
		var _49d = ["dijitTreeExpandoLoading", "dijitTreeExpandoOpened", "dijitTreeExpandoClosed", "dijitTreeExpandoLeaf"], _49e = ["*", "-", "+", "*"], idx = _49c ? 0 : (this.isExpandable ? (this.isExpanded ? 1 : 2) : 3);
		dojo.replaceClass(this.expandoNode, _49d[idx], _49d);
		this.expandoNodeText.innerHTML = _49e[idx];
	}, expand: function () {
		if (this._expandDeferred) {
			return this._expandDeferred;
		}
		this._wipeOut && this._wipeOut.stop();
		this.isExpanded = true;
		dijit.setWaiState(this.labelNode, "expanded", "true");
		if (this.tree.showRoot || this !== this.tree.rootNode) {
			dijit.setWaiRole(this.containerNode, "group");
		}
		dojo.addClass(this.contentNode, "dijitTreeContentExpanded");
		this._setExpando();
		this._updateItemClasses(this.item);
		if (this == this.tree.rootNode) {
			dijit.setWaiState(this.tree.domNode, "expanded", "true");
		}
		var def, _49f = dojo.fx.wipeIn({node: this.containerNode, duration: dijit.defaultDuration, onEnd: function () {
			def.callback(true);
		}});
		def = (this._expandDeferred = new dojo.Deferred(function () {
			_49f.stop();
		}));
		_49f.play();
		return def;
	}, collapse: function () {
		if (!this.isExpanded) {
			return;
		}
		if (this._expandDeferred) {
			this._expandDeferred.cancel();
			delete this._expandDeferred;
		}
		this.isExpanded = false;
		dijit.setWaiState(this.labelNode, "expanded", "false");
		if (this == this.tree.rootNode) {
			dijit.setWaiState(this.tree.domNode, "expanded", "false");
		}
		dojo.removeClass(this.contentNode, "dijitTreeContentExpanded");
		this._setExpando();
		this._updateItemClasses(this.item);
		if (!this._wipeOut) {
			this._wipeOut = dojo.fx.wipeOut({node: this.containerNode, duration: dijit.defaultDuration});
		}
		this._wipeOut.play();
	}, indent: 0, setChildItems: function (_4a0) {
		var tree = this.tree, _4a1 = tree.model, defs = [];
		dojo.forEach(this.getChildren(), function (_4a2) {
			dijit._Container.prototype.removeChild.call(this, _4a2);
		}, this);
		this.state = "LOADED";
		if (_4a0 && _4a0.length > 0) {
			this.isExpandable = true;
			dojo.forEach(_4a0, function (item) {
				var id = _4a1.getIdentity(item), _4a3 = tree._itemNodesMap[id], node;
				if (_4a3) {
					for (var i = 0; i < _4a3.length; i++) {
						if (_4a3[i] && !_4a3[i].getParent()) {
							node = _4a3[i];
							node.set("indent", this.indent + 1);
							break;
						}
					}
				}
				if (!node) {
					node = this.tree._createTreeNode({item: item, tree: tree, isExpandable: _4a1.mayHaveChildren(item), label: tree.getLabel(item), tooltip: tree.getTooltip(item), dir: tree.dir, lang: tree.lang, indent: this.indent + 1});
					if (_4a3) {
						_4a3.push(node);
					} else {
						tree._itemNodesMap[id] = [node];
					}
				}
				this.addChild(node);
				if (this.tree.autoExpand || this.tree._state(item)) {
					defs.push(tree._expandNode(node));
				}
			}, this);
			dojo.forEach(this.getChildren(), function (_4a4, idx) {
				_4a4._updateLayout();
			});
		} else {
			this.isExpandable = false;
		}
		if (this._setExpando) {
			this._setExpando(false);
		}
		this._updateItemClasses(this.item);
		if (this == tree.rootNode) {
			var fc = this.tree.showRoot ? this : this.getChildren()[0];
			if (fc) {
				fc.setFocusable(true);
				tree.lastFocused = fc;
			} else {
				tree.domNode.setAttribute("tabIndex", "0");
			}
		}
		return new dojo.DeferredList(defs);
	}, getTreePath: function () {
		var node = this;
		var path = [];
		while (node && node !== this.tree.rootNode) {
			path.unshift(node.item);
			node = node.getParent();
		}
		path.unshift(this.tree.rootNode.item);
		return path;
	}, getIdentity: function () {
		return this.tree.model.getIdentity(this.item);
	}, removeChild: function (node) {
		this.inherited(arguments);
		var _4a5 = this.getChildren();
		if (_4a5.length == 0) {
			this.isExpandable = false;
			this.collapse();
		}
		dojo.forEach(_4a5, function (_4a6) {
			_4a6._updateLayout();
		});
	}, makeExpandable: function () {
		this.isExpandable = true;
		this._setExpando(false);
	}, _onLabelFocus: function (evt) {
		this.tree._onNodeFocus(this);
	}, setSelected: function (_4a7) {
		dijit.setWaiState(this.labelNode, "selected", _4a7);
		dojo.toggleClass(this.rowNode, "dijitTreeRowSelected", _4a7);
	}, setFocusable: function (_4a8) {
		this.labelNode.setAttribute("tabIndex", _4a8 ? "0" : "-1");
	}, _onClick: function (evt) {
		this.tree._onClick(this, evt);
	}, _onDblClick: function (evt) {
		this.tree._onDblClick(this, evt);
	}, _onMouseEnter: function (evt) {
		this.tree._onNodeMouseEnter(this, evt);
	}, _onMouseLeave: function (evt) {
		this.tree._onNodeMouseLeave(this, evt);
	}});
	dojo.declare("dijit.Tree", [dijit._Widget, dijit._Templated], {store: null, model: null, query: null, label: "", showRoot: true, childrenAttr: ["children"], paths: [], path: [], selectedItems: null, selectedItem: null, openOnClick: false, openOnDblClick: false, templateString: dojo.cache("dijit", "templates/Tree.html", "<div class=\"dijitTree dijitTreeContainer\" role=\"tree\"\n\tdojoAttachEvent=\"onkeypress:_onKeyPress\">\n\t<div class=\"dijitInline dijitTreeIndent\" style=\"position: absolute; top: -9999px\" dojoAttachPoint=\"indentDetector\"></div>\n</div>\n"), persist: true, autoExpand: false, dndController: "dijit.tree._dndSelector", dndParams: ["onDndDrop", "itemCreator", "onDndCancel", "checkAcceptance", "checkItemAcceptance", "dragThreshold", "betweenThreshold"], onDndDrop: null, itemCreator: null, onDndCancel: null, checkAcceptance: null, checkItemAcceptance: null, dragThreshold: 5, betweenThreshold: 0, _nodePixelIndent: 19, _publish: function (_4a9, _4aa) {
		dojo.publish(this.id, [dojo.mixin({tree: this, event: _4a9}, _4aa || {})]);
	}, postMixInProperties: function () {
		this.tree = this;
		if (this.autoExpand) {
			this.persist = false;
		}
		this._itemNodesMap = {};
		if (!this.cookieName) {
			this.cookieName = this.id + "SaveStateCookie";
		}
		this._loadDeferred = new dojo.Deferred();
		this.inherited(arguments);
	}, postCreate: function () {
		this._initState();
		if (!this.model) {
			this._store2model();
		}
		this.connect(this.model, "onChange", "_onItemChange");
		this.connect(this.model, "onChildrenChange", "_onItemChildrenChange");
		this.connect(this.model, "onDelete", "_onItemDelete");
		this._load();
		this.inherited(arguments);
		if (this.dndController) {
			if (dojo.isString(this.dndController)) {
				this.dndController = dojo.getObject(this.dndController);
			}
			var _4ab = {};
			for (var i = 0; i < this.dndParams.length; i++) {
				if (this[this.dndParams[i]]) {
					_4ab[this.dndParams[i]] = this[this.dndParams[i]];
				}
			}
			this.dndController = new this.dndController(this, _4ab);
		}
	}, _store2model: function () {
		this._v10Compat = true;
		dojo.deprecated("Tree: from version 2.0, should specify a model object rather than a store/query");
		var _4ac = {id: this.id + "_ForestStoreModel", store: this.store, query: this.query, childrenAttrs: this.childrenAttr};
		if (this.params.mayHaveChildren) {
			_4ac.mayHaveChildren = dojo.hitch(this, "mayHaveChildren");
		}
		if (this.params.getItemChildren) {
			_4ac.getChildren = dojo.hitch(this, function (item, _4ad, _4ae) {
				this.getItemChildren((this._v10Compat && item === this.model.root) ? null : item, _4ad, _4ae);
			});
		}
		this.model = new dijit.tree.ForestStoreModel(_4ac);
		this.showRoot = Boolean(this.label);
	}, onLoad: function () {
	}, _load: function () {
		this.model.getRoot(dojo.hitch(this, function (item) {
			var rn = (this.rootNode = this.tree._createTreeNode({item: item, tree: this, isExpandable: true, label: this.label || this.getLabel(item), indent: this.showRoot ? 0 : -1}));
			if (!this.showRoot) {
				rn.rowNode.style.display = "none";
				dijit.setWaiRole(this.domNode, "presentation");
				dijit.setWaiRole(rn.labelNode, "presentation");
				dijit.setWaiRole(rn.containerNode, "tree");
			}
			this.domNode.appendChild(rn.domNode);
			var _4af = this.model.getIdentity(item);
			if (this._itemNodesMap[_4af]) {
				this._itemNodesMap[_4af].push(rn);
			} else {
				this._itemNodesMap[_4af] = [rn];
			}
			rn._updateLayout();
			this._expandNode(rn).addCallback(dojo.hitch(this, function () {
				this._loadDeferred.callback(true);
				this.onLoad();
			}));
		}), function (err) {
			console.error(this, ": error loading root: ", err);
		});
	}, getNodesByItem: function (item) {
		if (!item) {
			return [];
		}
		var _4b0 = dojo.isString(item) ? item : this.model.getIdentity(item);
		return [].concat(this._itemNodesMap[_4b0]);
	}, _setSelectedItemAttr: function (item) {
		this.set("selectedItems", [item]);
	}, _setSelectedItemsAttr: function (_4b1) {
		var tree = this;
		this._loadDeferred.addCallback(dojo.hitch(this, function () {
			var _4b2 = dojo.map(_4b1, function (item) {
				return (!item || dojo.isString(item)) ? item : tree.model.getIdentity(item);
			});
			var _4b3 = [];
			dojo.forEach(_4b2, function (id) {
				_4b3 = _4b3.concat(tree._itemNodesMap[id] || []);
			});
			this.set("selectedNodes", _4b3);
		}));
	}, _setPathAttr: function (path) {
		if (path.length) {
			return this.set("paths", [path]);
		} else {
			return this.set("paths", []);
		}
	}, _setPathsAttr: function (_4b4) {
		var tree = this;
		return new dojo.DeferredList(dojo.map(_4b4, function (path) {
			var d = new dojo.Deferred();
			path = dojo.map(path, function (item) {
				return dojo.isString(item) ? item : tree.model.getIdentity(item);
			});
			if (path.length) {
				tree._loadDeferred.addCallback(function () {
					_4b5(path, [tree.rootNode], d);
				});
			} else {
				d.errback("Empty path");
			}
			return d;
		})).addCallback(_4b6);
		function _4b5(path, _4b7, def) {
			var _4b8 = path.shift();
			var _4b9 = dojo.filter(_4b7, function (node) {
				return node.getIdentity() == _4b8;
			})[0];
			if (!!_4b9) {
				if (path.length) {
					tree._expandNode(_4b9).addCallback(function () {
						_4b5(path, _4b9.getChildren(), def);
					});
				} else {
					def.callback(_4b9);
				}
			} else {
				def.errback("Could not expand path at " + _4b8);
			}
		};
		function _4b6(_4ba) {
			tree.set("selectedNodes", dojo.map(dojo.filter(_4ba, function (x) {
				return x[0];
			}), function (x) {
				return x[1];
			}));
		};
	}, _setSelectedNodeAttr: function (node) {
		this.set("selectedNodes", [node]);
	}, _setSelectedNodesAttr: function (_4bb) {
		this._loadDeferred.addCallback(dojo.hitch(this, function () {
			this.dndController.setSelection(_4bb);
		}));
	}, mayHaveChildren: function (item) {
	}, getItemChildren: function (_4bc, _4bd) {
	}, getLabel: function (item) {
		return this.model.getLabel(item);
	}, getIconClass: function (item, _4be) {
		return (!item || this.model.mayHaveChildren(item)) ? (_4be ? "dijitFolderOpened" : "dijitFolderClosed") : "dijitLeaf";
	}, getLabelClass: function (item, _4bf) {
	}, getRowClass: function (item, _4c0) {
	}, getIconStyle: function (item, _4c1) {
	}, getLabelStyle: function (item, _4c2) {
	}, getRowStyle: function (item, _4c3) {
	}, getTooltip: function (item) {
		return "";
	}, _onKeyPress: function (e) {
		if (e.altKey) {
			return;
		}
		var dk = dojo.keys;
		var _4c4 = dijit.getEnclosingWidget(e.target);
		if (!_4c4) {
			return;
		}
		var key = e.charOrCode;
		if (typeof key == "string" && key != " ") {
			if (!e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
				this._onLetterKeyNav({node: _4c4, key: key.toLowerCase()});
				dojo.stopEvent(e);
			}
		} else {
			if (this._curSearch) {
				clearTimeout(this._curSearch.timer);
				delete this._curSearch;
			}
			var map = this._keyHandlerMap;
			if (!map) {
				map = {};
				map[dk.ENTER] = "_onEnterKey";
				map[dk.SPACE] = map[" "] = "_onEnterKey";
				map[this.isLeftToRight() ? dk.LEFT_ARROW : dk.RIGHT_ARROW] = "_onLeftArrow";
				map[this.isLeftToRight() ? dk.RIGHT_ARROW : dk.LEFT_ARROW] = "_onRightArrow";
				map[dk.UP_ARROW] = "_onUpArrow";
				map[dk.DOWN_ARROW] = "_onDownArrow";
				map[dk.HOME] = "_onHomeKey";
				map[dk.END] = "_onEndKey";
				this._keyHandlerMap = map;
			}
			if (this._keyHandlerMap[key]) {
				this[this._keyHandlerMap[key]]({node: _4c4, item: _4c4.item, evt: e});
				dojo.stopEvent(e);
			}
		}
	}, _onEnterKey: function (_4c5) {
		this._publish("execute", {item: _4c5.item, node: _4c5.node});
		this.dndController.userSelect(_4c5.node, dojo.isCopyKey(_4c5.evt), _4c5.evt.shiftKey);
		this.onClick(_4c5.item, _4c5.node, _4c5.evt);
	}, _onDownArrow: function (_4c6) {
		var node = this._getNextNode(_4c6.node);
		if (node && node.isTreeNode) {
			this.focusNode(node);
		}
	}, _onUpArrow: function (_4c7) {
		var node = _4c7.node;
		var _4c8 = node.getPreviousSibling();
		if (_4c8) {
			node = _4c8;
			while (node.isExpandable && node.isExpanded && node.hasChildren()) {
				var _4c9 = node.getChildren();
				node = _4c9[_4c9.length - 1];
			}
		} else {
			var _4ca = node.getParent();
			if (!(!this.showRoot && _4ca === this.rootNode)) {
				node = _4ca;
			}
		}
		if (node && node.isTreeNode) {
			this.focusNode(node);
		}
	}, _onRightArrow: function (_4cb) {
		var node = _4cb.node;
		if (node.isExpandable && !node.isExpanded) {
			this._expandNode(node);
		} else {
			if (node.hasChildren()) {
				node = node.getChildren()[0];
				if (node && node.isTreeNode) {
					this.focusNode(node);
				}
			}
		}
	}, _onLeftArrow: function (_4cc) {
		var node = _4cc.node;
		if (node.isExpandable && node.isExpanded) {
			this._collapseNode(node);
		} else {
			var _4cd = node.getParent();
			if (_4cd && _4cd.isTreeNode && !(!this.showRoot && _4cd === this.rootNode)) {
				this.focusNode(_4cd);
			}
		}
	}, _onHomeKey: function () {
		var node = this._getRootOrFirstNode();
		if (node) {
			this.focusNode(node);
		}
	}, _onEndKey: function (_4ce) {
		var node = this.rootNode;
		while (node.isExpanded) {
			var c = node.getChildren();
			node = c[c.length - 1];
		}
		if (node && node.isTreeNode) {
			this.focusNode(node);
		}
	}, multiCharSearchDuration: 250, _onLetterKeyNav: function (_4cf) {
		var cs = this._curSearch;
		if (cs) {
			cs.pattern = cs.pattern + _4cf.key;
			clearTimeout(cs.timer);
		} else {
			cs = this._curSearch = {pattern: _4cf.key, startNode: _4cf.node};
		}
		var self = this;
		cs.timer = setTimeout(function () {
			delete self._curSearch;
		}, this.multiCharSearchDuration);
		var node = cs.startNode;
		do {
			node = this._getNextNode(node);
			if (!node) {
				node = this._getRootOrFirstNode();
			}
		} while (node !== cs.startNode && (node.label.toLowerCase().substr(0, cs.pattern.length) != cs.pattern));
		if (node && node.isTreeNode) {
			if (node !== cs.startNode) {
				this.focusNode(node);
			}
		}
	}, isExpandoNode: function (node, _4d0) {
		return dojo.isDescendant(node, _4d0.expandoNode);
	}, _onClick: function (_4d1, e) {
		var _4d2 = e.target, _4d3 = this.isExpandoNode(_4d2, _4d1);
		if ((this.openOnClick && _4d1.isExpandable) || _4d3) {
			if (_4d1.isExpandable) {
				this._onExpandoClick({node: _4d1});
			}
		} else {
			this._publish("execute", {item: _4d1.item, node: _4d1, evt: e});
			this.onClick(_4d1.item, _4d1, e);
			this.focusNode(_4d1);
		}
		dojo.stopEvent(e);
	}, _onDblClick: function (_4d4, e) {
		var _4d5 = e.target, _4d6 = (_4d5 == _4d4.expandoNode || _4d5 == _4d4.expandoNodeText);
		if ((this.openOnDblClick && _4d4.isExpandable) || _4d6) {
			if (_4d4.isExpandable) {
				this._onExpandoClick({node: _4d4});
			}
		} else {
			this._publish("execute", {item: _4d4.item, node: _4d4, evt: e});
			this.onDblClick(_4d4.item, _4d4, e);
			this.focusNode(_4d4);
		}
		dojo.stopEvent(e);
	}, _onExpandoClick: function (_4d7) {
		var node = _4d7.node;
		this.focusNode(node);
		if (node.isExpanded) {
			this._collapseNode(node);
		} else {
			this._expandNode(node);
		}
	}, onClick: function (item, node, evt) {
	}, onDblClick: function (item, node, evt) {
	}, onOpen: function (item, node) {
	}, onClose: function (item, node) {
	}, _getNextNode: function (node) {
		if (node.isExpandable && node.isExpanded && node.hasChildren()) {
			return node.getChildren()[0];
		} else {
			while (node && node.isTreeNode) {
				var _4d8 = node.getNextSibling();
				if (_4d8) {
					return _4d8;
				}
				node = node.getParent();
			}
			return null;
		}
	}, _getRootOrFirstNode: function () {
		return this.showRoot ? this.rootNode : this.rootNode.getChildren()[0];
	}, _collapseNode: function (node) {
		if (node._expandNodeDeferred) {
			delete node._expandNodeDeferred;
		}
		if (node.isExpandable) {
			if (node.state == "LOADING") {
				return;
			}
			node.collapse();
			this.onClose(node.item, node);
			if (node.item) {
				this._state(node.item, false);
				this._saveState();
			}
		}
	}, _expandNode: function (node, _4d9) {
		if (node._expandNodeDeferred && !_4d9) {
			return node._expandNodeDeferred;
		}
		var _4da = this.model, item = node.item, _4db = this;
		switch (node.state) {
			case "UNCHECKED":
				node.markProcessing();
				var def = (node._expandNodeDeferred = new dojo.Deferred());
				_4da.getChildren(item, function (_4dc) {
					node.unmarkProcessing();
					var scid = node.setChildItems(_4dc);
					var ed = _4db._expandNode(node, true);
					scid.addCallback(function () {
						ed.addCallback(function () {
							def.callback();
						});
					});
				}, function (err) {
					console.error(_4db, ": error loading root children: ", err);
				});
				break;
			default:
				def = (node._expandNodeDeferred = node.expand());
				this.onOpen(node.item, node);
				if (item) {
					this._state(item, true);
					this._saveState();
				}
		}
		return def;
	}, focusNode: function (node) {
		dijit.focus(node.labelNode);
	}, _onNodeFocus: function (node) {
		if (node && node != this.lastFocused) {
			if (this.lastFocused && !this.lastFocused._destroyed) {
				this.lastFocused.setFocusable(false);
			}
			node.setFocusable(true);
			this.lastFocused = node;
		}
	}, _onNodeMouseEnter: function (node) {
	}, _onNodeMouseLeave: function (node) {
	}, _onItemChange: function (item) {
		var _4dd = this.model, _4de = _4dd.getIdentity(item), _4df = this._itemNodesMap[_4de];
		if (_4df) {
			var _4e0 = this.getLabel(item), _4e1 = this.getTooltip(item);
			dojo.forEach(_4df, function (node) {
				node.set({item: item, label: _4e0, tooltip: _4e1});
				node._updateItemClasses(item);
			});
		}
	}, _onItemChildrenChange: function (_4e2, _4e3) {
		var _4e4 = this.model, _4e5 = _4e4.getIdentity(_4e2), _4e6 = this._itemNodesMap[_4e5];
		if (_4e6) {
			dojo.forEach(_4e6, function (_4e7) {
				_4e7.setChildItems(_4e3);
			});
		}
	}, _onItemDelete: function (item) {
		var _4e8 = this.model, _4e9 = _4e8.getIdentity(item), _4ea = this._itemNodesMap[_4e9];
		if (_4ea) {
			dojo.forEach(_4ea, function (node) {
				this.dndController.removeTreeNode(node);
				var _4eb = node.getParent();
				if (_4eb) {
					_4eb.removeChild(node);
				}
				node.destroyRecursive();
			}, this);
			delete this._itemNodesMap[_4e9];
		}
	}, _initState: function () {
		if (this.persist) {
			var _4ec = dojo.cookie(this.cookieName);
			this._openedItemIds = {};
			if (_4ec) {
				dojo.forEach(_4ec.split(","), function (item) {
					this._openedItemIds[item] = true;
				}, this);
			}
		}
	}, _state: function (item, _4ed) {
		if (!this.persist) {
			return false;
		}
		var id = this.model.getIdentity(item);
		if (arguments.length === 1) {
			return this._openedItemIds[id];
		}
		if (_4ed) {
			this._openedItemIds[id] = true;
		} else {
			delete this._openedItemIds[id];
		}
	}, _saveState: function () {
		if (!this.persist) {
			return;
		}
		var ary = [];
		for (var id in this._openedItemIds) {
			ary.push(id);
		}
		dojo.cookie(this.cookieName, ary.join(","), {expires: 365});
	}, destroy: function () {
		if (this._curSearch) {
			clearTimeout(this._curSearch.timer);
			delete this._curSearch;
		}
		if (this.rootNode) {
			this.rootNode.destroyRecursive();
		}
		if (this.dndController && !dojo.isString(this.dndController)) {
			this.dndController.destroy();
		}
		this.rootNode = null;
		this.inherited(arguments);
	}, destroyRecursive: function () {
		this.destroy();
	}, resize: function (_4ee) {
		if (_4ee) {
			dojo.marginBox(this.domNode, _4ee);
		}
		this._nodePixelIndent = dojo._getMarginSize(this.tree.indentDetector).w;
		if (this.tree.rootNode) {
			this.tree.rootNode.set("indent", this.showRoot ? 0 : -1);
		}
	}, _createTreeNode: function (args) {
		return new dijit._TreeNode(args);
	}});
}
if (!dojo._hasResource["dijit.InlineEditBox"]) {
	dojo._hasResource["dijit.InlineEditBox"] = true;
	dojo.provide("dijit.InlineEditBox");
	dojo.declare("dijit.InlineEditBox", dijit._Widget, {editing: false, autoSave: true, buttonSave: "", buttonCancel: "", renderAsHtml: false, editor: "dijit.form.TextBox", editorWrapper: "dijit._InlineEditor", editorParams: {}, disabled: false, onChange: function (_4ef) {
	}, onCancel: function () {
	}, width: "100%", value: "", noValueIndicator: dojo.isIE <= 6 ? "<span style='font-family: wingdings; text-decoration: underline;'>&nbsp;&nbsp;&nbsp;&nbsp;&#x270d;&nbsp;&nbsp;&nbsp;&nbsp;</span>" : "<span style='text-decoration: underline;'>&nbsp;&nbsp;&nbsp;&nbsp;&#x270d;&nbsp;&nbsp;&nbsp;&nbsp;</span>", constructor: function () {
		this.editorParams = {};
	}, postMixInProperties: function () {
		this.inherited(arguments);
		this.displayNode = this.srcNodeRef;
		var _4f0 = {ondijitclick: "_onClick", onmouseover: "_onMouseOver", onmouseout: "_onMouseOut", onfocus: "_onMouseOver", onblur: "_onMouseOut"};
		for (var name in _4f0) {
			this.connect(this.displayNode, name, _4f0[name]);
		}
		dijit.setWaiRole(this.displayNode, "button");
		if (!this.displayNode.getAttribute("tabIndex")) {
			this.displayNode.setAttribute("tabIndex", 0);
		}
		if (!this.value && !("value" in this.params)) {
			this.value = dojo.trim(this.renderAsHtml ? this.displayNode.innerHTML : (this.displayNode.innerText || this.displayNode.textContent || ""));
		}
		if (!this.value) {
			this.displayNode.innerHTML = this.noValueIndicator;
		}
		dojo.addClass(this.displayNode, "dijitInlineEditBoxDisplayMode");
	}, setDisabled: function (_4f1) {
		dojo.deprecated("dijit.InlineEditBox.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
		this.set("disabled", _4f1);
	}, _setDisabledAttr: function (_4f2) {
		dijit.setWaiState(this.domNode, "disabled", _4f2);
		if (_4f2) {
			this.displayNode.removeAttribute("tabIndex");
		} else {
			this.displayNode.setAttribute("tabIndex", 0);
		}
		dojo.toggleClass(this.displayNode, "dijitInlineEditBoxDisplayModeDisabled", _4f2);
		this._set("disabled", _4f2);
	}, _onMouseOver: function () {
		if (!this.disabled) {
			dojo.addClass(this.displayNode, "dijitInlineEditBoxDisplayModeHover");
		}
	}, _onMouseOut: function () {
		dojo.removeClass(this.displayNode, "dijitInlineEditBoxDisplayModeHover");
	}, _onClick: function (e) {
		if (this.disabled) {
			return;
		}
		if (e) {
			dojo.stopEvent(e);
		}
		this._onMouseOut();
		setTimeout(dojo.hitch(this, "edit"), 0);
	}, edit: function () {
		if (this.disabled || this.editing) {
			return;
		}
		this.editing = true;
		this._savedPosition = dojo.style(this.displayNode, "position") || "static";
		this._savedOpacity = dojo.style(this.displayNode, "opacity") || "1";
		this._savedTabIndex = dojo.attr(this.displayNode, "tabIndex") || "0";
		if (this.wrapperWidget) {
			var ew = this.wrapperWidget.editWidget;
			ew.set("displayedValue" in ew ? "displayedValue" : "value", this.value);
		} else {
			var _4f3 = dojo.create("span", null, this.domNode, "before");
			var ewc = typeof this.editorWrapper == "string" ? dojo.getObject(this.editorWrapper) : this.editorWrapper;
			this.wrapperWidget = new ewc({value: this.value, buttonSave: this.buttonSave, buttonCancel: this.buttonCancel, dir: this.dir, lang: this.lang, tabIndex: this._savedTabIndex, editor: this.editor, inlineEditBox: this, sourceStyle: dojo.getComputedStyle(this.displayNode), save: dojo.hitch(this, "save"), cancel: dojo.hitch(this, "cancel")}, _4f3);
			if (!this._started) {
				this.startup();
			}
		}
		var ww = this.wrapperWidget;
		if (dojo.isIE) {
			dijit.focus(dijit.getFocus());
		}
		dojo.style(this.displayNode, {position: "absolute", opacity: "0", display: "none"});
		dojo.style(ww.domNode, {position: this._savedPosition, visibility: "visible", opacity: "1"});
		dojo.attr(this.displayNode, "tabIndex", "-1");
		setTimeout(dojo.hitch(this, function () {
			ww.focus();
			ww._resetValue = ww.getValue();
		}), 0);
	}, _onBlur: function () {
		this.inherited(arguments);
		if (!this.editing) {
		}
	}, destroy: function () {
		if (this.wrapperWidget && !this.wrapperWidget._destroyed) {
			this.wrapperWidget.destroy();
			delete this.wrapperWidget;
		}
		this.inherited(arguments);
	}, _showText: function (_4f4) {
		var ww = this.wrapperWidget;
		dojo.style(ww.domNode, {position: "absolute", visibility: "hidden", opacity: "0"});
		dojo.style(this.displayNode, {position: this._savedPosition, opacity: this._savedOpacity, display: ""});
		dojo.attr(this.displayNode, "tabIndex", this._savedTabIndex);
		if (_4f4) {
			dijit.focus(this.displayNode);
		}
	}, save: function (_4f5) {
		if (this.disabled || !this.editing) {
			return;
		}
		this.editing = false;
		var ww = this.wrapperWidget;
		var _4f6 = ww.getValue();
		this.set("value", _4f6);
		this._showText(_4f5);
	}, setValue: function (val) {
		dojo.deprecated("dijit.InlineEditBox.setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
		return this.set("value", val);
	}, _setValueAttr: function (val) {
		val = dojo.trim(val);
		var _4f7 = this.renderAsHtml ? val : val.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/\n/g, "<br>");
		this.displayNode.innerHTML = _4f7 || this.noValueIndicator;
		this._set("value", val);
		if (this._started) {
			setTimeout(dojo.hitch(this, "onChange", val), 0);
		}
	}, getValue: function () {
		dojo.deprecated("dijit.InlineEditBox.getValue() is deprecated.  Use get('value') instead.", "", "2.0");
		return this.get("value");
	}, cancel: function (_4f8) {
		if (this.disabled || !this.editing) {
			return;
		}
		this.editing = false;
		setTimeout(dojo.hitch(this, "onCancel"), 0);
		this._showText(_4f8);
	}});
	dojo.declare("dijit._InlineEditor", [dijit._Widget, dijit._Templated], {templateString: dojo.cache("dijit", "templates/InlineEditBox.html", "<span data-dojo-attach-point=\"editNode\" role=\"presentation\" style=\"position: absolute; visibility:hidden\" class=\"dijitReset dijitInline\"\n\tdata-dojo-attach-event=\"onkeypress: _onKeyPress\"\n\t><span data-dojo-attach-point=\"editorPlaceholder\"></span\n\t><span data-dojo-attach-point=\"buttonContainer\"\n\t\t><button data-dojo-type=\"dijit.form.Button\" data-dojo-props=\"label: '${buttonSave}', 'class': 'saveButton'\"\n\t\t\tdata-dojo-attach-point=\"saveButton\" data-dojo-attach-event=\"onClick:save\"></button\n\t\t><button data-dojo-type=\"dijit.form.Button\"  data-dojo-props=\"label: '${buttonCancel}', 'class': 'cancelButton'\"\n\t\t\tdata-dojo-attach-point=\"cancelButton\" data-dojo-attach-event=\"onClick:cancel\"></button\n\t></span\n></span>\n"), widgetsInTemplate: true, postMixInProperties: function () {
		this.inherited(arguments);
		this.messages = dojo.i18n.getLocalization("dijit", "common", this.lang);
		dojo.forEach(["buttonSave", "buttonCancel"], function (prop) {
			if (!this[prop]) {
				this[prop] = this.messages[prop];
			}
		}, this);
	}, buildRendering: function () {
		this.inherited(arguments);
		var cls = typeof this.editor == "string" ? dojo.getObject(this.editor) : this.editor;
		var _4f9 = this.sourceStyle, _4fa = "line-height:" + _4f9.lineHeight + ";", _4fb = dojo.getComputedStyle(this.domNode);
		dojo.forEach(["Weight", "Family", "Size", "Style"], function (prop) {
			var _4fc = _4f9["font" + prop], _4fd = _4fb["font" + prop];
			if (_4fd != _4fc) {
				_4fa += "font-" + prop + ":" + _4f9["font" + prop] + ";";
			}
		}, this);
		dojo.forEach(["marginTop", "marginBottom", "marginLeft", "marginRight"], function (prop) {
			this.domNode.style[prop] = _4f9[prop];
		}, this);
		var _4fe = this.inlineEditBox.width;
		if (_4fe == "100%") {
			_4fa += "width:100%;";
			this.domNode.style.display = "block";
		} else {
			_4fa += "width:" + (_4fe + (Number(_4fe) == _4fe ? "px" : "")) + ";";
		}
		var _4ff = dojo.delegate(this.inlineEditBox.editorParams, {style: _4fa, dir: this.dir, lang: this.lang});
		_4ff["displayedValue" in cls.prototype ? "displayedValue" : "value"] = this.value;
		this.editWidget = new cls(_4ff, this.editorPlaceholder);
		if (this.inlineEditBox.autoSave) {
			dojo.destroy(this.buttonContainer);
		}
	}, postCreate: function () {
		this.inherited(arguments);
		var ew = this.editWidget;
		if (this.inlineEditBox.autoSave) {
			this.connect(ew, "onChange", "_onChange");
			this.connect(ew, "onKeyPress", "_onKeyPress");
		} else {
			if ("intermediateChanges" in ew) {
				ew.set("intermediateChanges", true);
				this.connect(ew, "onChange", "_onIntermediateChange");
				this.saveButton.set("disabled", true);
			}
		}
	}, _onIntermediateChange: function (val) {
		this.saveButton.set("disabled", (this.getValue() == this._resetValue) || !this.enableSave());
	}, destroy: function () {
		this.editWidget.destroy(true);
		this.inherited(arguments);
	}, getValue: function () {
		var ew = this.editWidget;
		return String(ew.get("displayedValue" in ew ? "displayedValue" : "value"));
	}, _onKeyPress: function (e) {
		if (this.inlineEditBox.autoSave && this.inlineEditBox.editing) {
			if (e.altKey || e.ctrlKey) {
				return;
			}
			if (e.charOrCode == dojo.keys.ESCAPE) {
				dojo.stopEvent(e);
				this.cancel(true);
			} else {
				if (e.charOrCode == dojo.keys.ENTER && e.target.tagName == "INPUT") {
					dojo.stopEvent(e);
					this._onChange();
				}
			}
		}
	}, _onBlur: function () {
		this.inherited(arguments);
		if (this.inlineEditBox.autoSave && this.inlineEditBox.editing) {
			if (this.getValue() == this._resetValue) {
				this.cancel(false);
			} else {
				if (this.enableSave()) {
					this.save(false);
				}
			}
		}
	}, _onChange: function () {
		if (this.inlineEditBox.autoSave && this.inlineEditBox.editing && this.enableSave()) {
			dojo.style(this.inlineEditBox.displayNode, {display: ""});
			dijit.focus(this.inlineEditBox.displayNode);
		}
	}, enableSave: function () {
		return (this.editWidget.isValid ? this.editWidget.isValid() : true);
	}, focus: function () {
		this.editWidget.focus();
		setTimeout(dojo.hitch(this, function () {
			if (this.editWidget.focusNode && this.editWidget.focusNode.tagName == "INPUT") {
				dijit.selectInputText(this.editWidget.focusNode);
			}
		}), 0);
	}});
}
if (!dojo._hasResource["dijit.form.Form"]) {
	dojo._hasResource["dijit.form.Form"] = true;
	dojo.provide("dijit.form.Form");
	dojo.declare("dijit.form.Form", [dijit._Widget, dijit._Templated, dijit.form._FormMixin, dijit.layout._ContentPaneResizeMixin], {name: "", action: "", method: "", encType: "", "accept-charset": "", accept: "", target: "", templateString: "<form dojoAttachPoint='containerNode' dojoAttachEvent='onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}></form>", attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {action: "", method: "", encType: "", "accept-charset": "", accept: "", target: ""}), postMixInProperties: function () {
		this.nameAttrSetting = this.name ? ("name='" + this.name + "'") : "";
		this.inherited(arguments);
	}, execute: function (_500) {
	}, onExecute: function () {
	}, _setEncTypeAttr: function (_501) {
		this.encType = _501;
		dojo.attr(this.domNode, "encType", _501);
		if (dojo.isIE) {
			this.domNode.encoding = _501;
		}
	}, postCreate: function () {
		if (dojo.isIE && this.srcNodeRef && this.srcNodeRef.attributes) {
			var item = this.srcNodeRef.attributes.getNamedItem("encType");
			if (item && !item.specified && (typeof item.value == "string")) {
				this.set("encType", item.value);
			}
		}
		this.inherited(arguments);
	}, reset: function (e) {
		var faux = {returnValue: true, preventDefault: function () {
			this.returnValue = false;
		}, stopPropagation: function () {
		}, currentTarget: e ? e.target : this.domNode, target: e ? e.target : this.domNode};
		if (!(this.onReset(faux) === false) && faux.returnValue) {
			this.inherited(arguments, []);
		}
	}, onReset: function (e) {
		return true;
	}, _onReset: function (e) {
		this.reset(e);
		dojo.stopEvent(e);
		return false;
	}, _onSubmit: function (e) {
		var fp = dijit.form.Form.prototype;
		if (this.execute != fp.execute || this.onExecute != fp.onExecute) {
			dojo.deprecated("dijit.form.Form:execute()/onExecute() are deprecated. Use onSubmit() instead.", "", "2.0");
			this.onExecute();
			this.execute(this.getValues());
		}
		if (this.onSubmit(e) === false) {
			dojo.stopEvent(e);
		}
	}, onSubmit: function (e) {
		return this.isValid();
	}, submit: function () {
		if (!(this.onSubmit() === false)) {
			this.containerNode.submit();
		}
	}});
}
if (!dojo._hasResource["dijit.form.ComboButton"]) {
	dojo._hasResource["dijit.form.ComboButton"] = true;
	dojo.provide("dijit.form.ComboButton");
}
if (!dojo._hasResource["dijit.form.ToggleButton"]) {
	dojo._hasResource["dijit.form.ToggleButton"] = true;
	dojo.provide("dijit.form.ToggleButton");
}
if (!dojo._hasResource["dijit.form.CheckBox"]) {
	dojo._hasResource["dijit.form.CheckBox"] = true;
	dojo.provide("dijit.form.CheckBox");
	dojo.declare("dijit.form.CheckBox", dijit.form.ToggleButton, {templateString: dojo.cache("dijit.form", "templates/CheckBox.html", "<div class=\"dijit dijitReset dijitInline\" role=\"presentation\"\n\t><input\n\t \t${!nameAttrSetting} type=\"${type}\" ${checkedAttrSetting}\n\t\tclass=\"dijitReset dijitCheckBoxInput\"\n\t\tdojoAttachPoint=\"focusNode\"\n\t \tdojoAttachEvent=\"onclick:_onClick\"\n/></div>\n"), baseClass: "dijitCheckBox", type: "checkbox", value: "on", readOnly: false, attributeMap: dojo.delegate(dijit.form._FormWidget.prototype.attributeMap, {readOnly: "focusNode"}), _setReadOnlyAttr: function (_502) {
		this._set("readOnly", _502);
		dojo.attr(this.focusNode, "readOnly", _502);
		dijit.setWaiState(this.focusNode, "readonly", _502);
	}, _setValueAttr: function (_503, _504) {
		if (typeof _503 == "string") {
			this._set("value", _503);
			dojo.attr(this.focusNode, "value", _503);
			_503 = true;
		}
		if (this._created) {
			this.set("checked", _503, _504);
		}
	}, _getValueAttr: function () {
		return (this.checked ? this.value : false);
	}, _setLabelAttr: undefined, postMixInProperties: function () {
		if (this.value == "") {
			this.value = "on";
		}
		this.checkedAttrSetting = this.checked ? "checked" : "";
		this.inherited(arguments);
	}, _fillContent: function (_505) {
	}, reset: function () {
		this._hasBeenBlurred = false;
		this.set("checked", this.params.checked || false);
		this._set("value", this.params.value || "on");
		dojo.attr(this.focusNode, "value", this.value);
	}, _onFocus: function () {
		if (this.id) {
			dojo.query("label[for='" + this.id + "']").addClass("dijitFocusedLabel");
		}
		this.inherited(arguments);
	}, _onBlur: function () {
		if (this.id) {
			dojo.query("label[for='" + this.id + "']").removeClass("dijitFocusedLabel");
		}
		this.inherited(arguments);
	}, _onClick: function (e) {
		if (this.readOnly) {
			dojo.stopEvent(e);
			return false;
		}
		return this.inherited(arguments);
	}});
	dojo.declare("dijit.form.RadioButton", dijit.form.CheckBox, {type: "radio", baseClass: "dijitRadio", _setCheckedAttr: function (_506) {
		this.inherited(arguments);
		if (!this._created) {
			return;
		}
		if (_506) {
			var _507 = this;
			dojo.query("INPUT[type=radio]", this.focusNode.form || dojo.doc).forEach(function (_508) {
				if (_508.name == _507.name && _508 != _507.focusNode && _508.form == _507.focusNode.form) {
					var _509 = dijit.getEnclosingWidget(_508);
					if (_509 && _509.checked) {
						_509.set("checked", false);
					}
				}
			});
		}
	}, _clicked: function (e) {
		if (!this.checked) {
			this.set("checked", true);
		}
	}});
}
if (!dojo._hasResource["dijit.form.RadioButton"]) {
	dojo._hasResource["dijit.form.RadioButton"] = true;
	dojo.provide("dijit.form.RadioButton");
}
if (!dojo._hasResource["dojo.cldr.monetary"]) {
	dojo._hasResource["dojo.cldr.monetary"] = true;
	dojo.provide("dojo.cldr.monetary");
	dojo.getObject("cldr.monetary", true, dojo);
	dojo.cldr.monetary.getData = function (code) {
		var _50a = {ADP: 0, AFN: 0, ALL: 0, AMD: 0, BHD: 3, BIF: 0, BYR: 0, CLF: 0, CLP: 0, COP: 0, CRC: 0, DJF: 0, ESP: 0, GNF: 0, GYD: 0, HUF: 0, IDR: 0, IQD: 0, IRR: 3, ISK: 0, ITL: 0, JOD: 3, JPY: 0, KMF: 0, KPW: 0, KRW: 0, KWD: 3, LAK: 0, LBP: 0, LUF: 0, LYD: 3, MGA: 0, MGF: 0, MMK: 0, MNT: 0, MRO: 0, MUR: 0, OMR: 3, PKR: 0, PYG: 0, RSD: 0, RWF: 0, SLL: 0, SOS: 0, STD: 0, SYP: 0, TMM: 0, TND: 3, TRL: 0, TZS: 0, UGX: 0, UZS: 0, VND: 0, VUV: 0, XAF: 0, XOF: 0, XPF: 0, YER: 0, ZMK: 0, ZWD: 0};
		var _50b = {CHF: 5};
		var _50c = _50a[code], _50d = _50b[code];
		if (typeof _50c == "undefined") {
			_50c = 2;
		}
		if (typeof _50d == "undefined") {
			_50d = 0;
		}
		return {places: _50c, round: _50d};
	};
}
if (!dojo._hasResource["dojo.currency"]) {
	dojo._hasResource["dojo.currency"] = true;
	dojo.provide("dojo.currency");
	dojo.getObject("currency", true, dojo);
	dojo.currency._mixInDefaults = function (_50e) {
		_50e = _50e || {};
		_50e.type = "currency";
		var _50f = dojo.i18n.getLocalization("dojo.cldr", "currency", _50e.locale) || {};
		var iso = _50e.currency;
		var data = dojo.cldr.monetary.getData(iso);
		dojo.forEach(["displayName", "symbol", "group", "decimal"], function (prop) {
			data[prop] = _50f[iso + "_" + prop];
		});
		data.fractional = [true, false];
		return dojo.mixin(data, _50e);
	};
	dojo.currency.format = function (_510, _511) {
		return dojo.number.format(_510, dojo.currency._mixInDefaults(_511));
	};
	dojo.currency.regexp = function (_512) {
		return dojo.number.regexp(dojo.currency._mixInDefaults(_512));
	};
	dojo.currency.parse = function (_513, _514) {
		return dojo.number.parse(_513, dojo.currency._mixInDefaults(_514));
	};
}
if (!dojo._hasResource["dijit.form.NumberTextBox"]) {
	dojo._hasResource["dijit.form.NumberTextBox"] = true;
	dojo.provide("dijit.form.NumberTextBox");
	dojo.declare("dijit.form.NumberTextBoxMixin", null, {regExpGen: dojo.number.regexp, value: NaN, editOptions: {pattern: "#.######"}, _formatter: dojo.number.format, _setConstraintsAttr: function (_515) {
		var _516 = typeof _515.places == "number" ? _515.places : 0;
		if (_516) {
			_516++;
		}
		if (typeof _515.max != "number") {
			_515.max = 9 * Math.pow(10, 15 - _516);
		}
		if (typeof _515.min != "number") {
			_515.min = -9 * Math.pow(10, 15 - _516);
		}
		this.inherited(arguments, [_515]);
		if (this.focusNode && this.focusNode.value && !isNaN(this.value)) {
			this.set("value", this.value);
		}
	}, _onFocus: function () {
		if (this.disabled) {
			return;
		}
		var val = this.get("value");
		if (typeof val == "number" && !isNaN(val)) {
			var _517 = this.format(val, this.constraints);
			if (_517 !== undefined) {
				this.textbox.value = _517;
			}
		}
		this.inherited(arguments);
	}, format: function (_518, _519) {
		var _51a = String(_518);
		if (typeof _518 != "number") {
			return _51a;
		}
		if (isNaN(_518)) {
			return "";
		}
		if (!("rangeCheck" in this && this.rangeCheck(_518, _519)) && _519.exponent !== false && /\de[-+]?\d/i.test(_51a)) {
			return _51a;
		}
		if (this.editOptions && this._focused) {
			_519 = dojo.mixin({}, _519, this.editOptions);
		}
		return this._formatter(_518, _519);
	}, _parser: dojo.number.parse, parse: function (_51b, _51c) {
		var v = this._parser(_51b, dojo.mixin({}, _51c, (this.editOptions && this._focused) ? this.editOptions : {}));
		if (this.editOptions && this._focused && isNaN(v)) {
			v = this._parser(_51b, _51c);
		}
		return v;
	}, _getDisplayedValueAttr: function () {
		var v = this.inherited(arguments);
		return isNaN(v) ? this.textbox.value : v;
	}, filter: function (_51d) {
		return (_51d === null || _51d === "" || _51d === undefined) ? NaN : this.inherited(arguments);
	}, serialize: function (_51e, _51f) {
		return (typeof _51e != "number" || isNaN(_51e)) ? "" : this.inherited(arguments);
	}, _setBlurValue: function () {
		var val = dojo.hitch(dojo.mixin({}, this, {_focused: true}), "get")("value");
		this._setValueAttr(val, true);
	}, _setValueAttr: function (_520, _521, _522) {
		if (_520 !== undefined && _522 === undefined) {
			_522 = String(_520);
			if (typeof _520 == "number") {
				if (isNaN(_520)) {
					_522 = "";
				} else {
					if (("rangeCheck" in this && this.rangeCheck(_520, this.constraints)) || this.constraints.exponent === false || !/\de[-+]?\d/i.test(_522)) {
						_522 = undefined;
					}
				}
			} else {
				if (!_520) {
					_522 = "";
					_520 = NaN;
				} else {
					_520 = undefined;
				}
			}
		}
		this.inherited(arguments, [_520, _521, _522]);
	}, _getValueAttr: function () {
		var v = this.inherited(arguments);
		if (isNaN(v) && this.textbox.value !== "") {
			if (this.constraints.exponent !== false && /\de[-+]?\d/i.test(this.textbox.value) && (new RegExp("^" + dojo.number._realNumberRegexp(dojo.mixin({}, this.constraints)) + "$").test(this.textbox.value))) {
				var n = Number(this.textbox.value);
				return isNaN(n) ? undefined : n;
			} else {
				return undefined;
			}
		} else {
			return v;
		}
	}, isValid: function (_523) {
		if (!this._focused || this._isEmpty(this.textbox.value)) {
			return this.inherited(arguments);
		} else {
			var v = this.get("value");
			if (!isNaN(v) && this.rangeCheck(v, this.constraints)) {
				if (this.constraints.exponent !== false && /\de[-+]?\d/i.test(this.textbox.value)) {
					return true;
				} else {
					return this.inherited(arguments);
				}
			} else {
				return false;
			}
		}
	}});
	dojo.declare("dijit.form.NumberTextBox", [dijit.form.RangeBoundTextBox, dijit.form.NumberTextBoxMixin], {baseClass: "dijitTextBox dijitNumberTextBox"});
}
if (!dojo._hasResource["dijit.form.CurrencyTextBox"]) {
	dojo._hasResource["dijit.form.CurrencyTextBox"] = true;
	dojo.provide("dijit.form.CurrencyTextBox");
	dojo.declare("dijit.form.CurrencyTextBox", dijit.form.NumberTextBox, {currency: "", baseClass: "dijitTextBox dijitCurrencyTextBox", regExpGen: function (_524) {
		return "(" + (this._focused ? this.inherited(arguments, [dojo.mixin({}, _524, this.editOptions)]) + "|" : "") + dojo.currency.regexp(_524) + ")";
	}, _formatter: dojo.currency.format, _parser: dojo.currency.parse, parse: function (_525, _526) {
		var v = this.inherited(arguments);
		if (isNaN(v) && /\d+/.test(_525)) {
			v = dojo.hitch(dojo.mixin({}, this, {_parser: dijit.form.NumberTextBox.prototype._parser}), "inherited")(arguments);
		}
		return v;
	}, _setConstraintsAttr: function (_527) {
		if (!_527.currency && this.currency) {
			_527.currency = this.currency;
		}
		this.inherited(arguments, [dojo.currency._mixInDefaults(dojo.mixin(_527, {exponent: false}))]);
	}});
}
if (!dojo._hasResource["dojo.cldr.supplemental"]) {
	dojo._hasResource["dojo.cldr.supplemental"] = true;
	dojo.provide("dojo.cldr.supplemental");
	dojo.getObject("cldr.supplemental", true, dojo);
	dojo.cldr.supplemental.getFirstDayOfWeek = function (_528) {
		var _529 = {mv: 5, ae: 6, af: 6, bh: 6, dj: 6, dz: 6, eg: 6, er: 6, et: 6, iq: 6, ir: 6, jo: 6, ke: 6, kw: 6, ly: 6, ma: 6, om: 6, qa: 6, sa: 6, sd: 6, so: 6, sy: 6, tn: 6, ye: 6, ar: 0, as: 0, az: 0, bw: 0, ca: 0, cn: 0, fo: 0, ge: 0, gl: 0, gu: 0, hk: 0, il: 0, "in": 0, jm: 0, jp: 0, kg: 0, kr: 0, la: 0, mh: 0, mn: 0, mo: 0, mp: 0, mt: 0, nz: 0, ph: 0, pk: 0, sg: 0, th: 0, tt: 0, tw: 0, um: 0, us: 0, uz: 0, vi: 0, zw: 0};
		var _52a = dojo.cldr.supplemental._region(_528);
		var dow = _529[_52a];
		return (dow === undefined) ? 1 : dow;
	};
	dojo.cldr.supplemental._region = function (_52b) {
		_52b = dojo.i18n.normalizeLocale(_52b);
		var tags = _52b.split("-");
		var _52c = tags[1];
		if (!_52c) {
			_52c = {de: "de", en: "us", es: "es", fi: "fi", fr: "fr", he: "il", hu: "hu", it: "it", ja: "jp", ko: "kr", nl: "nl", pt: "br", sv: "se", zh: "cn"}[tags[0]];
		} else {
			if (_52c.length == 4) {
				_52c = tags[2];
			}
		}
		return _52c;
	};
	dojo.cldr.supplemental.getWeekend = function (_52d) {
		var _52e = {"in": 0, af: 4, dz: 4, ir: 4, om: 4, sa: 4, ye: 4, ae: 5, bh: 5, eg: 5, il: 5, iq: 5, jo: 5, kw: 5, ly: 5, ma: 5, qa: 5, sd: 5, sy: 5, tn: 5};
		var _52f = {af: 5, dz: 5, ir: 5, om: 5, sa: 5, ye: 5, ae: 6, bh: 5, eg: 6, il: 6, iq: 6, jo: 6, kw: 6, ly: 6, ma: 6, qa: 6, sd: 6, sy: 6, tn: 6};
		var _530 = dojo.cldr.supplemental._region(_52d);
		var _531 = _52e[_530];
		var end = _52f[_530];
		if (_531 === undefined) {
			_531 = 6;
		}
		if (end === undefined) {
			end = 0;
		}
		return {start: _531, end: end};
	};
}
if (!dojo._hasResource["dojo.date"]) {
	dojo._hasResource["dojo.date"] = true;
	dojo.provide("dojo.date");
	dojo.getObject("date", true, dojo);
	dojo.date.getDaysInMonth = function (_532) {
		var _533 = _532.getMonth();
		var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if (_533 == 1 && dojo.date.isLeapYear(_532)) {
			return 29;
		}
		return days[_533];
	};
	dojo.date.isLeapYear = function (_534) {
		var year = _534.getFullYear();
		return !(year % 400) || (!(year % 4) && !!(year % 100));
	};
	dojo.date.getTimezoneName = function (_535) {
		var str = _535.toString();
		var tz = "";
		var _536;
		var pos = str.indexOf("(");
		if (pos > -1) {
			tz = str.substring(++pos, str.indexOf(")"));
		} else {
			var pat = /([A-Z\/]+) \d{4}$/;
			if ((_536 = str.match(pat))) {
				tz = _536[1];
			} else {
				str = _535.toLocaleString();
				pat = / ([A-Z\/]+)$/;
				if ((_536 = str.match(pat))) {
					tz = _536[1];
				}
			}
		}
		return (tz == "AM" || tz == "PM") ? "" : tz;
	};
	dojo.date.compare = function (_537, _538, _539) {
		_537 = new Date(+_537);
		_538 = new Date(+(_538 || new Date()));
		if (_539 == "date") {
			_537.setHours(0, 0, 0, 0);
			_538.setHours(0, 0, 0, 0);
		} else {
			if (_539 == "time") {
				_537.setFullYear(0, 0, 0);
				_538.setFullYear(0, 0, 0);
			}
		}
		if (_537 > _538) {
			return 1;
		}
		if (_537 < _538) {
			return -1;
		}
		return 0;
	};
	dojo.date.add = function (date, _53a, _53b) {
		var sum = new Date(+date);
		var _53c = false;
		var _53d = "Date";
		switch (_53a) {
			case "day":
				break;
			case "weekday":
				var days, _53e;
				var mod = _53b % 5;
				if (!mod) {
					days = (_53b > 0) ? 5 : -5;
					_53e = (_53b > 0) ? ((_53b - 5) / 5) : ((_53b + 5) / 5);
				} else {
					days = mod;
					_53e = parseInt(_53b / 5);
				}
				var strt = date.getDay();
				var adj = 0;
				if (strt == 6 && _53b > 0) {
					adj = 1;
				} else {
					if (strt == 0 && _53b < 0) {
						adj = -1;
					}
				}
				var trgt = strt + days;
				if (trgt == 0 || trgt == 6) {
					adj = (_53b > 0) ? 2 : -2;
				}
				_53b = (7 * _53e) + days + adj;
				break;
			case "year":
				_53d = "FullYear";
				_53c = true;
				break;
			case "week":
				_53b *= 7;
				break;
			case "quarter":
				_53b *= 3;
			case "month":
				_53c = true;
				_53d = "Month";
				break;
			default:
				_53d = "UTC" + _53a.charAt(0).toUpperCase() + _53a.substring(1) + "s";
		}
		if (_53d) {
			sum["set" + _53d](sum["get" + _53d]() + _53b);
		}
		if (_53c && (sum.getDate() < date.getDate())) {
			sum.setDate(0);
		}
		return sum;
	};
	dojo.date.difference = function (_53f, _540, _541) {
		_540 = _540 || new Date();
		_541 = _541 || "day";
		var _542 = _540.getFullYear() - _53f.getFullYear();
		var _543 = 1;
		switch (_541) {
			case "quarter":
				var m1 = _53f.getMonth();
				var m2 = _540.getMonth();
				var q1 = Math.floor(m1 / 3) + 1;
				var q2 = Math.floor(m2 / 3) + 1;
				q2 += (_542 * 4);
				_543 = q2 - q1;
				break;
			case "weekday":
				var days = Math.round(dojo.date.difference(_53f, _540, "day"));
				var _544 = parseInt(dojo.date.difference(_53f, _540, "week"));
				var mod = days % 7;
				if (mod == 0) {
					days = _544 * 5;
				} else {
					var adj = 0;
					var aDay = _53f.getDay();
					var bDay = _540.getDay();
					_544 = parseInt(days / 7);
					mod = days % 7;
					var _545 = new Date(_53f);
					_545.setDate(_545.getDate() + (_544 * 7));
					var _546 = _545.getDay();
					if (days > 0) {
						switch (true) {
							case aDay == 6:
								adj = -1;
								break;
							case aDay == 0:
								adj = 0;
								break;
							case bDay == 6:
								adj = -1;
								break;
							case bDay == 0:
								adj = -2;
								break;
							case (_546 + mod) > 5:
								adj = -2;
						}
					} else {
						if (days < 0) {
							switch (true) {
								case aDay == 6:
									adj = 0;
									break;
								case aDay == 0:
									adj = 1;
									break;
								case bDay == 6:
									adj = 2;
									break;
								case bDay == 0:
									adj = 1;
									break;
								case (_546 + mod) < 0:
									adj = 2;
							}
						}
					}
					days += adj;
					days -= (_544 * 2);
				}
				_543 = days;
				break;
			case "year":
				_543 = _542;
				break;
			case "month":
				_543 = (_540.getMonth() - _53f.getMonth()) + (_542 * 12);
				break;
			case "week":
				_543 = parseInt(dojo.date.difference(_53f, _540, "day") / 7);
				break;
			case "day":
				_543 /= 24;
			case "hour":
				_543 /= 60;
			case "minute":
				_543 /= 60;
			case "second":
				_543 /= 1000;
			case "millisecond":
				_543 *= _540.getTime() - _53f.getTime();
		}
		return Math.round(_543);
	};
}
if (!dojo._hasResource["dojo.date.locale"]) {
	dojo._hasResource["dojo.date.locale"] = true;
	dojo.provide("dojo.date.locale");
	dojo.getObject("date.locale", true, dojo);
	(function () {
		function _547(_548, _549, _54a, _54b) {
			return _54b.replace(/([a-z])\1*/ig, function (_54c) {
				var s, pad, c = _54c.charAt(0), l = _54c.length, _54d = ["abbr", "wide", "narrow"];
				switch (c) {
					case "G":
						s = _549[(l < 4) ? "eraAbbr" : "eraNames"][_548.getFullYear() < 0 ? 0 : 1];
						break;
					case "y":
						s = _548.getFullYear();
						switch (l) {
							case 1:
								break;
							case 2:
								if (!_54a.fullYear) {
									s = String(s);
									s = s.substr(s.length - 2);
									break;
								}
							default:
								pad = true;
						}
						break;
					case "Q":
					case "q":
						s = Math.ceil((_548.getMonth() + 1) / 3);
						pad = true;
						break;
					case "M":
						var m = _548.getMonth();
						if (l < 3) {
							s = m + 1;
							pad = true;
						} else {
							var _54e = ["months", "format", _54d[l - 3]].join("-");
							s = _549[_54e][m];
						}
						break;
					case "w":
						var _54f = 0;
						s = dojo.date.locale._getWeekOfYear(_548, _54f);
						pad = true;
						break;
					case "d":
						s = _548.getDate();
						pad = true;
						break;
					case "D":
						s = dojo.date.locale._getDayOfYear(_548);
						pad = true;
						break;
					case "E":
						var d = _548.getDay();
						if (l < 3) {
							s = d + 1;
							pad = true;
						} else {
							var _550 = ["days", "format", _54d[l - 3]].join("-");
							s = _549[_550][d];
						}
						break;
					case "a":
						var _551 = (_548.getHours() < 12) ? "am" : "pm";
						s = _54a[_551] || _549["dayPeriods-format-wide-" + _551];
						break;
					case "h":
					case "H":
					case "K":
					case "k":
						var h = _548.getHours();
						switch (c) {
							case "h":
								s = (h % 12) || 12;
								break;
							case "H":
								s = h;
								break;
							case "K":
								s = (h % 12);
								break;
							case "k":
								s = h || 24;
								break;
						}
						pad = true;
						break;
					case "m":
						s = _548.getMinutes();
						pad = true;
						break;
					case "s":
						s = _548.getSeconds();
						pad = true;
						break;
					case "S":
						s = Math.round(_548.getMilliseconds() * Math.pow(10, l - 3));
						pad = true;
						break;
					case "v":
					case "z":
						s = dojo.date.locale._getZone(_548, true, _54a);
						if (s) {
							break;
						}
						l = 4;
					case "Z":
						var _552 = dojo.date.locale._getZone(_548, false, _54a);
						var tz = [(_552 <= 0 ? "+" : "-"), dojo.string.pad(Math.floor(Math.abs(_552) / 60), 2), dojo.string.pad(Math.abs(_552) % 60, 2)];
						if (l == 4) {
							tz.splice(0, 0, "GMT");
							tz.splice(3, 0, ":");
						}
						s = tz.join("");
						break;
					default:
						throw new Error("dojo.date.locale.format: invalid pattern char: " + _54b);
				}
				if (pad) {
					s = dojo.string.pad(s, l);
				}
				return s;
			});
		};
		dojo.date.locale._getZone = function (_553, _554, _555) {
			if (_554) {
				return dojo.date.getTimezoneName(_553);
			} else {
				return _553.getTimezoneOffset();
			}
		};
		dojo.date.locale.format = function (_556, _557) {
			_557 = _557 || {};
			var _558 = dojo.i18n.normalizeLocale(_557.locale), _559 = _557.formatLength || "short", _55a = dojo.date.locale._getGregorianBundle(_558), str = [], _55b = dojo.hitch(this, _547, _556, _55a, _557);
			if (_557.selector == "year") {
				return _55c(_55a["dateFormatItem-yyyy"] || "yyyy", _55b);
			}
			var _55d;
			if (_557.selector != "date") {
				_55d = _557.timePattern || _55a["timeFormat-" + _559];
				if (_55d) {
					str.push(_55c(_55d, _55b));
				}
			}
			if (_557.selector != "time") {
				_55d = _557.datePattern || _55a["dateFormat-" + _559];
				if (_55d) {
					str.push(_55c(_55d, _55b));
				}
			}
			return str.length == 1 ? str[0] : _55a["dateTimeFormat-" + _559].replace(/\{(\d+)\}/g, function (_55e, key) {
				return str[key];
			});
		};
		dojo.date.locale.regexp = function (_55f) {
			return dojo.date.locale._parseInfo(_55f).regexp;
		};
		dojo.date.locale._parseInfo = function (_560) {
			_560 = _560 || {};
			var _561 = dojo.i18n.normalizeLocale(_560.locale), _562 = dojo.date.locale._getGregorianBundle(_561), _563 = _560.formatLength || "short", _564 = _560.datePattern || _562["dateFormat-" + _563], _565 = _560.timePattern || _562["timeFormat-" + _563], _566;
			if (_560.selector == "date") {
				_566 = _564;
			} else {
				if (_560.selector == "time") {
					_566 = _565;
				} else {
					_566 = _562["dateTimeFormat-" + _563].replace(/\{(\d+)\}/g, function (_567, key) {
						return [_565, _564][key];
					});
				}
			}
			var _568 = [], re = _55c(_566, dojo.hitch(this, _569, _568, _562, _560));
			return {regexp: re, tokens: _568, bundle: _562};
		};
		dojo.date.locale.parse = function (_56a, _56b) {
			var _56c = /[\u200E\u200F\u202A\u202E]/g, info = dojo.date.locale._parseInfo(_56b), _56d = info.tokens, _56e = info.bundle, re = new RegExp("^" + info.regexp.replace(_56c, "") + "$", info.strict ? "" : "i"), _56f = re.exec(_56a && _56a.replace(_56c, ""));
			if (!_56f) {
				return null;
			}
			var _570 = ["abbr", "wide", "narrow"], _571 = [1970, 0, 1, 0, 0, 0, 0], amPm = "", _572 = dojo.every(_56f, function (v, i) {
				if (!i) {
					return true;
				}
				var _573 = _56d[i - 1];
				var l = _573.length;
				switch (_573.charAt(0)) {
					case "y":
						if (l != 2 && _56b.strict) {
							_571[0] = v;
						} else {
							if (v < 100) {
								v = Number(v);
								var year = "" + new Date().getFullYear(), _574 = year.substring(0, 2) * 100, _575 = Math.min(Number(year.substring(2, 4)) + 20, 99), num = (v < _575) ? _574 + v : _574 - 100 + v;
								_571[0] = num;
							} else {
								if (_56b.strict) {
									return false;
								}
								_571[0] = v;
							}
						}
						break;
					case "M":
						if (l > 2) {
							var _576 = _56e["months-format-" + _570[l - 3]].concat();
							if (!_56b.strict) {
								v = v.replace(".", "").toLowerCase();
								_576 = dojo.map(_576, function (s) {
									return s.replace(".", "").toLowerCase();
								});
							}
							v = dojo.indexOf(_576, v);
							if (v == -1) {
								return false;
							}
						} else {
							v--;
						}
						_571[1] = v;
						break;
					case "E":
					case "e":
						var days = _56e["days-format-" + _570[l - 3]].concat();
						if (!_56b.strict) {
							v = v.toLowerCase();
							days = dojo.map(days, function (d) {
								return d.toLowerCase();
							});
						}
						v = dojo.indexOf(days, v);
						if (v == -1) {
							return false;
						}
						break;
					case "D":
						_571[1] = 0;
					case "d":
						_571[2] = v;
						break;
					case "a":
						var am = _56b.am || _56e["dayPeriods-format-wide-am"], pm = _56b.pm || _56e["dayPeriods-format-wide-pm"];
						if (!_56b.strict) {
							var _577 = /\./g;
							v = v.replace(_577, "").toLowerCase();
							am = am.replace(_577, "").toLowerCase();
							pm = pm.replace(_577, "").toLowerCase();
						}
						if (_56b.strict && v != am && v != pm) {
							return false;
						}
						amPm = (v == pm) ? "p" : (v == am) ? "a" : "";
						break;
					case "K":
						if (v == 24) {
							v = 0;
						}
					case "h":
					case "H":
					case "k":
						if (v > 23) {
							return false;
						}
						_571[3] = v;
						break;
					case "m":
						_571[4] = v;
						break;
					case "s":
						_571[5] = v;
						break;
					case "S":
						_571[6] = v;
				}
				return true;
			});
			var _578 = +_571[3];
			if (amPm === "p" && _578 < 12) {
				_571[3] = _578 + 12;
			} else {
				if (amPm === "a" && _578 == 12) {
					_571[3] = 0;
				}
			}
			var _579 = new Date(_571[0], _571[1], _571[2], _571[3], _571[4], _571[5], _571[6]);
			if (_56b.strict) {
				_579.setFullYear(_571[0]);
			}
			var _57a = _56d.join(""), _57b = _57a.indexOf("d") != -1, _57c = _57a.indexOf("M") != -1;
			if (!_572 || (_57c && _579.getMonth() > _571[1]) || (_57b && _579.getDate() > _571[2])) {
				return null;
			}
			if ((_57c && _579.getMonth() < _571[1]) || (_57b && _579.getDate() < _571[2])) {
				_579 = dojo.date.add(_579, "hour", 1);
			}
			return _579;
		};
		function _55c(_57d, _57e, _57f, _580) {
			var _581 = function (x) {
				return x;
			};
			_57e = _57e || _581;
			_57f = _57f || _581;
			_580 = _580 || _581;
			var _582 = _57d.match(/(''|[^'])+/g), _583 = _57d.charAt(0) == "'";
			dojo.forEach(_582, function (_584, i) {
				if (!_584) {
					_582[i] = "";
				} else {
					_582[i] = (_583 ? _57f : _57e)(_584.replace(/''/g, "'"));
					_583 = !_583;
				}
			});
			return _580(_582.join(""));
		};
		function _569(_585, _586, _587, _588) {
			_588 = dojo.regexp.escapeString(_588);
			if (!_587.strict) {
				_588 = _588.replace(" a", " ?a");
			}
			return _588.replace(/([a-z])\1*/ig, function (_589) {
				var s, c = _589.charAt(0), l = _589.length, p2 = "", p3 = "";
				if (_587.strict) {
					if (l > 1) {
						p2 = "0" + "{" + (l - 1) + "}";
					}
					if (l > 2) {
						p3 = "0" + "{" + (l - 2) + "}";
					}
				} else {
					p2 = "0?";
					p3 = "0{0,2}";
				}
				switch (c) {
					case "y":
						s = "\\d{2,4}";
						break;
					case "M":
						s = (l > 2) ? "\\S+?" : "1[0-2]|" + p2 + "[1-9]";
						break;
					case "D":
						s = "[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|" + p3 + "[1-9][0-9]|" + p2 + "[1-9]";
						break;
					case "d":
						s = "3[01]|[12]\\d|" + p2 + "[1-9]";
						break;
					case "w":
						s = "[1-4][0-9]|5[0-3]|" + p2 + "[1-9]";
						break;
					case "E":
						s = "\\S+";
						break;
					case "h":
						s = "1[0-2]|" + p2 + "[1-9]";
						break;
					case "k":
						s = "1[01]|" + p2 + "\\d";
						break;
					case "H":
						s = "1\\d|2[0-3]|" + p2 + "\\d";
						break;
					case "K":
						s = "1\\d|2[0-4]|" + p2 + "[1-9]";
						break;
					case "m":
					case "s":
						s = "[0-5]\\d";
						break;
					case "S":
						s = "\\d{" + l + "}";
						break;
					case "a":
						var am = _587.am || _586["dayPeriods-format-wide-am"], pm = _587.pm || _586["dayPeriods-format-wide-pm"];
						s = am + "|" + pm;
						if (!_587.strict) {
							if (am != am.toLowerCase()) {
								s += "|" + am.toLowerCase();
							}
							if (pm != pm.toLowerCase()) {
								s += "|" + pm.toLowerCase();
							}
							if (s.indexOf(".") != -1) {
								s += "|" + s.replace(/\./g, "");
							}
						}
						s = s.replace(/\./g, "\\.");
						break;
					default:
						s = ".*";
				}
				if (_585) {
					_585.push(_589);
				}
				return "(" + s + ")";
			}).replace(/[\xa0 ]/g, "[\\s\\xa0]");
		};
	})();
	(function () {
		var _58a = [];
		dojo.date.locale.addCustomFormats = function (_58b, _58c) {
			_58a.push({pkg: _58b, name: _58c});
		};
		dojo.date.locale._getGregorianBundle = function (_58d) {
			var _58e = {};
			dojo.forEach(_58a, function (desc) {
				var _58f = dojo.i18n.getLocalization(desc.pkg, desc.name, _58d);
				_58e = dojo.mixin(_58e, _58f);
			}, this);
			return _58e;
		};
	})();
	dojo.date.locale.addCustomFormats("dojo.cldr", "gregorian");
	dojo.date.locale.getNames = function (item, type, _590, _591) {
		var _592, _593 = dojo.date.locale._getGregorianBundle(_591), _594 = [item, _590, type];
		if (_590 == "standAlone") {
			var key = _594.join("-");
			_592 = _593[key];
			if (_592[0] == 1) {
				_592 = undefined;
			}
		}
		_594[1] = "format";
		return (_592 || _593[_594.join("-")]).concat();
	};
	dojo.date.locale.isWeekend = function (_595, _596) {
		var _597 = dojo.cldr.supplemental.getWeekend(_596), day = (_595 || new Date()).getDay();
		if (_597.end < _597.start) {
			_597.end += 7;
			if (day < _597.start) {
				day += 7;
			}
		}
		return day >= _597.start && day <= _597.end;
	};
	dojo.date.locale._getDayOfYear = function (_598) {
		return dojo.date.difference(new Date(_598.getFullYear(), 0, 1, _598.getHours()), _598) + 1;
	};
	dojo.date.locale._getWeekOfYear = function (_599, _59a) {
		if (arguments.length == 1) {
			_59a = 0;
		}
		var _59b = new Date(_599.getFullYear(), 0, 1).getDay(), adj = (_59b - _59a + 7) % 7, week = Math.floor((dojo.date.locale._getDayOfYear(_599) + adj - 1) / 7);
		if (_59b == _59a) {
			week++;
		}
		return week;
	};
}
if (!dojo._hasResource["dijit.Calendar"]) {
	dojo._hasResource["dijit.Calendar"] = true;
	dojo.provide("dijit.Calendar");
	dojo.declare("dijit.Calendar", [dijit._Widget, dijit._Templated, dijit._CssStateMixin], {templateString: dojo.cache("dijit", "templates/Calendar.html", "<table cellspacing=\"0\" cellpadding=\"0\" class=\"dijitCalendarContainer\" role=\"grid\" dojoAttachEvent=\"onkeypress: _onKeyPress\" aria-labelledby=\"${id}_year\">\n\t<thead>\n\t\t<tr class=\"dijitReset dijitCalendarMonthContainer\" valign=\"top\">\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"decrementMonth\">\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarDecrease\" role=\"presentation\"/>\n\t\t\t\t<span dojoAttachPoint=\"decreaseArrowNode\" class=\"dijitA11ySideArrow\">-</span>\n\t\t\t</th>\n\t\t\t<th class='dijitReset' colspan=\"5\">\n\t\t\t\t<div dojoType=\"dijit.form.DropDownButton\" dojoAttachPoint=\"monthDropDownButton\"\n\t\t\t\t\tid=\"${id}_mddb\" tabIndex=\"-1\">\n\t\t\t\t</div>\n\t\t\t</th>\n\t\t\t<th class='dijitReset dijitCalendarArrow' dojoAttachPoint=\"incrementMonth\">\n\t\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitCalendarIncrementControl dijitCalendarIncrease\" role=\"presentation\"/>\n\t\t\t\t<span dojoAttachPoint=\"increaseArrowNode\" class=\"dijitA11ySideArrow\">+</span>\n\t\t\t</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th class=\"dijitReset dijitCalendarDayLabelTemplate\" role=\"columnheader\"><span class=\"dijitCalendarDayLabel\"></span></th>\n\t\t</tr>\n\t</thead>\n\t<tbody dojoAttachEvent=\"onclick: _onDayClick, onmouseover: _onDayMouseOver, onmouseout: _onDayMouseOut, onmousedown: _onDayMouseDown, onmouseup: _onDayMouseUp\" class=\"dijitReset dijitCalendarBodyContainer\">\n\t\t<tr class=\"dijitReset dijitCalendarWeekTemplate\" role=\"row\">\n\t\t\t<td class=\"dijitReset dijitCalendarDateTemplate\" role=\"gridcell\"><span class=\"dijitCalendarDateLabel\"></span></td>\n\t\t</tr>\n\t</tbody>\n\t<tfoot class=\"dijitReset dijitCalendarYearContainer\">\n\t\t<tr>\n\t\t\t<td class='dijitReset' valign=\"top\" colspan=\"7\">\n\t\t\t\t<h3 class=\"dijitCalendarYearLabel\">\n\t\t\t\t\t<span dojoAttachPoint=\"previousYearLabelNode\" class=\"dijitInline dijitCalendarPreviousYear\"></span>\n\t\t\t\t\t<span dojoAttachPoint=\"currentYearLabelNode\" class=\"dijitInline dijitCalendarSelectedYear\" id=\"${id}_year\"></span>\n\t\t\t\t\t<span dojoAttachPoint=\"nextYearLabelNode\" class=\"dijitInline dijitCalendarNextYear\"></span>\n\t\t\t\t</h3>\n\t\t\t</td>\n\t\t</tr>\n\t</tfoot>\n</table>\n"), widgetsInTemplate: true, value: new Date(""), datePackage: "dojo.date", dayWidth: "narrow", tabIndex: "0", currentFocus: new Date(), baseClass: "dijitCalendar", cssStateNodes: {"decrementMonth": "dijitCalendarArrow", "incrementMonth": "dijitCalendarArrow", "previousYearLabelNode": "dijitCalendarPreviousYear", "nextYearLabelNode": "dijitCalendarNextYear"}, _isValidDate: function (_59c) {
		return _59c && !isNaN(_59c) && typeof _59c == "object" && _59c.toString() != this.constructor.prototype.value.toString();
	}, setValue: function (_59d) {
		dojo.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
		this.set("value", _59d);
	}, _getValueAttr: function () {
		var _59e = new this.dateClassObj(this.value);
		_59e.setHours(0, 0, 0, 0);
		if (_59e.getDate() < this.value.getDate()) {
			_59e = this.dateFuncObj.add(_59e, "hour", 1);
		}
		return _59e;
	}, _setValueAttr: function (_59f, _5a0) {
		if (_59f) {
			_59f = new this.dateClassObj(_59f);
		}
		if (this._isValidDate(_59f)) {
			if (!this._isValidDate(this.value) || this.dateFuncObj.compare(_59f, this.value)) {
				_59f.setHours(1, 0, 0, 0);
				if (!this.isDisabledDate(_59f, this.lang)) {
					this._set("value", _59f);
					this.set("currentFocus", _59f);
					if (_5a0 || typeof _5a0 == "undefined") {
						this.onChange(this.get("value"));
						this.onValueSelected(this.get("value"));
					}
				}
			}
		} else {
			this._set("value", null);
			this.set("currentFocus", this.currentFocus);
		}
	}, _setText: function (node, text) {
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
		node.appendChild(dojo.doc.createTextNode(text));
	}, _populateGrid: function () {
		var _5a1 = new this.dateClassObj(this.currentFocus);
		_5a1.setDate(1);
		var _5a2 = _5a1.getDay(), _5a3 = this.dateFuncObj.getDaysInMonth(_5a1), _5a4 = this.dateFuncObj.getDaysInMonth(this.dateFuncObj.add(_5a1, "month", -1)), _5a5 = new this.dateClassObj(), _5a6 = dojo.cldr.supplemental.getFirstDayOfWeek(this.lang);
		if (_5a6 > _5a2) {
			_5a6 -= 7;
		}
		dojo.query(".dijitCalendarDateTemplate", this.domNode).forEach(function (_5a7, i) {
			i += _5a6;
			var date = new this.dateClassObj(_5a1), _5a8, _5a9 = "dijitCalendar", adj = 0;
			if (i < _5a2) {
				_5a8 = _5a4 - _5a2 + i + 1;
				adj = -1;
				_5a9 += "Previous";
			} else {
				if (i >= (_5a2 + _5a3)) {
					_5a8 = i - _5a2 - _5a3 + 1;
					adj = 1;
					_5a9 += "Next";
				} else {
					_5a8 = i - _5a2 + 1;
					_5a9 += "Current";
				}
			}
			if (adj) {
				date = this.dateFuncObj.add(date, "month", adj);
			}
			date.setDate(_5a8);
			if (!this.dateFuncObj.compare(date, _5a5, "date")) {
				_5a9 = "dijitCalendarCurrentDate " + _5a9;
			}
			if (this._isSelectedDate(date, this.lang)) {
				_5a9 = "dijitCalendarSelectedDate " + _5a9;
			}
			if (this.isDisabledDate(date, this.lang)) {
				_5a9 = "dijitCalendarDisabledDate " + _5a9;
			}
			var _5aa = this.getClassForDate(date, this.lang);
			if (_5aa) {
				_5a9 = _5aa + " " + _5a9;
			}
			_5a7.className = _5a9 + "Month dijitCalendarDateTemplate";
			_5a7.dijitDateValue = date.valueOf();
			dojo.attr(_5a7, "dijitDateValue", date.valueOf());
			var _5ab = dojo.query(".dijitCalendarDateLabel", _5a7)[0], text = date.getDateLocalized ? date.getDateLocalized(this.lang) : date.getDate();
			this._setText(_5ab, text);
		}, this);
		var _5ac = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, _5a1);
		this.monthDropDownButton.dropDown.set("months", _5ac);
		this.monthDropDownButton.containerNode.innerHTML = (dojo.isIE == 6 ? "" : "<div class='dijitSpacer'>" + this.monthDropDownButton.dropDown.domNode.innerHTML + "</div>") + "<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>" + _5ac[_5a1.getMonth()] + "</div>";
		var y = _5a1.getFullYear() - 1;
		var d = new this.dateClassObj();
		dojo.forEach(["previous", "current", "next"], function (name) {
			d.setFullYear(y++);
			this._setText(this[name + "YearLabelNode"], this.dateLocaleModule.format(d, {selector: "year", locale: this.lang}));
		}, this);
	}, goToToday: function () {
		this.set("value", new this.dateClassObj());
	}, constructor: function (args) {
		var _5ad = (args.datePackage && (args.datePackage != "dojo.date")) ? args.datePackage + ".Date" : "Date";
		this.dateClassObj = dojo.getObject(_5ad, false);
		this.datePackage = args.datePackage || this.datePackage;
		this.dateFuncObj = dojo.getObject(this.datePackage, false);
		this.dateLocaleModule = dojo.getObject(this.datePackage + ".locale", false);
	}, postMixInProperties: function () {
		if (isNaN(this.value)) {
			delete this.value;
		}
		this.inherited(arguments);
	}, buildRendering: function () {
		this.inherited(arguments);
		dojo.setSelectable(this.domNode, false);
		var _5ae = dojo.hitch(this, function (_5af, n) {
			var _5b0 = dojo.query(_5af, this.domNode)[0];
			for (var i = 0; i < n; i++) {
				_5b0.parentNode.appendChild(_5b0.cloneNode(true));
			}
		});
		_5ae(".dijitCalendarDayLabelTemplate", 6);
		_5ae(".dijitCalendarDateTemplate", 6);
		_5ae(".dijitCalendarWeekTemplate", 5);
		var _5b1 = this.dateLocaleModule.getNames("days", this.dayWidth, "standAlone", this.lang);
		var _5b2 = dojo.cldr.supplemental.getFirstDayOfWeek(this.lang);
		dojo.query(".dijitCalendarDayLabel", this.domNode).forEach(function (_5b3, i) {
			this._setText(_5b3, _5b1[(i + _5b2) % 7]);
		}, this);
		var _5b4 = new this.dateClassObj(this.currentFocus);
		this.monthDropDownButton.dropDown = new dijit.Calendar._MonthDropDown({id: this.id + "_mdd", onChange: dojo.hitch(this, "_onMonthSelect")});
		this.set("currentFocus", _5b4, false);
		var _5b5 = this;
		var _5b6 = function (_5b7, _5b8, adj) {
			_5b5._connects.push(dijit.typematic.addMouseListener(_5b5[_5b7], _5b5, function (_5b9) {
				if (_5b9 >= 0) {
					_5b5._adjustDisplay(_5b8, adj);
				}
			}, 0.8, 500));
		};
		_5b6("incrementMonth", "month", 1);
		_5b6("decrementMonth", "month", -1);
		_5b6("nextYearLabelNode", "year", 1);
		_5b6("previousYearLabelNode", "year", -1);
	}, _adjustDisplay: function (part, _5ba) {
		this._setCurrentFocusAttr(this.dateFuncObj.add(this.currentFocus, part, _5ba));
	}, _setCurrentFocusAttr: function (date, _5bb) {
		var _5bc = this.currentFocus, _5bd = _5bc ? dojo.query("[dijitDateValue=" + _5bc.valueOf() + "]", this.domNode)[0] : null;
		date = new this.dateClassObj(date);
		date.setHours(1, 0, 0, 0);
		this._set("currentFocus", date);
		this._populateGrid();
		var _5be = dojo.query("[dijitDateValue=" + date.valueOf() + "]", this.domNode)[0];
		_5be.setAttribute("tabIndex", this.tabIndex);
		if (this._focused || _5bb) {
			_5be.focus();
		}
		if (_5bd && _5bd != _5be) {
			if (dojo.isWebKit) {
				_5bd.setAttribute("tabIndex", "-1");
			} else {
				_5bd.removeAttribute("tabIndex");
			}
		}
	}, focus: function () {
		this._setCurrentFocusAttr(this.currentFocus, true);
	}, _onMonthSelect: function (_5bf) {
		this.currentFocus = this.dateFuncObj.add(this.currentFocus, "month", _5bf - this.currentFocus.getMonth());
		this._populateGrid();
	}, _onDayClick: function (evt) {
		dojo.stopEvent(evt);
		for (var node = evt.target; node && !node.dijitDateValue; node = node.parentNode) {
		}
		if (node && !dojo.hasClass(node, "dijitCalendarDisabledDate")) {
			this.set("value", node.dijitDateValue);
		}
	}, _onDayMouseOver: function (evt) {
		var node = dojo.hasClass(evt.target, "dijitCalendarDateLabel") ? evt.target.parentNode : evt.target;
		if (node && (node.dijitDateValue || node == this.previousYearLabelNode || node == this.nextYearLabelNode)) {
			dojo.addClass(node, "dijitCalendarHoveredDate");
			this._currentNode = node;
		}
	}, _onDayMouseOut: function (evt) {
		if (!this._currentNode) {
			return;
		}
		if (evt.relatedTarget && evt.relatedTarget.parentNode == this._currentNode) {
			return;
		}
		var cls = "dijitCalendarHoveredDate";
		if (dojo.hasClass(this._currentNode, "dijitCalendarActiveDate")) {
			cls += " dijitCalendarActiveDate";
		}
		dojo.removeClass(this._currentNode, cls);
		this._currentNode = null;
	}, _onDayMouseDown: function (evt) {
		var node = evt.target.parentNode;
		if (node && node.dijitDateValue) {
			dojo.addClass(node, "dijitCalendarActiveDate");
			this._currentNode = node;
		}
	}, _onDayMouseUp: function (evt) {
		var node = evt.target.parentNode;
		if (node && node.dijitDateValue) {
			dojo.removeClass(node, "dijitCalendarActiveDate");
		}
	}, handleKey: function (evt) {
		var dk = dojo.keys, _5c0 = -1, _5c1, _5c2 = this.currentFocus;
		switch (evt.keyCode) {
			case dk.RIGHT_ARROW:
				_5c0 = 1;
			case dk.LEFT_ARROW:
				_5c1 = "day";
				if (!this.isLeftToRight()) {
					_5c0 *= -1;
				}
				break;
			case dk.DOWN_ARROW:
				_5c0 = 1;
			case dk.UP_ARROW:
				_5c1 = "week";
				break;
			case dk.PAGE_DOWN:
				_5c0 = 1;
			case dk.PAGE_UP:
				_5c1 = evt.ctrlKey || evt.altKey ? "year" : "month";
				break;
			case dk.END:
				_5c2 = this.dateFuncObj.add(_5c2, "month", 1);
				_5c1 = "day";
			case dk.HOME:
				_5c2 = new this.dateClassObj(_5c2);
				_5c2.setDate(1);
				break;
			case dk.ENTER:
			case dk.SPACE:
				this.set("value", this.currentFocus);
				break;
			default:
				return true;
		}
		if (_5c1) {
			_5c2 = this.dateFuncObj.add(_5c2, _5c1, _5c0);
		}
		this._setCurrentFocusAttr(_5c2);
		return false;
	}, _onKeyPress: function (evt) {
		if (!this.handleKey(evt)) {
			dojo.stopEvent(evt);
		}
	}, onValueSelected: function (date) {
	}, onChange: function (date) {
	}, _isSelectedDate: function (_5c3, _5c4) {
		return this._isValidDate(this.value) && !this.dateFuncObj.compare(_5c3, this.value, "date");
	}, isDisabledDate: function (_5c5, _5c6) {
	}, getClassForDate: function (_5c7, _5c8) {
	}});
	dojo.declare("dijit.Calendar._MonthDropDown", [dijit._Widget, dijit._Templated], {months: [], templateString: "<div class='dijitCalendarMonthMenu dijitMenu' " + "dojoAttachEvent='onclick:_onClick,onmouseover:_onMenuHover,onmouseout:_onMenuHover'></div>", _setMonthsAttr: function (_5c9) {
		this.domNode.innerHTML = dojo.map(_5c9, function (_5ca, idx) {
			return _5ca ? "<div class='dijitCalendarMonthLabel' month='" + idx + "'>" + _5ca + "</div>" : "";
		}).join("");
	}, _onClick: function (evt) {
		this.onChange(dojo.attr(evt.target, "month"));
	}, onChange: function (_5cb) {
	}, _onMenuHover: function (evt) {
		dojo.toggleClass(evt.target, "dijitCalendarMonthLabelHover", evt.type == "mouseover");
	}});
}
if (!dojo._hasResource["dijit.form._DateTimeTextBox"]) {
	dojo._hasResource["dijit.form._DateTimeTextBox"] = true;
	dojo.provide("dijit.form._DateTimeTextBox");
	new Date("X");
	dojo.declare("dijit.form._DateTimeTextBox", [dijit.form.RangeBoundTextBox, dijit._HasDropDown], {templateString: dojo.cache("dijit.form", "templates/DropDownBox.html", "<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\n\tid=\"widget_${id}\"\n\trole=\"combobox\"\n\t><div class='dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'\n\t\tdojoAttachPoint=\"_buttonNode, _popupStateNode\" role=\"presentation\"\n\t\t><input class=\"dijitReset dijitInputField dijitArrowButtonInner\" value=\"&#9660; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t\t\t${_buttonInputDisabled}\n\t/></div\n\t><div class='dijitReset dijitValidationContainer'\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935; \" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t/></div\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\n\t\t><input class='dijitReset dijitInputInner' ${!nameAttrSetting} type=\"text\" autocomplete=\"off\"\n\t\t\tdojoAttachPoint=\"textbox,focusNode\" role=\"textbox\" aria-haspopup=\"true\"\n\t/></div\n></div>\n"), hasDownArrow: true, openOnClick: true, regExpGen: dojo.date.locale.regexp, datePackage: "dojo.date", compare: function (val1, val2) {
		var _5cc = this._isInvalidDate(val1);
		var _5cd = this._isInvalidDate(val2);
		return _5cc ? (_5cd ? 0 : -1) : (_5cd ? 1 : dojo.date.compare(val1, val2, this._selector));
	}, forceWidth: true, format: function (_5ce, _5cf) {
		if (!_5ce) {
			return "";
		}
		return this.dateLocaleModule.format(_5ce, _5cf);
	}, "parse": function (_5d0, _5d1) {
		return this.dateLocaleModule.parse(_5d0, _5d1) || (this._isEmpty(_5d0) ? null : undefined);
	}, serialize: function (val, _5d2) {
		if (val.toGregorian) {
			val = val.toGregorian();
		}
		return dojo.date.stamp.toISOString(val, _5d2);
	}, dropDownDefaultValue: new Date(), value: new Date(""), _blankValue: null, popupClass: "", _selector: "", constructor: function (args) {
		var _5d3 = args.datePackage ? args.datePackage + ".Date" : "Date";
		this.dateClassObj = dojo.getObject(_5d3, false);
		this.value = new this.dateClassObj("");
		this.datePackage = args.datePackage || this.datePackage;
		this.dateLocaleModule = dojo.getObject(this.datePackage + ".locale", false);
		this.regExpGen = this.dateLocaleModule.regexp;
		this._invalidDate = dijit.form._DateTimeTextBox.prototype.value.toString();
	}, buildRendering: function () {
		this.inherited(arguments);
		if (!this.hasDownArrow) {
			this._buttonNode.style.display = "none";
		}
		if (this.openOnClick || !this.hasDownArrow) {
			this._buttonNode = this.domNode;
			this.baseClass += " dijitComboBoxOpenOnClick";
		}
	}, _setConstraintsAttr: function (_5d4) {
		_5d4.selector = this._selector;
		_5d4.fullYear = true;
		var _5d5 = dojo.date.stamp.fromISOString;
		if (typeof _5d4.min == "string") {
			_5d4.min = _5d5(_5d4.min);
		}
		if (typeof _5d4.max == "string") {
			_5d4.max = _5d5(_5d4.max);
		}
		this.inherited(arguments);
	}, _isInvalidDate: function (_5d6) {
		return !_5d6 || isNaN(_5d6) || typeof _5d6 != "object" || _5d6.toString() == this._invalidDate;
	}, _setValueAttr: function (_5d7, _5d8, _5d9) {
		if (_5d7 !== undefined) {
			if (typeof _5d7 == "string") {
				_5d7 = dojo.date.stamp.fromISOString(_5d7);
			}
			if (this._isInvalidDate(_5d7)) {
				_5d7 = null;
			}
			if (_5d7 instanceof Date && !(this.dateClassObj instanceof Date)) {
				_5d7 = new this.dateClassObj(_5d7);
			}
		}
		this.inherited(arguments);
		if (this.dropDown) {
			this.dropDown.set("value", _5d7, false);
		}
	}, _set: function (attr, _5da) {
		if (attr == "value" && this.value instanceof Date && this.compare(_5da, this.value) == 0) {
			return;
		}
		this.inherited(arguments);
	}, _setDropDownDefaultValueAttr: function (val) {
		if (this._isInvalidDate(val)) {
			val = new this.dateClassObj();
		}
		this.dropDownDefaultValue = val;
	}, openDropDown: function (_5db) {
		if (this.dropDown) {
			this.dropDown.destroy();
		}
		var _5dc = dojo.getObject(this.popupClass, false), _5dd = this, _5de = this.get("value");
		this.dropDown = new _5dc({onChange: function (_5df) {
			dijit.form._DateTimeTextBox.superclass._setValueAttr.call(_5dd, _5df, true);
		}, id: this.id + "_popup", dir: _5dd.dir, lang: _5dd.lang, value: _5de, currentFocus: !this._isInvalidDate(_5de) ? _5de : this.dropDownDefaultValue, constraints: _5dd.constraints, filterString: _5dd.filterString, datePackage: _5dd.datePackage, isDisabledDate: function (date) {
			return !_5dd.rangeCheck(date, _5dd.constraints);
		}});
		this.inherited(arguments);
	}, _getDisplayedValueAttr: function () {
		return this.textbox.value;
	}, _setDisplayedValueAttr: function (_5e0, _5e1) {
		this._setValueAttr(this.parse(_5e0, this.constraints), _5e1, _5e0);
	}});
}
if (!dojo._hasResource["dijit.form.DateTextBox"]) {
	dojo._hasResource["dijit.form.DateTextBox"] = true;
	dojo.provide("dijit.form.DateTextBox");
	dojo.declare("dijit.form.DateTextBox", dijit.form._DateTimeTextBox, {baseClass: "dijitTextBox dijitComboBox dijitDateTextBox", popupClass: "dijit.Calendar", _selector: "date", value: new Date("")});
}
if (!dojo._hasResource["dijit.form._Spinner"]) {
	dojo._hasResource["dijit.form._Spinner"] = true;
	dojo.provide("dijit.form._Spinner");
	dojo.declare("dijit.form._Spinner", dijit.form.RangeBoundTextBox, {defaultTimeout: 500, minimumTimeout: 10, timeoutChangeRate: 0.9, smallDelta: 1, largeDelta: 10, templateString: dojo.cache("dijit.form", "templates/Spinner.html", "<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\n\tid=\"widget_${id}\" role=\"presentation\"\n\t><div class=\"dijitReset dijitButtonNode dijitSpinnerButtonContainer\"\n\t\t><input class=\"dijitReset dijitInputField dijitSpinnerButtonInner\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t\t/><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton\"\n\t\t\tdojoAttachPoint=\"upArrowNode\"\n\t\t\t><div class=\"dijitArrowButtonInner\"\n\t\t\t\t><input class=\"dijitReset dijitInputField\" value=\"&#9650;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t\t\t\t\t${_buttonInputDisabled}\n\t\t\t/></div\n\t\t></div\n\t\t><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton\"\n\t\t\tdojoAttachPoint=\"downArrowNode\"\n\t\t\t><div class=\"dijitArrowButtonInner\"\n\t\t\t\t><input class=\"dijitReset dijitInputField\" value=\"&#9660;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t\t\t\t\t${_buttonInputDisabled}\n\t\t\t/></div\n\t\t></div\n\t></div\n\t><div class='dijitReset dijitValidationContainer'\n\t\t><input class=\"dijitReset dijitInputField dijitValidationIcon dijitValidationInner\" value=\"&#935;\" type=\"text\" tabIndex=\"-1\" readonly=\"readonly\" role=\"presentation\"\n\t/></div\n\t><div class=\"dijitReset dijitInputField dijitInputContainer\"\n\t\t><input class='dijitReset dijitInputInner' dojoAttachPoint=\"textbox,focusNode\" type=\"${type}\" dojoAttachEvent=\"onkeypress:_onKeyPress\"\n\t\t\trole=\"spinbutton\" autocomplete=\"off\" ${!nameAttrSetting}\n\t/></div\n></div>\n"), baseClass: "dijitTextBox dijitSpinner", cssStateNodes: {"upArrowNode": "dijitUpArrowButton", "downArrowNode": "dijitDownArrowButton"}, adjust: function (val, _5e2) {
		return val;
	}, _arrowPressed: function (_5e3, _5e4, _5e5) {
		if (this.disabled || this.readOnly) {
			return;
		}
		this._setValueAttr(this.adjust(this.get("value"), _5e4 * _5e5), false);
		dijit.selectInputText(this.textbox, this.textbox.value.length);
	}, _arrowReleased: function (node) {
		this._wheelTimer = null;
		if (this.disabled || this.readOnly) {
			return;
		}
	}, _typematicCallback: function (_5e6, node, evt) {
		var inc = this.smallDelta;
		if (node == this.textbox) {
			var k = dojo.keys;
			var key = evt.charOrCode;
			inc = (key == k.PAGE_UP || key == k.PAGE_DOWN) ? this.largeDelta : this.smallDelta;
			node = (key == k.UP_ARROW || key == k.PAGE_UP) ? this.upArrowNode : this.downArrowNode;
		}
		if (_5e6 == -1) {
			this._arrowReleased(node);
		} else {
			this._arrowPressed(node, (node == this.upArrowNode) ? 1 : -1, inc);
		}
	}, _wheelTimer: null, _mouseWheeled: function (evt) {
		dojo.stopEvent(evt);
		var _5e7 = evt.detail ? (evt.detail * -1) : (evt.wheelDelta / 120);
		if (_5e7 !== 0) {
			var node = this[(_5e7 > 0 ? "upArrowNode" : "downArrowNode")];
			this._arrowPressed(node, _5e7, this.smallDelta);
			if (!this._wheelTimer) {
				clearTimeout(this._wheelTimer);
			}
			this._wheelTimer = setTimeout(dojo.hitch(this, "_arrowReleased", node), 50);
		}
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this.domNode, !dojo.isMozilla ? "onmousewheel" : "DOMMouseScroll", "_mouseWheeled");
		this._connects.push(dijit.typematic.addListener(this.upArrowNode, this.textbox, {charOrCode: dojo.keys.UP_ARROW, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout));
		this._connects.push(dijit.typematic.addListener(this.downArrowNode, this.textbox, {charOrCode: dojo.keys.DOWN_ARROW, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout));
		this._connects.push(dijit.typematic.addListener(this.upArrowNode, this.textbox, {charOrCode: dojo.keys.PAGE_UP, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout));
		this._connects.push(dijit.typematic.addListener(this.downArrowNode, this.textbox, {charOrCode: dojo.keys.PAGE_DOWN, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout));
	}});
}
if (!dojo._hasResource["dijit.form.NumberSpinner"]) {
	dojo._hasResource["dijit.form.NumberSpinner"] = true;
	dojo.provide("dijit.form.NumberSpinner");
	dojo.declare("dijit.form.NumberSpinner", [dijit.form._Spinner, dijit.form.NumberTextBoxMixin], {adjust: function (val, _5e8) {
		var tc = this.constraints, v = isNaN(val), _5e9 = !isNaN(tc.max), _5ea = !isNaN(tc.min);
		if (v && _5e8 != 0) {
			val = (_5e8 > 0) ? _5ea ? tc.min : _5e9 ? tc.max : 0 : _5e9 ? this.constraints.max : _5ea ? tc.min : 0;
		}
		var _5eb = val + _5e8;
		if (v || isNaN(_5eb)) {
			return val;
		}
		if (_5e9 && (_5eb > tc.max)) {
			_5eb = tc.max;
		}
		if (_5ea && (_5eb < tc.min)) {
			_5eb = tc.min;
		}
		return _5eb;
	}, _onKeyPress: function (e) {
		if ((e.charOrCode == dojo.keys.HOME || e.charOrCode == dojo.keys.END) && !(e.ctrlKey || e.altKey || e.metaKey) && typeof this.get("value") != "undefined") {
			var _5ec = this.constraints[(e.charOrCode == dojo.keys.HOME ? "min" : "max")];
			if (typeof _5ec == "number") {
				this._setValueAttr(_5ec, false);
			}
			dojo.stopEvent(e);
		}
	}});
}
if (!dojo._hasResource["dijit.form.MultiSelect"]) {
	dojo._hasResource["dijit.form.MultiSelect"] = true;
	dojo.provide("dijit.form.MultiSelect");
	dojo.declare("dijit.form.MultiSelect", dijit.form._FormValueWidget, {size: 7, templateString: "<select multiple='true' ${!nameAttrSetting} dojoAttachPoint='containerNode,focusNode' dojoAttachEvent='onchange: _onChange'></select>", attributeMap: dojo.delegate(dijit.form._FormWidget.prototype.attributeMap, {size: "focusNode"}), reset: function () {
		this._hasBeenBlurred = false;
		this._setValueAttr(this._resetValue, true);
	}, addSelected: function (_5ed) {
		_5ed.getSelected().forEach(function (n) {
			this.containerNode.appendChild(n);
			this.domNode.scrollTop = this.domNode.offsetHeight;
			var _5ee = _5ed.domNode.scrollTop;
			_5ed.domNode.scrollTop = 0;
			_5ed.domNode.scrollTop = _5ee;
		}, this);
	}, getSelected: function () {
		return dojo.query("option", this.containerNode).filter(function (n) {
			return n.selected;
		});
	}, _getValueAttr: function () {
		return this.getSelected().map(function (n) {
			return n.value;
		});
	}, multiple: true, _setValueAttr: function (_5ef) {
		dojo.query("option", this.containerNode).forEach(function (n) {
			n.selected = (dojo.indexOf(_5ef, n.value) != -1);
		});
	}, invertSelection: function (_5f0) {
		dojo.query("option", this.containerNode).forEach(function (n) {
			n.selected = !n.selected;
		});
		this._handleOnChange(this.get("value"), _5f0 == true);
	}, _onChange: function (e) {
		this._handleOnChange(this.get("value"), true);
	}, resize: function (size) {
		if (size) {
			dojo.marginBox(this.domNode, size);
		}
	}, postCreate: function () {
		this._onChange();
	}});
}
if (!dojo._hasResource["dijit.form.HorizontalSlider"]) {
	dojo._hasResource["dijit.form.HorizontalSlider"] = true;
	dojo.provide("dijit.form.HorizontalSlider");
	dojo.declare("dijit.form.HorizontalSlider", [dijit.form._FormValueWidget, dijit._Container], {templateString: dojo.cache("dijit.form", "templates/HorizontalSlider.html", "<table class=\"dijit dijitReset dijitSlider dijitSliderH\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" rules=\"none\" dojoAttachEvent=\"onkeypress:_onKeyPress,onkeyup:_onKeyUp\"\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\n\t\t><td dojoAttachPoint=\"topDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH\"></td\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\n\t></tr\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH\"\n\t\t\t><div class=\"dijitSliderDecrementIconH\" style=\"display:none\" dojoAttachPoint=\"decrementButton\"><span class=\"dijitSliderButtonInner\">-</span></div\n\t\t></td\n\t\t><td class=\"dijitReset\"\n\t\t\t><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper\" dojoAttachEvent=\"onmousedown:_onClkDecBumper\"></div\n\t\t></td\n\t\t><td class=\"dijitReset\"\n\t\t\t><input dojoAttachPoint=\"valueNode\" type=\"hidden\" ${!nameAttrSetting}\n\t\t\t/><div class=\"dijitReset dijitSliderBarContainerH\" role=\"presentation\" dojoAttachPoint=\"sliderBarContainer\"\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"progressBar\" class=\"dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH\" dojoAttachEvent=\"onmousedown:_onBarClick\"\n\t\t\t\t\t><div class=\"dijitSliderMoveable dijitSliderMoveableH\"\n\t\t\t\t\t\t><div dojoAttachPoint=\"sliderHandle,focusNode\" class=\"dijitSliderImageHandle dijitSliderImageHandleH\" dojoAttachEvent=\"onmousedown:_onHandleClick\" role=\"slider\" valuemin=\"${minimum}\" valuemax=\"${maximum}\"></div\n\t\t\t\t\t></div\n\t\t\t\t></div\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"remainingBar\" class=\"dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH\" dojoAttachEvent=\"onmousedown:_onBarClick\"></div\n\t\t\t></div\n\t\t></td\n\t\t><td class=\"dijitReset\"\n\t\t\t><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper\" dojoAttachEvent=\"onmousedown:_onClkIncBumper\"></div\n\t\t></td\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH\"\n\t\t\t><div class=\"dijitSliderIncrementIconH\" style=\"display:none\" dojoAttachPoint=\"incrementButton\"><span class=\"dijitSliderButtonInner\">+</span></div\n\t\t></td\n\t></tr\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\n\t\t><td dojoAttachPoint=\"containerNode,bottomDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH\"></td\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\n\t></tr\n></table>\n"), value: 0, showButtons: true, minimum: 0, maximum: 100, discreteValues: Infinity, pageIncrement: 2, clickSelect: true, slideDuration: dijit.defaultDuration, widgetsInTemplate: true, attributeMap: dojo.delegate(dijit.form._FormWidget.prototype.attributeMap, {id: ""}), baseClass: "dijitSlider", cssStateNodes: {incrementButton: "dijitSliderIncrementButton", decrementButton: "dijitSliderDecrementButton", focusNode: "dijitSliderThumb"}, _mousePixelCoord: "pageX", _pixelCount: "w", _startingPixelCoord: "x", _startingPixelCount: "l", _handleOffsetCoord: "left", _progressPixelSize: "width", _onKeyUp: function (e) {
		if (this.disabled || this.readOnly || e.altKey || e.ctrlKey || e.metaKey) {
			return;
		}
		this._setValueAttr(this.value, true);
	}, _onKeyPress: function (e) {
		if (this.disabled || this.readOnly || e.altKey || e.ctrlKey || e.metaKey) {
			return;
		}
		switch (e.charOrCode) {
			case dojo.keys.HOME:
				this._setValueAttr(this.minimum, false);
				break;
			case dojo.keys.END:
				this._setValueAttr(this.maximum, false);
				break;
			case ((this._descending || this.isLeftToRight()) ? dojo.keys.RIGHT_ARROW : dojo.keys.LEFT_ARROW):
			case (this._descending === false ? dojo.keys.DOWN_ARROW : dojo.keys.UP_ARROW):
			case (this._descending === false ? dojo.keys.PAGE_DOWN : dojo.keys.PAGE_UP):
				this.increment(e);
				break;
			case ((this._descending || this.isLeftToRight()) ? dojo.keys.LEFT_ARROW : dojo.keys.RIGHT_ARROW):
			case (this._descending === false ? dojo.keys.UP_ARROW : dojo.keys.DOWN_ARROW):
			case (this._descending === false ? dojo.keys.PAGE_UP : dojo.keys.PAGE_DOWN):
				this.decrement(e);
				break;
			default:
				return;
		}
		dojo.stopEvent(e);
	}, _onHandleClick: function (e) {
		if (this.disabled || this.readOnly) {
			return;
		}
		if (!dojo.isIE) {
			dijit.focus(this.sliderHandle);
		}
		dojo.stopEvent(e);
	}, _isReversed: function () {
		return !this.isLeftToRight();
	}, _onBarClick: function (e) {
		if (this.disabled || this.readOnly || !this.clickSelect) {
			return;
		}
		dijit.focus(this.sliderHandle);
		dojo.stopEvent(e);
		var _5f1 = dojo.position(this.sliderBarContainer, true);
		var _5f2 = e[this._mousePixelCoord] - _5f1[this._startingPixelCoord];
		this._setPixelValue(this._isReversed() ? (_5f1[this._pixelCount] - _5f2) : _5f2, _5f1[this._pixelCount], true);
		this._movable.onMouseDown(e);
	}, _setPixelValue: function (_5f3, _5f4, _5f5) {
		if (this.disabled || this.readOnly) {
			return;
		}
		_5f3 = _5f3 < 0 ? 0 : _5f4 < _5f3 ? _5f4 : _5f3;
		var _5f6 = this.discreteValues;
		if (_5f6 <= 1 || _5f6 == Infinity) {
			_5f6 = _5f4;
		}
		_5f6--;
		var _5f7 = _5f4 / _5f6;
		var _5f8 = Math.round(_5f3 / _5f7);
		this._setValueAttr((this.maximum - this.minimum) * _5f8 / _5f6 + this.minimum, _5f5);
	}, _setValueAttr: function (_5f9, _5fa) {
		this._set("value", _5f9);
		this.valueNode.value = _5f9;
		dijit.setWaiState(this.focusNode, "valuenow", _5f9);
		this.inherited(arguments);
		var _5fb = (_5f9 - this.minimum) / (this.maximum - this.minimum);
		var _5fc = (this._descending === false) ? this.remainingBar : this.progressBar;
		var _5fd = (this._descending === false) ? this.progressBar : this.remainingBar;
		if (this._inProgressAnim && this._inProgressAnim.status != "stopped") {
			this._inProgressAnim.stop(true);
		}
		if (_5fa && this.slideDuration > 0 && _5fc.style[this._progressPixelSize]) {
			var _5fe = this;
			var _5ff = {};
			var _600 = parseFloat(_5fc.style[this._progressPixelSize]);
			var _601 = this.slideDuration * (_5fb - _600 / 100);
			if (_601 == 0) {
				return;
			}
			if (_601 < 0) {
				_601 = 0 - _601;
			}
			_5ff[this._progressPixelSize] = {start: _600, end: _5fb * 100, units: "%"};
			this._inProgressAnim = dojo.animateProperty({node: _5fc, duration: _601, onAnimate: function (v) {
				_5fd.style[_5fe._progressPixelSize] = (100 - parseFloat(v[_5fe._progressPixelSize])) + "%";
			}, onEnd: function () {
				delete _5fe._inProgressAnim;
			}, properties: _5ff});
			this._inProgressAnim.play();
		} else {
			_5fc.style[this._progressPixelSize] = (_5fb * 100) + "%";
			_5fd.style[this._progressPixelSize] = ((1 - _5fb) * 100) + "%";
		}
	}, _bumpValue: function (_602, _603) {
		if (this.disabled || this.readOnly) {
			return;
		}
		var s = dojo.getComputedStyle(this.sliderBarContainer);
		var c = dojo._getContentBox(this.sliderBarContainer, s);
		var _604 = this.discreteValues;
		if (_604 <= 1 || _604 == Infinity) {
			_604 = c[this._pixelCount];
		}
		_604--;
		var _605 = (this.value - this.minimum) * _604 / (this.maximum - this.minimum) + _602;
		if (_605 < 0) {
			_605 = 0;
		}
		if (_605 > _604) {
			_605 = _604;
		}
		_605 = _605 * (this.maximum - this.minimum) / _604 + this.minimum;
		this._setValueAttr(_605, _603);
	}, _onClkBumper: function (val) {
		if (this.disabled || this.readOnly || !this.clickSelect) {
			return;
		}
		this._setValueAttr(val, true);
	}, _onClkIncBumper: function () {
		this._onClkBumper(this._descending === false ? this.minimum : this.maximum);
	}, _onClkDecBumper: function () {
		this._onClkBumper(this._descending === false ? this.maximum : this.minimum);
	}, decrement: function (e) {
		this._bumpValue(e.charOrCode == dojo.keys.PAGE_DOWN ? -this.pageIncrement : -1);
	}, increment: function (e) {
		this._bumpValue(e.charOrCode == dojo.keys.PAGE_UP ? this.pageIncrement : 1);
	}, _mouseWheeled: function (evt) {
		dojo.stopEvent(evt);
		var _606 = !dojo.isMozilla;
		var _607 = evt[(_606 ? "wheelDelta" : "detail")] * (_606 ? 1 : -1);
		this._bumpValue(_607 < 0 ? -1 : 1, true);
	}, startup: function () {
		if (this._started) {
			return;
		}
		dojo.forEach(this.getChildren(), function (_608) {
			if (this[_608.container] != this.containerNode) {
				this[_608.container].appendChild(_608.domNode);
			}
		}, this);
		this.inherited(arguments);
	}, _typematicCallback: function (_609, _60a, e) {
		if (_609 == -1) {
			this._setValueAttr(this.value, true);
		} else {
			this[(_60a == (this._descending ? this.incrementButton : this.decrementButton)) ? "decrement" : "increment"](e);
		}
	}, buildRendering: function () {
		this.inherited(arguments);
		if (this.showButtons) {
			this.incrementButton.style.display = "";
			this.decrementButton.style.display = "";
		}
		var _60b = dojo.query("label[for=\"" + this.id + "\"]");
		if (_60b.length) {
			_60b[0].id = (this.id + "_label");
			dijit.setWaiState(this.focusNode, "labelledby", _60b[0].id);
		}
		dijit.setWaiState(this.focusNode, "valuemin", this.minimum);
		dijit.setWaiState(this.focusNode, "valuemax", this.maximum);
	}, postCreate: function () {
		this.inherited(arguments);
		if (this.showButtons) {
			this._connects.push(dijit.typematic.addMouseListener(this.decrementButton, this, "_typematicCallback", 25, 500));
			this._connects.push(dijit.typematic.addMouseListener(this.incrementButton, this, "_typematicCallback", 25, 500));
		}
		this.connect(this.domNode, !dojo.isMozilla ? "onmousewheel" : "DOMMouseScroll", "_mouseWheeled");
		var _60c = dojo.declare(dijit.form._SliderMover, {widget: this});
		this._movable = new dojo.dnd.Moveable(this.sliderHandle, {mover: _60c});
		this._layoutHackIE7();
	}, destroy: function () {
		this._movable.destroy();
		if (this._inProgressAnim && this._inProgressAnim.status != "stopped") {
			this._inProgressAnim.stop(true);
		}
		this._supportingWidgets = dijit.findWidgets(this.domNode);
		this.inherited(arguments);
	}});
	dojo.declare("dijit.form._SliderMover", dojo.dnd.Mover, {onMouseMove: function (e) {
		var _60d = this.widget;
		var _60e = _60d._abspos;
		if (!_60e) {
			_60e = _60d._abspos = dojo.position(_60d.sliderBarContainer, true);
			_60d._setPixelValue_ = dojo.hitch(_60d, "_setPixelValue");
			_60d._isReversed_ = _60d._isReversed();
		}
		var _60f = e.touches ? e.touches[0] : e, _610 = _60f[_60d._mousePixelCoord] - _60e[_60d._startingPixelCoord];
		_60d._setPixelValue_(_60d._isReversed_ ? (_60e[_60d._pixelCount] - _610) : _610, _60e[_60d._pixelCount], false);
	}, destroy: function (e) {
		dojo.dnd.Mover.prototype.destroy.apply(this, arguments);
		var _611 = this.widget;
		_611._abspos = null;
		_611._setValueAttr(_611.value, true);
	}});
}
if (!dojo._hasResource["dijit.form.VerticalSlider"]) {
	dojo._hasResource["dijit.form.VerticalSlider"] = true;
	dojo.provide("dijit.form.VerticalSlider");
	dojo.declare("dijit.form.VerticalSlider", dijit.form.HorizontalSlider, {templateString: dojo.cache("dijit.form", "templates/VerticalSlider.html", "<table class=\"dijit dijitReset dijitSlider dijitSliderV\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" rules=\"none\" dojoAttachEvent=\"onkeypress:_onKeyPress,onkeyup:_onKeyUp\"\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset\"></td\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV\"\n\t\t\t><div class=\"dijitSliderIncrementIconV\" style=\"display:none\" dojoAttachPoint=\"decrementButton\"><span class=\"dijitSliderButtonInner\">+</span></div\n\t\t></td\n\t\t><td class=\"dijitReset\"></td\n\t></tr\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset\"></td\n\t\t><td class=\"dijitReset\"\n\t\t\t><center><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderTopBumper\" dojoAttachEvent=\"onmousedown:_onClkIncBumper\"></div></center\n\t\t></td\n\t\t><td class=\"dijitReset\"></td\n\t></tr\n\t><tr class=\"dijitReset\"\n\t\t><td dojoAttachPoint=\"leftDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationL dijitSliderDecorationV\"></td\n\t\t><td class=\"dijitReset dijitSliderDecorationC\" style=\"height:100%;\"\n\t\t\t><input dojoAttachPoint=\"valueNode\" type=\"hidden\" ${!nameAttrSetting}\n\t\t\t/><center class=\"dijitReset dijitSliderBarContainerV\" role=\"presentation\" dojoAttachPoint=\"sliderBarContainer\"\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"remainingBar\" class=\"dijitSliderBar dijitSliderBarV dijitSliderRemainingBar dijitSliderRemainingBarV\" dojoAttachEvent=\"onmousedown:_onBarClick\"><!--#5629--></div\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"progressBar\" class=\"dijitSliderBar dijitSliderBarV dijitSliderProgressBar dijitSliderProgressBarV\" dojoAttachEvent=\"onmousedown:_onBarClick\"\n\t\t\t\t\t><div class=\"dijitSliderMoveable dijitSliderMoveableV\" style=\"vertical-align:top;\"\n\t\t\t\t\t\t><div dojoAttachPoint=\"sliderHandle,focusNode\" class=\"dijitSliderImageHandle dijitSliderImageHandleV\" dojoAttachEvent=\"onmousedown:_onHandleClick\" role=\"slider\" valuemin=\"${minimum}\" valuemax=\"${maximum}\"></div\n\t\t\t\t\t></div\n\t\t\t\t></div\n\t\t\t></center\n\t\t></td\n\t\t><td dojoAttachPoint=\"containerNode,rightDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationR dijitSliderDecorationV\"></td\n\t></tr\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset\"></td\n\t\t><td class=\"dijitReset\"\n\t\t\t><center><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderBottomBumper\" dojoAttachEvent=\"onmousedown:_onClkDecBumper\"></div></center\n\t\t></td\n\t\t><td class=\"dijitReset\"></td\n\t></tr\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset\"></td\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV\"\n\t\t\t><div class=\"dijitSliderDecrementIconV\" style=\"display:none\" dojoAttachPoint=\"incrementButton\"><span class=\"dijitSliderButtonInner\">-</span></div\n\t\t></td\n\t\t><td class=\"dijitReset\"></td\n\t></tr\n></table>\n"), _mousePixelCoord: "pageY", _pixelCount: "h", _startingPixelCoord: "y", _startingPixelCount: "t", _handleOffsetCoord: "top", _progressPixelSize: "height", _descending: true, _isReversed: function () {
		return this._descending;
	}});
}
if (!dojo._hasResource["dijit.form.HorizontalRule"]) {
	dojo._hasResource["dijit.form.HorizontalRule"] = true;
	dojo.provide("dijit.form.HorizontalRule");
	dojo.declare("dijit.form.HorizontalRule", [dijit._Widget, dijit._Templated], {templateString: "<div class=\"dijitRuleContainer dijitRuleContainerH\"></div>", count: 3, container: "containerNode", ruleStyle: "", _positionPrefix: "<div class=\"dijitRuleMark dijitRuleMarkH\" style=\"left:", _positionSuffix: "%;", _suffix: "\"></div>", _genHTML: function (pos, ndx) {
		return this._positionPrefix + pos + this._positionSuffix + this.ruleStyle + this._suffix;
	}, _isHorizontal: true, buildRendering: function () {
		this.inherited(arguments);
		var _612;
		if (this.count == 1) {
			_612 = this._genHTML(50, 0);
		} else {
			var i;
			var _613 = 100 / (this.count - 1);
			if (!this._isHorizontal || this.isLeftToRight()) {
				_612 = this._genHTML(0, 0);
				for (i = 1; i < this.count - 1; i++) {
					_612 += this._genHTML(_613 * i, i);
				}
				_612 += this._genHTML(100, this.count - 1);
			} else {
				_612 = this._genHTML(100, 0);
				for (i = 1; i < this.count - 1; i++) {
					_612 += this._genHTML(100 - _613 * i, i);
				}
				_612 += this._genHTML(0, this.count - 1);
			}
		}
		this.domNode.innerHTML = _612;
	}});
}
if (!dojo._hasResource["dijit.form.VerticalRule"]) {
	dojo._hasResource["dijit.form.VerticalRule"] = true;
	dojo.provide("dijit.form.VerticalRule");
	dojo.declare("dijit.form.VerticalRule", dijit.form.HorizontalRule, {templateString: "<div class=\"dijitRuleContainer dijitRuleContainerV\"></div>", _positionPrefix: "<div class=\"dijitRuleMark dijitRuleMarkV\" style=\"top:", _isHorizontal: false});
}
if (!dojo._hasResource["dijit.form.HorizontalRuleLabels"]) {
	dojo._hasResource["dijit.form.HorizontalRuleLabels"] = true;
	dojo.provide("dijit.form.HorizontalRuleLabels");
	dojo.declare("dijit.form.HorizontalRuleLabels", dijit.form.HorizontalRule, {templateString: "<div class=\"dijitRuleContainer dijitRuleContainerH dijitRuleLabelsContainer dijitRuleLabelsContainerH\"></div>", labelStyle: "", labels: [], numericMargin: 0, minimum: 0, maximum: 1, constraints: {pattern: "#%"}, _positionPrefix: "<div class=\"dijitRuleLabelContainer dijitRuleLabelContainerH\" style=\"left:", _labelPrefix: "\"><div class=\"dijitRuleLabel dijitRuleLabelH\">", _suffix: "</div></div>", _calcPosition: function (pos) {
		return pos;
	}, _genHTML: function (pos, ndx) {
		return this._positionPrefix + this._calcPosition(pos) + this._positionSuffix + this.labelStyle + this._labelPrefix + this.labels[ndx] + this._suffix;
	}, getLabels: function () {
		var _614 = this.labels;
		if (!_614.length) {
			_614 = dojo.query("> li", this.srcNodeRef).map(function (node) {
				return String(node.innerHTML);
			});
		}
		this.srcNodeRef.innerHTML = "";
		if (!_614.length && this.count > 1) {
			var _615 = this.minimum;
			var inc = (this.maximum - _615) / (this.count - 1);
			for (var i = 0; i < this.count; i++) {
				_614.push((i < this.numericMargin || i >= (this.count - this.numericMargin)) ? "" : dojo.number.format(_615, this.constraints));
				_615 += inc;
			}
		}
		return _614;
	}, postMixInProperties: function () {
		this.inherited(arguments);
		this.labels = this.getLabels();
		this.count = this.labels.length;
	}});
}
if (!dojo._hasResource["dijit.form.VerticalRuleLabels"]) {
	dojo._hasResource["dijit.form.VerticalRuleLabels"] = true;
	dojo.provide("dijit.form.VerticalRuleLabels");
	dojo.declare("dijit.form.VerticalRuleLabels", dijit.form.HorizontalRuleLabels, {templateString: "<div class=\"dijitRuleContainer dijitRuleContainerV dijitRuleLabelsContainer dijitRuleLabelsContainerV\"></div>", _positionPrefix: "<div class=\"dijitRuleLabelContainer dijitRuleLabelContainerV\" style=\"top:", _labelPrefix: "\"><span class=\"dijitRuleLabel dijitRuleLabelV\">", _calcPosition: function (pos) {
		return 100 - pos;
	}, _isHorizontal: false});
}
if (!dojo._hasResource["dijit.form.SimpleTextarea"]) {
	dojo._hasResource["dijit.form.SimpleTextarea"] = true;
	dojo.provide("dijit.form.SimpleTextarea");
	dojo.declare("dijit.form.SimpleTextarea", dijit.form.TextBox, {baseClass: "dijitTextBox dijitTextArea", attributeMap: dojo.delegate(dijit.form._FormValueWidget.prototype.attributeMap, {rows: "textbox", cols: "textbox"}), rows: "3", cols: "20", templateString: "<textarea ${!nameAttrSetting} dojoAttachPoint='focusNode,containerNode,textbox' autocomplete='off'></textarea>", postMixInProperties: function () {
		if (!this.value && this.srcNodeRef) {
			this.value = this.srcNodeRef.value;
		}
		this.inherited(arguments);
	}, buildRendering: function () {
		this.inherited(arguments);
		if (dojo.isIE && this.cols) {
			dojo.addClass(this.textbox, "dijitTextAreaCols");
		}
	}, filter: function (_616) {
		if (_616) {
			_616 = _616.replace(/\r/g, "");
		}
		return this.inherited(arguments);
	}, _previousValue: "", _onInput: function (e) {
		if (this.maxLength) {
			var _617 = parseInt(this.maxLength);
			var _618 = this.textbox.value.replace(/\r/g, "");
			var _619 = _618.length - _617;
			if (_619 > 0) {
				if (e) {
					dojo.stopEvent(e);
				}
				var _61a = this.textbox;
				if (_61a.selectionStart) {
					var pos = _61a.selectionStart;
					var cr = 0;
					if (dojo.isOpera) {
						cr = (this.textbox.value.substring(0, pos).match(/\r/g) || []).length;
					}
					this.textbox.value = _618.substring(0, pos - _619 - cr) + _618.substring(pos - cr);
					_61a.setSelectionRange(pos - _619, pos - _619);
				} else {
					if (dojo.doc.selection) {
						_61a.focus();
						var _61b = dojo.doc.selection.createRange();
						_61b.moveStart("character", -_619);
						_61b.text = "";
						_61b.select();
					}
				}
			}
			this._previousValue = this.textbox.value;
		}
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit.form.Textarea"]) {
	dojo._hasResource["dijit.form.Textarea"] = true;
	dojo.provide("dijit.form.Textarea");
	dojo.declare("dijit.form.Textarea", dijit.form.SimpleTextarea, {baseClass: "dijitTextBox dijitTextArea dijitExpandingTextArea", cols: "", _previousNewlines: 0, _strictMode: (dojo.doc.compatMode != "BackCompat"), _getHeight: function (_61c) {
		var newH = _61c.scrollHeight;
		if (dojo.isIE) {
			newH += _61c.offsetHeight - _61c.clientHeight - ((dojo.isIE < 8 && this._strictMode) ? dojo._getPadBorderExtents(_61c).h : 0);
		} else {
			if (dojo.isMoz) {
				newH += _61c.offsetHeight - _61c.clientHeight;
			} else {
				if (dojo.isWebKit) {
					newH += dojo._getBorderExtents(_61c).h;
				} else {
					newH += dojo._getPadBorderExtents(_61c).h;
				}
			}
		}
		return newH;
	}, _estimateHeight: function (_61d) {
		_61d.style.maxHeight = "";
		_61d.style.height = "auto";
		_61d.rows = (_61d.value.match(/\n/g) || []).length + 1;
	}, _needsHelpShrinking: dojo.isMoz || dojo.isWebKit, _onInput: function () {
		this.inherited(arguments);
		if (this._busyResizing) {
			return;
		}
		this._busyResizing = true;
		var _61e = this.textbox;
		if (_61e.scrollHeight && _61e.offsetHeight && _61e.clientHeight) {
			var newH = this._getHeight(_61e) + "px";
			if (_61e.style.height != newH) {
				_61e.style.maxHeight = _61e.style.height = newH;
			}
			if (this._needsHelpShrinking) {
				if (this._setTimeoutHandle) {
					clearTimeout(this._setTimeoutHandle);
				}
				this._setTimeoutHandle = setTimeout(dojo.hitch(this, "_shrink"), 0);
			}
		} else {
			this._estimateHeight(_61e);
		}
		this._busyResizing = false;
	}, _busyResizing: false, _shrink: function () {
		this._setTimeoutHandle = null;
		if (this._needsHelpShrinking && !this._busyResizing) {
			this._busyResizing = true;
			var _61f = this.textbox;
			var _620 = false;
			if (_61f.value == "") {
				_61f.value = " ";
				_620 = true;
			}
			var _621 = _61f.scrollHeight;
			if (!_621) {
				this._estimateHeight(_61f);
			} else {
				var _622 = _61f.style.paddingBottom;
				var _623 = dojo._getPadExtents(_61f);
				_623 = _623.h - _623.t;
				_61f.style.paddingBottom = _623 + 1 + "px";
				var newH = this._getHeight(_61f) - 1 + "px";
				if (_61f.style.maxHeight != newH) {
					_61f.style.paddingBottom = _623 + _621 + "px";
					_61f.scrollTop = 0;
					_61f.style.maxHeight = this._getHeight(_61f) - _621 + "px";
				}
				_61f.style.paddingBottom = _622;
			}
			if (_620) {
				_61f.value = "";
			}
			this._busyResizing = false;
		}
	}, resize: function () {
		this._onInput();
	}, _setValueAttr: function () {
		this.inherited(arguments);
		this.resize();
	}, buildRendering: function () {
		this.inherited(arguments);
		dojo.style(this.textbox, {overflowY: "hidden", overflowX: "auto", boxSizing: "border-box", MsBoxSizing: "border-box", WebkitBoxSizing: "border-box", MozBoxSizing: "border-box"});
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this.textbox, "onscroll", "_onInput");
		this.connect(this.textbox, "onresize", "_onInput");
		this.connect(this.textbox, "onfocus", "_onInput");
		this._setTimeoutHandle = setTimeout(dojo.hitch(this, "resize"), 0);
	}, uninitialize: function () {
		if (this._setTimeoutHandle) {
			clearTimeout(this._setTimeoutHandle);
		}
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit.layout.StackController"]) {
	dojo._hasResource["dijit.layout.StackController"] = true;
	dojo.provide("dijit.layout.StackController");
	dojo.declare("dijit.layout.StackController", [dijit._Widget, dijit._Templated, dijit._Container], {templateString: "<span role='tablist' dojoAttachEvent='onkeypress' class='dijitStackController'></span>", containerId: "", buttonWidget: "dijit.layout._StackButton", constructor: function () {
		this.pane2button = {};
		this.pane2connects = {};
		this.pane2watches = {};
	}, buildRendering: function () {
		this.inherited(arguments);
		dijit.setWaiRole(this.domNode, "tablist");
	}, postCreate: function () {
		this.inherited(arguments);
		this.subscribe(this.containerId + "-startup", "onStartup");
		this.subscribe(this.containerId + "-addChild", "onAddChild");
		this.subscribe(this.containerId + "-removeChild", "onRemoveChild");
		this.subscribe(this.containerId + "-selectChild", "onSelectChild");
		this.subscribe(this.containerId + "-containerKeyPress", "onContainerKeyPress");
	}, onStartup: function (info) {
		dojo.forEach(info.children, this.onAddChild, this);
		if (info.selected) {
			this.onSelectChild(info.selected);
		}
	}, destroy: function () {
		for (var pane in this.pane2button) {
			this.onRemoveChild(dijit.byId(pane));
		}
		this.inherited(arguments);
	}, onAddChild: function (page, _624) {
		var cls = dojo.getObject(this.buttonWidget);
		var _625 = new cls({id: this.id + "_" + page.id, label: page.title, dir: page.dir, lang: page.lang, showLabel: page.showTitle, iconClass: page.iconClass, closeButton: page.closable, title: page.tooltip});
		dijit.setWaiState(_625.focusNode, "selected", "false");
		var _626 = ["title", "showTitle", "iconClass", "closable", "tooltip"], _627 = ["label", "showLabel", "iconClass", "closeButton", "title"];
		this.pane2watches[page.id] = dojo.map(_626, function (_628, idx) {
			return page.watch(_628, function (name, _629, _62a) {
				_625.set(_627[idx], _62a);
			});
		});
		this.pane2connects[page.id] = [this.connect(_625, "onClick", dojo.hitch(this, "onButtonClick", page)), this.connect(_625, "onClickCloseButton", dojo.hitch(this, "onCloseButtonClick", page))];
		this.addChild(_625, _624);
		this.pane2button[page.id] = _625;
		page.controlButton = _625;
		if (!this._currentChild) {
			_625.focusNode.setAttribute("tabIndex", "0");
			dijit.setWaiState(_625.focusNode, "selected", "true");
			this._currentChild = page;
		}
		if (!this.isLeftToRight() && dojo.isIE && this._rectifyRtlTabList) {
			this._rectifyRtlTabList();
		}
	}, onRemoveChild: function (page) {
		if (this._currentChild === page) {
			this._currentChild = null;
		}
		dojo.forEach(this.pane2connects[page.id], dojo.hitch(this, "disconnect"));
		delete this.pane2connects[page.id];
		dojo.forEach(this.pane2watches[page.id], function (w) {
			w.unwatch();
		});
		delete this.pane2watches[page.id];
		var _62b = this.pane2button[page.id];
		if (_62b) {
			this.removeChild(_62b);
			delete this.pane2button[page.id];
			_62b.destroy();
		}
		delete page.controlButton;
	}, onSelectChild: function (page) {
		if (!page) {
			return;
		}
		if (this._currentChild) {
			var _62c = this.pane2button[this._currentChild.id];
			_62c.set("checked", false);
			dijit.setWaiState(_62c.focusNode, "selected", "false");
			_62c.focusNode.setAttribute("tabIndex", "-1");
		}
		var _62d = this.pane2button[page.id];
		_62d.set("checked", true);
		dijit.setWaiState(_62d.focusNode, "selected", "true");
		this._currentChild = page;
		_62d.focusNode.setAttribute("tabIndex", "0");
		var _62e = dijit.byId(this.containerId);
		dijit.setWaiState(_62e.containerNode, "labelledby", _62d.id);
	}, onButtonClick: function (page) {
		var _62f = dijit.byId(this.containerId);
		_62f.selectChild(page);
	}, onCloseButtonClick: function (page) {
		var _630 = dijit.byId(this.containerId);
		_630.closeChild(page);
		if (this._currentChild) {
			var b = this.pane2button[this._currentChild.id];
			if (b) {
				dijit.focus(b.focusNode || b.domNode);
			}
		}
	}, adjacent: function (_631) {
		if (!this.isLeftToRight() && (!this.tabPosition || /top|bottom/.test(this.tabPosition))) {
			_631 = !_631;
		}
		var _632 = this.getChildren();
		var _633 = dojo.indexOf(_632, this.pane2button[this._currentChild.id]);
		var _634 = _631 ? 1 : _632.length - 1;
		return _632[(_633 + _634) % _632.length];
	}, onkeypress: function (e) {
		if (this.disabled || e.altKey) {
			return;
		}
		var _635 = null;
		if (e.ctrlKey || !e._djpage) {
			var k = dojo.keys;
			switch (e.charOrCode) {
				case k.LEFT_ARROW:
				case k.UP_ARROW:
					if (!e._djpage) {
						_635 = false;
					}
					break;
				case k.PAGE_UP:
					if (e.ctrlKey) {
						_635 = false;
					}
					break;
				case k.RIGHT_ARROW:
				case k.DOWN_ARROW:
					if (!e._djpage) {
						_635 = true;
					}
					break;
				case k.PAGE_DOWN:
					if (e.ctrlKey) {
						_635 = true;
					}
					break;
				case k.HOME:
				case k.END:
					var _636 = this.getChildren();
					if (_636 && _636.length) {
						_636[e.charOrCode == k.HOME ? 0 : _636.length - 1].onClick();
					}
					dojo.stopEvent(e);
					break;
				case k.DELETE:
					if (this._currentChild.closable) {
						this.onCloseButtonClick(this._currentChild);
					}
					dojo.stopEvent(e);
					break;
				default:
					if (e.ctrlKey) {
						if (e.charOrCode === k.TAB) {
							this.adjacent(!e.shiftKey).onClick();
							dojo.stopEvent(e);
						} else {
							if (e.charOrCode == "w") {
								if (this._currentChild.closable) {
									this.onCloseButtonClick(this._currentChild);
								}
								dojo.stopEvent(e);
							}
						}
					}
			}
			if (_635 !== null) {
				this.adjacent(_635).onClick();
				dojo.stopEvent(e);
			}
		}
	}, onContainerKeyPress: function (info) {
		info.e._djpage = info.page;
		this.onkeypress(info.e);
	}});
	dojo.declare("dijit.layout._StackButton", dijit.form.ToggleButton, {tabIndex: "-1", buildRendering: function (evt) {
		this.inherited(arguments);
		dijit.setWaiRole((this.focusNode || this.domNode), "tab");
	}, onClick: function (evt) {
		dijit.focus(this.focusNode);
	}, onClickCloseButton: function (evt) {
		evt.stopPropagation();
	}});
}
if (!dojo._hasResource["dijit.layout.StackContainer"]) {
	dojo._hasResource["dijit.layout.StackContainer"] = true;
	dojo.provide("dijit.layout.StackContainer");
	dojo.declare("dijit.layout.StackContainer", dijit.layout._LayoutWidget, {doLayout: true, persist: false, baseClass: "dijitStackContainer", buildRendering: function () {
		this.inherited(arguments);
		dojo.addClass(this.domNode, "dijitLayoutContainer");
		dijit.setWaiRole(this.containerNode, "tabpanel");
	}, postCreate: function () {
		this.inherited(arguments);
		this.connect(this.domNode, "onkeypress", this._onKeyPress);
	}, startup: function () {
		if (this._started) {
			return;
		}
		var _637 = this.getChildren();
		dojo.forEach(_637, this._setupChild, this);
		if (this.persist) {
			this.selectedChildWidget = dijit.byId(dojo.cookie(this.id + "_selectedChild"));
		} else {
			dojo.some(_637, function (_638) {
				if (_638.selected) {
					this.selectedChildWidget = _638;
				}
				return _638.selected;
			}, this);
		}
		var _639 = this.selectedChildWidget;
		if (!_639 && _637[0]) {
			_639 = this.selectedChildWidget = _637[0];
			_639.selected = true;
		}
		dojo.publish(this.id + "-startup", [
			{children: _637, selected: _639}
		]);
		this.inherited(arguments);
	}, resize: function () {
		var _63a = this.selectedChildWidget;
		if (_63a && !this._hasBeenShown) {
			this._hasBeenShown = true;
			this._showChild(_63a);
		}
		this.inherited(arguments);
	}, _setupChild: function (_63b) {
		this.inherited(arguments);
		dojo.replaceClass(_63b.domNode, "dijitHidden", "dijitVisible");
		_63b.domNode.title = "";
	}, addChild: function (_63c, _63d) {
		this.inherited(arguments);
		if (this._started) {
			dojo.publish(this.id + "-addChild", [_63c, _63d]);
			this.layout();
			if (!this.selectedChildWidget) {
				this.selectChild(_63c);
			}
		}
	}, removeChild: function (page) {
		this.inherited(arguments);
		if (this._started) {
			dojo.publish(this.id + "-removeChild", [page]);
		}
		if (this._beingDestroyed) {
			return;
		}
		if (this.selectedChildWidget === page) {
			this.selectedChildWidget = undefined;
			if (this._started) {
				var _63e = this.getChildren();
				if (_63e.length) {
					this.selectChild(_63e[0]);
				}
			}
		}
		if (this._started) {
			this.layout();
		}
	}, selectChild: function (page, _63f) {
		page = dijit.byId(page);
		if (this.selectedChildWidget != page) {
			var d = this._transition(page, this.selectedChildWidget, _63f);
			this._set("selectedChildWidget", page);
			dojo.publish(this.id + "-selectChild", [page]);
			if (this.persist) {
				dojo.cookie(this.id + "_selectedChild", this.selectedChildWidget.id);
			}
		}
		return d;
	}, _transition: function (_640, _641, _642) {
		if (_641) {
			this._hideChild(_641);
		}
		var d = this._showChild(_640);
		if (_640.resize) {
			if (this.doLayout) {
				_640.resize(this._containerContentBox || this._contentBox);
			} else {
				_640.resize();
			}
		}
		return d;
	}, _adjacent: function (_643) {
		var _644 = this.getChildren();
		var _645 = dojo.indexOf(_644, this.selectedChildWidget);
		_645 += _643 ? 1 : _644.length - 1;
		return _644[_645 % _644.length];
	}, forward: function () {
		return this.selectChild(this._adjacent(true), true);
	}, back: function () {
		return this.selectChild(this._adjacent(false), true);
	}, _onKeyPress: function (e) {
		dojo.publish(this.id + "-containerKeyPress", [
			{e: e, page: this}
		]);
	}, layout: function () {
		if (this.doLayout && this.selectedChildWidget && this.selectedChildWidget.resize) {
			this.selectedChildWidget.resize(this._containerContentBox || this._contentBox);
		}
	}, _showChild: function (page) {
		var _646 = this.getChildren();
		page.isFirstChild = (page == _646[0]);
		page.isLastChild = (page == _646[_646.length - 1]);
		page._set("selected", true);
		dojo.replaceClass(page.domNode, "dijitVisible", "dijitHidden");
		return page._onShow() || true;
	}, _hideChild: function (page) {
		page._set("selected", false);
		dojo.replaceClass(page.domNode, "dijitHidden", "dijitVisible");
		page.onHide();
	}, closeChild: function (page) {
		var _647 = page.onClose(this, page);
		if (_647) {
			this.removeChild(page);
			page.destroyRecursive();
		}
	}, destroyDescendants: function (_648) {
		dojo.forEach(this.getChildren(), function (_649) {
			this.removeChild(_649);
			_649.destroyRecursive(_648);
		}, this);
	}});
	dojo.extend(dijit._Widget, {selected: false, closable: false, iconClass: "", showTitle: true});
}
if (!dojo._hasResource["dijit.layout.AccordionPane"]) {
	dojo._hasResource["dijit.layout.AccordionPane"] = true;
	dojo.provide("dijit.layout.AccordionPane");
	dojo.declare("dijit.layout.AccordionPane", dijit.layout.ContentPane, {constructor: function () {
		dojo.deprecated("dijit.layout.AccordionPane deprecated, use ContentPane instead", "", "2.0");
	}, onSelected: function () {
	}});
}
if (!dojo._hasResource["dijit.layout.AccordionContainer"]) {
	dojo._hasResource["dijit.layout.AccordionContainer"] = true;
	dojo.provide("dijit.layout.AccordionContainer");
	dojo.declare("dijit.layout.AccordionContainer", dijit.layout.StackContainer, {duration: dijit.defaultDuration, buttonWidget: "dijit.layout._AccordionButton", baseClass: "dijitAccordionContainer", buildRendering: function () {
		this.inherited(arguments);
		this.domNode.style.overflow = "hidden";
		dijit.setWaiRole(this.domNode, "tablist");
	}, startup: function () {
		if (this._started) {
			return;
		}
		this.inherited(arguments);
		if (this.selectedChildWidget) {
			var _64a = this.selectedChildWidget.containerNode.style;
			_64a.display = "";
			_64a.overflow = "auto";
			this.selectedChildWidget._wrapperWidget.set("selected", true);
		}
	}, layout: function () {
		var _64b = this.selectedChildWidget;
		if (!_64b) {
			return;
		}
		var _64c = _64b._wrapperWidget.domNode, _64d = dojo._getMarginExtents(_64c), _64e = dojo._getPadBorderExtents(_64c), _64f = _64b._wrapperWidget.containerNode, _650 = dojo._getMarginExtents(_64f), _651 = dojo._getPadBorderExtents(_64f), _652 = this._contentBox;
		var _653 = 0;
		dojo.forEach(this.getChildren(), function (_654) {
			if (_654 != _64b) {
				_653 += dojo._getMarginSize(_654._wrapperWidget.domNode).h;
			}
		});
		this._verticalSpace = _652.h - _653 - _64d.h - _64e.h - _650.h - _651.h - _64b._buttonWidget.getTitleHeight();
		this._containerContentBox = {h: this._verticalSpace, w: this._contentBox.w - _64d.w - _64e.w - _650.w - _651.w};
		if (_64b) {
			_64b.resize(this._containerContentBox);
		}
	}, _setupChild: function (_655) {
		_655._wrapperWidget = new dijit.layout._AccordionInnerContainer({contentWidget: _655, buttonWidget: this.buttonWidget, id: _655.id + "_wrapper", dir: _655.dir, lang: _655.lang, parent: this});
		this.inherited(arguments);
	}, addChild: function (_656, _657) {
		if (this._started) {
			dojo.place(_656.domNode, this.containerNode, _657);
			if (!_656._started) {
				_656.startup();
			}
			this._setupChild(_656);
			dojo.publish(this.id + "-addChild", [_656, _657]);
			this.layout();
			if (!this.selectedChildWidget) {
				this.selectChild(_656);
			}
		} else {
			this.inherited(arguments);
		}
	}, removeChild: function (_658) {
		if (_658._wrapperWidget) {
			dojo.place(_658.domNode, _658._wrapperWidget.domNode, "after");
			_658._wrapperWidget.destroy();
			delete _658._wrapperWidget;
		}
		dojo.removeClass(_658.domNode, "dijitHidden");
		this.inherited(arguments);
	}, getChildren: function () {
		return dojo.map(this.inherited(arguments), function (_659) {
			return _659.declaredClass == "dijit.layout._AccordionInnerContainer" ? _659.contentWidget : _659;
		}, this);
	}, destroy: function () {
		if (this._animation) {
			this._animation.stop();
		}
		dojo.forEach(this.getChildren(), function (_65a) {
			if (_65a._wrapperWidget) {
				_65a._wrapperWidget.destroy();
			} else {
				_65a.destroyRecursive();
			}
		});
		this.inherited(arguments);
	}, _showChild: function (_65b) {
		_65b._wrapperWidget.containerNode.style.display = "block";
		return this.inherited(arguments);
	}, _hideChild: function (_65c) {
		_65c._wrapperWidget.containerNode.style.display = "none";
		this.inherited(arguments);
	}, _transition: function (_65d, _65e, _65f) {
		if (dojo.isIE < 8) {
			_65f = false;
		}
		if (this._animation) {
			this._animation.stop(true);
			delete this._animation;
		}
		var self = this;
		if (_65d) {
			_65d._wrapperWidget.set("selected", true);
			var d = this._showChild(_65d);
			if (this.doLayout && _65d.resize) {
				_65d.resize(this._containerContentBox);
			}
		}
		if (_65e) {
			_65e._wrapperWidget.set("selected", false);
			if (!_65f) {
				this._hideChild(_65e);
			}
		}
		if (_65f) {
			var _660 = _65d._wrapperWidget.containerNode, _661 = _65e._wrapperWidget.containerNode;
			var _662 = _65d._wrapperWidget.containerNode, _663 = dojo._getMarginExtents(_662), _664 = dojo._getPadBorderExtents(_662), _665 = _663.h + _664.h;
			_661.style.height = (self._verticalSpace - _665) + "px";
			this._animation = new dojo.Animation({node: _660, duration: this.duration, curve: [1, this._verticalSpace - _665 - 1], onAnimate: function (_666) {
				_666 = Math.floor(_666);
				_660.style.height = _666 + "px";
				_661.style.height = (self._verticalSpace - _665 - _666) + "px";
			}, onEnd: function () {
				delete self._animation;
				_660.style.height = "auto";
				_65e._wrapperWidget.containerNode.style.display = "none";
				_661.style.height = "auto";
				self._hideChild(_65e);
			}});
			this._animation.onStop = this._animation.onEnd;
			this._animation.play();
		}
		return d;
	}, _onKeyPress: function (e, _667) {
		if (this.disabled || e.altKey || !(_667 || e.ctrlKey)) {
			return;
		}
		var k = dojo.keys, c = e.charOrCode;
		if ((_667 && (c == k.LEFT_ARROW || c == k.UP_ARROW)) || (e.ctrlKey && c == k.PAGE_UP)) {
			this._adjacent(false)._buttonWidget._onTitleClick();
			dojo.stopEvent(e);
		} else {
			if ((_667 && (c == k.RIGHT_ARROW || c == k.DOWN_ARROW)) || (e.ctrlKey && (c == k.PAGE_DOWN || c == k.TAB))) {
				this._adjacent(true)._buttonWidget._onTitleClick();
				dojo.stopEvent(e);
			}
		}
	}});
	dojo.declare("dijit.layout._AccordionInnerContainer", [dijit._Widget, dijit._CssStateMixin], {baseClass: "dijitAccordionInnerContainer", isContainer: true, isLayoutContainer: true, buildRendering: function () {
		this.domNode = dojo.place("<div class='" + this.baseClass + "'>", this.contentWidget.domNode, "after");
		var _668 = this.contentWidget, cls = dojo.getObject(this.buttonWidget);
		this.button = _668._buttonWidget = (new cls({contentWidget: _668, label: _668.title, title: _668.tooltip, dir: _668.dir, lang: _668.lang, iconClass: _668.iconClass, id: _668.id + "_button", parent: this.parent})).placeAt(this.domNode);
		this.containerNode = dojo.place("<div class='dijitAccordionChildWrapper' style='display:none'>", this.domNode);
		dojo.place(this.contentWidget.domNode, this.containerNode);
	}, postCreate: function () {
		this.inherited(arguments);
		var _669 = this.button;
		this._contentWidgetWatches = [this.contentWidget.watch("title", dojo.hitch(this, function (name, _66a, _66b) {
			_669.set("label", _66b);
		})), this.contentWidget.watch("tooltip", dojo.hitch(this, function (name, _66c, _66d) {
			_669.set("title", _66d);
		})), this.contentWidget.watch("iconClass", dojo.hitch(this, function (name, _66e, _66f) {
			_669.set("iconClass", _66f);
		}))];
	}, _setSelectedAttr: function (_670) {
		this._set("selected", _670);
		this.button.set("selected", _670);
		if (_670) {
			var cw = this.contentWidget;
			if (cw.onSelected) {
				cw.onSelected();
			}
		}
	}, startup: function () {
		this.contentWidget.startup();
	}, destroy: function () {
		this.button.destroyRecursive();
		dojo.forEach(this._contentWidgetWatches || [], function (w) {
			w.unwatch();
		});
		delete this.contentWidget._buttonWidget;
		delete this.contentWidget._wrapperWidget;
		this.inherited(arguments);
	}, destroyDescendants: function () {
		this.contentWidget.destroyRecursive();
	}});
	dojo.declare("dijit.layout._AccordionButton", [dijit._Widget, dijit._Templated, dijit._CssStateMixin], {templateString: dojo.cache("dijit.layout", "templates/AccordionButton.html", "<div dojoAttachEvent='onclick:_onTitleClick' class='dijitAccordionTitle'>\n\t<div dojoAttachPoint='titleNode,focusNode' dojoAttachEvent='onkeypress:_onTitleKeyPress'\n\t\t\tclass='dijitAccordionTitleFocus' role=\"tab\" aria-expanded=\"false\"\n\t\t><span class='dijitInline dijitAccordionArrow' role=\"presentation\"></span\n\t\t><span class='arrowTextUp' role=\"presentation\">+</span\n\t\t><span class='arrowTextDown' role=\"presentation\">-</span\n\t\t><img src=\"${_blankGif}\" alt=\"\" class=\"dijitIcon\" dojoAttachPoint='iconNode' style=\"vertical-align: middle\" role=\"presentation\"/>\n\t\t<span role=\"presentation\" dojoAttachPoint='titleTextNode' class='dijitAccordionText'></span>\n\t</div>\n</div>\n"), attributeMap: dojo.mixin(dojo.clone(dijit.layout.ContentPane.prototype.attributeMap), {label: {node: "titleTextNode", type: "innerHTML"}, title: {node: "titleTextNode", type: "attribute", attribute: "title"}, iconClass: {node: "iconNode", type: "class"}}), baseClass: "dijitAccordionTitle", getParent: function () {
		return this.parent;
	}, buildRendering: function () {
		this.inherited(arguments);
		var _671 = this.id.replace(" ", "_");
		dojo.attr(this.titleTextNode, "id", _671 + "_title");
		dijit.setWaiState(this.focusNode, "labelledby", dojo.attr(this.titleTextNode, "id"));
		dojo.setSelectable(this.domNode, false);
	}, getTitleHeight: function () {
		return dojo._getMarginSize(this.domNode).h;
	}, _onTitleClick: function () {
		var _672 = this.getParent();
		_672.selectChild(this.contentWidget, true);
		dijit.focus(this.focusNode);
	}, _onTitleKeyPress: function (evt) {
		return this.getParent()._onKeyPress(evt, this.contentWidget);
	}, _setSelectedAttr: function (_673) {
		this._set("selected", _673);
		dijit.setWaiState(this.focusNode, "expanded", _673);
		dijit.setWaiState(this.focusNode, "selected", _673);
		this.focusNode.setAttribute("tabIndex", _673 ? "0" : "-1");
	}});
}
if (!dojo._hasResource["dijit.layout.BorderContainer"]) {
	dojo._hasResource["dijit.layout.BorderContainer"] = true;
	dojo.provide("dijit.layout.BorderContainer");
	dojo.declare("dijit.layout.BorderContainer", dijit.layout._LayoutWidget, {design: "headline", gutters: true, liveSplitters: true, persist: false, baseClass: "dijitBorderContainer", _splitterClass: "dijit.layout._Splitter", postMixInProperties: function () {
		if (!this.gutters) {
			this.baseClass += "NoGutter";
		}
		this.inherited(arguments);
	}, startup: function () {
		if (this._started) {
			return;
		}
		dojo.forEach(this.getChildren(), this._setupChild, this);
		this.inherited(arguments);
	}, _setupChild: function (_674) {
		var _675 = _674.region;
		if (_675) {
			this.inherited(arguments);
			dojo.addClass(_674.domNode, this.baseClass + "Pane");
			var ltr = this.isLeftToRight();
			if (_675 == "leading") {
				_675 = ltr ? "left" : "right";
			}
			if (_675 == "trailing") {
				_675 = ltr ? "right" : "left";
			}
			if (_675 != "center" && (_674.splitter || this.gutters) && !_674._splitterWidget) {
				var _676 = dojo.getObject(_674.splitter ? this._splitterClass : "dijit.layout._Gutter");
				var _677 = new _676({id: _674.id + "_splitter", container: this, child: _674, region: _675, live: this.liveSplitters});
				_677.isSplitter = true;
				_674._splitterWidget = _677;
				dojo.place(_677.domNode, _674.domNode, "after");
				_677.startup();
			}
			_674.region = _675;
		}
	}, layout: function () {
		this._layoutChildren();
	}, addChild: function (_678, _679) {
		this.inherited(arguments);
		if (this._started) {
			this.layout();
		}
	}, removeChild: function (_67a) {
		var _67b = _67a.region;
		var _67c = _67a._splitterWidget;
		if (_67c) {
			_67c.destroy();
			delete _67a._splitterWidget;
		}
		this.inherited(arguments);
		if (this._started) {
			this._layoutChildren();
		}
		dojo.removeClass(_67a.domNode, this.baseClass + "Pane");
		dojo.style(_67a.domNode, {top: "auto", bottom: "auto", left: "auto", right: "auto", position: "static"});
		dojo.style(_67a.domNode, _67b == "top" || _67b == "bottom" ? "width" : "height", "auto");
	}, getChildren: function () {
		return dojo.filter(this.inherited(arguments), function (_67d) {
			return !_67d.isSplitter;
		});
	}, getSplitter: function (_67e) {
		return dojo.filter(this.getChildren(), function (_67f) {
			return _67f.region == _67e;
		})[0]._splitterWidget;
	}, resize: function (_680, _681) {
		if (!this.cs || !this.pe) {
			var node = this.domNode;
			this.cs = dojo.getComputedStyle(node);
			this.pe = dojo._getPadExtents(node, this.cs);
			this.pe.r = dojo._toPixelValue(node, this.cs.paddingRight);
			this.pe.b = dojo._toPixelValue(node, this.cs.paddingBottom);
			dojo.style(node, "padding", "0px");
		}
		this.inherited(arguments);
	}, _layoutChildren: function (_682, _683) {
		if (!this._borderBox || !this._borderBox.h) {
			return;
		}
		var _684 = dojo.map(this.getChildren(), function (_685, idx) {
			return {pane: _685, weight: [_685.region == "center" ? Infinity : 0, _685.layoutPriority, (this.design == "sidebar" ? 1 : -1) * (/top|bottom/.test(_685.region) ? 1 : -1), idx]};
		}, this);
		_684.sort(function (a, b) {
			var aw = a.weight, bw = b.weight;
			for (var i = 0; i < aw.length; i++) {
				if (aw[i] != bw[i]) {
					return aw[i] - bw[i];
				}
			}
			return 0;
		});
		var _686 = [];
		dojo.forEach(_684, function (_687) {
			var pane = _687.pane;
			_686.push(pane);
			if (pane._splitterWidget) {
				_686.push(pane._splitterWidget);
			}
		});
		var dim = {l: this.pe.l, t: this.pe.t, w: this._borderBox.w - this.pe.w, h: this._borderBox.h - this.pe.h};
		dijit.layout.layoutChildren(this.domNode, dim, _686, _682, _683);
	}, destroyRecursive: function () {
		dojo.forEach(this.getChildren(), function (_688) {
			var _689 = _688._splitterWidget;
			if (_689) {
				_689.destroy();
			}
			delete _688._splitterWidget;
		});
		this.inherited(arguments);
	}});
	dojo.extend(dijit._Widget, {region: "", layoutPriority: 0, splitter: false, minSize: 0, maxSize: Infinity});
	dojo.declare("dijit.layout._Splitter", [dijit._Widget, dijit._Templated], {live: true, templateString: "<div class=\"dijitSplitter\" dojoAttachEvent=\"onkeypress:_onKeyPress,onmousedown:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse\" tabIndex=\"0\" role=\"separator\"><div class=\"dijitSplitterThumb\"></div></div>", postMixInProperties: function () {
		this.inherited(arguments);
		this.horizontal = /top|bottom/.test(this.region);
		this._factor = /top|left/.test(this.region) ? 1 : -1;
		this._cookieName = this.container.id + "_" + this.region;
	}, buildRendering: function () {
		this.inherited(arguments);
		dojo.addClass(this.domNode, "dijitSplitter" + (this.horizontal ? "H" : "V"));
		if (this.container.persist) {
			var _68a = dojo.cookie(this._cookieName);
			if (_68a) {
				this.child.domNode.style[this.horizontal ? "height" : "width"] = _68a;
			}
		}
	}, _computeMaxSize: function () {
		var dim = this.horizontal ? "h" : "w", _68b = dojo.marginBox(this.child.domNode)[dim], _68c = dojo.filter(this.container.getChildren(), function (_68d) {
			return _68d.region == "center";
		})[0], _68e = dojo.marginBox(_68c.domNode)[dim];
		return Math.min(this.child.maxSize, _68b + _68e);
	}, _startDrag: function (e) {
		if (!this.cover) {
			this.cover = dojo.doc.createElement("div");
			dojo.addClass(this.cover, "dijitSplitterCover");
			dojo.place(this.cover, this.child.domNode, "after");
		}
		dojo.addClass(this.cover, "dijitSplitterCoverActive");
		if (this.fake) {
			dojo.destroy(this.fake);
		}
		if (!(this._resize = this.live)) {
			(this.fake = this.domNode.cloneNode(true)).removeAttribute("id");
			dojo.addClass(this.domNode, "dijitSplitterShadow");
			dojo.place(this.fake, this.domNode, "after");
		}
		dojo.addClass(this.domNode, "dijitSplitterActive dijitSplitter" + (this.horizontal ? "H" : "V") + "Active");
		if (this.fake) {
			dojo.removeClass(this.fake, "dijitSplitterHover dijitSplitter" + (this.horizontal ? "H" : "V") + "Hover");
		}
		var _68f = this._factor, _690 = this.horizontal, axis = _690 ? "pageY" : "pageX", _691 = e[axis], _692 = this.domNode.style, dim = _690 ? "h" : "w", _693 = dojo.marginBox(this.child.domNode)[dim], max = this._computeMaxSize(), min = this.child.minSize || 20, _694 = this.region, _695 = _694 == "top" || _694 == "bottom" ? "top" : "left", _696 = parseInt(_692[_695], 10), _697 = this._resize, _698 = dojo.hitch(this.container, "_layoutChildren", this.child.id), de = dojo.doc;
		this._handlers = (this._handlers || []).concat([dojo.connect(de, "onmousemove", this._drag = function (e, _699) {
			var _69a = e[axis] - _691, _69b = _68f * _69a + _693, _69c = Math.max(Math.min(_69b, max), min);
			if (_697 || _699) {
				_698(_69c);
			}
			_692[_695] = _69a + _696 + _68f * (_69c - _69b) + "px";
		}), dojo.connect(de, "ondragstart", dojo.stopEvent), dojo.connect(dojo.body(), "onselectstart", dojo.stopEvent), dojo.connect(de, "onmouseup", this, "_stopDrag")]);
		dojo.stopEvent(e);
	}, _onMouse: function (e) {
		var o = (e.type == "mouseover" || e.type == "mouseenter");
		dojo.toggleClass(this.domNode, "dijitSplitterHover", o);
		dojo.toggleClass(this.domNode, "dijitSplitter" + (this.horizontal ? "H" : "V") + "Hover", o);
	}, _stopDrag: function (e) {
		try {
			if (this.cover) {
				dojo.removeClass(this.cover, "dijitSplitterCoverActive");
			}
			if (this.fake) {
				dojo.destroy(this.fake);
			}
			dojo.removeClass(this.domNode, "dijitSplitterActive dijitSplitter" + (this.horizontal ? "H" : "V") + "Active dijitSplitterShadow");
			this._drag(e);
			this._drag(e, true);
		} finally {
			this._cleanupHandlers();
			delete this._drag;
		}
		if (this.container.persist) {
			dojo.cookie(this._cookieName, this.child.domNode.style[this.horizontal ? "height" : "width"], {expires: 365});
		}
	}, _cleanupHandlers: function () {
		dojo.forEach(this._handlers, dojo.disconnect);
		delete this._handlers;
	}, _onKeyPress: function (e) {
		this._resize = true;
		var _69d = this.horizontal;
		var tick = 1;
		var dk = dojo.keys;
		switch (e.charOrCode) {
			case _69d ? dk.UP_ARROW : dk.LEFT_ARROW:
				tick *= -1;
			case _69d ? dk.DOWN_ARROW : dk.RIGHT_ARROW:
				break;
			default:
				return;
		}
		var _69e = dojo._getMarginSize(this.child.domNode)[_69d ? "h" : "w"] + this._factor * tick;
		this.container._layoutChildren(this.child.id, Math.max(Math.min(_69e, this._computeMaxSize()), this.child.minSize));
		dojo.stopEvent(e);
	}, destroy: function () {
		this._cleanupHandlers();
		delete this.child;
		delete this.container;
		delete this.cover;
		delete this.fake;
		this.inherited(arguments);
	}});
	dojo.declare("dijit.layout._Gutter", [dijit._Widget, dijit._Templated], {templateString: "<div class=\"dijitGutter\" role=\"presentation\"></div>", postMixInProperties: function () {
		this.inherited(arguments);
		this.horizontal = /top|bottom/.test(this.region);
	}, buildRendering: function () {
		this.inherited(arguments);
		dojo.addClass(this.domNode, "dijitGutter" + (this.horizontal ? "H" : "V"));
	}});
}
if (!dojo._hasResource["dijit.layout.LayoutContainer"]) {
	dojo._hasResource["dijit.layout.LayoutContainer"] = true;
	dojo.provide("dijit.layout.LayoutContainer");
	dojo.declare("dijit.layout.LayoutContainer", dijit.layout._LayoutWidget, {baseClass: "dijitLayoutContainer", constructor: function () {
		dojo.deprecated("dijit.layout.LayoutContainer is deprecated", "use BorderContainer instead", 2);
	}, layout: function () {
		dijit.layout.layoutChildren(this.domNode, this._contentBox, this.getChildren());
	}, addChild: function (_69f, _6a0) {
		this.inherited(arguments);
		if (this._started) {
			dijit.layout.layoutChildren(this.domNode, this._contentBox, this.getChildren());
		}
	}, removeChild: function (_6a1) {
		this.inherited(arguments);
		if (this._started) {
			dijit.layout.layoutChildren(this.domNode, this._contentBox, this.getChildren());
		}
	}});
	dojo.extend(dijit._Widget, {layoutAlign: "none"});
}
if (!dojo._hasResource["dijit.layout.LinkPane"]) {
	dojo._hasResource["dijit.layout.LinkPane"] = true;
	dojo.provide("dijit.layout.LinkPane");
	dojo.declare("dijit.layout.LinkPane", [dijit.layout.ContentPane, dijit._Templated], {templateString: "<div class=\"dijitLinkPane\" dojoAttachPoint=\"containerNode\"></div>", postMixInProperties: function () {
		if (this.srcNodeRef) {
			this.title += this.srcNodeRef.innerHTML;
		}
		this.inherited(arguments);
	}, _fillContent: function (_6a2) {
	}});
}
if (!dojo._hasResource["dijit.layout.SplitContainer"]) {
	dojo._hasResource["dijit.layout.SplitContainer"] = true;
	dojo.provide("dijit.layout.SplitContainer");
	dojo.declare("dijit.layout.SplitContainer", dijit.layout._LayoutWidget, {constructor: function () {
		dojo.deprecated("dijit.layout.SplitContainer is deprecated", "use BorderContainer with splitter instead", 2);
	}, activeSizing: false, sizerWidth: 7, orientation: "horizontal", persist: true, baseClass: "dijitSplitContainer", postMixInProperties: function () {
		this.inherited("postMixInProperties", arguments);
		this.isHorizontal = (this.orientation == "horizontal");
	}, postCreate: function () {
		this.inherited(arguments);
		this.sizers = [];
		if (dojo.isMozilla) {
			this.domNode.style.overflow = "-moz-scrollbars-none";
		}
		if (typeof this.sizerWidth == "object") {
			try {
				this.sizerWidth = parseInt(this.sizerWidth.toString());
			} catch (e) {
				this.sizerWidth = 7;
			}
		}
		var _6a3 = dojo.doc.createElement("div");
		this.virtualSizer = _6a3;
		_6a3.style.position = "relative";
		_6a3.style.zIndex = 10;
		_6a3.className = this.isHorizontal ? "dijitSplitContainerVirtualSizerH" : "dijitSplitContainerVirtualSizerV";
		this.domNode.appendChild(_6a3);
		dojo.setSelectable(_6a3, false);
	}, destroy: function () {
		delete this.virtualSizer;
		dojo.forEach(this._ownconnects, dojo.disconnect);
		this.inherited(arguments);
	}, startup: function () {
		if (this._started) {
			return;
		}
		dojo.forEach(this.getChildren(), function (_6a4, i, _6a5) {
			this._setupChild(_6a4);
			if (i < _6a5.length - 1) {
				this._addSizer();
			}
		}, this);
		if (this.persist) {
			this._restoreState();
		}
		this.inherited(arguments);
	}, _setupChild: function (_6a6) {
		this.inherited(arguments);
		_6a6.domNode.style.position = "absolute";
		dojo.addClass(_6a6.domNode, "dijitSplitPane");
	}, _onSizerMouseDown: function (e) {
		if (e.target.id) {
			for (var i = 0; i < this.sizers.length; i++) {
				if (this.sizers[i].id == e.target.id) {
					break;
				}
			}
			if (i < this.sizers.length) {
				this.beginSizing(e, i);
			}
		}
	}, _addSizer: function (_6a7) {
		_6a7 = _6a7 === undefined ? this.sizers.length : _6a7;
		var _6a8 = dojo.doc.createElement("div");
		_6a8.id = dijit.getUniqueId("dijit_layout_SplitterContainer_Splitter");
		this.sizers.splice(_6a7, 0, _6a8);
		this.domNode.appendChild(_6a8);
		_6a8.className = this.isHorizontal ? "dijitSplitContainerSizerH" : "dijitSplitContainerSizerV";
		var _6a9 = dojo.doc.createElement("div");
		_6a9.className = "thumb";
		_6a8.appendChild(_6a9);
		this.connect(_6a8, "onmousedown", "_onSizerMouseDown");
		dojo.setSelectable(_6a8, false);
	}, removeChild: function (_6aa) {
		if (this.sizers.length) {
			var i = dojo.indexOf(this.getChildren(), _6aa);
			if (i != -1) {
				if (i == this.sizers.length) {
					i--;
				}
				dojo.destroy(this.sizers[i]);
				this.sizers.splice(i, 1);
			}
		}
		this.inherited(arguments);
		if (this._started) {
			this.layout();
		}
	}, addChild: function (_6ab, _6ac) {
		this.inherited(arguments);
		if (this._started) {
			var _6ad = this.getChildren();
			if (_6ad.length > 1) {
				this._addSizer(_6ac);
			}
			this.layout();
		}
	}, layout: function () {
		this.paneWidth = this._contentBox.w;
		this.paneHeight = this._contentBox.h;
		var _6ae = this.getChildren();
		if (!_6ae.length) {
			return;
		}
		var _6af = this.isHorizontal ? this.paneWidth : this.paneHeight;
		if (_6ae.length > 1) {
			_6af -= this.sizerWidth * (_6ae.length - 1);
		}
		var _6b0 = 0;
		dojo.forEach(_6ae, function (_6b1) {
			_6b0 += _6b1.sizeShare;
		});
		var _6b2 = _6af / _6b0;
		var _6b3 = 0;
		dojo.forEach(_6ae.slice(0, _6ae.length - 1), function (_6b4) {
			var size = Math.round(_6b2 * _6b4.sizeShare);
			_6b4.sizeActual = size;
			_6b3 += size;
		});
		_6ae[_6ae.length - 1].sizeActual = _6af - _6b3;
		this._checkSizes();
		var pos = 0;
		var size = _6ae[0].sizeActual;
		this._movePanel(_6ae[0], pos, size);
		_6ae[0].position = pos;
		pos += size;
		if (!this.sizers) {
			return;
		}
		dojo.some(_6ae.slice(1), function (_6b5, i) {
			if (!this.sizers[i]) {
				return true;
			}
			this._moveSlider(this.sizers[i], pos, this.sizerWidth);
			this.sizers[i].position = pos;
			pos += this.sizerWidth;
			size = _6b5.sizeActual;
			this._movePanel(_6b5, pos, size);
			_6b5.position = pos;
			pos += size;
		}, this);
	}, _movePanel: function (_6b6, pos, size) {
		if (this.isHorizontal) {
			_6b6.domNode.style.left = pos + "px";
			_6b6.domNode.style.top = 0;
			var box = {w: size, h: this.paneHeight};
			if (_6b6.resize) {
				_6b6.resize(box);
			} else {
				dojo.marginBox(_6b6.domNode, box);
			}
		} else {
			_6b6.domNode.style.left = 0;
			_6b6.domNode.style.top = pos + "px";
			var box = {w: this.paneWidth, h: size};
			if (_6b6.resize) {
				_6b6.resize(box);
			} else {
				dojo.marginBox(_6b6.domNode, box);
			}
		}
	}, _moveSlider: function (_6b7, pos, size) {
		if (this.isHorizontal) {
			_6b7.style.left = pos + "px";
			_6b7.style.top = 0;
			dojo.marginBox(_6b7, {w: size, h: this.paneHeight});
		} else {
			_6b7.style.left = 0;
			_6b7.style.top = pos + "px";
			dojo.marginBox(_6b7, {w: this.paneWidth, h: size});
		}
	}, _growPane: function (_6b8, pane) {
		if (_6b8 > 0) {
			if (pane.sizeActual > pane.sizeMin) {
				if ((pane.sizeActual - pane.sizeMin) > _6b8) {
					pane.sizeActual = pane.sizeActual - _6b8;
					_6b8 = 0;
				} else {
					_6b8 -= pane.sizeActual - pane.sizeMin;
					pane.sizeActual = pane.sizeMin;
				}
			}
		}
		return _6b8;
	}, _checkSizes: function () {
		var _6b9 = 0;
		var _6ba = 0;
		var _6bb = this.getChildren();
		dojo.forEach(_6bb, function (_6bc) {
			_6ba += _6bc.sizeActual;
			_6b9 += _6bc.sizeMin;
		});
		if (_6b9 <= _6ba) {
			var _6bd = 0;
			dojo.forEach(_6bb, function (_6be) {
				if (_6be.sizeActual < _6be.sizeMin) {
					_6bd += _6be.sizeMin - _6be.sizeActual;
					_6be.sizeActual = _6be.sizeMin;
				}
			});
			if (_6bd > 0) {
				var list = this.isDraggingLeft ? _6bb.reverse() : _6bb;
				dojo.forEach(list, function (_6bf) {
					_6bd = this._growPane(_6bd, _6bf);
				}, this);
			}
		} else {
			dojo.forEach(_6bb, function (_6c0) {
				_6c0.sizeActual = Math.round(_6ba * (_6c0.sizeMin / _6b9));
			});
		}
	}, beginSizing: function (e, i) {
		var _6c1 = this.getChildren();
		this.paneBefore = _6c1[i];
		this.paneAfter = _6c1[i + 1];
		this.isSizing = true;
		this.sizingSplitter = this.sizers[i];
		if (!this.cover) {
			this.cover = dojo.create("div", {style: {position: "absolute", zIndex: 5, top: 0, left: 0, width: "100%", height: "100%"}}, this.domNode);
		} else {
			this.cover.style.zIndex = 5;
		}
		this.sizingSplitter.style.zIndex = 6;
		this.originPos = dojo.position(_6c1[0].domNode, true);
		if (this.isHorizontal) {
			var _6c2 = e.layerX || e.offsetX || 0;
			var _6c3 = e.pageX;
			this.originPos = this.originPos.x;
		} else {
			var _6c2 = e.layerY || e.offsetY || 0;
			var _6c3 = e.pageY;
			this.originPos = this.originPos.y;
		}
		this.startPoint = this.lastPoint = _6c3;
		this.screenToClientOffset = _6c3 - _6c2;
		this.dragOffset = this.lastPoint - this.paneBefore.sizeActual - this.originPos - this.paneBefore.position;
		if (!this.activeSizing) {
			this._showSizingLine();
		}
		this._ownconnects = [];
		this._ownconnects.push(dojo.connect(dojo.doc.documentElement, "onmousemove", this, "changeSizing"));
		this._ownconnects.push(dojo.connect(dojo.doc.documentElement, "onmouseup", this, "endSizing"));
		dojo.stopEvent(e);
	}, changeSizing: function (e) {
		if (!this.isSizing) {
			return;
		}
		this.lastPoint = this.isHorizontal ? e.pageX : e.pageY;
		this.movePoint();
		if (this.activeSizing) {
			this._updateSize();
		} else {
			this._moveSizingLine();
		}
		dojo.stopEvent(e);
	}, endSizing: function (e) {
		if (!this.isSizing) {
			return;
		}
		if (this.cover) {
			this.cover.style.zIndex = -1;
		}
		if (!this.activeSizing) {
			this._hideSizingLine();
		}
		this._updateSize();
		this.isSizing = false;
		if (this.persist) {
			this._saveState(this);
		}
		dojo.forEach(this._ownconnects, dojo.disconnect);
	}, movePoint: function () {
		var p = this.lastPoint - this.screenToClientOffset;
		var a = p - this.dragOffset;
		a = this.legaliseSplitPoint(a);
		p = a + this.dragOffset;
		this.lastPoint = p + this.screenToClientOffset;
	}, legaliseSplitPoint: function (a) {
		a += this.sizingSplitter.position;
		this.isDraggingLeft = !!(a > 0);
		if (!this.activeSizing) {
			var min = this.paneBefore.position + this.paneBefore.sizeMin;
			if (a < min) {
				a = min;
			}
			var max = this.paneAfter.position + (this.paneAfter.sizeActual - (this.sizerWidth + this.paneAfter.sizeMin));
			if (a > max) {
				a = max;
			}
		}
		a -= this.sizingSplitter.position;
		this._checkSizes();
		return a;
	}, _updateSize: function () {
		var pos = this.lastPoint - this.dragOffset - this.originPos;
		var _6c4 = this.paneBefore.position;
		var _6c5 = this.paneAfter.position + this.paneAfter.sizeActual;
		this.paneBefore.sizeActual = pos - _6c4;
		this.paneAfter.position = pos + this.sizerWidth;
		this.paneAfter.sizeActual = _6c5 - this.paneAfter.position;
		dojo.forEach(this.getChildren(), function (_6c6) {
			_6c6.sizeShare = _6c6.sizeActual;
		});
		if (this._started) {
			this.layout();
		}
	}, _showSizingLine: function () {
		this._moveSizingLine();
		dojo.marginBox(this.virtualSizer, this.isHorizontal ? {w: this.sizerWidth, h: this.paneHeight} : {w: this.paneWidth, h: this.sizerWidth});
		this.virtualSizer.style.display = "block";
	}, _hideSizingLine: function () {
		this.virtualSizer.style.display = "none";
	}, _moveSizingLine: function () {
		var pos = (this.lastPoint - this.startPoint) + this.sizingSplitter.position;
		dojo.style(this.virtualSizer, (this.isHorizontal ? "left" : "top"), pos + "px");
	}, _getCookieName: function (i) {
		return this.id + "_" + i;
	}, _restoreState: function () {
		dojo.forEach(this.getChildren(), function (_6c7, i) {
			var _6c8 = this._getCookieName(i);
			var _6c9 = dojo.cookie(_6c8);
			if (_6c9) {
				var pos = parseInt(_6c9);
				if (typeof pos == "number") {
					_6c7.sizeShare = pos;
				}
			}
		}, this);
	}, _saveState: function () {
		if (!this.persist) {
			return;
		}
		dojo.forEach(this.getChildren(), function (_6ca, i) {
			dojo.cookie(this._getCookieName(i), _6ca.sizeShare, {expires: 365});
		}, this);
	}});
	dojo.extend(dijit._Widget, {sizeMin: 10, sizeShare: 10});
}
if (!dojo._hasResource["dijit.layout._TabContainerBase"]) {
	dojo._hasResource["dijit.layout._TabContainerBase"] = true;
	dojo.provide("dijit.layout._TabContainerBase");
	dojo.declare("dijit.layout._TabContainerBase", [dijit.layout.StackContainer, dijit._Templated], {tabPosition: "top", baseClass: "dijitTabContainer", tabStrip: false, nested: false, templateString: dojo.cache("dijit.layout", "templates/TabContainer.html", "<div class=\"dijitTabContainer\">\n\t<div class=\"dijitTabListWrapper\" dojoAttachPoint=\"tablistNode\"></div>\n\t<div dojoAttachPoint=\"tablistSpacer\" class=\"dijitTabSpacer ${baseClass}-spacer\"></div>\n\t<div class=\"dijitTabPaneWrapper ${baseClass}-container\" dojoAttachPoint=\"containerNode\"></div>\n</div>\n"), postMixInProperties: function () {
		this.baseClass += this.tabPosition.charAt(0).toUpperCase() + this.tabPosition.substr(1).replace(/-.*/, "");
		this.srcNodeRef && dojo.style(this.srcNodeRef, "visibility", "hidden");
		this.inherited(arguments);
	}, buildRendering: function () {
		this.inherited(arguments);
		this.tablist = this._makeController(this.tablistNode);
		if (!this.doLayout) {
			dojo.addClass(this.domNode, "dijitTabContainerNoLayout");
		}
		if (this.nested) {
			dojo.addClass(this.domNode, "dijitTabContainerNested");
			dojo.addClass(this.tablist.containerNode, "dijitTabContainerTabListNested");
			dojo.addClass(this.tablistSpacer, "dijitTabContainerSpacerNested");
			dojo.addClass(this.containerNode, "dijitTabPaneWrapperNested");
		} else {
			dojo.addClass(this.domNode, "tabStrip-" + (this.tabStrip ? "enabled" : "disabled"));
		}
	}, _setupChild: function (tab) {
		dojo.addClass(tab.domNode, "dijitTabPane");
		this.inherited(arguments);
	}, startup: function () {
		if (this._started) {
			return;
		}
		this.tablist.startup();
		this.inherited(arguments);
	}, layout: function () {
		if (!this._contentBox || typeof (this._contentBox.l) == "undefined") {
			return;
		}
		var sc = this.selectedChildWidget;
		if (this.doLayout) {
			var _6cb = this.tabPosition.replace(/-h/, "");
			this.tablist.layoutAlign = _6cb;
			var _6cc = [this.tablist, {domNode: this.tablistSpacer, layoutAlign: _6cb}, {domNode: this.containerNode, layoutAlign: "client"}];
			dijit.layout.layoutChildren(this.domNode, this._contentBox, _6cc);
			this._containerContentBox = dijit.layout.marginBox2contentBox(this.containerNode, _6cc[2]);
			if (sc && sc.resize) {
				sc.resize(this._containerContentBox);
			}
		} else {
			if (this.tablist.resize) {
				var s = this.tablist.domNode.style;
				s.width = "0";
				var _6cd = dojo.contentBox(this.domNode).w;
				s.width = "";
				this.tablist.resize({w: _6cd});
			}
			if (sc && sc.resize) {
				sc.resize();
			}
		}
	}, destroy: function () {
		if (this.tablist) {
			this.tablist.destroy();
		}
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit.layout.TabController"]) {
	dojo._hasResource["dijit.layout.TabController"] = true;
	dojo.provide("dijit.layout.TabController");
	dojo.declare("dijit.layout.TabController", dijit.layout.StackController, {templateString: "<div role='tablist' dojoAttachEvent='onkeypress:onkeypress'></div>", tabPosition: "top", buttonWidget: "dijit.layout._TabButton", _rectifyRtlTabList: function () {
		if (0 >= this.tabPosition.indexOf("-h")) {
			return;
		}
		if (!this.pane2button) {
			return;
		}
		var _6ce = 0;
		for (var pane in this.pane2button) {
			var ow = this.pane2button[pane].innerDiv.scrollWidth;
			_6ce = Math.max(_6ce, ow);
		}
		for (pane in this.pane2button) {
			this.pane2button[pane].innerDiv.style.width = _6ce + "px";
		}
	}});
	dojo.declare("dijit.layout._TabButton", dijit.layout._StackButton, {baseClass: "dijitTab", cssStateNodes: {closeNode: "dijitTabCloseButton"}, templateString: dojo.cache("dijit.layout", "templates/_TabButton.html", "<div role=\"presentation\" dojoAttachPoint=\"titleNode\" dojoAttachEvent='onclick:onClick'>\n    <div role=\"presentation\" class='dijitTabInnerDiv' dojoAttachPoint='innerDiv'>\n        <div role=\"presentation\" class='dijitTabContent' dojoAttachPoint='tabContent'>\n        \t<div role=\"presentation\" dojoAttachPoint='focusNode'>\n\t\t        <img src=\"${_blankGif}\" alt=\"\" class=\"dijitIcon dijitTabButtonIcon\" dojoAttachPoint='iconNode' />\n\t\t        <span dojoAttachPoint='containerNode' class='tabLabel'></span>\n\t\t        <span class=\"dijitInline dijitTabCloseButton dijitTabCloseIcon\" dojoAttachPoint='closeNode'\n\t\t        \t\tdojoAttachEvent='onclick: onClickCloseButton' role=\"presentation\">\n\t\t            <span dojoAttachPoint='closeText' class='dijitTabCloseText'>[x]</span\n\t\t        ></span>\n\t\t\t</div>\n        </div>\n    </div>\n</div>\n"), scrollOnFocus: false, buildRendering: function () {
		this.inherited(arguments);
		dojo.setSelectable(this.containerNode, false);
	}, startup: function () {
		this.inherited(arguments);
		var n = this.domNode;
		setTimeout(function () {
			n.className = n.className;
		}, 1);
	}, _setCloseButtonAttr: function (disp) {
		this._set("closeButton", disp);
		dojo.toggleClass(this.innerDiv, "dijitClosable", disp);
		this.closeNode.style.display = disp ? "" : "none";
		if (disp) {
			var _6cf = dojo.i18n.getLocalization("dijit", "common");
			if (this.closeNode) {
				dojo.attr(this.closeNode, "title", _6cf.itemClose);
			}
			var _6cf = dojo.i18n.getLocalization("dijit", "common");
			this._closeMenu = new dijit.Menu({id: this.id + "_Menu", dir: this.dir, lang: this.lang, targetNodeIds: [this.domNode]});
			this._closeMenu.addChild(new dijit.MenuItem({label: _6cf.itemClose, dir: this.dir, lang: this.lang, onClick: dojo.hitch(this, "onClickCloseButton")}));
		} else {
			if (this._closeMenu) {
				this._closeMenu.destroyRecursive();
				delete this._closeMenu;
			}
		}
	}, _setLabelAttr: function (_6d0) {
		this.inherited(arguments);
		if (this.showLabel == false && !this.params.title) {
			this.iconNode.alt = dojo.trim(this.containerNode.innerText || this.containerNode.textContent || "");
		}
	}, destroy: function () {
		if (this._closeMenu) {
			this._closeMenu.destroyRecursive();
			delete this._closeMenu;
		}
		this.inherited(arguments);
	}});
}
if (!dojo._hasResource["dijit.layout.ScrollingTabController"]) {
	dojo._hasResource["dijit.layout.ScrollingTabController"] = true;
	dojo.provide("dijit.layout.ScrollingTabController");
	dojo.declare("dijit.layout.ScrollingTabController", dijit.layout.TabController, {templateString: dojo.cache("dijit.layout", "templates/ScrollingTabController.html", "<div class=\"dijitTabListContainer-${tabPosition}\" style=\"visibility:hidden\">\n\t<div dojoType=\"dijit.layout._ScrollingTabControllerMenuButton\"\n\t\t\tclass=\"tabStripButton-${tabPosition}\"\n\t\t\tid=\"${id}_menuBtn\" containerId=\"${containerId}\" iconClass=\"dijitTabStripMenuIcon\"\n\t\t\tdropDownPosition=\"below-alt, above-alt\"\n\t\t\tdojoAttachPoint=\"_menuBtn\" showLabel=\"false\">&#9660;</div>\n\t<div dojoType=\"dijit.layout._ScrollingTabControllerButton\"\n\t\t\tclass=\"tabStripButton-${tabPosition}\"\n\t\t\tid=\"${id}_leftBtn\" iconClass=\"dijitTabStripSlideLeftIcon\"\n\t\t\tdojoAttachPoint=\"_leftBtn\" dojoAttachEvent=\"onClick: doSlideLeft\" showLabel=\"false\">&#9664;</div>\n\t<div dojoType=\"dijit.layout._ScrollingTabControllerButton\"\n\t\t\tclass=\"tabStripButton-${tabPosition}\"\n\t\t\tid=\"${id}_rightBtn\" iconClass=\"dijitTabStripSlideRightIcon\"\n\t\t\tdojoAttachPoint=\"_rightBtn\" dojoAttachEvent=\"onClick: doSlideRight\" showLabel=\"false\">&#9654;</div>\n\t<div class='dijitTabListWrapper' dojoAttachPoint='tablistWrapper'>\n\t\t<div role='tablist' dojoAttachEvent='onkeypress:onkeypress'\n\t\t\t\tdojoAttachPoint='containerNode' class='nowrapTabStrip'></div>\n\t</div>\n</div>\n"), useMenu: true, useSlider: true, tabStripClass: "", widgetsInTemplate: true, _minScroll: 5, attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {"class": "containerNode"}), buildRendering: function () {
		this.inherited(arguments);
		var n = this.domNode;
		this.scrollNode = this.tablistWrapper;
		this._initButtons();
		if (!this.tabStripClass) {
			this.tabStripClass = "dijitTabContainer" + this.tabPosition.charAt(0).toUpperCase() + this.tabPosition.substr(1).replace(/-.*/, "") + "None";
			dojo.addClass(n, "tabStrip-disabled");
		}
		dojo.addClass(this.tablistWrapper, this.tabStripClass);
	}, onStartup: function () {
		this.inherited(arguments);
		dojo.style(this.domNode, "visibility", "visible");
		this._postStartup = true;
	}, onAddChild: function (page, _6d1) {
		this.inherited(arguments);
		dojo.forEach(["label", "iconClass"], function (attr) {
			this.pane2watches[page.id].push(this.pane2button[page.id].watch(attr, dojo.hitch(this, function (name, _6d2, _6d3) {
				if (this._postStartup && this._dim) {
					this.resize(this._dim);
				}
			})));
		}, this);
		dojo.style(this.containerNode, "width", (dojo.style(this.containerNode, "width") + 200) + "px");
	}, onRemoveChild: function (page, _6d4) {
		var _6d5 = this.pane2button[page.id];
		if (this._selectedTab === _6d5.domNode) {
			this._selectedTab = null;
		}
		this.inherited(arguments);
	}, _initButtons: function () {
		this._btnWidth = 0;
		this._buttons = dojo.query("> .tabStripButton", this.domNode).filter(function (btn) {
			if ((this.useMenu && btn == this._menuBtn.domNode) || (this.useSlider && (btn == this._rightBtn.domNode || btn == this._leftBtn.domNode))) {
				this._btnWidth += dojo._getMarginSize(btn).w;
				return true;
			} else {
				dojo.style(btn, "display", "none");
				return false;
			}
		}, this);
	}, _getTabsWidth: function () {
		var _6d6 = this.getChildren();
		if (_6d6.length) {
			var _6d7 = _6d6[this.isLeftToRight() ? 0 : _6d6.length - 1].domNode, _6d8 = _6d6[this.isLeftToRight() ? _6d6.length - 1 : 0].domNode;
			return _6d8.offsetLeft + dojo.style(_6d8, "width") - _6d7.offsetLeft;
		} else {
			return 0;
		}
	}, _enableBtn: function (_6d9) {
		var _6da = this._getTabsWidth();
		_6d9 = _6d9 || dojo.style(this.scrollNode, "width");
		return _6da > 0 && _6d9 < _6da;
	}, resize: function (dim) {
		if (this.domNode.offsetWidth == 0) {
			return;
		}
		this._dim = dim;
		this.scrollNode.style.height = "auto";
		this._contentBox = dijit.layout.marginBox2contentBox(this.domNode, {h: 0, w: dim.w});
		this._contentBox.h = this.scrollNode.offsetHeight;
		dojo.contentBox(this.domNode, this._contentBox);
		var _6db = this._enableBtn(this._contentBox.w);
		this._buttons.style("display", _6db ? "" : "none");
		this._leftBtn.layoutAlign = "left";
		this._rightBtn.layoutAlign = "right";
		this._menuBtn.layoutAlign = this.isLeftToRight() ? "right" : "left";
		dijit.layout.layoutChildren(this.domNode, this._contentBox, [this._menuBtn, this._leftBtn, this._rightBtn, {domNode: this.scrollNode, layoutAlign: "client"}]);
		if (this._selectedTab) {
			if (this._anim && this._anim.status() == "playing") {
				this._anim.stop();
			}
			var w = this.scrollNode, sl = this._convertToScrollLeft(this._getScrollForSelectedTab());
			w.scrollLeft = sl;
		}
		this._setButtonClass(this._getScroll());
		this._postResize = true;
		return {h: this._contentBox.h, w: dim.w};
	}, _getScroll: function () {
		var sl = (this.isLeftToRight() || dojo.isIE < 8 || (dojo.isIE && dojo.isQuirks) || dojo.isWebKit) ? this.scrollNode.scrollLeft : dojo.style(this.containerNode, "width") - dojo.style(this.scrollNode, "width") + (dojo.isIE == 8 ? -1 : 1) * this.scrollNode.scrollLeft;
		return sl;
	}, _convertToScrollLeft: function (val) {
		if (this.isLeftToRight() || dojo.isIE < 8 || (dojo.isIE && dojo.isQuirks) || dojo.isWebKit) {
			return val;
		} else {
			var _6dc = dojo.style(this.containerNode, "width") - dojo.style(this.scrollNode, "width");
			return (dojo.isIE == 8 ? -1 : 1) * (val - _6dc);
		}
	}, onSelectChild: function (page) {
		var tab = this.pane2button[page.id];
		if (!tab || !page) {
			return;
		}
		var node = tab.domNode;
		if (this._postResize && node != this._selectedTab) {
			this._selectedTab = node;
			var sl = this._getScroll();
			if (sl > node.offsetLeft || sl + dojo.style(this.scrollNode, "width") < node.offsetLeft + dojo.style(node, "width")) {
				this.createSmoothScroll().play();
			}
		}
		this.inherited(arguments);
	}, _getScrollBounds: function () {
		var _6dd = this.getChildren(), _6de = dojo.style(this.scrollNode, "width"), _6df = dojo.style(this.containerNode, "width"), _6e0 = _6df - _6de, _6e1 = this._getTabsWidth();
		if (_6dd.length && _6e1 > _6de) {
			return {min: this.isLeftToRight() ? 0 : _6dd[_6dd.length - 1].domNode.offsetLeft, max: this.isLeftToRight() ? (_6dd[_6dd.length - 1].domNode.offsetLeft + dojo.style(_6dd[_6dd.length - 1].domNode, "width")) - _6de : _6e0};
		} else {
			var _6e2 = this.isLeftToRight() ? 0 : _6e0;
			return {min: _6e2, max: _6e2};
		}
	}, _getScrollForSelectedTab: function () {
		var w = this.scrollNode, n = this._selectedTab, _6e3 = dojo.style(this.scrollNode, "width"), _6e4 = this._getScrollBounds();
		var pos = (n.offsetLeft + dojo.style(n, "width") / 2) - _6e3 / 2;
		pos = Math.min(Math.max(pos, _6e4.min), _6e4.max);
		return pos;
	}, createSmoothScroll: function (x) {
		if (arguments.length > 0) {
			var _6e5 = this._getScrollBounds();
			x = Math.min(Math.max(x, _6e5.min), _6e5.max);
		} else {
			x = this._getScrollForSelectedTab();
		}
		if (this._anim && this._anim.status() == "playing") {
			this._anim.stop();
		}
		var self = this, w = this.scrollNode, anim = new dojo._Animation({beforeBegin: function () {
			if (this.curve) {
				delete this.curve;
			}
			var oldS = w.scrollLeft, newS = self._convertToScrollLeft(x);
			anim.curve = new dojo._Line(oldS, newS);
		}, onAnimate: function (val) {
			w.scrollLeft = val;
		}});
		this._anim = anim;
		this._setButtonClass(x);
		return anim;
	}, _getBtnNode: function (e) {
		var n = e.target;
		while (n && !dojo.hasClass(n, "tabStripButton")) {
			n = n.parentNode;
		}
		return n;
	}, doSlideRight: function (e) {
		this.doSlide(1, this._getBtnNode(e));
	}, doSlideLeft: function (e) {
		this.doSlide(-1, this._getBtnNode(e));
	}, doSlide: function (_6e6, node) {
		if (node && dojo.hasClass(node, "dijitTabDisabled")) {
			return;
		}
		var _6e7 = dojo.style(this.scrollNode, "width");
		var d = (_6e7 * 0.75) * _6e6;
		var to = this._getScroll() + d;
		this._setButtonClass(to);
		this.createSmoothScroll(to).play();
	}, _setButtonClass: function (_6e8) {
		var _6e9 = this._getScrollBounds();
		this._leftBtn.set("disabled", _6e8 <= _6e9.min);
		this._rightBtn.set("disabled", _6e8 >= _6e9.max);
	}});
	dojo.declare("dijit.layout._ScrollingTabControllerButtonMixin", null, {baseClass: "dijitTab tabStripButton", templateString: dojo.cache("dijit.layout", "templates/_ScrollingTabControllerButton.html", "<div dojoAttachEvent=\"onclick:_onButtonClick\">\n\t<div role=\"presentation\" class=\"dijitTabInnerDiv\" dojoattachpoint=\"innerDiv,focusNode\">\n\t\t<div role=\"presentation\" class=\"dijitTabContent dijitButtonContents\" dojoattachpoint=\"tabContent\">\n\t\t\t<img role=\"presentation\" alt=\"\" src=\"${_blankGif}\" class=\"dijitTabStripIcon\" dojoAttachPoint=\"iconNode\"/>\n\t\t\t<span dojoAttachPoint=\"containerNode,titleNode\" class=\"dijitButtonText\"></span>\n\t\t</div>\n\t</div>\n</div>\n"), tabIndex: "", isFocusable: function () {
		return false;
	}});
	dojo.declare("dijit.layout._ScrollingTabControllerButton", [dijit.form.Button, dijit.layout._ScrollingTabControllerButtonMixin]);
	dojo.declare("dijit.layout._ScrollingTabControllerMenuButton", [dijit.form.Button, dijit._HasDropDown, dijit.layout._ScrollingTabControllerButtonMixin], {containerId: "", tabIndex: "-1", isLoaded: function () {
		return false;
	}, loadDropDown: function (_6ea) {
		this.dropDown = new dijit.Menu({id: this.containerId + "_menu", dir: this.dir, lang: this.lang});
		var _6eb = dijit.byId(this.containerId);
		dojo.forEach(_6eb.getChildren(), function (page) {
			var _6ec = new dijit.MenuItem({id: page.id + "_stcMi", label: page.title, iconClass: page.iconClass, dir: page.dir, lang: page.lang, onClick: function () {
				_6eb.selectChild(page);
			}});
			this.dropDown.addChild(_6ec);
		}, this);
		_6ea();
	}, closeDropDown: function (_6ed) {
		this.inherited(arguments);
		if (this.dropDown) {
			this.dropDown.destroyRecursive();
			delete this.dropDown;
		}
	}});
}
if (!dojo._hasResource["dijit.layout.TabContainer"]) {
	dojo._hasResource["dijit.layout.TabContainer"] = true;
	dojo.provide("dijit.layout.TabContainer");
	dojo.declare("dijit.layout.TabContainer", dijit.layout._TabContainerBase, {useMenu: true, useSlider: true, controllerWidget: "", _makeController: function (_6ee) {
		var cls = this.baseClass + "-tabs" + (this.doLayout ? "" : " dijitTabNoLayout"), _6ef = dojo.getObject(this.controllerWidget);
		return new _6ef({id: this.id + "_tablist", dir: this.dir, lang: this.lang, tabPosition: this.tabPosition, doLayout: this.doLayout, containerId: this.id, "class": cls, nested: this.nested, useMenu: this.useMenu, useSlider: this.useSlider, tabStripClass: this.tabStrip ? this.baseClass + (this.tabStrip ? "" : "No") + "Strip" : null}, _6ee);
	}, postMixInProperties: function () {
		this.inherited(arguments);
		if (!this.controllerWidget) {
			this.controllerWidget = (this.tabPosition == "top" || this.tabPosition == "bottom") && !this.nested ? "dijit.layout.ScrollingTabController" : "dijit.layout.TabController";
		}
	}});
}
if (!dojo._hasResource["dijit.dijit-all"]) {
	dojo._hasResource["dijit.dijit-all"] = true;
	dojo.provide("dijit.dijit-all");
	console.warn("dijit-all may include much more code than your application actually requires. We strongly recommend that you investigate a custom build or the web build tool");
}
dojo.i18n._preloadLocalizations("dijit.nls.dijit-all", ["ROOT", "ar", "ca", "cs", "da", "de", "de-de", "el", "en", "en-gb", "en-us", "es", "es-es", "fi", "fi-fi", "fr", "fr-fr", "he", "he-il", "hu", "it", "it-it", "ja", "ja-jp", "ko", "ko-kr", "nb", "nl", "nl-nl", "pl", "pt", "pt-br", "pt-pt", "ru", "sk", "sl", "sv", "th", "tr", "xx", "zh", "zh-cn", "zh-tw"]);
