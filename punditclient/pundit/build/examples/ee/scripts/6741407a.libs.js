!function (a, b, c) {
	"use strict";
	function d(a) {
		return function () {
			var b, c, d = arguments[0], e = "[" + (a ? a + ":" : "") + d + "] ", f = arguments[1], g = arguments, h = function (a) {
				return"function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a
			};
			for (b = e + f.replace(/\{\d+\}/g, function (a) {
				var b, c = +a.slice(1, -1);
				return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? Q(b) : b) : a
			}), b = b + "\nhttp://errors.angularjs.org/1.2.1/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++)b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
			return new Error(b)
		}
	}

	function e(a) {
		if (null == a || A(a))return!1;
		var b = a.length;
		return 1 === a.nodeType && b ? !0 : u(a) || x(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	function f(a, b, c) {
		var d;
		if (a)if (y(a))for (d in a)"prototype" != d && "length" != d && "name" != d && a.hasOwnProperty(d) && b.call(c, a[d], d); else if (a.forEach && a.forEach !== f)a.forEach(b, c); else if (e(a))for (d = 0; d < a.length; d++)b.call(c, a[d], d); else for (d in a)a.hasOwnProperty(d) && b.call(c, a[d], d);
		return a
	}

	function g(a) {
		var b = [];
		for (var c in a)a.hasOwnProperty(c) && b.push(c);
		return b.sort()
	}

	function h(a, b, c) {
		for (var d = g(a), e = 0; e < d.length; e++)b.call(c, a[d[e]], d[e]);
		return d
	}

	function i(a) {
		return function (b, c) {
			a(c, b)
		}
	}

	function j() {
		for (var a, b = nd.length; b;) {
			if (b--, a = nd[b].charCodeAt(0), 57 == a)return nd[b] = "A", nd.join("");
			if (90 != a)return nd[b] = String.fromCharCode(a + 1), nd.join("");
			nd[b] = "0"
		}
		return nd.unshift("0"), nd.join("")
	}

	function k(a, b) {
		b ? a.$$hashKey = b : delete a.$$hashKey
	}

	function l(a) {
		var b = a.$$hashKey;
		return f(arguments, function (b) {
			b !== a && f(b, function (b, c) {
				a[c] = b
			})
		}), k(a, b), a
	}

	function m(a) {
		return parseInt(a, 10)
	}

	function n(a, b) {
		return l(new (l(function () {
		}, {prototype: a})), b)
	}

	function o() {
	}

	function p(a) {
		return a
	}

	function q(a) {
		return function () {
			return a
		}
	}

	function r(a) {
		return"undefined" == typeof a
	}

	function s(a) {
		return"undefined" != typeof a
	}

	function t(a) {
		return null != a && "object" == typeof a
	}

	function u(a) {
		return"string" == typeof a
	}

	function v(a) {
		return"number" == typeof a
	}

	function w(a) {
		return"[object Date]" == kd.apply(a)
	}

	function x(a) {
		return"[object Array]" == kd.apply(a)
	}

	function y(a) {
		return"function" == typeof a
	}

	function z(a) {
		return"[object RegExp]" == kd.apply(a)
	}

	function A(a) {
		return a && a.document && a.location && a.alert && a.setInterval
	}

	function B(a) {
		return a && a.$evalAsync && a.$watch
	}

	function C(a) {
		return"[object File]" === kd.apply(a)
	}

	function D(a) {
		return a && (a.nodeName || a.on && a.find)
	}

	function E(a, b, c) {
		var d = [];
		return f(a, function (a, e, f) {
			d.push(b.call(c, a, e, f))
		}), d
	}

	function F(a, b) {
		return-1 != G(a, b)
	}

	function G(a, b) {
		if (a.indexOf)return a.indexOf(b);
		for (var c = 0; c < a.length; c++)if (b === a[c])return c;
		return-1
	}

	function H(a, b) {
		var c = G(a, b);
		return c >= 0 && a.splice(c, 1), b
	}

	function I(a, b) {
		if (A(a) || B(a))throw ld("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
		if (b) {
			if (a === b)throw ld("cpi", "Can't copy! Source and destination are identical.");
			if (x(a)) {
				b.length = 0;
				for (var c = 0; c < a.length; c++)b.push(I(a[c]))
			} else {
				var d = b.$$hashKey;
				f(b, function (a, c) {
					delete b[c]
				});
				for (var e in a)b[e] = I(a[e]);
				k(b, d)
			}
		} else b = a, a && (x(a) ? b = I(a, []) : w(a) ? b = new Date(a.getTime()) : z(a) ? b = new RegExp(a.source) : t(a) && (b = I(a, {})));
		return b
	}

	function J(a, b) {
		b = b || {};
		for (var c in a)a.hasOwnProperty(c) && "$$" !== c.substr(0, 2) && (b[c] = a[c]);
		return b
	}

	function K(a, b) {
		if (a === b)return!0;
		if (null === a || null === b)return!1;
		if (a !== a && b !== b)return!0;
		var d, e, f, g = typeof a, h = typeof b;
		if (g == h && "object" == g) {
			if (!x(a)) {
				if (w(a))return w(b) && a.getTime() == b.getTime();
				if (z(a) && z(b))return a.toString() == b.toString();
				if (B(a) || B(b) || A(a) || A(b) || x(b))return!1;
				f = {};
				for (e in a)if ("$" !== e.charAt(0) && !y(a[e])) {
					if (!K(a[e], b[e]))return!1;
					f[e] = !0
				}
				for (e in b)if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !y(b[e]))return!1;
				return!0
			}
			if (!x(b))return!1;
			if ((d = a.length) == b.length) {
				for (e = 0; d > e; e++)if (!K(a[e], b[e]))return!1;
				return!0
			}
		}
		return!1
	}

	function L() {
		return b.securityPolicy && b.securityPolicy.isActive || b.querySelector && !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"))
	}

	function M(a, b, c) {
		return a.concat(id.call(b, c))
	}

	function N(a, b) {
		return id.call(a, b || 0)
	}

	function O(a, b) {
		var c = arguments.length > 2 ? N(arguments, 2) : [];
		return!y(b) || b instanceof RegExp ? b : c.length ? function () {
			return arguments.length ? b.apply(a, c.concat(id.call(arguments, 0))) : b.apply(a, c)
		} : function () {
			return arguments.length ? b.apply(a, arguments) : b.call(a)
		}
	}

	function P(a, d) {
		var e = d;
		return"string" == typeof a && "$" === a.charAt(0) ? e = c : A(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : B(d) && (e = "$SCOPE"), e
	}

	function Q(a, b) {
		return"undefined" == typeof a ? c : JSON.stringify(a, P, b ? "  " : null)
	}

	function R(a) {
		return u(a) ? JSON.parse(a) : a
	}

	function S(a) {
		if (a && 0 !== a.length) {
			var b = _c("" + a);
			a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
		} else a = !1;
		return a
	}

	function T(a) {
		a = ed(a).clone();
		try {
			a.html("")
		} catch (b) {
		}
		var c = 3, d = ed("<div>").append(a).html();
		try {
			return a[0].nodeType === c ? _c(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
				return"<" + _c(b)
			})
		} catch (b) {
			return _c(d)
		}
	}

	function U(a) {
		try {
			return decodeURIComponent(a)
		} catch (b) {
		}
	}

	function V(a) {
		var b, c, d = {};
		return f((a || "").split("&"), function (a) {
			if (a && (b = a.split("="), c = U(b[0]), s(c))) {
				var e = s(b[1]) ? U(b[1]) : !0;
				d[c] ? x(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
			}
		}), d
	}

	function W(a) {
		var b = [];
		return f(a, function (a, c) {
			x(a) ? f(a, function (a) {
				b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
			}) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
		}), b.length ? b.join("&") : ""
	}

	function X(a) {
		return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}

	function Y(a, b) {
		return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
	}

	function Z(a, c) {
		function d(a) {
			a && h.push(a)
		}

		var e, g, h = [a], i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
		f(i, function (c) {
			i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
		}), f(h, function (a) {
			if (!e) {
				var b = " " + a.className + " ", c = j.exec(b);
				c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function (b) {
					!e && i[b.name] && (e = a, g = b.value)
				})
			}
		}), e && c(e, g ? [g] : [])
	}

	function $(c, d) {
		var e = function () {
			if (c = ed(c), c.injector()) {
				var a = c[0] === b ? "document" : T(c);
				throw ld("btstrpd", "App Already Bootstrapped with this Element '{0}'", a)
			}
			d = d || [], d.unshift(["$provide", function (a) {
				a.value("$rootElement", c)
			}]), d.unshift("ng");
			var e = Db(d);
			return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (a, b, c, d) {
				a.$apply(function () {
					b.data("$injector", d), c(b)(a)
				})
			}]), e
		}, g = /^NG_DEFER_BOOTSTRAP!/;
		return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), md.resumeBootstrap = function (a) {
			f(a, function (a) {
				d.push(a)
			}), e()
		}, void 0)
	}

	function _(a, b) {
		return b = b || "_", a.replace(pd, function (a, c) {
			return(c ? b : "") + a.toLowerCase()
		})
	}

	function ab() {
		fd = a.jQuery, fd ? (ed = fd, l(fd.fn, {scope: zd.scope, isolateScope: zd.isolateScope, controller: zd.controller, injector: zd.injector, inheritedData: zd.inheritedData}), kb("remove", !0, !0, !1), kb("empty", !1, !1, !1), kb("html", !1, !1, !0)) : ed = lb, md.element = ed
	}

	function bb(a, b, c) {
		if (!a)throw ld("areq", "Argument '{0}' is {1}", b || "?", c || "required");
		return a
	}

	function cb(a, b, c) {
		return c && x(a) && (a = a[a.length - 1]), bb(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
	}

	function db(a, b) {
		if ("hasOwnProperty" === a)throw ld("badname", "hasOwnProperty is not a valid {0} name", b)
	}

	function eb(a, b, c) {
		if (!b)return a;
		for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)d = e[h], a && (a = (f = a)[d]);
		return!c && y(a) ? O(f, a) : a
	}

	function fb(a) {
		if (a.startNode === a.endNode)return ed(a.startNode);
		var b = a.startNode, c = [b];
		do {
			if (b = b.nextSibling, !b)break;
			c.push(b)
		} while (b !== a.endNode);
		return ed(c)
	}

	function gb(a) {
		function b(a, b, c) {
			return a[b] || (a[b] = c())
		}

		var c = d("$injector"), e = d("ng");
		return b(b(a, "angular", Object), "module", function () {
			var a = {};
			return function (d, f, g) {
				var h = function (a, b) {
					if ("hasOwnProperty" === a)throw e("badname", "hasOwnProperty is not a valid {0} name", b)
				};
				return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
					function a(a, c, d) {
						return function () {
							return b[d || "push"]([a, c, arguments]), i
						}
					}

					if (!f)throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
					var b = [], e = [], h = a("$injector", "invoke"), i = {_invokeQueue: b, _runBlocks: e, requires: f, name: d, provider: a("$provide", "provider"), factory: a("$provide", "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), animation: a("$animateProvider", "register"), filter: a("$filterProvider", "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: h, run: function (a) {
						return e.push(a), this
					}};
					return g && h(g), i
				})
			}
		})
	}

	function hb(b) {
		l(b, {bootstrap: $, copy: I, extend: l, equals: K, element: ed, forEach: f, injector: Db, noop: o, bind: O, toJson: Q, fromJson: R, identity: p, isUndefined: r, isDefined: s, isString: u, isFunction: y, isObject: t, isNumber: v, isElement: D, isArray: x, version: qd, isDate: w, lowercase: _c, uppercase: ad, callbacks: {counter: 0}, $$minErr: d, $$csp: L}), gd = gb(a);
		try {
			gd("ngLocale")
		} catch (c) {
			gd("ngLocale", []).provider("$locale", Xb)
		}
		gd("ng", ["ngLocale"], ["$provide", function (a) {
			a.provider("$compile", Jb).directive({a: he, input: re, textarea: re, form: le, script: Ze, select: af, style: cf, option: bf, ngBind: De, ngBindHtml: Fe, ngBindTemplate: Ee, ngClass: Ge, ngClassEven: Ie, ngClassOdd: He, ngCloak: Je, ngController: Ke, ngForm: me, ngHide: Te, ngIf: Me, ngInclude: Ne, ngInit: Oe, ngNonBindable: Pe, ngPluralize: Qe, ngRepeat: Re, ngShow: Se, ngStyle: Ue, ngSwitch: Ve, ngSwitchWhen: We, ngSwitchDefault: Xe, ngOptions: _e, ngTransclude: Ye, ngModel: xe, ngList: Ae, ngChange: ye, required: ze, ngRequired: ze, ngValue: Ce}).directive(ie).directive(Le), a.provider({$anchorScroll: Eb, $animate: Id, $browser: Gb, $cacheFactory: Hb, $controller: Lb, $document: Mb, $exceptionHandler: Nb, $filter: Ec, $interpolate: Vb, $interval: Wb, $http: Sb, $httpBackend: Tb, $location: ic, $log: jc, $parse: pc, $rootScope: sc, $q: qc, $sce: xc, $sceDelegate: wc, $sniffer: yc, $templateCache: Ib, $timeout: zc, $window: Dc})
		}])
	}

	function ib() {
		return++td
	}

	function jb(a) {
		return a.replace(wd, function (a, b, c, d) {
			return d ? c.toUpperCase() : c
		}).replace(xd, "Moz$1")
	}

	function kb(a, b, c, d) {
		function e(a) {
			var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this], n = b;
			if (!d || null != a)for (; m.length;)for (e = m.shift(), g = 0, h = e.length; h > g; g++)for (i = ed(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++)m.push(fd(l[j]));
			return f.apply(this, arguments)
		}

		var f = fd.fn[a];
		f = f.$original || f, e.$original = f, fd.fn[a] = e
	}

	function lb(a) {
		if (a instanceof lb)return a;
		if (!(this instanceof lb)) {
			if (u(a) && "<" != a.charAt(0))throw yd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
			return new lb(a)
		}
		if (u(a)) {
			var c = b.createElement("div");
			c.innerHTML = "<div>&#160;</div>" + a, c.removeChild(c.firstChild), vb(this, c.childNodes);
			var d = ed(b.createDocumentFragment());
			d.append(this)
		} else vb(this, a)
	}

	function mb(a) {
		return a.cloneNode(!0)
	}

	function nb(a) {
		pb(a);
		for (var b = 0, c = a.childNodes || []; b < c.length; b++)nb(c[b])
	}

	function ob(a, b, c, d) {
		if (s(d))throw yd("offargs", "jqLite#off() does not support the `selector` argument");
		var e = qb(a, "events"), g = qb(a, "handle");
		g && (r(b) ? f(e, function (b, c) {
			vd(a, c, b), delete e[c]
		}) : f(b.split(" "), function (b) {
			r(c) ? (vd(a, b, e[b]), delete e[b]) : H(e[b] || [], c)
		}))
	}

	function pb(a, b) {
		var d = a[sd], e = rd[d];
		if (e) {
			if (b)return delete rd[d].data[b], void 0;
			e.handle && (e.events.$destroy && e.handle({}, "$destroy"), ob(a)), delete rd[d], a[sd] = c
		}
	}

	function qb(a, b, c) {
		var d = a[sd], e = rd[d || -1];
		return s(c) ? (e || (a[sd] = d = ib(), e = rd[d] = {}), e[b] = c, void 0) : e && e[b]
	}

	function rb(a, b, c) {
		var d = qb(a, "data"), e = s(c), f = !e && s(b), g = f && !t(b);
		if (d || g || qb(a, "data", d = {}), e)d[b] = c; else {
			if (!f)return d;
			if (g)return d && d[b];
			l(d, b)
		}
	}

	function sb(a, b) {
		return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
	}

	function tb(a, b) {
		b && a.setAttribute && f(b.split(" "), function (b) {
			a.setAttribute("class", od((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + od(b) + " ", " ")))
		})
	}

	function ub(a, b) {
		if (b && a.setAttribute) {
			var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			f(b.split(" "), function (a) {
				a = od(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
			}), a.setAttribute("class", od(c))
		}
	}

	function vb(a, b) {
		if (b) {
			b = b.nodeName || !s(b.length) || A(b) ? [b] : b;
			for (var c = 0; c < b.length; c++)a.push(b[c])
		}
	}

	function wb(a, b) {
		return xb(a, "$" + (b || "ngController") + "Controller")
	}

	function xb(a, b, d) {
		a = ed(a), 9 == a[0].nodeType && (a = a.find("html"));
		for (var e = x(b) ? b : [b]; a.length;) {
			for (var f = 0, g = e.length; g > f; f++)if ((d = a.data(e[f])) !== c)return d;
			a = a.parent()
		}
	}

	function yb(a, b) {
		var c = Ad[b.toLowerCase()];
		return c && Bd[a.nodeName] && c
	}

	function zb(a, c) {
		var d = function (d, e) {
			if (d.preventDefault || (d.preventDefault = function () {
				d.returnValue = !1
			}), d.stopPropagation || (d.stopPropagation = function () {
				d.cancelBubble = !0
			}), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
				var g = d.preventDefault;
				d.preventDefault = function () {
					d.defaultPrevented = !0, g.call(d)
				}, d.defaultPrevented = !1
			}
			d.isDefaultPrevented = function () {
				return d.defaultPrevented || d.returnValue === !1
			}, f(c[e || d.type], function (b) {
				b.call(a, d)
			}), 8 >= dd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
		};
		return d.elem = a, d
	}

	function Ab(a) {
		var b, d = typeof a;
		return"object" == d && null !== a ? "function" == typeof(b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = j()) : b = a, d + ":" + b
	}

	function Bb(a) {
		f(a, this.put, this)
	}

	function Cb(a) {
		var b, c, d, e;
		return"function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Fd, ""), d = c.match(Cd), f(d[1].split(Dd), function (a) {
			a.replace(Ed, function (a, c, d) {
				b.push(d)
			})
		})), a.$inject = b) : x(a) ? (e = a.length - 1, cb(a[e], "fn"), b = a.slice(0, e)) : cb(a, "fn", !0), b
	}

	function Db(a) {
		function b(a) {
			return function (b, c) {
				return t(b) ? (f(b, i(a)), void 0) : a(b, c)
			}
		}

		function c(a, b) {
			if (db(a, "service"), (y(b) || x(b)) && (b = v.instantiate(b)), !b.$get)throw Gd("pget", "Provider '{0}' must define $get factory method.", a);
			return s[a + n] = b
		}

		function d(a, b) {
			return c(a, {$get: b})
		}

		function e(a, b) {
			return d(a, ["$injector", function (a) {
				return a.instantiate(b)
			}])
		}

		function g(a, b) {
			return d(a, q(b))
		}

		function h(a, b) {
			db(a, "constant"), s[a] = b, w[a] = b
		}

		function j(a, b) {
			var c = v.get(a + n), d = c.$get;
			c.$get = function () {
				var a = z.invoke(d, c);
				return z.invoke(b, null, {$delegate: a})
			}
		}

		function k(a) {
			var b, c, d, e, g = [];
			return f(a, function (a) {
				if (!r.get(a)) {
					r.put(a, !0);
					try {
						if (u(a))for (b = gd(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
							var f = c[d], h = v.get(f[0]);
							h[f[1]].apply(h, f[2])
						} else y(a) ? g.push(v.invoke(a)) : x(a) ? g.push(v.invoke(a)) : cb(a, "module")
					} catch (i) {
						throw x(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Gd("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
					}
				}
			}), g
		}

		function l(a, b) {
			function c(c) {
				if (a.hasOwnProperty(c)) {
					if (a[c] === m)throw Gd("cdep", "Circular dependency found: {0}", p.join(" <- "));
					return a[c]
				}
				try {
					return p.unshift(c), a[c] = m, a[c] = b(c)
				} finally {
					p.shift()
				}
			}

			function d(a, b, d) {
				var e, f, g, h = [], i = Cb(a);
				for (f = 0, e = i.length; e > f; f++) {
					if (g = i[f], "string" != typeof g)throw Gd("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
					h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
				}
				switch (a.$inject || (a = a[e]), b ? -1 : h.length) {
					case 0:
						return a();
					case 1:
						return a(h[0]);
					case 2:
						return a(h[0], h[1]);
					case 3:
						return a(h[0], h[1], h[2]);
					case 4:
						return a(h[0], h[1], h[2], h[3]);
					case 5:
						return a(h[0], h[1], h[2], h[3], h[4]);
					case 6:
						return a(h[0], h[1], h[2], h[3], h[4], h[5]);
					case 7:
						return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6]);
					case 8:
						return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
					case 9:
						return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8]);
					case 10:
						return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9]);
					default:
						return a.apply(b, h)
				}
			}

			function e(a, b) {
				var c, e, f = function () {
				};
				return f.prototype = (x(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), t(e) || y(e) ? e : c
			}

			return{invoke: d, instantiate: e, get: c, annotate: Cb, has: function (b) {
				return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
			}}
		}

		var m = {}, n = "Provider", p = [], r = new Bb, s = {$provide: {provider: b(c), factory: b(d), service: b(e), value: b(g), constant: b(h), decorator: j}}, v = s.$injector = l(s, function () {
			throw Gd("unpr", "Unknown provider: {0}", p.join(" <- "))
		}), w = {}, z = w.$injector = l(w, function (a) {
			var b = v.get(a + n);
			return z.invoke(b.$get, b)
		});
		return f(k(a), function (a) {
			z.invoke(a || o)
		}), z
	}

	function Eb() {
		var a = !0;
		this.disableAutoScrolling = function () {
			a = !1
		}, this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
			function e(a) {
				var b = null;
				return f(a, function (a) {
					b || "a" !== _c(a.nodeName) || (b = a)
				}), b
			}

			function g() {
				var a, d = c.hash();
				d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
			}

			var h = b.document;
			return a && d.$watch(function () {
				return c.hash()
			}, function () {
				d.$evalAsync(g)
			}), g
		}]
	}

	function Fb(a, b, d, e) {
		function g(a) {
			try {
				a.apply(null, N(arguments, 1))
			} finally {
				if (s--, 0 === s)for (; t.length;)try {
					t.pop()()
				} catch (b) {
					d.error(b)
				}
			}
		}

		function h(a, b) {
			!function c() {
				f(w, function (a) {
					a()
				}), v = b(c, a)
			}()
		}

		function i() {
			z = null, x != j.url() && (x = j.url(), f(A, function (a) {
				a(j.url())
			}))
		}

		var j = this, k = b[0], l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, q = {};
		j.isMock = !1;
		var s = 0, t = [];
		j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function () {
			s++
		}, j.notifyWhenNoOutstandingRequests = function (a) {
			f(w, function (a) {
				a()
			}), 0 === s ? a() : t.push(a)
		};
		var v, w = [];
		j.addPollFn = function (a) {
			return r(v) && h(100, n), w.push(a), a
		};
		var x = l.href, y = b.find("base"), z = null;
		j.url = function (b, c) {
			if (l !== a.location && (l = a.location), b) {
				if (x == b)return;
				return x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j
			}
			return z || l.href.replace(/%27/g, "'")
		};
		var A = [], B = !1;
		j.onUrlChange = function (b) {
			return B || (e.history && ed(a).on("popstate", i), e.hashchange ? ed(a).on("hashchange", i) : j.addPollFn(i), B = !0), A.push(b), b
		}, j.baseHref = function () {
			var a = y.attr("href");
			return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
		};
		var C = {}, D = "", E = j.baseHref();
		j.cookies = function (a, b) {
			var e, f, g, h, i;
			if (!a) {
				if (k.cookie !== D)for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++)g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
				return C
			}
			b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
		}, j.defer = function (a, b) {
			var c;
			return s++, c = n(function () {
				delete q[c], g(a)
			}, b || 0), q[c] = !0, c
		}, j.defer.cancel = function (a) {
			return q[a] ? (delete q[a], p(a), g(o), !0) : !1
		}
	}

	function Gb() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
			return new Fb(a, d, b, c)
		}]
	}

	function Hb() {
		this.$get = function () {
			function a(a, c) {
				function e(a) {
					a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
				}

				function f(a, b) {
					a != b && (a && (a.p = b), b && (b.n = a))
				}

				if (a in b)throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
				var g = 0, h = l({}, c, {id: a}), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
				return b[a] = {put: function (a, b) {
					var c = k[a] || (k[a] = {key: a});
					return e(c), r(b) ? void 0 : (a in i || g++, i[a] = b, g > j && this.remove(n.key), b)
				}, get: function (a) {
					var b = k[a];
					if (b)return e(b), i[a]
				}, remove: function (a) {
					var b = k[a];
					b && (b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a], delete i[a], g--)
				}, removeAll: function () {
					i = {}, g = 0, k = {}, m = n = null
				}, destroy: function () {
					i = null, h = null, k = null, delete b[a]
				}, info: function () {
					return l({}, h, {size: g})
				}}
			}

			var b = {};
			return a.info = function () {
				var a = {};
				return f(b, function (b, c) {
					a[c] = b.info()
				}), a
			}, a.get = function (a) {
				return b[a]
			}, a
		}
	}

	function Ib() {
		this.$get = ["$cacheFactory", function (a) {
			return a("templates")
		}]
	}

	function Jb(a) {
		var d = {}, e = "Directive", g = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, h = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, j = /^\s*(https?|ftp|mailto|tel|file):/, k = /^\s*(https?|ftp|file):|data:image\//, m = /^(on[a-z]+|formaction)$/;
		this.directive = function o(b, c) {
			return db(b, "directive"), u(b) ? (bb(c, "directiveFactory"), d.hasOwnProperty(b) || (d[b] = [], a.factory(b + e, ["$injector", "$exceptionHandler", function (a, c) {
				var e = [];
				return f(d[b], function (d, f) {
					try {
						var g = a.invoke(d);
						y(g) ? g = {compile: q(g)} : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || "A", e.push(g)
					} catch (h) {
						c(h)
					}
				}), e
			}])), d[b].push(c)) : f(b, i(o)), this
		}, this.aHrefSanitizationWhitelist = function (a) {
			return s(a) ? (j = a, this) : j
		}, this.imgSrcSanitizationWhitelist = function (a) {
			return s(a) ? (k = a, this) : k
		}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", function (a, i, o, r, s, v, w, z, A, B, C) {
			function D(a, b, c, d, e) {
				a instanceof ed || (a = ed(a)), f(a, function (b, c) {
					3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = ed(b).wrap("<span></span>").parent()[0])
				});
				var g = F(a, b, a, c, d, e);
				return function (b, c, d) {
					bb(b, "scope");
					var e = c ? zd.clone.call(a) : a;
					f(d, function (a, b) {
						e.data("$" + b + "Controller", a)
					});
					for (var h = 0, i = e.length; i > h; h++) {
						var j = e[h];
						(1 == j.nodeType || 9 == j.nodeType) && e.eq(h).data("$scope", b)
					}
					return E(e, "ng-scope"), c && c(e, b), g && g(b, e, e), e
				}
			}

			function E(a, b) {
				try {
					a.addClass(b)
				} catch (c) {
				}
			}

			function F(a, b, d, e, f, g) {
				function h(a, d, e, f) {
					var g, h, i, j, k, l, m, o, p, q = [];
					for (m = 0, o = d.length; o > m; m++)q.push(d[m]);
					for (m = 0, p = 0, o = n.length; o > m; p++)i = q[p], g = n[m++], h = n[m++], j = ed(i), g ? (g.scope ? (k = a.$new(), j.data("$scope", k), E(j, "ng-scope")) : k = a, l = g.transclude, l || !f && b ? g(h, k, i, e, G(a, l || b)) : g(h, k, i, c, f)) : h && h(a, i.childNodes, c, f)
				}

				for (var i, j, k, l, m, n = [], o = 0; o < a.length; o++)l = new $, k = H(a[o], [], l, 0 === o ? e : c, f), i = k.length ? L(k, a[o], l, b, d, null, [], [], g) : null, j = i && i.terminal || !a[o].childNodes || !a[o].childNodes.length ? null : F(a[o].childNodes, i ? i.transclude : b), n.push(i), n.push(j), m = m || i || j, g = null;
				return m ? h : null
			}

			function G(a, b) {
				return function (c, d, e) {
					var f = !1;
					c || (c = a.$new(), c.$$transcluded = !0, f = !0);
					var g = b(c, d, e);
					return f && g.on("$destroy", O(c, c.$destroy)), g
				}
			}

			function H(a, b, c, d, e) {
				var f, i, j = a.nodeType, k = c.$attr;
				switch (j) {
					case 1:
						P(b, Kb(hd(a).toLowerCase()), "E", d, e);
						for (var l, m, n, o, p, q = a.attributes, r = 0, s = q && q.length; s > r; r++) {
							var t = !1, v = !1;
							if (l = q[r], !dd || dd >= 8 || l.specified) {
								m = l.name, o = Kb(m), eb.test(o) && (m = _(o.substr(6), "-"));
								var w = o.replace(/(Start|End)$/, "");
								o === w + "Start" && (t = m, v = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = Kb(m.toLowerCase()), k[n] = m, c[n] = p = od(dd && "href" == m ? decodeURIComponent(a.getAttribute(m, 2)) : l.value), yb(a, n) && (c[n] = !0), X(a, b, p, n), P(b, n, "A", d, e, t, v)
							}
						}
						if (i = a.className, u(i) && "" !== i)for (; f = h.exec(i);)n = Kb(f[2]), P(b, n, "C", d, e) && (c[n] = od(f[3])), i = i.substr(f.index + f[0].length);
						break;
					case 3:
						V(b, a.nodeValue);
						break;
					case 8:
						try {
							f = g.exec(a.nodeValue), f && (n = Kb(f[1]), P(b, n, "M", d, e) && (c[n] = od(f[2])))
						} catch (x) {
						}
				}
				return b.sort(S), b
			}

			function I(a, b, c) {
				var d = [], e = 0;
				if (b && a.hasAttribute && a.hasAttribute(b)) {
					do {
						if (!a)throw Jd("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
						1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
					} while (e > 0)
				} else d.push(a);
				return ed(d)
			}

			function K(a, b, c) {
				return function (d, e, f, g, h) {
					return e = I(e[0], b, c), a(d, e, f, g, h)
				}
			}

			function L(a, d, e, g, h, j, k, l, m) {
				function n(a, b, c, d) {
					a && (c && (a = K(a, c, d)), a.require = s.require, (L === s || s.$$isolateScope) && (a = Z(a, {isolateScope: !0})), k.push(a)), b && (c && (b = K(b, c, d)), b.require = s.require, (L === s || s.$$isolateScope) && (b = Z(b, {isolateScope: !0})), l.push(b))
				}

				function p(a, b, c) {
					var d, e = "data", g = !1;
					if (u(a)) {
						for (; "^" == (d = a.charAt(0)) || "?" == d;)a = a.substr(1), "^" == d && (e = "inheritedData"), g = g || "?" == d;
						if (d = null, c && "data" === e && (d = c[a]), d = d || b[e]("$" + a + "Controller"), !d && !g)throw Jd("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, z);
						return d
					}
					return x(a) && (d = [], f(a, function (a) {
						d.push(p(a, b, c))
					})), d
				}

				function q(a, b, g, h, j) {
					function m(a, b) {
						var d;
						return arguments.length < 2 && (b = a, a = c), V && (d = z), j(a, b, d)
					}

					var n, q, r, s, t, u, x, y, z = {};
					if (n = d === g ? e : J(e, new $(ed(g), e.$attr)), q = n.$$element, L) {
						var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/, B = ed(g);
						x = b.$new(!0), O && O === L.$$originalDirective ? B.data("$isolateScope", x) : B.data("$isolateScopeNoTemplate", x), E(B, "ng-isolate-scope"), f(L.scope, function (a, c) {
							var d, e, f, g = a.match(A) || [], h = g[3] || c, j = "?" == g[2], k = g[1];
							switch (x.$$isolateBindings[c] = k + h, k) {
								case"@":
									n.$observe(h, function (a) {
										x[c] = a
									}), n.$$observers[h].$$scope = b, n[h] && (x[c] = i(n[h])(b));
									break;
								case"=":
									if (j && !n[h])return;
									e = v(n[h]), f = e.assign || function () {
										throw d = x[c] = e(b), Jd("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", n[h], L.name)
									}, d = x[c] = e(b), x.$watch(function () {
										var a = e(b);
										return a !== x[c] && (a !== d ? d = x[c] = a : f(b, a = d = x[c])), a
									});
									break;
								case"&":
									e = v(n[h]), x[c] = function (a) {
										return e(b, a)
									};
									break;
								default:
									throw Jd("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", L.name, c, a)
							}
						})
					}
					for (y = j && m, G && f(G, function (a) {
						var c, d = {$scope: a === L || a.$$isolateScope ? x : b, $element: q, $attrs: n, $transclude: y};
						u = a.controller, "@" == u && (u = n[a.name]), c = w(u, d), z[a.name] = c, V || q.data("$" + a.name + "Controller", c), a.controllerAs && (d.$scope[a.controllerAs] = c)
					}), r = 0, s = k.length; s > r; r++)try {
						t = k[r], t(t.isolateScope ? x : b, q, n, t.require && p(t.require, q, z), y)
					} catch (C) {
						o(C, T(q))
					}
					var D = b;
					for (L && (L.template || null === L.templateUrl) && (D = x), a && a(D, g.childNodes, c, j), r = l.length - 1; r >= 0; r--)try {
						t = l[r], t(t.isolateScope ? x : b, q, n, t.require && p(t.require, q, z), y)
					} catch (C) {
						o(C, T(q))
					}
				}

				m = m || {};
				for (var r, s, z, A, B, C, F = -Number.MAX_VALUE, G = m.controllerDirectives, L = m.newIsolateScopeDirective, O = m.templateDirective, P = m.nonTlbTranscludeDirective, S = !1, V = !1, W = e.$$element = ed(d), X = j, _ = g, ab = 0, bb = a.length; bb > ab; ab++) {
					s = a[ab];
					var cb = s.$$start, eb = s.$$end;
					if (cb && (W = I(d, cb, eb)), A = c, F > s.priority)break;
					if ((C = s.scope) && (r = r || s, s.templateUrl || (U("new/isolated scope", L, s, W), t(C) && (L = s))), z = s.name, !s.templateUrl && s.controller && (C = s.controller, G = G || {}, U("'" + z + "' controller", G[z], s, W), G[z] = s), (C = s.transclude) && (S = !0, s.$$tlb || (U("transclusion", P, s, W), P = s), "element" == C ? (V = !0, F = s.priority, A = I(d, cb, eb), W = e.$$element = ed(b.createComment(" " + z + ": " + e[z] + " ")), d = W[0], Y(h, ed(N(A)), d), _ = D(A, g, F, X && X.name, {nonTlbTranscludeDirective: P})) : (A = ed(mb(d)).contents(), W.html(""), _ = D(A, g))), s.template)if (U("template", O, s, W), O = s, C = y(s.template) ? s.template(W, e) : s.template, C = db(C), s.replace) {
						if (X = s, A = ed("<div>" + od(C) + "</div>").contents(), d = A[0], 1 != A.length || 1 !== d.nodeType)throw Jd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", z, "");
						Y(h, W, d);
						var fb = {$attr: {}}, gb = H(d, [], fb), hb = a.splice(ab + 1, a.length - (ab + 1));
						L && M(gb), a = a.concat(gb).concat(hb), Q(e, fb), bb = a.length
					} else W.html(C);
					if (s.templateUrl)U("template", O, s, W), O = s, s.replace && (X = s), q = R(a.splice(ab, a.length - ab), W, e, h, _, k, l, {controllerDirectives: G, newIsolateScopeDirective: L, templateDirective: O, nonTlbTranscludeDirective: P}), bb = a.length; else if (s.compile)try {
						B = s.compile(W, e, _), y(B) ? n(null, B, cb, eb) : B && n(B.pre, B.post, cb, eb)
					} catch (ib) {
						o(ib, T(W))
					}
					s.terminal && (q.terminal = !0, F = Math.max(F, s.priority))
				}
				return q.scope = r && r.scope === !0, q.transclude = S && _, q
			}

			function M(a) {
				for (var b = 0, c = a.length; c > b; b++)a[b] = n(a[b], {$$isolateScope: !0})
			}

			function P(b, f, g, h, i, j, k) {
				if (f === i)return null;
				var l = null;
				if (d.hasOwnProperty(f))for (var m, p = a.get(f + e), q = 0, r = p.length; r > q; q++)try {
					m = p[q], (h === c || h > m.priority) && -1 != m.restrict.indexOf(g) && (j && (m = n(m, {$$start: j, $$end: k})), b.push(m), l = m)
				} catch (s) {
					o(s)
				}
				return l
			}

			function Q(a, b) {
				var c = b.$attr, d = a.$attr, e = a.$$element;
				f(a, function (d, e) {
					"$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
				}), f(b, function (b, f) {
					"class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
				})
			}

			function R(a, b, c, d, e, g, h, i) {
				var j, k, m = [], n = b[0], o = a.shift(), p = l({}, o, {templateUrl: null, transclude: null, replace: null, $$originalDirective: o}), q = y(o.templateUrl) ? o.templateUrl(b, c) : o.templateUrl;
				return b.html(""), r.get(B.getTrustedResourceUrl(q), {cache: s}).success(function (l) {
					var r, s, u, v;
					if (l = db(l), o.replace) {
						if (u = ed("<div>" + od(l) + "</div>").contents(), r = u[0], 1 != u.length || 1 !== r.nodeType)throw Jd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", o.name, q);
						s = {$attr: {}}, Y(d, b, r);
						var w = H(r, [], s);
						t(o.scope) && M(w), a = w.concat(a), Q(c, s)
					} else r = n, b.html(l);
					for (a.unshift(p), j = L(a, r, c, e, b, o, g, h, i), f(d, function (a, c) {
						a == r && (d[c] = b[0])
					}), k = F(b[0].childNodes, e); m.length;) {
						var x = m.shift(), y = m.shift(), z = m.shift(), A = m.shift(), B = b[0];
						y !== n && (B = mb(r), Y(z, ed(y), B)), v = j.transclude ? G(x, j.transclude) : A, j(k, x, B, d, v)
					}
					m = null
				}).error(function (a, b, c, d) {
					throw Jd("tpload", "Failed to load template: {0}", d.url)
				}), function (a, b, c, d, e) {
					m ? (m.push(b), m.push(c), m.push(d), m.push(e)) : j(k, b, c, d, e)
				}
			}

			function S(a, b) {
				var c = b.priority - a.priority;
				return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
			}

			function U(a, b, c, d) {
				if (b)throw Jd("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
			}

			function V(a, b) {
				var c = i(b, !0);
				c && a.push({priority: 0, compile: q(function (a, b) {
					var d = b.parent(), e = d.data("$binding") || [];
					e.push(c), E(d.data("$binding", e), "ng-binding"), a.$watch(c, function (a) {
						b[0].nodeValue = a
					})
				})})
			}

			function W(a, b) {
				return"xlinkHref" == b || "IMG" != hd(a) && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
			}

			function X(a, b, c, d) {
				var e = i(c, !0);
				if (e) {
					if ("multiple" === d && "SELECT" === hd(a))throw Jd("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
					b.push({priority: 100, compile: function () {
						return{pre: function (b, c, f) {
							var g = f.$$observers || (f.$$observers = {});
							if (m.test(d))throw Jd("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
							e = i(f[d], !0, W(a, d)), e && (f[d] = e(b), (g[d] || (g[d] = [])).$$inter = !0, (f.$$observers && f.$$observers[d].$$scope || b).$watch(e, function (a) {
								f.$set(d, a)
							}))
						}}
					}})
				}
			}

			function Y(a, c, d) {
				var e, f, g = c[0], h = c.length, i = g.parentNode;
				if (a)for (e = 0, f = a.length; f > e; e++)if (a[e] == g) {
					a[e++] = d;
					for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++)l > k ? a[j] = a[k] : delete a[j];
					a.length -= h - 1;
					break
				}
				i && i.replaceChild(d, g);
				var m = b.createDocumentFragment();
				m.appendChild(g), d[ed.expando] = g[ed.expando];
				for (var n = 1, o = c.length; o > n; n++) {
					var p = c[n];
					ed(p).remove(), m.appendChild(p), delete c[n]
				}
				c[0] = d, c.length = 1
			}

			function Z(a, b) {
				return l(function () {
					return a.apply(null, arguments)
				}, a, b)
			}

			var $ = function (a, b) {
				this.$$element = a, this.$attr = b || {}
			};
			$.prototype = {$normalize: Kb, $addClass: function (a) {
				a && a.length > 0 && C.addClass(this.$$element, a)
			}, $removeClass: function (a) {
				a && a.length > 0 && C.removeClass(this.$$element, a)
			}, $set: function (a, b, d, e) {
				function g(a, b) {
					var c = [], d = a.split(/\s+/), e = b.split(/\s+/);
					a:for (var f = 0; f < d.length; f++) {
						for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
						c.push(g)
					}
					return c
				}

				if ("class" == a) {
					b = b || "";
					var h = this.$$element.attr("class") || "";
					this.$removeClass(g(h, b).join(" ")), this.$addClass(g(b, h).join(" "))
				} else {
					var i, l, m = yb(this.$$element[0], a);
					m && (this.$$element.prop(a, b), e = m), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = _(a, "-"))), l = hd(this.$$element), ("A" === l && "href" === a || "IMG" === l && "src" === a) && (!dd || dd >= 8) && (i = Ac(b).href, "" !== i && ("href" === a && !i.match(j) || "src" === a && !i.match(k)) && (this[a] = b = "unsafe:" + i)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b))
				}
				var n = this.$$observers;
				n && f(n[a], function (a) {
					try {
						a(b)
					} catch (c) {
						o(c)
					}
				})
			}, $observe: function (a, b) {
				var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
				return e.push(b), z.$evalAsync(function () {
					e.$$inter || b(c[a])
				}), b
			}};
			var ab = i.startSymbol(), cb = i.endSymbol(), db = "{{" == ab || "}}" == cb ? p : function (a) {
				return a.replace(/\{\{/g, ab).replace(/}}/g, cb)
			}, eb = /^ngAttr[A-Z]/;
			return D
		}]
	}

	function Kb(a) {
		return jb(a.replace(Kd, ""))
	}

	function Lb() {
		var a = {}, b = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function (b, c) {
			db(b, "controller"), t(b) ? l(a, b) : a[b] = c
		}, this.$get = ["$injector", "$window", function (c, e) {
			return function (f, g) {
				var h, i, j, k;
				if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : eb(g.$scope, j, !0) || eb(e, j, !0), cb(f, j, !0)), h = c.instantiate(f, g), k) {
					if (!g || "object" != typeof g.$scope)throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
					g.$scope[k] = h
				}
				return h
			}
		}]
	}

	function Mb() {
		this.$get = ["$window", function (a) {
			return ed(a.document)
		}]
	}

	function Nb() {
		this.$get = ["$log", function (a) {
			return function () {
				a.error.apply(a, arguments)
			}
		}]
	}

	function Ob(a) {
		var b, c, d, e = {};
		return a ? (f(a.split("\n"), function (a) {
			d = a.indexOf(":"), b = _c(od(a.substr(0, d))), c = od(a.substr(d + 1)), b && (e[b] ? e[b] += ", " + c : e[b] = c)
		}), e) : e
	}

	function Pb(a) {
		var b = t(a) ? a : c;
		return function (c) {
			return b || (b = Ob(a)), c ? b[_c(c)] || null : b
		}
	}

	function Qb(a, b, c) {
		return y(c) ? c(a, b) : (f(c, function (c) {
			a = c(a, b)
		}), a)
	}

	function Rb(a) {
		return a >= 200 && 300 > a
	}

	function Sb() {
		var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, e = {"Content-Type": "application/json;charset=utf-8"}, g = this.defaults = {transformResponse: [function (c) {
			return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = R(c))), c
		}], transformRequest: [function (a) {
			return t(a) && !C(a) ? Q(a) : a
		}], headers: {common: {Accept: "application/json, text/plain, */*"}, post: e, put: e, patch: e}, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"}, i = this.interceptors = [], j = this.responseInterceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, d, e, k, m) {
			function n(a) {
				function d(a) {
					var b = l({}, a, {data: Qb(a.data, a.headers, h.transformResponse)});
					return Rb(a.status) ? b : k.reject(b)
				}

				function e(a) {
					function b(a) {
						var b;
						f(a, function (c, d) {
							y(c) && (b = c(), null != b ? a[d] = b : delete a[d])
						})
					}

					var c, d, e, h = g.headers, i = l({}, a.headers);
					h = l({}, h.common, h[_c(a.method)]), b(h), b(i);
					a:for (c in h) {
						d = _c(c);
						for (e in i)if (_c(e) === d)continue a;
						i[c] = h[c]
					}
					return i
				}

				var h = {transformRequest: g.transformRequest, transformResponse: g.transformResponse}, i = e(a);
				l(h, a), h.headers = i, h.method = ad(h.method);
				var j = Bc(h.url) ? b.cookies()[h.xsrfCookieName || g.xsrfCookieName] : c;
				j && (i[h.xsrfHeaderName || g.xsrfHeaderName] = j);
				var m = function (a) {
					i = a.headers;
					var b = Qb(a.data, Pb(i), a.transformRequest);
					return r(a.data) && f(i, function (a, b) {
						"content-type" === _c(b) && delete i[b]
					}), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, b, i).then(d, d)
				}, n = [m, c], o = k.when(h);
				for (f(z, function (a) {
					(a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError)
				}); n.length;) {
					var p = n.shift(), s = n.shift();
					o = o.then(p, s)
				}
				return o.success = function (a) {
					return o.then(function (b) {
						a(b.data, b.status, b.headers, h)
					}), o
				}, o.error = function (a) {
					return o.then(null, function (b) {
						a(b.data, b.status, b.headers, h)
					}), o
				}, o
			}

			function o() {
				f(arguments, function (a) {
					n[a] = function (b, c) {
						return n(l(c || {}, {method: a, url: b}))
					}
				})
			}

			function p() {
				f(arguments, function (a) {
					n[a] = function (b, c, d) {
						return n(l(d || {}, {method: a, url: b, data: c}))
					}
				})
			}

			function q(b, c, d) {
				function f(a, b, c) {
					j && (Rb(a) ? j.put(p, [a, b, Ob(c)]) : j.remove(p)), h(b, a, c), e.$$phase || e.$apply()
				}

				function h(a, c, d) {
					c = Math.max(c, 0), (Rb(c) ? m.resolve : m.reject)({data: a, status: c, headers: Pb(d), config: b})
				}

				function i() {
					var a = G(n.pendingRequests, b);
					-1 !== a && n.pendingRequests.splice(a, 1)
				}

				var j, l, m = k.defer(), o = m.promise, p = v(b.url, b.params);
				if (n.pendingRequests.push(b), o.then(i, i), (b.cache || g.cache) && b.cache !== !1 && "GET" == b.method && (j = t(b.cache) ? b.cache : t(g.cache) ? g.cache : w), j)if (l = j.get(p), s(l)) {
					if (l.then)return l.then(i, i), l;
					x(l) ? h(l[1], l[0], I(l[2])) : h(l, 200, {})
				} else j.put(p, o);
				return r(l) && a(b.method, p, c, f, d, b.timeout, b.withCredentials, b.responseType), o
			}

			function v(a, b) {
				if (!b)return a;
				var c = [];
				return h(b, function (a, b) {
					null === a || r(a) || (x(a) || (a = [a]), f(a, function (a) {
						t(a) && (a = Q(a)), c.push(Y(b) + "=" + Y(a))
					}))
				}), a + (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")
			}

			var w = d("$http"), z = [];
			return f(i, function (a) {
				z.unshift(u(a) ? m.get(a) : m.invoke(a))
			}), f(j, function (a, b) {
				var c = u(a) ? m.get(a) : m.invoke(a);
				z.splice(b, 0, {response: function (a) {
					return c(k.when(a))
				}, responseError: function (a) {
					return c(k.reject(a))
				}})
			}), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put"), n.defaults = g, n
		}]
	}

	function Tb() {
		this.$get = ["$browser", "$window", "$document", function (a, b, c) {
			return Ub(a, Ld, a.defer, b.angular.callbacks, c[0], b.location.protocol.replace(":", ""))
		}]
	}

	function Ub(a, b, c, d, e, g) {
		function h(a, b) {
			var c = e.createElement("script"), d = function () {
				e.body.removeChild(c), b && b()
			};
			return c.type = "text/javascript", c.src = a, dd ? c.onreadystatechange = function () {
				/loaded|complete/.test(c.readyState) && d()
			} : c.onload = c.onerror = d, e.body.appendChild(c), d
		}

		return function (e, i, j, k, l, m, n, p) {
			function q() {
				t = -1, v && v(), w && w.abort()
			}

			function r(b, d, e, f) {
				var h = g || Ac(i).protocol;
				x && c.cancel(x), v = w = null, d = "file" == h ? e ? 200 : 404 : d, d = 1223 == d ? 204 : d, b(d, e, f), a.$$completeOutstandingRequest(o)
			}

			var t;
			if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == _c(e)) {
				var u = "_" + (d.counter++).toString(36);
				d[u] = function (a) {
					d[u].data = a
				};
				var v = h(i.replace("JSON_CALLBACK", "angular.callbacks." + u), function () {
					d[u].data ? r(k, 200, d[u].data) : r(k, t || -2), delete d[u]
				})
			} else {
				var w = new b;
				w.open(e, i, !0), f(l, function (a, b) {
					s(a) && w.setRequestHeader(b, a)
				}), w.onreadystatechange = function () {
					if (4 == w.readyState) {
						var a = w.getAllResponseHeaders();
						r(k, t || w.status, w.responseType ? w.response : w.responseText, a)
					}
				}, n && (w.withCredentials = !0), p && (w.responseType = p), w.send(j || null)
			}
			if (m > 0)var x = c(q, m); else m && m.then && m.then(q)
		}
	}

	function Vb() {
		var a = "{{", b = "}}";
		this.startSymbol = function (b) {
			return b ? (a = b, this) : a
		}, this.endSymbol = function (a) {
			return a ? (b = a, this) : b
		}, this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
			function f(f, i, j) {
				for (var k, l, m, n, o = 0, p = [], q = f.length, s = !1, t = []; q > o;)-1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, s = !0) : (o != q && p.push(f.substring(o)), o = q);
				if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1)throw Md("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
				return!i || s ? (t.length = q, m = function (a) {
					try {
						for (var b, c = 0, g = q; g > c; c++)"function" == typeof(b = p[c]) && (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null === b || r(b) ? b = "" : "string" != typeof b && (b = Q(b))), t[c] = b;
						return t.join("")
					} catch (h) {
						var i = Md("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
						d(i)
					}
				}, m.exp = f, m.parts = p, m) : void 0
			}

			var g = a.length, h = b.length;
			return f.startSymbol = function () {
				return a
			}, f.endSymbol = function () {
				return b
			}, f
		}]
	}

	function Wb() {
		this.$get = ["$rootScope", "$window", "$q", function (a, b, c) {
			function d(d, f, g, h) {
				var i = b.setInterval, j = b.clearInterval, k = c.defer(), l = k.promise, m = 0, n = s(h) && !h;
				return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function () {
					k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply()
				}, f), e[l.$$intervalId] = k, l
			}

			var e = {};
			return d.cancel = function (a) {
				return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
			}, d
		}]
	}

	function Xb() {
		this.$get = function () {
			return{id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [
				{minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3},
				{minInt: 1, minFrac: 2, maxFrac: 2, posPre: "¤", posSuf: "", negPre: "(¤", negSuf: ")", gSize: 3, lgSize: 3}
			], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a"}, pluralCat: function (a) {
				return 1 === a ? "one" : "other"
			}}
		}
	}

	function Yb(a) {
		for (var b = a.split("/"), c = b.length; c--;)b[c] = X(b[c]);
		return b.join("/")
	}

	function Zb(a, b, c) {
		var d = Ac(a, c);
		b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || Od[d.protocol] || null
	}

	function $b(a, b, c) {
		var d = "/" !== a.charAt(0);
		d && (a = "/" + a);
		var e = Ac(a, c);
		b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = V(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
	}

	function _b(a, b) {
		return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
	}

	function ac(a) {
		var b = a.indexOf("#");
		return-1 == b ? a : a.substr(0, b)
	}

	function bc(a) {
		return a.substr(0, ac(a).lastIndexOf("/") + 1)
	}

	function cc(a) {
		return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
	}

	function dc(a, b) {
		this.$$html5 = !0, b = b || "";
		var d = bc(a);
		Zb(a, this, a), this.$$parse = function (b) {
			var c = _b(d, b);
			if (!u(c))throw Pd("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
			$b(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose()
		}, this.$$compose = function () {
			var a = W(this.$$search), b = this.$$hash ? "#" + X(this.$$hash) : "";
			this.$$url = Yb(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
		}, this.$$rewrite = function (e) {
			var f, g;
			return(f = _b(a, e)) !== c ? (g = f, (f = _b(b, f)) !== c ? d + (_b("/", f) || f) : a + g) : (f = _b(d, e)) !== c ? d + f : d == e + "/" ? d : void 0
		}
	}

	function ec(a, b) {
		var c = bc(a);
		Zb(a, this, a), this.$$parse = function (d) {
			var e = _b(a, d) || _b(c, d), f = "#" == e.charAt(0) ? _b(b, e) : this.$$html5 ? e : "";
			if (!u(f))throw Pd("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
			$b(f, this, a), this.$$compose()
		}, this.$$compose = function () {
			var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
			this.$$url = Yb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
		}, this.$$rewrite = function (b) {
			return ac(a) == ac(b) ? b : void 0
		}
	}

	function fc(a, b) {
		this.$$html5 = !0, ec.apply(this, arguments);
		var c = bc(a);
		this.$$rewrite = function (d) {
			var e;
			return a == ac(d) ? d : (e = _b(c, d)) ? a + b + e : c === d + "/" ? c : void 0
		}
	}

	function gc(a) {
		return function () {
			return this[a]
		}
	}

	function hc(a, b) {
		return function (c) {
			return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
		}
	}

	function ic() {
		var b = "", c = !1;
		this.hashPrefix = function (a) {
			return s(a) ? (b = a, this) : b
		}, this.html5Mode = function (a) {
			return s(a) ? (c = a, this) : c
		}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (d, e, f, g) {
			function h(a) {
				d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
			}

			var i, j, k, l = e.baseHref(), m = e.url();
			c ? (k = cc(m) + (l || "/"), j = f.history ? dc : fc) : (k = ac(m), j = ec), i = new j(k, "#" + b), i.$$parse(i.$$rewrite(m)), g.on("click", function (b) {
				if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
					for (var c = ed(b.target); "a" !== _c(c[0].nodeName);)if (c[0] === g[0] || !(c = c.parent())[0])return;
					var f = c.prop("href"), h = i.$$rewrite(f);
					f && !c.attr("target") && h && !b.isDefaultPrevented() && (b.preventDefault(), h != e.url() && (i.$$parse(h), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
				}
			}), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function (a) {
				if (i.absUrl() != a) {
					if (d.$broadcast("$locationChangeStart", a, i.absUrl()).defaultPrevented)return e.url(i.absUrl()), void 0;
					d.$evalAsync(function () {
						var b = i.absUrl();
						i.$$parse(a), h(b)
					}), d.$$phase || d.$digest()
				}
			});
			var n = 0;
			return d.$watch(function () {
				var a = e.url(), b = i.$$replace;
				return n && a == i.absUrl() || (n++, d.$evalAsync(function () {
					d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
				})), i.$$replace = !1, n
			}), i
		}]
	}

	function jc() {
		var a = !0, b = this;
		this.debugEnabled = function (b) {
			return s(b) ? (a = b, this) : a
		}, this.$get = ["$window", function (c) {
			function d(a) {
				return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
			}

			function e(a) {
				var b = c.console || {}, e = b[a] || b.log || o;
				return e.apply ? function () {
					var a = [];
					return f(arguments, function (b) {
						a.push(d(b))
					}), e.apply(b, a)
				} : function (a, b) {
					e(a, null == b ? "" : b)
				}
			}

			return{log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
				var c = e("debug");
				return function () {
					a && c.apply(b, arguments)
				}
			}()}
		}]
	}

	function kc(a, b) {
		if ("constructor" === a)throw Rd("isecfld", 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', b);
		return a
	}

	function lc(a, b) {
		if (a && a.constructor === a)throw Rd("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
		if (a && a.document && a.location && a.alert && a.setInterval)throw Rd("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
		if (a && (a.nodeName || a.on && a.find))throw Rd("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
		return a
	}

	function mc(a, b, d, e, f) {
		f = f || {};
		for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
			g = kc(h.shift(), e);
			var j = a[g];
			j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && (Qd(e), "$$v"in a || !function (a) {
				a.then(function (b) {
					a.$$v = b
				})
			}(a), a.$$v === c && (a.$$v = {}), a = a.$$v)
		}
		return g = kc(h.shift(), e), a[g] = d, d
	}

	function nc(a, b, d, e, f, g, h) {
		return kc(a, g), kc(b, g), kc(d, g), kc(e, g), kc(f, g), h.unwrapPromises ? function (h, i) {
			var j, k = i && i.hasOwnProperty(a) ? i : h;
			return null === k || k === c ? k : (k = k[a], k && k.then && (Qd(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
				j.$$v = a
			})), k = k.$$v), b && null !== k && k !== c ? (k = k[b], k && k.then && (Qd(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
				j.$$v = a
			})), k = k.$$v), d && null !== k && k !== c ? (k = k[d], k && k.then && (Qd(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
				j.$$v = a
			})), k = k.$$v), e && null !== k && k !== c ? (k = k[e], k && k.then && (Qd(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
				j.$$v = a
			})), k = k.$$v), f && null !== k && k !== c ? (k = k[f], k && k.then && (Qd(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
				j.$$v = a
			})), k = k.$$v), k) : k) : k) : k) : k)
		} : function (g, h) {
			var i = h && h.hasOwnProperty(a) ? h : g;
			return null === i || i === c ? i : (i = i[a], b && null !== i && i !== c ? (i = i[b], d && null !== i && i !== c ? (i = i[d], e && null !== i && i !== c ? (i = i[e], f && null !== i && i !== c ? i = i[f] : i) : i) : i) : i)
		}
	}

	function oc(a, b, d) {
		if (Xd.hasOwnProperty(a))return Xd[a];
		var e, g = a.split("."), h = g.length;
		if (b.csp)e = 6 > h ? nc(g[0], g[1], g[2], g[3], g[4], d, b) : function (a, e) {
			var f, i = 0;
			do f = nc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
			return f
		}; else {
			var i = "var l, fn, p;\n";
			f(g, function (a, c) {
				kc(a, d), i += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/\"/g, '\\"') + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
			}), i += "return s;";
			var j = new Function("s", "k", "pw", i);
			j.toString = function () {
				return i
			}, e = function (a, b) {
				return j(a, b, Qd)
			}
		}
		return"hasOwnProperty" !== a && (Xd[a] = e), e
	}

	function pc() {
		var a = {}, b = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0};
		this.unwrapPromises = function (a) {
			return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises
		}, this.logPromiseWarnings = function (a) {
			return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
		}, this.$get = ["$filter", "$sniffer", "$log", function (c, d, e) {
			return b.csp = d.csp, Qd = function (a) {
				b.logPromiseWarnings && !Sd.hasOwnProperty(a) && (Sd[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
			}, function (d) {
				var e;
				switch (typeof d) {
					case"string":
						if (a.hasOwnProperty(d))return a[d];
						var f = new Vd(b), g = new Wd(f, c, b);
						return e = g.parse(d, !1), "hasOwnProperty" !== d && (a[d] = e), e;
					case"function":
						return d;
					default:
						return o
				}
			}
		}]
	}

	function qc() {
		this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
			return rc(function (b) {
				a.$evalAsync(b)
			}, b)
		}]
	}

	function rc(a, b) {
		function d(a) {
			return a
		}

		function e(a) {
			return j(a)
		}

		function g(a) {
			var b = h(), c = 0, d = x(a) ? [] : {};
			return f(a, function (a, e) {
				c++, i(a).then(function (a) {
					d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
				}, function (a) {
					d.hasOwnProperty(e) || b.reject(a)
				})
			}), 0 === c && b.resolve(d), b.promise
		}

		var h = function () {
			var f, g, k = [];
			return g = {resolve: function (b) {
				if (k) {
					var d = k;
					k = c, f = i(b), d.length && a(function () {
						for (var a, b = 0, c = d.length; c > b; b++)a = d[b], f.then(a[0], a[1], a[2])
					})
				}
			}, reject: function (a) {
				g.resolve(j(a))
			}, notify: function (b) {
				if (k) {
					var c = k;
					k.length && a(function () {
						for (var a, d = 0, e = c.length; e > d; d++)a = c[d], a[2](b)
					})
				}
			}, promise: {then: function (a, c, g) {
				var i = h(), j = function (c) {
					try {
						i.resolve((y(a) ? a : d)(c))
					} catch (e) {
						i.reject(e), b(e)
					}
				}, l = function (a) {
					try {
						i.resolve((y(c) ? c : e)(a))
					} catch (d) {
						i.reject(d), b(d)
					}
				}, m = function (a) {
					try {
						i.notify((y(g) ? g : d)(a))
					} catch (c) {
						b(c)
					}
				};
				return k ? k.push([j, l, m]) : f.then(j, l, m), i.promise
			}, "catch": function (a) {
				return this.then(null, a)
			}, "finally": function (a) {
				function b(a, b) {
					var c = h();
					return b ? c.resolve(a) : c.reject(a), c.promise
				}

				function c(c, e) {
					var f = null;
					try {
						f = (a || d)()
					} catch (g) {
						return b(g, !1)
					}
					return f && y(f.then) ? f.then(function () {
						return b(c, e)
					}, function (a) {
						return b(a, !1)
					}) : b(c, e)
				}

				return this.then(function (a) {
					return c(a, !0)
				}, function (a) {
					return c(a, !1)
				})
			}}}
		}, i = function (b) {
			return b && y(b.then) ? b : {then: function (c) {
				var d = h();
				return a(function () {
					d.resolve(c(b))
				}), d.promise
			}}
		}, j = function (c) {
			return{then: function (d, f) {
				var g = h();
				return a(function () {
					try {
						g.resolve((y(f) ? f : e)(c))
					} catch (a) {
						g.reject(a), b(a)
					}
				}), g.promise
			}}
		}, k = function (c, f, g, k) {
			var l, m = h(), n = function (a) {
				try {
					return(y(f) ? f : d)(a)
				} catch (c) {
					return b(c), j(c)
				}
			}, o = function (a) {
				try {
					return(y(g) ? g : e)(a)
				} catch (c) {
					return b(c), j(c)
				}
			}, p = function (a) {
				try {
					return(y(k) ? k : d)(a)
				} catch (c) {
					b(c)
				}
			};
			return a(function () {
				i(c).then(function (a) {
					l || (l = !0, m.resolve(i(a).then(n, o, p)))
				}, function (a) {
					l || (l = !0, m.resolve(o(a)))
				}, function (a) {
					l || m.notify(p(a))
				})
			}), m.promise
		};
		return{defer: h, reject: j, when: k, all: g}
	}

	function sc() {
		var a = 10, b = d("$rootScope");
		this.digestTtl = function (b) {
			return arguments.length && (a = b), a
		}, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (c, d, f, g) {
			function h() {
				this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$isolateBindings = {}
			}

			function i(a) {
				if (n.$$phase)throw b("inprog", "{0} already in progress", n.$$phase);
				n.$$phase = a
			}

			function k() {
				n.$$phase = null
			}

			function l(a, b) {
				var c = f(a);
				return cb(c, b), c
			}

			function m() {
			}

			h.prototype = {constructor: h, $new: function (a) {
				var b, c;
				return a ? (c = new h, c.$root = this.$root, c.$$asyncQueue = this.$$asyncQueue, c.$$postDigestQueue = this.$$postDigestQueue) : (b = function () {
				}, b.prototype = this, c = new b, c.$id = j()), c["this"] = c, c.$$listeners = {}, c.$parent = this, c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c
			}, $watch: function (a, b, c) {
				var d = this, e = l(a, "watch"), f = d.$$watchers, g = {fn: b, last: m, get: e, exp: a, eq: !!c};
				if (!y(b)) {
					var h = l(b || o, "listener");
					g.fn = function (a, b, c) {
						h(c)
					}
				}
				if ("string" == typeof a && e.constant) {
					var i = g.fn;
					g.fn = function (a, b, c) {
						i.call(this, a, b, c), H(f, g)
					}
				}
				return f || (f = d.$$watchers = []), f.unshift(g), function () {
					H(f, g)
				}
			}, $watchCollection: function (a, b) {
				function c() {
					h = k(i);
					var a, b;
					if (t(h))if (e(h)) {
						g !== l && (g = l, n = g.length = 0, j++), a = h.length, n !== a && (j++, g.length = n = a);
						for (var c = 0; a > c; c++)g[c] !== h[c] && (j++, g[c] = h[c])
					} else {
						g !== m && (g = m = {}, n = 0, j++), a = 0;
						for (b in h)h.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? g[b] !== h[b] && (j++, g[b] = h[b]) : (n++, g[b] = h[b], j++));
						if (n > a) {
							j++;
							for (b in g)g.hasOwnProperty(b) && !h.hasOwnProperty(b) && (n--, delete g[b])
						}
					} else g !== h && (g = h, j++);
					return j
				}

				function d() {
					b(h, g, i)
				}

				var g, h, i = this, j = 0, k = f(a), l = [], m = {}, n = 0;
				return this.$watch(c, d)
			}, $digest: function () {
				var c, e, f, g, h, j, l, n, o, p, q, r = this.$$asyncQueue, s = this.$$postDigestQueue, t = a, u = this, v = [];
				i("$digest");
				do {
					for (j = !1, n = u; r.length;)try {
						q = r.shift(), q.scope.$eval(q.expression)
					} catch (w) {
						d(w)
					}
					do {
						if (g = n.$$watchers)for (h = g.length; h--;)try {
							c = g[h], c && (e = c.get(n)) !== (f = c.last) && !(c.eq ? K(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f)) && (j = !0, c.last = c.eq ? I(e) : e, c.fn(e, f === m ? e : f, n), 5 > t && (o = 4 - t, v[o] || (v[o] = []), p = y(c.exp) ? "fn: " + (c.exp.name || c.exp.toString()) : c.exp, p += "; newVal: " + Q(e) + "; oldVal: " + Q(f), v[o].push(p)))
						} catch (w) {
							d(w)
						}
						if (!(l = n.$$childHead || n !== u && n.$$nextSibling))for (; n !== u && !(l = n.$$nextSibling);)n = n.$parent
					} while (n = l);
					if (j && !t--)throw k(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(v))
				} while (j || r.length);
				for (k(); s.length;)try {
					s.shift()()
				} catch (w) {
					d(w)
				}
			}, $destroy: function () {
				if (n != this && !this.$$destroyed) {
					var a = this.$parent;
					this.$broadcast("$destroy"), this.$$destroyed = !0, a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
				}
			}, $eval: function (a, b) {
				return f(a)(this, b)
			}, $evalAsync: function (a) {
				n.$$phase || n.$$asyncQueue.length || g.defer(function () {
					n.$$asyncQueue.length && n.$digest()
				}), this.$$asyncQueue.push({scope: this, expression: a})
			}, $$postDigest: function (a) {
				this.$$postDigestQueue.push(a)
			}, $apply: function (a) {
				try {
					return i("$apply"), this.$eval(a)
				} catch (b) {
					d(b)
				} finally {
					k();
					try {
						n.$digest()
					} catch (b) {
						throw d(b), b
					}
				}
			}, $on: function (a, b) {
				var c = this.$$listeners[a];
				return c || (this.$$listeners[a] = c = []), c.push(b), function () {
					c[G(c, b)] = null
				}
			}, $emit: function (a) {
				var b, c, e, f = [], g = this, h = !1, i = {name: a, targetScope: g, stopPropagation: function () {
					h = !0
				}, preventDefault: function () {
					i.defaultPrevented = !0
				}, defaultPrevented: !1}, j = M([i], arguments, 1);
				do {
					for (b = g.$$listeners[a] || f, i.currentScope = g, c = 0, e = b.length; e > c; c++)if (b[c])try {
						b[c].apply(null, j)
					} catch (k) {
						d(k)
					} else b.splice(c, 1), c--, e--;
					if (h)return i;
					g = g.$parent
				} while (g);
				return i
			}, $broadcast: function (a) {
				var b, c, e, f = this, g = f, h = f, i = {name: a, targetScope: f, preventDefault: function () {
					i.defaultPrevented = !0
				}, defaultPrevented: !1}, j = M([i], arguments, 1);
				do {
					for (g = h, i.currentScope = g, b = g.$$listeners[a] || [], c = 0, e = b.length; e > c; c++)if (b[c])try {
						b[c].apply(null, j)
					} catch (k) {
						d(k)
					} else b.splice(c, 1), c--, e--;
					if (!(h = g.$$childHead || g !== f && g.$$nextSibling))for (; g !== f && !(h = g.$$nextSibling);)g = g.$parent
				} while (g = h);
				return i
			}};
			var n = new h;
			return n
		}]
	}

	function tc(a) {
		return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
	}

	function uc(a) {
		if ("self" === a)return a;
		if (u(a)) {
			if (a.indexOf("***") > -1)throw Yd("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
			return a = tc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
		}
		if (z(a))return new RegExp("^" + a.source + "$");
		throw Yd("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
	}

	function vc(a) {
		var b = [];
		return s(a) && f(a, function (a) {
			b.push(uc(a))
		}), b
	}

	function wc() {
		this.SCE_CONTEXTS = Zd;
		var a = ["self"], b = [];
		this.resourceUrlWhitelist = function (b) {
			return arguments.length && (a = vc(b)), a
		}, this.resourceUrlBlacklist = function (a) {
			return arguments.length && (b = vc(a)), b
		}, this.$get = ["$log", "$document", "$injector", function (d, e, f) {
			function g(a, b) {
				return"self" === a ? Bc(b) : !!a.exec(b.href)
			}

			function h(c) {
				var d, e, f = Ac(c.toString()), h = !1;
				for (d = 0, e = a.length; e > d; d++)if (g(a[d], f)) {
					h = !0;
					break
				}
				if (h)for (d = 0, e = b.length; e > d; d++)if (g(b[d], f)) {
					h = !1;
					break
				}
				return h
			}

			function i(a) {
				var b = function (a) {
					this.$$unwrapTrustedValue = function () {
						return a
					}
				};
				return a && (b.prototype = new a), b.prototype.valueOf = function () {
					return this.$$unwrapTrustedValue()
				}, b.prototype.toString = function () {
					return this.$$unwrapTrustedValue().toString()
				}, b
			}

			function j(a, b) {
				var d = o.hasOwnProperty(a) ? o[a] : null;
				if (!d)throw Yd("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
				if (null === b || b === c || "" === b)return b;
				if ("string" != typeof b)throw Yd("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
				return new d(b)
			}

			function k(a) {
				return a instanceof n ? a.$$unwrapTrustedValue() : a
			}

			function l(a, b) {
				if (null === b || b === c || "" === b)return b;
				var d = o.hasOwnProperty(a) ? o[a] : null;
				if (d && b instanceof d)return b.$$unwrapTrustedValue();
				if (a === Zd.RESOURCE_URL) {
					if (h(b))return b;
					throw Yd("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
				}
				if (a === Zd.HTML)return m(b);
				throw Yd("unsafe", "Attempting to use an unsafe value in a safe context.")
			}

			var m = function () {
				throw Yd("unsafe", "Attempting to use an unsafe value in a safe context.")
			};
			f.has("$sanitize") && (m = f.get("$sanitize"));
			var n = i(), o = {};
			return o[Zd.HTML] = i(n), o[Zd.CSS] = i(n), o[Zd.URL] = i(n), o[Zd.JS] = i(n), o[Zd.RESOURCE_URL] = i(o[Zd.URL]), {trustAs: j, getTrusted: l, valueOf: k}
		}]
	}

	function xc() {
		var a = !0;
		this.enabled = function (b) {
			return arguments.length && (a = !!b), a
		}, this.$get = ["$parse", "$document", "$sceDelegate", function (b, d, e) {
			if (a && dd) {
				var g = d[0].documentMode;
				if (g !== c && 8 > g)throw Yd("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.")
			}
			var h = I(Zd);
			h.isEnabled = function () {
				return a
			}, h.trustAs = e.trustAs, h.getTrusted = e.getTrusted, h.valueOf = e.valueOf, a || (h.trustAs = h.getTrusted = function (a, b) {
				return b
			}, h.valueOf = p), h.parseAs = function (a, c) {
				var d = b(c);
				return d.literal && d.constant ? d : function (b, c) {
					return h.getTrusted(a, d(b, c))
				}
			};
			var i = h.parseAs, j = h.getTrusted, k = h.trustAs;
			return f(Zd, function (a, b) {
				var c = _c(b);
				h[jb("parse_as_" + c)] = function (b) {
					return i(a, b)
				}, h[jb("get_trusted_" + c)] = function (b) {
					return j(a, b)
				}, h[jb("trust_as_" + c)] = function (b) {
					return k(a, b)
				}
			}), h
		}]
	}

	function yc() {
		this.$get = ["$window", "$document", function (a, b) {
			var c, d, e = {}, f = m((/android (\d+)/.exec(_c((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|O|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
			if (j) {
				for (var n in j)if (d = i.exec(n)) {
					c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
					break
				}
				c || (c = "WebkitOpacity"in j && "webkit"), k = !!("transition"in j || c + "Transition"in j), l = !!("animation"in j || c + "Animation"in j), !f || k && l || (k = u(h.body.style.webkitTransition), l = u(h.body.style.webkitAnimation))
			}
			return{history: !(!a.history || !a.history.pushState || 4 > f || g), hashchange: "onhashchange"in a && (!h.documentMode || h.documentMode > 7), hasEvent: function (a) {
				if ("input" == a && 9 == dd)return!1;
				if (r(e[a])) {
					var b = h.createElement("div");
					e[a] = "on" + a in b
				}
				return e[a]
			}, csp: L(), vendorPrefix: c, transitions: k, animations: l, msie: dd}
		}]
	}

	function zc() {
		this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (a, b, c, d) {
			function e(e, g, h) {
				var i, j = c.defer(), k = j.promise, l = s(h) && !h;
				return i = b.defer(function () {
					try {
						j.resolve(e())
					} catch (b) {
						j.reject(b), d(b)
					} finally {
						delete f[k.$$timeoutId]
					}
					l || a.$apply()
				}, g), k.$$timeoutId = i, f[i] = j, k
			}

			var f = {};
			return e.cancel = function (a) {
				return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
			}, e
		}]
	}

	function Ac(a, b) {
		var c, d = a;
		return dd && ($d.setAttribute("href", d), d = $d.href), $d.setAttribute("href", d), c = Cc($d.pathname, a, b), c = "/" === c.charAt(0) ? c : "/" + c, {href: $d.href, protocol: $d.protocol ? $d.protocol.replace(/:$/, "") : "", host: $d.host, search: $d.search ? $d.search.replace(/^\?/, "") : "", hash: $d.hash ? $d.hash.replace(/^#/, "") : "", hostname: $d.hostname, port: $d.port, pathname: c}
	}

	function Bc(a) {
		var b = u(a) ? Ac(a) : a;
		return b.protocol === ae.protocol && b.host === ae.host
	}

	function Cc(a, b, c) {
		var d;
		return 0 === b.indexOf(c) && (b = b.replace(c, "")), _d.exec(b) ? a : (d = _d.exec(a), d ? d[1] : a)
	}

	function Dc() {
		this.$get = q(a)
	}

	function Ec(a) {
		function b(d, e) {
			if (t(d)) {
				var g = {};
				return f(d, function (a, c) {
					g[c] = b(c, a)
				}), g
			}
			return a.factory(d + c, e)
		}

		var c = "Filter";
		this.register = b, this.$get = ["$injector", function (a) {
			return function (b) {
				return a.get(b + c)
			}
		}], b("currency", Gc), b("date", Oc), b("filter", Fc), b("json", Pc), b("limitTo", Qc), b("lowercase", fe), b("number", Hc), b("orderBy", Rc), b("uppercase", ge)
	}

	function Fc() {
		return function (a, b, c) {
			if (!x(a))return a;
			var d = typeof c, e = [];
			e.check = function (a) {
				for (var b = 0; b < e.length; b++)if (!e[b](a))return!1;
				return!0
			}, "function" !== d && (c = "boolean" === d && c ? function (a, b) {
				return md.equals(a, b)
			} : function (a, b) {
				return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1
			});
			var f = function (a, b) {
				if ("string" == typeof b && "!" === b.charAt(0))return!f(a, b.substr(1));
				switch (typeof a) {
					case"boolean":
					case"number":
					case"string":
						return c(a, b);
					case"object":
						switch (typeof b) {
							case"object":
								return c(a, b);
							default:
								for (var d in a)if ("$" !== d.charAt(0) && f(a[d], b))return!0
						}
						return!1;
					case"array":
						for (var e = 0; e < a.length; e++)if (f(a[e], b))return!0;
						return!1;
					default:
						return!1
				}
			};
			switch (typeof b) {
				case"boolean":
				case"number":
				case"string":
					b = {$: b};
				case"object":
					for (var g in b)"$" == g ? !function () {
						if (b[g]) {
							var a = g;
							e.push(function (c) {
								return f(c, b[a])
							})
						}
					}() : !function () {
						if ("undefined" != typeof b[g]) {
							var a = g;
							e.push(function (c) {
								return f(eb(c, a), b[a])
							})
						}
					}();
					break;
				case"function":
					e.push(b);
					break;
				default:
					return a
			}
			for (var h = [], i = 0; i < a.length; i++) {
				var j = a[i];
				e.check(j) && h.push(j)
			}
			return h
		}
	}

	function Gc(a) {
		var b = a.NUMBER_FORMATS;
		return function (a, c) {
			return r(c) && (c = b.CURRENCY_SYM), Ic(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
		}
	}

	function Hc(a) {
		var b = a.NUMBER_FORMATS;
		return function (a, c) {
			return Ic(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
		}
	}

	function Ic(a, b, c, d, e) {
		if (isNaN(a) || !isFinite(a))return"";
		var f = 0 > a;
		a = Math.abs(a);
		var g = a + "", h = "", i = [], j = !1;
		if (-1 !== g.indexOf("e")) {
			var k = g.match(/([\d\.]+)e(-?)(\d+)/);
			k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0)
		}
		if (j)e > 0 && a > -1 && 1 > a && (h = a.toFixed(e)); else {
			var l = (g.split(be)[1] || "").length;
			r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
			var m = Math.pow(10, e);
			a = Math.round(a * m) / m;
			var n = ("" + a).split(be), o = n[0];
			n = n[1] || "";
			var p, q = 0, s = b.lgSize, t = b.gSize;
			if (o.length >= s + t)for (q = o.length - s, p = 0; q > p; p++)(q - p) % t === 0 && 0 !== p && (h += c), h += o.charAt(p);
			for (p = q; p < o.length; p++)(o.length - p) % s === 0 && 0 !== p && (h += c), h += o.charAt(p);
			for (; n.length < e;)n += "0";
			e && "0" !== e && (h += d + n.substr(0, e))
		}
		return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
	}

	function Jc(a, b, c) {
		var d = "";
		for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;)a = "0" + a;
		return c && (a = a.substr(a.length - b)), d + a
	}

	function Kc(a, b, c, d) {
		return c = c || 0, function (e) {
			var f = e["get" + a]();
			return(c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Jc(f, b, d)
		}
	}

	function Lc(a, b) {
		return function (c, d) {
			var e = c["get" + a](), f = ad(b ? "SHORT" + a : a);
			return d[f][e]
		}
	}

	function Mc(a) {
		var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? "+" : "";
		return c += Jc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Jc(Math.abs(b % 60), 2)
	}

	function Nc(a, b) {
		return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
	}

	function Oc(a) {
		function b(a) {
			var b;
			if (b = a.match(c)) {
				var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
				b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
				var i = m(b[4] || 0) - e, j = m(b[5] || 0) - f, k = m(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
				return h.call(d, i, j, k, l), d
			}
			return a
		}

		var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function (c, d) {
			var e, g, h = "", i = [];
			if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ee.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c))return c;
			for (; d;)g = de.exec(d), g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null);
			return f(i, function (b) {
				e = ce[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			}), h
		}
	}

	function Pc() {
		return function (a) {
			return Q(a, !0)
		}
	}

	function Qc() {
		return function (a, b) {
			if (!x(a) && !u(a))return a;
			if (b = m(b), u(a))return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
			var c, d, e = [];
			for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++)e.push(a[c]);
			return e
		}
	}

	function Rc(a) {
		return function (b, c, d) {
			function e(a, b) {
				for (var d = 0; d < c.length; d++) {
					var e = c[d](a, b);
					if (0 !== e)return e
				}
				return 0
			}

			function f(a, b) {
				return S(b) ? function (b, c) {
					return a(c, b)
				} : a
			}

			function g(a, b) {
				var c = typeof a, d = typeof b;
				return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
			}

			if (!x(b))return b;
			if (!c)return b;
			c = x(c) ? c : [c], c = E(c, function (b) {
				var c = !1, d = b || p;
				return u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b)), f(function (a, b) {
					return g(d(a), d(b))
				}, c)
			});
			for (var h = [], i = 0; i < b.length; i++)h.push(b[i]);
			return h.sort(f(e, d))
		}
	}

	function Sc(a) {
		return y(a) && (a = {link: a}), a.restrict = a.restrict || "AC", q(a)
	}

	function Tc(a, b) {
		function c(b, c) {
			c = c ? "-" + _(c, "-") : "", a.removeClass((b ? te : se) + c).addClass((b ? se : te) + c)
		}

		var d = this, e = a.parent().controller("form") || je, g = 0, h = d.$error = {}, i = [];
		d.$name = b.name || b.ngForm, d.$dirty = !1, d.$pristine = !0, d.$valid = !0, d.$invalid = !1, e.$addControl(d), a.addClass(ue), c(!0), d.$addControl = function (a) {
			db(a.$name, "input"), i.push(a), a.$name && (d[a.$name] = a)
		}, d.$removeControl = function (a) {
			a.$name && d[a.$name] === a && delete d[a.$name], f(h, function (b, c) {
				d.$setValidity(c, !0, a)
			}), H(i, a)
		}, d.$setValidity = function (a, b, f) {
			var i = h[a];
			if (b)i && (H(i, f), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), h[a] = !1, c(!0, a), e.$setValidity(a, !0, d))); else {
				if (g || c(b), i) {
					if (F(i, f))return
				} else h[a] = i = [], g++, c(!1, a), e.$setValidity(a, !1, d);
				i.push(f), d.$valid = !1, d.$invalid = !0
			}
		}, d.$setDirty = function () {
			a.removeClass(ue).addClass(ve), d.$dirty = !0, d.$pristine = !1, e.$setDirty()
		}, d.$setPristine = function () {
			a.removeClass(ve).addClass(ue), d.$dirty = !1, d.$pristine = !0, f(i, function (a) {
				a.$setPristine()
			})
		}
	}

	function Uc(a, b, e, f, g, h) {
		var i = function () {
			var c = b.val();
			S(e.ngTrim || "T") && (c = od(c)), f.$viewValue !== c && a.$apply(function () {
				f.$setViewValue(c)
			})
		};
		if (g.hasEvent("input"))b.on("input", i); else {
			var j, k = function () {
				j || (j = h.defer(function () {
					i(), j = null
				}))
			};
			b.on("keydown", function (a) {
				var b = a.keyCode;
				91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k()
			}), b.on("change", i), g.hasEvent("paste") && b.on("paste cut", k)
		}
		f.$render = function () {
			b.val(f.$isEmpty(f.$viewValue) ? "" : f.$viewValue)
		};
		var l, n, o = e.ngPattern, p = function (a, b) {
			return f.$isEmpty(b) || a.test(b) ? (f.$setValidity("pattern", !0), b) : (f.$setValidity("pattern", !1), c)
		};
		if (o && (n = o.match(/^\/(.*)\/([gim]*)$/), n ? (o = new RegExp(n[1], n[2]), l = function (a) {
			return p(o, a)
		}) : l = function (c) {
			var e = a.$eval(o);
			if (!e || !e.test)throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", o, e, T(b));
			return p(e, c)
		}, f.$formatters.push(l), f.$parsers.push(l)), e.ngMinlength) {
			var q = m(e.ngMinlength), r = function (a) {
				return!f.$isEmpty(a) && a.length < q ? (f.$setValidity("minlength", !1), c) : (f.$setValidity("minlength", !0), a)
			};
			f.$parsers.push(r), f.$formatters.push(r)
		}
		if (e.ngMaxlength) {
			var s = m(e.ngMaxlength), t = function (a) {
				return!f.$isEmpty(a) && a.length > s ? (f.$setValidity("maxlength", !1), c) : (f.$setValidity("maxlength", !0), a)
			};
			f.$parsers.push(t), f.$formatters.push(t)
		}
	}

	function Vc(a, b, d, e, f, g) {
		if (Uc(a, b, d, e, f, g), e.$parsers.push(function (a) {
			var b = e.$isEmpty(a);
			return b || pe.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
		}), e.$formatters.push(function (a) {
			return e.$isEmpty(a) ? "" : "" + a
		}), d.min) {
			var h = function (a) {
				var b = parseFloat(d.min);
				return!e.$isEmpty(a) && b > a ? (e.$setValidity("min", !1), c) : (e.$setValidity("min", !0), a)
			};
			e.$parsers.push(h), e.$formatters.push(h)
		}
		if (d.max) {
			var i = function (a) {
				var b = parseFloat(d.max);
				return!e.$isEmpty(a) && a > b ? (e.$setValidity("max", !1), c) : (e.$setValidity("max", !0), a)
			};
			e.$parsers.push(i), e.$formatters.push(i)
		}
		e.$formatters.push(function (a) {
			return e.$isEmpty(a) || v(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), c)
		})
	}

	function Wc(a, b, d, e, f, g) {
		Uc(a, b, d, e, f, g);
		var h = function (a) {
			return e.$isEmpty(a) || ne.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), c)
		};
		e.$formatters.push(h), e.$parsers.push(h)
	}

	function Xc(a, b, d, e, f, g) {
		Uc(a, b, d, e, f, g);
		var h = function (a) {
			return e.$isEmpty(a) || oe.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), c)
		};
		e.$formatters.push(h), e.$parsers.push(h)
	}

	function Yc(a, b, c, d) {
		r(c.name) && b.attr("name", j()), b.on("click", function () {
			b[0].checked && a.$apply(function () {
				d.$setViewValue(c.value)
			})
		}), d.$render = function () {
			var a = c.value;
			b[0].checked = a == d.$viewValue
		}, c.$observe("value", d.$render)
	}

	function Zc(a, b, c, d) {
		var e = c.ngTrueValue, f = c.ngFalseValue;
		u(e) || (e = !0), u(f) || (f = !1), b.on("click", function () {
			a.$apply(function () {
				d.$setViewValue(b[0].checked)
			})
		}), d.$render = function () {
			b[0].checked = d.$viewValue
		}, d.$isEmpty = function (a) {
			return a !== e
		}, d.$formatters.push(function (a) {
			return a === e
		}), d.$parsers.push(function (a) {
			return a ? e : f
		})
	}

	function $c(a, b) {
		return a = "ngClass" + a, function () {
			return{restrict: "AC", link: function (c, d, e) {
				function g(a) {
					(b === !0 || c.$index % 2 === b) && (k && !K(a, k) && h(k), i(a)), k = I(a)
				}

				function h(a) {
					e.$removeClass(j(a))
				}

				function i(a) {
					e.$addClass(j(a))
				}

				function j(a) {
					if (x(a))return a.join(" ");
					if (t(a)) {
						var b = [];
						return f(a, function (a, c) {
							a && b.push(c)
						}), b.join(" ")
					}
					return a
				}

				var k;
				c.$watch(e[a], g, !0), e.$observe("class", function () {
					g(c.$eval(e[a]))
				}), "ngClass" !== a && c.$watch("$index", function (d, f) {
					var g = 1 & d;
					g !== f & 1 && (g === b ? i(c.$eval(e[a])) : h(c.$eval(e[a])))
				})
			}}
		}
	}

	var _c = function (a) {
		return u(a) ? a.toLowerCase() : a
	}, ad = function (a) {
		return u(a) ? a.toUpperCase() : a
	}, bd = function (a) {
		return u(a) ? a.replace(/[A-Z]/g, function (a) {
			return String.fromCharCode(32 | a.charCodeAt(0))
		}) : a
	}, cd = function (a) {
		return u(a) ? a.replace(/[a-z]/g, function (a) {
			return String.fromCharCode(-33 & a.charCodeAt(0))
		}) : a
	};
	"i" !== "I".toLowerCase() && (_c = bd, ad = cd);
	var dd, ed, fd, gd, hd, id = [].slice, jd = [].push, kd = Object.prototype.toString, ld = d("ng"), md = (a.angular, a.angular || (a.angular = {})), nd = ["0", "0", "0"];
	dd = m((/msie (\d+)/.exec(_c(navigator.userAgent)) || [])[1]), isNaN(dd) && (dd = m((/trident\/.*; rv:(\d+)/.exec(_c(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
	var od = function () {
		return String.prototype.trim ? function (a) {
			return u(a) ? a.trim() : a
		} : function (a) {
			return u(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a
		}
	}();
	hd = 9 > dd ? function (a) {
		return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? ad(a.scopeName + ":" + a.nodeName) : a.nodeName
	} : function (a) {
		return a.nodeName ? a.nodeName : a[0].nodeName
	};
	var pd = /[A-Z]/g, qd = {full: "1.2.1", major: 1, minor: 2, dot: 1, codeName: "underscore-empathy"}, rd = lb.cache = {}, sd = lb.expando = "ng-" + (new Date).getTime(), td = 1, ud = a.document.addEventListener ? function (a, b, c) {
		a.addEventListener(b, c, !1)
	} : function (a, b, c) {
		a.attachEvent("on" + b, c)
	}, vd = a.document.removeEventListener ? function (a, b, c) {
		a.removeEventListener(b, c, !1)
	} : function (a, b, c) {
		a.detachEvent("on" + b, c)
	}, wd = /([\:\-\_]+(.))/g, xd = /^moz([A-Z])/, yd = d("jqLite"), zd = lb.prototype = {ready: function (c) {
		function d() {
			e || (e = !0, c())
		}

		var e = !1;
		"complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), lb(a).on("load", d))
	}, toString: function () {
		var a = [];
		return f(this, function (b) {
			a.push("" + b)
		}), "[" + a.join(", ") + "]"
	}, eq: function (a) {
		return a >= 0 ? ed(this[a]) : ed(this[this.length + a])
	}, length: 0, push: jd, sort: [].sort, splice: [].splice}, Ad = {};
	f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
		Ad[_c(a)] = a
	});
	var Bd = {};
	f("input,select,option,textarea,button,form,details".split(","), function (a) {
		Bd[ad(a)] = !0
	}), f({data: rb, inheritedData: xb, scope: function (a) {
		return ed(a).data("$scope") || xb(a.parentNode || a, ["$isolateScope", "$scope"])
	}, isolateScope: function (a) {
		return ed(a).data("$isolateScope") || ed(a).data("$isolateScopeNoTemplate")
	}, controller: wb, injector: function (a) {
		return xb(a, "$injector")
	}, removeAttr: function (a, b) {
		a.removeAttribute(b)
	}, hasClass: sb, css: function (a, b, d) {
		if (b = jb(b), !s(d)) {
			var e;
			return 8 >= dd && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= dd && (e = "" === e ? c : e), e
		}
		a.style[b] = d
	}, attr: function (a, b, d) {
		var e = _c(b);
		if (Ad[e]) {
			if (!s(d))return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
			d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
		} else if (s(d))a.setAttribute(b, d); else if (a.getAttribute) {
			var f = a.getAttribute(b, 2);
			return null === f ? c : f
		}
	}, prop: function (a, b, c) {
		return s(c) ? (a[b] = c, void 0) : a[b]
	}, text: function () {
		function a(a, c) {
			var d = b[a.nodeType];
			return r(c) ? d ? a[d] : "" : (a[d] = c, void 0)
		}

		var b = [];
		return 9 > dd ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", a.$dv = "", a
	}(), val: function (a, b) {
		if (r(b)) {
			if ("SELECT" === hd(a) && a.multiple) {
				var c = [];
				return f(a.options, function (a) {
					a.selected && c.push(a.value || a.text)
				}), 0 === c.length ? null : c
			}
			return a.value
		}
		a.value = b
	}, html: function (a, b) {
		if (r(b))return a.innerHTML;
		for (var c = 0, d = a.childNodes; c < d.length; c++)nb(d[c]);
		a.innerHTML = b
	}}, function (a, b) {
		lb.prototype[b] = function (b, d) {
			var e, f;
			if ((2 == a.length && a !== sb && a !== wb ? b : d) === c) {
				if (t(b)) {
					for (e = 0; e < this.length; e++)if (a === rb)a(this[e], b); else for (f in b)a(this[e], f, b[f]);
					return this
				}
				for (var g = a.$dv, h = g === c ? Math.min(this.length, 1) : this.length, i = 0; h > i; i++) {
					var j = a(this[i], b, d);
					g = g ? g + j : j
				}
				return g
			}
			for (e = 0; e < this.length; e++)a(this[e], b, d);
			return this
		}
	}), f({removeData: pb, dealoc: nb, on: function df(a, c, d, e) {
		if (s(e))throw yd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
		var g = qb(a, "events"), h = qb(a, "handle");
		g || qb(a, "events", g = {}), h || qb(a, "handle", h = zb(a, g)), f(c.split(" "), function (c) {
			var e = g[c];
			if (!e) {
				if ("mouseenter" == c || "mouseleave" == c) {
					var f = b.body.contains || b.body.compareDocumentPosition ? function (a, b) {
						var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
						return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
					} : function (a, b) {
						if (b)for (; b = b.parentNode;)if (b === a)return!0;
						return!1
					};
					g[c] = [];
					var i = {mouseleave: "mouseout", mouseenter: "mouseover"};
					df(a, i[c], function (a) {
						var b = this, d = a.relatedTarget;
						(!d || d !== b && !f(b, d)) && h(a, c)
					})
				} else ud(a, c, h), g[c] = [];
				e = g[c]
			}
			e.push(d)
		})
	}, off: ob, replaceWith: function (a, b) {
		var c, d = a.parentNode;
		nb(a), f(new lb(b), function (b) {
			c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
		})
	}, children: function (a) {
		var b = [];
		return f(a.childNodes, function (a) {
			1 === a.nodeType && b.push(a)
		}), b
	}, contents: function (a) {
		return a.childNodes || []
	}, append: function (a, b) {
		f(new lb(b), function (b) {
			(1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
		})
	}, prepend: function (a, b) {
		if (1 === a.nodeType) {
			var c = a.firstChild;
			f(new lb(b), function (b) {
				a.insertBefore(b, c)
			})
		}
	}, wrap: function (a, b) {
		b = ed(b)[0];
		var c = a.parentNode;
		c && c.replaceChild(b, a), b.appendChild(a)
	}, remove: function (a) {
		nb(a);
		var b = a.parentNode;
		b && b.removeChild(a)
	}, after: function (a, b) {
		var c = a, d = a.parentNode;
		f(new lb(b), function (a) {
			d.insertBefore(a, c.nextSibling), c = a
		})
	}, addClass: ub, removeClass: tb, toggleClass: function (a, b, c) {
		r(c) && (c = !sb(a, b)), (c ? ub : tb)(a, b)
	}, parent: function (a) {
		var b = a.parentNode;
		return b && 11 !== b.nodeType ? b : null
	}, next: function (a) {
		if (a.nextElementSibling)return a.nextElementSibling;
		for (var b = a.nextSibling; null != b && 1 !== b.nodeType;)b = b.nextSibling;
		return b
	}, find: function (a, b) {
		return a.getElementsByTagName(b)
	}, clone: mb, triggerHandler: function (a, b, c) {
		var d = (qb(a, "events") || {})[b];
		c = c || [];
		var e = [
			{preventDefault: o, stopPropagation: o}
		];
		f(d, function (b) {
			b.apply(a, e.concat(c))
		})
	}}, function (a, b) {
		lb.prototype[b] = function (b, c, d) {
			for (var e, f = 0; f < this.length; f++)r(e) ? (e = a(this[f], b, c, d), s(e) && (e = ed(e))) : vb(e, a(this[f], b, c, d));
			return s(e) ? e : this
		}, lb.prototype.bind = lb.prototype.on, lb.prototype.unbind = lb.prototype.off
	}), Bb.prototype = {put: function (a, b) {
		this[Ab(a)] = b
	}, get: function (a) {
		return this[Ab(a)]
	}, remove: function (a) {
		var b = this[a = Ab(a)];
		return delete this[a], b
	}};
	var Cd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Dd = /,/, Ed = /^\s*(_?)(\S+?)\1\s*$/, Fd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Gd = d("$injector"), Hd = d("$animate"), Id = ["$provide", function (a) {
		this.$$selectors = {}, this.register = function (b, c) {
			var d = b + "-animation";
			if (b && "." != b.charAt(0))throw Hd("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
			this.$$selectors[b.substr(1)] = d, a.factory(d, c)
		}, this.$get = ["$timeout", function (a) {
			return{enter: function (b, c, d, e) {
				var g = d && d[d.length - 1], h = c && c[0] || g && g.parentNode, i = g && g.nextSibling || null;
				f(b, function (a) {
					h.insertBefore(a, i)
				}), e && a(e, 0, !1)
			}, leave: function (b, c) {
				b.remove(), c && a(c, 0, !1)
			}, move: function (a, b, c, d) {
				this.enter(a, b, c, d)
			}, addClass: function (b, c, d) {
				c = u(c) ? c : x(c) ? c.join(" ") : "", f(b, function (a) {
					ub(a, c)
				}), d && a(d, 0, !1)
			}, removeClass: function (b, c, d) {
				c = u(c) ? c : x(c) ? c.join(" ") : "", f(b, function (a) {
					tb(a, c)
				}), d && a(d, 0, !1)
			}, enabled: o}
		}]
	}], Jd = d("$compile");
	Jb.$inject = ["$provide"];
	var Kd = /^(x[\:\-_]|data[\:\-_])/i, Ld = a.XMLHttpRequest || function () {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP.6.0")
		} catch (a) {
		}
		try {
			return new ActiveXObject("Msxml2.XMLHTTP.3.0")
		} catch (b) {
		}
		try {
			return new ActiveXObject("Msxml2.XMLHTTP")
		} catch (c) {
		}
		throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
	}, Md = d("$interpolate"), Nd = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Od = {http: 80, https: 443, ftp: 21}, Pd = d("$location");
	fc.prototype = ec.prototype = dc.prototype = {$$html5: !1, $$replace: !1, absUrl: gc("$$absUrl"), url: function (a, b) {
		if (r(a))return this.$$url;
		var c = Nd.exec(a);
		return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
	}, protocol: gc("$$protocol"), host: gc("$$host"), port: gc("$$port"), path: hc("$$path", function (a) {
		return"/" == a.charAt(0) ? a : "/" + a
	}), search: function (a, b) {
		switch (arguments.length) {
			case 0:
				return this.$$search;
			case 1:
				if (u(a))this.$$search = V(a); else {
					if (!t(a))throw Pd("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
					this.$$search = a
				}
				break;
			default:
				r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
		}
		return this.$$compose(), this
	}, hash: hc("$$hash", p), replace: function () {
		return this.$$replace = !0, this
	}};
	var Qd, Rd = d("$parse"), Sd = {}, Td = {"null": function () {
		return null
	}, "true": function () {
		return!0
	}, "false": function () {
		return!1
	}, undefined: o, "+": function (a, b, d, e) {
		return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
	}, "-": function (a, b, c, d) {
		return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
	}, "*": function (a, b, c, d) {
		return c(a, b) * d(a, b)
	}, "/": function (a, b, c, d) {
		return c(a, b) / d(a, b)
	}, "%": function (a, b, c, d) {
		return c(a, b) % d(a, b)
	}, "^": function (a, b, c, d) {
		return c(a, b) ^ d(a, b)
	}, "=": o, "===": function (a, b, c, d) {
		return c(a, b) === d(a, b)
	}, "!==": function (a, b, c, d) {
		return c(a, b) !== d(a, b)
	}, "==": function (a, b, c, d) {
		return c(a, b) == d(a, b)
	}, "!=": function (a, b, c, d) {
		return c(a, b) != d(a, b)
	}, "<": function (a, b, c, d) {
		return c(a, b) < d(a, b)
	}, ">": function (a, b, c, d) {
		return c(a, b) > d(a, b)
	}, "<=": function (a, b, c, d) {
		return c(a, b) <= d(a, b)
	}, ">=": function (a, b, c, d) {
		return c(a, b) >= d(a, b)
	}, "&&": function (a, b, c, d) {
		return c(a, b) && d(a, b)
	}, "||": function (a, b, c, d) {
		return c(a, b) || d(a, b)
	}, "&": function (a, b, c, d) {
		return c(a, b) & d(a, b)
	}, "|": function (a, b, c, d) {
		return d(a, b)(a, b, c(a, b))
	}, "!": function (a, b, c) {
		return!c(a, b)
	}}, Ud = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, Vd = function (a) {
		this.options = a
	};
	Vd.prototype = {constructor: Vd, lex: function (a) {
		this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = [];
		for (var b, d = []; this.index < this.text.length;) {
			if (this.ch = this.text.charAt(this.index), this.is("\"'"))this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(this.ch))this.readIdent(), this.was("{,") && "{" === d[0] && (b = this.tokens[this.tokens.length - 1]) && (b.json = -1 === b.text.indexOf(".")); else if (this.is("(){}[].,;:?"))this.tokens.push({index: this.index, text: this.ch, json: this.was(":[,") && this.is("{[") || this.is("}]:,")}), this.is("{[") && d.unshift(this.ch), this.is("}]") && d.shift(), this.index++; else {
				if (this.isWhitespace(this.ch)) {
					this.index++;
					continue
				}
				var e = this.ch + this.peek(), f = e + this.peek(2), g = Td[this.ch], h = Td[e], i = Td[f];
				i ? (this.tokens.push({index: this.index, text: f, fn: i}), this.index += 3) : h ? (this.tokens.push({index: this.index, text: e, fn: h}), this.index += 2) : g ? (this.tokens.push({index: this.index, text: this.ch, fn: g, json: this.was("[,:") && this.is("+-")}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
			}
			this.lastCh = this.ch
		}
		return this.tokens
	}, is: function (a) {
		return-1 !== a.indexOf(this.ch)
	}, was: function (a) {
		return-1 !== a.indexOf(this.lastCh)
	}, peek: function (a) {
		var b = a || 1;
		return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
	}, isNumber: function (a) {
		return a >= "0" && "9" >= a
	}, isWhitespace: function (a) {
		return" " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
	}, isIdent: function (a) {
		return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
	}, isExpOperator: function (a) {
		return"-" === a || "+" === a || this.isNumber(a)
	}, throwError: function (a, b, c) {
		c = c || this.index;
		var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
		throw Rd("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
	}, readNumber: function () {
		for (var a = "", b = this.index; this.index < this.text.length;) {
			var c = _c(this.text.charAt(this.index));
			if ("." == c || this.isNumber(c))a += c; else {
				var d = this.peek();
				if ("e" == c && this.isExpOperator(d))a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1))a += c; else {
					if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1))break;
					this.throwError("Invalid exponent")
				}
			}
			this.index++
		}
		a = 1 * a, this.tokens.push({index: b, text: a, json: !0, fn: function () {
			return a
		}})
	}, readIdent: function () {
		for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));)"." === d && (a = this.index), f += d, this.index++;
		if (a)for (b = this.index; b < this.text.length;) {
			if (d = this.text.charAt(b), "(" === d) {
				c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
				break
			}
			if (!this.isWhitespace(d))break;
			b++
		}
		var h = {index: g, text: f};
		if (Td.hasOwnProperty(f))h.fn = Td[f], h.json = Td[f]; else {
			var i = oc(f, this.options, this.text);
			h.fn = l(function (a, b) {
				return i(a, b)
			}, {assign: function (a, b) {
				return mc(a, f, b, e.text, e.options)
			}})
		}
		this.tokens.push(h), c && (this.tokens.push({index: a, text: ".", json: !1}), this.tokens.push({index: a + 1, text: c, json: !1}))
	}, readString: function (a) {
		var b = this.index;
		this.index++;
		for (var c = "", d = a, e = !1; this.index < this.text.length;) {
			var f = this.text.charAt(this.index);
			if (d += f, e) {
				if ("u" === f) {
					var g = this.text.substring(this.index + 1, this.index + 5);
					g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
				} else {
					var h = Ud[f];
					c += h ? h : f
				}
				e = !1
			} else if ("\\" === f)e = !0; else {
				if (f === a)return this.index++, this.tokens.push({index: b, text: d, string: c, json: !0, fn: function () {
					return c
				}}), void 0;
				c += f
			}
			this.index++
		}
		this.throwError("Unterminated quote", b)
	}};
	var Wd = function (a, b, c) {
		this.lexer = a, this.$filter = b, this.options = c
	};
	Wd.ZERO = function () {
		return 0
	}, Wd.prototype = {constructor: Wd, parse: function (a, b) {
		this.text = a, this.json = b, this.tokens = this.lexer.lex(a), b && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
			this.throwError("is not valid json", {text: a, index: 0})
		});
		var c = b ? this.primary() : this.statements();
		return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), c.literal = !!c.literal, c.constant = !!c.constant, c
	}, primary: function () {
		var a;
		if (this.expect("("))a = this.filterChain(), this.consume(")"); else if (this.expect("["))a = this.arrayDeclaration(); else if (this.expect("{"))a = this.object(); else {
			var b = this.expect();
			a = b.fn, a || this.throwError("not a primary expression", b), b.json && (a.constant = !0, a.literal = !0)
		}
		for (var c, d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
		return a
	}, throwError: function (a, b) {
		throw Rd("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
	}, peekToken: function () {
		if (0 === this.tokens.length)throw Rd("ueoe", "Unexpected end of expression: {0}", this.text);
		return this.tokens[0]
	}, peek: function (a, b, c, d) {
		if (this.tokens.length > 0) {
			var e = this.tokens[0], f = e.text;
			if (f === a || f === b || f === c || f === d || !a && !b && !c && !d)return e
		}
		return!1
	}, expect: function (a, b, c, d) {
		var e = this.peek(a, b, c, d);
		return e ? (this.json && !e.json && this.throwError("is not valid json", e), this.tokens.shift(), e) : !1
	}, consume: function (a) {
		this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
	}, unaryFn: function (a, b) {
		return l(function (c, d) {
			return a(c, d, b)
		}, {constant: b.constant})
	}, ternaryFn: function (a, b, c) {
		return l(function (d, e) {
			return a(d, e) ? b(d, e) : c(d, e)
		}, {constant: a.constant && b.constant && c.constant})
	}, binaryFn: function (a, b, c) {
		return l(function (d, e) {
			return b(d, e, a, c)
		}, {constant: a.constant && c.constant})
	}, statements: function () {
		for (var a = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (b, c) {
			for (var d, e = 0; e < a.length; e++) {
				var f = a[e];
				f && (d = f(b, c))
			}
			return d
		}
	}, filterChain: function () {
		for (var a, b = this.expression(); ;) {
			if (!(a = this.expect("|")))return b;
			b = this.binaryFn(b, a.fn, this.filter())
		}
	}, filter: function () {
		for (var a = this.expect(), b = this.$filter(a.text), c = []; ;) {
			if (!(a = this.expect(":"))) {
				var d = function (a, d, e) {
					for (var f = [e], g = 0; g < c.length; g++)f.push(c[g](a, d));
					return b.apply(a, f)
				};
				return function () {
					return d
				}
			}
			c.push(this.expression())
		}
	}, expression: function () {
		return this.assignment()
	}, assignment: function () {
		var a, b, c = this.ternary();
		return(b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function (b, d) {
			return c.assign(b, a(b, d), d)
		}) : c
	}, ternary: function () {
		var a, b, c = this.logicalOR();
		return(b = this.expect("?")) ? (a = this.ternary(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.ternary()) : (this.throwError("expected :", b), void 0)) : c
	}, logicalOR: function () {
		for (var a, b = this.logicalAND(); ;) {
			if (!(a = this.expect("||")))return b;
			b = this.binaryFn(b, a.fn, this.logicalAND())
		}
	}, logicalAND: function () {
		var a, b = this.equality();
		return(a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b
	}, equality: function () {
		var a, b = this.relational();
		return(a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), b
	}, relational: function () {
		var a, b = this.additive();
		return(a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), b
	}, additive: function () {
		for (var a, b = this.multiplicative(); a = this.expect("+", "-");)b = this.binaryFn(b, a.fn, this.multiplicative());
		return b
	}, multiplicative: function () {
		for (var a, b = this.unary(); a = this.expect("*", "/", "%");)b = this.binaryFn(b, a.fn, this.unary());
		return b
	}, unary: function () {
		var a;
		return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(Wd.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
	}, fieldAccess: function (a) {
		var b = this, c = this.expect().text, d = oc(c, this.options, this.text);
		return l(function (b, c, e) {
			return d(e || a(b, c), c)
		}, {assign: function (d, e, f) {
			return mc(a(d, f), c, e, b.text, b.options)
		}})
	}, objectIndex: function (a) {
		var b = this, d = this.expression();
		return this.consume("]"), l(function (e, f) {
			var g, h, i = a(e, f), j = d(e, f);
			return i ? (g = lc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v"in g || (h.$$v = c, h.then(function (a) {
				h.$$v = a
			})), g = g.$$v), g) : c
		}, {assign: function (c, e, f) {
			var g = d(c, f), h = lc(a(c, f), b.text);
			return h[g] = e
		}})
	}, functionCall: function (a, b) {
		var c = [];
		if (")" !== this.peekToken().text)do c.push(this.expression()); while (this.expect(","));
		this.consume(")");
		var d = this;
		return function (e, f) {
			for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++)g.push(c[i](e, f));
			var j = a(e, f, h) || o;
			lc(h, d.text), lc(j, d.text);
			var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
			return lc(k, d.text)
		}
	}, arrayDeclaration: function () {
		var a = [], b = !0;
		if ("]" !== this.peekToken().text)do {
			var c = this.expression();
			a.push(c), c.constant || (b = !1)
		} while (this.expect(","));
		return this.consume("]"), l(function (b, c) {
			for (var d = [], e = 0; e < a.length; e++)d.push(a[e](b, c));
			return d
		}, {literal: !0, constant: b})
	}, object: function () {
		var a = [], b = !0;
		if ("}" !== this.peekToken().text)do {
			var c = this.expect(), d = c.string || c.text;
			this.consume(":");
			var e = this.expression();
			a.push({key: d, value: e}), e.constant || (b = !1)
		} while (this.expect(","));
		return this.consume("}"), l(function (b, c) {
			for (var d = {}, e = 0; e < a.length; e++) {
				var f = a[e];
				d[f.key] = f.value(b, c)
			}
			return d
		}, {literal: !0, constant: b})
	}};
	var Xd = {}, Yd = d("$sce"), Zd = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, $d = b.createElement("a"), _d = /^\/?.*?:(\/.*)/, ae = Ac(a.location.href, !0);
	Ec.$inject = ["$provide"], Gc.$inject = ["$locale"], Hc.$inject = ["$locale"];
	var be = ".", ce = {yyyy: Kc("FullYear", 4), yy: Kc("FullYear", 2, 0, !0), y: Kc("FullYear", 1), MMMM: Lc("Month"), MMM: Lc("Month", !0), MM: Kc("Month", 2, 1), M: Kc("Month", 1, 1), dd: Kc("Date", 2), d: Kc("Date", 1), HH: Kc("Hours", 2), H: Kc("Hours", 1), hh: Kc("Hours", 2, -12), h: Kc("Hours", 1, -12), mm: Kc("Minutes", 2), m: Kc("Minutes", 1), ss: Kc("Seconds", 2), s: Kc("Seconds", 1), sss: Kc("Milliseconds", 3), EEEE: Lc("Day"), EEE: Lc("Day", !0), a: Nc, Z: Mc}, de = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, ee = /^\-?\d+$/;
	Oc.$inject = ["$locale"];
	var fe = q(_c), ge = q(ad);
	Rc.$inject = ["$parse"];
	var he = q({restrict: "E", compile: function (a, c) {
		return 8 >= dd && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), function (a, b) {
			b.on("click", function (a) {
				b.attr("href") || a.preventDefault()
			})
		}
	}}), ie = {};
	f(Ad, function (a, b) {
		if ("multiple" != a) {
			var c = Kb("ng-" + b);
			ie[c] = function () {
				return{priority: 100, compile: function () {
					return function (a, d, e) {
						a.$watch(e[c], function (a) {
							e.$set(b, !!a)
						})
					}
				}}
			}
		}
	}), f(["src", "srcset", "href"], function (a) {
		var b = Kb("ng-" + a);
		ie[b] = function () {
			return{priority: 99, link: function (c, d, e) {
				e.$observe(b, function (b) {
					b && (e.$set(a, b), dd && d.prop(a, e[a]))
				})
			}}
		}
	});
	var je = {$addControl: o, $removeControl: o, $setValidity: o, $setDirty: o, $setPristine: o};
	Tc.$inject = ["$element", "$attrs", "$scope"];
	var ke = function (a) {
		return["$timeout", function (b) {
			var d = {name: "form", restrict: a ? "EAC" : "E", controller: Tc, compile: function () {
				return{pre: function (a, d, e, f) {
					if (!e.action) {
						var g = function (a) {
							a.preventDefault ? a.preventDefault() : a.returnValue = !1
						};
						ud(d[0], "submit", g), d.on("$destroy", function () {
							b(function () {
								vd(d[0], "submit", g)
							}, 0, !1)
						})
					}
					var h = d.parent().controller("form"), i = e.name || e.ngForm;
					i && mc(a, i, f, i), h && d.on("$destroy", function () {
						h.$removeControl(f), i && mc(a, i, c, i), l(f, je)
					})
				}}
			}};
			return d
		}]
	}, le = ke(), me = ke(!0), ne = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, oe = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/, pe = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, qe = {text: Uc, number: Vc, url: Wc, email: Xc, radio: Yc, checkbox: Zc, hidden: o, button: o, submit: o, reset: o}, re = ["$browser", "$sniffer", function (a, b) {
		return{restrict: "E", require: "?ngModel", link: function (c, d, e, f) {
			f && (qe[_c(e.type)] || qe.text)(c, d, e, f, b, a)
		}}
	}], se = "ng-valid", te = "ng-invalid", ue = "ng-pristine", ve = "ng-dirty", we = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function (a, b, c, e, g) {
		function h(a, b) {
			b = b ? "-" + _(b, "-") : "", e.removeClass((a ? te : se) + b).addClass((a ? se : te) + b)
		}

		this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
		var i = g(c.ngModel), j = i.assign;
		if (!j)throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, T(e));
		this.$render = o, this.$isEmpty = function (a) {
			return r(a) || "" === a || null === a || a !== a
		};
		var k = e.inheritedData("$formController") || je, l = 0, m = this.$error = {};
		e.addClass(ue), h(!0), this.$setValidity = function (a, b) {
			m[a] !== !b && (b ? (m[a] && l--, l || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, l++), m[a] = !b, h(b, a), k.$setValidity(a, b, this))
		}, this.$setPristine = function () {
			this.$dirty = !1, this.$pristine = !0, e.removeClass(ve).addClass(ue)
		}, this.$setViewValue = function (c) {
			this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(ue).addClass(ve), k.$setDirty()), f(this.$parsers, function (a) {
				c = a(c)
			}), this.$modelValue !== c && (this.$modelValue = c, j(a, c), f(this.$viewChangeListeners, function (a) {
				try {
					a()
				} catch (c) {
					b(c)
				}
			}))
		};
		var n = this;
		a.$watch(function () {
			var b = i(a);
			if (n.$modelValue !== b) {
				var c = n.$formatters, d = c.length;
				for (n.$modelValue = b; d--;)b = c[d](b);
				n.$viewValue !== b && (n.$viewValue = b, n.$render())
			}
		})
	}], xe = function () {
		return{require: ["ngModel", "^?form"], controller: we, link: function (a, b, c, d) {
			var e = d[0], f = d[1] || je;
			f.$addControl(e), a.$on("$destroy", function () {
				f.$removeControl(e)
			})
		}}
	}, ye = q({require: "ngModel", link: function (a, b, c, d) {
		d.$viewChangeListeners.push(function () {
			a.$eval(c.ngChange)
		})
	}}), ze = function () {
		return{require: "?ngModel", link: function (a, b, c, d) {
			if (d) {
				c.required = !0;
				var e = function (a) {
					return c.required && d.$isEmpty(a) ? (d.$setValidity("required", !1), void 0) : (d.$setValidity("required", !0), a)
				};
				d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function () {
					e(d.$viewValue)
				})
			}
		}}
	}, Ae = function () {
		return{require: "ngModel", link: function (a, b, d, e) {
			var g = /\/(.*)\//.exec(d.ngList), h = g && new RegExp(g[1]) || d.ngList || ",", i = function (a) {
				if (!r(a)) {
					var b = [];
					return a && f(a.split(h), function (a) {
						a && b.push(od(a))
					}), b
				}
			};
			e.$parsers.push(i), e.$formatters.push(function (a) {
				return x(a) ? a.join(", ") : c
			}), e.$isEmpty = function (a) {
				return!a || !a.length
			}
		}}
	}, Be = /^(true|false|\d+)$/, Ce = function () {
		return{priority: 100, compile: function (a, b) {
			return Be.test(b.ngValue) ? function (a, b, c) {
				c.$set("value", a.$eval(c.ngValue))
			} : function (a, b, c) {
				a.$watch(c.ngValue, function (a) {
					c.$set("value", a)
				})
			}
		}}
	}, De = Sc(function (a, b, d) {
		b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function (a) {
			b.text(a == c ? "" : a)
		})
	}), Ee = ["$interpolate", function (a) {
		return function (b, c, d) {
			var e = a(c.attr(d.$attr.ngBindTemplate));
			c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function (a) {
				c.text(a)
			})
		}
	}], Fe = ["$sce", "$parse", function (a, b) {
		return function (c, d, e) {
			function f() {
				return(g(c) || "").toString()
			}

			d.addClass("ng-binding").data("$binding", e.ngBindHtml);
			var g = b(e.ngBindHtml);
			c.$watch(f, function () {
				d.html(a.getTrustedHtml(g(c)) || "")
			})
		}
	}], Ge = $c("", !0), He = $c("Odd", 0), Ie = $c("Even", 1), Je = Sc({compile: function (a, b) {
		b.$set("ngCloak", c), a.removeClass("ng-cloak")
	}}), Ke = [function () {
		return{scope: !0, controller: "@"}
	}], Le = {};
	f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
		var b = Kb("ng-" + a);
		Le[b] = ["$parse", function (c) {
			return{compile: function (d, e) {
				var f = c(e[b]);
				return function (b, c) {
					c.on(_c(a), function (a) {
						b.$apply(function () {
							f(b, {$event: a})
						})
					})
				}
			}}
		}]
	});
	var Me = ["$animate", function (a) {
		return{transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function (c, d, e, f, g) {
			var h, i;
			c.$watch(e.ngIf, function (f) {
				S(f) ? i || (i = c.$new(), g(i, function (c) {
					h = {startNode: c[0], endNode: c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " ")}, a.enter(c, d.parent(), d)
				})) : (i && (i.$destroy(), i = null), h && (a.leave(fb(h)), h = null))
			})
		}}
	}], Ne = ["$http", "$templateCache", "$anchorScroll", "$compile", "$animate", "$sce", function (a, b, c, d, e, f) {
		return{restrict: "ECA", priority: 400, terminal: !0, transclude: "element", compile: function (g, h) {
			var i = h.ngInclude || h.src, j = h.onload || "", k = h.autoscroll;
			return function (g, h, l, m, n) {
				var o, p, q = 0, r = function () {
					o && (o.$destroy(), o = null), p && (e.leave(p), p = null)
				};
				g.$watch(f.parseAsResourceUrl(i), function (f) {
					var i = function () {
						!s(k) || k && !g.$eval(k) || c()
					}, l = ++q;
					f ? (a.get(f, {cache: b}).success(function (a) {
						if (l === q) {
							var b = g.$new();
							n(b, function (c) {
								r(), o = b, p = c, p.html(a), e.enter(p, null, h, i), d(p.contents())(o), o.$emit("$includeContentLoaded"), g.$eval(j)
							})
						}
					}).error(function () {
						l === q && r()
					}), g.$emit("$includeContentRequested")) : r()
				})
			}
		}}
	}], Oe = Sc({compile: function () {
		return{pre: function (a, b, c) {
			a.$eval(c.ngInit)
		}}
	}}), Pe = Sc({terminal: !0, priority: 1e3}), Qe = ["$locale", "$interpolate", function (a, b) {
		var c = /{}/g;
		return{restrict: "EA", link: function (d, e, g) {
			var h = g.count, i = g.$attr.when && e.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i) || {}, l = {}, m = b.startSymbol(), n = b.endSymbol(), o = /^when(Minus)?(.+)$/;
			f(g, function (a, b) {
				o.test(b) && (k[_c(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
			}), f(k, function (a, d) {
				l[d] = b(a.replace(c, m + h + "-" + j + n))
			}), d.$watch(function () {
				var b = parseFloat(d.$eval(h));
				return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
			}, function (a) {
				e.text(a)
			})
		}}
	}], Re = ["$parse", "$animate", function (a, c) {
		var g = "$$NG_REMOVED", h = d("ngRepeat");
		return{transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, link: function (d, i, j, k, l) {
			var m, n, o, p, q, r, s, t, u, v = j.ngRepeat, w = v.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/), x = {$id: Ab};
			if (!w)throw h("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", v);
			if (r = w[1], s = w[2], m = w[4], m ? (n = a(m), o = function (a, b, c) {
				return u && (x[u] = a), x[t] = b, x.$index = c, n(d, x)
			}) : (p = function (a, b) {
				return Ab(b)
			}, q = function (a) {
				return a
			}), w = r.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !w)throw h("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", r);
			t = w[3] || w[1], u = w[2];
			var y = {};
			d.$watchCollection(s, function (a) {
				var j, k, m, n, r, s, w, x, z, A, B, C, D = i[0], E = {}, F = [];
				if (e(a))A = a, z = o || p; else {
					z = o || q, A = [];
					for (s in a)a.hasOwnProperty(s) && "$" != s.charAt(0) && A.push(s);
					A.sort()
				}
				for (n = A.length, k = F.length = A.length, j = 0; k > j; j++)if (s = a === A ? j : A[j], w = a[s], x = z(s, w, j), db(x, "`track by` id"), y.hasOwnProperty(x))B = y[x], delete y[x], E[x] = B, F[j] = B; else {
					if (E.hasOwnProperty(x))throw f(F, function (a) {
						a && a.startNode && (y[a.id] = a)
					}), h("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", v, x);
					F[j] = {id: x}, E[x] = !1
				}
				for (s in y)y.hasOwnProperty(s) && (B = y[s], C = fb(B), c.leave(C), f(C, function (a) {
					a[g] = !0
				}), B.scope.$destroy());
				for (j = 0, k = A.length; k > j; j++) {
					if (s = a === A ? j : A[j], w = a[s], B = F[j], F[j - 1] && (D = F[j - 1].endNode), B.startNode) {
						r = B.scope, m = D;
						do m = m.nextSibling; while (m && m[g]);
						B.startNode != m && c.move(fb(B), null, ed(D)), D = B.endNode
					} else r = d.$new();
					r[t] = w, u && (r[u] = s), r.$index = j, r.$first = 0 === j, r.$last = j === n - 1, r.$middle = !(r.$first || r.$last), r.$odd = !(r.$even = 0 === (1 & j)), B.startNode || l(r, function (a) {
						a[a.length++] = b.createComment(" end ngRepeat: " + v + " "), c.enter(a, null, ed(D)), D = a, B.scope = r, B.startNode = D && D.endNode ? D.endNode : a[0], B.endNode = a[a.length - 1], E[B.id] = B
					})
				}
				y = E
			})
		}}
	}], Se = ["$animate", function (a) {
		return function (b, c, d) {
			b.$watch(d.ngShow, function (b) {
				a[S(b) ? "removeClass" : "addClass"](c, "ng-hide")
			})
		}
	}], Te = ["$animate", function (a) {
		return function (b, c, d) {
			b.$watch(d.ngHide, function (b) {
				a[S(b) ? "addClass" : "removeClass"](c, "ng-hide")
			})
		}
	}], Ue = Sc(function (a, b, c) {
		a.$watch(c.ngStyle, function (a, c) {
			c && a !== c && f(c, function (a, c) {
				b.css(c, "")
			}), a && b.css(a)
		}, !0)
	}), Ve = ["$animate", function (a) {
		return{restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
			this.cases = {}
		}], link: function (b, c, d, e) {
			var g, h, i = d.ngSwitch || d.on, j = [];
			b.$watch(i, function (c) {
				for (var i = 0, k = j.length; k > i; i++)j[i].$destroy(), a.leave(h[i]);
				h = [], j = [], (g = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(g, function (c) {
					var d = b.$new();
					j.push(d), c.transclude(d, function (b) {
						var d = c.element;
						h.push(b), a.enter(b, d.parent(), d)
					})
				}))
			})
		}}
	}], We = Sc({transclude: "element", priority: 800, require: "^ngSwitch", compile: function (a, b) {
		return function (a, c, d, e, f) {
			e.cases["!" + b.ngSwitchWhen] = e.cases["!" + b.ngSwitchWhen] || [], e.cases["!" + b.ngSwitchWhen].push({transclude: f, element: c})
		}
	}}), Xe = Sc({transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, b, c, d, e) {
		d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({transclude: e, element: b})
	}}), Ye = Sc({controller: ["$element", "$transclude", function (a, b) {
		if (!b)throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(a));
		this.$transclude = b
	}], link: function (a, b, c, d) {
		d.$transclude(function (a) {
			b.html(""), b.append(a)
		})
	}}), Ze = ["$templateCache", function (a) {
		return{restrict: "E", terminal: !0, compile: function (b, c) {
			if ("text/ng-template" == c.type) {
				var d = c.id, e = b[0].text;
				a.put(d, e)
			}
		}}
	}], $e = d("ngOptions"), _e = q({terminal: !0}), af = ["$compile", "$parse", function (a, d) {
		var e = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/, h = {$setViewValue: o};
		return{restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, b, c) {
			var d, e, f = this, g = {}, i = h;
			f.databound = c.ngModel, f.init = function (a, b, c) {
				i = a, d = b, e = c
			}, f.addOption = function (b) {
				db(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
			}, f.removeOption = function (a) {
				this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
			}, f.renderUnknownOption = function (b) {
				var c = "? " + Ab(b) + " ?";
				e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
			}, f.hasOption = function (a) {
				return g.hasOwnProperty(a)
			}, b.$on("$destroy", function () {
				f.renderUnknownOption = o
			})
		}], link: function (h, i, j, k) {
			function l(a, b, c, d) {
				c.$render = function () {
					var a = c.$viewValue;
					d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
				}, b.on("change", function () {
					a.$apply(function () {
						z.parent() && z.remove(), c.$setViewValue(b.val())
					})
				})
			}

			function m(a, b, c) {
				var d;
				c.$render = function () {
					var a = new Bb(c.$viewValue);
					f(b.find("option"), function (b) {
						b.selected = s(a.get(b.value))
					})
				}, a.$watch(function () {
					K(d, c.$viewValue) || (d = I(c.$viewValue), c.$render())
				}), b.on("change", function () {
					a.$apply(function () {
						var a = [];
						f(b.find("option"), function (b) {
							b.selected && a.push(b.value)
						}), c.$setViewValue(a)
					})
				})
			}

			function n(b, f, h) {
				function i() {
					var a, c, d, e, i, j, q, u, A, B, C, D, E, F, G, H = {"": []}, I = [""], J = h.$modelValue, K = p(b) || [], L = m ? g(K) : K, M = {}, N = !1;
					if (t)if (r && x(J)) {
						N = new Bb([]);
						for (var O = 0; O < J.length; O++)M[l] = J[O], N.put(r(b, M), J[O])
					} else N = new Bb(J);
					for (C = 0; A = L.length, A > C; C++) {
						if (q = C, m) {
							if (q = L[C], "$" === q.charAt(0))continue;
							M[m] = q
						}
						if (M[l] = K[q], a = n(b, M) || "", (c = H[a]) || (c = H[a] = [], I.push(a)), t)D = s(N.remove(r ? r(b, M) : o(b, M))); else {
							if (r) {
								var P = {};
								P[l] = J, D = r(b, P) === r(b, M)
							} else D = J === o(b, M);
							N = N || D
						}
						G = k(b, M), G = s(G) ? G : "", c.push({id: r ? r(b, M) : m ? L[C] : C, label: G, selected: D})
					}
					for (t || (v || null === J ? H[""].unshift({id: "", label: "", selected: !N}) : N || H[""].unshift({id: "?", label: "", selected: !0})), B = 0, u = I.length; u > B; B++) {
						for (a = I[B], c = H[a], z.length <= B ? (e = {element: y.clone().attr("label", a), label: c.label}, i = [e], z.push(i), f.append(e.element)) : (i = z[B], e = i[0], e.label != a && e.element.attr("label", e.label = a)), E = null, C = 0, A = c.length; A > C; C++)d = c[C], (j = i[C + 1]) ? (E = j.element, j.label !== d.label && E.text(j.label = d.label), j.id !== d.id && E.val(j.id = d.id), E[0].selected !== d.selected && E.prop("selected", j.selected = d.selected)) : ("" === d.id && v ? F = v : (F = w.clone()).val(d.id).attr("selected", d.selected).text(d.label), i.push(j = {element: F, label: d.label, id: d.id, selected: d.selected}), E ? E.after(F) : e.element.append(F), E = F);
						for (C++; i.length > C;)i.pop().element.remove()
					}
					for (; z.length > B;)z.pop()[0].element.remove()
				}

				var j;
				if (!(j = u.match(e)))throw $e("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(f));
				var k = d(j[2] || j[1]), l = j[4] || j[6], m = j[5], n = d(j[3] || ""), o = d(j[2] ? j[1] : l), p = d(j[7]), q = j[8], r = q ? d(j[8]) : null, z = [
					[
						{element: f, label: ""}
					]
				];
				v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), f.html(""), f.on("change", function () {
					b.$apply(function () {
						var a, d, e, g, i, j, k, n, q, s = p(b) || [], u = {};
						if (t) {
							for (e = [], j = 0, n = z.length; n > j; j++)for (a = z[j], i = 1, k = a.length; k > i; i++)if ((g = a[i].element)[0].selected) {
								if (d = g.val(), m && (u[m] = d), r)for (q = 0; q < s.length && (u[l] = s[q], r(b, u) != d); q++); else u[l] = s[d];
								e.push(o(b, u))
							}
						} else if (d = f.val(), "?" == d)e = c; else if ("" === d)e = null; else if (r) {
							for (q = 0; q < s.length; q++)if (u[l] = s[q], r(b, u) == d) {
								e = o(b, u);
								break
							}
						} else u[l] = s[d], m && (u[m] = d), e = o(b, u);
						h.$setViewValue(e)
					})
				}), h.$render = i, b.$watch(i)
			}

			if (k[1]) {
				for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = ed(b.createElement("option")), y = ed(b.createElement("optgroup")), z = w.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)if ("" === B[A].value) {
					o = v = B.eq(A);
					break
				}
				if (p.init(q, v, z), t && (j.required || j.ngRequired)) {
					var D = function (a) {
						return q.$setValidity("required", !j.required || a && a.length), a
					};
					q.$parsers.push(D), q.$formatters.unshift(D), j.$observe("required", function () {
						D(q.$viewValue)
					})
				}
				u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
			}
		}}
	}], bf = ["$interpolate", function (a) {
		var b = {addOption: o, removeOption: o};
		return{restrict: "E", priority: 100, compile: function (c, d) {
			if (r(d.value)) {
				var e = a(c.text(), !0);
				e || d.$set("value", c.text())
			}
			return function (a, c, d) {
				var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
				h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function (a, b) {
					d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
				}) : h.addOption(d.value), c.on("$destroy", function () {
					h.removeOption(d.value)
				})
			}
		}}
	}], cf = q({restrict: "E", terminal: !0});
	ab(), hb(md), ed(b).ready(function () {
		Z(b, $)
	})
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{clip:rect(0,auto,auto,0);-ms-zoom:1.0001;}.ng-animate-active{clip:rect(-1px,auto,auto,0);-ms-zoom:1;}</style>'), function (a, b, c) {
	"use strict";
	function d(a) {
		return null != a && "" !== a && "hasOwnProperty" !== a && g.test("." + a)
	}

	function e(a, b) {
		if (!d(b))throw f("badmember", 'Dotted member path "@{0}" is invalid.', b);
		for (var e = b.split("."), g = 0, h = e.length; h > g && a !== c; g++) {
			var i = e[g];
			a = null !== a ? a[i] : c
		}
		return a
	}

	var f = b.$$minErr("$resource"), g = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
	b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q", function (a, d) {
		function g(a) {
			return h(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
		}

		function h(a, b) {
			return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
		}

		function i(a, b) {
			this.template = a, this.defaults = b || {}, this.urlParams = {}
		}

		function j(g, h, q) {
			function r(a, b) {
				var c = {};
				return b = n({}, h, b), m(b, function (b, d) {
					p(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
				}), c
			}

			function s(a) {
				return a.resource
			}

			function t(a) {
				o(a || {}, this)
			}

			var u = new i(g);
			return q = n({}, k, q), m(q, function (e, g) {
				var h = /^(POST|PUT|PATCH)$/i.test(e.method);
				t[g] = function (g, i, j, k) {
					var q, v, w, x = {};
					switch (arguments.length) {
						case 4:
							w = k, v = j;
						case 3:
						case 2:
							if (!p(i)) {
								x = g, q = i, v = j;
								break
							}
							if (p(g)) {
								v = g, w = i;
								break
							}
							v = i, w = j;
						case 1:
							p(g) ? v = g : h ? q = g : x = g;
							break;
						case 0:
							break;
						default:
							throw f("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
					}
					var y = q instanceof t, z = y ? q : e.isArray ? [] : new t(q), A = {}, B = e.interceptor && e.interceptor.response || s, C = e.interceptor && e.interceptor.responseError || c;
					m(e, function (a, b) {
						"params" != b && "isArray" != b && "interceptor" != b && (A[b] = o(a))
					}), h && (A.data = q), u.setUrlParams(A, n({}, r(q, e.params || {}), x), e.url);
					var D = a(A).then(function (a) {
						var c = a.data, d = z.$promise;
						if (c) {
							if (b.isArray(c) !== !!e.isArray)throw f("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", e.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
							e.isArray ? (z.length = 0, m(c, function (a) {
								z.push(new t(a))
							})) : (o(c, z), z.$promise = d)
						}
						return z.$resolved = !0, a.resource = z, a
					}, function (a) {
						return z.$resolved = !0, (w || l)(a), d.reject(a)
					});
					return D = D.then(function (a) {
						var b = B(a);
						return(v || l)(b, a.headers), b
					}, C), y ? D : (z.$promise = D, z.$resolved = !1, z)
				}, t.prototype["$" + g] = function (a, b, c) {
					p(a) && (c = b, b = a, a = {});
					var d = t[g](a, this, b, c);
					return d.$promise || d
				}
			}), t.bind = function (a) {
				return j(g, n({}, h, a), q)
			}, t
		}

		var k = {get: {method: "GET"}, save: {method: "POST"}, query: {method: "GET", isArray: !0}, remove: {method: "DELETE"}, "delete": {method: "DELETE"}}, l = b.noop, m = b.forEach, n = b.extend, o = b.copy, p = b.isFunction;
		return i.prototype = {setUrlParams: function (a, c, d) {
			var e, h, i = this, j = d || i.template, k = i.urlParams = {};
			m(j.split(/\W/), function (a) {
				if ("hasOwnProperty" === a)throw f("badname", "hasOwnProperty is not a valid parameter name.");
				!new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
			}), j = j.replace(/\\:/g, ":"), c = c || {}, m(i.urlParams, function (a, d) {
				e = c.hasOwnProperty(d) ? c[d] : i.defaults[d], b.isDefined(e) && null !== e ? (h = g(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), h + "$1")) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function (a, b, c) {
					return"/" == c.charAt(0) ? c : b + c
				})
			}), j = j.replace(/\/+$/, ""), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), m(c, function (b, c) {
				i.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
			})
		}}, j
	}])
}(window, window.angular), function (a, b) {
	"use strict";
	function c() {
		function a(a, c) {
			return b.extend(new (b.extend(function () {
			}, {prototype: a})), c)
		}

		function c(a, b) {
			var c = b.caseInsensitiveMatch, d = {originalPath: a, regexp: a}, e = d.keys = [];
			return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g, function (a, b, c, d) {
				var f = "?" === d ? d : null, g = "*" === d ? d : null;
				return e.push({name: c, optional: !!f}), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
			}).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
		}

		var d = {};
		this.when = function (a, e) {
			if (d[a] = b.extend({reloadOnSearch: !0}, e, a && c(a, e)), a) {
				var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
				d[f] = b.extend({redirectTo: a}, c(f, e))
			}
			return this
		}, this.otherwise = function (a) {
			return this.when(null, a), this
		}, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function (c, e, f, g, h, i, j, k) {
			function l(a, b) {
				var c = b.keys, d = {};
				if (!b.regexp)return null;
				var e = b.regexp.exec(a);
				if (!e)return null;
				for (var f = 1, g = e.length; g > f; ++f) {
					var h = c[f - 1], i = "string" == typeof e[f] ? decodeURIComponent(e[f]) : e[f];
					h && i && (d[h.name] = i)
				}
				return d
			}

			function m() {
				var a = n(), d = q.current;
				a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !p ? (d.params = a.params, b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (p = !1, c.$broadcast("$routeChangeStart", a, d), q.current = a, a && a.redirectTo && (b.isString(a.redirectTo) ? e.path(o(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), g.when(a).then(function () {
					if (a) {
						var c, d, e = b.extend({}, a.resolve);
						return b.forEach(e, function (a, c) {
							e[c] = b.isString(a) ? h.get(a) : h.invoke(a)
						}), b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, {cache: j}).then(function (a) {
							return a.data
						}))), b.isDefined(c) && (e.$template = c), g.all(e)
					}
				}).then(function (e) {
					a == q.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d))
				}, function (b) {
					a == q.current && c.$broadcast("$routeChangeError", a, d, b)
				}))
			}

			function n() {
				var c, f;
				return b.forEach(d, function (d) {
					!f && (c = l(e.path(), d)) && (f = a(d, {params: b.extend({}, e.search(), c), pathParams: c}), f.$$route = d)
				}), f || d[null] && a(d[null], {params: {}, pathParams: {}})
			}

			function o(a, c) {
				var d = [];
				return b.forEach((a || "").split(":"), function (a, b) {
					if (0 === b)d.push(a); else {
						var e = a.match(/(\w+)(.*)/), f = e[1];
						d.push(c[f]), d.push(e[2] || ""), delete c[f]
					}
				}), d.join("")
			}

			var p = !1, q = {routes: d, reload: function () {
				p = !0, c.$evalAsync(m)
			}};
			return c.$on("$locationChangeSuccess", m), q
		}]
	}

	function d() {
		this.$get = function () {
			return{}
		}
	}

	function e(a, c, d, e, f) {
		return{restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (g, h, i, j, k) {
			function l() {
				n && (n.$destroy(), n = null), o && (f.leave(o), o = null)
			}

			function m() {
				var i = a.current && a.current.locals, j = i && i.$template;
				if (j) {
					var m = g.$new();
					k(m, function (k) {
						k.html(j), f.enter(k, null, o || h, function () {
							!b.isDefined(p) || p && !g.$eval(p) || c()
						}), l();
						var r = d(k.contents()), s = a.current;
						if (n = s.scope = m, o = k, s.controller) {
							i.$scope = n;
							var t = e(s.controller, i);
							s.controllerAs && (n[s.controllerAs] = t), k.data("$ngControllerController", t), k.children().data("$ngControllerController", t)
						}
						r(n), n.$emit("$viewContentLoaded"), n.$eval(q)
					})
				} else l()
			}

			var n, o, p = i.autoscroll, q = i.onload || "";
			g.$on("$routeChangeSuccess", m), m()
		}}
	}

	var f = b.module("ngRoute", ["ng"]).provider("$route", c);
	f.provider("$routeParams", d), f.directive("ngView", e), e.$inject = ["$route", "$anchorScroll", "$compile", "$controller", "$animate"]
}(window, window.angular), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdownToggle", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/popup.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function (a, b, c) {
	function d(a) {
		for (var b in a)if (void 0 !== f.style[b])return a[b]
	}

	var e = function (d, f, g) {
		g = g || {};
		var h = a.defer(), i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"], j = function () {
			c.$apply(function () {
				d.unbind(i, j), h.resolve(d)
			})
		};
		return i && d.bind(i, j), b(function () {
			angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
		}), h.promise.cancel = function () {
			i && d.unbind(i, j), h.reject("Transition cancelled")
		}, h.promise
	}, f = document.createElement("trans"), g = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend"}, h = {WebkitTransition: "webkitAnimationEnd", MozTransition: "animationend", OTransition: "oAnimationEnd", transition: "animationend"};
	return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
}]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function (a) {
	return{link: function (b, c, d) {
		function e(b) {
			function d() {
				j === e && (j = void 0)
			}

			var e = a(c, b);
			return j && j.cancel(), j = e, e.then(d, d), e
		}

		function f() {
			k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({height: c[0].scrollHeight + "px"}).then(g))
		}

		function g() {
			c.removeClass("collapsing"), c.addClass("collapse in"), c.css({height: "auto"})
		}

		function h() {
			if (k)k = !1, i(), c.css({height: 0}); else {
				c.css({height: c[0].scrollHeight + "px"});
				{
					c[0].offsetWidth
				}
				c.removeClass("collapse in").addClass("collapsing"), e({height: 0}).then(i)
			}
		}

		function i() {
			c.removeClass("collapsing"), c.addClass("collapse")
		}

		var j, k = !0;
		b.$watch(d.collapse, function (a) {
			a ? h() : f()
		})
	}}
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function (a, b, c) {
	this.groups = [], this.closeOthers = function (d) {
		var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
		e && angular.forEach(this.groups, function (a) {
			a !== d && (a.isOpen = !1)
		})
	}, this.addGroup = function (a) {
		var b = this;
		this.groups.push(a), a.$on("$destroy", function () {
			b.removeGroup(a)
		})
	}, this.removeGroup = function (a) {
		var b = this.groups.indexOf(a);
		-1 !== b && this.groups.splice(this.groups.indexOf(a), 1)
	}
}]).directive("accordion", function () {
	return{restrict: "EA", controller: "AccordionController", transclude: !0, replace: !1, templateUrl: "template/accordion/accordion.html"}
}).directive("accordionGroup", ["$parse", function (a) {
	return{require: "^accordion", restrict: "EA", transclude: !0, replace: !0, templateUrl: "template/accordion/accordion-group.html", scope: {heading: "@"}, controller: function () {
		this.setHeading = function (a) {
			this.heading = a
		}
	}, link: function (b, c, d, e) {
		var f, g;
		e.addGroup(b), b.isOpen = !1, d.isOpen && (f = a(d.isOpen), g = f.assign, b.$parent.$watch(f, function (a) {
			b.isOpen = !!a
		})), b.$watch("isOpen", function (a) {
			a && e.closeOthers(b), g && g(b.$parent, a)
		})
	}}
}]).directive("accordionHeading", function () {
	return{restrict: "EA", transclude: !0, template: "", replace: !0, require: "^accordionGroup", compile: function (a, b, c) {
		return function (a, b, d, e) {
			e.setHeading(c(a, function () {
			}))
		}
	}}
}).directive("accordionTransclude", function () {
	return{require: "^accordionGroup", link: function (a, b, c, d) {
		a.$watch(function () {
			return d[c.accordionTransclude]
		}, function (a) {
			a && (b.html(""), b.append(a))
		})
	}}
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function (a, b) {
	a.closeable = "close"in b
}]).directive("alert", function () {
	return{restrict: "EA", controller: "AlertController", templateUrl: "template/alert/alert.html", transclude: !0, replace: !0, scope: {type: "=", close: "&"}}
}), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
	return function (a, b, c) {
		b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function (a) {
			b.html(a || "")
		})
	}
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {activeClass: "active", toggleEvent: "click"}).controller("ButtonsController", ["buttonConfig", function (a) {
	this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function () {
	return{require: ["btnRadio", "ngModel"], controller: "ButtonsController", link: function (a, b, c, d) {
		var e = d[0], f = d[1];
		f.$render = function () {
			b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
		}, b.bind(e.toggleEvent, function () {
			b.hasClass(e.activeClass) || a.$apply(function () {
				f.$setViewValue(a.$eval(c.btnRadio)), f.$render()
			})
		})
	}}
}).directive("btnCheckbox", function () {
	return{require: ["btnCheckbox", "ngModel"], controller: "ButtonsController", link: function (a, b, c, d) {
		function e() {
			return g(c.btnCheckboxTrue, !0)
		}

		function f() {
			return g(c.btnCheckboxFalse, !1)
		}

		function g(b, c) {
			var d = a.$eval(b);
			return angular.isDefined(d) ? d : c
		}

		var h = d[0], i = d[1];
		i.$render = function () {
			b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
		}, b.bind(h.toggleEvent, function () {
			a.$apply(function () {
				i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
			})
		})
	}}
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", "$q", function (a, b, c) {
	function d() {
		e();
		var c = +a.interval;
		!isNaN(c) && c >= 0 && (g = b(f, c))
	}

	function e() {
		g && (b.cancel(g), g = null)
	}

	function f() {
		h ? (a.next(), d()) : a.pause()
	}

	var g, h, i = this, j = i.slides = [], k = -1;
	i.currentSlide = null;
	var l = !1;
	i.select = function (e, f) {
		function g() {
			if (!l) {
				if (i.currentSlide && angular.isString(f) && !a.noTransition && e.$element) {
					e.$element.addClass(f);
					{
						e.$element[0].offsetWidth
					}
					angular.forEach(j, function (a) {
						angular.extend(a, {direction: "", entering: !1, leaving: !1, active: !1})
					}), angular.extend(e, {direction: f, active: !0, entering: !0}), angular.extend(i.currentSlide || {}, {direction: f, leaving: !0}), a.$currentTransition = c(e.$element, {}), function (b, c) {
						a.$currentTransition.then(function () {
							h(b, c)
						}, function () {
							h(b, c)
						})
					}(e, i.currentSlide)
				} else h(e, i.currentSlide);
				i.currentSlide = e, k = m, d()
			}
		}

		function h(b, c) {
			angular.extend(b, {direction: "", active: !0, leaving: !1, entering: !1}), angular.extend(c || {}, {direction: "", active: !1, leaving: !1, entering: !1}), a.$currentTransition = null
		}

		var m = j.indexOf(e);
		void 0 === f && (f = m > k ? "next" : "prev"), e && e !== i.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
	}, a.$on("$destroy", function () {
		l = !0
	}), i.indexOfSlide = function (a) {
		return j.indexOf(a)
	}, a.next = function () {
		var b = (k + 1) % j.length;
		return a.$currentTransition ? void 0 : i.select(j[b], "next")
	}, a.prev = function () {
		var b = 0 > k - 1 ? j.length - 1 : k - 1;
		return a.$currentTransition ? void 0 : i.select(j[b], "prev")
	}, a.select = function (a) {
		i.select(a)
	}, a.isActive = function (a) {
		return i.currentSlide === a
	}, a.slides = function () {
		return j
	}, a.$watch("interval", d), a.$on("$destroy", e), a.play = function () {
		h || (h = !0, d())
	}, a.pause = function () {
		a.noPause || (h = !1, e())
	}, i.addSlide = function (b, c) {
		b.$element = c, j.push(b), 1 === j.length || b.active ? (i.select(j[j.length - 1]), 1 == j.length && a.play()) : b.active = !1
	}, i.removeSlide = function (a) {
		var b = j.indexOf(a);
		j.splice(b, 1), j.length > 0 && a.active ? b >= j.length ? i.select(j[b - 1]) : i.select(j[b]) : k > b && k--
	}
}]).directive("carousel", [function () {
	return{restrict: "EA", transclude: !0, replace: !0, controller: "CarouselController", require: "carousel", templateUrl: "template/carousel/carousel.html", scope: {interval: "=", noTransition: "=", noPause: "="}}
}]).directive("slide", ["$parse", function (a) {
	return{require: "^carousel", restrict: "EA", transclude: !0, replace: !0, templateUrl: "template/carousel/slide.html", scope: {}, link: function (b, c, d, e) {
		if (d.active) {
			var f = a(d.active), g = f.assign, h = b.active = f(b.$parent);
			b.$watch(function () {
				var a = f(b.$parent);
				return a !== b.active && (a !== h ? h = b.active = a : g(b.$parent, a = h = b.active)), a
			})
		}
		e.addSlide(b, c), b.$on("$destroy", function () {
			e.removeSlide(b)
		}), b.$watch("active", function (a) {
			a && e.select(b)
		})
	}}
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (a, b) {
	function c(a, c) {
		return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
	}

	function d(a) {
		return"static" === (c(a, "position") || "static")
	}

	var e = function (b) {
		for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);)e = e.offsetParent;
		return e || c
	};
	return{position: function (b) {
		var c = this.offset(b), d = {top: 0, left: 0}, f = e(b[0]);
		f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
		var g = b[0].getBoundingClientRect();
		return{width: g.width || b.prop("offsetWidth"), height: g.height || b.prop("offsetHeight"), top: c.top - d.top, left: c.left - d.left}
	}, offset: function (c) {
		var d = c[0].getBoundingClientRect();
		return{width: d.width || c.prop("offsetWidth"), height: d.height || c.prop("offsetHeight"), top: d.top + (b.pageYOffset || a[0].body.scrollTop || a[0].documentElement.scrollTop), left: d.left + (b.pageXOffset || a[0].body.scrollLeft || a[0].documentElement.scrollLeft)}
	}}
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.position"]).constant("datepickerConfig", {dayFormat: "dd", monthFormat: "MMMM", yearFormat: "yyyy", dayHeaderFormat: "EEE", dayTitleFormat: "MMMM yyyy", monthTitleFormat: "yyyy", showWeeks: !0, startingDay: 0, yearRange: 20, minDate: null, maxDate: null}).controller("DatepickerController", ["$scope", "$attrs", "dateFilter", "datepickerConfig", function (a, b, c, d) {
	function e(b, c) {
		return angular.isDefined(b) ? a.$parent.$eval(b) : c
	}

	function f(a, b) {
		return new Date(a, b, 0).getDate()
	}

	function g(a, b) {
		for (var c = new Array(b), d = a, e = 0; b > e;)c[e++] = new Date(d), d.setDate(d.getDate() + 1);
		return c
	}

	function h(a, b, d, e) {
		return{date: a, label: c(a, b), selected: !!d, secondary: !!e}
	}

	var i = {day: e(b.dayFormat, d.dayFormat), month: e(b.monthFormat, d.monthFormat), year: e(b.yearFormat, d.yearFormat), dayHeader: e(b.dayHeaderFormat, d.dayHeaderFormat), dayTitle: e(b.dayTitleFormat, d.dayTitleFormat), monthTitle: e(b.monthTitleFormat, d.monthTitleFormat)}, j = e(b.startingDay, d.startingDay), k = e(b.yearRange, d.yearRange);
	this.minDate = d.minDate ? new Date(d.minDate) : null, this.maxDate = d.maxDate ? new Date(d.maxDate) : null, this.modes = [
		{name: "day", getVisibleDates: function (a, b) {
			var d = a.getFullYear(), e = a.getMonth(), k = new Date(d, e, 1), l = j - k.getDay(), m = l > 0 ? 7 - l : -l, n = new Date(k), o = 0;
			m > 0 && (n.setDate(-m + 1), o += m), o += f(d, e + 1), o += (7 - o % 7) % 7;
			for (var p = g(n, o), q = new Array(7), r = 0; o > r; r++) {
				var s = new Date(p[r]);
				p[r] = h(s, i.day, b && b.getDate() === s.getDate() && b.getMonth() === s.getMonth() && b.getFullYear() === s.getFullYear(), s.getMonth() !== e)
			}
			for (var t = 0; 7 > t; t++)q[t] = c(p[t].date, i.dayHeader);
			return{objects: p, title: c(a, i.dayTitle), labels: q}
		}, compare: function (a, b) {
			return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
		}, split: 7, step: {months: 1}},
		{name: "month", getVisibleDates: function (a, b) {
			for (var d = new Array(12), e = a.getFullYear(), f = 0; 12 > f; f++) {
				var g = new Date(e, f, 1);
				d[f] = h(g, i.month, b && b.getMonth() === f && b.getFullYear() === e)
			}
			return{objects: d, title: c(a, i.monthTitle)}
		}, compare: function (a, b) {
			return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
		}, split: 3, step: {years: 1}},
		{name: "year", getVisibleDates: function (a, b) {
			for (var c = new Array(k), d = a.getFullYear(), e = parseInt((d - 1) / k, 10) * k + 1, f = 0; k > f; f++) {
				var g = new Date(e + f, 0, 1);
				c[f] = h(g, i.year, b && b.getFullYear() === g.getFullYear())
			}
			return{objects: c, title: [c[0].label, c[k - 1].label].join(" - ")}
		}, compare: function (a, b) {
			return a.getFullYear() - b.getFullYear()
		}, split: 5, step: {years: k}}
	], this.isDisabled = function (b, c) {
		var d = this.modes[c || 0];
		return this.minDate && d.compare(b, this.minDate) < 0 || this.maxDate && d.compare(b, this.maxDate) > 0 || a.dateDisabled && a.dateDisabled({date: b, mode: d.name})
	}
}]).directive("datepicker", ["dateFilter", "$parse", "datepickerConfig", "$log", function (a, b, c, d) {
	return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/datepicker.html", scope: {dateDisabled: "&"}, require: ["datepicker", "?^ngModel"], controller: "DatepickerController", link: function (a, e, f, g) {
		function h() {
			a.showWeekNumbers = 0 === o && q
		}

		function i(a, b) {
			for (var c = []; a.length > 0;)c.push(a.splice(0, b));
			return c
		}

		function j(b) {
			var c = null, e = !0;
			n.$modelValue && (c = new Date(n.$modelValue), isNaN(c) ? (e = !1, d.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : b && (p = c)), n.$setValidity("date", e);
			var f = m.modes[o], g = f.getVisibleDates(p, c);
			angular.forEach(g.objects, function (a) {
				a.disabled = m.isDisabled(a.date, o)
			}), n.$setValidity("date-disabled", !c || !m.isDisabled(c)), a.rows = i(g.objects, f.split), a.labels = g.labels || [], a.title = g.title
		}

		function k(a) {
			o = a, h(), j()
		}

		function l(a) {
			var b = new Date(a);
			b.setDate(b.getDate() + 4 - (b.getDay() || 7));
			var c = b.getTime();
			return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
		}

		var m = g[0], n = g[1];
		if (n) {
			var o = 0, p = new Date, q = c.showWeeks;
			f.showWeeks ? a.$parent.$watch(b(f.showWeeks), function (a) {
				q = !!a, h()
			}) : h(), f.min && a.$parent.$watch(b(f.min), function (a) {
				m.minDate = a ? new Date(a) : null, j()
			}), f.max && a.$parent.$watch(b(f.max), function (a) {
				m.maxDate = a ? new Date(a) : null, j()
			}), n.$render = function () {
				j(!0)
			}, a.select = function (a) {
				if (0 === o) {
					var b = n.$modelValue ? new Date(n.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
					b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), n.$setViewValue(b), j(!0)
				} else p = a, k(o - 1)
			}, a.move = function (a) {
				var b = m.modes[o].step;
				p.setMonth(p.getMonth() + a * (b.months || 0)), p.setFullYear(p.getFullYear() + a * (b.years || 0)), j()
			}, a.toggleMode = function () {
				k((o + 1) % m.modes.length)
			}, a.getWeekNumber = function (b) {
				return 0 === o && a.showWeekNumbers && 7 === b.length ? l(b[0].date) : null
			}
		}
	}}
}]).constant("datepickerPopupConfig", {dateFormat: "yyyy-MM-dd", currentText: "Today", toggleWeeksText: "Weeks", clearText: "Clear", closeText: "Done", closeOnDateSelection: !0, appendToBody: !1, showButtonBar: !0}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "datepickerPopupConfig", "datepickerConfig", function (a, b, c, d, e, f, g) {
	return{restrict: "EA", require: "ngModel", link: function (h, i, j, k) {
		function l(a) {
			u ? u(h, !!a) : q.isOpen = !!a
		}

		function m(a) {
			if (a) {
				if (angular.isDate(a))return k.$setValidity("date", !0), a;
				if (angular.isString(a)) {
					var b = new Date(a);
					return isNaN(b) ? (k.$setValidity("date", !1), void 0) : (k.$setValidity("date", !0), b)
				}
				return k.$setValidity("date", !1), void 0
			}
			return k.$setValidity("date", !0), null
		}

		function n(a, c, d) {
			a && (h.$watch(b(a), function (a) {
				q[c] = a
			}), y.attr(d || c, c))
		}

		function o() {
			q.position = s ? d.offset(i) : d.position(i), q.position.top = q.position.top + i.prop("offsetHeight")
		}

		var p, q = h.$new(), r = angular.isDefined(j.closeOnDateSelection) ? h.$eval(j.closeOnDateSelection) : f.closeOnDateSelection, s = angular.isDefined(j.datepickerAppendToBody) ? h.$eval(j.datepickerAppendToBody) : f.appendToBody;
		j.$observe("datepickerPopup", function (a) {
			p = a || f.dateFormat, k.$render()
		}), q.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$eval(j.showButtonBar) : f.showButtonBar, h.$on("$destroy", function () {
			B.remove(), q.$destroy()
		}), j.$observe("currentText", function (a) {
			q.currentText = angular.isDefined(a) ? a : f.currentText
		}), j.$observe("toggleWeeksText", function (a) {
			q.toggleWeeksText = angular.isDefined(a) ? a : f.toggleWeeksText
		}), j.$observe("clearText", function (a) {
			q.clearText = angular.isDefined(a) ? a : f.clearText
		}), j.$observe("closeText", function (a) {
			q.closeText = angular.isDefined(a) ? a : f.closeText
		});
		var t, u;
		j.isOpen && (t = b(j.isOpen), u = t.assign, h.$watch(t, function (a) {
			q.isOpen = !!a
		})), q.isOpen = t ? t(h) : !1;
		var v = function (a) {
			q.isOpen && a.target !== i[0] && q.$apply(function () {
				l(!1)
			})
		}, w = function () {
			q.$apply(function () {
				l(!0)
			})
		}, x = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
		x.attr({"ng-model": "date", "ng-change": "dateSelection()"});
		var y = angular.element(x.children()[0]);
		j.datepickerOptions && y.attr(angular.extend({}, h.$eval(j.datepickerOptions))), k.$parsers.unshift(m), q.dateSelection = function (a) {
			angular.isDefined(a) && (q.date = a), k.$setViewValue(q.date), k.$render(), r && l(!1)
		}, i.bind("input change keyup", function () {
			q.$apply(function () {
				q.date = k.$modelValue
			})
		}), k.$render = function () {
			var a = k.$viewValue ? e(k.$viewValue, p) : "";
			i.val(a), q.date = k.$modelValue
		}, n(j.min, "min"), n(j.max, "max"), j.showWeeks ? n(j.showWeeks, "showWeeks", "show-weeks") : (q.showWeeks = g.showWeeks, y.attr("show-weeks", "showWeeks")), j.dateDisabled && y.attr("date-disabled", j.dateDisabled);
		var z = !1, A = !1;
		q.$watch("isOpen", function (a) {
			a ? (o(), c.bind("click", v), A && i.unbind("focus", w), i[0].focus(), z = !0) : (z && c.unbind("click", v), i.bind("focus", w), A = !0), u && u(h, a)
		}), q.today = function () {
			q.dateSelection(new Date)
		}, q.clear = function () {
			q.dateSelection(null)
		};
		var B = a(x)(q);
		s ? c.find("body").append(B) : i.after(B)
	}}
}]).directive("datepickerPopupWrap", function () {
	return{restrict: "EA", replace: !0, transclude: !0, templateUrl: "template/datepicker/popup.html", link: function (a, b) {
		b.bind("click", function (a) {
			a.preventDefault(), a.stopPropagation()
		})
	}}
}), angular.module("ui.bootstrap.dropdownToggle", []).directive("dropdownToggle", ["$document", "$location", function (a) {
	var b = null, c = angular.noop;
	return{restrict: "CA", link: function (d, e) {
		d.$watch("$location.path", function () {
			c()
		}), e.parent().bind("click", function () {
			c()
		}), e.bind("click", function (d) {
			var f = e === b;
			d.preventDefault(), d.stopPropagation(), b && c(), f || e.hasClass("disabled") || e.prop("disabled") || (e.parent().addClass("open"), b = e, c = function (d) {
				d && (d.preventDefault(), d.stopPropagation()), a.unbind("click", c), e.parent().removeClass("open"), c = angular.noop, b = null
			}, a.bind("click", c))
		})
	}}
}]), angular.module("ui.bootstrap.modal", []).factory("$$stackedMap", function () {
	return{createNew: function () {
		var a = [];
		return{add: function (b, c) {
			a.push({key: b, value: c})
		}, get: function (b) {
			for (var c = 0; c < a.length; c++)if (b == a[c].key)return a[c]
		}, keys: function () {
			for (var b = [], c = 0; c < a.length; c++)b.push(a[c].key);
			return b
		}, top: function () {
			return a[a.length - 1]
		}, remove: function (b) {
			for (var c = -1, d = 0; d < a.length; d++)if (b == a[d].key) {
				c = d;
				break
			}
			return a.splice(c, 1)[0]
		}, removeTop: function () {
			return a.splice(a.length - 1, 1)[0]
		}, length: function () {
			return a.length
		}}
	}}
}).directive("modalBackdrop", ["$timeout", function (a) {
	return{restrict: "EA", replace: !0, templateUrl: "template/modal/backdrop.html", link: function (b) {
		b.animate = !1, a(function () {
			b.animate = !0
		})
	}}
}]).directive("modalWindow", ["$modalStack", "$timeout", function (a, b) {
	return{restrict: "EA", scope: {index: "@"}, replace: !0, transclude: !0, templateUrl: "template/modal/window.html", link: function (c, d, e) {
		c.windowClass = e.windowClass || "", b(function () {
			c.animate = !0, d[0].focus()
		}), c.close = function (b) {
			var c = a.getTop();
			c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
		}
	}}
}]).factory("$modalStack", ["$document", "$compile", "$rootScope", "$$stackedMap", function (a, b, c, d) {
	function e() {
		for (var a = -1, b = k.keys(), c = 0; c < b.length; c++)k.get(b[c]).value.backdrop && (a = c);
		return a
	}

	function f(b) {
		var c = a.find("body").eq(0), d = k.get(b).value;
		k.remove(b), d.modalDomEl.remove(), c.toggleClass(i, k.length() > 0), h && -1 == e() && (h.remove(), h = void 0), d.modalScope.$destroy()
	}

	var g, h, i = "modal-open", j = c.$new(!0), k = d.createNew(), l = {};
	return c.$watch(e, function (a) {
		j.index = a
	}), a.bind("keydown", function (a) {
		var b;
		27 === a.which && (b = k.top(), b && b.value.keyboard && c.$apply(function () {
			l.dismiss(b.key)
		}))
	}), l.open = function (c, d) {
		k.add(c, {deferred: d.deferred, modalScope: d.scope, backdrop: d.backdrop, keyboard: d.keyboard});
		var f = a.find("body").eq(0);
		e() >= 0 && !h && (g = angular.element("<div modal-backdrop></div>"), h = b(g)(j), f.append(h));
		var l = angular.element("<div modal-window></div>");
		l.attr("window-class", d.windowClass), l.attr("index", k.length() - 1), l.html(d.content);
		var m = b(l)(d.scope);
		k.top().value.modalDomEl = m, f.append(m), f.addClass(i)
	}, l.close = function (a, b) {
		var c = k.get(a).value;
		c && (c.deferred.resolve(b), f(a))
	}, l.dismiss = function (a, b) {
		var c = k.get(a).value;
		c && (c.deferred.reject(b), f(a))
	}, l.getTop = function () {
		return k.top()
	}, l
}]).provider("$modal", function () {
	var a = {options: {backdrop: !0, keyboard: !0}, $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function (b, c, d, e, f, g, h) {
		function i(a) {
			return a.template ? d.when(a.template) : e.get(a.templateUrl, {cache: f}).then(function (a) {
				return a.data
			})
		}

		function j(a) {
			var c = [];
			return angular.forEach(a, function (a) {
				(angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
			}), c
		}

		var k = {};
		return k.open = function (b) {
			var e = d.defer(), f = d.defer(), k = {result: e.promise, opened: f.promise, close: function (a) {
				h.close(k, a)
			}, dismiss: function (a) {
				h.dismiss(k, a)
			}};
			if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl)throw new Error("One of template or templateUrl options is required.");
			var l = d.all([i(b)].concat(j(b.resolve)));
			return l.then(function (a) {
				var d = (b.scope || c).$new();
				d.$close = k.close, d.$dismiss = k.dismiss;
				var f, i = {}, j = 1;
				b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function (b, c) {
					i[c] = a[j++]
				}), f = g(b.controller, i)), h.open(k, {scope: d, deferred: e, content: a[0], backdrop: b.backdrop, keyboard: b.keyboard, windowClass: b.windowClass})
			}, function (a) {
				e.reject(a)
			}), l.then(function () {
				f.resolve(!0)
			}, function () {
				f.reject(!1)
			}), k
		}, k
	}]};
	return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", "$interpolate", function (a, b, c, d) {
	var e = this, f = b.numPages ? c(b.numPages).assign : angular.noop;
	this.init = function (d) {
		b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
			e.itemsPerPage = parseInt(b, 10), a.totalPages = e.calculateTotalPages()
		}) : this.itemsPerPage = d
	}, this.noPrevious = function () {
		return 1 === this.page
	}, this.noNext = function () {
		return this.page === a.totalPages
	}, this.isActive = function (a) {
		return this.page === a
	}, this.calculateTotalPages = function () {
		var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
		return Math.max(b || 0, 1)
	}, this.getAttributeValue = function (b, c, e) {
		return angular.isDefined(b) ? e ? d(b)(a.$parent) : a.$parent.$eval(b) : c
	}, this.render = function () {
		this.page = parseInt(a.page, 10) || 1, this.page > 0 && this.page <= a.totalPages && (a.pages = this.getPages(this.page, a.totalPages))
	}, a.selectPage = function (b) {
		!e.isActive(b) && b > 0 && b <= a.totalPages && (a.page = b, a.onSelectPage({page: b}))
	}, a.$watch("page", function () {
		e.render()
	}), a.$watch("totalItems", function () {
		a.totalPages = e.calculateTotalPages()
	}), a.$watch("totalPages", function (b) {
		f(a.$parent, b), e.page > b ? a.selectPage(b) : e.render()
	})
}]).constant("paginationConfig", {itemsPerPage: 10, boundaryLinks: !1, directionLinks: !0, firstText: "First", previousText: "Previous", nextText: "Next", lastText: "Last", rotate: !0}).directive("pagination", ["$parse", "paginationConfig", function (a, b) {
	return{restrict: "EA", scope: {page: "=", totalItems: "=", onSelectPage: " &"}, controller: "PaginationController", templateUrl: "template/pagination/pagination.html", replace: !0, link: function (c, d, e, f) {
		function g(a, b, c, d) {
			return{number: a, text: b, active: c, disabled: d}
		}

		var h, i = f.getAttributeValue(e.boundaryLinks, b.boundaryLinks), j = f.getAttributeValue(e.directionLinks, b.directionLinks), k = f.getAttributeValue(e.firstText, b.firstText, !0), l = f.getAttributeValue(e.previousText, b.previousText, !0), m = f.getAttributeValue(e.nextText, b.nextText, !0), n = f.getAttributeValue(e.lastText, b.lastText, !0), o = f.getAttributeValue(e.rotate, b.rotate);
		f.init(b.itemsPerPage), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
			h = parseInt(a, 10), f.render()
		}), f.getPages = function (a, b) {
			var c = [], d = 1, e = b, p = angular.isDefined(h) && b > h;
			p && (o ? (d = Math.max(a - Math.floor(h / 2), 1), e = d + h - 1, e > b && (e = b, d = e - h + 1)) : (d = (Math.ceil(a / h) - 1) * h + 1, e = Math.min(d + h - 1, b)));
			for (var q = d; e >= q; q++) {
				var r = g(q, q, f.isActive(q), !1);
				c.push(r)
			}
			if (p && !o) {
				if (d > 1) {
					var s = g(d - 1, "...", !1, !1);
					c.unshift(s)
				}
				if (b > e) {
					var t = g(e + 1, "...", !1, !1);
					c.push(t)
				}
			}
			if (j) {
				var u = g(a - 1, l, !1, f.noPrevious());
				c.unshift(u);
				var v = g(a + 1, m, !1, f.noNext());
				c.push(v)
			}
			if (i) {
				var w = g(1, k, !1, f.noPrevious());
				c.unshift(w);
				var x = g(b, n, !1, f.noNext());
				c.push(x)
			}
			return c
		}
	}}
}]).constant("pagerConfig", {itemsPerPage: 10, previousText: "« Previous", nextText: "Next »", align: !0}).directive("pager", ["pagerConfig", function (a) {
	return{restrict: "EA", scope: {page: "=", totalItems: "=", onSelectPage: " &"}, controller: "PaginationController", templateUrl: "template/pagination/pager.html", replace: !0, link: function (b, c, d, e) {
		function f(a, b, c, d, e) {
			return{number: a, text: b, disabled: c, previous: i && d, next: i && e}
		}

		var g = e.getAttributeValue(d.previousText, a.previousText, !0), h = e.getAttributeValue(d.nextText, a.nextText, !0), i = e.getAttributeValue(d.align, a.align);
		e.init(a.itemsPerPage), e.getPages = function (a) {
			return[f(a - 1, g, e.noPrevious(), !0, !1), f(a + 1, h, e.noNext(), !1, !0)]
		}
	}}
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
	function a(a) {
		var b = /[A-Z]/g, c = "-";
		return a.replace(b, function (a, b) {
			return(b ? c : "") + a.toLowerCase()
		})
	}

	var b = {placement: "top", animation: !0, popupDelay: 0}, c = {mouseenter: "mouseleave", click: "click", focus: "blur"}, d = {};
	this.options = function (a) {
		angular.extend(d, a)
	}, this.setTriggers = function (a) {
		angular.extend(c, a)
	}, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function (e, f, g, h, i, j, k) {
		return function (e, l, m) {
			function n(a) {
				var b = a || o.trigger || m, d = c[b] || b;
				return{show: b, hide: d}
			}

			var o = angular.extend({}, b, d), p = a(e), q = k.startSymbol(), r = k.endSymbol(), s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
			return{restrict: "EA", scope: !0, link: function (a, b, c) {
				function d() {
					a.tt_isOpen ? m() : k()
				}

				function k() {
					(!y || a.$eval(c[l + "Enable"])) && (a.tt_popupDelay ? (t = g(p, a.tt_popupDelay), t.then(function (a) {
						a()
					})) : a.$apply(p)())
				}

				function m() {
					a.$apply(function () {
						q()
					})
				}

				function p() {
					return a.tt_content ? (r && g.cancel(r), u.css({top: 0, left: 0, display: "block"}), v ? i.find("body").append(u) : b.after(u), z(), a.tt_isOpen = !0, z) : angular.noop
				}

				function q() {
					a.tt_isOpen = !1, g.cancel(t), a.tt_animation ? r = g(function () {
						u.remove()
					}, 500) : u.remove()
				}

				var r, t, u = f(s)(a), v = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, w = n(void 0), x = !1, y = angular.isDefined(c[l + "Enable"]), z = function () {
					var c, d, e, f;
					switch (c = v ? j.offset(b) : j.position(b), d = u.prop("offsetWidth"), e = u.prop("offsetHeight"), a.tt_placement) {
						case"right":
							f = {top: c.top + c.height / 2 - e / 2, left: c.left + c.width};
							break;
						case"bottom":
							f = {top: c.top + c.height, left: c.left + c.width / 2 - d / 2};
							break;
						case"left":
							f = {top: c.top + c.height / 2 - e / 2, left: c.left - d};
							break;
						default:
							f = {top: c.top - e, left: c.left + c.width / 2 - d / 2}
					}
					f.top += "px", f.left += "px", u.css(f)
				};
				a.tt_isOpen = !1, c.$observe(e, function (b) {
					a.tt_content = b, !b && a.tt_isOpen && q()
				}), c.$observe(l + "Title", function (b) {
					a.tt_title = b
				}), c.$observe(l + "Placement", function (b) {
					a.tt_placement = angular.isDefined(b) ? b : o.placement
				}), c.$observe(l + "PopupDelay", function (b) {
					var c = parseInt(b, 10);
					a.tt_popupDelay = isNaN(c) ? o.popupDelay : c
				});
				var A = function () {
					x && (b.unbind(w.show, k), b.unbind(w.hide, m))
				};
				c.$observe(l + "Trigger", function (a) {
					A(), w = n(a), w.show === w.hide ? b.bind(w.show, d) : (b.bind(w.show, k), b.bind(w.hide, m)), x = !0
				});
				var B = a.$eval(c[l + "Animation"]);
				a.tt_animation = angular.isDefined(B) ? !!B : o.animation, c.$observe(l + "AppendToBody", function (b) {
					v = angular.isDefined(b) ? h(b)(a) : v
				}), v && a.$on("$locationChangeSuccess", function () {
					a.tt_isOpen && q()
				}), a.$on("$destroy", function () {
					g.cancel(r), g.cancel(t), A(), u.remove(), u.unbind(), u = null
				})
			}}
		}
	}]
}).directive("tooltipPopup", function () {
	return{restrict: "EA", replace: !0, scope: {content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/tooltip/tooltip-popup.html"}
}).directive("tooltip", ["$tooltip", function (a) {
	return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function () {
	return{restrict: "EA", replace: !0, scope: {content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"}
}).directive("tooltipHtmlUnsafe", ["$tooltip", function (a) {
	return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () {
	return{restrict: "EA", replace: !0, scope: {title: "@", content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/popover/popover.html"}
}).directive("popover", ["$compile", "$timeout", "$parse", "$window", "$tooltip", function (a, b, c, d, e) {
	return e("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", ["ui.bootstrap.transition"]).constant("progressConfig", {animate: !0, max: 100}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", "$transition", function (a, b, c, d) {
	var e = this, f = [], g = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, h = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
	this.addBar = function (a, b) {
		var c = 0, d = a.$parent.$index;
		angular.isDefined(d) && f[d] && (c = f[d].value), f.push(a), this.update(b, a.value, c), a.$watch("value", function (a, c) {
			a !== c && e.update(b, a, c)
		}), a.$on("$destroy", function () {
			e.removeBar(a)
		})
	}, this.update = function (a, b, c) {
		var e = this.getPercentage(b);
		h ? (a.css("width", this.getPercentage(c) + "%"), d(a, {width: e + "%"})) : a.css({transition: "none", width: e + "%"})
	}, this.removeBar = function (a) {
		f.splice(f.indexOf(a), 1)
	}, this.getPercentage = function (a) {
		return Math.round(100 * a / g)
	}
}]).directive("progress", function () {
	return{restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", require: "progress", scope: {}, template: '<div class="progress" ng-transclude></div>'}
}).directive("bar", function () {
	return{restrict: "EA", replace: !0, transclude: !0, require: "^progress", scope: {value: "=", type: "@"}, templateUrl: "template/progressbar/bar.html", link: function (a, b, c, d) {
		d.addBar(a, b)
	}}
}).directive("progressbar", function () {
	return{restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", scope: {value: "=", type: "@"}, templateUrl: "template/progressbar/progressbar.html", link: function (a, b, c, d) {
		d.addBar(a, angular.element(b.children()[0]))
	}}
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {max: 5, stateOn: null, stateOff: null}).controller("RatingController", ["$scope", "$attrs", "$parse", "ratingConfig", function (a, b, c, d) {
	this.maxRange = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : d.max, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : d.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : d.stateOff, this.createRateObjects = function (a) {
		for (var b = {stateOn: this.stateOn, stateOff: this.stateOff}, c = 0, d = a.length; d > c; c++)a[c] = angular.extend({index: c}, b, a[c]);
		return a
	}, a.range = angular.isDefined(b.ratingStates) ? this.createRateObjects(angular.copy(a.$parent.$eval(b.ratingStates))) : this.createRateObjects(new Array(this.maxRange)), a.rate = function (b) {
		a.readonly || a.value === b || (a.value = b)
	}, a.enter = function (b) {
		a.readonly || (a.val = b), a.onHover({value: b})
	}, a.reset = function () {
		a.val = angular.copy(a.value), a.onLeave()
	}, a.$watch("value", function (b) {
		a.val = b
	}), a.readonly = !1, b.readonly && a.$parent.$watch(c(b.readonly), function (b) {
		a.readonly = !!b
	})
}]).directive("rating", function () {
	return{restrict: "EA", scope: {value: "=", onHover: "&", onLeave: "&"}, controller: "RatingController", templateUrl: "template/rating/rating.html", replace: !0}
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (a) {
	var b = this, c = b.tabs = a.tabs = [];
	b.select = function (a) {
		angular.forEach(c, function (a) {
			a.active = !1
		}), a.active = !0
	}, b.addTab = function (a) {
		c.push(a), (1 === c.length || a.active) && b.select(a)
	}, b.removeTab = function (a) {
		var d = c.indexOf(a);
		if (a.active && c.length > 1) {
			var e = d == c.length - 1 ? d - 1 : d + 1;
			b.select(c[e])
		}
		c.splice(d, 1)
	}
}]).directive("tabset", function () {
	return{restrict: "EA", transclude: !0, replace: !0, scope: {}, controller: "TabsetController", templateUrl: "template/tabs/tabset.html", link: function (a, b, c) {
		a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1, a.type = angular.isDefined(c.type) ? a.$parent.$eval(c.type) : "tabs"
	}}
}).directive("tab", ["$parse", function (a) {
	return{require: "^tabset", restrict: "EA", replace: !0, templateUrl: "template/tabs/tab.html", transclude: !0, scope: {heading: "@", onSelect: "&select", onDeselect: "&deselect"}, controller: function () {
	}, compile: function (b, c, d) {
		return function (b, c, e, f) {
			var g, h;
			e.active ? (g = a(e.active), h = g.assign, b.$parent.$watch(g, function (a, c) {
				a !== c && (b.active = !!a)
			}), b.active = g(b.$parent)) : h = g = angular.noop, b.$watch("active", function (a) {
				h(b.$parent, a), a ? (f.select(b), b.onSelect()) : b.onDeselect()
			}), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
				b.disabled = !!a
			}), b.select = function () {
				b.disabled || (b.active = !0)
			}, f.addTab(b), b.$on("$destroy", function () {
				f.removeTab(b)
			}), b.$transcludeFn = d
		}
	}}
}]).directive("tabHeadingTransclude", [function () {
	return{restrict: "A", require: "^tab", link: function (a, b) {
		a.$watch("headingElement", function (a) {
			a && (b.html(""), b.append(a))
		})
	}}
}]).directive("tabContentTransclude", function () {
	function a(a) {
		return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
	}

	return{restrict: "A", require: "^tabset", link: function (b, c, d) {
		var e = b.$eval(d.tabContentTransclude);
		e.$transcludeFn(e.$parent, function (b) {
			angular.forEach(b, function (b) {
				a(b) ? e.headingElement = b : c.append(b)
			})
		})
	}}
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {hourStep: 1, minuteStep: 1, showMeridian: !0, meridians: null, readonlyInput: !1, mousewheel: !0}).directive("timepicker", ["$parse", "$log", "timepickerConfig", "$locale", function (a, b, c, d) {
	return{restrict: "EA", require: "?^ngModel", replace: !0, scope: {}, templateUrl: "template/timepicker/timepicker.html", link: function (e, f, g, h) {
		function i() {
			var a = parseInt(e.hours, 10), b = e.showMeridian ? a > 0 && 13 > a : a >= 0 && 24 > a;
			return b ? (e.showMeridian && (12 === a && (a = 0), e.meridian === q[1] && (a += 12)), a) : void 0
		}

		function j() {
			var a = parseInt(e.minutes, 10);
			return a >= 0 && 60 > a ? a : void 0
		}

		function k(a) {
			return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
		}

		function l(a) {
			m(), h.$setViewValue(new Date(p)), n(a)
		}

		function m() {
			h.$setValidity("time", !0), e.invalidHours = !1, e.invalidMinutes = !1
		}

		function n(a) {
			var b = p.getHours(), c = p.getMinutes();
			e.showMeridian && (b = 0 === b || 12 === b ? 12 : b % 12), e.hours = "h" === a ? b : k(b), e.minutes = "m" === a ? c : k(c), e.meridian = p.getHours() < 12 ? q[0] : q[1]
		}

		function o(a) {
			var b = new Date(p.getTime() + 6e4 * a);
			p.setHours(b.getHours(), b.getMinutes()), l()
		}

		if (h) {
			var p = new Date, q = angular.isDefined(g.meridians) ? e.$parent.$eval(g.meridians) : c.meridians || d.DATETIME_FORMATS.AMPMS, r = c.hourStep;
			g.hourStep && e.$parent.$watch(a(g.hourStep), function (a) {
				r = parseInt(a, 10)
			});
			var s = c.minuteStep;
			g.minuteStep && e.$parent.$watch(a(g.minuteStep), function (a) {
				s = parseInt(a, 10)
			}), e.showMeridian = c.showMeridian, g.showMeridian && e.$parent.$watch(a(g.showMeridian), function (a) {
				if (e.showMeridian = !!a, h.$error.time) {
					var b = i(), c = j();
					angular.isDefined(b) && angular.isDefined(c) && (p.setHours(b), l())
				} else n()
			});
			var t = f.find("input"), u = t.eq(0), v = t.eq(1), w = angular.isDefined(g.mousewheel) ? e.$eval(g.mousewheel) : c.mousewheel;
			if (w) {
				var x = function (a) {
					a.originalEvent && (a = a.originalEvent);
					var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
					return a.detail || b > 0
				};
				u.bind("mousewheel wheel", function (a) {
					e.$apply(x(a) ? e.incrementHours() : e.decrementHours()), a.preventDefault()
				}), v.bind("mousewheel wheel", function (a) {
					e.$apply(x(a) ? e.incrementMinutes() : e.decrementMinutes()), a.preventDefault()
				})
			}
			if (e.readonlyInput = angular.isDefined(g.readonlyInput) ? e.$eval(g.readonlyInput) : c.readonlyInput, e.readonlyInput)e.updateHours = angular.noop, e.updateMinutes = angular.noop; else {
				var y = function (a, b) {
					h.$setViewValue(null), h.$setValidity("time", !1), angular.isDefined(a) && (e.invalidHours = a), angular.isDefined(b) && (e.invalidMinutes = b)
				};
				e.updateHours = function () {
					var a = i();
					angular.isDefined(a) ? (p.setHours(a), l("h")) : y(!0)
				}, u.bind("blur", function () {
					!e.validHours && e.hours < 10 && e.$apply(function () {
						e.hours = k(e.hours)
					})
				}), e.updateMinutes = function () {
					var a = j();
					angular.isDefined(a) ? (p.setMinutes(a), l("m")) : y(void 0, !0)
				}, v.bind("blur", function () {
					!e.invalidMinutes && e.minutes < 10 && e.$apply(function () {
						e.minutes = k(e.minutes)
					})
				})
			}
			h.$render = function () {
				var a = h.$modelValue ? new Date(h.$modelValue) : null;
				isNaN(a) ? (h.$setValidity("time", !1), b.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (p = a), m(), n())
			}, e.incrementHours = function () {
				o(60 * r)
			}, e.decrementHours = function () {
				o(60 * -r)
			}, e.incrementMinutes = function () {
				o(s)
			}, e.decrementMinutes = function () {
				o(-s)
			}, e.toggleMeridian = function () {
				o(720 * (p.getHours() < 12 ? 1 : -1))
			}
		}
	}}
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function (a) {
	var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
	return{parse: function (c) {
		var d = c.match(b);
		if (!d)throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '" + c + "'.");
		return{itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1])}
	}}
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function (a, b, c, d, e, f, g) {
	var h = [9, 13, 27, 38, 40];
	return{require: "ngModel", link: function (i, j, k, l) {
		var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? b(k.typeaheadAppendToBody) : !1, u = b(k.ngModel).assign, v = g.parse(k.typeahead), w = angular.element("<div typeahead-popup></div>");
		w.attr({matches: "matches", active: "activeIdx", select: "select(activeIdx)", query: "query", position: "position"}), angular.isDefined(k.typeaheadTemplateUrl) && w.attr("template-url", k.typeaheadTemplateUrl);
		var x = i.$new();
		i.$on("$destroy", function () {
			x.$destroy()
		});
		var y = function () {
			x.matches = [], x.activeIdx = -1
		}, z = function (a) {
			var b = {$viewValue: a};
			q(i, !0), c.when(v.source(i, b)).then(function (c) {
				if (a === l.$viewValue && m) {
					if (c.length > 0) {
						x.activeIdx = 0, x.matches.length = 0;
						for (var d = 0; d < c.length; d++)b[v.itemName] = c[d], x.matches.push({label: v.viewMapper(x, b), model: c[d]});
						x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight")
					} else y();
					q(i, !1)
				}
			}, function () {
				y(), q(i, !1)
			})
		};
		y(), x.query = void 0;
		var A;
		l.$parsers.unshift(function (a) {
			return m = !0, a && a.length >= n ? o > 0 ? (A && d.cancel(A), A = d(function () {
				z(a)
			}, o)) : z(a) : (q(i, !1), y()), p ? a : a ? (l.$setValidity("editable", !1), void 0) : (l.$setValidity("editable", !0), a)
		}), l.$formatters.push(function (a) {
			var b, c, d = {};
			return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a)
		}), x.select = function (a) {
			var b, c, d = {};
			d[v.itemName] = c = x.matches[a].model, b = v.modelMapper(i, d), u(i, b), l.$setValidity("editable", !0), r(i, {$item: c, $model: b, $label: v.viewMapper(i, d)}), y(), j[0].focus()
		}, j.bind("keydown", function (a) {
			0 !== x.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function () {
				x.select(x.activeIdx)
			}) : 27 === a.which && (a.stopPropagation(), y(), x.$digest()))
		}), j.bind("blur", function () {
			m = !1
		});
		var B = function (a) {
			j[0] !== a.target && (y(), x.$digest())
		};
		e.bind("click", B), i.$on("$destroy", function () {
			e.unbind("click", B)
		});
		var C = a(w)(x);
		t ? e.find("body").append(C) : j.after(C)
	}}
}]).directive("typeaheadPopup", function () {
	return{restrict: "EA", scope: {matches: "=", query: "=", active: "=", position: "=", select: "&"}, replace: !0, templateUrl: "template/typeahead/typeahead-popup.html", link: function (a, b, c) {
		a.templateUrl = c.templateUrl, a.isOpen = function () {
			return a.matches.length > 0
		}, a.isActive = function (b) {
			return a.active == b
		}, a.selectActive = function (b) {
			a.active = b
		}, a.selectMatch = function (b) {
			a.select({activeIdx: b})
		}
	}}
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function (a, b, c, d) {
	return{restrict: "EA", scope: {index: "=", match: "=", query: "="}, link: function (e, f, g) {
		var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
		a.get(h, {cache: b}).success(function (a) {
			f.replaceWith(c(a.trim())(e))
		})
	}}
}]).filter("typeaheadHighlight", function () {
	function a(a) {
		return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
	}

	return function (b, c) {
		return c ? b.replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
	}
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function (a) {
	a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function (a) {
	a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function (a) {
	a.put("template/alert/alert.html", "<div class='alert' ng-class='\"alert-\" + (type || \"warning\")'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function (a) {
	a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides().length > 1"><span class="icon-prev"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides().length > 1"><span class="icon-next"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function (a) {
	a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function (a) {
	a.put("template/datepicker/datepicker.html", '<table>\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-default btn-sm btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr ng-show="labels.length > 0" class="h6">\n      <th ng-show="showWeekNumbers" class="text-center">#</th>\n      <th ng-repeat="label in labels" class="text-center">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{\'text-muted\': dt.secondary}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function (a) {
	a.put("template/datepicker/popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\">\n	<li ng-transclude></li>\n" + '	<li ng-show="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="today()">{{currentText}}</button>\n			<button type="button" class="btn btn-sm btn-default" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">{{toggleWeeksText}}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="clear()">{{clearText}}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="isOpen = false">{{closeText}}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (a) {
	a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}"></div>')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function (a) {
	a.put("template/modal/window.html", '<div tabindex="-1" class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog"><div class="modal-content" ng-transclude></div></div>\n</div>')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (a) {
	a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (a) {
	a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (a) {
	a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (a) {
	a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function (a) {
	a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function (a) {
	a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div>')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function (a) {
	a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function (a) {
	a.put("template/progressbar/progressbar.html", '<div class="progress"><div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div></div>')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function (a) {
	a.put("template/rating/rating.html", '<span ng-mouseleave="reset()">\n    <i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < val && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')"></i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function (a) {
	a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function (a) {
	a.put("template/tabs/tabset.html", '\n<div class="tabbable">\n  <ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function (a) {
	a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (a) {
	a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (a) {
	a.put("template/typeahead/typeahead-popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" + '    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
}]);