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

if (!dojo._hasResource["dojox.string.Builder"]) {
	dojo._hasResource["dojox.string.Builder"] = true;
	dojo.provide("dojox.string.Builder");
	dojox.string.Builder = function (_1) {
		var b = "";
		this.length = 0;
		this.append = function (s) {
			if (arguments.length > 1) {
				var _2 = "", l = arguments.length;
				switch (l) {
					case 9:
						_2 = "" + arguments[8] + _2;
					case 8:
						_2 = "" + arguments[7] + _2;
					case 7:
						_2 = "" + arguments[6] + _2;
					case 6:
						_2 = "" + arguments[5] + _2;
					case 5:
						_2 = "" + arguments[4] + _2;
					case 4:
						_2 = "" + arguments[3] + _2;
					case 3:
						_2 = "" + arguments[2] + _2;
					case 2:
						b += "" + arguments[0] + arguments[1] + _2;
						break;
					default:
						var i = 0;
						while (i < arguments.length) {
							_2 += arguments[i++];
						}
						b += _2;
				}
			} else {
				b += s;
			}
			this.length = b.length;
			return this;
		};
		this.concat = function (s) {
			return this.append.apply(this, arguments);
		};
		this.appendArray = function (_3) {
			return this.append.apply(this, _3);
		};
		this.clear = function () {
			b = "";
			this.length = 0;
			return this;
		};
		this.replace = function (_4, _5) {
			b = b.replace(_4, _5);
			this.length = b.length;
			return this;
		};
		this.remove = function (_6, _7) {
			if (_7 === undefined) {
				_7 = b.length;
			}
			if (_7 == 0) {
				return this;
			}
			b = b.substr(0, _6) + b.substr(_6 + _7);
			this.length = b.length;
			return this;
		};
		this.insert = function (_8, _9) {
			if (_8 == 0) {
				b = _9 + b;
			} else {
				b = b.slice(0, _8) + _9 + b.slice(_8);
			}
			this.length = b.length;
			return this;
		};
		this.toString = function () {
			return b;
		};
		if (_1) {
			this.append(_1);
		}
	};
}
if (!dojo._hasResource["dojox.string.tokenize"]) {
	dojo._hasResource["dojox.string.tokenize"] = true;
	dojo.provide("dojox.string.tokenize");
	dojox.string.tokenize = function (_a, re, _b, _c) {
		var _d = [];
		var _e, _f, _10 = 0;
		while (_e = re.exec(_a)) {
			_f = _a.slice(_10, re.lastIndex - _e[0].length);
			if (_f.length) {
				_d.push(_f);
			}
			if (_b) {
				if (dojo.isOpera) {
					var _11 = _e.slice(0);
					while (_11.length < _e.length) {
						_11.push(null);
					}
					_e = _11;
				}
				var _12 = _b.apply(_c, _e.slice(1).concat(_d.length));
				if (typeof _12 != "undefined") {
					_d.push(_12);
				}
			}
			_10 = re.lastIndex;
		}
		_f = _a.slice(_10);
		if (_f.length) {
			_d.push(_f);
		}
		return _d;
	};
}
if (!dojo._hasResource["dojox.dtl._base"]) {
	dojo._hasResource["dojox.dtl._base"] = true;
	dojo.provide("dojox.dtl._base");
	dojo.experimental("dojox.dtl");
	(function () {
		var dd = dojox.dtl;
		dd.TOKEN_BLOCK = -1;
		dd.TOKEN_VAR = -2;
		dd.TOKEN_COMMENT = -3;
		dd.TOKEN_TEXT = 3;
		dd._Context = dojo.extend(function (_13) {
			if (_13) {
				dojo._mixin(this, _13);
				if (_13.get) {
					this._getter = _13.get;
					delete this.get;
				}
			}
		}, {push: function () {
			var _14 = this;
			var _15 = dojo.delegate(this);
			_15.pop = function () {
				return _14;
			};
			return _15;
		}, pop: function () {
			throw new Error("pop() called on empty Context");
		}, get: function (key, _16) {
			var n = this._normalize;
			if (this._getter) {
				var got = this._getter(key);
				if (typeof got != "undefined") {
					return n(got);
				}
			}
			if (typeof this[key] != "undefined") {
				return n(this[key]);
			}
			return _16;
		}, _normalize: function (_17) {
			if (_17 instanceof Date) {
				_17.year = _17.getFullYear();
				_17.month = _17.getMonth() + 1;
				_17.day = _17.getDate();
				_17.date = _17.year + "-" + ("0" + _17.month).slice(-2) + "-" + ("0" + _17.day).slice(-2);
				_17.hour = _17.getHours();
				_17.minute = _17.getMinutes();
				_17.second = _17.getSeconds();
				_17.microsecond = _17.getMilliseconds();
			}
			return _17;
		}, update: function (_18) {
			var _19 = this.push();
			if (_18) {
				dojo._mixin(this, _18);
			}
			return _19;
		}});
		var _1a = /("(?:[^"\\]*(?:\\.[^"\\]*)*)"|'(?:[^'\\]*(?:\\.[^'\\]*)*)'|[^\s]+)/g;
		var _1b = /\s+/g;
		var _1c = function (_1d, _1e) {
			_1d = _1d || _1b;
			if (!(_1d instanceof RegExp)) {
				_1d = new RegExp(_1d, "g");
			}
			if (!_1d.global) {
				throw new Error("You must use a globally flagged RegExp with split " + _1d);
			}
			_1d.exec("");
			var _1f, _20 = [], _21 = 0, i = 0;
			while (_1f = _1d.exec(this)) {
				_20.push(this.slice(_21, _1d.lastIndex - _1f[0].length));
				_21 = _1d.lastIndex;
				if (_1e && (++i > _1e - 1)) {
					break;
				}
			}
			_20.push(this.slice(_21));
			return _20;
		};
		dd.Token = function (_22, _23) {
			this.token_type = _22;
			this.contents = new String(dojo.trim(_23));
			this.contents.split = _1c;
			this.split = function () {
				return String.prototype.split.apply(this.contents, arguments);
			};
		};
		dd.Token.prototype.split_contents = function (_24) {
			var bit, _25 = [], i = 0;
			_24 = _24 || 999;
			while (i++ < _24 && (bit = _1a.exec(this.contents))) {
				bit = bit[0];
				if (bit.charAt(0) == "\"" && bit.slice(-1) == "\"") {
					_25.push("\"" + bit.slice(1, -1).replace("\\\"", "\"").replace("\\\\", "\\") + "\"");
				} else {
					if (bit.charAt(0) == "'" && bit.slice(-1) == "'") {
						_25.push("'" + bit.slice(1, -1).replace("\\'", "'").replace("\\\\", "\\") + "'");
					} else {
						_25.push(bit);
					}
				}
			}
			return _25;
		};
		var ddt = dd.text = {_get: function (_26, _27, _28) {
			var _29 = dd.register.get(_26, _27.toLowerCase(), _28);
			if (!_29) {
				if (!_28) {
					throw new Error("No tag found for " + _27);
				}
				return null;
			}
			var fn = _29[1];
			var _2a = _29[2];
			var _2b;
			if (fn.indexOf(":") != -1) {
				_2b = fn.split(":");
				fn = _2b.pop();
			}
			dojo["require"](_2a);
			var _2c = dojo.getObject(_2a);
			return _2c[fn || _27] || _2c[_27 + "_"] || _2c[fn + "_"];
		}, getTag: function (_2d, _2e) {
			return ddt._get("tag", _2d, _2e);
		}, getFilter: function (_2f, _30) {
			return ddt._get("filter", _2f, _30);
		}, getTemplate: function (_31) {
			return new dd.Template(ddt.getTemplateString(_31));
		}, getTemplateString: function (_32) {
			return dojo._getText(_32.toString()) || "";
		}, _resolveLazy: function (_33, _34, _35) {
			if (_34) {
				if (_35) {
					return dojo.fromJson(dojo._getText(_33)) || {};
				} else {
					return dd.text.getTemplateString(_33);
				}
			} else {
				return dojo.xhrGet({handleAs: (_35) ? "json" : "text", url: _33});
			}
		}, _resolveTemplateArg: function (arg, _36) {
			if (ddt._isTemplate(arg)) {
				if (!_36) {
					var d = new dojo.Deferred();
					d.callback(arg);
					return d;
				}
				return arg;
			}
			return ddt._resolveLazy(arg, _36);
		}, _isTemplate: function (arg) {
			return (typeof arg == "undefined") || (typeof arg == "string" && (arg.match(/^\s*[<{]/) || arg.indexOf(" ") != -1));
		}, _resolveContextArg: function (arg, _37) {
			if (arg.constructor == Object) {
				if (!_37) {
					var d = new dojo.Deferred;
					d.callback(arg);
					return d;
				}
				return arg;
			}
			return ddt._resolveLazy(arg, _37, true);
		}, _re: /(?:\{\{\s*(.+?)\s*\}\}|\{%\s*(load\s*)?(.+?)\s*%\})/g, tokenize: function (str) {
			return dojox.string.tokenize(str, ddt._re, ddt._parseDelims);
		}, _parseDelims: function (_38, _39, tag) {
			if (_38) {
				return [dd.TOKEN_VAR, _38];
			} else {
				if (_39) {
					var _3a = dojo.trim(tag).split(/\s+/g);
					for (var i = 0, _3b; _3b = _3a[i]; i++) {
						dojo["require"](_3b);
					}
				} else {
					return [dd.TOKEN_BLOCK, tag];
				}
			}
		}};
		dd.Template = dojo.extend(function (_3c, _3d) {
			var str = _3d ? _3c : ddt._resolveTemplateArg(_3c, true) || "";
			var _3e = ddt.tokenize(str);
			var _3f = new dd._Parser(_3e);
			this.nodelist = _3f.parse();
		}, {update: function (_40, _41) {
			return ddt._resolveContextArg(_41).addCallback(this, function (_42) {
				var _43 = this.render(new dd._Context(_42));
				if (_40.forEach) {
					_40.forEach(function (_44) {
						_44.innerHTML = _43;
					});
				} else {
					dojo.byId(_40).innerHTML = _43;
				}
				return this;
			});
		}, render: function (_45, _46) {
			_46 = _46 || this.getBuffer();
			_45 = _45 || new dd._Context({});
			return this.nodelist.render(_45, _46) + "";
		}, getBuffer: function () {
			return new dojox.string.Builder();
		}});
		var _47 = /\{\{\s*(.+?)\s*\}\}/g;
		dd.quickFilter = function (str) {
			if (!str) {
				return new dd._NodeList();
			}
			if (str.indexOf("{%") == -1) {
				return new dd._QuickNodeList(dojox.string.tokenize(str, _47, function (_48) {
					return new dd._Filter(_48);
				}));
			}
		};
		dd._QuickNodeList = dojo.extend(function (_49) {
			this.contents = _49;
		}, {render: function (_4a, _4b) {
			for (var i = 0, l = this.contents.length; i < l; i++) {
				if (this.contents[i].resolve) {
					_4b = _4b.concat(this.contents[i].resolve(_4a));
				} else {
					_4b = _4b.concat(this.contents[i]);
				}
			}
			return _4b;
		}, dummyRender: function (_4c) {
			return this.render(_4c, dd.Template.prototype.getBuffer()).toString();
		}, clone: function (_4d) {
			return this;
		}});
		dd._Filter = dojo.extend(function (_4e) {
			if (!_4e) {
				throw new Error("Filter must be called with variable name");
			}
			this.contents = _4e;
			var _4f = this._cache[_4e];
			if (_4f) {
				this.key = _4f[0];
				this.filters = _4f[1];
			} else {
				this.filters = [];
				dojox.string.tokenize(_4e, this._re, this._tokenize, this);
				this._cache[_4e] = [this.key, this.filters];
			}
		}, {_cache: {}, _re: /(?:^_\("([^\\"]*(?:\\.[^\\"])*)"\)|^"([^\\"]*(?:\\.[^\\"]*)*)"|^([a-zA-Z0-9_.]+)|\|(\w+)(?::(?:_\("([^\\"]*(?:\\.[^\\"])*)"\)|"([^\\"]*(?:\\.[^\\"]*)*)"|([a-zA-Z0-9_.]+)|'([^\\']*(?:\\.[^\\']*)*)'))?|^'([^\\']*(?:\\.[^\\']*)*)')/g, _values: {0: "\"", 1: "\"", 2: "", 8: "\""}, _args: {4: "\"", 5: "\"", 6: "", 7: "'"}, _tokenize: function () {
			var pos, arg;
			for (var i = 0, has = []; i < arguments.length; i++) {
				has[i] = (typeof arguments[i] != "undefined" && typeof arguments[i] == "string" && arguments[i]);
			}
			if (!this.key) {
				for (pos in this._values) {
					if (has[pos]) {
						this.key = this._values[pos] + arguments[pos] + this._values[pos];
						break;
					}
				}
			} else {
				for (pos in this._args) {
					if (has[pos]) {
						var _50 = arguments[pos];
						if (this._args[pos] == "'") {
							_50 = _50.replace(/\\'/g, "'");
						} else {
							if (this._args[pos] == "\"") {
								_50 = _50.replace(/\\"/g, "\"");
							}
						}
						arg = [!this._args[pos], _50];
						break;
					}
				}
				var fn = ddt.getFilter(arguments[3]);
				if (!dojo.isFunction(fn)) {
					throw new Error(arguments[3] + " is not registered as a filter");
				}
				this.filters.push([fn, arg]);
			}
		}, getExpression: function () {
			return this.contents;
		}, resolve: function (_51) {
			if (typeof this.key == "undefined") {
				return "";
			}
			var str = this.resolvePath(this.key, _51);
			for (var i = 0, _52; _52 = this.filters[i]; i++) {
				if (_52[1]) {
					if (_52[1][0]) {
						str = _52[0](str, this.resolvePath(_52[1][1], _51));
					} else {
						str = _52[0](str, _52[1][1]);
					}
				} else {
					str = _52[0](str);
				}
			}
			return str;
		}, resolvePath: function (_53, _54) {
			var _55, _56;
			var _57 = _53.charAt(0);
			var _58 = _53.slice(-1);
			if (!isNaN(parseInt(_57))) {
				_55 = (_53.indexOf(".") == -1) ? parseInt(_53) : parseFloat(_53);
			} else {
				if (_57 == "\"" && _57 == _58) {
					_55 = _53.slice(1, -1);
				} else {
					if (_53 == "true") {
						return true;
					}
					if (_53 == "false") {
						return false;
					}
					if (_53 == "null" || _53 == "None") {
						return null;
					}
					_56 = _53.split(".");
					_55 = _54.get(_56[0]);
					if (dojo.isFunction(_55)) {
						var _59 = _54.getThis && _54.getThis();
						if (_55.alters_data) {
							_55 = "";
						} else {
							if (_59) {
								_55 = _55.call(_59);
							} else {
								_55 = "";
							}
						}
					}
					for (var i = 1; i < _56.length; i++) {
						var _5a = _56[i];
						if (_55) {
							var _5b = _55;
							if (dojo.isObject(_55) && _5a == "items" && typeof _55[_5a] == "undefined") {
								var _5c = [];
								for (var key in _55) {
									_5c.push([key, _55[key]]);
								}
								_55 = _5c;
								continue;
							}
							if (_55.get && dojo.isFunction(_55.get) && _55.get.safe) {
								_55 = _55.get(_5a);
							} else {
								if (typeof _55[_5a] == "undefined") {
									_55 = _55[_5a];
									break;
								} else {
									_55 = _55[_5a];
								}
							}
							if (dojo.isFunction(_55)) {
								if (_55.alters_data) {
									_55 = "";
								} else {
									_55 = _55.call(_5b);
								}
							} else {
								if (_55 instanceof Date) {
									_55 = dd._Context.prototype._normalize(_55);
								}
							}
						} else {
							return "";
						}
					}
				}
			}
			return _55;
		}});
		dd._TextNode = dd._Node = dojo.extend(function (obj) {
			this.contents = obj;
		}, {set: function (_5d) {
			this.contents = _5d;
			return this;
		}, render: function (_5e, _5f) {
			return _5f.concat(this.contents);
		}, isEmpty: function () {
			return !dojo.trim(this.contents);
		}, clone: function () {
			return this;
		}});
		dd._NodeList = dojo.extend(function (_60) {
			this.contents = _60 || [];
			this.last = "";
		}, {push: function (_61) {
			this.contents.push(_61);
			return this;
		}, concat: function (_62) {
			this.contents = this.contents.concat(_62);
			return this;
		}, render: function (_63, _64) {
			for (var i = 0; i < this.contents.length; i++) {
				_64 = this.contents[i].render(_63, _64);
				if (!_64) {
					throw new Error("Template must return buffer");
				}
			}
			return _64;
		}, dummyRender: function (_65) {
			return this.render(_65, dd.Template.prototype.getBuffer()).toString();
		}, unrender: function () {
			return arguments[1];
		}, clone: function () {
			return this;
		}, rtrim: function () {
			while (1) {
				i = this.contents.length - 1;
				if (this.contents[i] instanceof dd._TextNode && this.contents[i].isEmpty()) {
					this.contents.pop();
				} else {
					break;
				}
			}
			return this;
		}});
		dd._VarNode = dojo.extend(function (str) {
			this.contents = new dd._Filter(str);
		}, {render: function (_66, _67) {
			var str = this.contents.resolve(_66);
			if (!str.safe) {
				str = dd._base.escape("" + str);
			}
			return _67.concat(str);
		}});
		dd._noOpNode = new function () {
			this.render = this.unrender = function () {
				return arguments[1];
			};
			this.clone = function () {
				return this;
			};
		};
		dd._Parser = dojo.extend(function (_68) {
			this.contents = _68;
		}, {i: 0, parse: function (_69) {
			var _6a = {}, _6b;
			_69 = _69 || [];
			for (var i = 0; i < _69.length; i++) {
				_6a[_69[i]] = true;
			}
			var _6c = new dd._NodeList();
			while (this.i < this.contents.length) {
				_6b = this.contents[this.i++];
				if (typeof _6b == "string") {
					_6c.push(new dd._TextNode(_6b));
				} else {
					var _6d = _6b[0];
					var _6e = _6b[1];
					if (_6d == dd.TOKEN_VAR) {
						_6c.push(new dd._VarNode(_6e));
					} else {
						if (_6d == dd.TOKEN_BLOCK) {
							if (_6a[_6e]) {
								--this.i;
								return _6c;
							}
							var cmd = _6e.split(/\s+/g);
							if (cmd.length) {
								cmd = cmd[0];
								var fn = ddt.getTag(cmd);
								if (fn) {
									_6c.push(fn(this, new dd.Token(_6d, _6e)));
								}
							}
						}
					}
				}
			}
			if (_69.length) {
				throw new Error("Could not find closing tag(s): " + _69.toString());
			}
			this.contents.length = 0;
			return _6c;
		}, next_token: function () {
			var _6f = this.contents[this.i++];
			return new dd.Token(_6f[0], _6f[1]);
		}, delete_first_token: function () {
			this.i++;
		}, skip_past: function (_70) {
			while (this.i < this.contents.length) {
				var _71 = this.contents[this.i++];
				if (_71[0] == dd.TOKEN_BLOCK && _71[1] == _70) {
					return;
				}
			}
			throw new Error("Unclosed tag found when looking for " + _70);
		}, create_variable_node: function (_72) {
			return new dd._VarNode(_72);
		}, create_text_node: function (_73) {
			return new dd._TextNode(_73 || "");
		}, getTemplate: function (_74) {
			return new dd.Template(_74);
		}});
		dd.register = {_registry: {attributes: [], tags: [], filters: []}, get: function (_75, _76) {
			var _77 = dd.register._registry[_75 + "s"];
			for (var i = 0, _78; _78 = _77[i]; i++) {
				if (typeof _78[0] == "string") {
					if (_78[0] == _76) {
						return _78;
					}
				} else {
					if (_76.match(_78[0])) {
						return _78;
					}
				}
			}
		}, getAttributeTags: function () {
			var _79 = [];
			var _7a = dd.register._registry.attributes;
			for (var i = 0, _7b; _7b = _7a[i]; i++) {
				if (_7b.length == 3) {
					_79.push(_7b);
				} else {
					var fn = dojo.getObject(_7b[1]);
					if (fn && dojo.isFunction(fn)) {
						_7b.push(fn);
						_79.push(_7b);
					}
				}
			}
			return _79;
		}, _any: function (_7c, _7d, _7e) {
			for (var _7f in _7e) {
				for (var i = 0, fn; fn = _7e[_7f][i]; i++) {
					var key = fn;
					if (dojo.isArray(fn)) {
						key = fn[0];
						fn = fn[1];
					}
					if (typeof key == "string") {
						if (key.substr(0, 5) == "attr:") {
							var _80 = fn;
							if (_80.substr(0, 5) == "attr:") {
								_80 = _80.slice(5);
							}
							dd.register._registry.attributes.push([_80.toLowerCase(), _7d + "." + _7f + "." + _80]);
						}
						key = key.toLowerCase();
					}
					dd.register._registry[_7c].push([key, fn, _7d + "." + _7f]);
				}
			}
		}, tags: function (_81, _82) {
			dd.register._any("tags", _81, _82);
		}, filters: function (_83, _84) {
			dd.register._any("filters", _83, _84);
		}};
		var _85 = /&/g;
		var _86 = /</g;
		var _87 = />/g;
		var _88 = /'/g;
		var _89 = /"/g;
		dd._base.escape = function (_8a) {
			return dd.mark_safe(_8a.replace(_85, "&amp;").replace(_86, "&lt;").replace(_87, "&gt;").replace(_89, "&quot;").replace(_88, "&#39;"));
		};
		dd._base.safe = function (_8b) {
			if (typeof _8b == "string") {
				_8b = new String(_8b);
			}
			if (typeof _8b == "object") {
				_8b.safe = true;
			}
			return _8b;
		};
		dd.mark_safe = dd._base.safe;
		dd.register.tags("dojox.dtl.tag", {"date": ["now"], "logic": ["if", "for", "ifequal", "ifnotequal"], "loader": ["extends", "block", "include", "load", "ssi"], "misc": ["comment", "debug", "filter", "firstof", "spaceless", "templatetag", "widthratio", "with"], "loop": ["cycle", "ifchanged", "regroup"]});
		dd.register.filters("dojox.dtl.filter", {"dates": ["date", "time", "timesince", "timeuntil"], "htmlstrings": ["linebreaks", "linebreaksbr", "removetags", "striptags"], "integers": ["add", "get_digit"], "lists": ["dictsort", "dictsortreversed", "first", "join", "length", "length_is", "random", "slice", "unordered_list"], "logic": ["default", "default_if_none", "divisibleby", "yesno"], "misc": ["filesizeformat", "pluralize", "phone2numeric", "pprint"], "strings": ["addslashes", "capfirst", "center", "cut", "fix_ampersands", "floatformat", "iriencode", "linenumbers", "ljust", "lower", "make_list", "rjust", "slugify", "stringformat", "title", "truncatewords", "truncatewords_html", "upper", "urlencode", "urlize", "urlizetrunc", "wordcount", "wordwrap"]});
		dd.register.filters("dojox.dtl", {"_base": ["escape", "safe"]});
	})();
}
if (!dojo._hasResource["dojox.dtl"]) {
	dojo._hasResource["dojox.dtl"] = true;
	dojo.provide("dojox.dtl");
}
if (!dojo._hasResource["dojox.dtl.Context"]) {
	dojo._hasResource["dojox.dtl.Context"] = true;
	dojo.provide("dojox.dtl.Context");
	dojox.dtl.Context = dojo.extend(function (_8c) {
		this._this = {};
		dojox.dtl._Context.call(this, _8c);
	}, dojox.dtl._Context.prototype, {getKeys: function () {
		var _8d = [];
		for (var key in this) {
			if (this.hasOwnProperty(key) && key != "_this") {
				_8d.push(key);
			}
		}
		return _8d;
	}, extend: function (obj) {
		return dojo.delegate(this, obj);
	}, filter: function (_8e) {
		var _8f = new dojox.dtl.Context();
		var _90 = [];
		var i, arg;
		if (_8e instanceof dojox.dtl.Context) {
			_90 = _8e.getKeys();
		} else {
			if (typeof _8e == "object") {
				for (var key in _8e) {
					_90.push(key);
				}
			} else {
				for (i = 0; arg = arguments[i]; i++) {
					if (typeof arg == "string") {
						_90.push(arg);
					}
				}
			}
		}
		for (i = 0, key; key = _90[i]; i++) {
			_8f[key] = this[key];
		}
		return _8f;
	}, setThis: function (_91) {
		this._this = _91;
	}, getThis: function () {
		return this._this;
	}, hasKey: function (key) {
		if (this._getter) {
			var got = this._getter(key);
			if (typeof got != "undefined") {
				return true;
			}
		}
		if (typeof this[key] != "undefined") {
			return true;
		}
		return false;
	}});
}
if (!dojo._hasResource["dojox.dtl.tag.logic"]) {
	dojo._hasResource["dojox.dtl.tag.logic"] = true;
	dojo.provide("dojox.dtl.tag.logic");
	(function () {
		var dd = dojox.dtl;
		var ddt = dd.text;
		var _92 = dd.tag.logic;
		_92.IfNode = dojo.extend(function (_93, _94, _95, _96) {
			this.bools = _93;
			this.trues = _94;
			this.falses = _95;
			this.type = _96;
		}, {render: function (_97, _98) {
			var i, _99, _9a, _9b, _9c;
			if (this.type == "or") {
				for (i = 0; _99 = this.bools[i]; i++) {
					_9a = _99[0];
					_9b = _99[1];
					_9c = _9b.resolve(_97);
					if ((_9c && !_9a) || (_9a && !_9c)) {
						if (this.falses) {
							_98 = this.falses.unrender(_97, _98);
						}
						return (this.trues) ? this.trues.render(_97, _98, this) : _98;
					}
				}
				if (this.trues) {
					_98 = this.trues.unrender(_97, _98);
				}
				return (this.falses) ? this.falses.render(_97, _98, this) : _98;
			} else {
				for (i = 0; _99 = this.bools[i]; i++) {
					_9a = _99[0];
					_9b = _99[1];
					_9c = _9b.resolve(_97);
					if (_9c == _9a) {
						if (this.trues) {
							_98 = this.trues.unrender(_97, _98);
						}
						return (this.falses) ? this.falses.render(_97, _98, this) : _98;
					}
				}
				if (this.falses) {
					_98 = this.falses.unrender(_97, _98);
				}
				return (this.trues) ? this.trues.render(_97, _98, this) : _98;
			}
			return _98;
		}, unrender: function (_9d, _9e) {
			_9e = (this.trues) ? this.trues.unrender(_9d, _9e) : _9e;
			_9e = (this.falses) ? this.falses.unrender(_9d, _9e) : _9e;
			return _9e;
		}, clone: function (_9f) {
			var _a0 = (this.trues) ? this.trues.clone(_9f) : null;
			var _a1 = (this.falses) ? this.falses.clone(_9f) : null;
			return new this.constructor(this.bools, _a0, _a1, this.type);
		}});
		_92.IfEqualNode = dojo.extend(function (_a2, _a3, _a4, _a5, _a6) {
			this.var1 = new dd._Filter(_a2);
			this.var2 = new dd._Filter(_a3);
			this.trues = _a4;
			this.falses = _a5;
			this.negate = _a6;
		}, {render: function (_a7, _a8) {
			var _a9 = this.var1.resolve(_a7);
			var _aa = this.var2.resolve(_a7);
			_a9 = (typeof _a9 != "undefined") ? _a9 : "";
			_aa = (typeof _a9 != "undefined") ? _aa : "";
			if ((this.negate && _a9 != _aa) || (!this.negate && _a9 == _aa)) {
				if (this.falses) {
					_a8 = this.falses.unrender(_a7, _a8, this);
				}
				return (this.trues) ? this.trues.render(_a7, _a8, this) : _a8;
			}
			if (this.trues) {
				_a8 = this.trues.unrender(_a7, _a8, this);
			}
			return (this.falses) ? this.falses.render(_a7, _a8, this) : _a8;
		}, unrender: function (_ab, _ac) {
			return _92.IfNode.prototype.unrender.call(this, _ab, _ac);
		}, clone: function (_ad) {
			var _ae = this.trues ? this.trues.clone(_ad) : null;
			var _af = this.falses ? this.falses.clone(_ad) : null;
			return new this.constructor(this.var1.getExpression(), this.var2.getExpression(), _ae, _af, this.negate);
		}});
		_92.ForNode = dojo.extend(function (_b0, _b1, _b2, _b3) {
			this.assign = _b0;
			this.loop = new dd._Filter(_b1);
			this.reversed = _b2;
			this.nodelist = _b3;
			this.pool = [];
		}, {render: function (_b4, _b5) {
			var i, j, k;
			var _b6 = false;
			var _b7 = this.assign;
			for (k = 0; k < _b7.length; k++) {
				if (typeof _b4[_b7[k]] != "undefined") {
					_b6 = true;
					_b4 = _b4.push();
					break;
				}
			}
			if (!_b6 && _b4.forloop) {
				_b6 = true;
				_b4 = _b4.push();
			}
			var _b8 = this.loop.resolve(_b4) || [];
			for (i = _b8.length; i < this.pool.length; i++) {
				this.pool[i].unrender(_b4, _b5, this);
			}
			if (this.reversed) {
				_b8 = _b8.slice(0).reverse();
			}
			var _b9 = dojo.isObject(_b8) && !dojo.isArrayLike(_b8);
			var _ba = [];
			if (_b9) {
				for (var key in _b8) {
					_ba.push(_b8[key]);
				}
			} else {
				_ba = _b8;
			}
			var _bb = _b4.forloop = {parentloop: _b4.get("forloop", {})};
			var j = 0;
			for (i = 0; i < _ba.length; i++) {
				var _bc = _ba[i];
				_bb.counter0 = j;
				_bb.counter = j + 1;
				_bb.revcounter0 = _ba.length - j - 1;
				_bb.revcounter = _ba.length - j;
				_bb.first = !j;
				_bb.last = (j == _ba.length - 1);
				if (_b7.length > 1 && dojo.isArrayLike(_bc)) {
					if (!_b6) {
						_b6 = true;
						_b4 = _b4.push();
					}
					var _bd = {};
					for (k = 0; k < _bc.length && k < _b7.length; k++) {
						_bd[_b7[k]] = _bc[k];
					}
					dojo.mixin(_b4, _bd);
				} else {
					_b4[_b7[0]] = _bc;
				}
				if (j + 1 > this.pool.length) {
					this.pool.push(this.nodelist.clone(_b5));
				}
				_b5 = this.pool[j++].render(_b4, _b5, this);
			}
			delete _b4.forloop;
			if (_b6) {
				_b4 = _b4.pop();
			} else {
				for (k = 0; k < _b7.length; k++) {
					delete _b4[_b7[k]];
				}
			}
			return _b5;
		}, unrender: function (_be, _bf) {
			for (var i = 0, _c0; _c0 = this.pool[i]; i++) {
				_bf = _c0.unrender(_be, _bf);
			}
			return _bf;
		}, clone: function (_c1) {
			return new this.constructor(this.assign, this.loop.getExpression(), this.reversed, this.nodelist.clone(_c1));
		}});
		dojo.mixin(_92, {if_: function (_c2, _c3) {
			var i, _c4, _c5, _c6 = [], _c7 = _c3.contents.split();
			_c7.shift();
			_c3 = _c7.join(" ");
			_c7 = _c3.split(" and ");
			if (_c7.length == 1) {
				_c5 = "or";
				_c7 = _c3.split(" or ");
			} else {
				_c5 = "and";
				for (i = 0; i < _c7.length; i++) {
					if (_c7[i].indexOf(" or ") != -1) {
						throw new Error("'if' tags can't mix 'and' and 'or'");
					}
				}
			}
			for (i = 0; _c4 = _c7[i]; i++) {
				var not = false;
				if (_c4.indexOf("not ") == 0) {
					_c4 = _c4.slice(4);
					not = true;
				}
				_c6.push([not, new dd._Filter(_c4)]);
			}
			var _c8 = _c2.parse(["else", "endif"]);
			var _c9 = false;
			var _c3 = _c2.next_token();
			if (_c3.contents == "else") {
				_c9 = _c2.parse(["endif"]);
				_c2.next_token();
			}
			return new _92.IfNode(_c6, _c8, _c9, _c5);
		}, _ifequal: function (_ca, _cb, _cc) {
			var _cd = _cb.split_contents();
			if (_cd.length != 3) {
				throw new Error(_cd[0] + " takes two arguments");
			}
			var end = "end" + _cd[0];
			var _ce = _ca.parse(["else", end]);
			var _cf = false;
			var _cb = _ca.next_token();
			if (_cb.contents == "else") {
				_cf = _ca.parse([end]);
				_ca.next_token();
			}
			return new _92.IfEqualNode(_cd[1], _cd[2], _ce, _cf, _cc);
		}, ifequal: function (_d0, _d1) {
			return _92._ifequal(_d0, _d1);
		}, ifnotequal: function (_d2, _d3) {
			return _92._ifequal(_d2, _d3, true);
		}, for_: function (_d4, _d5) {
			var _d6 = _d5.contents.split();
			if (_d6.length < 4) {
				throw new Error("'for' statements should have at least four words: " + _d5.contents);
			}
			var _d7 = _d6[_d6.length - 1] == "reversed";
			var _d8 = (_d7) ? -3 : -2;
			if (_d6[_d6.length + _d8] != "in") {
				throw new Error("'for' tag received an invalid argument: " + _d5.contents);
			}
			var _d9 = _d6.slice(1, _d8).join(" ").split(/ *, */);
			for (var i = 0; i < _d9.length; i++) {
				if (!_d9[i] || _d9[i].indexOf(" ") != -1) {
					throw new Error("'for' tag received an invalid argument: " + _d5.contents);
				}
			}
			var _da = _d4.parse(["endfor"]);
			_d4.next_token();
			return new _92.ForNode(_d9, _d6[_d6.length + _d8 + 1], _d7, _da);
		}});
	})();
}
if (!dojo._hasResource["dojox.dtl.tag.loop"]) {
	dojo._hasResource["dojox.dtl.tag.loop"] = true;
	dojo.provide("dojox.dtl.tag.loop");
	(function () {
		var dd = dojox.dtl;
		var _db = dd.tag.loop;
		_db.CycleNode = dojo.extend(function (_dc, _dd, _de, _df) {
			this.cyclevars = _dc;
			this.name = _dd;
			this.contents = _de;
			this.shared = _df || {counter: -1, map: {}};
		}, {render: function (_e0, _e1) {
			if (_e0.forloop && !_e0.forloop.counter0) {
				this.shared.counter = -1;
			}
			++this.shared.counter;
			var _e2 = this.cyclevars[this.shared.counter % this.cyclevars.length];
			var map = this.shared.map;
			if (!map[_e2]) {
				map[_e2] = new dd._Filter(_e2);
			}
			_e2 = map[_e2].resolve(_e0, _e1);
			if (this.name) {
				_e0[this.name] = _e2;
			}
			this.contents.set(_e2);
			return this.contents.render(_e0, _e1);
		}, unrender: function (_e3, _e4) {
			return this.contents.unrender(_e3, _e4);
		}, clone: function (_e5) {
			return new this.constructor(this.cyclevars, this.name, this.contents.clone(_e5), this.shared);
		}});
		_db.IfChangedNode = dojo.extend(function (_e6, _e7, _e8) {
			this.nodes = _e6;
			this._vars = _e7;
			this.shared = _e8 || {last: null, counter: 0};
			this.vars = dojo.map(_e7, function (_e9) {
				return new dojox.dtl._Filter(_e9);
			});
		}, {render: function (_ea, _eb) {
			if (_ea.forloop) {
				if (_ea.forloop.counter <= this.shared.counter) {
					this.shared.last = null;
				}
				this.shared.counter = _ea.forloop.counter;
			}
			var _ec;
			if (this.vars.length) {
				_ec = dojo.toJson(dojo.map(this.vars, function (_ed) {
					return _ed.resolve(_ea);
				}));
			} else {
				_ec = this.nodes.dummyRender(_ea, _eb);
			}
			if (_ec != this.shared.last) {
				var _ee = (this.shared.last === null);
				this.shared.last = _ec;
				_ea = _ea.push();
				_ea.ifchanged = {firstloop: _ee};
				_eb = this.nodes.render(_ea, _eb);
				_ea = _ea.pop();
			} else {
				_eb = this.nodes.unrender(_ea, _eb);
			}
			return _eb;
		}, unrender: function (_ef, _f0) {
			return this.nodes.unrender(_ef, _f0);
		}, clone: function (_f1) {
			return new this.constructor(this.nodes.clone(_f1), this._vars, this.shared);
		}});
		_db.RegroupNode = dojo.extend(function (_f2, key, _f3) {
			this._expression = _f2;
			this.expression = new dd._Filter(_f2);
			this.key = key;
			this.alias = _f3;
		}, {_push: function (_f4, _f5, _f6) {
			if (_f6.length) {
				_f4.push({grouper: _f5, list: _f6});
			}
		}, render: function (_f7, _f8) {
			_f7[this.alias] = [];
			var _f9 = this.expression.resolve(_f7);
			if (_f9) {
				var _fa = null;
				var _fb = [];
				for (var i = 0; i < _f9.length; i++) {
					var id = _f9[i][this.key];
					if (_fa !== id) {
						this._push(_f7[this.alias], _fa, _fb);
						_fa = id;
						_fb = [_f9[i]];
					} else {
						_fb.push(_f9[i]);
					}
				}
				this._push(_f7[this.alias], _fa, _fb);
			}
			return _f8;
		}, unrender: function (_fc, _fd) {
			return _fd;
		}, clone: function (_fe, _ff) {
			return this;
		}});
		dojo.mixin(_db, {cycle: function (_100, _101) {
			var args = _101.split_contents();
			if (args.length < 2) {
				throw new Error("'cycle' tag requires at least two arguments");
			}
			if (args[1].indexOf(",") != -1) {
				var vars = args[1].split(",");
				args = [args[0]];
				for (var i = 0; i < vars.length; i++) {
					args.push("\"" + vars[i] + "\"");
				}
			}
			if (args.length == 2) {
				var name = args[args.length - 1];
				if (!_100._namedCycleNodes) {
					throw new Error("No named cycles in template: '" + name + "' is not defined");
				}
				if (!_100._namedCycleNodes[name]) {
					throw new Error("Named cycle '" + name + "' does not exist");
				}
				return _100._namedCycleNodes[name];
			}
			if (args.length > 4 && args[args.length - 2] == "as") {
				var name = args[args.length - 1];
				var node = new _db.CycleNode(args.slice(1, args.length - 2), name, _100.create_text_node());
				if (!_100._namedCycleNodes) {
					_100._namedCycleNodes = {};
				}
				_100._namedCycleNodes[name] = node;
			} else {
				node = new _db.CycleNode(args.slice(1), null, _100.create_text_node());
			}
			return node;
		}, ifchanged: function (_102, _103) {
			var _104 = _103.contents.split();
			var _105 = _102.parse(["endifchanged"]);
			_102.delete_first_token();
			return new _db.IfChangedNode(_105, _104.slice(1));
		}, regroup: function (_106, _107) {
			var _108 = dojox.string.tokenize(_107.contents, /(\s+)/g, function (_109) {
				return _109;
			});
			if (_108.length < 11 || _108[_108.length - 3] != "as" || _108[_108.length - 7] != "by") {
				throw new Error("Expected the format: regroup list by key as newList");
			}
			var _10a = _108.slice(2, -8).join("");
			var key = _108[_108.length - 5];
			var _10b = _108[_108.length - 1];
			return new _db.RegroupNode(_10a, key, _10b);
		}});
	})();
}
if (!dojo._hasResource["dojo.date"]) {
	dojo._hasResource["dojo.date"] = true;
	dojo.provide("dojo.date");
	dojo.getObject("date", true, dojo);
	dojo.date.getDaysInMonth = function (_10c) {
		var _10d = _10c.getMonth();
		var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if (_10d == 1 && dojo.date.isLeapYear(_10c)) {
			return 29;
		}
		return days[_10d];
	};
	dojo.date.isLeapYear = function (_10e) {
		var year = _10e.getFullYear();
		return !(year % 400) || (!(year % 4) && !!(year % 100));
	};
	dojo.date.getTimezoneName = function (_10f) {
		var str = _10f.toString();
		var tz = "";
		var _110;
		var pos = str.indexOf("(");
		if (pos > -1) {
			tz = str.substring(++pos, str.indexOf(")"));
		} else {
			var pat = /([A-Z\/]+) \d{4}$/;
			if ((_110 = str.match(pat))) {
				tz = _110[1];
			} else {
				str = _10f.toLocaleString();
				pat = / ([A-Z\/]+)$/;
				if ((_110 = str.match(pat))) {
					tz = _110[1];
				}
			}
		}
		return (tz == "AM" || tz == "PM") ? "" : tz;
	};
	dojo.date.compare = function (_111, _112, _113) {
		_111 = new Date(+_111);
		_112 = new Date(+(_112 || new Date()));
		if (_113 == "date") {
			_111.setHours(0, 0, 0, 0);
			_112.setHours(0, 0, 0, 0);
		} else {
			if (_113 == "time") {
				_111.setFullYear(0, 0, 0);
				_112.setFullYear(0, 0, 0);
			}
		}
		if (_111 > _112) {
			return 1;
		}
		if (_111 < _112) {
			return -1;
		}
		return 0;
	};
	dojo.date.add = function (date, _114, _115) {
		var sum = new Date(+date);
		var _116 = false;
		var _117 = "Date";
		switch (_114) {
			case "day":
				break;
			case "weekday":
				var days, _118;
				var mod = _115 % 5;
				if (!mod) {
					days = (_115 > 0) ? 5 : -5;
					_118 = (_115 > 0) ? ((_115 - 5) / 5) : ((_115 + 5) / 5);
				} else {
					days = mod;
					_118 = parseInt(_115 / 5);
				}
				var strt = date.getDay();
				var adj = 0;
				if (strt == 6 && _115 > 0) {
					adj = 1;
				} else {
					if (strt == 0 && _115 < 0) {
						adj = -1;
					}
				}
				var trgt = strt + days;
				if (trgt == 0 || trgt == 6) {
					adj = (_115 > 0) ? 2 : -2;
				}
				_115 = (7 * _118) + days + adj;
				break;
			case "year":
				_117 = "FullYear";
				_116 = true;
				break;
			case "week":
				_115 *= 7;
				break;
			case "quarter":
				_115 *= 3;
			case "month":
				_116 = true;
				_117 = "Month";
				break;
			default:
				_117 = "UTC" + _114.charAt(0).toUpperCase() + _114.substring(1) + "s";
		}
		if (_117) {
			sum["set" + _117](sum["get" + _117]() + _115);
		}
		if (_116 && (sum.getDate() < date.getDate())) {
			sum.setDate(0);
		}
		return sum;
	};
	dojo.date.difference = function (_119, _11a, _11b) {
		_11a = _11a || new Date();
		_11b = _11b || "day";
		var _11c = _11a.getFullYear() - _119.getFullYear();
		var _11d = 1;
		switch (_11b) {
			case "quarter":
				var m1 = _119.getMonth();
				var m2 = _11a.getMonth();
				var q1 = Math.floor(m1 / 3) + 1;
				var q2 = Math.floor(m2 / 3) + 1;
				q2 += (_11c * 4);
				_11d = q2 - q1;
				break;
			case "weekday":
				var days = Math.round(dojo.date.difference(_119, _11a, "day"));
				var _11e = parseInt(dojo.date.difference(_119, _11a, "week"));
				var mod = days % 7;
				if (mod == 0) {
					days = _11e * 5;
				} else {
					var adj = 0;
					var aDay = _119.getDay();
					var bDay = _11a.getDay();
					_11e = parseInt(days / 7);
					mod = days % 7;
					var _11f = new Date(_119);
					_11f.setDate(_11f.getDate() + (_11e * 7));
					var _120 = _11f.getDay();
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
							case (_120 + mod) > 5:
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
								case (_120 + mod) < 0:
									adj = 2;
							}
						}
					}
					days += adj;
					days -= (_11e * 2);
				}
				_11d = days;
				break;
			case "year":
				_11d = _11c;
				break;
			case "month":
				_11d = (_11a.getMonth() - _119.getMonth()) + (_11c * 12);
				break;
			case "week":
				_11d = parseInt(dojo.date.difference(_119, _11a, "day") / 7);
				break;
			case "day":
				_11d /= 24;
			case "hour":
				_11d /= 60;
			case "minute":
				_11d /= 60;
			case "second":
				_11d /= 1000;
			case "millisecond":
				_11d *= _11a.getTime() - _119.getTime();
		}
		return Math.round(_11d);
	};
}
if (!dojo._hasResource["dojox.date.php"]) {
	dojo._hasResource["dojox.date.php"] = true;
	dojo.provide("dojox.date.php");
	dojox.date.php.format = function (date, _121) {
		var df = new dojox.date.php.DateFormat(_121);
		return df.format(date);
	};
	dojox.date.php.DateFormat = function (_122) {
		if (!this.regex) {
			var keys = [];
			for (var key in this.constructor.prototype) {
				if (dojo.isString(key) && key.length == 1 && dojo.isFunction(this[key])) {
					keys.push(key);
				}
			}
			this.constructor.prototype.regex = new RegExp("(?:(\\\\.)|([" + keys.join("") + "]))", "g");
		}
		var _123 = [];
		this.tokens = dojox.string.tokenize(_122, this.regex, function (_124, _125, i) {
			if (_125) {
				_123.push([i, _125]);
				return _125;
			}
			if (_124) {
				return _124.charAt(1);
			}
		});
		this.replacements = _123;
	};
	dojo.extend(dojox.date.php.DateFormat, {weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdays_3: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], months_3: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], monthdays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], format: function (date) {
		this.date = date;
		for (var i = 0, _126; _126 = this.replacements[i]; i++) {
			this.tokens[_126[0]] = this[_126[1]]();
		}
		return this.tokens.join("");
	}, d: function () {
		var j = this.j();
		return (j.length == 1) ? "0" + j : j;
	}, D: function () {
		return this.weekdays_3[this.date.getDay()];
	}, j: function () {
		return this.date.getDate() + "";
	}, l: function () {
		return this.weekdays[this.date.getDay()];
	}, N: function () {
		var w = this.w();
		return (!w) ? 7 : w;
	}, S: function () {
		switch (this.date.getDate()) {
			case 11:
			case 12:
			case 13:
				return "th";
			case 1:
			case 21:
			case 31:
				return "st";
			case 2:
			case 22:
				return "nd";
			case 3:
			case 23:
				return "rd";
			default:
				return "th";
		}
	}, w: function () {
		return this.date.getDay() + "";
	}, z: function () {
		var _127 = this.date.getTime() - new Date(this.date.getFullYear(), 0, 1).getTime();
		return Math.floor(_127 / 86400000) + "";
	}, W: function () {
		var week;
		var _128 = new Date(this.date.getFullYear(), 0, 1).getDay() + 1;
		var w = this.date.getDay() + 1;
		var z = parseInt(this.z());
		if (z <= (8 - _128) && _128 > 4) {
			var _129 = new Date(this.date.getFullYear() - 1, this.date.getMonth(), this.date.getDate());
			if (_128 == 5 || (_128 == 6 && dojo.date.isLeapYear(_129))) {
				week = 53;
			} else {
				week = 52;
			}
		} else {
			var i;
			if (Boolean(this.L())) {
				i = 366;
			} else {
				i = 365;
			}
			if ((i - z) < (4 - w)) {
				week = 1;
			} else {
				var j = z + (7 - w) + (_128 - 1);
				week = Math.ceil(j / 7);
				if (_128 > 4) {
					--week;
				}
			}
		}
		return week;
	}, F: function () {
		return this.months[this.date.getMonth()];
	}, m: function () {
		var n = this.n();
		return (n.length == 1) ? "0" + n : n;
	}, M: function () {
		return this.months_3[this.date.getMonth()];
	}, n: function () {
		return this.date.getMonth() + 1 + "";
	}, t: function () {
		return (Boolean(this.L()) && this.date.getMonth() == 1) ? 29 : this.monthdays[this.getMonth()];
	}, L: function () {
		return (dojo.date.isLeapYear(this.date)) ? "1" : "0";
	}, o: function () {
	}, Y: function () {
		return this.date.getFullYear() + "";
	}, y: function () {
		return this.Y().slice(-2);
	}, a: function () {
		return this.date.getHours() >= 12 ? "pm" : "am";
	}, b: function () {
		return this.a().toUpperCase();
	}, B: function () {
		var off = this.date.getTimezoneOffset() + 60;
		var secs = (this.date.getHours() * 3600) + (this.date.getMinutes() * 60) + this.getSeconds() + (off * 60);
		var beat = Math.abs(Math.floor(secs / 86.4) % 1000) + "";
		while (beat.length < 2) {
			beat = "0" + beat;
		}
		return beat;
	}, g: function () {
		return (this.date.getHours() > 12) ? this.date.getHours() - 12 + "" : this.date.getHours() + "";
	}, G: function () {
		return this.date.getHours() + "";
	}, h: function () {
		var g = this.g();
		return (g.length == 1) ? "0" + g : g;
	}, H: function () {
		var G = this.G();
		return (G.length == 1) ? "0" + G : G;
	}, i: function () {
		var mins = this.date.getMinutes() + "";
		return (mins.length == 1) ? "0" + mins : mins;
	}, s: function () {
		var secs = this.date.getSeconds() + "";
		return (secs.length == 1) ? "0" + secs : secs;
	}, e: function () {
		return dojo.date.getTimezoneName(this.date);
	}, I: function () {
	}, O: function () {
		var off = Math.abs(this.date.getTimezoneOffset());
		var _12a = Math.floor(off / 60) + "";
		var mins = (off % 60) + "";
		if (_12a.length == 1) {
			_12a = "0" + _12a;
		}
		if (mins.length == 1) {
			_12a = "0" + mins;
		}
		return ((this.date.getTimezoneOffset() < 0) ? "+" : "-") + _12a + mins;
	}, P: function () {
		var O = this.O();
		return O.substring(0, 2) + ":" + O.substring(2, 4);
	}, T: function () {
		return this.e().substring(0, 3);
	}, Z: function () {
		return this.date.getTimezoneOffset() * -60;
	}, c: function () {
		return this.Y() + "-" + this.m() + "-" + this.d() + "T" + this.h() + ":" + this.i() + ":" + this.s() + this.P();
	}, r: function () {
		return this.D() + ", " + this.d() + " " + this.M() + " " + this.Y() + " " + this.H() + ":" + this.i() + ":" + this.s() + " " + this.O();
	}, U: function () {
		return Math.floor(this.date.getTime() / 1000);
	}});
}
if (!dojo._hasResource["dojox.dtl.utils.date"]) {
	dojo._hasResource["dojox.dtl.utils.date"] = true;
	dojo.provide("dojox.dtl.utils.date");
	dojox.dtl.utils.date.DateFormat = function (_12b) {
		dojox.date.php.DateFormat.call(this, _12b);
	};
	dojo.extend(dojox.dtl.utils.date.DateFormat, dojox.date.php.DateFormat.prototype, {f: function () {
		return (!this.date.getMinutes()) ? this.g() : this.g() + ":" + this.i();
	}, N: function () {
		return dojox.dtl.utils.date._months_ap[this.date.getMonth()];
	}, P: function () {
		if (!this.date.getMinutes() && !this.date.getHours()) {
			return "midnight";
		}
		if (!this.date.getMinutes() && this.date.getHours() == 12) {
			return "noon";
		}
		return this.f() + " " + this.a();
	}});
	dojo.mixin(dojox.dtl.utils.date, {format: function (date, _12c) {
		var df = new dojox.dtl.utils.date.DateFormat(_12c);
		return df.format(date);
	}, timesince: function (d, now) {
		if (!(d instanceof Date)) {
			d = new Date(d.year, d.month, d.day);
		}
		if (!now) {
			now = new Date();
		}
		var _12d = Math.abs(now.getTime() - d.getTime());
		for (var i = 0, _12e; _12e = dojox.dtl.utils.date._chunks[i]; i++) {
			var _12f = Math.floor(_12d / _12e[0]);
			if (_12f) {
				break;
			}
		}
		return _12f + " " + _12e[1](_12f);
	}, _chunks: [
		[60 * 60 * 24 * 365 * 1000, function (n) {
			return (n == 1) ? "year" : "years";
		}],
		[60 * 60 * 24 * 30 * 1000, function (n) {
			return (n == 1) ? "month" : "months";
		}],
		[60 * 60 * 24 * 7 * 1000, function (n) {
			return (n == 1) ? "week" : "weeks";
		}],
		[60 * 60 * 24 * 1000, function (n) {
			return (n == 1) ? "day" : "days";
		}],
		[60 * 60 * 1000, function (n) {
			return (n == 1) ? "hour" : "hours";
		}],
		[60 * 1000, function (n) {
			return (n == 1) ? "minute" : "minutes";
		}]
	], _months_ap: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]});
}
if (!dojo._hasResource["dojox.dtl.tag.date"]) {
	dojo._hasResource["dojox.dtl.tag.date"] = true;
	dojo.provide("dojox.dtl.tag.date");
	dojox.dtl.tag.date.NowNode = function (_130, node) {
		this._format = _130;
		this.format = new dojox.dtl.utils.date.DateFormat(_130);
		this.contents = node;
	};
	dojo.extend(dojox.dtl.tag.date.NowNode, {render: function (_131, _132) {
		this.contents.set(this.format.format(new Date()));
		return this.contents.render(_131, _132);
	}, unrender: function (_133, _134) {
		return this.contents.unrender(_133, _134);
	}, clone: function (_135) {
		return new this.constructor(this._format, this.contents.clone(_135));
	}});
	dojox.dtl.tag.date.now = function (_136, _137) {
		var _138 = _137.split_contents();
		if (_138.length != 2) {
			throw new Error("'now' statement takes one argument");
		}
		return new dojox.dtl.tag.date.NowNode(_138[1].slice(1, -1), _136.create_text_node());
	};
}
if (!dojo._hasResource["dojox.dtl.tag.loader"]) {
	dojo._hasResource["dojox.dtl.tag.loader"] = true;
	dojo.provide("dojox.dtl.tag.loader");
	(function () {
		var dd = dojox.dtl;
		var ddtl = dd.tag.loader;
		ddtl.BlockNode = dojo.extend(function (name, _139) {
			this.name = name;
			this.nodelist = _139;
		}, {"super": function () {
			if (this.parent) {
				var html = this.parent.nodelist.dummyRender(this.context, null, true);
				if (typeof html == "string") {
					html = new String(html);
				}
				html.safe = true;
				return html;
			}
			return "";
		}, render: function (_13a, _13b) {
			var name = this.name;
			var _13c = this.nodelist;
			var _13d;
			if (_13b.blocks) {
				var _13e = _13b.blocks[name];
				if (_13e) {
					_13d = _13e.parent;
					_13c = _13e.nodelist;
					_13e.used = true;
				}
			}
			this.rendered = _13c;
			_13a = _13a.push();
			this.context = _13a;
			this.parent = null;
			if (_13c != this.nodelist) {
				this.parent = this;
			}
			_13a.block = this;
			if (_13b.getParent) {
				var _13f = _13b.getParent();
				var _140 = dojo.connect(_13b, "onSetParent", function (node, up, root) {
					if (up && root) {
						_13b.setParent(_13f);
					}
				});
			}
			_13b = _13c.render(_13a, _13b, this);
			_140 && dojo.disconnect(_140);
			_13a = _13a.pop();
			return _13b;
		}, unrender: function (_141, _142) {
			return this.rendered.unrender(_141, _142);
		}, clone: function (_143) {
			return new this.constructor(this.name, this.nodelist.clone(_143));
		}, toString: function () {
			return "dojox.dtl.tag.loader.BlockNode";
		}});
		ddtl.ExtendsNode = dojo.extend(function (_144, _145, _146, _147, key) {
			this.getTemplate = _144;
			this.nodelist = _145;
			this.shared = _146;
			this.parent = _147;
			this.key = key;
		}, {parents: {}, getParent: function (_148) {
			var _149 = this.parent;
			if (!_149) {
				var _14a;
				_149 = this.parent = _148.get(this.key, false);
				if (!_149) {
					throw new Error("extends tag used a variable that did not resolve");
				}
				if (typeof _149 == "object") {
					var url = _149.url || _149.templatePath;
					if (_149.shared) {
						this.shared = true;
					}
					if (url) {
						_149 = this.parent = url.toString();
					} else {
						if (_149.templateString) {
							_14a = _149.templateString;
							_149 = this.parent = " ";
						} else {
							_149 = this.parent = this.parent.toString();
						}
					}
				}
				if (_149 && _149.indexOf("shared:") === 0) {
					this.shared = true;
					_149 = this.parent = _149.substring(7, _149.length);
				}
			}
			if (!_149) {
				throw new Error("Invalid template name in 'extends' tag.");
			}
			if (_149.render) {
				return _149;
			}
			if (this.parents[_149]) {
				return this.parents[_149];
			}
			this.parent = this.getTemplate(_14a || dojox.dtl.text.getTemplateString(_149));
			if (this.shared) {
				this.parents[_149] = this.parent;
			}
			return this.parent;
		}, render: function (_14b, _14c) {
			var _14d = this.getParent(_14b);
			_14d.blocks = _14d.blocks || {};
			_14c.blocks = _14c.blocks || {};
			for (var i = 0, node; node = this.nodelist.contents[i]; i++) {
				if (node instanceof dojox.dtl.tag.loader.BlockNode) {
					var old = _14d.blocks[node.name];
					if (old && old.nodelist != node.nodelist) {
						_14c = old.nodelist.unrender(_14b, _14c);
					}
					_14d.blocks[node.name] = _14c.blocks[node.name] = {shared: this.shared, nodelist: node.nodelist, used: false};
				}
			}
			this.rendered = _14d;
			return _14d.nodelist.render(_14b, _14c, this);
		}, unrender: function (_14e, _14f) {
			return this.rendered.unrender(_14e, _14f, this);
		}, toString: function () {
			return "dojox.dtl.block.ExtendsNode";
		}});
		ddtl.IncludeNode = dojo.extend(function (path, _150, _151, text, _152) {
			this._path = path;
			this.constant = _150;
			this.path = (_150) ? path : new dd._Filter(path);
			this.getTemplate = _151;
			this.text = text;
			this.parsed = (arguments.length == 5) ? _152 : true;
		}, {_cache: [
			{},
			{}
		], render: function (_153, _154) {
			var _155 = ((this.constant) ? this.path : this.path.resolve(_153)).toString();
			var _156 = Number(this.parsed);
			var _157 = false;
			if (_155 != this.last) {
				_157 = true;
				if (this.last) {
					_154 = this.unrender(_153, _154);
				}
				this.last = _155;
			}
			var _158 = this._cache[_156];
			if (_156) {
				if (!_158[_155]) {
					_158[_155] = dd.text._resolveTemplateArg(_155, true);
				}
				if (_157) {
					var _159 = this.getTemplate(_158[_155]);
					this.rendered = _159.nodelist;
				}
				return this.rendered.render(_153, _154, this);
			} else {
				if (this.text instanceof dd._TextNode) {
					if (_157) {
						this.rendered = this.text;
						this.rendered.set(dd.text._resolveTemplateArg(_155, true));
					}
					return this.rendered.render(_153, _154);
				} else {
					if (!_158[_155]) {
						var _15a = [];
						var div = document.createElement("div");
						div.innerHTML = dd.text._resolveTemplateArg(_155, true);
						var _15b = div.childNodes;
						while (_15b.length) {
							var _15c = div.removeChild(_15b[0]);
							_15a.push(_15c);
						}
						_158[_155] = _15a;
					}
					if (_157) {
						this.nodelist = [];
						var _15d = true;
						for (var i = 0, _15e; _15e = _158[_155][i]; i++) {
							this.nodelist.push(_15e.cloneNode(true));
						}
					}
					for (var i = 0, node; node = this.nodelist[i]; i++) {
						_154 = _154.concat(node);
					}
				}
			}
			return _154;
		}, unrender: function (_15f, _160) {
			if (this.rendered) {
				_160 = this.rendered.unrender(_15f, _160);
			}
			if (this.nodelist) {
				for (var i = 0, node; node = this.nodelist[i]; i++) {
					_160 = _160.remove(node);
				}
			}
			return _160;
		}, clone: function (_161) {
			return new this.constructor(this._path, this.constant, this.getTemplate, this.text.clone(_161), this.parsed);
		}});
		dojo.mixin(ddtl, {block: function (_162, _163) {
			var _164 = _163.contents.split();
			var name = _164[1];
			_162._blocks = _162._blocks || {};
			_162._blocks[name] = _162._blocks[name] || [];
			_162._blocks[name].push(name);
			var _165 = _162.parse(["endblock", "endblock " + name]).rtrim();
			_162.next_token();
			return new dojox.dtl.tag.loader.BlockNode(name, _165);
		}, extends_: function (_166, _167) {
			var _168 = _167.contents.split();
			var _169 = false;
			var _16a = null;
			var key = null;
			if (_168[1].charAt(0) == "\"" || _168[1].charAt(0) == "'") {
				_16a = _168[1].substring(1, _168[1].length - 1);
			} else {
				key = _168[1];
			}
			if (_16a && _16a.indexOf("shared:") == 0) {
				_169 = true;
				_16a = _16a.substring(7, _16a.length);
			}
			var _16b = _166.parse();
			return new dojox.dtl.tag.loader.ExtendsNode(_166.getTemplate, _16b, _169, _16a, key);
		}, include: function (_16c, _16d) {
			var _16e = _16d.contents.split();
			if (_16e.length != 2) {
				throw new Error(_16e[0] + " tag takes one argument: the name of the template to be included");
			}
			var path = _16e[1];
			var _16f = false;
			if ((path.charAt(0) == "\"" || path.slice(-1) == "'") && path.charAt(0) == path.slice(-1)) {
				path = path.slice(1, -1);
				_16f = true;
			}
			return new ddtl.IncludeNode(path, _16f, _16c.getTemplate, _16c.create_text_node());
		}, ssi: function (_170, _171) {
			var _172 = _171.contents.split();
			var _173 = false;
			if (_172.length == 3) {
				_173 = (_172.pop() == "parsed");
				if (!_173) {
					throw new Error("Second (optional) argument to ssi tag must be 'parsed'");
				}
			}
			var node = ddtl.include(_170, new dd.Token(_171.token_type, _172.join(" ")));
			node.parsed = _173;
			return node;
		}});
	})();
}
if (!dojo._hasResource["dojox.dtl.tag.misc"]) {
	dojo._hasResource["dojox.dtl.tag.misc"] = true;
	dojo.provide("dojox.dtl.tag.misc");
	(function () {
		var dd = dojox.dtl;
		var ddtm = dd.tag.misc;
		ddtm.DebugNode = dojo.extend(function (text) {
			this.text = text;
		}, {render: function (_174, _175) {
			var keys = _174.getKeys();
			var _176 = [];
			var only = {};
			for (var i = 0, key; key = keys[i]; i++) {
				only[key] = _174[key];
				_176 += "[" + key + ": " + typeof _174[key] + "]\n";
			}
			return this.text.set(_176).render(_174, _175, this);
		}, unrender: function (_177, _178) {
			return _178;
		}, clone: function (_179) {
			return new this.constructor(this.text.clone(_179));
		}, toString: function () {
			return "ddtm.DebugNode";
		}});
		ddtm.FilterNode = dojo.extend(function (_17a, _17b) {
			this._varnode = _17a;
			this._nodelist = _17b;
		}, {render: function (_17c, _17d) {
			var _17e = this._nodelist.render(_17c, new dojox.string.Builder());
			_17c = _17c.update({"var": _17e.toString()});
			var _17f = this._varnode.render(_17c, _17d);
			_17c = _17c.pop();
			return _17d;
		}, unrender: function (_180, _181) {
			return _181;
		}, clone: function (_182) {
			return new this.constructor(this._expression, this._nodelist.clone(_182));
		}});
		ddtm.FirstOfNode = dojo.extend(function (vars, text) {
			this._vars = vars;
			this.vars = dojo.map(vars, function (item) {
				return new dojox.dtl._Filter(item);
			});
			this.contents = text;
		}, {render: function (_183, _184) {
			for (var i = 0, item; item = this.vars[i]; i++) {
				var _185 = item.resolve(_183);
				if (typeof _185 != "undefined") {
					if (_185 === null) {
						_185 = "null";
					}
					this.contents.set(_185);
					return this.contents.render(_183, _184);
				}
			}
			return this.contents.unrender(_183, _184);
		}, unrender: function (_186, _187) {
			return this.contents.unrender(_186, _187);
		}, clone: function (_188) {
			return new this.constructor(this._vars, this.contents.clone(_188));
		}});
		ddtm.SpacelessNode = dojo.extend(function (_189, text) {
			this.nodelist = _189;
			this.contents = text;
		}, {render: function (_18a, _18b) {
			if (_18b.getParent) {
				var _18c = [dojo.connect(_18b, "onAddNodeComplete", this, "_watch"), dojo.connect(_18b, "onSetParent", this, "_watchParent")];
				_18b = this.nodelist.render(_18a, _18b);
				dojo.disconnect(_18c[0]);
				dojo.disconnect(_18c[1]);
			} else {
				var _18d = this.nodelist.dummyRender(_18a);
				this.contents.set(_18d.replace(/>\s+</g, "><"));
				_18b = this.contents.render(_18a, _18b);
			}
			return _18b;
		}, unrender: function (_18e, _18f) {
			return this.nodelist.unrender(_18e, _18f);
		}, clone: function (_190) {
			return new this.constructor(this.nodelist.clone(_190), this.contents.clone(_190));
		}, _isEmpty: function (node) {
			return (node.nodeType == 3 && !node.data.match(/[^\s\n]/));
		}, _watch: function (node) {
			if (this._isEmpty(node)) {
				var _191 = false;
				if (node.parentNode.firstChild == node) {
					node.parentNode.removeChild(node);
				}
			} else {
				var _192 = node.parentNode.childNodes;
				if (node.nodeType == 1 && _192.length > 2) {
					for (var i = 2, _193; _193 = _192[i]; i++) {
						if (_192[i - 2].nodeType == 1 && this._isEmpty(_192[i - 1])) {
							node.parentNode.removeChild(_192[i - 1]);
							return;
						}
					}
				}
			}
		}, _watchParent: function (node) {
			var _194 = node.childNodes;
			if (_194.length) {
				while (node.childNodes.length) {
					var last = node.childNodes[node.childNodes.length - 1];
					if (!this._isEmpty(last)) {
						return;
					}
					node.removeChild(last);
				}
			}
		}});
		ddtm.TemplateTagNode = dojo.extend(function (tag, text) {
			this.tag = tag;
			this.contents = text;
		}, {mapping: {openblock: "{%", closeblock: "%}", openvariable: "{{", closevariable: "}}", openbrace: "{", closebrace: "}", opencomment: "{#", closecomment: "#}"}, render: function (_195, _196) {
			this.contents.set(this.mapping[this.tag]);
			return this.contents.render(_195, _196);
		}, unrender: function (_197, _198) {
			return this.contents.unrender(_197, _198);
		}, clone: function (_199) {
			return new this.constructor(this.tag, this.contents.clone(_199));
		}});
		ddtm.WidthRatioNode = dojo.extend(function (_19a, max, _19b, text) {
			this.current = new dd._Filter(_19a);
			this.max = new dd._Filter(max);
			this.width = _19b;
			this.contents = text;
		}, {render: function (_19c, _19d) {
			var _19e = +this.current.resolve(_19c);
			var max = +this.max.resolve(_19c);
			if (typeof _19e != "number" || typeof max != "number" || !max) {
				this.contents.set("");
			} else {
				this.contents.set("" + Math.round((_19e / max) * this.width));
			}
			return this.contents.render(_19c, _19d);
		}, unrender: function (_19f, _1a0) {
			return this.contents.unrender(_19f, _1a0);
		}, clone: function (_1a1) {
			return new this.constructor(this.current.getExpression(), this.max.getExpression(), this.width, this.contents.clone(_1a1));
		}});
		ddtm.WithNode = dojo.extend(function (_1a2, _1a3, _1a4) {
			this.target = new dd._Filter(_1a2);
			this.alias = _1a3;
			this.nodelist = _1a4;
		}, {render: function (_1a5, _1a6) {
			var _1a7 = this.target.resolve(_1a5);
			_1a5 = _1a5.push();
			_1a5[this.alias] = _1a7;
			_1a6 = this.nodelist.render(_1a5, _1a6);
			_1a5 = _1a5.pop();
			return _1a6;
		}, unrender: function (_1a8, _1a9) {
			return _1a9;
		}, clone: function (_1aa) {
			return new this.constructor(this.target.getExpression(), this.alias, this.nodelist.clone(_1aa));
		}});
		dojo.mixin(ddtm, {comment: function (_1ab, _1ac) {
			_1ab.skip_past("endcomment");
			return dd._noOpNode;
		}, debug: function (_1ad, _1ae) {
			return new ddtm.DebugNode(_1ad.create_text_node());
		}, filter: function (_1af, _1b0) {
			var rest = _1b0.contents.split(null, 1)[1];
			var _1b1 = _1af.create_variable_node("var|" + rest);
			var _1b2 = _1af.parse(["endfilter"]);
			_1af.next_token();
			return new ddtm.FilterNode(_1b1, _1b2);
		}, firstof: function (_1b3, _1b4) {
			var _1b5 = _1b4.split_contents().slice(1);
			if (!_1b5.length) {
				throw new Error("'firstof' statement requires at least one argument");
			}
			return new ddtm.FirstOfNode(_1b5, _1b3.create_text_node());
		}, spaceless: function (_1b6, _1b7) {
			var _1b8 = _1b6.parse(["endspaceless"]);
			_1b6.delete_first_token();
			return new ddtm.SpacelessNode(_1b8, _1b6.create_text_node());
		}, templatetag: function (_1b9, _1ba) {
			var _1bb = _1ba.contents.split();
			if (_1bb.length != 2) {
				throw new Error("'templatetag' statement takes one argument");
			}
			var tag = _1bb[1];
			var _1bc = ddtm.TemplateTagNode.prototype.mapping;
			if (!_1bc[tag]) {
				var keys = [];
				for (var key in _1bc) {
					keys.push(key);
				}
				throw new Error("Invalid templatetag argument: '" + tag + "'. Must be one of: " + keys.join(", "));
			}
			return new ddtm.TemplateTagNode(tag, _1b9.create_text_node());
		}, widthratio: function (_1bd, _1be) {
			var _1bf = _1be.contents.split();
			if (_1bf.length != 4) {
				throw new Error("widthratio takes three arguments");
			}
			var _1c0 = +_1bf[3];
			if (typeof _1c0 != "number") {
				throw new Error("widthratio final argument must be an integer");
			}
			return new ddtm.WidthRatioNode(_1bf[1], _1bf[2], _1c0, _1bd.create_text_node());
		}, with_: function (_1c1, _1c2) {
			var _1c3 = _1c2.split_contents();
			if (_1c3.length != 4 || _1c3[2] != "as") {
				throw new Error("do_width expected format as 'with value as name'");
			}
			var _1c4 = _1c1.parse(["endwith"]);
			_1c1.next_token();
			return new ddtm.WithNode(_1c3[1], _1c3[3], _1c4);
		}});
	})();
}
if (!dojo._hasResource["dojox.dtl.ext-dojo.NodeList"]) {
	dojo._hasResource["dojox.dtl.ext-dojo.NodeList"] = true;
	dojo.provide("dojox.dtl.ext-dojo.NodeList");
	dojo.extend(dojo.NodeList, {dtl: function (_1c5, _1c6) {
		var d = dojox.dtl;
		var self = this;
		var _1c7 = function (_1c8, _1c9) {
			var _1ca = _1c8.render(new d._Context(_1c9));
			self.forEach(function (node) {
				node.innerHTML = _1ca;
			});
		};
		d.text._resolveTemplateArg(_1c5).addCallback(function (_1cb) {
			_1c5 = new d.Template(_1cb);
			d.text._resolveContextArg(_1c6).addCallback(function (_1cc) {
				_1c7(_1c5, _1cc);
			});
		});
		return this;
	}});
}
