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

if (!dojo._hasResource["dojo.uacss"]) {
	dojo._hasResource["dojo.uacss"] = true;
	dojo.provide("dojo.uacss");
	(function () {
		var d = dojo, _1 = d.doc.documentElement, ie = d.isIE, _2 = d.isOpera, _3 = Math.floor, ff = d.isFF, _4 = d.boxModel.replace(/-/, ""), _5 = {dj_ie: ie, dj_ie6: _3(ie) == 6, dj_ie7: _3(ie) == 7, dj_ie8: _3(ie) == 8, dj_ie9: _3(ie) == 9, dj_quirks: d.isQuirks, dj_iequirks: ie && d.isQuirks, dj_opera: _2, dj_khtml: d.isKhtml, dj_webkit: d.isWebKit, dj_safari: d.isSafari, dj_chrome: d.isChrome, dj_gecko: d.isMozilla, dj_ff3: _3(ff) == 3};
		_5["dj_" + _4] = true;
		var _6 = "";
		for (var _7 in _5) {
			if (_5[_7]) {
				_6 += _7 + " ";
			}
		}
		_1.className = d.trim(_1.className + " " + _6);
		dojo._loaders.unshift(function () {
			if (!dojo._isBodyLtr()) {
				var _8 = "dj_rtl dijitRtl " + _6.replace(/ /g, "-rtl ");
				_1.className = d.trim(_1.className + " " + _8);
			}
		});
	})();
}
if (!dojo._hasResource["dijit._base.sniff"]) {
	dojo._hasResource["dijit._base.sniff"] = true;
	dojo.provide("dijit._base.sniff");
}
if (!dojo._hasResource["dojo.fx.Toggler"]) {
	dojo._hasResource["dojo.fx.Toggler"] = true;
	dojo.provide("dojo.fx.Toggler");
	dojo.declare("dojo.fx.Toggler", null, {node: null, showFunc: dojo.fadeIn, hideFunc: dojo.fadeOut, showDuration: 200, hideDuration: 200, constructor: function (_9) {
		var _a = this;
		dojo.mixin(_a, _9);
		_a.node = _9.node;
		_a._showArgs = dojo.mixin({}, _9);
		_a._showArgs.node = _a.node;
		_a._showArgs.duration = _a.showDuration;
		_a.showAnim = _a.showFunc(_a._showArgs);
		_a._hideArgs = dojo.mixin({}, _9);
		_a._hideArgs.node = _a.node;
		_a._hideArgs.duration = _a.hideDuration;
		_a.hideAnim = _a.hideFunc(_a._hideArgs);
		dojo.connect(_a.showAnim, "beforeBegin", dojo.hitch(_a.hideAnim, "stop", true));
		dojo.connect(_a.hideAnim, "beforeBegin", dojo.hitch(_a.showAnim, "stop", true));
	}, show: function (_b) {
		return this.showAnim.play(_b || 0);
	}, hide: function (_c) {
		return this.hideAnim.play(_c || 0);
	}});
}
if (!dojo._hasResource["dojo.fx"]) {
	dojo._hasResource["dojo.fx"] = true;
	dojo.provide("dojo.fx");
	(function () {
		var d = dojo, _d = {_fire: function (_e, _f) {
			if (this[_e]) {
				this[_e].apply(this, _f || []);
			}
			return this;
		}};
		var _10 = function (_11) {
			this._index = -1;
			this._animations = _11 || [];
			this._current = this._onAnimateCtx = this._onEndCtx = null;
			this.duration = 0;
			d.forEach(this._animations, function (a) {
				this.duration += a.duration;
				if (a.delay) {
					this.duration += a.delay;
				}
			}, this);
		};
		d.extend(_10, {_onAnimate: function () {
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
		}, play: function (_12, _13) {
			if (!this._current) {
				this._current = this._animations[this._index = 0];
			}
			if (!_13 && this._current.status() == "playing") {
				return this;
			}
			var _14 = d.connect(this._current, "beforeBegin", this, function () {
				this._fire("beforeBegin");
			}), _15 = d.connect(this._current, "onBegin", this, function (arg) {
				this._fire("onBegin", arguments);
			}), _16 = d.connect(this._current, "onPlay", this, function (arg) {
				this._fire("onPlay", arguments);
				d.disconnect(_14);
				d.disconnect(_15);
				d.disconnect(_16);
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
		}, gotoPercent: function (_17, _18) {
			this.pause();
			var _19 = this.duration * _17;
			this._current = null;
			d.some(this._animations, function (a) {
				if (a.duration <= _19) {
					this._current = a;
					return true;
				}
				_19 -= a.duration;
				return false;
			});
			if (this._current) {
				this._current.gotoPercent(_19 / this._current.duration, _18);
			}
			return this;
		}, stop: function (_1a) {
			if (this._current) {
				if (_1a) {
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
		d.extend(_10, _d);
		dojo.fx.chain = function (_1b) {
			return new _10(_1b);
		};
		var _1c = function (_1d) {
			this._animations = _1d || [];
			this._connects = [];
			this._finished = 0;
			this.duration = 0;
			d.forEach(_1d, function (a) {
				var _1e = a.duration;
				if (a.delay) {
					_1e += a.delay;
				}
				if (this.duration < _1e) {
					this.duration = _1e;
				}
				this._connects.push(d.connect(a, "onEnd", this, "_onEnd"));
			}, this);
			this._pseudoAnimation = new d.Animation({curve: [0, 1], duration: this.duration});
			var _1f = this;
			d.forEach(["beforeBegin", "onBegin", "onPlay", "onAnimate", "onPause", "onStop", "onEnd"], function (evt) {
				_1f._connects.push(d.connect(_1f._pseudoAnimation, evt, function () {
					_1f._fire(evt, arguments);
				}));
			});
		};
		d.extend(_1c, {_doAction: function (_20, _21) {
			d.forEach(this._animations, function (a) {
				a[_20].apply(a, _21);
			});
			return this;
		}, _onEnd: function () {
			if (++this._finished > this._animations.length) {
				this._fire("onEnd");
			}
		}, _call: function (_22, _23) {
			var t = this._pseudoAnimation;
			t[_22].apply(t, _23);
		}, play: function (_24, _25) {
			this._finished = 0;
			this._doAction("play", arguments);
			this._call("play", arguments);
			return this;
		}, pause: function () {
			this._doAction("pause", arguments);
			this._call("pause", arguments);
			return this;
		}, gotoPercent: function (_26, _27) {
			var ms = this.duration * _26;
			d.forEach(this._animations, function (a) {
				a.gotoPercent(a.duration < ms ? 1 : (ms / a.duration), _27);
			});
			this._call("gotoPercent", arguments);
			return this;
		}, stop: function (_28) {
			this._doAction("stop", arguments);
			this._call("stop", arguments);
			return this;
		}, status: function () {
			return this._pseudoAnimation.status();
		}, destroy: function () {
			d.forEach(this._connects, dojo.disconnect);
		}});
		d.extend(_1c, _d);
		dojo.fx.combine = function (_29) {
			return new _1c(_29);
		};
		dojo.fx.wipeIn = function (_2a) {
			var _2b = _2a.node = d.byId(_2a.node), s = _2b.style, o;
			var _2c = d.animateProperty(d.mixin({properties: {height: {start: function () {
				o = s.overflow;
				s.overflow = "hidden";
				if (s.visibility == "hidden" || s.display == "none") {
					s.height = "1px";
					s.display = "";
					s.visibility = "";
					return 1;
				} else {
					var _2d = d.style(_2b, "height");
					return Math.max(_2d, 1);
				}
			}, end: function () {
				return _2b.scrollHeight;
			}}}}, _2a));
			d.connect(_2c, "onEnd", function () {
				s.height = "auto";
				s.overflow = o;
			});
			return _2c;
		};
		dojo.fx.wipeOut = function (_2e) {
			var _2f = _2e.node = d.byId(_2e.node), s = _2f.style, o;
			var _30 = d.animateProperty(d.mixin({properties: {height: {end: 1}}}, _2e));
			d.connect(_30, "beforeBegin", function () {
				o = s.overflow;
				s.overflow = "hidden";
				s.display = "";
			});
			d.connect(_30, "onEnd", function () {
				s.overflow = o;
				s.height = "auto";
				s.display = "none";
			});
			return _30;
		};
		dojo.fx.slideTo = function (_31) {
			var _32 = _31.node = d.byId(_31.node), top = null, _33 = null;
			var _34 = (function (n) {
				return function () {
					var cs = d.getComputedStyle(n);
					var pos = cs.position;
					top = (pos == "absolute" ? n.offsetTop : parseInt(cs.top) || 0);
					_33 = (pos == "absolute" ? n.offsetLeft : parseInt(cs.left) || 0);
					if (pos != "absolute" && pos != "relative") {
						var ret = d.position(n, true);
						top = ret.y;
						_33 = ret.x;
						n.style.position = "absolute";
						n.style.top = top + "px";
						n.style.left = _33 + "px";
					}
				};
			})(_32);
			_34();
			var _35 = d.animateProperty(d.mixin({properties: {top: _31.top || 0, left: _31.left || 0}}, _31));
			d.connect(_35, "beforeBegin", _35, _34);
			return _35;
		};
	})();
}
if (!dojo._hasResource["dojox.fx.flip"]) {
	dojo._hasResource["dojox.fx.flip"] = true;
	dojo.provide("dojox.fx.flip");
	dojo.experimental("dojox.fx.flip");
	var borderConst = "border", widthConst = "Width", heightConst = "Height", topConst = "Top", rightConst = "Right", leftConst = "Left", bottomConst = "Bottom";
	dojox.fx.flip = function (_36) {
		var _37 = dojo.create("div"), _38 = _36.node = dojo.byId(_36.node), s = _38.style, _39 = null, hs = null, pn = null, _3a = _36.lightColor || "#dddddd", _3b = _36.darkColor || "#555555", _3c = dojo.style(_38, "backgroundColor"), _3d = _36.endColor || _3c, _3e = {}, _3f = [], _40 = _36.duration ? _36.duration / 2 : 250, dir = _36.dir || "left", _41 = 0.9, _42 = "transparent", _43 = _36.whichAnim, _44 = _36.axis || "center", _45 = _36.depth;
		var _46 = function (_47) {
			return ((new dojo.Color(_47)).toHex() === "#000000") ? "#000001" : _47;
		};
		if (dojo.isIE < 7) {
			_3d = _46(_3d);
			_3a = _46(_3a);
			_3b = _46(_3b);
			_3c = _46(_3c);
			_42 = "black";
			_37.style.filter = "chroma(color='#000000')";
		}
		var _48 = (function (n) {
			return function () {
				var ret = dojo.coords(n, true);
				_39 = {top: ret.y, left: ret.x, width: ret.w, height: ret.h};
			};
		})(_38);
		_48();
		hs = {position: "absolute", top: _39["top"] + "px", left: _39["left"] + "px", height: "0", width: "0", zIndex: _36.zIndex || (s.zIndex || 0), border: "0 solid " + _42, fontSize: "0", visibility: "hidden"};
		var _49 = [
			{},
			{top: _39["top"], left: _39["left"]}
		];
		var _4a = {left: [leftConst, rightConst, topConst, bottomConst, widthConst, heightConst, "end" + heightConst + "Min", leftConst, "end" + heightConst + "Max"], right: [rightConst, leftConst, topConst, bottomConst, widthConst, heightConst, "end" + heightConst + "Min", leftConst, "end" + heightConst + "Max"], top: [topConst, bottomConst, leftConst, rightConst, heightConst, widthConst, "end" + widthConst + "Min", topConst, "end" + widthConst + "Max"], bottom: [bottomConst, topConst, leftConst, rightConst, heightConst, widthConst, "end" + widthConst + "Min", topConst, "end" + widthConst + "Max"]};
		pn = _4a[dir];
		if (typeof _45 != "undefined") {
			_45 = Math.max(0, Math.min(1, _45)) / 2;
			_41 = 0.4 + (0.5 - _45);
		} else {
			_41 = Math.min(0.9, Math.max(0.4, _39[pn[5].toLowerCase()] / _39[pn[4].toLowerCase()]));
		}
		var p0 = _49[0];
		for (var i = 4; i < 6; i++) {
			if (_44 == "center" || _44 == "cube") {
				_39["end" + pn[i] + "Min"] = _39[pn[i].toLowerCase()] * _41;
				_39["end" + pn[i] + "Max"] = _39[pn[i].toLowerCase()] / _41;
			} else {
				if (_44 == "shortside") {
					_39["end" + pn[i] + "Min"] = _39[pn[i].toLowerCase()];
					_39["end" + pn[i] + "Max"] = _39[pn[i].toLowerCase()] / _41;
				} else {
					if (_44 == "longside") {
						_39["end" + pn[i] + "Min"] = _39[pn[i].toLowerCase()] * _41;
						_39["end" + pn[i] + "Max"] = _39[pn[i].toLowerCase()];
					}
				}
			}
		}
		if (_44 == "center") {
			p0[pn[2].toLowerCase()] = _39[pn[2].toLowerCase()] - (_39[pn[8]] - _39[pn[6]]) / 4;
		} else {
			if (_44 == "shortside") {
				p0[pn[2].toLowerCase()] = _39[pn[2].toLowerCase()] - (_39[pn[8]] - _39[pn[6]]) / 2;
			}
		}
		_3e[pn[5].toLowerCase()] = _39[pn[5].toLowerCase()] + "px";
		_3e[pn[4].toLowerCase()] = "0";
		_3e[borderConst + pn[1] + widthConst] = _39[pn[4].toLowerCase()] + "px";
		_3e[borderConst + pn[1] + "Color"] = _3c;
		p0[borderConst + pn[1] + widthConst] = 0;
		p0[borderConst + pn[1] + "Color"] = _3b;
		p0[borderConst + pn[2] + widthConst] = p0[borderConst + pn[3] + widthConst] = _44 != "cube" ? (_39["end" + pn[5] + "Max"] - _39["end" + pn[5] + "Min"]) / 2 : _39[pn[6]] / 2;
		p0[pn[7].toLowerCase()] = _39[pn[7].toLowerCase()] + _39[pn[4].toLowerCase()] / 2 + (_36.shift || 0);
		p0[pn[5].toLowerCase()] = _39[pn[6]];
		var p1 = _49[1];
		p1[borderConst + pn[0] + "Color"] = {start: _3a, end: _3d};
		p1[borderConst + pn[0] + widthConst] = _39[pn[4].toLowerCase()];
		p1[borderConst + pn[2] + widthConst] = 0;
		p1[borderConst + pn[3] + widthConst] = 0;
		p1[pn[5].toLowerCase()] = {start: _39[pn[6]], end: _39[pn[5].toLowerCase()]};
		dojo.mixin(hs, _3e);
		dojo.style(_37, hs);
		dojo.body().appendChild(_37);
		var _4b = function () {
			dojo.destroy(_37);
			s.backgroundColor = _3d;
			s.visibility = "visible";
		};
		if (_43 == "last") {
			for (i in p0) {
				p0[i] = {start: p0[i]};
			}
			p0[borderConst + pn[1] + "Color"] = {start: _3b, end: _3d};
			p1 = p0;
		}
		if (!_43 || _43 == "first") {
			_3f.push(dojo.animateProperty({node: _37, duration: _40, properties: p0}));
		}
		if (!_43 || _43 == "last") {
			_3f.push(dojo.animateProperty({node: _37, duration: _40, properties: p1, onEnd: _4b}));
		}
		dojo.connect(_3f[0], "play", function () {
			_37.style.visibility = "visible";
			s.visibility = "hidden";
		});
		return dojo.fx.chain(_3f);
	};
	dojox.fx.flipCube = function (_4c) {
		var _4d = [], mb = dojo.marginBox(_4c.node), _4e = mb.w / 2, _4f = mb.h / 2, _50 = {top: {pName: "height", args: [
			{whichAnim: "first", dir: "top", shift: -_4f},
			{whichAnim: "last", dir: "bottom", shift: _4f}
		]}, right: {pName: "width", args: [
			{whichAnim: "first", dir: "right", shift: _4e},
			{whichAnim: "last", dir: "left", shift: -_4e}
		]}, bottom: {pName: "height", args: [
			{whichAnim: "first", dir: "bottom", shift: _4f},
			{whichAnim: "last", dir: "top", shift: -_4f}
		]}, left: {pName: "width", args: [
			{whichAnim: "first", dir: "left", shift: -_4e},
			{whichAnim: "last", dir: "right", shift: _4e}
		]}};
		var d = _50[_4c.dir || "left"], p = d.args;
		_4c.duration = _4c.duration ? _4c.duration * 2 : 500;
		_4c.depth = 0.8;
		_4c.axis = "cube";
		for (var i = p.length - 1; i >= 0; i--) {
			dojo.mixin(_4c, p[i]);
			_4d.push(dojox.fx.flip(_4c));
		}
		return dojo.fx.combine(_4d);
	};
	dojox.fx.flipPage = function (_51) {
		var n = _51.node, _52 = dojo.coords(n, true), x = _52.x, y = _52.y, w = _52.w, h = _52.h, _53 = dojo.style(n, "backgroundColor"), _54 = _51.lightColor || "#dddddd", _55 = _51.darkColor, _56 = dojo.create("div"), _57 = [], hn = [], dir = _51.dir || "right", pn = {left: ["left", "right", "x", "w"], top: ["top", "bottom", "y", "h"], right: ["left", "left", "x", "w"], bottom: ["top", "top", "y", "h"]}, _58 = {right: [1, -1], left: [-1, 1], top: [-1, 1], bottom: [1, -1]};
		dojo.style(_56, {position: "absolute", width: w + "px", height: h + "px", top: y + "px", left: x + "px", visibility: "hidden"});
		var hs = [];
		for (var i = 0; i < 2; i++) {
			var r = i % 2, d = r ? pn[dir][1] : dir, wa = r ? "last" : "first", _59 = r ? _53 : _54, _5a = r ? _59 : _51.startColor || n.style.backgroundColor;
			hn[i] = dojo.clone(_56);
			var _5b = function (x) {
				return function () {
					dojo.destroy(hn[x]);
				};
			}(i);
			dojo.body().appendChild(hn[i]);
			hs[i] = {backgroundColor: r ? _5a : _53};
			hs[i][pn[dir][0]] = _52[pn[dir][2]] + _58[dir][0] * i * _52[pn[dir][3]] + "px";
			dojo.style(hn[i], hs[i]);
			_57.push(dojox.fx.flip({node: hn[i], dir: d, axis: "shortside", depth: _51.depth, duration: _51.duration / 2, shift: _58[dir][i] * _52[pn[dir][3]] / 2, darkColor: _55, lightColor: _54, whichAnim: wa, endColor: _59}));
			dojo.connect(_57[i], "onEnd", _5b);
		}
		return dojo.fx.chain(_57);
	};
	dojox.fx.flipGrid = function (_5c) {
		var _5d = _5c.rows || 4, _5e = _5c.cols || 4, _5f = [], _60 = dojo.create("div"), n = _5c.node, _61 = dojo.coords(n, true), x = _61.x, y = _61.y, nw = _61.w, nh = _61.h, w = _61.w / _5e, h = _61.h / _5d, _62 = [];
		dojo.style(_60, {position: "absolute", width: w + "px", height: h + "px", backgroundColor: dojo.style(n, "backgroundColor")});
		for (var i = 0; i < _5d; i++) {
			var r = i % 2, d = r ? "right" : "left", _63 = r ? 1 : -1;
			var cn = dojo.clone(n);
			dojo.style(cn, {position: "absolute", width: nw + "px", height: nh + "px", top: y + "px", left: x + "px", clip: "rect(" + i * h + "px," + nw + "px," + nh + "px,0)"});
			dojo.body().appendChild(cn);
			_5f[i] = [];
			for (var j = 0; j < _5e; j++) {
				var hn = dojo.clone(_60), l = r ? j : _5e - (j + 1);
				var _64 = function (xn, _65, _66) {
					return function () {
						if (!(_65 % 2)) {
							dojo.style(xn, {clip: "rect(" + _65 * h + "px," + (nw - (_66 + 1) * w) + "px," + ((_65 + 1) * h) + "px,0px)"});
						} else {
							dojo.style(xn, {clip: "rect(" + _65 * h + "px," + nw + "px," + ((_65 + 1) * h) + "px," + ((_66 + 1) * w) + "px)"});
						}
					};
				}(cn, i, j);
				dojo.body().appendChild(hn);
				dojo.style(hn, {left: x + l * w + "px", top: y + i * h + "px", visibility: "hidden"});
				var a = dojox.fx.flipPage({node: hn, dir: d, duration: _5c.duration || 900, shift: _63 * w / 2, depth: 0.2, darkColor: _5c.darkColor, lightColor: _5c.lightColor, startColor: _5c.startColor || _5c.node.style.backgroundColor}), _67 = function (xn) {
					return function () {
						dojo.destroy(xn);
					};
				}(hn);
				dojo.connect(a, "play", this, _64);
				dojo.connect(a, "play", this, _67);
				_5f[i].push(a);
			}
			_62.push(dojo.fx.chain(_5f[i]));
		}
		dojo.connect(_62[0], "play", function () {
			dojo.style(n, {visibility: "hidden"});
		});
		return dojo.fx.combine(_62);
	};
}
if (!dojo._hasResource["dojox.mobile.compat"]) {
	dojo._hasResource["dojox.mobile.compat"] = true;
	dojo.provide("dojox.mobile.compat");
	if (!dojo.isWebKit) {
		dojo.extend(dojox.mobile.View, {_doTransition: function (_68, _69, _6a, dir) {
			var _6b;
			this.wakeUp(_69);
			if (!_6a || _6a == "none") {
				_69.style.display = "";
				_68.style.display = "none";
				_69.style.left = "0px";
				this.invokeCallback();
			} else {
				if (_6a == "slide") {
					var w = _68.offsetWidth;
					var s1 = dojo.fx.slideTo({node: _68, duration: 400, left: -w * dir, top: _68.offsetTop});
					var s2 = dojo.fx.slideTo({node: _69, duration: 400, left: 0});
					_69.style.position = "absolute";
					_69.style.left = w * dir + "px";
					_69.style.display = "";
					_6b = dojo.fx.combine([s1, s2]);
					dojo.connect(_6b, "onEnd", this, function () {
						_68.style.display = "none";
						_69.style.position = "relative";
						this.invokeCallback();
					});
					_6b.play();
				} else {
					if (_6a == "flip") {
						_6b = dojox.fx.flip({node: _68, dir: "right", depth: 0.5, duration: 400});
						_69.style.position = "absolute";
						_69.style.left = "0px";
						dojo.connect(_6b, "onEnd", this, function () {
							_68.style.display = "none";
							_69.style.position = "relative";
							_69.style.display = "";
							this.invokeCallback();
						});
						_6b.play();
					} else {
						if (_6a == "fade") {
							_6b = dojo.fx.chain([dojo.fadeOut({node: _68, duration: 600}), dojo.fadeIn({node: _69, duration: 600})]);
							_69.style.position = "absolute";
							_69.style.left = "0px";
							_69.style.display = "";
							dojo.style(_69, "opacity", 0);
							dojo.connect(_6b, "onEnd", this, function () {
								_68.style.display = "none";
								_69.style.position = "relative";
								dojo.style(_68, "opacity", 1);
								this.invokeCallback();
							});
							_6b.play();
						}
					}
				}
			}
		}, wakeUp: function (_6c) {
			if (dojo.isIE && !_6c._wokeup) {
				_6c._wokeup = true;
				var _6d = _6c.style.display;
				_6c.style.display = "";
				var _6e = _6c.getElementsByTagName("*");
				for (var i = 0, len = _6e.length; i < len; i++) {
					var val = _6e[i].style.display;
					_6e[i].style.display = "none";
					_6e[i].style.display = "";
					_6e[i].style.display = val;
				}
				_6c.style.display = _6d;
			}
		}});
		dojo.extend(dojox.mobile.Switch, {buildRendering: function () {
			this.domNode = this.srcNodeRef || dojo.doc.createElement("DIV");
			this.domNode.className = "mblSwitch";
			this.domNode.innerHTML = "<div class=\"mblSwitchInner\">" + "<div class=\"mblSwitchBg mblSwitchBgLeft\">" + "<div class=\"mblSwitchCorner mblSwitchCorner1T\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner2T\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner3T\"></div>" + "<div class=\"mblSwitchText mblSwitchTextLeft\">" + this.leftLabel + "</div>" + "<div class=\"mblSwitchCorner mblSwitchCorner1B\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner2B\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner3B\"></div>" + "</div>" + "<div class=\"mblSwitchBg mblSwitchBgRight\">" + "<div class=\"mblSwitchCorner mblSwitchCorner1T\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner2T\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner3T\"></div>" + "<div class=\"mblSwitchText mblSwitchTextRight\">" + this.rightLabel + "</div>" + "<div class=\"mblSwitchCorner mblSwitchCorner1B\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner2B\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner3B\"></div>" + "</div>" + "<div class=\"mblSwitchKnobContainer\">" + "<div class=\"mblSwitchCorner mblSwitchCorner1T\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner2T\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner3T\"></div>" + "<div class=\"mblSwitchKnob\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner1B\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner2B\"></div>" + "<div class=\"mblSwitchCorner mblSwitchCorner3B\"></div>" + "</div>" + "</div>";
			var n = this.inner = this.domNode.firstChild;
			this.left = n.childNodes[0];
			this.right = n.childNodes[1];
			this.knob = n.childNodes[2];
			dojo.addClass(this.domNode, (this.value == "on") ? "mblSwitchOn" : "mblSwitchOff");
			this[this.value == "off" ? "left" : "right"].style.display = "none";
		}, _changeState: function (_6f) {
			if (!this.inner.parentNode || !this.inner.parentNode.tagName) {
				dojo.addClass(this.domNode, (_6f == "on") ? "mblSwitchOn" : "mblSwitchOff");
				return;
			}
			var pos;
			if (this.inner.offsetLeft == 0) {
				if (_6f == "on") {
					return;
				}
				pos = -53;
			} else {
				if (_6f == "off") {
					return;
				}
				pos = 0;
			}
			var a = dojo.fx.slideTo({node: this.inner, duration: 500, left: pos});
			var _70 = this;
			dojo.connect(a, "onEnd", function () {
				_70[_6f == "off" ? "left" : "right"].style.display = "none";
			});
			a.play();
		}});
		if (dojo.isIE || dojo.isBB) {
			dojo.extend(dojox.mobile.RoundRect, {buildRendering: function () {
				dojox.mobile.createRoundRect(this);
				this.domNode.className = "mblRoundRect";
			}});
			dojox.mobile.RoundRectList._addChild = dojox.mobile.RoundRectList.prototype.addChild;
			dojo.extend(dojox.mobile.RoundRectList, {buildRendering: function () {
				dojox.mobile.createRoundRect(this, true);
				this.domNode.className = "mblRoundRectList";
			}, postCreate: function () {
				this.redrawBorders();
			}, addChild: function (_71) {
				dojox.mobile.RoundRectList._addChild.apply(this, arguments);
				this.redrawBorders();
				if (dojox.mobile.applyPngFilter) {
					dojox.mobile.applyPngFilter(_71.domNode);
				}
			}, redrawBorders: function () {
				var _72 = false;
				for (var i = this.containerNode.childNodes.length - 1; i >= 0; i--) {
					var c = this.containerNode.childNodes[i];
					if (c.tagName == "LI") {
						c.style.borderBottomStyle = _72 ? "solid" : "none";
						_72 = true;
					}
				}
			}});
			dojo.extend(dojox.mobile.EdgeToEdgeList, {buildRendering: function () {
				this.domNode = this.containerNode = this.srcNodeRef || dojo.doc.createElement("UL");
				this.domNode.className = "mblEdgeToEdgeList";
			}});
			if (dojox.mobile.IconContainer) {
				dojox.mobile.IconContainer._addChild = dojox.mobile.IconContainer.prototype.addChild;
				dojo.extend(dojox.mobile.IconContainer, {addChild: function (_73) {
					dojox.mobile.IconContainer._addChild.apply(this, arguments);
					if (dojox.mobile.applyPngFilter) {
						dojox.mobile.applyPngFilter(_73.domNode);
					}
				}});
			}
			dojo.mixin(dojox.mobile, {createRoundRect: function (_74, _75) {
				var i;
				_74.domNode = dojo.doc.createElement("DIV");
				_74.domNode.style.padding = "0px";
				_74.domNode.style.backgroundColor = "transparent";
				_74.domNode.style.borderStyle = "none";
				_74.containerNode = dojo.doc.createElement(_75 ? "UL" : "DIV");
				_74.containerNode.className = "mblRoundRectContainer";
				if (_74.srcNodeRef) {
					_74.srcNodeRef.parentNode.replaceChild(_74.domNode, _74.srcNodeRef);
					for (i = 0, len = _74.srcNodeRef.childNodes.length; i < len; i++) {
						_74.containerNode.appendChild(_74.srcNodeRef.removeChild(_74.srcNodeRef.firstChild));
					}
					_74.srcNodeRef = null;
				}
				_74.domNode.appendChild(_74.containerNode);
				for (i = 0; i <= 5; i++) {
					var top = dojo.create("DIV");
					top.className = "mblRoundCorner mblRoundCorner" + i + "T";
					_74.domNode.insertBefore(top, _74.containerNode);
					var _76 = dojo.create("DIV");
					_76.className = "mblRoundCorner mblRoundCorner" + i + "B";
					_74.domNode.appendChild(_76);
				}
			}});
			if (dojox.mobile.ScrollableView) {
				dojo.extend(dojox.mobile.ScrollableView, {postCreate: function () {
					var _77 = dojo.create("DIV", {className: "mblDummyForIE", innerHTML: "&nbsp;"}, this.containerNode, "first");
					dojo.style(_77, {position: "relative", marginBottom: "-2px", fontSize: "1px"});
				}});
			}
		}
		if (dojo.isIE <= 6) {
			dojox.mobile.applyPngFilter = function (_78) {
				_78 = _78 || dojo.body();
				var _79 = _78.getElementsByTagName("IMG");
				var _7a = dojo.moduleUrl("dojo", "resources/blank.gif");
				for (var i = 0, len = _79.length; i < len; i++) {
					var img = _79[i];
					var w = img.offsetWidth;
					var h = img.offsetHeight;
					if (w === 0 || h === 0) {
						if (dojo.style(img, "display") != "none") {
							continue;
						}
						img.style.display = "";
						w = img.offsetWidth;
						h = img.offsetHeight;
						img.style.display = "none";
						if (w === 0 || h === 0) {
							continue;
						}
					}
					var src = img.src;
					if (src.indexOf("resources/blank.gif") != -1) {
						continue;
					}
					img.src = _7a;
					img.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "')";
					img.style.width = w + "px";
					img.style.height = h + "px";
				}
			};
		}
		dojox.mobile.loadCss = function (_7b) {
			if (!dojo.global._loadedCss) {
				var obj = {};
				dojo.forEach(dojox.mobile.getCssPaths(), function (_7c) {
					obj[_7c] = true;
				});
				dojo.global._loadedCss = obj;
			}
			if (!dojo.isArray(_7b)) {
				_7b = [_7b];
			}
			for (var i = 0; i < _7b.length; i++) {
				var _7d = _7b[i];
				if (!dojo.global._loadedCss[_7d]) {
					dojo.global._loadedCss[_7d] = true;
					if (dojo.doc.createStyleSheet) {
						setTimeout(function (_7e) {
							return function () {
								dojo.doc.createStyleSheet(_7e);
							};
						}(_7d), 0);
					} else {
						var _7f = dojo.doc.createElement("link");
						_7f.href = _7d;
						_7f.type = "text/css";
						_7f.rel = "stylesheet";
						var _80 = dojo.doc.getElementsByTagName("head")[0];
						_80.appendChild(_7f);
					}
				}
			}
		};
		dojox.mobile.getCssPaths = function () {
			var _81 = [];
			var i, j;
			var s = dojo.doc.styleSheets;
			for (i = 0; i < s.length; i++) {
				var r = s[i].cssRules || s[i].imports;
				if (!r) {
					continue;
				}
				for (j = 0; j < r.length; j++) {
					if (r[j].href) {
						_81.push(r[j].href);
					}
				}
			}
			var _82 = dojo.doc.getElementsByTagName("link");
			for (i = 0, len = _82.length; i < len; i++) {
				if (_82[i].href) {
					_81.push(_82[i].href);
				}
			}
			return _81;
		};
		dojox.mobile.loadCompatPattern = /\/themes\/(domButtons|buttons|iphone|android).*\.css$/;
		dojox.mobile.loadCompatCssFiles = function () {
			var _83 = dojox.mobile.getCssPaths();
			for (var i = 0; i < _83.length; i++) {
				var _84 = _83[i];
				if (_84.match(dojox.mobile.loadCompatPattern) && _84.indexOf("-compat.css") == -1) {
					var _85 = _84.substring(0, _84.length - 4) + "-compat.css";
					dojox.mobile.loadCss(_85);
				}
			}
		};
		dojox.mobile.hideAddressBar = function () {
		};
		dojo.addOnLoad(function () {
			if (dojo.config["mblLoadCompatCssFiles"] !== false) {
				dojox.mobile.loadCompatCssFiles();
			}
			if (dojox.mobile.applyPngFilter) {
				dojox.mobile.applyPngFilter();
			}
		});
	}
}
