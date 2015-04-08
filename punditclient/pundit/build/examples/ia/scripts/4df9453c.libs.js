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
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{clip:rect(0,auto,auto,0);-ms-zoom:1.0001;}.ng-animate-active{clip:rect(-1px,auto,auto,0);-ms-zoom:1;}</style>'), d3 = function () {
	function a(a) {
		return null != a && !isNaN(a)
	}

	function b(a) {
		return a.length
	}

	function c(a) {
		for (var b = 1; a * b % 1;)b *= 10;
		return b
	}

	function d(a, b) {
		try {
			for (var c in b)Object.defineProperty(a.prototype, c, {value: b[c], enumerable: !1})
		} catch (d) {
			a.prototype = b
		}
	}

	function e() {
	}

	function f() {
	}

	function g(a, b, c) {
		return function () {
			var d = c.apply(b, arguments);
			return d === b ? a : d
		}
	}

	function h(a, b) {
		if (b in a)return b;
		b = b.charAt(0).toUpperCase() + b.substring(1);
		for (var c = 0, d = kh.length; d > c; ++c) {
			var e = kh[c] + b;
			if (e in a)return e
		}
	}

	function i() {
	}

	function j() {
	}

	function k(a) {
		function b() {
			for (var b, d = c, e = -1, f = d.length; ++e < f;)(b = d[e].on) && b.apply(this, arguments);
			return a
		}

		var c = [], d = new e;
		return b.on = function (b, e) {
			var f, g = d.get(b);
			return arguments.length < 2 ? g && g.on : (g && (g.on = null, c = c.slice(0, f = c.indexOf(g)).concat(c.slice(f + 1)), d.remove(b)), e && c.push(d.set(b, {on: e})), a)
		}, b
	}

	function l() {
		Vg.event.preventDefault()
	}

	function m() {
		for (var a, b = Vg.event; a = b.sourceEvent;)b = a;
		return b
	}

	function n(a) {
		for (var b = new j, c = 0, d = arguments.length; ++c < d;)b[arguments[c]] = k(b);
		return b.of = function (c, d) {
			return function (e) {
				try {
					var f = e.sourceEvent = Vg.event;
					e.target = a, Vg.event = e, b[e.type].apply(c, d)
				} finally {
					Vg.event = f
				}
			}
		}, b
	}

	function o(a) {
		return mh(a, rh), a
	}

	function p(a) {
		return"function" == typeof a ? a : function () {
			return nh(a, this)
		}
	}

	function q(a) {
		return"function" == typeof a ? a : function () {
			return oh(a, this)
		}
	}

	function r(a, b) {
		function c() {
			this.removeAttribute(a)
		}

		function d() {
			this.removeAttributeNS(a.space, a.local)
		}

		function e() {
			this.setAttribute(a, b)
		}

		function f() {
			this.setAttributeNS(a.space, a.local, b)
		}

		function g() {
			var c = b.apply(this, arguments);
			null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
		}

		function h() {
			var c = b.apply(this, arguments);
			null == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
		}

		return a = Vg.ns.qualify(a), null == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
	}

	function s(a) {
		return a.trim().replace(/\s+/g, " ")
	}

	function t(a) {
		return new RegExp("(?:^|\\s+)" + Vg.requote(a) + "(?:\\s+|$)", "g")
	}

	function u(a, b) {
		function c() {
			for (var c = -1; ++c < e;)a[c](this, b)
		}

		function d() {
			for (var c = -1, d = b.apply(this, arguments); ++c < e;)a[c](this, d)
		}

		a = a.trim().split(/\s+/).map(v);
		var e = a.length;
		return"function" == typeof b ? d : c
	}

	function v(a) {
		var b = t(a);
		return function (c, d) {
			if (e = c.classList)return d ? e.add(a) : e.remove(a);
			var e = c.getAttribute("class") || "";
			d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", s(e + " " + a))) : c.setAttribute("class", s(e.replace(b, " ")))
		}
	}

	function w(a, b, c) {
		function d() {
			this.style.removeProperty(a)
		}

		function e() {
			this.style.setProperty(a, b, c)
		}

		function f() {
			var d = b.apply(this, arguments);
			null == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
		}

		return null == b ? d : "function" == typeof b ? f : e
	}

	function x(a, b) {
		function c() {
			delete this[a]
		}

		function d() {
			this[a] = b
		}

		function e() {
			var c = b.apply(this, arguments);
			null == c ? delete this[a] : this[a] = c
		}

		return null == b ? c : "function" == typeof b ? e : d
	}

	function y(a) {
		return"function" == typeof a ? a : (a = Vg.ns.qualify(a)).local ? function () {
			return this.ownerDocument.createElementNS(a.space, a.local)
		} : function () {
			return this.ownerDocument.createElementNS(this.namespaceURI, a)
		}
	}

	function z(a) {
		return{__data__: a}
	}

	function A(a) {
		return function () {
			return qh(this, a)
		}
	}

	function B(a) {
		return arguments.length || (a = Vg.ascending), function (b, c) {
			return b && c ? a(b.__data__, c.__data__) : !b - !c
		}
	}

	function C(a, b) {
		for (var c = 0, d = a.length; d > c; c++)for (var e, f = a[c], g = 0, h = f.length; h > g; g++)(e = f[g]) && b(e, g, c);
		return a
	}

	function D(a) {
		return mh(a, th), a
	}

	function E(a) {
		var b, c;
		return function (d, e, f) {
			var g, h = a[f].update, i = h.length;
			for (f != c && (c = f, b = 0), e >= b && (b = e + 1); !(g = h[b]) && ++b < i;);
			return g
		}
	}

	function F() {
		var a = this.__transition__;
		a && ++a.active
	}

	function G(a, b, c) {
		function d() {
			var b = this[g];
			b && (this.removeEventListener(a, b, b.$), delete this[g])
		}

		function e() {
			var e = j(b, Xg(arguments));
			d.call(this), this.addEventListener(a, this[g] = e, e.$ = c), e._ = b
		}

		function f() {
			var b, c = new RegExp("^__on([^.]+)" + Vg.requote(a) + "$");
			for (var d in this)if (b = d.match(c)) {
				var e = this[d];
				this.removeEventListener(b[1], e, e.$), delete this[d]
			}
		}

		var g = "__on" + a, h = a.indexOf("."), j = H;
		h > 0 && (a = a.substring(0, h));
		var k = vh.get(a);
		return k && (a = k, j = I), h ? b ? e : d : b ? i : f
	}

	function H(a, b) {
		return function (c) {
			var d = Vg.event;
			Vg.event = c, b[0] = this.__data__;
			try {
				a.apply(this, b)
			} finally {
				Vg.event = d
			}
		}
	}

	function I(a, b) {
		var c = H(a, b);
		return function (a) {
			var b = this, d = a.relatedTarget;
			d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
		}
	}

	function J() {
		var a = ".dragsuppress-" + ++xh, b = "click" + a, c = Vg.select($g).on("touchmove" + a, l).on("dragstart" + a, l).on("selectstart" + a, l);
		if (wh) {
			var d = Zg.style, e = d[wh];
			d[wh] = "none"
		}
		return function (f) {
			function g() {
				c.on(b, null)
			}

			c.on(a, null), wh && (d[wh] = e), f && (c.on(b, function () {
				l(), g()
			}, !0), setTimeout(g, 0))
		}
	}

	function K(a, b) {
		b.changedTouches && (b = b.changedTouches[0]);
		var c = a.ownerSVGElement || a;
		if (c.createSVGPoint) {
			var d = c.createSVGPoint();
			if (0 > yh && ($g.scrollX || $g.scrollY)) {
				c = Vg.select("body").append("svg").style({position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none"}, "important");
				var e = c[0][0].getScreenCTM();
				yh = !(e.f || e.e), c.remove()
			}
			return yh ? (d.x = b.pageX, d.y = b.pageY) : (d.x = b.clientX, d.y = b.clientY), d = d.matrixTransform(a.getScreenCTM().inverse()), [d.x, d.y]
		}
		var f = a.getBoundingClientRect();
		return[b.clientX - f.left - a.clientLeft, b.clientY - f.top - a.clientTop]
	}

	function L(a) {
		return a > 0 ? 1 : 0 > a ? -1 : 0
	}

	function M(a) {
		return a > 1 ? 0 : -1 > a ? zh : Math.acos(a)
	}

	function N(a) {
		return a > 1 ? Bh : -1 > a ? -Bh : Math.asin(a)
	}

	function O(a) {
		return((a = Math.exp(a)) - 1 / a) / 2
	}

	function P(a) {
		return((a = Math.exp(a)) + 1 / a) / 2
	}

	function Q(a) {
		return((a = Math.exp(2 * a)) - 1) / (a + 1)
	}

	function R(a) {
		return(a = Math.sin(a / 2)) * a
	}

	function S() {
	}

	function T(a, b, c) {
		return new U(a, b, c)
	}

	function U(a, b, c) {
		this.h = a, this.s = b, this.l = c
	}

	function V(a, b, c) {
		function d(a) {
			return a > 360 ? a -= 360 : 0 > a && (a += 360), 60 > a ? f + (g - f) * a / 60 : 180 > a ? g : 240 > a ? f + (g - f) * (240 - a) / 60 : f
		}

		function e(a) {
			return Math.round(255 * d(a))
		}

		var f, g;
		return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a, b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b, c = 0 > c ? 0 : c > 1 ? 1 : c, g = .5 >= c ? c * (1 + b) : c + b - c * b, f = 2 * c - g, gb(e(a + 120), e(a), e(a - 120))
	}

	function W(a, b, c) {
		return new X(a, b, c)
	}

	function X(a, b, c) {
		this.h = a, this.c = b, this.l = c
	}

	function Y(a, b, c) {
		return isNaN(a) && (a = 0), isNaN(b) && (b = 0), Z(c, Math.cos(a *= Eh) * b, Math.sin(a) * b)
	}

	function Z(a, b, c) {
		return new $(a, b, c)
	}

	function $(a, b, c) {
		this.l = a, this.a = b, this.b = c
	}

	function _(a, b, c) {
		var d = (a + 16) / 116, e = d + b / 500, f = d - c / 200;
		return e = bb(e) * Ph, d = bb(d) * Qh, f = bb(f) * Rh, gb(db(3.2404542 * e - 1.5371385 * d - .4985314 * f), db(-.969266 * e + 1.8760108 * d + .041556 * f), db(.0556434 * e - .2040259 * d + 1.0572252 * f))
	}

	function ab(a, b, c) {
		return a > 0 ? W(Math.atan2(c, b) * Fh, Math.sqrt(b * b + c * c), a) : W(0 / 0, 0 / 0, a)
	}

	function bb(a) {
		return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
	}

	function cb(a) {
		return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
	}

	function db(a) {
		return Math.round(255 * (.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
	}

	function eb(a) {
		return gb(a >> 16, a >> 8 & 255, 255 & a)
	}

	function fb(a) {
		return eb(a) + ""
	}

	function gb(a, b, c) {
		return new hb(a, b, c)
	}

	function hb(a, b, c) {
		this.r = a, this.g = b, this.b = c
	}

	function ib(a) {
		return 16 > a ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
	}

	function jb(a, b, c) {
		var d, e, f, g = 0, h = 0, i = 0;
		if (d = /([a-z]+)\((.*)\)/i.exec(a))switch (e = d[2].split(","), d[1]) {
			case"hsl":
				return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
			case"rgb":
				return b(nb(e[0]), nb(e[1]), nb(e[2]))
		}
		return(f = Uh.get(a)) ? b(f.r, f.g, f.b) : (null != a && "#" === a.charAt(0) && (4 === a.length ? (g = a.charAt(1), g += g, h = a.charAt(2), h += h, i = a.charAt(3), i += i) : 7 === a.length && (g = a.substring(1, 3), h = a.substring(3, 5), i = a.substring(5, 7)), g = parseInt(g, 16), h = parseInt(h, 16), i = parseInt(i, 16)), b(g, h, i))
	}

	function kb(a, b, c) {
		var d, e, f = Math.min(a /= 255, b /= 255, c /= 255), g = Math.max(a, b, c), h = g - f, i = (g + f) / 2;
		return h ? (e = .5 > i ? h / (g + f) : h / (2 - g - f), d = a == g ? (b - c) / h + (c > b ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4, d *= 60) : (d = 0 / 0, e = i > 0 && 1 > i ? 0 : d), T(d, e, i)
	}

	function lb(a, b, c) {
		a = mb(a), b = mb(b), c = mb(c);
		var d = cb((.4124564 * a + .3575761 * b + .1804375 * c) / Ph), e = cb((.2126729 * a + .7151522 * b + .072175 * c) / Qh), f = cb((.0193339 * a + .119192 * b + .9503041 * c) / Rh);
		return Z(116 * e - 16, 500 * (d - e), 200 * (e - f))
	}

	function mb(a) {
		return(a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
	}

	function nb(a) {
		var b = parseFloat(a);
		return"%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
	}

	function ob(a) {
		return"function" == typeof a ? a : function () {
			return a
		}
	}

	function pb(a) {
		return a
	}

	function qb(a) {
		return function (b, c, d) {
			return 2 === arguments.length && "function" == typeof c && (d = c, c = null), rb(b, c, a, d)
		}
	}

	function rb(a, b, c, d) {
		function e() {
			var a, b = i.status;
			if (!b && i.responseText || b >= 200 && 300 > b || 304 === b) {
				try {
					a = c.call(f, i)
				} catch (d) {
					return g.error.call(f, d), void 0
				}
				g.load.call(f, a)
			} else g.error.call(f, i)
		}

		var f = {}, g = Vg.dispatch("beforesend", "progress", "load", "error"), h = {}, i = new XMLHttpRequest, j = null;
		return!$g.XDomainRequest || "withCredentials"in i || !/^(http(s)?:)?\/\//.test(a) || (i = new XDomainRequest), "onload"in i ? i.onload = i.onerror = e : i.onreadystatechange = function () {
			i.readyState > 3 && e()
		}, i.onprogress = function (a) {
			var b = Vg.event;
			Vg.event = a;
			try {
				g.progress.call(f, i)
			} finally {
				Vg.event = b
			}
		}, f.header = function (a, b) {
			return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (null == b ? delete h[a] : h[a] = b + "", f)
		}, f.mimeType = function (a) {
			return arguments.length ? (b = null == a ? null : a + "", f) : b
		}, f.responseType = function (a) {
			return arguments.length ? (j = a, f) : j
		}, f.response = function (a) {
			return c = a, f
		}, ["get", "post"].forEach(function (a) {
			f[a] = function () {
				return f.send.apply(f, [a].concat(Xg(arguments)))
			}
		}), f.send = function (c, d, e) {
			if (2 === arguments.length && "function" == typeof d && (e = d, d = null), i.open(c, a, !0), null == b || "accept"in h || (h.accept = b + ",*/*"), i.setRequestHeader)for (var k in h)i.setRequestHeader(k, h[k]);
			return null != b && i.overrideMimeType && i.overrideMimeType(b), null != j && (i.responseType = j), null != e && f.on("error", e).on("load", function (a) {
				e(null, a)
			}), g.beforesend.call(f, i), i.send(null == d ? null : d), f
		}, f.abort = function () {
			return i.abort(), f
		}, Vg.rebind(f, g, "on"), null == d ? f : f.get(sb(d))
	}

	function sb(a) {
		return 1 === a.length ? function (b, c) {
			a(null == b ? c : null)
		} : a
	}

	function tb() {
		var a = ub(), b = vb() - a;
		b > 24 ? (isFinite(b) && (clearTimeout(Yh), Yh = setTimeout(tb, b)), Xh = 0) : (Xh = 1, $h(tb))
	}

	function ub() {
		var a = Date.now();
		for (Zh = Vh; Zh;)a >= Zh.t && (Zh.f = Zh.c(a - Zh.t)), Zh = Zh.n;
		return a
	}

	function vb() {
		for (var a, b = Vh, c = 1 / 0; b;)b.f ? b = a ? a.n = b.n : Vh = b.n : (b.t < c && (c = b.t), b = (a = b).n);
		return Wh = a, c
	}

	function wb(a, b) {
		var c = Math.pow(10, 3 * hh(8 - b));
		return{scale: b > 8 ? function (a) {
			return a / c
		} : function (a) {
			return a * c
		}, symbol: a}
	}

	function xb(a, b) {
		return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
	}

	function yb(a) {
		return a + ""
	}

	function zb() {
	}

	function Ab(a, b, c) {
		var d = c.s = a + b, e = d - a, f = d - e;
		c.t = a - f + (b - e)
	}

	function Bb(a, b) {
		a && ki.hasOwnProperty(a.type) && ki[a.type](a, b)
	}

	function Cb(a, b, c) {
		var d, e = -1, f = a.length - c;
		for (b.lineStart(); ++e < f;)d = a[e], b.point(d[0], d[1], d[2]);
		b.lineEnd()
	}

	function Db(a, b) {
		var c = -1, d = a.length;
		for (b.polygonStart(); ++c < d;)Cb(a[c], b, 1);
		b.polygonEnd()
	}

	function Eb() {
		function a(a, b) {
			a *= Eh, b = b * Eh / 2 + zh / 4;
			var c = a - d, g = Math.cos(b), h = Math.sin(b), i = f * h, j = e * g + i * Math.cos(c), k = i * Math.sin(c);
			mi.add(Math.atan2(k, j)), d = a, e = g, f = h
		}

		var b, c, d, e, f;
		ni.point = function (g, h) {
			ni.point = a, d = (b = g) * Eh, e = Math.cos(h = (c = h) * Eh / 2 + zh / 4), f = Math.sin(h)
		}, ni.lineEnd = function () {
			a(b, c)
		}
	}

	function Fb(a) {
		var b = a[0], c = a[1], d = Math.cos(c);
		return[d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
	}

	function Gb(a, b) {
		return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
	}

	function Hb(a, b) {
		return[a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
	}

	function Ib(a, b) {
		a[0] += b[0], a[1] += b[1], a[2] += b[2]
	}

	function Jb(a, b) {
		return[a[0] * b, a[1] * b, a[2] * b]
	}

	function Kb(a) {
		var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
		a[0] /= b, a[1] /= b, a[2] /= b
	}

	function Lb(a) {
		return[Math.atan2(a[1], a[0]), N(a[2])]
	}

	function Mb(a, b) {
		return hh(a[0] - b[0]) < Ch && hh(a[1] - b[1]) < Ch
	}

	function Nb(a, b) {
		a *= Eh;
		var c = Math.cos(b *= Eh);
		Ob(c * Math.cos(a), c * Math.sin(a), Math.sin(b))
	}

	function Ob(a, b, c) {
		++oi, qi += (a - qi) / oi, ri += (b - ri) / oi, si += (c - si) / oi
	}

	function Pb() {
		function a(a, e) {
			a *= Eh;
			var f = Math.cos(e *= Eh), g = f * Math.cos(a), h = f * Math.sin(a), i = Math.sin(e), j = Math.atan2(Math.sqrt((j = c * i - d * h) * j + (j = d * g - b * i) * j + (j = b * h - c * g) * j), b * g + c * h + d * i);
			pi += j, ti += j * (b + (b = g)), ui += j * (c + (c = h)), vi += j * (d + (d = i)), Ob(b, c, d)
		}

		var b, c, d;
		zi.point = function (e, f) {
			e *= Eh;
			var g = Math.cos(f *= Eh);
			b = g * Math.cos(e), c = g * Math.sin(e), d = Math.sin(f), zi.point = a, Ob(b, c, d)
		}
	}

	function Qb() {
		zi.point = Nb
	}

	function Rb() {
		function a(a, b) {
			a *= Eh;
			var c = Math.cos(b *= Eh), g = c * Math.cos(a), h = c * Math.sin(a), i = Math.sin(b), j = e * i - f * h, k = f * g - d * i, l = d * h - e * g, m = Math.sqrt(j * j + k * k + l * l), n = d * g + e * h + f * i, o = m && -M(n) / m, p = Math.atan2(m, n);
			wi += o * j, xi += o * k, yi += o * l, pi += p, ti += p * (d + (d = g)), ui += p * (e + (e = h)), vi += p * (f + (f = i)), Ob(d, e, f)
		}

		var b, c, d, e, f;
		zi.point = function (g, h) {
			b = g, c = h, zi.point = a, g *= Eh;
			var i = Math.cos(h *= Eh);
			d = i * Math.cos(g), e = i * Math.sin(g), f = Math.sin(h), Ob(d, e, f)
		}, zi.lineEnd = function () {
			a(b, c), zi.lineEnd = Qb, zi.point = Nb
		}
	}

	function Sb() {
		return!0
	}

	function Tb(a, b, c, d, e) {
		var f = [], g = [];
		if (a.forEach(function (a) {
			if (!((b = a.length - 1) <= 0)) {
				var b, c = a[0], d = a[b];
				if (Mb(c, d)) {
					e.lineStart();
					for (var h = 0; b > h; ++h)e.point((c = a[h])[0], c[1]);
					return e.lineEnd(), void 0
				}
				var i = new Vb(c, a, null, !0), j = new Vb(c, null, i, !1);
				i.o = j, f.push(i), g.push(j), i = new Vb(d, a, null, !1), j = new Vb(d, null, i, !0), i.o = j, f.push(i), g.push(j)
			}
		}), g.sort(b), Ub(f), Ub(g), f.length) {
			for (var h = 0, i = c, j = g.length; j > h; ++h)g[h].e = i = !i;
			for (var k, l, m = f[0]; ;) {
				for (var n = m, o = !0; n.v;)if ((n = n.n) === m)return;
				k = n.z, e.lineStart();
				do {
					if (n.v = n.o.v = !0, n.e) {
						if (o)for (var h = 0, j = k.length; j > h; ++h)e.point((l = k[h])[0], l[1]); else d(n.x, n.n.x, 1, e);
						n = n.n
					} else {
						if (o) {
							k = n.p.z;
							for (var h = k.length - 1; h >= 0; --h)e.point((l = k[h])[0], l[1])
						} else d(n.x, n.p.x, -1, e);
						n = n.p
					}
					n = n.o, k = n.z, o = !o
				} while (!n.v);
				e.lineEnd()
			}
		}
	}

	function Ub(a) {
		if (b = a.length) {
			for (var b, c, d = 0, e = a[0]; ++d < b;)e.n = c = a[d], c.p = e, e = c;
			e.n = c = a[0], c.p = e
		}
	}

	function Vb(a, b, c, d) {
		this.x = a, this.z = b, this.o = c, this.e = d, this.v = !1, this.n = this.p = null
	}

	function Wb(a, b, c, d) {
		return function (e, f) {
			function g(b, c) {
				var d = e(b, c);
				a(b = d[0], c = d[1]) && f.point(b, c)
			}

			function h(a, b) {
				var c = e(a, b);
				q.point(c[0], c[1])
			}

			function i() {
				s.point = h, q.lineStart()
			}

			function j() {
				s.point = g, q.lineEnd()
			}

			function k(a, b) {
				p.push([a, b]);
				var c = e(a, b);
				u.point(c[0], c[1])
			}

			function l() {
				u.lineStart(), p = []
			}

			function m() {
				k(p[0][0], p[0][1]), u.lineEnd();
				var a, b = u.clean(), c = t.buffer(), d = c.length;
				if (p.pop(), o.push(p), p = null, d) {
					if (1 & b) {
						a = c[0];
						var e, d = a.length - 1, g = -1;
						for (f.lineStart(); ++g < d;)f.point((e = a[g])[0], e[1]);
						return f.lineEnd(), void 0
					}
					d > 1 && 2 & b && c.push(c.pop().concat(c.shift())), n.push(c.filter(Xb))
				}
			}

			var n, o, p, q = b(f), r = e.invert(d[0], d[1]), s = {point: g, lineStart: i, lineEnd: j, polygonStart: function () {
				s.point = k, s.lineStart = l, s.lineEnd = m, n = [], o = [], f.polygonStart()
			}, polygonEnd: function () {
				s.point = g, s.lineStart = i, s.lineEnd = j, n = Vg.merge(n);
				var a = $b(r, o);
				n.length ? Tb(n, Zb, a, c, f) : a && (f.lineStart(), c(null, null, 1, f), f.lineEnd()), f.polygonEnd(), n = o = null
			}, sphere: function () {
				f.polygonStart(), f.lineStart(), c(null, null, 1, f), f.lineEnd(), f.polygonEnd()
			}}, t = Yb(), u = b(t);
			return s
		}
	}

	function Xb(a) {
		return a.length > 1
	}

	function Yb() {
		var a, b = [];
		return{lineStart: function () {
			b.push(a = [])
		}, point: function (b, c) {
			a.push([b, c])
		}, lineEnd: i, buffer: function () {
			var c = b;
			return b = [], a = null, c
		}, rejoin: function () {
			b.length > 1 && b.push(b.pop().concat(b.shift()))
		}}
	}

	function Zb(a, b) {
		return((a = a.x)[0] < 0 ? a[1] - Bh - Ch : Bh - a[1]) - ((b = b.x)[0] < 0 ? b[1] - Bh - Ch : Bh - b[1])
	}

	function $b(a, b) {
		var c = a[0], d = a[1], e = [Math.sin(c), -Math.cos(c), 0], f = 0, g = 0;
		mi.reset();
		for (var h = 0, i = b.length; i > h; ++h) {
			var j = b[h], k = j.length;
			if (k)for (var l = j[0], m = l[0], n = l[1] / 2 + zh / 4, o = Math.sin(n), p = Math.cos(n), q = 1; ;) {
				q === k && (q = 0), a = j[q];
				var r = a[0], s = a[1] / 2 + zh / 4, t = Math.sin(s), u = Math.cos(s), v = r - m, w = hh(v) > zh, x = o * t;
				if (mi.add(Math.atan2(x * Math.sin(v), p * u + x * Math.cos(v))), f += w ? v + (v >= 0 ? Ah : -Ah) : v, w ^ m >= c ^ r >= c) {
					var y = Hb(Fb(l), Fb(a));
					Kb(y);
					var z = Hb(e, y);
					Kb(z);
					var A = (w ^ v >= 0 ? -1 : 1) * N(z[2]);
					(d > A || d === A && (y[0] || y[1])) && (g += w ^ v >= 0 ? 1 : -1)
				}
				if (!q++)break;
				m = r, o = t, p = u, l = a
			}
		}
		return(-Ch > f || Ch > f && 0 > mi) ^ 1 & g
	}

	function _b(a) {
		var b, c = 0 / 0, d = 0 / 0, e = 0 / 0;
		return{lineStart: function () {
			a.lineStart(), b = 1
		}, point: function (f, g) {
			var h = f > 0 ? zh : -zh, i = hh(f - c);
			hh(i - zh) < Ch ? (a.point(c, d = (d + g) / 2 > 0 ? Bh : -Bh), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), a.point(f, d), b = 0) : e !== h && i >= zh && (hh(c - e) < Ch && (c -= e * Ch), hh(f - h) < Ch && (f -= h * Ch), d = ac(c, d, f, g), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), b = 0), a.point(c = f, d = g), e = h
		}, lineEnd: function () {
			a.lineEnd(), c = d = 0 / 0
		}, clean: function () {
			return 2 - b
		}}
	}

	function ac(a, b, c, d) {
		var e, f, g = Math.sin(a - c);
		return hh(g) > Ch ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
	}

	function bc(a, b, c, d) {
		var e;
		if (null == a)e = c * Bh, d.point(-zh, e), d.point(0, e), d.point(zh, e), d.point(zh, 0), d.point(zh, -e), d.point(0, -e), d.point(-zh, -e), d.point(-zh, 0), d.point(-zh, e); else if (hh(a[0] - b[0]) > Ch) {
			var f = a[0] < b[0] ? zh : -zh;
			e = c * f / 2, d.point(-f, e), d.point(0, e), d.point(f, e)
		} else d.point(b[0], b[1])
	}

	function cc(a) {
		function b(a, b) {
			return Math.cos(a) * Math.cos(b) > f
		}

		function c(a) {
			var c, f, i, j, k;
			return{lineStart: function () {
				j = i = !1, k = 1
			}, point: function (l, m) {
				var n, o = [l, m], p = b(l, m), q = g ? p ? 0 : e(l, m) : p ? e(l + (0 > l ? zh : -zh), m) : 0;
				if (!c && (j = i = p) && a.lineStart(), p !== i && (n = d(c, o), (Mb(c, n) || Mb(o, n)) && (o[0] += Ch, o[1] += Ch, p = b(o[0], o[1]))), p !== i)k = 0, p ? (a.lineStart(), n = d(o, c), a.point(n[0], n[1])) : (n = d(c, o), a.point(n[0], n[1]), a.lineEnd()), c = n; else if (h && c && g ^ p) {
					var r;
					q & f || !(r = d(o, c, !0)) || (k = 0, g ? (a.lineStart(), a.point(r[0][0], r[0][1]), a.point(r[1][0], r[1][1]), a.lineEnd()) : (a.point(r[1][0], r[1][1]), a.lineEnd(), a.lineStart(), a.point(r[0][0], r[0][1])))
				}
				!p || c && Mb(c, o) || a.point(o[0], o[1]), c = o, i = p, f = q
			}, lineEnd: function () {
				i && a.lineEnd(), c = null
			}, clean: function () {
				return k | (j && i) << 1
			}}
		}

		function d(a, b, c) {
			var d = Fb(a), e = Fb(b), g = [1, 0, 0], h = Hb(d, e), i = Gb(h, h), j = h[0], k = i - j * j;
			if (!k)return!c && a;
			var l = f * i / k, m = -f * j / k, n = Hb(g, h), o = Jb(g, l), p = Jb(h, m);
			Ib(o, p);
			var q = n, r = Gb(o, q), s = Gb(q, q), t = r * r - s * (Gb(o, o) - 1);
			if (!(0 > t)) {
				var u = Math.sqrt(t), v = Jb(q, (-r - u) / s);
				if (Ib(v, o), v = Lb(v), !c)return v;
				var w, x = a[0], y = b[0], z = a[1], A = b[1];
				x > y && (w = x, x = y, y = w);
				var B = y - x, C = hh(B - zh) < Ch, D = C || Ch > B;
				if (!C && z > A && (w = z, z = A, A = w), D ? C ? z + A > 0 ^ v[1] < (hh(v[0] - x) < Ch ? z : A) : z <= v[1] && v[1] <= A : B > zh ^ (x <= v[0] && v[0] <= y)) {
					var E = Jb(q, (-r + u) / s);
					return Ib(E, o), [v, Lb(E)]
				}
			}
		}

		function e(b, c) {
			var d = g ? a : zh - a, e = 0;
			return-d > b ? e |= 1 : b > d && (e |= 2), -d > c ? e |= 4 : c > d && (e |= 8), e
		}

		var f = Math.cos(a), g = f > 0, h = hh(f) > Ch, i = Ec(a, 6 * Eh);
		return Wb(b, c, i, g ? [0, -a] : [-zh, a - zh])
	}

	function dc(a, b, c, d) {
		return function (e) {
			var f, g = e.a, h = e.b, i = g.x, j = g.y, k = h.x, l = h.y, m = 0, n = 1, o = k - i, p = l - j;
			if (f = a - i, o || !(f > 0)) {
				if (f /= o, 0 > o) {
					if (m > f)return;
					n > f && (n = f)
				} else if (o > 0) {
					if (f > n)return;
					f > m && (m = f)
				}
				if (f = c - i, o || !(0 > f)) {
					if (f /= o, 0 > o) {
						if (f > n)return;
						f > m && (m = f)
					} else if (o > 0) {
						if (m > f)return;
						n > f && (n = f)
					}
					if (f = b - j, p || !(f > 0)) {
						if (f /= p, 0 > p) {
							if (m > f)return;
							n > f && (n = f)
						} else if (p > 0) {
							if (f > n)return;
							f > m && (m = f)
						}
						if (f = d - j, p || !(0 > f)) {
							if (f /= p, 0 > p) {
								if (f > n)return;
								f > m && (m = f)
							} else if (p > 0) {
								if (m > f)return;
								n > f && (n = f)
							}
							return m > 0 && (e.a = {x: i + m * o, y: j + m * p}), 1 > n && (e.b = {x: i + n * o, y: j + n * p}), e
						}
					}
				}
			}
		}
	}

	function ec(a, b, c, d) {
		function e(d, e) {
			return hh(d[0] - a) < Ch ? e > 0 ? 0 : 3 : hh(d[0] - c) < Ch ? e > 0 ? 2 : 1 : hh(d[1] - b) < Ch ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
		}

		function f(a, b) {
			return g(a.x, b.x)
		}

		function g(a, b) {
			var c = e(a, 1), d = e(b, 1);
			return c !== d ? c - d : 0 === c ? b[1] - a[1] : 1 === c ? a[0] - b[0] : 2 === c ? a[1] - b[1] : b[0] - a[0]
		}

		return function (h) {
			function i(a) {
				for (var b = 0, c = r.length, d = a[1], e = 0; c > e; ++e)for (var f, g = 1, h = r[e], i = h.length, k = h[0]; i > g; ++g)f = h[g], k[1] <= d ? f[1] > d && j(k, f, a) > 0 && ++b : f[1] <= d && j(k, f, a) < 0 && --b, k = f;
				return 0 !== b
			}

			function j(a, b, c) {
				return(b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])
			}

			function k(f, h, i, j) {
				var k = 0, l = 0;
				if (null == f || (k = e(f, i)) !== (l = e(h, i)) || g(f, h) < 0 ^ i > 0) {
					do j.point(0 === k || 3 === k ? a : c, k > 1 ? d : b); while ((k = (k + i + 4) % 4) !== l)
				} else j.point(h[0], h[1])
			}

			function l(e, f) {
				return e >= a && c >= e && f >= b && d >= f
			}

			function m(a, b) {
				l(a, b) && h.point(a, b)
			}

			function n() {
				E.point = p, r && r.push(s = []), z = !0, y = !1, w = x = 0 / 0
			}

			function o() {
				q && (p(t, u), v && y && C.rejoin(), q.push(C.buffer())), E.point = m, y && h.lineEnd()
			}

			function p(a, b) {
				a = Math.max(-Bi, Math.min(Bi, a)), b = Math.max(-Bi, Math.min(Bi, b));
				var c = l(a, b);
				if (r && s.push([a, b]), z)t = a, u = b, v = c, z = !1, c && (h.lineStart(), h.point(a, b)); else if (c && y)h.point(a, b); else {
					var d = {a: {x: w, y: x}, b: {x: a, y: b}};
					D(d) ? (y || (h.lineStart(), h.point(d.a.x, d.a.y)), h.point(d.b.x, d.b.y), c || h.lineEnd(), A = !1) : c && (h.lineStart(), h.point(a, b), A = !1)
				}
				w = a, x = b, y = c
			}

			var q, r, s, t, u, v, w, x, y, z, A, B = h, C = Yb(), D = dc(a, b, c, d), E = {point: m, lineStart: n, lineEnd: o, polygonStart: function () {
				h = C, q = [], r = [], A = !0
			}, polygonEnd: function () {
				h = B, q = Vg.merge(q);
				var b = i([a, d]), c = A && b, e = q.length;
				(c || e) && (h.polygonStart(), c && (h.lineStart(), k(null, null, 1, h), h.lineEnd()), e && Tb(q, f, b, k, h), h.polygonEnd()), q = r = s = null
			}};
			return E
		}
	}

	function fc(a, b) {
		function c(c, d) {
			return c = a(c, d), b(c[0], c[1])
		}

		return a.invert && b.invert && (c.invert = function (c, d) {
			return c = b.invert(c, d), c && a.invert(c[0], c[1])
		}), c
	}

	function gc(a) {
		var b = 0, c = zh / 3, d = wc(a), e = d(b, c);
		return e.parallels = function (a) {
			return arguments.length ? d(b = a[0] * zh / 180, c = a[1] * zh / 180) : [b / zh * 180, c / zh * 180]
		}, e
	}

	function hc(a, b) {
		function c(a, b) {
			var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
			return[c * Math.sin(a *= e), g - c * Math.cos(a)]
		}

		var d = Math.sin(a), e = (d + Math.sin(b)) / 2, f = 1 + d * (2 * e - d), g = Math.sqrt(f) / e;
		return c.invert = function (a, b) {
			var c = g - b;
			return[Math.atan2(a, c) / e, N((f - (a * a + c * c) * e * e) / (2 * e))]
		}, c
	}

	function ic() {
		function a(a, b) {
			Di += e * a - d * b, d = a, e = b
		}

		var b, c, d, e;
		Ii.point = function (f, g) {
			Ii.point = a, b = d = f, c = e = g
		}, Ii.lineEnd = function () {
			a(b, c)
		}
	}

	function jc(a, b) {
		Ei > a && (Ei = a), a > Gi && (Gi = a), Fi > b && (Fi = b), b > Hi && (Hi = b)
	}

	function kc() {
		function a(a, b) {
			g.push("M", a, ",", b, f)
		}

		function b(a, b) {
			g.push("M", a, ",", b), h.point = c
		}

		function c(a, b) {
			g.push("L", a, ",", b)
		}

		function d() {
			h.point = a
		}

		function e() {
			g.push("Z")
		}

		var f = lc(4.5), g = [], h = {point: a, lineStart: function () {
			h.point = b
		}, lineEnd: d, polygonStart: function () {
			h.lineEnd = e
		}, polygonEnd: function () {
			h.lineEnd = d, h.point = a
		}, pointRadius: function (a) {
			return f = lc(a), h
		}, result: function () {
			if (g.length) {
				var a = g.join("");
				return g = [], a
			}
		}};
		return h
	}

	function lc(a) {
		return"m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
	}

	function mc(a, b) {
		qi += a, ri += b, ++si
	}

	function nc() {
		function a(a, d) {
			var e = a - b, f = d - c, g = Math.sqrt(e * e + f * f);
			ti += g * (b + a) / 2, ui += g * (c + d) / 2, vi += g, mc(b = a, c = d)
		}

		var b, c;
		Ki.point = function (d, e) {
			Ki.point = a, mc(b = d, c = e)
		}
	}

	function oc() {
		Ki.point = mc
	}

	function pc() {
		function a(a, b) {
			var c = a - d, f = b - e, g = Math.sqrt(c * c + f * f);
			ti += g * (d + a) / 2, ui += g * (e + b) / 2, vi += g, g = e * a - d * b, wi += g * (d + a), xi += g * (e + b), yi += 3 * g, mc(d = a, e = b)
		}

		var b, c, d, e;
		Ki.point = function (f, g) {
			Ki.point = a, mc(b = d = f, c = e = g)
		}, Ki.lineEnd = function () {
			a(b, c)
		}
	}

	function qc(a) {
		function b(b, c) {
			a.moveTo(b, c), a.arc(b, c, g, 0, Ah)
		}

		function c(b, c) {
			a.moveTo(b, c), h.point = d
		}

		function d(b, c) {
			a.lineTo(b, c)
		}

		function e() {
			h.point = b
		}

		function f() {
			a.closePath()
		}

		var g = 4.5, h = {point: b, lineStart: function () {
			h.point = c
		}, lineEnd: e, polygonStart: function () {
			h.lineEnd = f
		}, polygonEnd: function () {
			h.lineEnd = e, h.point = b
		}, pointRadius: function (a) {
			return g = a, h
		}, result: i};
		return h
	}

	function rc(a) {
		function b(a) {
			return(h ? d : c)(a)
		}

		function c(b) {
			return uc(b, function (c, d) {
				c = a(c, d), b.point(c[0], c[1])
			})
		}

		function d(b) {
			function c(c, d) {
				c = a(c, d), b.point(c[0], c[1])
			}

			function d() {
				t = 0 / 0, y.point = f, b.lineStart()
			}

			function f(c, d) {
				var f = Fb([c, d]), g = a(c, d);
				e(t, u, s, v, w, x, t = g[0], u = g[1], s = c, v = f[0], w = f[1], x = f[2], h, b), b.point(t, u)
			}

			function g() {
				y.point = c, b.lineEnd()
			}

			function i() {
				d(), y.point = j, y.lineEnd = k
			}

			function j(a, b) {
				f(l = a, m = b), n = t, o = u, p = v, q = w, r = x, y.point = f
			}

			function k() {
				e(t, u, s, v, w, x, n, o, l, p, q, r, h, b), y.lineEnd = g, g()
			}

			var l, m, n, o, p, q, r, s, t, u, v, w, x, y = {point: c, lineStart: d, lineEnd: g, polygonStart: function () {
				b.polygonStart(), y.lineStart = i
			}, polygonEnd: function () {
				b.polygonEnd(), y.lineStart = d
			}};
			return y
		}

		function e(b, c, d, h, i, j, k, l, m, n, o, p, q, r) {
			var s = k - b, t = l - c, u = s * s + t * t;
			if (u > 4 * f && q--) {
				var v = h + n, w = i + o, x = j + p, y = Math.sqrt(v * v + w * w + x * x), z = Math.asin(x /= y), A = hh(hh(x) - 1) < Ch ? (d + m) / 2 : Math.atan2(w, v), B = a(A, z), C = B[0], D = B[1], E = C - b, F = D - c, G = t * E - s * F;
				(G * G / u > f || hh((s * E + t * F) / u - .5) > .3 || g > h * n + i * o + j * p) && (e(b, c, d, h, i, j, C, D, A, v /= y, w /= y, x, q, r), r.point(C, D), e(C, D, A, v, w, x, k, l, m, n, o, p, q, r))
			}
		}

		var f = .5, g = Math.cos(30 * Eh), h = 16;
		return b.precision = function (a) {
			return arguments.length ? (h = (f = a * a) > 0 && 16, b) : Math.sqrt(f)
		}, b
	}

	function sc(a) {
		var b = rc(function (b, c) {
			return a([b * Fh, c * Fh])
		});
		return function (a) {
			return xc(b(a))
		}
	}

	function tc(a) {
		this.stream = a
	}

	function uc(a, b) {
		return{point: b, sphere: function () {
			a.sphere()
		}, lineStart: function () {
			a.lineStart()
		}, lineEnd: function () {
			a.lineEnd()
		}, polygonStart: function () {
			a.polygonStart()
		}, polygonEnd: function () {
			a.polygonEnd()
		}}
	}

	function vc(a) {
		return wc(function () {
			return a
		})()
	}

	function wc(a) {
		function b(a) {
			return a = h(a[0] * Eh, a[1] * Eh), [a[0] * m + i, j - a[1] * m]
		}

		function c(a) {
			return a = h.invert((a[0] - i) / m, (j - a[1]) / m), a && [a[0] * Fh, a[1] * Fh]
		}

		function d() {
			h = fc(g = Ac(r, s, t), f);
			var a = f(p, q);
			return i = n - a[0] * m, j = o + a[1] * m, e()
		}

		function e() {
			return k && (k.valid = !1, k = null), b
		}

		var f, g, h, i, j, k, l = rc(function (a, b) {
			return a = f(a, b), [a[0] * m + i, j - a[1] * m]
		}), m = 150, n = 480, o = 250, p = 0, q = 0, r = 0, s = 0, t = 0, u = Ai, v = pb, w = null, x = null;
		return b.stream = function (a) {
			return k && (k.valid = !1), k = xc(u(g, l(v(a)))), k.valid = !0, k
		}, b.clipAngle = function (a) {
			return arguments.length ? (u = null == a ? (w = a, Ai) : cc((w = +a) * Eh), e()) : w
		}, b.clipExtent = function (a) {
			return arguments.length ? (x = a, v = a ? ec(a[0][0], a[0][1], a[1][0], a[1][1]) : pb, e()) : x
		}, b.scale = function (a) {
			return arguments.length ? (m = +a, d()) : m
		}, b.translate = function (a) {
			return arguments.length ? (n = +a[0], o = +a[1], d()) : [n, o]
		}, b.center = function (a) {
			return arguments.length ? (p = a[0] % 360 * Eh, q = a[1] % 360 * Eh, d()) : [p * Fh, q * Fh]
		}, b.rotate = function (a) {
			return arguments.length ? (r = a[0] % 360 * Eh, s = a[1] % 360 * Eh, t = a.length > 2 ? a[2] % 360 * Eh : 0, d()) : [r * Fh, s * Fh, t * Fh]
		}, Vg.rebind(b, l, "precision"), function () {
			return f = a.apply(this, arguments), b.invert = f.invert && c, d()
		}
	}

	function xc(a) {
		return uc(a, function (b, c) {
			a.point(b * Eh, c * Eh)
		})
	}

	function yc(a, b) {
		return[a, b]
	}

	function zc(a, b) {
		return[a > zh ? a - Ah : -zh > a ? a + Ah : a, b]
	}

	function Ac(a, b, c) {
		return a ? b || c ? fc(Cc(a), Dc(b, c)) : Cc(a) : b || c ? Dc(b, c) : zc
	}

	function Bc(a) {
		return function (b, c) {
			return b += a, [b > zh ? b - Ah : -zh > b ? b + Ah : b, c]
		}
	}

	function Cc(a) {
		var b = Bc(a);
		return b.invert = Bc(-a), b
	}

	function Dc(a, b) {
		function c(a, b) {
			var c = Math.cos(b), h = Math.cos(a) * c, i = Math.sin(a) * c, j = Math.sin(b), k = j * d + h * e;
			return[Math.atan2(i * f - k * g, h * d - j * e), N(k * f + i * g)]
		}

		var d = Math.cos(a), e = Math.sin(a), f = Math.cos(b), g = Math.sin(b);
		return c.invert = function (a, b) {
			var c = Math.cos(b), h = Math.cos(a) * c, i = Math.sin(a) * c, j = Math.sin(b), k = j * f - i * g;
			return[Math.atan2(i * f + j * g, h * d + k * e), N(k * d - h * e)]
		}, c
	}

	function Ec(a, b) {
		var c = Math.cos(a), d = Math.sin(a);
		return function (e, f, g, h) {
			var i = g * b;
			null != e ? (e = Fc(c, e), f = Fc(c, f), (g > 0 ? f > e : e > f) && (e += g * Ah)) : (e = a + g * Ah, f = a - .5 * i);
			for (var j, k = e; g > 0 ? k > f : f > k; k -= i)h.point((j = Lb([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], j[1])
		}
	}

	function Fc(a, b) {
		var c = Fb(b);
		c[0] -= a, Kb(c);
		var d = M(-c[1]);
		return((-c[2] < 0 ? -d : d) + 2 * Math.PI - Ch) % (2 * Math.PI)
	}

	function Gc(a, b, c) {
		var d = Vg.range(a, b - Ch, c).concat(b);
		return function (a) {
			return d.map(function (b) {
				return[a, b]
			})
		}
	}

	function Hc(a, b, c) {
		var d = Vg.range(a, b - Ch, c).concat(b);
		return function (a) {
			return d.map(function (b) {
				return[b, a]
			})
		}
	}

	function Ic(a) {
		return a.source
	}

	function Jc(a) {
		return a.target
	}

	function Kc(a, b, c, d) {
		var e = Math.cos(b), f = Math.sin(b), g = Math.cos(d), h = Math.sin(d), i = e * Math.cos(a), j = e * Math.sin(a), k = g * Math.cos(c), l = g * Math.sin(c), m = 2 * Math.asin(Math.sqrt(R(d - b) + e * g * R(c - a))), n = 1 / Math.sin(m), o = m ? function (a) {
			var b = Math.sin(a *= m) * n, c = Math.sin(m - a) * n, d = c * i + b * k, e = c * j + b * l, g = c * f + b * h;
			return[Math.atan2(e, d) * Fh, Math.atan2(g, Math.sqrt(d * d + e * e)) * Fh]
		} : function () {
			return[a * Fh, b * Fh]
		};
		return o.distance = m, o
	}

	function Lc() {
		function a(a, e) {
			var f = Math.sin(e *= Eh), g = Math.cos(e), h = hh((a *= Eh) - b), i = Math.cos(h);
			Li += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h), c * f + d * g * i), b = a, c = f, d = g
		}

		var b, c, d;
		Mi.point = function (e, f) {
			b = e * Eh, c = Math.sin(f *= Eh), d = Math.cos(f), Mi.point = a
		}, Mi.lineEnd = function () {
			Mi.point = Mi.lineEnd = i
		}
	}

	function Mc(a, b) {
		function c(b, c) {
			var d = Math.cos(b), e = Math.cos(c), f = a(d * e);
			return[f * e * Math.sin(b), f * Math.sin(c)]
		}

		return c.invert = function (a, c) {
			var d = Math.sqrt(a * a + c * c), e = b(d), f = Math.sin(e), g = Math.cos(e);
			return[Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
		}, c
	}

	function Nc(a, b) {
		function c(a, b) {
			var c = hh(hh(b) - Bh) < Ch ? 0 : g / Math.pow(e(b), f);
			return[c * Math.sin(f * a), g - c * Math.cos(f * a)]
		}

		var d = Math.cos(a), e = function (a) {
			return Math.tan(zh / 4 + a / 2)
		}, f = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a)), g = d * Math.pow(e(a), f) / f;
		return f ? (c.invert = function (a, b) {
			var c = g - b, d = L(f) * Math.sqrt(a * a + c * c);
			return[Math.atan2(a, c) / f, 2 * Math.atan(Math.pow(g / d, 1 / f)) - Bh]
		}, c) : Pc
	}

	function Oc(a, b) {
		function c(a, b) {
			var c = f - b;
			return[c * Math.sin(e * a), f - c * Math.cos(e * a)]
		}

		var d = Math.cos(a), e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a), f = d / e + a;
		return hh(e) < Ch ? yc : (c.invert = function (a, b) {
			var c = f - b;
			return[Math.atan2(a, c) / e, f - L(e) * Math.sqrt(a * a + c * c)]
		}, c)
	}

	function Pc(a, b) {
		return[a, Math.log(Math.tan(zh / 4 + b / 2))]
	}

	function Qc(a) {
		var b, c = vc(a), d = c.scale, e = c.translate, f = c.clipExtent;
		return c.scale = function () {
			var a = d.apply(c, arguments);
			return a === c ? b ? c.clipExtent(null) : c : a
		}, c.translate = function () {
			var a = e.apply(c, arguments);
			return a === c ? b ? c.clipExtent(null) : c : a
		}, c.clipExtent = function (a) {
			var g = f.apply(c, arguments);
			if (g === c) {
				if (b = null == a) {
					var h = zh * d(), i = e();
					f([
						[i[0] - h, i[1] - h],
						[i[0] + h, i[1] + h]
					])
				}
			} else b && (g = null);
			return g
		}, c.clipExtent(null)
	}

	function Rc(a, b) {
		var c = Math.cos(b) * Math.sin(a);
		return[Math.log((1 + c) / (1 - c)) / 2, Math.atan2(Math.tan(b), Math.cos(a))]
	}

	function Sc(a) {
		return a[0]
	}

	function Tc(a) {
		return a[1]
	}

	function Uc(a, b, c, d) {
		var e, f, g, h, i, j, k;
		return e = d[a], f = e[0], g = e[1], e = d[b], h = e[0], i = e[1], e = d[c], j = e[0], k = e[1], (k - g) * (h - f) - (i - g) * (j - f) > 0
	}

	function Vc(a, b, c) {
		return(c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
	}

	function Wc(a, b, c, d) {
		var e = a[0], f = c[0], g = b[0] - e, h = d[0] - f, i = a[1], j = c[1], k = b[1] - i, l = d[1] - j, m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
		return[e + m * g, i + m * k]
	}

	function Xc(a) {
		var b = a[0], c = a[a.length - 1];
		return!(b[0] - c[0] || b[1] - c[1])
	}

	function Yc() {
		rd(this), this.edge = this.site = this.circle = null
	}

	function Zc(a) {
		var b = Yi.pop() || new Yc;
		return b.site = a, b
	}

	function $c(a) {
		id(a), Vi.remove(a), Yi.push(a), rd(a)
	}

	function _c(a) {
		var b = a.circle, c = b.x, d = b.cy, e = {x: c, y: d}, f = a.P, g = a.N, h = [a];
		$c(a);
		for (var i = f; i.circle && hh(c - i.circle.x) < Ch && hh(d - i.circle.cy) < Ch;)f = i.P, h.unshift(i), $c(i), i = f;
		h.unshift(i), id(i);
		for (var j = g; j.circle && hh(c - j.circle.x) < Ch && hh(d - j.circle.cy) < Ch;)g = j.N, h.push(j), $c(j), j = g;
		h.push(j), id(j);
		var k, l = h.length;
		for (k = 1; l > k; ++k)j = h[k], i = h[k - 1], od(j.edge, i.site, j.site, e);
		i = h[0], j = h[l - 1], j.edge = md(i.site, j.site, null, e), hd(i), hd(j)
	}

	function ad(a) {
		for (var b, c, d, e, f = a.x, g = a.y, h = Vi._; h;)if (d = bd(h, g) - f, d > Ch)h = h.L; else {
			if (e = f - cd(h, g), !(e > Ch)) {
				d > -Ch ? (b = h.P, c = h) : e > -Ch ? (b = h, c = h.N) : b = c = h;
				break
			}
			if (!h.R) {
				b = h;
				break
			}
			h = h.R
		}
		var i = Zc(a);
		if (Vi.insert(b, i), b || c) {
			if (b === c)return id(b), c = Zc(b.site), Vi.insert(i, c), i.edge = c.edge = md(b.site, i.site), hd(b), hd(c), void 0;
			if (!c)return i.edge = md(b.site, i.site), void 0;
			id(b), id(c);
			var j = b.site, k = j.x, l = j.y, m = a.x - k, n = a.y - l, o = c.site, p = o.x - k, q = o.y - l, r = 2 * (m * q - n * p), s = m * m + n * n, t = p * p + q * q, u = {x: (q * s - n * t) / r + k, y: (m * t - p * s) / r + l};
			od(c.edge, j, o, u), i.edge = md(j, a, null, u), c.edge = md(a, o, null, u), hd(b), hd(c)
		}
	}

	function bd(a, b) {
		var c = a.site, d = c.x, e = c.y, f = e - b;
		if (!f)return d;
		var g = a.P;
		if (!g)return-1 / 0;
		c = g.site;
		var h = c.x, i = c.y, j = i - b;
		if (!j)return h;
		var k = h - d, l = 1 / f - 1 / j, m = k / j;
		return l ? (-m + Math.sqrt(m * m - 2 * l * (k * k / (-2 * j) - i + j / 2 + e - f / 2))) / l + d : (d + h) / 2
	}

	function cd(a, b) {
		var c = a.N;
		if (c)return bd(c, b);
		var d = a.site;
		return d.y === b ? d.x : 1 / 0
	}

	function dd(a) {
		this.site = a, this.edges = []
	}

	function ed(a) {
		for (var b, c, d, e, f, g, h, i, j, k, l = a[0][0], m = a[1][0], n = a[0][1], o = a[1][1], p = Ui, q = p.length; q--;)if (f = p[q], f && f.prepare())for (h = f.edges, i = h.length, g = 0; i > g;)k = h[g].end(), d = k.x, e = k.y, j = h[++g % i].start(), b = j.x, c = j.y, (hh(d - b) > Ch || hh(e - c) > Ch) && (h.splice(g, 0, new pd(nd(f.site, k, hh(d - l) < Ch && o - e > Ch ? {x: l, y: hh(b - l) < Ch ? c : o} : hh(e - o) < Ch && m - d > Ch ? {x: hh(c - o) < Ch ? b : m, y: o} : hh(d - m) < Ch && e - n > Ch ? {x: m, y: hh(b - m) < Ch ? c : n} : hh(e - n) < Ch && d - l > Ch ? {x: hh(c - n) < Ch ? b : l, y: n} : null), f.site, null)), ++i)
	}

	function fd(a, b) {
		return b.angle - a.angle
	}

	function gd() {
		rd(this), this.x = this.y = this.arc = this.site = this.cy = null
	}

	function hd(a) {
		var b = a.P, c = a.N;
		if (b && c) {
			var d = b.site, e = a.site, f = c.site;
			if (d !== f) {
				var g = e.x, h = e.y, i = d.x - g, j = d.y - h, k = f.x - g, l = f.y - h, m = 2 * (i * l - j * k);
				if (!(m >= -Dh)) {
					var n = i * i + j * j, o = k * k + l * l, p = (l * n - j * o) / m, q = (i * o - k * n) / m, l = q + h, r = Zi.pop() || new gd;
					r.arc = a, r.site = e, r.x = p + g, r.y = l + Math.sqrt(p * p + q * q), r.cy = l, a.circle = r;
					for (var s = null, t = Xi._; t;)if (r.y < t.y || r.y === t.y && r.x <= t.x) {
						if (!t.L) {
							s = t.P;
							break
						}
						t = t.L
					} else {
						if (!t.R) {
							s = t;
							break
						}
						t = t.R
					}
					Xi.insert(s, r), s || (Wi = r)
				}
			}
		}
	}

	function id(a) {
		var b = a.circle;
		b && (b.P || (Wi = b.N), Xi.remove(b), Zi.push(b), rd(b), a.circle = null)
	}

	function jd(a) {
		for (var b, c = Ti, d = dc(a[0][0], a[0][1], a[1][0], a[1][1]), e = c.length; e--;)b = c[e], (!kd(b, a) || !d(b) || hh(b.a.x - b.b.x) < Ch && hh(b.a.y - b.b.y) < Ch) && (b.a = b.b = null, c.splice(e, 1))
	}

	function kd(a, b) {
		var c = a.b;
		if (c)return!0;
		var d, e, f = a.a, g = b[0][0], h = b[1][0], i = b[0][1], j = b[1][1], k = a.l, l = a.r, m = k.x, n = k.y, o = l.x, p = l.y, q = (m + o) / 2, r = (n + p) / 2;
		if (p === n) {
			if (g > q || q >= h)return;
			if (m > o) {
				if (f) {
					if (f.y >= j)return
				} else f = {x: q, y: i};
				c = {x: q, y: j}
			} else {
				if (f) {
					if (f.y < i)return
				} else f = {x: q, y: j};
				c = {x: q, y: i}
			}
		} else if (d = (m - o) / (p - n), e = r - d * q, -1 > d || d > 1)if (m > o) {
			if (f) {
				if (f.y >= j)return
			} else f = {x: (i - e) / d, y: i};
			c = {x: (j - e) / d, y: j}
		} else {
			if (f) {
				if (f.y < i)return
			} else f = {x: (j - e) / d, y: j};
			c = {x: (i - e) / d, y: i}
		} else if (p > n) {
			if (f) {
				if (f.x >= h)return
			} else f = {x: g, y: d * g + e};
			c = {x: h, y: d * h + e}
		} else {
			if (f) {
				if (f.x < g)return
			} else f = {x: h, y: d * h + e};
			c = {x: g, y: d * g + e}
		}
		return a.a = f, a.b = c, !0
	}

	function ld(a, b) {
		this.l = a, this.r = b, this.a = this.b = null
	}

	function md(a, b, c, d) {
		var e = new ld(a, b);
		return Ti.push(e), c && od(e, a, b, c), d && od(e, b, a, d), Ui[a.i].edges.push(new pd(e, a, b)), Ui[b.i].edges.push(new pd(e, b, a)), e
	}

	function nd(a, b, c) {
		var d = new ld(a, null);
		return d.a = b, d.b = c, Ti.push(d), d
	}

	function od(a, b, c, d) {
		a.a || a.b ? a.l === c ? a.b = d : a.a = d : (a.a = d, a.l = b, a.r = c)
	}

	function pd(a, b, c) {
		var d = a.a, e = a.b;
		this.edge = a, this.site = b, this.angle = c ? Math.atan2(c.y - b.y, c.x - b.x) : a.l === b ? Math.atan2(e.x - d.x, d.y - e.y) : Math.atan2(d.x - e.x, e.y - d.y)
	}

	function qd() {
		this._ = null
	}

	function rd(a) {
		a.U = a.C = a.L = a.R = a.P = a.N = null
	}

	function sd(a, b) {
		var c = b, d = b.R, e = c.U;
		e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.R = d.L, c.R && (c.R.U = c), d.L = c
	}

	function td(a, b) {
		var c = b, d = b.L, e = c.U;
		e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.L = d.R, c.L && (c.L.U = c), d.R = c
	}

	function ud(a) {
		for (; a.L;)a = a.L;
		return a
	}

	function vd(a, b) {
		var c, d, e, f = a.sort(wd).pop();
		for (Ti = [], Ui = new Array(a.length), Vi = new qd, Xi = new qd; ;)if (e = Wi, f && (!e || f.y < e.y || f.y === e.y && f.x < e.x))(f.x !== c || f.y !== d) && (Ui[f.i] = new dd(f), ad(f), c = f.x, d = f.y), f = a.pop(); else {
			if (!e)break;
			_c(e.arc)
		}
		b && (jd(b), ed(b));
		var g = {cells: Ui, edges: Ti};
		return Vi = Xi = Ti = Ui = null, g
	}

	function wd(a, b) {
		return b.y - a.y || b.x - a.x
	}

	function xd(a, b, c) {
		return(a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y)
	}

	function yd(a) {
		return a.x
	}

	function zd(a) {
		return a.y
	}

	function Ad() {
		return{leaf: !0, nodes: [], point: null, x: null, y: null}
	}

	function Bd(a, b, c, d, e, f) {
		if (!a(b, c, d, e, f)) {
			var g = .5 * (c + e), h = .5 * (d + f), i = b.nodes;
			i[0] && Bd(a, i[0], c, d, g, h), i[1] && Bd(a, i[1], g, d, e, h), i[2] && Bd(a, i[2], c, h, g, f), i[3] && Bd(a, i[3], g, h, e, f)
		}
	}

	function Cd(a, b) {
		a = Vg.rgb(a), b = Vg.rgb(b);
		var c = a.r, d = a.g, e = a.b, f = b.r - c, g = b.g - d, h = b.b - e;
		return function (a) {
			return"#" + ib(Math.round(c + f * a)) + ib(Math.round(d + g * a)) + ib(Math.round(e + h * a))
		}
	}

	function Dd(a, b) {
		var c, d = {}, e = {};
		for (c in a)c in b ? d[c] = Gd(a[c], b[c]) : e[c] = a[c];
		for (c in b)c in a || (e[c] = b[c]);
		return function (a) {
			for (c in d)e[c] = d[c](a);
			return e
		}
	}

	function Ed(a, b) {
		return b -= a = +a, function (c) {
			return a + b * c
		}
	}

	function Fd(a, b) {
		var c, d, e, f, g, h = 0, i = 0, j = [], k = [];
		for (a += "", b += "", _i.lastIndex = 0, d = 0; c = _i.exec(b); ++d)c.index && j.push(b.substring(h, i = c.index)), k.push({i: j.length, x: c[0]}), j.push(null), h = _i.lastIndex;
		for (h < b.length && j.push(b.substring(h)), d = 0, f = k.length; (c = _i.exec(a)) && f > d; ++d)if (g = k[d], g.x == c[0]) {
			if (g.i)if (null == j[g.i + 1])for (j[g.i - 1] += g.x, j.splice(g.i, 1), e = d + 1; f > e; ++e)k[e].i--; else for (j[g.i - 1] += g.x + j[g.i + 1], j.splice(g.i, 2), e = d + 1; f > e; ++e)k[e].i -= 2; else if (null == j[g.i + 1])j[g.i] = g.x; else for (j[g.i] = g.x + j[g.i + 1], j.splice(g.i + 1, 1), e = d + 1; f > e; ++e)k[e].i--;
			k.splice(d, 1), f--, d--
		} else g.x = Ed(parseFloat(c[0]), parseFloat(g.x));
		for (; f > d;)g = k.pop(), null == j[g.i + 1] ? j[g.i] = g.x : (j[g.i] = g.x + j[g.i + 1], j.splice(g.i + 1, 1)), f--;
		return 1 === j.length ? null == j[0] ? (g = k[0].x, function (a) {
			return g(a) + ""
		}) : function () {
			return b
		} : function (a) {
			for (d = 0; f > d; ++d)j[(g = k[d]).i] = g.x(a);
			return j.join("")
		}
	}

	function Gd(a, b) {
		for (var c, d = Vg.interpolators.length; --d >= 0 && !(c = Vg.interpolators[d](a, b)););
		return c
	}

	function Hd(a, b) {
		var c, d = [], e = [], f = a.length, g = b.length, h = Math.min(a.length, b.length);
		for (c = 0; h > c; ++c)d.push(Gd(a[c], b[c]));
		for (; f > c; ++c)e[c] = a[c];
		for (; g > c; ++c)e[c] = b[c];
		return function (a) {
			for (c = 0; h > c; ++c)e[c] = d[c](a);
			return e
		}
	}

	function Id(a) {
		return function (b) {
			return 0 >= b ? 0 : b >= 1 ? 1 : a(b)
		}
	}

	function Jd(a) {
		return function (b) {
			return 1 - a(1 - b)
		}
	}

	function Kd(a) {
		return function (b) {
			return.5 * (.5 > b ? a(2 * b) : 2 - a(2 - 2 * b))
		}
	}

	function Ld(a) {
		return a * a
	}

	function Md(a) {
		return a * a * a
	}

	function Nd(a) {
		if (0 >= a)return 0;
		if (a >= 1)return 1;
		var b = a * a, c = b * a;
		return 4 * (.5 > a ? c : 3 * (a - b) + c - .75)
	}

	function Od(a) {
		return function (b) {
			return Math.pow(b, a)
		}
	}

	function Pd(a) {
		return 1 - Math.cos(a * Bh)
	}

	function Qd(a) {
		return Math.pow(2, 10 * (a - 1))
	}

	function Rd(a) {
		return 1 - Math.sqrt(1 - a * a)
	}

	function Sd(a, b) {
		var c;
		return arguments.length < 2 && (b = .45), arguments.length ? c = b / Ah * Math.asin(1 / a) : (a = 1, c = b / 4), function (d) {
			return 1 + a * Math.pow(2, -10 * d) * Math.sin((d - c) * Ah / b)
		}
	}

	function Td(a) {
		return a || (a = 1.70158), function (b) {
			return b * b * ((a + 1) * b - a)
		}
	}

	function Ud(a) {
		return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
	}

	function Vd(a, b) {
		a = Vg.hcl(a), b = Vg.hcl(b);
		var c = a.h, d = a.c, e = a.l, f = b.h - c, g = b.c - d, h = b.l - e;
		return isNaN(g) && (g = 0, d = isNaN(d) ? b.c : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360), function (a) {
			return Y(c + f * a, d + g * a, e + h * a) + ""
		}
	}

	function Wd(a, b) {
		a = Vg.hsl(a), b = Vg.hsl(b);
		var c = a.h, d = a.s, e = a.l, f = b.h - c, g = b.s - d, h = b.l - e;
		return isNaN(g) && (g = 0, d = isNaN(d) ? b.s : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360), function (a) {
			return V(c + f * a, d + g * a, e + h * a) + ""
		}
	}

	function Xd(a, b) {
		a = Vg.lab(a), b = Vg.lab(b);
		var c = a.l, d = a.a, e = a.b, f = b.l - c, g = b.a - d, h = b.b - e;
		return function (a) {
			return _(c + f * a, d + g * a, e + h * a) + ""
		}
	}

	function Yd(a, b) {
		return b -= a, function (c) {
			return Math.round(a + b * c)
		}
	}

	function Zd(a) {
		var b = [a.a, a.b], c = [a.c, a.d], d = _d(b), e = $d(b, c), f = _d(ae(c, b, -e)) || 0;
		b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Fh, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * Fh : 0
	}

	function $d(a, b) {
		return a[0] * b[0] + a[1] * b[1]
	}

	function _d(a) {
		var b = Math.sqrt($d(a, a));
		return b && (a[0] /= b, a[1] /= b), b
	}

	function ae(a, b, c) {
		return a[0] += c * b[0], a[1] += c * b[1], a
	}

	function be(a, b) {
		var c, d = [], e = [], f = Vg.transform(a), g = Vg.transform(b), h = f.translate, i = g.translate, j = f.rotate, k = g.rotate, l = f.skew, m = g.skew, n = f.scale, o = g.scale;
		return h[0] != i[0] || h[1] != i[1] ? (d.push("translate(", null, ",", null, ")"), e.push({i: 1, x: Ed(h[0], i[0])}, {i: 3, x: Ed(h[1], i[1])})) : i[0] || i[1] ? d.push("translate(" + i + ")") : d.push(""), j != k ? (j - k > 180 ? k += 360 : k - j > 180 && (j += 360), e.push({i: d.push(d.pop() + "rotate(", null, ")") - 2, x: Ed(j, k)})) : k && d.push(d.pop() + "rotate(" + k + ")"), l != m ? e.push({i: d.push(d.pop() + "skewX(", null, ")") - 2, x: Ed(l, m)}) : m && d.push(d.pop() + "skewX(" + m + ")"), n[0] != o[0] || n[1] != o[1] ? (c = d.push(d.pop() + "scale(", null, ",", null, ")"), e.push({i: c - 4, x: Ed(n[0], o[0])}, {i: c - 2, x: Ed(n[1], o[1])})) : (1 != o[0] || 1 != o[1]) && d.push(d.pop() + "scale(" + o + ")"), c = e.length, function (a) {
			for (var b, f = -1; ++f < c;)d[(b = e[f]).i] = b.x(a);
			return d.join("")
		}
	}

	function ce(a, b) {
		return b = b - (a = +a) ? 1 / (b - a) : 0, function (c) {
			return(c - a) * b
		}
	}

	function de(a, b) {
		return b = b - (a = +a) ? 1 / (b - a) : 0, function (c) {
			return Math.max(0, Math.min(1, (c - a) * b))
		}
	}

	function ee(a) {
		for (var b = a.source, c = a.target, d = ge(b, c), e = [b]; b !== d;)b = b.parent, e.push(b);
		for (var f = e.length; c !== d;)e.splice(f, 0, c), c = c.parent;
		return e
	}

	function fe(a) {
		for (var b = [], c = a.parent; null != c;)b.push(a), a = c, c = c.parent;
		return b.push(a), b
	}

	function ge(a, b) {
		if (a === b)return a;
		for (var c = fe(a), d = fe(b), e = c.pop(), f = d.pop(), g = null; e === f;)g = e, e = c.pop(), f = d.pop();
		return g
	}

	function he(a) {
		a.fixed |= 2
	}

	function ie(a) {
		a.fixed &= -7
	}

	function je(a) {
		a.fixed |= 4, a.px = a.x, a.py = a.y
	}

	function ke(a) {
		a.fixed &= -5
	}

	function le(a, b, c) {
		var d = 0, e = 0;
		if (a.charge = 0, !a.leaf)for (var f, g = a.nodes, h = g.length, i = -1; ++i < h;)f = g[i], null != f && (le(f, b, c), a.charge += f.charge, d += f.charge * f.cx, e += f.charge * f.cy);
		if (a.point) {
			a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
			var j = b * c[a.point.index];
			a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
		}
		a.cx = d / a.charge, a.cy = e / a.charge
	}

	function me(a, b) {
		return Vg.rebind(a, b, "sort", "children", "value"), a.nodes = a, a.links = qe, a
	}

	function ne(a) {
		return a.children
	}

	function oe(a) {
		return a.value
	}

	function pe(a, b) {
		return b.value - a.value
	}

	function qe(a) {
		return Vg.merge(a.map(function (a) {
			return(a.children || []).map(function (b) {
				return{source: a, target: b}
			})
		}))
	}

	function re(a) {
		return a.x
	}

	function se(a) {
		return a.y
	}

	function te(a, b, c) {
		a.y0 = b, a.y = c
	}

	function ue(a) {
		return Vg.range(a.length)
	}

	function ve(a) {
		for (var b = -1, c = a[0].length, d = []; ++b < c;)d[b] = 0;
		return d
	}

	function we(a) {
		for (var b, c = 1, d = 0, e = a[0][1], f = a.length; f > c; ++c)(b = a[c][1]) > e && (d = c, e = b);
		return d
	}

	function xe(a) {
		return a.reduce(ye, 0)
	}

	function ye(a, b) {
		return a + b[1]
	}

	function ze(a, b) {
		return Ae(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
	}

	function Ae(a, b) {
		for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b;)f[c] = e * c + d;
		return f
	}

	function Be(a) {
		return[Vg.min(a), Vg.max(a)]
	}

	function Ce(a, b) {
		return a.parent == b.parent ? 1 : 2
	}

	function De(a) {
		var b = a.children;
		return b && b.length ? b[0] : a._tree.thread
	}

	function Ee(a) {
		var b, c = a.children;
		return c && (b = c.length) ? c[b - 1] : a._tree.thread
	}

	function Fe(a, b) {
		var c = a.children;
		if (c && (e = c.length))for (var d, e, f = -1; ++f < e;)b(d = Fe(c[f], b), a) > 0 && (a = d);
		return a
	}

	function Ge(a, b) {
		return a.x - b.x
	}

	function He(a, b) {
		return b.x - a.x
	}

	function Ie(a, b) {
		return a.depth - b.depth
	}

	function Je(a, b) {
		function c(a, d) {
			var e = a.children;
			if (e && (g = e.length))for (var f, g, h = null, i = -1; ++i < g;)f = e[i], c(f, h), h = f;
			b(a, d)
		}

		c(a, null)
	}

	function Ke(a) {
		for (var b, c = 0, d = 0, e = a.children, f = e.length; --f >= 0;)b = e[f]._tree, b.prelim += c, b.mod += c, c += b.shift + (d += b.change)
	}

	function Le(a, b, c) {
		a = a._tree, b = b._tree;
		var d = c / (b.number - a.number);
		a.change += d, b.change -= d, b.shift += c, b.prelim += c, b.mod += c
	}

	function Me(a, b, c) {
		return a._tree.ancestor.parent == b.parent ? a._tree.ancestor : c
	}

	function Ne(a, b) {
		return a.value - b.value
	}

	function Oe(a, b) {
		var c = a._pack_next;
		a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
	}

	function Pe(a, b) {
		a._pack_next = b, b._pack_prev = a
	}

	function Qe(a, b) {
		var c = b.x - a.x, d = b.y - a.y, e = a.r + b.r;
		return.999 * e * e > c * c + d * d
	}

	function Re(a) {
		function b(a) {
			k = Math.min(a.x - a.r, k), l = Math.max(a.x + a.r, l), m = Math.min(a.y - a.r, m), n = Math.max(a.y + a.r, n)
		}

		if ((c = a.children) && (j = c.length)) {
			var c, d, e, f, g, h, i, j, k = 1 / 0, l = -1 / 0, m = 1 / 0, n = -1 / 0;
			if (c.forEach(Se), d = c[0], d.x = -d.r, d.y = 0, b(d), j > 1 && (e = c[1], e.x = e.r, e.y = 0, b(e), j > 2))for (f = c[2], Ve(d, e, f), b(f), Oe(d, f), d._pack_prev = f, Oe(f, e), e = d._pack_next, g = 3; j > g; g++) {
				Ve(d, e, f = c[g]);
				var o = 0, p = 1, q = 1;
				for (h = e._pack_next; h !== e; h = h._pack_next, p++)if (Qe(h, f)) {
					o = 1;
					break
				}
				if (1 == o)for (i = d._pack_prev; i !== h._pack_prev && !Qe(i, f); i = i._pack_prev, q++);
				o ? (q > p || p == q && e.r < d.r ? Pe(d, e = h) : Pe(d = i, e), g--) : (Oe(d, f), e = f, b(f))
			}
			var r = (k + l) / 2, s = (m + n) / 2, t = 0;
			for (g = 0; j > g; g++)f = c[g], f.x -= r, f.y -= s, t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
			a.r = t, c.forEach(Te)
		}
	}

	function Se(a) {
		a._pack_next = a._pack_prev = a
	}

	function Te(a) {
		delete a._pack_next, delete a._pack_prev
	}

	function Ue(a, b, c, d) {
		var e = a.children;
		if (a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d, e)for (var f = -1, g = e.length; ++f < g;)Ue(e[f], b, c, d)
	}

	function Ve(a, b, c) {
		var d = a.r + c.r, e = b.x - a.x, f = b.y - a.y;
		if (d && (e || f)) {
			var g = b.r + c.r, h = e * e + f * f;
			g *= g, d *= d;
			var i = .5 + (d - g) / (2 * h), j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
			c.x = a.x + i * e + j * f, c.y = a.y + i * f - j * e
		} else c.x = a.x + d, c.y = a.y
	}

	function We(a) {
		return 1 + Vg.max(a, function (a) {
			return a.y
		})
	}

	function Xe(a) {
		return a.reduce(function (a, b) {
			return a + b.x
		}, 0) / a.length
	}

	function Ye(a) {
		var b = a.children;
		return b && b.length ? Ye(b[0]) : a
	}

	function Ze(a) {
		var b, c = a.children;
		return c && (b = c.length) ? Ze(c[b - 1]) : a
	}

	function $e(a) {
		return{x: a.x, y: a.y, dx: a.dx, dy: a.dy}
	}

	function _e(a, b) {
		var c = a.x + b[3], d = a.y + b[0], e = a.dx - b[1] - b[3], f = a.dy - b[0] - b[2];
		return 0 > e && (c += e / 2, e = 0), 0 > f && (d += f / 2, f = 0), {x: c, y: d, dx: e, dy: f}
	}

	function af(a) {
		var b = a[0], c = a[a.length - 1];
		return c > b ? [b, c] : [c, b]
	}

	function bf(a) {
		return a.rangeExtent ? a.rangeExtent() : af(a.range())
	}

	function cf(a, b, c, d) {
		var e = c(a[0], a[1]), f = d(b[0], b[1]);
		return function (a) {
			return f(e(a))
		}
	}

	function df(a, b) {
		var c, d = 0, e = a.length - 1, f = a[d], g = a[e];
		return f > g && (c = d, d = e, e = c, c = f, f = g, g = c), a[d] = b.floor(f), a[e] = b.ceil(g), a
	}

	function ef(a) {
		return a ? {floor: function (b) {
			return Math.floor(b / a) * a
		}, ceil: function (b) {
			return Math.ceil(b / a) * a
		}} : jj
	}

	function ff(a, b, c, d) {
		var e = [], f = [], g = 0, h = Math.min(a.length, b.length) - 1;
		for (a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g <= h;)e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
		return function (b) {
			var c = Vg.bisect(a, b, 1, h) - 1;
			return f[c](e[c](b))
		}
	}

	function gf(a, b, c, d) {
		function e() {
			var e = Math.min(a.length, b.length) > 2 ? ff : cf, i = d ? de : ce;
			return g = e(a, b, i, c), h = e(b, a, i, Gd), f
		}

		function f(a) {
			return g(a)
		}

		var g, h;
		return f.invert = function (a) {
			return h(a)
		}, f.domain = function (b) {
			return arguments.length ? (a = b.map(Number), e()) : a
		}, f.range = function (a) {
			return arguments.length ? (b = a, e()) : b
		}, f.rangeRound = function (a) {
			return f.range(a).interpolate(Yd)
		}, f.clamp = function (a) {
			return arguments.length ? (d = a, e()) : d
		}, f.interpolate = function (a) {
			return arguments.length ? (c = a, e()) : c
		}, f.ticks = function (b) {
			return lf(a, b)
		}, f.tickFormat = function (b, c) {
			return mf(a, b, c)
		}, f.nice = function (b) {
			return jf(a, b), e()
		}, f.copy = function () {
			return gf(a, b, c, d)
		}, e()
	}

	function hf(a, b) {
		return Vg.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
	}

	function jf(a, b) {
		return df(a, ef(kf(a, b)[2]))
	}

	function kf(a, b) {
		null == b && (b = 10);
		var c = af(a), d = c[1] - c[0], e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)), f = b / d * e;
		return.15 >= f ? e *= 10 : .35 >= f ? e *= 5 : .75 >= f && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + .5 * e, c[2] = e, c
	}

	function lf(a, b) {
		return Vg.range.apply(Vg, kf(a, b))
	}

	function mf(a, b, c) {
		var d = kf(a, b);
		return Vg.format(c ? c.replace(ei, function (a, b, c, e, f, g, h, i, j, k) {
			return[b, c, e, f, g, h, i, j || "." + of(k, d), k].join("")
		}) : ",." + nf(d[2]) + "f")
	}

	function nf(a) {
		return-Math.floor(Math.log(a) / Math.LN10 + .01)
	}

	function of(a, b) {
		var c = nf(b[2]);
		return a in kj ? Math.abs(c - nf(Math.max(Math.abs(b[0]), Math.abs(b[1])))) + +("e" !== a) : c - 2 * ("%" === a)
	}

	function pf(a, b, c, d) {
		function e(a) {
			return(c ? Math.log(0 > a ? 0 : a) : -Math.log(a > 0 ? 0 : -a)) / Math.log(b)
		}

		function f(a) {
			return c ? Math.pow(b, a) : -Math.pow(b, -a)
		}

		function g(b) {
			return a(e(b))
		}

		return g.invert = function (b) {
			return f(a.invert(b))
		}, g.domain = function (b) {
			return arguments.length ? (c = b[0] >= 0, a.domain((d = b.map(Number)).map(e)), g) : d
		}, g.base = function (c) {
			return arguments.length ? (b = +c, a.domain(d.map(e)), g) : b
		}, g.nice = function () {
			var b = df(d.map(e), c ? Math : mj);
			return a.domain(b), d = b.map(f), g
		}, g.ticks = function () {
			var a = af(d), g = [], h = a[0], i = a[1], j = Math.floor(e(h)), k = Math.ceil(e(i)), l = b % 1 ? 2 : b;
			if (isFinite(k - j)) {
				if (c) {
					for (; k > j; j++)for (var m = 1; l > m; m++)g.push(f(j) * m);
					g.push(f(j))
				} else for (g.push(f(j)); j++ < k;)for (var m = l - 1; m > 0; m--)g.push(f(j) * m);
				for (j = 0; g[j] < h; j++);
				for (k = g.length; g[k - 1] > i; k--);
				g = g.slice(j, k)
			}
			return g
		}, g.tickFormat = function (a, b) {
			if (!arguments.length)return lj;
			arguments.length < 2 ? b = lj : "function" != typeof b && (b = Vg.format(b));
			var d, h = Math.max(.1, a / g.ticks().length), i = c ? (d = 1e-12, Math.ceil) : (d = -1e-12, Math.floor);
			return function (a) {
				return a / f(i(e(a) + d)) <= h ? b(a) : ""
			}
		}, g.copy = function () {
			return pf(a.copy(), b, c, d)
		}, hf(g, a)
	}

	function qf(a, b, c) {
		function d(b) {
			return a(e(b))
		}

		var e = rf(b), f = rf(1 / b);
		return d.invert = function (b) {
			return f(a.invert(b))
		}, d.domain = function (b) {
			return arguments.length ? (a.domain((c = b.map(Number)).map(e)), d) : c
		}, d.ticks = function (a) {
			return lf(c, a)
		}, d.tickFormat = function (a, b) {
			return mf(c, a, b)
		}, d.nice = function (a) {
			return d.domain(jf(c, a))
		}, d.exponent = function (g) {
			return arguments.length ? (e = rf(b = g), f = rf(1 / b), a.domain(c.map(e)), d) : b
		}, d.copy = function () {
			return qf(a.copy(), b, c)
		}, hf(d, a)
	}

	function rf(a) {
		return function (b) {
			return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
		}
	}

	function sf(a, b) {
		function c(c) {
			return g[((f.get(c) || "range" === b.t && f.set(c, a.push(c))) - 1) % g.length]
		}

		function d(b, c) {
			return Vg.range(a.length).map(function (a) {
				return b + c * a
			})
		}

		var f, g, h;
		return c.domain = function (d) {
			if (!arguments.length)return a;
			a = [], f = new e;
			for (var g, h = -1, i = d.length; ++h < i;)f.has(g = d[h]) || f.set(g, a.push(g));
			return c[b.t].apply(c, b.a)
		}, c.range = function (a) {
			return arguments.length ? (g = a, h = 0, b = {t: "range", a: arguments}, c) : g
		}, c.rangePoints = function (e, f) {
			arguments.length < 2 && (f = 0);
			var i = e[0], j = e[1], k = (j - i) / (Math.max(1, a.length - 1) + f);
			return g = d(a.length < 2 ? (i + j) / 2 : i + k * f / 2, k), h = 0, b = {t: "rangePoints", a: arguments}, c
		}, c.rangeBands = function (e, f, i) {
			arguments.length < 2 && (f = 0), arguments.length < 3 && (i = f);
			var j = e[1] < e[0], k = e[j - 0], l = e[1 - j], m = (l - k) / (a.length - f + 2 * i);
			return g = d(k + m * i, m), j && g.reverse(), h = m * (1 - f), b = {t: "rangeBands", a: arguments}, c
		}, c.rangeRoundBands = function (e, f, i) {
			arguments.length < 2 && (f = 0), arguments.length < 3 && (i = f);
			var j = e[1] < e[0], k = e[j - 0], l = e[1 - j], m = Math.floor((l - k) / (a.length - f + 2 * i)), n = l - k - (a.length - f) * m;
			return g = d(k + Math.round(n / 2), m), j && g.reverse(), h = Math.round(m * (1 - f)), b = {t: "rangeRoundBands", a: arguments}, c
		}, c.rangeBand = function () {
			return h
		}, c.rangeExtent = function () {
			return af(b.a[0])
		}, c.copy = function () {
			return sf(a, b)
		}, c.domain(a)
	}

	function tf(a, b) {
		function c() {
			var c = 0, f = b.length;
			for (e = []; ++c < f;)e[c - 1] = Vg.quantile(a, c / f);
			return d
		}

		function d(a) {
			return isNaN(a = +a) ? void 0 : b[Vg.bisect(e, a)]
		}

		var e;
		return d.domain = function (b) {
			return arguments.length ? (a = b.filter(function (a) {
				return!isNaN(a)
			}).sort(Vg.ascending), c()) : a
		}, d.range = function (a) {
			return arguments.length ? (b = a, c()) : b
		}, d.quantiles = function () {
			return e
		}, d.invertExtent = function (c) {
			return c = b.indexOf(c), 0 > c ? [0 / 0, 0 / 0] : [c > 0 ? e[c - 1] : a[0], c < e.length ? e[c] : a[a.length - 1]]
		}, d.copy = function () {
			return tf(a, b)
		}, c()
	}

	function uf(a, b, c) {
		function d(b) {
			return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))]
		}

		function e() {
			return f = c.length / (b - a), g = c.length - 1, d
		}

		var f, g;
		return d.domain = function (c) {
			return arguments.length ? (a = +c[0], b = +c[c.length - 1], e()) : [a, b]
		}, d.range = function (a) {
			return arguments.length ? (c = a, e()) : c
		}, d.invertExtent = function (b) {
			return b = c.indexOf(b), b = 0 > b ? 0 / 0 : b / f + a, [b, b + 1 / f]
		}, d.copy = function () {
			return uf(a, b, c)
		}, e()
	}

	function vf(a, b) {
		function c(c) {
			return c >= c ? b[Vg.bisect(a, c)] : void 0
		}

		return c.domain = function (b) {
			return arguments.length ? (a = b, c) : a
		}, c.range = function (a) {
			return arguments.length ? (b = a, c) : b
		}, c.invertExtent = function (c) {
			return c = b.indexOf(c), [a[c - 1], a[c]]
		}, c.copy = function () {
			return vf(a, b)
		}, c
	}

	function wf(a) {
		function b(a) {
			return+a
		}

		return b.invert = b, b.domain = b.range = function (c) {
			return arguments.length ? (a = c.map(b), b) : a
		}, b.ticks = function (b) {
			return lf(a, b)
		}, b.tickFormat = function (b, c) {
			return mf(a, b, c)
		}, b.copy = function () {
			return wf(a)
		}, b
	}

	function xf(a) {
		return a.innerRadius
	}

	function yf(a) {
		return a.outerRadius
	}

	function zf(a) {
		return a.startAngle
	}

	function Af(a) {
		return a.endAngle
	}

	function Bf(a) {
		function b(b) {
			function g() {
				j.push("M", f(a(k), h))
			}

			for (var i, j = [], k = [], l = -1, m = b.length, n = ob(c), o = ob(d); ++l < m;)e.call(this, i = b[l], l) ? k.push([+n.call(this, i, l), +o.call(this, i, l)]) : k.length && (g(), k = []);
			return k.length && g(), j.length ? j.join("") : null
		}

		var c = Sc, d = Tc, e = Sb, f = Cf, g = f.key, h = .7;
		return b.x = function (a) {
			return arguments.length ? (c = a, b) : c
		}, b.y = function (a) {
			return arguments.length ? (d = a, b) : d
		}, b.defined = function (a) {
			return arguments.length ? (e = a, b) : e
		}, b.interpolate = function (a) {
			return arguments.length ? (g = "function" == typeof a ? f = a : (f = tj.get(a) || Cf).key, b) : g
		}, b.tension = function (a) {
			return arguments.length ? (h = a, b) : h
		}, b
	}

	function Cf(a) {
		return a.join("L")
	}

	function Df(a) {
		return Cf(a) + "Z"
	}

	function Ef(a) {
		for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;)e.push("H", (d[0] + (d = a[b])[0]) / 2, "V", d[1]);
		return c > 1 && e.push("H", d[0]), e.join("")
	}

	function Ff(a) {
		for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;)e.push("V", (d = a[b])[1], "H", d[0]);
		return e.join("")
	}

	function Gf(a) {
		for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;)e.push("H", (d = a[b])[0], "V", d[1]);
		return e.join("")
	}

	function Hf(a, b) {
		return a.length < 4 ? Cf(a) : a[1] + Kf(a.slice(1, a.length - 1), Lf(a, b))
	}

	function If(a, b) {
		return a.length < 3 ? Cf(a) : a[0] + Kf((a.push(a[0]), a), Lf([a[a.length - 2]].concat(a, [a[1]]), b))
	}

	function Jf(a, b) {
		return a.length < 3 ? Cf(a) : a[0] + Kf(a, Lf(a, b))
	}

	function Kf(a, b) {
		if (b.length < 1 || a.length != b.length && a.length != b.length + 2)return Cf(a);
		var c = a.length != b.length, d = "", e = a[0], f = a[1], g = b[0], h = g, i = 1;
		if (c && (d += "Q" + (f[0] - 2 * g[0] / 3) + "," + (f[1] - 2 * g[1] / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2), b.length > 1) {
			h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
			for (var j = 2; j < b.length; j++, i++)f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
		}
		if (c) {
			var k = a[i];
			d += "Q" + (f[0] + 2 * h[0] / 3) + "," + (f[1] + 2 * h[1] / 3) + "," + k[0] + "," + k[1]
		}
		return d
	}

	function Lf(a, b) {
		for (var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1, i = a.length; ++h < i;)c = f, f = g, g = a[h], d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
		return d
	}

	function Mf(a) {
		if (a.length < 3)return Cf(a);
		var b = 1, c = a.length, d = a[0], e = d[0], f = d[1], g = [e, e, e, (d = a[1])[0]], h = [f, f, f, d[1]], i = [e, ",", f, "L", Qf(wj, g), ",", Qf(wj, h)];
		for (a.push(a[c - 1]); ++b <= c;)d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), Rf(i, g, h);
		return a.pop(), i.push("L", d), i.join("")
	}

	function Nf(a) {
		if (a.length < 4)return Cf(a);
		for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3;)b = a[d], f.push(b[0]), g.push(b[1]);
		for (c.push(Qf(wj, f) + "," + Qf(wj, g)), --d; ++d < e;)b = a[d], f.shift(), f.push(b[0]), g.shift(), g.push(b[1]), Rf(c, f, g);
		return c.join("")
	}

	function Of(a) {
		for (var b, c, d = -1, e = a.length, f = e + 4, g = [], h = []; ++d < 4;)c = a[d % e], g.push(c[0]), h.push(c[1]);
		for (b = [Qf(wj, g), ",", Qf(wj, h)], --d; ++d < f;)c = a[d % e], g.shift(), g.push(c[0]), h.shift(), h.push(c[1]), Rf(b, g, h);
		return b.join("")
	}

	function Pf(a, b) {
		var c = a.length - 1;
		if (c)for (var d, e, f = a[0][0], g = a[0][1], h = a[c][0] - f, i = a[c][1] - g, j = -1; ++j <= c;)d = a[j], e = j / c, d[0] = b * d[0] + (1 - b) * (f + e * h), d[1] = b * d[1] + (1 - b) * (g + e * i);
		return Mf(a)
	}

	function Qf(a, b) {
		return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
	}

	function Rf(a, b, c) {
		a.push("C", Qf(uj, b), ",", Qf(uj, c), ",", Qf(vj, b), ",", Qf(vj, c), ",", Qf(wj, b), ",", Qf(wj, c))
	}

	function Sf(a, b) {
		return(b[1] - a[1]) / (b[0] - a[0])
	}

	function Tf(a) {
		for (var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = Sf(e, f); ++b < c;)d[b] = (g + (g = Sf(e = f, f = a[b + 1]))) / 2;
		return d[b] = g, d
	}

	function Uf(a) {
		for (var b, c, d, e, f = [], g = Tf(a), h = -1, i = a.length - 1; ++h < i;)b = Sf(a[h], a[h + 1]), hh(b) < Ch ? g[h] = g[h + 1] = 0 : (c = g[h] / b, d = g[h + 1] / b, e = c * c + d * d, e > 9 && (e = 3 * b / Math.sqrt(e), g[h] = e * c, g[h + 1] = e * d));
		for (h = -1; ++h <= i;)e = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), f.push([e || 0, g[h] * e || 0]);
		return f
	}

	function Vf(a) {
		return a.length < 3 ? Cf(a) : a[0] + Kf(a, Uf(a))
	}

	function Wf(a) {
		for (var b, c, d, e = -1, f = a.length; ++e < f;)b = a[e], c = b[0], d = b[1] + rj, b[0] = c * Math.cos(d), b[1] = c * Math.sin(d);
		return a
	}

	function Xf(a) {
		function b(b) {
			function i() {
				p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z")
			}

			for (var m, n, o, p = [], q = [], r = [], s = -1, t = b.length, u = ob(c), v = ob(e), w = c === d ? function () {
				return n
			} : ob(d), x = e === f ? function () {
				return o
			} : ob(f); ++s < t;)g.call(this, m = b[s], s) ? (q.push([n = +u.call(this, m, s), o = +v.call(this, m, s)]), r.push([+w.call(this, m, s), +x.call(this, m, s)])) : q.length && (i(), q = [], r = []);
			return q.length && i(), p.length ? p.join("") : null
		}

		var c = Sc, d = Sc, e = 0, f = Tc, g = Sb, h = Cf, i = h.key, j = h, k = "L", l = .7;
		return b.x = function (a) {
			return arguments.length ? (c = d = a, b) : d
		}, b.x0 = function (a) {
			return arguments.length ? (c = a, b) : c
		}, b.x1 = function (a) {
			return arguments.length ? (d = a, b) : d
		}, b.y = function (a) {
			return arguments.length ? (e = f = a, b) : f
		}, b.y0 = function (a) {
			return arguments.length ? (e = a, b) : e
		}, b.y1 = function (a) {
			return arguments.length ? (f = a, b) : f
		}, b.defined = function (a) {
			return arguments.length ? (g = a, b) : g
		}, b.interpolate = function (a) {
			return arguments.length ? (i = "function" == typeof a ? h = a : (h = tj.get(a) || Cf).key, j = h.reverse || h, k = h.closed ? "M" : "L", b) : i
		}, b.tension = function (a) {
			return arguments.length ? (l = a, b) : l
		}, b
	}

	function Yf(a) {
		return a.radius
	}

	function Zf(a) {
		return[a.x, a.y]
	}

	function $f(a) {
		return function () {
			var b = a.apply(this, arguments), c = b[0], d = b[1] + rj;
			return[c * Math.cos(d), c * Math.sin(d)]
		}
	}

	function _f() {
		return 64
	}

	function ag() {
		return"circle"
	}

	function bg(a) {
		var b = Math.sqrt(a / zh);
		return"M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
	}

	function cg(a, b) {
		return mh(a, Cj), a.id = b, a
	}

	function dg(a, b, c, d) {
		var e = a.id;
		return C(a, "function" == typeof c ? function (a, f, g) {
			a.__transition__[e].tween.set(b, d(c.call(a, a.__data__, f, g)))
		} : (c = d(c), function (a) {
			a.__transition__[e].tween.set(b, c)
		}))
	}

	function eg(a) {
		return null == a && (a = ""), function () {
			this.textContent = a
		}
	}

	function fg(a, b, c, d) {
		var f = a.__transition__ || (a.__transition__ = {active: 0, count: 0}), g = f[c];
		if (!g) {
			var h = d.time;
			g = f[c] = {tween: new e, time: h, ease: d.ease, delay: d.delay, duration: d.duration}, ++f.count, Vg.timer(function (d) {
				function e(d) {
					return f.active > c ? j() : (f.active = c, g.event && g.event.start.call(a, k, b), g.tween.forEach(function (c, d) {
						(d = d.call(a, k, b)) && p.push(d)
					}), Vg.timer(function () {
						return o.c = i(d || 1) ? Sb : i, 1
					}, 0, h), void 0)
				}

				function i(d) {
					if (f.active !== c)return j();
					for (var e = d / n, h = l(e), i = p.length; i > 0;)p[--i].call(a, h);
					return e >= 1 ? (g.event && g.event.end.call(a, k, b), j()) : void 0
				}

				function j() {
					return--f.count ? delete f[c] : delete a.__transition__, 1
				}

				var k = a.__data__, l = g.ease, m = g.delay, n = g.duration, o = Zh, p = [];
				return o.t = m + h, d >= m ? e(d - m) : (o.c = e, void 0)
			}, 0, h)
		}
	}

	function gg(a, b) {
		a.attr("transform", function (a) {
			return"translate(" + b(a) + ",0)"
		})
	}

	function hg(a, b) {
		a.attr("transform", function (a) {
			return"translate(0," + b(a) + ")"
		})
	}

	function ig() {
		this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
	}

	function jg(a, b, c) {
		function d(b) {
			var c = a(b), d = f(c, 1);
			return d - b > b - c ? c : d
		}

		function e(c) {
			return b(c = a(new Jj(c - 1)), 1), c
		}

		function f(a, c) {
			return b(a = new Jj(+a), c), a
		}

		function g(a, d, f) {
			var g = e(a), h = [];
			if (f > 1)for (; d > g;)c(g) % f || h.push(new Date(+g)), b(g, 1); else for (; d > g;)h.push(new Date(+g)), b(g, 1);
			return h
		}

		function h(a, b, c) {
			try {
				Jj = ig;
				var d = new ig;
				return d._ = a, g(d, b, c)
			} finally {
				Jj = Date
			}
		}

		a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
		var i = a.utc = kg(a);
		return i.floor = i, i.round = kg(d), i.ceil = kg(e), i.offset = kg(f), i.range = h, a
	}

	function kg(a) {
		return function (b, c) {
			try {
				Jj = ig;
				var d = new ig;
				return d._ = b, a(d, c)._
			} finally {
				Jj = Date
			}
		}
	}

	function lg(a) {
		function b(b) {
			for (var d, e, f, g = [], h = -1, i = 0; ++h < c;)37 === a.charCodeAt(h) && (g.push(a.substring(i, h)), null != (e = ak[d = a.charAt(++h)]) && (d = a.charAt(++h)), (f = bk[d]) && (d = f(b, null == e ? "e" === d ? " " : "0" : e)), g.push(d), i = h + 1);
			return g.push(a.substring(i, h)), g.join("")
		}

		var c = a.length;
		return b.parse = function (b) {
			var c = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null}, d = mg(c, a, b, 0);
			if (d != b.length)return null;
			"p"in c && (c.H = c.H % 12 + 12 * c.p);
			var e = null != c.Z && Jj !== ig, f = new (e ? ig : Jj);
			return"j"in c ? f.setFullYear(c.y, 0, c.j) : "w"in c && ("W"in c || "U"in c) ? (f.setFullYear(c.y, 0, 1), f.setFullYear(c.y, 0, "W"in c ? (c.w + 6) % 7 + 7 * c.W - (f.getDay() + 5) % 7 : c.w + 7 * c.U - (f.getDay() + 6) % 7)) : f.setFullYear(c.y, c.m, c.d), f.setHours(c.H + Math.floor(c.Z / 100), c.M + c.Z % 100, c.S, c.L), e ? f._ : f
		}, b.toString = function () {
			return a
		}, b
	}

	function mg(a, b, c, d) {
		for (var e, f, g, h = 0, i = b.length, j = c.length; i > h;) {
			if (d >= j)return-1;
			if (e = b.charCodeAt(h++), 37 === e) {
				if (g = b.charAt(h++), f = ck[g in ak ? b.charAt(h++) : g], !f || (d = f(a, c, d)) < 0)return-1
			} else if (e != c.charCodeAt(d++))return-1
		}
		return d
	}

	function ng(a) {
		return new RegExp("^(?:" + a.map(Vg.requote).join("|") + ")", "i")
	}

	function og(a) {
		for (var b = new e, c = -1, d = a.length; ++c < d;)b.set(a[c].toLowerCase(), c);
		return b
	}

	function pg(a, b, c) {
		var d = 0 > a ? "-" : "", e = (d ? -a : a) + "", f = e.length;
		return d + (c > f ? new Array(c - f + 1).join(b) + e : e)
	}

	function qg(a, b, c) {
		Vj.lastIndex = 0;
		var d = Vj.exec(b.substring(c));
		return d ? (a.w = Wj.get(d[0].toLowerCase()), c + d[0].length) : -1
	}

	function rg(a, b, c) {
		Tj.lastIndex = 0;
		var d = Tj.exec(b.substring(c));
		return d ? (a.w = Uj.get(d[0].toLowerCase()), c + d[0].length) : -1
	}

	function sg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 1));
		return d ? (a.w = +d[0], c + d[0].length) : -1
	}

	function tg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c));
		return d ? (a.U = +d[0], c + d[0].length) : -1
	}

	function ug(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c));
		return d ? (a.W = +d[0], c + d[0].length) : -1
	}

	function vg(a, b, c) {
		Zj.lastIndex = 0;
		var d = Zj.exec(b.substring(c));
		return d ? (a.m = $j.get(d[0].toLowerCase()), c + d[0].length) : -1
	}

	function wg(a, b, c) {
		Xj.lastIndex = 0;
		var d = Xj.exec(b.substring(c));
		return d ? (a.m = Yj.get(d[0].toLowerCase()), c + d[0].length) : -1
	}

	function xg(a, b, c) {
		return mg(a, bk.c.toString(), b, c)
	}

	function yg(a, b, c) {
		return mg(a, bk.x.toString(), b, c)
	}

	function zg(a, b, c) {
		return mg(a, bk.X.toString(), b, c)
	}

	function Ag(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 4));
		return d ? (a.y = +d[0], c + d[0].length) : -1
	}

	function Bg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 2));
		return d ? (a.y = Dg(+d[0]), c + d[0].length) : -1
	}

	function Cg(a, b, c) {
		return/^[+-]\d{4}$/.test(b = b.substring(c, c + 5)) ? (a.Z = +b, c + 5) : -1
	}

	function Dg(a) {
		return a + (a > 68 ? 1900 : 2e3)
	}

	function Eg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 2));
		return d ? (a.m = d[0] - 1, c + d[0].length) : -1
	}

	function Fg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 2));
		return d ? (a.d = +d[0], c + d[0].length) : -1
	}

	function Gg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 3));
		return d ? (a.j = +d[0], c + d[0].length) : -1
	}

	function Hg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 2));
		return d ? (a.H = +d[0], c + d[0].length) : -1
	}

	function Ig(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 2));
		return d ? (a.M = +d[0], c + d[0].length) : -1
	}

	function Jg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 2));
		return d ? (a.S = +d[0], c + d[0].length) : -1
	}

	function Kg(a, b, c) {
		dk.lastIndex = 0;
		var d = dk.exec(b.substring(c, c + 3));
		return d ? (a.L = +d[0], c + d[0].length) : -1
	}

	function Lg(a, b, c) {
		var d = ek.get(b.substring(c, c += 2).toLowerCase());
		return null == d ? -1 : (a.p = d, c)
	}

	function Mg(a) {
		var b = a.getTimezoneOffset(), c = b > 0 ? "-" : "+", d = ~~(hh(b) / 60), e = hh(b) % 60;
		return c + pg(d, "0", 2) + pg(e, "0", 2)
	}

	function Ng(a, b, c) {
		_j.lastIndex = 0;
		var d = _j.exec(b.substring(c, c + 1));
		return d ? c + d[0].length : -1
	}

	function Og(a) {
		function b(a) {
			try {
				Jj = ig;
				var b = new Jj;
				return b._ = a, c(b)
			} finally {
				Jj = Date
			}
		}

		var c = lg(a);
		return b.parse = function (a) {
			try {
				Jj = ig;
				var b = c.parse(a);
				return b && b._
			} finally {
				Jj = Date
			}
		}, b.toString = c.toString, b
	}

	function Pg(a) {
		return a.toISOString()
	}

	function Qg(a, b, c) {
		function d(b) {
			return a(b)
		}

		function e(a, c) {
			var d = a[1] - a[0], e = d / c, f = Vg.bisect(gk, e);
			return f == gk.length ? [b.year, kf(a.map(function (a) {
				return a / 31536e6
			}), c)[2]] : f ? b[e / gk[f - 1] < gk[f] / e ? f - 1 : f] : [kk, kf(a, c)[2]]
		}

		return d.invert = function (b) {
			return Rg(a.invert(b))
		}, d.domain = function (b) {
			return arguments.length ? (a.domain(b), d) : a.domain().map(Rg)
		}, d.nice = function (a, b) {
			function c(c) {
				return!isNaN(c) && !a.range(c, Rg(+c + 1), b).length
			}

			var f = d.domain(), g = af(f), h = null == a ? e(g, 10) : "number" == typeof a && e(g, a);
			return h && (a = h[0], b = h[1]), d.domain(df(f, b > 1 ? {floor: function (b) {
				for (; c(b = a.floor(b));)b = Rg(b - 1);
				return b
			}, ceil: function (b) {
				for (; c(b = a.ceil(b));)b = Rg(+b + 1);
				return b
			}} : a))
		}, d.ticks = function (a, b) {
			var c = af(d.domain()), f = null == a ? e(c, 10) : "number" == typeof a ? e(c, a) : !a.range && [
				{range: a},
				b
			];
			return f && (a = f[0], b = f[1]), a.range(c[0], Rg(+c[1] + 1), 1 > b ? 1 : b)
		}, d.tickFormat = function () {
			return c
		}, d.copy = function () {
			return Qg(a.copy(), b, c)
		}, hf(d, a)
	}

	function Rg(a) {
		return new Date(a)
	}

	function Sg(a) {
		return function (b) {
			for (var c = a.length - 1, d = a[c]; !d[1](b);)d = a[--c];
			return d[0](b)
		}
	}

	function Tg(a) {
		return JSON.parse(a.responseText)
	}

	function Ug(a) {
		var b = Yg.createRange();
		return b.selectNode(Yg.body), b.createContextualFragment(a.responseText)
	}

	var Vg = {version: "3.3.9"};
	Date.now || (Date.now = function () {
		return+new Date
	});
	var Wg = [].slice, Xg = function (a) {
		return Wg.call(a)
	}, Yg = document, Zg = Yg.documentElement, $g = window;
	try {
		Xg(Zg.childNodes)[0].nodeType
	} catch (_g) {
		Xg = function (a) {
			for (var b = a.length, c = new Array(b); b--;)c[b] = a[b];
			return c
		}
	}
	try {
		Yg.createElement("div").style.setProperty("opacity", 0, "")
	} catch (ah) {
		var bh = $g.Element.prototype, ch = bh.setAttribute, dh = bh.setAttributeNS, eh = $g.CSSStyleDeclaration.prototype, fh = eh.setProperty;
		bh.setAttribute = function (a, b) {
			ch.call(this, a, b + "")
		}, bh.setAttributeNS = function (a, b, c) {
			dh.call(this, a, b, c + "")
		}, eh.setProperty = function (a, b, c) {
			fh.call(this, a, b + "", c)
		}
	}
	Vg.ascending = function (a, b) {
		return b > a ? -1 : a > b ? 1 : a >= b ? 0 : 0 / 0
	}, Vg.descending = function (a, b) {
		return a > b ? -1 : b > a ? 1 : b >= a ? 0 : 0 / 0
	}, Vg.min = function (a, b) {
		var c, d, e = -1, f = a.length;
		if (1 === arguments.length) {
			for (; ++e < f && !(null != (c = a[e]) && c >= c);)c = void 0;
			for (; ++e < f;)null != (d = a[e]) && c > d && (c = d)
		} else {
			for (; ++e < f && !(null != (c = b.call(a, a[e], e)) && c >= c);)c = void 0;
			for (; ++e < f;)null != (d = b.call(a, a[e], e)) && c > d && (c = d)
		}
		return c
	}, Vg.max = function (a, b) {
		var c, d, e = -1, f = a.length;
		if (1 === arguments.length) {
			for (; ++e < f && !(null != (c = a[e]) && c >= c);)c = void 0;
			for (; ++e < f;)null != (d = a[e]) && d > c && (c = d)
		} else {
			for (; ++e < f && !(null != (c = b.call(a, a[e], e)) && c >= c);)c = void 0;
			for (; ++e < f;)null != (d = b.call(a, a[e], e)) && d > c && (c = d)
		}
		return c
	}, Vg.extent = function (a, b) {
		var c, d, e, f = -1, g = a.length;
		if (1 === arguments.length) {
			for (; ++f < g && !(null != (c = e = a[f]) && c >= c);)c = e = void 0;
			for (; ++f < g;)null != (d = a[f]) && (c > d && (c = d), d > e && (e = d))
		} else {
			for (; ++f < g && !(null != (c = e = b.call(a, a[f], f)) && c >= c);)c = void 0;
			for (; ++f < g;)null != (d = b.call(a, a[f], f)) && (c > d && (c = d), d > e && (e = d))
		}
		return[c, e]
	}, Vg.sum = function (a, b) {
		var c, d = 0, e = a.length, f = -1;
		if (1 === arguments.length)for (; ++f < e;)isNaN(c = +a[f]) || (d += c); else for (; ++f < e;)isNaN(c = +b.call(a, a[f], f)) || (d += c);
		return d
	}, Vg.mean = function (b, c) {
		var d, e = b.length, f = 0, g = -1, h = 0;
		if (1 === arguments.length)for (; ++g < e;)a(d = b[g]) && (f += (d - f) / ++h); else for (; ++g < e;)a(d = c.call(b, b[g], g)) && (f += (d - f) / ++h);
		return h ? f : void 0
	}, Vg.quantile = function (a, b) {
		var c = (a.length - 1) * b + 1, d = Math.floor(c), e = +a[d - 1], f = c - d;
		return f ? e + f * (a[d] - e) : e
	}, Vg.median = function (b, c) {
		return arguments.length > 1 && (b = b.map(c)), b = b.filter(a), b.length ? Vg.quantile(b.sort(Vg.ascending), .5) : void 0
	}, Vg.bisector = function (a) {
		return{left: function (b, c, d, e) {
			for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
				var f = d + e >>> 1;
				a.call(b, b[f], f) < c ? d = f + 1 : e = f
			}
			return d
		}, right: function (b, c, d, e) {
			for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
				var f = d + e >>> 1;
				c < a.call(b, b[f], f) ? e = f : d = f + 1
			}
			return d
		}}
	};
	var gh = Vg.bisector(function (a) {
		return a
	});
	Vg.bisectLeft = gh.left, Vg.bisect = Vg.bisectRight = gh.right, Vg.shuffle = function (a) {
		for (var b, c, d = a.length; d;)c = Math.random() * d-- | 0, b = a[d], a[d] = a[c], a[c] = b;
		return a
	}, Vg.permute = function (a, b) {
		for (var c = b.length, d = new Array(c); c--;)d[c] = a[b[c]];
		return d
	}, Vg.pairs = function (a) {
		for (var b, c = 0, d = a.length - 1, e = a[0], f = new Array(0 > d ? 0 : d); d > c;)f[c] = [b = e, e = a[++c]];
		return f
	}, Vg.zip = function () {
		if (!(e = arguments.length))return[];
		for (var a = -1, c = Vg.min(arguments, b), d = new Array(c); ++a < c;)for (var e, f = -1, g = d[a] = new Array(e); ++f < e;)g[f] = arguments[f][a];
		return d
	}, Vg.transpose = function (a) {
		return Vg.zip.apply(Vg, a)
	}, Vg.keys = function (a) {
		var b = [];
		for (var c in a)b.push(c);
		return b
	}, Vg.values = function (a) {
		var b = [];
		for (var c in a)b.push(a[c]);
		return b
	}, Vg.entries = function (a) {
		var b = [];
		for (var c in a)b.push({key: c, value: a[c]});
		return b
	}, Vg.merge = function (a) {
		for (var b, c, d, e = a.length, f = -1, g = 0; ++f < e;)g += a[f].length;
		for (c = new Array(g); --e >= 0;)for (d = a[e], b = d.length; --b >= 0;)c[--g] = d[b];
		return c
	};
	var hh = Math.abs;
	Vg.range = function (a, b, d) {
		if (arguments.length < 3 && (d = 1, arguments.length < 2 && (b = a, a = 0)), (b - a) / d === 1 / 0)throw new Error("infinite range");
		var e, f = [], g = c(hh(d)), h = -1;
		if (a *= g, b *= g, d *= g, 0 > d)for (; (e = a + d * ++h) > b;)f.push(e / g); else for (; (e = a + d * ++h) < b;)f.push(e / g);
		return f
	}, Vg.map = function (a) {
		var b = new e;
		if (a instanceof e)a.forEach(function (a, c) {
			b.set(a, c)
		}); else for (var c in a)b.set(c, a[c]);
		return b
	}, d(e, {has: function (a) {
		return ih + a in this
	}, get: function (a) {
		return this[ih + a]
	}, set: function (a, b) {
		return this[ih + a] = b
	}, remove: function (a) {
		return a = ih + a, a in this && delete this[a]
	}, keys: function () {
		var a = [];
		return this.forEach(function (b) {
			a.push(b)
		}), a
	}, values: function () {
		var a = [];
		return this.forEach(function (b, c) {
			a.push(c)
		}), a
	}, entries: function () {
		var a = [];
		return this.forEach(function (b, c) {
			a.push({key: b, value: c})
		}), a
	}, forEach: function (a) {
		for (var b in this)b.charCodeAt(0) === jh && a.call(this, b.substring(1), this[b])
	}});
	var ih = "\x00", jh = ih.charCodeAt(0);
	Vg.nest = function () {
		function a(b, h, i) {
			if (i >= g.length)return d ? d.call(f, h) : c ? h.sort(c) : h;
			for (var j, k, l, m, n = -1, o = h.length, p = g[i++], q = new e; ++n < o;)(m = q.get(j = p(k = h[n]))) ? m.push(k) : q.set(j, [k]);
			return b ? (k = b(), l = function (c, d) {
				k.set(c, a(b, d, i))
			}) : (k = {}, l = function (c, d) {
				k[c] = a(b, d, i)
			}), q.forEach(l), k
		}

		function b(a, c) {
			if (c >= g.length)return a;
			var d = [], e = h[c++];
			return a.forEach(function (a, e) {
				d.push({key: a, values: b(e, c)})
			}), e ? d.sort(function (a, b) {
				return e(a.key, b.key)
			}) : d
		}

		var c, d, f = {}, g = [], h = [];
		return f.map = function (b, c) {
			return a(c, b, 0)
		}, f.entries = function (c) {
			return b(a(Vg.map, c, 0), 0)
		}, f.key = function (a) {
			return g.push(a), f
		}, f.sortKeys = function (a) {
			return h[g.length - 1] = a, f
		}, f.sortValues = function (a) {
			return c = a, f
		}, f.rollup = function (a) {
			return d = a, f
		}, f
	}, Vg.set = function (a) {
		var b = new f;
		if (a)for (var c = 0, d = a.length; d > c; ++c)b.add(a[c]);
		return b
	}, d(f, {has: function (a) {
		return ih + a in this
	}, add: function (a) {
		return this[ih + a] = !0, a
	}, remove: function (a) {
		return a = ih + a, a in this && delete this[a]
	}, values: function () {
		var a = [];
		return this.forEach(function (b) {
			a.push(b)
		}), a
	}, forEach: function (a) {
		for (var b in this)b.charCodeAt(0) === jh && a.call(this, b.substring(1))
	}}), Vg.behavior = {}, Vg.rebind = function (a, b) {
		for (var c, d = 1, e = arguments.length; ++d < e;)a[c = arguments[d]] = g(a, b, b[c]);
		return a
	};
	var kh = ["webkit", "ms", "moz", "Moz", "o", "O"];
	Vg.dispatch = function () {
		for (var a = new j, b = -1, c = arguments.length; ++b < c;)a[arguments[b]] = k(a);
		return a
	}, j.prototype.on = function (a, b) {
		var c = a.indexOf("."), d = "";
		if (c >= 0 && (d = a.substring(c + 1), a = a.substring(0, c)), a)return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
		if (2 === arguments.length) {
			if (null == b)for (a in this)this.hasOwnProperty(a) && this[a].on(d, null);
			return this
		}
	}, Vg.event = null, Vg.requote = function (a) {
		return a.replace(lh, "\\$&")
	};
	var lh = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, mh = {}.__proto__ ? function (a, b) {
		a.__proto__ = b
	} : function (a, b) {
		for (var c in b)a[c] = b[c]
	}, nh = function (a, b) {
		return b.querySelector(a)
	}, oh = function (a, b) {
		return b.querySelectorAll(a)
	}, ph = Zg[h(Zg, "matchesSelector")], qh = function (a, b) {
		return ph.call(a, b)
	};
	"function" == typeof Sizzle && (nh = function (a, b) {
		return Sizzle(a, b)[0] || null
	}, oh = function (a, b) {
		return Sizzle.uniqueSort(Sizzle(a, b))
	}, qh = Sizzle.matchesSelector), Vg.selection = function () {
		return uh
	};
	var rh = Vg.selection.prototype = [];
	rh.select = function (a) {
		var b, c, d, e, f = [];
		a = p(a);
		for (var g = -1, h = this.length; ++g < h;) {
			f.push(b = []), b.parentNode = (d = this[g]).parentNode;
			for (var i = -1, j = d.length; ++i < j;)(e = d[i]) ? (b.push(c = a.call(e, e.__data__, i, g)), c && "__data__"in e && (c.__data__ = e.__data__)) : b.push(null)
		}
		return o(f)
	}, rh.selectAll = function (a) {
		var b, c, d = [];
		a = q(a);
		for (var e = -1, f = this.length; ++e < f;)for (var g = this[e], h = -1, i = g.length; ++h < i;)(c = g[h]) && (d.push(b = Xg(a.call(c, c.__data__, h, e))), b.parentNode = c);
		return o(d)
	};
	var sh = {svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/"};
	Vg.ns = {prefix: sh, qualify: function (a) {
		var b = a.indexOf(":"), c = a;
		return b >= 0 && (c = a.substring(0, b), a = a.substring(b + 1)), sh.hasOwnProperty(c) ? {space: sh[c], local: a} : a
	}}, rh.attr = function (a, b) {
		if (arguments.length < 2) {
			if ("string" == typeof a) {
				var c = this.node();
				return a = Vg.ns.qualify(a), a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
			}
			for (b in a)this.each(r(b, a[b]));
			return this
		}
		return this.each(r(a, b))
	}, rh.classed = function (a, b) {
		if (arguments.length < 2) {
			if ("string" == typeof a) {
				var c = this.node(), d = (a = a.trim().split(/^|\s+/g)).length, e = -1;
				if (b = c.classList) {
					for (; ++e < d;)if (!b.contains(a[e]))return!1
				} else for (b = c.getAttribute("class"); ++e < d;)if (!t(a[e]).test(b))return!1;
				return!0
			}
			for (b in a)this.each(u(b, a[b]));
			return this
		}
		return this.each(u(a, b))
	}, rh.style = function (a, b, c) {
		var d = arguments.length;
		if (3 > d) {
			if ("string" != typeof a) {
				2 > d && (b = "");
				for (c in a)this.each(w(c, a[c], b));
				return this
			}
			if (2 > d)return $g.getComputedStyle(this.node(), null).getPropertyValue(a);
			c = ""
		}
		return this.each(w(a, b, c))
	}, rh.property = function (a, b) {
		if (arguments.length < 2) {
			if ("string" == typeof a)return this.node()[a];
			for (b in a)this.each(x(b, a[b]));
			return this
		}
		return this.each(x(a, b))
	}, rh.text = function (a) {
		return arguments.length ? this.each("function" == typeof a ? function () {
			var b = a.apply(this, arguments);
			this.textContent = null == b ? "" : b
		} : null == a ? function () {
			this.textContent = ""
		} : function () {
			this.textContent = a
		}) : this.node().textContent
	}, rh.html = function (a) {
		return arguments.length ? this.each("function" == typeof a ? function () {
			var b = a.apply(this, arguments);
			this.innerHTML = null == b ? "" : b
		} : null == a ? function () {
			this.innerHTML = ""
		} : function () {
			this.innerHTML = a
		}) : this.node().innerHTML
	}, rh.append = function (a) {
		return a = y(a), this.select(function () {
			return this.appendChild(a.apply(this, arguments))
		})
	}, rh.insert = function (a, b) {
		return a = y(a), b = p(b), this.select(function () {
			return this.insertBefore(a.apply(this, arguments), b.apply(this, arguments) || null)
		})
	}, rh.remove = function () {
		return this.each(function () {
			var a = this.parentNode;
			a && a.removeChild(this)
		})
	}, rh.data = function (a, b) {
		function c(a, c) {
			var d, f, g, h = a.length, l = c.length, m = Math.min(h, l), n = new Array(l), o = new Array(l), p = new Array(h);
			if (b) {
				var q, r = new e, s = new e, t = [];
				for (d = -1; ++d < h;)q = b.call(f = a[d], f.__data__, d), r.has(q) ? p[d] = f : r.set(q, f), t.push(q);
				for (d = -1; ++d < l;)q = b.call(c, g = c[d], d), (f = r.get(q)) ? (n[d] = f, f.__data__ = g) : s.has(q) || (o[d] = z(g)), s.set(q, g), r.remove(q);
				for (d = -1; ++d < h;)r.has(t[d]) && (p[d] = a[d])
			} else {
				for (d = -1; ++d < m;)f = a[d], g = c[d], f ? (f.__data__ = g, n[d] = f) : o[d] = z(g);
				for (; l > d; ++d)o[d] = z(c[d]);
				for (; h > d; ++d)p[d] = a[d]
			}
			o.update = n, o.parentNode = n.parentNode = p.parentNode = a.parentNode, i.push(o), j.push(n), k.push(p)
		}

		var d, f, g = -1, h = this.length;
		if (!arguments.length) {
			for (a = new Array(h = (d = this[0]).length); ++g < h;)(f = d[g]) && (a[g] = f.__data__);
			return a
		}
		var i = D([]), j = o([]), k = o([]);
		if ("function" == typeof a)for (; ++g < h;)c(d = this[g], a.call(d, d.parentNode.__data__, g)); else for (; ++g < h;)c(d = this[g], a);
		return j.enter = function () {
			return i
		}, j.exit = function () {
			return k
		}, j
	}, rh.datum = function (a) {
		return arguments.length ? this.property("__data__", a) : this.property("__data__")
	}, rh.filter = function (a) {
		var b, c, d, e = [];
		"function" != typeof a && (a = A(a));
		for (var f = 0, g = this.length; g > f; f++) {
			e.push(b = []), b.parentNode = (c = this[f]).parentNode;
			for (var h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h) && b.push(d)
		}
		return o(e)
	}, rh.order = function () {
		for (var a = -1, b = this.length; ++a < b;)for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0;)(c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f), f = c);
		return this
	}, rh.sort = function (a) {
		a = B.apply(this, arguments);
		for (var b = -1, c = this.length; ++b < c;)this[b].sort(a);
		return this.order()
	}, rh.each = function (a) {
		return C(this, function (b, c, d) {
			a.call(b, b.__data__, c, d)
		})
	}, rh.call = function (a) {
		var b = Xg(arguments);
		return a.apply(b[0] = this, b), this
	}, rh.empty = function () {
		return!this.node()
	}, rh.node = function () {
		for (var a = 0, b = this.length; b > a; a++)for (var c = this[a], d = 0, e = c.length; e > d; d++) {
			var f = c[d];
			if (f)return f
		}
		return null
	}, rh.size = function () {
		var a = 0;
		return this.each(function () {
			++a
		}), a
	};
	var th = [];
	Vg.selection.enter = D, Vg.selection.enter.prototype = th, th.append = rh.append, th.empty = rh.empty, th.node = rh.node, th.call = rh.call, th.size = rh.size, th.select = function (a) {
		for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i;) {
			d = (e = this[h]).update, g.push(b = []), b.parentNode = e.parentNode;
			for (var j = -1, k = e.length; ++j < k;)(f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j, h)), c.__data__ = f.__data__) : b.push(null)
		}
		return o(g)
	}, th.insert = function (a, b) {
		return arguments.length < 2 && (b = E(this)), rh.insert.call(this, a, b)
	}, rh.transition = function () {
		for (var a, b, c = yj || ++Dj, d = [], e = zj || {time: Date.now(), ease: Nd, delay: 0, duration: 250}, f = -1, g = this.length; ++f < g;) {
			d.push(a = []);
			for (var h = this[f], i = -1, j = h.length; ++i < j;)(b = h[i]) && fg(b, i, c, e), a.push(b)
		}
		return cg(d, c)
	}, rh.interrupt = function () {
		return this.each(F)
	}, Vg.select = function (a) {
		var b = ["string" == typeof a ? nh(a, Yg) : a];
		return b.parentNode = Zg, o([b])
	}, Vg.selectAll = function (a) {
		var b = Xg("string" == typeof a ? oh(a, Yg) : a);
		return b.parentNode = Zg, o([b])
	};
	var uh = Vg.select(Zg);
	rh.on = function (a, b, c) {
		var d = arguments.length;
		if (3 > d) {
			if ("string" != typeof a) {
				2 > d && (b = !1);
				for (c in a)this.each(G(c, a[c], b));
				return this
			}
			if (2 > d)return(d = this.node()["__on" + a]) && d._;
			c = !1
		}
		return this.each(G(a, b, c))
	};
	var vh = Vg.map({mouseenter: "mouseover", mouseleave: "mouseout"});
	vh.forEach(function (a) {
		"on" + a in Yg && vh.remove(a)
	});
	var wh = "onselectstart"in Yg ? null : h(Zg.style, "userSelect"), xh = 0;
	Vg.mouse = function (a) {
		return K(a, m())
	};
	var yh = /WebKit/.test($g.navigator.userAgent) ? -1 : 0;
	Vg.touches = function (a, b) {
		return arguments.length < 2 && (b = m().touches), b ? Xg(b).map(function (b) {
			var c = K(a, b);
			return c.identifier = b.identifier, c
		}) : []
	}, Vg.behavior.drag = function () {
		function a() {
			this.on("mousedown.drag", g).on("touchstart.drag", h)
		}

		function b() {
			return Vg.event.changedTouches[0].identifier
		}

		function c(a, b) {
			return Vg.touches(a).filter(function (a) {
				return a.identifier === b
			})[0]
		}

		function d(a, b, c, d) {
			return function () {
				function g() {
					var a = b(k, n), c = a[0] - p[0], d = a[1] - p[1];
					q |= c | d, p = a, l({type: "drag", x: a[0] + i[0], y: a[1] + i[1], dx: c, dy: d})
				}

				function h() {
					r.on(c + "." + o, null).on(d + "." + o, null), s(q && Vg.event.target === m), l({type: "dragend"})
				}

				var i, j = this, k = j.parentNode, l = e.of(j, arguments), m = Vg.event.target, n = a(), o = null == n ? "drag" : "drag-" + n, p = b(k, n), q = 0, r = Vg.select($g).on(c + "." + o, g).on(d + "." + o, h), s = J();
				f ? (i = f.apply(j, arguments), i = [i.x - p[0], i.y - p[1]]) : i = [0, 0], l({type: "dragstart"})
			}
		}

		var e = n(a, "drag", "dragstart", "dragend"), f = null, g = d(i, Vg.mouse, "mousemove", "mouseup"), h = d(b, c, "touchmove", "touchend");
		return a.origin = function (b) {
			return arguments.length ? (f = b, a) : f
		}, Vg.rebind(a, e, "on")
	};
	var zh = Math.PI, Ah = 2 * zh, Bh = zh / 2, Ch = 1e-6, Dh = Ch * Ch, Eh = zh / 180, Fh = 180 / zh, Gh = Math.SQRT2, Hh = 2, Ih = 4;
	Vg.interpolateZoom = function (a, b) {
		function c(a) {
			var b = a * s;
			if (r) {
				var c = P(p), g = f / (Hh * m) * (c * Q(Gh * b + p) - O(p));
				return[d + g * j, e + g * k, f * c / P(Gh * b + p)]
			}
			return[d + a * j, e + a * k, f * Math.exp(Gh * b)]
		}

		var d = a[0], e = a[1], f = a[2], g = b[0], h = b[1], i = b[2], j = g - d, k = h - e, l = j * j + k * k, m = Math.sqrt(l), n = (i * i - f * f + Ih * l) / (2 * f * Hh * m), o = (i * i - f * f - Ih * l) / (2 * i * Hh * m), p = Math.log(Math.sqrt(n * n + 1) - n), q = Math.log(Math.sqrt(o * o + 1) - o), r = q - p, s = (r || Math.log(i / f)) / Gh;
		return c.duration = 1e3 * s, c
	}, Vg.behavior.zoom = function () {
		function a(a) {
			a.on(B, j).on(Lh + ".zoom", m).on(C, o).on("dblclick.zoom", p).on(E, k)
		}

		function b(a) {
			return[(a[0] - y.x) / y.k, (a[1] - y.y) / y.k]
		}

		function c(a) {
			return[a[0] * y.k + y.x, a[1] * y.k + y.y]
		}

		function d(a) {
			y.k = Math.max(A[0], Math.min(A[1], a))
		}

		function e(a, b) {
			b = c(b), y.x += a[0] - b[0], y.y += a[1] - b[1]
		}

		function f() {
			v && v.domain(u.range().map(function (a) {
				return(a - y.x) / y.k
			}).map(u.invert)), x && x.domain(w.range().map(function (a) {
				return(a - y.y) / y.k
			}).map(w.invert))
		}

		function g(a) {
			a({type: "zoomstart"})
		}

		function h(a) {
			f(), a({type: "zoom", scale: y.k, translate: [y.x, y.y]})
		}

		function i(a) {
			a({type: "zoomend"})
		}

		function j() {
			function a() {
				k = 1, e(Vg.mouse(d), m), h(f)
			}

			function c() {
				l.on(C, $g === d ? o : null).on(D, null), n(k && Vg.event.target === j), i(f)
			}

			var d = this, f = G.of(d, arguments), j = Vg.event.target, k = 0, l = Vg.select($g).on(C, a).on(D, c), m = b(Vg.mouse(d)), n = J();
			F.call(d), g(f)
		}

		function k() {
			function a() {
				var a = Vg.touches(o);
				return n = y.k, a.forEach(function (a) {
					a.identifier in q && (q[a.identifier] = b(a))
				}), a
			}

			function c() {
				for (var b = Vg.event.changedTouches, c = 0, f = b.length; f > c; ++c)q[b[c].identifier] = null;
				var g = a(), i = Date.now();
				if (1 === g.length) {
					if (500 > i - t) {
						var j = g[0], k = q[j.identifier];
						d(2 * y.k), e(j, k), l(), h(p)
					}
					t = i
				} else if (g.length > 1) {
					var j = g[0], m = g[1], n = j[0] - m[0], o = j[1] - m[1];
					r = n * n + o * o
				}
			}

			function f() {
				for (var a, b, c, f, g = Vg.touches(o), i = 0, j = g.length; j > i; ++i, f = null)if (c = g[i], f = q[c.identifier]) {
					if (b)break;
					a = c, b = f
				}
				if (f) {
					var k = (k = c[0] - a[0]) * k + (k = c[1] - a[1]) * k, l = r && Math.sqrt(k / r);
					a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], b = [(b[0] + f[0]) / 2, (b[1] + f[1]) / 2], d(l * n)
				}
				t = null, e(a, b), h(p)
			}

			function m() {
				if (Vg.event.touches.length) {
					for (var b = Vg.event.changedTouches, c = 0, d = b.length; d > c; ++c)delete q[b[c].identifier];
					for (var e in q)return void a()
				}
				w.on(u, null).on(v, null), x.on(B, j).on(E, k), z(), i(p)
			}

			var n, o = this, p = G.of(o, arguments), q = {}, r = 0, s = Vg.event.changedTouches[0].identifier, u = "touchmove.zoom-" + s, v = "touchend.zoom-" + s, w = Vg.select($g).on(u, f).on(v, m), x = Vg.select(o).on(B, null).on(E, c), z = J();
			F.call(o), c(), g(p)
		}

		function m() {
			var a = G.of(this, arguments);
			s ? clearTimeout(s) : (F.call(this), g(a)), s = setTimeout(function () {
				s = null, i(a)
			}, 50), l();
			var c = r || Vg.mouse(this);
			q || (q = b(c)), d(Math.pow(2, .002 * Jh()) * y.k), e(c, q), h(a)
		}

		function o() {
			q = null
		}

		function p() {
			var a = G.of(this, arguments), c = Vg.mouse(this), f = b(c), j = Math.log(y.k) / Math.LN2;
			g(a), d(Math.pow(2, Vg.event.shiftKey ? Math.ceil(j) - 1 : Math.floor(j) + 1)), e(c, f), h(a), i(a)
		}

		var q, r, s, t, u, v, w, x, y = {x: 0, y: 0, k: 1}, z = [960, 500], A = Kh, B = "mousedown.zoom", C = "mousemove.zoom", D = "mouseup.zoom", E = "touchstart.zoom", G = n(a, "zoomstart", "zoom", "zoomend");
		return a.event = function (a) {
			a.each(function () {
				var a = G.of(this, arguments), b = y;
				yj ? Vg.select(this).transition().each("start.zoom", function () {
					y = this.__chart__ || {x: 0, y: 0, k: 1}, g(a)
				}).tween("zoom:zoom", function () {
					var c = z[0], d = z[1], e = c / 2, f = d / 2, g = Vg.interpolateZoom([(e - y.x) / y.k, (f - y.y) / y.k, c / y.k], [(e - b.x) / b.k, (f - b.y) / b.k, c / b.k]);
					return function (b) {
						var d = g(b), i = c / d[2];
						this.__chart__ = y = {x: e - d[0] * i, y: f - d[1] * i, k: i}, h(a)
					}
				}).each("end.zoom", function () {
					i(a)
				}) : (this.__chart__ = y, g(a), h(a), i(a))
			})
		}, a.translate = function (b) {
			return arguments.length ? (y = {x: +b[0], y: +b[1], k: y.k}, f(), a) : [y.x, y.y]
		}, a.scale = function (b) {
			return arguments.length ? (y = {x: y.x, y: y.y, k: +b}, f(), a) : y.k
		}, a.scaleExtent = function (b) {
			return arguments.length ? (A = null == b ? Kh : [+b[0], +b[1]], a) : A
		}, a.center = function (b) {
			return arguments.length ? (r = b && [+b[0], +b[1]], a) : r
		}, a.size = function (b) {
			return arguments.length ? (z = b && [+b[0], +b[1]], a) : z
		}, a.x = function (b) {
			return arguments.length ? (v = b, u = b.copy(), y = {x: 0, y: 0, k: 1}, a) : v
		}, a.y = function (b) {
			return arguments.length ? (x = b, w = b.copy(), y = {x: 0, y: 0, k: 1}, a) : x
		}, Vg.rebind(a, G, "on")
	};
	var Jh, Kh = [0, 1 / 0], Lh = "onwheel"in Yg ? (Jh = function () {
		return-Vg.event.deltaY * (Vg.event.deltaMode ? 120 : 1)
	}, "wheel") : "onmousewheel"in Yg ? (Jh = function () {
		return Vg.event.wheelDelta
	}, "mousewheel") : (Jh = function () {
		return-Vg.event.detail
	}, "MozMousePixelScroll");
	S.prototype.toString = function () {
		return this.rgb() + ""
	}, Vg.hsl = function (a, b, c) {
		return 1 === arguments.length ? a instanceof U ? T(a.h, a.s, a.l) : jb("" + a, kb, T) : T(+a, +b, +c)
	};
	var Mh = U.prototype = new S;
	Mh.brighter = function (a) {
		return a = Math.pow(.7, arguments.length ? a : 1), T(this.h, this.s, this.l / a)
	}, Mh.darker = function (a) {
		return a = Math.pow(.7, arguments.length ? a : 1), T(this.h, this.s, a * this.l)
	}, Mh.rgb = function () {
		return V(this.h, this.s, this.l)
	}, Vg.hcl = function (a, b, c) {
		return 1 === arguments.length ? a instanceof X ? W(a.h, a.c, a.l) : a instanceof $ ? ab(a.l, a.a, a.b) : ab((a = lb((a = Vg.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : W(+a, +b, +c)
	};
	var Nh = X.prototype = new S;
	Nh.brighter = function (a) {
		return W(this.h, this.c, Math.min(100, this.l + Oh * (arguments.length ? a : 1)))
	}, Nh.darker = function (a) {
		return W(this.h, this.c, Math.max(0, this.l - Oh * (arguments.length ? a : 1)))
	}, Nh.rgb = function () {
		return Y(this.h, this.c, this.l).rgb()
	}, Vg.lab = function (a, b, c) {
		return 1 === arguments.length ? a instanceof $ ? Z(a.l, a.a, a.b) : a instanceof X ? Y(a.l, a.c, a.h) : lb((a = Vg.rgb(a)).r, a.g, a.b) : Z(+a, +b, +c)
	};
	var Oh = 18, Ph = .95047, Qh = 1, Rh = 1.08883, Sh = $.prototype = new S;
	Sh.brighter = function (a) {
		return Z(Math.min(100, this.l + Oh * (arguments.length ? a : 1)), this.a, this.b)
	}, Sh.darker = function (a) {
		return Z(Math.max(0, this.l - Oh * (arguments.length ? a : 1)), this.a, this.b)
	}, Sh.rgb = function () {
		return _(this.l, this.a, this.b)
	}, Vg.rgb = function (a, b, c) {
		return 1 === arguments.length ? a instanceof hb ? gb(a.r, a.g, a.b) : jb("" + a, gb, V) : gb(~~a, ~~b, ~~c)
	};
	var Th = hb.prototype = new S;
	Th.brighter = function (a) {
		a = Math.pow(.7, arguments.length ? a : 1);
		var b = this.r, c = this.g, d = this.b, e = 30;
		return b || c || d ? (b && e > b && (b = e), c && e > c && (c = e), d && e > d && (d = e), gb(Math.min(255, ~~(b / a)), Math.min(255, ~~(c / a)), Math.min(255, ~~(d / a)))) : gb(e, e, e)
	}, Th.darker = function (a) {
		return a = Math.pow(.7, arguments.length ? a : 1), gb(~~(a * this.r), ~~(a * this.g), ~~(a * this.b))
	}, Th.hsl = function () {
		return kb(this.r, this.g, this.b)
	}, Th.toString = function () {
		return"#" + ib(this.r) + ib(this.g) + ib(this.b)
	};
	var Uh = Vg.map({aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074});
	Uh.forEach(function (a, b) {
		Uh.set(a, eb(b))
	}), Vg.functor = ob, Vg.xhr = qb(pb), Vg.dsv = function (a, b) {
		function c(a, c, f) {
			arguments.length < 3 && (f = c, c = null);
			var g = Vg.xhr(a, b, f);
			return g.row = function (a) {
				return arguments.length ? g.response(null == (c = a) ? d : e(a)) : c
			}, g.row(c)
		}

		function d(a) {
			return c.parse(a.responseText)
		}

		function e(a) {
			return function (b) {
				return c.parse(b.responseText, a)
			}
		}

		function g(b) {
			return b.map(h).join(a)
		}

		function h(a) {
			return i.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
		}

		var i = new RegExp('["' + a + "\n]"), j = a.charCodeAt(0);
		return c.parse = function (a, b) {
			var d;
			return c.parseRows(a, function (a, c) {
				if (d)return d(a, c - 1);
				var e = new Function("d", "return {" + a.map(function (a, b) {
					return JSON.stringify(a) + ": d[" + b + "]"
				}).join(",") + "}");
				d = b ? function (a, c) {
					return b(e(a), c)
				} : e
			})
		}, c.parseRows = function (a, b) {
			function c() {
				if (k >= i)return g;
				if (e)return e = !1, f;
				var b = k;
				if (34 === a.charCodeAt(b)) {
					for (var c = b; c++ < i;)if (34 === a.charCodeAt(c)) {
						if (34 !== a.charCodeAt(c + 1))break;
						++c
					}
					k = c + 2;
					var d = a.charCodeAt(c + 1);
					return 13 === d ? (e = !0, 10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0), a.substring(b + 1, c).replace(/""/g, '"')
				}
				for (; i > k;) {
					var d = a.charCodeAt(k++), h = 1;
					if (10 === d)e = !0; else if (13 === d)e = !0, 10 === a.charCodeAt(k) && (++k, ++h); else if (d !== j)continue;
					return a.substring(b, k - h)
				}
				return a.substring(b)
			}

			for (var d, e, f = {}, g = {}, h = [], i = a.length, k = 0, l = 0; (d = c()) !== g;) {
				for (var m = []; d !== f && d !== g;)m.push(d), d = c();
				(!b || (m = b(m, l++))) && h.push(m)
			}
			return h
		}, c.format = function (b) {
			if (Array.isArray(b[0]))return c.formatRows(b);
			var d = new f, e = [];
			return b.forEach(function (a) {
				for (var b in a)d.has(b) || e.push(d.add(b))
			}), [e.map(h).join(a)].concat(b.map(function (b) {
				return e.map(function (a) {
					return h(b[a])
				}).join(a)
			})).join("\n")
		}, c.formatRows = function (a) {
			return a.map(g).join("\n")
		}, c
	}, Vg.csv = Vg.dsv(",", "text/csv"), Vg.tsv = Vg.dsv("	", "text/tab-separated-values");
	var Vh, Wh, Xh, Yh, Zh, $h = $g[h($g, "requestAnimationFrame")] || function (a) {
		setTimeout(a, 17)
	};
	Vg.timer = function (a, b, c) {
		var d = arguments.length;
		2 > d && (b = 0), 3 > d && (c = Date.now());
		var e = c + b, f = {c: a, t: e, f: !1, n: null};
		Wh ? Wh.n = f : Vh = f, Wh = f, Xh || (Yh = clearTimeout(Yh), Xh = 1, $h(tb))
	}, Vg.timer.flush = function () {
		ub(), vb()
	};
	var _h = ".", ai = ",", bi = [3, 3], ci = "$", di = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(wb);
	Vg.formatPrefix = function (a, b) {
		var c = 0;
		return a && (0 > a && (a *= -1), b && (a = Vg.round(a, xb(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= c ? c + 1 : c - 1) / 3)))), di[8 + c / 3]
	}, Vg.round = function (a, b) {
		return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
	}, Vg.format = function (a) {
		var b = ei.exec(a), c = b[1] || " ", d = b[2] || ">", e = b[3] || "", f = b[4] || "", g = b[5], h = +b[6], i = b[7], j = b[8], k = b[9], l = 1, m = "", n = !1;
		switch (j && (j = +j.substring(1)), (g || "0" === c && "=" === d) && (g = c = "0", d = "=", i && (h -= Math.floor((h - 1) / 4))), k) {
			case"n":
				i = !0, k = "g";
				break;
			case"%":
				l = 100, m = "%", k = "f";
				break;
			case"p":
				l = 100, m = "%", k = "r";
				break;
			case"b":
			case"o":
			case"x":
			case"X":
				"#" === f && (f = "0" + k.toLowerCase());
			case"c":
			case"d":
				n = !0, j = 0;
				break;
			case"s":
				l = -1, k = "r"
		}
		"#" === f ? f = "" : "$" === f && (f = ci), "r" != k || j || (k = "g"), null != j && ("g" == k ? j = Math.max(1, Math.min(21, j)) : ("e" == k || "f" == k) && (j = Math.max(0, Math.min(20, j)))), k = fi.get(k) || yb;
		var o = g && i;
		return function (a) {
			if (n && a % 1)return"";
			var b = 0 > a || 0 === a && 0 > 1 / a ? (a = -a, "-") : e;
			if (0 > l) {
				var p = Vg.formatPrefix(a, j);
				a = p.scale(a), m = p.symbol
			} else a *= l;
			a = k(a, j);
			var q = a.lastIndexOf("."), r = 0 > q ? a : a.substring(0, q), s = 0 > q ? "" : _h + a.substring(q + 1);
			!g && i && (r = gi(r));
			var t = f.length + r.length + s.length + (o ? 0 : b.length), u = h > t ? new Array(t = h - t + 1).join(c) : "";
			return o && (r = gi(u + r)), b += f, a = r + s, ("<" === d ? b + a + u : ">" === d ? u + b + a : "^" === d ? u.substring(0, t >>= 1) + b + a + u.substring(t) : b + (o ? a : u + a)) + m
		}
	};
	var ei = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, fi = Vg.map({b: function (a) {
		return a.toString(2)
	}, c: function (a) {
		return String.fromCharCode(a)
	}, o: function (a) {
		return a.toString(8)
	}, x: function (a) {
		return a.toString(16)
	}, X: function (a) {
		return a.toString(16).toUpperCase()
	}, g: function (a, b) {
		return a.toPrecision(b)
	}, e: function (a, b) {
		return a.toExponential(b)
	}, f: function (a, b) {
		return a.toFixed(b)
	}, r: function (a, b) {
		return(a = Vg.round(a, xb(a, b))).toFixed(Math.max(0, Math.min(20, xb(a * (1 + 1e-15), b))))
	}}), gi = pb;
	if (bi) {
		var hi = bi.length;
		gi = function (a) {
			for (var b = a.length, c = [], d = 0, e = bi[0]; b > 0 && e > 0;)c.push(a.substring(b -= e, b + e)), e = bi[d = (d + 1) % hi];
			return c.reverse().join(ai)
		}
	}
	Vg.geo = {}, zb.prototype = {s: 0, t: 0, add: function (a) {
		Ab(a, this.t, ii), Ab(ii.s, this.s, this), this.s ? this.t += ii.t : this.s = ii.t
	}, reset: function () {
		this.s = this.t = 0
	}, valueOf: function () {
		return this.s
	}};
	var ii = new zb;
	Vg.geo.stream = function (a, b) {
		a && ji.hasOwnProperty(a.type) ? ji[a.type](a, b) : Bb(a, b)
	};
	var ji = {Feature: function (a, b) {
		Bb(a.geometry, b)
	}, FeatureCollection: function (a, b) {
		for (var c = a.features, d = -1, e = c.length; ++d < e;)Bb(c[d].geometry, b)
	}}, ki = {Sphere: function (a, b) {
		b.sphere()
	}, Point: function (a, b) {
		a = a.coordinates, b.point(a[0], a[1], a[2])
	}, MultiPoint: function (a, b) {
		for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)a = c[d], b.point(a[0], a[1], a[2])
	}, LineString: function (a, b) {
		Cb(a.coordinates, b, 0)
	}, MultiLineString: function (a, b) {
		for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)Cb(c[d], b, 0)
	}, Polygon: function (a, b) {
		Db(a.coordinates, b)
	}, MultiPolygon: function (a, b) {
		for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)Db(c[d], b)
	}, GeometryCollection: function (a, b) {
		for (var c = a.geometries, d = -1, e = c.length; ++d < e;)Bb(c[d], b)
	}};
	Vg.geo.area = function (a) {
		return li = 0, Vg.geo.stream(a, ni), li
	};
	var li, mi = new zb, ni = {sphere: function () {
		li += 4 * zh
	}, point: i, lineStart: i, lineEnd: i, polygonStart: function () {
		mi.reset(), ni.lineStart = Eb
	}, polygonEnd: function () {
		var a = 2 * mi;
		li += 0 > a ? 4 * zh + a : a, ni.lineStart = ni.lineEnd = ni.point = i
	}};
	Vg.geo.bounds = function () {
		function a(a, b) {
			t.push(u = [k = a, m = a]), l > b && (l = b), b > n && (n = b)
		}

		function b(b, c) {
			var d = Fb([b * Eh, c * Eh]);
			if (r) {
				var e = Hb(r, d), f = [e[1], -e[0], 0], g = Hb(f, e);
				Kb(g), g = Lb(g);
				var i = b - o, j = i > 0 ? 1 : -1, p = g[0] * Fh * j, q = hh(i) > 180;
				if (q ^ (p > j * o && j * b > p)) {
					var s = g[1] * Fh;
					s > n && (n = s)
				} else if (p = (p + 360) % 360 - 180, q ^ (p > j * o && j * b > p)) {
					var s = -g[1] * Fh;
					l > s && (l = s)
				} else l > c && (l = c), c > n && (n = c);
				q ? o > b ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b) : m >= k ? (k > b && (k = b), b > m && (m = b)) : b > o ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b)
			} else a(b, c);
			r = d, o = b
		}

		function c() {
			v.point = b
		}

		function d() {
			u[0] = k, u[1] = m, v.point = a, r = null
		}

		function e(a, c) {
			if (r) {
				var d = a - o;
				s += hh(d) > 180 ? d + (d > 0 ? 360 : -360) : d
			} else p = a, q = c;
			ni.point(a, c), b(a, c)
		}

		function f() {
			ni.lineStart()
		}

		function g() {
			e(p, q), ni.lineEnd(), hh(s) > Ch && (k = -(m = 180)), u[0] = k, u[1] = m, r = null
		}

		function h(a, b) {
			return(b -= a) < 0 ? b + 360 : b
		}

		function i(a, b) {
			return a[0] - b[0]
		}

		function j(a, b) {
			return b[0] <= b[1] ? b[0] <= a && a <= b[1] : a < b[0] || b[1] < a
		}

		var k, l, m, n, o, p, q, r, s, t, u, v = {point: a, lineStart: c, lineEnd: d, polygonStart: function () {
			v.point = e, v.lineStart = f, v.lineEnd = g, s = 0, ni.polygonStart()
		}, polygonEnd: function () {
			ni.polygonEnd(), v.point = a, v.lineStart = c, v.lineEnd = d, 0 > mi ? (k = -(m = 180), l = -(n = 90)) : s > Ch ? n = 90 : -Ch > s && (l = -90), u[0] = k, u[1] = m
		}};
		return function (a) {
			n = m = -(k = l = 1 / 0), t = [], Vg.geo.stream(a, v);
			var b = t.length;
			if (b) {
				t.sort(i);
				for (var c, d = 1, e = t[0], f = [e]; b > d; ++d)c = t[d], j(c[0], e) || j(c[1], e) ? (h(e[0], c[1]) > h(e[0], e[1]) && (e[1] = c[1]), h(c[0], e[1]) > h(e[0], e[1]) && (e[0] = c[0])) : f.push(e = c);
				for (var g, c, o = -1 / 0, b = f.length - 1, d = 0, e = f[b]; b >= d; e = c, ++d)c = f[d], (g = h(e[1], c[0])) > o && (o = g, k = c[0], m = e[1])
			}
			return t = u = null, 1 / 0 === k || 1 / 0 === l ? [
				[0 / 0, 0 / 0],
				[0 / 0, 0 / 0]
			] : [
				[k, l],
				[m, n]
			]
		}
	}(), Vg.geo.centroid = function (a) {
		oi = pi = qi = ri = si = ti = ui = vi = wi = xi = yi = 0, Vg.geo.stream(a, zi);
		var b = wi, c = xi, d = yi, e = b * b + c * c + d * d;
		return Dh > e && (b = ti, c = ui, d = vi, Ch > pi && (b = qi, c = ri, d = si), e = b * b + c * c + d * d, Dh > e) ? [0 / 0, 0 / 0] : [Math.atan2(c, b) * Fh, N(d / Math.sqrt(e)) * Fh]
	};
	var oi, pi, qi, ri, si, ti, ui, vi, wi, xi, yi, zi = {sphere: i, point: Nb, lineStart: Pb, lineEnd: Qb, polygonStart: function () {
		zi.lineStart = Rb
	}, polygonEnd: function () {
		zi.lineStart = Pb
	}}, Ai = Wb(Sb, _b, bc, [-zh, -zh / 2]), Bi = 1e9;
	Vg.geo.clipExtent = function () {
		var a, b, c, d, e, f, g = {stream: function (a) {
			return e && (e.valid = !1), e = f(a), e.valid = !0, e
		}, extent: function (h) {
			return arguments.length ? (f = ec(a = +h[0][0], b = +h[0][1], c = +h[1][0], d = +h[1][1]), e && (e.valid = !1, e = null), g) : [
				[a, b],
				[c, d]
			]
		}};
		return g.extent([
			[0, 0],
			[960, 500]
		])
	}, (Vg.geo.conicEqualArea = function () {
		return gc(hc)
	}).raw = hc, Vg.geo.albers = function () {
		return Vg.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
	}, Vg.geo.albersUsa = function () {
		function a(a) {
			var f = a[0], g = a[1];
			return b = null, c(f, g), b || (d(f, g), b) || e(f, g), b
		}

		var b, c, d, e, f = Vg.geo.albers(), g = Vg.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), h = Vg.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), i = {point: function (a, c) {
			b = [a, c]
		}};
		return a.invert = function (a) {
			var b = f.scale(), c = f.translate(), d = (a[0] - c[0]) / b, e = (a[1] - c[1]) / b;
			return(e >= .12 && .234 > e && d >= -.425 && -.214 > d ? g : e >= .166 && .234 > e && d >= -.214 && -.115 > d ? h : f).invert(a)
		}, a.stream = function (a) {
			var b = f.stream(a), c = g.stream(a), d = h.stream(a);
			return{point: function (a, e) {
				b.point(a, e), c.point(a, e), d.point(a, e)
			}, sphere: function () {
				b.sphere(), c.sphere(), d.sphere()
			}, lineStart: function () {
				b.lineStart(), c.lineStart(), d.lineStart()
			}, lineEnd: function () {
				b.lineEnd(), c.lineEnd(), d.lineEnd()
			}, polygonStart: function () {
				b.polygonStart(), c.polygonStart(), d.polygonStart()
			}, polygonEnd: function () {
				b.polygonEnd(), c.polygonEnd(), d.polygonEnd()
			}}
		}, a.precision = function (b) {
			return arguments.length ? (f.precision(b), g.precision(b), h.precision(b), a) : f.precision()
		}, a.scale = function (b) {
			return arguments.length ? (f.scale(b), g.scale(.35 * b), h.scale(b), a.translate(f.translate())) : f.scale()
		}, a.translate = function (b) {
			if (!arguments.length)return f.translate();
			var j = f.scale(), k = +b[0], l = +b[1];
			return c = f.translate(b).clipExtent([
				[k - .455 * j, l - .238 * j],
				[k + .455 * j, l + .238 * j]
			]).stream(i).point, d = g.translate([k - .307 * j, l + .201 * j]).clipExtent([
				[k - .425 * j + Ch, l + .12 * j + Ch],
				[k - .214 * j - Ch, l + .234 * j - Ch]
			]).stream(i).point, e = h.translate([k - .205 * j, l + .212 * j]).clipExtent([
				[k - .214 * j + Ch, l + .166 * j + Ch],
				[k - .115 * j - Ch, l + .234 * j - Ch]
			]).stream(i).point, a
		}, a.scale(1070)
	};
	var Ci, Di, Ei, Fi, Gi, Hi, Ii = {point: i, lineStart: i, lineEnd: i, polygonStart: function () {
		Di = 0, Ii.lineStart = ic
	}, polygonEnd: function () {
		Ii.lineStart = Ii.lineEnd = Ii.point = i, Ci += hh(Di / 2)
	}}, Ji = {point: jc, lineStart: i, lineEnd: i, polygonStart: i, polygonEnd: i}, Ki = {point: mc, lineStart: nc, lineEnd: oc, polygonStart: function () {
		Ki.lineStart = pc
	}, polygonEnd: function () {
		Ki.point = mc, Ki.lineStart = nc, Ki.lineEnd = oc
	}};
	Vg.geo.path = function () {
		function a(a) {
			return a && ("function" == typeof h && f.pointRadius(+h.apply(this, arguments)), g && g.valid || (g = e(f)), Vg.geo.stream(a, g)), f.result()
		}

		function b() {
			return g = null, a
		}

		var c, d, e, f, g, h = 4.5;
		return a.area = function (a) {
			return Ci = 0, Vg.geo.stream(a, e(Ii)), Ci
		}, a.centroid = function (a) {
			return qi = ri = si = ti = ui = vi = wi = xi = yi = 0, Vg.geo.stream(a, e(Ki)), yi ? [wi / yi, xi / yi] : vi ? [ti / vi, ui / vi] : si ? [qi / si, ri / si] : [0 / 0, 0 / 0]
		}, a.bounds = function (a) {
			return Gi = Hi = -(Ei = Fi = 1 / 0), Vg.geo.stream(a, e(Ji)), [
				[Ei, Fi],
				[Gi, Hi]
			]
		}, a.projection = function (a) {
			return arguments.length ? (e = (c = a) ? a.stream || sc(a) : pb, b()) : c
		}, a.context = function (a) {
			return arguments.length ? (f = null == (d = a) ? new kc : new qc(a), "function" != typeof h && f.pointRadius(h), b()) : d
		}, a.pointRadius = function (b) {
			return arguments.length ? (h = "function" == typeof b ? b : (f.pointRadius(+b), +b), a) : h
		}, a.projection(Vg.geo.albersUsa()).context(null)
	}, Vg.geo.transform = function (a) {
		return{stream: function (b) {
			var c = new tc(b);
			for (var d in a)c[d] = a[d];
			return c
		}}
	}, tc.prototype = {point: function (a, b) {
		this.stream.point(a, b)
	}, sphere: function () {
		this.stream.sphere()
	}, lineStart: function () {
		this.stream.lineStart()
	}, lineEnd: function () {
		this.stream.lineEnd()
	}, polygonStart: function () {
		this.stream.polygonStart()
	}, polygonEnd: function () {
		this.stream.polygonEnd()
	}}, Vg.geo.projection = vc, Vg.geo.projectionMutator = wc, (Vg.geo.equirectangular = function () {
		return vc(yc)
	}).raw = yc.invert = yc, Vg.geo.rotation = function (a) {
		function b(b) {
			return b = a(b[0] * Eh, b[1] * Eh), b[0] *= Fh, b[1] *= Fh, b
		}

		return a = Ac(a[0] % 360 * Eh, a[1] * Eh, a.length > 2 ? a[2] * Eh : 0), b.invert = function (b) {
			return b = a.invert(b[0] * Eh, b[1] * Eh), b[0] *= Fh, b[1] *= Fh, b
		}, b
	}, zc.invert = yc, Vg.geo.circle = function () {
		function a() {
			var a = "function" == typeof d ? d.apply(this, arguments) : d, b = Ac(-a[0] * Eh, -a[1] * Eh, 0).invert, e = [];
			return c(null, null, 1, {point: function (a, c) {
				e.push(a = b(a, c)), a[0] *= Fh, a[1] *= Fh
			}}), {type: "Polygon", coordinates: [e]}
		}

		var b, c, d = [0, 0], e = 6;
		return a.origin = function (b) {
			return arguments.length ? (d = b, a) : d
		}, a.angle = function (d) {
			return arguments.length ? (c = Ec((b = +d) * Eh, e * Eh), a) : b
		}, a.precision = function (d) {
			return arguments.length ? (c = Ec(b * Eh, (e = +d) * Eh), a) : e
		}, a.angle(90)
	}, Vg.geo.distance = function (a, b) {
		var c, d = (b[0] - a[0]) * Eh, e = a[1] * Eh, f = b[1] * Eh, g = Math.sin(d), h = Math.cos(d), i = Math.sin(e), j = Math.cos(e), k = Math.sin(f), l = Math.cos(f);
		return Math.atan2(Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c), i * k + j * l * h)
	}, Vg.geo.graticule = function () {
		function a() {
			return{type: "MultiLineString", coordinates: b()}
		}

		function b() {
			return Vg.range(Math.ceil(f / q) * q, e, q).map(m).concat(Vg.range(Math.ceil(j / r) * r, i, r).map(n)).concat(Vg.range(Math.ceil(d / o) * o, c, o).filter(function (a) {
				return hh(a % q) > Ch
			}).map(k)).concat(Vg.range(Math.ceil(h / p) * p, g, p).filter(function (a) {
				return hh(a % r) > Ch
			}).map(l))
		}

		var c, d, e, f, g, h, i, j, k, l, m, n, o = 10, p = o, q = 90, r = 360, s = 2.5;
		return a.lines = function () {
			return b().map(function (a) {
				return{type: "LineString", coordinates: a}
			})
		}, a.outline = function () {
			return{type: "Polygon", coordinates: [m(f).concat(n(i).slice(1), m(e).reverse().slice(1), n(j).reverse().slice(1))]}
		}, a.extent = function (b) {
			return arguments.length ? a.majorExtent(b).minorExtent(b) : a.minorExtent()
		}, a.majorExtent = function (b) {
			return arguments.length ? (f = +b[0][0], e = +b[1][0], j = +b[0][1], i = +b[1][1], f > e && (b = f, f = e, e = b), j > i && (b = j, j = i, i = b), a.precision(s)) : [
				[f, j],
				[e, i]
			]
		}, a.minorExtent = function (b) {
			return arguments.length ? (d = +b[0][0], c = +b[1][0], h = +b[0][1], g = +b[1][1], d > c && (b = d, d = c, c = b), h > g && (b = h, h = g, g = b), a.precision(s)) : [
				[d, h],
				[c, g]
			]
		}, a.step = function (b) {
			return arguments.length ? a.majorStep(b).minorStep(b) : a.minorStep()
		}, a.majorStep = function (b) {
			return arguments.length ? (q = +b[0], r = +b[1], a) : [q, r]
		}, a.minorStep = function (b) {
			return arguments.length ? (o = +b[0], p = +b[1], a) : [o, p]
		}, a.precision = function (b) {
			return arguments.length ? (s = +b, k = Gc(h, g, 90), l = Hc(d, c, s), m = Gc(j, i, 90), n = Hc(f, e, s), a) : s
		}, a.majorExtent([
			[-180, -90 + Ch],
			[180, 90 - Ch]
		]).minorExtent([
			[-180, -80 - Ch],
			[180, 80 + Ch]
		])
	}, Vg.geo.greatArc = function () {
		function a() {
			return{type: "LineString", coordinates: [b || d.apply(this, arguments), c || e.apply(this, arguments)]}
		}

		var b, c, d = Ic, e = Jc;
		return a.distance = function () {
			return Vg.geo.distance(b || d.apply(this, arguments), c || e.apply(this, arguments))
		}, a.source = function (c) {
			return arguments.length ? (d = c, b = "function" == typeof c ? null : c, a) : d
		}, a.target = function (b) {
			return arguments.length ? (e = b, c = "function" == typeof b ? null : b, a) : e
		}, a.precision = function () {
			return arguments.length ? a : 0
		}, a
	}, Vg.geo.interpolate = function (a, b) {
		return Kc(a[0] * Eh, a[1] * Eh, b[0] * Eh, b[1] * Eh)
	}, Vg.geo.length = function (a) {
		return Li = 0, Vg.geo.stream(a, Mi), Li
	};
	var Li, Mi = {sphere: i, point: i, lineStart: Lc, lineEnd: i, polygonStart: i, polygonEnd: i}, Ni = Mc(function (a) {
		return Math.sqrt(2 / (1 + a))
	}, function (a) {
		return 2 * Math.asin(a / 2)
	});
	(Vg.geo.azimuthalEqualArea = function () {
		return vc(Ni)
	}).raw = Ni;
	var Oi = Mc(function (a) {
		var b = Math.acos(a);
		return b && b / Math.sin(b)
	}, pb);
	(Vg.geo.azimuthalEquidistant = function () {
		return vc(Oi)
	}).raw = Oi, (Vg.geo.conicConformal = function () {
		return gc(Nc)
	}).raw = Nc, (Vg.geo.conicEquidistant = function () {
		return gc(Oc)
	}).raw = Oc;
	var Pi = Mc(function (a) {
		return 1 / a
	}, Math.atan);
	(Vg.geo.gnomonic = function () {
		return vc(Pi)
	}).raw = Pi, Pc.invert = function (a, b) {
		return[a, 2 * Math.atan(Math.exp(b)) - Bh]
	}, (Vg.geo.mercator = function () {
		return Qc(Pc)
	}).raw = Pc;
	var Qi = Mc(function () {
		return 1
	}, Math.asin);
	(Vg.geo.orthographic = function () {
		return vc(Qi)
	}).raw = Qi;
	var Ri = Mc(function (a) {
		return 1 / (1 + a)
	}, function (a) {
		return 2 * Math.atan(a)
	});
	(Vg.geo.stereographic = function () {
		return vc(Ri)
	}).raw = Ri, Rc.invert = function (a, b) {
		return[Math.atan2(O(a), Math.cos(b)), N(Math.sin(b) / P(a))]
	}, (Vg.geo.transverseMercator = function () {
		return Qc(Rc)
	}).raw = Rc, Vg.geom = {}, Vg.geom.hull = function (a) {
		function b(a) {
			if (a.length < 3)return[];
			var b, e, f, g, h, i, j, k, l, m, n, o, p = ob(c), q = ob(d), r = a.length, s = r - 1, t = [], u = [], v = 0;
			if (p === Sc && d === Tc)b = a; else for (f = 0, b = []; r > f; ++f)b.push([+p.call(this, e = a[f], f), +q.call(this, e, f)]);
			for (f = 1; r > f; ++f)(b[f][1] < b[v][1] || b[f][1] == b[v][1] && b[f][0] < b[v][0]) && (v = f);
			for (f = 0; r > f; ++f)f !== v && (i = b[f][1] - b[v][1], h = b[f][0] - b[v][0], t.push({angle: Math.atan2(i, h), index: f}));
			for (t.sort(function (a, b) {
				return a.angle - b.angle
			}), n = t[0].angle, m = t[0].index, l = 0, f = 1; s > f; ++f) {
				if (g = t[f].index, n == t[f].angle) {
					if (h = b[m][0] - b[v][0], i = b[m][1] - b[v][1], j = b[g][0] - b[v][0], k = b[g][1] - b[v][1], h * h + i * i >= j * j + k * k) {
						t[f].index = -1;
						continue
					}
					t[l].index = -1
				}
				n = t[f].angle, l = f, m = g
			}
			for (u.push(v), f = 0, g = 0; 2 > f; ++g)t[g].index > -1 && (u.push(t[g].index), f++);
			for (o = u.length; s > g; ++g)if (!(t[g].index < 0)) {
				for (; !Uc(u[o - 2], u[o - 1], t[g].index, b);)--o;
				u[o++] = t[g].index
			}
			var w = [];
			for (f = o - 1; f >= 0; --f)w.push(a[u[f]]);
			return w
		}

		var c = Sc, d = Tc;
		return arguments.length ? b(a) : (b.x = function (a) {
			return arguments.length ? (c = a, b) : c
		}, b.y = function (a) {
			return arguments.length ? (d = a, b) : d
		}, b)
	}, Vg.geom.polygon = function (a) {
		return mh(a, Si), a
	};
	var Si = Vg.geom.polygon.prototype = [];
	Si.area = function () {
		for (var a, b = -1, c = this.length, d = this[c - 1], e = 0; ++b < c;)a = d, d = this[b], e += a[1] * d[0] - a[0] * d[1];
		return.5 * e
	}, Si.centroid = function (a) {
		var b, c, d = -1, e = this.length, f = 0, g = 0, h = this[e - 1];
		for (arguments.length || (a = -1 / (6 * this.area())); ++d < e;)b = h, h = this[d], c = b[0] * h[1] - h[0] * b[1], f += (b[0] + h[0]) * c, g += (b[1] + h[1]) * c;
		return[f * a, g * a]
	}, Si.clip = function (a) {
		for (var b, c, d, e, f, g, h = Xc(a), i = -1, j = this.length - Xc(this), k = this[j - 1]; ++i < j;) {
			for (b = a.slice(), a.length = 0, e = this[i], f = b[(d = b.length - h) - 1], c = -1; ++c < d;)g = b[c], Vc(g, k, e) ? (Vc(f, k, e) || a.push(Wc(f, g, k, e)), a.push(g)) : Vc(f, k, e) && a.push(Wc(f, g, k, e)), f = g;
			h && a.push(a[0]), k = e
		}
		return a
	};
	var Ti, Ui, Vi, Wi, Xi, Yi = [], Zi = [];
	dd.prototype.prepare = function () {
		for (var a, b = this.edges, c = b.length; c--;)a = b[c].edge, a.b && a.a || b.splice(c, 1);
		return b.sort(fd), b.length
	}, pd.prototype = {start: function () {
		return this.edge.l === this.site ? this.edge.a : this.edge.b
	}, end: function () {
		return this.edge.l === this.site ? this.edge.b : this.edge.a
	}}, qd.prototype = {insert: function (a, b) {
		var c, d, e;
		if (a) {
			if (b.P = a, b.N = a.N, a.N && (a.N.P = b), a.N = b, a.R) {
				for (a = a.R; a.L;)a = a.L;
				a.L = b
			} else a.R = b;
			c = a
		} else this._ ? (a = ud(this._), b.P = null, b.N = a, a.P = a.L = b, c = a) : (b.P = b.N = null, this._ = b, c = null);
		for (b.L = b.R = null, b.U = c, b.C = !0, a = b; c && c.C;)d = c.U, c === d.L ? (e = d.R, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.R && (sd(this, c), a = c, c = a.U), c.C = !1, d.C = !0, td(this, d))) : (e = d.L, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.L && (td(this, c), a = c, c = a.U), c.C = !1, d.C = !0, sd(this, d))), c = a.U;
		this._.C = !1
	}, remove: function (a) {
		a.N && (a.N.P = a.P), a.P && (a.P.N = a.N), a.N = a.P = null;
		var b, c, d, e = a.U, f = a.L, g = a.R;
		if (c = f ? g ? ud(g) : f : g, e ? e.L === a ? e.L = c : e.R = c : this._ = c, f && g ? (d = c.C, c.C = a.C, c.L = f, f.U = c, c !== g ? (e = c.U, c.U = a.U, a = c.R, e.L = a, c.R = g, g.U = c) : (c.U = e, e = c, a = c.R)) : (d = a.C, a = c), a && (a.U = e), !d) {
			if (a && a.C)return a.C = !1, void 0;
			do {
				if (a === this._)break;
				if (a === e.L) {
					if (b = e.R, b.C && (b.C = !1, e.C = !0, sd(this, e), b = e.R), b.L && b.L.C || b.R && b.R.C) {
						b.R && b.R.C || (b.L.C = !1, b.C = !0, td(this, b), b = e.R), b.C = e.C, e.C = b.R.C = !1, sd(this, e), a = this._;
						break
					}
				} else if (b = e.L, b.C && (b.C = !1, e.C = !0, td(this, e), b = e.L), b.L && b.L.C || b.R && b.R.C) {
					b.L && b.L.C || (b.R.C = !1, b.C = !0, sd(this, b), b = e.L), b.C = e.C, e.C = b.L.C = !1, td(this, e), a = this._;
					break
				}
				b.C = !0, a = e, e = e.U
			} while (!a.C);
			a && (a.C = !1)
		}
	}}, Vg.geom.voronoi = function (a) {
		function b(a) {
			var b = new Array(a.length), d = h[0][0], e = h[0][1], f = h[1][0], g = h[1][1];
			return vd(c(a), h).cells.forEach(function (c, h) {
				var i = c.edges, j = c.site, k = b[h] = i.length ? i.map(function (a) {
					var b = a.start();
					return[b.x, b.y]
				}) : j.x >= d && j.x <= f && j.y >= e && j.y <= g ? [
					[d, g],
					[f, g],
					[f, e],
					[d, e]
				] : [];
				k.point = a[h]
			}), b
		}

		function c(a) {
			return a.map(function (a, b) {
				return{x: Math.round(f(a, b) / Ch) * Ch, y: Math.round(g(a, b) / Ch) * Ch, i: b}
			})
		}

		var d = Sc, e = Tc, f = d, g = e, h = $i;
		return a ? b(a) : (b.links = function (a) {
			return vd(c(a)).edges.filter(function (a) {
				return a.l && a.r
			}).map(function (b) {
				return{source: a[b.l.i], target: a[b.r.i]}
			})
		}, b.triangles = function (a) {
			var b = [];
			return vd(c(a)).cells.forEach(function (c, d) {
				for (var e, f, g = c.site, h = c.edges.sort(fd), i = -1, j = h.length, k = h[j - 1].edge, l = k.l === g ? k.r : k.l; ++i < j;)e = k, f = l, k = h[i].edge, l = k.l === g ? k.r : k.l, d < f.i && d < l.i && xd(g, f, l) < 0 && b.push([a[d], a[f.i], a[l.i]])
			}), b
		}, b.x = function (a) {
			return arguments.length ? (f = ob(d = a), b) : d
		}, b.y = function (a) {
			return arguments.length ? (g = ob(e = a), b) : e
		}, b.clipExtent = function (a) {
			return arguments.length ? (h = null == a ? $i : a, b) : h === $i ? null : h
		}, b.size = function (a) {
			return arguments.length ? b.clipExtent(a && [
				[0, 0],
				a
			]) : h === $i ? null : h && h[1]
		}, b)
	};
	var $i = [
		[-1e6, -1e6],
		[1e6, 1e6]
	];
	Vg.geom.delaunay = function (a) {
		return Vg.geom.voronoi().triangles(a)
	}, Vg.geom.quadtree = function (a, b, c, d, e) {
		function f(a) {
			function f(a, b, c, d, e, f, g, h) {
				if (!isNaN(c) && !isNaN(d))if (a.leaf) {
					var i = a.x, k = a.y;
					if (null != i)if (hh(i - c) + hh(k - d) < .01)j(a, b, c, d, e, f, g, h); else {
						var l = a.point;
						a.x = a.y = a.point = null, j(a, l, i, k, e, f, g, h), j(a, b, c, d, e, f, g, h)
					} else a.x = c, a.y = d, a.point = b
				} else j(a, b, c, d, e, f, g, h)
			}

			function j(a, b, c, d, e, g, h, i) {
				var j = .5 * (e + h), k = .5 * (g + i), l = c >= j, m = d >= k, n = (m << 1) + l;
				a.leaf = !1, a = a.nodes[n] || (a.nodes[n] = Ad()), l ? e = j : h = j, m ? g = k : i = k, f(a, b, c, d, e, g, h, i)
			}

			var k, l, m, n, o, p, q, r, s, t = ob(h), u = ob(i);
			if (null != b)p = b, q = c, r = d, s = e; else if (r = s = -(p = q = 1 / 0), l = [], m = [], o = a.length, g)for (n = 0; o > n; ++n)k = a[n], k.x < p && (p = k.x), k.y < q && (q = k.y), k.x > r && (r = k.x), k.y > s && (s = k.y), l.push(k.x), m.push(k.y); else for (n = 0; o > n; ++n) {
				var v = +t(k = a[n], n), w = +u(k, n);
				p > v && (p = v), q > w && (q = w), v > r && (r = v), w > s && (s = w), l.push(v), m.push(w)
			}
			var x = r - p, y = s - q;
			x > y ? s = q + x : r = p + y;
			var z = Ad();
			if (z.add = function (a) {
				f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
			}, z.visit = function (a) {
				Bd(a, z, p, q, r, s)
			}, n = -1, null == b) {
				for (; ++n < o;)f(z, a[n], l[n], m[n], p, q, r, s);
				--n
			} else a.forEach(z.add);
			return l = m = a = k = null, z
		}

		var g, h = Sc, i = Tc;
		return(g = arguments.length) ? (h = yd, i = zd, 3 === g && (e = c, d = b, c = b = 0), f(a)) : (f.x = function (a) {
			return arguments.length ? (h = a, f) : h
		}, f.y = function (a) {
			return arguments.length ? (i = a, f) : i
		}, f.extent = function (a) {
			return arguments.length ? (null == a ? b = c = d = e = null : (b = +a[0][0], c = +a[0][1], d = +a[1][0], e = +a[1][1]), f) : null == b ? null : [
				[b, c],
				[d, e]
			]
		}, f.size = function (a) {
			return arguments.length ? (null == a ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), f) : null == b ? null : [d - b, e - c]
		}, f)
	}, Vg.interpolateRgb = Cd, Vg.interpolateObject = Dd, Vg.interpolateNumber = Ed, Vg.interpolateString = Fd;
	var _i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
	Vg.interpolate = Gd, Vg.interpolators = [function (a, b) {
		var c = typeof b;
		return("string" === c ? Uh.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? Cd : Fd : b instanceof S ? Cd : "object" === c ? Array.isArray(b) ? Hd : Dd : Ed)(a, b)
	}], Vg.interpolateArray = Hd;
	var aj = function () {
		return pb
	}, bj = Vg.map({linear: aj, poly: Od, quad: function () {
		return Ld
	}, cubic: function () {
		return Md
	}, sin: function () {
		return Pd
	}, exp: function () {
		return Qd
	}, circle: function () {
		return Rd
	}, elastic: Sd, back: Td, bounce: function () {
		return Ud
	}}), cj = Vg.map({"in": pb, out: Jd, "in-out": Kd, "out-in": function (a) {
		return Kd(Jd(a))
	}});
	Vg.ease = function (a) {
		var b = a.indexOf("-"), c = b >= 0 ? a.substring(0, b) : a, d = b >= 0 ? a.substring(b + 1) : "in";
		return c = bj.get(c) || aj, d = cj.get(d) || pb, Id(d(c.apply(null, Wg.call(arguments, 1))))
	}, Vg.interpolateHcl = Vd, Vg.interpolateHsl = Wd, Vg.interpolateLab = Xd, Vg.interpolateRound = Yd, Vg.transform = function (a) {
		var b = Yg.createElementNS(Vg.ns.prefix.svg, "g");
		return(Vg.transform = function (a) {
			if (null != a) {
				b.setAttribute("transform", a);
				var c = b.transform.baseVal.consolidate()
			}
			return new Zd(c ? c.matrix : dj)
		})(a)
	}, Zd.prototype.toString = function () {
		return"translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
	};
	var dj = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
	Vg.interpolateTransform = be, Vg.layout = {}, Vg.layout.bundle = function () {
		return function (a) {
			for (var b = [], c = -1, d = a.length; ++c < d;)b.push(ee(a[c]));
			return b
		}
	}, Vg.layout.chord = function () {
		function a() {
			var a, j, l, m, n, o = {}, p = [], q = Vg.range(f), r = [];
			for (c = [], d = [], a = 0, m = -1; ++m < f;) {
				for (j = 0, n = -1; ++n < f;)j += e[m][n];
				p.push(j), r.push(Vg.range(f)), a += j
			}
			for (g && q.sort(function (a, b) {
				return g(p[a], p[b])
			}), h && r.forEach(function (a, b) {
				a.sort(function (a, c) {
					return h(e[b][a], e[b][c])
				})
			}), a = (Ah - k * f) / a, j = 0, m = -1; ++m < f;) {
				for (l = j, n = -1; ++n < f;) {
					var s = q[m], t = r[s][n], u = e[s][t], v = j, w = j += u * a;
					o[s + "-" + t] = {index: s, subindex: t, startAngle: v, endAngle: w, value: u}
				}
				d[s] = {index: s, startAngle: l, endAngle: j, value: (j - l) / a}, j += k
			}
			for (m = -1; ++m < f;)for (n = m - 1; ++n < f;) {
				var x = o[m + "-" + n], y = o[n + "-" + m];
				(x.value || y.value) && c.push(x.value < y.value ? {source: y, target: x} : {source: x, target: y})
			}
			i && b()
		}

		function b() {
			c.sort(function (a, b) {
				return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
			})
		}

		var c, d, e, f, g, h, i, j = {}, k = 0;
		return j.matrix = function (a) {
			return arguments.length ? (f = (e = a) && e.length, c = d = null, j) : e
		}, j.padding = function (a) {
			return arguments.length ? (k = a, c = d = null, j) : k
		}, j.sortGroups = function (a) {
			return arguments.length ? (g = a, c = d = null, j) : g
		}, j.sortSubgroups = function (a) {
			return arguments.length ? (h = a, c = null, j) : h
		}, j.sortChords = function (a) {
			return arguments.length ? (i = a, c && b(), j) : i
		}, j.chords = function () {
			return c || a(), c
		}, j.groups = function () {
			return d || a(), d
		}, j
	}, Vg.layout.force = function () {
		function a(a) {
			return function (b, c, d, e) {
				if (b.point !== a) {
					var f = b.cx - a.x, g = b.cy - a.y, h = 1 / Math.sqrt(f * f + g * g);
					if (p > (e - c) * h) {
						var i = b.charge * h * h;
						return a.px -= f * i, a.py -= g * i, !0
					}
					if (b.point && isFinite(h)) {
						var i = b.pointCharge * h * h;
						a.px -= f * i, a.py -= g * i
					}
				}
				return!b.charge
			}
		}

		function b(a) {
			a.px = Vg.event.x, a.py = Vg.event.y, h.resume()
		}

		var c, d, e, f, g, h = {}, i = Vg.dispatch("start", "tick", "end"), j = [1, 1], k = .9, l = ej, m = fj, n = -30, o = .1, p = .8, q = [], r = [];
		return h.tick = function () {
			if ((d *= .99) < .005)return i.end({type: "end", alpha: d = 0}), !0;
			var b, c, h, l, m, p, s, t, u, v = q.length, w = r.length;
			for (c = 0; w > c; ++c)h = r[c], l = h.source, m = h.target, t = m.x - l.x, u = m.y - l.y, (p = t * t + u * u) && (p = d * f[c] * ((p = Math.sqrt(p)) - e[c]) / p, t *= p, u *= p, m.x -= t * (s = l.weight / (m.weight + l.weight)), m.y -= u * s, l.x += t * (s = 1 - s), l.y += u * s);
			if ((s = d * o) && (t = j[0] / 2, u = j[1] / 2, c = -1, s))for (; ++c < v;)h = q[c], h.x += (t - h.x) * s, h.y += (u - h.y) * s;
			if (n)for (le(b = Vg.geom.quadtree(q), d, g), c = -1; ++c < v;)(h = q[c]).fixed || b.visit(a(h));
			for (c = -1; ++c < v;)h = q[c], h.fixed ? (h.x = h.px, h.y = h.py) : (h.x -= (h.px - (h.px = h.x)) * k, h.y -= (h.py - (h.py = h.y)) * k);
			i.tick({type: "tick", alpha: d})
		}, h.nodes = function (a) {
			return arguments.length ? (q = a, h) : q
		}, h.links = function (a) {
			return arguments.length ? (r = a, h) : r
		}, h.size = function (a) {
			return arguments.length ? (j = a, h) : j
		}, h.linkDistance = function (a) {
			return arguments.length ? (l = "function" == typeof a ? a : +a, h) : l
		}, h.distance = h.linkDistance, h.linkStrength = function (a) {
			return arguments.length ? (m = "function" == typeof a ? a : +a, h) : m
		}, h.friction = function (a) {
			return arguments.length ? (k = +a, h) : k
		}, h.charge = function (a) {
			return arguments.length ? (n = "function" == typeof a ? a : +a, h) : n
		}, h.gravity = function (a) {
			return arguments.length ? (o = +a, h) : o
		}, h.theta = function (a) {
			return arguments.length ? (p = +a, h) : p
		}, h.alpha = function (a) {
			return arguments.length ? (a = +a, d ? d = a > 0 ? a : 0 : a > 0 && (i.start({type: "start", alpha: d = a}), Vg.timer(h.tick)), h) : d
		}, h.start = function () {
			function a(a, d) {
				if (!c) {
					for (c = new Array(i), h = 0; i > h; ++h)c[h] = [];
					for (h = 0; j > h; ++h) {
						var e = r[h];
						c[e.source.index].push(e.target), c[e.target.index].push(e.source)
					}
				}
				for (var f, g = c[b], h = -1, j = g.length; ++h < j;)if (!isNaN(f = g[h][a]))return f;
				return Math.random() * d
			}

			var b, c, d, i = q.length, k = r.length, o = j[0], p = j[1];
			for (b = 0; i > b; ++b)(d = q[b]).index = b, d.weight = 0;
			for (b = 0; k > b; ++b)d = r[b], "number" == typeof d.source && (d.source = q[d.source]), "number" == typeof d.target && (d.target = q[d.target]), ++d.source.weight, ++d.target.weight;
			for (b = 0; i > b; ++b)d = q[b], isNaN(d.x) && (d.x = a("x", o)), isNaN(d.y) && (d.y = a("y", p)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
			if (e = [], "function" == typeof l)for (b = 0; k > b; ++b)e[b] = +l.call(this, r[b], b); else for (b = 0; k > b; ++b)e[b] = l;
			if (f = [], "function" == typeof m)for (b = 0; k > b; ++b)f[b] = +m.call(this, r[b], b); else for (b = 0; k > b; ++b)f[b] = m;
			if (g = [], "function" == typeof n)for (b = 0; i > b; ++b)g[b] = +n.call(this, q[b], b); else for (b = 0; i > b; ++b)g[b] = n;
			return h.resume()
		}, h.resume = function () {
			return h.alpha(.1)
		}, h.stop = function () {
			return h.alpha(0)
		}, h.drag = function () {
			return c || (c = Vg.behavior.drag().origin(pb).on("dragstart.force", he).on("drag.force", b).on("dragend.force", ie)), arguments.length ? (this.on("mouseover.force", je).on("mouseout.force", ke).call(c), void 0) : c
		}, Vg.rebind(h, i, "on")
	};
	var ej = 20, fj = 1;
	Vg.layout.hierarchy = function () {
		function a(b, g, h) {
			var i = e.call(c, b, g);
			if (b.depth = g, h.push(b), i && (j = i.length)) {
				for (var j, k, l = -1, m = b.children = new Array(j), n = 0, o = g + 1; ++l < j;)k = m[l] = a(i[l], o, h), k.parent = b, n += k.value;
				d && m.sort(d), f && (b.value = n)
			} else delete b.children, f && (b.value = +f.call(c, b, g) || 0);
			return b
		}

		function b(a, d) {
			var e = a.children, g = 0;
			if (e && (h = e.length))for (var h, i = -1, j = d + 1; ++i < h;)g += b(e[i], j); else f && (g = +f.call(c, a, d) || 0);
			return f && (a.value = g), g
		}

		function c(b) {
			var c = [];
			return a(b, 0, c), c
		}

		var d = pe, e = ne, f = oe;
		return c.sort = function (a) {
			return arguments.length ? (d = a, c) : d
		}, c.children = function (a) {
			return arguments.length ? (e = a, c) : e
		}, c.value = function (a) {
			return arguments.length ? (f = a, c) : f
		}, c.revalue = function (a) {
			return b(a, 0), a
		}, c
	}, Vg.layout.partition = function () {
		function a(b, c, d, e) {
			var f = b.children;
			if (b.x = c, b.y = b.depth * e, b.dx = d, b.dy = e, f && (g = f.length)) {
				var g, h, i, j = -1;
				for (d = b.value ? d / b.value : 0; ++j < g;)a(h = f[j], c, i = h.value * d, e), c += i
			}
		}

		function b(a) {
			var c = a.children, d = 0;
			if (c && (e = c.length))for (var e, f = -1; ++f < e;)d = Math.max(d, b(c[f]));
			return 1 + d
		}

		function c(c, f) {
			var g = d.call(this, c, f);
			return a(g[0], 0, e[0], e[1] / b(g[0])), g
		}

		var d = Vg.layout.hierarchy(), e = [1, 1];
		return c.size = function (a) {
			return arguments.length ? (e = a, c) : e
		}, me(c, d)
	}, Vg.layout.pie = function () {
		function a(f) {
			var g = f.map(function (c, d) {
				return+b.call(a, c, d)
			}), h = +("function" == typeof d ? d.apply(this, arguments) : d), i = (("function" == typeof e ? e.apply(this, arguments) : e) - h) / Vg.sum(g), j = Vg.range(f.length);
			null != c && j.sort(c === gj ? function (a, b) {
				return g[b] - g[a]
			} : function (a, b) {
				return c(f[a], f[b])
			});
			var k = [];
			return j.forEach(function (a) {
				var b;
				k[a] = {data: f[a], value: b = g[a], startAngle: h, endAngle: h += b * i}
			}), k
		}

		var b = Number, c = gj, d = 0, e = Ah;
		return a.value = function (c) {
			return arguments.length ? (b = c, a) : b
		}, a.sort = function (b) {
			return arguments.length ? (c = b, a) : c
		}, a.startAngle = function (b) {
			return arguments.length ? (d = b, a) : d
		}, a.endAngle = function (b) {
			return arguments.length ? (e = b, a) : e
		}, a
	};
	var gj = {};
	Vg.layout.stack = function () {
		function a(h, i) {
			var j = h.map(function (c, d) {
				return b.call(a, c, d)
			}), k = j.map(function (b) {
				return b.map(function (b, c) {
					return[f.call(a, b, c), g.call(a, b, c)]
				})
			}), l = c.call(a, k, i);
			j = Vg.permute(j, l), k = Vg.permute(k, l);
			var m, n, o, p = d.call(a, k, i), q = j.length, r = j[0].length;
			for (n = 0; r > n; ++n)for (e.call(a, j[0][n], o = p[n], k[0][n][1]), m = 1; q > m; ++m)e.call(a, j[m][n], o += k[m - 1][n][1], k[m][n][1]);
			return h
		}

		var b = pb, c = ue, d = ve, e = te, f = re, g = se;
		return a.values = function (c) {
			return arguments.length ? (b = c, a) : b
		}, a.order = function (b) {
			return arguments.length ? (c = "function" == typeof b ? b : hj.get(b) || ue, a) : c
		}, a.offset = function (b) {
			return arguments.length ? (d = "function" == typeof b ? b : ij.get(b) || ve, a) : d
		}, a.x = function (b) {
			return arguments.length ? (f = b, a) : f
		}, a.y = function (b) {
			return arguments.length ? (g = b, a) : g
		}, a.out = function (b) {
			return arguments.length ? (e = b, a) : e
		}, a
	};
	var hj = Vg.map({"inside-out": function (a) {
		var b, c, d = a.length, e = a.map(we), f = a.map(xe), g = Vg.range(d).sort(function (a, b) {
			return e[a] - e[b]
		}), h = 0, i = 0, j = [], k = [];
		for (b = 0; d > b; ++b)c = g[b], i > h ? (h += f[c], j.push(c)) : (i += f[c], k.push(c));
		return k.reverse().concat(j)
	}, reverse: function (a) {
		return Vg.range(a.length).reverse()
	}, "default": ue}), ij = Vg.map({silhouette: function (a) {
		var b, c, d, e = a.length, f = a[0].length, g = [], h = 0, i = [];
		for (c = 0; f > c; ++c) {
			for (b = 0, d = 0; e > b; b++)d += a[b][c][1];
			d > h && (h = d), g.push(d)
		}
		for (c = 0; f > c; ++c)i[c] = (h - g[c]) / 2;
		return i
	}, wiggle: function (a) {
		var b, c, d, e, f, g, h, i, j, k = a.length, l = a[0], m = l.length, n = [];
		for (n[0] = i = j = 0, c = 1; m > c; ++c) {
			for (b = 0, e = 0; k > b; ++b)e += a[b][c][1];
			for (b = 0, f = 0, h = l[c][0] - l[c - 1][0]; k > b; ++b) {
				for (d = 0, g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h); b > d; ++d)g += (a[d][c][1] - a[d][c - 1][1]) / h;
				f += g * a[b][c][1]
			}
			n[c] = i -= e ? f / e * h : 0, j > i && (j = i)
		}
		for (c = 0; m > c; ++c)n[c] -= j;
		return n
	}, expand: function (a) {
		var b, c, d, e = a.length, f = a[0].length, g = 1 / e, h = [];
		for (c = 0; f > c; ++c) {
			for (b = 0, d = 0; e > b; b++)d += a[b][c][1];
			if (d)for (b = 0; e > b; b++)a[b][c][1] /= d; else for (b = 0; e > b; b++)a[b][c][1] = g
		}
		for (c = 0; f > c; ++c)h[c] = 0;
		return h
	}, zero: ve});
	Vg.layout.histogram = function () {
		function a(a, f) {
			for (var g, h, i = [], j = a.map(c, this), k = d.call(this, j, f), l = e.call(this, k, j, f), f = -1, m = j.length, n = l.length - 1, o = b ? 1 : 1 / m; ++f < n;)g = i[f] = [], g.dx = l[f + 1] - (g.x = l[f]), g.y = 0;
			if (n > 0)for (f = -1; ++f < m;)h = j[f], h >= k[0] && h <= k[1] && (g = i[Vg.bisect(l, h, 1, n) - 1], g.y += o, g.push(a[f]));
			return i
		}

		var b = !0, c = Number, d = Be, e = ze;
		return a.value = function (b) {
			return arguments.length ? (c = b, a) : c
		}, a.range = function (b) {
			return arguments.length ? (d = ob(b), a) : d
		}, a.bins = function (b) {
			return arguments.length ? (e = "number" == typeof b ? function (a) {
				return Ae(a, b)
			} : ob(b), a) : e
		}, a.frequency = function (c) {
			return arguments.length ? (b = !!c, a) : b
		}, a
	}, Vg.layout.tree = function () {
		function a(a, f) {
			function g(a, b) {
				var d = a.children, e = a._tree;
				if (d && (f = d.length)) {
					for (var f, h, j, k = d[0], l = k, m = -1; ++m < f;)j = d[m], g(j, h), l = i(j, h, l), h = j;
					Ke(a);
					var n = .5 * (k._tree.prelim + j._tree.prelim);
					b ? (e.prelim = b._tree.prelim + c(a, b), e.mod = e.prelim - n) : e.prelim = n
				} else b && (e.prelim = b._tree.prelim + c(a, b))
			}

			function h(a, b) {
				a.x = a._tree.prelim + b;
				var c = a.children;
				if (c && (d = c.length)) {
					var d, e = -1;
					for (b += a._tree.mod; ++e < d;)h(c[e], b)
				}
			}

			function i(a, b, d) {
				if (b) {
					for (var e, f = a, g = a, h = b, i = a.parent.children[0], j = f._tree.mod, k = g._tree.mod, l = h._tree.mod, m = i._tree.mod; h = Ee(h), f = De(f), h && f;)i = De(i), g = Ee(g), g._tree.ancestor = a, e = h._tree.prelim + l - f._tree.prelim - j + c(h, f), e > 0 && (Le(Me(h, a, d), a, e), j += e, k += e), l += h._tree.mod, j += f._tree.mod, m += i._tree.mod, k += g._tree.mod;
					h && !Ee(g) && (g._tree.thread = h, g._tree.mod += l - k), f && !De(i) && (i._tree.thread = f, i._tree.mod += j - m, d = a)
				}
				return d
			}

			var j = b.call(this, a, f), k = j[0];
			Je(k, function (a, b) {
				a._tree = {ancestor: a, prelim: 0, mod: 0, change: 0, shift: 0, number: b ? b._tree.number + 1 : 0}
			}), g(k), h(k, -k._tree.prelim);
			var l = Fe(k, He), m = Fe(k, Ge), n = Fe(k, Ie), o = l.x - c(l, m) / 2, p = m.x + c(m, l) / 2, q = n.depth || 1;
			return Je(k, e ? function (a) {
				a.x *= d[0], a.y = a.depth * d[1], delete a._tree
			} : function (a) {
				a.x = (a.x - o) / (p - o) * d[0], a.y = a.depth / q * d[1], delete a._tree
			}), j
		}

		var b = Vg.layout.hierarchy().sort(null).value(null), c = Ce, d = [1, 1], e = !1;
		return a.separation = function (b) {
			return arguments.length ? (c = b, a) : c
		}, a.size = function (b) {
			return arguments.length ? (e = null == (d = b), a) : e ? null : d
		}, a.nodeSize = function (b) {
			return arguments.length ? (e = null != (d = b), a) : e ? d : null
		}, me(a, b)
	}, Vg.layout.pack = function () {
		function a(a, f) {
			var g = c.call(this, a, f), h = g[0], i = e[0], j = e[1], k = null == b ? Math.sqrt : "function" == typeof b ? b : function () {
				return b
			};
			if (h.x = h.y = 0, Je(h, function (a) {
				a.r = +k(a.value)
			}), Je(h, Re), d) {
				var l = d * (b ? 1 : Math.max(2 * h.r / i, 2 * h.r / j)) / 2;
				Je(h, function (a) {
					a.r += l
				}), Je(h, Re), Je(h, function (a) {
					a.r -= l
				})
			}
			return Ue(h, i / 2, j / 2, b ? 1 : 1 / Math.max(2 * h.r / i, 2 * h.r / j)), g
		}

		var b, c = Vg.layout.hierarchy().sort(Ne), d = 0, e = [1, 1];
		return a.size = function (b) {
			return arguments.length ? (e = b, a) : e
		}, a.radius = function (c) {
			return arguments.length ? (b = null == c || "function" == typeof c ? c : +c, a) : b
		}, a.padding = function (b) {
			return arguments.length ? (d = +b, a) : d
		}, me(a, c)
	}, Vg.layout.cluster = function () {
		function a(a, f) {
			var g, h = b.call(this, a, f), i = h[0], j = 0;
			Je(i, function (a) {
				var b = a.children;
				b && b.length ? (a.x = Xe(b), a.y = We(b)) : (a.x = g ? j += c(a, g) : 0, a.y = 0, g = a)
			});
			var k = Ye(i), l = Ze(i), m = k.x - c(k, l) / 2, n = l.x + c(l, k) / 2;
			return Je(i, e ? function (a) {
				a.x = (a.x - i.x) * d[0], a.y = (i.y - a.y) * d[1]
			} : function (a) {
				a.x = (a.x - m) / (n - m) * d[0], a.y = (1 - (i.y ? a.y / i.y : 1)) * d[1]
			}), h
		}

		var b = Vg.layout.hierarchy().sort(null).value(null), c = Ce, d = [1, 1], e = !1;
		return a.separation = function (b) {
			return arguments.length ? (c = b, a) : c
		}, a.size = function (b) {
			return arguments.length ? (e = null == (d = b), a) : e ? null : d
		}, a.nodeSize = function (b) {
			return arguments.length ? (e = null != (d = b), a) : e ? d : null
		}, me(a, b)
	}, Vg.layout.treemap = function () {
		function a(a, b) {
			for (var c, d, e = -1, f = a.length; ++e < f;)d = (c = a[e]).value * (0 > b ? 0 : b), c.area = isNaN(d) || 0 >= d ? 0 : d
		}

		function b(c) {
			var f = c.children;
			if (f && f.length) {
				var g, h, i, j = l(c), k = [], m = f.slice(), o = 1 / 0, p = "slice" === n ? j.dx : "dice" === n ? j.dy : "slice-dice" === n ? 1 & c.depth ? j.dy : j.dx : Math.min(j.dx, j.dy);
				for (a(m, j.dx * j.dy / c.value), k.area = 0; (i = m.length) > 0;)k.push(g = m[i - 1]), k.area += g.area, "squarify" !== n || (h = d(k, p)) <= o ? (m.pop(), o = h) : (k.area -= k.pop().area, e(k, p, j, !1), p = Math.min(j.dx, j.dy), k.length = k.area = 0, o = 1 / 0);
				k.length && (e(k, p, j, !0), k.length = k.area = 0), f.forEach(b)
			}
		}

		function c(b) {
			var d = b.children;
			if (d && d.length) {
				var f, g = l(b), h = d.slice(), i = [];
				for (a(h, g.dx * g.dy / b.value), i.area = 0; f = h.pop();)i.push(f), i.area += f.area, null != f.z && (e(i, f.z ? g.dx : g.dy, g, !h.length), i.length = i.area = 0);
				d.forEach(c)
			}
		}

		function d(a, b) {
			for (var c, d = a.area, e = 0, f = 1 / 0, g = -1, h = a.length; ++g < h;)(c = a[g].area) && (f > c && (f = c), c > e && (e = c));
			return d *= d, b *= b, d ? Math.max(b * e * o / d, d / (b * f * o)) : 1 / 0
		}

		function e(a, b, c, d) {
			var e, f = -1, g = a.length, h = c.x, j = c.y, k = b ? i(a.area / b) : 0;
			if (b == c.dx) {
				for ((d || k > c.dy) && (k = c.dy); ++f < g;)e = a[f], e.x = h, e.y = j, e.dy = k, h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0);
				e.z = !0, e.dx += c.x + c.dx - h, c.y += k, c.dy -= k
			} else {
				for ((d || k > c.dx) && (k = c.dx); ++f < g;)e = a[f], e.x = h, e.y = j, e.dx = k, j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0);
				e.z = !1, e.dy += c.y + c.dy - j, c.x += k, c.dx -= k
			}
		}

		function f(d) {
			var e = g || h(d), f = e[0];
			return f.x = 0, f.y = 0, f.dx = j[0], f.dy = j[1], g && h.revalue(f), a([f], f.dx * f.dy / f.value), (g ? c : b)(f), m && (g = e), e
		}

		var g, h = Vg.layout.hierarchy(), i = Math.round, j = [1, 1], k = null, l = $e, m = !1, n = "squarify", o = .5 * (1 + Math.sqrt(5));
		return f.size = function (a) {
			return arguments.length ? (j = a, f) : j
		}, f.padding = function (a) {
			function b(b) {
				var c = a.call(f, b, b.depth);
				return null == c ? $e(b) : _e(b, "number" == typeof c ? [c, c, c, c] : c)
			}

			function c(b) {
				return _e(b, a)
			}

			if (!arguments.length)return k;
			var d;
			return l = null == (k = a) ? $e : "function" == (d = typeof a) ? b : "number" === d ? (a = [a, a, a, a], c) : c, f
		}, f.round = function (a) {
			return arguments.length ? (i = a ? Math.round : Number, f) : i != Number
		}, f.sticky = function (a) {
			return arguments.length ? (m = a, g = null, f) : m
		}, f.ratio = function (a) {
			return arguments.length ? (o = a, f) : o
		}, f.mode = function (a) {
			return arguments.length ? (n = a + "", f) : n
		}, me(f, h)
	}, Vg.random = {normal: function (a, b) {
		var c = arguments.length;
		return 2 > c && (b = 1), 1 > c && (a = 0), function () {
			var c, d, e;
			do c = 2 * Math.random() - 1, d = 2 * Math.random() - 1, e = c * c + d * d; while (!e || e > 1);
			return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
		}
	}, logNormal: function () {
		var a = Vg.random.normal.apply(Vg, arguments);
		return function () {
			return Math.exp(a())
		}
	}, irwinHall: function (a) {
		return function () {
			for (var b = 0, c = 0; a > c; c++)b += Math.random();
			return b / a
		}
	}}, Vg.scale = {};
	var jj = {floor: pb, ceil: pb};
	Vg.scale.linear = function () {
		return gf([0, 1], [0, 1], Gd, !1)
	};
	var kj = {s: 1, g: 1, p: 1, r: 1, e: 1};
	Vg.scale.log = function () {
		return pf(Vg.scale.linear().domain([0, 1]), 10, !0, [1, 10])
	};
	var lj = Vg.format(".0e"), mj = {floor: function (a) {
		return-Math.ceil(-a)
	}, ceil: function (a) {
		return-Math.floor(-a)
	}};
	Vg.scale.pow = function () {
		return qf(Vg.scale.linear(), 1, [0, 1])
	}, Vg.scale.sqrt = function () {
		return Vg.scale.pow().exponent(.5)
	}, Vg.scale.ordinal = function () {
		return sf([], {t: "range", a: [
			[]
		]})
	}, Vg.scale.category10 = function () {
		return Vg.scale.ordinal().range(nj)
	}, Vg.scale.category20 = function () {
		return Vg.scale.ordinal().range(oj)
	}, Vg.scale.category20b = function () {
		return Vg.scale.ordinal().range(pj)
	}, Vg.scale.category20c = function () {
		return Vg.scale.ordinal().range(qj)
	};
	var nj = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(fb), oj = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(fb), pj = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(fb), qj = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(fb);
	Vg.scale.quantile = function () {
		return tf([], [])
	}, Vg.scale.quantize = function () {
		return uf(0, 1, [0, 1])
	}, Vg.scale.threshold = function () {
		return vf([.5], [0, 1])
	}, Vg.scale.identity = function () {
		return wf([0, 1])
	}, Vg.svg = {}, Vg.svg.arc = function () {
		function a() {
			var a = b.apply(this, arguments), f = c.apply(this, arguments), g = d.apply(this, arguments) + rj, h = e.apply(this, arguments) + rj, i = (g > h && (i = g, g = h, h = i), h - g), j = zh > i ? "0" : "1", k = Math.cos(g), l = Math.sin(g), m = Math.cos(h), n = Math.sin(h);
			return i >= sj ? a ? "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "M0," + a + "A" + a + "," + a + " 0 1,0 0," + -a + "A" + a + "," + a + " 0 1,0 0," + a + "Z" : "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "Z" : a ? "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L" + a * m + "," + a * n + "A" + a + "," + a + " 0 " + j + ",0 " + a * k + "," + a * l + "Z" : "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L0,0Z"
		}

		var b = xf, c = yf, d = zf, e = Af;
		return a.innerRadius = function (c) {
			return arguments.length ? (b = ob(c), a) : b
		}, a.outerRadius = function (b) {
			return arguments.length ? (c = ob(b), a) : c
		}, a.startAngle = function (b) {
			return arguments.length ? (d = ob(b), a) : d
		}, a.endAngle = function (b) {
			return arguments.length ? (e = ob(b), a) : e
		}, a.centroid = function () {
			var a = (b.apply(this, arguments) + c.apply(this, arguments)) / 2, f = (d.apply(this, arguments) + e.apply(this, arguments)) / 2 + rj;
			return[Math.cos(f) * a, Math.sin(f) * a]
		}, a
	};
	var rj = -Bh, sj = Ah - Ch;
	Vg.svg.line = function () {
		return Bf(pb)
	};
	var tj = Vg.map({linear: Cf, "linear-closed": Df, step: Ef, "step-before": Ff, "step-after": Gf, basis: Mf, "basis-open": Nf, "basis-closed": Of, bundle: Pf, cardinal: Jf, "cardinal-open": Hf, "cardinal-closed": If, monotone: Vf});
	tj.forEach(function (a, b) {
		b.key = a, b.closed = /-closed$/.test(a)
	});
	var uj = [0, 2 / 3, 1 / 3, 0], vj = [0, 1 / 3, 2 / 3, 0], wj = [0, 1 / 6, 2 / 3, 1 / 6];
	Vg.svg.line.radial = function () {
		var a = Bf(Wf);
		return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
	}, Ff.reverse = Gf, Gf.reverse = Ff, Vg.svg.area = function () {
		return Xf(pb)
	}, Vg.svg.area.radial = function () {
		var a = Xf(Wf);
		return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
	}, Vg.svg.chord = function () {
		function a(a, h) {
			var i = b(this, f, a, h), j = b(this, g, a, h);
			return"M" + i.p0 + d(i.r, i.p1, i.a1 - i.a0) + (c(i, j) ? e(i.r, i.p1, i.r, i.p0) : e(i.r, i.p1, j.r, j.p0) + d(j.r, j.p1, j.a1 - j.a0) + e(j.r, j.p1, i.r, i.p0)) + "Z"
		}

		function b(a, b, c, d) {
			var e = b.call(a, c, d), f = h.call(a, e, d), g = i.call(a, e, d) + rj, k = j.call(a, e, d) + rj;
			return{r: f, a0: g, a1: k, p0: [f * Math.cos(g), f * Math.sin(g)], p1: [f * Math.cos(k), f * Math.sin(k)]}
		}

		function c(a, b) {
			return a.a0 == b.a0 && a.a1 == b.a1
		}

		function d(a, b, c) {
			return"A" + a + "," + a + " 0 " + +(c > zh) + ",1 " + b
		}

		function e(a, b, c, d) {
			return"Q 0,0 " + d
		}

		var f = Ic, g = Jc, h = Yf, i = zf, j = Af;
		return a.radius = function (b) {
			return arguments.length ? (h = ob(b), a) : h
		}, a.source = function (b) {
			return arguments.length ? (f = ob(b), a) : f
		}, a.target = function (b) {
			return arguments.length ? (g = ob(b), a) : g
		}, a.startAngle = function (b) {
			return arguments.length ? (i = ob(b), a) : i
		}, a.endAngle = function (b) {
			return arguments.length ? (j = ob(b), a) : j
		}, a
	}, Vg.svg.diagonal = function () {
		function a(a, e) {
			var f = b.call(this, a, e), g = c.call(this, a, e), h = (f.y + g.y) / 2, i = [f, {x: f.x, y: h}, {x: g.x, y: h}, g];
			return i = i.map(d), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
		}

		var b = Ic, c = Jc, d = Zf;
		return a.source = function (c) {
			return arguments.length ? (b = ob(c), a) : b
		}, a.target = function (b) {
			return arguments.length ? (c = ob(b), a) : c
		}, a.projection = function (b) {
			return arguments.length ? (d = b, a) : d
		}, a
	}, Vg.svg.diagonal.radial = function () {
		var a = Vg.svg.diagonal(), b = Zf, c = a.projection;
		return a.projection = function (a) {
			return arguments.length ? c($f(b = a)) : b
		}, a
	}, Vg.svg.symbol = function () {
		function a(a, d) {
			return(xj.get(b.call(this, a, d)) || bg)(c.call(this, a, d))
		}

		var b = ag, c = _f;
		return a.type = function (c) {
			return arguments.length ? (b = ob(c), a) : b
		}, a.size = function (b) {
			return arguments.length ? (c = ob(b), a) : c
		}, a
	};
	var xj = Vg.map({circle: bg, cross: function (a) {
		var b = Math.sqrt(a / 5) / 2;
		return"M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
	}, diamond: function (a) {
		var b = Math.sqrt(a / (2 * Bj)), c = b * Bj;
		return"M0," + -b + "L" + c + ",0 0," + b + " " + -c + ",0Z"
	}, square: function (a) {
		var b = Math.sqrt(a) / 2;
		return"M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
	}, "triangle-down": function (a) {
		var b = Math.sqrt(a / Aj), c = b * Aj / 2;
		return"M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
	}, "triangle-up": function (a) {
		var b = Math.sqrt(a / Aj), c = b * Aj / 2;
		return"M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
	}});
	Vg.svg.symbolTypes = xj.keys();
	var yj, zj, Aj = Math.sqrt(3), Bj = Math.tan(30 * Eh), Cj = [], Dj = 0;
	Cj.call = rh.call, Cj.empty = rh.empty, Cj.node = rh.node, Cj.size = rh.size, Vg.transition = function (a) {
		return arguments.length ? yj ? a.transition() : a : uh.transition()
	}, Vg.transition.prototype = Cj, Cj.select = function (a) {
		var b, c, d, e = this.id, f = [];
		a = p(a);
		for (var g = -1, h = this.length; ++g < h;) {
			f.push(b = []);
			for (var i = this[g], j = -1, k = i.length; ++j < k;)(d = i[j]) && (c = a.call(d, d.__data__, j, g)) ? ("__data__"in d && (c.__data__ = d.__data__), fg(c, j, e, d.__transition__[e]), b.push(c)) : b.push(null)
		}
		return cg(f, e)
	}, Cj.selectAll = function (a) {
		var b, c, d, e, f, g = this.id, h = [];
		a = q(a);
		for (var i = -1, j = this.length; ++i < j;)for (var k = this[i], l = -1, m = k.length; ++l < m;)if (d = k[l]) {
			f = d.__transition__[g], c = a.call(d, d.__data__, l, i), h.push(b = []);
			for (var n = -1, o = c.length; ++n < o;)(e = c[n]) && fg(e, n, g, f), b.push(e)
		}
		return cg(h, g)
	}, Cj.filter = function (a) {
		var b, c, d, e = [];
		"function" != typeof a && (a = A(a));
		for (var f = 0, g = this.length; g > f; f++) {
			e.push(b = []);
			for (var c = this[f], h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h) && b.push(d)
		}
		return cg(e, this.id)
	}, Cj.tween = function (a, b) {
		var c = this.id;
		return arguments.length < 2 ? this.node().__transition__[c].tween.get(a) : C(this, null == b ? function (b) {
			b.__transition__[c].tween.remove(a)
		} : function (d) {
			d.__transition__[c].tween.set(a, b)
		})
	}, Cj.attr = function (a, b) {
		function c() {
			this.removeAttribute(h)
		}

		function d() {
			this.removeAttributeNS(h.space, h.local)
		}

		function e(a) {
			return null == a ? c : (a += "", function () {
				var b, c = this.getAttribute(h);
				return c !== a && (b = g(c, a), function (a) {
					this.setAttribute(h, b(a))
				})
			})
		}

		function f(a) {
			return null == a ? d : (a += "", function () {
				var b, c = this.getAttributeNS(h.space, h.local);
				return c !== a && (b = g(c, a), function (a) {
					this.setAttributeNS(h.space, h.local, b(a))
				})
			})
		}

		if (arguments.length < 2) {
			for (b in a)this.attr(b, a[b]);
			return this
		}
		var g = "transform" == a ? be : Gd, h = Vg.ns.qualify(a);
		return dg(this, "attr." + a, b, h.local ? f : e)
	}, Cj.attrTween = function (a, b) {
		function c(a, c) {
			var d = b.call(this, a, c, this.getAttribute(e));
			return d && function (a) {
				this.setAttribute(e, d(a))
			}
		}

		function d(a, c) {
			var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
			return d && function (a) {
				this.setAttributeNS(e.space, e.local, d(a))
			}
		}

		var e = Vg.ns.qualify(a);
		return this.tween("attr." + a, e.local ? d : c)
	}, Cj.style = function (a, b, c) {
		function d() {
			this.style.removeProperty(a)
		}

		function e(b) {
			return null == b ? d : (b += "", function () {
				var d, e = $g.getComputedStyle(this, null).getPropertyValue(a);
				return e !== b && (d = Gd(e, b), function (b) {
					this.style.setProperty(a, d(b), c)
				})
			})
		}

		var f = arguments.length;
		if (3 > f) {
			if ("string" != typeof a) {
				2 > f && (b = "");
				for (c in a)this.style(c, a[c], b);
				return this
			}
			c = ""
		}
		return dg(this, "style." + a, b, e)
	}, Cj.styleTween = function (a, b, c) {
		function d(d, e) {
			var f = b.call(this, d, e, $g.getComputedStyle(this, null).getPropertyValue(a));
			return f && function (b) {
				this.style.setProperty(a, f(b), c)
			}
		}

		return arguments.length < 3 && (c = ""), this.tween("style." + a, d)
	}, Cj.text = function (a) {
		return dg(this, "text", a, eg)
	}, Cj.remove = function () {
		return this.each("end.transition", function () {
			var a;
			this.__transition__.count < 2 && (a = this.parentNode) && a.removeChild(this)
		})
	}, Cj.ease = function (a) {
		var b = this.id;
		return arguments.length < 1 ? this.node().__transition__[b].ease : ("function" != typeof a && (a = Vg.ease.apply(Vg, arguments)), C(this, function (c) {
			c.__transition__[b].ease = a
		}))
	}, Cj.delay = function (a) {
		var b = this.id;
		return C(this, "function" == typeof a ? function (c, d, e) {
			c.__transition__[b].delay = +a.call(c, c.__data__, d, e)
		} : (a = +a, function (c) {
			c.__transition__[b].delay = a
		}))
	}, Cj.duration = function (a) {
		var b = this.id;
		return C(this, "function" == typeof a ? function (c, d, e) {
			c.__transition__[b].duration = Math.max(1, a.call(c, c.__data__, d, e))
		} : (a = Math.max(1, a), function (c) {
			c.__transition__[b].duration = a
		}))
	}, Cj.each = function (a, b) {
		var c = this.id;
		if (arguments.length < 2) {
			var d = zj, e = yj;
			yj = c, C(this, function (b, d, e) {
				zj = b.__transition__[c], a.call(b, b.__data__, d, e)
			}), zj = d, yj = e
		} else C(this, function (d) {
			var e = d.__transition__[c];
			(e.event || (e.event = Vg.dispatch("start", "end"))).on(a, b)
		});
		return this
	}, Cj.transition = function () {
		for (var a, b, c, d, e = this.id, f = ++Dj, g = [], h = 0, i = this.length; i > h; h++) {
			g.push(a = []);
			for (var b = this[h], j = 0, k = b.length; k > j; j++)(c = b[j]) && (d = Object.create(c.__transition__[e]), d.delay += d.duration, fg(c, j, f, d)), a.push(c)
		}
		return cg(g, f)
	}, Vg.svg.axis = function () {
		function a(a) {
			a.each(function () {
				var a, j = Vg.select(this), k = this.__chart__ || c, l = this.__chart__ = c.copy(), m = null == i ? l.ticks ? l.ticks.apply(l, h) : l.domain() : i, n = null == b ? l.tickFormat ? l.tickFormat.apply(l, h) : pb : b, o = j.selectAll(".tick").data(m, l), p = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Ch), q = Vg.transition(o.exit()).style("opacity", Ch).remove(), r = Vg.transition(o).style("opacity", 1), s = bf(l), t = j.selectAll(".domain").data([0]), u = (t.enter().append("path").attr("class", "domain"), Vg.transition(t));
				p.append("line"), p.append("text");
				var v = p.select("line"), w = r.select("line"), x = o.select("text").text(n), y = p.select("text"), z = r.select("text");
				switch (d) {
					case"bottom":
						a = gg, v.attr("y2", e), y.attr("y", Math.max(e, 0) + g), w.attr("x2", 0).attr("y2", e), z.attr("x", 0).attr("y", Math.max(e, 0) + g), x.attr("dy", ".71em").style("text-anchor", "middle"), u.attr("d", "M" + s[0] + "," + f + "V0H" + s[1] + "V" + f);
						break;
					case"top":
						a = gg, v.attr("y2", -e), y.attr("y", -(Math.max(e, 0) + g)), w.attr("x2", 0).attr("y2", -e), z.attr("x", 0).attr("y", -(Math.max(e, 0) + g)), x.attr("dy", "0em").style("text-anchor", "middle"), u.attr("d", "M" + s[0] + "," + -f + "V0H" + s[1] + "V" + -f);
						break;
					case"left":
						a = hg, v.attr("x2", -e), y.attr("x", -(Math.max(e, 0) + g)), w.attr("x2", -e).attr("y2", 0), z.attr("x", -(Math.max(e, 0) + g)).attr("y", 0), x.attr("dy", ".32em").style("text-anchor", "end"), u.attr("d", "M" + -f + "," + s[0] + "H0V" + s[1] + "H" + -f);
						break;
					case"right":
						a = hg, v.attr("x2", e), y.attr("x", Math.max(e, 0) + g), w.attr("x2", e).attr("y2", 0), z.attr("x", Math.max(e, 0) + g).attr("y", 0), x.attr("dy", ".32em").style("text-anchor", "start"), u.attr("d", "M" + f + "," + s[0] + "H0V" + s[1] + "H" + f)
				}
				if (l.rangeBand) {
					var A = l.rangeBand() / 2, B = function (a) {
						return l(a) + A
					};
					p.call(a, B), r.call(a, B)
				} else p.call(a, k), r.call(a, l), q.call(a, l)
			})
		}

		var b, c = Vg.scale.linear(), d = Ej, e = 6, f = 6, g = 3, h = [10], i = null;
		return a.scale = function (b) {
			return arguments.length ? (c = b, a) : c
		}, a.orient = function (b) {
			return arguments.length ? (d = b in Fj ? b + "" : Ej, a) : d
		}, a.ticks = function () {
			return arguments.length ? (h = arguments, a) : h
		}, a.tickValues = function (b) {
			return arguments.length ? (i = b, a) : i
		}, a.tickFormat = function (c) {
			return arguments.length ? (b = c, a) : b
		}, a.tickSize = function (b) {
			var c = arguments.length;
			return c ? (e = +b, f = +arguments[c - 1], a) : e
		}, a.innerTickSize = function (b) {
			return arguments.length ? (e = +b, a) : e
		}, a.outerTickSize = function (b) {
			return arguments.length ? (f = +b, a) : f
		}, a.tickPadding = function (b) {
			return arguments.length ? (g = +b, a) : g
		}, a.tickSubdivide = function () {
			return arguments.length && a
		}, a
	};
	var Ej = "bottom", Fj = {top: 1, right: 1, bottom: 1, left: 1};
	Vg.svg.brush = function () {
		function a(f) {
			f.each(function () {
				var f = Vg.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", e).on("touchstart.brush", e), g = f.selectAll(".background").data([0]);
				g.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), f.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
				var h = f.selectAll(".resize").data(q, pb);
				h.exit().remove(), h.enter().append("g").attr("class", function (a) {
					return"resize " + a
				}).style("cursor", function (a) {
					return Gj[a]
				}).append("rect").attr("x", function (a) {
					return/[ew]$/.test(a) ? -3 : null
				}).attr("y", function (a) {
					return/^[ns]/.test(a) ? -3 : null
				}).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", a.empty() ? "none" : null);
				var k, l = Vg.transition(f), m = Vg.transition(g);
				i && (k = bf(i), m.attr("x", k[0]).attr("width", k[1] - k[0]), c(l)), j && (k = bf(j), m.attr("y", k[0]).attr("height", k[1] - k[0]), d(l)), b(l)
			})
		}

		function b(a) {
			a.selectAll(".resize").attr("transform", function (a) {
				return"translate(" + k[+/e$/.test(a)] + "," + m[+/^s/.test(a)] + ")"
			})
		}

		function c(a) {
			a.select(".extent").attr("x", k[0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", k[1] - k[0])
		}

		function d(a) {
			a.select(".extent").attr("y", m[0]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", m[1] - m[0])
		}

		function e() {
			function e() {
				32 == Vg.event.keyCode && (C || (t = null, E[0] -= k[1], E[1] -= m[1], C = 2), l())
			}

			function n() {
				32 == Vg.event.keyCode && 2 == C && (E[0] += k[1], E[1] += m[1], C = 0, l())
			}

			function q() {
				var a = Vg.mouse(v), e = !1;
				u && (a[0] += u[0], a[1] += u[1]), C || (Vg.event.altKey ? (t || (t = [(k[0] + k[1]) / 2, (m[0] + m[1]) / 2]), E[0] = k[+(a[0] < t[0])], E[1] = m[+(a[1] < t[1])]) : t = null), A && r(a, i, 0) && (c(y), e = !0), B && r(a, j, 1) && (d(y), e = !0), e && (b(y), x({type: "brush", mode: C ? "move" : "resize"}))
			}

			function r(a, b, c) {
				var d, e, h = bf(b), i = h[0], j = h[1], l = E[c], n = c ? m : k, q = n[1] - n[0];
				return C && (i -= l, j -= q + l), d = (c ? p : o) ? Math.max(i, Math.min(j, a[c])) : a[c], C ? e = (d += l) + q : (t && (l = Math.max(i, Math.min(j, 2 * t[c] - d))), d > l ? (e = d, d = l) : e = l), n[0] != d || n[1] != e ? (c ? g = null : f = null, n[0] = d, n[1] = e, !0) : void 0
			}

			function s() {
				q(), y.style("pointer-events", "all").selectAll(".resize").style("display", a.empty() ? "none" : null), Vg.select("body").style("cursor", null), F.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), D(), x({type: "brushend"})
			}

			var t, u, v = this, w = Vg.select(Vg.event.target), x = h.of(v, arguments), y = Vg.select(v), z = w.datum(), A = !/^(n|s)$/.test(z) && i, B = !/^(e|w)$/.test(z) && j, C = w.classed("extent"), D = J(), E = Vg.mouse(v), F = Vg.select($g).on("keydown.brush", e).on("keyup.brush", n);
			if (Vg.event.changedTouches ? F.on("touchmove.brush", q).on("touchend.brush", s) : F.on("mousemove.brush", q).on("mouseup.brush", s), y.interrupt().selectAll("*").interrupt(), C)E[0] = k[0] - E[0], E[1] = m[0] - E[1]; else if (z) {
				var G = +/w$/.test(z), H = +/^n/.test(z);
				u = [k[1 - G] - E[0], m[1 - H] - E[1]], E[0] = k[G], E[1] = m[H]
			} else Vg.event.altKey && (t = E.slice());
			y.style("pointer-events", "none").selectAll(".resize").style("display", null), Vg.select("body").style("cursor", w.style("cursor")), x({type: "brushstart"}), q()
		}

		var f, g, h = n(a, "brushstart", "brush", "brushend"), i = null, j = null, k = [0, 0], m = [0, 0], o = !0, p = !0, q = Hj[0];
		return a.event = function (a) {
			a.each(function () {
				var a = h.of(this, arguments), b = {x: k, y: m, i: f, j: g}, c = this.__chart__ || b;
				this.__chart__ = b, yj ? Vg.select(this).transition().each("start.brush", function () {
					f = c.i, g = c.j, k = c.x, m = c.y, a({type: "brushstart"})
				}).tween("brush:brush", function () {
					var c = Hd(k, b.x), d = Hd(m, b.y);
					return f = g = null, function (e) {
						k = b.x = c(e), m = b.y = d(e), a({type: "brush", mode: "resize"})
					}
				}).each("end.brush", function () {
					f = b.i, g = b.j, a({type: "brush", mode: "resize"}), a({type: "brushend"})
				}) : (a({type: "brushstart"}), a({type: "brush", mode: "resize"}), a({type: "brushend"}))
			})
		}, a.x = function (b) {
			return arguments.length ? (i = b, q = Hj[!i << 1 | !j], a) : i
		}, a.y = function (b) {
			return arguments.length ? (j = b, q = Hj[!i << 1 | !j], a) : j
		}, a.clamp = function (b) {
			return arguments.length ? (i && j ? (o = !!b[0], p = !!b[1]) : i ? o = !!b : j && (p = !!b), a) : i && j ? [o, p] : i ? o : j ? p : null
		}, a.extent = function (b) {
			var c, d, e, h, l;
			return arguments.length ? (i && (c = b[0], d = b[1], j && (c = c[0], d = d[0]), f = [c, d], i.invert && (c = i(c), d = i(d)), c > d && (l = c, c = d, d = l), (c != k[0] || d != k[1]) && (k = [c, d])), j && (e = b[0], h = b[1], i && (e = e[1], h = h[1]), g = [e, h], j.invert && (e = j(e), h = j(h)), e > h && (l = e, e = h, h = l), (e != m[0] || h != m[1]) && (m = [e, h])), a) : (i && (f ? (c = f[0], d = f[1]) : (c = k[0], d = k[1], i.invert && (c = i.invert(c), d = i.invert(d)), c > d && (l = c, c = d, d = l))), j && (g ? (e = g[0], h = g[1]) : (e = m[0], h = m[1], j.invert && (e = j.invert(e), h = j.invert(h)), e > h && (l = e, e = h, h = l))), i && j ? [
				[c, e],
				[d, h]
			] : i ? [c, d] : j && [e, h])
		}, a.clear = function () {
			return a.empty() || (k = [0, 0], m = [0, 0], f = g = null), a
		}, a.empty = function () {
			return!!i && k[0] == k[1] || !!j && m[0] == m[1]
		}, Vg.rebind(a, h, "on")
	};
	var Gj = {n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize"}, Hj = [
		["n", "e", "s", "w", "nw", "ne", "se", "sw"],
		["e", "w"],
		["n", "s"],
		[]
	], Ij = Vg.time = {}, Jj = Date, Kj = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	ig.prototype = {getDate: function () {
		return this._.getUTCDate()
	}, getDay: function () {
		return this._.getUTCDay()
	}, getFullYear: function () {
		return this._.getUTCFullYear()
	}, getHours: function () {
		return this._.getUTCHours()
	}, getMilliseconds: function () {
		return this._.getUTCMilliseconds()
	}, getMinutes: function () {
		return this._.getUTCMinutes()
	}, getMonth: function () {
		return this._.getUTCMonth()
	}, getSeconds: function () {
		return this._.getUTCSeconds()
	}, getTime: function () {
		return this._.getTime()
	}, getTimezoneOffset: function () {
		return 0
	}, valueOf: function () {
		return this._.valueOf()
	}, setDate: function () {
		Lj.setUTCDate.apply(this._, arguments)
	}, setDay: function () {
		Lj.setUTCDay.apply(this._, arguments)
	}, setFullYear: function () {
		Lj.setUTCFullYear.apply(this._, arguments)
	}, setHours: function () {
		Lj.setUTCHours.apply(this._, arguments)
	}, setMilliseconds: function () {
		Lj.setUTCMilliseconds.apply(this._, arguments)
	}, setMinutes: function () {
		Lj.setUTCMinutes.apply(this._, arguments)
	}, setMonth: function () {
		Lj.setUTCMonth.apply(this._, arguments)
	}, setSeconds: function () {
		Lj.setUTCSeconds.apply(this._, arguments)
	}, setTime: function () {
		Lj.setTime.apply(this._, arguments)
	}};
	var Lj = Date.prototype, Mj = "%a %b %e %X %Y", Nj = "%m/%d/%Y", Oj = "%H:%M:%S", Pj = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Qj = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Rj = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Sj = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	Ij.year = jg(function (a) {
		return a = Ij.day(a), a.setMonth(0, 1), a
	}, function (a, b) {
		a.setFullYear(a.getFullYear() + b)
	}, function (a) {
		return a.getFullYear()
	}), Ij.years = Ij.year.range, Ij.years.utc = Ij.year.utc.range, Ij.day = jg(function (a) {
		var b = new Jj(2e3, 0);
		return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
	}, function (a, b) {
		a.setDate(a.getDate() + b)
	}, function (a) {
		return a.getDate() - 1
	}), Ij.days = Ij.day.range, Ij.days.utc = Ij.day.utc.range, Ij.dayOfYear = function (a) {
		var b = Ij.year(a);
		return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
	}, Kj.forEach(function (a, b) {
		a = a.toLowerCase(), b = 7 - b;
		var c = Ij[a] = jg(function (a) {
			return(a = Ij.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
		}, function (a, b) {
			a.setDate(a.getDate() + 7 * Math.floor(b))
		}, function (a) {
			var c = Ij.year(a).getDay();
			return Math.floor((Ij.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
		});
		Ij[a + "s"] = c.range, Ij[a + "s"].utc = c.utc.range, Ij[a + "OfYear"] = function (a) {
			var c = Ij.year(a).getDay();
			return Math.floor((Ij.dayOfYear(a) + (c + b) % 7) / 7)
		}
	}), Ij.week = Ij.sunday, Ij.weeks = Ij.sunday.range, Ij.weeks.utc = Ij.sunday.utc.range, Ij.weekOfYear = Ij.sundayOfYear, Ij.format = lg;
	var Tj = ng(Pj), Uj = og(Pj), Vj = ng(Qj), Wj = og(Qj), Xj = ng(Rj), Yj = og(Rj), Zj = ng(Sj), $j = og(Sj), _j = /^%/, ak = {"-": "", _: " ", 0: "0"}, bk = {a: function (a) {
		return Qj[a.getDay()]
	}, A: function (a) {
		return Pj[a.getDay()]
	}, b: function (a) {
		return Sj[a.getMonth()]
	}, B: function (a) {
		return Rj[a.getMonth()]
	}, c: lg(Mj), d: function (a, b) {
		return pg(a.getDate(), b, 2)
	}, e: function (a, b) {
		return pg(a.getDate(), b, 2)
	}, H: function (a, b) {
		return pg(a.getHours(), b, 2)
	}, I: function (a, b) {
		return pg(a.getHours() % 12 || 12, b, 2)
	}, j: function (a, b) {
		return pg(1 + Ij.dayOfYear(a), b, 3)
	}, L: function (a, b) {
		return pg(a.getMilliseconds(), b, 3)
	}, m: function (a, b) {
		return pg(a.getMonth() + 1, b, 2)
	}, M: function (a, b) {
		return pg(a.getMinutes(), b, 2)
	}, p: function (a) {
		return a.getHours() >= 12 ? "PM" : "AM"
	}, S: function (a, b) {
		return pg(a.getSeconds(), b, 2)
	}, U: function (a, b) {
		return pg(Ij.sundayOfYear(a), b, 2)
	}, w: function (a) {
		return a.getDay()
	}, W: function (a, b) {
		return pg(Ij.mondayOfYear(a), b, 2)
	}, x: lg(Nj), X: lg(Oj), y: function (a, b) {
		return pg(a.getFullYear() % 100, b, 2)
	}, Y: function (a, b) {
		return pg(a.getFullYear() % 1e4, b, 4)
	}, Z: Mg, "%": function () {
		return"%"
	}}, ck = {a: qg, A: rg, b: vg, B: wg, c: xg, d: Fg, e: Fg, H: Hg, I: Hg, j: Gg, L: Kg, m: Eg, M: Ig, p: Lg, S: Jg, U: tg, w: sg, W: ug, x: yg, X: zg, y: Bg, Y: Ag, Z: Cg, "%": Ng}, dk = /^\s*\d+/, ek = Vg.map({am: 0, pm: 1});
	lg.utc = Og;
	var fk = Og("%Y-%m-%dT%H:%M:%S.%LZ");
	lg.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Pg : fk, Pg.parse = function (a) {
		var b = new Date(a);
		return isNaN(b) ? null : b
	}, Pg.toString = fk.toString, Ij.second = jg(function (a) {
		return new Jj(1e3 * Math.floor(a / 1e3))
	}, function (a, b) {
		a.setTime(a.getTime() + 1e3 * Math.floor(b))
	}, function (a) {
		return a.getSeconds()
	}), Ij.seconds = Ij.second.range, Ij.seconds.utc = Ij.second.utc.range, Ij.minute = jg(function (a) {
		return new Jj(6e4 * Math.floor(a / 6e4))
	}, function (a, b) {
		a.setTime(a.getTime() + 6e4 * Math.floor(b))
	}, function (a) {
		return a.getMinutes()
	}), Ij.minutes = Ij.minute.range, Ij.minutes.utc = Ij.minute.utc.range, Ij.hour = jg(function (a) {
		var b = a.getTimezoneOffset() / 60;
		return new Jj(36e5 * (Math.floor(a / 36e5 - b) + b))
	}, function (a, b) {
		a.setTime(a.getTime() + 36e5 * Math.floor(b))
	}, function (a) {
		return a.getHours()
	}), Ij.hours = Ij.hour.range, Ij.hours.utc = Ij.hour.utc.range, Ij.month = jg(function (a) {
		return a = Ij.day(a), a.setDate(1), a
	}, function (a, b) {
		a.setMonth(a.getMonth() + b)
	}, function (a) {
		return a.getMonth()
	}), Ij.months = Ij.month.range, Ij.months.utc = Ij.month.utc.range;
	var gk = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], hk = [
		[Ij.second, 1],
		[Ij.second, 5],
		[Ij.second, 15],
		[Ij.second, 30],
		[Ij.minute, 1],
		[Ij.minute, 5],
		[Ij.minute, 15],
		[Ij.minute, 30],
		[Ij.hour, 1],
		[Ij.hour, 3],
		[Ij.hour, 6],
		[Ij.hour, 12],
		[Ij.day, 1],
		[Ij.day, 2],
		[Ij.week, 1],
		[Ij.month, 1],
		[Ij.month, 3],
		[Ij.year, 1]
	], ik = [
		[lg("%Y"), Sb],
		[lg("%B"), function (a) {
			return a.getMonth()
		}],
		[lg("%b %d"), function (a) {
			return 1 != a.getDate()
		}],
		[lg("%a %d"), function (a) {
			return a.getDay() && 1 != a.getDate()
		}],
		[lg("%I %p"), function (a) {
			return a.getHours()
		}],
		[lg("%I:%M"), function (a) {
			return a.getMinutes()
		}],
		[lg(":%S"), function (a) {
			return a.getSeconds()
		}],
		[lg(".%L"), function (a) {
			return a.getMilliseconds()
		}]
	], jk = Sg(ik);
	hk.year = Ij.year, Ij.scale = function () {
		return Qg(Vg.scale.linear(), hk, jk)
	};
	var kk = {range: function (a, b, c) {
		return Vg.range(+a, +b, c).map(Rg)
	}}, lk = hk.map(function (a) {
		return[a[0].utc, a[1]]
	}), mk = [
		[Og("%Y"), Sb],
		[Og("%B"), function (a) {
			return a.getUTCMonth()
		}],
		[Og("%b %d"), function (a) {
			return 1 != a.getUTCDate()
		}],
		[Og("%a %d"), function (a) {
			return a.getUTCDay() && 1 != a.getUTCDate()
		}],
		[Og("%I %p"), function (a) {
			return a.getUTCHours()
		}],
		[Og("%I:%M"), function (a) {
			return a.getUTCMinutes()
		}],
		[Og(":%S"), function (a) {
			return a.getUTCSeconds()
		}],
		[Og(".%L"), function (a) {
			return a.getUTCMilliseconds()
		}]
	], nk = Sg(mk);
	return lk.year = Ij.year.utc, Ij.scale.utc = function () {
		return Qg(Vg.scale.linear(), lk, nk)
	}, Vg.text = qb(function (a) {
		return a.responseText
	}), Vg.json = function (a, b) {
		return rb(a, "application/json", Tg, b)
	}, Vg.html = function (a, b) {
		return rb(a, "text/html", Ug, b)
	}, Vg.xml = qb(function (a) {
		return a.responseXML
	}), Vg
}(), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdownToggle", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/popup.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function (a, b, c) {
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
			C.remove(), q.$destroy()
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
		var y = angular.element(x.children()[0]), z = {};
		j.datepickerOptions && (z = h.$eval(j.datepickerOptions), y.attr(angular.extend({}, z))), k.$parsers.unshift(m), q.dateSelection = function (a) {
			angular.isDefined(a) && (q.date = a), k.$setViewValue(q.date), k.$render(), r && l(!1)
		}, i.bind("input change keyup", function () {
			q.$apply(function () {
				q.date = k.$modelValue
			})
		}), k.$render = function () {
			var a = k.$viewValue ? e(k.$viewValue, p) : "";
			i.val(a), q.date = k.$modelValue
		}, n(j.min, "min"), n(j.max, "max"), j.showWeeks ? n(j.showWeeks, "showWeeks", "show-weeks") : (q.showWeeks = "show-weeks"in z ? z["show-weeks"] : g.showWeeks, y.attr("show-weeks", "showWeeks")), j.dateDisabled && y.attr("date-disabled", j.dateDisabled);
		var A = !1, B = !1;
		q.$watch("isOpen", function (a) {
			a ? (o(), c.bind("click", v), B && i.unbind("focus", w), i[0].focus(), A = !0) : (A && c.unbind("click", v), i.bind("focus", w), B = !0), u && u(h, a)
		}), q.today = function () {
			q.dateSelection(new Date)
		}, q.clear = function () {
			q.dateSelection(null)
		};
		var C = a(x)(q);
		s ? c.find("body").append(C) : i.after(C)
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
}]), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function () {
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
	return{restrict: "EA", scope: {index: "@", animate: "="}, replace: !0, transclude: !0, templateUrl: "template/modal/window.html", link: function (c, d, e) {
		c.windowClass = e.windowClass || "", b(function () {
			c.animate = !0, d[0].focus()
		}), c.close = function (b) {
			var c = a.getTop();
			c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
		}
	}}
}]).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function (a, b, c, d, e, f) {
	function g() {
		for (var a = -1, b = n.keys(), c = 0; c < b.length; c++)n.get(b[c]).value.backdrop && (a = c);
		return a
	}

	function h(a) {
		var b = c.find("body").eq(0), d = n.get(a).value;
		n.remove(a), j(d.modalDomEl, d.modalScope, 300, i), b.toggleClass(m, n.length() > 0)
	}

	function i() {
		if (k && -1 == g()) {
			var a = l;
			j(k, l, 150, function () {
				a.$destroy(), a = null
			}), k = void 0, l = void 0
		}
	}

	function j(c, d, e, f) {
		function g() {
			g.done || (g.done = !0, c.remove(), f && f())
		}

		d.animate = !1;
		var h = a.transitionEndEventName;
		if (h) {
			var i = b(g, e);
			c.bind(h, function () {
				b.cancel(i), g(), d.$apply()
			})
		} else b(g, 0)
	}

	var k, l, m = "modal-open", n = f.createNew(), o = {};
	return e.$watch(g, function (a) {
		l && (l.index = a)
	}), c.bind("keydown", function (a) {
		var b;
		27 === a.which && (b = n.top(), b && b.value.keyboard && e.$apply(function () {
			o.dismiss(b.key)
		}))
	}), o.open = function (a, b) {
		n.add(a, {deferred: b.deferred, modalScope: b.scope, backdrop: b.backdrop, keyboard: b.keyboard});
		var f = c.find("body").eq(0), h = g();
		h >= 0 && !k && (l = e.$new(!0), l.index = h, k = d("<div modal-backdrop></div>")(l), f.append(k));
		var i = angular.element("<div modal-window></div>");
		i.attr("window-class", b.windowClass), i.attr("index", n.length() - 1), i.attr("animate", "animate"), i.html(b.content);
		var j = d(i)(b.scope);
		n.top().value.modalDomEl = j, f.append(j), f.addClass(m)
	}, o.close = function (a, b) {
		var c = n.get(a).value;
		c && (c.deferred.resolve(b), h(a))
	}, o.dismiss = function (a, b) {
		var c = n.get(a).value;
		c && (c.deferred.reject(b), h(a))
	}, o.dismissAll = function (a) {
		for (var b = this.getTop(); b;)this.dismiss(b.key, a), b = this.getTop()
	}, o.getTop = function () {
		return n.top()
	}, o
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
			return{restrict: "EA", scope: !0, compile: function () {
				var a = f(s);
				return function (b, c, d) {
					function f() {
						b.tt_isOpen ? m() : k()
					}

					function k() {
						(!z || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? (v = g(p, b.tt_popupDelay, !1), v.then(function (a) {
							a()
						})) : p()())
					}

					function m() {
						b.$apply(function () {
							q()
						})
					}

					function p() {
						return b.tt_content ? (r(), u && g.cancel(u), t.css({top: 0, left: 0, display: "block"}), w ? i.find("body").append(t) : c.after(t), A(), b.tt_isOpen = !0, b.$digest(), A) : angular.noop
					}

					function q() {
						b.tt_isOpen = !1, g.cancel(v), b.tt_animation ? u = g(s, 500) : s()
					}

					function r() {
						t && s(), t = a(b, function () {
						}), b.$digest()
					}

					function s() {
						t && (t.remove(), t = null)
					}

					var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, x = n(void 0), y = !1, z = angular.isDefined(d[l + "Enable"]), A = function () {
						var a, d, e, f;
						switch (a = w ? j.offset(c) : j.position(c), d = t.prop("offsetWidth"), e = t.prop("offsetHeight"), b.tt_placement) {
							case"right":
								f = {top: a.top + a.height / 2 - e / 2, left: a.left + a.width};
								break;
							case"bottom":
								f = {top: a.top + a.height, left: a.left + a.width / 2 - d / 2};
								break;
							case"left":
								f = {top: a.top + a.height / 2 - e / 2, left: a.left - d};
								break;
							default:
								f = {top: a.top - e, left: a.left + a.width / 2 - d / 2}
						}
						f.top += "px", f.left += "px", t.css(f)
					};
					b.tt_isOpen = !1, d.$observe(e, function (a) {
						b.tt_content = a, !a && b.tt_isOpen && q()
					}), d.$observe(l + "Title", function (a) {
						b.tt_title = a
					}), d.$observe(l + "Placement", function (a) {
						b.tt_placement = angular.isDefined(a) ? a : o.placement
					}), d.$observe(l + "PopupDelay", function (a) {
						var c = parseInt(a, 10);
						b.tt_popupDelay = isNaN(c) ? o.popupDelay : c
					});
					var B = function () {
						y && (c.unbind(x.show, k), c.unbind(x.hide, m))
					};
					d.$observe(l + "Trigger", function (a) {
						B(), x = n(a), x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m)), y = !0
					});
					var C = b.$eval(d[l + "Animation"]);
					b.tt_animation = angular.isDefined(C) ? !!C : o.animation, d.$observe(l + "AppendToBody", function (a) {
						w = angular.isDefined(a) ? h(a)(b) : w
					}), w && b.$on("$locationChangeSuccess", function () {
						b.tt_isOpen && q()
					}), b.$on("$destroy", function () {
						g.cancel(u), g.cancel(v), B(), s()
					})
				}
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
}).directive("popover", ["$tooltip", function (a) {
	return a("popover", "popover", "click")
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
		a.value === b || a.readonly || (a.value = b)
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
	a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (a) {
	a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (a) {
	a.put("template/typeahead/typeahead-popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" + '    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
}]);