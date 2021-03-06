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

dojo._xdResourceLoaded(function (_1, _2, _3) {
	return {
		depends: [
			["provide", "dojo.Bookmarklet"],
			["provide", "dojo.io.iframe"],
			["provide", "pundit.BaseComponent"],
			["provide", "pundit.Crypto"],
			["provide", "pundit.BasePanel"],
			["provide", "pundit.NamespaceHelper"],
			["provide", "dojo.io.script"],
			["provide", "dojo.dnd.common"],
			["provide", "dojo.window"],
			["provide", "dojo.dnd.autoscroll"],
			["provide", "dojo.dnd.Mover"],
			["provide", "dojo.dnd.Moveable"],
			["provide", "dojo.dnd.move"],
			["provide", "dojo.dnd.TimedMoveable"],
			["provide", "dojo.fx.Toggler"],
			["provide", "dojo.fx"],
			["provide", "dijit._base.manager"],
			["provide", "dojo.Stateful"],
			["provide", "dijit._WidgetBase"],
			["provide", "dijit._base.focus"],
			["provide", "dojo.AdapterRegistry"],
			["provide", "dijit._base.place"],
			["provide", "dijit._base.window"],
			["provide", "dijit._base.popup"],
			["provide", "dijit._base.scroll"],
			["provide", "dojo.uacss"],
			["provide", "dijit._base.sniff"],
			["provide", "dijit._base.typematic"],
			["provide", "dijit._base.wai"],
			["provide", "dijit._base"],
			["provide", "dijit._Widget"],
			["provide", "dojo.string"],
			["provide", "dojo.date.stamp"],
			["provide", "dojo.parser"],
			["provide", "dojo.cache"],
			["provide", "dijit._Templated"],
			["provide", "dijit._CssStateMixin"],
			["provide", "dijit.form._FormMixin"],
			["provide", "dijit._DialogMixin"],
			["provide", "dijit.DialogUnderlay"],
			["provide", "dijit._Contained"],
			["provide", "dijit._Container"],
			["provide", "dijit.layout._LayoutWidget"],
			["provide", "dijit.layout._ContentPaneResizeMixin"],
			["provide", "dojo.html"],
			["provide", "dijit.layout.ContentPane"],
			["provide", "dijit.TooltipDialog"],
			["provide", "dijit.Dialog"],
			["provide", "dojo.regexp"],
			["provide", "dojo.cookie"],
			["provide", "dijit.layout.BorderContainer"],
			["provide", "dojo.behavior"],
			["provide", "dojo.NodeList-traverse"],
			["provide", "dojo.dnd.Container"],
			["provide", "dojo.dnd.Selector"],
			["provide", "dojo.dnd.Avatar"],
			["provide", "dojo.dnd.Manager"],
			["provide", "dojo.dnd.Source"],
			["provide", "dojox.fx._base"],
			["provide", "dojox.fx"],
			["provide", "pundit.TripleComposer"],
			["provide", "pundit.AnnotationReader"],
			["provide", "pundit.AnnotationWriter"],
			["provide", "dojo.NodeList-manipulate"],
			["provide", "pundit.TextFragmentHandler"],
			["provide", "dojox.layout.DragPane"],
			["provide", "dojox.fx._core"],
			["provide", "dojox.fx.scroll"],
			["provide", "pundit.TooltipAnnotationViewer"],
			["provide", "pundit.TriplesBucket"],
			["provide", "dojo.data.util.filter"],
			["provide", "dojo.data.util.sorter"],
			["provide", "dojo.data.util.simpleFetch"],
			["provide", "dojo.data.ItemFileReadStore"],
			["provide", "dojo.store.util.QueryResults"],
			["provide", "dojo.store.util.SimpleQueryEngine"],
			["provide", "dojo.store.Memory"],
			["provide", "dojo.data.ObjectStore"],
			["provide", "dijit.tree.TreeStoreModel"],
			["provide", "dijit.tree._dndContainer"],
			["provide", "dijit.tree._dndSelector"],
			["provide", "dijit.tree.dndSource"],
			["provide", "dojo.DeferredList"],
			["provide", "dijit.tree.ForestStoreModel"],
			["provide", "dijit.Tree"],
			["provide", "dojox.html._base"],
			["provide", "dojox.layout.ContentPane"],
			["provide", "dojox.layout.ResizeHandle"],
			["provide", "dojox.layout.FloatingPane"],
			["provide", "pundit.XpointersHelper"],
			["provide", "pundit.RemoteStorageHandler"],
			["provide", "pundit.LocalStorageHandler"],
			["provide", "pundit.CookiesStorageHandler"],
			["provide", "pundit.GUI"],
			["provide", "pundit.Items"],
			["provide", "pundit.MyItems"],
			["provide", "pundit.PageItems"],
			["provide", "pundit.ItemContainerManager"],
			["provide", "pundit.Literals"],
			["provide", "pundit.DbpediaSpotlight"],
			["provide", "pundit.DataTxt"],
			["provide", "pundit.Civet"],
			["provide", "pundit.ResourcesPanel"],
			["provide", "pundit.RecognizerPanel"],
			["provide", "dojox.xml.DomParser"],
			["provide", "pundit.CommentTagPanel"],
			["provide", "pundit.AuthenticatedRequests"],
			["provide", "dijit.form._FormWidget"],
			["provide", "dijit._HasDropDown"],
			["provide", "dijit.form.Button"],
			["provide", "dijit.form.DropDownButton"],
			["provide", "dijit._KeyNavContainer"],
			["provide", "dijit.MenuItem"],
			["provide", "dijit.PopupMenuItem"],
			["provide", "dijit.CheckedMenuItem"],
			["provide", "dijit.MenuSeparator"],
			["provide", "dijit.Menu"],
			["provide", "pundit.MyPundit"],
			["provide", "pundit.ContextualMenu"],
			["provide", "pundit.Previewer"],
			["provide", "pundit.LoadingBox"],
			["provide", "pundit.Configuration"],
			["provide", "pundit.annotators.AnnotatorsConductor"],
			["provide", "pundit.annotators.AnnotatorsBase"],
			["provide", "pundit.FastTextHandler"],
			["provide", "pundit.PageHandler"],
			["provide", "pundit.annotators.TextFragmentAnnotator"],
			["provide", "pundit.selectors.SelectorBase"],
			["provide", "pundit.selectors.VocabSelector"],
			["provide", "pundit.selectors.DBPediaSelector"],
			//edit Felix: ["provide", "pundit.selectors.FreebaseSelector"],
			["provide", "pundit.selectors.KorboBasketSelector"],
			["provide", "pundit.selectors.WordnetSelector"],
			["provide", "pundit.selectors.EuropeanaSelector"],
			["provide", "pundit.selectors.EuropeanaEDMSelector"],
			["provide", "pundit.selectors.BibServerSelector"],
			["provide", "pundit.selectors.DandelionGeoSelector"],
			["provide", "pundit.selectors.DandelionPOISelector"],
			["provide", "pundit.ImageFragmentHandler"],
			["provide", "pundit.NotebookManager"],
			["provide", "pundit.Recognizer"],
			["provide", "pundit.ImageAnnotationPanel"],
			["provide", "pundit.Help"],
			["provide", "pundit.NamedContentHandler"],
			["provide", "pundit.ContactHelper"],
			//["provide", "pundit.IbrJsonRdfRestClient"],//edit Felix
			["provide", "pundit.Init"],
			["i18n._preloadLocalizations", "dojo.nls.Bookmarklet", ["ROOT", "ar", "ca", "cs", "da", "de", "de-de", "el", "en", "en-gb", "en-us", "es", "es-es", "fi", "fi-fi", "fr", "fr-fr", "he", "he-il", "hu", "it", "it-it", "ja", "ja-jp", "ko", "ko-kr", "nb", "nl", "nl-nl", "pl", "pt", "pt-br", "pt-pt", "ru", "sk", "sl", "sv", "th", "tr", "xx", "zh", "zh-cn", "zh-tw"]]
		],
		defineResource: function (_4, _5, _6) {
			_4.provide("dojo.Bookmarklet");
			if (!_4._hasResource["dojo.io.iframe"]) {
				_4._hasResource["dojo.io.iframe"] = true;
				_4.provide("dojo.io.iframe");
				_4.getObject("io", true, _4);
				_4.io.iframe = {
					create: function (_7, _8, _9) {
						if (window[_7]) {
							return window[_7];
						}
						if (window.frames[_7]) {
							return window.frames[_7];
						}
						var _a = null;
						var _b = _9;
						if (!_b) {
							if (_4.config["useXDomain"] && !_4.config["dojoBlankHtmlUrl"]) {
								console.warn("dojo.io.iframe.create: When using cross-domain Dojo builds," + " please save dojo/resources/blank.html to your domain and set djConfig.dojoBlankHtmlUrl" + " to the path on your domain to blank.html");
							}
							_b = (_4.config["dojoBlankHtmlUrl"] || _4.moduleUrl("dojo", "resources/blank.html"));
						}
						var _a = _4.place("<iframe id=\"" + _7 + "\" name=\"" + _7 + "\" src=\"" + _b + "\" onload=\"" + _8 + "\" style=\"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden\">", _4.body());
						window[_7] = _a;
						return _a;
					},
					setSrc: function (_c, _d, _e) {
						try {
							if (!_e) {
								if (_4.isWebKit) {
									_c.location = _d;
								} else {
									frames[_c.name].location = _d;
								}
							} else {
								var _f;
								if (_4.isIE || _4.isWebKit) {
									_f = _c.contentWindow.document;
								} else {
									_f = _c.contentWindow;
								}
								if (!_f) {
									_c.location = _d;
									return;
								} else {
									_f.location.replace(_d);
								}
							}
						} catch (e) {
							console.log("dojo.io.iframe.setSrc: ", e);
						}
					},
					doc: function (_10) {
						var doc = _10.contentDocument || (((_10.name) && (_10.document) && (_4.doc.getElementsByTagName("iframe")[_10.name].contentWindow) && (_4.doc.getElementsByTagName("iframe")[_10.name].contentWindow.document))) || ((_10.name) && (_4.doc.frames[_10.name]) && (_4.doc.frames[_10.name].document)) || null;
						return doc;
					},
					send: function (_11) {
						if (!this["_frame"]) {
							this._frame = this.create(this._iframeName, _4._scopeName + ".io.iframe._iframeOnload();");
						}
						var dfd = _4._ioSetArgs(_11, function (dfd) {
							dfd.canceled = true;
							dfd.ioArgs._callNext();
						}, function (dfd) {
							var _12 = null;
							try {
								var _13 = dfd.ioArgs;
								var dii = _4.io.iframe;
								var ifd = dii.doc(dii._frame);
								var _14 = _13.handleAs;
								_12 = ifd;
								if (_14 != "html") {
									if (_14 == "xml") {
										if (_4.isIE < 9 || (_4.isIE && _4.isQuirks)) {
											_4.query("a", dii._frame.contentWindow.document.documentElement).orphan();
											var _15 = (dii._frame.contentWindow.document).documentElement.innerText;
											_15 = _15.replace(/>\s+</g, "><");
											_15 = _4.trim(_15);
											var _16 = {
												responseText: _15
											};
											_12 = _4._contentHandlers["xml"](_16);
										}
									} else {
										_12 = ifd.getElementsByTagName("textarea")[0].value;
										if (_14 == "json") {
											_12 = _4.fromJson(_12);
										} else {
											if (_14 == "javascript") {
												_12 = _4.eval(_12);
											}
										}
									}
								}
							} catch (e) {
								_12 = e;
							} finally {
								_13._callNext();
							}
							return _12;
						}, function (_17, dfd) {
							dfd.ioArgs._hasError = true;
							dfd.ioArgs._callNext();
							return _17;
						});
						dfd.ioArgs._callNext = function () {
							if (!this["_calledNext"]) {
								this._calledNext = true;
								_4.io.iframe._currentDfd = null;
								_4.io.iframe._fireNextRequest();
							}
						};
						this._dfdQueue.push(dfd);
						this._fireNextRequest();
						_4._ioWatch(dfd, function (dfd) {
							return !dfd.ioArgs["_hasError"];
						}, function (dfd) {
							return ( !!dfd.ioArgs["_finished"]);
						}, function (dfd) {
							if (dfd.ioArgs._finished) {
								dfd.callback(dfd);
							} else {
								dfd.errback(new Error("Invalid dojo.io.iframe request state"));
							}
						});
						return dfd;
					},
					_currentDfd: null,
					_dfdQueue: [],
					_iframeName: _4._scopeName + "IoIframe",
					_fireNextRequest: function () {
						try {
							if ((this._currentDfd) || (this._dfdQueue.length == 0)) {
								return;
							}
							do {
								var dfd = this._currentDfd = this._dfdQueue.shift();
							} while (dfd && dfd.canceled && this._dfdQueue.length);
							if (!dfd || dfd.canceled) {
								this._currentDfd = null;
								return;
							}
							var _18 = dfd.ioArgs;
							var _19 = _18.args;
							_18._contentToClean = [];
							var fn = _4.byId(_19["form"]);
							var _1a = _19["content"] || {};
							if (fn) {
								if (_1a) {
									var _1b = function (_1c, _1d) {
										_4.create("input", {
											type: "hidden",
											name: _1c,
											value: _1d
										}, fn);
										_18._contentToClean.push(_1c);
									};
									for (var x in _1a) {
										var val = _1a[x];
										if (_4.isArray(val) && val.length > 1) {
											var i;
											for (i = 0; i < val.length; i++) {
												_1b(x, val[i]);
											}
										} else {
											if (!fn[x]) {
												_1b(x, val);
											} else {
												fn[x].value = val;
											}
										}
									}
								}
								var _1e = fn.getAttributeNode("action");
								var _1f = fn.getAttributeNode("method");
								var _20 = fn.getAttributeNode("target");
								if (_19["url"]) {
									_18._originalAction = _1e ? _1e.value : null;
									if (_1e) {
										_1e.value = _19.url;
									} else {
										fn.setAttribute("action", _19.url);
									}
								}
								if (!_1f || !_1f.value) {
									if (_1f) {
										_1f.value = (_19["method"]) ? _19["method"] : "post";
									} else {
										fn.setAttribute("method", (_19["method"]) ? _19["method"] : "post");
									}
								}
								_18._originalTarget = _20 ? _20.value : null;
								if (_20) {
									_20.value = this._iframeName;
								} else {
									fn.setAttribute("target", this._iframeName);
								}
								fn.target = this._iframeName;
								_4._ioNotifyStart(dfd);
								fn.submit();
							} else {
								var _21 = _19.url + (_19.url.indexOf("?") > -1 ? "&" : "?") + _18.query;
								_4._ioNotifyStart(dfd);
								this.setSrc(this._frame, _21, true);
							}
						} catch (e) {
							dfd.errback(e);
						}
					},
					_iframeOnload: function () {
						var dfd = this._currentDfd;
						if (!dfd) {
							this._fireNextRequest();
							return;
						}
						var _22 = dfd.ioArgs;
						var _23 = _22.args;
						var _24 = _4.byId(_23.form);
						if (_24) {
							var _25 = _22._contentToClean;
							for (var i = 0; i < _25.length; i++) {
								var key = _25[i];
								for (var j = 0; j < _24.childNodes.length; j++) {
									var _26 = _24.childNodes[j];
									if (_26.name == key) {
										_4.destroy(_26);
										break;
									}
								}
							}
							if (_22["_originalAction"]) {
								_24.setAttribute("action", _22._originalAction);
							}
							if (_22["_originalTarget"]) {
								_24.setAttribute("target", _22._originalTarget);
								_24.target = _22._originalTarget;
							}
						}
						_22._finished = true;
					}
				};
			}
			if (!_4._hasResource["pundit.BaseComponent"]) {
				_4._hasResource["pundit.BaseComponent"] = true;
				_4.provide("pundit.BaseComponent");
				_4.declare("pundit.BaseComponent", null, {
					defaultOpts: {
						debug: false,
						libName: ""
					},
					constructor: function (_27) {
						var _28 = this,
								i;
						if (typeof (_28.opts) === "undefined") {
							_28.opts = {};
						}
						for (i in _28.defaultOpts) {
							if (typeof (_28.opts[i]) === "undefined") {
								_28.opts[i] = _28.defaultOpts[i];
							}
						}
						if (typeof (_PUNDIT) !== "undefined" && typeof (_PUNDIT.config) !== "undefined" && typeof (_PUNDIT.config.modules[_28.declaredClass]) !== "undefined") {
							var _29 = _PUNDIT.config.modules[_28.declaredClass];
							for (i in _29) {
								_28.opts[i] = _29[i];
							}
						}
						for (i in _27) {
							_28.opts[i] = _27[i];
						}
						_28.log("BaseConstructor built opts for " + _28.declaredClass);
					},
					createCallback: function (_2a) {
						var _2b = this;
						if (typeof (_2a) === "string") {
							_2a = [_2a];
						}
						for (var n = _2a.length; n--;) {
							var _2c = _2a[n].substr(0, 1).toUpperCase() + _2a[n].substr(1),
									_2d = "on" + _2c + "Callbacks",
									_2e = "on" + _2c,
									_2f = "fireOn" + _2c;
							if (typeof (_2b[_2d]) === "undefined") {
								_2b[_2d] = [];
							}
							_2b[_2e] = (function (_30) {
								return function (f) {
									if (typeof (f) === "function") {
										_2b[_30].push(f);
									}
								};
							})(_2d);
							_2b[_2f] = (function (_31) {
								return function () {
									for (var i = _2b[_31].length; i--;) {
										_2b[_31][i].apply(_2b, arguments);
									}
								};
							})(_2d);
						}
					},
					log: function (w) {
						var foo = this.opts.debug;
						if (typeof (_PUNDIT) !== "undefined" && typeof (_PUNDIT.config) !== "undefined" && _PUNDIT.config.debugAllModules === true) {
							foo = true;
						}
						if (foo === false) {
							return;
						}
						var _32 = (this.opts.libName !== "") ? this.opts.libName : this.declaredClass;
						if (typeof console === "undefined") {
							if (!_4.query("#debug_foo")) {
								$("body").append("<div id='debug_foo' style=' border: 3px solid yellow; font-size: 0.9em;'></div>");
							}
							_4.query("#debug_foo").append("<div>#" + _32 + "# " + w + "</div>");
						} else {
							console.log("#" + _32 + "# " + w);
						}
					}
				});
			}
			if (!_4._hasResource["pundit.Crypto"]) {
				_4._hasResource["pundit.Crypto"] = true;
				_4.provide("pundit.Crypto");
				_4.declare("pundit.Crypto", pundit.BaseComponent, {
					constructor: function () {
						this.hexcase = 0;
						this.b64pad = "";
					},
					hex_md5: function (s) {
						return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)));
					},
					b64_md5: function (s) {
						return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s)));
					},
					any_md5: function (s, e) {
						return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e);
					},
					hex_hmac_md5: function (k, d) {
						return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
					},
					b64_hmac_md5: function (k, d) {
						return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
					},
					any_hmac_md5: function (k, d, e) {
						return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e);
					},
					md5_vm_test: function () {
						return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
					},
					rstr_md5: function (s) {
						return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
					},
					rstr_hmac_md5: function (key, _33) {
						var _34 = this.rstr2binl(key);
						if (_34.length > 16) {
							_34 = this.binl_md5(_34, key.length * 8);
						}
						var _35 = Array(16),
								_36 = Array(16);
						for (var i = 0; i < 16; i++) {
							_35[i] = _34[i] ^ 909522486;
							_36[i] = _34[i] ^ 1549556828;
						}
						var _37 = this.binl_md5(_35.concat(this.rstr2binl(_33)), 512 + _33.length * 8);
						return this.binl2rstr(this.binl_md5(_36.concat(_37), 512 + 128));
					},
					rstr2hex: function (_38) {
						try {
							this.hexcase;
						} catch (e) {
							this.hexcase = 0;
						}
						var _39 = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
						var _3a = "";
						var x;
						for (var i = 0; i < _38.length; i++) {
							x = _38.charCodeAt(i);
							_3a += _39.charAt((x >>> 4) & 15) + _39.charAt(x & 15);
						}
						return _3a;
					},
					rstr2b64: function (_3b) {
						try {
							this.b64pad;
						} catch (e) {
							this.b64pad = "";
						}
						var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
						var _3c = "";
						var len = _3b.length;
						for (var i = 0; i < len; i += 3) {
							var _3d = (_3b.charCodeAt(i) << 16) | (i + 1 < len ? _3b.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? _3b.charCodeAt(i + 2) : 0);
							for (var j = 0; j < 4; j++) {
								if (i * 8 + j * 6 > _3b.length * 8) {
									_3c += this.b64pad;
								} else {
									_3c += tab.charAt((_3d >>> 6 * (3 - j)) & 63);
								}
							}
						}
						return _3c;
					},
					rstr2any: function (_3e, _3f) {
						var _40 = _3f.length;
						var i, j, q, x, _41;
						var _42 = Array(Math.ceil(_3e.length / 2));
						for (i = 0; i < _42.length; i++) {
							_42[i] = (_3e.charCodeAt(i * 2) << 8) | _3e.charCodeAt(i * 2 + 1);
						}
						var _43 = Math.ceil(_3e.length * 8 / (Math.log(_3f.length) / Math.log(2)));
						var _44 = Array(_43);
						for (j = 0; j < _43; j++) {
							_41 = Array();
							x = 0;
							for (i = 0; i < _42.length; i++) {
								x = (x << 16) + _42[i];
								q = Math.floor(x / _40);
								x -= q * _40;
								if (_41.length > 0 || q > 0) {
									_41[_41.length] = q;
								}
							}
							_44[j] = x;
							_42 = _41;
						}
						var _45 = "";
						for (i = _44.length - 1; i >= 0; i--) {
							_45 += _3f.charAt(_44[i]);
						}
						return _45;
					},
					str2rstr_utf8: function (_46) {
						var _47 = "";
						var i = -1;
						var x, y;
						while (++i < _46.length) {
							x = _46.charCodeAt(i);
							y = i + 1 < _46.length ? _46.charCodeAt(i + 1) : 0;
							if (55296 <= x && x <= 56319 && 56320 <= y && y <= 57343) {
								x = 65536 + ((x & 1023) << 10) + (y & 1023);
								i++;
							}
							if (x <= 127) {
								_47 += String.fromCharCode(x);
							} else {
								if (x <= 2047) {
									_47 += String.fromCharCode(192 | ((x >>> 6) & 31), 128 | (x & 63));
								} else {
									if (x <= 65535) {
										_47 += String.fromCharCode(224 | ((x >>> 12) & 15), 128 | ((x >>> 6) & 63), 128 | (x & 63));
									} else {
										if (x <= 2097151) {
											_47 += String.fromCharCode(240 | ((x >>> 18) & 7), 128 | ((x >>> 12) & 63), 128 | ((x >>> 6) & 63), 128 | (x & 63));
										}
									}
								}
							}
						}
						return _47;
					},
					str2rstr_utf16le: function (_48) {
						var _49 = "";
						for (var i = 0; i < _48.length; i++) {
							_49 += String.fromCharCode(_48.charCodeAt(i) & 255, (_48.charCodeAt(i) >>> 8) & 255);
						}
						return _49;
					},
					str2rstr_utf16be: function (_4a) {
						var _4b = "";
						for (var i = 0; i < _4a.length; i++) {
							_4b += String.fromCharCode((_4a.charCodeAt(i) >>> 8) & 255, _4a.charCodeAt(i) & 255);
						}
						return _4b;
					},
					rstr2binl: function (_4c) {
						var _4d = Array(_4c.length >> 2);
						for (var i = 0; i < _4d.length; i++) {
							_4d[i] = 0;
						}
						for (var i = 0; i < _4c.length * 8; i += 8) {
							_4d[i >> 5] |= (_4c.charCodeAt(i / 8) & 255) << (i % 32);
						}
						return _4d;
					},
					binl2rstr: function (_4e) {
						var _4f = "";
						for (var i = 0; i < _4e.length * 32; i += 8) {
							_4f += String.fromCharCode((_4e[i >> 5] >>> (i % 32)) & 255);
						}
						return _4f;
					},
					binl_md5: function (x, len) {
						x[len >> 5] |= 128 << ((len) % 32);
						x[(((len + 64) >>> 9) << 4) + 14] = len;
						var a = 1732584193;
						var b = -271733879;
						var c = -1732584194;
						var d = 271733878;
						for (var i = 0; i < x.length; i += 16) {
							var _50 = a;
							var _51 = b;
							var _52 = c;
							var _53 = d;
							a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
							d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
							c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
							b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
							a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
							d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
							c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
							b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
							a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
							d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
							c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
							b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
							a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
							d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
							c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
							b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
							a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
							d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
							c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
							b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
							a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
							d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
							c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
							b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
							a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
							d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
							c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
							b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
							a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
							d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
							c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
							b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
							a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
							d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
							c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
							b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
							a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
							d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
							c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
							b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
							a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
							d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
							c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
							b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
							a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
							d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
							c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
							b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
							a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
							d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
							c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
							b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
							a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
							d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
							c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
							b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
							a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
							d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
							c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
							b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
							a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
							d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
							c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
							b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
							a = this.safe_add(a, _50);
							b = this.safe_add(b, _51);
							c = this.safe_add(c, _52);
							d = this.safe_add(d, _53);
						}
						return Array(a, b, c, d);
					},
					md5_cmn: function (q, a, b, x, s, t) {
						return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
					},
					md5_ff: function (a, b, c, d, x, s, t) {
						return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
					},
					md5_gg: function (a, b, c, d, x, s, t) {
						return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
					},
					md5_hh: function (a, b, c, d, x, s, t) {
						return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
					},
					md5_ii: function (a, b, c, d, x, s, t) {
						return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
					},
					safe_add: function (x, y) {
						var lsw = (x & 65535) + (y & 65535);
						var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
						return (msw << 16) | (lsw & 65535);
					},
					bit_rol: function (num, cnt) {
						return (num << cnt) | (num >>> (32 - cnt));
					}
				});
			}
			if (!_4._hasResource["pundit.BasePanel"]) {
				_4._hasResource["pundit.BasePanel"] = true;
				_4.provide("pundit.BasePanel");
				_4.declare("pundit.BasePanel", pundit.BaseComponent, {
					constructor: function (_54) {
						var _55 = this;
						_55.log("Base Panel Contructor");
						_55.inShowing = false;
						_55.name = _54.name;
						_55.title = _54.title || "Panel";
						_55.drag = _54.drag || false;
						_55.preview = _54.preview || false;
						_55.width = _54.width || "400";
						_55.height = _54.height;
						_55.initBaseHTML();
						_4.style(_4.query("#" + _55._id + " ul.pundit-fp-content-list")[0], {
							width: parseInt(_55.width) + "px"
						});
						if (typeof _55.height !== "undefined") {
							_4.style(_4.query("#" + _55._id + " ul.pundit-fp-content-list")[0], {
								height: _55.height + "px"
							});
						}
						_4.style(_4.query("#" + _55._id + " .pundit-fp-content-container")[0], "width", _55.width - 10 + "px");
						if (_55.preview) {
							_55.showPreview = function (uri) {
								var _56 = this;
								previewer.show(uri, "#" + _56._id + " .pundit-fp-preview");
								_4.addClass(_4.query("#" + _56._id + " .pundit-fp-content-list")[0], "pundit-preview");
								_4.style(_4.query("#" + _56._id + " ul.pundit-fp-content-list")[0], {
									width: parseInt(_56.width) + parseInt(250) + "px"
								});
								var h = _4.position(_4.query("#" + _56._id + " .pundit-fp-content-list")[0]).h;
								_4.style(_4.query("#" + _56._id + " .pundit-fp-preview")[0], "height", h + "px");
							};
							_55.hidePreview = function () {
								var _57 = this;
								_4.removeClass(_4.query("#" + _57._id + " .pundit-fp-content-list")[0], "pundit-preview");
								_4.style(_4.query("#" + _57._id + " ul.pundit-fp-content-list")[0], {
									width: parseInt(_57.width) + "px"
								});
							};
						}
						_55.initBaseBehaviors();
					},
					initBaseHTML: function () {
						var _58 = this;
						_58.log("Init HTML Base Panel");
						if (typeof _58.name !== "undefined") {
							_58._id = "pundit-fp-" + _58.name;
						} else {
							_58._id = "pundit-fp-" + Math.rand(100);
						}
						var c = "<div id=\"" + _58._id + "\" class=\"pundit-base pundit-fp pundit-hidden pundit-disable-annotation pundit-stop-wheel-propagation\">";
						c += "  <div class=\"pundit-fp-header\"><span class=\"pundit-fp-title\">" + _58.title + "</span><span class=\"pundit-fp-close pundit-icon-close\"></span></div>";
						c += "  <ul class=\"pundit-fp-content-list pundit-horizontal-list\">";
						c += "      <li>";
						c += "          <div class=\"pundit-fp-content-container pundit-fp-container\">";
						c += "          </div>";
						c += "      </li>";
						c += "      <li class=\"pundit-fp-preview-list pundit-stop-wheel-propagation fillheight\">";
						c += "          <div class=\"pundit-fp-container fillheight pundit-stop-wheel-propagation\">";
						c += "              <span id=\"" + _58._id + "-preview-hide\" style=\"cursor: pointer\">- [hide preview]</span><div id =\"" + _58._id + "-preview\" class=\"pundit-fp-preview pundit-moreinfo-panel pundit-stop-wheel-propagation fillheight\"></div>";
						c += "          </div>";
						c += "      </li>";
						c += "  </ul>";
						c += "</div>";
						_4.query("body").append(c);
					},
					initBaseBehaviors: function () {
						var _59 = this;
						if (_59.drag) {
							var _5a = _4.byId(_59._id + "-preview-hide");
							var _5b = _4.byId(_59._id + "-preview");
							_4.connect(_5a, "onclick", function (evt) {
								if (_5b.getAttribute("style") !== "visibility: hidden; cursor: pointer") {
									_5b.setAttribute("style", "visibility: hidden; cursor: pointer");
									_5a.innerHTML = "+ [show preview]";
								} else {
									_5b.setAttribute("style", "");
									_5a.innerHTML = "- [hide preview]";
								}
							});
							_4.connect(_4.query("#" + _59._id + " .pundit-fp-header")[0], "onmousedown", function (e) {
								_59.moving = true;
								_59.start = {
									left: _4.style(_59._id, "left"),
									top: _4.style(_59._id, "top"),
									x: e.pageX,
									y: e.pageY
								};
							});
							_4.connect(window, "onmousemove", function (e) {
								if (_59.moving === true) {
									if (e.clientY > 0 && e.clientY < window.innerHeight - 10) {
										_4.stopEvent(e);
										_4.style(_59._id, "left", _59.start.left - _59.start.x + e.pageX + "px");
										_4.style(_59._id, "top", _59.start.top - _59.start.y + e.pageY + "px");
									}
								}
							});
							_4.connect(window, "onmouseup", function (e) {
								_59.moving = false;
							});
						}
						_4.connect(_4.query("#" + _59._id + " .pundit-fp-close")[0], "onclick", function () {
							_59.hide();
						});
						_4.behavior.apply();
					},
					hide: function () {
						var _5c = this;
						_4.style(_4.query("#" + _5c._id + ".pundit-fp")[0], "opacity", 0);
						_5c.inShowing = false;
						_5c.hideTimeout = setTimeout(function () {
							_4.addClass(_5c._id, "pundit-hidden");
							_5c.hidePreview();
						}, 1000);
					},
					show: function (x, y) {
						var _5d = this;
						if (_5d.isVisible()) {
							return;
						}
						_5d.inShowing = true;
						clearTimeout(_5d.hideTimeout);
						_4.removeClass(_5d._id, "pundit-hidden");
						if (typeof x !== "undefined" && typeof y !== "undefined") {
							if (_4.query("pundit-fp-notebook-sharePanel").length > 0) {
								_4.style("pundit-fp-notebook-sharePanel", {
									left: x,
									top: y
								});
							}
						}
						setTimeout(function () {
							_4.style(_4.query("#" + _5d._id + ".pundit-fp")[0], "opacity", 1);
						}, 10);
					},
					isVisible: function () {
						return this.inShowing;
					},
					getPosition: function () {
						return _4.position(this._id);
					},
					showPreview: function (uri) {
						var _5e = this;
						previewer.show(uri);
					},
					hidePreview: function () {
						var _5f = this;
						_4.removeClass(_4.query("#" + _5f._id + " li.pundit-fp-preview-list")[0], "pundit-preview");
					},
					addHTMLContent: function (_60) {
						var _61 = this;
						_4.query("#" + _61._id + " .pundit-fp-content-container").append(_60);
					},
					emptyContent: function () {
						var _62 = this;
						_4.empty(_4.query("#" + _62._id + " .pundit-fp-content-container")[0]);
					}
				});
			}
			if (!_4._hasResource["pundit.NamespaceHelper"]) {
				_4._hasResource["pundit.NamespaceHelper"] = true;
				_4.provide("pundit.NamespaceHelper");
				_4.declare("pundit.NamespaceHelper", pundit.BaseComponent, {
					constructor: function (_63) {
						var _64 = this;
						_64.rdf_type = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
						_64.rdf_value = "http://www.w3.org/1999/02/22-rdf-syntax-ns#value";
						_64.rdf_property = "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property";
						_64.rdf_XMLLiteral = "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral";
						_64.rdfs_label = "http://www.w3.org/2000/01/rdf-schema#label";
						_64.rdfs_comment = "http://www.w3.org/2000/01/rdf-schema#comment";
						_64.rdfs_resource = "http://www.w3.org/2000/01/rdf-schema#Resource";
						_64.rdfs_literal = "http://www.w3.org/2000/01/rdf-schema#Literal";
						_64.rdfs_seeAlso = "http://www.w3.org/2000/01/rdf-schema#seeAlso";
						_64.page = "http://schema.org/WebPage";
						_64.image = "http://xmlns.com/foaf/0.1/Image";
						_64.annotation = "http://www.openannotation.org/ns/Annotation";
						_64.pundit_annotationId = "http://purl.org/pundit/ont/ao#id";
						_64.pundit_annotationDate = "http://purl.org/dc/terms/created";
						_64.pundit_authorName = "http://purl.org/dc/elements/1.1/creator";
						_64.pundit_userName = "http://xmlns.com/foaf/0.1/name";
						_64.pundit_authorURI = "http://purl.org/dc/terms/creator";
						_64.pundit_hasTarget = "http://www.openannotation.org/ns/hasTarget";
						_64.pundit_hasTag = "http://purl.org/pundit/ont/ao#hasTag";
						_64.pundit_hasComment = "http://schema.org/comment";
						_64.pundit_isIncludedIn = "http://purl.org/pundit/ont/ao#isIncludedIn";
						_64.pundit_VocabCategory = "http://purl.org/pundit/vocab/category";
						_64.annotationServer = _PUNDIT.config.annotationServerBaseURL;
						_64.annotationServerApi = _64.annotationServer + "api/";
						_64.annotationServerApiNotebooks = _64.annotationServer + "api/notebooks/";
						_64.annotationServerApiNotebooksGraph = _64.annotationServer + "api/notebooks/graph/";
						_64.annotationServerApiUsers = _64.annotationServer + "api/users/";
						_64.annotationServerApiCurrentNotebook = _64.annotationServer + "api/notebooks/current";
						_64.annotationServerApiAnnotations = _64.annotationServer + "api/annotations/";
						_64.annotationServerMetadataSearch = _64.annotationServer + "api/annotations/metadata/search";
						_64.annotationServerStorage = _64.annotationServer + "api/services/preferences/";
						_64.annotationServerVocabProxy = _64.annotationServer + "api/services/proxy";
						_64.annotationServerUsersCurrent = _64.annotationServer + "api/users/current";
						_64.annotationServerUsersLogout = _64.annotationServer + "api/users/logout";
						_64.annotationServerNotebooksActive = _64.annotationServer + "api/notebooks/active";
						_64.annotationServerApiOwnedNotebooks = _64.annotationServer + "api/notebooks/owned";
						_64.annotationServerContact = _64.annotationServer + "api/services/email";
						_64.lodLiveURL = "http://thepund.it/lodlive/app_en.html";
						_64.notebooksNamespace = "http://swickynotes.org/notebook/resource/";
						_64.usersNamespace = "http://swickynotes.org/notebook/resource/";
						_64.dbpediaSpotlightAnnotate = "http://spotlight.dbpedia.org/rest/annotate?text=";
						_64.dbpediaKeywordSearch = "http://lookup.dbpedia.org/api/search.asmx/KeywordSearch";
						_64.items = {
							label: _64.rdfs_label,
							prefLabel: "http://www.w3.org/2004/02/skos/core#prefLabel",
							altLabel: "http://www.w3.org/2004/02/skos/core#altLabel",
							description: "http://purl.org/dc/elements/1.1/description",
							image: "http://xmlns.com/foaf/0.1/depiction",
							type: _64.rdf_type,
							pageContext: "http://purl.org/pundit/ont/ao#hasPageContext",
							isPartOf: "http://purl.org/dc/terms/isPartOf",
							selector: "http://www.w3.org/ns/openannotation/core/hasSelector",
							parentItemXP: "http://purl.org/pundit/ont/ao#parentItemXP"
						}, _64.fragments = {
							image: "http://purl.org/pundit/ont/ao#fragment-image",
							text: "http://purl.org/pundit/ont/ao#fragment-text",
							named: "http://purl.org/pundit/ont/ao#named-content"
						}, _64.selectors = {
							polygon: {
								value: "http://purl.org/pundit/ont/ao#selector-polygon",
								label: "Polygonal Selector",
								description: "A polygonal selection described by the coordinates of the its points normalized according to the resource image and width"
							},
							rectangle: {
								vale: "http://purl.org/pundit/ont/ao#selector-rectangle",
								label: "Rectangular Selector",
								description: "A polygonal selection described by the coordinates of the top left vertex, width and height normalized according to the resource image and width"
							}
						};
						_64.fragmentBaseUri = "http://purl.org/pundit/fragment/";
						_64.selectorBaseUri = "http://purl.org/pundit/selector/";
						_64.notebooks = {
							visibility: "http://open.vocab.org/terms/visibility",
							created: "http://purl.org/dc/terms/created",
							creator: "http://purl.org/dc/terms/creator",
							creatorName: "http://purl.org/dc/elements/1.1/creator",
							id: "http://purl.org/pundit/ont/ao#id",
							includes: "http://purl.org/pundit/ont/ao#includes",
							type: _64.rdf_type,
							label: _64.rdfs_label
						};
						_64.log("NamespaceHelper configured and ready!");
					},
					getLabelFromUri: function (uri) {
						var _65;
						if (uri.match(/http:\/\/www\.freebase\.com\/schema\//)) {
							_65 = uri.substring(31).replace(/\//g, ": ").replace(/_/g, " ");
							return _65;
						}
						_65 = uri.substring(uri.lastIndexOf("/") + 1);
						if (_65.indexOf("#") !== -1) {
							_65 = _65.substring(_65.lastIndexOf("#") + 1);
						}
						return _65;
					}
				});
			}
			if (!_4._hasResource["dojo.io.script"]) {
				_4._hasResource["dojo.io.script"] = true;
				_4.provide("dojo.io.script");
				_4.getObject("io", true, _4);
				(function () {
					var _66 = _4.isIE ? "onreadystatechange" : "load",
							_67 = /complete|loaded/;
					_4.io.script = {
						get: function (_68) {
							var dfd = this._makeScriptDeferred(_68);
							var _69 = dfd.ioArgs;
							_4._ioAddQueryToUrl(_69);
							_4._ioNotifyStart(dfd);
							if (this._canAttach(_69)) {
								var _6a = this.attach(_69.id, _69.url, _68.frameDoc);
								if (!_69.jsonp && !_69.args.checkString) {
									var _6b = _4.connect(_6a, _66, function (evt) {
										if (evt.type == "load" || _67.test(_6a.readyState)) {
											_4.disconnect(_6b);
											_69.scriptLoaded = evt;
										}
									});
								}
							}
							_4._ioWatch(dfd, this._validCheck, this._ioCheck, this._resHandle);
							return dfd;
						},
						attach: function (id, url, _6c) {
							var doc = (_6c || _4.doc);
							var _6d = doc.createElement("script");
							_6d.type = "text/javascript";
							_6d.src = url;
							_6d.id = id;
							_6d.charset = "utf-8";
							return doc.getElementsByTagName("head")[0].appendChild(_6d);
						},
						remove: function (id, _6e) {
							_4.destroy(_4.byId(id, _6e));
							if (this["jsonp_" + id]) {
								delete this["jsonp_" + id];
							}
						},
						_makeScriptDeferred: function (_6f) {
							var dfd = _4._ioSetArgs(_6f, this._deferredCancel, this._deferredOk, this._deferredError);
							var _70 = dfd.ioArgs;
							_70.id = _4._scopeName + "IoScript" + (this._counter++);
							_70.canDelete = false;
							_70.jsonp = _6f.callbackParamName || _6f.jsonp;
							if (_70.jsonp) {
								_70.query = _70.query || "";
								if (_70.query.length > 0) {
									_70.query += "&";
								}
								_70.query += _70.jsonp + "=" + (_6f.frameDoc ? "parent." : "") + _4._scopeName + ".io.script.jsonp_" + _70.id + "._jsonpCallback";
								_70.frameDoc = _6f.frameDoc;
								_70.canDelete = true;
								dfd._jsonpCallback = this._jsonpCallback;
								this["jsonp_" + _70.id] = dfd;
							}
							return dfd;
						},
						_deferredCancel: function (dfd) {
							dfd.canceled = true;
							if (dfd.ioArgs.canDelete) {
								_4.io.script._addDeadScript(dfd.ioArgs);
							}
						},
						_deferredOk: function (dfd) {
							var _71 = dfd.ioArgs;
							if (_71.canDelete) {
								_4.io.script._addDeadScript(_71);
							}
							return _71.json || _71.scriptLoaded || _71;
						},
						_deferredError: function (_72, dfd) {
							if (dfd.ioArgs.canDelete) {
								if (_72.dojoType == "timeout") {
									_4.io.script.remove(dfd.ioArgs.id, dfd.ioArgs.frameDoc);
								} else {
									_4.io.script._addDeadScript(dfd.ioArgs);
								}
							}
							console.log("dojo.io.script error", _72);
							return _72;
						},
						_deadScripts: [],
						_counter: 1,
						_addDeadScript: function (_73) {
							_4.io.script._deadScripts.push({
								id: _73.id,
								frameDoc: _73.frameDoc
							});
							_73.frameDoc = null;
						},
						_validCheck: function (dfd) {
							var _74 = _4.io.script;
							var _75 = _74._deadScripts;
							if (_75 && _75.length > 0) {
								for (var i = 0; i < _75.length; i++) {
									_74.remove(_75[i].id, _75[i].frameDoc);
									_75[i].frameDoc = null;
								}
								_4.io.script._deadScripts = [];
							}
							return true;
						},
						_ioCheck: function (dfd) {
							var _76 = dfd.ioArgs;
							if (_76.json || (_76.scriptLoaded && !_76.args.checkString)) {
								return true;
							}
							var _77 = _76.args.checkString;
							if (_77 && eval("typeof(" + _77 + ") != 'undefined'")) {
								return true;
							}
							return false;
						},
						_resHandle: function (dfd) {
							if (_4.io.script._ioCheck(dfd)) {
								dfd.callback(dfd);
							} else {
								dfd.errback(new Error("inconceivable dojo.io.script._resHandle error"));
							}
						},
						_canAttach: function (_78) {
							return true;
						},
						_jsonpCallback: function (_79) {
							this.ioArgs.json = _79;
						}
					};
				})();
			}
			if (!_4._hasResource["dojo.dnd.common"]) {
				_4._hasResource["dojo.dnd.common"] = true;
				_4.provide("dojo.dnd.common");
				_4.getObject("dnd", true, _4);
				_4.dnd.getCopyKeyState = _4.isCopyKey;
				_4.dnd._uniqueId = 0;
				_4.dnd.getUniqueId = function () {
					var id;
					do {
						id = _4._scopeName + "Unique" + (++_4.dnd._uniqueId);
					} while (_4.byId(id));
					return id;
				};
				_4.dnd._empty = {};
				_4.dnd.isFormElement = function (e) {
					var t = e.target;
					if (t.nodeType == 3) {
						t = t.parentNode;
					}
					return " button textarea input select option ".indexOf(" " + t.tagName.toLowerCase() + " ") >= 0;
				};
			}
			if (!_4._hasResource["dojo.window"]) {
				_4._hasResource["dojo.window"] = true;
				_4.provide("dojo.window");
				_4.getObject("window", true, _4);
				_4.window.getBox = function () {
					var _7a = (_4.doc.compatMode == "BackCompat") ? _4.body() : _4.doc.documentElement;
					var _7b = _4._docScroll();
					return {
						w: _7a.clientWidth,
						h: _7a.clientHeight,
						l: _7b.x,
						t: _7b.y
					};
				};
				_4.window.get = function (doc) {
					if (_4.isIE && window !== document.parentWindow) {
						doc.parentWindow.execScript("document._parentWindow = window;", "Javascript");
						var win = doc._parentWindow;
						doc._parentWindow = null;
						return win;
					}
					return doc.parentWindow || doc.defaultView;
				};
				_4.window.scrollIntoView = function (_7c, pos) {
					try {
						_7c = _4.byId(_7c);
						var doc = _7c.ownerDocument || _4.doc,
								_7d = doc.body || _4.body(),
								_7e = doc.documentElement || _7d.parentNode,
								_7f = _4.isIE,
								_80 = _4.isWebKit;
						if ((!(_4.isMoz || _7f || _80 || _4.isOpera) || _7c == _7d || _7c == _7e) && (typeof _7c.scrollIntoView != "undefined")) {
							_7c.scrollIntoView(false);
							return;
						}
						var _81 = doc.compatMode == "BackCompat",
								_82 = (_7f >= 9 && _7c.ownerDocument.parentWindow.frameElement) ? ((_7e.clientHeight > 0 && _7e.clientWidth > 0 && (_7d.clientHeight == 0 || _7d.clientWidth == 0 || _7d.clientHeight > _7e.clientHeight || _7d.clientWidth > _7e.clientWidth)) ? _7e : _7d) : (_81 ? _7d : _7e),
								_83 = _80 ? _7d : _82,
								_84 = _82.clientWidth,
								_85 = _82.clientHeight,
								rtl = !_4._isBodyLtr(),
								_86 = pos || _4.position(_7c),
								el = _7c.parentNode,
								_87 = function (el) {
									return ((_7f <= 6 || (_7f && _81)) ? false : (_4.style(el, "position").toLowerCase() == "fixed"));
								};
						if (_87(_7c)) {
							return;
						}
						while (el) {
							if (el == _7d) {
								el = _83;
							}
							var _88 = _4.position(el),
									_89 = _87(el);
							if (el == _83) {
								_88.w = _84;
								_88.h = _85;
								if (_83 == _7e && _7f && rtl) {
									_88.x += _83.offsetWidth - _88.w;
								}
								if (_88.x < 0 || !_7f) {
									_88.x = 0;
								}
								if (_88.y < 0 || !_7f) {
									_88.y = 0;
								}
							} else {
								var pb = _4._getPadBorderExtents(el);
								_88.w -= pb.w;
								_88.h -= pb.h;
								_88.x += pb.l;
								_88.y += pb.t;
								var _8a = el.clientWidth,
										_8b = _88.w - _8a;
								if (_8a > 0 && _8b > 0) {
									_88.w = _8a;
									_88.x += (rtl && (_7f || el.clientLeft > pb.l)) ? _8b : 0;
								}
								_8a = el.clientHeight;
								_8b = _88.h - _8a;
								if (_8a > 0 && _8b > 0) {
									_88.h = _8a;
								}
							}
							if (_89) {
								if (_88.y < 0) {
									_88.h += _88.y;
									_88.y = 0;
								}
								if (_88.x < 0) {
									_88.w += _88.x;
									_88.x = 0;
								}
								if (_88.y + _88.h > _85) {
									_88.h = _85 - _88.y;
								}
								if (_88.x + _88.w > _84) {
									_88.w = _84 - _88.x;
								}
							}
							var l = _86.x - _88.x,
									t = _86.y - Math.max(_88.y, 0),
									r = l + _86.w - _88.w,
									bot = t + _86.h - _88.h;
							if (r * l > 0) {
								var s = Math[l < 0 ? "max" : "min"](l, r);
								if (rtl && ((_7f == 8 && !_81) || _7f >= 9)) {
									s = -s;
								}
								_86.x += el.scrollLeft;
								el.scrollLeft += s;
								_86.x -= el.scrollLeft;
							}
							if (bot * t > 0) {
								_86.y += el.scrollTop;
								el.scrollTop += Math[t < 0 ? "max" : "min"](t, bot);
								_86.y -= el.scrollTop;
							}
							el = (el != _83) && !_89 && el.parentNode;
						}
					} catch (error) {
						console.error("scrollIntoView: " + error);
						_7c.scrollIntoView(false);
					}
				};
			}
			if (!_4._hasResource["dojo.dnd.autoscroll"]) {
				_4._hasResource["dojo.dnd.autoscroll"] = true;
				_4.provide("dojo.dnd.autoscroll");
				_4.getObject("dnd", true, _4);
				_4.dnd.getViewport = _4.window.getBox;
				_4.dnd.V_TRIGGER_AUTOSCROLL = 32;
				_4.dnd.H_TRIGGER_AUTOSCROLL = 32;
				_4.dnd.V_AUTOSCROLL_VALUE = 16;
				_4.dnd.H_AUTOSCROLL_VALUE = 16;
				_4.dnd.autoScroll = function (e) {
					var v = _4.window.getBox(),
							dx = 0,
							dy = 0;
					if (e.clientX < _4.dnd.H_TRIGGER_AUTOSCROLL) {
						dx = -_4.dnd.H_AUTOSCROLL_VALUE;
					} else {
						if (e.clientX > v.w - _4.dnd.H_TRIGGER_AUTOSCROLL) {
							dx = _4.dnd.H_AUTOSCROLL_VALUE;
						}
					}
					if (e.clientY < _4.dnd.V_TRIGGER_AUTOSCROLL) {
						dy = -_4.dnd.V_AUTOSCROLL_VALUE;
					} else {
						if (e.clientY > v.h - _4.dnd.V_TRIGGER_AUTOSCROLL) {
							dy = _4.dnd.V_AUTOSCROLL_VALUE;
						}
					}
					window.scrollBy(dx, dy);
				};
				_4.dnd._validNodes = {
					"div": 1,
					"p": 1,
					"td": 1
				};
				_4.dnd._validOverflow = {
					"auto": 1,
					"scroll": 1
				};
				_4.dnd.autoScrollNodes = function (e) {
					for (var n = e.target; n;) {
						if (n.nodeType == 1 && (n.tagName.toLowerCase() in _4.dnd._validNodes)) {
							var s = _4.getComputedStyle(n);
							if (s.overflow.toLowerCase() in _4.dnd._validOverflow) {
								var b = _4._getContentBox(n, s),
										t = _4.position(n, true);
								var w = Math.min(_4.dnd.H_TRIGGER_AUTOSCROLL, b.w / 2),
										h = Math.min(_4.dnd.V_TRIGGER_AUTOSCROLL, b.h / 2),
										rx = e.pageX - t.x,
										ry = e.pageY - t.y,
										dx = 0,
										dy = 0;
								if (_4.isWebKit || _4.isOpera) {
									rx += _4.body().scrollLeft;
									ry += _4.body().scrollTop;
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
								var _8c = n.scrollLeft,
										_8d = n.scrollTop;
								n.scrollLeft = n.scrollLeft + dx;
								n.scrollTop = n.scrollTop + dy;
								if (_8c != n.scrollLeft || _8d != n.scrollTop) {
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
					_4.dnd.autoScroll(e);
				};
			}
			if (!_4._hasResource["dojo.dnd.Mover"]) {
				_4._hasResource["dojo.dnd.Mover"] = true;
				_4.provide("dojo.dnd.Mover");
				_4.declare("dojo.dnd.Mover", null, {
					constructor: function (_8e, e, _8f) {
						this.node = _4.byId(_8e);
						var pos = e.touches ? e.touches[0] : e;
						this.marginBox = {
							l: pos.pageX,
							t: pos.pageY
						};
						this.mouseButton = e.button;
						var h = (this.host = _8f),
								d = _8e.ownerDocument;
						this.events = [_4.connect(d, "onmousemove", this, "onFirstMove"), _4.connect(d, "ontouchmove", this, "onFirstMove"), _4.connect(d, "onmousemove", this, "onMouseMove"), _4.connect(d, "ontouchmove", this, "onMouseMove"), _4.connect(d, "onmouseup", this, "onMouseUp"), _4.connect(d, "ontouchend", this, "onMouseUp"), _4.connect(d, "ondragstart", _4.stopEvent), _4.connect(d.body, "onselectstart", _4.stopEvent)];
						if (h && h.onMoveStart) {
							h.onMoveStart(this);
						}
					},
					onMouseMove: function (e) {
						_4.dnd.autoScroll(e);
						var m = this.marginBox,
								pos = e.touches ? e.touches[0] : e;
						this.host.onMove(this, {
							l: m.l + pos.pageX,
							t: m.t + pos.pageY
						}, e);
						_4.stopEvent(e);
					},
					onMouseUp: function (e) {
						if (_4.isWebKit && _4.isMac && this.mouseButton == 2 ? e.button == 0 : this.mouseButton == e.button) {
							this.destroy();
						}
						_4.stopEvent(e);
					},
					onFirstMove: function (e) {
						var s = this.node.style,
								l, t, h = this.host;
						switch (s.position) {
							case "relative":
							case "absolute":
								l = Math.round(parseFloat(s.left)) || 0;
								t = Math.round(parseFloat(s.top)) || 0;
								break;
							default:
								s.position = "absolute";
								var m = _4.marginBox(this.node);
								var b = _4.doc.body;
								var bs = _4.getComputedStyle(b);
								var bm = _4._getMarginBox(b, bs);
								var bc = _4._getContentBox(b, bs);
								l = m.l - (bc.l - bm.l);
								t = m.t - (bc.t - bm.t);
								break;
						}
						this.marginBox.l = l - this.marginBox.l;
						this.marginBox.t = t - this.marginBox.t;
						if (h && h.onFirstMove) {
							h.onFirstMove(this, e);
						}
						_4.disconnect(this.events.shift());
						_4.disconnect(this.events.shift());
					},
					destroy: function () {
						_4.forEach(this.events, _4.disconnect);
						var h = this.host;
						if (h && h.onMoveStop) {
							h.onMoveStop(this);
						}
						this.events = this.node = this.host = null;
					}
				});
			}
			if (!_4._hasResource["dojo.dnd.Moveable"]) {
				_4._hasResource["dojo.dnd.Moveable"] = true;
				_4.provide("dojo.dnd.Moveable");
				_4.declare("dojo.dnd.Moveable", null, {
					handle: "",
					delay: 0,
					skip: false,
					constructor: function (_90, _91) {
						this.node = _4.byId(_90);
						if (!_91) {
							_91 = {};
						}
						this.handle = _91.handle ? _4.byId(_91.handle) : null;
						if (!this.handle) {
							this.handle = this.node;
						}
						this.delay = _91.delay > 0 ? _91.delay : 0;
						this.skip = _91.skip;
						this.mover = _91.mover ? _91.mover : _4.dnd.Mover;
						this.events = [_4.connect(this.handle, "onmousedown", this, "onMouseDown"), _4.connect(this.handle, "ontouchstart", this, "onMouseDown"), _4.connect(this.handle, "ondragstart", this, "onSelectStart"), _4.connect(this.handle, "onselectstart", this, "onSelectStart")];
					},
					markupFactory: function (_92, _93) {
						return new _4.dnd.Moveable(_93, _92);
					},
					destroy: function () {
						_4.forEach(this.events, _4.disconnect);
						this.events = this.node = this.handle = null;
					},
					onMouseDown: function (e) {
						if (this.skip && _4.dnd.isFormElement(e)) {
							return;
						}
						if (this.delay) {
							this.events.push(_4.connect(this.handle, "onmousemove", this, "onMouseMove"), _4.connect(this.handle, "ontouchmove", this, "onMouseMove"), _4.connect(this.handle, "onmouseup", this, "onMouseUp"), _4.connect(this.handle, "ontouchend", this, "onMouseUp"));
							var pos = e.touches ? e.touches[0] : e;
							this._lastX = pos.pageX;
							this._lastY = pos.pageY;
						} else {
							this.onDragDetected(e);
						}
						_4.stopEvent(e);
					},
					onMouseMove: function (e) {
						var pos = e.touches ? e.touches[0] : e;
						if (Math.abs(pos.pageX - this._lastX) > this.delay || Math.abs(pos.pageY - this._lastY) > this.delay) {
							this.onMouseUp(e);
							this.onDragDetected(e);
						}
						_4.stopEvent(e);
					},
					onMouseUp: function (e) {
						for (var i = 0; i < 2; ++i) {
							_4.disconnect(this.events.pop());
						}
						_4.stopEvent(e);
					},
					onSelectStart: function (e) {
						if (!this.skip || !_4.dnd.isFormElement(e)) {
							_4.stopEvent(e);
						}
					},
					onDragDetected: function (e) {
						new this.mover(this.node, e, this);
					},
					onMoveStart: function (_94) {
						_4.publish("/dnd/move/start", [_94]);
						_4.addClass(_4.body(), "dojoMove");
						_4.addClass(this.node, "dojoMoveItem");
					},
					onMoveStop: function (_95) {
						_4.publish("/dnd/move/stop", [_95]);
						_4.removeClass(_4.body(), "dojoMove");
						_4.removeClass(this.node, "dojoMoveItem");
					},
					onFirstMove: function (_96, e) {
					},
					onMove: function (_97, _98, e) {
						this.onMoving(_97, _98);
						var s = _97.node.style;
						s.left = _98.l + "px";
						s.top = _98.t + "px";
						this.onMoved(_97, _98);
					},
					onMoving: function (_99, _9a) {
					},
					onMoved: function (_9b, _9c) {
					}
				});
			}
			if (!_4._hasResource["dojo.dnd.move"]) {
				_4._hasResource["dojo.dnd.move"] = true;
				_4.provide("dojo.dnd.move");
				_4.declare("dojo.dnd.move.constrainedMoveable", _4.dnd.Moveable, {
					constraints: function () {
					},
					within: false,
					markupFactory: function (_9d, _9e) {
						return new _4.dnd.move.constrainedMoveable(_9e, _9d);
					},
					constructor: function (_9f, _a0) {
						if (!_a0) {
							_a0 = {};
						}
						this.constraints = _a0.constraints;
						this.within = _a0.within;
					},
					onFirstMove: function (_a1) {
						var c = this.constraintBox = this.constraints.call(this, _a1);
						c.r = c.l + c.w;
						c.b = c.t + c.h;
						if (this.within) {
							var mb = _4._getMarginSize(_a1.node);
							c.r -= mb.w;
							c.b -= mb.h;
						}
					},
					onMove: function (_a2, _a3) {
						var c = this.constraintBox,
								s = _a2.node.style;
						this.onMoving(_a2, _a3);
						_a3.l = _a3.l < c.l ? c.l : c.r < _a3.l ? c.r : _a3.l;
						_a3.t = _a3.t < c.t ? c.t : c.b < _a3.t ? c.b : _a3.t;
						s.left = _a3.l + "px";
						s.top = _a3.t + "px";
						this.onMoved(_a2, _a3);
					}
				});
				_4.declare("dojo.dnd.move.boxConstrainedMoveable", _4.dnd.move.constrainedMoveable, {
					box: {},
					markupFactory: function (_a4, _a5) {
						return new _4.dnd.move.boxConstrainedMoveable(_a5, _a4);
					},
					constructor: function (_a6, _a7) {
						var box = _a7 && _a7.box;
						this.constraints = function () {
							return box;
						};
					}
				});
				_4.declare("dojo.dnd.move.parentConstrainedMoveable", _4.dnd.move.constrainedMoveable, {
					area: "content",
					markupFactory: function (_a8, _a9) {
						return new _4.dnd.move.parentConstrainedMoveable(_a9, _a8);
					},
					constructor: function (_aa, _ab) {
						var _ac = _ab && _ab.area;
						this.constraints = function () {
							var n = this.node.parentNode,
									s = _4.getComputedStyle(n),
									mb = _4._getMarginBox(n, s);
							if (_ac == "margin") {
								return mb;
							}
							var t = _4._getMarginExtents(n, s);
							mb.l += t.l, mb.t += t.t, mb.w -= t.w, mb.h -= t.h;
							if (_ac == "border") {
								return mb;
							}
							t = _4._getBorderExtents(n, s);
							mb.l += t.l, mb.t += t.t, mb.w -= t.w, mb.h -= t.h;
							if (_ac == "padding") {
								return mb;
							}
							t = _4._getPadExtents(n, s);
							mb.l += t.l, mb.t += t.t, mb.w -= t.w, mb.h -= t.h;
							return mb;
						};
					}
				});
				_4.dnd.constrainedMover = _4.dnd.move.constrainedMover;
				_4.dnd.boxConstrainedMover = _4.dnd.move.boxConstrainedMover;
				_4.dnd.parentConstrainedMover = _4.dnd.move.parentConstrainedMover;
			}
			if (!_4._hasResource["dojo.dnd.TimedMoveable"]) {
				_4._hasResource["dojo.dnd.TimedMoveable"] = true;
				_4.provide("dojo.dnd.TimedMoveable");
				(function () {
					var _ad = _4.dnd.Moveable.prototype.onMove;
					_4.declare("dojo.dnd.TimedMoveable", _4.dnd.Moveable, {
						timeout: 40,
						constructor: function (_ae, _af) {
							if (!_af) {
								_af = {};
							}
							if (_af.timeout && typeof _af.timeout == "number" && _af.timeout >= 0) {
								this.timeout = _af.timeout;
							}
						},
						markupFactory: function (_b0, _b1) {
							return new _4.dnd.TimedMoveable(_b1, _b0);
						},
						onMoveStop: function (_b2) {
							if (_b2._timer) {
								clearTimeout(_b2._timer);
								_ad.call(this, _b2, _b2._leftTop);
							}
							_4.dnd.Moveable.prototype.onMoveStop.apply(this, arguments);
						},
						onMove: function (_b3, _b4) {
							_b3._leftTop = _b4;
							if (!_b3._timer) {
								var _b5 = this;
								_b3._timer = setTimeout(function () {
									_b3._timer = null;
									_ad.call(_b5, _b3, _b3._leftTop);
								}, this.timeout);
							}
						}
					});
				})();
			}
			if (!_4._hasResource["dojo.fx.Toggler"]) {
				_4._hasResource["dojo.fx.Toggler"] = true;
				_4.provide("dojo.fx.Toggler");
				_4.declare("dojo.fx.Toggler", null, {
					node: null,
					showFunc: _4.fadeIn,
					hideFunc: _4.fadeOut,
					showDuration: 200,
					hideDuration: 200,
					constructor: function (_b6) {
						var _b7 = this;
						_4.mixin(_b7, _b6);
						_b7.node = _b6.node;
						_b7._showArgs = _4.mixin({}, _b6);
						_b7._showArgs.node = _b7.node;
						_b7._showArgs.duration = _b7.showDuration;
						_b7.showAnim = _b7.showFunc(_b7._showArgs);
						_b7._hideArgs = _4.mixin({}, _b6);
						_b7._hideArgs.node = _b7.node;
						_b7._hideArgs.duration = _b7.hideDuration;
						_b7.hideAnim = _b7.hideFunc(_b7._hideArgs);
						_4.connect(_b7.showAnim, "beforeBegin", _4.hitch(_b7.hideAnim, "stop", true));
						_4.connect(_b7.hideAnim, "beforeBegin", _4.hitch(_b7.showAnim, "stop", true));
					},
					show: function (_b8) {
						return this.showAnim.play(_b8 || 0);
					},
					hide: function (_b9) {
						return this.hideAnim.play(_b9 || 0);
					}
				});
			}
			if (!_4._hasResource["dojo.fx"]) {
				_4._hasResource["dojo.fx"] = true;
				_4.provide("dojo.fx");
				(function () {
					var d = _4,
							_ba = {
								_fire: function (evt, _bb) {
									if (this[evt]) {
										this[evt].apply(this, _bb || []);
									}
									return this;
								}
							};
					var _bc = function (_bd) {
						this._index = -1;
						this._animations = _bd || [];
						this._current = this._onAnimateCtx = this._onEndCtx = null;
						this.duration = 0;
						d.forEach(this._animations, function (a) {
							this.duration += a.duration;
							if (a.delay) {
								this.duration += a.delay;
							}
						}, this);
					};
					d.extend(_bc, {
						_onAnimate: function () {
							this._fire("onAnimate", arguments);
						},
						_onEnd: function () {
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
						},
						play: function (_be, _bf) {
							if (!this._current) {
								this._current = this._animations[this._index = 0];
							}
							if (!_bf && this._current.status() == "playing") {
								return this;
							}
							var _c0 = d.connect(this._current, "beforeBegin", this, function () {
										this._fire("beforeBegin");
									}),
									_c1 = d.connect(this._current, "onBegin", this, function (arg) {
										this._fire("onBegin", arguments);
									}),
									_c2 = d.connect(this._current, "onPlay", this, function (arg) {
										this._fire("onPlay", arguments);
										d.disconnect(_c0);
										d.disconnect(_c1);
										d.disconnect(_c2);
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
						},
						pause: function () {
							if (this._current) {
								var e = d.connect(this._current, "onPause", this, function (arg) {
									this._fire("onPause", arguments);
									d.disconnect(e);
								});
								this._current.pause();
							}
							return this;
						},
						gotoPercent: function (_c3, _c4) {
							this.pause();
							var _c5 = this.duration * _c3;
							this._current = null;
							d.some(this._animations, function (a) {
								if (a.duration <= _c5) {
									this._current = a;
									return true;
								}
								_c5 -= a.duration;
								return false;
							});
							if (this._current) {
								this._current.gotoPercent(_c5 / this._current.duration, _c4);
							}
							return this;
						},
						stop: function (_c6) {
							if (this._current) {
								if (_c6) {
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
						},
						status: function () {
							return this._current ? this._current.status() : "stopped";
						},
						destroy: function () {
							if (this._onAnimateCtx) {
								d.disconnect(this._onAnimateCtx);
							}
							if (this._onEndCtx) {
								d.disconnect(this._onEndCtx);
							}
						}
					});
					d.extend(_bc, _ba);
					_4.fx.chain = function (_c7) {
						return new _bc(_c7);
					};
					var _c8 = function (_c9) {
						this._animations = _c9 || [];
						this._connects = [];
						this._finished = 0;
						this.duration = 0;
						d.forEach(_c9, function (a) {
							var _ca = a.duration;
							if (a.delay) {
								_ca += a.delay;
							}
							if (this.duration < _ca) {
								this.duration = _ca;
							}
							this._connects.push(d.connect(a, "onEnd", this, "_onEnd"));
						}, this);
						this._pseudoAnimation = new d.Animation({
							curve: [0, 1],
							duration: this.duration
						});
						var _cb = this;
						d.forEach(["beforeBegin", "onBegin", "onPlay", "onAnimate", "onPause", "onStop", "onEnd"], function (evt) {
							_cb._connects.push(d.connect(_cb._pseudoAnimation, evt, function () {
								_cb._fire(evt, arguments);
							}));
						});
					};
					d.extend(_c8, {
						_doAction: function (_cc, _cd) {
							d.forEach(this._animations, function (a) {
								a[_cc].apply(a, _cd);
							});
							return this;
						},
						_onEnd: function () {
							if (++this._finished > this._animations.length) {
								this._fire("onEnd");
							}
						},
						_call: function (_ce, _cf) {
							var t = this._pseudoAnimation;
							t[_ce].apply(t, _cf);
						},
						play: function (_d0, _d1) {
							this._finished = 0;
							this._doAction("play", arguments);
							this._call("play", arguments);
							return this;
						},
						pause: function () {
							this._doAction("pause", arguments);
							this._call("pause", arguments);
							return this;
						},
						gotoPercent: function (_d2, _d3) {
							var ms = this.duration * _d2;
							d.forEach(this._animations, function (a) {
								a.gotoPercent(a.duration < ms ? 1 : (ms / a.duration), _d3);
							});
							this._call("gotoPercent", arguments);
							return this;
						},
						stop: function (_d4) {
							this._doAction("stop", arguments);
							this._call("stop", arguments);
							return this;
						},
						status: function () {
							return this._pseudoAnimation.status();
						},
						destroy: function () {
							d.forEach(this._connects, _4.disconnect);
						}
					});
					d.extend(_c8, _ba);
					_4.fx.combine = function (_d5) {
						return new _c8(_d5);
					};
					_4.fx.wipeIn = function (_d6) {
						var _d7 = _d6.node = d.byId(_d6.node),
								s = _d7.style,
								o;
						var _d8 = d.animateProperty(d.mixin({
							properties: {
								height: {
									start: function () {
										o = s.overflow;
										s.overflow = "hidden";
										if (s.visibility == "hidden" || s.display == "none") {
											s.height = "1px";
											s.display = "";
											s.visibility = "";
											return 1;
										} else {
											var _d9 = d.style(_d7, "height");
											return Math.max(_d9, 1);
										}
									},
									end: function () {
										return _d7.scrollHeight;
									}
								}
							}
						}, _d6));
						d.connect(_d8, "onEnd", function () {
							s.height = "auto";
							s.overflow = o;
						});
						return _d8;
					};
					_4.fx.wipeOut = function (_da) {
						var _db = _da.node = d.byId(_da.node),
								s = _db.style,
								o;
						var _dc = d.animateProperty(d.mixin({
							properties: {
								height: {
									end: 1
								}
							}
						}, _da));
						d.connect(_dc, "beforeBegin", function () {
							o = s.overflow;
							s.overflow = "hidden";
							s.display = "";
						});
						d.connect(_dc, "onEnd", function () {
							s.overflow = o;
							s.height = "auto";
							s.display = "none";
						});
						return _dc;
					};
					_4.fx.slideTo = function (_dd) {
						var _de = _dd.node = d.byId(_dd.node),
								top = null,
								_df = null;
						var _e0 = (function (n) {
							return function () {
								var cs = d.getComputedStyle(n);
								var pos = cs.position;
								top = (pos == "absolute" ? n.offsetTop : parseInt(cs.top) || 0);
								_df = (pos == "absolute" ? n.offsetLeft : parseInt(cs.left) || 0);
								if (pos != "absolute" && pos != "relative") {
									var ret = d.position(n, true);
									top = ret.y;
									_df = ret.x;
									n.style.position = "absolute";
									n.style.top = top + "px";
									n.style.left = _df + "px";
								}
							};
						})(_de);
						_e0();
						var _e1 = d.animateProperty(d.mixin({
							properties: {
								top: _dd.top || 0,
								left: _dd.left || 0
							}
						}, _dd));
						d.connect(_e1, "beforeBegin", _e1, _e0);
						return _e1;
					};
				})();
			}
			if (!_4._hasResource["dijit._base.manager"]) {
				_4._hasResource["dijit._base.manager"] = true;
				_4.provide("dijit._base.manager");
				_4.declare("dijit.WidgetSet", null, {
					constructor: function () {
						this._hash = {};
						this.length = 0;
					},
					add: function (_e2) {
						if (this._hash[_e2.id]) {
							throw new Error("Tried to register widget with id==" + _e2.id + " but that id is already registered");
						}
						this._hash[_e2.id] = _e2;
						this.length++;
					},
					remove: function (id) {
						if (this._hash[id]) {
							delete this._hash[id];
							this.length--;
						}
					},
					forEach: function (_e3, _e4) {
						_e4 = _e4 || _4.global;
						var i = 0,
								id;
						for (id in this._hash) {
							_e3.call(_e4, this._hash[id], i++, this._hash);
						}
						return this;
					},
					filter: function (_e5, _e6) {
						_e6 = _e6 || _4.global;
						var res = new _5.WidgetSet(),
								i = 0,
								id;
						for (id in this._hash) {
							var w = this._hash[id];
							if (_e5.call(_e6, w, i++, this._hash)) {
								res.add(w);
							}
						}
						return res;
					},
					byId: function (id) {
						return this._hash[id];
					},
					byClass: function (cls) {
						var res = new _5.WidgetSet(),
								id, _e7;
						for (id in this._hash) {
							_e7 = this._hash[id];
							if (_e7.declaredClass == cls) {
								res.add(_e7);
							}
						}
						return res;
					},
					toArray: function () {
						var ar = [];
						for (var id in this._hash) {
							ar.push(this._hash[id]);
						}
						return ar;
					},
					map: function (_e8, _e9) {
						return _4.map(this.toArray(), _e8, _e9);
					},
					every: function (_ea, _eb) {
						_eb = _eb || _4.global;
						var x = 0,
								i;
						for (i in this._hash) {
							if (!_ea.call(_eb, this._hash[i], x++, this._hash)) {
								return false;
							}
						}
						return true;
					},
					some: function (_ec, _ed) {
						_ed = _ed || _4.global;
						var x = 0,
								i;
						for (i in this._hash) {
							if (_ec.call(_ed, this._hash[i], x++, this._hash)) {
								return true;
							}
						}
						return false;
					}
				});
				(function () {
					_5.registry = new _5.WidgetSet();
					var _ee = _5.registry._hash,
							_ef = _4.attr,
							_f0 = _4.hasAttr,
							_f1 = _4.style;
					_5.byId = function (id) {
						return typeof id == "string" ? _ee[id] : id;
					};
					var _f2 = {};
					_5.getUniqueId = function (_f3) {
						var id;
						do {
							id = _f3 + "_" + (_f3 in _f2 ? ++_f2[_f3] : _f2[_f3] = 0);
						} while (_ee[id]);
						return _5._scopeName == "dijit" ? id : _5._scopeName + "_" + id;
					};
					_5.findWidgets = function (_f4) {
						var _f5 = [];

						function _f6(_f7) {
							for (var _f8 = _f7.firstChild; _f8; _f8 = _f8.nextSibling) {
								if (_f8.nodeType == 1) {
									var _f9 = _f8.getAttribute("widgetId");
									if (_f9) {
										var _fa = _ee[_f9];
										if (_fa) {
											_f5.push(_fa);
										}
									} else {
										_f6(_f8);
									}
								}
							}
						};
						_f6(_f4);
						return _f5;
					};
					_5._destroyAll = function () {
						_5._curFocus = null;
						_5._prevFocus = null;
						_5._activeStack = [];
						_4.forEach(_5.findWidgets(_4.body()), function (_fb) {
							if (!_fb._destroyed) {
								if (_fb.destroyRecursive) {
									_fb.destroyRecursive();
								} else {
									if (_fb.destroy) {
										_fb.destroy();
									}
								}
							}
						});
					};
					if (_4.isIE) {
						_4.addOnWindowUnload(function () {
							_5._destroyAll();
						});
					}
					_5.byNode = function (_fc) {
						return _ee[_fc.getAttribute("widgetId")];
					};
					_5.getEnclosingWidget = function (_fd) {
						while (_fd) {
							var id = _fd.getAttribute && _fd.getAttribute("widgetId");
							if (id) {
								return _ee[id];
							}
							_fd = _fd.parentNode;
						}
						return null;
					};
					var _fe = (_5._isElementShown = function (_ff) {
						var s = _f1(_ff);
						return (s.visibility != "hidden") && (s.visibility != "collapsed") && (s.display != "none") && (_ef(_ff, "type") != "hidden");
					});
					_5.hasDefaultTabStop = function (elem) {
						switch (elem.nodeName.toLowerCase()) {
							case "a":
								return _f0(elem, "href");
							case "area":
							case "button":
							case "input":
							case "object":
							case "select":
							case "textarea":
								return true;
							case "iframe":
								var body;
								try {
									var _100 = elem.contentDocument;
									if ("designMode" in _100 && _100.designMode == "on") {
										return true;
									}
									body = _100.body;
								} catch (e1) {
									try {
										body = elem.contentWindow.document.body;
									} catch (e2) {
										return false;
									}
								}
								return body.contentEditable == "true" || (body.firstChild && body.firstChild.contentEditable == "true");
							default:
								return elem.contentEditable == "true";
						}
					};
					var _101 = (_5.isTabNavigable = function (elem) {
						if (_ef(elem, "disabled")) {
							return false;
						} else {
							if (_f0(elem, "tabIndex")) {
								return _ef(elem, "tabIndex") >= 0;
							} else {
								return _5.hasDefaultTabStop(elem);
							}
						}
					});
					_5._getTabNavigable = function (root) {
						var _102, last, _103, _104, _105, _106, _107 = {};

						function _108(node) {
							return node && node.tagName.toLowerCase() == "input" && node.type && node.type.toLowerCase() == "radio" && node.name && node.name.toLowerCase();
						};
						var _109 = function (_10a) {
							_4.query("> *", _10a).forEach(function (_10b) {
								if ((_4.isIE && _10b.scopeName !== "HTML") || !_fe(_10b)) {
									return;
								}
								if (_101(_10b)) {
									var _10c = _ef(_10b, "tabIndex");
									if (!_f0(_10b, "tabIndex") || _10c == 0) {
										if (!_102) {
											_102 = _10b;
										}
										last = _10b;
									} else {
										if (_10c > 0) {
											if (!_103 || _10c < _104) {
												_104 = _10c;
												_103 = _10b;
											}
											if (!_105 || _10c >= _106) {
												_106 = _10c;
												_105 = _10b;
											}
										}
									}
									var rn = _108(_10b);
									if (_4.attr(_10b, "checked") && rn) {
										_107[rn] = _10b;
									}
								}
								if (_10b.nodeName.toUpperCase() != "SELECT") {
									_109(_10b);
								}
							});
						};
						if (_fe(root)) {
							_109(root);
						}

						function rs(node) {
							return _107[_108(node)] || node;
						};
						return {
							first: rs(_102),
							last: rs(last),
							lowest: rs(_103),
							highest: rs(_105)
						};
					};
					_5.getFirstInTabbingOrder = function (root) {
						var _10d = _5._getTabNavigable(_4.byId(root));
						return _10d.lowest ? _10d.lowest : _10d.first;
					};
					_5.getLastInTabbingOrder = function (root) {
						var _10e = _5._getTabNavigable(_4.byId(root));
						return _10e.last ? _10e.last : _10e.highest;
					};
					_5.defaultDuration = _4.config["defaultDuration"] || 200;
				})();
			}
			if (!_4._hasResource["dojo.Stateful"]) {
				_4._hasResource["dojo.Stateful"] = true;
				_4.provide("dojo.Stateful");
				_4.declare("dojo.Stateful", null, {
					postscript: function (_10f) {
						if (_10f) {
							_4.mixin(this, _10f);
						}
					},
					get: function (name) {
						return this[name];
					},
					set: function (name, _110) {
						if (typeof name === "object") {
							for (var x in name) {
								this.set(x, name[x]);
							}
							return this;
						}
						var _111 = this[name];
						this[name] = _110;
						if (this._watchCallbacks) {
							this._watchCallbacks(name, _111, _110);
						}
						return this;
					},
					watch: function (name, _112) {
						var _113 = this._watchCallbacks;
						if (!_113) {
							var self = this;
							_113 = this._watchCallbacks = function (name, _114, _115, _116) {
								var _117 = function (_118) {
									if (_118) {
										_118 = _118.slice();
										for (var i = 0, l = _118.length; i < l; i++) {
											try {
												_118[i].call(self, name, _114, _115);
											} catch (e) {
												console.error(e);
											}
										}
									}
								};
								_117(_113["_" + name]);
								if (!_116) {
									_117(_113["*"]);
								}
							};
						}
						if (!_112 && typeof name === "function") {
							_112 = name;
							name = "*";
						} else {
							name = "_" + name;
						}
						var _119 = _113[name];
						if (typeof _119 !== "object") {
							_119 = _113[name] = [];
						}
						_119.push(_112);
						return {
							unwatch: function () {
								_119.splice(_4.indexOf(_119, _112), 1);
							}
						};
					}
				});
			}
			if (!_4._hasResource["dijit._WidgetBase"]) {
				_4._hasResource["dijit._WidgetBase"] = true;
				_4.provide("dijit._WidgetBase");
				(function () {
					_4.declare("dijit._WidgetBase", _4.Stateful, {
						id: "",
						lang: "",
						dir: "",
						"class": "",
						style: "",
						title: "",
						tooltip: "",
						baseClass: "",
						srcNodeRef: null,
						domNode: null,
						containerNode: null,
						attributeMap: {
							id: "",
							dir: "",
							lang: "",
							"class": "",
							style: "",
							title: ""
						},
						_blankGif: (_4.config.blankGif || _4.moduleUrl("dojo", "resources/blank.gif")).toString(),
						postscript: function (_11a, _11b) {
							this.create(_11a, _11b);
						},
						create: function (_11c, _11d) {
							this.srcNodeRef = _4.byId(_11d);
							this._connects = [];
							this._subscribes = [];
							if (this.srcNodeRef && (typeof this.srcNodeRef.id == "string")) {
								this.id = this.srcNodeRef.id;
							}
							if (_11c) {
								this.params = _11c;
								_4._mixin(this, _11c);
							}
							this.postMixInProperties();
							if (!this.id) {
								this.id = _5.getUniqueId(this.declaredClass.replace(/\./g, "_"));
							}
							_5.registry.add(this);
							this.buildRendering();
							if (this.domNode) {
								this._applyAttributes();
								var _11e = this.srcNodeRef;
								if (_11e && _11e.parentNode && this.domNode !== _11e) {
									_11e.parentNode.replaceChild(this.domNode, _11e);
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
						},
						_applyAttributes: function () {
							var _11f = function (attr, _120) {
								if ((_120.params && attr in _120.params) || _120[attr]) {
									_120.set(attr, _120[attr]);
								}
							};
							for (var attr in this.attributeMap) {
								_11f(attr, this);
							}
							_4.forEach(this._getSetterAttributes(), function (a) {
								if (!(a in this.attributeMap)) {
									_11f(a, this);
								}
							}, this);
						},
						_getSetterAttributes: function () {
							var ctor = this.constructor;
							if (!ctor._setterAttrs) {
								var r = (ctor._setterAttrs = []),
										_121, _122 = ctor.prototype;
								for (var _123 in _122) {
									if (_4.isFunction(_122[_123]) && (_121 = _123.match(/^_set([a-zA-Z]*)Attr$/)) && _121[1]) {
										r.push(_121[1].charAt(0).toLowerCase() + _121[1].substr(1));
									}
								}
							}
							return ctor._setterAttrs;
						},
						postMixInProperties: function () {
						},
						buildRendering: function () {
							if (!this.domNode) {
								this.domNode = this.srcNodeRef || _4.create("div");
							}
							if (this.baseClass) {
								var _124 = this.baseClass.split(" ");
								if (!this.isLeftToRight()) {
									_124 = _124.concat(_4.map(_124, function (name) {
										return name + "Rtl";
									}));
								}
								_4.addClass(this.domNode, _124);
							}
						},
						postCreate: function () {
						},
						startup: function () {
							this._started = true;
						},
						destroyRecursive: function (_125) {
							this._beingDestroyed = true;
							this.destroyDescendants(_125);
							this.destroy(_125);
						},
						destroy: function (_126) {
							this._beingDestroyed = true;
							this.uninitialize();
							var d = _4,
									dfe = d.forEach,
									dun = d.unsubscribe;
							dfe(this._connects, function (_127) {
								dfe(_127, d.disconnect);
							});
							dfe(this._subscribes, function (_128) {
								dun(_128);
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
							this.destroyRendering(_126);
							_5.registry.remove(this.id);
							this._destroyed = true;
						},
						destroyRendering: function (_129) {
							if (this.bgIframe) {
								this.bgIframe.destroy(_129);
								delete this.bgIframe;
							}
							if (this.domNode) {
								if (_129) {
									_4.removeAttr(this.domNode, "widgetId");
								} else {
									_4.destroy(this.domNode);
								}
								delete this.domNode;
							}
							if (this.srcNodeRef) {
								if (!_129) {
									_4.destroy(this.srcNodeRef);
								}
								delete this.srcNodeRef;
							}
						},
						destroyDescendants: function (_12a) {
							_4.forEach(this.getChildren(), function (_12b) {
								if (_12b.destroyRecursive) {
									_12b.destroyRecursive(_12a);
								}
							});
						},
						uninitialize: function () {
							return false;
						},
						_setClassAttr: function (_12c) {
							var _12d = this[this.attributeMap["class"] || "domNode"];
							_4.replaceClass(_12d, _12c, this["class"]);
							this._set("class", _12c);
						},
						_setStyleAttr: function (_12e) {
							var _12f = this[this.attributeMap.style || "domNode"];
							if (_4.isObject(_12e)) {
								_4.style(_12f, _12e);
							} else {
								if (_12f.style.cssText) {
									_12f.style.cssText += "; " + _12e;
								} else {
									_12f.style.cssText = _12e;
								}
							}
							this._set("style", _12e);
						},
						_attrToDom: function (attr, _130) {
							var _131 = this.attributeMap[attr];
							_4.forEach(_4.isArray(_131) ? _131 : [_131], function (_132) {
								var _133 = this[_132.node || _132 || "domNode"];
								var type = _132.type || "attribute";
								switch (type) {
									case "attribute":
										if (_4.isFunction(_130)) {
											_130 = _4.hitch(this, _130);
										}
										var _134 = _132.attribute ? _132.attribute : (/^on[A-Z][a-zA-Z]*$/.test(attr) ? attr.toLowerCase() : attr);
										_4.attr(_133, _134, _130);
										break;
									case "innerText":
										_133.innerHTML = "";
										_133.appendChild(_4.doc.createTextNode(_130));
										break;
									case "innerHTML":
										_133.innerHTML = _130;
										break;
									case "class":
										_4.replaceClass(_133, _130, this[attr]);
										break;
								}
							}, this);
						},
						get: function (name) {
							var _135 = this._getAttrNames(name);
							return this[_135.g] ? this[_135.g]() : this[name];
						},
						set: function (name, _136) {
							if (typeof name === "object") {
								for (var x in name) {
									this.set(x, name[x]);
								}
								return this;
							}
							var _137 = this._getAttrNames(name);
							if (this[_137.s]) {
								var _138 = this[_137.s].apply(this, Array.prototype.slice.call(arguments, 1));
							} else {
								if (name in this.attributeMap) {
									this._attrToDom(name, _136);
								}
								this._set(name, _136);
							}
							return _138 || this;
						},
						_attrPairNames: {},
						_getAttrNames: function (name) {
							var apn = this._attrPairNames;
							if (apn[name]) {
								return apn[name];
							}
							var uc = name.charAt(0).toUpperCase() + name.substr(1);
							return (apn[name] = {
								n: name + "Node",
								s: "_set" + uc + "Attr",
								g: "_get" + uc + "Attr"
							});
						},
						_set: function (name, _139) {
							var _13a = this[name];
							this[name] = _139;
							if (this._watchCallbacks && this._created && _139 !== _13a) {
								this._watchCallbacks(name, _13a, _139);
							}
						},
						toString: function () {
							return "[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]";
						},
						getDescendants: function () {
							return this.containerNode ? _4.query("[widgetId]", this.containerNode).map(_5.byNode) : [];
						},
						getChildren: function () {
							return this.containerNode ? _5.findWidgets(this.containerNode) : [];
						},
						connect: function (obj, _13b, _13c) {
							var _13d = [_4._connect(obj, _13b, this, _13c)];
							this._connects.push(_13d);
							return _13d;
						},
						disconnect: function (_13e) {
							for (var i = 0; i < this._connects.length; i++) {
								if (this._connects[i] == _13e) {
									_4.forEach(_13e, _4.disconnect);
									this._connects.splice(i, 1);
									return;
								}
							}
						},
						subscribe: function (_13f, _140) {
							var _141 = _4.subscribe(_13f, this, _140);
							this._subscribes.push(_141);
							return _141;
						},
						unsubscribe: function (_142) {
							for (var i = 0; i < this._subscribes.length; i++) {
								if (this._subscribes[i] == _142) {
									_4.unsubscribe(_142);
									this._subscribes.splice(i, 1);
									return;
								}
							}
						},
						isLeftToRight: function () {
							return this.dir ? (this.dir == "ltr") : _4._isBodyLtr();
						},
						placeAt: function (_143, _144) {
							if (_143.declaredClass && _143.addChild) {
								_143.addChild(this, _144);
							} else {
								_4.place(this.domNode, _143, _144);
							}
							return this;
						}
					});
				})();
			}
			if (!_4._hasResource["dijit._base.focus"]) {
				_4._hasResource["dijit._base.focus"] = true;
				_4.provide("dijit._base.focus");
				_4.mixin(_5, {
					_curFocus: null,
					_prevFocus: null,
					isCollapsed: function () {
						return _5.getBookmark().isCollapsed;
					},
					getBookmark: function () {
						var bm, rg, tg, sel = _4.doc.selection,
								cf = _5._curFocus;
						if (_4.global.getSelection) {
							sel = _4.global.getSelection();
							if (sel) {
								if (sel.isCollapsed) {
									tg = cf ? cf.tagName : "";
									if (tg) {
										tg = tg.toLowerCase();
										if (tg == "textarea" || (tg == "input" && (!cf.type || cf.type.toLowerCase() == "text"))) {
											sel = {
												start: cf.selectionStart,
												end: cf.selectionEnd,
												node: cf,
												pRange: true
											};
											return {
												isCollapsed: (sel.end <= sel.start),
												mark: sel
											};
										}
									}
									bm = {
										isCollapsed: true
									};
									if (sel.rangeCount) {
										bm.mark = sel.getRangeAt(0).cloneRange();
									}
								} else {
									rg = sel.getRangeAt(0);
									bm = {
										isCollapsed: false,
										mark: rg.cloneRange()
									};
								}
							}
						} else {
							if (sel) {
								tg = cf ? cf.tagName : "";
								tg = tg.toLowerCase();
								if (cf && tg && (tg == "button" || tg == "textarea" || tg == "input")) {
									if (sel.type && sel.type.toLowerCase() == "none") {
										return {
											isCollapsed: true,
											mark: null
										};
									} else {
										rg = sel.createRange();
										return {
											isCollapsed: rg.text && rg.text.length ? false : true,
											mark: {
												range: rg,
												pRange: true
											}
										};
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
										var i = 0,
												len = rg.length;
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
					},
					moveToBookmark: function (_145) {
						var _146 = _4.doc,
								mark = _145.mark;
						if (mark) {
							if (_4.global.getSelection) {
								var sel = _4.global.getSelection();
								if (sel && sel.removeAllRanges) {
									if (mark.pRange) {
										var r = mark;
										var n = r.node;
										n.selectionStart = r.start;
										n.selectionEnd = r.end;
									} else {
										sel.removeAllRanges();
										sel.addRange(mark);
									}
								} else {
									console.warn("No idea how to restore selection for this browser!");
								}
							} else {
								if (_146.selection && mark) {
									var rg;
									if (mark.pRange) {
										rg = mark.range;
									} else {
										if (_4.isArray(mark)) {
											rg = _146.body.createControlRange();
											_4.forEach(mark, function (n) {
												rg.addElement(n);
											});
										} else {
											rg = _146.body.createTextRange();
											rg.moveToBookmark(mark);
										}
									}
									rg.select();
								}
							}
						}
					},
					getFocus: function (menu, _147) {
						var node = !_5._curFocus || (menu && _4.isDescendant(_5._curFocus, menu.domNode)) ? _5._prevFocus : _5._curFocus;
						return {
							node: node,
							bookmark: (node == _5._curFocus) && _4.withGlobal(_147 || _4.global, _5.getBookmark),
							openedForWindow: _147
						};
					},
					focus: function (_148) {
						if (!_148) {
							return;
						}
						var node = "node" in _148 ? _148.node : _148,
								_149 = _148.bookmark,
								_14a = _148.openedForWindow,
								_14b = _149 ? _149.isCollapsed : false;
						if (node) {
							var _14c = (node.tagName.toLowerCase() == "iframe") ? node.contentWindow : node;
							if (_14c && _14c.focus) {
								try {
									_14c.focus();
								} catch (e) {
								}
							}
							_5._onFocusNode(node);
						}
						if (_149 && _4.withGlobal(_14a || _4.global, _5.isCollapsed) && !_14b) {
							if (_14a) {
								_14a.focus();
							}
							try {
								_4.withGlobal(_14a || _4.global, _5.moveToBookmark, null, [_149]);
							} catch (e2) {
							}
						}
					},
					_activeStack: [],
					registerIframe: function (_14d) {
						return _5.registerWin(_14d.contentWindow, _14d);
					},
					unregisterIframe: function (_14e) {
						_5.unregisterWin(_14e);
					},
					registerWin: function (_14f, _150) {
						var _151 = function (evt) {
							_5._justMouseDowned = true;
							setTimeout(function () {
								_5._justMouseDowned = false;
							}, 0);
							if (_4.isIE && evt && evt.srcElement && evt.srcElement.parentNode == null) {
								return;
							}
							_5._onTouchNode(_150 || evt.target || evt.srcElement, "mouse");
						};
						var doc = _4.isIE ? _14f.document.documentElement : _14f.document;
						if (doc) {
							if (_4.isIE) {
								_14f.document.body.attachEvent("onmousedown", _151);
								var _152 = function (evt) {
									if (evt.srcElement.tagName.toLowerCase() != "#document" && _5.isTabNavigable(evt.srcElement)) {
										_5._onFocusNode(_150 || evt.srcElement);
									} else {
										_5._onTouchNode(_150 || evt.srcElement);
									}
								};
								doc.attachEvent("onactivate", _152);
								var _153 = function (evt) {
									_5._onBlurNode(_150 || evt.srcElement);
								};
								doc.attachEvent("ondeactivate", _153);
								return function () {
									_14f.document.detachEvent("onmousedown", _151);
									doc.detachEvent("onactivate", _152);
									doc.detachEvent("ondeactivate", _153);
									doc = null;
								};
							} else {
								doc.body.addEventListener("mousedown", _151, true);
								var _154 = function (evt) {
									_5._onFocusNode(_150 || evt.target);
								};
								doc.addEventListener("focus", _154, true);
								var _155 = function (evt) {
									_5._onBlurNode(_150 || evt.target);
								};
								doc.addEventListener("blur", _155, true);
								return function () {
									doc.body.removeEventListener("mousedown", _151, true);
									doc.removeEventListener("focus", _154, true);
									doc.removeEventListener("blur", _155, true);
									doc = null;
								};
							}
						}
					},
					unregisterWin: function (_156) {
						_156 && _156();
					},
					_onBlurNode: function (node) {
						_5._prevFocus = _5._curFocus;
						_5._curFocus = null;
						if (_5._justMouseDowned) {
							return;
						}
						if (_5._clearActiveWidgetsTimer) {
							clearTimeout(_5._clearActiveWidgetsTimer);
						}
						_5._clearActiveWidgetsTimer = setTimeout(function () {
							delete _5._clearActiveWidgetsTimer;
							_5._setStack([]);
							_5._prevFocus = null;
						}, 100);
					},
					_onTouchNode: function (node, by) {
						if (_5._clearActiveWidgetsTimer) {
							clearTimeout(_5._clearActiveWidgetsTimer);
							delete _5._clearActiveWidgetsTimer;
						}
						var _157 = [];
						try {
							while (node) {
								var _158 = _4.attr(node, "dijitPopupParent");
								if (_158) {
									node = _5.byId(_158).domNode;
								} else {
									if (node.tagName && node.tagName.toLowerCase() == "body") {
										if (node === _4.body()) {
											break;
										}
										node = _4.window.get(node.ownerDocument).frameElement;
									} else {
										var id = node.getAttribute && node.getAttribute("widgetId"),
												_159 = id && _5.byId(id);
										if (_159 && !(by == "mouse" && _159.get("disabled"))) {
											_157.unshift(id);
										}
										node = node.parentNode;
									}
								}
							}
						} catch (e) {
						}
						_5._setStack(_157, by);
					},
					_onFocusNode: function (node) {
						if (!node) {
							return;
						}
						if (node.nodeType == 9) {
							return;
						}
						_5._onTouchNode(node);
						if (node == _5._curFocus) {
							return;
						}
						if (_5._curFocus) {
							_5._prevFocus = _5._curFocus;
						}
						_5._curFocus = node;
						_4.publish("focusNode", [node]);
					},
					_setStack: function (_15a, by) {
						var _15b = _5._activeStack;
						_5._activeStack = _15a;
						for (var _15c = 0; _15c < Math.min(_15b.length, _15a.length); _15c++) {
							if (_15b[_15c] != _15a[_15c]) {
								break;
							}
						}
						var _15d;
						for (var i = _15b.length - 1; i >= _15c; i--) {
							_15d = _5.byId(_15b[i]);
							if (_15d) {
								_15d._focused = false;
								_15d.set("focused", false);
								_15d._hasBeenBlurred = true;
								if (_15d._onBlur) {
									_15d._onBlur(by);
								}
								_4.publish("widgetBlur", [_15d, by]);
							}
						}
						for (i = _15c; i < _15a.length; i++) {
							_15d = _5.byId(_15a[i]);
							if (_15d) {
								_15d._focused = true;
								_15d.set("focused", true);
								if (_15d._onFocus) {
									_15d._onFocus(by);
								}
								_4.publish("widgetFocus", [_15d, by]);
							}
						}
					}
				});
				_4.addOnLoad(function () {
					var _15e = _5.registerWin(window);
					if (_4.isIE) {
						_4.addOnWindowUnload(function () {
							_5.unregisterWin(_15e);
							_15e = null;
						});
					}
				});
			}
			if (!_4._hasResource["dojo.AdapterRegistry"]) {
				_4._hasResource["dojo.AdapterRegistry"] = true;
				_4.provide("dojo.AdapterRegistry");
				_4.AdapterRegistry = function (_15f) {
					this.pairs = [];
					this.returnWrappers = _15f || false;
				};
				_4.extend(_4.AdapterRegistry, {
					register: function (name, _160, wrap, _161, _162) {
						this.pairs[((_162) ? "unshift" : "push")]([name, _160, wrap, _161]);
					},
					match: function () {
						for (var i = 0; i < this.pairs.length; i++) {
							var pair = this.pairs[i];
							if (pair[1].apply(this, arguments)) {
								if ((pair[3]) || (this.returnWrappers)) {
									return pair[2];
								} else {
									return pair[2].apply(this, arguments);
								}
							}
						}
						throw new Error("No match found");
					},
					unregister: function (name) {
						for (var i = 0; i < this.pairs.length; i++) {
							var pair = this.pairs[i];
							if (pair[0] == name) {
								this.pairs.splice(i, 1);
								return true;
							}
						}
						return false;
					}
				});
			}
			if (!_4._hasResource["dijit._base.place"]) {
				_4._hasResource["dijit._base.place"] = true;
				_4.provide("dijit._base.place");
				_5.getViewport = function () {
					return _4.window.getBox();
				};
				_5.placeOnScreen = function (node, pos, _163, _164) {
					var _165 = _4.map(_163, function (_166) {
						var c = {
							corner: _166,
							pos: {
								x: pos.x,
								y: pos.y
							}
						};
						if (_164) {
							c.pos.x += _166.charAt(1) == "L" ? _164.x : -_164.x;
							c.pos.y += _166.charAt(0) == "T" ? _164.y : -_164.y;
						}
						return c;
					});
					return _5._place(node, _165);
				};
				_5._place = function (node, _167, _168, _169) {
					var view = _4.window.getBox();
					if (!node.parentNode || String(node.parentNode.tagName).toLowerCase() != "body") {
						_4.body().appendChild(node);
					}
					var best = null;
					_4.some(_167, function (_16a) {
						var _16b = _16a.corner;
						var pos = _16a.pos;
						var _16c = 0;
						var _16d = {
							w: _16b.charAt(1) == "L" ? (view.l + view.w) - pos.x : pos.x - view.l,
							h: _16b.charAt(1) == "T" ? (view.t + view.h) - pos.y : pos.y - view.t
						};
						if (_168) {
							var res = _168(node, _16a.aroundCorner, _16b, _16d, _169);
							_16c = typeof res == "undefined" ? 0 : res;
						}
						var _16e = node.style;
						var _16f = _16e.display;
						var _170 = _16e.visibility;
						_16e.visibility = "hidden";
						_16e.display = "";
						var mb = _4.marginBox(node);
						_16e.display = _16f;
						_16e.visibility = _170;
						var _171 = Math.max(view.l, _16b.charAt(1) == "L" ? pos.x : (pos.x - mb.w)),
								_172 = Math.max(view.t, _16b.charAt(0) == "T" ? pos.y : (pos.y - mb.h)),
								endX = Math.min(view.l + view.w, _16b.charAt(1) == "L" ? (_171 + mb.w) : pos.x),
								endY = Math.min(view.t + view.h, _16b.charAt(0) == "T" ? (_172 + mb.h) : pos.y),
								_173 = endX - _171,
								_174 = endY - _172;
						_16c += (mb.w - _173) + (mb.h - _174);
						if (best == null || _16c < best.overflow) {
							best = {
								corner: _16b,
								aroundCorner: _16a.aroundCorner,
								x: _171,
								y: _172,
								w: _173,
								h: _174,
								overflow: _16c,
								spaceAvailable: _16d
							};
						}
						return !_16c;
					});
					if (best.overflow && _168) {
						_168(node, best.aroundCorner, best.corner, best.spaceAvailable, _169);
					}
					var l = _4._isBodyLtr(),
							s = node.style;
					s.top = best.y + "px";
					s[l ? "left" : "right"] = (l ? best.x : view.w - best.x - best.w) + "px";
					return best;
				};
				_5.placeOnScreenAroundNode = function (node, _175, _176, _177) {
					_175 = _4.byId(_175);
					var _178 = _4.position(_175, true);
					return _5._placeOnScreenAroundRect(node, _178.x, _178.y, _178.w, _178.h, _176, _177);
				};
				_5.placeOnScreenAroundRectangle = function (node, _179, _17a, _17b) {
					return _5._placeOnScreenAroundRect(node, _179.x, _179.y, _179.width, _179.height, _17a, _17b);
				};
				_5._placeOnScreenAroundRect = function (node, x, y, _17c, _17d, _17e, _17f) {
					var _180 = [];
					for (var _181 in _17e) {
						_180.push({
							aroundCorner: _181,
							corner: _17e[_181],
							pos: {
								x: x + (_181.charAt(1) == "L" ? 0 : _17c),
								y: y + (_181.charAt(0) == "T" ? 0 : _17d)
							}
						});
					}
					return _5._place(node, _180, _17f, {
						w: _17c,
						h: _17d
					});
				};
				_5.placementRegistry = new _4.AdapterRegistry();
				_5.placementRegistry.register("node", function (n, x) {
					return typeof x == "object" && typeof x.offsetWidth != "undefined" && typeof x.offsetHeight != "undefined";
				}, _5.placeOnScreenAroundNode);
				_5.placementRegistry.register("rect", function (n, x) {
					return typeof x == "object" && "x" in x && "y" in x && "width" in x && "height" in x;
				}, _5.placeOnScreenAroundRectangle);
				_5.placeOnScreenAroundElement = function (node, _182, _183, _184) {
					return _5.placementRegistry.match.apply(_5.placementRegistry, arguments);
				};
				_5.getPopupAroundAlignment = function (_185, _186) {
					var _187 = {};
					_4.forEach(_185, function (pos) {
						switch (pos) {
							case "after":
								_187[_186 ? "BR" : "BL"] = _186 ? "BL" : "BR";
								break;
							case "before":
								_187[_186 ? "BL" : "BR"] = _186 ? "BR" : "BL";
								break;
							case "below-alt":
								_186 = !_186;
							case "below":
								_187[_186 ? "BL" : "BR"] = _186 ? "TL" : "TR";
								_187[_186 ? "BR" : "BL"] = _186 ? "TR" : "TL";
								break;
							case "above-alt":
								_186 = !_186;
							case "above":
							default:
								_187[_186 ? "TL" : "TR"] = _186 ? "BL" : "BR";
								_187[_186 ? "TR" : "TL"] = _186 ? "BR" : "BL";
								break;
						}
					});
					return _187;
				};
			}
			if (!_4._hasResource["dijit._base.window"]) {
				_4._hasResource["dijit._base.window"] = true;
				_4.provide("dijit._base.window");
				_5.getDocumentWindow = function (doc) {
					return _4.window.get(doc);
				};
			}
			if (!_4._hasResource["dijit._base.popup"]) {
				_4._hasResource["dijit._base.popup"] = true;
				_4.provide("dijit._base.popup");
				_5.popup = {
					_stack: [],
					_beginZIndex: 1000,
					_idGen: 1,
					_createWrapper: function (_188) {
						var _189 = _188.declaredClass ? _188._popupWrapper : (_188.parentNode && _4.hasClass(_188.parentNode, "dijitPopup")),
								node = _188.domNode || _188;
						if (!_189) {
							_189 = _4.create("div", {
								"class": "dijitPopup",
								style: {
									display: "none"
								},
								role: "presentation"
							}, _4.body());
							_189.appendChild(node);
							var s = node.style;
							s.display = "";
							s.visibility = "";
							s.position = "";
							s.top = "0px";
							if (_188.declaredClass) {
								_188._popupWrapper = _189;
								_4.connect(_188, "destroy", function () {
									_4.destroy(_189);
									delete _188._popupWrapper;
								});
							}
						}
						return _189;
					},
					moveOffScreen: function (_18a) {
						var _18b = this._createWrapper(_18a);
						_4.style(_18b, {
							visibility: "hidden",
							top: "-9999px",
							display: ""
						});
					},
					hide: function (_18c) {
						var _18d = this._createWrapper(_18c);
						_4.style(_18d, "display", "none");
					},
					getTopPopup: function () {
						var _18e = this._stack;
						for (var pi = _18e.length - 1; pi > 0 && _18e[pi].parent === _18e[pi - 1].widget; pi--) {
						}
						return _18e[pi];
					},
					open: function (args) {
						var _18f = this._stack,
								_190 = args.popup,
								_191 = args.orient || ((args.parent ? args.parent.isLeftToRight() : _4._isBodyLtr()) ? {
									"BL": "TL",
									"BR": "TR",
									"TL": "BL",
									"TR": "BR"
								} : {
									"BR": "TR",
									"BL": "TL",
									"TR": "BR",
									"TL": "BL"
								}),
								_192 = args.around,
								id = (args.around && args.around.id) ? (args.around.id + "_dropdown") : ("popup_" + this._idGen++);
						while (_18f.length && (!args.parent || !_4.isDescendant(args.parent.domNode, _18f[_18f.length - 1].widget.domNode))) {
							_5.popup.close(_18f[_18f.length - 1].widget);
						}
						var _193 = this._createWrapper(_190);
						_4.attr(_193, {
							id: id,
							style: {
								zIndex: this._beginZIndex + _18f.length
							},
							"class": "dijitPopup " + (_190.baseClass || _190["class"] || "").split(" ")[0] + "Popup",
							dijitPopupParent: args.parent ? args.parent.id : ""
						});
						if (_4.isIE || _4.isMoz) {
							if (!_190.bgIframe) {
								_190.bgIframe = new _5.BackgroundIframe(_193);
							}
						}
						var best = _192 ? _5.placeOnScreenAroundElement(_193, _192, _191, _190.orient ? _4.hitch(_190, "orient") : null) : _5.placeOnScreen(_193, args, _191 == "R" ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], args.padding);
						_193.style.display = "";
						_193.style.visibility = "visible";
						_190.domNode.style.visibility = "visible";
						var _194 = [];
						_194.push(_4.connect(_193, "onkeypress", this, function (evt) {
							if (evt.charOrCode == _4.keys.ESCAPE && args.onCancel) {
								_4.stopEvent(evt);
								args.onCancel();
							} else {
								if (evt.charOrCode === _4.keys.TAB) {
									_4.stopEvent(evt);
									var _195 = this.getTopPopup();
									if (_195 && _195.onCancel) {
										_195.onCancel();
									}
								}
							}
						}));
						if (_190.onCancel) {
							_194.push(_4.connect(_190, "onCancel", args.onCancel));
						}
						_194.push(_4.connect(_190, _190.onExecute ? "onExecute" : "onChange", this, function () {
							var _196 = this.getTopPopup();
							if (_196 && _196.onExecute) {
								_196.onExecute();
							}
						}));
						_18f.push({
							widget: _190,
							parent: args.parent,
							onExecute: args.onExecute,
							onCancel: args.onCancel,
							onClose: args.onClose,
							handlers: _194
						});
						if (_190.onOpen) {
							_190.onOpen(best);
						}
						return best;
					},
					close: function (_197) {
						var _198 = this._stack;
						while ((_197 && _4.some(_198, function (elem) {
							return elem.widget == _197;
						})) || (!_197 && _198.length)) {
							var top = _198.pop(),
									_199 = top.widget,
									_19a = top.onClose;
							if (_199.onClose) {
								_199.onClose();
							}
							_4.forEach(top.handlers, _4.disconnect);
							if (_199 && _199.domNode) {
								this.hide(_199);
							}
							if (_19a) {
								_19a();
							}
						}
					}
				};
				_5._frames = new function () {
					var _19b = [];
					this.pop = function () {
						var _19c;
						if (_19b.length) {
							_19c = _19b.pop();
							_19c.style.display = "";
						} else {
							if (_4.isIE < 9) {
								var burl = _4.config["dojoBlankHtmlUrl"] || (_4.moduleUrl("dojo", "resources/blank.html") + "") || "javascript:\"\"";
								var html = "<iframe src='" + burl + "'" + " style='position: absolute; left: 0px; top: 0px;" + "z-index: -1; filter:Alpha(Opacity=\"0\");'>";
								_19c = _4.doc.createElement(html);
							} else {
								_19c = _4.create("iframe");
								_19c.src = "javascript:\"\"";
								_19c.className = "dijitBackgroundIframe";
								_4.style(_19c, "opacity", 0.1);
							}
							_19c.tabIndex = -1;
							_5.setWaiRole(_19c, "presentation");
						}
						return _19c;
					};
					this.push = function (_19d) {
						_19d.style.display = "none";
						_19b.push(_19d);
					};
				}();
				_5.BackgroundIframe = function (node) {
					if (!node.id) {
						throw new Error("no id");
					}
					if (_4.isIE || _4.isMoz) {
						var _19e = (this.iframe = _5._frames.pop());
						node.appendChild(_19e);
						if (_4.isIE < 7 || _4.isQuirks) {
							this.resize(node);
							this._conn = _4.connect(node, "onresize", this, function () {
								this.resize(node);
							});
						} else {
							_4.style(_19e, {
								width: "100%",
								height: "100%"
							});
						}
					}
				};
				_4.extend(_5.BackgroundIframe, {
					resize: function (node) {
						if (this.iframe) {
							_4.style(this.iframe, {
								width: node.offsetWidth + "px",
								height: node.offsetHeight + "px"
							});
						}
					},
					destroy: function () {
						if (this._conn) {
							_4.disconnect(this._conn);
							this._conn = null;
						}
						if (this.iframe) {
							_5._frames.push(this.iframe);
							delete this.iframe;
						}
					}
				});
			}
			if (!_4._hasResource["dijit._base.scroll"]) {
				_4._hasResource["dijit._base.scroll"] = true;
				_4.provide("dijit._base.scroll");
				_5.scrollIntoView = function (node, pos) {
					_4.window.scrollIntoView(node, pos);
				};
			}
			if (!_4._hasResource["dojo.uacss"]) {
				_4._hasResource["dojo.uacss"] = true;
				_4.provide("dojo.uacss");
				(function () {
					var d = _4,
							html = d.doc.documentElement,
							ie = d.isIE,
							_19f = d.isOpera,
							maj = Math.floor,
							ff = d.isFF,
							_1a0 = d.boxModel.replace(/-/, ""),
							_1a1 = {
								dj_ie: ie,
								dj_ie6: maj(ie) == 6,
								dj_ie7: maj(ie) == 7,
								dj_ie8: maj(ie) == 8,
								dj_ie9: maj(ie) == 9,
								dj_quirks: d.isQuirks,
								dj_iequirks: ie && d.isQuirks,
								dj_opera: _19f,
								dj_khtml: d.isKhtml,
								dj_webkit: d.isWebKit,
								dj_safari: d.isSafari,
								dj_chrome: d.isChrome,
								dj_gecko: d.isMozilla,
								dj_ff3: maj(ff) == 3
							};
					_1a1["dj_" + _1a0] = true;
					var _1a2 = "";
					for (var clz in _1a1) {
						if (_1a1[clz]) {
							_1a2 += clz + " ";
						}
					}
					html.className = d.trim(html.className + " " + _1a2);
					_4._loaders.unshift(function () {
						if (!_4._isBodyLtr()) {
							var _1a3 = "dj_rtl dijitRtl " + _1a2.replace(/ /g, "-rtl ");
							html.className = d.trim(html.className + " " + _1a3);
						}
					});
				})();
			}
			if (!_4._hasResource["dijit._base.sniff"]) {
				_4._hasResource["dijit._base.sniff"] = true;
				_4.provide("dijit._base.sniff");
			}
			if (!_4._hasResource["dijit._base.typematic"]) {
				_4._hasResource["dijit._base.typematic"] = true;
				_4.provide("dijit._base.typematic");
				_5.typematic = {
					_fireEventAndReload: function () {
						this._timer = null;
						this._callback(++this._count, this._node, this._evt);
						this._currentTimeout = Math.max(this._currentTimeout < 0 ? this._initialDelay : (this._subsequentDelay > 1 ? this._subsequentDelay : Math.round(this._currentTimeout * this._subsequentDelay)), this._minDelay);
						this._timer = setTimeout(_4.hitch(this, "_fireEventAndReload"), this._currentTimeout);
					},
					trigger: function (evt, _1a4, node, _1a5, obj, _1a6, _1a7, _1a8) {
						if (obj != this._obj) {
							this.stop();
							this._initialDelay = _1a7 || 500;
							this._subsequentDelay = _1a6 || 0.9;
							this._minDelay = _1a8 || 10;
							this._obj = obj;
							this._evt = evt;
							this._node = node;
							this._currentTimeout = -1;
							this._count = -1;
							this._callback = _4.hitch(_1a4, _1a5);
							this._fireEventAndReload();
							this._evt = _4.mixin({
								faux: true
							}, evt);
						}
					},
					stop: function () {
						if (this._timer) {
							clearTimeout(this._timer);
							this._timer = null;
						}
						if (this._obj) {
							this._callback(-1, this._node, this._evt);
							this._obj = null;
						}
					},
					addKeyListener: function (node, _1a9, _1aa, _1ab, _1ac, _1ad, _1ae) {
						if (_1a9.keyCode) {
							_1a9.charOrCode = _1a9.keyCode;
							_4.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
						} else {
							if (_1a9.charCode) {
								_1a9.charOrCode = String.fromCharCode(_1a9.charCode);
								_4.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
							}
						}
						return [_4.connect(node, "onkeypress", this, function (evt) {
							if (evt.charOrCode == _1a9.charOrCode && (_1a9.ctrlKey === undefined || _1a9.ctrlKey == evt.ctrlKey) && (_1a9.altKey === undefined || _1a9.altKey == evt.altKey) && (_1a9.metaKey === undefined || _1a9.metaKey == (evt.metaKey || false)) && (_1a9.shiftKey === undefined || _1a9.shiftKey == evt.shiftKey)) {
								_4.stopEvent(evt);
								_5.typematic.trigger(evt, _1aa, node, _1ab, _1a9, _1ac, _1ad, _1ae);
							} else {
								if (_5.typematic._obj == _1a9) {
									_5.typematic.stop();
								}
							}
						}), _4.connect(node, "onkeyup", this, function (evt) {
							if (_5.typematic._obj == _1a9) {
								_5.typematic.stop();
							}
						})];
					},
					addMouseListener: function (node, _1af, _1b0, _1b1, _1b2, _1b3) {
						var dc = _4.connect;
						return [dc(node, "mousedown", this, function (evt) {
							_4.stopEvent(evt);
							_5.typematic.trigger(evt, _1af, node, _1b0, node, _1b1, _1b2, _1b3);
						}), dc(node, "mouseup", this, function (evt) {
							_4.stopEvent(evt);
							_5.typematic.stop();
						}), dc(node, "mouseout", this, function (evt) {
							_4.stopEvent(evt);
							_5.typematic.stop();
						}), dc(node, "mousemove", this, function (evt) {
							evt.preventDefault();
						}), dc(node, "dblclick", this, function (evt) {
							_4.stopEvent(evt);
							if (_4.isIE) {
								_5.typematic.trigger(evt, _1af, node, _1b0, node, _1b1, _1b2, _1b3);
								setTimeout(_4.hitch(this, _5.typematic.stop), 50);
							}
						})];
					},
					addListener: function (_1b4, _1b5, _1b6, _1b7, _1b8, _1b9, _1ba, _1bb) {
						return this.addKeyListener(_1b5, _1b6, _1b7, _1b8, _1b9, _1ba, _1bb).concat(this.addMouseListener(_1b4, _1b7, _1b8, _1b9, _1ba, _1bb));
					}
				};
			}
			if (!_4._hasResource["dijit._base.wai"]) {
				_4._hasResource["dijit._base.wai"] = true;
				_4.provide("dijit._base.wai");
				_5.wai = {
					onload: function () {
						var div = _4.create("div", {
							id: "a11yTestNode",
							style: {
								cssText: "border: 1px solid;" + "border-color:red green;" + "position: absolute;" + "height: 5px;" + "top: -999px;" + "background-image: url(\"" + (_4.config.blankGif || _4.moduleUrl("dojo", "resources/blank.gif")) + "\");"
							}
						}, _4.body());
						var cs = _4.getComputedStyle(div);
						if (cs) {
							var _1bc = cs.backgroundImage;
							var _1bd = (cs.borderTopColor == cs.borderRightColor) || (_1bc != null && (_1bc == "none" || _1bc == "url(invalid-url:)"));
							_4[_1bd ? "addClass" : "removeClass"](_4.body(), "dijit_a11y");
							if (_4.isIE) {
								div.outerHTML = "";
							} else {
								_4.body().removeChild(div);
							}
						}
					}
				};
				if (_4.isIE || _4.isMoz) {
					_4._loaders.unshift(_5.wai.onload);
				}
				_4.mixin(_5, {
					hasWaiRole: function (elem, role) {
						var _1be = this.getWaiRole(elem);
						return role ? (_1be.indexOf(role) > -1) : (_1be.length > 0);
					},
					getWaiRole: function (elem) {
						return _4.trim((_4.attr(elem, "role") || "").replace("wairole:", ""));
					},
					setWaiRole: function (elem, role) {
						_4.attr(elem, "role", role);
					},
					removeWaiRole: function (elem, role) {
						var _1bf = _4.attr(elem, "role");
						if (!_1bf) {
							return;
						}
						if (role) {
							var t = _4.trim((" " + _1bf + " ").replace(" " + role + " ", " "));
							_4.attr(elem, "role", t);
						} else {
							elem.removeAttribute("role");
						}
					},
					hasWaiState: function (elem, _1c0) {
						return elem.hasAttribute ? elem.hasAttribute("aria-" + _1c0) : !!elem.getAttribute("aria-" + _1c0);
					},
					getWaiState: function (elem, _1c1) {
						return elem.getAttribute("aria-" + _1c1) || "";
					},
					setWaiState: function (elem, _1c2, _1c3) {
						elem.setAttribute("aria-" + _1c2, _1c3);
					},
					removeWaiState: function (elem, _1c4) {
						elem.removeAttribute("aria-" + _1c4);
					}
				});
			}
			if (!_4._hasResource["dijit._base"]) {
				_4._hasResource["dijit._base"] = true;
				_4.provide("dijit._base");
			}
			if (!_4._hasResource["dijit._Widget"]) {
				_4._hasResource["dijit._Widget"] = true;
				_4.provide("dijit._Widget");
				_4.connect(_4, "_connect", function (_1c5, _1c6) {
					if (_1c5 && _4.isFunction(_1c5._onConnect)) {
						_1c5._onConnect(_1c6);
					}
				});
				_5._connectOnUseEventHandler = function (_1c7) {
				};
				_5._lastKeyDownNode = null;
				if (_4.isIE) {
					(function () {
						var _1c8 = function (evt) {
							_5._lastKeyDownNode = evt.srcElement;
						};
						_4.doc.attachEvent("onkeydown", _1c8);
						_4.addOnWindowUnload(function () {
							_4.doc.detachEvent("onkeydown", _1c8);
						});
					})();
				} else {
					_4.doc.addEventListener("keydown", function (evt) {
						_5._lastKeyDownNode = evt.target;
					}, true);
				}
				(function () {
					_4.declare("dijit._Widget", _5._WidgetBase, {
						_deferredConnects: {
							onClick: "",
							onDblClick: "",
							onKeyDown: "",
							onKeyPress: "",
							onKeyUp: "",
							onMouseMove: "",
							onMouseDown: "",
							onMouseOut: "",
							onMouseOver: "",
							onMouseLeave: "",
							onMouseEnter: "",
							onMouseUp: ""
						},
						onClick: _5._connectOnUseEventHandler,
						onDblClick: _5._connectOnUseEventHandler,
						onKeyDown: _5._connectOnUseEventHandler,
						onKeyPress: _5._connectOnUseEventHandler,
						onKeyUp: _5._connectOnUseEventHandler,
						onMouseDown: _5._connectOnUseEventHandler,
						onMouseMove: _5._connectOnUseEventHandler,
						onMouseOut: _5._connectOnUseEventHandler,
						onMouseOver: _5._connectOnUseEventHandler,
						onMouseLeave: _5._connectOnUseEventHandler,
						onMouseEnter: _5._connectOnUseEventHandler,
						onMouseUp: _5._connectOnUseEventHandler,
						create: function (_1c9, _1ca) {
							this._deferredConnects = _4.clone(this._deferredConnects);
							for (var attr in this.attributeMap) {
								delete this._deferredConnects[attr];
							}
							for (attr in this._deferredConnects) {
								if (this[attr] !== _5._connectOnUseEventHandler) {
									delete this._deferredConnects[attr];
								}
							}
							this.inherited(arguments);
							if (this.domNode) {
								for (attr in this.params) {
									this._onConnect(attr);
								}
							}
						},
						_onConnect: function (_1cb) {
							if (_1cb in this._deferredConnects) {
								var _1cc = this[this._deferredConnects[_1cb] || "domNode"];
								this.connect(_1cc, _1cb.toLowerCase(), _1cb);
								delete this._deferredConnects[_1cb];
							}
						},
						focused: false,
						isFocusable: function () {
							return this.focus && (_4.style(this.domNode, "display") != "none");
						},
						onFocus: function () {
						},
						onBlur: function () {
						},
						_onFocus: function (e) {
							this.onFocus();
						},
						_onBlur: function () {
							this.onBlur();
						},
						setAttribute: function (attr, _1cd) {
							_4.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
							this.set(attr, _1cd);
						},
						attr: function (name, _1ce) {
							if (_4.config.isDebug) {
								var _1cf = arguments.callee._ach || (arguments.callee._ach = {}),
										_1d0 = (arguments.callee.caller || "unknown caller").toString();
								if (!_1cf[_1d0]) {
									_4.deprecated(this.declaredClass + "::attr() is deprecated. Use get() or set() instead, called from " + _1d0, "", "2.0");
									_1cf[_1d0] = true;
								}
							}
							var args = arguments.length;
							if (args >= 2 || typeof name === "object") {
								return this.set.apply(this, arguments);
							} else {
								return this.get(name);
							}
						},
						nodesWithKeyClick: ["input", "button"],
						connect: function (obj, _1d1, _1d2) {
							var d = _4,
									dc = d._connect,
									_1d3 = this.inherited(arguments, [obj, _1d1 == "ondijitclick" ? "onclick" : _1d1, _1d2]);
							if (_1d1 == "ondijitclick") {
								if (d.indexOf(this.nodesWithKeyClick, obj.nodeName.toLowerCase()) == -1) {
									var m = d.hitch(this, _1d2);
									_1d3.push(dc(obj, "onkeydown", this, function (e) {
										if ((e.keyCode == d.keys.ENTER || e.keyCode == d.keys.SPACE) && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
											_5._lastKeyDownNode = e.target;
											if (!("openDropDown" in this && obj == this._buttonNode)) {
												e.preventDefault();
											}
										}
									}), dc(obj, "onkeyup", this, function (e) {
										if ((e.keyCode == d.keys.ENTER || e.keyCode == d.keys.SPACE) && e.target == _5._lastKeyDownNode && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
											_5._lastKeyDownNode = null;
											return m(e);
										}
									}));
								}
							}
							return _1d3;
						},
						_onShow: function () {
							this.onShow();
						},
						onShow: function () {
						},
						onHide: function () {
						},
						onClose: function () {
							return true;
						}
					});
				})();
			}
			if (!_4._hasResource["dojo.string"]) {
				_4._hasResource["dojo.string"] = true;
				_4.provide("dojo.string");
				_4.getObject("string", true, _4);
				_4.string.rep = function (str, num) {
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
				_4.string.pad = function (text, size, ch, end) {
					if (!ch) {
						ch = "0";
					}
					var out = String(text),
							pad = _4.string.rep(ch, Math.ceil((size - out.length) / ch.length));
					return end ? out + pad : pad + out;
				};
				_4.string.substitute = function (_1d4, map, _1d5, _1d6) {
					_1d6 = _1d6 || _4.global;
					_1d5 = _1d5 ? _4.hitch(_1d6, _1d5) : function (v) {
						return v;
					};
					return _1d4.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (_1d7, key, _1d8) {
						var _1d9 = _4.getObject(key, false, map);
						if (_1d8) {
							_1d9 = _4.getObject(_1d8, false, _1d6).call(_1d6, _1d9, key);
						}
						return _1d5(_1d9, key).toString();
					});
				};
				_4.string.trim = String.prototype.trim ? _4.trim : function (str) {
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
			if (!_4._hasResource["dojo.date.stamp"]) {
				_4._hasResource["dojo.date.stamp"] = true;
				_4.provide("dojo.date.stamp");
				_4.getObject("date.stamp", true, _4);
				_4.date.stamp.fromISOString = function (_1da, _1db) {
					if (!_4.date.stamp._isoRegExp) {
						_4.date.stamp._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
					}
					var _1dc = _4.date.stamp._isoRegExp.exec(_1da),
							_1dd = null;
					if (_1dc) {
						_1dc.shift();
						if (_1dc[1]) {
							_1dc[1]--;
						}
						if (_1dc[6]) {
							_1dc[6] *= 1000;
						}
						if (_1db) {
							_1db = new Date(_1db);
							_4.forEach(_4.map(["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"], function (prop) {
								return _1db["get" + prop]();
							}), function (_1de, _1df) {
								_1dc[_1df] = _1dc[_1df] || _1de;
							});
						}
						_1dd = new Date(_1dc[0] || 1970, _1dc[1] || 0, _1dc[2] || 1, _1dc[3] || 0, _1dc[4] || 0, _1dc[5] || 0, _1dc[6] || 0);
						if (_1dc[0] < 100) {
							_1dd.setFullYear(_1dc[0] || 1970);
						}
						var _1e0 = 0,
								_1e1 = _1dc[7] && _1dc[7].charAt(0);
						if (_1e1 != "Z") {
							_1e0 = ((_1dc[8] || 0) * 60) + (Number(_1dc[9]) || 0);
							if (_1e1 != "-") {
								_1e0 *= -1;
							}
						}
						if (_1e1) {
							_1e0 -= _1dd.getTimezoneOffset();
						}
						if (_1e0) {
							_1dd.setTime(_1dd.getTime() + _1e0 * 60000);
						}
					}
					return _1dd;
				};
				_4.date.stamp.toISOString = function (_1e2, _1e3) {
					var _1e4 = function (n) {
						return (n < 10) ? "0" + n : n;
					};
					_1e3 = _1e3 || {};
					var _1e5 = [],
							_1e6 = _1e3.zulu ? "getUTC" : "get",
							date = "";
					if (_1e3.selector != "time") {
						var year = _1e2[_1e6 + "FullYear"]();
						date = ["0000".substr((year + "").length) + year, _1e4(_1e2[_1e6 + "Month"]() + 1), _1e4(_1e2[_1e6 + "Date"]())].join("-");
					}
					_1e5.push(date);
					if (_1e3.selector != "date") {
						var time = [_1e4(_1e2[_1e6 + "Hours"]()), _1e4(_1e2[_1e6 + "Minutes"]()), _1e4(_1e2[_1e6 + "Seconds"]())].join(":");
						var _1e7 = _1e2[_1e6 + "Milliseconds"]();
						if (_1e3.milliseconds) {
							time += "." + (_1e7 < 100 ? "0" : "") + _1e4(_1e7);
						}
						if (_1e3.zulu) {
							time += "Z";
						} else {
							if (_1e3.selector != "time") {
								var _1e8 = _1e2.getTimezoneOffset();
								var _1e9 = Math.abs(_1e8);
								time += (_1e8 > 0 ? "-" : "+") + _1e4(Math.floor(_1e9 / 60)) + ":" + _1e4(_1e9 % 60);
							}
						}
						_1e5.push(time);
					}
					return _1e5.join("T");
				};
			}
			if (!_4._hasResource["dojo.parser"]) {
				_4._hasResource["dojo.parser"] = true;
				_4.provide("dojo.parser");
				new Date("X");
				_4.parser = new function () {
					var d = _4;

					function _1ea(_1eb) {
						if (d.isString(_1eb)) {
							return "string";
						}
						if (typeof _1eb == "number") {
							return "number";
						}
						if (typeof _1eb == "boolean") {
							return "boolean";
						}
						if (d.isFunction(_1eb)) {
							return "function";
						}
						if (d.isArray(_1eb)) {
							return "array";
						}
						if (_1eb instanceof Date) {
							return "date";
						}
						if (_1eb instanceof d._Url) {
							return "url";
						}
						return "object";
					};

					function _1ec(_1ed, type) {
						switch (type) {
							case "string":
								return _1ed;
							case "number":
								return _1ed.length ? Number(_1ed) : NaN;
							case "boolean":
								return typeof _1ed == "boolean" ? _1ed : !(_1ed.toLowerCase() == "false");
							case "function":
								if (d.isFunction(_1ed)) {
									_1ed = _1ed.toString();
									_1ed = d.trim(_1ed.substring(_1ed.indexOf("{") + 1, _1ed.length - 1));
								}
								try {
									if (_1ed === "" || _1ed.search(/[^\w\.]+/i) != -1) {
										return new Function(_1ed);
									} else {
										return d.getObject(_1ed, false) || new Function(_1ed);
									}
								} catch (e) {
									return new Function();
								}
							case "array":
								return _1ed ? _1ed.split(/\s*,\s*/) : [];
							case "date":
								switch (_1ed) {
									case "":
										return new Date("");
									case "now":
										return new Date();
									default:
										return d.date.stamp.fromISOString(_1ed);
								}
							case "url":
								return d.baseUrl + _1ed;
							default:
								return d.fromJson(_1ed);
						}
					};
					var _1ee = {}, _1ef = {};
					d.connect(d, "extend", function () {
						_1ef = {};
					});

					function _1f0(cls, _1f1) {
						for (var name in cls) {
							if (name.charAt(0) == "_") {
								continue;
							}
							if (name in _1ee) {
								continue;
							}
							_1f1[name] = _1ea(cls[name]);
						}
						return _1f1;
					};

					function _1f2(_1f3, _1f4) {
						var c = _1ef[_1f3];
						if (!c) {
							var cls = d.getObject(_1f3),
									_1f5 = null;
							if (!cls) {
								return null;
							}
							if (!_1f4) {
								_1f5 = _1f0(cls.prototype, {});
							}
							c = {
								cls: cls,
								params: _1f5
							};
						} else {
							if (!_1f4 && !c.params) {
								c.params = _1f0(c.cls.prototype, {});
							}
						}
						return c;
					};
					this._functionFromScript = function (_1f6, _1f7) {
						var _1f8 = "";
						var _1f9 = "";
						var _1fa = (_1f6.getAttribute(_1f7 + "args") || _1f6.getAttribute("args"));
						if (_1fa) {
							d.forEach(_1fa.split(/\s*,\s*/), function (part, idx) {
								_1f8 += "var " + part + " = arguments[" + idx + "]; ";
							});
						}
						var _1fb = _1f6.getAttribute("with");
						if (_1fb && _1fb.length) {
							d.forEach(_1fb.split(/\s*,\s*/), function (part) {
								_1f8 += "with(" + part + "){";
								_1f9 += "}";
							});
						}
						return new Function(_1f8 + _1f6.innerHTML + _1f9);
					};
					this.instantiate = function (_1fc, _1fd, args) {
						var _1fe = [],
								_1fd = _1fd || {};
						args = args || {};
						var _1ff = (args.scope || d._scopeName) + "Type",
								_200 = "data-" + (args.scope || d._scopeName) + "-";
						d.forEach(_1fc, function (obj) {
							if (!obj) {
								return;
							}
							var node, type, _201, _202, _203, _204;
							if (obj.node) {
								node = obj.node;
								type = obj.type;
								_204 = obj.fastpath;
								_201 = obj.clsInfo || (type && _1f2(type, _204));
								_202 = _201 && _201.cls;
								_203 = obj.scripts;
							} else {
								node = obj;
								type = _1ff in _1fd ? _1fd[_1ff] : node.getAttribute(_1ff);
								_201 = type && _1f2(type);
								_202 = _201 && _201.cls;
								_203 = (_202 && (_202._noScript || _202.prototype._noScript) ? [] : d.query("> script[type^='dojo/']", node));
							}
							if (!_201) {
								throw new Error("Could not load class '" + type);
							}
							var _205 = {};
							if (args.defaults) {
								d._mixin(_205, args.defaults);
							}
							if (obj.inherited) {
								d._mixin(_205, obj.inherited);
							}
							if (_204) {
								var _206 = node.getAttribute(_200 + "props");
								if (_206 && _206.length) {
									try {
										_206 = d.fromJson.call(args.propsThis, "{" + _206 + "}");
										d._mixin(_205, _206);
									} catch (e) {
										throw new Error(e.toString() + " in data-dojo-props='" + _206 + "'");
									}
								}
								var _207 = node.getAttribute(_200 + "attach-point");
								if (_207) {
									_205.dojoAttachPoint = _207;
								}
								var _208 = node.getAttribute(_200 + "attach-event");
								if (_208) {
									_205.dojoAttachEvent = _208;
								}
								_4.mixin(_205, _1fd);
							} else {
								var _209 = node.attributes;
								for (var name in _201.params) {
									var item = name in _1fd ? {
										value: _1fd[name],
										specified: true
									} : _209.getNamedItem(name);
									if (!item || (!item.specified && (!_4.isIE || name.toLowerCase() != "value"))) {
										continue;
									}
									var _20a = item.value;
									switch (name) {
										case "class":
											_20a = "className" in _1fd ? _1fd.className : node.className;
											break;
										case "style":
											_20a = "style" in _1fd ? _1fd.style : (node.style && node.style.cssText);
									}
									var _20b = _201.params[name];
									if (typeof _20a == "string") {
										_205[name] = _1ec(_20a, _20b);
									} else {
										_205[name] = _20a;
									}
								}
							}
							var _20c = [],
									_20d = [];
							d.forEach(_203, function (_20e) {
								node.removeChild(_20e);
								var _20f = (_20e.getAttribute(_200 + "event") || _20e.getAttribute("event")),
										type = _20e.getAttribute("type"),
										nf = d.parser._functionFromScript(_20e, _200);
								if (_20f) {
									if (type == "dojo/connect") {
										_20c.push({
											event: _20f,
											func: nf
										});
									} else {
										_205[_20f] = nf;
									}
								} else {
									_20d.push(nf);
								}
							});
							var _210 = _202.markupFactory || _202.prototype && _202.prototype.markupFactory;
							var _211 = _210 ? _210(_205, node, _202) : new _202(_205, node);
							_1fe.push(_211);
							var _212 = (node.getAttribute(_200 + "id") || node.getAttribute("jsId"));
							if (_212) {
								d.setObject(_212, _211);
							}
							d.forEach(_20c, function (_213) {
								d.connect(_211, _213.event, null, _213.func);
							});
							d.forEach(_20d, function (func) {
								func.call(_211);
							});
						});
						if (!_1fd._started) {
							d.forEach(_1fe, function (_214) {
								if (!args.noStart && _214 && _4.isFunction(_214.startup) && !_214._started && (!_214.getParent || !_214.getParent())) {
									_214.startup();
								}
							});
						}
						return _1fe;
					};
					this.parse = function (_215, args) {
						var root;
						if (!args && _215 && _215.rootNode) {
							args = _215;
							root = args.rootNode;
						} else {
							root = _215;
						}
						root = root ? _4.byId(root) : _4.body();
						args = args || {};
						var _216 = (args.scope || d._scopeName) + "Type",
								_217 = "data-" + (args.scope || d._scopeName) + "-";

						function scan(_218, list) {
							var _219 = _4.clone(_218.inherited);
							_4.forEach(["dir", "lang"], function (name) {
								var val = _218.node.getAttribute(name);
								if (val) {
									_219[name] = val;
								}
							});
							var _21a = _218.clsInfo && !_218.clsInfo.cls.prototype._noScript ? _218.scripts : null;
							var _21b = (!_218.clsInfo || !_218.clsInfo.cls.prototype.stopParser) || (args && args.template);
							for (var _21c = _218.node.firstChild; _21c; _21c = _21c.nextSibling) {
								if (_21c.nodeType == 1) {
									var type, _21d = _21b && _21c.getAttribute(_217 + "type");
									if (_21d) {
										type = _21d;
									} else {
										type = _21b && _21c.getAttribute(_216);
									}
									var _21e = _21d == type;
									if (type) {
										var _21f = {
											"type": type,
											fastpath: _21e,
											clsInfo: _1f2(type, _21e),
											node: _21c,
											scripts: [],
											inherited: _219
										};
										list.push(_21f);
										scan(_21f, list);
									} else {
										if (_21a && _21c.nodeName.toLowerCase() == "script") {
											type = _21c.getAttribute("type");
											if (type && /^dojo\/\w/i.test(type)) {
												_21a.push(_21c);
											}
										} else {
											if (_21b) {
												scan({
													node: _21c,
													inherited: _219
												}, list);
											}
										}
									}
								}
							}
						};
						var _220 = {};
						if (args && args.inherited) {
							for (var key in args.inherited) {
								if (args.inherited[key]) {
									_220[key] = args.inherited[key];
								}
							}
						}
						var list = [];
						scan({
							node: root,
							inherited: _220
						}, list);
						var _221 = args && args.template ? {
							template: true
						} : null;
						return this.instantiate(list, _221, args);
					};
				}();
				(function () {
					var _222 = function () {
						if (_4.config.parseOnLoad) {
							_4.parser.parse();
						}
					};
					if (_4.getObject("dijit.wai.onload") === _4._loaders[0]) {
						_4._loaders.splice(1, 0, _222);
					} else {
						_4._loaders.unshift(_222);
					}
				})();
			}
			if (!_4._hasResource["dojo.cache"]) {
				_4._hasResource["dojo.cache"] = true;
				_4.provide("dojo.cache");
				var _223 = {};
				_4.cache = function (_224, url, _225) {
					if (typeof _224 == "string") {
						var _226 = _4.moduleUrl(_224, url);
					} else {
						_226 = _224;
						_225 = url;
					}
					var key = _226.toString();
					var val = _225;
					if (_225 != undefined && !_4.isString(_225)) {
						val = ("value" in _225 ? _225.value : undefined);
					}
					var _227 = _225 && _225.sanitize ? true : false;
					if (typeof val == "string") {
						val = _223[key] = _227 ? _4.cache._sanitize(val) : val;
					} else {
						if (val === null) {
							delete _223[key];
						} else {
							if (!(key in _223)) {
								val = _4._getText(key);
								_223[key] = _227 ? _4.cache._sanitize(val) : val;
							}
							val = _223[key];
						}
					}
					return val;
				};
				_4.cache._sanitize = function (val) {
					if (val) {
						val = val.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
						var _228 = val.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
						if (_228) {
							val = _228[1];
						}
					} else {
						val = "";
					}
					return val;
				};
			}
			if (!_4._hasResource["dijit._Templated"]) {
				_4._hasResource["dijit._Templated"] = true;
				_4.provide("dijit._Templated");
				_4.declare("dijit._Templated", null, {
					templateString: null,
					templatePath: null,
					widgetsInTemplate: false,
					_skipNodeCache: false,
					_earlyTemplatedStartup: false,
					constructor: function () {
						this._attachPoints = [];
						this._attachEvents = [];
					},
					_stringRepl: function (tmpl) {
						var _229 = this.declaredClass,
								_22a = this;
						return _4.string.substitute(tmpl, this, function (_22b, key) {
							if (key.charAt(0) == "!") {
								_22b = _4.getObject(key.substr(1), false, _22a);
							}
							if (typeof _22b == "undefined") {
								throw new Error(_229 + " template:" + key);
							}
							if (_22b == null) {
								return "";
							}
							return key.charAt(0) == "!" ? _22b : _22b.toString().replace(/"/g, "&quot;");
						}, this);
					},
					buildRendering: function () {
						var _22c = _5._Templated.getCachedTemplate(this.templatePath, this.templateString, this._skipNodeCache);
						var node;
						if (_4.isString(_22c)) {
							node = _4._toDom(this._stringRepl(_22c));
							if (node.nodeType != 1) {
								throw new Error("Invalid template: " + _22c);
							}
						} else {
							node = _22c.cloneNode(true);
						}
						this.domNode = node;
						this.inherited(arguments);
						this._attachTemplateNodes(node);
						if (this.widgetsInTemplate) {
							var cw = (this._startupWidgets = _4.parser.parse(node, {
								noStart: !this._earlyTemplatedStartup,
								template: true,
								inherited: {
									dir: this.dir,
									lang: this.lang
								},
								propsThis: this,
								scope: "dojo"
							}));
							this._supportingWidgets = _5.findWidgets(node);
							this._attachTemplateNodes(cw, function (n, p) {
								return n[p];
							});
						}
						this._fillContent(this.srcNodeRef);
					},
					_fillContent: function (_22d) {
						var dest = this.containerNode;
						if (_22d && dest) {
							while (_22d.hasChildNodes()) {
								dest.appendChild(_22d.firstChild);
							}
						}
					},
					_attachTemplateNodes: function (_22e, _22f) {
						_22f = _22f || function (n, p) {
							return n.getAttribute(p);
						};
						var _230 = _4.isArray(_22e) ? _22e : (_22e.all || _22e.getElementsByTagName("*"));
						var x = _4.isArray(_22e) ? 0 : -1;
						for (; x < _230.length; x++) {
							var _231 = (x == -1) ? _22e : _230[x];
							if (this.widgetsInTemplate && (_22f(_231, "dojoType") || _22f(_231, "data-dojo-type"))) {
								continue;
							}
							var _232 = _22f(_231, "dojoAttachPoint") || _22f(_231, "data-dojo-attach-point");
							if (_232) {
								var _233, _234 = _232.split(/\s*,\s*/);
								while ((_233 = _234.shift())) {
									if (_4.isArray(this[_233])) {
										this[_233].push(_231);
									} else {
										this[_233] = _231;
									}
									this._attachPoints.push(_233);
								}
							}
							var _235 = _22f(_231, "dojoAttachEvent") || _22f(_231, "data-dojo-attach-event");
							if (_235) {
								var _236, _237 = _235.split(/\s*,\s*/);
								var trim = _4.trim;
								while ((_236 = _237.shift())) {
									if (_236) {
										var _238 = null;
										if (_236.indexOf(":") != -1) {
											var _239 = _236.split(":");
											_236 = trim(_239[0]);
											_238 = trim(_239[1]);
										} else {
											_236 = trim(_236);
										}
										if (!_238) {
											_238 = _236;
										}
										this._attachEvents.push(this.connect(_231, _236, _238));
									}
								}
							}
							var role = _22f(_231, "waiRole");
							if (role) {
								_5.setWaiRole(_231, role);
							}
							var _23a = _22f(_231, "waiState");
							if (_23a) {
								_4.forEach(_23a.split(/\s*,\s*/), function (_23b) {
									if (_23b.indexOf("-") != -1) {
										var pair = _23b.split("-");
										_5.setWaiState(_231, pair[0], pair[1]);
									}
								});
							}
						}
					},
					startup: function () {
						_4.forEach(this._startupWidgets, function (w) {
							if (w && !w._started && w.startup) {
								w.startup();
							}
						});
						this.inherited(arguments);
					},
					destroyRendering: function () {
						_4.forEach(this._attachPoints, function (_23c) {
							delete this[_23c];
						}, this);
						this._attachPoints = [];
						_4.forEach(this._attachEvents, this.disconnect, this);
						this._attachEvents = [];
						this.inherited(arguments);
					}
				});
				_5._Templated._templateCache = {};
				_5._Templated.getCachedTemplate = function (_23d, _23e, _23f) {
					var _240 = _5._Templated._templateCache;
					var key = _23e || _23d;
					var _241 = _240[key];
					if (_241) {
						try {
							if (!_241.ownerDocument || _241.ownerDocument == _4.doc) {
								return _241;
							}
						} catch (e) {
						}
						_4.destroy(_241);
					}
					if (!_23e) {
						_23e = _4.cache(_23d, {
							sanitize: true
						});
					}
					_23e = _4.string.trim(_23e);
					if (_23f || _23e.match(/\$\{([^\}]+)\}/g)) {
						return (_240[key] = _23e);
					} else {
						var node = _4._toDom(_23e);
						if (node.nodeType != 1) {
							throw new Error("Invalid template: " + _23e);
						}
						return (_240[key] = node);
					}
				};
				if (_4.isIE) {
					_4.addOnWindowUnload(function () {
						var _242 = _5._Templated._templateCache;
						for (var key in _242) {
							var _243 = _242[key];
							if (typeof _243 == "object") {
								_4.destroy(_243);
							}
							delete _242[key];
						}
					});
				}
				_4.extend(_5._Widget, {
					dojoAttachEvent: "",
					dojoAttachPoint: "",
					waiRole: "",
					waiState: ""
				});
			}
			if (!_4._hasResource["dijit._CssStateMixin"]) {
				_4._hasResource["dijit._CssStateMixin"] = true;
				_4.provide("dijit._CssStateMixin");
				_4.declare("dijit._CssStateMixin", [], {
					cssStateNodes: {},
					hovering: false,
					active: false,
					_applyAttributes: function () {
						this.inherited(arguments);
						_4.forEach(["onmouseenter", "onmouseleave", "onmousedown"], function (e) {
							this.connect(this.domNode, e, "_cssMouseEvent");
						}, this);
						_4.forEach(["disabled", "readOnly", "checked", "selected", "focused", "state", "hovering", "active"], function (attr) {
							this.watch(attr, _4.hitch(this, "_setStateClass"));
						}, this);
						for (var ap in this.cssStateNodes) {
							this._trackMouseState(this[ap], this.cssStateNodes[ap]);
						}
						this._setStateClass();
					},
					_cssMouseEvent: function (_244) {
						if (!this.disabled) {
							switch (_244.type) {
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
									var _245 = this.connect(_4.body(), "onmouseup", function () {
										this._mouseDown = false;
										this._set("active", false);
										this.disconnect(_245);
									});
									break;
							}
						}
					},
					_setStateClass: function () {
						var _246 = this.baseClass.split(" ");

						function _247(_248) {
							_246 = _246.concat(_4.map(_246, function (c) {
								return c + _248;
							}), "dijit" + _248);
						};
						if (!this.isLeftToRight()) {
							_247("Rtl");
						}
						if (this.checked) {
							_247("Checked");
						}
						if (this.state) {
							_247(this.state);
						}
						if (this.selected) {
							_247("Selected");
						}
						if (this.disabled) {
							_247("Disabled");
						} else {
							if (this.readOnly) {
								_247("ReadOnly");
							} else {
								if (this.active) {
									_247("Active");
								} else {
									if (this.hovering) {
										_247("Hover");
									}
								}
							}
						}
						if (this._focused) {
							_247("Focused");
						}
						var tn = this.stateNode || this.domNode,
								_249 = {};
						_4.forEach(tn.className.split(" "), function (c) {
							_249[c] = true;
						});
						if ("_stateClasses" in this) {
							_4.forEach(this._stateClasses, function (c) {
								delete _249[c];
							});
						}
						_4.forEach(_246, function (c) {
							_249[c] = true;
						});
						var _24a = [];
						for (var c in _249) {
							_24a.push(c);
						}
						tn.className = _24a.join(" ");
						this._stateClasses = _246;
					},
					_trackMouseState: function (node, _24b) {
						var _24c = false,
								_24d = false,
								_24e = false;
						var self = this,
								cn = _4.hitch(this, "connect", node);

						function _24f() {
							var _250 = ("disabled" in self && self.disabled) || ("readonly" in self && self.readonly);
							_4.toggleClass(node, _24b + "Hover", _24c && !_24d && !_250);
							_4.toggleClass(node, _24b + "Active", _24d && !_250);
							_4.toggleClass(node, _24b + "Focused", _24e && !_250);
						};
						cn("onmouseenter", function () {
							_24c = true;
							_24f();
						});
						cn("onmouseleave", function () {
							_24c = false;
							_24d = false;
							_24f();
						});
						cn("onmousedown", function () {
							_24d = true;
							_24f();
						});
						cn("onmouseup", function () {
							_24d = false;
							_24f();
						});
						cn("onfocus", function () {
							_24e = true;
							_24f();
						});
						cn("onblur", function () {
							_24e = false;
							_24f();
						});
						this.watch("disabled", _24f);
						this.watch("readOnly", _24f);
					}
				});
			}
			if (!_4._hasResource["dijit.form._FormMixin"]) {
				_4._hasResource["dijit.form._FormMixin"] = true;
				_4.provide("dijit.form._FormMixin");
				_4.declare("dijit.form._FormMixin", null, {
					state: "",
					reset: function () {
						_4.forEach(this.getDescendants(), function (_251) {
							if (_251.reset) {
								_251.reset();
							}
						});
					},
					validate: function () {
						var _252 = false;
						return _4.every(_4.map(this.getDescendants(), function (_253) {
							_253._hasBeenBlurred = true;
							var _254 = _253.disabled || !_253.validate || _253.validate();
							if (!_254 && !_252) {
								_4.window.scrollIntoView(_253.containerNode || _253.domNode);
								_253.focus();
								_252 = true;
							}
							return _254;
						}), function (item) {
							return item;
						});
					},
					setValues: function (val) {
						_4.deprecated(this.declaredClass + "::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
						return this.set("value", val);
					},
					_setValueAttr: function (obj) {
						var map = {};
						_4.forEach(this.getDescendants(), function (_255) {
							if (!_255.name) {
								return;
							}
							var _256 = map[_255.name] || (map[_255.name] = []);
							_256.push(_255);
						});
						for (var name in map) {
							if (!map.hasOwnProperty(name)) {
								continue;
							}
							var _257 = map[name],
									_258 = _4.getObject(name, false, obj);
							if (_258 === undefined) {
								continue;
							}
							if (!_4.isArray(_258)) {
								_258 = [_258];
							}
							if (typeof _257[0].checked == "boolean") {
								_4.forEach(_257, function (w, i) {
									w.set("value", _4.indexOf(_258, w.value) != -1);
								});
							} else {
								if (_257[0].multiple) {
									_257[0].set("value", _258);
								} else {
									_4.forEach(_257, function (w, i) {
										w.set("value", _258[i]);
									});
								}
							}
						}
					},
					getValues: function () {
						_4.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
						return this.get("value");
					},
					_getValueAttr: function () {
						var obj = {};
						_4.forEach(this.getDescendants(), function (_259) {
							var name = _259.name;
							if (!name || _259.disabled) {
								return;
							}
							var _25a = _259.get("value");
							if (typeof _259.checked == "boolean") {
								if (/Radio/.test(_259.declaredClass)) {
									if (_25a !== false) {
										_4.setObject(name, _25a, obj);
									} else {
										_25a = _4.getObject(name, false, obj);
										if (_25a === undefined) {
											_4.setObject(name, null, obj);
										}
									}
								} else {
									var ary = _4.getObject(name, false, obj);
									if (!ary) {
										ary = [];
										_4.setObject(name, ary, obj);
									}
									if (_25a !== false) {
										ary.push(_25a);
									}
								}
							} else {
								var prev = _4.getObject(name, false, obj);
								if (typeof prev != "undefined") {
									if (_4.isArray(prev)) {
										prev.push(_25a);
									} else {
										_4.setObject(name, [prev, _25a], obj);
									}
								} else {
									_4.setObject(name, _25a, obj);
								}
							}
						});
						return obj;
					},
					isValid: function () {
						return this.state == "";
					},
					onValidStateChange: function (_25b) {
					},
					_getState: function () {
						var _25c = _4.map(this._descendants, function (w) {
							return w.get("state") || "";
						});
						return _4.indexOf(_25c, "Error") >= 0 ? "Error" : _4.indexOf(_25c, "Incomplete") >= 0 ? "Incomplete" : "";
					},
					disconnectChildren: function () {
						_4.forEach(this._childConnections || [], _4.hitch(this, "disconnect"));
						_4.forEach(this._childWatches || [], function (w) {
							w.unwatch();
						});
					},
					connectChildren: function (_25d) {
						var _25e = this;
						this.disconnectChildren();
						this._descendants = this.getDescendants();
						var set = _25d ? function (name, val) {
							_25e[name] = val;
						} : _4.hitch(this, "_set");
						set("value", this.get("value"));
						set("state", this._getState());
						var _25f = (this._childConnections = []),
								_260 = (this._childWatches = []);
						_4.forEach(_4.filter(this._descendants, function (item) {
							return item.validate;
						}), function (_261) {
							_4.forEach(["state", "disabled"], function (attr) {
								_260.push(_261.watch(attr, function (attr, _262, _263) {
									_25e.set("state", _25e._getState());
								}));
							});
						});
						var _264 = function () {
							if (_25e._onChangeDelayTimer) {
								clearTimeout(_25e._onChangeDelayTimer);
							}
							_25e._onChangeDelayTimer = setTimeout(function () {
								delete _25e._onChangeDelayTimer;
								_25e._set("value", _25e.get("value"));
							}, 10);
						};
						_4.forEach(_4.filter(this._descendants, function (item) {
							return item.onChange;
						}), function (_265) {
							_25f.push(_25e.connect(_265, "onChange", _264));
							_260.push(_265.watch("disabled", _264));
						});
					},
					startup: function () {
						this.inherited(arguments);
						this.connectChildren(true);
						this.watch("state", function (attr, _266, _267) {
							this.onValidStateChange(_267 == "");
						});
					},
					destroy: function () {
						this.disconnectChildren();
						this.inherited(arguments);
					}
				});
			}
			if (!_4._hasResource["dijit._DialogMixin"]) {
				_4._hasResource["dijit._DialogMixin"] = true;
				_4.provide("dijit._DialogMixin");
				_4.declare("dijit._DialogMixin", null, {
					attributeMap: _5._Widget.prototype.attributeMap,
					execute: function (_268) {
					},
					onCancel: function () {
					},
					onExecute: function () {
					},
					_onSubmit: function () {
						this.onExecute();
						this.execute(this.get("value"));
					},
					_getFocusItems: function () {
						var _269 = _5._getTabNavigable(this.containerNode);
						this._firstFocusItem = _269.lowest || _269.first || this.closeButtonNode || this.domNode;
						this._lastFocusItem = _269.last || _269.highest || this._firstFocusItem;
					}
				});
			}
			if (!_4._hasResource["dijit.DialogUnderlay"]) {
				_4._hasResource["dijit.DialogUnderlay"] = true;
				_4.provide("dijit.DialogUnderlay");
				_4.declare("dijit.DialogUnderlay", [_5._Widget, _5._Templated], {
					templateString: "<div class='dijitDialogUnderlayWrapper'><div class='dijitDialogUnderlay' dojoAttachPoint='node'></div></div>",
					dialogId: "",
					"class": "",
					attributeMap: {
						id: "domNode"
					},
					_setDialogIdAttr: function (id) {
						_4.attr(this.node, "id", id + "_underlay");
						this._set("dialogId", id);
					},
					_setClassAttr: function (_26a) {
						this.node.className = "dijitDialogUnderlay " + _26a;
						this._set("class", _26a);
					},
					postCreate: function () {
						_4.body().appendChild(this.domNode);
					},
					layout: function () {
						var is = this.node.style,
								os = this.domNode.style;
						os.display = "none";
						var _26b = _4.window.getBox();
						os.top = _26b.t + "px";
						os.left = _26b.l + "px";
						is.width = _26b.w + "px";
						is.height = _26b.h + "px";
						os.display = "block";
					},
					show: function () {
						this.domNode.style.display = "block";
						this.layout();
						this.bgIframe = new _5.BackgroundIframe(this.domNode);
					},
					hide: function () {
						this.bgIframe.destroy();
						delete this.bgIframe;
						this.domNode.style.display = "none";
					}
				});
			}
			if (!_4._hasResource["dijit._Contained"]) {
				_4._hasResource["dijit._Contained"] = true;
				_4.provide("dijit._Contained");
				_4.declare("dijit._Contained", null, {
					getParent: function () {
						var _26c = _5.getEnclosingWidget(this.domNode.parentNode);
						return _26c && _26c.isContainer ? _26c : null;
					},
					_getSibling: function (_26d) {
						var node = this.domNode;
						do {
							node = node[_26d + "Sibling"];
						} while (node && node.nodeType != 1);
						return node && _5.byNode(node);
					},
					getPreviousSibling: function () {
						return this._getSibling("previous");
					},
					getNextSibling: function () {
						return this._getSibling("next");
					},
					getIndexInParent: function () {
						var p = this.getParent();
						if (!p || !p.getIndexOfChild) {
							return -1;
						}
						return p.getIndexOfChild(this);
					}
				});
			}
			if (!_4._hasResource["dijit._Container"]) {
				_4._hasResource["dijit._Container"] = true;
				_4.provide("dijit._Container");
				_4.declare("dijit._Container", null, {
					isContainer: true,
					buildRendering: function () {
						this.inherited(arguments);
						if (!this.containerNode) {
							this.containerNode = this.domNode;
						}
					},
					addChild: function (_26e, _26f) {
						var _270 = this.containerNode;
						if (_26f && typeof _26f == "number") {
							var _271 = this.getChildren();
							if (_271 && _271.length >= _26f) {
								_270 = _271[_26f - 1].domNode;
								_26f = "after";
							}
						}
						_4.place(_26e.domNode, _270, _26f);
						if (this._started && !_26e._started) {
							_26e.startup();
						}
					},
					removeChild: function (_272) {
						if (typeof _272 == "number") {
							_272 = this.getChildren()[_272];
						}
						if (_272) {
							var node = _272.domNode;
							if (node && node.parentNode) {
								node.parentNode.removeChild(node);
							}
						}
					},
					hasChildren: function () {
						return this.getChildren().length > 0;
					},
					destroyDescendants: function (_273) {
						_4.forEach(this.getChildren(), function (_274) {
							_274.destroyRecursive(_273);
						});
					},
					_getSiblingOfChild: function (_275, dir) {
						var node = _275.domNode,
								_276 = (dir > 0 ? "nextSibling" : "previousSibling");
						do {
							node = node[_276];
						} while (node && (node.nodeType != 1 || !_5.byNode(node)));
						return node && _5.byNode(node);
					},
					getIndexOfChild: function (_277) {
						return _4.indexOf(this.getChildren(), _277);
					},
					startup: function () {
						if (this._started) {
							return;
						}
						_4.forEach(this.getChildren(), function (_278) {
							_278.startup();
						});
						this.inherited(arguments);
					}
				});
			}
			if (!_4._hasResource["dijit.layout._LayoutWidget"]) {
				_4._hasResource["dijit.layout._LayoutWidget"] = true;
				_4.provide("dijit.layout._LayoutWidget");
				_4.declare("dijit.layout._LayoutWidget", [_5._Widget, _5._Container, _5._Contained], {
					baseClass: "dijitLayoutContainer",
					isLayoutContainer: true,
					buildRendering: function () {
						this.inherited(arguments);
						_4.addClass(this.domNode, "dijitContainer");
					},
					startup: function () {
						if (this._started) {
							return;
						}
						this.inherited(arguments);
						var _279 = this.getParent && this.getParent();
						if (!(_279 && _279.isLayoutContainer)) {
							this.resize();
							this.connect(_4.isIE ? this.domNode : _4.global, "onresize", function () {
								this.resize();
							});
						}
					},
					resize: function (_27a, _27b) {
						var node = this.domNode;
						if (_27a) {
							_4.marginBox(node, _27a);
							if (_27a.t) {
								node.style.top = _27a.t + "px";
							}
							if (_27a.l) {
								node.style.left = _27a.l + "px";
							}
						}
						var mb = _27b || {};
						_4.mixin(mb, _27a || {});
						if (!("h" in mb) || !("w" in mb)) {
							mb = _4.mixin(_4.marginBox(node), mb);
						}
						var cs = _4.getComputedStyle(node);
						var me = _4._getMarginExtents(node, cs);
						var be = _4._getBorderExtents(node, cs);
						var bb = (this._borderBox = {
							w: mb.w - (me.w + be.w),
							h: mb.h - (me.h + be.h)
						});
						var pe = _4._getPadExtents(node, cs);
						this._contentBox = {
							l: _4._toPixelValue(node, cs.paddingLeft),
							t: _4._toPixelValue(node, cs.paddingTop),
							w: bb.w - pe.w,
							h: bb.h - pe.h
						};
						this.layout();
					},
					layout: function () {
					},
					_setupChild: function (_27c) {
						var cls = this.baseClass + "-child " + (_27c.baseClass ? this.baseClass + "-" + _27c.baseClass : "");
						_4.addClass(_27c.domNode, cls);
					},
					addChild: function (_27d, _27e) {
						this.inherited(arguments);
						if (this._started) {
							this._setupChild(_27d);
						}
					},
					removeChild: function (_27f) {
						var cls = this.baseClass + "-child" + (_27f.baseClass ? " " + this.baseClass + "-" + _27f.baseClass : "");
						_4.removeClass(_27f.domNode, cls);
						this.inherited(arguments);
					}
				});
				_5.layout.marginBox2contentBox = function (node, mb) {
					var cs = _4.getComputedStyle(node);
					var me = _4._getMarginExtents(node, cs);
					var pb = _4._getPadBorderExtents(node, cs);
					return {
						l: _4._toPixelValue(node, cs.paddingLeft),
						t: _4._toPixelValue(node, cs.paddingTop),
						w: mb.w - (me.w + pb.w),
						h: mb.h - (me.h + pb.h)
					};
				};
				(function () {
					var _280 = function (word) {
						return word.substring(0, 1).toUpperCase() + word.substring(1);
					};
					var size = function (_281, dim) {
						var _282 = _281.resize ? _281.resize(dim) : _4.marginBox(_281.domNode, dim);
						if (_282) {
							_4.mixin(_281, _282);
						} else {
							_4.mixin(_281, _4.marginBox(_281.domNode));
							_4.mixin(_281, dim);
						}
					};
					_5.layout.layoutChildren = function (_283, dim, _284, _285, _286) {
						dim = _4.mixin({}, dim);
						_4.addClass(_283, "dijitLayoutContainer");
						_284 = _4.filter(_284,function (item) {
							return item.region != "center" && item.layoutAlign != "client";
						}).concat(_4.filter(_284, function (item) {
									return item.region == "center" || item.layoutAlign == "client";
								}));
						_4.forEach(_284, function (_287) {
							var elm = _287.domNode,
									pos = (_287.region || _287.layoutAlign);
							var _288 = elm.style;
							_288.left = dim.l + "px";
							_288.top = dim.t + "px";
							_288.position = "absolute";
							_4.addClass(elm, "dijitAlign" + _280(pos));
							var _289 = {};
							if (_285 && _285 == _287.id) {
								_289[_287.region == "top" || _287.region == "bottom" ? "h" : "w"] = _286;
							}
							if (pos == "top" || pos == "bottom") {
								_289.w = dim.w;
								size(_287, _289);
								dim.h -= _287.h;
								if (pos == "top") {
									dim.t += _287.h;
								} else {
									_288.top = dim.t + dim.h + "px";
								}
							} else {
								if (pos == "left" || pos == "right") {
									_289.h = dim.h;
									size(_287, _289);
									dim.w -= _287.w;
									if (pos == "left") {
										dim.l += _287.w;
									} else {
										_288.left = dim.l + dim.w + "px";
									}
								} else {
									if (pos == "client" || pos == "center") {
										size(_287, dim);
									}
								}
							}
						});
					};
				})();
			}
			if (!_4._hasResource["dijit.layout._ContentPaneResizeMixin"]) {
				_4._hasResource["dijit.layout._ContentPaneResizeMixin"] = true;
				_4.provide("dijit.layout._ContentPaneResizeMixin");
				_4.declare("dijit.layout._ContentPaneResizeMixin", null, {
					doLayout: true,
					isContainer: true,
					isLayoutContainer: true,
					_startChildren: function () {
						_4.forEach(this.getChildren(), function (_28a) {
							_28a.startup();
							_28a._started = true;
						});
					},
					startup: function () {
						if (this._started) {
							return;
						}
						var _28b = _5._Contained.prototype.getParent.call(this);
						this._childOfLayoutWidget = _28b && _28b.isLayoutContainer;
						this._needLayout = !this._childOfLayoutWidget;
						this.inherited(arguments);
						this._startChildren();
						if (this._isShown()) {
							this._onShow();
						}
						if (!this._childOfLayoutWidget) {
							this.connect(_4.isIE ? this.domNode : _4.global, "onresize", function () {
								this._needLayout = !this._childOfLayoutWidget;
								this.resize();
							});
						}
					},
					_checkIfSingleChild: function () {
						var _28c = _4.query("> *", this.containerNode).filter(function (node) {
									return node.tagName !== "SCRIPT";
								}),
								_28d = _28c.filter(function (node) {
									return _4.hasAttr(node, "data-dojo-type") || _4.hasAttr(node, "dojoType") || _4.hasAttr(node, "widgetId");
								}),
								_28e = _4.filter(_28d.map(_5.byNode), function (_28f) {
									return _28f && _28f.domNode && _28f.resize;
								});
						if (_28c.length == _28d.length && _28e.length == 1) {
							this._singleChild = _28e[0];
						} else {
							delete this._singleChild;
						}
						_4.toggleClass(this.containerNode, this.baseClass + "SingleChild", !!this._singleChild);
					},
					resize: function (_290, _291) {
						if (!this._wasShown && this.open !== false) {
							this._onShow();
						}
						this._resizeCalled = true;
						this._scheduleLayout(_290, _291);
					},
					_scheduleLayout: function (_292, _293) {
						if (this._isShown()) {
							this._layout(_292, _293);
						} else {
							this._needLayout = true;
							this._changeSize = _292;
							this._resultSize = _293;
						}
					},
					_layout: function (_294, _295) {
						if (_294) {
							_4.marginBox(this.domNode, _294);
						}
						var cn = this.containerNode;
						if (cn === this.domNode) {
							var mb = _295 || {};
							_4.mixin(mb, _294 || {});
							if (!("h" in mb) || !("w" in mb)) {
								mb = _4.mixin(_4.marginBox(cn), mb);
							}
							this._contentBox = _5.layout.marginBox2contentBox(cn, mb);
						} else {
							this._contentBox = _4.contentBox(cn);
						}
						this._layoutChildren();
						delete this._needLayout;
					},
					_layoutChildren: function () {
						if (this.doLayout) {
							this._checkIfSingleChild();
						}
						if (this._singleChild && this._singleChild.resize) {
							var cb = this._contentBox || _4.contentBox(this.containerNode);
							this._singleChild.resize({
								w: cb.w,
								h: cb.h
							});
						} else {
							_4.forEach(this.getChildren(), function (_296) {
								if (_296.resize) {
									_296.resize();
								}
							});
						}
					},
					_isShown: function () {
						if (this._childOfLayoutWidget) {
							if (this._resizeCalled && "open" in this) {
								return this.open;
							}
							return this._resizeCalled;
						} else {
							if ("open" in this) {
								return this.open;
							} else {
								var node = this.domNode,
										_297 = this.domNode.parentNode;
								return (node.style.display != "none") && (node.style.visibility != "hidden") && !_4.hasClass(node, "dijitHidden") && _297 && _297.style && (_297.style.display != "none");
							}
						}
					},
					_onShow: function () {
						if (this._needLayout) {
							this._layout(this._changeSize, this._resultSize);
						}
						this.inherited(arguments);
						this._wasShown = true;
					}
				});
			}
			if (!_4._hasResource["dojo.html"]) {
				_4._hasResource["dojo.html"] = true;
				_4.provide("dojo.html");
				_4.getObject("html", true, _4);
				(function () {
					var _298 = 0,
							d = _4;
					_4.html._secureForInnerHtml = function (cont) {
						return cont.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "");
					};
					_4.html._emptyNode = _4.empty;
					_4.html._setNodeContent = function (node, cont) {
						d.empty(node);
						if (cont) {
							if (typeof cont == "string") {
								cont = d._toDom(cont, node.ownerDocument);
							}
							if (!cont.nodeType && d.isArrayLike(cont)) {
								for (var _299 = cont.length, i = 0; i < cont.length; i = _299 == cont.length ? i + 1 : 0) {
									d.place(cont[i], node, "last");
								}
							} else {
								d.place(cont, node, "last");
							}
						}
						return node;
					};
					_4.declare("dojo.html._ContentSetter", null, {
						node: "",
						content: "",
						id: "",
						cleanContent: false,
						extractContent: false,
						parseContent: false,
						parserScope: _4._scopeName,
						startup: true,
						constructor: function (_29a, node) {
							_4.mixin(this, _29a || {});
							node = this.node = _4.byId(this.node || node);
							if (!this.id) {
								this.id = ["Setter", (node) ? node.id || node.tagName : "", _298++].join("_");
							}
						},
						set: function (cont, _29b) {
							if (undefined !== cont) {
								this.content = cont;
							}
							if (_29b) {
								this._mixin(_29b);
							}
							this.onBegin();
							this.setContent();
							this.onEnd();
							return this.node;
						},
						setContent: function () {
							var node = this.node;
							if (!node) {
								throw new Error(this.declaredClass + ": setContent given no node");
							}
							try {
								node = _4.html._setNodeContent(node, this.content);
							} catch (e) {
								var _29c = this.onContentError(e);
								try {
									node.innerHTML = _29c;
								} catch (e) {
									console.error("Fatal " + this.declaredClass + ".setContent could not change content due to " + e.message, e);
								}
							}
							this.node = node;
						},
						empty: function () {
							if (this.parseResults && this.parseResults.length) {
								_4.forEach(this.parseResults, function (w) {
									if (w.destroy) {
										w.destroy();
									}
								});
								delete this.parseResults;
							}
							_4.html._emptyNode(this.node);
						},
						onBegin: function () {
							var cont = this.content;
							if (_4.isString(cont)) {
								if (this.cleanContent) {
									cont = _4.html._secureForInnerHtml(cont);
								}
								if (this.extractContent) {
									var _29d = cont.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
									if (_29d) {
										cont = _29d[1];
									}
								}
							}
							this.empty();
							this.content = cont;
							return this.node;
						},
						onEnd: function () {
							if (this.parseContent) {
								this._parse();
							}
							return this.node;
						},
						tearDown: function () {
							delete this.parseResults;
							delete this.node;
							delete this.content;
						},
						onContentError: function (err) {
							return "Error occured setting content: " + err;
						},
						_mixin: function (_29e) {
							var _29f = {}, key;
							for (key in _29e) {
								if (key in _29f) {
									continue;
								}
								this[key] = _29e[key];
							}
						},
						_parse: function () {
							var _2a0 = this.node;
							try {
								var _2a1 = {};
								_4.forEach(["dir", "lang", "textDir"], function (name) {
									if (this[name]) {
										_2a1[name] = this[name];
									}
								}, this);
								this.parseResults = _4.parser.parse({
									rootNode: _2a0,
									noStart: !this.startup,
									inherited: _2a1,
									scope: this.parserScope
								});
							} catch (e) {
								this._onError("Content", e, "Error parsing in _ContentSetter#" + this.id);
							}
						},
						_onError: function (type, err, _2a2) {
							var _2a3 = this["on" + type + "Error"].call(this, err);
							if (_2a2) {
								console.error(_2a2, err);
							} else {
								if (_2a3) {
									_4.html._setNodeContent(this.node, _2a3, true);
								}
							}
						}
					});
					_4.html.set = function (node, cont, _2a4) {
						if (undefined == cont) {
							console.warn("dojo.html.set: no cont argument provided, using empty string");
							cont = "";
						}
						if (!_2a4) {
							return _4.html._setNodeContent(node, cont, true);
						} else {
							var op = new _4.html._ContentSetter(_4.mixin(_2a4, {
								content: cont,
								node: node
							}));
							return op.set();
						}
					};
				})();
			}
			if (!_4._hasResource["dijit.layout.ContentPane"]) {
				_4._hasResource["dijit.layout.ContentPane"] = true;
				_4.provide("dijit.layout.ContentPane");
				_4.declare("dijit.layout.ContentPane", [_5._Widget, _5.layout._ContentPaneResizeMixin], {
					href: "",
					extractContent: false,
					parseOnLoad: true,
					parserScope: _4._scopeName,
					preventCache: false,
					preload: false,
					refreshOnShow: false,
					loadingMessage: "<span class='dijitContentPaneLoading'>${loadingState}</span>",
					errorMessage: "<span class='dijitContentPaneError'>${errorState}</span>",
					isLoaded: false,
					baseClass: "dijitContentPane",
					ioArgs: {},
					onLoadDeferred: null,
					attributeMap: _4.delegate(_5._Widget.prototype.attributeMap, {
						title: []
					}),
					stopParser: true,
					template: false,
					create: function (_2a5, _2a6) {
						if ((!_2a5 || !_2a5.template) && _2a6 && !("href" in _2a5) && !("content" in _2a5)) {
							var df = _4.doc.createDocumentFragment();
							_2a6 = _4.byId(_2a6);
							while (_2a6.firstChild) {
								df.appendChild(_2a6.firstChild);
							}
							_2a5 = _4.delegate(_2a5, {
								content: df
							});
						}
						this.inherited(arguments, [_2a5, _2a6]);
					},
					postMixInProperties: function () {
						this.inherited(arguments);
						var _2a7 = _4.i18n.getLocalization("dijit", "loading", this.lang);
						this.loadingMessage = _4.string.substitute(this.loadingMessage, _2a7);
						this.errorMessage = _4.string.substitute(this.errorMessage, _2a7);
					},
					buildRendering: function () {
						this.inherited(arguments);
						if (!this.containerNode) {
							this.containerNode = this.domNode;
						}
						this.domNode.title = "";
						if (!_4.attr(this.domNode, "role")) {
							_5.setWaiRole(this.domNode, "group");
						}
					},
					_startChildren: function () {
						this.inherited(arguments);
						if (this._contentSetter) {
							_4.forEach(this._contentSetter.parseResults, function (obj) {
								if (!obj._started && !obj._destroyed && _4.isFunction(obj.startup)) {
									obj.startup();
									obj._started = true;
								}
							}, this);
						}
					},
					setHref: function (href) {
						_4.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
						return this.set("href", href);
					},
					_setHrefAttr: function (href) {
						this.cancel();
						this.onLoadDeferred = new _4.Deferred(_4.hitch(this, "cancel"));
						this.onLoadDeferred.addCallback(_4.hitch(this, "onLoad"));
						this._set("href", href);
						if (this.preload || (this._created && this._isShown())) {
							this._load();
						} else {
							this._hrefChanged = true;
						}
						return this.onLoadDeferred;
					},
					setContent: function (data) {
						_4.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
						this.set("content", data);
					},
					_setContentAttr: function (data) {
						this._set("href", "");
						this.cancel();
						this.onLoadDeferred = new _4.Deferred(_4.hitch(this, "cancel"));
						if (this._created) {
							this.onLoadDeferred.addCallback(_4.hitch(this, "onLoad"));
						}
						this._setContent(data || "");
						this._isDownloaded = false;
						return this.onLoadDeferred;
					},
					_getContentAttr: function () {
						return this.containerNode.innerHTML;
					},
					cancel: function () {
						if (this._xhrDfd && (this._xhrDfd.fired == -1)) {
							this._xhrDfd.cancel();
						}
						delete this._xhrDfd;
						this.onLoadDeferred = null;
					},
					uninitialize: function () {
						if (this._beingDestroyed) {
							this.cancel();
						}
						this.inherited(arguments);
					},
					destroyRecursive: function (_2a8) {
						if (this._beingDestroyed) {
							return;
						}
						this.inherited(arguments);
					},
					_onShow: function () {
						this.inherited(arguments);
						if (this.href) {
							if (!this._xhrDfd && (!this.isLoaded || this._hrefChanged || this.refreshOnShow)) {
								return this.refresh();
							}
						}
					},
					refresh: function () {
						this.cancel();
						this.onLoadDeferred = new _4.Deferred(_4.hitch(this, "cancel"));
						this.onLoadDeferred.addCallback(_4.hitch(this, "onLoad"));
						this._load();
						return this.onLoadDeferred;
					},
					_load: function () {
						this._setContent(this.onDownloadStart(), true);
						var self = this;
						var _2a9 = {
							preventCache: (this.preventCache || this.refreshOnShow),
							url: this.href,
							handleAs: "text"
						};
						if (_4.isObject(this.ioArgs)) {
							_4.mixin(_2a9, this.ioArgs);
						}
						var hand = (this._xhrDfd = (this.ioMethod || _4.xhrGet)(_2a9));
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
					},
					_onLoadHandler: function (data) {
						this._set("isLoaded", true);
						try {
							this.onLoadDeferred.callback(data);
						} catch (e) {
							console.error("Error " + this.widgetId + " running custom onLoad code: " + e.message);
						}
					},
					_onUnloadHandler: function () {
						this._set("isLoaded", false);
						try {
							this.onUnload();
						} catch (e) {
							console.error("Error " + this.widgetId + " running custom onUnload code: " + e.message);
						}
					},
					destroyDescendants: function () {
						if (this.isLoaded) {
							this._onUnloadHandler();
						}
						var _2aa = this._contentSetter;
						_4.forEach(this.getChildren(), function (_2ab) {
							if (_2ab.destroyRecursive) {
								_2ab.destroyRecursive();
							}
						});
						if (_2aa) {
							_4.forEach(_2aa.parseResults, function (_2ac) {
								if (_2ac.destroyRecursive && _2ac.domNode && _2ac.domNode.parentNode == _4.body()) {
									_2ac.destroyRecursive();
								}
							});
							delete _2aa.parseResults;
						}
						_4.html._emptyNode(this.containerNode);
						delete this._singleChild;
					},
					_setContent: function (cont, _2ad) {
						this.destroyDescendants();
						var _2ae = this._contentSetter;
						if (!(_2ae && _2ae instanceof _4.html._ContentSetter)) {
							_2ae = this._contentSetter = new _4.html._ContentSetter({
								node: this.containerNode,
								_onError: _4.hitch(this, this._onError),
								onContentError: _4.hitch(this, function (e) {
									var _2af = this.onContentError(e);
									try {
										this.containerNode.innerHTML = _2af;
									} catch (e) {
										console.error("Fatal " + this.id + " could not change content due to " + e.message, e);
									}
								})
							});
						}
						var _2b0 = _4.mixin({
							cleanContent: this.cleanContent,
							extractContent: this.extractContent,
							parseContent: this.parseOnLoad,
							parserScope: this.parserScope,
							startup: false,
							dir: this.dir,
							lang: this.lang
						}, this._contentSetterParams || {});
						_2ae.set((_4.isObject(cont) && cont.domNode) ? cont.domNode : cont, _2b0);
						delete this._contentSetterParams;
						if (this.doLayout) {
							this._checkIfSingleChild();
						}
						if (!_2ad) {
							if (this._started) {
								this._startChildren();
								this._scheduleLayout();
							}
							this._onLoadHandler(cont);
						}
					},
					_onError: function (type, err, _2b1) {
						this.onLoadDeferred.errback(err);
						var _2b2 = this["on" + type + "Error"].call(this, err);
						if (_2b1) {
							console.error(_2b1, err);
						} else {
							if (_2b2) {
								this._setContent(_2b2, true);
							}
						}
					},
					onLoad: function (data) {
					},
					onUnload: function () {
					},
					onDownloadStart: function () {
						return this.loadingMessage;
					},
					onContentError: function (_2b3) {
					},
					onDownloadError: function (_2b4) {
						return this.errorMessage;
					},
					onDownloadEnd: function () {
					}
				});
			}
			if (!_4._hasResource["dijit.TooltipDialog"]) {
				_4._hasResource["dijit.TooltipDialog"] = true;
				_4.provide("dijit.TooltipDialog");
				_4.declare("dijit.TooltipDialog", [_5.layout.ContentPane, _5._Templated, _5.form._FormMixin, _5._DialogMixin], {
					title: "",
					doLayout: false,
					autofocus: true,
					baseClass: "dijitTooltipDialog",
					_firstFocusItem: null,
					_lastFocusItem: null,
					templateString: _4.cache("dijit", "templates/TooltipDialog.html", "<div role=\"presentation\" tabIndex=\"-1\">\n\t<div class=\"dijitTooltipContainer\" role=\"presentation\">\n\t\t<div class =\"dijitTooltipContents dijitTooltipFocusNode\" dojoAttachPoint=\"containerNode\" role=\"dialog\"></div>\n\t</div>\n\t<div class=\"dijitTooltipConnector\" role=\"presentation\"></div>\n</div>\n"),
					_setTitleAttr: function (_2b5) {
						this.containerNode.title = _2b5;
						this._set("title", _2b5);
					},
					postCreate: function () {
						this.inherited(arguments);
						this.connect(this.containerNode, "onkeypress", "_onKey");
					},
					orient: function (node, _2b6, _2b7) {
						var newC = "dijitTooltipAB" + (_2b7.charAt(1) == "L" ? "Left" : "Right") + " dijitTooltip" + (_2b7.charAt(0) == "T" ? "Below" : "Above");
						_4.replaceClass(this.domNode, newC, this._currentOrientClass || "");
						this._currentOrientClass = newC;
					},
					focus: function () {
						this._getFocusItems(this.containerNode);
						_5.focus(this._firstFocusItem);
					},
					onOpen: function (pos) {
						this.orient(this.domNode, pos.aroundCorner, pos.corner);
						this._onShow();
					},
					onClose: function () {
						this.onHide();
					},
					_onKey: function (evt) {
						var node = evt.target;
						var dk = _4.keys;
						if (evt.charOrCode === dk.TAB) {
							this._getFocusItems(this.containerNode);
						}
						var _2b8 = (this._firstFocusItem == this._lastFocusItem);
						if (evt.charOrCode == dk.ESCAPE) {
							setTimeout(_4.hitch(this, "onCancel"), 0);
							_4.stopEvent(evt);
						} else {
							if (node == this._firstFocusItem && evt.shiftKey && evt.charOrCode === dk.TAB) {
								if (!_2b8) {
									_5.focus(this._lastFocusItem);
								}
								_4.stopEvent(evt);
							} else {
								if (node == this._lastFocusItem && evt.charOrCode === dk.TAB && !evt.shiftKey) {
									if (!_2b8) {
										_5.focus(this._firstFocusItem);
									}
									_4.stopEvent(evt);
								} else {
									if (evt.charOrCode === dk.TAB) {
										evt.stopPropagation();
									}
								}
							}
						}
					}
				});
			}
			if (!_4._hasResource["dijit.Dialog"]) {
				_4._hasResource["dijit.Dialog"] = true;
				_4.provide("dijit.Dialog");
				_4.declare("dijit._DialogBase", [_5._Templated, _5.form._FormMixin, _5._DialogMixin, _5._CssStateMixin], {
					templateString: _4.cache("dijit", "templates/Dialog.html", "<div class=\"dijitDialog\" role=\"dialog\" aria-labelledby=\"${id}_title\">\n\t<div dojoAttachPoint=\"titleBar\" class=\"dijitDialogTitleBar\">\n\t<span dojoAttachPoint=\"titleNode\" class=\"dijitDialogTitle\" id=\"${id}_title\"></span>\n\t<span dojoAttachPoint=\"closeButtonNode\" class=\"dijitDialogCloseIcon\" dojoAttachEvent=\"ondijitclick: onCancel\" title=\"${buttonCancel}\" role=\"button\" tabIndex=\"-1\">\n\t\t<span dojoAttachPoint=\"closeText\" class=\"closeText\" title=\"${buttonCancel}\">x</span>\n\t</span>\n\t</div>\n\t\t<div dojoAttachPoint=\"containerNode\" class=\"dijitDialogPaneContent\"></div>\n</div>\n"),
					baseClass: "dijitDialog",
					cssStateNodes: {
						closeButtonNode: "dijitDialogCloseIcon"
					},
					attributeMap: _4.delegate(_5._Widget.prototype.attributeMap, {
						title: [
							{
								node: "titleNode",
								type: "innerHTML"
							},
							{
								node: "titleBar",
								type: "attribute"
							}
						],
						"aria-describedby": ""
					}),
					open: false,
					duration: _5.defaultDuration,
					refocus: true,
					autofocus: true,
					_firstFocusItem: null,
					_lastFocusItem: null,
					doLayout: false,
					draggable: true,
					"aria-describedby": "",
					postMixInProperties: function () {
						var _2b9 = _4.i18n.getLocalization("dijit", "common");
						_4.mixin(this, _2b9);
						this.inherited(arguments);
					},
					postCreate: function () {
						_4.style(this.domNode, {
							display: "none",
							position: "absolute"
						});
						_4.body().appendChild(this.domNode);
						this.inherited(arguments);
						this.connect(this, "onExecute", "hide");
						this.connect(this, "onCancel", "hide");
						this._modalconnects = [];
					},
					onLoad: function () {
						this._position();
						if (this.autofocus && _5._DialogLevelManager.isTop(this)) {
							this._getFocusItems(this.domNode);
							_5.focus(this._firstFocusItem);
						}
						this.inherited(arguments);
					},
					_endDrag: function (e) {
						if (e && e.node && e.node === this.domNode) {
							this._relativePosition = _4.position(e.node);
						}
					},
					_setup: function () {
						var node = this.domNode;
						if (this.titleBar && this.draggable) {
							this._moveable = (_4.isIE == 6) ? new _4.dnd.TimedMoveable(node, {
								handle: this.titleBar
							}) : new _4.dnd.Moveable(node, {
								handle: this.titleBar,
								timeout: 0
							});
							this._dndListener = _4.subscribe("/dnd/move/stop", this, "_endDrag");
						} else {
							_4.addClass(node, "dijitDialogFixed");
						}
						this.underlayAttrs = {
							dialogId: this.id,
							"class": _4.map(this["class"].split(/\s/),function (s) {
								return s + "_underlay";
							}).join(" ")
						};
					},
					_size: function () {
						this._checkIfSingleChild();
						if (this._singleChild) {
							if (this._singleChildOriginalStyle) {
								this._singleChild.domNode.style.cssText = this._singleChildOriginalStyle;
							}
							delete this._singleChildOriginalStyle;
						} else {
							_4.style(this.containerNode, {
								width: "auto",
								height: "auto"
							});
						}
						var mb = _4._getMarginSize(this.domNode);
						var _2ba = _4.window.getBox();
						if (mb.w >= _2ba.w || mb.h >= _2ba.h) {
							var w = Math.min(mb.w, Math.floor(_2ba.w * 0.75)),
									h = Math.min(mb.h, Math.floor(_2ba.h * 0.75));
							if (this._singleChild && this._singleChild.resize) {
								this._singleChildOriginalStyle = this._singleChild.domNode.style.cssText;
								this._singleChild.resize({
									w: w,
									h: h
								});
							} else {
								_4.style(this.containerNode, {
									width: w + "px",
									height: h + "px",
									overflow: "auto",
									position: "relative"
								});
							}
						} else {
							if (this._singleChild && this._singleChild.resize) {
								this._singleChild.resize();
							}
						}
					},
					_position: function () {
						if (!_4.hasClass(_4.body(), "dojoMove")) {
							var node = this.domNode,
									_2bb = _4.window.getBox(),
									p = this._relativePosition,
									bb = p ? null : _4._getBorderBox(node),
									l = Math.floor(_2bb.l + (p ? p.x : (_2bb.w - bb.w) / 2)),
									t = Math.floor(_2bb.t + (p ? p.y : (_2bb.h - bb.h) / 2));
							_4.style(node, {
								left: l + "px",
								top: t + "px"
							});
						}
					},
					_onKey: function (evt) {
						if (evt.charOrCode) {
							var dk = _4.keys;
							var node = evt.target;
							if (evt.charOrCode === dk.TAB) {
								this._getFocusItems(this.domNode);
							}
							var _2bc = (this._firstFocusItem == this._lastFocusItem);
							if (node == this._firstFocusItem && evt.shiftKey && evt.charOrCode === dk.TAB) {
								if (!_2bc) {
									_5.focus(this._lastFocusItem);
								}
								_4.stopEvent(evt);
							} else {
								if (node == this._lastFocusItem && evt.charOrCode === dk.TAB && !evt.shiftKey) {
									if (!_2bc) {
										_5.focus(this._firstFocusItem);
									}
									_4.stopEvent(evt);
								} else {
									while (node) {
										if (node == this.domNode || _4.hasClass(node, "dijitPopup")) {
											if (evt.charOrCode == dk.ESCAPE) {
												this.onCancel();
											} else {
												return;
											}
										}
										node = node.parentNode;
									}
									if (evt.charOrCode !== dk.TAB) {
										_4.stopEvent(evt);
									} else {
										if (!_4.isOpera) {
											try {
												this._firstFocusItem.focus();
											} catch (e) {
											}
										}
									}
								}
							}
						}
					},
					show: function () {
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
						this._modalconnects.push(_4.connect(window, "onscroll", this, "layout"));
						this._modalconnects.push(_4.connect(window, "onresize", this, function () {
							var _2bd = _4.window.getBox();
							if (!this._oldViewport || _2bd.h != this._oldViewport.h || _2bd.w != this._oldViewport.w) {
								this.layout();
								this._oldViewport = _2bd;
							}
						}));
						this._modalconnects.push(_4.connect(this.domNode, "onkeypress", this, "_onKey"));
						_4.style(this.domNode, {
							opacity: 0,
							display: ""
						});
						this._set("open", true);
						this._onShow();
						this._size();
						this._position();
						var _2be;
						this._fadeInDeferred = new _4.Deferred(_4.hitch(this, function () {
							_2be.stop();
							delete this._fadeInDeferred;
						}));
						_2be = _4.fadeIn({
							node: this.domNode,
							duration: this.duration,
							beforeBegin: _4.hitch(this, function () {
								_5._DialogLevelManager.show(this, this.underlayAttrs);
							}),
							onEnd: _4.hitch(this, function () {
								if (this.autofocus && _5._DialogLevelManager.isTop(this)) {
									this._getFocusItems(this.domNode);
									_5.focus(this._firstFocusItem);
								}
								this._fadeInDeferred.callback(true);
								delete this._fadeInDeferred;
							})
						}).play();
						return this._fadeInDeferred;
					},
					hide: function () {
						if (!this._alreadyInitialized) {
							return;
						}
						if (this._fadeInDeferred) {
							this._fadeInDeferred.cancel();
						}
						var _2bf;
						this._fadeOutDeferred = new _4.Deferred(_4.hitch(this, function () {
							_2bf.stop();
							delete this._fadeOutDeferred;
						}));
						_2bf = _4.fadeOut({
							node: this.domNode,
							duration: this.duration,
							onEnd: _4.hitch(this, function () {
								this.domNode.style.display = "none";
								_5._DialogLevelManager.hide(this);
								this.onHide();
								this._fadeOutDeferred.callback(true);
								delete this._fadeOutDeferred;
							})
						}).play();
						if (this._scrollConnected) {
							this._scrollConnected = false;
						}
						_4.forEach(this._modalconnects, _4.disconnect);
						this._modalconnects = [];
						if (this._relativePosition) {
							delete this._relativePosition;
						}
						this._set("open", false);
						return this._fadeOutDeferred;
					},
					layout: function () {
						if (this.domNode.style.display != "none") {
							if (_5._underlay) {
								_5._underlay.layout();
							}
							this._position();
						}
					},
					destroy: function () {
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
							_4.unsubscribe(this._dndListener);
						}
						_4.forEach(this._modalconnects, _4.disconnect);
						_5._DialogLevelManager.hide(this);
						this.inherited(arguments);
					}
				});
				_4.declare("dijit.Dialog", [_5.layout.ContentPane, _5._DialogBase], {});
				_5._DialogLevelManager = {
					show: function (_2c0, _2c1) {
						var ds = _5._dialogStack;
						ds[ds.length - 1].focus = _5.getFocus(_2c0);
						var _2c2 = _5._underlay;
						if (!_2c2 || _2c2._destroyed) {
							_2c2 = _5._underlay = new _5.DialogUnderlay(_2c1);
						} else {
							_2c2.set(_2c0.underlayAttrs);
						}
						var _2c3 = ds[ds.length - 1].dialog ? ds[ds.length - 1].zIndex + 2 : 950;
						if (ds.length == 1) {
							_2c2.show();
						}
						_4.style(_5._underlay.domNode, "zIndex", _2c3 - 1);
						_4.style(_2c0.domNode, "zIndex", _2c3);
						ds.push({
							dialog: _2c0,
							underlayAttrs: _2c1,
							zIndex: _2c3
						});
					},
					hide: function (_2c4) {
						var ds = _5._dialogStack;
						if (ds[ds.length - 1].dialog == _2c4) {
							ds.pop();
							var pd = ds[ds.length - 1];
							if (ds.length == 1) {
								if (!_5._underlay._destroyed) {
									_5._underlay.hide();
								}
							} else {
								_4.style(_5._underlay.domNode, "zIndex", pd.zIndex - 1);
								_5._underlay.set(pd.underlayAttrs);
							}
							if (_2c4.refocus) {
								var _2c5 = pd.focus;
								if (!_2c5 || (pd.dialog && !_4.isDescendant(_2c5.node, pd.dialog.domNode))) {
									pd.dialog._getFocusItems(pd.dialog.domNode);
									_2c5 = pd.dialog._firstFocusItem;
								}
								try {
									_5.focus(_2c5);
								} catch (e) {
								}
							}
						} else {
							var idx = _4.indexOf(_4.map(ds, function (elem) {
								return elem.dialog;
							}), _2c4);
							if (idx != -1) {
								ds.splice(idx, 1);
							}
						}
					},
					isTop: function (_2c6) {
						var ds = _5._dialogStack;
						return ds[ds.length - 1].dialog == _2c6;
					}
				};
				_5._dialogStack = [
					{
						dialog: null,
						focus: null,
						underlayAttrs: null
					}
				];
			}
			if (!_4._hasResource["dojo.regexp"]) {
				_4._hasResource["dojo.regexp"] = true;
				_4.provide("dojo.regexp");
				_4.getObject("regexp", true, _4);
				_4.regexp.escapeString = function (str, _2c7) {
					return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (ch) {
						if (_2c7 && _2c7.indexOf(ch) != -1) {
							return ch;
						}
						return "\\" + ch;
					});
				};
				_4.regexp.buildGroupRE = function (arr, re, _2c8) {
					if (!(arr instanceof Array)) {
						return re(arr);
					}
					var b = [];
					for (var i = 0; i < arr.length; i++) {
						b.push(re(arr[i]));
					}
					return _4.regexp.group(b.join("|"), _2c8);
				};
				_4.regexp.group = function (_2c9, _2ca) {
					return "(" + (_2ca ? "?:" : "") + _2c9 + ")";
				};
			}
			if (!_4._hasResource["dojo.cookie"]) {
				_4._hasResource["dojo.cookie"] = true;
				_4.provide("dojo.cookie");
				_4.cookie = function (name, _2cb, _2cc) {
					var c = document.cookie;
					if (arguments.length == 1) {
						var _2cd = c.match(new RegExp("(?:^|; )" + _4.regexp.escapeString(name) + "=([^;]*)"));
						return _2cd ? decodeURIComponent(_2cd[1]) : undefined;
					} else {
						_2cc = _2cc || {};
						var exp = _2cc.expires;
						if (typeof exp == "number") {
							var d = new Date();
							d.setTime(d.getTime() + exp * 24 * 60 * 60 * 1000);
							exp = _2cc.expires = d;
						}
						if (exp && exp.toUTCString) {
							_2cc.expires = exp.toUTCString();
						}
						_2cb = encodeURIComponent(_2cb);
						var _2ce = name + "=" + _2cb,
								_2cf;
						for (_2cf in _2cc) {
							_2ce += "; " + _2cf;
							var _2d0 = _2cc[_2cf];
							if (_2d0 !== true) {
								_2ce += "=" + _2d0;
							}
						}
						document.cookie = _2ce;
					}
				};
				_4.cookie.isSupported = function () {
					if (!("cookieEnabled" in navigator)) {
						this("__djCookieTest__", "CookiesAllowed");
						navigator.cookieEnabled = this("__djCookieTest__") == "CookiesAllowed";
						if (navigator.cookieEnabled) {
							this("__djCookieTest__", "", {
								expires: -1
							});
						}
					}
					return navigator.cookieEnabled;
				};
			}
			if (!_4._hasResource["dijit.layout.BorderContainer"]) {
				_4._hasResource["dijit.layout.BorderContainer"] = true;
				_4.provide("dijit.layout.BorderContainer");
				_4.declare("dijit.layout.BorderContainer", _5.layout._LayoutWidget, {
					design: "headline",
					gutters: true,
					liveSplitters: true,
					persist: false,
					baseClass: "dijitBorderContainer",
					_splitterClass: "dijit.layout._Splitter",
					postMixInProperties: function () {
						if (!this.gutters) {
							this.baseClass += "NoGutter";
						}
						this.inherited(arguments);
					},
					startup: function () {
						if (this._started) {
							return;
						}
						_4.forEach(this.getChildren(), this._setupChild, this);
						this.inherited(arguments);
					},
					_setupChild: function (_2d1) {
						var _2d2 = _2d1.region;
						if (_2d2) {
							this.inherited(arguments);
							_4.addClass(_2d1.domNode, this.baseClass + "Pane");
							var ltr = this.isLeftToRight();
							if (_2d2 == "leading") {
								_2d2 = ltr ? "left" : "right";
							}
							if (_2d2 == "trailing") {
								_2d2 = ltr ? "right" : "left";
							}
							if (_2d2 != "center" && (_2d1.splitter || this.gutters) && !_2d1._splitterWidget) {
								var _2d3 = _4.getObject(_2d1.splitter ? this._splitterClass : "dijit.layout._Gutter");
								var _2d4 = new _2d3({
									id: _2d1.id + "_splitter",
									container: this,
									child: _2d1,
									region: _2d2,
									live: this.liveSplitters
								});
								_2d4.isSplitter = true;
								_2d1._splitterWidget = _2d4;
								_4.place(_2d4.domNode, _2d1.domNode, "after");
								_2d4.startup();
							}
							_2d1.region = _2d2;
						}
					},
					layout: function () {
						this._layoutChildren();
					},
					addChild: function (_2d5, _2d6) {
						this.inherited(arguments);
						if (this._started) {
							this.layout();
						}
					},
					removeChild: function (_2d7) {
						var _2d8 = _2d7.region;
						var _2d9 = _2d7._splitterWidget;
						if (_2d9) {
							_2d9.destroy();
							delete _2d7._splitterWidget;
						}
						this.inherited(arguments);
						if (this._started) {
							this._layoutChildren();
						}
						_4.removeClass(_2d7.domNode, this.baseClass + "Pane");
						_4.style(_2d7.domNode, {
							top: "auto",
							bottom: "auto",
							left: "auto",
							right: "auto",
							position: "static"
						});
						_4.style(_2d7.domNode, _2d8 == "top" || _2d8 == "bottom" ? "width" : "height", "auto");
					},
					getChildren: function () {
						return _4.filter(this.inherited(arguments), function (_2da) {
							return !_2da.isSplitter;
						});
					},
					getSplitter: function (_2db) {
						return _4.filter(this.getChildren(), function (_2dc) {
							return _2dc.region == _2db;
						})[0]._splitterWidget;
					},
					resize: function (_2dd, _2de) {
						if (!this.cs || !this.pe) {
							var node = this.domNode;
							this.cs = _4.getComputedStyle(node);
							this.pe = _4._getPadExtents(node, this.cs);
							this.pe.r = _4._toPixelValue(node, this.cs.paddingRight);
							this.pe.b = _4._toPixelValue(node, this.cs.paddingBottom);
							_4.style(node, "padding", "0px");
						}
						this.inherited(arguments);
					},
					_layoutChildren: function (_2df, _2e0) {
						if (!this._borderBox || !this._borderBox.h) {
							return;
						}
						var _2e1 = _4.map(this.getChildren(), function (_2e2, idx) {
							return {
								pane: _2e2,
								weight: [_2e2.region == "center" ? Infinity : 0, _2e2.layoutPriority, (this.design == "sidebar" ? 1 : -1) * (/top|bottom/.test(_2e2.region) ? 1 : -1), idx]
							};
						}, this);
						_2e1.sort(function (a, b) {
							var aw = a.weight,
									bw = b.weight;
							for (var i = 0; i < aw.length; i++) {
								if (aw[i] != bw[i]) {
									return aw[i] - bw[i];
								}
							}
							return 0;
						});
						var _2e3 = [];
						_4.forEach(_2e1, function (_2e4) {
							var pane = _2e4.pane;
							_2e3.push(pane);
							if (pane._splitterWidget) {
								_2e3.push(pane._splitterWidget);
							}
						});
						var dim = {
							l: this.pe.l,
							t: this.pe.t,
							w: this._borderBox.w - this.pe.w,
							h: this._borderBox.h - this.pe.h
						};
						_5.layout.layoutChildren(this.domNode, dim, _2e3, _2df, _2e0);
					},
					destroyRecursive: function () {
						_4.forEach(this.getChildren(), function (_2e5) {
							var _2e6 = _2e5._splitterWidget;
							if (_2e6) {
								_2e6.destroy();
							}
							delete _2e5._splitterWidget;
						});
						this.inherited(arguments);
					}
				});
				_4.extend(_5._Widget, {
					region: "",
					layoutPriority: 0,
					splitter: false,
					minSize: 0,
					maxSize: Infinity
				});
				_4.declare("dijit.layout._Splitter", [_5._Widget, _5._Templated], {
					live: true,
					templateString: "<div class=\"dijitSplitter\" dojoAttachEvent=\"onkeypress:_onKeyPress,onmousedown:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse\" tabIndex=\"0\" role=\"separator\"><div class=\"dijitSplitterThumb\"></div></div>",
					postMixInProperties: function () {
						this.inherited(arguments);
						this.horizontal = /top|bottom/.test(this.region);
						this._factor = /top|left/.test(this.region) ? 1 : -1;
						this._cookieName = this.container.id + "_" + this.region;
					},
					buildRendering: function () {
						this.inherited(arguments);
						_4.addClass(this.domNode, "dijitSplitter" + (this.horizontal ? "H" : "V"));
						if (this.container.persist) {
							var _2e7 = _4.cookie(this._cookieName);
							if (_2e7) {
								this.child.domNode.style[this.horizontal ? "height" : "width"] = _2e7;
							}
						}
					},
					_computeMaxSize: function () {
						var dim = this.horizontal ? "h" : "w",
								_2e8 = _4.marginBox(this.child.domNode)[dim],
								_2e9 = _4.filter(this.container.getChildren(), function (_2ea) {
									return _2ea.region == "center";
								})[0],
								_2eb = _4.marginBox(_2e9.domNode)[dim];
						return Math.min(this.child.maxSize, _2e8 + _2eb);
					},
					_startDrag: function (e) {
						if (!this.cover) {
							this.cover = _4.doc.createElement("div");
							_4.addClass(this.cover, "dijitSplitterCover");
							_4.place(this.cover, this.child.domNode, "after");
						}
						_4.addClass(this.cover, "dijitSplitterCoverActive");
						if (this.fake) {
							_4.destroy(this.fake);
						}
						if (!(this._resize = this.live)) {
							(this.fake = this.domNode.cloneNode(true)).removeAttribute("id");
							_4.addClass(this.domNode, "dijitSplitterShadow");
							_4.place(this.fake, this.domNode, "after");
						}
						_4.addClass(this.domNode, "dijitSplitterActive dijitSplitter" + (this.horizontal ? "H" : "V") + "Active");
						if (this.fake) {
							_4.removeClass(this.fake, "dijitSplitterHover dijitSplitter" + (this.horizontal ? "H" : "V") + "Hover");
						}
						var _2ec = this._factor,
								_2ed = this.horizontal,
								axis = _2ed ? "pageY" : "pageX",
								_2ee = e[axis],
								_2ef = this.domNode.style,
								dim = _2ed ? "h" : "w",
								_2f0 = _4.marginBox(this.child.domNode)[dim],
								max = this._computeMaxSize(),
								min = this.child.minSize || 20,
								_2f1 = this.region,
								_2f2 = _2f1 == "top" || _2f1 == "bottom" ? "top" : "left",
								_2f3 = parseInt(_2ef[_2f2], 10),
								_2f4 = this._resize,
								_2f5 = _4.hitch(this.container, "_layoutChildren", this.child.id),
								de = _4.doc;
						this._handlers = (this._handlers || []).concat([_4.connect(de, "onmousemove", this._drag = function (e, _2f6) {
							var _2f7 = e[axis] - _2ee,
									_2f8 = _2ec * _2f7 + _2f0,
									_2f9 = Math.max(Math.min(_2f8, max), min);
							if (_2f4 || _2f6) {
								_2f5(_2f9);
							}
							_2ef[_2f2] = _2f7 + _2f3 + _2ec * (_2f9 - _2f8) + "px";
						}), _4.connect(de, "ondragstart", _4.stopEvent), _4.connect(_4.body(), "onselectstart", _4.stopEvent), _4.connect(de, "onmouseup", this, "_stopDrag")]);
						_4.stopEvent(e);
					},
					_onMouse: function (e) {
						var o = (e.type == "mouseover" || e.type == "mouseenter");
						_4.toggleClass(this.domNode, "dijitSplitterHover", o);
						_4.toggleClass(this.domNode, "dijitSplitter" + (this.horizontal ? "H" : "V") + "Hover", o);
					},
					_stopDrag: function (e) {
						try {
							if (this.cover) {
								_4.removeClass(this.cover, "dijitSplitterCoverActive");
							}
							if (this.fake) {
								_4.destroy(this.fake);
							}
							_4.removeClass(this.domNode, "dijitSplitterActive dijitSplitter" + (this.horizontal ? "H" : "V") + "Active dijitSplitterShadow");
							this._drag(e);
							this._drag(e, true);
						} finally {
							this._cleanupHandlers();
							delete this._drag;
						}
						if (this.container.persist) {
							_4.cookie(this._cookieName, this.child.domNode.style[this.horizontal ? "height" : "width"], {
								expires: 365
							});
						}
					},
					_cleanupHandlers: function () {
						_4.forEach(this._handlers, _4.disconnect);
						delete this._handlers;
					},
					_onKeyPress: function (e) {
						this._resize = true;
						var _2fa = this.horizontal;
						var tick = 1;
						var dk = _4.keys;
						switch (e.charOrCode) {
							case _2fa ? dk.UP_ARROW :
									dk.LEFT_ARROW :
								tick *= -1;
							case _2fa ? dk.DOWN_ARROW :
									dk.RIGHT_ARROW :
								break;
							default:
								return;
						}
						var _2fb = _4._getMarginSize(this.child.domNode)[_2fa ? "h" : "w"] + this._factor * tick;
						this.container._layoutChildren(this.child.id, Math.max(Math.min(_2fb, this._computeMaxSize()), this.child.minSize));
						_4.stopEvent(e);
					},
					destroy: function () {
						this._cleanupHandlers();
						delete this.child;
						delete this.container;
						delete this.cover;
						delete this.fake;
						this.inherited(arguments);
					}
				});
				_4.declare("dijit.layout._Gutter", [_5._Widget, _5._Templated], {
					templateString: "<div class=\"dijitGutter\" role=\"presentation\"></div>",
					postMixInProperties: function () {
						this.inherited(arguments);
						this.horizontal = /top|bottom/.test(this.region);
					},
					buildRendering: function () {
						this.inherited(arguments);
						_4.addClass(this.domNode, "dijitGutter" + (this.horizontal ? "H" : "V"));
					}
				});
			}
			if (!_4._hasResource["dojo.behavior"]) {
				_4._hasResource["dojo.behavior"] = true;
				_4.provide("dojo.behavior");
				_4.behavior = new function () {
					function _2fc(obj, name) {
						if (!obj[name]) {
							obj[name] = [];
						}
						return obj[name];
					};
					var _2fd = 0;

					function _2fe(obj, _2ff, func) {
						var _300 = {};
						for (var x in obj) {
							if (typeof _300[x] == "undefined") {
								if (!func) {
									_2ff(obj[x], x);
								} else {
									func.call(_2ff, obj[x], x);
								}
							}
						}
					};
					this._behaviors = {};
					this.add = function (_301) {
						var _302 = {};
						_2fe(_301, this, function (_303, name) {
							var _304 = _2fc(this._behaviors, name);
							if (typeof _304["id"] != "number") {
								_304.id = _2fd++;
							}
							var _305 = [];
							_304.push(_305);
							if ((_4.isString(_303)) || (_4.isFunction(_303))) {
								_303 = {
									found: _303
								};
							}
							_2fe(_303, function (rule, _306) {
								_2fc(_305, _306).push(rule);
							});
						});
					};
					var _307 = function (node, _308, _309) {
						if (_4.isString(_308)) {
							if (_309 == "found") {
								_4.publish(_308, [node]);
							} else {
								_4.connect(node, _309, function () {
									_4.publish(_308, arguments);
								});
							}
						} else {
							if (_4.isFunction(_308)) {
								if (_309 == "found") {
									_308(node);
								} else {
									_4.connect(node, _309, _308);
								}
							}
						}
					};
					this.apply = function () {
						_2fe(this._behaviors, function (_30a, id) {
							_4.query(id).forEach(function (elem) {
								var _30b = 0;
								var bid = "_dj_behavior_" + _30a.id;
								if (typeof elem[bid] == "number") {
									_30b = elem[bid];
									if (_30b == (_30a.length)) {
										return;
									}
								}
								for (var x = _30b, tver; tver = _30a[x]; x++) {
									_2fe(tver, function (_30c, _30d) {
										if (_4.isArray(_30c)) {
											_4.forEach(_30c, function (_30e) {
												_307(elem, _30e, _30d);
											});
										}
									});
								}
								elem[bid] = _30a.length;
							});
						});
					};
				};
				_4.addOnLoad(_4.behavior, "apply");
			}
			if (!_4._hasResource["dojo.NodeList-traverse"]) {
				_4._hasResource["dojo.NodeList-traverse"] = true;
				_4.provide("dojo.NodeList-traverse");
				_4.extend(_4.NodeList, {
					_buildArrayFromCallback: function (_30f) {
						var ary = [];
						for (var i = 0; i < this.length; i++) {
							var _310 = _30f.call(this[i], this[i], ary);
							if (_310) {
								ary = ary.concat(_310);
							}
						}
						return ary;
					},
					_getUniqueAsNodeList: function (_311) {
						var ary = [];
						for (var i = 0, node; node = _311[i]; i++) {
							if (node.nodeType == 1 && _4.indexOf(ary, node) == -1) {
								ary.push(node);
							}
						}
						return this._wrap(ary, null, this._NodeListCtor);
					},
					_getUniqueNodeListWithParent: function (_312, _313) {
						var ary = this._getUniqueAsNodeList(_312);
						ary = (_313 ? _4._filterQueryResult(ary, _313) : ary);
						return ary._stash(this);
					},
					_getRelatedUniqueNodes: function (_314, _315) {
						return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(_315), _314);
					},
					children: function (_316) {
						return this._getRelatedUniqueNodes(_316, function (node, ary) {
							return _4._toArray(node.childNodes);
						});
					},
					closest: function (_317, root) {
						return this._getRelatedUniqueNodes(null, function (node, ary) {
							do {
								if (_4._filterQueryResult([node], _317, root).length) {
									return node;
								}
							} while (node != root && (node = node.parentNode) && node.nodeType == 1);
							return null;
						});
					},
					parent: function (_318) {
						return this._getRelatedUniqueNodes(_318, function (node, ary) {
							return node.parentNode;
						});
					},
					parents: function (_319) {
						return this._getRelatedUniqueNodes(_319, function (node, ary) {
							var pary = [];
							while (node.parentNode) {
								node = node.parentNode;
								pary.push(node);
							}
							return pary;
						});
					},
					siblings: function (_31a) {
						return this._getRelatedUniqueNodes(_31a, function (node, ary) {
							var pary = [];
							var _31b = (node.parentNode && node.parentNode.childNodes);
							for (var i = 0; i < _31b.length; i++) {
								if (_31b[i] != node) {
									pary.push(_31b[i]);
								}
							}
							return pary;
						});
					},
					next: function (_31c) {
						return this._getRelatedUniqueNodes(_31c, function (node, ary) {
							var next = node.nextSibling;
							while (next && next.nodeType != 1) {
								next = next.nextSibling;
							}
							return next;
						});
					},
					nextAll: function (_31d) {
						return this._getRelatedUniqueNodes(_31d, function (node, ary) {
							var pary = [];
							var next = node;
							while ((next = next.nextSibling)) {
								if (next.nodeType == 1) {
									pary.push(next);
								}
							}
							return pary;
						});
					},
					prev: function (_31e) {
						return this._getRelatedUniqueNodes(_31e, function (node, ary) {
							var prev = node.previousSibling;
							while (prev && prev.nodeType != 1) {
								prev = prev.previousSibling;
							}
							return prev;
						});
					},
					prevAll: function (_31f) {
						return this._getRelatedUniqueNodes(_31f, function (node, ary) {
							var pary = [];
							var prev = node;
							while ((prev = prev.previousSibling)) {
								if (prev.nodeType == 1) {
									pary.push(prev);
								}
							}
							return pary;
						});
					},
					andSelf: function () {
						return this.concat(this._parent);
					},
					first: function () {
						return this._wrap(((this[0] && [this[0]]) || []), this);
					},
					last: function () {
						return this._wrap((this.length ? [this[this.length - 1]] : []), this);
					},
					even: function () {
						return this.filter(function (item, i) {
							return i % 2 != 0;
						});
					},
					odd: function () {
						return this.filter(function (item, i) {
							return i % 2 == 0;
						});
					}
				});
			}
			if (!_4._hasResource["dojo.dnd.Container"]) {
				_4._hasResource["dojo.dnd.Container"] = true;
				_4.provide("dojo.dnd.Container");
				_4.declare("dojo.dnd.Container", null, {
					skipForm: false,
					constructor: function (node, _320) {
						this.node = _4.byId(node);
						if (!_320) {
							_320 = {};
						}
						this.creator = _320.creator || null;
						this.skipForm = _320.skipForm;
						this.parent = _320.dropParent && _4.byId(_320.dropParent);
						this.map = {};
						this.current = null;
						this.containerState = "";
						_4.addClass(this.node, "dojoDndContainer");
						if (!(_320 && _320._skipStartup)) {
							this.startup();
						}
						this.events = [_4.connect(this.node, "onmouseover", this, "onMouseOver"), _4.connect(this.node, "onmouseout", this, "onMouseOut"), _4.connect(this.node, "ondragstart", this, "onSelectStart"), _4.connect(this.node, "onselectstart", this, "onSelectStart")];
					},
					creator: function () {
					},
					getItem: function (key) {
						return this.map[key];
					},
					setItem: function (key, data) {
						this.map[key] = data;
					},
					delItem: function (key) {
						delete this.map[key];
					},
					forInItems: function (f, o) {
						o = o || _4.global;
						var m = this.map,
								e = _4.dnd._empty;
						for (var i in m) {
							if (i in e) {
								continue;
							}
							f.call(o, m[i], i, this);
						}
						return o;
					},
					clearItems: function () {
						this.map = {};
					},
					getAllNodes: function () {
						return _4.query("> .dojoDndItem", this.parent);
					},
					sync: function () {
						var map = {};
						this.getAllNodes().forEach(function (node) {
							if (node.id) {
								var item = this.getItem(node.id);
								if (item) {
									map[node.id] = item;
									return;
								}
							} else {
								node.id = _4.dnd.getUniqueId();
							}
							var type = node.getAttribute("dndType"),
									data = node.getAttribute("dndData");
							map[node.id] = {
								data: data || node.innerHTML,
								type: type ? type.split(/\s*,\s*/) : ["text"]
							};
						}, this);
						this.map = map;
						return this;
					},
					insertNodes: function (data, _321, _322) {
						if (!this.parent.firstChild) {
							_322 = null;
						} else {
							if (_321) {
								if (!_322) {
									_322 = this.parent.firstChild;
								}
							} else {
								if (_322) {
									_322 = _322.nextSibling;
								}
							}
						}
						if (_322) {
							for (var i = 0; i < data.length; ++i) {
								var t = this._normalizedCreator(data[i]);
								this.setItem(t.node.id, {
									data: t.data,
									type: t.type
								});
								this.parent.insertBefore(t.node, _322);
							}
						} else {
							for (var i = 0; i < data.length; ++i) {
								var t = this._normalizedCreator(data[i]);
								this.setItem(t.node.id, {
									data: t.data,
									type: t.type
								});
								this.parent.appendChild(t.node);
							}
						}
						return this;
					},
					destroy: function () {
						_4.forEach(this.events, _4.disconnect);
						this.clearItems();
						this.node = this.parent = this.current = null;
					},
					markupFactory: function (_323, node) {
						_323._skipStartup = true;
						return new _4.dnd.Container(node, _323);
					},
					startup: function () {
						if (!this.parent) {
							this.parent = this.node;
							if (this.parent.tagName.toLowerCase() == "table") {
								var c = this.parent.getElementsByTagName("tbody");
								if (c && c.length) {
									this.parent = c[0];
								}
							}
						}
						this.defaultCreator = _4.dnd._defaultCreator(this.parent);
						this.sync();
					},
					onMouseOver: function (e) {
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
					},
					onMouseOut: function (e) {
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
					},
					onSelectStart: function (e) {
						if (!this.skipForm || !_4.dnd.isFormElement(e)) {
							_4.stopEvent(e);
						}
					},
					onOverEvent: function () {
					},
					onOutEvent: function () {
					},
					_changeState: function (type, _324) {
						var _325 = "dojoDnd" + type;
						var _326 = type.toLowerCase() + "State";
						_4.replaceClass(this.node, _325 + _324, _325 + this[_326]);
						this[_326] = _324;
					},
					_addItemClass: function (node, type) {
						_4.addClass(node, "dojoDndItem" + type);
					},
					_removeItemClass: function (node, type) {
						_4.removeClass(node, "dojoDndItem" + type);
					},
					_getChildByEvent: function (e) {
						var node = e.target;
						if (node) {
							for (var _327 = node.parentNode; _327; node = _327, _327 = node.parentNode) {
								if (_327 == this.parent && _4.hasClass(node, "dojoDndItem")) {
									return node;
								}
							}
						}
						return null;
					},
					_normalizedCreator: function (item, hint) {
						var t = (this.creator || this.defaultCreator).call(this, item, hint);
						if (!_4.isArray(t.type)) {
							t.type = ["text"];
						}
						if (!t.node.id) {
							t.node.id = _4.dnd.getUniqueId();
						}
						_4.addClass(t.node, "dojoDndItem");
						return t;
					}
				});
				_4.dnd._createNode = function (tag) {
					if (!tag) {
						return _4.dnd._createSpan;
					}
					return function (text) {
						return _4.create(tag, {
							innerHTML: text
						});
					};
				};
				_4.dnd._createTrTd = function (text) {
					var tr = _4.create("tr");
					_4.create("td", {
						innerHTML: text
					}, tr);
					return tr;
				};
				_4.dnd._createSpan = function (text) {
					return _4.create("span", {
						innerHTML: text
					});
				};
				_4.dnd._defaultCreatorNodes = {
					ul: "li",
					ol: "li",
					div: "div",
					p: "div"
				};
				_4.dnd._defaultCreator = function (node) {
					var tag = node.tagName.toLowerCase();
					var c = tag == "tbody" || tag == "thead" ? _4.dnd._createTrTd : _4.dnd._createNode(_4.dnd._defaultCreatorNodes[tag]);
					return function (item, hint) {
						var _328 = item && _4.isObject(item),
								data, type, n;
						if (_328 && item.tagName && item.nodeType && item.getAttribute) {
							data = item.getAttribute("dndData") || item.innerHTML;
							type = item.getAttribute("dndType");
							type = type ? type.split(/\s*,\s*/) : ["text"];
							n = item;
						} else {
							data = (_328 && item.data) ? item.data : item;
							type = (_328 && item.type) ? item.type : ["text"];
							n = (hint == "avatar" ? _4.dnd._createSpan : c)(String(data));
						}
						if (!n.id) {
							n.id = _4.dnd.getUniqueId();
						}
						return {
							node: n,
							data: data,
							type: type
						};
					};
				};
			}
			if (!_4._hasResource["dojo.dnd.Selector"]) {
				_4._hasResource["dojo.dnd.Selector"] = true;
				_4.provide("dojo.dnd.Selector");
				_4.declare("dojo.dnd.Selector", _4.dnd.Container, {
					constructor: function (node, _329) {
						if (!_329) {
							_329 = {};
						}
						this.singular = _329.singular;
						this.autoSync = _329.autoSync;
						this.selection = {};
						this.anchor = null;
						this.simpleSelection = false;
						this.events.push(_4.connect(this.node, "onmousedown", this, "onMouseDown"), _4.connect(this.node, "onmouseup", this, "onMouseUp"));
					},
					singular: false,
					getSelectedNodes: function () {
						var t = new _4.NodeList();
						var e = _4.dnd._empty;
						for (var i in this.selection) {
							if (i in e) {
								continue;
							}
							t.push(_4.byId(i));
						}
						return t;
					},
					selectNone: function () {
						return this._removeSelection()._removeAnchor();
					},
					selectAll: function () {
						this.forInItems(function (data, id) {
							this._addItemClass(_4.byId(id), "Selected");
							this.selection[id] = 1;
						}, this);
						return this._removeAnchor();
					},
					deleteSelectedNodes: function () {
						var e = _4.dnd._empty;
						for (var i in this.selection) {
							if (i in e) {
								continue;
							}
							var n = _4.byId(i);
							this.delItem(i);
							_4.destroy(n);
						}
						this.anchor = null;
						this.selection = {};
						return this;
					},
					forInSelectedItems: function (f, o) {
						o = o || _4.global;
						var s = this.selection,
								e = _4.dnd._empty;
						for (var i in s) {
							if (i in e) {
								continue;
							}
							f.call(o, this.getItem(i), i, this);
						}
					},
					sync: function () {
						_4.dnd.Selector.superclass.sync.call(this);
						if (this.anchor) {
							if (!this.getItem(this.anchor.id)) {
								this.anchor = null;
							}
						}
						var t = [],
								e = _4.dnd._empty;
						for (var i in this.selection) {
							if (i in e) {
								continue;
							}
							if (!this.getItem(i)) {
								t.push(i);
							}
						}
						_4.forEach(t, function (i) {
							delete this.selection[i];
						}, this);
						return this;
					},
					insertNodes: function (_32a, data, _32b, _32c) {
						var _32d = this._normalizedCreator;
						this._normalizedCreator = function (item, hint) {
							var t = _32d.call(this, item, hint);
							if (_32a) {
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
						_4.dnd.Selector.superclass.insertNodes.call(this, data, _32b, _32c);
						this._normalizedCreator = _32d;
						return this;
					},
					destroy: function () {
						_4.dnd.Selector.superclass.destroy.call(this);
						this.selection = this.anchor = null;
					},
					markupFactory: function (_32e, node) {
						_32e._skipStartup = true;
						return new _4.dnd.Selector(node, _32e);
					},
					onMouseDown: function (e) {
						if (this.autoSync) {
							this.sync();
						}
						if (!this.current) {
							return;
						}
						if (!this.singular && !_4.isCopyKey(e) && !e.shiftKey && (this.current.id in this.selection)) {
							this.simpleSelection = true;
							if (e.button === _4.mouseButtons.LEFT) {
								_4.stopEvent(e);
							}
							return;
						}
						if (!this.singular && e.shiftKey) {
							if (!_4.isCopyKey(e)) {
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
									if (_4.isCopyKey(e)) {
										this.selectNone();
									}
								} else {
									this.selectNone();
									this.anchor = this.current;
									this._addItemClass(this.anchor, "Anchor");
									this.selection[this.current.id] = 1;
								}
							} else {
								if (_4.isCopyKey(e)) {
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
						_4.stopEvent(e);
					},
					onMouseUp: function (e) {
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
					},
					onMouseMove: function (e) {
						this.simpleSelection = false;
					},
					onOverEvent: function () {
						this.onmousemoveEvent = _4.connect(this.node, "onmousemove", this, "onMouseMove");
					},
					onOutEvent: function () {
						_4.disconnect(this.onmousemoveEvent);
						delete this.onmousemoveEvent;
					},
					_removeSelection: function () {
						var e = _4.dnd._empty;
						for (var i in this.selection) {
							if (i in e) {
								continue;
							}
							var node = _4.byId(i);
							if (node) {
								this._removeItemClass(node, "Selected");
							}
						}
						this.selection = {};
						return this;
					},
					_removeAnchor: function () {
						if (this.anchor) {
							this._removeItemClass(this.anchor, "Anchor");
							this.anchor = null;
						}
						return this;
					}
				});
			}
			if (!_4._hasResource["dojo.dnd.Avatar"]) {
				_4._hasResource["dojo.dnd.Avatar"] = true;
				_4.provide("dojo.dnd.Avatar");
				_4.declare("dojo.dnd.Avatar", null, {
					constructor: function (_32f) {
						this.manager = _32f;
						this.construct();
					},
					construct: function () {
						this.isA11y = _4.hasClass(_4.body(), "dijit_a11y");
						var a = _4.create("table", {
									"class": "dojoDndAvatar",
									style: {
										position: "absolute",
										zIndex: "1999",
										margin: "0px"
									}
								}),
								_330 = this.manager.source,
								node, b = _4.create("tbody", null, a),
								tr = _4.create("tr", null, b),
								td = _4.create("td", null, tr),
								icon = this.isA11y ? _4.create("span", {
									id: "a11yIcon",
									innerHTML: this.manager.copy ? "+" : "<"
								}, td) : null,
								span = _4.create("span", {
									innerHTML: _330.generateText ? this._generateText() : ""
								}, td),
								k = Math.min(5, this.manager.nodes.length),
								i = 0;
						_4.attr(tr, {
							"class": "dojoDndAvatarHeader",
							style: {
								opacity: 0.9
							}
						});
						for (; i < k; ++i) {
							if (_330.creator) {
								node = _330._normalizedCreator(_330.getItem(this.manager.nodes[i].id).data, "avatar").node;
							} else {
								node = this.manager.nodes[i].cloneNode(true);
								if (node.tagName.toLowerCase() == "tr") {
									var _331 = _4.create("table"),
											_332 = _4.create("tbody", null, _331);
									_332.appendChild(node);
									node = _331;
								}
							}
							node.id = "";
							tr = _4.create("tr", null, b);
							td = _4.create("td", null, tr);
							td.appendChild(node);
							_4.attr(tr, {
								"class": "dojoDndAvatarItem",
								style: {
									opacity: (9 - i) / 10
								}
							});
						}
						this.node = a;
					},
					destroy: function () {
						_4.destroy(this.node);
						this.node = false;
					},
					update: function () {
						_4[(this.manager.canDropFlag ? "add" : "remove") + "Class"](this.node, "dojoDndAvatarCanDrop");
						if (this.isA11y) {
							var icon = _4.byId("a11yIcon");
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
						_4.query(("tr.dojoDndAvatarHeader td span" + (this.isA11y ? " span" : "")), this.node).forEach(function (node) {
							node.innerHTML = this._generateText();
						}, this);
					},
					_generateText: function () {
						return this.manager.nodes.length.toString();
					}
				});
			}
			if (!_4._hasResource["dojo.dnd.Manager"]) {
				_4._hasResource["dojo.dnd.Manager"] = true;
				_4.provide("dojo.dnd.Manager");
				_4.declare("dojo.dnd.Manager", null, {
					constructor: function () {
						this.avatar = null;
						this.source = null;
						this.nodes = [];
						this.copy = true;
						this.target = null;
						this.canDropFlag = false;
						this.events = [];
					},
					OFFSET_X: 16,
					OFFSET_Y: 16,
					overSource: function (_333) {
						if (this.avatar) {
							this.target = (_333 && _333.targetState != "Disabled") ? _333 : null;
							this.canDropFlag = Boolean(this.target);
							this.avatar.update();
						}
						_4.publish("/dnd/source/over", [_333]);
					},
					outSource: function (_334) {
						if (this.avatar) {
							if (this.target == _334) {
								this.target = null;
								this.canDropFlag = false;
								this.avatar.update();
								_4.publish("/dnd/source/over", [null]);
							}
						} else {
							_4.publish("/dnd/source/over", [null]);
						}
					},
					startDrag: function (_335, _336, copy) {
						this.source = _335;
						this.nodes = _336;
						this.copy = Boolean(copy);
						this.avatar = this.makeAvatar();
						_4.body().appendChild(this.avatar.node);
						_4.publish("/dnd/start", [_335, _336, this.copy]);
						this.events = [_4.connect(_4.doc, "onmousemove", this, "onMouseMove"), _4.connect(_4.doc, "onmouseup", this, "onMouseUp"), _4.connect(_4.doc, "onkeydown", this, "onKeyDown"), _4.connect(_4.doc, "onkeyup", this, "onKeyUp"), _4.connect(_4.doc, "ondragstart", _4.stopEvent), _4.connect(_4.body(), "onselectstart", _4.stopEvent)];
						var c = "dojoDnd" + (copy ? "Copy" : "Move");
						_4.addClass(_4.body(), c);
					},
					canDrop: function (flag) {
						var _337 = Boolean(this.target && flag);
						if (this.canDropFlag != _337) {
							this.canDropFlag = _337;
							this.avatar.update();
						}
					},
					stopDrag: function () {
						_4.removeClass(_4.body(), ["dojoDndCopy", "dojoDndMove"]);
						_4.forEach(this.events, _4.disconnect);
						this.events = [];
						this.avatar.destroy();
						this.avatar = null;
						this.source = this.target = null;
						this.nodes = [];
					},
					makeAvatar: function () {
						return new _4.dnd.Avatar(this);
					},
					updateAvatar: function () {
						this.avatar.update();
					},
					onMouseMove: function (e) {
						var a = this.avatar;
						if (a) {
							_4.dnd.autoScrollNodes(e);
							var s = a.node.style;
							s.left = (e.pageX + this.OFFSET_X) + "px";
							s.top = (e.pageY + this.OFFSET_Y) + "px";
							var copy = Boolean(this.source.copyState(_4.isCopyKey(e)));
							if (this.copy != copy) {
								this._setCopyStatus(copy);
							}
						}
					},
					onMouseUp: function (e) {
						if (this.avatar) {
							if (this.target && this.canDropFlag) {
								var copy = Boolean(this.source.copyState(_4.isCopyKey(e))),
										_338 = [this.source, this.nodes, copy, this.target, e];
								_4.publish("/dnd/drop/before", _338);
								_4.publish("/dnd/drop", _338);
							} else {
								_4.publish("/dnd/cancel");
							}
							this.stopDrag();
						}
					},
					onKeyDown: function (e) {
						if (this.avatar) {
							switch (e.keyCode) {
								case _4.keys.CTRL:
									var copy = Boolean(this.source.copyState(true));
									if (this.copy != copy) {
										this._setCopyStatus(copy);
									}
									break;
								case _4.keys.ESCAPE:
									_4.publish("/dnd/cancel");
									this.stopDrag();
									break;
							}
						}
					},
					onKeyUp: function (e) {
						if (this.avatar && e.keyCode == _4.keys.CTRL) {
							var copy = Boolean(this.source.copyState(false));
							if (this.copy != copy) {
								this._setCopyStatus(copy);
							}
						}
					},
					_setCopyStatus: function (copy) {
						this.copy = copy;
						this.source._markDndStatus(this.copy);
						this.updateAvatar();
						_4.replaceClass(_4.body(), "dojoDnd" + (this.copy ? "Copy" : "Move"), "dojoDnd" + (this.copy ? "Move" : "Copy"));
					}
				});
				_4.dnd._manager = null;
				_4.dnd.manager = function () {
					if (!_4.dnd._manager) {
						_4.dnd._manager = new _4.dnd.Manager();
					}
					return _4.dnd._manager;
				};
			}
			if (!_4._hasResource["dojo.dnd.Source"]) {
				_4._hasResource["dojo.dnd.Source"] = true;
				_4.provide("dojo.dnd.Source");
				_4.declare("dojo.dnd.Source", _4.dnd.Selector, {
					isSource: true,
					horizontal: false,
					copyOnly: false,
					selfCopy: false,
					selfAccept: true,
					skipForm: false,
					withHandles: false,
					autoSync: false,
					delay: 0,
					accept: ["text"],
					generateText: true,
					constructor: function (node, _339) {
						_4.mixin(this, _4.mixin({}, _339));
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
							_4.addClass(this.node, "dojoDndSource");
						}
						this.targetState = "";
						if (this.accept) {
							_4.addClass(this.node, "dojoDndTarget");
						}
						if (this.horizontal) {
							_4.addClass(this.node, "dojoDndHorizontal");
						}
						this.topics = [_4.subscribe("/dnd/source/over", this, "onDndSourceOver"), _4.subscribe("/dnd/start", this, "onDndStart"), _4.subscribe("/dnd/drop", this, "onDndDrop"), _4.subscribe("/dnd/cancel", this, "onDndCancel")];
					},
					checkAcceptance: function (_33a, _33b) {
						if (this == _33a) {
							return !this.copyOnly || this.selfAccept;
						}
						for (var i = 0; i < _33b.length; ++i) {
							var type = _33a.getItem(_33b[i].id).type;
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
					},
					copyState: function (_33c, self) {
						if (_33c) {
							return true;
						}
						if (arguments.length < 2) {
							self = this == _4.dnd.manager().target;
						}
						if (self) {
							if (this.copyOnly) {
								return this.selfCopy;
							}
						} else {
							return this.copyOnly;
						}
						return false;
					},
					destroy: function () {
						_4.dnd.Source.superclass.destroy.call(this);
						_4.forEach(this.topics, _4.unsubscribe);
						this.targetAnchor = null;
					},
					markupFactory: function (_33d, node) {
						_33d._skipStartup = true;
						return new _4.dnd.Source(node, _33d);
					},
					onMouseMove: function (e) {
						if (this.isDragging && this.targetState == "Disabled") {
							return;
						}
						_4.dnd.Source.superclass.onMouseMove.call(this, e);
						var m = _4.dnd.manager();
						if (!this.isDragging) {
							if (this.mouseDown && this.isSource && (Math.abs(e.pageX - this._lastX) > this.delay || Math.abs(e.pageY - this._lastY) > this.delay)) {
								var _33e = this.getSelectedNodes();
								if (_33e.length) {
									m.startDrag(this, _33e, this.copyState(_4.isCopyKey(e), true));
								}
							}
						}
						if (this.isDragging) {
							var _33f = false;
							if (this.current) {
								if (!this.targetBox || this.targetAnchor != this.current) {
									this.targetBox = _4.position(this.current, true);
								}
								if (this.horizontal) {
									_33f = (e.pageX - this.targetBox.x) < (this.targetBox.w / 2);
								} else {
									_33f = (e.pageY - this.targetBox.y) < (this.targetBox.h / 2);
								}
							}
							if (this.current != this.targetAnchor || _33f != this.before) {
								this._markTargetAnchor(_33f);
								m.canDrop(!this.current || m.source != this || !(this.current.id in this.selection));
							}
						}
					},
					onMouseDown: function (e) {
						if (!this.mouseDown && this._legalMouseDown(e) && (!this.skipForm || !_4.dnd.isFormElement(e))) {
							this.mouseDown = true;
							this._lastX = e.pageX;
							this._lastY = e.pageY;
							_4.dnd.Source.superclass.onMouseDown.call(this, e);
						}
					},
					onMouseUp: function (e) {
						if (this.mouseDown) {
							this.mouseDown = false;
							_4.dnd.Source.superclass.onMouseUp.call(this, e);
						}
					},
					onDndSourceOver: function (_340) {
						if (this != _340) {
							this.mouseDown = false;
							if (this.targetAnchor) {
								this._unmarkTargetAnchor();
							}
						} else {
							if (this.isDragging) {
								var m = _4.dnd.manager();
								m.canDrop(this.targetState != "Disabled" && (!this.current || m.source != this || !(this.current.id in this.selection)));
							}
						}
					},
					onDndStart: function (_341, _342, copy) {
						if (this.autoSync) {
							this.sync();
						}
						if (this.isSource) {
							this._changeState("Source", this == _341 ? (copy ? "Copied" : "Moved") : "");
						}
						var _343 = this.accept && this.checkAcceptance(_341, _342);
						this._changeState("Target", _343 ? "" : "Disabled");
						if (this == _341) {
							_4.dnd.manager().overSource(this);
						}
						this.isDragging = true;
					},
					onDndDrop: function (_344, _345, copy, _346) {
						if (this == _346) {
							this.onDrop(_344, _345, copy);
						}
						this.onDndCancel();
					},
					onDndCancel: function () {
						if (this.targetAnchor) {
							this._unmarkTargetAnchor();
							this.targetAnchor = null;
						}
						this.before = true;
						this.isDragging = false;
						this.mouseDown = false;
						this._changeState("Source", "");
						this._changeState("Target", "");
					},
					onDrop: function (_347, _348, copy) {
						if (this != _347) {
							this.onDropExternal(_347, _348, copy);
						} else {
							this.onDropInternal(_348, copy);
						}
					},
					onDropExternal: function (_349, _34a, copy) {
						var _34b = this._normalizedCreator;
						if (this.creator) {
							this._normalizedCreator = function (node, hint) {
								return _34b.call(this, _349.getItem(node.id).data, hint);
							};
						} else {
							if (copy) {
								this._normalizedCreator = function (node, hint) {
									var t = _349.getItem(node.id);
									var n = node.cloneNode(true);
									n.id = _4.dnd.getUniqueId();
									return {
										node: n,
										data: t.data,
										type: t.type
									};
								};
							} else {
								this._normalizedCreator = function (node, hint) {
									var t = _349.getItem(node.id);
									_349.delItem(node.id);
									return {
										node: node,
										data: t.data,
										type: t.type
									};
								};
							}
						}
						this.selectNone();
						if (!copy && !this.creator) {
							_349.selectNone();
						}
						this.insertNodes(true, _34a, this.before, this.current);
						if (!copy && this.creator) {
							_349.deleteSelectedNodes();
						}
						this._normalizedCreator = _34b;
					},
					onDropInternal: function (_34c, copy) {
						var _34d = this._normalizedCreator;
						if (this.current && this.current.id in this.selection) {
							return;
						}
						if (copy) {
							if (this.creator) {
								this._normalizedCreator = function (node, hint) {
									return _34d.call(this, this.getItem(node.id).data, hint);
								};
							} else {
								this._normalizedCreator = function (node, hint) {
									var t = this.getItem(node.id);
									var n = node.cloneNode(true);
									n.id = _4.dnd.getUniqueId();
									return {
										node: n,
										data: t.data,
										type: t.type
									};
								};
							}
						} else {
							if (!this.current) {
								return;
							}
							this._normalizedCreator = function (node, hint) {
								var t = this.getItem(node.id);
								return {
									node: node,
									data: t.data,
									type: t.type
								};
							};
						}
						this._removeSelection();
						this.insertNodes(true, _34c, this.before, this.current);
						this._normalizedCreator = _34d;
					},
					onDraggingOver: function () {
					},
					onDraggingOut: function () {
					},
					onOverEvent: function () {
						_4.dnd.Source.superclass.onOverEvent.call(this);
						_4.dnd.manager().overSource(this);
						if (this.isDragging && this.targetState != "Disabled") {
							this.onDraggingOver();
						}
					},
					onOutEvent: function () {
						_4.dnd.Source.superclass.onOutEvent.call(this);
						_4.dnd.manager().outSource(this);
						if (this.isDragging && this.targetState != "Disabled") {
							this.onDraggingOut();
						}
					},
					_markTargetAnchor: function (_34e) {
						if (this.current == this.targetAnchor && this.before == _34e) {
							return;
						}
						if (this.targetAnchor) {
							this._removeItemClass(this.targetAnchor, this.before ? "Before" : "After");
						}
						this.targetAnchor = this.current;
						this.targetBox = null;
						this.before = _34e;
						if (this.targetAnchor) {
							this._addItemClass(this.targetAnchor, this.before ? "Before" : "After");
						}
					},
					_unmarkTargetAnchor: function () {
						if (!this.targetAnchor) {
							return;
						}
						this._removeItemClass(this.targetAnchor, this.before ? "Before" : "After");
						this.targetAnchor = null;
						this.targetBox = null;
						this.before = true;
					},
					_markDndStatus: function (copy) {
						this._changeState("Source", copy ? "Copied" : "Moved");
					},
					_legalMouseDown: function (e) {
						if (!_4.mouseButtons.isLeft(e)) {
							return false;
						}
						if (!this.withHandles) {
							return true;
						}
						for (var node = e.target; node && node !== this.node; node = node.parentNode) {
							if (_4.hasClass(node, "dojoDndHandle")) {
								return true;
							}
							if (_4.hasClass(node, "dojoDndItem") || _4.hasClass(node, "dojoDndIgnore")) {
								break;
							}
						}
						return false;
					}
				});
				_4.declare("dojo.dnd.Target", _4.dnd.Source, {
					constructor: function (node, _34f) {
						this.isSource = false;
						_4.removeClass(this.node, "dojoDndSource");
					},
					markupFactory: function (_350, node) {
						_350._skipStartup = true;
						return new _4.dnd.Target(node, _350);
					}
				});
				_4.declare("dojo.dnd.AutoSource", _4.dnd.Source, {
					constructor: function (node, _351) {
						this.autoSync = true;
					},
					markupFactory: function (_352, node) {
						_352._skipStartup = true;
						return new _4.dnd.AutoSource(node, _352);
					}
				});
			}
			if (!_4._hasResource["dojox.fx._base"]) {
				_4._hasResource["dojox.fx._base"] = true;
				_4.provide("dojox.fx._base");
				_4.mixin(_6.fx, {
					anim: _4.anim,
					animateProperty: _4.animateProperty,
					fadeTo: _4._fade,
					fadeIn: _4.fadeIn,
					fadeOut: _4.fadeOut,
					combine: _4.fx.combine,
					chain: _4.fx.chain,
					slideTo: _4.fx.slideTo,
					wipeIn: _4.fx.wipeIn,
					wipeOut: _4.fx.wipeOut
				});
				_6.fx.sizeTo = function (args) {
					var node = args.node = _4.byId(args.node),
							abs = "absolute";
					var _353 = args.method || "chain";
					if (!args.duration) {
						args.duration = 500;
					}
					if (_353 == "chain") {
						args.duration = Math.floor(args.duration / 2);
					}
					var top, _354, left, _355, _356, _357 = null;
					var init = (function (n) {
						return function () {
							var cs = _4.getComputedStyle(n),
									pos = cs.position,
									w = cs.width,
									h = cs.height;
							top = (pos == abs ? n.offsetTop : parseInt(cs.top) || 0);
							left = (pos == abs ? n.offsetLeft : parseInt(cs.left) || 0);
							_356 = (w == "auto" ? 0 : parseInt(w));
							_357 = (h == "auto" ? 0 : parseInt(h));
							_355 = left - Math.floor((args.width - _356) / 2);
							_354 = top - Math.floor((args.height - _357) / 2);
							if (pos != abs && pos != "relative") {
								var ret = _4.coords(n, true);
								top = ret.y;
								left = ret.x;
								n.style.position = abs;
								n.style.top = top + "px";
								n.style.left = left + "px";
							}
						};
					})(node);
					var _358 = _4.animateProperty(_4.mixin({
						properties: {
							height: function () {
								init();
								return {
									end: args.height || 0,
									start: _357
								};
							},
							top: function () {
								return {
									start: top,
									end: _354
								};
							}
						}
					}, args));
					var _359 = _4.animateProperty(_4.mixin({
						properties: {
							width: function () {
								return {
									start: _356,
									end: args.width || 0
								};
							},
							left: function () {
								return {
									start: left,
									end: _355
								};
							}
						}
					}, args));
					var anim = _4.fx[(args.method == "combine" ? "combine" : "chain")]([_358, _359]);
					return anim;
				};
				_6.fx.slideBy = function (args) {
					var node = args.node = _4.byId(args.node),
							top, left;
					var init = (function (n) {
						return function () {
							var cs = _4.getComputedStyle(n);
							var pos = cs.position;
							top = (pos == "absolute" ? n.offsetTop : parseInt(cs.top) || 0);
							left = (pos == "absolute" ? n.offsetLeft : parseInt(cs.left) || 0);
							if (pos != "absolute" && pos != "relative") {
								var ret = _4.coords(n, true);
								top = ret.y;
								left = ret.x;
								n.style.position = "absolute";
								n.style.top = top + "px";
								n.style.left = left + "px";
							}
						};
					})(node);
					init();
					var _35a = _4.animateProperty(_4.mixin({
						properties: {
							top: top + (args.top || 0),
							left: left + (args.left || 0)
						}
					}, args));
					_4.connect(_35a, "beforeBegin", _35a, init);
					return _35a;
				};
				_6.fx.crossFade = function (args) {
					var _35b = args.nodes[0] = _4.byId(args.nodes[0]),
							op1 = _4.style(_35b, "opacity"),
							_35c = args.nodes[1] = _4.byId(args.nodes[1]),
							op2 = _4.style(_35c, "opacity");
					var _35d = _4.fx.combine([_4[(op1 == 0 ? "fadeIn" : "fadeOut")](_4.mixin({
						node: _35b
					}, args)), _4[(op1 == 0 ? "fadeOut" : "fadeIn")](_4.mixin({
						node: _35c
					}, args))]);
					return _35d;
				};
				_6.fx.highlight = function (args) {
					var node = args.node = _4.byId(args.node);
					args.duration = args.duration || 400;
					var _35e = args.color || "#ffff99",
							_35f = _4.style(node, "backgroundColor");
					if (_35f == "rgba(0, 0, 0, 0)") {
						_35f = "transparent";
					}
					var anim = _4.animateProperty(_4.mixin({
						properties: {
							backgroundColor: {
								start: _35e,
								end: _35f
							}
						}
					}, args));
					if (_35f == "transparent") {
						_4.connect(anim, "onEnd", anim, function () {
							node.style.backgroundColor = _35f;
						});
					}
					return anim;
				};
				_6.fx.wipeTo = function (args) {
					args.node = _4.byId(args.node);
					var node = args.node,
							s = node.style;
					var dir = (args.width ? "width" : "height"),
							_360 = args[dir],
							_361 = {};
					_361[dir] = {
						start: function () {
							s.overflow = "hidden";
							if (s.visibility == "hidden" || s.display == "none") {
								s[dir] = "1px";
								s.display = "";
								s.visibility = "";
								return 1;
							} else {
								var now = _4.style(node, dir);
								return Math.max(now, 1);
							}
						},
						end: _360
					};
					var anim = _4.animateProperty(_4.mixin({
						properties: _361
					}, args));
					return anim;
				};
			}
			if (!_4._hasResource["dojox.fx"]) {
				_4._hasResource["dojox.fx"] = true;
				_4.provide("dojox.fx");
			}
			if (!_4._hasResource["pundit.TripleComposer"]) {
				_4._hasResource["pundit.TripleComposer"] = true;
				_4.provide("pundit.TripleComposer");
				_4.declare("pundit.TripleComposer", pundit.BaseComponent, {
					tripleDnD: {},
					constructor: function (_362) {
						var self = this,
								pu = "<div id=\"pundit-tc-container\" class=\"pundit-tab pundit-selected\">";
						pu += "    <div class=\"pundit-tab-header\">";
						pu += "      <span class=\"pundit-gui-button\" id=\"pundit-tc-save-button\"><span class=\"pundit-bicon pundit-save-icon\"></span><span>Save</span></span>";
						pu += "      <span class=\"pundit-gui-button\" id=\"pundit-tc-add-triple-button\"><span class=\"pundit-bicon pundit-add-triple-icon\"></span>Add a new triple</span>";
						pu += "    </div>";
						pu += "    <div id=\"pundit-tc-labels-container\" class=\"pundit-stop-wheel-propagation\">";
						pu += "        <div style=\"position:absolute;margin-left:6px\">Subject</div>";
						pu += "        <div style=\"position:absolute;margin-left:142px\">Predicate</div>";
						pu += "        <div style=\"position:absolute;margin-left:280px\">Object</div>";
						pu += "    </div>";
						pu += "    <div id=\"pundit-tc-triples-container\" class=\"pundit-tab-content pundit-stop-wheel-propagation\">";
						pu += "    </div>";
						pu += "  </div>";
						_4.query("#pundit-gui-right").append(pu);
						self.saver = new pundit.AnnotationWriter();
						self.subjSuggestionPanel = new pundit.ResourcesPanel({
							name: "subj-suggestions",
							searchType: "filter"
						});
						self.subjSuggestionPanel.onItemAdded(function (item) {
							self.addItem(item);
							self.subjSuggestionPanel.hide();
						});
						self.objSuggestionPanel = new pundit.ResourcesPanel({
							name: "obj-suggestions",
							searchType: "filter",
							namedEntitiesSources: _PUNDIT.config.activeEntitySources
						});
						self.objSuggestionPanel.onItemAdded(function (item) {
							self.addItem(item);
							self.objSuggestionPanel.hide();
						});
						self.propSuggestionPanel = new pundit.ResourcesPanel({
							name: "pred-suggestions",
							searchType: "filter"
						});
						self.propSuggestionPanel.onItemAdded(function (item) {
							self.addItem(item);
							self.propSuggestionPanel.hide();
						});
						semlibWindow.onWindowResize(function (_363) {
							self.checkNeedToHideResourcePanel(_363);
						});
						semlibWindow.onWindowClose(function () {
							self.subjSuggestionPanel.hide();
							self.propSuggestionPanel.hide();
							self.objSuggestionPanel.hide();
						});
						self.initDnD();
						self.initBehaviors();
						self.createCallback(["save"]);
						self.log("Pundit up and running!");
					},
					initBehaviors: function () {
						var self = this;
						self.saver.onError(function (m) {
							self.log("ERROR!!! Saver answered with " + m);
							_4.query("#pundit-tc-container").removeClass("pundit-panel-loading");
						});
						self.saver.onSave(function (m) {
							self.log("Saver answered with " + m);
							self.saveItems(m);
						});
						self.saver.onSaveItems(function (_364) {
							self.clearDnDTriples();
							_4.query("#pundit-tc-container").removeClass("pundit-panel-loading");
							self.fireOnSave();
						});
						_4.connect(_4.byId("pundit-tc-save-button"), "onclick", function () {
							_4.query("#pundit-tc-container").addClass("pundit-panel-loading");
							self.saveTriples();
						});
						_4.connect(_4.byId("pundit-tc-add-triple-button"), "onclick", function () {
							self.subjSuggestionPanel.hide();
							self.objSuggestionPanel.hide();
							self.propSuggestionPanel.hide();
							self.addDnDTriple();
						});
						_4.subscribe("/dnd/start", null, function (s, _365) {
							self.highlightDnDTargetsReceivingNodes(s, _365);
						});
						_4.subscribe("/dnd/cancel", null, function () {
							_4.query(".pundit-tc-dnd-container ul").removeClass("dnd_selected");
						});
						_4.subscribe("/dnd/drop", function (_366, _367, copy, _368) {
							_4.query(".pundit-tc-dnd-container ul").removeClass("dnd_selected");
							self.resetSelections();
							if (_368.node.id.substring(0, 10) === "pundit-tc-") {
								var item, _369, uri;
								if (typeof (_366.semlibTree) !== "undefined") {
									for (var i = _367.length - 1; i >= 0; i--) {
										_369 = _366.getItem(_367[i].id);
										item = {
											description: _369.data.item.description[0],
											label: _369.data.item.label[0],
											rdftype: _369.data.item.rdftype,
											type: _369.data.item.type,
											value: _369.data.item.value[0]
										};
										if (typeof (_369.data.item.image) !== "undefined") {
											item.image = _369.data.item.image[0];
										}
										uri = item.value;
										item.rdfData = semlibMyItems.createBucketForVocabItem(item).bucket;
										if (!semlibMyItems.uriInItems(uri)) {
											semlibMyItems.addItem(item, true);
										}
										setTimeout("dojo.behavior.apply();", 50);
										return;
									}
								}
								for (var i = _367.length - 1; i >= 0; i--) {
									var id = _4.attr(_367[i], "id");
									item = _366.map[id];
									if (typeof item !== "undefined") {
										uri = item.data.value;
										if (!semlibMyItems.uriInItems(uri)) {
											semlibMyItems.addItem(item.data, true);
										}
									}
								}
							}
							setTimeout("dojo.behavior.apply();", 50);
						});
						_4.behavior.add({
							"#pundit-tc-triples-container li.dojoDndItem span.pundit-icon-context-button": {
								"onclick": function (e) {
									cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, _4.query(e.target).parent()[0].id, "pundititem");
									_4.stopEvent(e);
								}
							},
							"#pundit-tc-triples-container li.dojoDndItem": {
								"onmouseover": function (e) {
									var id = (_4.hasClass(e.target, "pundit-icon-context-button")) ? _4.query(e.target).parent()[0].id : e.target.id,
											item;
									item = self.getItemFromId(id);
									if (typeof (item) !== "undefined") {
										previewer.show(item.data.value);
									}
								},
								"onclick": function (e) {
									_4.stopEvent(e);
								}
							}
						});
						cMenu.addAction({
							type: ["pundititem"],
							name: "removePunditItem",
							label: "Remove this item",
							showIf: function (id) {
								return true;
							},
							onclick: function (id) {
								_4.destroy(id);
								for (var i in self.tripleDnD) {
									["s", "p", "o"].forEach(function (_36a) {
										var _36b = self.tripleDnD[i][_36a].getItem(id);
										if (typeof (_36b) !== "undefined") {
											self.tripleDnD[i][_36a].delItem(id);
											self.tripleDnD[i][_36a].sync();
										}
									});
								}
								return true;
							}
						});
					},
					initDnD: function () {
						var self = this;
						self.addDnDTriple();
					},
					getItemFromId: function (id) {
						var self = this,
								bits = ["s", "p", "o"],
								ret;
						for (var i in self.tripleDnD) {
							for (var j = bits.length; j--;) {
								if (ret = self.tripleDnD[i][bits[j]].getItem(id)) {
									return ret;
								}
							}
						}
						return undefined;
					},
					addDnDTriple: function (_36c) {
						var self = this,
								c = "",
								u = "";
						for (var i = 5; i--;) {
							u += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(0 | Math.random() * 36);
						}
						c += "<div class=\"pundit-tc-dnd-container expanded\" id=\"pundit-tc-dnd-container" + u + "\">";
						c += "  <ul class=\"pundit-tc-dnd sub pundit-items pundit-small-items\" id=\"pundit-tc-s-" + u + "\"></ul>";
						c += "  <ul class=\"pundit-tc-dnd pre pundit-items pundit-small-items\" id=\"pundit-tc-p-" + u + "\"></ul>";
						c += "  <ul class=\"pundit-tc-dnd obj pundit-items pundit-small-items\" id=\"pundit-tc-o-" + u + "\"></ul>";
						c += "  <div class=\"pundit-tc-dndButtons\">";
						c += "    <span id=\"punditRemoveTriple" + u + "\"><span class=\"pundit-remove-icon pundit-icon\"></span></span>";
						c += "  </div>";
						c += "</div>";
						_4.query("#pundit-tc-triples-container .pundit-tc-dnd-container").removeClass("expanded").addClass("collapsed");
						if (!_36c) {
							_4.query("#pundit-tc-triples-container").prepend(c);
						} else {
							_4.query("#pundit-tc-triples-container").append(c);
						}
						self.tripleDnD[u] = {};
						self.tripleDnD[u]["s"] = new _4.dnd.Source("pundit-tc-s-" + u, {
							creator: semlibItems.itemNodeCreator,
							checkAcceptance: function (s, n) {
								return self.checkAcceptance(s, n, this);
							},
							onDndDrop: function (s, n, c, t) {
								if (this == t) {
									if (this.getAllNodes().length > 0) {
										this.clearItems();
										_4.empty(_4.byId("pundit-tc-s-" + u));
									}
									this.onDrop(s, n, c);
									self.subjSuggestionPanel.hide();
									self.propSuggestionPanel.hide();
									self.objSuggestionPanel.hide();
								}
								this.onDndCancel();
							},
							accept: ["subject"]
						});
						self.tripleDnD[u]["p"] = new _4.dnd.Source("pundit-tc-p-" + u, {
							creator: semlibItems.itemNodeCreator,
							checkAcceptance: function (s, n) {
								return self.checkAcceptance(s, n, this);
							},
							onDndDrop: function (s, n, c, t) {
								if (this == t) {
									if (this.getAllNodes().length > 0) {
										this.clearItems();
										_4.empty(_4.byId("pundit-tc-p-" + u));
									}
									this.onDrop(s, n, c);
									self.propSuggestionPanel.hide();
								}
								this.onDndCancel();
							},
							accept: ["predicate"]
						});
						self.tripleDnD[u]["o"] = new _4.dnd.Source("pundit-tc-o-" + u, {
							creator: semlibItems.itemNodeCreator,
							checkAcceptance: function (s, n) {
								return self.checkAcceptance(s, n, this);
							},
							onDndDrop: function (s, n, c, t) {
								if (this == t) {
									if (this.getAllNodes().length > 0) {
										this.clearItems();
										_4.empty(_4.byId("pundit-tc-o-" + u));
									}
									this.onDrop(s, n, c);
									self.subjSuggestionPanel.hide();
									self.propSuggestionPanel.hide();
									self.objSuggestionPanel.hide();
								}
								this.onDndCancel();
							},
							accept: ["subject", "object"]
						});
						_4.connect(_4.byId("punditRemoveTriple" + u), "onclick", function (e) {
							self.subjSuggestionPanel.hide();
							self.objSuggestionPanel.hide();
							self.propSuggestionPanel.hide();
							self.removeTripleRow(u);
							if (_4.query(".pundit-tc-dnd-container").length === 0) {
								self.addDnDTriple();
							}
						});
						_4.connect(_4.byId("pundit-tc-s-" + u), "onclick", function (e) {
							self.dndTargetsClickHandler(e, this, "s");
						});
						_4.connect(_4.byId("pundit-tc-p-" + u), "onclick", function (e) {
							self.dndTargetsClickHandler(e, this, "p");
						});
						_4.connect(_4.byId("pundit-tc-o-" + u), "onclick", function (e) {
							self.dndTargetsClickHandler(e, this, "o");
						});
						return u;
					},
					removeTripleRow: function (row) {
						var self = this;
						self.log("Removing triple row " + row);
						self.tripleDnD[row]["s"].destroy();
						self.tripleDnD[row]["p"].destroy();
						self.tripleDnD[row]["o"].destroy();
						_4.destroy("pundit-tc-dnd-container" + row);
						delete self.tripleDnD[row];
					},
					clearDnDTriples: function () {
						var self = this;
						for (var row in self.tripleDnD) {
							self.removeTripleRow(row);
						}
						self.subjSuggestionPanel.hide();
						self.propSuggestionPanel.hide();
						self.objSuggestionPanel.hide();
						self.objSuggestionPanel.reset();
						self.addDnDTriple();
					},
					dndTargetsClickHandler: function (e, _36d, type) {
						var self = this,
								u = _4.attr(_36d, "id").substr(-5),
								_36e = _4.position(_36d),
								y = _36e.y + _36e.h,
								x, _36f, _370;
						self.currentDnd = self.tripleDnD[u][type];
						if (type === "p") {
							x = (_36e.x + (_36e.w / 2)) - 200;
							_36f = "Relations";
							_370 = "center";
						} else {
							if (type === "s") {
								x = _36e.x;
								_36f = "Subjects";
								_370 = "left";
							} else {
								if (type === "o") {
									x = (_36e.x + _36e.w) - 400;
									_36f = "Objects";
									_370 = "right";
								}
							}
						}
						if (type === "p") {
							var _371 = [],
									_372 = [];
							if (typeof self.tripleDnD[u]["s"].map !== "undefined") {
								for (var i in self.tripleDnD[u]["s"].map) {
									_372 = self.tripleDnD[u]["s"].map[i].data.rdftype;
								}
							}
							if (typeof self.tripleDnD[u]["o"].map !== "undefined") {
								for (var i in self.tripleDnD[u]["o"].map) {
									_371 = self.tripleDnD[u]["o"].map[i].data.rdftype;
								}
							}
							var _373 = semlibItems.getProperties(_371, _372);
							var _374 = {
								properties: {
									label: "Relations",
									items: _373
								}
							};
							self.propSuggestionPanel.load(_374);
							self.propSuggestionPanel.show(x, y, {
								title: _36f,
								arrow: _370
							});
							self.subjSuggestionPanel.hide();
							self.objSuggestionPanel.hide();
						} else {
							if (type === "s") {
								var _375 = self.getAcceptedTypes(u, _36d);
								var _376 = semlibMyItems.getItemsFromTerm("", _375);
								var _377 = semlibItems.getItemsFromTerm("", _375);
								var _378 = {
									myitems: {
										label: "My Items",
										items: _376
									},
									pageitems: {
										label: "Page Items",
										items: _377
									}
								};
								for (var v in _PUNDIT["vocab"].vocabs) {
									var _379 = _PUNDIT["vocab"].getItemsForTermInVocab("", v, _375);
									_378[v] = {
										label: v,
										items: _379
									};
								}
								self.subjSuggestionPanel.load(_378);
								if (type === "o") {
									if (_375.length === 0) {
										self.subjSuggestionPanel.show(x, y, {
											title: _36f,
											arrow: _370,
											literalMode: "literalEnabled"
										});
									} else {
										if (_375[0] === ns.rdfs_literal) {
											self.subjSuggestionPanel.show(x, y, {
												title: _36f,
												arrow: _370,
												literalMode: "literalOnly"
											});
										} else {
											self.subjSuggestionPanel.show(x, y, {
												title: _36f,
												arrow: _370
											});
										}
									}
								} else {
									self.subjSuggestionPanel.show(x, y, {
										title: _36f,
										arrow: _370
									});
								}
								self.propSuggestionPanel.hide();
								self.objSuggestionPanel.hide();
							} else {
								if (type === "o") {
									var _375 = self.getAcceptedTypes(u, _36d);
									var _376 = semlibMyItems.getItemsFromTerm("", _375);
									var _377 = semlibItems.getItemsFromTerm("", _375);
									var _378 = {
										myitems: {
											label: "My Items",
											items: _376
										},
										pageitems: {
											label: "Page Items",
											items: _377
										}
									};
									for (var v in _PUNDIT["vocab"].vocabs) {
										var _379 = _PUNDIT["vocab"].getItemsForTermInVocab("", v, _375);
										_378[v] = {
											label: v,
											items: _379
										};
									}
									self.objSuggestionPanel.load(_378);
									if (type === "o") {
										if (_375.length === 0) {
											self.objSuggestionPanel.show(x, y, {
												title: _36f,
												arrow: _370,
												literalMode: "literalEnabled"
											});
										} else {
											if (_375[0] === ns.rdfs_literal) {
												var _37a = _4.query("#pundit-tc-p-" + u + " li span.pundit-item-label")[0].innerHTML.toLowerCase();
												self.objSuggestionPanel.show(x, y, {
													title: _36f,
													arrow: _370,
													literalMode: _37a.match(/date/) === null ? "literalOnly" : "dateOnly"
												});
											} else {
												self.objSuggestionPanel.show(x, y, {
													title: _36f,
													arrow: _370
												});
											}
										}
									} else {
										self.objSuggestionPanel.show(x, y, {
											title: _36f,
											arrow: _370
										});
									}
									self.propSuggestionPanel.hide();
									self.subjSuggestionPanel.hide();
								}
							}
						}
						_4.query(".pundit-tc-dnd-container ul").removeClass("dnd_selected");
						_4.query(e.target).addClass("dnd_selected");
					},
					highlightDnDTargetsReceivingNodes: function (_37b, _37c) {
						var self = this,
								bits = ["s", "p", "o"];
						_4.query(".pundit-tc-dnd-container ul").removeClass("dnd_selected");
						for (var row in self.tripleDnD) {
							for (var j = bits; j--;) {
								if (self.checkAcceptance(_37b, _37c, self.tripleDnD[row][bits[j]])) {
									_4.addClass("pundit-tc-" + bits[j] + "-" + row, "dnd_selected");
								}
							}
						}
					},
					addItem: function (item) {
						var self = this;
						var _37d = self.currentDnd.getAllNodes();
						if (_37d.length > 0) {
							self.currentDnd.clearItems();
							_37d.forEach(function (item) {
								_4.destroy(item);
							});
						}
						self.currentDnd.insertNodes(false, [item]);
					},
					checkAcceptance: function (_37e, _37f, _380, _381) {
						if (_380 === _37e) {
							return false;
						}
						if (typeof (_37e.semlibTree) !== "undefined") {
							for (i = _37f.length - 1; i >= 0; i--) {
								var id = _37f[i].id,
										item = _37e.getItem(id),
										flag = false;
								if (typeof (item.data.item.type) !== "undefined") {
									var type = item.data.item.type;
									for (j = type.length - 1; j >= 0; j--) {
										if (type[j] in _380.accept) {
											flag = true;
											break;
										}
									}
									if (flag === false) {
										return false;
									}
								} else {
									return false;
								}
							}
							var u = _380.parent.id.substr(-5),
									self = this,
									_382 = [],
									_383 = [];
							_380.forInItems(function (item) {
								_383.push(item.data.value);
							});
							for (var i = _37f.length - 1; i >= 0; i--) {
								_382[i] = _37e.getItem(_37f[i].id);
								if (_383.length > 0 && _4.indexOf(_383, _382[i].data.item.value) !== -1) {
									return false;
								}
							}
							return self.rowAcceptItems(u, _382, _380);
						}
						for (var i = _37f.length - 1; i >= 0; i--) {
							var type = _37e.getItem(_37f[i].id).type,
									uri = _37e.getItem(_37f[i].id).data.value,
									flag = false;
							for (var j = type.length - 1; j >= 0; j--) {
								if (type[j] in _380.accept) {
									flag = true;
									break;
								}
							}
							if (flag === false) {
								return false;
							}
						}
						var u = _380.parent.id.substr(-5),
								self = this,
								_382 = [],
								_383 = [];
						_380.forInItems(function (item) {
							_383.push(item.data.value);
						});
						for (var i = _37f.length - 1; i >= 0; i--) {
							_382[i] = _37e.getItem(_37f[i].id);
							if (_383.length > 0 && _4.indexOf(_383, _382[i].data.value) !== -1) {
								return false;
							}
						}
						return self.rowAcceptItems(u, _382, _380);
					},
					rowAcceptItems: function (row, item, _384) {
						var self = this,
								_385 = _384.parent.id.substr(10, 1);
						var _386 = item.slice(0);
						if (typeof (_386[0].data.type) === "undefined") {
							for (var j = _386.length; j--;) {
								_386[j].data = _386[j].data.item;
							}
						}
						if (_385 === "s") {
							var _387, _388 = [];
							self.tripleDnD[row]["p"].forInItems(function (item) {
								if (item.data.domain.length > 0) {
									_388.push(item.data.domain);
								}
							});
							_387 = self._intersection(_388);
							if (_387.length === 0) {
								if (_388.length !== 0) {
									self.log("Error in the predicate? No possible domains found!");
									return false;
								}
								return true;
							} else {
								var _389 = [];
								for (var i = _386.length - 1; i >= 0; i--) {
									_389.push(_386[i].data.rdftype);
								}
								_389 = self._intersection(_389);
								if (self._intersection([_389, _387]).length === 0) {
									return false;
								} else {
									return true;
								}
							}
						} else {
							if (_385 === "o") {
								var _38a, _38b = [];
								self.tripleDnD[row]["p"].forInItems(function (item) {
									if (item.data.range.length > 0) {
										_38b.push(item.data.range);
									}
								});
								_38a = self._intersection(_38b);
								if (_38a.length === 0) {
									if (_38b.length !== 0) {
										self.log("Error in the predicate? No possible ranges found!");
										return false;
									}
									return true;
								} else {
									var _389 = [];
									for (var i = _386.length - 1; i >= 0; i--) {
										_389.push(_386[i].data.rdftype);
									}
									_389 = self._intersection(_389);
									if (self._intersection([_389, _38a]).length === 0) {
										return false;
									} else {
										return true;
									}
								}
							} else {
								if (_385 === "p") {
									var _38c = [],
											suL, _38d = 0,
											_38e = [],
											obL, _38f = 0,
											_390 = false;
									self.tripleDnD[row]["s"].forInItems(function (item) {
										_38d++;
										if (item.data.rdftype.length > 0) {
											_38c.push(item.data.rdftype);
										}
									});
									self.tripleDnD[row]["o"].forInItems(function (item) {
										_38f++;
										if (item.data.rdftype.length === 0) {
											_390 = true;
										}
										if (item.data.rdftype.length > 0) {
											_38e.push(item.data.rdftype);
										}
									});
									obL = _38e.length;
									suL = _38c.length;
									_38c = self._intersection(_38c);
									_38e = self._intersection(_38e);
									if (obL + suL > 0) {
										if (_38c.length === 0 && suL > 0) {
											self.log("Subjects types intersection is empty!! Error in the subject panel.");
											return;
										}
										if (_38e.length === 0 && obL > 0) {
											self.log("Objects type intersection is empty!! Error in the object panel.");
											return;
										}
										var _387 = [],
												_38a = [];
										for (var i = _386.length - 1; i >= 0; i--) {
											if (_386[i].data.domain.length > 0) {
												_387.push(_386[i].data.domain);
											}
											if (_386[i].data.range.length > 0) {
												_38a.push(_386[i].data.range);
											}
										}
										_387 = self._intersection(_387);
										_38a = self._intersection(_38a);
										if (suL > 0 && _387.length > 0 && self._intersection([_387, _38c]).length === 0) {
											return false;
										}
										if (obL > 0 && _38a.length > 0 && self._intersection([_38a, _38e]).length === 0) {
											return false;
										}
										if (_390 === true && _38a.length > 0) {
											return false;
										}
										self.log("Items passed matches domains '" + _387.join(", ") + "' and ranges '" + _38a.join(", ") + "'");
										return true;
									} else {
										var _38a = [];
										for (var i = _386.length - 1; i >= 0; i--) {
											if (_386[i].data.range.length > 0) {
												_38a.push(_386[i].data.range);
											}
										}
										_38a = self._intersection(_38a);
										if (_38f + _38d === 0) {
											self.log("Items passing test: no items in subject nor object containers!");
											return true;
										}
										if (_38a.length === 0 && _38e.length === 0) {
											self.log("Items passing test: empty ranges .. Found a literal?");
											return true;
										}
									}
								}
							}
						}
						return false;
					},
					_intersection: function (a) {
						if (a.length === 0) {
							return [];
						}
						if (a.length === 1) {
							return a[0];
						}
						var ret = [],
								val, foo;
						for (var i = a[0].length - 1; i >= 0; i--) {
							val = a[0][i];
							foo = true;
							for (var j = a.length - 1; j > 0; j--) {
								if (_4.indexOf(a[j], val) === -1) {
									foo = false;
								}
							}
							if (foo) {
								ret.push(val);
							}
						}
						return ret;
					},
					getAcceptedTypes: function (row, _391) {
						var self = this,
								_392 = [],
								_393, _394 = [],
								_395 = _391.id.substr(10, 1);
						if (_395 === "s") {
							return [ns.fragments.text, ns.fragments.image, ns.image, ns.page];
						}
						if (_395 === "p") {
						}
						if (_395 === "o") {
							var _396, _397 = [];
							self.tripleDnD[row]["p"].forInItems(function (item) {
								if (item.data.range.length > 0) {
									_397.push(item.data.range);
								}
							});
							return self._intersection(_397);
						}
					},
					resetSelections: function () {
						var self = this;
						for (var i in self.tripleDnD) {
							self.tripleDnD[i]["s"].selectNone();
							self.tripleDnD[i]["p"].selectNone();
							self.tripleDnD[i]["o"].selectNone();
						}
					},
					saveTriples: function () {
						var self = this,
								_398 = [],
								_399 = window.location.href,
								b = new pundit.TriplesBucket();
						if (_399.indexOf("#xpointer(") !== -1) {
							_399 = _399.split("#")[0];
						}
						for (var row in self.tripleDnD) {
							var s = [],
									p = [],
									o = [];
							self.tripleDnD[row]["s"].forInItems(function (item) {
								s.push(item);
							});
							self.tripleDnD[row]["p"].forInItems(function (item) {
								p.push(item);
							});
							self.tripleDnD[row]["o"].forInItems(function (item) {
								o.push(item);
							});
							if ((typeof (s) === "undefined") || (typeof (p) === "undefined") || (typeof (o) === "undefined")) {
								break;
							}
							for (var i = s.length; i--;) {
								for (var j = p.length; j--;) {
									for (var k = o.length; k--;) {
										var _39a, sd = s[i].data,
												sv = sd.value,
												pd = p[j].data,
												pv = pd.value,
												od = o[k].data,
												ov = od.value;
										if (o[k].data.type[0] === "object" && (o[k].data.rdftype.length === 0 || o[k].data.rdftype[0] === ns.rdfs_literal)) {
											_39a = "literal";
										} else {
											_39a = "uri";
										}
										b.addTriple(sv, pv, ov, _39a);
										if (sv.indexOf("#xpointer(") !== -1 && _4.indexOf(_398, sv) === -1) {
											_398.push(sv);
										}
										if (ov.indexOf("#xpointer(") !== -1 && _4.indexOf(_398, ov) === -1) {
											_398.push(ov);
										}
										if (_PUNDIT.config.isModuleActive("pundit.ImageFragmentHandler")) {
											var _39b = semlibImageFragmentHandler.getParentImageXpointer(sv);
											if (typeof (_39b) !== "undefined") {
												_398.push(_39b);
											}
											var _39c = semlibImageFragmentHandler.getParentImageXpointer(ov);
											if (typeof (_39c) !== "undefined") {
												_398.push(_39c);
											}
										}
										if (_4.indexOf(sd.rdftype, ns.fragments.image) !== -1) {
											_398.push(sv);
										}
										if (_4.indexOf(od.rdftype, ns.fragments.image) !== -1) {
											_398.push(ov);
										}
										if (_4.indexOf(sd.rdftype, ns.page) !== -1) {
											_398.push(sv);
										}
										if (_4.indexOf(od.rdftype, ns.page) !== -1) {
											_398.push(ov);
										}
									}
								}
							}
							self.log("Added TripleComposer row " + row + " to save bucket");
						}
						self.log("Saving current: " + _4.toJson(b.getTalisJson()));
						if (!b.isEmpty()) {
							self.saver.writeAnnotationContent(b, _398, _399);
						} else {
							_4.query("#pundit-tc-container").removeClass("pundit-panel-loading");
						}
					},
					saveItems: function (_39d) {
						var self = this,
								b = new pundit.TriplesBucket(),
								_39e = [];
						for (var row in self.tripleDnD) {
							var s = [],
									p = [],
									o = [];
							self.tripleDnD[row]["s"].forInItems(function (item) {
								s.push(item);
							});
							self.tripleDnD[row]["p"].forInItems(function (item) {
								p.push(item);
							});
							self.tripleDnD[row]["o"].forInItems(function (item) {
								o.push(item);
							});
							if (s.length === 0 || p.length === 0 || o.length === 0) {
								self.log("No items to save in row " + row + ": skipping it.");
								break;
							}
							_39e = _39e.concat(s).concat(p).concat(o);
						}
						for (var i = _39e.length; i--;) {
							b.concatBucket(_39e[i].data.rdfData);
						}
						if (!b.isEmpty()) {
							self.log("Posting " + _39e.length + " items with " + b.bucket.length + " triples..");
							self.saver.writeAnnotationItems(_39d, _4.toJson(b.getTalisJson()));
						} else {
							self.log("saveItems with an empty bucket??!");
						}
					},
					itemExists: function (_39f) {
						var _3a0 = false;
						self.itemsDnD.forInItems(function (item) {
							if (item.data.value == _39f.value) {
								_3a0 = true;
								return;
							}
						});
						return _3a0;
					},
					tripleExists: function (_3a1) {
						var _3a2 = false,
								keys = [];
						for (var i in self.tripleDnD) {
							keys.push(i);
						}
						for (var j = keys.length; j--;) {
							if (typeof (self.tripleDnD) !== "undefined" && (keys.length > 0)) {
								if ((typeof (self.tripleDnD[keys[j]]["s"]) !== "undefined") && (typeof (self.tripleDnD[keys[j]]["p"]) !== "undefined") && (typeof (self.tripleDnD[keys[j]]["o"]) !== "undefined")) {
									if ((self.itemInDnDContainer(self.tripleDnD[keys[j]]["s"], _3a1["s"])) && (self.itemInDnDContainer(self.tripleDnD[keys[j]]["p"], _3a1["p"])) && (self.itemInDnDContainer(self.tripleDnD[keys[j]]["o"], _3a1["o"]))) {
										_3a2 = true;
										return _3a2;
									}
								}
							}
						}
						return _3a2;
					},
					itemInDnDContainer: function (_3a3, item) {
						var _3a4 = false,
								_3a5 = item;
						_3a3.forInItems(function (_3a6) {
							for (var i in _3a5) {
								if (_3a6.data.value == _3a5[i].value) {
									_3a4 = true;
								}
							}
						});
						return _3a4;
					},
					addItemToSubject: function (_3a7) {
						var self = this,
								_3a8 = _4.query(".pundit-tc-dnd-container :first")[0],
								_3a9 = _4.attr(_3a8, "id"),
								item = {
									data: _3a7
								}, id = _3a9.substring(12);
						var _3aa = self.tripleDnD[id].s.getAllNodes();
						if (_3aa.length > 0) {
							self.tripleDnD[id].s.clearItems();
							_3aa.forEach(function (item) {
								_4.destroy(item);
							});
						}
						if (self.tripleDnD[id].s.getAllNodes().length === 0) {
							if (self.rowAcceptItems(id, [item], self.tripleDnD[id].s)) {
								self.tripleDnD[id].s.insertNodes(false, [_3a7]);
								_4.behavior.apply();
							}
						}
					},
					addItemToObject: function (_3ab) {
						var self = this,
								_3ac = _4.query(".pundit-tc-dnd-container :first")[0],
								_3ad = _4.attr(_3ac, "id"),
								item = {
									data: _3ab
								}, id = _3ad.substring(12);
						if (self.tripleDnD[id].o.getAllNodes().length === 0) {
							if (self.rowAcceptItems(id, [item], self.tripleDnD[id].o)) {
								self.tripleDnD[id].o.insertNodes(false, [_3ab]);
								_4.behavior.apply();
							}
						}
					},
					checkNeedToHideResourcePanel: function (_3ae) {
						var self = this;
						if (self.subjSuggestionPanel.isVisible()) {
							if (self.subjSuggestionPanel.getPosition().y > _3ae + 15) {
								self.subjSuggestionPanel.hide();
							}
						}
						if (self.propSuggestionPanel.isVisible()) {
							if (self.propSuggestionPanel.getPosition().y > _3ae + 15) {
								self.propSuggestionPanel.hide();
							}
						}
						if (self.objSuggestionPanel.isVisible()) {
							if (self.objSuggestionPanel.getPosition().y > _3ae + 15) {
								self.objSuggestionPanel.hide();
							}
						}
					}
				});
			}
			if (!_4._hasResource["pundit.AnnotationReader"]) {
				_4._hasResource["pundit.AnnotationReader"] = true;
				_4.provide("pundit.AnnotationReader");
				_4.declare("pundit.AnnotationReader", pundit.BaseComponent, {
					constructor: function (_3af) {
						this.createCallback(["notebookAnn", "error", "annotationMetadata", "annotationContent", "annotationItems", "storageGet", "storageError", "jsonpVocabLoaded", "notebookChecked"]);
					},
					getCurrentNotebookId: function (cb) {
						var self = this;
						var args = {
							url: ns.annotationServerApiCurrentNotebook,
							handleAs: "json",
							headers: {
								"Accept": "application/json"
							},
							load: function (r) {
								if (typeof (cb) === "function") {
									cb(r.NotebookID);
								}
							},
							error: function (_3b0) {
								self.log("ERROR: while getting current notebook ID");
								self.fireOnError("DOH");
							}
						}, _3b1 = requester.xGet(args);
					},
					getOwnedNotebooks: function (cb) {
						var self = this;
						var args = {
							url: ns.annotationServerApiOwnedNotebooks,
							handleAs: "json",
							headers: {
								"Accept": "application/json"
							},
							load: function (r) {
								if (typeof (cb) === "function") {
									cb(r.NotebookIDs);
								}
							},
							error: function (_3b2) {
								self.log("ERROR: while getting current notebook ID");
								self.fireOnError("DOH");
							}
						}, _3b3 = requester.xGet(args);
					},
					getActiveNotebooks: function (cb) {
						var self = this;
						var args = {
							url: ns.annotationServerNotebooksActive,
							handleAs: "json",
							headers: {
								"Accept": "application/json"
							},
							load: function (r) {
								if (typeof (cb) === "function") {
									cb(r.NotebookIDs);
								}
							},
							error: function (_3b4) {
								self.log("ERROR: while getting current notebook ID");
								self.fireOnError("DOH");
							}
						}, _3b5 = requester.xGet(args);
					},
					getNotebookMetadata: function (_3b6, cb) {
						var self = this;
						var args = {
							url: ns.annotationServerApiNotebooks + _3b6 + "/metadata",
							handleAs: "json",
							headers: {
								"Accept": "application/json"
							},
							load: function (r) {
								if (typeof (cb) === "function") {
									cb(_3b6, r);
								}
							},
							error: function (_3b7) {
								self.log("ERROR: while getting current notebook ID");
								self.fireOnError("DOH");
							}
						}, _3b8 = requester.xGet(args);
					},
					getUserMetadata: function (id, cb) {
						var self = this;
						var args = {
							url: ns.annotationServerApiUsers + id,
							handleAs: "json",
							headers: {
								"Accept": "application/json"
							},
							load: function (r) {
								if (typeof (cb) === "function") {
									cb(id, r);
								}
							},
							error: function (_3b9) {
								self.log("ERROR: while getting users data");
								self.fireOnError("DOH");
							}
						}, _3ba = requester.xGet(args);
					},
					getNotebookGraph: function (_3bb) {
						var self = this,
								args = {
									url: ns.annotationServerApiNotebooks + _3bb + "/graph",
									headers: {
										"Accept": "application/json"
									},
									handleAs: "json",
									load: function (r) {
										self.fireOnNotebookAnn(r);
									},
									error: function (_3bc) {
										self.fireOnError("DOH");
									}
								}, _3bd = requester.xGet(args);
					},
					getCurrentNotebookGraph: function () {
						this.getCurrentNotebookId(this.getNotebookGraph);
					},
					getAnnotationMetadataFromUri: function (uris) {
						var self = this,
								_3be = {}, _3bf = _PUNDIT.loadingBox.addJob("Reading annotation metadata");
						if (typeof (uris) !== "object") {
							uris = [uris];
						}
						_3be.resources = uris;
						myPundit.getAnnotationVisibility(function (mode) {
							var args = {
								url: ns.annotationServerMetadataSearch + "?scope=" + mode + "&query=" + encodeURIComponent(_4.toJson(_3be)),
								handleAs: "json",
								failOk: true,
								headers: {
									"Accept": "application/json"
								},
								load: function (g) {
									self.fireOnAnnotationMetadata(g);
									_PUNDIT.loadingBox.setJobOk(_3bf);
								},
								error: function (_3c0) {
									self.log("ERROR! getAnnotationMetadataFromUri FAILED");
									self.fireOnError(_3c0);
									_PUNDIT.loadingBox.setJobKo(_3bf);
									return false;
								}
							}, _3c1 = requester.xGet(args);
						});
					},
					getAnnotationContentFromId: function (id) {
						var self = this,
								args = {
									url: ns.annotationServerApiAnnotations + id + "/graph",
									failOk: true,
									handleAs: "json",
									headers: {
										"Accept": "application/json"
									},
									load: function (g) {
										self.log("getAnnotationContentFromId loaded content for annotation " + id);
										self.fireOnAnnotationContent(g, id);
									},
									error: function (_3c2) {
										self.log("ERROR! getAnnotationContentFromId FAILED");
										self.fireOnError(_3c2);
										return false;
									}
								}, _3c3 = requester.xGet(args);
					},
					getAnnotationItemsFromId: function (id, xp) {
						var self = this,
								args = {
									url: ns.annotationServerApiAnnotations + id + "/items",
									handleAs: "json",
									failOk: true,
									headers: {
										"Accept": "application/json"
									},
									load: function (g) {
										self.log("getAnnotationItemsFromId loaded items for annotation " + id);
										self.fireOnAnnotationItems(g, id, xp);
									},
									error: function (_3c4) {
										self.log("ERROR! getAnnotationItemsFromId FAILED");
										self.fireOnError(_3c4);
										return false;
									}
								}, _3c5 = requester.xGet(args);
					},
					getVocabularyFromJsonp: function (_3c6, f) {
						var self = this,
								_3c7 = _PUNDIT.loadingBox.addJob("Reading remote vocabulary " + _3c6.substr(_3c6.lastIndexOf("/") + 1, _3c6.length));
						_4.io.script.get({
							url: _3c6,
							load: function (r) {
								self.log("Loaded a vocabulary from " + _3c6);
								_PUNDIT.loadingBox.setJobOk(_3c7);
								self.fireOnJsonpVocabLoaded(_3c6);
							},
							error: function (_3c8, _3c9) {
								self.log("getVocabularyFromJsonp had an error. " + _3c7);
								_PUNDIT.loadingBox.setJobKo(_3c7);
								self.fireOnJsonpVocabLoaded(_3c6);
							}
						});
					},
					getDataFromStorage: function (key) {
						var self = this,
								args = {
									url: ns.annotationServerStorage + key,
									headers: {
										"Accept": "application/json"
									},
									failOk: true,
									handleAs: "json",
									load: function (r) {
										if (r) {
											self.fireOnStorageGet(r);
										} else {
											self.fireOnStorageGet([]);
											self.log("Empty response for getDataFromStorage for key " + key);
										}
									},
									error: function (_3ca, req) {
										if (req.xhr.status === 204) {
											self.log("204 Empty store from remote, firing ok anyway");
											self.fireOnStorageGet([]);
											return false;
										}
										self.log("Error getting response for getDataFromStorage for key " + key);
										self.fireOnStorageError(_3ca);
									}
								};
						var _3cb = requester.xGet(args);
					},
					checkNotebook: function (id, cb) {
						var self = this,
								args = {
									url: ns.annotationServerNotebooksActive + "/" + id,
									handleAs: "json",
									failOk: true,
									headers: {
										"Accept": "application/json"
									},
									load: function (g) {
										self.log("Notebook " + id + " checked for active state");
										self.fireOnNotebookChecked(id, g.NotebookActive);
										if (typeof (cb) === "function") {
											cb(id, g.NotebookActive);
										}
									},
									error: function (_3cc) {
										self.log("ERROR! checkNotebook FAILED");
										self.fireOnError(_3cc);
										return false;
									}
								}, _3cd = requester.xGet(args);
					}
				});
			}
			if (!_4._hasResource["pundit.AnnotationWriter"]) {
				_4._hasResource["pundit.AnnotationWriter"] = true;
				_4.provide("pundit.AnnotationWriter");
				_4.declare("pundit.AnnotationWriter", pundit.BaseComponent, {
					constructor: function (_3ce) {
						this.createCallback(["save", "saveItems", "error", "saveStorage", "storageError", "setNotebookActive"]);
					},
					writeAnnotationContent: function (_3cf, _3d0, _3d1) {
						var self = this,
								_3d2 = new pundit.AnnotationReader({
									debug: self.opts.debug
								}),
								_3d3 = _PUNDIT.loadingBox.addJob("Creating a new annotation"),
								_3d4 = encodeURIComponent(_4.toJson({
									targets: _3d0,
									pageContext: _3d1
								})),
								_3d5 = _4.toJson(_3cf.getTalisJson());
						_3d2.getCurrentNotebookId(function (_3d6) {
							var post = {
								url: ns.annotationServerApiNotebooksGraph + _3d6 + "?context=" + _3d4,
								postData: _3d5,
								headers: {
									"Content-Type": "application/json;charset=UTF-8;"
								},
								handleAs: "json",
								load: function (data) {
									self.log("Saved content to notebook " + _3d6 + ", annotation id " + data.AnnotationID);
									_PUNDIT.loadingBox.setJobOk(_3d3);
									self.fireOnSave(data.AnnotationID);
								},
								error: function (_3d7) {
									alert("Error saving content to notebook");
									_PUNDIT.loadingBox.setJobKo(_3d3);
									self.fireOnError("DOH");
								}
							};
							//Felix. Nach dem Build eingefügt.Geht leider nicht.
							// alert(this.toString+'IBR versucht Tripel an Sesame zu schreien.');
							//IO.writeXML("http://t.spatialhumanities.de/openrdf-sesame/repositories/ibr/statements",_3d5);//alternative _3d5
							requester.xPost(post);

						});
					},
					deleteAnnotation: function (id, cb) {
						var self = this,
								args = {
									url: ns.annotationServerApiAnnotations + id,
									handleAs: "json",
									headers: {
										"Accept": "application/json"
									},
									load: function (data) {
										if (typeof (cb) === "function") {
											cb(data);
										}
									},
									error: function (_3d8) {
										self.fireOnError("DOH");
									}
								};
						requester.xDelete(args);
					},
					writeAnnotationItems: function (_3d9, _3da) {
						var self = this,
								_3db = _PUNDIT.loadingBox.addJob("Saving annotation " + _3d9),
								args = {
									url: ns.annotationServerApiAnnotations + _3d9 + "/items",
									postData: _3da,
									headers: {
										"Content-Type": "application/json;charset=UTF-8;"
									},
									handleAs: "json",
									load: function (data) {
										_PUNDIT.loadingBox.setJobOk(_3db);
										self.log("writeAnnotationItems completed for " + _3d9);
										self.fireOnSaveItems(_3d9);
									},
									error: function (_3dc) {
										_PUNDIT.loadingBox.setJobKo(_3db);
										self.log("writeAnnotationItems got an error for " + _3d9);
										console.log("TODO: writeAnnotationItems ERROR");
										self.fireOnError("DOH");
									}
								};
						requester.xPost(args);
					},
					postRemoteStorage: function (key, _3dd) {
						var args = {
							url: ns.annotationServerStorage + key,
							postData: _3dd,
							headers: {
								"Content-Type": "application/json;charset=UTF-8;"
							},
							handleAs: "text",
							load: function (data) {
							},
							error: function (_3de) {
								console.log("TODO: ERROR saving remote storage");
								self.fireOnStorageError("DOH");
							}
						};
						requester.xPost(args);
					},
					setNotebookActive: function (_3df, flag, cb) {
						var self = this;
						var args = {
							url: ns.annotationServerNotebooksActive + "/" + _3df,
							handleAs: "text",
							load: function (data) {
								self.log("Notebook set active state completed for " + _3df);
								self.fireOnSetNotebookActive(_3df, flag);
								if (typeof (cb) === "function") {
									cb(_3df, flag);
								}
							},
							error: function (_3e0) {
								if (flag == 1) {
									console.log("TODO: ERROR activating notebook " + _3df);
								} else {
									if (flag == 0) {
										console.log("TODO: ERROR deactivating notebook " + _3df);
									}
								}
								self.fireOnError("DOH");
							}
						};
						if (flag == 1) {
							requester.xPut(args);
						} else {
							if (flag == 0) {
								requester.xDelete(args);
							}
						}
					},
					setNotebookCurrent: function (_3e1, cb) {
						var self = this;
						var args = {
							url: ns.annotationServerApiNotebooks + "current/" + _3e1,
							handleAs: "text",
							load: function (data) {
								self.log("Notebook set current: " + _3e1);
								if (typeof (cb) === "function") {
									cb(_3e1);
								}
							},
							error: function (_3e2) {
								console.log("TODO: ERROR setting notebook current: " + _3e1);
								self.fireOnError("DOH");
							}
						};
						requester.xPut(args);
					},
					setNotebookVisibility: function (_3e3, _3e4, cb) {
						var self = this;
						var args = {
							url: ns.annotationServerApiNotebooks + _3e4 + "/" + _3e3,
							handleAs: "text",
							load: function (data) {
								self.log("Notebook set current: " + _3e3);
								if (typeof (cb) === "function") {
									cb(_3e3, _3e4);
								}
							},
							error: function (_3e5) {
								console.log("TODO: ERROR setting notebook current: " + _3e3);
								self.fireOnError("DOH");
							}
						};
						requester.xPut(args);
					},
					createNotebook: function (_3e6, cb) {
						var self = this;
						var args = {
							url: ns.annotationServerApiNotebooks,
							postData: _4.toJson({
								NotebookName: _3e6
							}),
							headers: {
								"Content-Type": "application/json;charset=UTF-8;"
							},
							handleAs: "json",
							load: function (data) {
								self.log("Notebook created: " + data.NotebookID);
								if (typeof (cb) === "function") {
									cb(data.NotebookID);
								}
							},
							error: function (_3e7) {
								console.log("TODO: ERROR creating notebook: " + _3e6);
								self.fireOnError("DOH");
							}
						};
						requester.xPost(args);
					},
					uploadImage: function (form, cb) {
						var self = this;
						var args = {
							url: "http://192.168.65.101:8080/annotationserver/api/services/upload/image",
							form: form,
							handleAs: "json",
							load: function (data) {
								self.log("Notebook created: " + data.NotebookID);
								if (typeof (cb) === "function") {
									cb(data.NotebookID);
								}
							},
							error: function (_3e8) {
								console.log("TODO: ERROR creating uploading image: ");
								self.fireOnError("DOH");
							}
						};
						_4.io.iframe.send(args);
					}
				});
			}
			if (!_4._hasResource["dojo.NodeList-manipulate"]) {
				_4._hasResource["dojo.NodeList-manipulate"] = true;
				_4.provide("dojo.NodeList-manipulate");
				(function () {
					function _3e9(node) {
						var text = "",
								ch = node.childNodes;
						for (var i = 0, n; n = ch[i]; i++) {
							if (n.nodeType != 8) {
								if (n.nodeType == 1) {
									text += _3e9(n);
								} else {
									text += n.nodeValue;
								}
							}
						}
						return text;
					};

					function _3ea(node) {
						while (node.childNodes[0] && node.childNodes[0].nodeType == 1) {
							node = node.childNodes[0];
						}
						return node;
					};

					function _3eb(html, _3ec) {
						if (typeof html == "string") {
							html = _4._toDom(html, (_3ec && _3ec.ownerDocument));
							if (html.nodeType == 11) {
								html = html.childNodes[0];
							}
						} else {
							if (html.nodeType == 1 && html.parentNode) {
								html = html.cloneNode(false);
							}
						}
						return html;
					};
					_4.extend(_4.NodeList, {
						_placeMultiple: function (_3ed, _3ee) {
							var nl2 = typeof _3ed == "string" || _3ed.nodeType ? _4.query(_3ed) : _3ed;
							var _3ef = [];
							for (var i = 0; i < nl2.length; i++) {
								var _3f0 = nl2[i];
								var _3f1 = this.length;
								for (var j = _3f1 - 1, item; item = this[j]; j--) {
									if (i > 0) {
										item = this._cloneNode(item);
										_3ef.unshift(item);
									}
									if (j == _3f1 - 1) {
										_4.place(item, _3f0, _3ee);
									} else {
										_3f0.parentNode.insertBefore(item, _3f0);
									}
									_3f0 = item;
								}
							}
							if (_3ef.length) {
								_3ef.unshift(0);
								_3ef.unshift(this.length - 1);
								Array.prototype.splice.apply(this, _3ef);
							}
							return this;
						},
						innerHTML: function (_3f2) {
							if (arguments.length) {
								return this.addContent(_3f2, "only");
							} else {
								return this[0].innerHTML;
							}
						},
						text: function (_3f3) {
							if (arguments.length) {
								for (var i = 0, node; node = this[i]; i++) {
									if (node.nodeType == 1) {
										_4.empty(node);
										node.appendChild(node.ownerDocument.createTextNode(_3f3));
									}
								}
								return this;
							} else {
								var _3f4 = "";
								for (i = 0; node = this[i]; i++) {
									_3f4 += _3e9(node);
								}
								return _3f4;
							}
						},
						val: function (_3f5) {
							if (arguments.length) {
								var _3f6 = _4.isArray(_3f5);
								for (var _3f7 = 0, node; node = this[_3f7]; _3f7++) {
									var name = node.nodeName.toUpperCase();
									var type = node.type;
									var _3f8 = _3f6 ? _3f5[_3f7] : _3f5;
									if (name == "SELECT") {
										var opts = node.options;
										for (var i = 0; i < opts.length; i++) {
											var opt = opts[i];
											if (node.multiple) {
												opt.selected = (_4.indexOf(_3f5, opt.value) != -1);
											} else {
												opt.selected = (opt.value == _3f8);
											}
										}
									} else {
										if (type == "checkbox" || type == "radio") {
											node.checked = (node.value == _3f8);
										} else {
											node.value = _3f8;
										}
									}
								}
								return this;
							} else {
								node = this[0];
								if (!node || node.nodeType != 1) {
									return undefined;
								}
								_3f5 = node.value || "";
								if (node.nodeName.toUpperCase() == "SELECT" && node.multiple) {
									_3f5 = [];
									opts = node.options;
									for (i = 0; i < opts.length; i++) {
										opt = opts[i];
										if (opt.selected) {
											_3f5.push(opt.value);
										}
									}
									if (!_3f5.length) {
										_3f5 = null;
									}
								}
								return _3f5;
							}
						},
						append: function (_3f9) {
							return this.addContent(_3f9, "last");
						},
						appendTo: function (_3fa) {
							return this._placeMultiple(_3fa, "last");
						},
						prepend: function (_3fb) {
							return this.addContent(_3fb, "first");
						},
						prependTo: function (_3fc) {
							return this._placeMultiple(_3fc, "first");
						},
						after: function (_3fd) {
							return this.addContent(_3fd, "after");
						},
						insertAfter: function (_3fe) {
							return this._placeMultiple(_3fe, "after");
						},
						before: function (_3ff) {
							return this.addContent(_3ff, "before");
						},
						insertBefore: function (_400) {
							return this._placeMultiple(_400, "before");
						},
						remove: _4.NodeList.prototype.orphan,
						wrap: function (html) {
							if (this[0]) {
								html = _3eb(html, this[0]);
								for (var i = 0, node; node = this[i]; i++) {
									var _401 = this._cloneNode(html);
									if (node.parentNode) {
										node.parentNode.replaceChild(_401, node);
									}
									var _402 = _3ea(_401);
									_402.appendChild(node);
								}
							}
							return this;
						},
						wrapAll: function (html) {
							if (this[0]) {
								html = _3eb(html, this[0]);
								this[0].parentNode.replaceChild(html, this[0]);
								var _403 = _3ea(html);
								for (var i = 0, node; node = this[i]; i++) {
									_403.appendChild(node);
								}
							}
							return this;
						},
						wrapInner: function (html) {
							if (this[0]) {
								html = _3eb(html, this[0]);
								for (var i = 0; i < this.length; i++) {
									var _404 = this._cloneNode(html);
									this._wrap(_4._toArray(this[i].childNodes), null, this._NodeListCtor).wrapAll(_404);
								}
							}
							return this;
						},
						replaceWith: function (_405) {
							_405 = this._normalize(_405, this[0]);
							for (var i = 0, node; node = this[i]; i++) {
								this._place(_405, node, "before", i > 0);
								node.parentNode.removeChild(node);
							}
							return this;
						},
						replaceAll: function (_406) {
							var nl = _4.query(_406);
							var _407 = this._normalize(this, this[0]);
							for (var i = 0, node; node = nl[i]; i++) {
								this._place(_407, node, "before", i > 0);
								node.parentNode.removeChild(node);
							}
							return this;
						},
						clone: function () {
							var ary = [];
							for (var i = 0; i < this.length; i++) {
								ary.push(this._cloneNode(this[i]));
							}
							return this._wrap(ary, this, this._NodeListCtor);
						}
					});
					if (!_4.NodeList.prototype.html) {
						_4.NodeList.prototype.html = _4.NodeList.prototype.innerHTML;
					}
				})();
			}
			if (!_4._hasResource["pundit.TextFragmentHandler"]) {
				_4._hasResource["pundit.TextFragmentHandler"] = true;
				_4.provide("pundit.TextFragmentHandler");
				_4.declare("pundit.TextFragmentHandler", pundit.BaseComponent, {
					lastSelectedRange: document.createRange(),
					constructor: function (_408) {
						var self = this;
						self.helper = new pundit.XpointersHelper();
						self.initBehaviors();
						self.log("TextFragmentHandler up and running");
					},
					initBehaviors: function () {
						var self = this;
						_4.query("body").connect("onmousedown", function (e) {
							var _409, _40a = e.target;
							while (_40a.tagName.toLowerCase() !== "body") {
								if (_4.hasClass(_40a, "pundit-disable-annotation")) {
									_409 = false;
									break;
								}
								_40a = _4.query(_40a).parent()[0];
							}
							if (_409 === false) {
								self.selectable = false;
							} else {
								self.selectable = true;
							}
						});
						_4.query("body").connect("onmouseup", function (e) {
							if (!self.selectable) {
								_PUNDIT.cMenu.hide(e);
								return;
							}
							var _40b = true,
									_40c = e.target,
									_40d, xp;
							while (_40c.tagName.toLowerCase() !== "body") {
								if (_4.hasClass(_40c, "pundit-disable-annotation")) {
									_40b = false;
									break;
								}
								_40c = _4.query(_40c).parent()[0];
							}
							if (_40b === false) {
								_PUNDIT.cMenu.hide(e);
								return false;
							}
							_40d = self.getSelectedRange();
							if (_40d === null) {
								self.log("ERROR: trying to create a new item from with null range?");
								_PUNDIT.cMenu.hide(e);
								return false;
							}
							self.lastSelectedRange = _40d;
							xp = self.getCleanSelectedXpointer();
							if (xp === null) {
								self.log("ERROR: trying to create a new item with null xpointer?");
								_PUNDIT.cMenu.hide(e);
								return false;
							}
							var item = self.createItemFromRange(_40d);
							cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, item, "textSelectionHelper");
							return true;
						});
						cMenu.addAction({
							type: ["textSelectionHelper"],
							name: "AddTextFragmentToMyItems",
							label: "Add to My Items",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								tooltip_viewer.highlightByXpointer(item.value);
								if (!tooltip_viewer.isTempXpointer(item.value)) {
									tooltip_viewer.tempXpointers.push(item.value);
									tooltip_viewer.consolidate();
								}
								semlibMyItems.addItem(item, true);
								previewer.buildPreviewForItem(item);
								semlibMyItems.show_pundittabfiltermyitemsfragment();
								return true;
							}
						});
						cMenu.addAction({
							type: ["textSelectionHelper", "annotatedtextfragment", "bookmarkedtextfragment"],
							name: "AnnotateWithTripleComposer",
							label: "Annotate text fragment",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								tripleComposer.addItemToSubject(item);
								previewer.buildPreviewForItem(item);
								if (!_PUNDIT.GUI.isWindowOpen()) {
									_PUNDIT.GUI.toggleWindow();
								}
								return true;
							}
						});
					},
					getLastSelectedContent: function (_40e) {
						var self = this,
								_40f = self.helper.extractContentFromRange(self.lastSelectedRange);
						if (typeof (_40e) !== "undefined") {
							return _40f.substr(0, _40e);
						}
						return _40f;
					},
					createItemFromRange: function (_410) {
						var self = this,
								_411 = self.helper.extractContentFromRange(_410),
								_412 = _411.length > 50 ? _411.substr(0, 50) + " .." : _411,
								xp = self.range2xpointer(self.dirtyRange2cleanRange(_410)),
								_413 = window.location.href,
								item;
						if (_413.indexOf("#xpointer") !== -1) {
							_413 = _413.substring(0, _413.indexOf("#"));
						}
						item = {
							type: ["subject"],
							rdftype: [ns.fragments.text],
							label: _412,
							description: _411,
							value: xp,
							isPartOf: xp.split("#")[0],
							pageContext: _413
						};
						item.rdfData = semlibItems.createBucketForTextFragment(item).bucket;
						self.log("Created an item from range with label: " + _412);
						self.log("Clean xpointer is: " + xp);
						return item;
					},
					range2xpointer: function (_414) {
						var self = this,
								_415 = self.correctXPathFinalNumber(self.calculateCleanXPath(_414.startContainer), _414.cleanStartNumber),
								_416 = self.correctXPathFinalNumber(self.calculateCleanXPath(_414.endContainer), _414.cleanEndNumber),
								_417 = self.getContentURLFromXPath(_415),
								_418 = self.getXPointerString(_417, _415, _414.startOffset, _416, _414.endOffset);
						this.log("range2xpointer returning an xpointer: " + _418);
						return _418;
					},
					getXPointerString: function (_419, _41a, _41b, _41c, _41d) {
						return _419 + "#xpointer(start-point(string-range(" + _41a + ",''," + _41b + "))" + "/range-to(string-range(" + _41c + ",''," + _41d + ")))";
					},
					getContentURLFromXPath: function (_41e) {
						var self = this,
								_41f = window.location.href,
								_420 = _41e.indexOf("DIV[@about='"),
								_421 = "about";
						if (_420 === -1) {
							return (_41f.indexOf("#") !== -1) ? _41f.split("#")[0] : _41f;
						}
						if (_420 < 3) {
							var _422 = _420 + 7 + _421.length,
									pos = _41e.indexOf("_text']"),
									_423 = ((pos !== -1) ? _41e.indexOf("_text']") : _41e.indexOf("']")) - _422;
							return _41e.substr(_422, _423);
						}
						self.log("ERROR: getContentURLFromXPath returning something weird? xpath = " + _41e);
						return "";
					},
					getCleanSelectedXpointer: function () {
						var self = this;
						if (self.lastSelectedRange === null) {
							return null;
						}
						return self.range2xpointer(self.dirtyRange2cleanRange(self.lastSelectedRange));
					},
					getSelectedRange: function () {
						var self = this,
								_424;
						if (window.getSelection().rangeCount === 0) {
							self.log("getSelection().rangeCount is 0: no selected range.");
							return null;
						}
						_424 = window.getSelection().getRangeAt(0);
						if (_424 !== null && (_424.startContainer === _424.endContainer) && (_424.startOffset === _424.endOffset)) {
							self.log("Range is not null, but start/end containers and offsets match: no selected range.");
							return null;
						}
						self.log("GetSelectedRange is returning a range: " + _424.startContainer.nodeName + "[" + _424.startOffset + "] > " + _424.endContainer.nodeName + "[" + _424.endOffset + "]");
						return _424;
					},
					dirtyRange2cleanRange: function (_425) {
						var self = this,
								_426 = {};
						self.log("dirty2cleanRange DIRTY is: " + _425.startContainer.nodeName + "[" + _425.startOffset + "] > " + _425.endContainer.nodeName + "[" + _425.endOffset + "]");
						var foos = self.calculateCleanOffset(_425.startContainer, _425.startOffset),
								fooe = self.calculateCleanOffset(_425.endContainer, _425.endOffset);
						_426.startContainer = foos.cleanContainer;
						_426.startOffset = foos.cleanOffset;
						_426.endContainer = fooe.cleanContainer;
						_426.endOffset = fooe.cleanOffset;
						_426.cleanStartNumber = self.calculateCleanNodeNumber(_426.startContainer);
						_426.cleanEndNumber = self.calculateCleanNodeNumber(_426.endContainer);
						self.log("dirty2cleanRange CLEAN (invalid?) range: " + _426.startContainer.nodeName + "[" + _426.startOffset + "] > " + _426.endContainer.nodeName + "[" + _426.endOffset + "]");
						return _426;
					},
					correctXPathFinalNumber: function (_427, _428) {
						return _427.replace(/\[[0-9]+\]$/, "[" + _428 + "]");
					},
					calculateCleanNodeNumber: function (node) {
						var self = this,
								_429, _42a = self.getXPathNodeName(node),
								_42b = _4.query(node).parent()[0],
								_42c = (self.helper.isWrapNode(_42b)) ? _42b : node;
						if (self.helper.isTextNode(node)) {
							_429 = 1;
							while (current_node = _42c.previousSibling) {
								if ((self.helper.isTextNode(current_node) || self.helper.isWrappedTextNode(current_node) || self.helper.isUIButton(current_node)) && ((self.helper.isElementNode(_42c) && !self.helper.isUIButton(_42c) && !self.helper.isWrappedTextNode(_42c)) || self.helper.isWrappedElementNode(_42c))) {
									_429++;
								}
								_42c = current_node;
							}
						} else {
							_429 = 1;
							while (current_node = _42c.previousSibling) {
								if (self.getXPathNodeName(current_node) === _42a && !self.helper.isIgnoreNode(current_node)) {
									_429++;
								}
								_42c = current_node;
							}
						}
						return _429;
					},
					calculateCleanOffset: function (_42d, _42e) {
						var self = this,
								_42f = _4.query(_42d).parent()[0],
								node = _42d,
								_430 = _42e;
						if (self.helper.isElementNode(_42d) && !self.helper.isIgnoreNode(_42d)) {
							return {
								cleanContainer: node,
								cleanOffset: _430
							};
						}
						if (self.helper.isTextNode(_42d) && self.helper.isWrapNode(_42f)) {
							node = _42f;
						}
						while (currentNode = node.previousSibling) {
							if (!self.helper.isIgnoreNode(currentNode) && self.helper.isElementNode(currentNode) && !self.helper.isWrapNode(currentNode)) {
								if (self.helper.isTextNode(_42d) && self.helper.isWrapNode(_42f)) {
									return {
										cleanContainer: _42d,
										cleanOffset: _430
									};
								} else {
									return {
										cleanContainer: node,
										cleanOffset: _430
									};
								}
							}
							if (self.helper.isTextNode(currentNode)) {
								_430 += currentNode.length;
							} else {
								if (self.helper.isWrapNode(currentNode)) {
									_430 += currentNode.firstChild.length;
								}
							}
							node = currentNode;
						}
						if (self.helper.isTextNode(_42d) && self.helper.isWrapNode(_42f)) {
							return {
								cleanContainer: _42d,
								cleanOffset: _430
							};
						} else {
							return {
								cleanContainer: node,
								cleanOffset: _430
							};
						}
					},
					getXPathNodeName: function (node) {
						if (this.helper.isTextNode(node)) {
							return "text()";
						} else {
							return node.nodeName.toUpperCase();
						}
					},
					calculateCleanXPath: function (node, _431) {
						var _432 = _4.query(node).parent()[0];
						if (!node) {
							return _431;
						}
						var self = this,
								_433 = self.getXPathNodeName(node);
						if (self.helper.isContentNode(node)) {
							if (typeof (_431) !== "undefined") {
								return "//DIV[@about='" + _4.attr(node, "about") + "']/" + _431;
							} else {
								return "//DIV[@about='" + _4.attr(node, "about") + "']";
							}
						}
						if (_433 === "BODY" || _433 === "HTML") {
							if (typeof (_431) !== "undefined") {
								return "//BODY/" + _431;
							} else {
								return "//BODY";
							}
						}
						if (self.helper.isWrapNode(node)) {
							return self.calculateCleanXPath(node.parentNode, _431);
						}
						var num = 1,
								_434 = node;
						if (!self.helper.isTextNode(_434)) {
							while (sibling = _434.previousSibling) {
								if (self.getXPathNodeName(sibling) === _433 && !self.helper.isIgnoreNode(sibling)) {
									num++;
								}
								_434 = sibling;
							}
						}
						if (typeof (_431) !== "undefined") {
							_431 = _433 + "[" + num + "]/" + _431;
						} else {
							_431 = _433 + "[" + num + "]";
						}
						return self.calculateCleanXPath(_432, _431);
					},
					xpointer2Xpaths: function (_435) {
						var self = this,
								_436, ret = {}, foo, _437, _438;
						_436 = _435.split("#xpointer(start-point(string-range(")[1].split("))/range-to(string-range(");
						foo = _436[0].split(",'',");
						ret.startXpath = foo[0];
						ret.startOffset = foo[1];
						foo = _436[1].substr(0, _436[1].length - 3).split(",'',");
						ret.endXpath = foo[0];
						ret.endOffset = foo[1];
						_437 = self.getNodeFromXpath(ret.startXpath);
						_438 = self.getNodeFromXpath(ret.endXpath);
						ret.valid = !(_437 === null || _438 === null);
						if (ret.startXPath === ret.endXpath) {
							ret.valid &= (ret.startOffset < ret.endOffset);
						}
						return ret;
					},
					getURLFromXpointer: function (_439) {
						return _439.split("#xpointer(start-point(string-range(")[0];
					},
					getNodeFromXpath: function (_43a) {
						var self = this,
								_43b = document.evaluate(_43a, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
						return _43b.singleNodeValue;
					}
				});
			}
			if (!_4._hasResource["dojox.layout.DragPane"]) {
				_4._hasResource["dojox.layout.DragPane"] = true;
				_4.provide("dojox.layout.DragPane");
				_4.declare("dojox.layout.DragPane", _5._Widget, {
					invert: true,
					postCreate: function () {
						this.connect(this.domNode, "onmousedown", "_down");
						this.connect(this.domNode, "onmouseleave", "_up");
						this.connect(this.domNode, "onmouseup", "_up");
					},
					_down: function (e) {
						var t = this.domNode;
						e.preventDefault();
						_4.style(t, "cursor", "move");
						this._x = e.pageX;
						this._y = e.pageY;
						if ((this._x < t.offsetLeft + t.clientWidth) && (this._y < t.offsetTop + t.clientHeight)) {
							_4.setSelectable(t, false);
							this._mover = this.connect(t, "onmousemove", "_move");
						}
					},
					_up: function (e) {
						_4.setSelectable(this.domNode, true);
						_4.style(this.domNode, "cursor", "pointer");
						this._mover && this.disconnect(this._mover);
						delete this._mover;
					},
					_move: function (e) {
						var mod = this.invert ? 1 : -1;
						this.domNode.scrollTop += (this._y - e.pageY) * mod;
						this.domNode.scrollLeft += (this._x - e.pageX) * mod;
						this._x = e.pageX;
						this._y = e.pageY;
					}
				});
			}
			if (!_4._hasResource["dojox.fx._core"]) {
				_4._hasResource["dojox.fx._core"] = true;
				_4.provide("dojox.fx._core");
				_6.fx._Line = function (_43c, end) {
					this.start = _43c;
					this.end = end;
					var _43d = _4.isArray(_43c),
							d = (_43d ? [] : end - _43c);
					if (_43d) {
						_4.forEach(this.start, function (s, i) {
							d[i] = this.end[i] - s;
						}, this);
						this.getValue = function (n) {
							var res = [];
							_4.forEach(this.start, function (s, i) {
								res[i] = (d[i] * n) + s;
							}, this);
							return res;
						};
					} else {
						this.getValue = function (n) {
							return (d * n) + this.start;
						};
					}
				};
			}
			if (!_4._hasResource["dojox.fx.scroll"]) {
				_4._hasResource["dojox.fx.scroll"] = true;
				_4.provide("dojox.fx.scroll");
				_4.experimental("dojox.fx.scroll");
				_6.fx.smoothScroll = function (args) {
					if (!args.target) {
						args.target = _4.position(args.node);
					}
					var _43e = _4[(_4.isIE ? "isObject" : "isFunction")](args["win"].scrollTo),
							_43f = {
								x: args.target.x,
								y: args.target.y
							};
					if (!_43e) {
						var _440 = _4.position(args.win);
						_43f.x -= _440.x;
						_43f.y -= _440.y;
					}
					var _441 = (_43e) ? (function (val) {
						args.win.scrollTo(val[0], val[1]);
					}) : (function (val) {
						args.win.scrollLeft = val[0];
						args.win.scrollTop = val[1];
					});
					var anim = new _4.Animation(_4.mixin({
						beforeBegin: function () {
							if (this.curve) {
								delete this.curve;
							}
							var _442 = _43e ? _4._docScroll() : {
								x: args.win.scrollLeft,
								y: args.win.scrollTop
							};
							anim.curve = new _6.fx._Line([_442.x, _442.y], [_442.x + _43f.x, _442.y + _43f.y]);
						},
						onAnimate: _441
					}, args));
					return anim;
				};
			}
			if (!_4._hasResource["pundit.TooltipAnnotationViewer"]) {
				_4._hasResource["pundit.TooltipAnnotationViewer"] = true;
				_4.provide("pundit.TooltipAnnotationViewer");
				_4.declare("pundit.TooltipAnnotationViewer", pundit.BaseComponent, {
					opts: {
						hideMouseLeaveMS: 500,
						enableHighlightingMode: true,
						highlightingMode: false,
						showInvalidXPointers: false
					},
					constructor: function (_443) {
						var self = this;
						self.createCallback(["AnnotationIconMouseEnter", "AnnotationIconMouseLeave", "AnnotationIconMouseClick", "Consolidate", "NotebookActivationChanged"]);
						self.initBehaviors();
						self.hideTimer = [];
						self.highlightCount = [];
						self.helper = new pundit.XpointersHelper();
						self.reader = new pundit.AnnotationReader();
						self.writer = new pundit.AnnotationWriter();
						self.jobId = null;
						self.initReader();
						self.initWriter();
						self.contentURIs = self.helper.getContentURIs();
						self.initContextualMenu();
						self.refreshPageItems = false;
						tripleComposer.onSave(function () {
							self.refreshAnnotations();
						});
						self.isRefreshingAnnotations = true;
						self.wipe();
						_PUNDIT.init.onInitDone(function () {
							self.refreshAnnotations();
						});
						self.notebooks = {};
						self.log("TooltipAnnotationViewer Up and running");
					},
					initWriter: function () {
						var self = this;
						self.writer.onSetNotebookActive(function (id, flag) {
							semlibWindow.closeAllPanels();
							self.refreshAnnotations();
							self.fireOnNotebookActivationChanged();
						});
					},
					initReader: function () {
						var self = this;
						self.reader.onAnnotationMetadata(function (g) {
							if (!self.jobId) {
								if (self.refreshPageItems) {
									semlibItems.itemsDnD.forInItems(function (item) {
										if (item.data.rdftype[0] != ns.rdf_property) {
											semlibItems.removeItemFromUri(item.data.value);
										}
									});
									self.refreshPageItems = false;
								}
								self.jobId = _PUNDIT.loadingBox.addJob("Downloading annotation content");
								self.addAnnotations(g);
								for (var _444 in self.notebooks) {
									self.reader.checkNotebook(_444);
								}
								self.consolidate();
								_4.behavior.apply();
							} else {
								console.log("DEBUG: two refresh() Too fast?!?");
							}
						});
						self.reader.onAnnotationContent(function (g, id) {
							self.log("Annotation content for " + id + " received");
							self.addAnnotationContent(id, g);
							self.reader.getAnnotationItemsFromId(id);
						});
						self.reader.onAnnotationItems(function (g, id) {
							self.log("Annotation items for " + id + " received");
							self.addAnnotationItems(id, g);
							if (--self.annToDownload === 0) {
								self.consolidate();
								_PUNDIT.loadingBox.setJobOk(self.jobId);
								self.isRefreshingAnnotations = false;
								self.jobId = null;
							}
						});
						self.reader.onNotebookChecked(function (id, flag) {
							self.log("Notebook " + id + " cheked: active = " + flag);
							self.notebooks[id] = flag;
						});
						self.reader.onError(function (e) {
							console.log("TODO: Reader got an error, deal with it!", e);
							return false;
						});
					},
					showAllAnnotationsOnItem: function (xp) {
						var self = this;
						for (var i = self.xpointersAnnotationsId[xp].length - 1; i >= 0; i--) {
							self.log("RDF Icon click: Opening panel for annotation " + self.xpointersAnnotationsId[xp][i]);
							self.showAnnotationPanel(self.xpointersAnnotationsId[xp][i], xp);
						}
						var y = _4.position(_4.query("span." + self.xpointersClasses[xp])[0], true).y,
								_445 = _4.query("body")[0].scrollTop;
						if ((y - _445 < _4.position("pundit-gui", true).h) || (y - _445 > window.innerHeight)) {
							_6.fx.smoothScroll({
								node: _4.query("span." + self.xpointersClasses[xp])[0],
								offset: {
									y: _4.position("pundit-gui", true).h + 100
								},
								win: window,
								duration: 800
							}).play();
						}
						return true;
					},
					areAllAnnotationsOnItemOpened: function (xp) {
						var self = this;
						if (typeof (self.xpointersAnnotationsId[xp]) === "undefined") {
							return false;
						}
						return semlibWindow.getOpenedPanelsByXpointer(xp).length > 0;
					},
					initContextualMenu: function () {
						var self = this;
						cMenu.addAction({
							type: ["annotatedtextfragment"],
							name: "openAll",
							label: "Show all annotations on this item",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								var _446 = item.value;
								if (item.rdftype.indexOf(ns.fragments.image) !== -1) {
									_446 = item.parentItemXP;
								}
								semlibWindow.closePanelByXpointer(_446);
								self.showAllAnnotationsOnItem(_446);
								return true;
							}
						});
						cMenu.addAction({
							type: ["annotatedtextfragment"],
							name: "closeAll",
							label: "Close all annotations on this item",
							showIf: function (item) {
								return self.areAllAnnotationsOnItemOpened(item.value);
							},
							onclick: function (item) {
								semlibWindow.closePanelByXpointer(item.value);
								return true;
							}
						});
						cMenu.addAction({
							type: ["__all"],
							name: "zoomItem",
							label: "Zoom on this item",
							showIf: function (item) {
								if (typeof (item) === "undefined") {
									return false;
								}
								return self.xpointersClasses[item.value];
							},
							onclick: function (item) {
								self.zoomOnXpointer(item.value);
								return true;
							}
						});
						cMenu.addAction({
							type: ["bookmarkedtextfragment"],
							name: "removeSelection",
							label: "Remove from My Items",
							showIf: function (item) {
								if (typeof semlibMyItems.getItemFromUri(item.value) !== "undefined") {
									return true;
								} else {
									return false;
								}
							},
							onclick: function (item) {
								semlibMyItems.removeItemFromUri(item.value);
								self.removeTempXpointer(item.value);
								tooltip_viewer.consolidate();
								return true;
							}
						});
						cMenu.addAction({
							type: ["textfragment", "annotatedtextfragment"],
							name: "AddAnnotatedItemToMyItems",
							label: "Add to My Items",
							showIf: function (item) {
								return !semlibMyItems.uriInItems(item.value);
							},
							onclick: function (item) {
								tooltip_viewer.highlightByXpointer(item.value);
								var item = semlibItems.getItemFromUri(item.value);
								if (typeof item !== "undefined") {
									semlibMyItems.addItem(item, true);
									semlibMyItems.show_pundittabfiltermyitemsfragment();
								}
								return true;
							}
						});
						cMenu.addAction({
							type: ["annotatedtextfragment", ],
							name: "RemoveAnnotatedItemFromMyItems",
							label: "Remove from My Items",
							showIf: function (item) {
								return semlibMyItems.uriInItems(item.value);
							},
							onclick: function (item) {
								semlibMyItems.removeItemFromUri(item.value);
								tooltip_viewer.removeTempXpointer(item.value);
								tooltip_viewer.consolidate();
								return true;
							}
						});
						cMenu.addAction({
							type: ["punditThisPageMenu"],
							name: "TurnHighlightingOn",
							label: "Turn Highlighting On",
							showIf: function () {
								return self.opts.enableHighlightingMode && !self.opts.highlightingMode;
							},
							onclick: function () {
								self.opts.highlightingMode = true;
								tooltip_viewer.consolidate();
								return true;
							}
						});
						cMenu.addAction({
							type: ["punditThisPageMenu"],
							name: "TurnHighlightingOff",
							label: "Turn Highlighting Off",
							showIf: function () {
								return self.opts.enableHighlightingMode && self.opts.highlightingMode;
							},
							onclick: function () {
								self.opts.highlightingMode = false;
								tooltip_viewer.consolidate();
								return true;
							}
						});
						cMenu.onTypeShow_annotatedtextfragment(function (xp) {
							self.highlightByXpointer(xp);
						});
						cMenu.onTypeHide_annotatedtextfragment(function (xp) {
							self.removeHighlightByXpointer(xp);
						});
						cMenu.onTypeShow_bookmarkedtextfragment(function (xp) {
							self.highlightByXpointer(xp);
						});
						cMenu.onTypeHide_bookmarkedtextfragment(function (xp) {
							self.removeHighlightByXpointer(xp);
						});
					},
					getAnnotationFromAnnId: function (_447) {
						for (var xp in this.annotations) {
							if (this.annotations[xp].id === _447) {
								return this.annotations[xp];
							}
						}
					},
					showAllAnnotations: function () {
						var self = this;
						if (self.annIds === null || self.annIds === undefined) {
							self.log("ERROR: Annotaion panel not ready, not showing all annotations.");
							return;
						}
						for (var i = self.annIds.length; i--;) {
							var _448 = self.annIds[i];
							self.showAnnotationPanel(_448);
						}
					},
					removeTargetFromAnnotation: function (uri, _449) {
						var self = this,
								_44a;
						if ((_44a = self.annotations[_449].targets.indexOf(uri)) !== -1) {
							self.annotations[_449].targets.splice(_44a, 1);
						}
					},
					annotationHasTargets: function (_44b) {
						var self = this;
						return !(self.annotations[_44b].targets == 0);
					},
					isNotebookActive: function (_44c) {
						var self = this;
						return self.notebooks[_44c] == 1;
					},
					showAnnotationPanel: function (_44d, _44e) {
						var self = this,
								_44f = "dialog_" + _44d + "_content";
						if (_4.query("#" + _44f).length > 0) {
							self.log("Panel for annotation id " + _44d + " is already open!");
							return;
						}
						var ann = self.annotations[_44d],
								_450 = "",
								_451 = "",
								c = ann.content,
								m = ann.metadata,
								_452 = ann.items,
								_453 = m[ns.pundit_isIncludedIn][0].value,
								_454 = _453.split("/")[_453.split("/").length - 1],
								_455 = [],
								_456, _457 = m[ns.pundit_authorURI][0].value,
								_458 = m[ns.pundit_annotationDate][0].value;
						self.log("Showing annotation panel for " + _44d);
						if (_457 === myPundit.user.uri) {
							_451 += "<span class='pundit-gui-button delete' about='" + _44d + "'>Delete</span>";
						}
						if (_PUNDIT.config.modules["pundit.NotebookManager"].active === true && _PUNDIT.config.modules["pundit.NotebookManager"].activateFromAnnotations === true) {
							if (self.isNotebookActive(_454)) {
								_451 += "<span class='pundit-gui-button deactivate' about='" + _454 + "'>Deactivate</span>";
							} else {
								_451 += "<span class='pundit-gui-button activate' about='" + _454 + "'>Activate</span>";
							}
						}
						if (typeof (m[ns.pundit_authorName]) !== "undefined" && m[ns.pundit_authorName][0].value !== "") {
							_456 = m[ns.pundit_authorName][0].value;
						} else {
							_456 = "User: " + _457.substr(_457.lastIndexOf("/") + 1, _457.length);
						}
						_450 += "<div class='pundit-metadata'>";
						_450 += "<span class='author'><em>Created by</em> : " + _456 + "</span>";
						_450 += "<span class='date'><em>On</em> : " + _458.split("T")[0] + ", " + _458.split("T")[1] + "</span>";
						_450 += "<span class='author'><em>ID</em> : " + _44d + "</span>";
						_450 += "</div>";
						var _459 = [];
						for (var i = m[ns.pundit_hasTarget].length; i--;) {
							if (m[ns.pundit_hasTarget][i]["value"] !== window.location.href) {
								_459.push(m[ns.pundit_hasTarget][i]["value"]);
							}
						}
						self.log("Annotation with " + _459.length + " targets");
						for (i = _459.length; i--;) {
							var uri = _459[i];
							if ((typeof (self.xpointersClasses[uri]) === "undefined")) {
								self.log("ERROR: trying to show annotation panel for " + uri + " but its not consolidated on this page");
								self.removeTargetFromAnnotation(uri, _44d);
								if (!(self.annotationHasTargets(_44d))) {
									self.log("ERROR: none of the annotation target is present in the page (ann_id: " + _44d + ")");
									return;
								}
								continue;
							} else {
								var cl = self.xpointersClasses[uri].join("");
								_455.push(uri);
								if (typeof (self.xpointersColors[uri]) === "undefined") {
									self.xpointersColors[uri] = self.colors.pop() || self.fallbackColor;
									self.usedColors[self.xpointersColors[uri]] = 1;
									self.log("Assigned color to target: " + self.xpointersColors[uri]);
								} else {
									self.usedColors[self.xpointersColors[uri]] = self.usedColors[self.xpointersColors[uri]] + 1;
								}
								_4.query("span." + cl).addClass(self.xpointersColors[uri]);
							}
						}
						_450 += self.getStatementsHTML(c, _452);
						var _45a = (function (uris, id) {
							return function () {
								for (var i = uris.length; i--;) {
									var cl = self.xpointersClasses[uris[i]].join(""),
											_45b = self.xpointersColors[uris[i]];
									if (self.usedColors[_45b] === 1) {
										_4.query("span." + cl).removeClass(_45b);
										delete self.xpointersColors[uris[i]];
										if (_45b !== self.fallbackColor) {
											self.colors.push(_45b);
										}
									} else {
										self.usedColors[_45b] = self.usedColors[_45b] - 1;
									}
								}
								_4.destroy(id);
								delete semlibWindow.panels[id];
							};
						})(_455, _44f);
						semlibWindow.awAdd({
							id: _44f,
							content: _450,
							buttons: _451,
							xpointers: _455,
							positioningXpointer: _44e || _455[0],
							title: "By " + _456 + " on " + _458.split("T")[0],
							onClose: _45a
						});
						_4.behavior.apply();
						if (!semlibWindow.isAnnotationWindowOpen()) {
							semlibWindow.toggleAnnotationWindow();
						}
					},
					addHyperlinksToText: function (text) {
						var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
						return text.replace(exp, "<a target='_blank' href='$1'>$1</a>");
					},
					getStatementsHTML: function (c, _45c) {
						var self = this,
								_45d = "";
						for (var _45e in c) {
							_45d += "<div class=\"pundit-statement\"><div class=\"pundit-subject\">";
							_45d += self.getTriplePartHTML(c, _45c, _45e);
							self.log("Getting statement from annotation: subject :" + _45e.substr(0, 41) + "..");
							var _45f = self.getCommentsFromTriples(c, _45e);
							if (_45f.length != 0) {
								_45d += "<div class=\"pundit-predicate\">";
								_45d += "<span>Comments:</span>";
								_45d += "<div class=\"pundit-object\">";
								for (var j = _45f.length; j--;) {
									_45d += "<span>" + self.addHyperlinksToText(_45f[j]) + "</span>";
								}
								_45d += "</div></div>";
							}
							var tags = self.getTagsFromTriples(c, _45e);
							if (tags.length != 0) {
								_45d += "<div class=\"pundit-predicate\">";
								_45d += "<span>Tags:</span>";
								for (var j = tags.length; j--;) {
									_45d += "<div class=\"pundit-object\">";
									_45d += self.getTriplePartHTML(c, _45c, tags[j]);
									_45d += "</div>";
								}
								_45d += "</div>";
							}
							for (var _460 in c[_45e]) {
								if (_460 === ns.pundit_hasComment || _460 === ns.pundit_hasTag) {
									break;
								}
								_45d += "<div class=\"pundit-predicate\">";
								_45d += self.getTriplePartHTML(c, _45c, _460);
								for (var k = c[_45e][_460].length - 1; k >= 0; k--) {
									var _461 = c[_45e][_460][k];
									_45d += "<div class=\"pundit-object\">";
									_45d += self.getTriplePartHTML(c, _45c, _461.value, _461.type);
									_45d += "</div>";
								}
								_45d += "</div>";
							}
							_45d += "</div></div>";
						}
						self.log("Produced statements HTML");
						return _45d;
					},
					getTagsFromTriples: function (_462, _463) {
						var _464 = [];
						var _465 = _462[_463];
						for (var _466 in _465) {
							var _467 = _465[_466];
							for (var k = _467.length; k--;) {
								if (_466 === ns.pundit_hasTag && _467[k].type === "uri") {
									_464.push(_467[k].value);
								}
							}
						}
						return _464;
					},
					getCommentsFromTriples: function (_468, _469) {
						var _46a = [];
						var _46b = _468[_469];
						for (var _46c in _46b) {
							var _46d = _46b[_46c];
							for (var k = _46d.length; k--;) {
								if (_46c === ns.pundit_hasComment && _46d[k].type === "literal") {
									_46a.push(_46d[k].value);
								}
							}
						}
						return _46a;
					},
					getTriplePartHTML: function (c, _46e, uri, type) {
						var self = this,
								tp = "",
								_46f = "",
								_470 = "",
								_471 = "",
								_472 = "",
								_473 = "",
								_474 = "",
								_475 = "",
								_476 = "";
						self.log("TriplePartHTML for " + uri.substr(0, 30));
						if (_46e === null || typeof (_46e) === "undefined" || (type !== "literal" && typeof (_46e[uri]) === "undefined")) {
							self.log("No items for uri " + uri.substr(0, 30) + "... :|");
							console.log("TODO: something wrong rendering items? ", uri, type, _46e);
							return "<span>(ERR) " + uri.substr(0, 30) + "</span>";
						}
						_476 = _46e[uri];
						if (typeof (type) !== "undefined" && type === "literal") {
							if (uri.indexOf("<") === -1 && uri.length > 20) {
								_46f = uri.substr(0, 20) + "...";
							} else {
								_46f = uri;
							}
							_471 = "<li><em>Datatype</em>: Literal</li>";
							_472 = "<li><em>Full content</em>: " + uri + "</li>";
						} else {
							if (typeof (_476[ns.rdfs_label]) !== "undefined") {
								_46f = _476[ns.rdfs_label][0].value;
							} else {
								_46f = uri.substr(uri.length - 20, 20);
							}
							if (_476[ns.rdfs_comment]) {
								_473 = "<li><em>Comment:</em> " + _476[ns.rdfs_comment][0].value + "</li>";
							}
							if (_476[ns.items.image]) {
								if (_476[ns.items.type][0].value === ns.fragments.image) {
									_471 += "<li><em>Image Fragment</em><div class='pundit-image-fragment-preview' style='position:relative' about='" + uri + "'><img class='pundit-image-preview-large' src='" + _476[ns.items.image][0].value + "' /></div></li>";
								} else {
									_471 += "<li><em>Image</em><img src='" + _476[ns.items.image][0].value + "' / class='pundit-image-preview-large'></li>";
								}
							}
							var _477 = [];
							if (typeof (_476[ns.rdf_type]) !== "undefined") {
								_471 += "<li><em>Types</em>: ";
								for (var i = _476[ns.rdf_type].length - 1; i >= 0; i--) {
									_475 = _476[ns.rdf_type][i].value;
									_477.push(_475);
									if (typeof (_46e[_475]) !== "undefined" && typeof (_46e[_475][ns.rdfs_label]) !== "undefined") {
										_474 = _46e[_475][ns.rdfs_label][0].value;
									} else {
										_474 = ns.getLabelFromUri(_475);
									}
									_471 += "<a class=\"go_to\" target=\"_blank\" href=\"" + _475 + "\">" + _474 + "</a>, ";
								}
								_471 = _471.substr(0, _471.length - 2);
								_471 += "</li>";
							}
							var _478;
							if (_477.indexOf(ns.fragments.image) !== -1) {
								_478 = _476[ns.items.parentItemXP][0].value;
							} else {
								_478 = uri;
							}
							var _479 = "";
							if (_477.indexOf(ns.fragments.text) !== -1 || _477.indexOf(ns.image) !== -1 || _477.indexOf(ns.fragments.image) !== -1) {
								_479 = "Full content";
								if (self.xpointersClasses[_478]) {
									_472 += "<li><a href=\"#\" class=\"zoom\" about=\"" + _478 + "\"><em>Zoom on this item</em></a></li>";
								} else {
									var _47a = _476[ns.items.pageContext][0].value,
											_47b = uri.split("#")[1];
									var _47c;
									if (typeof (_47b) !== "undefined") {
										_47c = _47a + "#" + _47b;
									} else {
										_47c = _47a;
									}
									_472 += "<li><em><a href=\"" + _47c + "\">Show in origin page</a></em></li>";
								}
							} else {
								_479 = "Description";
								_472 += "<li><a href=\"" + uri + "\" target=\"_blank\">More info</a></li>";
							}
							if (_PUNDIT.config.enableSemanticExpansion) {
								var _47d = uri;
								if (_47d.indexOf("europeana.eu") !== -1) {
									var _47e = _47d.split("/");
									_47d = "http://data.europeana.eu/item/" + _47e[_47e.length - 2] + "/" + _47e[_47e.length - 1];
								}
								_472 += "<li><a href='" + ns.lodLiveURL + "?" + encodeURI(_47d) + "' target='_blank'>(NEW!) Explore in LodLive</a></li>";
							}
							if (_476[ns.items.description] && _477.indexOf(ns.image) === -1) {
								_471 += "<li><em>" + _479 + "</em>: " + _476[ns.items.description][0].value + "</li>";
							}
						}
						_470 = self.xpointersColors[_478] || "";
						tp += "<span class=\"pundit-moreinfo " + _470 + "\">" + _46f + "</span>";
						tp += "<span class=\"pundit-moreinfo-subpanel pundit-hidden\"><ul>";
						tp += _473 + _471 + _472;
						tp += "</ul></span>";
						return tp;
					},
					addAnnotationContent: function (_47f, _480) {
						var self = this;
						self.annotations[_47f].content = _480;
						self.log("Added content to annotation " + _47f);
					},
					addAnnotationItems: function (_481, _482) {
						var self = this,
								c = self.annotations[_481].content;
						self.annotations[_481].items = _482;
						for (var _483 in c) {
							self.log("Adding SUBJECT item: " + _483.substr(0, 41) + "..");
							self.extractItemFromAnnContent(_483, _482);
							for (var _484 in c[_483]) {
								for (var k = c[_483][_484].length - 1; k >= 0; k--) {
									var _485 = c[_483][_484][k];
									if (_485.type === "literal") {
									} else {
										self.extractItemFromAnnContent(_485.value, _482);
									}
								}
							}
						}
					},
					extractItemFromAnnContent: function (uri, it) {
						var self = this,
								item = {
									value: uri
								};
						self.log("Extracting item from content: " + uri.substr(0, 40));
						if (typeof (it) === "undefined" || it === null) {
							self.log("No items to extract from.");
							return;
						}
						if (typeof (it[uri]) === "undefined") {
							self.log("Cant extract item for this uri!!");
							console.log("TODO: Error? Literallone?", it, uri);
							return;
						}
						for (var _486 in ns.items) {
							var _487 = ns.items[_486];
							if (typeof (it[uri][_487]) !== "undefined") {
								if (_486 === "selector") {
									var _488 = it[uri][_487][0].value;
									var _489 = it[_488][ns.rdf_value][0].value;
									if (typeof (item["selectors"]) === "undefined") {
										item["selectors"] = [];
									}
									item["selectors"].push(_4.fromJson(_489));
								} else {
									item[_486] = it[uri][_487][0].value;
								}
							}
						}
						item["rdftype"] = [];
						for (var i = it[uri][ns.items.type].length; i--;) {
							item["rdftype"].push(it[uri][ns.items.type][i].value);
						}
						if (it[uri][ns.items.type][0].value === ns.fragments.text) {
							item["type"] = ["subject"];
							item.rdfData = semlibItems.createBucketForTextFragment(item).bucket;
							previewer.buildPreviewForItem(item);
							semlibItems.addItem(item);
							self.log("Created and added a TEXT item " + item.value.substr(0, 30) + "..");
							return;
						}
						if (it[uri][ns.items.type][0].value === ns.rdfs_resource) {
							item["type"] = ["subject"];
							item.rdfData = semlibItems.createBucketForVocabItem(item).bucket;
							previewer.buildPreviewForItem(item);
							semlibItems.addItem(item);
							self.log("Created and added VOCAB item " + item.value.substr(0, 30) + "..");
							return;
						}
						self.log("Assuming proper item for " + item.value.substr(0, 30) + "..");
						item["type"] = ["subject"];
						item.rdfData = semlibItems.createBucketForItem(item).bucket;
						previewer.buildPreviewForItem(item);
						semlibItems.addItem(item);
						self.log("Created and added DEFAULT item " + item.value.substr(0, 30) + "..");
					},
					refreshAnnotations: function () {
						var self = this;
						self.log("Refresing annotations");
						self.isRefreshingAnnotations = true;
						self.backup = {
							usedColors: self.usedColors,
							colors: self.colors,
							xpointersColors: self.xpointersColors
						};
						self.wipe();
						self.contentURIs = self.helper.getContentURIs();
						self.reader.getAnnotationMetadataFromUri(self.contentURIs);
					},
					wipe: function () {
						var self = this;
						self.tempXpointers = self.tempXpointers || [];
						self.annXpointers = [];
						self.xpointers = [];
						self.xpointersClasses = {};
						self.xpointersColors = {};
						self.xpointersAnnotationsId = {};
						self.xpaths = [];
						self.annotations = {};
						self.contentURIs = [];
						self.colors = ["col1", "col2", "col3", "col4", "col5", "col6", "col7", "col9", "col10", "col11", "col12", "col13", "col14", "col15", "col16", "col17", "col18", "col19", "col20", "col21", "col22", "col23", "col24", "col25"];
						self.usedColors = {};
						self.fallbackColor = ["col1"];
					},
					consolidate: function () {
						var self = this,
								foo;
						self.wipeConsolidatedAnnotations();
						for (var i = self.annXpointers.length; i--;) {
							self.xpointers.push(self.annXpointers[i]);
						}
						for (var k = self.tempXpointers.length; k--;) {
							self.xpointers.push(self.tempXpointers[k]);
						}
						foo = self.helper.getXPathsFromXPointers(self.xpointers);
						self.xpointers = foo.xpointers;
						self.xpaths = foo.xpaths;
						self.invalidXpointers = foo.invalidXpointers;
						for (var i = self.xpointers.length; i--;) {
							var uri = self.xpointers[i];
							self.xpointersClasses[uri] = ["consxp" + i];
						}
						self.sortedXpaths = self.helper.splitAndSortXPaths(self.xpaths);
						self.htmlClasses = self.helper.getClassesForNewXpointers(self.xpointers, self.sortedXpaths, self.xpaths, self.xpointersClasses);
						self.helper.updateDOM(self.sortedXpaths, self.htmlClasses);
						for (xp in self.xpointersClasses) {
							var cl = self.xpointersClasses[xp].join(""),
									_48a = _4.query("." + cl),
									n = _48a.length - 1,
									id = "icon_" + cl,
									_48b = "";
							if (n < 0) {
								continue;
							}
							self.log("Adding RDF icon for " + id);
							if (self.isAnnXpointer(xp)) {
								_4.place("<a class=\"pundit-icon-annotation\" id=\"" + id + "\"></a>", _48a[n], "after");
							} else {
								if (self.isTempXpointer(xp)) {
									_4.place("<a class=\"pundit-icon-annotation selected_fragment_icon\" id=\"" + id + "\"></a>", _48a[n], "after");
								}
							}
							_4.connect(_4.byId(id), "onmouseenter", (function (_48c, _48d) {
								return function (e) {
									self.highlightByXpointer(_48d);
									if (self.isAnnXpointer(_48d)) {
										self.fireOnAnnotationIconMouseEnter(_48d);
									}
								};
							})(cl, xp));
							_4.connect(_4.byId(id), "onmouseleave", (function (_48e, _48f) {
								return function () {
									self.removeHighlightByXpointer(_48f);
									if (self.isAnnXpointer(_48f)) {
										self.fireOnAnnotationIconMouseLeave(_48f);
									}
								};
							})(cl, xp));
							_4.connect(_4.byId(id), "onclick", (function (_490, _491) {
								return function (e) {
									if (semlibWindow.isAnnotationWindowOpen()) {
										var _492 = semlibWindow.getOpenedPanelsByXpointer(_491);
										for (var j = _492.length; j--;) {
											semlibWindow.setPositioningXpointer(_492[j].id, _491);
										}
									}
									e.preventDefault();
									self.fireOnAnnotationIconMouseClick(_491);
									var item = _PUNDIT["items"].getItemByUri(_491);
									if (typeof (item) === "undefined") {
										var _493 = new pundit.XpointersHelper();
										var _494 = _493.getXPathsFromXPointers([_491]).xpaths[_491].startxpath;
										var el = document.evaluate(_494, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
										var _495 = _4.query("img", el);
										for (var _496 = 0; _496 < _495.length; _496++) {
											var _497 = _495[_496].src;
											item = _PUNDIT["items"].getItemsFromParentItem(_497)[0];
										}
									}
									if (self.isAnnXpointer(_491)) {
										cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, item, "annotatedtextfragment");
									} else {
										if (self.isTempXpointer(_491)) {
											cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, item, "bookmarkedtextfragment");
										}
									}
									_4.stopEvent(e);
									return false;
								};
							})(cl, xp));
						}
						self.log("DOM is consolidated.");
						if (typeof (self.backup.xpointersColors) !== "undefined") {
							self.xpointersColors = self.backup.xpointersColors;
							self.colors = self.backup.colors;
							self.usedColors = self.backup.usedColors;
						}
						for (var xp in self.xpointersColors) {
							var cl = self.xpointersClasses[xp].join("");
							_4.query("span." + cl).addClass(self.xpointersColors[xp]);
						}
						if (self.opts.highlightingMode) {
							self.highlightAll();
						}
						self.fireOnConsolidate();
						if (self.opts.showInvalidXPointers === true) {
							console.log("-----------------------------------------------");
							console.log("BROKEN ANNOTATIONS FOR " + self.invalidXpointers.length + " XPOINTERS");
							for (var i in self.invalidXpointers) {
								var xp = self.invalidXpointers[i],
										anns = self.xpointersAnnotationsId[xp];
								for (var j in anns) {
									var id = anns[j],
											meta = self.annotations[id].metadata,
											_498 = meta[_PUNDIT.ns.pundit_authorName][0].value,
											date = meta[_PUNDIT.ns.pundit_annotationDate][0].value,
											nb = meta[_PUNDIT.ns.pundit_isIncludedIn][0].value.substr(41, 8),
											_499 = "No content retrieved";
									try {
										_499 = self.annotations[id].items[xp][_PUNDIT.ns.items.label][0].value;
									} catch (e) {
									}
									console.log("BROKEN ANN " + id + " (" + _498 + ", " + date + ", nb " + nb + "): " + _499);
								}
							}
						}
						self.log("Consolidate() is done.");
					},
					highlightByXpointer: function (xp) {
						var self = this;
						if (xp in self.xpointersClasses) {
							if (typeof (self.hideTimer[xp]) !== "undefined") {
								clearTimeout(self.hideTimer[xp]);
							} else {
								self.hideTimer[xp] = null;
							}
							if (typeof (self.highlightCount[xp]) === "undefined") {
								self.highlightCount[xp] = 0;
							}
							self.highlightCount[xp]++;
							_4.query("span." + self.xpointersClasses[xp].join("")).addClass("active");
						}
					},
					removeHighlightByXpointer: function (xp) {
						var self = this;
						if (xp in this.xpointersClasses) {
							self.highlightCount[xp]--;
							if (self.highlightCount[xp] > 0) {
								return;
							}
							clearTimeout(self.hideTimer[xp]);
							self.hideTimer[xp] = setTimeout(function () {
								if (self.xpointersClasses[xp] && !self.highlightingMode) {
									_4.query("span." + self.xpointersClasses[xp].join("")).removeClass("active");
								}
							}, self.opts.hideMouseLeaveMS);
						}
					},
					highlightAll: function () {
						_4.query(".cons").forEach(function (item) {
							_4.addClass(item, "active");
						});
					},
					hideZoom: function () {
						_4.destroy("pundit-zoomed-fragment");
					},
					zoomOnXpointer: function (xp) {
						if (typeof (this.xpointersClasses[xp]) === "undefined") {
							return;
						}
						var self = this,
								cl = self.xpointersClasses[xp].join(" "),
								top = Infinity,
								left = Infinity,
								_49a = -Infinity,
								_49b = -Infinity,
								y = Infinity,
								_49c = 5,
								st;
						self.log("Zooming on class " + cl);
						_4.query(".cons." + cl + ", .cons." + cl + " img").forEach(function (item) {
							var c = _4.position(item, true);
							top = Math.min(top, c.y);
							left = Math.min(left, c.x);
							_49a = Math.max(_49a, c.y + c.h);
							_49b = Math.max(_49b, c.x + c.w);
							y = Math.min(y, c.y);
						});
						if (_4.query("#pundit-zoomed-fragment").length > 0) {
							_4.destroy("pundit-zoomed-fragment");
						}
						_4.query("body").append("<div id=\"pundit-zoomed-fragment\"><span class=\"pundit-icon-close\"></span></div>");
						_4.behavior.apply();
						st = {
							position: "absolute",
							left: (left - _49c - 1) + "px",
							top: (top - _49c - 1) + "px",
							height: (_49a - top + 2 * _49c) + "px",
							width: (_49b - left + 2 * _49c) + "px"
						};
						_4.style("pundit-zoomed-fragment", st);
						_4.toggleClass("pundit-zoomed-fragment", "pundit-shown");
						var _49d = _4.query("body")[0].scrollTop;
						if ((y - _49d < _4.position("pundit-gui", true).h) || (y - _49d + _4.position("pundit-zoomed-fragment", true).h > window.innerHeight)) {
							_6.fx.smoothScroll({
								node: _4.query("#pundit-zoomed-fragment")[0],
								offset: {
									x: 0,
									y: _4.position("pundit-gui", true).h + 100
								},
								win: window,
								duration: 800
							}).play();
						}
					},
					wipeConsolidatedAnnotations: function () {
						var self = this;
						_4.query(".pundit-icon-annotation, .selected_fragment_icon").forEach(function (node) {
							_4.destroy(node);
						});
						self.unwrap("cons");
						self.helper.mergeTextNodes(_4.query("body")[0]);
						self.log("Wiped all consolidated annotations");
					},
					unwrap: function (c) {
						var _49e = _4.query("." + c);
						for (var i = _49e.length; i--;) {
							var _49f = _4.query(_49e[i]).parent()[0];
							while (_49e[i].firstChild) {
								_49f.insertBefore(_49e[i].firstChild, _49e[i]);
							}
							_4.destroy(_49e[i]);
						}
					},
					initBehaviors: function () {
						var self = this;
						_4.behavior.add({
							"div.pundit-statement span.pundit-moreinfo": {
								"onclick": function (e) {
									_4.toggleClass(_4.query(e.currentTarget).next()[0], "pundit-hidden");
									e.preventDefault();
									var node = _4.query(e.target).next().children().children().children(".pundit-image-fragment-preview");
									if (node.length > 0 && _4.query(node).children(".kineticjs-content").length === 0) {
										var _4a0 = _4.attr(_4.query(node)[0], "about");
										var _4a1 = _4.style(_4.query(node).children("img")[0]),
												w = _4a1.width.replace("px", ""),
												h = _4a1.height.replace("px", ""),
												item = _PUNDIT["items"].getItemByUri(_4a0);
										var s = new Kinetic.Stage({
											container: _4.query(e.target).next().children().children().children(".pundit-image-fragment-preview")[0],
											width: w,
											height: h
										});
										_4.style(s.getContent(), {
											left: _4a1.marginLeft,
											top: _4a1.marginTop,
											position: "absolute"
										});
										var l = new Kinetic.Layer();
										s.add(l);
										for (var i = item.selectors.length; i--;) {
											var _4a2 = [];
											if (item.selectors[i].type === "polygon") {
												for (var j = item.selectors[i].points.length; j--;) {
													_4a2.push({
														x: item.selectors[i].points[j].x * parseInt(w),
														y: item.selectors[i].points[j].y * parseInt(h)
													});
												}
												var p = [];
												for (var k = _4a2.length; k--;) {
													p = p.concat([_4a2[k].x, _4a2[k].y]);
												}
												p = p.concat([_4a2[0].x, _4a2[0].y]);
												var poly = new Kinetic.Polygon({
													points: p,
													fill: "#00D2FF",
													stroke: "black",
													strokeWidth: 2,
													opacity: 0.3
												});
												l.add(poly);
												s.draw();
											}
										}
									}
									semlibWindow.positionPanels();
								}
							},
							"div.pundit-statement a.zoom": {
								"click": function (e) {
									var xp = _4.attr(e.currentTarget, "about"),
											_4a3 = _4.query(e.currentTarget).parents(".pundit-aw-panel")[0];
									self.zoomOnXpointer(xp);
									semlibWindow.setPositioningXpointer(_4.attr(_4a3, "id"), xp);
									e.preventDefault();
								},
								"onmouseover": function (e) {
									self.highlightByXpointer(_4.attr(e.currentTarget, "about"));
								},
								"onmouseout": function (e) {
									self.removeHighlightByXpointer(_4.attr(e.currentTarget, "about"));
								}
							},
							"div.pundit-aw-panel-buttons span.edit": {
								"click": function (e) {
									alert("non implemented yet.");
								}
							},
							"div.pundit-aw-panel-buttons span.activate": {
								"click": function (e) {
									var _4a4 = _4.attr(e.currentTarget, "about");
									self.writer.setNotebookActive(_4a4, "1");
								}
							},
							"div.pundit-aw-panel-buttons span.deactivate": {
								"click": function (e) {
									var _4a5 = _4.attr(e.currentTarget, "about");
									self.writer.setNotebookActive(_4a5, "0");
								}
							},
							"div.pundit-aw-panel-buttons span.delete": {
								"click": function (e) {
									var _4a6 = _4.attr(e.currentTarget, "about"),
											_4a7 = _PUNDIT.loadingBox.addJob("Deleting annotation ");
									_4.query("#dialog_" + _4a6 + "_content").addClass("pundit-panel-loading");
									_4.query("#dialog_" + _4a6 + "_content .pundit-gui-button.delete").style("display", "none");
									self.refreshPageItems = true;
									self.writer.deleteAnnotation(_4a6, function () {
										semlibWindow.destroyPanelById(_4a6);
										self.refreshAnnotations();
										_PUNDIT.loadingBox.setJobOk(_4a7);
									});
								}
							},
							"div#pundit-zoomed-fragment span.pundit-icon-close": {
								"click": function (e) {
									self.hideZoom();
								}
							}
						});
					},
					addAnnotations: function (_4a8) {
						var self = this,
								nAnn = 0,
								nXps = 0,
								_4a9 = [];
						self.log("Adding annotations from raw graph......");
						self.annXpointers = [];
						self.annIds = [];
						for (var _4aa in _4a8) {
							var a = _4a8[_4aa],
									_4ab, _4ac, _4ad = false;
							for (var t = a[ns.rdf_type].length; t--;) {
								if (a[ns.rdf_type][t].value === ns.annotation) {
									_4ad = true;
								}
							}
							if (!_4ad) {
								self.log("ERROR: invalid annotation from /search query! .. discarded.");
								continue;
							}
							_4ab = a[ns.pundit_hasTarget] || [];
							_4ac = a[ns.pundit_annotationId][0].value;
							var _4ae = a[ns.pundit_isIncludedIn][0].value;
							var _4af = _4ae.split("/")[_4ae.split("/").length - 1];
							self.notebooks[_4af] = null;
							self.log("Adding annotation " + _4ac + " with " + _4ab.length + " targets");
							if (_4ab.length === 0) {
								self.annIds.push(_4ac);
								a[ns.pundit_hasTarget] = [];
								self.annotations[_4ac] = {
									targets: [],
									metadata: a,
									id: _4ac
								};
							} else {
								for (var i = _4ab.length; i--;) {
									var val = _4ab[i].value;
									if (val.match(/#xpointer\(start-point\(string-range\(/)) {
										if (_4.indexOf(self.annIds, _4ac) === -1) {
											self.annIds.push(_4ac);
										}
										self.xpointers.push(val);
										self.annXpointers.push(val);
										if (_4ac in self.annotations) {
											self.annotations[_4ac].targets.push(val);
										} else {
											self.annotations[_4ac] = {
												targets: [val],
												metadata: a,
												id: _4ac
											};
										}
										if (typeof (self.xpointersAnnotationsId[val]) === "undefined") {
											self.xpointersAnnotationsId[val] = [_4ac];
										} else {
											self.xpointersAnnotationsId[val].push(_4ac);
										}
									} else {
										if (val === window.location.href) {
											if (_4.indexOf(self.annIds, _4ac) === -1) {
												self.annIds.push(_4ac);
											}
											if (_4ac in self.annotations) {
											} else {
												self.annotations[_4ac] = {
													targets: [],
													metadata: a,
													id: _4ac
												};
											}
										} else {
											self.log("Ops, annotation target is not an xpointer?");
										}
									}
								}
							}
						}
						self.annToDownload = self.annIds.length;
						if (self.annToDownload === 0) {
							_PUNDIT.loadingBox.setJobOk(self.jobId);
							self.jobId = null;
							self.log("No annotations added: nothing to display on this page.");
							self.isRefreshingAnnotations = false;
						} else {
							self.log("Added " + self.annToDownload + " annotations ready to be downloaded");
							for (var i = self.annIds.length; i--;) {
								self.reader.getAnnotationContentFromId(self.annIds[i]);
							}
						}
					},
					addAnnotation: function (_4b0) {
					},
					isAnnXpointer: function (xp) {
						for (var i = this.annXpointers.length; i--;) {
							if (xp === this.annXpointers[i]) {
								return true;
							}
						}
						return false;
					},
					isTempXpointer: function (xp) {
						for (var i = this.tempXpointers.length; i--;) {
							if (xp === this.tempXpointers[i]) {
								return true;
							}
						}
						return false;
					},
					resetTempXpointers: function () {
						this.tempXpointers = [];
					},
					removeTempXpointer: function (xp) {
						for (var i = this.tempXpointers.length; i--;) {
							if (xp === this.tempXpointers[i]) {
								if (typeof semlibMyItems.getItemFromUri(xp) === "undefined") {
									this.tempXpointers.splice(i, 1);
								}
							}
						}
						for (var i = this.xpointers.length; i--;) {
							if (xp === this.xpointers[i]) {
								this.xpointers.splice(i, 1);
							}
						}
						if (typeof semlibMyItems.getItemFromUri(xp) === "undefined") {
							delete tooltip_viewer.xpointersClasses[xp];
						}
					}
				});
			}
			if (!_4._hasResource["pundit.TriplesBucket"]) {
				_4._hasResource["pundit.TriplesBucket"] = true;
				_4.provide("pundit.TriplesBucket");
				_4.declare("pundit.TriplesBucket", null, {
					opts: {},
					constructor: function (_4b1) {
						if (_4b1 && typeof (_4b1.bucket) !== "undefined") {
							this.bucket = _4b1.bucket;
						} else {
							this.bucket = [];
						}
					},
					concatBucket: function (b) {
						this.bucket = this.bucket.concat(b);
					},
					addTriple: function (s, p, o, _4b2) {
						if (typeof (s) !== "undefined" && typeof (p) !== "undefined" && typeof (o) !== "undefined" && typeof (_4b2) !== "undefined") {
							this.bucket.push({
								s: s,
								p: p,
								o: o,
								otype: _4b2
							});
						}
					},
					updateTripleObject: function (s, p, o, _4b3) {
						if (typeof (s) === "undefined" || typeof (p) === "undefined" || typeof (o) === "undefined" || typeof (_4b3) === "undefined") {
							return;
						}
						for (var i = 0; i < this.bucket.length; i++) {
							if (this.bucket[i].s === s && this.bucket[i].p === p) {
								this.bucket[i].o = o;
								this.bucket[i].otype = _4b3;
							}
						}
					},
					emptyBucket: function () {
						this.bucket = [];
					},
					getTalisJson: function () {
						var res = {}, t;
						for (var i = 0; i < this.bucket.length; i++) {
							t = this.bucket[i];
							if (!(t.s in res)) {
								res[t.s] = {};
							}
							if (!(t.p in res[t.s])) {
								res[t.s][t.p] = [];
							}
							res[t.s][t.p].push({
								value: t.o,
								type: t.otype
							});
						}
						return res;
					},
					getObject: function (s, p) {
						var ret = [],
								t;
						for (var i in this.bucket) {
							t = this.bucket[i];
							if (t.s === s && t.p === p) {
								ret.push(t.o);
							}
						}
						return ret;
					},
					isEmpty: function () {
						return this.bucket.length === 0;
					}
				});
			}
			if (!_4._hasResource["dojo.data.util.filter"]) {
				_4._hasResource["dojo.data.util.filter"] = true;
				_4.provide("dojo.data.util.filter");
				_4.getObject("data.util.filter", true, _4);
				_4.data.util.filter.patternToRegExp = function (_4b4, _4b5) {
					var rxp = "^";
					var c = null;
					for (var i = 0; i < _4b4.length; i++) {
						c = _4b4.charAt(i);
						switch (c) {
							case "\\":
								rxp += c;
								i++;
								rxp += _4b4.charAt(i);
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
					if (_4b5) {
						return new RegExp(rxp, "mi");
					} else {
						return new RegExp(rxp, "m");
					}
				};
			}
			if (!_4._hasResource["dojo.data.util.sorter"]) {
				_4._hasResource["dojo.data.util.sorter"] = true;
				_4.provide("dojo.data.util.sorter");
				_4.getObject("data.util.sorter", true, _4);
				_4.data.util.sorter.basicComparator = function (a, b) {
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
				_4.data.util.sorter.createSortFunction = function (_4b6, _4b7) {
					var _4b8 = [];

					function _4b9(attr, dir, comp, s) {
						return function (_4ba, _4bb) {
							var a = s.getValue(_4ba, attr);
							var b = s.getValue(_4bb, attr);
							return dir * comp(a, b);
						};
					};
					var _4bc;
					var map = _4b7.comparatorMap;
					var bc = _4.data.util.sorter.basicComparator;
					for (var i = 0; i < _4b6.length; i++) {
						_4bc = _4b6[i];
						var attr = _4bc.attribute;
						if (attr) {
							var dir = (_4bc.descending) ? -1 : 1;
							var comp = bc;
							if (map) {
								if (typeof attr !== "string" && ("toString" in attr)) {
									attr = attr.toString();
								}
								comp = map[attr] || bc;
							}
							_4b8.push(_4b9(attr, dir, comp, _4b7));
						}
					}
					return function (rowA, rowB) {
						var i = 0;
						while (i < _4b8.length) {
							var ret = _4b8[i++](rowA, rowB);
							if (ret !== 0) {
								return ret;
							}
						}
						return 0;
					};
				};
			}
			if (!_4._hasResource["dojo.data.util.simpleFetch"]) {
				_4._hasResource["dojo.data.util.simpleFetch"] = true;
				_4.provide("dojo.data.util.simpleFetch");
				_4.getObject("data.util.simpleFetch", true, _4);
				_4.data.util.simpleFetch.fetch = function (_4bd) {
					_4bd = _4bd || {};
					if (!_4bd.store) {
						_4bd.store = this;
					}
					var self = this;
					var _4be = function (_4bf, _4c0) {
						if (_4c0.onError) {
							var _4c1 = _4c0.scope || _4.global;
							_4c0.onError.call(_4c1, _4bf, _4c0);
						}
					};
					var _4c2 = function (_4c3, _4c4) {
						var _4c5 = _4c4.abort || null;
						var _4c6 = false;
						var _4c7 = _4c4.start ? _4c4.start : 0;
						var _4c8 = (_4c4.count && (_4c4.count !== Infinity)) ? (_4c7 + _4c4.count) : _4c3.length;
						_4c4.abort = function () {
							_4c6 = true;
							if (_4c5) {
								_4c5.call(_4c4);
							}
						};
						var _4c9 = _4c4.scope || _4.global;
						if (!_4c4.store) {
							_4c4.store = self;
						}
						if (_4c4.onBegin) {
							_4c4.onBegin.call(_4c9, _4c3.length, _4c4);
						}
						if (_4c4.sort) {
							_4c3.sort(_4.data.util.sorter.createSortFunction(_4c4.sort, self));
						}
						if (_4c4.onItem) {
							for (var i = _4c7;
							     (i < _4c3.length) && (i < _4c8); ++i) {
								var item = _4c3[i];
								if (!_4c6) {
									_4c4.onItem.call(_4c9, item, _4c4);
								}
							}
						}
						if (_4c4.onComplete && !_4c6) {
							var _4ca = null;
							if (!_4c4.onItem) {
								_4ca = _4c3.slice(_4c7, _4c8);
							}
							_4c4.onComplete.call(_4c9, _4ca, _4c4);
						}
					};
					this._fetchItems(_4bd, _4c2, _4be);
					return _4bd;
				};
			}
			if (!_4._hasResource["dojo.data.ItemFileReadStore"]) {
				_4._hasResource["dojo.data.ItemFileReadStore"] = true;
				_4.provide("dojo.data.ItemFileReadStore");
				_4.declare("dojo.data.ItemFileReadStore", null, {
					constructor: function (_4cb) {
						this._arrayOfAllItems = [];
						this._arrayOfTopLevelItems = [];
						this._loadFinished = false;
						this._jsonFileUrl = _4cb.url;
						this._ccUrl = _4cb.url;
						this.url = _4cb.url;
						this._jsonData = _4cb.data;
						this.data = null;
						this._datatypeMap = _4cb.typeMap || {};
						if (!this._datatypeMap["Date"]) {
							this._datatypeMap["Date"] = {
								type: Date,
								deserialize: function (_4cc) {
									return _4.date.stamp.fromISOString(_4cc);
								}
							};
						}
						this._features = {
							"dojo.data.api.Read": true,
							"dojo.data.api.Identity": true
						};
						this._itemsByIdentity = null;
						this._storeRefPropName = "_S";
						this._itemNumPropName = "_0";
						this._rootItemPropName = "_RI";
						this._reverseRefMap = "_RRM";
						this._loadInProgress = false;
						this._queuedFetches = [];
						if (_4cb.urlPreventCache !== undefined) {
							this.urlPreventCache = _4cb.urlPreventCache ? true : false;
						}
						if (_4cb.hierarchical !== undefined) {
							this.hierarchical = _4cb.hierarchical ? true : false;
						}
						if (_4cb.clearOnClose) {
							this.clearOnClose = true;
						}
						if ("failOk" in _4cb) {
							this.failOk = _4cb.failOk ? true : false;
						}
					},
					url: "",
					_ccUrl: "",
					data: null,
					typeMap: null,
					clearOnClose: false,
					urlPreventCache: false,
					failOk: false,
					hierarchical: true,
					_assertIsItem: function (item) {
						if (!this.isItem(item)) {
							throw new Error("dojo.data.ItemFileReadStore: Invalid item argument.");
						}
					},
					_assertIsAttribute: function (_4cd) {
						if (typeof _4cd !== "string") {
							throw new Error("dojo.data.ItemFileReadStore: Invalid attribute argument.");
						}
					},
					getValue: function (item, _4ce, _4cf) {
						var _4d0 = this.getValues(item, _4ce);
						return (_4d0.length > 0) ? _4d0[0] : _4cf;
					},
					getValues: function (item, _4d1) {
						this._assertIsItem(item);
						this._assertIsAttribute(_4d1);
						return (item[_4d1] || []).slice(0);
					},
					getAttributes: function (item) {
						this._assertIsItem(item);
						var _4d2 = [];
						for (var key in item) {
							if ((key !== this._storeRefPropName) && (key !== this._itemNumPropName) && (key !== this._rootItemPropName) && (key !== this._reverseRefMap)) {
								_4d2.push(key);
							}
						}
						return _4d2;
					},
					hasAttribute: function (item, _4d3) {
						this._assertIsItem(item);
						this._assertIsAttribute(_4d3);
						return (_4d3 in item);
					},
					containsValue: function (item, _4d4, _4d5) {
						var _4d6 = undefined;
						if (typeof _4d5 === "string") {
							_4d6 = _4.data.util.filter.patternToRegExp(_4d5, false);
						}
						return this._containsValue(item, _4d4, _4d5, _4d6);
					},
					_containsValue: function (item, _4d7, _4d8, _4d9) {
						return _4.some(this.getValues(item, _4d7), function (_4da) {
							if (_4da !== null && !_4.isObject(_4da) && _4d9) {
								if (_4da.toString().match(_4d9)) {
									return true;
								}
							} else {
								if (_4d8 === _4da) {
									return true;
								}
							}
						});
					},
					isItem: function (_4db) {
						if (_4db && _4db[this._storeRefPropName] === this) {
							if (this._arrayOfAllItems[_4db[this._itemNumPropName]] === _4db) {
								return true;
							}
						}
						return false;
					},
					isItemLoaded: function (_4dc) {
						return this.isItem(_4dc);
					},
					loadItem: function (_4dd) {
						this._assertIsItem(_4dd.item);
					},
					getFeatures: function () {
						return this._features;
					},
					getLabel: function (item) {
						if (this._labelAttr && this.isItem(item)) {
							return this.getValue(item, this._labelAttr);
						}
						return undefined;
					},
					getLabelAttributes: function (item) {
						if (this._labelAttr) {
							return [this._labelAttr];
						}
						return null;
					},
					_fetchItems: function (_4de, _4df, _4e0) {
						var self = this,
								_4e1 = function (_4e2, _4e3) {
									var _4e4 = [],
											i, key;
									if (_4e2.query) {
										var _4e5, _4e6 = _4e2.queryOptions ? _4e2.queryOptions.ignoreCase : false;
										var _4e7 = {};
										for (key in _4e2.query) {
											_4e5 = _4e2.query[key];
											if (typeof _4e5 === "string") {
												_4e7[key] = _4.data.util.filter.patternToRegExp(_4e5, _4e6);
											} else {
												if (_4e5 instanceof RegExp) {
													_4e7[key] = _4e5;
												}
											}
										}
										for (i = 0; i < _4e3.length; ++i) {
											var _4e8 = true;
											var _4e9 = _4e3[i];
											if (_4e9 === null) {
												_4e8 = false;
											} else {
												for (key in _4e2.query) {
													_4e5 = _4e2.query[key];
													if (!self._containsValue(_4e9, key, _4e5, _4e7[key])) {
														_4e8 = false;
													}
												}
											}
											if (_4e8) {
												_4e4.push(_4e9);
											}
										}
										_4df(_4e4, _4e2);
									} else {
										for (i = 0; i < _4e3.length; ++i) {
											var item = _4e3[i];
											if (item !== null) {
												_4e4.push(item);
											}
										}
										_4df(_4e4, _4e2);
									}
								};
						if (this._loadFinished) {
							_4e1(_4de, this._getItemsArray(_4de.queryOptions));
						} else {
							if (this._jsonFileUrl !== this._ccUrl) {
								_4.deprecated("dojo.data.ItemFileReadStore: ", "To change the url, set the url property of the store," + " not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
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
									this._queuedFetches.push({
										args: _4de,
										filter: _4e1
									});
								} else {
									this._loadInProgress = true;
									var _4ea = {
										url: self._jsonFileUrl,
										handleAs: "json-comment-optional",
										preventCache: this.urlPreventCache,
										failOk: this.failOk
									};
									var _4eb = _4.xhrGet(_4ea);
									_4eb.addCallback(function (data) {
										try {
											self._getItemsFromLoadedData(data);
											self._loadFinished = true;
											self._loadInProgress = false;
											_4e1(_4de, self._getItemsArray(_4de.queryOptions));
											self._handleQueuedFetches();
										} catch (e) {
											self._loadFinished = true;
											self._loadInProgress = false;
											_4e0(e, _4de);
										}
									});
									_4eb.addErrback(function (_4ec) {
										self._loadInProgress = false;
										_4e0(_4ec, _4de);
									});
									var _4ed = null;
									if (_4de.abort) {
										_4ed = _4de.abort;
									}
									_4de.abort = function () {
										var df = _4eb;
										if (df && df.fired === -1) {
											df.cancel();
											df = null;
										}
										if (_4ed) {
											_4ed.call(_4de);
										}
									};
								}
							} else {
								if (this._jsonData) {
									try {
										this._loadFinished = true;
										this._getItemsFromLoadedData(this._jsonData);
										this._jsonData = null;
										_4e1(_4de, this._getItemsArray(_4de.queryOptions));
									} catch (e) {
										_4e0(e, _4de);
									}
								} else {
									_4e0(new Error("dojo.data.ItemFileReadStore: No JSON source data was provided as either URL or a nested Javascript object."), _4de);
								}
							}
						}
					},
					_handleQueuedFetches: function () {
						if (this._queuedFetches.length > 0) {
							for (var i = 0; i < this._queuedFetches.length; i++) {
								var _4ee = this._queuedFetches[i],
										_4ef = _4ee.args,
										_4f0 = _4ee.filter;
								if (_4f0) {
									_4f0(_4ef, this._getItemsArray(_4ef.queryOptions));
								} else {
									this.fetchItemByIdentity(_4ef);
								}
							}
							this._queuedFetches = [];
						}
					},
					_getItemsArray: function (_4f1) {
						if (_4f1 && _4f1.deep) {
							return this._arrayOfAllItems;
						}
						return this._arrayOfTopLevelItems;
					},
					close: function (_4f2) {
						if (this.clearOnClose && this._loadFinished && !this._loadInProgress) {
							if (((this._jsonFileUrl == "" || this._jsonFileUrl == null) && (this.url == "" || this.url == null)) && this.data == null) {
								console.debug("dojo.data.ItemFileReadStore: WARNING!  Data reload " + " information has not been provided." + "  Please set 'url' or 'data' to the appropriate value before" + " the next fetch");
							}
							this._arrayOfAllItems = [];
							this._arrayOfTopLevelItems = [];
							this._loadFinished = false;
							this._itemsByIdentity = null;
							this._loadInProgress = false;
							this._queuedFetches = [];
						}
					},
					_getItemsFromLoadedData: function (_4f3) {
						var _4f4 = false,
								self = this;

						function _4f5(_4f6) {
							var _4f7 = ((_4f6 !== null) && (typeof _4f6 === "object") && (!_4.isArray(_4f6) || _4f4) && (!_4.isFunction(_4f6)) && (_4f6.constructor == Object || _4.isArray(_4f6)) && (typeof _4f6._reference === "undefined") && (typeof _4f6._type === "undefined") && (typeof _4f6._value === "undefined") && self.hierarchical);
							return _4f7;
						};

						function _4f8(_4f9) {
							self._arrayOfAllItems.push(_4f9);
							for (var _4fa in _4f9) {
								var _4fb = _4f9[_4fa];
								if (_4fb) {
									if (_4.isArray(_4fb)) {
										var _4fc = _4fb;
										for (var k = 0; k < _4fc.length; ++k) {
											var _4fd = _4fc[k];
											if (_4f5(_4fd)) {
												_4f8(_4fd);
											}
										}
									} else {
										if (_4f5(_4fb)) {
											_4f8(_4fb);
										}
									}
								}
							}
						};
						this._labelAttr = _4f3.label;
						var i, item;
						this._arrayOfAllItems = [];
						this._arrayOfTopLevelItems = _4f3.items;
						for (i = 0; i < this._arrayOfTopLevelItems.length; ++i) {
							item = this._arrayOfTopLevelItems[i];
							if (_4.isArray(item)) {
								_4f4 = true;
							}
							_4f8(item);
							item[this._rootItemPropName] = true;
						}
						var _4fe = {}, key;
						for (i = 0; i < this._arrayOfAllItems.length; ++i) {
							item = this._arrayOfAllItems[i];
							for (key in item) {
								if (key !== this._rootItemPropName) {
									var _4ff = item[key];
									if (_4ff !== null) {
										if (!_4.isArray(_4ff)) {
											item[key] = [_4ff];
										}
									} else {
										item[key] = [null];
									}
								}
								_4fe[key] = key;
							}
						}
						while (_4fe[this._storeRefPropName]) {
							this._storeRefPropName += "_";
						}
						while (_4fe[this._itemNumPropName]) {
							this._itemNumPropName += "_";
						}
						while (_4fe[this._reverseRefMap]) {
							this._reverseRefMap += "_";
						}
						var _500;
						var _501 = _4f3.identifier;
						if (_501) {
							this._itemsByIdentity = {};
							this._features["dojo.data.api.Identity"] = _501;
							for (i = 0; i < this._arrayOfAllItems.length; ++i) {
								item = this._arrayOfAllItems[i];
								_500 = item[_501];
								var _502 = _500[0];
								if (!Object.hasOwnProperty.call(this._itemsByIdentity, _502)) {
									this._itemsByIdentity[_502] = item;
								} else {
									if (this._jsonFileUrl) {
										throw new Error("dojo.data.ItemFileReadStore:  The json data as specified by: [" + this._jsonFileUrl + "] is malformed.  Items within the list have identifier: [" + _501 + "].  Value collided: [" + _502 + "]");
									} else {
										if (this._jsonData) {
											throw new Error("dojo.data.ItemFileReadStore:  The json data provided by the creation arguments is malformed.  Items within the list have identifier: [" + _501 + "].  Value collided: [" + _502 + "]");
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
								_500 = item[key];
								for (var j = 0; j < _500.length; ++j) {
									_4ff = _500[j];
									if (_4ff !== null && typeof _4ff == "object") {
										if (("_type" in _4ff) && ("_value" in _4ff)) {
											var type = _4ff._type;
											var _503 = this._datatypeMap[type];
											if (!_503) {
												throw new Error("dojo.data.ItemFileReadStore: in the typeMap constructor arg, no object class was specified for the datatype '" + type + "'");
											} else {
												if (_4.isFunction(_503)) {
													_500[j] = new _503(_4ff._value);
												} else {
													if (_4.isFunction(_503.deserialize)) {
														_500[j] = _503.deserialize(_4ff._value);
													} else {
														throw new Error("dojo.data.ItemFileReadStore: Value provided in typeMap was neither a constructor, nor a an object with a deserialize function");
													}
												}
											}
										}
										if (_4ff._reference) {
											var _504 = _4ff._reference;
											if (!_4.isObject(_504)) {
												_500[j] = this._getItemByIdentity(_504);
											} else {
												for (var k = 0; k < this._arrayOfAllItems.length; ++k) {
													var _505 = this._arrayOfAllItems[k],
															_506 = true;
													for (var _507 in _504) {
														if (_505[_507] != _504[_507]) {
															_506 = false;
														}
													}
													if (_506) {
														_500[j] = _505;
													}
												}
											}
											if (this.referenceIntegrity) {
												var _508 = _500[j];
												if (this.isItem(_508)) {
													this._addReferenceToMap(_508, item, key);
												}
											}
										} else {
											if (this.isItem(_4ff)) {
												if (this.referenceIntegrity) {
													this._addReferenceToMap(_4ff, item, key);
												}
											}
										}
									}
								}
							}
						}
					},
					_addReferenceToMap: function (_509, _50a, _50b) {
					},
					getIdentity: function (item) {
						var _50c = this._features["dojo.data.api.Identity"];
						if (_50c === Number) {
							return item[this._itemNumPropName];
						} else {
							var _50d = item[_50c];
							if (_50d) {
								return _50d[0];
							}
						}
						return null;
					},
					fetchItemByIdentity: function (_50e) {
						var item, _50f;
						if (!this._loadFinished) {
							var self = this;
							if (this._jsonFileUrl !== this._ccUrl) {
								_4.deprecated("dojo.data.ItemFileReadStore: ", "To change the url, set the url property of the store," + " not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
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
									this._queuedFetches.push({
										args: _50e
									});
								} else {
									this._loadInProgress = true;
									var _510 = {
										url: self._jsonFileUrl,
										handleAs: "json-comment-optional",
										preventCache: this.urlPreventCache,
										failOk: this.failOk
									};
									var _511 = _4.xhrGet(_510);
									_511.addCallback(function (data) {
										var _512 = _50e.scope ? _50e.scope : _4.global;
										try {
											self._getItemsFromLoadedData(data);
											self._loadFinished = true;
											self._loadInProgress = false;
											item = self._getItemByIdentity(_50e.identity);
											if (_50e.onItem) {
												_50e.onItem.call(_512, item);
											}
											self._handleQueuedFetches();
										} catch (error) {
											self._loadInProgress = false;
											if (_50e.onError) {
												_50e.onError.call(_512, error);
											}
										}
									});
									_511.addErrback(function (_513) {
										self._loadInProgress = false;
										if (_50e.onError) {
											var _514 = _50e.scope ? _50e.scope : _4.global;
											_50e.onError.call(_514, _513);
										}
									});
								}
							} else {
								if (this._jsonData) {
									self._getItemsFromLoadedData(self._jsonData);
									self._jsonData = null;
									self._loadFinished = true;
									item = self._getItemByIdentity(_50e.identity);
									if (_50e.onItem) {
										_50f = _50e.scope ? _50e.scope : _4.global;
										_50e.onItem.call(_50f, item);
									}
								}
							}
						} else {
							item = this._getItemByIdentity(_50e.identity);
							if (_50e.onItem) {
								_50f = _50e.scope ? _50e.scope : _4.global;
								_50e.onItem.call(_50f, item);
							}
						}
					},
					_getItemByIdentity: function (_515) {
						var item = null;
						if (this._itemsByIdentity && Object.hasOwnProperty.call(this._itemsByIdentity, _515)) {
							item = this._itemsByIdentity[_515];
						} else {
							if (Object.hasOwnProperty.call(this._arrayOfAllItems, _515)) {
								item = this._arrayOfAllItems[_515];
							}
						}
						if (item === undefined) {
							item = null;
						}
						return item;
					},
					getIdentityAttributes: function (item) {
						var _516 = this._features["dojo.data.api.Identity"];
						if (_516 === Number) {
							return null;
						} else {
							return [_516];
						}
					},
					_forceLoad: function () {
						var self = this;
						if (this._jsonFileUrl !== this._ccUrl) {
							_4.deprecated("dojo.data.ItemFileReadStore: ", "To change the url, set the url property of the store," + " not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");
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
							var _517 = {
								url: this._jsonFileUrl,
								handleAs: "json-comment-optional",
								preventCache: this.urlPreventCache,
								failOk: this.failOk,
								sync: true
							};
							var _518 = _4.xhrGet(_517);
							_518.addCallback(function (data) {
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
									console.log(e);
									throw e;
								}
							});
							_518.addErrback(function (_519) {
								throw _519;
							});
						} else {
							if (this._jsonData) {
								self._getItemsFromLoadedData(self._jsonData);
								self._jsonData = null;
								self._loadFinished = true;
							}
						}
					}
				});
				_4.extend(_4.data.ItemFileReadStore, _4.data.util.simpleFetch);
			}
			if (!_4._hasResource["dojo.store.util.QueryResults"]) {
				_4._hasResource["dojo.store.util.QueryResults"] = true;
				_4.provide("dojo.store.util.QueryResults");
				_4.getObject("store.util", true, _4);
				_4.store.util.QueryResults = function (_51a) {
					if (!_51a) {
						return _51a;
					}
					if (_51a.then) {
						_51a = _4.delegate(_51a);
					}

					function _51b(_51c) {
						if (!_51a[_51c]) {
							_51a[_51c] = function () {
								var args = arguments;
								return _4.when(_51a, function (_51d) {
									Array.prototype.unshift.call(args, _51d);
									return _4.store.util.QueryResults(_4[_51c].apply(_4, args));
								});
							};
						}
					};
					_51b("forEach");
					_51b("filter");
					_51b("map");
					if (!_51a.total) {
						_51a.total = _4.when(_51a, function (_51e) {
							return _51e.length;
						});
					}
					return _51a;
				};
			}
			if (!_4._hasResource["dojo.store.util.SimpleQueryEngine"]) {
				_4._hasResource["dojo.store.util.SimpleQueryEngine"] = true;
				_4.provide("dojo.store.util.SimpleQueryEngine");
				_4.getObject("store.util", true, _4);
				_4.store.util.SimpleQueryEngine = function (_51f, _520) {
					switch (typeof _51f) {
						default:
							throw new Error("Can not query with a " + typeof _51f);
						case "object":
						case "undefined":
							var _521 = _51f;
							_51f = function (_522) {
								for (var key in _521) {
									var _523 = _521[key];
									if (_523 && _523.test) {
										if (!_523.test(_522[key])) {
											return false;
										}
									} else {
										if (_523 != _522[key]) {
											return false;
										}
									}
								}
								return true;
							};
							break;
						case "string":
							if (!this[_51f]) {
								throw new Error("No filter function " + _51f + " was found in store");
							}
							_51f = this[_51f];
						case "function":
					}

					function _524(_525) {
						var _526 = _4.filter(_525, _51f);
						if (_520 && _520.sort) {
							_526.sort(function (a, b) {
								for (var sort, i = 0; sort = _520.sort[i]; i++) {
									var _527 = a[sort.attribute];
									var _528 = b[sort.attribute];
									if (_527 != _528) {
										return !!sort.descending == _527 > _528 ? -1 : 1;
									}
								}
								return 0;
							});
						}
						if (_520 && (_520.start || _520.count)) {
							var _529 = _526.length;
							_526 = _526.slice(_520.start || 0, (_520.start || 0) + (_520.count || Infinity));
							_526.total = _529;
						}
						return _526;
					};
					_524.matches = _51f;
					return _524;
				};
			}
			if (!_4._hasResource["dojo.store.Memory"]) {
				_4._hasResource["dojo.store.Memory"] = true;
				_4.provide("dojo.store.Memory");
				_4.declare("dojo.store.Memory", null, {
					constructor: function (_52a) {
						this.index = {};
						_4.mixin(this, _52a);
						this.setData(this.data || []);
					},
					data: null,
					idProperty: "id",
					index: null,
					queryEngine: _4.store.util.SimpleQueryEngine,
					get: function (id) {
						return this.index[id];
					},
					getIdentity: function (_52b) {
						return _52b[this.idProperty];
					},
					put: function (_52c, _52d) {
						var id = _52d && _52d.id || _52c[this.idProperty] || Math.random();
						this.index[id] = _52c;
						var data = this.data,
								_52e = this.idProperty;
						for (var i = 0, l = data.length; i < l; i++) {
							if (data[i][_52e] == id) {
								data[i] = _52c;
								return id;
							}
						}
						this.data.push(_52c);
						return id;
					},
					add: function (_52f, _530) {
						if (this.index[_530 && _530.id || _52f[this.idProperty]]) {
							throw new Error("Object already exists");
						}
						return this.put(_52f, _530);
					},
					remove: function (id) {
						delete this.index[id];
						var data = this.data,
								_531 = this.idProperty;
						for (var i = 0, l = data.length; i < l; i++) {
							if (data[i][_531] == id) {
								data.splice(i, 1);
								return;
							}
						}
					},
					query: function (_532, _533) {
						return _4.store.util.QueryResults(this.queryEngine(_532, _533)(this.data));
					},
					setData: function (data) {
						if (data.items) {
							this.idProperty = data.identifier;
							data = this.data = data.items;
						} else {
							this.data = data;
						}
						for (var i = 0, l = data.length; i < l; i++) {
							var _534 = data[i];
							this.index[_534[this.idProperty]] = _534;
						}
					}
				});
			}
			if (!_4._hasResource["dojo.data.ObjectStore"]) {
				_4._hasResource["dojo.data.ObjectStore"] = true;
				_4.provide("dojo.data.ObjectStore");
				_4.declare("dojo.data.ObjectStore", null, {
					objectStore: null,
					constructor: function (_535) {
						_4.mixin(this, _535);
					},
					labelProperty: "label",
					getValue: function (item, _536, _537) {
						return typeof item.get === "function" ? item.get(_536) : _536 in item ? item[_536] : _537;
					},
					getValues: function (item, _538) {
						var val = this.getValue(item, _538);
						return val instanceof Array ? val : val === undefined ? [] : [val];
					},
					getAttributes: function (item) {
						var res = [];
						for (var i in item) {
							if (item.hasOwnProperty(i) && !(i.charAt(0) == "_" && i.charAt(1) == "_")) {
								res.push(i);
							}
						}
						return res;
					},
					hasAttribute: function (item, _539) {
						return _539 in item;
					},
					containsValue: function (item, _53a, _53b) {
						return _4.indexOf(this.getValues(item, _53a), _53b) > -1;
					},
					isItem: function (item) {
						return (typeof item == "object") && item && !(item instanceof Date);
					},
					isItemLoaded: function (item) {
						return item && typeof item.load !== "function";
					},
					loadItem: function (args) {
						var item;
						if (typeof args.item.load === "function") {
							_4.when(args.item.load(), function (_53c) {
								item = _53c;
								var func = _53c instanceof Error ? args.onError : args.onItem;
								if (func) {
									func.call(args.scope, _53c);
								}
							});
						} else {
							if (args.onItem) {
								args.onItem.call(args.scope, args.item);
							}
						}
						return item;
					},
					close: function (_53d) {
						return _53d && _53d.abort && _53d.abort();
					},
					fetch: function (args) {
						args = args || {};
						var self = this;
						var _53e = args.scope || self;
						var _53f = args.query;
						if (typeof _53f == "object") {
							_53f = _4.delegate(_53f);
							for (var i in _53f) {
								var _540 = _53f[i];
								if (typeof _540 == "string") {
									_53f[i] = RegExp("^" + _4.regexp.escapeString(_540, "*?").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", args.queryOptions && args.queryOptions.ignoreCase ? "mi" : "m");
									_53f[i].toString = (function (_541) {
										return function () {
											return _541;
										};
									})(_540);
								}
							}
						}
						var _542 = this.objectStore.query(_53f, args);
						_4.when(_542.total, function (_543) {
							_4.when(_542, function (_544) {
								if (args.onBegin) {
									args.onBegin.call(_53e, _543 || _544.length, args);
								}
								if (args.onItem) {
									for (var i = 0; i < _544.length; i++) {
										args.onItem.call(_53e, _544[i], args);
									}
								}
								if (args.onComplete) {
									args.onComplete.call(_53e, args.onItem ? null : _544, args);
								}
								return _544;
							}, _545);
						}, _545);

						function _545(_546) {
							if (args.onError) {
								args.onError.call(_53e, _546, args);
							}
						};
						args.abort = function () {
							if (_542.cancel) {
								_542.cancel();
							}
						};
						args.store = this;
						return args;
					},
					getFeatures: function () {
						return {
							"dojo.data.api.Read": !!this.objectStore.get,
							"dojo.data.api.Identity": true,
							"dojo.data.api.Write": !!this.objectStore.put,
							"dojo.data.api.Notification": true
						};
					},
					getLabel: function (item) {
						if (this.isItem(item)) {
							return this.getValue(item, this.labelProperty);
						}
						return undefined;
					},
					getLabelAttributes: function (item) {
						return [this.labelProperty];
					},
					getIdentity: function (item) {
						return item.getId ? item.getId() : item[this.objectStore.idProperty || "id"];
					},
					getIdentityAttributes: function (item) {
						return [this.objectStore.idProperty];
					},
					fetchItemByIdentity: function (args) {
						var item;
						_4.when(this.objectStore.get(args.identity), function (_547) {
							item = _547;
							args.onItem.call(args.scope, _547);
						}, function (_548) {
							args.onError.call(args.scope, _548);
						});
						return item;
					},
					newItem: function (data, _549) {
						if (_549) {
							var _54a = this.getValue(_549.parent, _549.attribute, []);
							_54a = _54a.concat([data]);
							data.__parent = _54a;
							this.setValue(_549.parent, _549.attribute, _54a);
						}
						this._dirtyObjects.push({
							object: data,
							save: true
						});
						this.onNew(data);
						return data;
					},
					deleteItem: function (item) {
						this.changing(item, true);
						this.onDelete(item);
					},
					setValue: function (item, _54b, _54c) {
						var old = item[_54b];
						this.changing(item);
						item[_54b] = _54c;
						this.onSet(item, _54b, old, _54c);
					},
					setValues: function (item, _54d, _54e) {
						if (!_4.isArray(_54e)) {
							throw new Error("setValues expects to be passed an Array object as its value");
						}
						this.setValue(item, _54d, _54e);
					},
					unsetAttribute: function (item, _54f) {
						this.changing(item);
						var old = item[_54f];
						delete item[_54f];
						this.onSet(item, _54f, old, undefined);
					},
					_dirtyObjects: [],
					changing: function (_550, _551) {
						_550.__isDirty = true;
						for (var i = 0; i < this._dirtyObjects.length; i++) {
							var _552 = this._dirtyObjects[i];
							if (_550 == _552.object) {
								if (_551) {
									_552.object = false;
									if (!this._saveNotNeeded) {
										_552.save = true;
									}
								}
								return;
							}
						}
						var old = _550 instanceof Array ? [] : {};
						for (i in _550) {
							if (_550.hasOwnProperty(i)) {
								old[i] = _550[i];
							}
						}
						this._dirtyObjects.push({
							object: !_551 && _550,
							old: old,
							save: !this._saveNotNeeded
						});
					},
					save: function (_553) {
						_553 = _553 || {};
						var _554, _555 = [];
						var _556 = {};
						var _557 = [];
						var self;
						var _558 = this._dirtyObjects;
						var left = _558.length;
						try {
							_4.connect(_553, "onError", function () {
								if (_553.revertOnError !== false) {
									var _559 = _558;
									_558 = _557;
									var _55a = 0;
									jr.revert();
									self._dirtyObjects = _559;
								} else {
									self._dirtyObjects = dirtyObject.concat(_557);
								}
							});
							if (this.objectStore.transaction) {
								var _55b = this.objectStore.transaction();
							}
							for (var i = 0; i < _558.length; i++) {
								var _55c = _558[i];
								var _55d = _55c.object;
								var old = _55c.old;
								delete _55d.__isDirty;
								if (_55d) {
									_554 = this.objectStore.put(_55d, {
										overwrite: !!old
									});
								} else {
									_554 = this.objectStore.remove(this.getIdentity(old));
								}
								_557.push(_55c);
								_558.splice(i--, 1);
								_4.when(_554, function (_55e) {
									if (!(--left)) {
										if (_553.onComplete) {
											_553.onComplete.call(_553.scope, _555);
										}
									}
								}, function (_55f) {
									left = -1;
									_553.onError.call(_553.scope, _55f);
								});
							}
							if (_55b) {
								_55b.commit();
							}
						} catch (e) {
							_553.onError.call(_553.scope, value);
						}
					},
					revert: function (_560) {
						var _561 = this._dirtyObjects;
						for (var i = _561.length; i > 0;) {
							i--;
							var _562 = _561[i];
							var _563 = _562.object;
							var old = _562.old;
							if (_563 && old) {
								for (var j in old) {
									if (old.hasOwnProperty(j) && _563[j] !== old[j]) {
										this.onSet(_563, j, _563[j], old[j]);
										_563[j] = old[j];
									}
								}
								for (j in _563) {
									if (!old.hasOwnProperty(j)) {
										this.onSet(_563, j, _563[j]);
										delete _563[j];
									}
								}
							} else {
								if (!old) {
									this.onDelete(_563);
								} else {
									this.onNew(old);
								}
							}
							delete(_563 || old).__isDirty;
							_561.splice(i, 1);
						}
					},
					isDirty: function (item) {
						if (!item) {
							return !!this._dirtyObjects.length;
						}
						return item.__isDirty;
					},
					onSet: function () {
					},
					onNew: function () {
					},
					onDelete: function () {
					}
				});
			}
			if (!_4._hasResource["dijit.tree.TreeStoreModel"]) {
				_4._hasResource["dijit.tree.TreeStoreModel"] = true;
				_4.provide("dijit.tree.TreeStoreModel");
				_4.declare("dijit.tree.TreeStoreModel", null, {
					store: null,
					childrenAttrs: ["children"],
					newItemIdAttr: "id",
					labelAttr: "",
					root: null,
					query: null,
					deferItemLoadingUntilExpand: false,
					constructor: function (args) {
						_4.mixin(this, args);
						this.connects = [];
						var _564 = this.store;
						if (!_564.getFeatures()["dojo.data.api.Identity"]) {
							throw new Error("dijit.Tree: store must support dojo.data.Identity");
						}
						if (_564.getFeatures()["dojo.data.api.Notification"]) {
							this.connects = this.connects.concat([_4.connect(_564, "onNew", this, "onNewItem"), _4.connect(_564, "onDelete", this, "onDeleteItem"), _4.connect(_564, "onSet", this, "onSetItem")]);
						}
					},
					destroy: function () {
						_4.forEach(this.connects, _4.disconnect);
					},
					getRoot: function (_565, _566) {
						if (this.root) {
							_565(this.root);
						} else {
							this.store.fetch({
								query: this.query,
								onComplete: _4.hitch(this, function (_567) {
									if (_567.length != 1) {
										throw new Error(this.declaredClass + ": query " + _4.toJson(this.query) + " returned " + _567.length + " items, but must return exactly one item");
									}
									this.root = _567[0];
									_565(this.root);
								}),
								onError: _566
							});
						}
					},
					mayHaveChildren: function (item) {
						return _4.some(this.childrenAttrs, function (attr) {
							return this.store.hasAttribute(item, attr);
						}, this);
					},
					getChildren: function (_568, _569, _56a) {
						var _56b = this.store;
						if (!_56b.isItemLoaded(_568)) {
							var _56c = _4.hitch(this, arguments.callee);
							_56b.loadItem({
								item: _568,
								onItem: function (_56d) {
									_56c(_56d, _569, _56a);
								},
								onError: _56a
							});
							return;
						}
						var _56e = [];
						for (var i = 0; i < this.childrenAttrs.length; i++) {
							var vals = _56b.getValues(_568, this.childrenAttrs[i]);
							_56e = _56e.concat(vals);
						}
						var _56f = 0;
						if (!this.deferItemLoadingUntilExpand) {
							_4.forEach(_56e, function (item) {
								if (!_56b.isItemLoaded(item)) {
									_56f++;
								}
							});
						}
						if (_56f == 0) {
							_569(_56e);
						} else {
							_4.forEach(_56e, function (item, idx) {
								if (!_56b.isItemLoaded(item)) {
									_56b.loadItem({
										item: item,
										onItem: function (item) {
											_56e[idx] = item;
											if (--_56f == 0) {
												_569(_56e);
											}
										},
										onError: _56a
									});
								}
							});
						}
					},
					isItem: function (_570) {
						return this.store.isItem(_570);
					},
					fetchItemByIdentity: function (_571) {
						this.store.fetchItemByIdentity(_571);
					},
					getIdentity: function (item) {
						return this.store.getIdentity(item);
					},
					getLabel: function (item) {
						if (this.labelAttr) {
							return this.store.getValue(item, this.labelAttr);
						} else {
							return this.store.getLabel(item);
						}
					},
					newItem: function (args, _572, _573) {
						var _574 = {
							parent: _572,
							attribute: this.childrenAttrs[0]
						}, _575;
						if (this.newItemIdAttr && args[this.newItemIdAttr]) {
							this.fetchItemByIdentity({
								identity: args[this.newItemIdAttr],
								scope: this,
								onItem: function (item) {
									if (item) {
										this.pasteItem(item, null, _572, true, _573);
									} else {
										_575 = this.store.newItem(args, _574);
										if (_575 && (_573 != undefined)) {
											this.pasteItem(_575, _572, _572, false, _573);
										}
									}
								}
							});
						} else {
							_575 = this.store.newItem(args, _574);
							if (_575 && (_573 != undefined)) {
								this.pasteItem(_575, _572, _572, false, _573);
							}
						}
					},
					pasteItem: function (_576, _577, _578, _579, _57a) {
						var _57b = this.store,
								_57c = this.childrenAttrs[0];
						if (_577) {
							_4.forEach(this.childrenAttrs, function (attr) {
								if (_57b.containsValue(_577, attr, _576)) {
									if (!_579) {
										var _57d = _4.filter(_57b.getValues(_577, attr), function (x) {
											return x != _576;
										});
										_57b.setValues(_577, attr, _57d);
									}
									_57c = attr;
								}
							});
						}
						if (_578) {
							if (typeof _57a == "number") {
								var _57e = _57b.getValues(_578, _57c).slice();
								_57e.splice(_57a, 0, _576);
								_57b.setValues(_578, _57c, _57e);
							} else {
								_57b.setValues(_578, _57c, _57b.getValues(_578, _57c).concat(_576));
							}
						}
					},
					onChange: function (item) {
					},
					onChildrenChange: function (_57f, _580) {
					},
					onDelete: function (_581, _582) {
					},
					onNewItem: function (item, _583) {
						if (!_583) {
							return;
						}
						this.getChildren(_583.item, _4.hitch(this, function (_584) {
							this.onChildrenChange(_583.item, _584);
						}));
					},
					onDeleteItem: function (item) {
						this.onDelete(item);
					},
					onSetItem: function (item, _585, _586, _587) {
						if (_4.indexOf(this.childrenAttrs, _585) != -1) {
							this.getChildren(item, _4.hitch(this, function (_588) {
								this.onChildrenChange(item, _588);
							}));
						} else {
							this.onChange(item);
						}
					}
				});
			}
			if (!_4._hasResource["dijit.tree._dndContainer"]) {
				_4._hasResource["dijit.tree._dndContainer"] = true;
				_4.provide("dijit.tree._dndContainer");
				_4.getObject("tree", true, _4);
				_5.tree._compareNodes = function (n1, n2) {
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
				_4.declare("dijit.tree._dndContainer", null, {
					constructor: function (tree, _589) {
						this.tree = tree;
						this.node = tree.domNode;
						_4.mixin(this, _589);
						this.map = {};
						this.current = null;
						this.containerState = "";
						_4.addClass(this.node, "dojoDndContainer");
						this.events = [_4.connect(this.node, "onmouseenter", this, "onOverEvent"), _4.connect(this.node, "onmouseleave", this, "onOutEvent"), _4.connect(this.tree, "_onNodeMouseEnter", this, "onMouseOver"), _4.connect(this.tree, "_onNodeMouseLeave", this, "onMouseOut"), _4.connect(this.node, "ondragstart", _4, "stopEvent"), _4.connect(this.node, "onselectstart", _4, "stopEvent")];
					},
					getItem: function (key) {
						var _58a = this.selection[key],
								ret = {
									data: _58a,
									type: ["treeNode"]
								};
						return ret;
					},
					destroy: function () {
						_4.forEach(this.events, _4.disconnect);
						this.node = this.parent = null;
					},
					onMouseOver: function (_58b, evt) {
						this.current = _58b;
					},
					onMouseOut: function (_58c, evt) {
						this.current = null;
					},
					_changeState: function (type, _58d) {
						var _58e = "dojoDnd" + type;
						var _58f = type.toLowerCase() + "State";
						_4.replaceClass(this.node, _58e + _58d, _58e + this[_58f]);
						this[_58f] = _58d;
					},
					_addItemClass: function (node, type) {
						_4.addClass(node, "dojoDndItem" + type);
					},
					_removeItemClass: function (node, type) {
						_4.removeClass(node, "dojoDndItem" + type);
					},
					onOverEvent: function () {
						this._changeState("Container", "Over");
					},
					onOutEvent: function () {
						this._changeState("Container", "");
					}
				});
			}
			if (!_4._hasResource["dijit.tree._dndSelector"]) {
				_4._hasResource["dijit.tree._dndSelector"] = true;
				_4.provide("dijit.tree._dndSelector");
				_4.declare("dijit.tree._dndSelector", _5.tree._dndContainer, {
					constructor: function (tree, _590) {
						this.selection = {};
						this.anchor = null;
						_5.setWaiState(this.tree.domNode, "multiselect", !this.singular);
						this.events.push(_4.connect(this.tree.domNode, "onmousedown", this, "onMouseDown"), _4.connect(this.tree.domNode, "onmouseup", this, "onMouseUp"), _4.connect(this.tree.domNode, "onmousemove", this, "onMouseMove"));
					},
					singular: false,
					getSelectedTreeNodes: function () {
						var _591 = [],
								sel = this.selection;
						for (var i in sel) {
							_591.push(sel[i]);
						}
						return _591;
					},
					selectNone: function () {
						this.setSelection([]);
						return this;
					},
					destroy: function () {
						this.inherited(arguments);
						this.selection = this.anchor = null;
					},
					addTreeNode: function (node, _592) {
						this.setSelection(this.getSelectedTreeNodes().concat([node]));
						if (_592) {
							this.anchor = node;
						}
						return node;
					},
					removeTreeNode: function (node) {
						this.setSelection(this._setDifference(this.getSelectedTreeNodes(), [node]));
						return node;
					},
					isTreeNodeSelected: function (node) {
						return node.id && !!this.selection[node.id];
					},
					setSelection: function (_593) {
						var _594 = this.getSelectedTreeNodes();
						_4.forEach(this._setDifference(_594, _593), _4.hitch(this, function (node) {
							node.setSelected(false);
							if (this.anchor == node) {
								delete this.anchor;
							}
							delete this.selection[node.id];
						}));
						_4.forEach(this._setDifference(_593, _594), _4.hitch(this, function (node) {
							node.setSelected(true);
							this.selection[node.id] = node;
						}));
						this._updateSelectionProperties();
					},
					_setDifference: function (xs, ys) {
						_4.forEach(ys, function (y) {
							y.__exclude__ = true;
						});
						var ret = _4.filter(xs, function (x) {
							return !x.__exclude__;
						});
						_4.forEach(ys, function (y) {
							delete y["__exclude__"];
						});
						return ret;
					},
					_updateSelectionProperties: function () {
						var _595 = this.getSelectedTreeNodes();
						var _596 = [],
								_597 = [];
						_4.forEach(_595, function (node) {
							_597.push(node);
							_596.push(node.getTreePath());
						});
						var _598 = _4.map(_597, function (node) {
							return node.item;
						});
						this.tree._set("paths", _596);
						this.tree._set("path", _596[0] || []);
						this.tree._set("selectedNodes", _597);
						this.tree._set("selectedNode", _597[0] || null);
						this.tree._set("selectedItems", _598);
						this.tree._set("selectedItem", _598[0] || null);
					},
					onMouseDown: function (e) {
						if (!this.current || this.tree.isExpandoNode(e.target, this.current)) {
							return;
						}
						if (e.button == _4.mouseButtons.RIGHT) {
							return;
						}
						_4.stopEvent(e);
						var _599 = this.current,
								copy = _4.isCopyKey(e),
								id = _599.id;
						if (!this.singular && !e.shiftKey && this.selection[id]) {
							this._doDeselect = true;
							return;
						} else {
							this._doDeselect = false;
						}
						this.userSelect(_599, copy, e.shiftKey);
					},
					onMouseUp: function (e) {
						if (!this._doDeselect) {
							return;
						}
						this._doDeselect = false;
						this.userSelect(this.current, _4.isCopyKey(e), e.shiftKey);
					},
					onMouseMove: function (e) {
						this._doDeselect = false;
					},
					userSelect: function (node, _59a, _59b) {
						if (this.singular) {
							if (this.anchor == node && _59a) {
								this.selectNone();
							} else {
								this.setSelection([node]);
								this.anchor = node;
							}
						} else {
							if (_59b && this.anchor) {
								var cr = _5.tree._compareNodes(this.anchor.rowNode, node.rowNode),
										_59c, end, _59d = this.anchor;
								if (cr < 0) {
									_59c = _59d;
									end = node;
								} else {
									_59c = node;
									end = _59d;
								}
								nodes = [];
								while (_59c != end) {
									nodes.push(_59c);
									_59c = this.tree._getNextNode(_59c);
								}
								nodes.push(end);
								this.setSelection(nodes);
							} else {
								if (this.selection[node.id] && _59a) {
									this.removeTreeNode(node);
								} else {
									if (_59a) {
										this.addTreeNode(node, true);
									} else {
										this.setSelection([node]);
										this.anchor = node;
									}
								}
							}
						}
					},
					forInSelectedItems: function (f, o) {
						o = o || _4.global;
						for (var id in this.selection) {
							f.call(o, this.getItem(id), id, this);
						}
					}
				});
			}
			if (!_4._hasResource["dijit.tree.dndSource"]) {
				_4._hasResource["dijit.tree.dndSource"] = true;
				_4.provide("dijit.tree.dndSource");
				_4.declare("dijit.tree.dndSource", _5.tree._dndSelector, {
					isSource: true,
					accept: ["text", "treeNode"],
					copyOnly: false,
					dragThreshold: 5,
					betweenThreshold: 0,
					constructor: function (tree, _59e) {
						if (!_59e) {
							_59e = {};
						}
						_4.mixin(this, _59e);
						this.isSource = typeof _59e.isSource == "undefined" ? true : _59e.isSource;
						var type = _59e.accept instanceof Array ? _59e.accept : ["text", "treeNode"];
						this.accept = null;
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
						this.dropPosition = "";
						this._lastX = 0;
						this._lastY = 0;
						this.sourceState = "";
						if (this.isSource) {
							_4.addClass(this.node, "dojoDndSource");
						}
						this.targetState = "";
						if (this.accept) {
							_4.addClass(this.node, "dojoDndTarget");
						}
						this.topics = [_4.subscribe("/dnd/source/over", this, "onDndSourceOver"), _4.subscribe("/dnd/start", this, "onDndStart"), _4.subscribe("/dnd/drop", this, "onDndDrop"), _4.subscribe("/dnd/cancel", this, "onDndCancel")];
					},
					checkAcceptance: function (_59f, _5a0) {
						return true;
					},
					copyState: function (_5a1) {
						return this.copyOnly || _5a1;
					},
					destroy: function () {
						this.inherited("destroy", arguments);
						_4.forEach(this.topics, _4.unsubscribe);
						this.targetAnchor = null;
					},
					_onDragMouse: function (e) {
						var m = _4.dnd.manager(),
								_5a2 = this.targetAnchor,
								_5a3 = this.current,
								_5a4 = this.dropPosition;
						var _5a5 = "Over";
						if (_5a3 && this.betweenThreshold > 0) {
							if (!this.targetBox || _5a2 != _5a3) {
								this.targetBox = _4.position(_5a3.rowNode, true);
							}
							if ((e.pageY - this.targetBox.y) <= this.betweenThreshold) {
								_5a5 = "Before";
							} else {
								if ((e.pageY - this.targetBox.y) >= (this.targetBox.h - this.betweenThreshold)) {
									_5a5 = "After";
								}
							}
						}
						if (_5a3 != _5a2 || _5a5 != _5a4) {
							if (_5a2) {
								this._removeItemClass(_5a2.rowNode, _5a4);
							}
							if (_5a3) {
								this._addItemClass(_5a3.rowNode, _5a5);
							}
							if (!_5a3) {
								m.canDrop(false);
							} else {
								if (_5a3 == this.tree.rootNode && _5a5 != "Over") {
									m.canDrop(false);
								} else {
									if (m.source == this && (_5a3.id in this.selection)) {
										m.canDrop(false);
									} else {
										if (this.checkItemAcceptance(_5a3.rowNode, m.source, _5a5.toLowerCase()) && !this._isParentChildDrop(m.source, _5a3.rowNode)) {
											m.canDrop(true);
										} else {
											m.canDrop(false);
										}
									}
								}
							}
							this.targetAnchor = _5a3;
							this.dropPosition = _5a5;
						}
					},
					onMouseMove: function (e) {
						if (this.isDragging && this.targetState == "Disabled") {
							return;
						}
						this.inherited(arguments);
						var m = _4.dnd.manager();
						if (this.isDragging) {
							this._onDragMouse(e);
						} else {
							if (this.mouseDown && this.isSource && (Math.abs(e.pageX - this._lastX) >= this.dragThreshold || Math.abs(e.pageY - this._lastY) >= this.dragThreshold)) {
								var _5a6 = this.getSelectedTreeNodes();
								if (_5a6.length) {
									if (_5a6.length > 1) {
										var seen = this.selection,
												i = 0,
												r = [],
												n, p;
										nextitem: while ((n = _5a6[i++])) {
											for (p = n.getParent(); p && p !== this.tree; p = p.getParent()) {
												if (seen[p.id]) {
													continue nextitem;
												}
											}
											r.push(n);
										}
										_5a6 = r;
									}
									_5a6 = _4.map(_5a6, function (n) {
										return n.domNode;
									});
									m.startDrag(this, _5a6, this.copyState(_4.isCopyKey(e)));
								}
							}
						}
					},
					onMouseDown: function (e) {
						this.mouseDown = true;
						this.mouseButton = e.button;
						this._lastX = e.pageX;
						this._lastY = e.pageY;
						this.inherited(arguments);
					},
					onMouseUp: function (e) {
						if (this.mouseDown) {
							this.mouseDown = false;
							this.inherited(arguments);
						}
					},
					onMouseOut: function () {
						this.inherited(arguments);
						this._unmarkTargetAnchor();
					},
					checkItemAcceptance: function (_5a7, _5a8, _5a9) {
						return true;
					},
					onDndSourceOver: function (_5aa) {
						if (this != _5aa) {
							this.mouseDown = false;
							this._unmarkTargetAnchor();
						} else {
							if (this.isDragging) {
								var m = _4.dnd.manager();
								m.canDrop(false);
							}
						}
					},
					onDndStart: function (_5ab, _5ac, copy) {
						if (this.isSource) {
							this._changeState("Source", this == _5ab ? (copy ? "Copied" : "Moved") : "");
						}
						var _5ad = this.checkAcceptance(_5ab, _5ac);
						this._changeState("Target", _5ad ? "" : "Disabled");
						if (this == _5ab) {
							_4.dnd.manager().overSource(this);
						}
						this.isDragging = true;
					},
					itemCreator: function (_5ae, _5af, _5b0) {
						return _4.map(_5ae, function (node) {
							return {
								"id": node.id,
								"name": node.textContent || node.innerText || ""
							};
						});
					},
					onDndDrop: function (_5b1, _5b2, copy) {
						if (this.containerState == "Over") {
							var tree = this.tree,
									_5b3 = tree.model,
									_5b4 = this.targetAnchor,
									_5b5 = false;
							this.isDragging = false;
							var _5b6 = _5b4;
							var _5b7;
							var _5b8;
							_5b7 = (_5b6 && _5b6.item) || tree.item;
							if (this.dropPosition == "Before" || this.dropPosition == "After") {
								_5b7 = (_5b6.getParent() && _5b6.getParent().item) || tree.item;
								_5b8 = _5b6.getIndexInParent();
								if (this.dropPosition == "After") {
									_5b8 = _5b6.getIndexInParent() + 1;
								}
							} else {
								_5b7 = (_5b6 && _5b6.item) || tree.item;
							}
							var _5b9;
							_4.forEach(_5b2, function (node, idx) {
								var _5ba = _5b1.getItem(node.id);
								if (_4.indexOf(_5ba.type, "treeNode") != -1) {
									var _5bb = _5ba.data,
											_5bc = _5bb.item,
											_5bd = _5bb.getParent().item;
								}
								if (_5b1 == this) {
									if (typeof _5b8 == "number") {
										if (_5b7 == _5bd && _5bb.getIndexInParent() < _5b8) {
											_5b8 -= 1;
										}
									}
									_5b3.pasteItem(_5bc, _5bd, _5b7, copy, _5b8);
								} else {
									if (_5b3.isItem(_5bc)) {
										_5b3.pasteItem(_5bc, _5bd, _5b7, copy, _5b8);
									} else {
										if (!_5b9) {
											_5b9 = this.itemCreator(_5b2, _5b4.rowNode, _5b1);
										}
										_5b3.newItem(_5b9[idx], _5b7, _5b8);
									}
								}
							}, this);
							this.tree._expandNode(_5b6);
						}
						this.onDndCancel();
					},
					onDndCancel: function () {
						this._unmarkTargetAnchor();
						this.isDragging = false;
						this.mouseDown = false;
						delete this.mouseButton;
						this._changeState("Source", "");
						this._changeState("Target", "");
					},
					onOverEvent: function () {
						this.inherited(arguments);
						_4.dnd.manager().overSource(this);
					},
					onOutEvent: function () {
						this._unmarkTargetAnchor();
						var m = _4.dnd.manager();
						if (this.isDragging) {
							m.canDrop(false);
						}
						m.outSource(this);
						this.inherited(arguments);
					},
					_isParentChildDrop: function (_5be, _5bf) {
						if (!_5be.tree || _5be.tree != this.tree) {
							return false;
						}
						var root = _5be.tree.domNode;
						var ids = _5be.selection;
						var node = _5bf.parentNode;
						while (node != root && !ids[node.id]) {
							node = node.parentNode;
						}
						return node.id && ids[node.id];
					},
					_unmarkTargetAnchor: function () {
						if (!this.targetAnchor) {
							return;
						}
						this._removeItemClass(this.targetAnchor.rowNode, this.dropPosition);
						this.targetAnchor = null;
						this.targetBox = null;
						this.dropPosition = null;
					},
					_markDndStatus: function (copy) {
						this._changeState("Source", copy ? "Copied" : "Moved");
					}
				});
			}
			if (!_4._hasResource["dojo.DeferredList"]) {
				_4._hasResource["dojo.DeferredList"] = true;
				_4.provide("dojo.DeferredList");
				_4.DeferredList = function (list, _5c0, _5c1, _5c2, _5c3) {
					var _5c4 = [];
					_4.Deferred.call(this);
					var self = this;
					if (list.length === 0 && !_5c0) {
						this.resolve([0, []]);
					}
					var _5c5 = 0;
					_4.forEach(list, function (item, i) {
						item.then(function (_5c6) {
							if (_5c0) {
								self.resolve([i, _5c6]);
							} else {
								_5c7(true, _5c6);
							}
						}, function (_5c8) {
							if (_5c1) {
								self.reject(_5c8);
							} else {
								_5c7(false, _5c8);
							}
							if (_5c2) {
								return null;
							}
							throw _5c8;
						});

						function _5c7(_5c9, _5ca) {
							_5c4[i] = [_5c9, _5ca];
							_5c5++;
							if (_5c5 === list.length) {
								self.resolve(_5c4);
							}
						};
					});
				};
				_4.DeferredList.prototype = new _4.Deferred();
				_4.DeferredList.prototype.gatherResults = function (_5cb) {
					var d = new _4.DeferredList(_5cb, false, true, false);
					d.addCallback(function (_5cc) {
						var ret = [];
						_4.forEach(_5cc, function (_5cd) {
							ret.push(_5cd[1]);
						});
						return ret;
					});
					return d;
				};
			}
			if (!_4._hasResource["dijit.tree.ForestStoreModel"]) {
				_4._hasResource["dijit.tree.ForestStoreModel"] = true;
				_4.provide("dijit.tree.ForestStoreModel");
				_4.declare("dijit.tree.ForestStoreModel", _5.tree.TreeStoreModel, {
					rootId: "$root$",
					rootLabel: "ROOT",
					query: null,
					constructor: function (_5ce) {
						this.root = {
							store: this,
							root: true,
							id: _5ce.rootId,
							label: _5ce.rootLabel,
							children: _5ce.rootChildren
						};
					},
					mayHaveChildren: function (item) {
						return item === this.root || this.inherited(arguments);
					},
					getChildren: function (_5cf, _5d0, _5d1) {
						if (_5cf === this.root) {
							if (this.root.children) {
								_5d0(this.root.children);
							} else {
								this.store.fetch({
									query: this.query,
									onComplete: _4.hitch(this, function (_5d2) {
										this.root.children = _5d2;
										_5d0(_5d2);
									}),
									onError: _5d1
								});
							}
						} else {
							this.inherited(arguments);
						}
					},
					isItem: function (_5d3) {
						return (_5d3 === this.root) ? true : this.inherited(arguments);
					},
					fetchItemByIdentity: function (_5d4) {
						if (_5d4.identity == this.root.id) {
							var _5d5 = _5d4.scope ? _5d4.scope : _4.global;
							if (_5d4.onItem) {
								_5d4.onItem.call(_5d5, this.root);
							}
						} else {
							this.inherited(arguments);
						}
					},
					getIdentity: function (item) {
						return (item === this.root) ? this.root.id : this.inherited(arguments);
					},
					getLabel: function (item) {
						return (item === this.root) ? this.root.label : this.inherited(arguments);
					},
					newItem: function (args, _5d6, _5d7) {
						if (_5d6 === this.root) {
							this.onNewRootItem(args);
							return this.store.newItem(args);
						} else {
							return this.inherited(arguments);
						}
					},
					onNewRootItem: function (args) {
					},
					pasteItem: function (_5d8, _5d9, _5da, _5db, _5dc) {
						if (_5d9 === this.root) {
							if (!_5db) {
								this.onLeaveRoot(_5d8);
							}
						}
						_5.tree.TreeStoreModel.prototype.pasteItem.call(this, _5d8, _5d9 === this.root ? null : _5d9, _5da === this.root ? null : _5da, _5db, _5dc);
						if (_5da === this.root) {
							this.onAddToRoot(_5d8);
						}
					},
					onAddToRoot: function (item) {
						console.log(this, ": item ", item, " added to root");
					},
					onLeaveRoot: function (item) {
						console.log(this, ": item ", item, " removed from root");
					},
					_requeryTop: function () {
						var _5dd = this.root.children || [];
						this.store.fetch({
							query: this.query,
							onComplete: _4.hitch(this, function (_5de) {
								this.root.children = _5de;
								if (_5dd.length != _5de.length || _4.some(_5dd, function (item, idx) {
									return _5de[idx] != item;
								})) {
									this.onChildrenChange(this.root, _5de);
								}
							})
						});
					},
					onNewItem: function (item, _5df) {
						this._requeryTop();
						this.inherited(arguments);
					},
					onDeleteItem: function (item) {
						if (_4.indexOf(this.root.children, item) != -1) {
							this._requeryTop();
						}
						this.inherited(arguments);
					},
					onSetItem: function (item, _5e0, _5e1, _5e2) {
						this._requeryTop();
						this.inherited(arguments);
					}
				});
			}
			if (!_4._hasResource["dijit.Tree"]) {
				_4._hasResource["dijit.Tree"] = true;
				_4.provide("dijit.Tree");
				_4.declare("dijit._TreeNode", [_5._Widget, _5._Templated, _5._Container, _5._Contained, _5._CssStateMixin], {
					item: null,
					isTreeNode: true,
					label: "",
					isExpandable: null,
					isExpanded: false,
					state: "UNCHECKED",
					templateString: _4.cache("dijit", "templates/TreeNode.html", "<div class=\"dijitTreeNode\" role=\"presentation\"\n\t><div dojoAttachPoint=\"rowNode\" class=\"dijitTreeRow\" role=\"presentation\" dojoAttachEvent=\"onmouseenter:_onMouseEnter, onmouseleave:_onMouseLeave, onclick:_onClick, ondblclick:_onDblClick\"\n\t\t><img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint=\"expandoNode\" class=\"dijitTreeExpando\" role=\"presentation\"\n\t\t/><span dojoAttachPoint=\"expandoNodeText\" class=\"dijitExpandoText\" role=\"presentation\"\n\t\t></span\n\t\t><span dojoAttachPoint=\"contentNode\"\n\t\t\tclass=\"dijitTreeContent\" role=\"presentation\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint=\"iconNode\" class=\"dijitIcon dijitTreeIcon\" role=\"presentation\"\n\t\t\t/><span dojoAttachPoint=\"labelNode\" class=\"dijitTreeLabel\" role=\"treeitem\" tabindex=\"-1\" aria-selected=\"false\" dojoAttachEvent=\"onfocus:_onLabelFocus\"></span>\n\t\t</span\n\t></div>\n\t<div dojoAttachPoint=\"containerNode\" class=\"dijitTreeContainer\" role=\"presentation\" style=\"display: none;\"></div>\n</div>\n"),
					baseClass: "dijitTreeNode",
					cssStateNodes: {
						rowNode: "dijitTreeRow",
						labelNode: "dijitTreeLabel"
					},
					attributeMap: _4.delegate(_5._Widget.prototype.attributeMap, {
						label: {
							node: "labelNode",
							type: "innerText"
						},
						tooltip: {
							node: "rowNode",
							type: "attribute",
							attribute: "title"
						}
					}),
					buildRendering: function () {
						this.inherited(arguments);
						this._setExpando();
						this._updateItemClasses(this.item);
						if (this.isExpandable) {
							_5.setWaiState(this.labelNode, "expanded", this.isExpanded);
						}
						this.setSelected(false);
					},
					_setIndentAttr: function (_5e3) {
						var _5e4 = (Math.max(_5e3, 0) * this.tree._nodePixelIndent) + "px";
						_4.style(this.domNode, "backgroundPosition", _5e4 + " 0px");
						_4.style(this.rowNode, this.isLeftToRight() ? "paddingLeft" : "paddingRight", _5e4);
						_4.forEach(this.getChildren(), function (_5e5) {
							_5e5.set("indent", _5e3 + 1);
						});
						this._set("indent", _5e3);
					},
					markProcessing: function () {
						this.state = "LOADING";
						this._setExpando(true);
					},
					unmarkProcessing: function () {
						this._setExpando(false);
					},
					_updateItemClasses: function (item) {
						var tree = this.tree,
								_5e6 = tree.model;
						if (tree._v10Compat && item === _5e6.root) {
							item = null;
						}
						this._applyClassAndStyle(item, "icon", "Icon");
						this._applyClassAndStyle(item, "label", "Label");
						this._applyClassAndStyle(item, "row", "Row");
					},
					_applyClassAndStyle: function (item, _5e7, _5e8) {
						var _5e9 = "_" + _5e7 + "Class";
						var _5ea = _5e7 + "Node";
						var _5eb = this[_5e9];
						this[_5e9] = this.tree["get" + _5e8 + "Class"](item, this.isExpanded);
						_4.replaceClass(this[_5ea], this[_5e9] || "", _5eb || "");
						_4.style(this[_5ea], this.tree["get" + _5e8 + "Style"](item, this.isExpanded) || {});
					},
					_updateLayout: function () {
						var _5ec = this.getParent();
						if (!_5ec || _5ec.rowNode.style.display == "none") {
							_4.addClass(this.domNode, "dijitTreeIsRoot");
						} else {
							_4.toggleClass(this.domNode, "dijitTreeIsLast", !this.getNextSibling());
						}
					},
					_setExpando: function (_5ed) {
						var _5ee = ["dijitTreeExpandoLoading", "dijitTreeExpandoOpened", "dijitTreeExpandoClosed", "dijitTreeExpandoLeaf"],
								_5ef = ["*", "-", "+", "*"],
								idx = _5ed ? 0 : (this.isExpandable ? (this.isExpanded ? 1 : 2) : 3);
						_4.replaceClass(this.expandoNode, _5ee[idx], _5ee);
						this.expandoNodeText.innerHTML = _5ef[idx];
					},
					expand: function () {
						if (this._expandDeferred) {
							return this._expandDeferred;
						}
						this._wipeOut && this._wipeOut.stop();
						this.isExpanded = true;
						_5.setWaiState(this.labelNode, "expanded", "true");
						if (this.tree.showRoot || this !== this.tree.rootNode) {
							_5.setWaiRole(this.containerNode, "group");
						}
						_4.addClass(this.contentNode, "dijitTreeContentExpanded");
						this._setExpando();
						this._updateItemClasses(this.item);
						if (this == this.tree.rootNode) {
							_5.setWaiState(this.tree.domNode, "expanded", "true");
						}
						var def, _5f0 = _4.fx.wipeIn({
							node: this.containerNode,
							duration: _5.defaultDuration,
							onEnd: function () {
								def.callback(true);
							}
						});
						def = (this._expandDeferred = new _4.Deferred(function () {
							_5f0.stop();
						}));
						_5f0.play();
						return def;
					},
					collapse: function () {
						if (!this.isExpanded) {
							return;
						}
						if (this._expandDeferred) {
							this._expandDeferred.cancel();
							delete this._expandDeferred;
						}
						this.isExpanded = false;
						_5.setWaiState(this.labelNode, "expanded", "false");
						if (this == this.tree.rootNode) {
							_5.setWaiState(this.tree.domNode, "expanded", "false");
						}
						_4.removeClass(this.contentNode, "dijitTreeContentExpanded");
						this._setExpando();
						this._updateItemClasses(this.item);
						if (!this._wipeOut) {
							this._wipeOut = _4.fx.wipeOut({
								node: this.containerNode,
								duration: _5.defaultDuration
							});
						}
						this._wipeOut.play();
					},
					indent: 0,
					setChildItems: function (_5f1) {
						var tree = this.tree,
								_5f2 = tree.model,
								defs = [];
						_4.forEach(this.getChildren(), function (_5f3) {
							_5._Container.prototype.removeChild.call(this, _5f3);
						}, this);
						this.state = "LOADED";
						if (_5f1 && _5f1.length > 0) {
							this.isExpandable = true;
							_4.forEach(_5f1, function (item) {
								var id = _5f2.getIdentity(item),
										_5f4 = tree._itemNodesMap[id],
										node;
								if (_5f4) {
									for (var i = 0; i < _5f4.length; i++) {
										if (_5f4[i] && !_5f4[i].getParent()) {
											node = _5f4[i];
											node.set("indent", this.indent + 1);
											break;
										}
									}
								}
								if (!node) {
									node = this.tree._createTreeNode({
										item: item,
										tree: tree,
										isExpandable: _5f2.mayHaveChildren(item),
										label: tree.getLabel(item),
										tooltip: tree.getTooltip(item),
										dir: tree.dir,
										lang: tree.lang,
										indent: this.indent + 1
									});
									if (_5f4) {
										_5f4.push(node);
									} else {
										tree._itemNodesMap[id] = [node];
									}
								}
								this.addChild(node);
								if (this.tree.autoExpand || this.tree._state(item)) {
									defs.push(tree._expandNode(node));
								}
							}, this);
							_4.forEach(this.getChildren(), function (_5f5, idx) {
								_5f5._updateLayout();
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
						return new _4.DeferredList(defs);
					},
					getTreePath: function () {
						var node = this;
						var path = [];
						while (node && node !== this.tree.rootNode) {
							path.unshift(node.item);
							node = node.getParent();
						}
						path.unshift(this.tree.rootNode.item);
						return path;
					},
					getIdentity: function () {
						return this.tree.model.getIdentity(this.item);
					},
					removeChild: function (node) {
						this.inherited(arguments);
						var _5f6 = this.getChildren();
						if (_5f6.length == 0) {
							this.isExpandable = false;
							this.collapse();
						}
						_4.forEach(_5f6, function (_5f7) {
							_5f7._updateLayout();
						});
					},
					makeExpandable: function () {
						this.isExpandable = true;
						this._setExpando(false);
					},
					_onLabelFocus: function (evt) {
						this.tree._onNodeFocus(this);
					},
					setSelected: function (_5f8) {
						_5.setWaiState(this.labelNode, "selected", _5f8);
						_4.toggleClass(this.rowNode, "dijitTreeRowSelected", _5f8);
					},
					setFocusable: function (_5f9) {
						this.labelNode.setAttribute("tabIndex", _5f9 ? "0" : "-1");
					},
					_onClick: function (evt) {
						this.tree._onClick(this, evt);
					},
					_onDblClick: function (evt) {
						this.tree._onDblClick(this, evt);
					},
					_onMouseEnter: function (evt) {
						this.tree._onNodeMouseEnter(this, evt);
					},
					_onMouseLeave: function (evt) {
						this.tree._onNodeMouseLeave(this, evt);
					}
				});
				_4.declare("dijit.Tree", [_5._Widget, _5._Templated], {
					store: null,
					model: null,
					query: null,
					label: "",
					showRoot: true,
					childrenAttr: ["children"],
					paths: [],
					path: [],
					selectedItems: null,
					selectedItem: null,
					openOnClick: false,
					openOnDblClick: false,
					templateString: _4.cache("dijit", "templates/Tree.html", "<div class=\"dijitTree dijitTreeContainer\" role=\"tree\"\n\tdojoAttachEvent=\"onkeypress:_onKeyPress\">\n\t<div class=\"dijitInline dijitTreeIndent\" style=\"position: absolute; top: -9999px\" dojoAttachPoint=\"indentDetector\"></div>\n</div>\n"),
					persist: true,
					autoExpand: false,
					dndController: "dijit.tree._dndSelector",
					dndParams: ["onDndDrop", "itemCreator", "onDndCancel", "checkAcceptance", "checkItemAcceptance", "dragThreshold", "betweenThreshold"],
					onDndDrop: null,
					itemCreator: null,
					onDndCancel: null,
					checkAcceptance: null,
					checkItemAcceptance: null,
					dragThreshold: 5,
					betweenThreshold: 0,
					_nodePixelIndent: 19,
					_publish: function (_5fa, _5fb) {
						_4.publish(this.id, [_4.mixin({
							tree: this,
							event: _5fa
						}, _5fb || {})]);
					},
					postMixInProperties: function () {
						this.tree = this;
						if (this.autoExpand) {
							this.persist = false;
						}
						this._itemNodesMap = {};
						if (!this.cookieName) {
							this.cookieName = this.id + "SaveStateCookie";
						}
						this._loadDeferred = new _4.Deferred();
						this.inherited(arguments);
					},
					postCreate: function () {
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
							if (_4.isString(this.dndController)) {
								this.dndController = _4.getObject(this.dndController);
							}
							var _5fc = {};
							for (var i = 0; i < this.dndParams.length; i++) {
								if (this[this.dndParams[i]]) {
									_5fc[this.dndParams[i]] = this[this.dndParams[i]];
								}
							}
							this.dndController = new this.dndController(this, _5fc);
						}
					},
					_store2model: function () {
						this._v10Compat = true;
						_4.deprecated("Tree: from version 2.0, should specify a model object rather than a store/query");
						var _5fd = {
							id: this.id + "_ForestStoreModel",
							store: this.store,
							query: this.query,
							childrenAttrs: this.childrenAttr
						};
						if (this.params.mayHaveChildren) {
							_5fd.mayHaveChildren = _4.hitch(this, "mayHaveChildren");
						}
						if (this.params.getItemChildren) {
							_5fd.getChildren = _4.hitch(this, function (item, _5fe, _5ff) {
								this.getItemChildren((this._v10Compat && item === this.model.root) ? null : item, _5fe, _5ff);
							});
						}
						this.model = new _5.tree.ForestStoreModel(_5fd);
						this.showRoot = Boolean(this.label);
					},
					onLoad: function () {
					},
					_load: function () {
						this.model.getRoot(_4.hitch(this, function (item) {
							var rn = (this.rootNode = this.tree._createTreeNode({
								item: item,
								tree: this,
								isExpandable: true,
								label: this.label || this.getLabel(item),
								indent: this.showRoot ? 0 : -1
							}));
							if (!this.showRoot) {
								rn.rowNode.style.display = "none";
								_5.setWaiRole(this.domNode, "presentation");
								_5.setWaiRole(rn.labelNode, "presentation");
								_5.setWaiRole(rn.containerNode, "tree");
							}
							this.domNode.appendChild(rn.domNode);
							var _600 = this.model.getIdentity(item);
							if (this._itemNodesMap[_600]) {
								this._itemNodesMap[_600].push(rn);
							} else {
								this._itemNodesMap[_600] = [rn];
							}
							rn._updateLayout();
							this._expandNode(rn).addCallback(_4.hitch(this, function () {
								this._loadDeferred.callback(true);
								this.onLoad();
							}));
						}), function (err) {
							console.error(this, ": error loading root: ", err);
						});
					},
					getNodesByItem: function (item) {
						if (!item) {
							return [];
						}
						var _601 = _4.isString(item) ? item : this.model.getIdentity(item);
						return [].concat(this._itemNodesMap[_601]);
					},
					_setSelectedItemAttr: function (item) {
						this.set("selectedItems", [item]);
					},
					_setSelectedItemsAttr: function (_602) {
						var tree = this;
						this._loadDeferred.addCallback(_4.hitch(this, function () {
							var _603 = _4.map(_602, function (item) {
								return (!item || _4.isString(item)) ? item : tree.model.getIdentity(item);
							});
							var _604 = [];
							_4.forEach(_603, function (id) {
								_604 = _604.concat(tree._itemNodesMap[id] || []);
							});
							this.set("selectedNodes", _604);
						}));
					},
					_setPathAttr: function (path) {
						if (path.length) {
							return this.set("paths", [path]);
						} else {
							return this.set("paths", []);
						}
					},
					_setPathsAttr: function (_605) {
						var tree = this;
						return new _4.DeferredList(_4.map(_605, function (path) {
							var d = new _4.Deferred();
							path = _4.map(path, function (item) {
								return _4.isString(item) ? item : tree.model.getIdentity(item);
							});
							if (path.length) {
								tree._loadDeferred.addCallback(function () {
									_606(path, [tree.rootNode], d);
								});
							} else {
								d.errback("Empty path");
							}
							return d;
						})).addCallback(_607);

						function _606(path, _608, def) {
							var _609 = path.shift();
							var _60a = _4.filter(_608, function (node) {
								return node.getIdentity() == _609;
							})[0];
							if (!!_60a) {
								if (path.length) {
									tree._expandNode(_60a).addCallback(function () {
										_606(path, _60a.getChildren(), def);
									});
								} else {
									def.callback(_60a);
								}
							} else {
								def.errback("Could not expand path at " + _609);
							}
						};

						function _607(_60b) {
							tree.set("selectedNodes", _4.map(_4.filter(_60b, function (x) {
								return x[0];
							}), function (x) {
								return x[1];
							}));
						};
					},
					_setSelectedNodeAttr: function (node) {
						this.set("selectedNodes", [node]);
					},
					_setSelectedNodesAttr: function (_60c) {
						this._loadDeferred.addCallback(_4.hitch(this, function () {
							this.dndController.setSelection(_60c);
						}));
					},
					mayHaveChildren: function (item) {
					},
					getItemChildren: function (_60d, _60e) {
					},
					getLabel: function (item) {
						return this.model.getLabel(item);
					},
					getIconClass: function (item, _60f) {
						return (!item || this.model.mayHaveChildren(item)) ? (_60f ? "dijitFolderOpened" : "dijitFolderClosed") : "dijitLeaf";
					},
					getLabelClass: function (item, _610) {
					},
					getRowClass: function (item, _611) {
					},
					getIconStyle: function (item, _612) {
					},
					getLabelStyle: function (item, _613) {
					},
					getRowStyle: function (item, _614) {
					},
					getTooltip: function (item) {
						return "";
					},
					_onKeyPress: function (e) {
						if (e.altKey) {
							return;
						}
						var dk = _4.keys;
						var _615 = _5.getEnclosingWidget(e.target);
						if (!_615) {
							return;
						}
						var key = e.charOrCode;
						if (typeof key == "string" && key != " ") {
							if (!e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
								this._onLetterKeyNav({
									node: _615,
									key: key.toLowerCase()
								});
								_4.stopEvent(e);
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
								this[this._keyHandlerMap[key]]({
									node: _615,
									item: _615.item,
									evt: e
								});
								_4.stopEvent(e);
							}
						}
					},
					_onEnterKey: function (_616) {
						this._publish("execute", {
							item: _616.item,
							node: _616.node
						});
						this.dndController.userSelect(_616.node, _4.isCopyKey(_616.evt), _616.evt.shiftKey);
						this.onClick(_616.item, _616.node, _616.evt);
					},
					_onDownArrow: function (_617) {
						var node = this._getNextNode(_617.node);
						if (node && node.isTreeNode) {
							this.focusNode(node);
						}
					},
					_onUpArrow: function (_618) {
						var node = _618.node;
						var _619 = node.getPreviousSibling();
						if (_619) {
							node = _619;
							while (node.isExpandable && node.isExpanded && node.hasChildren()) {
								var _61a = node.getChildren();
								node = _61a[_61a.length - 1];
							}
						} else {
							var _61b = node.getParent();
							if (!(!this.showRoot && _61b === this.rootNode)) {
								node = _61b;
							}
						}
						if (node && node.isTreeNode) {
							this.focusNode(node);
						}
					},
					_onRightArrow: function (_61c) {
						var node = _61c.node;
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
					},
					_onLeftArrow: function (_61d) {
						var node = _61d.node;
						if (node.isExpandable && node.isExpanded) {
							this._collapseNode(node);
						} else {
							var _61e = node.getParent();
							if (_61e && _61e.isTreeNode && !(!this.showRoot && _61e === this.rootNode)) {
								this.focusNode(_61e);
							}
						}
					},
					_onHomeKey: function () {
						var node = this._getRootOrFirstNode();
						if (node) {
							this.focusNode(node);
						}
					},
					_onEndKey: function (_61f) {
						var node = this.rootNode;
						while (node.isExpanded) {
							var c = node.getChildren();
							node = c[c.length - 1];
						}
						if (node && node.isTreeNode) {
							this.focusNode(node);
						}
					},
					multiCharSearchDuration: 250,
					_onLetterKeyNav: function (_620) {
						var cs = this._curSearch;
						if (cs) {
							cs.pattern = cs.pattern + _620.key;
							clearTimeout(cs.timer);
						} else {
							cs = this._curSearch = {
								pattern: _620.key,
								startNode: _620.node
							};
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
					},
					isExpandoNode: function (node, _621) {
						return _4.isDescendant(node, _621.expandoNode);
					},
					_onClick: function (_622, e) {
						var _623 = e.target,
								_624 = this.isExpandoNode(_623, _622);
						if ((this.openOnClick && _622.isExpandable) || _624) {
							if (_622.isExpandable) {
								this._onExpandoClick({
									node: _622
								});
							}
						} else {
							this._publish("execute", {
								item: _622.item,
								node: _622,
								evt: e
							});
							this.onClick(_622.item, _622, e);
							this.focusNode(_622);
						}
						_4.stopEvent(e);
					},
					_onDblClick: function (_625, e) {
						var _626 = e.target,
								_627 = (_626 == _625.expandoNode || _626 == _625.expandoNodeText);
						if ((this.openOnDblClick && _625.isExpandable) || _627) {
							if (_625.isExpandable) {
								this._onExpandoClick({
									node: _625
								});
							}
						} else {
							this._publish("execute", {
								item: _625.item,
								node: _625,
								evt: e
							});
							this.onDblClick(_625.item, _625, e);
							this.focusNode(_625);
						}
						_4.stopEvent(e);
					},
					_onExpandoClick: function (_628) {
						var node = _628.node;
						this.focusNode(node);
						if (node.isExpanded) {
							this._collapseNode(node);
						} else {
							this._expandNode(node);
						}
					},
					onClick: function (item, node, evt) {
					},
					onDblClick: function (item, node, evt) {
					},
					onOpen: function (item, node) {
					},
					onClose: function (item, node) {
					},
					_getNextNode: function (node) {
						if (node.isExpandable && node.isExpanded && node.hasChildren()) {
							return node.getChildren()[0];
						} else {
							while (node && node.isTreeNode) {
								var _629 = node.getNextSibling();
								if (_629) {
									return _629;
								}
								node = node.getParent();
							}
							return null;
						}
					},
					_getRootOrFirstNode: function () {
						return this.showRoot ? this.rootNode : this.rootNode.getChildren()[0];
					},
					_collapseNode: function (node) {
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
					},
					_expandNode: function (node, _62a) {
						if (node._expandNodeDeferred && !_62a) {
							return node._expandNodeDeferred;
						}
						var _62b = this.model,
								item = node.item,
								_62c = this;
						switch (node.state) {
							case "UNCHECKED":
								node.markProcessing();
								var def = (node._expandNodeDeferred = new _4.Deferred());
								_62b.getChildren(item, function (_62d) {
									node.unmarkProcessing();
									var scid = node.setChildItems(_62d);
									var ed = _62c._expandNode(node, true);
									scid.addCallback(function () {
										ed.addCallback(function () {
											def.callback();
										});
									});
								}, function (err) {
									console.error(_62c, ": error loading root children: ", err);
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
					},
					focusNode: function (node) {
						_5.focus(node.labelNode);
					},
					_onNodeFocus: function (node) {
						if (node && node != this.lastFocused) {
							if (this.lastFocused && !this.lastFocused._destroyed) {
								this.lastFocused.setFocusable(false);
							}
							node.setFocusable(true);
							this.lastFocused = node;
						}
					},
					_onNodeMouseEnter: function (node) {
					},
					_onNodeMouseLeave: function (node) {
					},
					_onItemChange: function (item) {
						var _62e = this.model,
								_62f = _62e.getIdentity(item),
								_630 = this._itemNodesMap[_62f];
						if (_630) {
							var _631 = this.getLabel(item),
									_632 = this.getTooltip(item);
							_4.forEach(_630, function (node) {
								node.set({
									item: item,
									label: _631,
									tooltip: _632
								});
								node._updateItemClasses(item);
							});
						}
					},
					_onItemChildrenChange: function (_633, _634) {
						var _635 = this.model,
								_636 = _635.getIdentity(_633),
								_637 = this._itemNodesMap[_636];
						if (_637) {
							_4.forEach(_637, function (_638) {
								_638.setChildItems(_634);
							});
						}
					},
					_onItemDelete: function (item) {
						var _639 = this.model,
								_63a = _639.getIdentity(item),
								_63b = this._itemNodesMap[_63a];
						if (_63b) {
							_4.forEach(_63b, function (node) {
								this.dndController.removeTreeNode(node);
								var _63c = node.getParent();
								if (_63c) {
									_63c.removeChild(node);
								}
								node.destroyRecursive();
							}, this);
							delete this._itemNodesMap[_63a];
						}
					},
					_initState: function () {
						if (this.persist) {
							var _63d = _4.cookie(this.cookieName);
							this._openedItemIds = {};
							if (_63d) {
								_4.forEach(_63d.split(","), function (item) {
									this._openedItemIds[item] = true;
								}, this);
							}
						}
					},
					_state: function (item, _63e) {
						if (!this.persist) {
							return false;
						}
						var id = this.model.getIdentity(item);
						if (arguments.length === 1) {
							return this._openedItemIds[id];
						}
						if (_63e) {
							this._openedItemIds[id] = true;
						} else {
							delete this._openedItemIds[id];
						}
					},
					_saveState: function () {
						if (!this.persist) {
							return;
						}
						var ary = [];
						for (var id in this._openedItemIds) {
							ary.push(id);
						}
						_4.cookie(this.cookieName, ary.join(","), {
							expires: 365
						});
					},
					destroy: function () {
						if (this._curSearch) {
							clearTimeout(this._curSearch.timer);
							delete this._curSearch;
						}
						if (this.rootNode) {
							this.rootNode.destroyRecursive();
						}
						if (this.dndController && !_4.isString(this.dndController)) {
							this.dndController.destroy();
						}
						this.rootNode = null;
						this.inherited(arguments);
					},
					destroyRecursive: function () {
						this.destroy();
					},
					resize: function (_63f) {
						if (_63f) {
							_4.marginBox(this.domNode, _63f);
						}
						this._nodePixelIndent = _4._getMarginSize(this.tree.indentDetector).w;
						if (this.tree.rootNode) {
							this.tree.rootNode.set("indent", this.showRoot ? 0 : -1);
						}
					},
					_createTreeNode: function (args) {
						return new _5._TreeNode(args);
					}
				});
			}
			if (!_4._hasResource["dojox.html._base"]) {
				_4._hasResource["dojox.html._base"] = true;
				_4.provide("dojox.html._base");
				(function () {
					if (_4.isIE) {
						var _640 = /(AlphaImageLoader\([^)]*?src=(['"]))(?![a-z]+:|\/)([^\r\n;}]+?)(\2[^)]*\)\s*[;}]?)/g;
					}
					var _641 = /(?:(?:@import\s*(['"])(?![a-z]+:|\/)([^\r\n;{]+?)\1)|url\(\s*(['"]?)(?![a-z]+:|\/)([^\r\n;]+?)\3\s*\))([a-z, \s]*[;}]?)/g;
					var _642 = _6.html._adjustCssPaths = function (_643, _644) {
						if (!_644 || !_643) {
							return;
						}
						if (_640) {
							_644 = _644.replace(_640, function (_645, pre, _646, url, post) {
								return pre + (new _4._Url(_643, "./" + url).toString()) + post;
							});
						}
						return _644.replace(_641, function (_647, _648, _649, _64a, _64b, _64c) {
							if (_649) {
								return "@import \"" + (new _4._Url(_643, "./" + _649).toString()) + "\"" + _64c;
							} else {
								return "url(" + (new _4._Url(_643, "./" + _64b).toString()) + ")" + _64c;
							}
						});
					};
					var _64d = /(<[a-z][a-z0-9]*\s[^>]*)(?:(href|src)=(['"]?)([^>]*?)\3|style=(['"]?)([^>]*?)\5)([^>]*>)/gi;
					var _64e = _6.html._adjustHtmlPaths = function (_64f, cont) {
						var url = _64f || "./";
						return cont.replace(_64d, function (tag, _650, name, _651, _652, _653, _654, end) {
							return _650 + (name ? (name + "=" + _651 + (new _4._Url(url, _652).toString()) + _651) : ("style=" + _653 + _642(url, _654) + _653)) + end;
						});
					};
					var _655 = _6.html._snarfStyles = function (_656, cont, _657) {
						_657.attributes = [];
						return cont.replace(/(?:<style([^>]*)>([\s\S]*?)<\/style>|<link\s+(?=[^>]*rel=['"]?stylesheet)([^>]*?href=(['"])([^>]*?)\4[^>\/]*)\/?>)/gi, function (_658, _659, _65a, _65b, _65c, href) {
							var i, attr = (_659 || _65b || "").replace(/^\s*([\s\S]*?)\s*$/i, "$1");
							if (_65a) {
								i = _657.push(_656 ? _642(_656, _65a) : _65a);
							} else {
								i = _657.push("@import \"" + href + "\";");
								attr = attr.replace(/\s*(?:rel|href)=(['"])?[^\s]*\1\s*/gi, "");
							}
							if (attr) {
								attr = attr.split(/\s+/);
								var _65d = {}, tmp;
								for (var j = 0, e = attr.length; j < e; j++) {
									tmp = attr[j].split("=");
									_65d[tmp[0]] = tmp[1].replace(/^\s*['"]?([\s\S]*?)['"]?\s*$/, "$1");
								}
								_657.attributes[i - 1] = _65d;
							}
							return "";
						});
					};
					var _65e = _6.html._snarfScripts = function (cont, _65f) {
						_65f.code = "";
						cont = cont.replace(/<[!][-][-](.|\s)*?[-][-]>/g, function (_660) {
							return _660.replace(/<(\/?)script\b/ig, "&lt;$1Script");
						});

						function _661(src) {
							if (_65f.downloadRemote) {
								src = src.replace(/&([a-z0-9#]+);/g, function (m, name) {
									switch (name) {
										case "amp":
											return "&";
										case "gt":
											return ">";
										case "lt":
											return "<";
										default:
											return name.charAt(0) == "#" ? String.fromCharCode(name.substring(1)) : "&" + name + ";";
									}
								});
								_4.xhrGet({
									url: src,
									sync: true,
									load: function (code) {
										_65f.code += code + ";";
									},
									error: _65f.errBack
								});
							}
						};
						return cont.replace(/<script\s*(?![^>]*type=['"]?(?:dojo\/|text\/html\b))(?:[^>]*?(?:src=(['"]?)([^>]*?)\1[^>]*)?)*>([\s\S]*?)<\/script>/gi, function (_662, _663, src, code) {
							if (src) {
								_661(src);
							} else {
								_65f.code += code;
							}
							return "";
						});
					};
					var _664 = _6.html.evalInGlobal = function (code, _665) {
						_665 = _665 || _4.doc.body;
						var n = _665.ownerDocument.createElement("script");
						n.type = "text/javascript";
						_665.appendChild(n);
						n.text = code;
					};
					_4.declare("dojox.html._ContentSetter", [_4.html._ContentSetter], {
						adjustPaths: false,
						referencePath: ".",
						renderStyles: false,
						executeScripts: false,
						scriptHasHooks: false,
						scriptHookReplacement: null,
						_renderStyles: function (_666) {
							this._styleNodes = [];
							var st, att, _667, doc = this.node.ownerDocument;
							var head = doc.getElementsByTagName("head")[0];
							for (var i = 0, e = _666.length; i < e; i++) {
								_667 = _666[i];
								att = _666.attributes[i];
								st = doc.createElement("style");
								st.setAttribute("type", "text/css");
								for (var x in att) {
									st.setAttribute(x, att[x]);
								}
								this._styleNodes.push(st);
								head.appendChild(st);
								if (st.styleSheet) {
									st.styleSheet.cssText = _667;
								} else {
									st.appendChild(doc.createTextNode(_667));
								}
							}
						},
						empty: function () {
							this.inherited("empty", arguments);
							this._styles = [];
						},
						onBegin: function () {
							this.inherited("onBegin", arguments);
							var cont = this.content,
									node = this.node;
							var _668 = this._styles;
							if (_4.isString(cont)) {
								if (this.adjustPaths && this.referencePath) {
									cont = _64e(this.referencePath, cont);
								}
								if (this.renderStyles || this.cleanContent) {
									cont = _655(this.referencePath, cont, _668);
								}
								if (this.executeScripts) {
									var _669 = this;
									var _66a = {
										downloadRemote: true,
										errBack: function (e) {
											_669._onError.call(_669, "Exec", "Error downloading remote script in \"" + _669.id + "\"", e);
										}
									};
									cont = _65e(cont, _66a);
									this._code = _66a.code;
								}
							}
							this.content = cont;
						},
						onEnd: function () {
							var code = this._code,
									_66b = this._styles;
							if (this._styleNodes && this._styleNodes.length) {
								while (this._styleNodes.length) {
									_4.destroy(this._styleNodes.pop());
								}
							}
							if (this.renderStyles && _66b && _66b.length) {
								this._renderStyles(_66b);
							}
							if (this.executeScripts && code) {
								if (this.cleanContent) {
									code = code.replace(/(<!--|(?:\/\/)?-->|<!\[CDATA\[|\]\]>)/g, "");
								}
								if (this.scriptHasHooks) {
									code = code.replace(/_container_(?!\s*=[^=])/g, this.scriptHookReplacement);
								}
								try {
									_664(code, this.node);
								} catch (e) {
									this._onError("Exec", "Error eval script in " + this.id + ", " + e.message, e);
								}
							}
							this.inherited("onEnd", arguments);
						},
						tearDown: function () {
							this.inherited(arguments);
							delete this._styles;
							if (this._styleNodes && this._styleNodes.length) {
								while (this._styleNodes.length) {
									_4.destroy(this._styleNodes.pop());
								}
							}
							delete this._styleNodes;
							_4.mixin(this, _4.getObject(this.declaredClass).prototype);
						}
					});
					_6.html.set = function (node, cont, _66c) {
						if (!_66c) {
							return _4.html._setNodeContent(node, cont, true);
						} else {
							var op = new _6.html._ContentSetter(_4.mixin(_66c, {
								content: cont,
								node: node
							}));
							return op.set();
						}
					};
				})();
			}
			if (!_4._hasResource["dojox.layout.ContentPane"]) {
				_4._hasResource["dojox.layout.ContentPane"] = true;
				_4.provide("dojox.layout.ContentPane");
				_4.declare("dojox.layout.ContentPane", _5.layout.ContentPane, {
					adjustPaths: false,
					cleanContent: false,
					renderStyles: false,
					executeScripts: true,
					scriptHasHooks: false,
					constructor: function () {
						this.ioArgs = {};
						this.ioMethod = _4.xhrGet;
					},
					onExecError: function (e) {
					},
					_setContent: function (cont) {
						var _66d = this._contentSetter;
						if (!(_66d && _66d instanceof _6.html._ContentSetter)) {
							_66d = this._contentSetter = new _6.html._ContentSetter({
								node: this.containerNode,
								_onError: _4.hitch(this, this._onError),
								onContentError: _4.hitch(this, function (e) {
									var _66e = this.onContentError(e);
									try {
										this.containerNode.innerHTML = _66e;
									} catch (e) {
										console.error("Fatal " + this.id + " could not change content due to " + e.message, e);
									}
								})
							});
						}
						this._contentSetterParams = {
							adjustPaths: Boolean(this.adjustPaths && (this.href || this.referencePath)),
							referencePath: this.href || this.referencePath,
							renderStyles: this.renderStyles,
							executeScripts: this.executeScripts,
							scriptHasHooks: this.scriptHasHooks,
							scriptHookReplacement: "dijit.byId('" + this.id + "')"
						};
						this.inherited("_setContent", arguments);
					}
				});
			}
			if (!_4._hasResource["dojox.layout.ResizeHandle"]) {
				_4._hasResource["dojox.layout.ResizeHandle"] = true;
				_4.provide("dojox.layout.ResizeHandle");
				_4.experimental("dojox.layout.ResizeHandle");
				_4.declare("dojox.layout.ResizeHandle", [_5._Widget, _5._Templated], {
					targetId: "",
					targetContainer: null,
					resizeAxis: "xy",
					activeResize: false,
					activeResizeClass: "dojoxResizeHandleClone",
					animateSizing: true,
					animateMethod: "chain",
					animateDuration: 225,
					minHeight: 100,
					minWidth: 100,
					constrainMax: false,
					maxHeight: 0,
					maxWidth: 0,
					fixedAspect: false,
					intermediateChanges: false,
					startTopic: "/dojo/resize/start",
					endTopic: "/dojo/resize/stop",
					templateString: "<div dojoAttachPoint=\"resizeHandle\" class=\"dojoxResizeHandle\"><div></div></div>",
					postCreate: function () {
						this.connect(this.resizeHandle, "onmousedown", "_beginSizing");
						if (!this.activeResize) {
							this._resizeHelper = _5.byId("dojoxGlobalResizeHelper");
							if (!this._resizeHelper) {
								this._resizeHelper = new _6.layout._ResizeHelper({
									id: "dojoxGlobalResizeHelper"
								}).placeAt(_4.body());
								_4.addClass(this._resizeHelper.domNode, this.activeResizeClass);
							}
						} else {
							this.animateSizing = false;
						}
						if (!this.minSize) {
							this.minSize = {
								w: this.minWidth,
								h: this.minHeight
							};
						}
						if (this.constrainMax) {
							this.maxSize = {
								w: this.maxWidth,
								h: this.maxHeight
							};
						}
						this._resizeX = this._resizeY = false;
						var _66f = _4.partial(_4.addClass, this.resizeHandle);
						switch (this.resizeAxis.toLowerCase()) {
							case "xy":
								this._resizeX = this._resizeY = true;
								_66f("dojoxResizeNW");
								break;
							case "x":
								this._resizeX = true;
								_66f("dojoxResizeW");
								break;
							case "y":
								this._resizeY = true;
								_66f("dojoxResizeN");
								break;
						}
					},
					_beginSizing: function (e) {
						if (this._isSizing) {
							return false;
						}
						_4.publish(this.startTopic, [this]);
						this.targetWidget = _5.byId(this.targetId);
						this.targetDomNode = this.targetWidget ? this.targetWidget.domNode : _4.byId(this.targetId);
						if (this.targetContainer) {
							this.targetDomNode = this.targetContainer;
						}
						if (!this.targetDomNode) {
							return false;
						}
						if (!this.activeResize) {
							var c = _4.position(this.targetDomNode, true);
							console.log(c);
							console.log(_4.window.getBox());
							this._resizeHelper.resize({
								l: c.x,
								t: c.y,
								w: c.w,
								h: c.h
							});
							this._resizeHelper.show();
						}
						this._isSizing = true;
						this.startPoint = {
							x: e.clientX,
							y: e.clientY
						};
						var mb = this.targetWidget ? _4.marginBox(this.targetDomNode) : _4.contentBox(this.targetDomNode);
						this.startSize = {
							w: mb.w,
							h: mb.h
						};
						if (this.fixedAspect) {
							var max, val;
							if (mb.w > mb.h) {
								max = "w";
								val = mb.w / mb.h;
							} else {
								max = "h";
								val = mb.h / mb.w;
							}
							this._aspect = {
								prop: max
							};
							this._aspect[max] = val;
						}
						this._pconnects = [];
						this._pconnects.push(_4.connect(_4.doc, "onmousemove", this, "_updateSizing"));
						this._pconnects.push(_4.connect(_4.doc, "onmouseup", this, "_endSizing"));
						_4.stopEvent(e);
					},
					_updateSizing: function (e) {
						if (this.activeResize) {
							this._changeSizing(e);
						} else {
							var tmp = this._getNewCoords(e);
							if (tmp === false) {
								return;
							}
							this._resizeHelper.resize(tmp);
						}
						e.preventDefault();
					},
					_getNewCoords: function (e) {
						try {
							if (!e.clientX || !e.clientY) {
								return false;
							}
						} catch (e) {
							return false;
						}
						this._activeResizeLastEvent = e;
						var dx = (this.isLeftToRight() ? this.startPoint.x - e.clientX : e.clientX - this.startPoint.x),
								dy = this.startPoint.y - e.clientY,
								newW = this.startSize.w - (this._resizeX ? dx : 0),
								newH = this.startSize.h - (this._resizeY ? dy : 0);
						return this._checkConstraints(newW, newH);
					},
					_checkConstraints: function (newW, newH) {
						if (this.minSize) {
							var tm = this.minSize;
							if (newW < tm.w) {
								newW = tm.w;
							}
							if (newH < tm.h) {
								newH = tm.h;
							}
						}
						if (this.constrainMax && this.maxSize) {
							var ms = this.maxSize;
							if (newW > ms.w) {
								newW = ms.w;
							}
							if (newH > ms.h) {
								newH = ms.h;
							}
						}
						if (this.fixedAspect) {
							var ta = this._aspect[this._aspect.prop];
							if (newW < newH) {
								newH = newW * ta;
							} else {
								if (newH < newW) {
									newW = newH * ta;
								}
							}
						}
						return {
							w: newW,
							h: newH
						};
					},
					_changeSizing: function (e) {
						var tmp = this._getNewCoords(e);
						if (tmp === false) {
							return;
						}
						if (this.targetWidget && _4.isFunction(this.targetWidget.resize)) {
							this.targetWidget.resize(tmp);
						} else {
							if (this.animateSizing) {
								var anim = _4.fx[this.animateMethod]([_4.animateProperty({
									node: this.targetDomNode,
									properties: {
										width: {
											start: this.startSize.w,
											end: tmp.w
										}
									},
									duration: this.animateDuration
								}), _4.animateProperty({
									node: this.targetDomNode,
									properties: {
										height: {
											start: this.startSize.h,
											end: tmp.h
										}
									},
									duration: this.animateDuration
								})]);
								anim.play();
							} else {
								_4.style(this.targetDomNode, {
									width: tmp.w + "px",
									height: tmp.h + "px"
								});
							}
						}
						if (this.intermediateChanges) {
							this.onResize(e);
						}
					},
					_endSizing: function (e) {
						_4.forEach(this._pconnects, _4.disconnect);
						var pub = _4.partial(_4.publish, this.endTopic, [this]);
						if (!this.activeResize) {
							this._resizeHelper.hide();
							this._changeSizing(e);
							setTimeout(pub, this.animateDuration + 15);
						} else {
							pub();
						}
						this._isSizing = false;
						this.onResize(e);
					},
					onResize: function (e) {
					}
				});
				_4.declare("dojox.layout._ResizeHelper", _5._Widget, {
					show: function () {
						_4.fadeIn({
							node: this.domNode,
							duration: 120,
							beforeBegin: function (n) {
								_4.style(n, "display", "");
							}
						}).play();
					},
					hide: function () {
						_4.fadeOut({
							node: this.domNode,
							duration: 250,
							onEnd: function (n) {
								_4.style(n, "display", "none");
							}
						}).play();
					},
					resize: function (dim) {
						_4.marginBox(this.domNode, dim);
					}
				});
			}
			if (!_4._hasResource["dojox.layout.FloatingPane"]) {
				_4._hasResource["dojox.layout.FloatingPane"] = true;
				_4.provide("dojox.layout.FloatingPane");
				_4.experimental("dojox.layout.FloatingPane");
				_4.declare("dojox.layout.FloatingPane", [_6.layout.ContentPane, _5._Templated], {
					closable: true,
					dockable: true,
					resizable: false,
					maxable: false,
					resizeAxis: "xy",
					title: "",
					dockTo: "",
					duration: 400,
					contentClass: "dojoxFloatingPaneContent",
					_showAnim: null,
					_hideAnim: null,
					_dockNode: null,
					_restoreState: {},
					_allFPs: [],
					_startZ: 100,
					templateString: _4.cache("dojox.layout", "resources/FloatingPane.html", "<div class=\"dojoxFloatingPane\" id=\"${id}\">\n\t<div tabindex=\"0\" role=\"button\" class=\"dojoxFloatingPaneTitle\" dojoAttachPoint=\"focusNode\">\n\t\t<span dojoAttachPoint=\"closeNode\" dojoAttachEvent=\"onclick: close\" class=\"dojoxFloatingCloseIcon\"></span>\n\t\t<span dojoAttachPoint=\"maxNode\" dojoAttachEvent=\"onclick: maximize\" class=\"dojoxFloatingMaximizeIcon\">&thinsp;</span>\n\t\t<span dojoAttachPoint=\"restoreNode\" dojoAttachEvent=\"onclick: _restore\" class=\"dojoxFloatingRestoreIcon\">&thinsp;</span>\t\n\t\t<span dojoAttachPoint=\"dockNode\" dojoAttachEvent=\"onclick: minimize\" class=\"dojoxFloatingMinimizeIcon\">&thinsp;</span>\n\t\t<span dojoAttachPoint=\"titleNode\" class=\"dijitInline dijitTitleNode\"></span>\n\t</div>\n\t<div dojoAttachPoint=\"canvas\" class=\"dojoxFloatingPaneCanvas\">\n\t\t<div dojoAttachPoint=\"containerNode\" role=\"region\" tabindex=\"-1\" class=\"${contentClass}\">\n\t\t</div>\n\t\t<span dojoAttachPoint=\"resizeHandle\" class=\"dojoxFloatingResizeHandle\"></span>\n\t</div>\n</div>\n"),
					attributeMap: _4.delegate(_5._Widget.prototype.attributeMap, {
						title: {
							type: "innerHTML",
							node: "titleNode"
						}
					}),
					postCreate: function () {
						this.inherited(arguments);
						new _4.dnd.Moveable(this.domNode, {
							handle: this.focusNode
						});
						if (!this.dockable) {
							this.dockNode.style.display = "none";
						}
						if (!this.closable) {
							this.closeNode.style.display = "none";
						}
						if (!this.maxable) {
							this.maxNode.style.display = "none";
							this.restoreNode.style.display = "none";
						}
						if (!this.resizable) {
							this.resizeHandle.style.display = "none";
						} else {
							this.domNode.style.width = _4.marginBox(this.domNode).w + "px";
						}
						this._allFPs.push(this);
						this.domNode.style.position = "absolute";
						this.bgIframe = new _5.BackgroundIframe(this.domNode);
						this._naturalState = _4.coords(this.domNode);
					},
					startup: function () {
						if (this._started) {
							return;
						}
						this.inherited(arguments);
						if (this.resizable) {
							if (_4.isIE) {
								this.canvas.style.overflow = "auto";
							} else {
								this.containerNode.style.overflow = "auto";
							}
							this._resizeHandle = new _6.layout.ResizeHandle({
								targetId: this.id,
								resizeAxis: this.resizeAxis
							}, this.resizeHandle);
						}
						if (this.dockable) {
							var _670 = this.dockTo;
							if (this.dockTo) {
								this.dockTo = _5.byId(this.dockTo);
							} else {
								this.dockTo = _5.byId("dojoxGlobalFloatingDock");
							}
							if (!this.dockTo) {
								var _671, _672;
								if (_670) {
									_671 = _670;
									_672 = _4.byId(_670);
								} else {
									_672 = _4.create("div", null, _4.body());
									_4.addClass(_672, "dojoxFloatingDockDefault");
									_671 = "dojoxGlobalFloatingDock";
								}
								this.dockTo = new _6.layout.Dock({
									id: _671,
									autoPosition: "south"
								}, _672);
								this.dockTo.startup();
							}
							if ((this.domNode.style.display == "none") || (this.domNode.style.visibility == "hidden")) {
								this.minimize();
							}
						}
						this.connect(this.focusNode, "onmousedown", "bringToTop");
						this.connect(this.domNode, "onmousedown", "bringToTop");
						this.resize(_4.coords(this.domNode));
						this._started = true;
					},
					setTitle: function (_673) {
						_4.deprecated("pane.setTitle", "Use pane.set('title', someTitle)", "2.0");
						this.set("title", _673);
					},
					close: function () {
						if (!this.closable) {
							return;
						}
						_4.unsubscribe(this._listener);
						this.hide(_4.hitch(this, function () {
							this.destroyRecursive();
						}));
					},
					hide: function (_674) {
						_4.fadeOut({
							node: this.domNode,
							duration: this.duration,
							onEnd: _4.hitch(this, function () {
								this.domNode.style.display = "none";
								this.domNode.style.visibility = "hidden";
								if (this.dockTo && this.dockable) {
									this.dockTo._positionDock(null);
								}
								if (_674) {
									_674();
								}
							})
						}).play();
					},
					show: function (_675) {
						var anim = _4.fadeIn({
							node: this.domNode,
							duration: this.duration,
							beforeBegin: _4.hitch(this, function () {
								this.domNode.style.display = "";
								this.domNode.style.visibility = "visible";
								if (this.dockTo && this.dockable) {
									this.dockTo._positionDock(null);
								}
								if (typeof _675 == "function") {
									_675();
								}
								this._isDocked = false;
								if (this._dockNode) {
									this._dockNode.destroy();
									this._dockNode = null;
								}
							})
						}).play();
						this.resize(_4.coords(this.domNode));
						this._onShow();
					},
					minimize: function () {
						if (!this._isDocked) {
							this.hide(_4.hitch(this, "_dock"));
						}
					},
					maximize: function () {
						if (this._maximized) {
							return;
						}
						this._naturalState = _4.position(this.domNode);
						if (this._isDocked) {
							this.show();
							setTimeout(_4.hitch(this, "maximize"), this.duration);
						}
						_4.addClass(this.focusNode, "floatingPaneMaximized");
						this.resize(_4.window.getBox());
						this._maximized = true;
					},
					_restore: function () {
						if (this._maximized) {
							this.resize(this._naturalState);
							_4.removeClass(this.focusNode, "floatingPaneMaximized");
							this._maximized = false;
						}
					},
					_dock: function () {
						if (!this._isDocked && this.dockable) {
							this._dockNode = this.dockTo.addNode(this);
							this._isDocked = true;
						}
					},
					resize: function (dim) {
						dim = dim || this._naturalState;
						this._currentState = dim;
						var dns = this.domNode.style;
						if ("t" in dim) {
							dns.top = dim.t + "px";
						}
						if ("l" in dim) {
							dns.left = dim.l + "px";
						}
						dns.width = dim.w + "px";
						dns.height = dim.h + "px";
						var _676 = {
							l: 0,
							t: 0,
							w: dim.w,
							h: (dim.h - this.focusNode.offsetHeight)
						};
						_4.marginBox(this.canvas, _676);
						this._checkIfSingleChild();
						if (this._singleChild && this._singleChild.resize) {
							this._singleChild.resize(_676);
						}
					},
					bringToTop: function () {
						var _677 = _4.filter(this._allFPs, function (i) {
							return i !== this;
						}, this);
						_677.sort(function (a, b) {
							return a.domNode.style.zIndex - b.domNode.style.zIndex;
						});
						_677.push(this);
						_4.forEach(_677, function (w, x) {
							w.domNode.style.zIndex = this._startZ + (x * 2);
							_4.removeClass(w.domNode, "dojoxFloatingPaneFg");
						}, this);
						_4.addClass(this.domNode, "dojoxFloatingPaneFg");
					},
					destroy: function () {
						this._allFPs.splice(_4.indexOf(this._allFPs, this), 1);
						if (this._resizeHandle) {
							this._resizeHandle.destroy();
						}
						this.inherited(arguments);
					}
				});
				_4.declare("dojox.layout.Dock", [_5._Widget, _5._Templated], {
					templateString: "<div class=\"dojoxDock\"><ul dojoAttachPoint=\"containerNode\" class=\"dojoxDockList\"></ul></div>",
					_docked: [],
					_inPositioning: false,
					autoPosition: false,
					addNode: function (_678) {
						var div = _4.create("li", null, this.containerNode),
								node = new _6.layout._DockNode({
									title: _678.title,
									paneRef: _678
								}, div);
						node.startup();
						return node;
					},
					startup: function () {
						if (this.id == "dojoxGlobalFloatingDock" || this.isFixedDock) {
							this.connect(window, "onresize", "_positionDock");
							this.connect(window, "onscroll", "_positionDock");
							if (_4.isIE) {
								this.connect(this.domNode, "onresize", "_positionDock");
							}
						}
						this._positionDock(null);
						this.inherited(arguments);
					},
					_positionDock: function (e) {
						if (!this._inPositioning) {
							if (this.autoPosition == "south") {
								setTimeout(_4.hitch(this, function () {
									this._inPositiononing = true;
									var _679 = _4.window.getBox();
									var s = this.domNode.style;
									s.left = _679.l + "px";
									s.width = (_679.w - 2) + "px";
									s.top = (_679.h + _679.t) - this.domNode.offsetHeight + "px";
									this._inPositioning = false;
								}), 125);
							}
						}
					}
				});
				_4.declare("dojox.layout._DockNode", [_5._Widget, _5._Templated], {
					title: "",
					paneRef: null,
					templateString: "<li dojoAttachEvent=\"onclick: restore\" class=\"dojoxDockNode\">" + "<span dojoAttachPoint=\"restoreNode\" class=\"dojoxDockRestoreButton\" dojoAttachEvent=\"onclick: restore\"></span>" + "<span class=\"dojoxDockTitleNode\" dojoAttachPoint=\"titleNode\">${title}</span>" + "</li>",
					restore: function () {
						this.paneRef.show();
						this.paneRef.bringToTop();
						this.destroy();
					}
				});
			}
			if (!_4._hasResource["pundit.XpointersHelper"]) {
				_4._hasResource["pundit.XpointersHelper"] = true;
				_4.provide("pundit.XpointersHelper");
				_4.declare("pundit.XpointersHelper", pundit.BaseComponent, {
					opts: {
						wrapNodeName: "span",
						wrapNodeClass: "cons",
						contentClasses: ["pundit-content"],
						ignoreClasses: ["cons", "pundit-icon-annotation"]
					},
					constructor: function (_67a) {
						var self = this;
						self.log("xpointersHelper up and running");
					},
					getContentURIs: function () {
						var self = this,
								_67b = [];
						_67b.push(document.location.href);
						for (var i = self.opts.contentClasses.length - 1; i >= 0; i--) {
							_4.query("." + self.opts.contentClasses[i]).forEach(function (node) {
								_67b.push(_4.attr(node, "about"));
							});
						}
						self.log("# getContentURIs: " + _67b.length + " new uris found");
						return _67b;
					},
					updateDOM: function (_67c, _67d) {
						var self = this;
						for (i = _67c.length - 1; i > 0; i--) {
							var _67e = _67c[i - 1],
									end = _67c[i];
							if (_67d[i].length) {
								self.log("## Updating DOM, xpath " + i + ": " + _67d[i].join(" "));
								self.wrapXPaths(_67e, end, self.opts.wrapNodeName, _67d[i].join(" ") + " " + self.opts.wrapNodeClass);
							}
						}
						self.log("Dom succesfully updated!");
					},
					wrapXPaths: function (_67f, _680, _681, _682) {
						var self = this,
								_683 = _681 || "span",
								_684 = _682 || "highlight",
								_685 = document.createRange(),
								_686 = self.getNodeFromXpath(_67f.xpath),
								_687 = self.getNodeFromXpath(_680.xpath);
						if (!_67f.xpath.match(/\[[0-9]+\]$/) && !_680.xpath.match(/\[[0-9]+\]$/)) {
							_685.selectNode(_686.childNodes[_67f.offset]);
						} else {
							if (!self.isElementNode(_686)) {
								_685.setStart(_686, _67f.offset);
							} else {
								_685.setStart(_686, _67f.offset);
							}
							if (!self.isElementNode(_687)) {
								_685.setEnd(_687, _680.offset);
							} else {
								_685.setEndAfter(_687);
							}
						}
						self.wrapElement(_685.commonAncestorContainer, _685, _683, _684);
					},
					wrapElement: function (_688, _689, _68a, _68b) {
						var self = this;
						if (_688.childNodes && _688.childNodes.length > 0) {
							for (var i = (_688.childNodes.length - 1); i >= 0 && _688.childNodes[i]; i--) {
								self.wrapElement(_688.childNodes[i], _689, _68a, _68b);
							}
						} else {
							if (self.isTextNodeInsideRange(_688, _689)) {
								self.wrapNode(_688, _689, _68a, _68b);
							} else {
								if (self.isImageNodeInsideRange(_688, _689)) {
									self.wrapNode(_688, _689, _68a, _68b);
								}
							}
						}
					},
					isTextNodeInsideRange: function (node, _68c) {
						var self = this,
								_68d;
						if (node.nodeType !== Node.TEXT_NODE) {
							return false;
						}
						_68d = node.textContent.replace(/ /g, "").replace(/\n/, "");
						if (!node.data || _68d === "" || _68d === " ") {
							return false;
						}
						return self.isNodeInsideRange(node, _68c);
					},
					isImageNodeInsideRange: function (node, _68e) {
						var self = this;
						if (node.nodeType !== Node.ELEMENT_NODE) {
							return false;
						}
						if (node.tagName.toLowerCase() !== "img") {
							return false;
						}
						return self.isNodeInsideRange(node, _68e);
					},
					isNodeInsideRange: function (node, _68f) {
						var _690 = document.createRange();
						try {
							_690.selectNode(node);
						} catch (e) {
							_690.selectNodeContents(node);
						}
						if (_68f.compareBoundaryPoints(Range.END_TO_START || 3, _690) != -1 || _68f.compareBoundaryPoints(Range.START_TO_END || 1, _690) != 1) {
							return false;
						}
						return true;
					},
					wrapNode: function (_691, _692, _693, _694) {
						var self = this,
								r2 = document.createRange();
						if (_691 === _692.startContainer || _691 === _692.endContainer) {
							r2.setStart(_691, (_691 === _692.startContainer) ? _692.startOffset : 0);
							r2.setEnd(_691, (_691 === _692.endContainer) ? _692.endOffset : _691.length);
						} else {
							r2.selectNode(_691);
						}
						r2.surroundContents(self.createWrapNode(_693, _694));
					},
					createWrapNode: function (_695, _696) {
						var _697 = document.createElement(_695);
						_4.query(_697).addClass(_696);
						return _697;
					},
					getClassesForNewXpointers: function (_698, _699, _69a, _69b) {
						var self = this,
								_69c = [],
								_69d = [];
						for (var i = 0; i < _699.length - 1; i++) {
							var _69e = _699[i],
									end = _699[i + 1],
									_69f = self.getStartingXPs(_698, _69a, _69e.xpath, _69e.offset),
									_6a0 = self.getEndingXPs(_698, _69a, _69e.xpath, _69e.offset);
							_69c = self.addToArray(_69c, _69f);
							_69c = self.removeFromArray(_69c, _6a0);
							var _6a1 = [];
							for (var j = _69c.length - 1; j >= 0; j--) {
								var xp = _69c[j];
								for (var k = _69b[xp].length - 1; k >= 0; k--) {
									_6a1.push(_69b[xp][k]);
								}
							}
							_69d[i + 1] = _6a1;
						}
						self.log("Got classes for new xpointers");
						return _69d;
					},
					getStartingXPs: function (_6a2, _6a3, _6a4, _6a5) {
						var self = this,
								ret = [];
						for (var i = _6a2.length - 1; i >= 0; i--) {
							var xp = _6a2[i];
							if (_6a3[xp].startxpath === _6a4 && _6a3[xp].startoffset === _6a5) {
								ret.push(xp);
							}
						}
						return ret;
					},
					getEndingXPs: function (_6a6, _6a7, _6a8, _6a9) {
						var self = this,
								ret = [];
						for (var i = _6a6.length - 1; i >= 0; i--) {
							var xp = _6a6[i];
							if (_6a7[xp].endxpath === _6a8 && _6a7[xp].endoffset === _6a9) {
								ret.push(xp);
							}
						}
						return ret;
					},
					splitAndSortXPaths: function (_6aa) {
						var self = this,
								x = [],
								_6ab = self.getNodeFromXpath("//body");
						for (var _6ac in _6aa) {
							self.log("## Splitting and sorting " + _6ac);
							var _6ad = document.createRange(),
									node = self.getNodeFromXpath(_6aa[_6ac].startxpath);
							_6ad.setStart(_6ab, 0);
							_6ad.setEnd(node, _6aa[_6ac].startoffset);
							x.push({
								xpointer: _6ac,
								xpath: _6aa[_6ac].startxpath,
								offset: _6aa[_6ac].startoffset,
								range: _6ad
							});
							_6ad = document.createRange();
							node = self.getNodeFromXpath(_6aa[_6ac].endxpath);
							_6ad.setStart(_6ab, 0);
							_6ad.setEnd(node, _6aa[_6ac].endoffset);
							x.push({
								xpointer: _6ac,
								xpath: _6aa[_6ac].endxpath,
								offset: _6aa[_6ac].endoffset,
								range: _6ad
							});
						}
						x.sort(self._sortFunction);
						x = self.unique(x);
						return x;
					},
					getXPathsFromXPointers: function (_6ae) {
						var self = this,
								_6af = [],
								_6b0 = [],
								_6b1 = {};
						for (var i = _6ae.length - 1; i >= 0; i--) {
							_6b0 = self.addToArray(_6b0, [_6ae[i]]);
						}
						for (var i = _6ae.length - 1; i >= 0; i--) {
							var xp = _6ae[i],
									obj = self.xPointerToXPath(xp);
							if (obj.valid) {
								_6b1[xp] = obj;
							} else {
								self.log("REMOVING " + xp + " from xpointers, it's not valid :(");
								_6b0 = self.removeFromArray(_6b0, [xp]);
								_6af.push(xp);
							}
						}
						self.log("# Consolidating " + _6b0.length + " valid xpointers out of " + _6ae.length + " passed in.");
						return {
							invalidXpointers: _6af,
							xpaths: _6b1,
							xpointers: _6b0
						};
					},
					xPointerToXPath: function (_6b2) {
						var self = this,
								_6b3, ret = {}, foo, _6b4, _6b5;
						_6b3 = _6b2.split("#xpointer(start-point(string-range(")[1].split("))/range-to(string-range(");
						foo = _6b3[0].split(",'',");
						ret.startxpath = foo[0];
						ret.startoffset = foo[1];
						foo = _6b3[1].substr(0, _6b3[1].length - 3).split(",'',");
						ret.endxpath = foo[0];
						ret.endoffset = foo[1];
						_6b4 = self.getNodeFromXpath(ret.startxpath);
						_6b5 = self.getNodeFromXpath(ret.endxpath);
						ret.valid = self.isValidRange(_6b4, ret.startoffset, _6b5, ret.endoffset);
						return ret;
					},
					isValidRange: function (_6b6, _6b7, _6b8, _6b9) {
						try {
							var r = document.createRange();
							r.setStart(_6b6, _6b7);
							r.setEnd(_6b8, _6b9);
							return true;
						} catch (e) {
							return false;
						}
					},
					isValidXPointer: function (xp) {
						var self = this,
								_6ba, ret = {}, foo, _6bb, _6bc;
						_6ba = xp.split("#xpointer(start-point(string-range(")[1].split("))/range-to(string-range(");
						foo = _6ba[0].split(",'',");
						ret.startxpath = foo[0];
						ret.startoffset = foo[1];
						foo = _6ba[1].substr(0, _6ba[1].length - 3).split(",'',");
						ret.endxpath = foo[0];
						ret.endoffset = foo[1];
						console.log("Start: ", ret.startxpath);
						_6bb = self.getNodeFromXpath(ret.startxpath);
						console.log("Start: ", _6bb, ret.startoffset);
						console.log("End: ", ret.endxpath);
						_6bc = self.getNodeFromXpath(ret.endxpath);
						console.log("End: ", _6bc, ret.endoffset);
						console.log("Valid start end", _6bb, _6bc);
						console.log("Valid: ", self.isValidRange(_6bb, ret.startoffset, _6bc, ret.endoffset));
					},
					getNodeFromXpath: function (_6bd) {
						var self = this,
								_6be;
						_6be = document.evaluate(_6bd, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
						return _6be.singleNodeValue;
					},
					addToArray: function (arr, add) {
						return arr.concat(add);
					},
					removeFromArray: function (arr, rem) {
						var ret = [];
						for (var i = arr.length - 1; i >= 0; i--) {
							if (rem.indexOf(arr[i]) === -1) {
								ret.push(arr[i]);
							}
						}
						return ret;
					},
					unique: function (arr) {
						var _6bf = [],
								len = arr.length;
						_6bf[0] = arr[0];
						for (var i = 1, j = 0; i < len; i++) {
							if (arr[i].xpath != _6bf[j].xpath || arr[i].offset != _6bf[j].offset) {
								_6bf[++j] = arr[i];
							}
						}
						return _6bf;
					},
					_sortFunction: function (a, b) {
						return a.range.compareBoundaryPoints(Range.END_TO_END, b.range);
					},
					extractContentFromRange: function (_6c0) {
						if (_6c0 === null) {
							return "";
						}
						var self = this,
								_6c1 = "",
								_6c2 = _6c0.cloneContents(),
								_6c3 = _6c2.childNodes,
								len = _6c3.length;
						for (var i = 0; i < len; i++) {
							_6c1 += self.extractContentFromNode(_6c3[i]);
						}
						return _6c1;
					},
					extractContentFromNode: function (node) {
						var self = this,
								_6c4 = "",
								type = node.nodeType;
						if (self.isElementNode(node)) {
							if (node.nodeName.toUpperCase() === "IMG") {
								var src;
								if (src = _4.attr(node, "src")) {
									var idx = src.lastIndexOf("/");
									if (idx !== -1) {
										src = src.substr(idx + 1, src.length - idx);
									}
								} else {
									src = "unknown location";
								}
								_6c4 += "[img: " + src + "]";
							} else {
								var _6c5 = node.childNodes,
										len = _6c5.length;
								for (var i = 0; i < len; i++) {
									_6c4 += self.extractContentFromNode(_6c5[i]);
								}
							}
						} else {
							if (!self.isCommentNode(node)) {
								if (typeof (node.textContent) !== "undefined") {
									_6c4 += node.textContent;
								}
							}
						}
						return _6c4;
					},
					extractContentFromXpointer: function (xp) {
						var self = this;
					},
					isUIButton: function (node) {
						var self = this;
						if (!self.isElementNode(node)) {
							return false;
						}
						if (node.nodeName.toUpperCase() !== "A") {
							return false;
						}
						if (_4.hasClass(node, "pundit-icon-annotation")) {
							return true;
						}
						return false;
					},
					isIgnoreNode: function (node) {
						var self = this;
						if (!self.isElementNode(node)) {
							return false;
						}
						var i, c = self.opts.ignoreClasses;
						for (i = c.length; i--;) {
							if (_4.hasClass(node, c[i])) {
								return true;
							}
						}
						return false;
					},
					isTextNode: function (node) {
						return node.nodeType === Node.TEXT_NODE;
					},
					isElementNode: function (node) {
						return node.nodeType === Node.ELEMENT_NODE;
					},
					isCommentNode: function (node) {
						return node.nodeType === Node.COMMENT_NODE;
					},
					isWrapNode: function (node) {
						var self = this;
						if (!self.isElementNode(node)) {
							return false;
						}
						if (node.nodeName.toUpperCase() !== self.opts.wrapNodeName.toUpperCase()) {
							return false;
						}
						if (_4.hasClass(node, self.opts.wrapNodeClass)) {
							return true;
						}
						return false;
					},
					isWrappedElementNode: function (node) {
						var self = this;
						if (!self.isWrapNode(node)) {
							return false;
						}
						if (!self.isElementNode(node.firstChild)) {
							return false;
						}
						return true;
					},
					isWrappedTextNode: function (node) {
						var self = this;
						if (!self.isWrapNode(node)) {
							return false;
						}
						if (!self.isTextNode(node.firstChild)) {
							return false;
						}
						return true;
					},
					isContentNode: function (node) {
						var self = this;
						if (!self.isElementNode(node)) {
							return false;
						}
						var i, c = self.opts.contentClasses;
						for (i = c.length; i--;) {
							if (_4.hasClass(node, c[i])) {
								return true;
							}
						}
						return false;
					},
					mergeTextNodes: function (node) {
						var self = this;
						if (!node) {
							return;
						}
						if ((typeof (node.childNodes) !== "undefined") && (node.childNodes.length > 0)) {
							var i = node.childNodes.length - 1;
							try {
								var _6c6, _6c7;
								while (_6c6 = node.childNodes[i--]) {
									if (self.isTextNode(_6c6) && (_6c7 = node.childNodes[i]) && self.isTextNode(_6c7)) {
										_6c7.nodeValue = _6c7.nodeValue + _6c6.nodeValue;
										node.removeChild(_6c6);
									} else {
										if (self.isElementNode(_6c6)) {
											self.mergeTextNodes(_6c6);
										}
									}
								}
							} catch (err) {
								console.log("ERROR while merging text nodes!");
							}
						}
					},
					getXpFromNode: function (node) {
						var _6c8 = document.createRange();
						_6c8.selectNode(node);
						return fragmentHandler.range2xpointer(fragmentHandler.dirtyRange2cleanRange(_6c8));
					},
					getXpFromChildNodes: function (node) {
						var self = this,
								_6c9 = self.getRangeFromChildNodes(node);
						return fragmentHandler.range2xpointer(fragmentHandler.dirtyRange2cleanRange(_6c9));
					},
					getRangeFromChildNodes: function (node) {
						var _6ca = document.createRange();
						_6ca.setStart(node.firstChild, 0);
						_6ca.setEnd(node.lastChild, 0);
						return _6ca;
					},
				});
			}
			if (!_4._hasResource["pundit.RemoteStorageHandler"]) {
				_4._hasResource["pundit.RemoteStorageHandler"] = true;
				_4.provide("pundit.RemoteStorageHandler");
				_4.declare("pundit.RemoteStorageHandler", pundit.BaseComponent, {
					constructor: function () {
						var self = this;
						self.createCallback(["storeRead", "storeSave", "storeError"]);
						self.reader = new pundit.AnnotationReader({
							debug: self.opts.debug
						});
						self.reader.onStorageGet(function (data) {
							self.log("Storage read from server");
							if (data) {
								self.log("Firing onStoreRead");
								self.fireOnStoreRead(data);
							}
						});
						self.reader.onStorageError(function (_6cb) {
							self.fireOnStoreError();
						});
						self.writer = new pundit.AnnotationWriter();
						self.writer.onStorageError(function (_6cc) {
							self.fireOnStoreError();
						});
					},
					exists: function (key) {
					},
					save: function (key, val) {
						var _6cd = new Date(),
								_6ce = _4.toJson({
									value: val,
									created: _6cd.getTime()
								});
						this.writer.postRemoteStorage(key, _6ce);
					},
					read: function (key) {
						this.reader.getDataFromStorage(key);
					},
					clearStore: function () {
					},
					clearKey: function (key) {
					},
					get: function (key, _6cf, _6d0) {
						var self = this,
								args;
						if (typeof (_6cf) !== "function") {
							self.log("ERROR: get() with no success callback.");
							return;
						}
						if (typeof (key) !== "string" || key.length === 0) {
							self.log("ERROR: get() with invalid key: " + key);
							return;
						}
						args = {
							url: ns.annotationServerStorage + key,
							headers: {
								"Accept": "application/json"
							},
							failOk: true,
							handleAs: "json",
							load: function (r) {
								if (r) {
									self.log("Success get() response for key " + key);
									_6cf.call(self, r);
								} else {
									self.log("Empty get() response for key " + key);
									_6cf.call(self, []);
								}
								return false;
							},
							error: function (_6d1, req) {
								if (req.xhr.status === 204) {
									self.log("204 Empty store from remote for key " + key + ", firing ok anyway");
									_6cf.call(self, []);
									return false;
								}
								self.log("ERROR: get() for key " + key);
								if (typeof (_6d0) === "function") {
									_6d0.call(self, _6d1, req);
								}
							}
						};
						requester.xGet(args);
					},
					set: function (key, _6d2, _6d3, _6d4) {
						if (typeof (key) !== "string" || key.length === 0) {
							self.log("ERROR: set() with invalid key: " + key);
							return;
						}
						var self = this,
								_6d5 = _4.toJson({
									value: _6d2,
									created: (new Date()).getTime()
								}),
								args = {
									url: ns.annotationServerStorage + key,
									postData: _6d5,
									headers: {
										"Content-Type": "application/json;charset=UTF-8;"
									},
									handleAs: "text",
									load: function (data) {
										self.log("Success set() for key " + key);
										if (typeof (_6d3) === "function") {
											_6d3.call(self, data);
										}
									},
									error: function (_6d6) {
										self.log("ERROR: set() for key " + key);
										if (typeof (_6d4) === "function") {
											_6d4.call(self, data);
										}
									}
								};
						requester.xPost(args);
					}
				});
			}
			if (!_4._hasResource["pundit.LocalStorageHandler"]) {
				_4._hasResource["pundit.LocalStorageHandler"] = true;
				_4.provide("pundit.LocalStorageHandler");
				_4.declare("pundit.LocalStorageHandler", pundit.BaseComponent, {
					storeType: "localStorage",
					constructor: function (_6d7) {
						if (typeof (localStorage) !== "undefined") {
							this.createCallback(["storeRead", "storeSave"]);
						} else {
							alert("Local Storage not available in your browser :-(");
						}
					},
					exists: function (key) {
						if ((typeof (localStorage[key]) !== "undefined") && (localStorage[key] !== null)) {
							return true;
						} else {
							return false;
						}
					},
					save: function (key, val) {
						var _6d8 = new Date();
						localStorage[key] = _4.toJson({
							value: val,
							created: _6d8.getTime()
						});
					},
					read: function (key) {
						return _4.fromJson(localStorage[key]);
					},
					clearStore: function () {
						localStorage.clear();
					},
					clearKey: function (key) {
						if (typeof (localStorage[key]) !== "undefined") {
							localStorage.removeItem(key);
						}
					}
				});
			}
			if (!_4._hasResource["pundit.CookiesStorageHandler"]) {
				_4._hasResource["pundit.CookiesStorageHandler"] = true;
				_4.provide("pundit.CookiesStorageHandler");
				_4.declare("pundit.CookiesStorageHandler", pundit.BaseComponent, {
					constructor: function (_6d9) {
						var self = this;
						_4.cookie("mystestcookie", "mytestcookie");
						if (typeof (_4.cookie("mystestcookie")) !== "undefined") {
							_4.cookie("mystestcookie", {
								expires: -1
							});
							this.createCallback(["storeRead", "storeSave"]);
							self.log("Using Cookie storage");
						} else {
							alert("Cookie Storage cannot be created. :-( Check you cookies preferences!");
							return false;
						}
					},
					exists: function (key) {
						if (typeof (_4.cookie(key)) !== "undefined") {
							return true;
						} else {
							return false;
						}
					},
					save: function (key, val) {
						var _6da = new Date();
						_4.cookie(key, _4.toJson({
							value: val,
							created: _6da.getTime()
						}), {
							expires: 30
						});
					},
					read: function (key) {
						this.fireOnStoreRead(_4.fromJson(_4.cookie(key)));
					},
					clearStore: function () {
						var _6db = document.cookie.split(";");
						for (i = 0; i < _6db.length; i++) {
							var _6dc = _6db[i].split("=")[0];
							_4.cookie(_6dc, "", {
								expires: -1
							});
						}
					},
					clearKey: function (key) {
						_4.cookie(key, "", {
							expires: -1
						});
					}
				});
			}
			if (!_4._hasResource["pundit.GUI"]) {
				_4._hasResource["pundit.GUI"] = true;
				_4.provide("pundit.GUI");
				_4.declare("pundit.GUI", pundit.BaseComponent, {
					opts: {
						positionPanelsTimerMS: 150,
						topbarHeight: 25,
						initialWindowHeight: 200,
						collapsedWindowHeight: 0,
						minWindowHeight: 130,
						maxWindowHeight: 500
					},
					constructor: function (_6dd) {
						var self = this;
						self.createCallback(["windowResize", "windowClose", "windowAnnotationResize", "resizeEnd"]);
						self.panels = {};
						self.positionPanelsTimer = null;
						self.resizeEndTimer = null;
						self._currentWindowHeight = 0;
						self.initWindow();
						self.initBehaviors();
						self.resizeSemlibWindow(self.opts.initialWindowHeight);
						self.show();
						_PUNDIT.init.onInitDone(function () {
							self.resizeSemlibWindow(self.opts.initialWindowHeight);
							self.show();
							if (_PUNDIT.myPundit.logged === true) {
								_4.query("#pundit-gui-topbar").addClass("pundit-logged-in").removeClass("pundit-logged-off");
							}
							semlibMyItems.onMyItemAdded(function (_6de) {
								self.updateNewMyItems(_6de);
							});
						});
						_PUNDIT.requester.onLogin(function (data) {
							self.show();
							_4.query("#pundit-gui-topbar").addClass("pundit-logged-in").removeClass("pundit-logged-off");
						});
						_PUNDIT.requester.onLogout(function (data) {
							_4.query("#pundit-gui-topbar").addClass("pundit-logged-off").removeClass("pundit-logged-in");
						});
						self.log("GUI up and running!");
					},
					initWindow: function () {
						var self = this,
								sw, aw;
						sw = "<div id=\"pundit-gui-topbar\" class=\"pundit-base pundit-logged-off pundit-disable-annotation\">";
						sw += "<span id=\"pundit-gui-topbar-title\">Pundit</span>";
						sw += "<span class=\"pundit-gui-button\" id=\"pundit-aw-expander\"><span class=\"pundit-annotations-expand-icon\"></span></span>";
						sw += "<span class=\"pundit-gui-button\" id=\"pundit-gui-expander\"><span class=\"pundit-window-expand-icon\"></span></span>";
						sw += "</div>";
						sw += "<div id=\"pundit-gui\" class=\"pundit-base tundra startup pundit-disable-annotation pundit-stop-wheel-propagation\"\">";
						sw += "<div id=\"pundit-gui-resize-handler\"></div>";
						sw += "<ul id=\"pundit-gui-panel-container\" class=\"pundit-horizontal-list\">";
						sw += "<li id=\"pundit-gui-left\" class=\"pundit-stop-wheel-propagation\"><div id=\"pundit-gui-preview\" class=\"pundit-moreinfo-panel\"></div></li>";
						sw += "<li id=\"pundit-gui-center\"></li>";
						sw += "   <li id=\"pundit-gui-right\"></li>";
						sw += "</ul>";
						sw += "<ul id=\"pundit-gui-footer\" class=\"pundit-horizontal-list\">";
						sw += "<li id=\"pundit-gui-footer-left\"></li>";
						sw += "<li id=\"pundit-gui-footer-center\">";
						sw += "<span class=\"pundit-gui-button\" id=\"pundit-tab-vocabs\">Vocabulary</span>";
						sw += "<span class=\"pundit-gui-button\" id=\"pundit-tab-page-items\"><span id=\"pundit-page-items-number\" class=\"pundit-items-number\">0</span>Page Items</span>";
						sw += "<span class=\"pundit-gui-button pundit-selected\" id=\"pundit-tab-my-items\"><span id=\"pundit-my-items-number\" class=\"pundit-items-number\">0</span> My Items</span>";
						sw += "</li>";
						sw += "<li id=\"pundit-gui-footer-right\">";
						sw += "<span class=\"pundit-gui-button pundit-selected\" id=\"pundit-tab-tc\">Triple Composer</span>";
						sw += "</li>";
						sw += "</ul>";
						sw += "</div>";
						_4.query("body").append(sw);
						aw = "<div id=\"pundit-aw\" class=\"pundit-base startup pundit-disable-annotation\" >";
						aw += "<div class=\"pundit-shown-content\"></div>";
						aw += "</div>";
						_4.query("body").append(aw);
						self.resizeAnnotationWindow();
					},
					show: function () {
						var self = this;
						_4.addClass("pundit-gui", "pundit-hidden");
						_4.removeClass("pundit-gui", "startup");
						_4.query("body").addClass("pundit-gui-hidden");
						_4.addClass("pundit-aw", "pundit-hidden");
						_4.removeClass("pundit-aw", "startup");
						_4.query("body").addClass("pundit-aw-hidden");
						_4.style("pundit-gui", "height", self.opts.collapsedWindowHeight + "px");
						_4.query("body").style({
							"marginTop": self.opts.collapsedWindowHeight + self.opts.topbarHeight + "px",
							"background-position-y": self.opts.collapsedWindowHeight + self.opts.topbarHeight + "px"
						});
						_4.query("#pundit-aw").style("marginTop", self.opts.collapsedWindowHeight + self.opts.topbarHeight + 1 + "px");
						setTimeout(function () {
							self.resizeAnnotationWindow();
						}, 500);
					},
					hide: function () {
						_4.removeClass("pundit-gui", "pundit-hidden pundit-shown");
						_4.addClass("pundit-gui", "startup");
						_4.query("body").removeClass("pundit-gui-hidden pundit-gui-shown");
						_4.removeClass("pundit-aw", "pundit-hidden pundit-shown");
						_4.addClass("pundit-aw", "startup");
						_4.query("body").removeClass("pundit-aw-hidden pundit-aw-shown");
					},
					initBehaviors: function () {
						var self = this;
						_PUNDIT.init.onInitDone(function () {
							tooltip_viewer.onConsolidate(function () {
								self.positionPanels();
							});
							_4.connect(_4.byId("pundit-mypundit-myitems-button"), "onclick", function () {
								self.show_pundittabmyitems();
								_4.removeClass("pundit-new-myitems", "pundit-visible");
							});
						});
						_4.connect(_4.byId("pundit-gui-expander"), "onclick", function () {
							self.toggleWindow();
						});
						_4.connect(_4.byId("pundit-aw-expander"), "onclick", function () {
							self.toggleAnnotationWindow();
						});
						var _6df = {
							"#pundit-tab-page-items": {
								container: "#pundit-page-items-container",
								filter: function () {
									semlibItems.showOnlyItems(_4.query("#pundit-items li"));
								}
							},
							"#pundit-tab-my-items": {
								container: "#pundit-my-items-container",
								filter: function () {
									semlibMyItems.showOnlyItems(pundit - items.getNodesWhereField("favorite", true));
								}
							},
							"#pundit-tab-vocabs:": {
								container: "#pundit-vocabs-container"
							}
						};
						for (var tab in _6df) {
							var f = (function (but, tab) {
								return function () {
									if (!self.isWindowOpen()) {
										self.toggleWindow();
									}
									_4.query("#pundit-gui-center .pundit-tab, #pundit-gui-footer-center .pundit-gui-button").removeClass("pundit-selected");
									_4.query(but).addClass("pundit-selected");
									_4.query(tab.container).addClass("pundit-selected");
									if (but === "#pundit-tab-my-items") {
										_4.removeClass("pundit-new-myitems", "pundit-visible");
										semlibMyItems.emptyNewMyItems();
									}
								};
							})(tab, _6df[tab]);
							self["show_" + tab.substr(1).replace(/-/g, "")] = f;
							_4.connect(_4.query(tab)[0], "onclick", f);
						}
						var _6e0 = {
							"#pundit-tab-tc": "#pundit-tc-container"
						};
						for (var tab in _6e0) {
							var f = (function (but, pan) {
								return function () {
									if (!self.isWindowOpen()) {
										self.toggleWindow();
									}
									_4.query("#pundit-gui-right .pundit-tab, #pundit-gui-footer-right .pundit-gui-button").removeClass("pundit-selected");
									_4.query(but).addClass("pundit-selected");
									_4.query(pan).addClass("pundit-selected");
								};
							})(tab, _6e0[tab]);
							self["show_" + tab.substr(1)] = f;
							_4.connect(_4.query(tab)[0], "onclick", f);
						}
						_4.connect(_4.byId("pundit-gui-resize-handler"), "mousedown", function (evt) {
							if (evt.button === _4.mouseButtons.LEFT) {
								evt.stopPropagation();
								_4.addClass("pundit-gui-resize-handler", "dragging");
								b = _4.query("body")[0];
								_4.style(b, "-webkit-user-select", "none");
								_4.style(b, "user-select", "none");
								self._isResizing = true;
								self._currentY = evt.clientY - evt.offsetY;
								self._offsetY = evt.offsetY;
								self._moveListener = _4.connect(_4.doc, "mousemove", function (e) {
									e.stopPropagation();
									if (!self._isResizing) {
										_4.disconnect(self._moveListener);
										return false;
									}
									if (e.pageY !== self._currentY) {
										self._currentY = e.clientY - self._offsetY - self.opts.topbarHeight;
										_4.style("pundit-gui-resize-handler", "top", self._currentY + "px");
									}
								});
							}
						});
						_4.connect(_4.doc, "mouseup", function (evt) {
							if (self._isResizing) {
								var b = _4.query("body")[0];
								_4.style(b, "-webkit-user-select", "text");
								_4.style(b, "user-select", "text");
								_4.removeClass("pundit-gui-resize-handler", "dragging");
								_4.disconnect(self._moveListener);
								self._isResizing = false;
								self.resizeSemlibWindow(evt.clientY - self._offsetY - self.opts.topbarHeight);
								if (_4.exists("pundit-zoomed-fragment")) {
									_4.destroy("pundit-zoomed-fragment");
									clearTimeout(self.positionPanelsTimer);
									self.positionPanelsTimer = setTimeout(function () {
										tooltip_viewer.zoomOnXpointer(tooltip_viewer.zoomedXp);
									}, 1100);
								}
							}
						});
						if (!_4.isMozilla) {
							_4.behavior.add({
								".pundit-stop-wheel-propagation": {
									"onmousewheel": function (e) {
										self.handleScroll(e);
										_4.stopEvent(e);
									}
								}
							});
						} else {
							_4.behavior.add({
								".pundit-stop-wheel-propagation": {
									"DOMMouseScroll": function (e) {
										self.handleScroll(e);
										_4.stopEvent(e);
									}
								}
							});
						}
					},
					handleScroll: function (e) {
						var _6e1 = e.target;
						while (!_4.hasClass(_4.query(_6e1)[0], "pundit-stop-wheel-propagation")) {
							_6e1 = _4.query(_6e1).parent()[0];
						}
						var h = _4.position(_4.query(_6e1)[0]).h;
						var dy = e.wheelDeltaY;
						if (Math.abs(dy) > h) {
							if (dy > 0) {
								dy = (h / 2);
							} else {
								dy = -(h / 2);
							}
						}
						_4.query(_6e1)[0].scrollTop -= dy;
						_4.stopEvent(e);
					},
					toggleWindow: function () {
						var self = this;
						self.fireOnWindowClose();
						if (self.isWindowOpen()) {
							_4.style("pundit-gui", {
								"height": self.opts.collapsedWindowHeight + "px"
							});
							_4.query("body").style({
								"marginTop": self.opts.collapsedWindowHeight + self.opts.topbarHeight + "px",
								"background-position-y": self.opts.collapsedWindowHeight + self.opts.topbarHeight + "px"
							});
							self.fixFixedNodeTopPosition(-self._currentWindowHeight);
							_4.query("#pundit-aw").style("marginTop", self.opts.collapsedWindowHeight + self.opts.topbarHeight + "px");
						} else {
							_4.style("pundit-gui", {
								"height": self._currentWindowHeight + "px"
							});
							_4.query("body").style({
								"marginTop": self._currentWindowHeight + self.opts.topbarHeight + "px",
								"background-position-y": self._currentWindowHeight + "px"
							});
							self.fixFixedNodeTopPosition(self._currentWindowHeight);
							_4.query("#pundit-aw").style("marginTop", self._currentWindowHeight + self.opts.topbarHeight + 1 + "px");
						}
						if (_4.exists("pundit-zoomed-fragment")) {
							_4.destroy("pundit-zoomed-fragment");
							clearTimeout(self.positionPanelsTimer);
							self.positionPanelsTimer = setTimeout(function () {
								tooltip_viewer.zoomOnXpointer(tooltip_viewer.zoomedXp);
							}, 1500);
						}
						_4.query("#pundit-gui").toggleClass("pundit-hidden");
						_4.query("#pundit-gui").toggleClass("pundit-shown");
						_4.query("body").toggleClass("pundit-gui-hidden");
						_4.query("body").toggleClass("pundit-gui-shown");
						self.resizeAnnotationWindow();
					},
					toggleAnnotationWindow: function () {
						var a = _4.query("#pundit-aw"),
								b = _4.query("body"),
								self = this;
						a.toggleClass("pundit-hidden");
						a.toggleClass("pundit-shown");
						b.toggleClass("pundit-aw-hidden");
						b.toggleClass("pundit-aw-shown");
						if (_4.exists("pundit-zoomed-fragment")) {
							_4.destroy("pundit-zoomed-fragment");
							clearTimeout(self.positionPanelsTimer);
							self.positionPanelsTimer = setTimeout(function () {
								tooltip_viewer.zoomOnXpointer(tooltip_viewer.zoomedXp);
							}, 1500);
						}
						self.resizeAnnotationWindow();
					},
					resizeSemlibWindow: function (h) {
						var self = this,
								h = parseInt(h, 10);
						if (typeof self.firstResize === "undefined") {
							self.firstResize = true;
						}
						if (h < self.opts.minWindowHeight) {
							h = self.opts.minWindowHeight;
						}
						if (h > self.opts.maxWindowHeight) {
							h = self.opts.maxWindowHeight;
						}
						_4.style("pundit-gui", "height", h + "px");
						_4.query("#pundit-gui-panel-container, #pundit-gui-left, #pundit-gui-center, #pundit-gui-right").style("height", (h - 30) + "px");
						_4.query(".pundit-tab-content").style("height", (h - 54) + "px");
						var _6e2 = self._currentWindowHeight;
						self._currentWindowHeight = h;
						_4.query("body").style({
							"marginTop": h + self.opts.topbarHeight + "px",
							"background-position-y": h + "px"
						});
						_4.query("#pundit-aw").style("marginTop", h + self.opts.topbarHeight + 1 + "px");
						_4.style("pundit-gui-resize-handler", "top", self._currentWindowHeight + "px");
						self.fireOnWindowResize(h);
						if (self.firstResize) {
							self.firstResize = false;
							self.fixFixedNodeTopPosition(self.opts.collapsedWindowHeight + self.opts.topbarHeight);
						} else {
							self.fixFixedNodeTopPosition(h - _6e2);
						}
						self.resizeAnnotationWindow();
						self.positionPanels();
					},
					resizeAnnotationWindow: function () {
						var self = this,
								b = _4.query("body")[0],
								bh = _4.position(b, true).h;
						clearTimeout(self.resizeEndTimer);
						self.fireOnWindowAnnotationResize();
						_4.style("pundit-aw", "height", bh + "px");
						_4.style(_4.query("#pundit-aw div.pundit-shown-content")[0], "height", bh + "px");
						self.resizeEndTimer = setTimeout(function () {
							self.fireOnResizeEnd();
						}, 1000);
					},
					isWindowOpen: function () {
						return _4.hasClass("pundit-gui", "pundit-shown");
					},
					isAnnotationWindowOpen: function () {
						return _4.hasClass("pundit-aw", "pundit-shown");
					},
					getOpenedPanelsByXpointer: function (xp) {
						var self = this,
								ret = [];
						for (var id in self.panels) {
							if (_4.indexOf(self.panels[id].trackXPs, xp) !== -1) {
								ret.push(self.panels[id]);
							}
						}
						return ret;
					},
					isSomePanelOpen: function () {
						var self = this;
						for (var id in self.panels) {
							return true;
						}
					},
					closePanelByXpointer: function (xp) {
						var self = this;
						self.log("Closing panels by xpointer " + xp.substr(-30));
						for (var id in self.panels) {
							if (_4.indexOf(self.panels[id].trackXPs, xp) !== -1) {
								self.panels[id].close();
							}
						}
						self.positionPanels();
					},
					closeAllPanels: function () {
						var self = this;
						self.log("Closing all panels");
						for (var id in self.panels) {
							self.panels[id].close();
						}
					},
					closePanelById: function (id) {
						var self = this;
						self.log("Closing panels by id " + id);
						if (typeof (self.panels["dialog_" + id + "_content"]) !== "undefined") {
							self.panels["dialog_" + id + "_content"].close();
							self.positionPanels();
						}
					},
					destroyPanelById: function (id) {
						var self = this;
						self.log("Closing panels by id " + id);
						if (typeof (self.panels["dialog_" + id + "_content"]) !== "undefined") {
							self.panels["dialog_" + id + "_content"].close();
						}
					},
					setPositioningXpointer: function (id, xp) {
						this.panels[id].positioningXpointer = xp;
						this.positionPanels();
					},
					togglePanel: function (id) {
						var self = this;
						if (self.panels[id].expanded === false) {
							self.showPanel(id);
						} else {
							self.collapsePanel(id);
						}
						self.positionPanels();
					},
					showPanel: function (id) {
						var self = this;
						_4.query(".pundit-aw-panel").forEach(function (e, i) {
							if (_4.attr(e, "id") !== id) {
								self.collapsePanel(_4.attr(e, "id"));
							}
						});
						self.panels[id].expanded = true;
						_4.removeClass(id, "pundit-hidden");
						_4.addClass("collapse_" + id, "pundit-expanded");
						_4.removeClass("collapse_" + id, "pundit-collapsed");
					},
					collapsePanel: function (id) {
						var self = this;
						self.panels[id].expanded = false;
						_4.addClass(id, "pundit-hidden");
						_4.removeClass("collapse_" + id, "pundit-expanded");
						_4.addClass("collapse_" + id, "pundit-collapsed");
					},
					positionPanels: function () {
						var self = this;
						clearTimeout(self.positionPanelsTimer);
						self.positionPanelsTimer = setTimeout(function () {
							self._positionPanels();
						}, self.opts.positionPanelsTimerMS);
					},
					_positionPanels: function () {
						var self = this,
								_6e3 = parseInt(_4.style(_4.query("body")[0], "marginTop")),
								_6e4 = {}, _6e5 = [],
								_6e6 = {}, _6e7, y;
						for (var id in self.panels) {
							var p = self.panels[id],
									cl = tooltip_viewer.xpointersClasses[p.positioningXpointer];
							if (typeof cl !== "undefined") {
								if (_4.byId("icon_" + cl) === null) {
									continue;
								}
								_6e6 = _4.position(_4.query("span.cons." + cl)[0], true);
								y = _6e6.y - _6e3;
							} else {
								_6e6 = {
									y: _6e3,
									x: 0
								};
								_4.style(id, "top", _6e6.y + "px");
							}
							if (p.expanded) {
								_6e4 = {
									id: id,
									coords: _6e6,
									panelHeight: _4.position(_4.byId(id), true).h
								};
							} else {
								self.collapsePanel(id);
							}
							_6e5.push({
								id: id,
								coords: _6e6,
								panelHeight: _4.position(_4.byId(id), true).h
							});
						}
						_6e5 = _6e5.sort(function (a, b) {
							if (a.coords.y === b.coords.y) {
								return a.coords.x - b.coords.x;
							}
							return a.coords.y - b.coords.y;
						});
						var _6e8 = 28,
								_6e9 = 5,
								_6ea = 0,
								len = _6e5.length;
						for (var i = 0; i < len; i++) {
							if (_6e5[i].coords.y > _6ea) {
								_6e7 = _6e5[i].coords.y;
								_6ea = _6e5[i].coords.y + _6e8 + _6e9;
							} else {
								_6e7 = _6ea;
								_6ea += _6e8 + _6e9;
							}
							if (_6e5[i].id === _6e4.id) {
								_6ea = _6ea - _6e8 + _6e4.panelHeight;
							}
							_4.style(_6e5[i].id, "top", (_6e7 - _6e3) + "px");
						}
					},
					awAdd: function (o) {
						var self = this,
								c = "",
								_6eb = "",
								_6ec;
						self.panels[o.id] = {
							id: o.id,
							content: o.content,
							positioningXpointer: o.positioningXpointer,
							trackXPs: o.xpointers,
							close: o.onClose,
							expanded: true
						};
						for (var i = o.xpointers.length; i--;) {
							var _6ec = tooltip_viewer.xpointersColors[o.xpointers[i]];
							_6eb += "<span id=\"pundit-aw-button-color-" + _6ec + "-" + o.id + "\" class=\"pundit-button-color " + _6ec + "\">" + _6ec + "</span>";
						}
						c += "<div class='pundit-aw-panel' id='" + o.id + "'>";
						c += "<div class='pundit-aw-panel-buttons'>" + _6eb + o.buttons + "</div>";
						c += "<div class='pundit-aw-panel-header'>";
						if (o.xpointers.length === 0) {
							c += "    <span class=pundit-icon-page></span>";
						}
						c += "    <span class='pundit-aw-panel-title'>" + o.title + "</span>";
						c += "    <span class='pundit-aw-button pundit-icon-close' id='close_" + o.id + "'></span><span class='pundit-aw-button pundit-icon-collapse pundit-collapsed' id='collapse_" + o.id + "'></span>";
						c += "</div>";
						c += "<div class='pundit-aw-panel-content' id='content_" + o.id + "'>" + o.content + "</div></div>";
						_4.query("#pundit-aw div.pundit-shown-content").append(c);
						_4.connect(_4.byId("close_" + o.id), "onclick", function () {
							o.onClose();
							self.positionPanels();
						});
						_4.connect(_4.byId("collapse_" + o.id), "onclick", function () {
							self.togglePanel(o.id);
						});
						if (typeof _6ec !== "undefined") {
							_4.connect(_4.byId("pundit-aw-button-color-" + _6ec + "-" + o.id), "onclick", function () {
								if (!self.isAnnotationWindowOpen()) {
									self.toggleAnnotationWindow();
								}
								self.showPanel(o.id);
								self.positionPanels();
							});
						}
						self.showPanel(o.id);
						self.positionPanels();
					},
					initNotebookShareDialog: function (id) {
						var self = this,
								h = "<div id='pundit-login-popup-content' class='off tundra'>";
						h += "<p>To share this notebook just copy the following URL and send it over (e.g. by e-mail).</p>";
						h += "<p><strong>" + ns.annotationServer + "/pages/activate.html?id=" + id + "</strong></p>";
						h += "</div>";
						var _6ed = new _5.Dialog({
							style: "width: 600px"
						});
						_6ed.attr("content", h);
						_6ed.attr("title", "Share Notebook");
						_4.addClass(_4.byId(_6ed.id), "tundra");
						return _6ed;
					},
					fixFixedNodeTopPosition: function (_6ee) {
						_4.query("body *").forEach(function (item) {
							if ((_4.style(item, "position") === "fixed") && (typeof _4.style(item, "bottom") === "undefined" || _4.style(item, "bottom") === "auto") && (typeof _4.style(item, "top") !== "undefined" || _4.style(item, "top") === "auto") && !_4.hasClass(item, "pundit-base")) {
								_4.query(item).style({
									"-webkit-transition-property": "top",
									"-webkit-transition-duration": "1s",
									"-moz-transition-property": "top",
									"-moz-transition-duration": "1s"
								});
								_4.style(item, "top", parseInt(_4.style(item, "top")) + _6ee + "px");
							}
						});
					},
					updateNewMyItems: function (_6ef) {
						var self = this;
						if (_6ef.length > 0) {
							_4.addClass("pundit-new-myitems", "pundit-visible");
							_4.query("#pundit-new-myitems").html("(+" + _6ef.length + ")");
						}
					}
				});
			}
			if (!_4._hasResource["pundit.Items"]) {
				_4._hasResource["pundit.Items"] = true;
				_4.provide("pundit.Items");
				_4.declare("pundit.Items", pundit.BaseComponent, {
					constructor: function (_6f0) {
					},
					init: function (name) {
						var self = this;
						self.crypto = new pundit.Crypto();
						this.name = name;
						var si = "<div id=\"pundit-" + this.name + "-container\" class=\"pundit-tab pundit-selected\">";
						si += "<div class=\"pundit-tab-header\"><ul id=\"pundit-" + this.name + "-filter-list\" class=\"pundit-item-filter-list\">";
						si += "<li id=\"pundit-tab-filter-" + this.name + "-fragment\" class=\"pundit-selected\">Text-fragment</li>";
						si += "<li id=\"pundit-tab-filter-" + this.name + "-images\">Images</li>";
						si += "<li id=\"pundit-tab-filter-" + this.name + "-images-fragment\">Image Fragments</li>";
						si += "<li id=\"pundit-tab-filter-" + this.name + "-entities\">Terms</li>";
						si += "<li id=\"pundit-tab-filter-" + this.name + "-pages\">Pages</li>";
						si += "<li id=\"pundit-tab-filter-" + this.name + "-named\">Named Content</li>";
						si += "<li id=\"pundit-tab-filter-" + this.name + "-suggestions\" class=\"pundit-hidden\"><span class=\"suggestionNumber\"></span> Suggestions</li>";
						si += "</ul></span><span class=\"pundit-sort-items pundit-view-tile \"></span><span class=\"pundit-sort-items pundit-view-list pundit-selected\"></div>";
						si += "<div id=\"pundit-tab-content" + this.name + "\" class=\"pundit-tab-content pundit-stop-wheel-propagation\"><ul id=\"pundit-" + this.name + "\" class=\"pundit-items pundit-view-list\"></ul></div>";
						si += "</div>";
						_4.query("#pundit-gui-center").append(si);
						self.initDnD();
						self.initBehaviors();
						self.createCallback(["itemAdded", "itemRemoved", "allItemsRemoved"]);
						self.log("Pundit" + self.name + "Container up and running..");
						_PUNDIT.init.onInitDone(function () {
							setTimeout(function () {
								self.showOnlyItems(self.getNodesWhereTypeIs(ns.fragments.text));
								_4.query("#pundit-tab-filter-" + self.name + "-fragment").addClass("pundit-selected");
							}, 1000);
						});
					},
					initDnD: function () {
						var self = this;
						self.itemsDnD = new _4.dnd.Source("pundit-" + self.name, {
							copyOnly: true,
							creator: self.itemNodeCreator,
							checkAcceptance: function () {
								return false;
							}
						});
					},
					initBehaviors: function () {
						var self = this;
						var tabs = {}, beh = {};
						tabs["#pundit-tab-filter-" + this.name + "-entities"] = function () {
							return self.getNodesEntities();
						};
						tabs["#pundit-tab-filter-" + this.name + "-fragment"] = function () {
							return self.getNodesWhereTypeIs(ns.fragments.text);
						};
						tabs["#pundit-tab-filter-" + this.name + "-images"] = function () {
							return self.getNodesWhereTypeIs(ns.image);
						};
						tabs["#pundit-tab-filter-" + this.name + "-images-fragment"] = function () {
							return self.getNodesWhereTypeIs(ns.fragments.image);
						};
						tabs["#pundit-tab-filter-" + this.name + "-pages"] = function () {
							return self.getNodesWhereTypeIs(ns.page);
						};
						tabs["#pundit-tab-filter-" + this.name + "-named"] = function () {
							return self.getNodesWhereTypeIs(ns.fragments.named);
						};
						for (var t in tabs) {
							var f = (function (id, _6f1) {
								return function () {
									self.showOnlyItems(_6f1());
									self.hideSuggestionsTab();
									_4.query("#pundit-" + self.name + "-container .pundit-item-filter-list li").removeClass("pundit-selected");
									_4.query(id).addClass("pundit-selected");
								};
							})(t, tabs[t]);
							self["show_" + t.substr(1).replace(/-/g, "")] = f;
							_4.connect(_4.query(t)[0], "onclick", f);
						}
						beh["#pundit-" + self.name + " li.dojoDndItem span.pundit-icon-context-button"] = {
							"onclick": function (e) {
								var id = _4.query(e.target).parent()[0].id;
								var item = self.itemsDnD.getItem(id);
								if (item.data.rdftype.length === 0) {
									cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, item.data, "semlibLiteral" + self.name);
								} else {
									cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, item.data, "pundit-" + self.name);
								}
							}
						};
						beh["#pundit-" + self.name + " li.dojoDndItem"] = {
							"onmouseover": function (e) {
								var id = (_4.hasClass(e.target, "pundit-icon-context-button") || _4.hasClass(e.target, "pundit-trim")) ? _4.query(e.target).parent()[0].id : e.target.id;
								var item = self.itemsDnD.getItem(id);
								previewer.show(item.data.value);
								if (tooltip_viewer.isAnnXpointer(item.data.value) || tooltip_viewer.isTempXpointer(item.data.value)) {
									tooltip_viewer.highlightByXpointer(item.data.value);
								}
							},
							"onmouseout": function (e) {
								var id = (_4.hasClass(e.target, "pundit-icon-context-button") || _4.hasClass(e.target, "pundit-trim")) ? _4.query(e.target).parent()[0].id : e.target.id;
								var item = self.itemsDnD.getItem(id);
								if (tooltip_viewer.isAnnXpointer(item.data.value) || tooltip_viewer.isTempXpointer(item.data.value)) {
									tooltip_viewer.removeHighlightByXpointer(item.data.value);
								}
							},
							"onclick": function (e) {
								var _6f2 = e.target;
								while (!_4.hasClass(_4.query(_6f2)[0], "dojoDndItem")) {
									_6f2 = _4.query(_6f2).parent()[0];
								}
								var id = _6f2.id;
								self.itemsDnD.selectNone();
								self.itemsDnD.selection[id] = 1;
							}
						};
						beh["#pundit-" + self.name + "-container .pundit-sort-items.pundit-view-list"] = {
							"onclick": function (e) {
								self.setItemsLayout("pundit-view-list");
							}
						};
						beh["#pundit-" + self.name + "-container .pundit-sort-items.pundit-view-tile"] = {
							"onclick": function (e) {
								self.setItemsLayout("pundit-view-tile");
							}
						};
						_4.behavior.add(beh);
					},
					initContextualMenu: function () {
						var self = this;
					},
					itemNodeCreator: function (item, hint) {
						var self = this,
								_6f3 = "",
								_6f4 = item.label,
								i, node;
						if (typeof (item.type) === "undefined") {
							item = {};
							var i = _PUNDIT.vocab.draggedItem;
							item.value = i.value;
							item.type = i.type;
							item.rdfData = i.rdfData;
							item.rdftype = i.rdftype;
							item.label = i.label;
							if (typeof (i.image) !== "undefined") {
								item.image = i.image;
							}
						}
						var b = new pundit.TriplesBucket({
									bucket: item.rdfData
								}),
								_6f5 = [];
						for (var j = Math.min(item.rdftype.length, _PUNDIT.items.opts.itemTypesNumber); j--;) {
							if (b.getObject(item.rdftype[j], ns.rdfs_label).length > 0) {
								_6f5.push(b.getObject(item.rdftype[j], ns.rdfs_label)[0]);
							} else {
								_6f5.push(item.rdftype[j]);
							}
						}
						_6f3 = _6f5.join(", ");
						if (item.rdftype.length === 0) {
							_6f3 = "Literal";
						} else {
							if (item.rdftype[0] === ns.fragments.text) {
								_6f4 = item.label;
							}
							if (item.rdftype.length > _PUNDIT.items.opts.itemTypesNumber) {
								_6f3 += ", ...";
							}
						}
						if (hint !== "avatar") {
							node = document.createElement("li");
							_4.addClass(node, "pundit-" + item.type);
							_4.addClass(node, "pundit-shown");
							node.innerHTML = "<span class=\"pundit-icon-context-button\"></span><span class=\"pundit-trim pundit-item-label\">" + _6f4 + "</span><span class=\"pundit-item-add-button\"></span><span class=\"pundit-item-remove-button\"></span><span class=\"pundit-trim pundit-item-rdftype\" >&nbsp;(" + _6f3 + ")</span>";
						} else {
							node = document.createElement("div");
							node.innerHTML = item.label;
						}
						return {
							node: node,
							data: item,
							type: item.type
						};
					},
					uriInItems: function (uri) {
						var self = this,
								ret = false;
						self.itemsDnD.forInItems(function (item) {
							if (item.data.value == uri) {
								ret = true;
							}
						});
						return ret;
					},
					setItemsLayout: function (name) {
						var self = this,
								_6f6 = ["pundit-view-list", "pundit-view-tile"];
						_4.query("#pundit-" + self.name + "-container .pundit-sort-items").removeClass("pundit-selected");
						_4.query("#pundit-" + self.name + "-container .pundit-sort-items." + name).addClass("pundit-selected");
						for (var i = _6f6.length; i--;) {
							_4.query("#pundit-" + self.name).removeClass(_6f6[i]);
						}
						_4.query("#pundit-" + self.name).addClass(name);
					},
					getSelectedTab: function () {
						var self = this;
						return _4.attr(_4.query("#pundit-" + self.name + "-filter-list li.pundit-selected")[0], "id");
					},
					hideSuggestionsTab: function () {
						_4.query("#pundit-tab-filter" + self.name + "Suggestions").addClass("pundit-hidden");
					},
					showOnlyItems: function (_6f7) {
						var self = this;
						_4.query(".pundit-tc-dnd-container ul").removeClass("dnd_selected");
						_4.query("#pundit-" + self.name + "-container .pundit-item-filter-list li").removeClass("pundit-selected");
						this.hideAllItems();
						if (_6f7.length === 0) {
							return;
						}
						var self = this,
								all = self.getItemsIds(_4.query("#pundit-" + self.name + " li")),
								_6f8 = self.getItemsIds(_6f7);
						for (var id in all) {
							if (typeof (_6f8[id]) !== "undefined") {
								_4.query("#" + id).removeClass("pundit-hidden");
								setTimeout((function (i) {
									return function () {
										_4.query("#" + i).addClass("pundit-shown");
									};
								})(id), 10);
							}
						}
					},
					showAllItems: function () {
						var self = this;
						_4.query(".pundit-tc-dnd-container ul").removeClass("dnd_selected");
						_4.query("#pundit-" + self.name + "-container .pundit-item-filter-list li").removeClass("pundit-selected");
						_4.query("#pundit-tab-filter" + self.name + "All").addClass("pundit-selected");
						_4.query("#pundit-" + self.name + " li").removeClass("pundit-hidden");
						setTimeout(function () {
							_4.query("#semlibItems li").addClass("pundit-shown");
						}, 10);
					},
					hideAllItems: function () {
						var self = this;
						_4.query("#pundit-" + self.name + " li").removeClass("pundit-shown");
						_4.query("#pundit-" + self.name + " li").addClass("pundit-hidden");
					},
					refreshItemsNumber: function () {
						var self = this,
								ret = 0;
						this.itemsDnD.forInItems(function (item) {
							if (item.data.type[0] !== "predicate") {
								ret++;
							}
						});
						_4.query("#pundit-" + self.name + "-number").html(ret);
					},
					getNodesEntities: function () {
						var self = this,
								foo = [];
						for (var id in self.itemsDnD.map) {
							if (_4.indexOf(self.itemsDnD.map[id].data.rdftype, ns.fragments.text) === -1 && _4.indexOf(self.itemsDnD.map[id].data.rdftype, ns.image) === -1 && _4.indexOf(self.itemsDnD.map[id].data.rdftype, ns.fragments.image) === -1 && _4.indexOf(self.itemsDnD.map[id].data.rdftype, ns.rdf_property) === -1 && _4.indexOf(self.itemsDnD.map[id].data.rdftype, ns.page) === -1) {
								foo.push(_4.query("#" + id)[0]);
							}
						}
						return foo;
					},
					getItemsWhereFieldTest: function (_6f9, _6fa) {
						var self = this,
								_6fb, foo = [];
						for (var id in self.itemsDnD.map) {
							_6fb = self.itemsDnD.map[id].data[_6f9];
							if (_6fa(_6fb) === true) {
								foo.push(self.itemsDnD.map[id].data);
							} else {
								self.log("Item " + self.itemsDnD.map[id].data.value + " discarded, missing field " + _6f9);
							}
						}
						return foo;
					},
					getNodesWhereField: function (_6fc, _6fd) {
						var self = this,
								foo = [];
						for (var id in self.itemsDnD.map) {
							if (self.itemsDnD.map[id].data[_6fc] === _6fd) {
								foo.push(_4.query("#" + id)[0]);
							}
						}
						return foo;
					},
					getNodesWhereTypeIs: function (type) {
						var self = this,
								foo = [];
						for (var id in self.itemsDnD.map) {
							if (_4.indexOf(self.itemsDnD.map[id].data.rdftype, type) !== -1) {
								foo.push(_4.query("#" + id)[0]);
							}
						}
						return foo;
					},
					getLiterals: function () {
						var self = this,
								foo = [];
						for (var id in self.itemsDnD.map) {
							var item = self.itemsDnD.map[id];
							if (item.data.type.length === 1 && item.data.rdftype.length === 0) {
								if (_4.indexOf(item.data.type, "object") !== -1) {
									foo.push(_4.query("#" + id)[0]);
								}
							}
						}
						return foo;
					},
					getItemsIds: function (_6fe) {
						var ids = {};
						_6fe.forEach(function (pi) {
							ids[_4.attr(pi, "id")] = true;
						});
						return ids;
					},
					getItemFromUri: function (uri) {
						var self = this,
								ret;
						self.itemsDnD.forInItems(function (item) {
							if (item.data.value === uri) {
								ret = item.data;
							}
						});
						return ret;
					},
					getItemsFromParentItem: function (_6ff) {
						var self = this,
								ret = [];
						self.itemsDnD.forInItems(function (item) {
							if (item.data.isPartOf === _6ff) {
								ret.push(item.data);
							}
						});
						return ret;
					},
					getItemIdFromUri: function (uri) {
						var self = this;
						for (var id in self.itemsDnD.map) {
							if (self.itemsDnD.map[id].data.value === uri) {
								return id;
							}
						}
						self.log("ERROR: getItemIdFromUri with wrong uri? " + uri);
						return null;
					},
					getItemsFromTerm: function (term, _700, _701) {
						var self = this,
								_702 = self.getItemsWhereFieldTest("description", function (c) {
									if (typeof (c) === "undefined") {
										return false;
									}
									for (var i = term.length; i--;) {
										if (c.indexOf(term[i]) === -1) {
											return false;
										}
									}
									return true;
								});
						if (((typeof (_700) === "undefined") && (typeof (_701) === "undefined"))) {
							return _702;
						}
						return self.filterItemsByRdftype(_702, _700, _701);
					},
					filterItemsByRdftype: function (_703, _704, _705) {
						var _706 = [];
						if (typeof (_704) === "undefined") {
							_704 = [];
						}
						if (typeof (_705) === "undefined") {
							_705 = [];
						}
						for (var i = _703.length; i--;) {
							var _707 = true;
							for (var j = _703[i].rdftype.length; j--;) {
								for (var k = _704.length; k--;) {
									if (_703[i].rdftype[j] === _704[k]) {
										_707 = true;
										break;
									} else {
										_707 = false;
									}
								}
								for (var k = _705.length; k--;) {
									if (_703[i].rdftype[j] === _705[k]) {
										_707 = false;
										break;
									} else {
										_707 = true;
									}
								}
								if (_707 === true) {
									break;
								}
							}
							if (_707 === true) {
								_706.push(_703[i]);
							}
						}
						return _706;
					},
					getProperties: function (_708, _709) {
						var _70a = [];
						this.itemsDnD.forInItems(function (item) {
							var t = item.data.rdftype;
							for (var i = t.length; i--;) {
								if (t[i] === ns.rdf_property) {
									_70a.push(item.data);
									break;
								}
							}
						});
						if ((typeof (_708) === "undefined") || (typeof (_709) === "undefined")) {
							return _70a;
						} else {
							var _70b = [];
							for (var i = _70a.length; i--;) {
								var _70c = tripleComposer._intersection([_70a[i].domain, _709]);
								var _70d = tripleComposer._intersection([_70a[i].range, _708]);
								if ((typeof _709 === "undefined") || _70a[i].domain.length === 0 || _709.length === 0 || _70c.length > 0) {
									if ((typeof _708 === "undefined") || _70a[i].range.length === 0 || _708.length === 0 || _70d.length > 0) {
										_70b.push(_70a[i]);
									}
								}
							}
							return _70b;
						}
					},
					setItemFieldFromUri: function (uri, _70e, _70f) {
						var self = this,
								id = self.getItemIdFromUri(uri),
								item = self.itemsDnD.map[id];
						item.data[_70e] = _70f;
						self.itemsDnD.setItem(id, item);
						self.itemsDnD.sync();
						return true;
					},
					addItem: function (item) {
						var self = this;
						if (self.uriInItems(item.value)) {
							self.log("Not adding again " + item.value.substr(0, 30) + "..");
							return;
						}
						self.itemsDnD.insertNodes(false, [item]);
						_4.behavior.apply();
						self.refreshItemsNumber();
						self.fireOnItemAdded(item);
						self.log("Added to pundit items: " + item.value);
					},
					removeItemFromUri: function (uri) {
						var self = this;
						if (!self.uriInItems(uri)) {
							return;
						}
						var _710 = self.getItemIdFromUri(uri),
								item = self.getItemFromUri(uri);
						self.itemsDnD.delItem(_710);
						_4.destroy(_710);
						self.itemsDnD.sync();
						self.refreshItemsNumber();
						self.fireOnItemRemoved(item);
						self.log("Removed item from pundit items: " + uri);
						return false;
					},
					removeAllItems: function () {
						var self = this,
								_711 = [];
						self.itemsDnD.forInItems(function (item) {
							var _712 = self.getItemIdFromUri(item.data.value);
							_711.push(_712);
						});
						for (var _713 = _711.length; _713--;) {
							self.itemsDnD.delItem(_711[_713]);
							_4.destroy(_711[_713]);
							self.itemsDnD.sync();
						}
						self.refreshItemsNumber();
						self.fireOnAllItemsRemoved();
						self.log("Removed all item from pundit items");
					},
					createBucketForPredicate: function (d) {
						var self = this,
								b = new pundit.TriplesBucket();
						b.addTriple(d.value, ns.items.label, d.label, "literal");
						b.addTriple(d.value, ns.items.altLabel, d.label, "literal");
						b.addTriple(d.value, ns.items.description, d.description, "literal");
						b.addTriple(d.value, ns.items.type, ns.rdf_property, "uri");
						b.addTriple(ns.rdf_property, ns.items.label, "RDF Property", "literal");
						return b;
					},
					createBucketForVocabItem: function (d) {
						var self = this,
								b = new pundit.TriplesBucket();
						b.addTriple(d.value, ns.items.label, d.label, "literal");
						b.addTriple(d.value, ns.items.altLabel, d.label, "literal");
						b.addTriple(d.value, ns.items.description, d.description, "literal");
						b.addTriple(d.value, ns.items.image, d.image, "literal");
						if (typeof (d.rdftype) !== "undefined") {
							for (var i = d.rdftype.length; i--;) {
								b.addTriple(d.value, ns.items.type, d.rdftype[i], "uri");
								b.addTriple(d.rdftype[i], ns.items.label, ns.getLabelFromUri(d.rdftype[i]), "literal");
							}
						}
						return b;
					},
					createBucketForNamedContent: function (d) {
						var self = this,
								b = new pundit.TriplesBucket();
						b.addTriple(d.value, ns.items.label, d.label, "literal");
						b.addTriple(d.value, ns.items.altLabel, d.label, "literal");
						b.addTriple(d.value, ns.items.description, d.description, "literal");
						b.addTriple(d.value, ns.items.image, d.image, "uri");
						b.addTriple(d.value, ns.items.pageContext, d.pageContext, "uri");
						b.addTriple(d.value, ns.items.isPartOf, d.isPartOf, "uri");
						if (typeof (d.rdftype) !== "undefined") {
							for (var i = d.rdftype.length; i--;) {
								b.addTriple(d.value, ns.items.type, d.rdftype[i], "uri");
								b.addTriple(d.rdftype[i], ns.items.label, ns.getLabelFromUri(d.rdftype[i]), "literal");
							}
						}
						b.addTriple(ns.fragments.text, ns.items.label, "Text Fragment", "literal");
						b.addTriple(ns.fragments.named, ns.items.label, "Named Content", "literal");
						return b;
					},
					createBucketForTextFragment: function (d) {
						var self = this,
								b = new pundit.TriplesBucket();
						b.addTriple(d.value, ns.items.label, d.label, "literal");
						b.addTriple(d.value, ns.items.altLabel, d.label, "literal");
						b.addTriple(d.value, ns.items.description, d.description, "literal");
						b.addTriple(d.value, ns.items.image, d.image, "uri");
						b.addTriple(d.value, ns.items.pageContext, d.pageContext, "uri");
						b.addTriple(d.value, ns.items.isPartOf, d.isPartOf, "uri");
						b.addTriple(d.value, ns.items.type, ns.fragments.text, "uri");
						b.addTriple(ns.fragments.text, ns.items.label, "Text Fragment", "literal");
						return b;
					},
					createBucketForImageFragment: function (d) {
						var self = this,
								b = new pundit.TriplesBucket();
						b.addTriple(d.value, ns.items.label, d.label, "literal");
						b.addTriple(d.value, ns.items.altLabel, d.label, "literal");
						b.addTriple(d.value, ns.items.description, d.description, "literal");
						b.addTriple(d.value, ns.items.image, d.image, "uri");
						b.addTriple(d.value, ns.items.pageContext, d.pageContext, "uri");
						b.addTriple(d.value, ns.items.isPartOf, d.isPartOf, "uri");
						b.addTriple(d.value, ns.items.type, ns.image, "uri");
						b.addTriple(ns.image, ns.items.label, "Image", "literal");
						return b;
					},
					createBucketForImageRegionFragment: function (d) {
						var self = this,
								b = new pundit.TriplesBucket();
						b.addTriple(d.value, ns.items.label, d.label, "literal");
						b.addTriple(d.value, ns.items.altLabel, d.label, "literal");
						b.addTriple(d.value, ns.items.description, d.description, "literal");
						b.addTriple(d.value, ns.items.image, d.image, "uri");
						b.addTriple(d.value, ns.items.parentItemXP, d.parentItemXP, "uri");
						b.addTriple(d.value, ns.items.pageContext, d.pageContext, "uri");
						b.addTriple(d.value, ns.items.isPartOf, d.isPartOf, "uri");
						b.addTriple(d.value, ns.items.type, ns.fragments.image, "uri");
						b.addTriple(ns.fragments.image, ns.items.label, "Image Fragment", "literal");
						b.addTriple(d.value, ns.items.selector, d.selector, "uri");
						for (var i = d.selectors.length; i--;) {
							var _714 = ns.selectorBaseUri + d.selectors[i].type + "/" + self.crypto.hex_md5(d.image + _4.toJson(d.selectors[i]));
							b.addTriple(d.value, ns.items.selector, _714, "uri");
							b.addTriple(_714, ns.items.type, ns.selectors[d.selectors[i].type].value, "uri");
							b.addTriple(ns.selectors[d.selectors[i].type].value, ns.items.label, ns.selectors[d.selectors[i].type].label, "literal");
							b.addTriple(ns.selectors[d.selectors[i].type].value, ns.items.description, ns.selectors[d.selectors[i].type].description, "literal");
							b.addTriple(_714, ns.rdf_value, _4.toJson(d.selectors[i]), "literal");
						}
						return b;
					},
					createBucketForItem: function (d) {
						var self = this,
								b = new pundit.TriplesBucket();
						b.addTriple(d.value, ns.items.label, d.label, "literal");
						b.addTriple(d.value, ns.items.altLabel, d.altLabel, "literal");
						b.addTriple(d.value, ns.items.description, d.description, "literal");
						b.addTriple(d.value, ns.items.image, d.image, "literal");
						for (var i = d.rdftype.length; i--;) {
							b.addTriple(d.value, ns.items.type, d.rdftype[i], "uri");
							b.addTriple(d.rdftype[i], ns.items.label, ns.getLabelFromUri(d.rdftype[i]), "literal");
						}
						b.addTriple(d.value, ns.items.prefLabel, d.label, "literal");
						return b;
					},
					createBucketForPage: function (d) {
						var self = this,
								b = new pundit.TriplesBucket();
						b.addTriple(d.value, ns.items.label, d.label, "literal");
						b.addTriple(d.value, ns.items.altLabel, d.altLabel, "literal");
						b.addTriple(d.value, ns.items.description, d.description, "literal");
						for (var i = d.rdftype.length; i--;) {
							b.addTriple(d.value, ns.items.type, d.rdftype[i], "uri");
							b.addTriple(d.rdftype[i], ns.items.label, ns.getLabelFromUri(d.rdftype[i]), "literal");
						}
						b.addTriple(d.value, ns.items.prefLabel, d.label, "literal");
						return b;
					},
					refreshItems: function () {
						var self = this,
								t = self.getSelectedTab();
						self["show_" + t.replace(/-/g, "")]();
					}
				});
			}
			if (!_4._hasResource["pundit.MyItems"]) {
				_4._hasResource["pundit.MyItems"] = true;
				_4.provide("pundit.MyItems");
				_4.declare("pundit.MyItems", pundit.Items, {
					constructor: function () {
						var self = this;
						self.name = "my-items";
						self.init(self.name);
						self.initContextualMenu();
						self.newAddedItems = [];
						self.createCallback(["myItemAdded"]);
						self.loadJobId = _PUNDIT.init.waitBeforeInit();
						self.readJobId = null;
						self.writeJobId = null;
						self.store = new pundit.RemoteStorageHandler({
							debug: self.opts.debug
						});
						self.store.onStoreRead(function (_715) {
							if (_715.length === 0) {
								self.log("Perfectly virgin favorites: initializing");
								self.resetFavoriteItems();
								_715 = {
									value: []
								};
							}
							tooltip_viewer.tempXpointers = [];
							for (var i = _715.value.length; i--;) {
								var item = _715.value[i];
								if (!tooltip_viewer.isTempXpointer(item.value) && (item.rdftype.indexOf(ns.fragments.text) !== -1 || item.rdftype[0] === ns.image) && (tooltip_viewer.contentURIs.indexOf(item.isPartOf) !== -1)) {
									tooltip_viewer.tempXpointers.push(item.value);
								}
								if (!self.uriInItems(item.value)) {
									previewer.buildPreviewForItem(item);
									item.favorite = true;
									self.addItem(item);
								}
							}
							_4.behavior.apply();
							if (self.loadJobId) {
								_PUNDIT.init.doneBeforeInit(self.loadJobId);
								self.loadJobId = null;
							}
							_PUNDIT.loadingBox.setJobOk(self.readJobId);
						});
						self.loadMyItems();
						self.store.onStoreError(function () {
							console.log("TODO: store is not available");
							if (self.loadJobId) {
								_PUNDIT.init.doneBeforeInit(self.loadJobId);
								self.loadJobId = null;
							}
						});
						_PUNDIT.init.onInitDone(function () {
							tooltip_viewer.onConsolidate(function () {
								setTimeout(function () {
									self.zoomURLXPointer();
								}, 500);
							});
							self.onItemRemoved(function () {
								self.saveFavoriteItems();
							});
							self.onAllItemsRemoved(function () {
								self.resetFavoriteItems();
							});
							self.onItemAdded(function () {
								self.saveFavoriteItems();
							});
						});
					},
					addItem: function (item, _716) {
						this.inherited(arguments);
						if (_716 && !this.isMyItemTabVisible()) {
							var self = this;
							self.newAddedItems.push(item.value);
							self.fireOnMyItemAdded(self.newAddedItems);
						}
					},
					isFavoriteFromUri: function (uri) {
						var self = this,
								ret = false;
						self.itemsDnD.forInItems(function (item) {
							if (item.data.value === uri && item.data.favorite === true) {
								ret = true;
							}
						});
						return ret;
					},
					resetFavoriteItems: function () {
						var self = this;
						self.store.save("favorites", []);
					},
					saveFavoriteItems: function () {
						var self = this,
								_717 = [];
						self.itemsDnD.forInItems(function (item) {
							_717.push(item.data);
						});
						self.store.save("favorites", _717);
					},
					loadMyItems: function () {
						var self = this;
						self.readJobId = _PUNDIT.loadingBox.addJob("Reading your items");
						self.store.read("favorites");
					},
					initContextualMenu: function () {
						var self = this;
						this.inherited(arguments);
						cMenu.addAction({
							type: ["pundit-" + self.name],
							name: "removeSemlib" + self.name + "Item",
							label: "Remove this item",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								self.removeItemFromUri(item.value);
								tooltip_viewer.removeTempXpointer(item.value);
								tooltip_viewer.consolidate();
								return true;
							}
						});
						cMenu.addAction({
							type: ["pundit-" + self.name],
							name: "openSemlib" + self.name + "WebPage",
							label: "Show in origin page",
							showIf: function (item) {
								var _718 = window.location.href;
								if (_718.indexOf("#xpointer") !== -1) {
									_718 = _718.substring(0, _718.indexOf("#"));
								}
								if ((typeof item !== "undefined") && (typeof tooltip_viewer.xpointersAnnotationsId[item.value] === "undefined") && ((_4.indexOf(item.rdftype, ns.fragments.text) !== -1) || (_4.indexOf(item.rdftype, ns.image) !== -1))) {
									return !tooltip_viewer.xpointersClasses[item.value];
								}
								return false;
							},
							onclick: function (item) {
								var _719 = item.value.split("#")[1],
										uri = item.pageContext + "#" + _719;
								window.open(uri, "SemLibOpenedWebPage");
								self.log("Opened a new window to URL " + uri);
								return true;
							}
						});
						cMenu.addAction({
							type: ["pundit-" + self.name],
							name: "open" + self.name + "ResourceItemWebPage",
							label: "Open Web page",
							showIf: function (item) {
								if (_PUNDIT.items.isTerm(item)) {
									return true;
								} else {
									return false;
								}
							},
							onclick: function (item) {
								window.open(item.value, "SemLibOpenedWebPage");
								return true;
							}
						});
						cMenu.addAction({
							type: ["pundit-" + self.name],
							name: "removeSemlibAllItems",
							label: "Empty MyItems",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								self.removeAllItems();
								tooltip_viewer.resetTempXpointers();
								tooltip_viewer.refreshAnnotations();
								return true;
							}
						});
					},
					zoomURLXPointer: function () {
						var self = this;
						if (self.loaded) {
							return;
						}
						var _71a = decodeURIComponent(window.location.href);
						if (_71a.indexOf("#") === -1) {
							return;
						}
						var _71b = _71a.split("#")[1];
						if (_71b.indexOf("@about=") === -1) {
							return;
						}
						var _71c;
						semlibMyItems.itemsDnD.forInItems(function (item) {
							if (item.data.value.indexOf("#") !== -1 && item.data.value.split("#")[1] === _71b) {
								_71c = item.data.value;
							}
						});
						if (typeof (_71c) !== "undefined") {
							semlibItems.itemsDnD.forInItems(function (item) {
								if (item.data.value.indexOf("#") !== -1 && item.data.value.split("#")[1] === _71b) {
									_71c = item.data.value;
								}
							});
						}
						if (typeof (_71c) !== "undefined") {
							tooltip_viewer.zoomOnXpointer(_71c);
							self.loaded = true;
						} else {
							var path = new RegExp("@about='.+?'");
							if (path.test(_71b)) {
								tooltip_viewer.zoomOnXpointer(_71c);
							}
							self.loaded = true;
						}
					},
					isMyItemTabVisible: function () {
						return (_4.hasClass("pundit-gui", "pundit-shown") && _4.hasClass("pundit-tab-my-items", "pundit-selected"));
					},
					emptyNewMyItems: function () {
						var self = this;
						self.newAddedItems = [];
					}
				});
			}
			if (!_4._hasResource["pundit.PageItems"]) {
				_4._hasResource["pundit.PageItems"] = true;
				_4.provide("pundit.PageItems");
				_4.declare("pundit.PageItems", pundit.Items, {
					constructor: function () {
						var self = this;
						self.name = "page-items";
						self.init(self.name);
						self.initBehaviors(self.name);
						self.initContextualMenu();
					},
					initContextualMenu: function () {
						var self = this;
						cMenu.addAction({
							type: ["pundit-page-items"],
							name: "pageItemsToMyItems",
							label: "Add to My Items",
							showIf: function (item) {
								return !semlibMyItems.uriInItems(item.value);
							},
							onclick: function (item) {
								semlibMyItems.addItem(item, true);
								return true;
							}
						});
						cMenu.addAction({
							type: ["pundit-page-items"],
							name: "removeVocabFromMyItems",
							label: "Remove from My Items",
							showIf: function (item) {
								return semlibMyItems.uriInItems(item.value);
							},
							onclick: function (item) {
								semlibMyItems.removeItemFromUri(item.value);
								return true;
							}
						});
						cMenu.addAction({
							type: ["pundit-" + self.name],
							name: "open" + self.name + "ResourceItemWebPage",
							label: "Open Web page",
							showIf: function (item) {
								if (_PUNDIT.items.isTerm(item)) {
									return true;
								} else {
									return false;
								}
							},
							onclick: function (item) {
								window.open(item.value, "SemLibOpenedWebPage");
								return true;
							}
						});
					}
				});
			}
			if (!_4._hasResource["pundit.ItemContainerManager"]) {
				_4._hasResource["pundit.ItemContainerManager"] = true;
				_4.provide("pundit.ItemContainerManager");
				_4.declare("pundit.ItemContainerManager", pundit.BaseComponent, {
					opts: {
						itemTypesNumber: 3
					},
					constructor: function (_71d) {
						var self = this;
						self.itemContainers = {};
						self.initItemContainers();
						self.log("Items Manager up and running");
					},
					initItemContainers: function () {
						var self = this;
						semlibMyItems = new pundit.MyItems();
						_PUNDIT.myItems = semlibMyItems;
						self.itemContainers["MyItems"] = semlibMyItems;
						self.itemContainers["MyItems"].onItemAdded(function () {
							self.refreshAll();
						});
						self.itemContainers["MyItems"].onItemRemoved(function () {
							self.refreshAll();
						});
						semlibItems = new pundit.PageItems();
						_PUNDIT.pageItems = semlibItems;
						self.itemContainers["PageItems"] = semlibItems;
						self.itemContainers["PageItems"].onItemAdded(function () {
							self.refreshAll();
						});
						self.itemContainers["PageItems"].onItemRemoved(function () {
							self.refreshAll();
						});
					},
					refreshAll: function () {
						var self = this;
						for (var i in self.itemContainers) {
							self.itemContainers[i].refreshItems();
						}
					},
					refreshItemsNumber: function () {
						var self = this;
						for (var i in self.itemContainers) {
							self.itemContainers[i].refreshItemsNumber();
						}
					},
					getItemByUri: function (uri) {
						var self = this;
						for (var i in self.itemContainers) {
							var item = self.itemContainers[i].getItemFromUri(uri);
							if (typeof item !== "undefined") {
								return item;
							}
						}
						return undefined;
					},
					getItemsFromParentItem: function (_71e) {
						var self = this,
								ret = [];
						for (var i in self.itemContainers) {
							var p = self.itemContainers[i].getItemsFromParentItem(_71e);
							ret = ret.concat(p);
						}
						return ret;
					},
					getItemsByType: function (type) {
						var self = this,
								_71f = [],
								item;
						for (var i in self.itemContainers) {
							for (var id in self.itemContainers[i].itemsDnD.map) {
								if (_4.indexOf(self.itemContainers[i].itemsDnD.map[id].data.rdftype, type) !== -1) {
									item = self.itemContainers[i].itemsDnD.map[id].data;
									if (!_4.indexOf(_71f, item)) {
										_71f.push(item);
									}
								}
							}
						}
						return _71f;
					},
					hideAllItems: function () {
						var self = this;
						for (var i in self.itemContainers) {
							self.itemContainers[i].hideAllItems();
						}
					},
					showAllItems: function () {
						var self = this;
						for (var i in self.itemContainers) {
							self.itemContainers[i].showAllItems();
						}
					},
					getItemsWhereFieldTest: function () {
						var self = this,
								ret = [];
						for (var i in self.itemContainers) {
							ret = ret.concat(self.itemContainers[i].getItemsWhereFieldTest.apply(self.itemContainers[i], arguments));
						}
						return ret;
					},
					isTerm: function (item) {
						if (_4.indexOf(item.rdftype, ns.fragments.text) !== -1 || _4.indexOf(item.rdftype, ns.fragments.image) !== -1 || _4.indexOf(item.rdftype, ns.image) !== -1) {
							return false;
						} else {
							return true;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.Literals"]) {
				_4._hasResource["pundit.Literals"] = true;
				_4.provide("pundit.Literals");
				_4.declare("pundit.Literals", pundit.BaseComponent, {
					constructor: function (_720) {
					},
					createLiteralItem: function (_721) {
						var item = {}, _722 = _721;
						if (typeof (_721) !== "undefined") {
							if (_722.length > 20) {
								_722 = _721.substring(0, 20) + "...";
							}
							item.type = ["object"];
							item.value = _721;
							item.rdftype = [ns.rdfs_literal];
							item.rdfData = [];
							item.label = _722;
							previewer.buildPreviewForItem(item);
							return item;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.DbpediaSpotlight"]) {
				_4._hasResource["pundit.DbpediaSpotlight"] = true;
				_4.provide("pundit.DbpediaSpotlight");
				_4.declare("pundit.DbpediaSpotlight", pundit.BaseComponent, {
					opts: {
						"confidence": 0.15,
						"support": 20
					},
					constructor: function (_723) {
						var self = this;
						self.createCallback(["getTagsFromSpotlight", "getInfoFromDBpedia", "error", "textLookup", "lookupError"]);
						self.log("DBPedia Spotlight up and running");
					},
					getEntities: function (lang, text, _724, _725) {
						var self = this;
						self.getTagsInfoFromDbpediaSpotlight(lang, text, _724, _725);
					},
					getTagsInfoFromDbpediaSpotlight: function (lang, text, _726, _727) {
						var self = this;
						self.reqs = [];
						var args = {
							url: ns.annotationServerVocabProxy + "?url=" + encodeURIComponent(ns.dbpediaSpotlightAnnotate + encodeURIComponent(text) + "&confidence=" + self.opts.confidence + "&support=" + self.opts.support),
							handleAs: "json",
							headers: {
								"Accept": "application/json"
							},
							failOk: true,
							load: function (g) {
								self.tags = self.getTagItems(g);
								self.requests = {};
								if (self.tags.length === 0) {
									_727();
								}
								for (var i = self.tags.length; i--;) {
									if (typeof self.requests[self.tags[i].uri] === "undefined") {
										self.requests[self.tags[i].uri] = "pending", self.reqs.push(self.getInfoFromDBpedia(self.tags[i].uri, function (uri, item) {
											self.requests[uri] = "completed";
											for (var j = self.tags.length; j--;) {
												if (self.tags[j].uri === uri) {
													self.tags[j]["pundit-items"] = [item];
												}
											}
											if (self.requestsCompleted()) {
												_726(self.tags);
											}
										}, function (uri) {
											self.requests[uri] = "error";
											for (var j = self.tags.length - 1; j >= 0; j--) {
												if (self.tags[j].uri === uri) {
													self.tags.splice(j, 1);
												}
											}
											if (self.requestsCompleted()) {
												_726(self.tags);
											}
										}));
									}
								}
							},
							error: function (_728) {
								if (_728.dojoType === "cancel") {
									for (var i = self.reqs.length; i--;) {
										self.reqs[i].cancel();
									}
									return;
								}
								self.log(_728);
								_727();
							}
						};
						return requester.xGet(args);
					},
					requestsCompleted: function () {
						var self = this;
						for (var i in self.requests) {
							if (self.requests[i] === "pending") {
								return false;
							}
						}
						return true;
					},
					getTagItems: function (_729) {
						var _72a = [];
						if (typeof (_729.Resources) !== "undefined") {
							for (var i = _729.Resources.length - 1; i >= 0; i--) {
								var _72b = _729.Resources[i]["@types"].replace(/Schema:/g, "http://schema.org/").replace(/DBpedia:/g, "http://dbpedia.org/ontology/").replace(/Freebase\:/g, "http://www.freebase.com/schema").split(",");
								if (_72b[0] === "") {
									_72b[0] = ns.rdfs_resource;
								}
								_72a.push({
									uri: _729.Resources[i]["@URI"],
									match: _729.Resources[i]["@surfaceForm"],
									length: _729.Resources[i]["@surfaceForm"].length,
									offset: _729.Resources[i]["@offset"]
								});
							}
						}
						return _72a;
					},
					getInfoFromDBpedia: function (_72c, f, fErr) {
						var self = this,
								_72d = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";
						_72d += "SELECT ?comment, ?depiction, ?label, ?type ";
						_72d += "WHERE {<" + _72c + "> rdfs:comment ?comment. ";
						_72d += "<" + _72c + "> rdfs:label ?label. ";
						_72d += "OPTIONAL { <" + _72c + "> rdf:type ?type. }";
						_72d += "OPTIONAL { <" + _72c + "><http://dbpedia.org/ontology/thumbnail> ?depiction. }";
						_72d += "FILTER ( lang(?label) = \"en\") ";
						_72d += "FILTER ( lang(?comment) = \"en\")} ";
						var args = {
							url: ns.annotationServerVocabProxy + "?url=" + encodeURIComponent("http://dbpedia.org/sparql?query=" + encodeURIComponent(_72d) + "&output=json"),
							handleAs: "json",
							headers: {
								"Accept": "application/sparql-results+json"
							},
							failOk: true,
							id: _72c,
							load: function (r) {
								var item = {}, _72e = [],
										_72f = r.results.bindings,
										i = _72f[0];
								if (typeof i !== "undefined") {
									item.description = i.comment.value;
									item.label = i.label.value;
									if (typeof (i.depiction) !== "undefined") {
										item.image = i.depiction.value;
									}
									for (var j = _72f.length; j--;) {
										if (typeof _72f[j].type !== "undefined") {
											_72e.push(_72f[j].type.value);
										}
									}
									if (_72e.length === 0) {
										_72e = [ns.rdfs_resource];
									}
									item.rdftype = _72e;
									item.value = _72c;
									item.type = ["subject"];
									f(_72c, item);
								} else {
									fErr(_72c);
								}
							},
							error: function (_730) {
								if (_730.dojoType === "cancel") {
									return;
								}
								console.log("Dbpediaspotlight request error:" + _730);
								self.log(_730);
								fErr(_72c);
							}
						};
						return requester.xGet(args);
					},
					getYouTubeVideoInfoById: function (_731) {
						_4.io.script.get({
							callbackParamName: "callback",
							url: "http://gdata.youtube.com/feeds/api/videos/" + _731 + "?alt=json",
							load: function (r) {
								console.log(r);
							},
							error: function (_732, _733) {
								self.log("getSuggestionsForTerm got an error :(");
								self.setLoading(false);
							}
						});
					}
				});
			}
			if (!_4._hasResource["pundit.DataTxt"]) {
				_4._hasResource["pundit.DataTxt"] = true;
				_4.provide("pundit.DataTxt");
				_4.declare("pundit.DataTxt", pundit.BaseComponent, {
					constructor: function (_734) {
						var self = this;
						self.apiRoot = "http://spaziodati.eu/datatxt/v3/";
						self.appId = "75293d0d";
						self.appKey = "1866e488198ecbb656e7df03d56aba7f";
						self.rho = 0.2;
						self.dbpedia = true;
						self.lang = "en";
						self.callback = "jsonp";
						self.createCallback(["getTagsFromSpotlight", "getInfoFromDBpedia", "error", "textLookup", "lookupError"]);
						self.log("DataTXT up and running");
					},
					getEntities: function (_735, text, _736, _737) {
						var self = this;
						self.getEntitiesFromDataTxt(_735, text, _736, _737);
					},
					getEntitiesFromDataTxt: function (_738, text, _739, _73a) {
						var self = this;
						self.reqs = [];
						if (typeof (_738) === "undefined" || _738 === "") {
							_738 = self.lang;
						}
						_4.io.script.get({
							url: self.apiRoot + "?app_id=" + self.appId + "&app_key=" + self.appKey + "&rho=" + self.rho + "&dbpedia=" + self.dbpedia + "&lang=" + _738 + "&text=" + text,
							callbackParamName: "_callback",
							load: function (g) {
								self.tags = self.getTagItems(g);
								if (self.tags.length === 0) {
									_739(self.tags);
								}
								self.requests = {};
								for (var i = self.tags.length; i--;) {
									if (typeof self.requests[self.tags[i].uri] === "undefined") {
										self.requests[self.tags[i].uri] = "pending", self.reqs.push(self.getInfoFromDBpedia(self.tags[i].uri, function (uri, item) {
											self.requests[uri] = "completed";
											for (var j = self.tags.length; j--;) {
												if (self.tags[j].uri === uri) {
													self.tags[j]["pundit-items"] = [item];
												}
											}
											if (self.requestsCompleted()) {
												_739(self.tags);
											}
										}, function (uri) {
											self.requests[uri] = "error";
											for (var j = self.tags.length - 1; j >= 0; j--) {
												if (self.tags[j].uri === uri) {
													self.tags.splice(j, 1);
												}
											}
											if (self.requestsCompleted()) {
												_739(self.tags);
											}
										}, _738));
									}
								}
							},
							error: function (_73b) {
								if (_73b.dojoType === "cancel") {
									for (var i = self.reqs.length; i--;) {
										self.reqs[i].cancel();
									}
									return;
								}
								self.log(_73b);
								_73a();
							}
						});
					},
					requestsCompleted: function () {
						var self = this;
						for (var i in self.requests) {
							if (self.requests[i] === "pending") {
								return false;
							}
						}
						return true;
					},
					getTagItems: function (_73c) {
						var _73d = [];
						if (typeof (_73c.annotations) !== "undefined") {
							for (var i = _73c.annotations.length - 1; i >= 0; i--) {
								_73d.push({
									uri: _73c.annotations[i].ref[1].dbpedia,
									match: _73c.annotations[i].spot,
									length: _73c.annotations[i].end - _73c.annotations[i].start,
									offset: _73c.annotations[i].start
								});
							}
						}
						return _73d;
					},
					getInfoFromDBpedia: function (_73e, f, fErr, _73f) {
						var self = this;
						var _740 = "";
						var _741 = "";
						if (_73f === "en") {
							_740 += "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";
							_740 += "SELECT ?comment, ?depiction, ?label, ?type ";
							_740 += "WHERE {<" + _73e + "> rdfs:comment ?comment. ";
							_740 += "<" + _73e + "> rdfs:label ?label. ";
							_740 += "OPTIONAL { <" + _73e + "> rdf:type ?type. }";
							_740 += "OPTIONAL { <" + _73e + "><http://dbpedia.org/ontology/thumbnail> ?depiction. }";
							_740 += "FILTER ( lang(?label) = \"en\") ";
							_740 += "FILTER ( lang(?comment) = \"en\")} ";
							_741 = "http://dbpedia.org/sparql";
						} else {
							if (_73f === "it") {
								_740 += "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";
								_740 += "SELECT ?comment, ?depiction, ?label, ?type ";
								_740 += "WHERE {<" + _73e + "> rdfs:comment ?comment. ";
								_740 += "<" + _73e + "> rdfs:label ?label. ";
								_740 += "OPTIONAL { <" + _73e + "> rdf:type ?type. }";
								_740 += "OPTIONAL { <" + _73e + "><http://dbpedia.org/ontology/thumbnail> ?depiction. }";
								_740 += "FILTER ( lang(?label) = \"it\") ";
								_740 += "FILTER ( lang(?comment) = \"it\")} ";
								_741 = "http://it.dbpedia.org/sparql";
							}
						}
						var args = {
							url: ns.annotationServerVocabProxy + "?url=" + encodeURIComponent(_741 + "?query=" + encodeURIComponent(_740) + "&output=json"),
							handleAs: "json",
							headers: {
								"Accept": "application/sparql-results+json"
							},
							failOk: true,
							id: _73e,
							load: function (r) {
								var item = {}, _742 = [],
										_743 = r.results.bindings,
										i = _743[0];
								if (typeof i !== "undefined") {
									item.description = i.comment.value;
									item.label = i.label.value;
									if (typeof (i.depiction) !== "undefined") {
										item.image = i.depiction.value;
									}
									for (var j = _743.length; j--;) {
										if (typeof _743[j].type !== "undefined") {
											_742.push(_743[j].type.value);
										}
									}
									if (_742.length === 0) {
										_742 = [ns.rdfs_resource];
									}
									item.rdftype = _742;
									item.value = _73e;
									item.type = ["subject"];
									f(_73e, item);
								} else {
									fErr(_73e);
								}
							},
							error: function (_744) {
								if (_744.dojoType === "cancel") {
									return;
								}
								console.log("Dbpediaspotlight request error:" + _744);
								self.log(_744);
								fErr(_73e);
							}
						};
						return requester.xGet(args);
					}
				});
			}
			if (!_4._hasResource["pundit.Civet"]) {
				_4._hasResource["pundit.Civet"] = true;
				_4.provide("pundit.Civet");
				_4.declare("pundit.Civet", pundit.BaseComponent, {
					constructor: function (_745) {
						var self = this;
						self.apiRoot = "http://civet.knowledgehives.com/synonimy/searchKeywords";
						self.callback = "jsonp";
						self.lang = "en";
						self.createCallback(["getInfoFromDBpedia", "error", "textLookup", "lookupError"]);
						self.log("DataTXT up and running");
					},
					getEntities: function (_746, text, _747, _748) {
						var self = this;
						self.getEntitiesFromCivet(_746, text, _747, _748);
					},
					getEntitiesFromCivet: function (_749, text, _74a, _74b) {
						var self = this;
						self.reqs = [];
						if (typeof (_749) === "undefined" || _749 === "") {
							_749 = self.lang;
						}
						var _74c = _4.xhrPost({
							url: self.apiRoot,
							postData: "url=&text=" + encodeURI(text) + "&override=true&url=&title=",
							handleAs: "json",
							load: function (g) {
								self.tags = self.getTagItems(g);
								if (self.tags.length === 0) {
									_74a(self.tags);
								}
								self.requests = {};
								for (var i = self.tags.length; i--;) {
									if (typeof self.requests[self.tags[i].uri] === "undefined") {
										self.requests[self.tags[i].uri] = "pending", self.reqs.push(self.getInfoFromDBpedia(self.tags[i].uri, self.tags[i].match, function (uri, item) {
											self.requests[uri] = "completed";
											for (var j = self.tags.length; j--;) {
												if (self.tags[j].uri === uri) {
													self.tags[j]["pundit-items"] = [item];
												}
											}
											if (self.requestsCompleted()) {
												_74a(self.tags);
											}
										}, function (uri) {
											self.requests[uri] = "error";
											for (var j = self.tags.length - 1; j >= 0; j--) {
												if (self.tags[j].uri === uri) {
													self.tags.splice(j, 1);
												}
											}
											if (self.requestsCompleted()) {
												_74a(self.tags);
											}
										}, _749));
									}
								}
							},
							error: function (_74d) {
								if (_74d.dojoType === "cancel") {
									for (var i = self.reqs.length; i--;) {
										self.reqs[i].cancel();
									}
									return;
								}
								self.log(_74d);
								_74b();
							}
						});
					},
					requestsCompleted: function () {
						var self = this;
						for (var i in self.requests) {
							if (self.requests[i] === "pending") {
								return false;
							}
						}
						return true;
					},
					getTagItems: function (_74e) {
						var self = this;
						var _74f = [];
						if (typeof (_74e.keyphrases) !== "undefined") {
							for (var i = _74e.keyphrases.length - 1; i >= 0; i--) {
								var offs = self.getOffsets(_74e.keyphrases[i]);
								var url = self.getBestRatedMeaningURL(_74e.keyphrases[i]);
								var _750 = _74e.keyphrases[i].label;
								for (var k = 0; k < offs.length; k++) {
									_74f.push({
										uri: url,
										match: _750,
										length: offs[k].end - offs[k].start,
										offset: offs[k].start
									});
								}
							}
						}
						if (typeof (_74e.keywords) !== "undefined") {
							for (var i = _74e.keywords.length - 1; i >= 0; i--) {
								var offs = self.getOffsets(_74e.keywords[i]);
								var url = self.getBestRatedMeaningURL(_74e.keywords[i]);
								var _750 = _74e.keywords[i].label;
								for (var k = 0; k < offs.length; k++) {
									_74f.push({
										uri: url,
										match: _750,
										length: offs[k].end - offs[k].start,
										offset: offs[k].start
									});
								}
							}
						}
						return _74f;
					},
					getBestRatedMeaningURL: function (_751) {
						var _752;
						var _753;
						for (var i = 0; i < _751.meanings.length; i++) {
							if (typeof (_752) === "undefined" || _751.meanings[i].weight > _752) {
								_752 = _751.meanings[i].weight;
								_753 = _751.meanings[i].uri;
							}
						}
						return _753;
					},
					getOffsets: function (_754) {
						var offs = _754.offsets.split(" ");
						var _755 = [];
						for (var i = 0; i < offs.length; i = i + 2) {
							var res = {};
							res["start"] = offs[i];
							res["end"] = offs[i + 1];
							_755.push(res);
						}
						return _755;
					},
					getInfoFromDBpedia: function (_756, _757, f, fErr, _758) {
						var self = this;
						var _759 = "";
						var _75a = "";
						if (_758 === "en") {
							_759 += "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";
							_759 += "SELECT ?comment, ?depiction, ?label, ?type ";
							_759 += "WHERE {<" + _756 + "> rdfs:comment ?comment. ";
							_759 += "<" + _756 + "> rdfs:label ?label. ";
							_759 += "OPTIONAL { <" + _756 + "> rdf:type ?type. }";
							_759 += "OPTIONAL { <" + _756 + "><http://dbpedia.org/ontology/thumbnail> ?depiction. }";
							_759 += "FILTER ( lang(?label) = \"en\") ";
							_759 += "FILTER ( lang(?comment) = \"en\")} ";
							_75a = "http://dbpedia.org/sparql";
						} else {
							if (_758 === "it") {
								_759 += "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";
								_759 += "SELECT ?comment, ?depiction, ?label, ?type ";
								_759 += "WHERE {<" + _756 + "> rdfs:comment ?comment. ";
								_759 += "<" + _756 + "> rdfs:label ?label. ";
								_759 += "OPTIONAL { <" + _756 + "> rdf:type ?type. }";
								_759 += "OPTIONAL { <" + _756 + "><http://dbpedia.org/ontology/thumbnail> ?depiction. }";
								_759 += "FILTER ( lang(?label) = \"it\") ";
								_759 += "FILTER ( lang(?comment) = \"it\")} ";
								_75a = "http://it.dbpedia.org/sparql";
							}
						}
						var args = {
							url: ns.annotationServerVocabProxy + "?url=" + encodeURIComponent(_75a + "?query=" + encodeURIComponent(_759) + "&output=json"),
							handleAs: "json",
							headers: {
								"Accept": "application/sparql-results+json"
							},
							failOk: true,
							id: _756,
							load: function (r) {
								var item = {}, _75b = [],
										_75c = r.results.bindings,
										i = _75c[0];
								if (typeof i !== "undefined") {
									item.description = i.comment.value;
									item.label = i.label.value;
									if (typeof (i.depiction) !== "undefined") {
										item.image = i.depiction.value;
									}
									for (var j = _75c.length; j--;) {
										if (typeof _75c[j].type !== "undefined") {
											_75b.push(_75c[j].type.value);
										}
									}
									if (_75b.length === 0) {
										_75b = [ns.rdfs_resource];
									}
									item.rdftype = _75b;
									item.value = _756;
									item.type = ["subject"];
									f(_756, item);
								} else {
									var item = {}, _75b = [];
									item.description = _757;
									item.label = _757;
									item.rdftype = [ns.rdfs_resource];
									item.value = _756;
									item.type = ["subject"];
									f(_756, item);
								}
							},
							error: function (_75d) {
								if (_75d.dojoType === "cancel") {
									return;
								}
								console.log("Civet request error:" + _75d);
								self.log(_75d);
								fErr(_756);
							}
						};
						return requester.xGet(args);
					}
				});
			}
			if (!_4._hasResource["pundit.ResourcesPanel"]) {
				_4._hasResource["pundit.ResourcesPanel"] = true;
				_4.provide("pundit.ResourcesPanel");
				_4.declare("pundit.ResourcesPanel", pundit.BasePanel, {
					constructor: function (_75e) {
						var self = this;
						self._lastKeyword = "";
						self.previewTimer = null;
						self.keywordMinimumLength = 3;
						self.keyInputTimerLength = 500;
						self.maxShownItems = _75e.maxShownItems || 4;
						self.suggestionPanels = _75e.suggestionPanels || {
							myitems: {
								label: "My Items",
								expanded: true
							},
							pageitems: {
								label: "Page Items"
							},
							properties: {
								label: "Properties",
								expanded: true
							}
						};
						self.namedEntitiesSources = _75e.namedEntitiesSources || {};
						self.panels = {};
						for (var _75f in self.suggestionPanels) {
							self.panels[_75f] = self.suggestionPanels[_75f];
						}
						for (var _75f in self.namedEntitiesSources) {
							self.panels[_75f] = self.namedEntitiesSources[_75f];
						}
						self.searchType = _75e.searchType || "filter";
						if (_PUNDIT.config.vocabularies.length !== 0) {
							_PUNDIT["vocab"].onVocabsLoaded(function () {
								self.log("Vocab loaded. Init HTML Resource panel");
								for (var i in _PUNDIT.vocab.vocabs) {
									self.suggestionPanels[i] = {
										label: _PUNDIT.vocab.vocabs[i].label
									};
									self.panels[i] = i;
								}
								self.initHTML();
								self.initDnD();
								self.initContextMenu();
								self.initBehaviors();
							});
						} else {
							self.initHTML();
							self.initDnD();
							self.initContextMenu();
							self.initBehaviors();
						}
						self.createCallback("itemAdded");
						self.log("Resource Panel up and running");
						_4.behavior.apply();
					},
					initHTML: function () {
						var self = this;
						self.log("Init HTML Resource Panel");
						self.log("Resource Panel Contructor");
						self.expandedClass;
						var c = "              <div class=\"pundit-rp-literal-panel pundit-hidden\">";
						c += "                  <div class=\"pundit-rp-container-literal\">";
						c += "                      <span class=\"class=\"pundit-pane-title\" pundit-rp-subtitle\">Insert text:</span>";
						c += "                      <section contenteditable=\"true\" class=\"pundit-rp-literal-text pundit-stop-wheel-propagation\" ></section>";
						c += "                      <div class=\"pundit-rp-literal-panel-buttons\">";
						c += "                          <button class=\"pundit-rp-panel-close\" value=\"Close\">Close</button><button class=\"pundit-rp-literal-panel-done\" disabled=\"true\">Done</button>";
						c += "                      </div>";
						c += "                  </div>";
						c += "              </div>";
						c += "              <div class=\"pundit-rp-date-panel pundit-hidden\">";
						c += "                  <div class=\"puntid-rp-container-date\">";
						c += "                      <span class=\"class=\"pundit-pane-title\" pundit-rp-subtitle\">Date in \"YYYY-MM-DD\" format: </span><br/>";
						c += "                      <input type=\"text\" class=\"pundit-rp-date-input\" required pattern=\"[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))\"/>";
						c += "                      <div class=\"pundit-rp-date-validation\"></div>";
						c += "                      <div class=\"pundit-rp-panel-buttons\">";
						c += "                          <button class=\"pundit-rp-panel-close\" value=\"Close\">Close</button><button class=\"pundit-rp-date-panel-done\" disabled=\"true\">Done</button>";
						c += "                      </div>";
						c += "                  </div>";
						c += "              </div>";
						c += "              <div class=\"pundit-rp-search-panel\">";
						c += "                  <div class=\"pundit-rp-container-search\">";
						c += "                      <span class=\"pundit-pane-title pundit-rp-subtitle\">Search:</span>";
						c += "                      <div>";
						c += "                          <input class=\"pundit-rp-search-input pundit-dialog-input\" row=\"1\" placeholder=\"...type here\" value=\"\" type=\"text\"/>";
						c += "                          &nbsp; <button class=\"pundit-rp-add-literal\" >Literal</button>";
						c += "                          <button class=\"pundit-rp-add-date\" >Date</button>";
						c += "                      </div>";
						c += "                      <div class=\"pundit-rp-suggestions\"></div>";
						c += "                  </div>";
						c += "              </div>";
						self.addHTMLContent(c);
						for (var i in self.suggestionPanels) {
							self.expandedClass = "";
							if (self.suggestionPanels[i].expanded) {
								self.expandedClass = "pundit-expanded";
							}
							c = "          <div id=\"" + self._id + "-container-suggestions-" + i + "\" class=\"pundit-rp-container-suggestions pundit-suggestions fillheight " + self.expandedClass + "\">";
							c += "              <div><span class=\"pundit-icon-collapse pundit-fp-collapsed\"></span><span class=\"pundit-fp-source-name\">" + self.suggestionPanels[i].label + "</span><span class=\"pundit-items-number\">(0)</span></div>";
							c += "              <ul id=\"" + self._id + "-suggestions-list-" + i + "\" class=\"pundit-rp-suggestions-list pundit-view-list pundit-items list pundit-item-add-button pundit-stop-wheel-propagation\"></ul>";
							c += "          </div>";
							_4.query("#" + self._id + " .pundit-rp-suggestions").append(c);
						}
						for (var i in self.namedEntitiesSources) {
							self.expandedClass = "";
							if (self.namedEntitiesSources[i].expanded) {
								self.expandedClass = "pundit-expanded";
							}
							c = "          <div id=\"" + self._id + "-container-suggestions-" + i + "\" class=\"pundit-rp-container-suggestions pundit-items-container pundit-lookup pundit-visible fillheight  " + self.expandedClass + "\">";
							c += "              <div><span class=\"pundit-icon-collapse pundit-fp-collapsed\"></span><span class=\"pundit-fp-source-name\">" + self.namedEntitiesSources[i].label + "</span><span class=\"pundit-items-number\">(0)</span></div>";
							c += "              <ul id=\"" + self._id + "-suggestions-list-" + i + "\" class=\"pundit-rp-suggestions-list pundit-view-list pundit-items list pundit-item-add-button pundit-stop-wheel-propagation\"></ul>";
							c += "              <span class=\"pundit-error-message\">" + self.namedEntitiesSources[i].label + " is not responding</span>";
							c += "          </div>";
							_4.query("#" + self._id + " .pundit-rp-suggestions").append(c);
						}
					},
					initDnD: function () {
						var self = this;
						for (var i in self.suggestionPanels) {
							self["itemsDnD" + i] = new _4.dnd.Source(self._id + "-suggestions-list-" + i, {
								copyOnly: true,
								creator: semlibItems.itemNodeCreator,
								checkAcceptance: function () {
									return false;
								}
							});
						}
						for (var i in self.namedEntitiesSources) {
							self["itemsDnD" + i] = new _4.dnd.Source(self._id + "-suggestions-list-" + i, {
								copyOnly: true,
								creator: semlibItems.itemNodeCreator,
								checkAcceptance: function () {
									return false;
								}
							});
						}
					},
					performSearch: function (_760) {
						var self = this;
						if (_760 !== self._lastKeyword) {
							self._lastKeyword = _760;
							if (self.searchType === "filter") {
								self.filterItemsByTerm(_760);
							} else {
								if (self.searchType === "search") {
									self.searchItemsByTerm(_760);
								}
							}
							self.searchNamedEntities(_760);
						}
					},
					initBehaviors: function () {
						var self = this;
						_4.connect(_4.query("body")[0], (!_4.isMozilla ? "onmousewheel" : "DOMMouseScroll"), function (e) {
							if (e.target.id === "pundit-tc-triples-container" && self.inShowing) {
								self.hide();
								_4.stopEvent(e);
							}
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-search-input")[0], "onkeyup", function (e) {
							clearTimeout(self.keyInputTimer);
							var _761 = _4.query("#" + self._id + " .pundit-rp-search-input")[0].value;
							self.keyInputTimer = setTimeout(function () {
								self.performSearch(_761);
							}, self.keyInputTimerLength);
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-add-literal")[0], "onclick", function (e) {
							self.showLiteralPanel(true, false);
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-add-date")[0], "onclick", function (e) {
							self.showDatePanel(true, false);
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-date-input")[0], "onkeyup", function (e) {
							self.checkDate(e);
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-literal-text")[0], "onkeyup", function (e) {
							if (_4.query(e.target)[0].innerHTML.replace(/<(?:.|\n)*?>/gm, "") !== "") {
								_4.attr(_4.query("#" + self._id + " .pundit-rp-literal-panel-done")[0], "disabled", false);
							} else {
								_4.attr(_4.query("#" + self._id + " .pundit-rp-literal-panel-done")[0], "disabled", true);
							}
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-panel-close")[0], "onclick", function () {
							self.showLiteralPanel(false, false);
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-panel-close")[1], "onclick", function () {
							self.showLiteralPanel(false, false);
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-literal-panel-done")[0], "onclick", function () {
							self.createLiteralItem();
						});
						_4.connect(_4.query("#" + self._id + " .pundit-rp-date-panel-done")[0], "onclick", function () {
							self.createDateItem();
						});
						var beh = {};
						for (var i in self.panels) {
							(function (_762) {
								beh["#" + self._id + " span.pundit-icon-collapse"] = {
									"onclick": function (e) {
										var _763 = _4.query(e.target).parent().parent()[0];
										if (_4.hasClass(_763, "pundit-expanded")) {
											_4.removeClass(_763, "pundit-expanded");
											_4.style(_4.query(_763).children("ul")[0], "height", "0px");
											self.adjustPreviewHeight();
										} else {
											_4.addClass(_763, "pundit-expanded");
											self.adjustPanelsHeight();
										}
									}
								};
								beh["#" + self._id + "-suggestions-list-" + _762 + " li.dojoDndItem"] = {
									"onmouseover": function (e) {
										var img = "",
												node, _764;
										if (e.target.nodeName === "LI") {
											node = _4.query(e.target);
										} else {
											node = _4.query(_4.query(e.target).parent()[0]);
										}
										_764 = self["itemsDnD" + _762].getItem(node[0].id).data.value;
										self.showPreview(_764);
									},
									"onclick": function (e) {
										var _765 = e.target;
										while (!_4.hasClass(_4.query(_765)[0], "dojoDndItem")) {
											_765 = _4.query(_765).parent()[0];
										}
										var id = _765.id;
										self["itemsDnD" + _762].selectNone();
										self["itemsDnD" + _762].selection[id] = 1;
									}
								};
								beh["#" + self._id + "-suggestions-list-" + _762 + " li.dojoDndItem span.pundit-item-label"] = {
									"onclick": function (e) {
										var item, node;
										if (e.target.nodeName === "LI") {
											node = _4.query(e.target);
										} else {
											node = _4.query(_4.query(e.target).parent()[0]);
										}
										item = self["itemsDnD" + _762].getItem(node[0].id);
										self.fireOnItemAdded(item.data);
									}
								};
								beh["#" + self._id + "-suggestions-list-" + _762 + " li.dojoDndItem span.pundit-item-add-button"] = {
									"onclick": function (e) {
										var item, node;
										if (e.target.nodeName === "LI") {
											node = _4.query(e.target);
										} else {
											node = _4.query(_4.query(e.target).parent()[0]);
										}
										item = self["itemsDnD" + _762].getItem(node[0].id);
										self.fireOnItemAdded(item.data);
									}
								};
								beh["#" + self._id + "-suggestions-list-" + _762 + " li.dojoDndItem span.pundit-icon-context-button"] = {
									"onclick": function (e) {
										var node = _4.query(_4.query(e.target).parent()[0]),
												uri = self["itemsDnD" + _762].getItem(node[0].id).data.value;
										cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, uri, "resourceItem");
									}
								};
							})(i);
						}
						_4.behavior.add(beh);
						_4.behavior.apply();
					},
					searchNamedEntities: function (_766) {
						var self = this;
						if (typeof _766 !== "undefined") {
							if (_766 !== "") {
								_4.query("#" + self._id + " .pundit-rp-search-input")[0].value = _766;
								self.namedEntitiesLookup(_766);
							}
						}
						self.adjustPanelsHeight();
					},
					initContextMenu: function () {
						var self = this;
						cMenu.addAction({
							type: ["resourceItem"],
							name: "openResourceItemWebPage",
							label: "Open Web page",
							showIf: function (uri) {
								var item = _PUNDIT.items.getItemByUri(uri);
								if (typeof item !== "undefined") {
									if (_PUNDIT.items.isTerm(item)) {
										return true;
									} else {
										return false;
									}
								} else {
									item = _PUNDIT.vocab.getItemsForTerm(uri);
									if (typeof item !== "undefined") {
										return true;
									} else {
										return false;
									}
								}
							},
							onclick: function (uri) {
								window.open(uri, "SemLibOpenedWebPage");
								return true;
							}
						});
						cMenu.addAction({
							type: ["resourceItem"],
							name: "openSemlibResourceWebPage",
							label: "Show in origin page",
							showIf: function (xp) {
								var item = _PUNDIT.items.getItemByUri(xp),
										_767 = window.location.href;
								if (_767.indexOf("#xpointer") !== -1) {
									_767 = _767.substring(0, _767.indexOf("#"));
								}
								if ((typeof item !== "undefined") && (typeof tooltip_viewer.xpointersAnnotationsId[xp] === "undefined") && ((_4.indexOf(item.rdftype, ns.fragments.text) !== -1) || (_4.indexOf(item.rdftype, ns.image) !== -1))) {
									return !tooltip_viewer.xpointersClasses[xp];
								}
								return false;
							},
							onclick: function (xp) {
								var item = _PUNDIT.items.getItemByUri(xp),
										_768 = xp.split("#")[1],
										uri = item.pageContext + "#" + _768;
								window.open(uri, "SemLibOpenedWebPage");
								self.log("Opened a new window to URL " + uri);
								return true;
							}
						});
					},
					clearPanel: function () {
						var self = this;
						self.lastSearchedTerm = "";
						for (var i in self.namedEntitiesSources) {
							_PUNDIT[i].cancelRequests();
							self.setLoading(self._id + "-container-suggestions-" + i, false);
						}
						_4.query("#" + self._id + " div.pundit-rp-container-suggestions.pundit-suggestions").forEach(function (item) {
							_4.removeClass(item, "pundit-visible");
						});
						if (typeof _4.query("#" + self._id + " input.pundit-rp-search-input")[0] !== "undefined") {
							_4.query("#" + self._id + " input.pundit-rp-search-input")[0].value = "";
						}
						for (var i in self.suggestionPanels) {
							_4.empty(_4.byId(self._id + "-suggestions-list-" + i));
							self["itemsDnD" + i].clearItems();
						}
					},
					load: function (_769) {
						var self = this;
						self.clearPanel();
						for (var i in _769) {
							if (_769[i].items.length > 0) {
								_4.addClass(_4.byId(self._id + "-container-suggestions-" + i), "pundit-visible");
								for (var j = _769[i].items.length; j--;) {
									self["itemsDnD" + i].insertNodes(false, [_769[i].items[j]]);
								}
								_4.query("#" + self._id + "-container-suggestions-" + i + " span.pundit-items-number")[0].innerHTML = "(" + self["itemsDnD" + i].getAllNodes().length + ")";
							}
						}
					},
					show: function (x, y, _76a) {
						this.inherited(arguments);
						var self = this;
						self._lastKeyword = "";
						_4.style(self._id, "top", y + 15 + "px");
						_4.style(self._id, "left", x + "px");
						_5.focus(_4.query("#" + self._id + " .pundit-rp-search-input")[0]);
						if (typeof _76a !== "undefined") {
							if (typeof _76a.literalMode !== "undefined") {
								if (_76a.literalMode === "literalEnabled") {
									self.enableLiteralButton(true);
								} else {
									if (_76a.literalMode === "literalOnly") {
										self.showLiteralPanel(true, true);
									} else {
										if (_76a.literalMode === "dateOnly") {
											self.showDatePanel(true, true);
										}
									}
								}
							} else {
								self.enableLiteralButton(false);
								self.showLiteralPanel(false, false);
							}
							if (typeof _76a.title !== "undefined") {
								_4.query("#" + self._id + " .pundit-fp-title")[0].innerHTML = _76a.title;
							}
							if (typeof _76a.arrow !== "undefined") {
								if (_76a.arrow === "left") {
									_4.removeClass(_4.query("#" + self._id + ".pundit-fp")[0], ["pundit-arrow-right", "pundit-arrow-center"]);
									_4.addClass(_4.query("#" + self._id + ".pundit-fp")[0], "pundit-arrow-left");
								} else {
									if (_76a.arrow === "right") {
										_4.removeClass(_4.query("#" + self._id + ".pundit-fp")[0], ["pundit-arrow-left", "pundit-arrow-center"]);
										_4.addClass(_4.query("#" + self._id + ".pundit-fp")[0], "pundit-arrow-right");
									} else {
										if (_76a.arrow === "center") {
											_4.removeClass(_4.query("#" + self._id + ".pundit-fp")[0], ["pundit-arrow-left", "pundit-arrow-right"]);
											_4.addClass(_4.query("#" + self._id + ".pundit-fp")[0], "pundit-arrow-center");
										}
									}
								}
							}
						}
						_4.behavior.apply();
						self.adjustPanelsHeight();
					},
					hide: function () {
						this.inherited(arguments);
						var self = this;
						if (self.inShowing) {
							self.inShowing = false;
							self.showLiteralPanel(false, false);
							_4.empty(_4.query("#" + self._id + " .pundit-rp-literal-text")[0]);
							self._lastKeyword = "";
						}
						self.lastSearchedTerm = "";
						for (var i in self.namedEntitiesSources) {
							_PUNDIT[i].cancelRequests();
							self.setLoading(self._id + "-container-suggestions-" + i, false);
						}
					},
					reset: function () {
						var self = this;
						_4.addClass(_4.query("#" + self._id + " .pundit-rp-literal-panel")[0], "pundit-hidden");
						_4.addClass(_4.query("#" + self._id + " .pundit-rp-date-panel")[0], "pundit-hidden");
						_4.removeClass(_4.query("#" + self._id + " .pundit-rp-search-panel")[0], "pundit-hidden");
						_4.empty(_4.query("#" + self._id + " .pundit-rp-literal-text")[0]);
						_4.query("#" + self._id + " .pundit-rp-date-input")[0].value = "";
						_4.empty(_4.query("#" + self._id + " .pundit-rp-literal-text")[0]);
						self._lastKeyword = "";
					},
					filterItemsByTerm: function (_76b) {
						var self = this;
						if (_76b === "") {
							for (var i in self.suggestionPanels) {
								var _76c = _4.query("#" + self._id + "-suggestions-list-" + i + " li");
								_76c.forEach(function (node) {
									_4.removeClass(node, "pundit-hidden");
								});
							}
						} else {
							for (var i in self.suggestionPanels) {
								self.rankItems(self["itemsDnD" + i], _76b);
							}
						}
						for (var i in self.suggestionPanels) {
							_4.query("#" + self._id + "-container-suggestions-" + i + " span.pundit-items-number")[0].innerHTML = "(" + self.getShownItemsNumber(self["itemsDnD" + i]) + ")";
						}
						self.adjustPanelsHeight();
					},
					searchItemsByTerm: function (term) {
						var self = this,
								_76d = self.createItemsObject(term);
						self.clearPanel();
						self.load(_76d, term);
					},
					createItemsObject: function (term) {
						var _76e = term.split(" "),
								_76f = {}, _770 = semlibMyItems.getItemsFromTerm(_76e, [], [ns.fragments.text, ns.image]),
								_771 = semlibItems.getItemsFromTerm(_76e, [], [ns.fragments.text, ns.image]);
						_76f = {
							myitems: {
								label: "My Items",
								items: _770
							},
							pageitems: {
								label: "Page Items",
								items: _771
							}
						};
						for (var v in _PUNDIT["vocab"].vocabs) {
							var _772 = _PUNDIT["vocab"].getItemsForTermInVocab(term, v);
							_76f[v] = {
								label: v,
								items: _772
							};
						}
						return _76f;
					},
					getShownItemsNumber: function (_773) {
						var n = 0;
						_773.getAllNodes().forEach(function (item) {
							if (_4.style(item, "display") !== "none") {
								n++;
							}
						});
						return n;
					},
					enableLiteralButton: function (_774) {
						var self = this;
						if (_774) {
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-add-date")[0], "pundit-literal-enabled");
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-add-literal")[0], "pundit-literal-enabled");
						} else {
							_4.removeClass(_4.query("#" + self._id + " .pundit-rp-add-date")[0], "pundit-literal-enabled");
							_4.removeClass(_4.query("#" + self._id + " .pundit-rp-add-literal")[0], "pundit-literal-enabled");
						}
						_4.addClass(_4.query("#" + self.Id + " ."));
					},
					showLiteralPanel: function (_775, _776) {
						var self = this;
						if (_775) {
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-search-panel")[0], "pundit-hidden");
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-date-panel")[0], "pundit-hidden");
							_4.removeClass(_4.query("#" + self._id + " .pundit-rp-literal-panel")[0], "pundit-hidden");
							_5.focus(_4.query("#" + self._id + " .pundit-rp-literal-text")[0]);
						} else {
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-literal-panel")[0], "pundit-hidden");
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-date-panel")[0], "pundit-hidden");
							_4.removeClass(_4.query("#" + self._id + " .pundit-rp-search-panel")[0], "pundit-hidden");
						}
						if (_776) {
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-panel-close")[0], "pundit-hidden");
						} else {
							_4.removeClass(_4.query("#" + self._id + " .pundit-rp-panel-close")[0], "pundit-hidden");
						}
					},
					checkDate: function (e) {
						var self = this;
						if (_4.query("#" + self._id + " .pundit-rp-date-input")[0].checkValidity()) {
							_4.attr(_4.query("#" + self._id + " .pundit-rp-date-panel-done")[0], "disabled", false);
						} else {
							_4.attr(_4.query("#" + self._id + " .pundit-rp-date-panel-done")[0], "disabled", true);
						}
					},
					showDatePanel: function (_777, _778) {
						var self = this;
						if (_777) {
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-search-panel")[0], "pundit-hidden");
							_4.addClass(_4.query("#" + self._id + " .pundit-rp-literal-panel")[0], "pundit-hidden");
							_4.removeClass(_4.query("#" + self._id + " .pundit-rp-date-panel")[0], "pundit-hidden");
							_5.focus(_4.query("#" + self._id + " .pundit-rp-date-input")[0]);
						}
					},
					createDateItem: function () {
						var self = this,
								_779 = _4.query("#" + self._id + " .pundit-rp-date-input")[0].value,
								_77a = semlibLiterals.createLiteralItem(_779);
						self.fireOnItemAdded(_77a);
						self.hide();
					},
					createLiteralItem: function () {
						var self = this,
								_77b = _4.query("#" + self._id + " .pundit-rp-literal-text")[0].innerHTML,
								_77c = semlibLiterals.createLiteralItem(_77b);
						self.fireOnItemAdded(_77c);
						self.hide();
					},
					adjustPanelsHeight: function () {
						var self = this,
								_77d, _77e = 0;
						for (var i in self.suggestionPanels) {
							_77d = _4.query("#" + self._id + "-container-suggestions-" + i)[0];
							if (_4.hasClass(_77d, "pundit-expanded")) {
								_77e = self.getShownItemsNumber(self["itemsDnD" + i]);
								if (_77e < self.maxShownItems) {
									_4.style(_4.query(_77d).children("ul")[0], "height", _77e * 27 + 1 + "px");
								} else {
									_4.style(_4.query(_77d).children("ul")[0], "height", self.maxShownItems * 27 + 1 + "px");
								}
							}
						}
						for (var i in self.namedEntitiesSources) {
							_77d = _4.query("#" + self._id + "-container-suggestions-" + i)[0];
							if (_4.hasClass(_77d, "pundit-expanded")) {
								_77e = self.getShownItemsNumber(self["itemsDnD" + i]);
								if (_77e < self.maxShownItems) {
									_4.style(_4.query(_77d).children("ul")[0], "height", _77e * 27 + 1 + "px");
								} else {
									_4.style(_4.query(_77d).children("ul")[0], "height", self.maxShownItems * 27 + 1 + "px");
								}
							}
						}
						self.adjustPreviewHeight();
					},
					namedEntitiesLookup: function (term) {
						var self = this;
						self.lastSearchedTerm = term;
						for (var i in self.namedEntitiesSources) {
							self.setLoading(self._id + "-container-suggestions-" + i, true);
							_PUNDIT[i].getItemsForTerm(term, (function (_77f) {
								return function (_780, term) {
									if (self.lastSearchedTerm === term) {
										_4.removeClass(self._id + "-container-suggestions-" + _77f, "pundit-lookup-error");
										for (var j = _780.length; j--;) {
											previewer.buildPreviewForItem(_780[j]);
										}
										_4.empty(_4.query("#" + self._id + "-container-suggestions-" + _77f + " ul"));
										self["itemsDnD" + _77f].selectAll();
										self["itemsDnD" + _77f].deleteSelectedNodes();
										self["itemsDnD" + _77f].sync();
										if (_780.length === 0) {
											self.setLoading(self._id + "-container-suggestions-" + _77f, false);
											_4.query("#" + self._id + "-container-suggestions-" + _77f + " span.pundit-items-number").html("(" + self.getShownItemsNumber(self["itemsDnD" + _77f]) + ")");
										} else {
											self["itemsDnD" + _77f].sync();
											self["itemsDnD" + _77f].insertNodes(false, _780);
											_4.query("#" + self._id + "-container-suggestions-" + _77f + " span.pundit-items-number").html("(" + self.getShownItemsNumber(self["itemsDnD" + _77f]) + ")");
											self.setLoading(self._id + "-container-suggestions-" + _77f, false);
											_4.behavior.apply();
										}
										self.adjustPanelsHeight();
									}
								};
							})(i), (function (_781) {
								return function () {
									self.setLoading(self._id + "-container-suggestions-" + _781, false);
									_4.query("#" + self._id + "-container-suggestions-" + _781 + " span.pundit-items-number").html("(" + 0 + ")");
									_4.addClass(self._id + "-container-suggestions-" + _781, "pundit-lookup-error");
								};
							})(i));
						}
					},
					setLoading: function (_782, v) {
						var self = this,
								r = _4.query("#" + _782),
								c = "pundit-panel-loading";
						return (v) ? r.addClass(c) : r.removeClass(c);
					},
					rankItems: function (_783, word) {
						var _784 = [];
						for (var i in _783.map) {
							_784.push([i, _783.map[i].data.label.score(word)]);
						}
						_784.sort((function (a, b) {
							return b[1] - a[1];
						}));
						for (var i = 0; i < _784.length; i++) {
							var node = _4.byId(_784[i][0]);
							_4.destroy(_784[i][0]);
							_4.query("#" + _783.node.id).append(node);
							if (_784[i][1] === 0) {
								_4.addClass(_784[i][0], "pundit-hidden");
							} else {
								_4.removeClass(_784[i][0], "pundit-hidden");
							}
						}
					},
					adjustPreviewHeight: function () {
						var self = this;
						clearTimeout(self.previewTimer);
						self.previewTimer = setTimeout(function () {
							var h = _4.position(_4.query("#" + self._id + " .pundit-fp-content-list")[0]).h - 10;
							_4.style(_4.query("#" + self._id + " .pundit-fp-preview")[0], "height", h + "px");
						}, 1200);
					}
				});
			}
			if (!_4._hasResource["pundit.RecognizerPanel"]) {
				_4._hasResource["pundit.RecognizerPanel"] = true;
				_4.provide("pundit.RecognizerPanel");
				_4.declare("pundit.RecognizerPanel", pundit.ResourcesPanel, {
					constructor: function (_785) {
						var self = this;
						self.saver = new pundit.AnnotationWriter({
							debug: self.opts.debug
						});
						self.saver.onSaveItems(function (_786) {
							self.log("onSaveItems: Saver answered with " + _786);
							self.saved = true;
							self.hide();
							tooltip_viewer.refreshAnnotations();
						});
						self.saver.onSave(function (m) {
							self.log("onSave: Saver answered with " + m);
							self.saveItems(m);
						});
						self.onItemAdded(self.addItem);
					},
					initHTML: function () {
						this.inherited(arguments);
						var self = this;
						var c = "<div class=\"pundit-rp-panel-tags-container pundit-rp-container-suggestions pundit-visible pundit-expanded pundit-floating-panel-container\">";
						c += "      <div>";
						c += "          <span class=\"pundit-pane-title pundit-rp-title\">Selected Entities:</span>";
						c += "          <div class=\"pundit-pane\"><ul class=\"pundit-rp-tags pundit-items pundit-view-list showsRemoveButton pundit-stop-wheel-propagation\"></ul></div>";
						c += "      </div>";
						c += "   </div>";
						c += "   <div class=\"pundit-rp-button-container\">";
						c += "   <span class=\"pundit-rp-save-button pundit-gui-button pundit-button-disabled\">Save</span></div>";
						_4.query("#" + self._id + " .pundit-rp-container-search").prepend(c);
					},
					initDnD: function () {
						this.inherited(arguments);
						var self = this;
						self.tagsDnD = new _4.dnd.Target(_4.query("#" + self._id + " .pundit-rp-tags")[0], {
							copyOnly: true,
							creator: semlibItems.itemNodeCreator,
							checkAcceptance: function (_787, _788) {
								if (self.acceptSource(_787)) {
									for (var i = _788.length; i--;) {
										if (self.uriInItems(_787.getItem(_788[i].id).data.value)) {
											return false;
										} else {
											return true;
										}
									}
									return true;
								} else {
									return false;
								}
							}
						});
					},
					initBehaviors: function () {
						this.inherited(arguments);
						var self = this;
						_4.connect(_4.query("#" + self._id + " .pundit-rp-save-button")[0], "onclick", function (e) {
							if (!_4.hasClass(_4.query("#" + self._id + " .pundit-rp-save-button")[0], "pundit-button-disabled")) {
								self.saveTriples();
							} else {
								console.log("Not saving.");
							}
						});
						var beh = {};
						beh["#" + self._id + " .pundit-rp-tags li.dojoDndItem span.pundit-item-remove-button"] = {
							"onclick": function (e) {
								self.removeTag(e);
							}
						};
						beh["#" + self._id + " .pundit-rp-tags" + " li.dojoDndItem"] = {
							"onmouseover": function (e) {
								self.onItemMouseOver(e);
							},
							"onmouseout": function (e) {
								self.onItemMouseOut(e);
							}
						};
						_4.behavior.add(beh);
						_4.behavior.apply();
						_4.subscribe("/dnd/drop", function (_789, _78a, copy, _78b) {
							if (_78b === self.tagsDnD) {
								setTimeout(function () {
									self.updateSaveBtn();
								}, 100);
							}
						});
					},
					saveTriples: function () {
						var self = this;
						var _78c = window.location.href,
								b = new pundit.TriplesBucket();
						for (var j in self.tagsDnD.map) {
							var item = self.tagsDnD.map[j];
							b.addTriple(self.target, ns.rdfs_seeAlso, item.data.value, "uri");
						}
						if (!b.isEmpty()) {
							self.log("Saving triples json: " + _4.toJson(b.getTalisJson()));
							//alert('debug: Schreibt'+_4.toJson(b.getTalisJson()));//Felix
							//IO.writeJSON("http://t.spatialhumanities.de/openrdf-sesame/repositories/ibr/statements",_4.toJson(b.getTalisJson()));//Felix
							self.saver.writeAnnotationContent(b, [self.target], _78c);
						} else {
							self.log("Empty bucket in saveTriples??!");
						}
					},
					saveItems: function (_78d) {
						var self = this,
								b = new pundit.TriplesBucket(),
								_78e = [],
								item = _PUNDIT.items.getItemByUri(self.target);
						_78e.push(item.rdfData);
						self.tagsDnD.forInItems(function (item) {
							_78e.push(item.data.rdfData);
						});
						for (var i = _78e.length; i--;) {
							b.concatBucket(_78e[i]);
						}
						b.addTriple(ns.rdfs_seeAlso, ns.rdf_type, ns.rdf_property, "uri");
						b.addTriple(ns.rdfs_seeAlso, ns.rdfs_label, "see also", "literal");
						if (!b.isEmpty()) {
							self.log("Posting " + _78e.length + " items with " + b.bucket.length + " triples..");
							self.saver.writeAnnotationItems(_78d, _4.toJson(b.getTalisJson()));
						} else {
							self.log("saveItems with an empty bucket??!");
						}
					},
					acceptSource: function (_78f) {
						var self = this;
						for (var i in self.panels) {
							if (_78f === self["itemsDnD" + i]) {
								return true;
							}
						}
						return false;
					},
					uriInItems: function (uri) {
						var self = this,
								_790 = false;
						self.tagsDnD.forInItems(function (item) {
							if (item.data.value === uri) {
								_790 = true;
								return;
							}
						});
						return _790;
					},
					show: function (x, y, _791) {
						this.inherited(arguments);
						var self = this,
								item;
						self.tempItemAdded = false;
						self.saved = false;
						self.target = _791.target.value;
						item = _791.target;
						self.updateSaveBtn();
						if (!semlibItems.uriInItems(self.target)) {
							semlibItems.addItem(item);
							self.tempItemAdded = true;
							previewer.buildPreviewForItem(item);
						}
						if (!tooltip_viewer.isTempXpointer(self.target)) {
							if (self.target !== window.location.href) {
								tooltip_viewer.tempXpointers.push(self.target);
							}
							tooltip_viewer.consolidate();
						}
						tooltip_viewer.highlightByXpointer(self.target);
					},
					hide: function () {
						this.inherited(arguments);
						var self = this;
						_4.empty(_4.query("#" + self._id + " ul.pundit-rp-tags"));
						self.tagsDnD.selectAll();
						self.tagsDnD.deleteSelectedNodes();
						self.tagsDnD.sync();
						tooltip_viewer.removeHighlightByXpointer(self.target);
						tooltip_viewer.removeTempXpointer(self.target);
						if (!self.saved) {
							semlibItems.removeItemFromUri(self.target);
							tooltip_viewer.consolidate();
						}
					},
					addItem: function (item) {
						var self = this;
						if (!self.uriInItems(item.value)) {
							self.tagsDnD.insertNodes(false, [item]);
						}
						self.updateSaveBtn();
						_4.behavior.apply();
					},
					removeTag: function (e) {
						var self = this,
								node = _4.query(_4.query(e.target).parent()[0]),
								uri = self.tagsDnD.getItem(node[0].id).data.value;
						self.tagsDnD.deleteSelectedNodes();
						_4.destroy(node);
						_4.behavior.apply();
						self.updateSaveBtn();
					},
					onItemMouseOver: function (e) {
						var self = this,
								node, _792;
						if (e.target.nodeName === "LI") {
							node = _4.query(e.target);
						} else {
							node = _4.query(_4.query(e.target).parent()[0]);
						}
						_792 = self.tagsDnD.getItem(node[0].id).data.value;
						self.showPreview(_792);
					},
					onItemMouseOut: function (e) {
					}
				});
			}
			if (!_4._hasResource["dojox.xml.DomParser"]) {
				_4._hasResource["dojox.xml.DomParser"] = true;
				_4.provide("dojox.xml.DomParser");
				_6.xml.DomParser = new (function () {
					var _793 = {
						ELEMENT: 1,
						ATTRIBUTE: 2,
						TEXT: 3,
						CDATA_SECTION: 4,
						PROCESSING_INSTRUCTION: 7,
						COMMENT: 8,
						DOCUMENT: 9
					};
					var _794 = /<([^>\/\s+]*)([^>]*)>([^<]*)/g;
					var _795 = /([^=]*)=(("([^"]*)")|('([^']*)'))/g;
					var _796 = /<!ENTITY\s+([^"]*)\s+"([^"]*)">/g;
					var _797 = /<!\[CDATA\[([\u0001-\uFFFF]*?)\]\]>/g;
					var _798 = /<!--([\u0001-\uFFFF]*?)-->/g;
					var trim = /^\s+|\s+$/g;
					var _799 = /\s+/g;
					var egt = /\&gt;/g;
					var elt = /\&lt;/g;
					var _79a = /\&quot;/g;
					var _79b = /\&apos;/g;
					var eamp = /\&amp;/g;
					var dNs = "_def_";

					function _79c() {
						return new (function () {
							var all = {};
							this.nodeType = _793.DOCUMENT;
							this.nodeName = "#document";
							this.namespaces = {};
							this._nsPaths = {};
							this.childNodes = [];
							this.documentElement = null;
							this._add = function (obj) {
								if (typeof (obj.id) != "undefined") {
									all[obj.id] = obj;
								}
							};
							this._remove = function (id) {
								if (all[id]) {
									delete all[id];
								}
							};
							this.byId = this.getElementById = function (id) {
								return all[id];
							};
							this.byName = this.getElementsByTagName = _79d;
							this.byNameNS = this.getElementsByTagNameNS = _79e;
							this.childrenByName = _79f;
							this.childrenByNameNS = _7a0;
						})();
					};

					function _79d(name) {
						function _7a1(node, name, arr) {
							_4.forEach(node.childNodes, function (c) {
								if (c.nodeType == _793.ELEMENT) {
									if (name == "*") {
										arr.push(c);
									} else {
										if (c.nodeName == name) {
											arr.push(c);
										}
									}
									_7a1(c, name, arr);
								}
							});
						};
						var a = [];
						_7a1(this, name, a);
						return a;
					};

					function _79e(name, ns) {
						function _7a2(node, name, ns, arr) {
							_4.forEach(node.childNodes, function (c) {
								if (c.nodeType == _793.ELEMENT) {
									if (name == "*" && c.ownerDocument._nsPaths[ns] == c.namespace) {
										arr.push(c);
									} else {
										if (c.localName == name && c.ownerDocument._nsPaths[ns] == c.namespace) {
											arr.push(c);
										}
									}
									_7a2(c, name, ns, arr);
								}
							});
						};
						if (!ns) {
							ns = dNs;
						}
						var a = [];
						_7a2(this, name, ns, a);
						return a;
					};

					function _79f(name) {
						var a = [];
						_4.forEach(this.childNodes, function (c) {
							if (c.nodeType == _793.ELEMENT) {
								if (name == "*") {
									a.push(c);
								} else {
									if (c.nodeName == name) {
										a.push(c);
									}
								}
							}
						});
						return a;
					};

					function _7a0(name, ns) {
						var a = [];
						_4.forEach(this.childNodes, function (c) {
							if (c.nodeType == _793.ELEMENT) {
								if (name == "*" && c.ownerDocument._nsPaths[ns] == c.namespace) {
									a.push(c);
								} else {
									if (c.localName == name && c.ownerDocument._nsPaths[ns] == c.namespace) {
										a.push(c);
									}
								}
							}
						});
						return a;
					};

					function _7a3(v) {
						return {
							nodeType: _793.TEXT,
							nodeName: "#text",
							nodeValue: v.replace(_799, " ").replace(egt, ">").replace(elt, "<").replace(_79b, "'").replace(_79a, "\"").replace(eamp, "&")
						};
					};

					function _7a4(name) {
						for (var i = 0; i < this.attributes.length; i++) {
							if (this.attributes[i].nodeName == name) {
								return this.attributes[i].nodeValue;
							}
						}
						return null;
					};

					function _7a5(name, ns) {
						for (var i = 0; i < this.attributes.length; i++) {
							if (this.ownerDocument._nsPaths[ns] == this.attributes[i].namespace && this.attributes[i].localName == name) {
								return this.attributes[i].nodeValue;
							}
						}
						return null;
					};

					function _7a6(name, val) {
						var old = null;
						for (var i = 0; i < this.attributes.length; i++) {
							if (this.attributes[i].nodeName == name) {
								old = this.attributes[i].nodeValue;
								this.attributes[i].nodeValue = val;
								break;
							}
						}
						if (name == "id") {
							if (old != null) {
								this.ownerDocument._remove(old);
							}
							this.ownerDocument._add(this);
						}
					};

					function _7a7(name, val, ns) {
						for (var i = 0; i < this.attributes.length; i++) {
							if (this.ownerDocument._nsPaths[ns] == this.attributes[i].namespace && this.attributes[i].localName == name) {
								this.attributes[i].nodeValue = val;
								return;
							}
						}
					};

					function prev() {
						var p = this.parentNode;
						if (p) {
							for (var i = 0; i < p.childNodes.length; i++) {
								if (p.childNodes[i] == this && i > 0) {
									return p.childNodes[i - 1];
								}
							}
						}
						return null;
					};

					function next() {
						var p = this.parentNode;
						if (p) {
							for (var i = 0; i < p.childNodes.length; i++) {
								if (p.childNodes[i] == this && (i + 1) < p.childNodes.length) {
									return p.childNodes[i + 1];
								}
							}
						}
						return null;
					};
					this.parse = function (str) {
						var root = _79c();
						if (str == null) {
							return root;
						}
						if (str.length == 0) {
							return root;
						}
						if (str.indexOf("<!ENTITY") > 0) {
							var _7a8, eRe = [];
							if (_796.test(str)) {
								_796.lastIndex = 0;
								while ((_7a8 = _796.exec(str)) != null) {
									eRe.push({
										entity: "&" + _7a8[1].replace(trim, "") + ";",
										expression: _7a8[2]
									});
								}
								for (var i = 0; i < eRe.length; i++) {
									str = str.replace(new RegExp(eRe[i].entity, "g"), eRe[i].expression);
								}
							}
						}
						var _7a9 = [],
								_7aa;
						while ((_7aa = _797.exec(str)) != null) {
							_7a9.push(_7aa[1]);
						}
						for (var i = 0; i < _7a9.length; i++) {
							str = str.replace(_7a9[i], i);
						}
						var _7ab = [],
								_7ac;
						while ((_7ac = _798.exec(str)) != null) {
							_7ab.push(_7ac[1]);
						}
						for (i = 0; i < _7ab.length; i++) {
							str = str.replace(_7ab[i], i);
						}
						var res, obj = root;
						while ((res = _794.exec(str)) != null) {
							if (res[2].charAt(0) == "/" && res[2].replace(trim, "").length > 1) {
								if (obj.parentNode) {
									obj = obj.parentNode;
								}
								var text = (res[3] || "").replace(trim, "");
								if (text.length > 0) {
									obj.childNodes.push(_7a3(text));
								}
							} else {
								if (res[1].length > 0) {
									if (res[1].charAt(0) == "?") {
										var name = res[1].substr(1);
										var _7ad = res[2].substr(0, res[2].length - 2);
										obj.childNodes.push({
											nodeType: _793.PROCESSING_INSTRUCTION,
											nodeName: name,
											nodeValue: _7ad
										});
									} else {
										if (res[1].charAt(0) == "!") {
											if (res[1].indexOf("![CDATA[") == 0) {
												var val = parseInt(res[1].replace("![CDATA[", "").replace("]]", ""));
												obj.childNodes.push({
													nodeType: _793.CDATA_SECTION,
													nodeName: "#cdata-section",
													nodeValue: _7a9[val]
												});
											} else {
												if (res[1].substr(0, 3) == "!--") {
													var val = parseInt(res[1].replace("!--", "").replace("--", ""));
													obj.childNodes.push({
														nodeType: _793.COMMENT,
														nodeName: "#comment",
														nodeValue: _7ab[val]
													});
												}
											}
										} else {
											var name = res[1].replace(trim, "");
											var o = {
												nodeType: _793.ELEMENT,
												nodeName: name,
												localName: name,
												namespace: dNs,
												ownerDocument: root,
												attributes: [],
												parentNode: null,
												childNodes: []
											};
											if (name.indexOf(":") > -1) {
												var t = name.split(":");
												o.namespace = t[0];
												o.localName = t[1];
											}
											o.byName = o.getElementsByTagName = _79d;
											o.byNameNS = o.getElementsByTagNameNS = _79e;
											o.childrenByName = _79f;
											o.childrenByNameNS = _7a0;
											o.getAttribute = _7a4;
											o.getAttributeNS = _7a5;
											o.setAttribute = _7a6;
											o.setAttributeNS = _7a7;
											o.previous = o.previousSibling = prev;
											o.next = o.nextSibling = next;
											var attr;
											while ((attr = _795.exec(res[2])) != null) {
												if (attr.length > 0) {
													var name = attr[1].replace(trim, "");
													var val = (attr[4] || attr[6] || "").replace(_799, " ").replace(egt, ">").replace(elt, "<").replace(_79b, "'").replace(_79a, "\"").replace(eamp, "&");
													if (name.indexOf("xmlns") == 0) {
														if (name.indexOf(":") > 0) {
															var ns = name.split(":");
															root.namespaces[ns[1]] = val;
															root._nsPaths[val] = ns[1];
														} else {
															root.namespaces[dNs] = val;
															root._nsPaths[val] = dNs;
														}
													} else {
														var ln = name;
														var ns = dNs;
														if (name.indexOf(":") > 0) {
															var t = name.split(":");
															ln = t[1];
															ns = t[0];
														}
														o.attributes.push({
															nodeType: _793.ATTRIBUTE,
															nodeName: name,
															localName: ln,
															namespace: ns,
															nodeValue: val
														});
														if (ln == "id") {
															o.id = val;
														}
													}
												}
											}
											root._add(o);
											if (obj) {
												obj.childNodes.push(o);
												o.parentNode = obj;
												if (res[2].charAt(res[2].length - 1) != "/") {
													obj = o;
												}
											}
											var text = res[3];
											if (text.length > 0) {
												obj.childNodes.push(_7a3(text));
											}
										}
									}
								}
							}
						}
						for (var i = 0; i < root.childNodes.length; i++) {
							var e = root.childNodes[i];
							if (e.nodeType == _793.ELEMENT) {
								root.documentElement = e;
								break;
							}
						}
						return root;
					};
				})();
			}
			if (!_4._hasResource["pundit.CommentTagPanel"]) {
				_4._hasResource["pundit.CommentTagPanel"] = true;
				_4.provide("pundit.CommentTagPanel");
				_4.declare("pundit.CommentTagPanel", pundit.RecognizerPanel, {
					opts: {
						enableEntitiesExtraction: true,
						entityExtractor: "data-txt",
					},
					constructor: function (_7ae) {
						var self = this;
						self.saveComment = true;
						self.tagItems = [];
						self.lastTagInfoRequests = [];
						self.lastSearchedComment = "";
						self.tagListItemSelected = false;
						self.enableSemanticExpansion;
						if (self.opts.enableEntitiesExtraction) {
							if (self.opts.entityExtractor === "dbpedia-spotlight") {
								self.entityExtractor = new pundit.DbpediaSpotlight();
							} else {
								if (self.opts.entityExtractor === "data-txt") {
									self.entityExtractor = new pundit.DataTxt();
								} else {
									if (self.opts.entityExtractor === "civet") {
										self.entityExtractor = new pundit.Civet();
									}
								}
							}
						}
					},
					initHTML: function () {
						this.inherited(arguments);
						var self = this,
								c = "<div class=\"pundit-rp-comment-container\">";
						c += "      <div class=\"pundit-container-header\">";
						c += "          <span id=\"pundit-ctp-textarea-title\" class=\"pundit-pane-title\" >Comment:</span>";
						if (self.opts.enableEntitiesExtraction) {
							c += "          <span class=\"pundit-gui-button\" id=\"pundit-ctp-extract-tags\" disabled=\"true\" style=\"float:right;margin-right:5px;\">Extract Tags</span>";
						}
						c += "          <span style=\"float:right;margin-right:5px;\">Language: ";
						c += "          <select dojotype=\"dijit.form.ComboBox\" id=\"pundit-ctp-language\"></span>";
						c += "              <option selected>en</option>";
						c += "              <option>it</option>";
						c += "          </select>";
						c += "      </div>";
						c += "      <div class=\"pundit-ctp-comment-input\">";
						c += "          <section contenteditable=\"true\" id=\"pundit-ctp-comment-input\" class=\"pundit-stop-wheel-propagation\"></section>";
						c += "      </div>";
						c += "   </div>";
						_4.query("#" + self._id + " .pundit-rp-search-panel").prepend(c);
						_4.query("#" + self._id + " .pundit-rp-title")[0].innerHTML = "Tags";
					},
					initContextMenu: function () {
						this.inherited(arguments);
						var self = this;
						cMenu.addAction({
							type: ["textSelectionHelper", "annotatedtextfragment", "bookmarkedtextfragment"],
							name: "NewAddCommentTagToText",
							label: "Add Comment or Tags",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								self.initPanel(item, "Comment and tags");
								self.saveComment = true;
								return true;
							}
						});
						if (self.opts.enableEntitiesExtraction) {
							cMenu.addAction({
								type: ["textSelectionHelper"],
								name: "extractEntities",
								label: "Extract entities",
								showIf: function (item) {
									return true;
								},
								onclick: function (item) {
									self.initPanel(item, "Extract entitites");
									_4.byId("pundit-ctp-textarea-title").innerHTML = "Selected text:";
									_4.html.set("pundit-ctp-comment-input", item.description);
									self.saveComment = false;
									self.extractTags(_4.byId("pundit-ctp-language").value);
									return true;
								}
							});
						}
					},
					initBehaviors: function () {
						this.inherited(arguments);
						var self = this;
						_4.connect(_4.byId("pundit-ctp-comment-input"), "onclick", function () {
							var _7af = _4.byId("pundit-ctp-comment-input").innerHTML.replace(/<(?:.|\n)*?>/gm, "");
							self.cancelPendingSpotlightRequests();
							_4.query("#" + self._id + " .pundit-pane").removeClass("pundit-panel-loading");
							self.updateSaveBtn();
						});
						_4.connect(_4.byId("pundit-ctp-comment-input"), "onkeyup", function () {
							self.updateSaveBtn();
						});
						if (self.opts.enableEntitiesExtraction) {
							_4.connect(_4.byId("pundit-ctp-extract-tags"), "onclick", function (evt) {
								if (!_4.hasClass(_4.byId("pundit-ctp-extract-tags"), "pundit-button-disabled")) {
									self.extractTags(_4.byId("pundit-ctp-language").value);
								}
							});
						}
						_4.behavior.add({
							"#pundit-ctp-comment-input a": {
								"onmouseover": function (e) {
									var uri = _4.attr(e.target, "about");
									self.showPreview(uri);
									for (var i in self.tagsDnD.map) {
										if (self.tagsDnD.map[i].data.value === uri) {
											_4.addClass(i, "pundit-item-selected");
										}
									}
								}
							}
						});
					},
					extractTags: function (_7b0) {
						var self = this,
								tags = [];
						var _7b1 = unescape(_4.byId("pundit-ctp-comment-input").innerHTML.replace(/<(?:.|\n)*?>/gm, "").replace(/&nbsp;/g, " "));
						if (_7b1 !== "") {
							self.cancelPendingSpotlightRequests();
							self.tagsDnD.selectNone();
							_4.query("#" + self._id + " .pundit-rp-tags li.dojoDndItem").forEach(function (tag) {
								if (typeof (self.tagsDnD.map[tag.id].data.suggested) !== "undefined") {
									self.tagsDnD.selection[tag.id] = 1;
									self.removeItemFromUri(self.tagsDnD.map[tag.id].data.value);
								}
							});
							self.tagsDnD.deleteSelectedNodes();
							if (self.tagListItemSelected) {
								self.tagListItemSelected = false;
							}
							_4.query("#" + self._id + " .pundit-pane").addClass("pundit-panel-loading");
							self.enableSemanticExpansion = self.entityExtractor.getEntities(_7b0, _7b1, function (tags) {
								for (var i = tags.length; i--;) {
									self.tagItems.push(tags[i]);
									tags[i]["pundit-items"][0].suggested = true;
									tags[i]["pundit-items"][0].rdfData = semlibItems.createBucketForVocabItem(tags[i]["pundit-items"][0]).bucket;
									if (!self.uriInItems(tags[i]["pundit-items"][0].value)) {
										self.tagsDnD.insertNodes(false, [tags[i]["pundit-items"][0]]);
										previewer.buildPreviewForItem(tags[i]["pundit-items"][0]);
									}
								}
								self.markupText(tags);
								_4.query("#" + self._id + " .pundit-pane").removeClass("pundit-panel-loading");
								_4.behavior.apply();
							}, function () {
								_4.query("#" + self._id + " .pundit-pane").removeClass("pundit-panel-loading");
							});
							self.lastSearchedComment = _7b1;
							if (self.opts.enableEntitiesExtraction) {
								_4.query("#pundit-ctp-extract-tags").attr("disabled", true);
							}
							self.tagItems = [];
							self.updateSaveBtn();
						}
					},
					saveTriples: function () {
						var self = this,
								_7b2 = window.location.href,
								_7b3 = self.parseInputText(_4.byId("pundit-ctp-comment-input")),
								b = new pundit.TriplesBucket();
						if (self.saveComment && _7b3 !== "") {
							b.addTriple(self.target, ns.pundit_hasComment, _7b3, "literal");
						}
						for (var j in self.tagsDnD.map) {
							var item = self.tagsDnD.map[j];
							b.addTriple(self.target, ns.pundit_hasTag, item.data.value, "uri");
						}
						if (!b.isEmpty()) {
							self.log("Saving triples json: " + _4.toJson(b.getTalisJson()));
							var _7b4 = [self.target];
							var _7b5 = _PUNDIT.items.getItemByUri(self.target);
							if (_7b5.rdftype.indexOf(ns.fragments.image) !== -1) {
								var _7b6 = semlibImageFragmentHandler.getParentImageXpointer(_7b5.value);
								_7b4.push(_7b6);
							}
							self.saver.writeAnnotationContent(b, _7b4, _7b2);
						} else {
							self.log("Empty bucket in saveTriples??!");
						}
					},
					saveItems: function (_7b7) {
						var self = this,
								b = new pundit.TriplesBucket(),
								_7b8 = [],
								item = _PUNDIT.items.getItemByUri(self.target);
						_7b8.push(item.rdfData);
						self.tagsDnD.forInItems(function (item) {
							_7b8.push(item.data.rdfData);
						});
						for (var i = _7b8.length; i--;) {
							b.concatBucket(_7b8[i]);
						}
						if (!b.isEmpty()) {
							self.log("Posting " + _7b8.length + " items with " + b.bucket.length + " triples..");
							self.saver.writeAnnotationItems(_7b7, _4.toJson(b.getTalisJson()));
						} else {
							self.log("saveItems with an empty bucket??!");
						}
					},
					updateSaveBtn: function () {
						var self = this,
								_7b9 = _4.byId("pundit-ctp-comment-input").innerHTML.replace(/<(?:.|\n)*?>/gm, ""),
								sbtn = _4.query("#" + self._id + " .pundit-rp-save-button")[0],
								ebtn = _4.byId("pundit-ctp-extract-tags");
						if (_7b9 === "" && (self.tagsDnD.getAllNodes().length === 0)) {
							_4.addClass(sbtn, "pundit-button-disabled");
							if (self.opts.enableEntitiesExtraction) {
								_4.addClass(ebtn, "pundit-button-disabled");
							}
						} else {
							_4.removeClass(sbtn, "pundit-button-disabled");
							if (self.opts.enableEntitiesExtraction) {
								_4.removeClass(ebtn, "pundit-button-disabled");
							}
						}
					},
					parseInputText: function (text) {
						return unescape(text.innerHTML.replace(/&nbsp;/g, " "));
					},
					markupText: function (tags) {
						var self = this,
								a, tag, _7ba, _7bb, text = unescape(_4.byId("pundit-ctp-comment-input").innerHTML.replace(/<(?:.|\n)*?>/gm, "").replace(/&nbsp;/g, " ")),
								_7bc = self.getTagsSortedByOffset(tags);
						for (var i = 0; i < _7bc.length; i++) {
							_7ba = parseInt(_7bc[i][0]);
							if (typeof (_7bb) !== "undefined" && ((_7ba === _7bb) || (_7ba + tag.length >= _7bb))) {
								continue;
							}
							tag = _7bc[i][1];
							a = "<a about=\"" + tag.uri + "\" href=\"" + tag.uri + "\" target=\"_blank\">" + tag.match + "</a>";
							text = text.substring(0, _7ba) + a + text.substring(_7ba + parseInt(tag.length), text.length);
							_7bb = _7ba;
						}
						_4.html.set("pundit-ctp-comment-input", text);
					},
					cancelPendingSpotlightRequests: function () {
						var self = this;
						if (typeof (self.enableSemanticExpansion) !== "undefined") {
							self.enableSemanticExpansion.cancel();
						}
					},
					itemIndex: function (uri) {
						var self = this;
						for (var i = self.tagItems.length - 1; i >= 0; i--) {
							if (self.tagItems[i].uri === uri) {
								return i;
							}
						}
						return -1;
					},
					uriInItems: function (uri) {
						var self = this,
								_7bd = false;
						self.tagsDnD.forInItems(function (item) {
							if (item.data.value === uri) {
								_7bd = true;
								return;
							}
						});
						return _7bd;
					},
					hide: function () {
						this.inherited(arguments);
						var self = this;
						self.cancelPendingRequests();
						self.lastSearchedComment = "";
						_4.empty(_4.byId("pundit-ctp-comment-input"));
					},
					show: function () {
						this.inherited(arguments);
						_4.query("#pundit-ctp-extract-tags").attr("disabled", true);
					},
					removeTag: function (e) {
						var self = this,
								node = _4.query(_4.query(e.target).parent()[0]),
								uri = self.tagsDnD.getItem(node[0].id).data.value;
						self.tagsDnD.deleteSelectedNodes();
						_4.behavior.apply();
						self.removeItemFromUri(uri);
						self.updateMarkup();
						self.updateSaveBtn();
						return true;
					},
					removeItemFromUri: function (uri) {
						var self = this,
								_7be = this.itemIndex(uri);
						for (var i = self.tagItems.length - 1; i >= 0; i--) {
							if (self.tagItems[i].uri === uri) {
								self.tagItems.splice(i, 1);
							}
						}
						_4.destroy(_4.query("#pundit-ctp-tag-list li[about=" + uri + "]")[0]);
					},
					updateMarkup: function () {
						var self = this;
						self.markupText(self.tagItems);
					},
					cancelPendingRequests: function () {
						var self = this;
						self.cancelPendingSpotlightRequests();
						if (typeof (self.lastTagRequest) !== "undefined") {
							self.lastTagRequest.cancel();
						}
					},
					onItemMouseOver: function (e) {
						var self = this,
								node, _7bf;
						if (e.target.nodeName === "LI") {
							node = _4.query(e.target);
						} else {
							node = _4.query(_4.query(e.target).parent()[0]);
						}
						_7bf = self.tagsDnD.getItem(node[0].id).data.value;
						_4.query("#pundit-ctp-comment-input a[about=\"" + _7bf + "\"]").forEach(function (node, i) {
							_4.addClass(node, "pundit-selected");
						});
						self.showPreview(_7bf);
					},
					onItemMouseOut: function (e) {
						var self = this,
								node, _7c0;
						if (e.target.nodeName === "LI") {
							node = _4.query(e.target);
						} else {
							node = _4.query(_4.query(e.target).parent()[0]);
						}
						_7c0 = self.tagsDnD.getItem(node[0].id).data.value;
						_4.query("#pundit-ctp-comment-input a[about=\"" + _7c0 + "\"]").forEach(function (node, i) {
							_4.removeClass(node, "pundit-selected");
						});
					},
					initPanel: function (item, _7c1) {
						var self = this,
								_7c2 = {}, _7c3 = semlibMyItems.getItemsFromTerm("", [], [ns.fragments.text, ns.image]),
								_7c4 = semlibItems.getItemsFromTerm("", [], [ns.fragments.text, ns.image]);
						_7c2 = {
							myitems: {
								label: "My Items",
								items: _7c3
							},
							pageitems: {
								label: "Page Items",
								items: _7c4
							}
						};
						for (var v in _PUNDIT["vocab"].vocabs) {
							var _7c5 = _PUNDIT["vocab"].getItemsForTermInVocab("", v);
							_7c2[v] = {
								label: v,
								items: _7c5
							};
						}
						self.load(_7c2, "");
						self.show(200, 100, {
							title: _7c1,
							target: item
						});
						_4.byId("pundit-ctp-comment-input").focus();
						return true;
					},
					getTagsSortedByOffset: function (tags) {
						var self = this,
								_7c6 = [];
						for (var i = 0; i < tags.length; i++) {
							_7c6.push([parseInt(tags[i].offset), tags[i]]);
						}
						_7c6.sort((function (a, b) {
							return b[0] - a[0];
						}));
						return _7c6;
					}
				});
			}
			if (!_4._hasResource["pundit.AuthenticatedRequests"]) {
				_4._hasResource["pundit.AuthenticatedRequests"] = true;
				_4.provide("pundit.AuthenticatedRequests");
				_4.declare("pundit.AuthenticatedRequests", pundit.BaseComponent, {
					opts: {
						loginTimerMS: 500,
						loginAutomaticHideMS: 2000
					},
					blockedRequests: [],
					constructor: function (_7c7) {
						var self = this;
						self.redirectURL = null;
						self.initLoginDialog();
						self.createCallback(["login", "logout"]);
						self.log("Authenticated requests component up and running!");
					},
					initLoginDialog: function () {
						var self = this,
								h = "<div id='pundit-login-popup-content' class='off tundra'>";
						h += "<div class='off'><p>To view annotations on this page you must log in.</p></div>";
						h += "<div class='waiting'><p>Please complete the process in the login window</p></div>";
						h += "<div class='logged'><p>You are logged in as:</p> <span class='username'>XYZ</span></div>";
						h += "<div id='pundit-login-popup-buttons'>";
						h += "<span id='pundit-login-close-button'>Close</span>";
						h += "<span id='pundit-login-open-button'>Open the login window</span>";
						h += "</div>";
						h += "</div>";
						self.dialog = new _5.Dialog({
							style: "width: 400px"
						});
						_4.addClass(_4.byId(self.dialog.id), "tundra");
						_4.destroy(self.dialog.closeButtonNode);
						self.dialog.attr("content", h);
						_4.connect(_4.byId("pundit-login-open-button"), "onclick", function () {
							self.openLoginPopUp();
						});
						_4.connect(_4.byId("pundit-login-close-button"), "onclick", function () {
							self.dialog.hide();
							clearTimeout(self.loginTimer);
						});
					},
					xGet: function (_7c8) {
						return _4.xhrGet(this.setWrappingCallParams(_7c8));
					},
					xPost: function (_7c9) {


						//IO.writeJSON("http://t.spatialhumanities.de/openrdf-sesame/repositories/ibr/statements",_7c9.postData);//Felix
						_4.xhrPost(this.setWrappingCallParams(_7c9));
					},
					xPut: function (_7ca) {
						_4.xhrPut(this.setWrappingCallParams(_7ca));
					},
					xDelete: function (_7cb) {
						_4.xhrDelete(this.setWrappingCallParams(_7cb));
					},
					showLoginForm: function (_7cc) {
						this.redirectURL = _7cc;
						this.dialog.attr("title", "You are not logged in!");
						_4.query("#pundit-login-popup-content").removeClass("logged").removeClass("waiting");
						this.dialog.show();
					},
					openLoginPopUp: function () {
						var self = this;
						window.open(self.redirectURL, "loginpopup", "left=260,top=120,width=480,height=360");
						_4.query("#pundit-login-popup-content").removeClass("off").addClass("waiting");
						self.loginTimer = setTimeout(function () {
							self.checkLogin();
						}, self.opts.loginTimerMS);
					},
					checkLogin: function (f) {
						var self = this;
						var args = {
							url: ns.annotationServerUsersCurrent,
							handleAs: "json",
							headers: {
								"Accept": "application/json"
							},
							load: function (data) {
								if (typeof (data) === "undefined" || typeof (data.loginStatus) === "undefined") {
									data = {
										loginStatus: 0
									};
								}
								if (typeof (f) === "function") {
									f(data);
									return;
								} else {
									if (data.loginStatus == 0) {
										self.log("Not logged in.. yet...");
										self.loginTimer = setTimeout(function () {
											self.checkLogin();
										}, self.opts.loginTimerMS);
										return;
									}
								}
								self.login(data);
							},
							error: function (_7cd) {
							}
						};
						self.xGet(args);
					},
					login: function (data) {
						var self = this;
						self.dialog.attr("title", "You are now logged in!!");
						_4.query("#pundit-login-popup-content span.username").html(data.fullName + " (" + data.email + ")");
						_4.query("#pundit-login-popup-content").removeClass("waiting").addClass("logged");
						for (var i = self.blockedRequests.length; i--;) {
							self.xGet(self.blockedRequests[i]);
						}
						self.fireOnLogin(data);
						setTimeout(function () {
							self.dialog.hide();
						}, self.opts.loginAutomaticHideMS);
					},
					logout: function (f) {
						var self = this;
						clearTimeout(self.loginTimer);
						var args = {
							url: ns.annotationServerUsersLogout,
							handleAs: "json",
							headers: {
								"Accept": "application/json"
							},
							load: function (data) {
								var msg;
								if (typeof (data) !== "undefined" && typeof (data.logout) !== "undefined") {
									data.msg = (data.logout == 1) ? "Logged out succesfully" : "You werent logged in.. and you still arent.";
									if (typeof (f) === "function") {
										f(data);
									}
									self.fireOnLogout(data);
								}
							},
							error: function (_7ce) {
							}
						};
						self.xGet(args);
					},
					setWrappingCallParams: function (_7cf) {
						var self = this,
								_7d0 = {
									"withCredentials": true
								}, key;
						for (key in _7cf) {
							if (key !== "load") {
								_7d0[key] = _7cf[key];
							} else {
								_7d0[key] = function (r) {
									if (r && typeof (r.redirectTo) !== "undefined") {
										self.blockedRequests.push(_7d0);
										self.showLoginForm(r.redirectTo);
									} else {
										_7cf.load(r);
									}
								};
							}
						}
						return _7d0;
					}
				});
			}
			if (!_4._hasResource["dijit.form._FormWidget"]) {
				_4._hasResource["dijit.form._FormWidget"] = true;
				_4.provide("dijit.form._FormWidget");
				_4.declare("dijit.form._FormWidget", [_5._Widget, _5._Templated, _5._CssStateMixin], {
					name: "",
					alt: "",
					value: "",
					type: "text",
					tabIndex: "0",
					disabled: false,
					intermediateChanges: false,
					scrollOnFocus: true,
					attributeMap: _4.delegate(_5._Widget.prototype.attributeMap, {
						value: "focusNode",
						id: "focusNode",
						tabIndex: "focusNode",
						alt: "focusNode",
						title: "focusNode"
					}),
					postMixInProperties: function () {
						this.nameAttrSetting = this.name ? ("name=\"" + this.name.replace(/'/g, "&quot;") + "\"") : "";
						this.inherited(arguments);
					},
					postCreate: function () {
						this.inherited(arguments);
						this.connect(this.domNode, "onmousedown", "_onMouseDown");
					},
					_setDisabledAttr: function (_7d1) {
						this._set("disabled", _7d1);
						_4.attr(this.focusNode, "disabled", _7d1);
						if (this.valueNode) {
							_4.attr(this.valueNode, "disabled", _7d1);
						}
						_5.setWaiState(this.focusNode, "disabled", _7d1);
						if (_7d1) {
							this._set("hovering", false);
							this._set("active", false);
							var _7d2 = "tabIndex" in this.attributeMap ? this.attributeMap.tabIndex : "focusNode";
							_4.forEach(_4.isArray(_7d2) ? _7d2 : [_7d2], function (_7d3) {
								var node = this[_7d3];
								if (_4.isWebKit || _5.hasDefaultTabStop(node)) {
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
					},
					setDisabled: function (_7d4) {
						_4.deprecated("setDisabled(" + _7d4 + ") is deprecated. Use set('disabled'," + _7d4 + ") instead.", "", "2.0");
						this.set("disabled", _7d4);
					},
					_onFocus: function (e) {
						if (this.scrollOnFocus) {
							_4.window.scrollIntoView(this.domNode);
						}
						this.inherited(arguments);
					},
					isFocusable: function () {
						return !this.disabled && this.focusNode && (_4.style(this.domNode, "display") != "none");
					},
					focus: function () {
						if (!this.disabled) {
							_5.focus(this.focusNode);
						}
					},
					compare: function (val1, val2) {
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
					},
					onChange: function (_7d5) {
					},
					_onChangeActive: false,
					_handleOnChange: function (_7d6, _7d7) {
						if (this._lastValueReported == undefined && (_7d7 === null || !this._onChangeActive)) {
							this._resetValue = this._lastValueReported = _7d6;
						}
						this._pendingOnChange = this._pendingOnChange || (typeof _7d6 != typeof this._lastValueReported) || (this.compare(_7d6, this._lastValueReported) != 0);
						if ((this.intermediateChanges || _7d7 || _7d7 === undefined) && this._pendingOnChange) {
							this._lastValueReported = _7d6;
							this._pendingOnChange = false;
							if (this._onChangeActive) {
								if (this._onChangeHandle) {
									clearTimeout(this._onChangeHandle);
								}
								this._onChangeHandle = setTimeout(_4.hitch(this, function () {
									this._onChangeHandle = null;
									this.onChange(_7d6);
								}), 0);
							}
						}
					},
					create: function () {
						this.inherited(arguments);
						this._onChangeActive = true;
					},
					destroy: function () {
						if (this._onChangeHandle) {
							clearTimeout(this._onChangeHandle);
							this.onChange(this._lastValueReported);
						}
						this.inherited(arguments);
					},
					setValue: function (_7d8) {
						_4.deprecated("dijit.form._FormWidget:setValue(" + _7d8 + ") is deprecated.  Use set('value'," + _7d8 + ") instead.", "", "2.0");
						this.set("value", _7d8);
					},
					getValue: function () {
						_4.deprecated(this.declaredClass + "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
						return this.get("value");
					},
					_onMouseDown: function (e) {
						if (!e.ctrlKey && _4.mouseButtons.isLeft(e) && this.isFocusable()) {
							var _7d9 = this.connect(_4.body(), "onmouseup", function () {
								if (this.isFocusable()) {
									this.focus();
								}
								this.disconnect(_7d9);
							});
						}
					}
				});
				_4.declare("dijit.form._FormValueWidget", _5.form._FormWidget, {
					readOnly: false,
					attributeMap: _4.delegate(_5.form._FormWidget.prototype.attributeMap, {
						value: "",
						readOnly: "focusNode"
					}),
					_setReadOnlyAttr: function (_7da) {
						_4.attr(this.focusNode, "readOnly", _7da);
						_5.setWaiState(this.focusNode, "readonly", _7da);
						this._set("readOnly", _7da);
					},
					postCreate: function () {
						this.inherited(arguments);
						if (_4.isIE < 9 || (_4.isIE && _4.isQuirks)) {
							this.connect(this.focusNode || this.domNode, "onkeydown", this._onKeyDown);
						}
						if (this._resetValue === undefined) {
							this._lastValueReported = this._resetValue = this.value;
						}
					},
					_setValueAttr: function (_7db, _7dc) {
						this._handleOnChange(_7db, _7dc);
					},
					_handleOnChange: function (_7dd, _7de) {
						this._set("value", _7dd);
						this.inherited(arguments);
					},
					undo: function () {
						this._setValueAttr(this._lastValueReported, false);
					},
					reset: function () {
						this._hasBeenBlurred = false;
						this._setValueAttr(this._resetValue, true);
					},
					_onKeyDown: function (e) {
						if (e.keyCode == _4.keys.ESCAPE && !(e.ctrlKey || e.altKey || e.metaKey)) {
							var te;
							if (_4.isIE) {
								e.preventDefault();
								te = document.createEventObject();
								te.keyCode = _4.keys.ESCAPE;
								te.shiftKey = e.shiftKey;
								e.srcElement.fireEvent("onkeypress", te);
							}
						}
					},
					_layoutHackIE7: function () {
						if (_4.isIE == 7) {
							var _7df = this.domNode;
							var _7e0 = _7df.parentNode;
							var _7e1 = _7df.firstChild || _7df;
							var _7e2 = _7e1.style.filter;
							var _7e3 = this;
							while (_7e0 && _7e0.clientHeight == 0) {
								(function ping() {
									var _7e4 = _7e3.connect(_7e0, "onscroll", function (e) {
										_7e3.disconnect(_7e4);
										_7e1.style.filter = (new Date()).getMilliseconds();
										setTimeout(function () {
											_7e1.style.filter = _7e2;
										}, 0);
									});
								})();
								_7e0 = _7e0.parentNode;
							}
						}
					}
				});
			}
			if (!_4._hasResource["dijit._HasDropDown"]) {
				_4._hasResource["dijit._HasDropDown"] = true;
				_4.provide("dijit._HasDropDown");
				_4.declare("dijit._HasDropDown", null, {
					_buttonNode: null,
					_arrowWrapperNode: null,
					_popupStateNode: null,
					_aroundNode: null,
					dropDown: null,
					autoWidth: true,
					forceWidth: false,
					maxHeight: 0,
					dropDownPosition: ["below", "above"],
					_stopClickEvents: true,
					_onDropDownMouseDown: function (e) {
						if (this.disabled || this.readOnly) {
							return;
						}
						_4.stopEvent(e);
						this._docHandler = this.connect(_4.doc, "onmouseup", "_onDropDownMouseUp");
						this.toggleDropDown();
					},
					_onDropDownMouseUp: function (e) {
						if (e && this._docHandler) {
							this.disconnect(this._docHandler);
						}
						var _7e5 = this.dropDown,
								_7e6 = false;
						if (e && this._opened) {
							var c = _4.position(this._buttonNode, true);
							if (!(e.pageX >= c.x && e.pageX <= c.x + c.w) || !(e.pageY >= c.y && e.pageY <= c.y + c.h)) {
								var t = e.target;
								while (t && !_7e6) {
									if (_4.hasClass(t, "dijitPopup")) {
										_7e6 = true;
									} else {
										t = t.parentNode;
									}
								}
								if (_7e6) {
									t = e.target;
									if (_7e5.onItemClick) {
										var _7e7;
										while (t && !(_7e7 = _5.byNode(t))) {
											t = t.parentNode;
										}
										if (_7e7 && _7e7.onClick && _7e7.getParent) {
											_7e7.getParent().onItemClick(_7e7, e);
										}
									}
									return;
								}
							}
						}
						if (this._opened && _7e5.focus && _7e5.autoFocus !== false) {
							window.setTimeout(_4.hitch(_7e5, "focus"), 1);
						}
					},
					_onDropDownClick: function (e) {
						if (this._stopClickEvents) {
							_4.stopEvent(e);
						}
					},
					buildRendering: function () {
						this.inherited(arguments);
						this._buttonNode = this._buttonNode || this.focusNode || this.domNode;
						this._popupStateNode = this._popupStateNode || this.focusNode || this._buttonNode;
						var _7e8 = {
							"after": this.isLeftToRight() ? "Right" : "Left",
							"before": this.isLeftToRight() ? "Left" : "Right",
							"above": "Up",
							"below": "Down",
							"left": "Left",
							"right": "Right"
						}[this.dropDownPosition[0]] || this.dropDownPosition[0] || "Down";
						_4.addClass(this._arrowWrapperNode || this._buttonNode, "dijit" + _7e8 + "ArrowButton");
					},
					postCreate: function () {
						this.inherited(arguments);
						this.connect(this._buttonNode, "onmousedown", "_onDropDownMouseDown");
						this.connect(this._buttonNode, "onclick", "_onDropDownClick");
						this.connect(this.focusNode, "onkeypress", "_onKey");
						this.connect(this.focusNode, "onkeyup", "_onKeyUp");
					},
					destroy: function () {
						if (this.dropDown) {
							if (!this.dropDown._destroyed) {
								this.dropDown.destroyRecursive();
							}
							delete this.dropDown;
						}
						this.inherited(arguments);
					},
					_onKey: function (e) {
						if (this.disabled || this.readOnly) {
							return;
						}
						var d = this.dropDown,
								_7e9 = e.target;
						if (d && this._opened && d.handleKey) {
							if (d.handleKey(e) === false) {
								_4.stopEvent(e);
								return;
							}
						}
						if (d && this._opened && e.charOrCode == _4.keys.ESCAPE) {
							this.closeDropDown();
							_4.stopEvent(e);
						} else {
							if (!this._opened && (e.charOrCode == _4.keys.DOWN_ARROW || ((e.charOrCode == _4.keys.ENTER || e.charOrCode == " ") && ((_7e9.tagName || "").toLowerCase() !== "input" || (_7e9.type && _7e9.type.toLowerCase() !== "text"))))) {
								this._toggleOnKeyUp = true;
								_4.stopEvent(e);
							}
						}
					},
					_onKeyUp: function () {
						if (this._toggleOnKeyUp) {
							delete this._toggleOnKeyUp;
							this.toggleDropDown();
							var d = this.dropDown;
							if (d && d.focus) {
								setTimeout(_4.hitch(d, "focus"), 1);
							}
						}
					},
					_onBlur: function () {
						var _7ea = _5._curFocus && this.dropDown && _4.isDescendant(_5._curFocus, this.dropDown.domNode);
						this.closeDropDown(_7ea);
						this.inherited(arguments);
					},
					isLoaded: function () {
						return true;
					},
					loadDropDown: function (_7eb) {
						_7eb();
					},
					toggleDropDown: function () {
						if (this.disabled || this.readOnly) {
							return;
						}
						if (!this._opened) {
							if (!this.isLoaded()) {
								this.loadDropDown(_4.hitch(this, "openDropDown"));
								return;
							} else {
								this.openDropDown();
							}
						} else {
							this.closeDropDown();
						}
					},
					openDropDown: function () {
						var _7ec = this.dropDown,
								_7ed = _7ec.domNode,
								_7ee = this._aroundNode || this.domNode,
								self = this;
						if (!this._preparedNode) {
							this._preparedNode = true;
							if (_7ed.style.width) {
								this._explicitDDWidth = true;
							}
							if (_7ed.style.height) {
								this._explicitDDHeight = true;
							}
						}
						if (this.maxHeight || this.forceWidth || this.autoWidth) {
							var _7ef = {
								display: "",
								visibility: "hidden"
							};
							if (!this._explicitDDWidth) {
								_7ef.width = "";
							}
							if (!this._explicitDDHeight) {
								_7ef.height = "";
							}
							_4.style(_7ed, _7ef);
							var _7f0 = this.maxHeight;
							if (_7f0 == -1) {
								var _7f1 = _4.window.getBox(),
										_7f2 = _4.position(_7ee, false);
								_7f0 = Math.floor(Math.max(_7f2.y, _7f1.h - (_7f2.y + _7f2.h)));
							}
							if (_7ec.startup && !_7ec._started) {
								_7ec.startup();
							}
							_5.popup.moveOffScreen(_7ec);
							var mb = _4._getMarginSize(_7ed);
							var _7f3 = (_7f0 && mb.h > _7f0);
							_4.style(_7ed, {
								overflowX: "hidden",
								overflowY: _7f3 ? "auto" : "hidden"
							});
							if (_7f3) {
								mb.h = _7f0;
								if ("w" in mb) {
									mb.w += 16;
								}
							} else {
								delete mb.h;
							}
							if (this.forceWidth) {
								mb.w = _7ee.offsetWidth;
							} else {
								if (this.autoWidth) {
									mb.w = Math.max(mb.w, _7ee.offsetWidth);
								} else {
									delete mb.w;
								}
							}
							if (_4.isFunction(_7ec.resize)) {
								_7ec.resize(mb);
							} else {
								_4.marginBox(_7ed, mb);
							}
						}
						var _7f4 = _5.popup.open({
							parent: this,
							popup: _7ec,
							around: _7ee,
							orient: _5.getPopupAroundAlignment((this.dropDownPosition && this.dropDownPosition.length) ? this.dropDownPosition : ["below"], this.isLeftToRight()),
							onExecute: function () {
								self.closeDropDown(true);
							},
							onCancel: function () {
								self.closeDropDown(true);
							},
							onClose: function () {
								_4.attr(self._popupStateNode, "popupActive", false);
								_4.removeClass(self._popupStateNode, "dijitHasDropDownOpen");
								self._opened = false;
							}
						});
						_4.attr(this._popupStateNode, "popupActive", "true");
						_4.addClass(self._popupStateNode, "dijitHasDropDownOpen");
						this._opened = true;
						return _7f4;
					},
					closeDropDown: function (_7f5) {
						if (this._opened) {
							if (_7f5) {
								this.focus();
							}
							_5.popup.close(this.dropDown);
							this._opened = false;
						}
					}
				});
			}
			if (!_4._hasResource["dijit.form.Button"]) {
				_4._hasResource["dijit.form.Button"] = true;
				_4.provide("dijit.form.Button");
				_4.declare("dijit.form.Button", _5.form._FormWidget, {
					label: "",
					showLabel: true,
					iconClass: "",
					type: "button",
					baseClass: "dijitButton",
					templateString: _4.cache("dijit.form", "templates/Button.html", "<span class=\"dijit dijitReset dijitInline\"\n\t><span class=\"dijitReset dijitInline dijitButtonNode\"\n\t\tdojoAttachEvent=\"ondijitclick:_onButtonClick\"\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\n\t\t\tdojoAttachPoint=\"titleNode,focusNode\"\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\" dojoAttachPoint=\"iconNode\"></span\n\t\t\t><span class=\"dijitReset dijitToggleButtonIconChar\">&#x25CF;</span\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\n\t\t\t\tid=\"${id}_label\"\n\t\t\t\tdojoAttachPoint=\"containerNode\"\n\t\t\t></span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\n\t\tdojoAttachPoint=\"valueNode\"\n/></span>\n"),
					attributeMap: _4.delegate(_5.form._FormWidget.prototype.attributeMap, {
						value: "valueNode"
					}),
					_onClick: function (e) {
						if (this.disabled) {
							return false;
						}
						this._clicked();
						return this.onClick(e);
					},
					_onButtonClick: function (e) {
						if (this._onClick(e) === false) {
							e.preventDefault();
						} else {
							if (this.type == "submit" && !(this.valueNode || this.focusNode).form) {
								for (var node = this.domNode; node.parentNode; node = node.parentNode) {
									var _7f6 = _5.byNode(node);
									if (_7f6 && typeof _7f6._onSubmit == "function") {
										_7f6._onSubmit(e);
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
					},
					buildRendering: function () {
						this.inherited(arguments);
						_4.setSelectable(this.focusNode, false);
					},
					_fillContent: function (_7f7) {
						if (_7f7 && (!this.params || !("label" in this.params))) {
							this.set("label", _7f7.innerHTML);
						}
					},
					_setShowLabelAttr: function (val) {
						if (this.containerNode) {
							_4.toggleClass(this.containerNode, "dijitDisplayNone", !val);
						}
						this._set("showLabel", val);
					},
					onClick: function (e) {
						return true;
					},
					_clicked: function (e) {
					},
					setLabel: function (_7f8) {
						_4.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
						this.set("label", _7f8);
					},
					_setLabelAttr: function (_7f9) {
						this._set("label", _7f9);
						this.containerNode.innerHTML = _7f9;
						if (this.showLabel == false && !this.params.title) {
							this.titleNode.title = _4.trim(this.containerNode.innerText || this.containerNode.textContent || "");
						}
					},
					_setIconClassAttr: function (val) {
						var _7fa = this.iconClass || "dijitNoIcon",
								_7fb = val || "dijitNoIcon";
						_4.replaceClass(this.iconNode, _7fb, _7fa);
						this._set("iconClass", val);
					}
				});
				_4.declare("dijit.form.DropDownButton", [_5.form.Button, _5._Container, _5._HasDropDown], {
					baseClass: "dijitDropDownButton",
					templateString: _4.cache("dijit.form", "templates/DropDownButton.html", "<span class=\"dijit dijitReset dijitInline\"\n\t><span class='dijitReset dijitInline dijitButtonNode'\n\t\tdojoAttachEvent=\"ondijitclick:_onButtonClick\" dojoAttachPoint=\"_buttonNode\"\n\t\t><span class=\"dijitReset dijitStretch dijitButtonContents\"\n\t\t\tdojoAttachPoint=\"focusNode,titleNode,_arrowWrapperNode\"\n\t\t\trole=\"button\" aria-haspopup=\"true\" aria-labelledby=\"${id}_label\"\n\t\t\t><span class=\"dijitReset dijitInline dijitIcon\"\n\t\t\t\tdojoAttachPoint=\"iconNode\"\n\t\t\t></span\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"\n\t\t\t\tdojoAttachPoint=\"containerNode,_popupStateNode\"\n\t\t\t\tid=\"${id}_label\"\n\t\t\t></span\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonInner\"></span\n\t\t\t><span class=\"dijitReset dijitInline dijitArrowButtonChar\">&#9660;</span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" class=\"dijitOffScreen\" tabIndex=\"-1\"\n\t\tdojoAttachPoint=\"valueNode\"\n/></span>\n"),
					_fillContent: function () {
						if (this.srcNodeRef) {
							var _7fc = _4.query("*", this.srcNodeRef);
							_5.form.DropDownButton.superclass._fillContent.call(this, _7fc[0]);
							this.dropDownContainer = this.srcNodeRef;
						}
					},
					startup: function () {
						if (this._started) {
							return;
						}
						if (!this.dropDown && this.dropDownContainer) {
							var _7fd = _4.query("[widgetId]", this.dropDownContainer)[0];
							this.dropDown = _5.byNode(_7fd);
							delete this.dropDownContainer;
						}
						if (this.dropDown) {
							_5.popup.hide(this.dropDown);
						}
						this.inherited(arguments);
					},
					isLoaded: function () {
						var _7fe = this.dropDown;
						return ( !!_7fe && (!_7fe.href || _7fe.isLoaded));
					},
					loadDropDown: function () {
						var _7ff = this.dropDown;
						if (!_7ff) {
							return;
						}
						if (!this.isLoaded()) {
							var _800 = _4.connect(_7ff, "onLoad", this, function () {
								_4.disconnect(_800);
								this.openDropDown();
							});
							_7ff.refresh();
						} else {
							this.openDropDown();
						}
					},
					isFocusable: function () {
						return this.inherited(arguments) && !this._mouseDown;
					}
				});
				_4.declare("dijit.form.ComboButton", _5.form.DropDownButton, {
					templateString: _4.cache("dijit.form", "templates/ComboButton.html", "<table class=\"dijit dijitReset dijitInline dijitLeft\"\n\tcellspacing='0' cellpadding='0' role=\"presentation\"\n\t><tbody role=\"presentation\"><tr role=\"presentation\"\n\t\t><td class=\"dijitReset dijitStretch dijitButtonNode\" dojoAttachPoint=\"buttonNode\" dojoAttachEvent=\"ondijitclick:_onButtonClick,onkeypress:_onButtonKeyPress\"\n\t\t><div id=\"${id}_button\" class=\"dijitReset dijitButtonContents\"\n\t\t\tdojoAttachPoint=\"titleNode\"\n\t\t\trole=\"button\" aria-labelledby=\"${id}_label\"\n\t\t\t><div class=\"dijitReset dijitInline dijitIcon\" dojoAttachPoint=\"iconNode\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitInline dijitButtonText\" id=\"${id}_label\" dojoAttachPoint=\"containerNode\" role=\"presentation\"></div\n\t\t></div\n\t\t></td\n\t\t><td id=\"${id}_arrow\" class='dijitReset dijitRight dijitButtonNode dijitArrowButton'\n\t\t\tdojoAttachPoint=\"_popupStateNode,focusNode,_buttonNode\"\n\t\t\tdojoAttachEvent=\"onkeypress:_onArrowKeyPress\"\n\t\t\ttitle=\"${optionsTitle}\"\n\t\t\trole=\"button\" aria-haspopup=\"true\"\n\t\t\t><div class=\"dijitReset dijitArrowButtonInner\" role=\"presentation\"></div\n\t\t\t><div class=\"dijitReset dijitArrowButtonChar\" role=\"presentation\">&#9660;</div\n\t\t></td\n\t\t><td style=\"display:none !important;\"\n\t\t\t><input ${!nameAttrSetting} type=\"${type}\" value=\"${value}\" dojoAttachPoint=\"valueNode\"\n\t\t/></td></tr></tbody\n></table>\n"),
					attributeMap: _4.mixin(_4.clone(_5.form.Button.prototype.attributeMap), {
						id: "",
						tabIndex: ["focusNode", "titleNode"],
						title: "titleNode"
					}),
					optionsTitle: "",
					baseClass: "dijitComboButton",
					cssStateNodes: {
						"buttonNode": "dijitButtonNode",
						"titleNode": "dijitButtonContents",
						"_popupStateNode": "dijitDownArrowButton"
					},
					_focusedNode: null,
					_onButtonKeyPress: function (evt) {
						if (evt.charOrCode == _4.keys[this.isLeftToRight() ? "RIGHT_ARROW" : "LEFT_ARROW"]) {
							_5.focus(this._popupStateNode);
							_4.stopEvent(evt);
						}
					},
					_onArrowKeyPress: function (evt) {
						if (evt.charOrCode == _4.keys[this.isLeftToRight() ? "LEFT_ARROW" : "RIGHT_ARROW"]) {
							_5.focus(this.titleNode);
							_4.stopEvent(evt);
						}
					},
					focus: function (_801) {
						if (!this.disabled) {
							_5.focus(_801 == "start" ? this.titleNode : this._popupStateNode);
						}
					}
				});
				_4.declare("dijit.form.ToggleButton", _5.form.Button, {
					baseClass: "dijitToggleButton",
					checked: false,
					attributeMap: _4.mixin(_4.clone(_5.form.Button.prototype.attributeMap), {
						checked: "focusNode"
					}),
					_clicked: function (evt) {
						this.set("checked", !this.checked);
					},
					_setCheckedAttr: function (_802, _803) {
						this._set("checked", _802);
						_4.attr(this.focusNode || this.domNode, "checked", _802);
						_5.setWaiState(this.focusNode || this.domNode, "pressed", _802);
						this._handleOnChange(_802, _803);
					},
					setChecked: function (_804) {
						_4.deprecated("setChecked(" + _804 + ") is deprecated. Use set('checked'," + _804 + ") instead.", "", "2.0");
						this.set("checked", _804);
					},
					reset: function () {
						this._hasBeenBlurred = false;
						this.set("checked", this.params.checked || false);
					}
				});
			}
			if (!_4._hasResource["dijit.form.DropDownButton"]) {
				_4._hasResource["dijit.form.DropDownButton"] = true;
				_4.provide("dijit.form.DropDownButton");
			}
			if (!_4._hasResource["dijit._KeyNavContainer"]) {
				_4._hasResource["dijit._KeyNavContainer"] = true;
				_4.provide("dijit._KeyNavContainer");
				_4.declare("dijit._KeyNavContainer", _5._Container, {
					tabIndex: "0",
					_keyNavCodes: {},
					connectKeyNavHandlers: function (_805, _806) {
						var _807 = (this._keyNavCodes = {});
						var prev = _4.hitch(this, this.focusPrev);
						var next = _4.hitch(this, this.focusNext);
						_4.forEach(_805, function (code) {
							_807[code] = prev;
						});
						_4.forEach(_806, function (code) {
							_807[code] = next;
						});
						_807[_4.keys.HOME] = _4.hitch(this, "focusFirstChild");
						_807[_4.keys.END] = _4.hitch(this, "focusLastChild");
						this.connect(this.domNode, "onkeypress", "_onContainerKeypress");
						this.connect(this.domNode, "onfocus", "_onContainerFocus");
					},
					startupKeyNavChildren: function () {
						_4.forEach(this.getChildren(), _4.hitch(this, "_startupChild"));
					},
					addChild: function (_808, _809) {
						_5._KeyNavContainer.superclass.addChild.apply(this, arguments);
						this._startupChild(_808);
					},
					focus: function () {
						this.focusFirstChild();
					},
					focusFirstChild: function () {
						var _80a = this._getFirstFocusableChild();
						if (_80a) {
							this.focusChild(_80a);
						}
					},
					focusLastChild: function () {
						var _80b = this._getLastFocusableChild();
						if (_80b) {
							this.focusChild(_80b);
						}
					},
					focusNext: function () {
						var _80c = this._getNextFocusableChild(this.focusedChild, 1);
						this.focusChild(_80c);
					},
					focusPrev: function () {
						var _80d = this._getNextFocusableChild(this.focusedChild, -1);
						this.focusChild(_80d, true);
					},
					focusChild: function (_80e, last) {
						if (this.focusedChild && _80e !== this.focusedChild) {
							this._onChildBlur(this.focusedChild);
						}
						_80e.set("tabIndex", this.tabIndex);
						_80e.focus(last ? "end" : "start");
						this._set("focusedChild", _80e);
					},
					_startupChild: function (_80f) {
						_80f.set("tabIndex", "-1");
						this.connect(_80f, "_onFocus", function () {
							_80f.set("tabIndex", this.tabIndex);
						});
						this.connect(_80f, "_onBlur", function () {
							_80f.set("tabIndex", "-1");
						});
					},
					_onContainerFocus: function (evt) {
						if (evt.target !== this.domNode) {
							return;
						}
						this.focusFirstChild();
						_4.attr(this.domNode, "tabIndex", "-1");
					},
					_onBlur: function (evt) {
						if (this.tabIndex) {
							_4.attr(this.domNode, "tabIndex", this.tabIndex);
						}
						this.inherited(arguments);
					},
					_onContainerKeypress: function (evt) {
						if (evt.ctrlKey || evt.altKey) {
							return;
						}
						var func = this._keyNavCodes[evt.charOrCode];
						if (func) {
							func();
							_4.stopEvent(evt);
						}
					},
					_onChildBlur: function (_810) {
					},
					_getFirstFocusableChild: function () {
						return this._getNextFocusableChild(null, 1);
					},
					_getLastFocusableChild: function () {
						return this._getNextFocusableChild(null, -1);
					},
					_getNextFocusableChild: function (_811, dir) {
						if (_811) {
							_811 = this._getSiblingOfChild(_811, dir);
						}
						var _812 = this.getChildren();
						for (var i = 0; i < _812.length; i++) {
							if (!_811) {
								_811 = _812[(dir > 0) ? 0 : (_812.length - 1)];
							}
							if (_811.isFocusable()) {
								return _811;
							}
							_811 = this._getSiblingOfChild(_811, dir);
						}
						return null;
					}
				});
			}
			if (!_4._hasResource["dijit.MenuItem"]) {
				_4._hasResource["dijit.MenuItem"] = true;
				_4.provide("dijit.MenuItem");
				_4.declare("dijit.MenuItem", [_5._Widget, _5._Templated, _5._Contained, _5._CssStateMixin], {
					templateString: _4.cache("dijit", "templates/MenuItem.html", "<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" role=\"menuitem\" tabIndex=\"-1\"\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitIcon dijitMenuItemIcon\" dojoAttachPoint=\"iconNode\"/>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">\n\t\t<div dojoAttachPoint=\"arrowWrapper\" style=\"visibility: hidden\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuExpand\"/>\n\t\t\t<span class=\"dijitMenuExpandA11y\">+</span>\n\t\t</div>\n\t</td>\n</tr>\n"),
					attributeMap: _4.delegate(_5._Widget.prototype.attributeMap, {
						label: {
							node: "containerNode",
							type: "innerHTML"
						},
						iconClass: {
							node: "iconNode",
							type: "class"
						}
					}),
					baseClass: "dijitMenuItem",
					label: "",
					iconClass: "",
					accelKey: "",
					disabled: false,
					_fillContent: function (_813) {
						if (_813 && !("label" in this.params)) {
							this.set("label", _813.innerHTML);
						}
					},
					buildRendering: function () {
						this.inherited(arguments);
						var _814 = this.id + "_text";
						_4.attr(this.containerNode, "id", _814);
						if (this.accelKeyNode) {
							_4.attr(this.accelKeyNode, "id", this.id + "_accel");
							_814 += " " + this.id + "_accel";
						}
						_5.setWaiState(this.domNode, "labelledby", _814);
						_4.setSelectable(this.domNode, false);
					},
					_onHover: function () {
						this.getParent().onItemHover(this);
					},
					_onUnhover: function () {
						this.getParent().onItemUnhover(this);
						this._set("hovering", false);
					},
					_onClick: function (evt) {
						this.getParent().onItemClick(this, evt);
						_4.stopEvent(evt);
					},
					onClick: function (evt) {
					},
					focus: function () {
						try {
							if (_4.isIE == 8) {
								this.containerNode.focus();
							}
							_5.focus(this.focusNode);
						} catch (e) {
						}
					},
					_onFocus: function () {
						this._setSelected(true);
						this.getParent()._onItemFocus(this);
						this.inherited(arguments);
					},
					_setSelected: function (_815) {
						_4.toggleClass(this.domNode, "dijitMenuItemSelected", _815);
					},
					setLabel: function (_816) {
						_4.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
						this.set("label", _816);
					},
					setDisabled: function (_817) {
						_4.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
						this.set("disabled", _817);
					},
					_setDisabledAttr: function (_818) {
						_5.setWaiState(this.focusNode, "disabled", _818 ? "true" : "false");
						this._set("disabled", _818);
					},
					_setAccelKeyAttr: function (_819) {
						this.accelKeyNode.style.display = _819 ? "" : "none";
						this.accelKeyNode.innerHTML = _819;
						_4.attr(this.containerNode, "colSpan", _819 ? "1" : "2");
						this._set("accelKey", _819);
					}
				});
			}
			if (!_4._hasResource["dijit.PopupMenuItem"]) {
				_4._hasResource["dijit.PopupMenuItem"] = true;
				_4.provide("dijit.PopupMenuItem");
				_4.declare("dijit.PopupMenuItem", _5.MenuItem, {
					_fillContent: function () {
						if (this.srcNodeRef) {
							var _81a = _4.query("*", this.srcNodeRef);
							_5.PopupMenuItem.superclass._fillContent.call(this, _81a[0]);
							this.dropDownContainer = this.srcNodeRef;
						}
					},
					startup: function () {
						if (this._started) {
							return;
						}
						this.inherited(arguments);
						if (!this.popup) {
							var node = _4.query("[widgetId]", this.dropDownContainer)[0];
							this.popup = _5.byNode(node);
						}
						_4.body().appendChild(this.popup.domNode);
						this.popup.startup();
						this.popup.domNode.style.display = "none";
						if (this.arrowWrapper) {
							_4.style(this.arrowWrapper, "visibility", "");
						}
						_5.setWaiState(this.focusNode, "haspopup", "true");
					},
					destroyDescendants: function () {
						if (this.popup) {
							if (!this.popup._destroyed) {
								this.popup.destroyRecursive();
							}
							delete this.popup;
						}
						this.inherited(arguments);
					}
				});
			}
			if (!_4._hasResource["dijit.CheckedMenuItem"]) {
				_4._hasResource["dijit.CheckedMenuItem"] = true;
				_4.provide("dijit.CheckedMenuItem");
				_4.declare("dijit.CheckedMenuItem", _5.MenuItem, {
					templateString: _4.cache("dijit", "templates/CheckedMenuItem.html", "<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" role=\"menuitemcheckbox\" tabIndex=\"-1\"\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon dijitCheckedMenuItemIcon\" dojoAttachPoint=\"iconNode\"/>\n\t\t<span class=\"dijitCheckedMenuItemIconChar\">&#10003;</span>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode,labelNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">&nbsp;</td>\n</tr>\n"),
					checked: false,
					_setCheckedAttr: function (_81b) {
						_4.toggleClass(this.domNode, "dijitCheckedMenuItemChecked", _81b);
						_5.setWaiState(this.domNode, "checked", _81b);
						this._set("checked", _81b);
					},
					onChange: function (_81c) {
					},
					_onClick: function (e) {
						if (!this.disabled) {
							this.set("checked", !this.checked);
							this.onChange(this.checked);
						}
						this.inherited(arguments);
					}
				});
			}
			if (!_4._hasResource["dijit.MenuSeparator"]) {
				_4._hasResource["dijit.MenuSeparator"] = true;
				_4.provide("dijit.MenuSeparator");
				_4.declare("dijit.MenuSeparator", [_5._Widget, _5._Templated, _5._Contained], {
					templateString: _4.cache("dijit", "templates/MenuSeparator.html", "<tr class=\"dijitMenuSeparator\">\n\t<td class=\"dijitMenuSeparatorIconCell\">\n\t\t<div class=\"dijitMenuSeparatorTop\"></div>\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\n\t</td>\n\t<td colspan=\"3\" class=\"dijitMenuSeparatorLabelCell\">\n\t\t<div class=\"dijitMenuSeparatorTop dijitMenuSeparatorLabel\"></div>\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\n\t</td>\n</tr>\n"),
					buildRendering: function () {
						this.inherited(arguments);
						_4.setSelectable(this.domNode, false);
					},
					isFocusable: function () {
						return false;
					}
				});
			}
			if (!_4._hasResource["dijit.Menu"]) {
				_4._hasResource["dijit.Menu"] = true;
				_4.provide("dijit.Menu");
				_4.declare("dijit._MenuBase", [_5._Widget, _5._Templated, _5._KeyNavContainer], {
					parentMenu: null,
					popupDelay: 500,
					startup: function () {
						if (this._started) {
							return;
						}
						_4.forEach(this.getChildren(), function (_81d) {
							_81d.startup();
						});
						this.startupKeyNavChildren();
						this.inherited(arguments);
					},
					onExecute: function () {
					},
					onCancel: function (_81e) {
					},
					_moveToPopup: function (evt) {
						if (this.focusedChild && this.focusedChild.popup && !this.focusedChild.disabled) {
							this.focusedChild._onClick(evt);
						} else {
							var _81f = this._getTopMenu();
							if (_81f && _81f._isMenuBar) {
								_81f.focusNext();
							}
						}
					},
					_onPopupHover: function (evt) {
						if (this.currentPopup && this.currentPopup._pendingClose_timer) {
							var _820 = this.currentPopup.parentMenu;
							if (_820.focusedChild) {
								_820.focusedChild._setSelected(false);
							}
							_820.focusedChild = this.currentPopup.from_item;
							_820.focusedChild._setSelected(true);
							this._stopPendingCloseTimer(this.currentPopup);
						}
					},
					onItemHover: function (item) {
						if (this.isActive) {
							this.focusChild(item);
							if (this.focusedChild.popup && !this.focusedChild.disabled && !this.hover_timer) {
								this.hover_timer = setTimeout(_4.hitch(this, "_openPopup"), this.popupDelay);
							}
						}
						if (this.focusedChild) {
							this.focusChild(item);
						}
						this._hoveredChild = item;
					},
					_onChildBlur: function (item) {
						this._stopPopupTimer();
						item._setSelected(false);
						var _821 = item.popup;
						if (_821) {
							this._stopPendingCloseTimer(_821);
							_821._pendingClose_timer = setTimeout(function () {
								_821._pendingClose_timer = null;
								if (_821.parentMenu) {
									_821.parentMenu.currentPopup = null;
								}
								_5.popup.close(_821);
							}, this.popupDelay);
						}
					},
					onItemUnhover: function (item) {
						if (this.isActive) {
							this._stopPopupTimer();
						}
						if (this._hoveredChild == item) {
							this._hoveredChild = null;
						}
					},
					_stopPopupTimer: function () {
						if (this.hover_timer) {
							clearTimeout(this.hover_timer);
							this.hover_timer = null;
						}
					},
					_stopPendingCloseTimer: function (_822) {
						if (_822._pendingClose_timer) {
							clearTimeout(_822._pendingClose_timer);
							_822._pendingClose_timer = null;
						}
					},
					_stopFocusTimer: function () {
						if (this._focus_timer) {
							clearTimeout(this._focus_timer);
							this._focus_timer = null;
						}
					},
					_getTopMenu: function () {
						for (var top = this; top.parentMenu; top = top.parentMenu) {
						}
						return top;
					},
					onItemClick: function (item, evt) {
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
					},
					_openPopup: function () {
						this._stopPopupTimer();
						var _823 = this.focusedChild;
						if (!_823) {
							return;
						}
						var _824 = _823.popup;
						if (_824.isShowingNow) {
							return;
						}
						if (this.currentPopup) {
							this._stopPendingCloseTimer(this.currentPopup);
							_5.popup.close(this.currentPopup);
						}
						_824.parentMenu = this;
						_824.from_item = _823;
						var self = this;
						_5.popup.open({
							parent: this,
							popup: _824,
							around: _823.domNode,
							orient: this._orient || (this.isLeftToRight() ? {
								"TR": "TL",
								"TL": "TR",
								"BR": "BL",
								"BL": "BR"
							} : {
								"TL": "TR",
								"TR": "TL",
								"BL": "BR",
								"BR": "BL"
							}),
							onCancel: function () {
								self.focusChild(_823);
								self._cleanUp();
								_823._setSelected(true);
								self.focusedChild = _823;
							},
							onExecute: _4.hitch(this, "_cleanUp")
						});
						this.currentPopup = _824;
						_824.connect(_824.domNode, "onmouseenter", _4.hitch(self, "_onPopupHover"));
						if (_824.focus) {
							_824._focus_timer = setTimeout(_4.hitch(_824, function () {
								this._focus_timer = null;
								this.focus();
							}), 0);
						}
					},
					_markActive: function () {
						this.isActive = true;
						_4.replaceClass(this.domNode, "dijitMenuActive", "dijitMenuPassive");
					},
					onOpen: function (e) {
						this.isShowingNow = true;
						this._markActive();
					},
					_markInactive: function () {
						this.isActive = false;
						_4.replaceClass(this.domNode, "dijitMenuPassive", "dijitMenuActive");
					},
					onClose: function () {
						this._stopFocusTimer();
						this._markInactive();
						this.isShowingNow = false;
						this.parentMenu = null;
					},
					_closeChild: function () {
						this._stopPopupTimer();
						var _825 = this.focusedChild && this.focusedChild.from_item;
						if (this.currentPopup) {
							if (_5._curFocus && _4.isDescendant(_5._curFocus, this.currentPopup.domNode)) {
								this.focusedChild.focusNode.focus();
							}
							_5.popup.close(this.currentPopup);
							this.currentPopup = null;
						}
						if (this.focusedChild) {
							this.focusedChild._setSelected(false);
							this.focusedChild._onUnhover();
							this.focusedChild = null;
						}
					},
					_onItemFocus: function (item) {
						if (this._hoveredChild && this._hoveredChild != item) {
							this._hoveredChild._onUnhover();
						}
					},
					_onBlur: function () {
						this._cleanUp();
						this.inherited(arguments);
					},
					_cleanUp: function () {
						this._closeChild();
						if (typeof this.isShowingNow == "undefined") {
							this._markInactive();
						}
					}
				});
				_4.declare("dijit.Menu", _5._MenuBase, {
					constructor: function () {
						this._bindings = [];
					},
					templateString: _4.cache("dijit", "templates/Menu.html", "<table class=\"dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable\" role=\"menu\" tabIndex=\"${tabIndex}\" dojoAttachEvent=\"onkeypress:_onKeyPress\" cellspacing=\"0\">\n\t<tbody class=\"dijitReset\" dojoAttachPoint=\"containerNode\"></tbody>\n</table>\n"),
					baseClass: "dijitMenu",
					targetNodeIds: [],
					contextMenuForWindow: false,
					leftClickToOpen: false,
					refocus: true,
					postCreate: function () {
						if (this.contextMenuForWindow) {
							this.bindDomNode(_4.body());
						} else {
							_4.forEach(this.targetNodeIds, this.bindDomNode, this);
						}
						var k = _4.keys,
								l = this.isLeftToRight();
						this._openSubMenuKey = l ? k.RIGHT_ARROW : k.LEFT_ARROW;
						this._closeSubMenuKey = l ? k.LEFT_ARROW : k.RIGHT_ARROW;
						this.connectKeyNavHandlers([k.UP_ARROW], [k.DOWN_ARROW]);
					},
					_onKeyPress: function (evt) {
						if (evt.ctrlKey || evt.altKey) {
							return;
						}
						switch (evt.charOrCode) {
							case this._openSubMenuKey:
								this._moveToPopup(evt);
								_4.stopEvent(evt);
								break;
							case this._closeSubMenuKey:
								if (this.parentMenu) {
									if (this.parentMenu._isMenuBar) {
										this.parentMenu.focusPrev();
									} else {
										this.onCancel(false);
									}
								} else {
									_4.stopEvent(evt);
								}
								break;
						}
					},
					_iframeContentWindow: function (_826) {
						var win = _4.window.get(this._iframeContentDocument(_826)) || this._iframeContentDocument(_826)["__parent__"] || (_826.name && _4.doc.frames[_826.name]) || null;
						return win;
					},
					_iframeContentDocument: function (_827) {
						var doc = _827.contentDocument || (_827.contentWindow && _827.contentWindow.document) || (_827.name && _4.doc.frames[_827.name] && _4.doc.frames[_827.name].document) || null;
						return doc;
					},
					bindDomNode: function (node) {
						node = _4.byId(node);
						var cn;
						if (node.tagName.toLowerCase() == "iframe") {
							var _828 = node,
									win = this._iframeContentWindow(_828);
							cn = _4.withGlobal(win, _4.body);
						} else {
							cn = (node == _4.body() ? _4.doc.documentElement : node);
						}
						var _829 = {
							node: node,
							iframe: _828
						};
						_4.attr(node, "_dijitMenu" + this.id, this._bindings.push(_829));
						var _82a = _4.hitch(this, function (cn) {
							return [_4.connect(cn, this.leftClickToOpen ? "onclick" : "oncontextmenu", this, function (evt) {
								_4.stopEvent(evt);
								this._scheduleOpen(evt.target, _828, {
									x: evt.pageX,
									y: evt.pageY
								});
							}), _4.connect(cn, "onkeydown", this, function (evt) {
								if (evt.shiftKey && evt.keyCode == _4.keys.F10) {
									_4.stopEvent(evt);
									this._scheduleOpen(evt.target, _828);
								}
							})];
						});
						_829.connects = cn ? _82a(cn) : [];
						if (_828) {
							_829.onloadHandler = _4.hitch(this, function () {
								var win = this._iframeContentWindow(_828);
								cn = _4.withGlobal(win, _4.body);
								_829.connects = _82a(cn);
							});
							if (_828.addEventListener) {
								_828.addEventListener("load", _829.onloadHandler, false);
							} else {
								_828.attachEvent("onload", _829.onloadHandler);
							}
						}
					},
					unBindDomNode: function (_82b) {
						var node;
						try {
							node = _4.byId(_82b);
						} catch (e) {
							return;
						}
						var _82c = "_dijitMenu" + this.id;
						if (node && _4.hasAttr(node, _82c)) {
							var bid = _4.attr(node, _82c) - 1,
									b = this._bindings[bid];
							_4.forEach(b.connects, _4.disconnect);
							var _82d = b.iframe;
							if (_82d) {
								if (_82d.removeEventListener) {
									_82d.removeEventListener("load", b.onloadHandler, false);
								} else {
									_82d.detachEvent("onload", b.onloadHandler);
								}
							}
							_4.removeAttr(node, _82c);
							delete this._bindings[bid];
						}
					},
					_scheduleOpen: function (_82e, _82f, _830) {
						if (!this._openTimer) {
							this._openTimer = setTimeout(_4.hitch(this, function () {
								delete this._openTimer;
								this._openMyself({
									target: _82e,
									iframe: _82f,
									coords: _830
								});
							}), 1);
						}
					},
					_openMyself: function (args) {
						var _831 = args.target,
								_832 = args.iframe,
								_833 = args.coords;
						if (_833) {
							if (_832) {
								var od = _831.ownerDocument,
										ifc = _4.position(_832, true),
										win = this._iframeContentWindow(_832),
										_834 = _4.withGlobal(win, "_docScroll", _4);
								var cs = _4.getComputedStyle(_832),
										tp = _4._toPixelValue,
										left = (_4.isIE && _4.isQuirks ? 0 : tp(_832, cs.paddingLeft)) + (_4.isIE && _4.isQuirks ? tp(_832, cs.borderLeftWidth) : 0),
										top = (_4.isIE && _4.isQuirks ? 0 : tp(_832, cs.paddingTop)) + (_4.isIE && _4.isQuirks ? tp(_832, cs.borderTopWidth) : 0);
								_833.x += ifc.x + left - _834.x;
								_833.y += ifc.y + top - _834.y;
							}
						} else {
							_833 = _4.position(_831, true);
							_833.x += 10;
							_833.y += 10;
						}
						var self = this;
						var _835 = _5.getFocus(this);

						function _836() {
							if (self.refocus) {
								_5.focus(_835);
							}
							_5.popup.close(self);
						};
						_5.popup.open({
							popup: this,
							x: _833.x,
							y: _833.y,
							onExecute: _836,
							onCancel: _836,
							orient: this.isLeftToRight() ? "L" : "R"
						});
						this.focus();
						this._onBlur = function () {
							this.inherited("_onBlur", arguments);
							_5.popup.close(this);
						};
					},
					uninitialize: function () {
						_4.forEach(this._bindings, function (b) {
							if (b) {
								this.unBindDomNode(b.node);
							}
						}, this);
						this.inherited(arguments);
					}
				});
			}
			if (!_4._hasResource["pundit.MyPundit"]) {
				_4._hasResource["pundit.MyPundit"] = true;
				_4.provide("pundit.MyPundit");
				_4.declare("pundit.MyPundit", pundit.BaseComponent, {
					opts: {
						loginServer: ""
					},
					constructor: function (_837) {
						var self = this,
								my = "<span class=\"pundit-gui-button\" id=\"pundit-mypundit-login-button\">Log in</span>" + "<span class=\"pundit-gui-button\" id=\"pundit-mypundit-loggedin-button\"></span>" + "<span class=\"pundit-gui-button\" id=\"pundit-mypundit-this-page-button\">Annotations<span class=\"pundit-icon-page\"></span></span>" + "<span class=\"pundit-gui-button\" id=\"pundit-mypundit-myitems-button\">My Items<span id=\"pundit-new-myitems\">(+1)</span><span class=\"pundit-icon-favorite\"></span></span>";
						_4.query("#pundit-gui-topbar").append(my);
						self.store = new pundit.RemoteStorageHandler({
							debug: self.opts.debug
						});
						self.initBehaviors();
						self.logged = false;
						self.user = {};
						requester.checkLogin(function (data) {
							self.setLogged(data.loginStatus == 1, data);
							self.opts.loginServer = data.loginServer;
						});
						requester.onLogin(function (data) {
							self.setLogged(true, data);
						});
						self.log("MyPundit up and running");
					},
					getAnnotationVisibility: function (_838) {
						var self = this;
						if (typeof (self.annotationVisibility) === "undefined") {
							self.store.read("mode");
							self.store.onStoreRead(function (mode) {
								var _839 = mode.value;
								if (typeof (_839) === "undefined") {
									if (_PUNDIT.config.modules["pundit.NotebookManager"].defaultFilteringOption !== "undefined") {
										_839 = _PUNDIT.config.modules["pundit.NotebookManager"].defaultFilteringOption;
										self.setAnnotationVisibility(_839);
									}
								}
								self.annotationVisibility = _839;
								_838(self.annotationVisibility);
							});
						} else {
							_838(self.annotationVisibility);
						}
					},
					setAnnotationVisibility: function (_83a) {
						var self = this;
						self.annotationVisibility = _83a;
						self.store.save("mode", _83a);
						tooltip_viewer.refreshAnnotations();
					},
					setLogged: function (flag, data) {
						var self = this;
						if (flag) {
							var _83b = (data.fullName) ? data.fullName : "User: " + data.id;
							self.logged = true;
							_4.query("#pundit-mypundit-loggedin-button").html(_83b + "<span class='pundit-icon-loggedin'></span>");
							_4.query("#pundit-gui-topbar").addClass("pundit-logged-in pundit-loggedin").removeClass("pundit-logged-off");
							self.user = {
								email: data.email,
								firstName: data.firstName,
								lastName: data.lastName,
								id: data.id,
								uri: data.uri,
								openid: data.openid
							};
						} else {
							self.logged = false;
							self.user = {};
						}
					},
					initBehaviors: function () {
						var self = this;
						_4.connect(_4.byId("pundit-mypundit-loggedin-button"), "onclick", function (e) {
							var pos = _4.position(e.target).x - 20;
							self.getAnnotationVisibility(function (mode) {
								cMenu.show(pos, 20, "", "semlibUserMenu", "pundit-cm-bottom");
							});
						});
						_4.connect(_4.byId("pundit-mypundit-login-button"), "onclick", function (e) {
							if (!self.logged) {
								requester.showLoginForm(self.opts.loginServer);
								requester.openLoginPopUp();
							}
						});
						_4.connect(_4.byId("pundit-mypundit-this-page-button"), "onclick", function (e) {
							var pos = _4.position(e.target).x - 20;
							cMenu.show(pos, 20, "", "punditThisPageMenu", "pundit-cm-bottom");
						});
						cMenu.addAction({
							type: ["semlibUserMenu"],
							name: "semlibLogout",
							label: "Sign out",
							showIf: function (xp) {
								return true;
							},
							onclick: function (xp) {
								requester.logout(function (msg) {
									self.setLogged(false, msg);
								});
								_4.removeClass(_4.byId("pundit-gui-topbar"), "pundit-loggedin");
								return true;
							}
						});
						if (_PUNDIT.config.modules["pundit.NotebookManager"].active === true) {
							self.notebookManager = new pundit.NotebookManager({
								name: "NotebookManager",
								title: "Notebook Manager",
								drag: true,
								width: 500
							});
							cMenu.addAction({
								type: ["semlibUserMenu"],
								name: "punditManageNotebooks",
								label: "Manage Notebooks",
								showIf: function () {
									return true;
								},
								onclick: function () {
									self.notebookManager.show(150, 150, {
										title: "Notebook Manager"
									});
								}
							});
						}
						if (_PUNDIT.config.isModuleActive("pundit.NotebookManager") && _PUNDIT.config.modules["pundit.NotebookManager"].showFilteringOptions === true) {
							cMenu.addAction({
								type: ["semlibUserMenu"],
								name: "punditAnnotationsVisibilityShowAll",
								label: "View all notebooks",
								showIf: function () {
									return myPundit.annotationVisibility != "all";
								},
								onclick: function () {
									semlibWindow.closeAllPanels();
									self.setAnnotationVisibility("all");
									return true;
								}
							});
							cMenu.addAction({
								type: ["semlibUserMenu"],
								name: "punditAnnotationsVisibilityShowActive",
								label: "View active notebooks only",
								showIf: function () {
									return self.annotationVisibility != "active";
								},
								onclick: function () {
									semlibWindow.closeAllPanels();
									self.setAnnotationVisibility("active");
									return true;
								}
							});
						}
						cMenu.addAction({
							type: ["punditThisPageMenu"],
							name: "showAllAnnotations",
							label: "Show all annotations",
							showIf: function () {
								return !_PUNDIT.tooltipViewer.isRefreshingAnnotations;
							},
							onclick: function () {
								_PUNDIT.tooltipViewer.showAllAnnotations();
								return true;
							}
						});
						cMenu.addAction({
							type: ["punditThisPageMenu"],
							name: "refreshAnnotationsAndMyItems",
							label: "Refresh Annotations and My Items",
							showIf: function () {
								return !_PUNDIT.tooltipViewer.isRefreshingAnnotations;
							},
							onclick: function () {
								_PUNDIT.tooltipViewer.refreshAnnotations();
								semlibMyItems.loadMyItems();
								return true;
							}
						});
						cMenu.addAction({
							type: ["punditThisPageMenu"],
							name: "closeAllOpenedAnnotations",
							label: "Close all annotations",
							showIf: function () {
								return semlibWindow.isSomePanelOpen();
							},
							onclick: function () {
								semlibWindow.closeAllPanels();
								return true;
							}
						});
					}
				});
			}
			if (!_4._hasResource["pundit.ContextualMenu"]) {
				_4._hasResource["pundit.ContextualMenu"] = true;
				_4.provide("pundit.ContextualMenu");
				_4.declare("pundit.ContextualMenu", pundit.BaseComponent, {
					opts: {},
					constructor: function (_83c) {
						var self = this;
						self.initHTML();
						self.initBehaviors();
						self.currentURL = "";
						self.currentType = "";
						self.actions = {};
						self.hideTimer = null;
						self.customclass = "";
						self.log("Contextual menu up and running!");
					},
					initHTML: function () {
						var c;
						c = "<div id=\"pundit-cm\" class=\"pundit-base pundit-hidden\">";
						c += "</div>";
						_4.query("body").append(c);
					},
					initBehaviors: function () {
						var self = this;
						_4.connect(_4.byId("pundit-cm"), (!_4.isMozilla ? "onmousewheel" : "DOMMouseScroll"), function (e) {
							_4.stopEvent(e);
						});
						_4.connect(_4.query("body")[0], (!_4.isMozilla ? "onmousewheel" : "DOMMouseScroll"), function (e) {
							self.hide(e);
						});
					},
					addAction: function (_83d) {
						var self = this,
								ob = {}, _83e = "#pundit-cm span.pundit-cm-button." + _83d.name;
						for (var i = _83d.type.length; i--;) {
							var t = _83d.type[i];
							self.addTypeCallbacks(t);
							if (typeof (self.actions[t]) === "undefined") {
								self.actions[t] = {};
							}
							self.actions[t][_83d.name] = _83d;
							if (_4.query("#pundit-cm span.pundit-cm-button." + _83d.name).length === 0) {
								_4.query("#pundit-cm").append("<span class=\"pundit-cm-button pundit-gui-button " + _83d.name + "\">" + _83d.label + "</span>");
							}
							self.log("Added the action " + _83d.name + " for type " + t);
						}
						ob[_83e] = {
							"onclick": function (e) {
								self.menuItemMouseClickHandler(e, _83d.name);
							}
						};
						_4.behavior.add(ob);
						_4.behavior.apply();
					},
					show: function (x, y, url, type, _83f) {
						var self = this,
								_840 = self.actions[type] || {};
						for (var i in self.actions["__all"]) {
							_840[i] = self.actions["__all"][i];
						}
						self.currentURL = url;
						self.currentType = type;
						if (typeof self["fireOnTypeShow_" + type] !== "undefined") {
							self["fireOnTypeShow_" + type].call(self, url);
						} else {
							console.log("No action defined for menu" + type);
							return;
						}
						_4.query("#pundit-cm .pundit-cm-button").forEach(function (i) {
							_4.addClass(i, "pundit-hidden");
						});
						for (var ac in _840) {
							_4.query("#pundit-cm .pundit-cm-button." + ac).removeClass("pundit-hidden");
							if (typeof (_840[ac].showIf) === "function" && !_840[ac].showIf(url)) {
								_4.query("#pundit-cm .pundit-cm-button." + ac).addClass("pundit-hidden");
							}
						}
						if (_4.query("#pundit-cm .pundit-cm-button:not(.pundit-hidden)").length === 0) {
							self.log("ERROR: tried to open a contextual menu with no buttons? type: " + type + ", url: " + url);
							return;
						}
						var _841, _842, _83f = _83f || "pundit-cm-right";
						if (_83f === "pundit-cm-bottom") {
							_841 = 0;
							_842 = 15;
						} else {
							_841 = 25;
							_842 = -15;
						}
						_4.style("pundit-cm", "top", y + _842 + "px");
						_4.style("pundit-cm", "left", x + _841 + "px");
						_4.removeClass("pundit-cm", "pundit-hidden pundit-cm-bottom pundit-cm-right");
						_4.addClass("pundit-cm", _83f);
						self.log("Opened contextual menu for type " + type + ": " + url);
					},
					addTypeCallbacks: function (type) {
						var self = this,
								show = "TypeShow_" + type,
								hide = "TypeHide_" + type;
						if (typeof (self["on" + show]) !== "function") {
							self.createCallback([show, hide]);
						}
					},
					hide: function (e) {
						var self = this;
						if (!_4.hasClass("pundit-cm", "pundit-hidden")) {
							_4.addClass("pundit-cm", "pundit-hidden");
							self["fireOnTypeHide_" + self.currentType].call(self, self.currentURL, e);
						}
					},
					menuItemMouseClickHandler: function (e, _843) {
						var self = this,
								_844 = self.actions[self.currentType] || {};
						for (var i in self.actions["__all"]) {
							_844[i] = self.actions["__all"][i];
						}
						if (typeof (_844[_843]) !== "undefined") {
							self.log("Clicked on item " + _843 + " for type " + self.currentType);
							if (_844[_843].onclick(self.currentURL, e)) {
								self.hide(e);
							}
						}
					}
				});
			}
			if (!_4._hasResource["pundit.Previewer"]) {
				_4._hasResource["pundit.Previewer"] = true;
				_4.provide("pundit.Previewer");
				_4.declare("pundit.Previewer", pundit.BaseComponent, {
					constructor: function (_845) {
						var self = this;
						self.previewCache = {};
						self.currentSelectedItem = null;
						self.currentPreviewURI = null;
						self.log("Previewer up and running!");
					},
					setLoading: function (v, _846) {
						if (typeof (_846) === "undefined") {
							_846 = "#pundit-gui-preview";
						}
						var r = _4.query(_846),
								c = "pundit-panel-loading";
						return (v) ? r.addClass(c) : r.removeClass(c);
					},
					buildPreviewForItem: function (item) {
						var self = this,
								pr = "",
								b = new pundit.TriplesBucket({
									bucket: item.rdfData
								}),
								_847 = b.getObject(item.value, ns.items.label)[0] || item.label,
								_848 = b.getObject(item.value, ns.items.label)[0] || "",
								_849 = b.getObject(item.value, ns.items.image)[0] || "",
								_84a = b.getObject(item.value, ns.items.selector)[0] || "",
								_84b = b.getObject(item.value, ns.items.altLabel).join(", ") || "",
								_84c = b.getObject(item.value, ns.items.description)[0] || "No description available",
								_84d = b.getObject(item.value, ns.items.type) || [];
						pr += "<div class='pundit-preview-main-info'>";
						pr += "<h4>Preview </h4>";
						pr += "<h2>" + _847 + "</h2>";
						if ((_84d[0] === ns.fragments.image || _84d[0] === ns.image)) {
							pr += "<div id='pundit-preview-image-container' style='display:inline-block;position:relative'><img src='" + _849 + "' class='pundit-image-preview-large'></img></div>";
						}
						pr += "<p>";
						if (_849 !== "") {
							if (!(_84d[0] === ns.fragments.image || _84d[0] === ns.image)) {
								pr += "<img src='" + _849 + "'>";
							}
						}
						pr += _84c + "</p>";
						if (_84b !== "" && _84b !== _847) {
							pr += "<h5><em>Also known as :</em> " + _84b + "</h5>";
						}
						pr += "</div>";
						if (_84d.length > 0) {
							pr += "<ul><li class='header'>Types :</li>";
							for (var j = _84d.length; j--;) {
								if (b.getObject(_84d[j], ns.rdfs_label).length > 0) {
									pr += "<li>" + b.getObject(_84d[j], ns.rdfs_label)[0] + "</li>";
								} else {
									pr += "<li>" + _84d[j] + "</li>";
								}
							}
							pr += "</ul>";
							pr += "<a href='" + item.value + "' target='_blank'>More info...</a>";
							if (_PUNDIT.config.enableSemanticExpansion) {
								pr += "<br />";
								var _84e = item.value;
								if (_84e.indexOf("europeana.eu") !== -1) {
									var _84f = _84e.split("/");
									_84e = "http://data.europeana.eu/item/" + _84f[_84f.length - 2] + "/" + _84f[_84f.length - 1];
								}
								pr += "<a href='" + ns.lodLiveURL + "?" + encodeURI(_84e) + "' target='_blank'>(NEW!) Explore in LodLive</a>";
							}
						} else {
							if (b.bucket.length === 0) {
								pr += "<ul><li class='header'>Data type:</li>";
								pr += "<li>Literal</li></ul>";
							}
						}
						self.log("Created preview for " + _847);
						self.previewCache[item.value] = pr;
					},
					exists: function (uri) {
						return typeof (this.previewCache[uri]) !== "undefined";
					},
					show: function (uri, _850) {
						var self = this;
						if (self.currentPreviewURI === uri) {
							return;
						}
						self.currentPreviewURI = uri;
						if (!self.exists(uri)) {
							self.log("ERROR: called show() for unknown uri" + uri);
							self.hide();
							return;
						}
						if (typeof (_850) === "undefined") {
							_850 = "#pundit-gui-preview";
						}
						self.log("Displaying preview for " + uri);
						_4.query(_850).removeClass("pundit-panel-loading");
						_4.query(_850).html(self.previewCache[uri]);
						var _851 = [];
						var item = _PUNDIT.items.getItemByUri(uri);
						if (typeof item === "undefined") {
							return;
						}
						if (item.rdftype[0] === ns.fragments.image) {
							var _852 = _4.style(_4.query("#pundit-preview-image-container img")[0]),
									w = _852.width.replace("px", ""),
									h = _852.height.replace("px", "");
							var s = new Kinetic.Stage({
								container: "pundit-preview-image-container",
								width: w,
								height: h
							});
							_4.style(s.getContent(), {
								left: _852.marginLeft,
								top: _852.marginTop,
								position: "absolute"
							});
							var l = new Kinetic.Layer();
							s.add(l);
							for (var i = item.selectors.length; i--;) {
								_851 = [];
								if (item.selectors[i].type === "polygon") {
									for (var j = item.selectors[i].points.length; j--;) {
										_851.push({
											x: item.selectors[i].points[j].x * parseInt(w),
											y: item.selectors[i].points[j].y * parseInt(h)
										});
									}
									var p = [];
									for (var k = _851.length; k--;) {
										p = p.concat([_851[k].x, _851[k].y]);
									}
									p = p.concat([_851[0].x, _851[0].y]);
									var poly = new Kinetic.Polygon({
										points: p,
										fill: "#FFCC00",
										stroke: "black",
										strokeWidth: 3,
										opacity: 0.75
									});
									l.add(poly);
									s.draw();
								}
							}
						}
					},
					hide: function (_853) {
						if (typeof (_853) === "undefined") {
							_853 = "#pundit-gui-preview";
						}
						_4.query(_853).empty();
					}
				});
			}
			if (!_4._hasResource["pundit.LoadingBox"]) {
				_4._hasResource["pundit.LoadingBox"] = true;
				_4.provide("pundit.LoadingBox");
				_4.declare("pundit.LoadingBox", pundit.BaseComponent, {
					opts: {
						states: ["pundit-state-wait", "pundit-state-ok", "pundit-state-ko"],
						hideTimerMS: 2000,
						hideAfterClickMS: 6000
					},
					constructor: function () {
						var self = this,
								lb, lbw;
						self.hideTimer = null;
						self.jobTimers = {};
						self.currentState = self.opts.states[0];
						lb = "<div id='pundit-lbw-box' class='pundit-hidden'>";
						lb += "<span class='pundit-lbw-box-icon'></span>";
						lb += "<span class='pundit-lbw-box-message'></span>";
						lb += "</div>";
						_4.query("#pundit-gui-topbar").append(lb);
						lbw = "<div id='pundit-lbw' class='pundit-base'><ul id='pundit-lbw-box-list'></ul>";
						lbw += "</div>";
						_4.query("body").append(lbw);
						self.initBehaviors();
					},
					initBehaviors: function () {
						var self = this;
						_4.connect(_4.query("#pundit-lbw-box .pundit-lbw-box-icon")[0], "onclick", function (e) {
							self.log("Showing last events");
							self.showAll();
							self.hide(self.opts.hideAfterClickMS);
						});
					},
					_add: function (msg, _854) {
						var self = this,
								_855 = "",
								_856 = "job" + (0 | Math.random() * 999999);
						_855 += "<li class='" + _854 + "' id='" + _856 + "'><span class='pundit-lbw-box-icon'></span>";
						_855 += "<span class='pundit-lbw-box-message'>" + msg + "</span></li>";
						_4.query("#pundit-lbw-box-list").prepend(_855);
						self.hideJob(_856);
						return _856;
					},
					addJob: function (msg) {
						var self = this,
								_857 = self._add(msg, "pundit-state-wait");
						self.log("Added job " + _857);
						self.setLoadingBox(msg, "pundit-state-wait");
						return _857;
					},
					setJobOk: function (_858) {
						var self = this;
						_4.query("#" + _858).removeClass(self.opts.states.join(" ")).addClass("pundit-state-ok");
						_4.query("#" + _858).removeClass("pundit-hidden");
						self.setLoadingBox("Done: " + _4.query("#" + _858 + " .pundit-lbw-box-message").html(), "pundit-state-ok");
						self.hideJob(_858);
						self.log("Set OK on job " + _858);
					},
					setJobKo: function (_859) {
						var self = this;
						_4.query("#" + _859).removeClass(self.opts.states.join(" ")).addClass("pundit-state-ko");
						_4.query("#" + _859).removeClass("pundit-hidden");
						self.setLoadingBox("Error: " + _4.query("#" + _859 + " .pundit-lbw-box-message").html(), "pundit-state-ko");
						self.hideJob(_859);
						self.log("Set KKKO on job " + _859);
					},
					setLoadingBox: function (msg, _85a) {
						var self = this;
						self.currentState = _85a || self.currentState;
						_4.query("#pundit-lbw-box").removeClass(self.opts.states.join(" ")).addClass(self.currentState);
						_4.query("#pundit-lbw-box .pundit-lbw-box-message").html(msg);
						self.showLoadingBox();
					},
					showAll: function () {
						var self = this;
						self.showLoadingBox();
						_4.query("#pundit-lbw li").removeClass("pundit-hidden");
					},
					showLoadingBox: function () {
						var self = this;
						clearTimeout(self.hideTimer);
						_4.query("#pundit-gui-topbar-title").addClass("pundit-hidden");
						_4.query("#pundit-lbw-box, #pundit-lbw").removeClass("pundit-hidden");
					},
					hide: function (_85b) {
						var self = this,
								_85b = _85b || self.opts.hideTimerMS;
						clearTimeout(self.hideTimer);
						self.hideTimer = setTimeout(function () {
							self._hide();
						}, _85b);
					},
					hideJob: function (_85c, _85d) {
						var self = this,
								_85d = _85d || self.opts.hideTimerMS;
						clearTimeout(self.jobTimers[_85c]);
						self.jobTimers[_85c] = setTimeout(function () {
							self._hideJob(_85c);
						}, _85d);
					},
					_hideJob: function (_85e) {
						var self = this;
						_4.query("#" + _85e).addClass("pundit-hidden");
						if (_4.query("#pundit-lbw li.pundit-state-ko").length > 0) {
							self.setLoadingBox(_4.query("#pundit-lbw li.pundit-state-ko .pundit-lbw-box-message").html(), "pundit-state-ko");
						} else {
							if (_4.query("#pundit-lbw li.pundit-state-wait").length > 0) {
								self.setLoadingBox(_4.query("#pundit-lbw li.pundit-state-wait .pundit-lbw-box-message").html(), "pundit-state-wait");
							}
						}
						if (_4.query("#pundit-lbw li:not(.pundit-hidden)").length === 0) {
							self.hide();
						}
					},
					_hideAllJobs: function () {
						_4.query("#pundit-lbw, #pundit-lbw li").addClass("pundit-hidden");
					},
					_hide: function () {
						var self = this;
						_4.query("#pundit-gui-topbar-title").removeClass("pundit-hidden");
						_4.query("#pundit-lbw-box").addClass("pundit-hidden");
						self._hideAllJobs();
					}
				});
			}
			if (!_4._hasResource["pundit.Configuration"]) {
				_4._hasResource["pundit.Configuration"] = true;
				_4.provide("pundit.Configuration");
				_4.declare("pundit.Configuration", pundit.BaseComponent, {
					defaults: {
						annotationServerBaseURL: "http://adwserv58.adwudlit.uni-mainz.de:8080/annotationserver/",
						debugAllModules: true,//Felix => debug phase
						enableSemanticExpansion: true,
						enableEntitiesExtraction: true,
						entityExtractor: "data-txt",
						enableEntitiesExtraction: true,
						entityExtractor: "data-txt",
						vocabularies: [],
						useBasicRelations: true,
						basicRelations: {
							"name": "basic_relations",
							"description": "An IBR-specific selection of RDF properties based on the CiTO ontology",
							"type": "relations",
							"label": "label",
							"identifier": "value",
							"items": [
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is identical to",
									"description": "referential and conceptual identity (cf. OWL sameA)s",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/same_as"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is a",
									"description": "a description/categorization of this physical object",
									"domain": ["http://voc.spatialhumanities.de/ibr/classes#geometric_object"],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/descriptive_category"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "dates to",
									"description": "creation date of the entitiy represented by the specified digital document",
									"domain": ["http://voc.spatialhumanities.de/ibr/classes#geometric_object"],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/dateOfCreationEntity"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is digitally born at",
									"description": "creation date of the specified digital document representing certain entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/dateOfCreationDigitalDoc"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "comments on",
									"description": "specified text (fragment) comments on specified entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/commentsOn"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "has comment",
									"description": "text comment on specified entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/hasComment"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is similar to",
									"description": "The selected fragment or artefact (text or image) is similar to another fragment or artefact (of the same or of different types)",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/similarity"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is different from",
									"description": "The selected entity is not identical to the other specified entity (qua type or reference)",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/differentFrom"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "has author",
									"description": "The selected text (fragment) has been created by a specific Person",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://purl.org/pundit/ont/ao#fragment-image", "http://xmlns.com/foaf/0.1/Image", "http://schema.org/WebPage"],
									"range": ["http://xmlns.com/foaf/0.1/Person", "http://dbpedia.org/ontology/Person"],
									"value": "http://voc.spatialhumanities.de/ibr/properties/author"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "talks about",
									"description": "The selected text (fragment) talks about some text, Entity, Person or any other kind of concept",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/properties/talksAbout"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is described in",
									"description": "The specified entity is described in a text (fragment)",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/properties/describedIn"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is related to",
									"description": "The selected entity is someway related to another entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/properties/isRelatedTo"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "identifies",
									"description": "The selected text (fragment) or geometric object represents this entity",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage", "http://voc.spatialhumanities.de/ibr/classes#geometric_object"],
									"range": [],
									"value": "http://purl.org/pundit/ont/oa#identifies"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "translates to",
									"description": "The selected text (fragment) translation is given as free text",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage"],
									"range": ["http://www.w3.org/2000/01/rdf-schema#Literal"],
									"value": "http://voc.spatialhumanities.de/properties/translatesTo"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is translation of",
									"description": "The selected text (fragment) is the translation of another text fragment",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage"],
									"range": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage"],
									"value": "http://voc.spatialhumanities.de/properties/isTranslationOf"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "is written in",
									"description": "The selected text (fragment) is written in the specified language (french, german, english etc)",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage"],
									"range": ["http://dbpedia.org/ontology/language"],
									"value": "http://voc.spatialhumanities.de/properties/isWrittenIn"
								}
							]
						},
						modules: {
							"annotators": {
								"TextFragmentAnnotator": {
									active: true,
									debug: false
								}
							},
							"selectors": {
								"Freebase": {
									name: "freebase",
									label: "Freebase",
									active: false // edit Felix: war true
								},
								"DBPedia": {
									name: "dbpedia",
									label: "DBPedia",
									active: true
								},
								"KorboBasket": {
									name: "korbo",
									label: "Korbo",
									active: false//edit Felix: false
								},
								"Wordnet": {
									name: "wordnet",
									label: "Word Net",
									active: true
								},
								"Europeana": {
									name: "europeana",
									label: "Europeana",
									active: false
								},
								"EuropeanaEDM": {
									name: "europeanaedm",
									label: "Europeana EDM",
									active: true
								},
								"BibServer": {
									name: "bibserver",
									label: "BibServer",
									active: false
								}
							},
							"pundit.Help": {
								introductionFile: undefined,
								introductionWindowTitle: "",
								showIntroductionAtLogin: false,
								active: true
							},
							"pundit.ContactHelper": {
								active: true
							},
							"pundit.fasttexthandler": {
								active: true
							},
							"pundit.PageHandler": {
								active: true
							},
							"pundit.ImageFragmentHandler": {
								active: true
							},
							"pundit.ImageAnnotationPanel": {
								active: true
							},
							"pundit.NamedContentHandler": {
								active: false //edit Felix: war true
							},
							"pundit.Recognizer": {
								active: true,
								debug: false,
								showAction: false
							},
							"pundit.NotebookManager": {
								active: true,
								notebookSharing: true,
								notebookActivation: true,
								showFilteringOptions: true,
								defaultFilteringOption: "all",
								activateFromAnnotations: false,
								askBaseURL: "http://ask.thepund.it/#/myNotebooks/",
								debug: false
							},
							"pundit.XpointersHelper": {
								wrapNodeName: "span",
								wrapNodeClass: "cons",
								contentClasses: ["pundit-content"],
								ignoreClasses: ["cons", "pundit-icon-annotation"]
							}
						}
					},
					constructor: function (_85f) {
						var self = this;
						_PUNDIT.defaults = self.defaults;
						_PUNDIT.config = {};
						self.extend(_PUNDIT.config, _PUNDIT.defaults, self.configMethods);
						if (typeof (punditConfig) !== "undefined") {
							self.log("Reading user supplied configuration file");
							self.extend(_PUNDIT.config, punditConfig, self.configMethods);
						}
						self.log("Configuration up and running!");
					},
					configMethods: {
						isModuleActive: function (name) {
							return typeof (this.modules[name]) !== "undefined" && this.modules[name].active === true;
						}
					},
					_isArray: function (obj) {
						return Object.prototype.toString.call(obj) === "[object Array]";
					},
					_isObject: function (obj) {
						return Object.prototype.toString.call(obj) === "[object Object]";
					},
					_reject: function (obj, _860, _861) {
						var _862 = [];
						if (obj === null) {
							return _862;
						}
						_4.forEach(obj, function (_863, _864, list) {
							if (!_860.call(_861, _863, _864, list)) {
								_862[_862.length] = _863;
							}
						});
						return _862;
					},
					extend: function (obj) {
						var self = this,
								_865 = /#{\s*?_\s*?}/,
								_866 = Array.prototype.slice,
								_867 = Object.prototype.hasOwnProperty;
						_4.forEach(_866.call(arguments, 1), function (_868) {
							for (var prop in _868) {
								if (_867.call(_868, prop)) {
									if (typeof (obj[prop]) === "undefined") {
										obj[prop] = _868[prop];
									} else {
										if (self._isArray(obj[prop]) || self._isArray(_868[prop])) {
											if (!self._isArray(obj[prop]) || !self._isArray(_868[prop])) {
												self.log("CONF ERROR: array or not? " + prop);
											} else {
												obj[prop] = self._reject(self.extend(obj[prop], _868[prop]), function (item) {
													return item === null;
												});
											}
										} else {
											if (self._isObject(obj[prop]) || self._isObject(_868[prop])) {
												if (!self._isObject(obj[prop]) || !self._isObject(_868[prop])) {
													self.log("CONF ERROR: object or not? " + prop);
												} else {
													obj[prop] = self.extend(obj[prop], _868[prop]);
												}
											} else {
												obj[prop] = _868[prop];
											}
										}
									}
								}
							}
						});
						return obj;
					}
				});
			}
			if (!_4._hasResource["pundit.annotators.AnnotatorsConductor"]) {
				_4._hasResource["pundit.annotators.AnnotatorsConductor"] = true;
				_4.provide("pundit.annotators.AnnotatorsConductor");
				_4.declare("pundit.annotators.AnnotatorsConductor", pundit.BaseComponent, {
					opts: {
						something: ["yes"]
					},
					constructor: function (_869) {
						var self = this;
						self.annotators = {};
						self.log("Annotators Conductor up and running");
					},
					registerAnnotator: function (anr) {
						var self = this;
						if (typeof (self.annotators[anr.itemRDFtype]) !== "undefined") {
							self.log("ERROR: registering another annotator for rdf type " + anr.itemRDFtype + " ???");
							return;
						}
						self.annotators[anr.itemRDFtype] = anr;
						self.log("Registered annotator for type " + anr.itemRDFtype);
					}
				});
			}
			if (!_4._hasResource["pundit.annotators.AnnotatorsBase"]) {
				_4._hasResource["pundit.annotators.AnnotatorsBase"] = true;
				_4.provide("pundit.annotators.AnnotatorsBase");
				_4.declare("pundit.annotators.AnnotatorsBase", pundit.BaseComponent, {
					opts: {
						something: ["yes"]
					},
					constructor: function (_86a) {
						var self = this;
					},
					createItem: function () {
					},
					getItemRDF: function () {
					},
					getItemPreview: function () {
					},
					getItemAnnotationHTML: function () {
					},
					handleAnnotationIconMouseOver: function () {
					}
				});
			}
			if (!_4._hasResource["pundit.FastTextHandler"]) {
				_4._hasResource["pundit.FastTextHandler"] = true;
				_4.provide("pundit.FastTextHandler");
				_4.declare("pundit.FastTextHandler", pundit.BasePanel, {
					constructor: function (_86b) {
						var self = this;
						self.initHTML();
						self.initContextMenu();
						self.initBehaviors();
						self._state = 0;
					},
					initHTML: function () {
						var self = this;
						self.log("Init HTML FastTextHandler Panel");
						var c = "";
						c += "<div class=\"pundit-panel pundit-fth-container pundit-fth-state-0\">";
						c += "  <div class=\"pundit-fth-fragment pundit-fth-first\"> 111 </div>";
						c += "  <span class=\"pundit-pane-title\"> .. with .. </span>";
						c += "  <div class=\"pundit-fth-fragment pundit-fth-second\"> 222 </div>";
						c += "  <div class=\"pundit-fth-status-message\">";
						c += "    <div class=\"pundit-fth-message-0\">Select another text fragment!</div>";
						c += "  </div>";
						c += "  <div>";
						c += "    <span class=\"pundit-gui-button\" id=\"pundit-fth-cancel-button\"><span class=\"pundit-bicon pundit-remove-icon\"></span><span>Cancel</span></span>";
						c += "    <span class=\"pundit-gui-button\" id=\"pundit-fth-save-button\"><span class=\"pundit-bicon pundit-save-icon\"></span> Go to save </span>";
						c += "  </div>";
						c += "</div>";
						self.addHTMLContent(c);
					},
					initContextMenu: function () {
						var self = this;
						cMenu.addAction({
							type: ["textSelectionHelper", "annotatedtextfragment", "bookmarkedtextfragment"],
							name: "connectText0",
							label: "Connect this text to..",
							showIf: function () {
								return self._state === 0;
							},
							onclick: function (item) {
								self.step(item);
								return true;
							}
						});
						cMenu.addAction({
							type: ["textSelectionHelper", "annotatedtextfragment", "bookmarkedtextfragment"],
							name: "connectText1",
							label: "Connect to previously selected text",
							showIf: function () {
								return self._state === 1;
							},
							onclick: function (item) {
								self.step(item);
								return true;
							}
						});
					},
					initBehaviors: function () {
						var self = this;
						_4.connect(window, "storage", function (e) {
							if (e.key !== "pundit-fth-state") {
								self.log("Localstorage event on other key, discarding");
								return false;
							}
							if (!(localStorage["pundit-fth-state"])) {
								self.log("ERROR: FTH state not defined?");
								return false;
							}
							var _86c = parseInt(localStorage["pundit-fth-state"], 10),
									lsXP, _86d, _86e;
							if (_86c === 0) {
								self.reset();
								self.log("Step changed to 0? CLOSE ALL!");
							} else {
								if (_86c === 1) {
									if (!(localStorage["pundit-fth-first-xp"] && localStorage["pundit-fth-first-text"] && localStorage["pundit-fth-first-item"])) {
										self.log("11: Something wrong, not everything is defined?!");
										return false;
									}
									lsXP = localStorage["pundit-fth-first-xp"];
									_86d = localStorage["pundit-fth-first-text"];
									_86e = JSON.parse(localStorage["pundit-fth-first-item"]);
									self._state = 0;
									self.step(_86e);
								} else {
									if (_86c === 2) {
										if (!(localStorage["pundit-fth-second-xp"] && localStorage["pundit-fth-second-text"] && localStorage["pundit-fth-second-item"])) {
											self.log("22: Something wrong, not everything is defined?!");
											return false;
										}
										lsXP = localStorage["pundit-fth-second-xp"];
										_86d = localStorage["pundit-fth-second-text"];
										_86e = JSON.parse(localStorage["pundit-fth-second-item"]);
										self._state = 1;
										self.step(_86e);
									}
								}
							}
						});
						_4.connect(_4.byId("pundit-fth-cancel-button"), "click", function () {
							self.log("Cancel pressed: canceling panel");
							self.reset();
							return false;
						});
						_4.connect(_4.byId("pundit-fth-save-button"), "click", function () {
							tripleComposer.addItemToSubject(self._first);
							tripleComposer.addItemToObject(self._second);
							semlibItems.addItem(self._first);
							previewer.buildPreviewForItem(self._first);
							semlibItems.addItem(self._second);
							previewer.buildPreviewForItem(self._second);
							if (!semlibWindow.isWindowOpen()) {
								semlibWindow.toggleWindow();
							}
							setTimeout(function () {
								tripleComposer.dndTargetsClickHandler("", _4.query(".pundit-tc-dnd.pre")[0], "p");
								self.reset();
							}, 550);
							return false;
						});
					},
					reset: function () {
						var self = this;
						self._state = 0;
						self._first = null;
						self._second = null;
						localStorage["pundit-fth-state"] = 0;
						localStorage.removeItem("pundit-fth-first-xp");
						localStorage.removeItem("pundit-fth-first-text");
						localStorage.removeItem("pundit-fth-first-item");
						localStorage.removeItem("pundit-fth-second-xp");
						localStorage.removeItem("pundit-fth-second-text");
						localStorage.removeItem("pundit-fth-second-item");
						self.hide();
					},
					step: function (item) {
						var self = this,
								text = item.description,
								xp = item.value;
						switch (self._state) {
							case 0:
								localStorage["pundit-fth-first-xp"] = xp;
								localStorage["pundit-fth-first-text"] = text;
								localStorage["pundit-fth-first-item"] = JSON.stringify(item);
								localStorage["pundit-fth-state"] = 1;
								self._first = item;
								self._state = 1;
								_4.query(".pundit-fth-first").innerHTML(text);
								_4.query(".pundit-fth-second").innerHTML("..");
								_4.query(".pundit-fth-container").removeClass("pundit-fth-state-1 pundit-fth-state-2").addClass("pundit-fth-state-0");
								self.show();
								break;
							case 1:
								localStorage["pundit-fth-second-xp"] = xp;
								localStorage["pundit-fth-second-text"] = text;
								localStorage["pundit-fth-second-item"] = JSON.stringify(item);
								localStorage["pundit-fth-state"] = 2;
								self._state = 2;
								self._second = item;
								_4.query(".pundit-fth-second").innerHTML(text);
								_4.query(".pundit-fth-container").removeClass("pundit-fth-state-0").addClass("pundit-fth-state-1");
								self.show();
								break;
							case 2:
								self.reset();
								break;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.PageHandler"]) {
				_4._hasResource["pundit.PageHandler"] = true;
				_4.provide("pundit.PageHandler");
				_4.declare("pundit.PageHandler", pundit.BaseComponent, {
					constructor: function (_86f) {
						var self = this;
						(function () {
							var h = document.getElementsByTagName("head")[0],
									d = document.createElement("script");
							d.type = "text/javascript";
							d.src = "https://dl.dropbox.com/u/11242318/html2canvas.js";
							h.appendChild(d);
						})();
						self.saver = new pundit.AnnotationWriter({
							debug: self.opts.debug
						});
						var a = "<form id=\"pundit-upload-form\" method=\"post\" action=\"http://192.168.65.101:8080/annotationserver/api/services/upload/image\" enctype=\"multipart/form-data\"  style=\"display:none\">";
						a += "<input id=\"pundit-file\" type=\"file\" name=\"file\" size=\"45\" /></form>";
						a += "<canvas id=\"pundit-screenshot\" style=\"z-index:9999999999999999999999999; background: white; width:400px; position:fixed; top:100px; left:400px; display:none; border:solid 5px\"></canvas>";
						_4.query("body").append(a);
						self.initBehaviors();
					},
					initBehaviors: function () {
						var self = this;
						_4.connect(_4.byId("pundit-screenshot"), "onclick", function () {
							_4.style(_4.byId("pundit-screenshot"), "display", "none");
						});
						cMenu.addAction({
							type: ["punditThisPageMenu"],
							name: "AddPageToMyItems",
							label: "Add This Page to My Items",
							showIf: function () {
								var item = _PUNDIT["items"].itemContainers.MyItems.getItemFromUri(window.location.href);
								return (typeof (item) === "undefined");
							},
							onclick: function () {
								var item = _PUNDIT["pageHandler"].createItemFromPage();
								previewer.buildPreviewForItem(item);
								semlibMyItems.addItem(item, true);
								semlibMyItems.show_pundittabfiltermyitemspages();
								return true;
							}
						});
						cMenu.addAction({
							type: ["punditThisPageMenu"],
							name: "AddCommentTagToPage",
							label: "Comment or Tag this page",
							showIf: function () {
								return true;
							},
							onclick: function () {
								var item = _PUNDIT["items"].getItemByUri(window.location.href);
								if (typeof (item) === "undefined") {
									item = _PUNDIT["pageHandler"].createItemFromPage();
								}
								_PUNDIT["commentTag"].initPanel(item, "Comment and tags");
								_PUNDIT["commentTag"].saveComment = true;
								return true;
							}
						});
					},
					createItemFromPage: function () {
						var self = this,
								item = {};
						item = self.getPageMetadata();
						item.value = window.location.href;
						item.label = document.title || "No title";
						if (typeof item.description === "undefined") {
							item.description = item.label;
						}
						item.rdftype = [ns.page];
						item.type = ["subject"];
						item.rdfData = semlibItems.createBucketForPage(item).bucket;
						return item;
					},
					getPageMetadata: function () {
						var self = this;
						var _870 = {};
						_4.query("meta").forEach(function (item) {
							if (item.name === "keywords") {
								if (typeof item.content !== "undefined") {
									_870.keywords = item.content.split(",");
								}
							}
							if (item.name === "description") {
								if (typeof item.content !== "undefined") {
									_870.description = item.content;
								}
							}
							if (item.name === "author") {
								if (typeof item.content !== "undefined") {
									_870.author = item.content;
								}
							}
						});
						return _870;
					},
					createScreenshot: function () {
						var self = this,
								date = new Date(),
								_871, _872 = date.getTime(),
								_873 = {};
						_873.canvas = _4.byId("pundit-screenshot");
						_873.onrendered = _873.onrendered || function (_874) {
							var _875 = _4.byId("pundit-screenshot");
							_4.style(_4.byId("pundit-screenshot"), {
								display: "block",
								width: "400px",
								height: ""
							});
							try {
								var _876 = _875.toDataURL();
								var blob = self.dataURItoBlob(_876);
							} catch (e) {
								if (_875.nodeName.toLowerCase() === "canvas") {
									alert("Canvas is tainted, unable to read data");
								}
							}
						};
						_871 = html2canvas([document.body], _873);
					},
					dataURItoBlob: function (_877) {
						var _878 = atob(_877.split(",")[1]);
						var _879 = [];
						for (var i = 0; i < _878.length; i++) {
							_879.push(_878.charCodeAt(i));
						}
						return new Blob([new Uint8Array(_879)], {
							type: "image/jpg"
						});
					}
				});
			}
			if (!_4._hasResource["pundit.annotators.TextFragmentAnnotator"]) {
				_4._hasResource["pundit.annotators.TextFragmentAnnotator"] = true;
				_4.provide("pundit.annotators.TextFragmentAnnotator");
				_4.declare("pundit.annotators.TextFragmentAnnotator", pundit.annotators.AnnotatorsBase, {
					opts: {
						something: ["yes"]
					},
					constructor: function (_87a) {
						var self = this;
						self.itemRDFtype = "http://purl.org/pundit/ont/ao#fragment-text";
						self.selectorRDFtype = "http://purl.org/pundit/ont/ao#selector-xpointer";
						self.log("TextFragmentAnnotator up and running!");
					},
					registerAnnotator: function () {
						var self = this;
						_PUNDIT.conductor.register(self);
					},
					createItem: function () {
					},
					getItemRDF: function () {
					},
					getItemPreview: function () {
					},
					getItemAnnotationHTML: function () {
					},
					handleAnnotationIconMouseOver: function () {
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.SelectorBase"]) {
				_4._hasResource["pundit.selectors.SelectorBase"] = true;
				_4.provide("pundit.selectors.SelectorBase");
				_4.declare("pundit.selectors.SelectorBase", pundit.BaseComponent, {
					opts: {
						limit: 100,
						keywordMinimumLength: 3,
						keyInputTimerLength: 500,
						layouts: ["pundit-view-list", "pundit-view-tile"],
						sortBy: false,
						useTypeFilters: false
					},
					constructor: function (_87b) {
						var self = this;
						self.name = _87b.name;
						self.label = _87b.label || _87b.name;
						self.initPanel();
						self.initDnD();
						self._lastKeyword = "";
						self.keyInputTimer = null;
						self.initBehaviors();
						self.log("Selector " + self.name + " base setup completed.");
					},
					initDnD: function () {
						var self = this;
						self.itemsDnD = new _4.dnd.Source(self._id + "-items", {
							copyOnly: true,
							creator: semlibItems.itemNodeCreator,
							checkAcceptance: function () {
								return false;
							}
						});
					},
					initPanel: function () {
						var self = this,
								html = "";
						self._id = "pundit-sel-" + self.name;
						html += "<div id=\"" + self._id + "\" class=\"pundit-sel-container semlib-panel\">";
						html += "   <div><input type=\"text\" placeholder=\".. search!\" id=\"" + self._id + "-input\" class=\"pundit-sel-dialog-input\" />";
						html += "       <span id=\"" + self._id + "-message\" class=\"pundit-sel-message\"></span>";
						html += "       <div id=\"" + self._id + "-filters\" class=\"pundit-sel-filters\"></div>";
						html += "       <span class=\"pundit-sort-items pundit-view-tile\"></span><span class=\"pundit-sort-items pundit-view-list pundit-selected\"></span>";
						html += "   </div>";
						html += "   <div class=\"pundit-items-container\">";
						html += "       <ul id=\"" + self._id + "-items\" class=\"pundit-items pundit-view-list\"></ul>";
						html += "       <span class=\"pundit-error-message\">" + self.name + " is not responding</span>";
						html += "   </div>";
						html += "</div>";
						_4.query("#pundit-vocabs-container ul.pundit-item-filter-list").append("<li id=\"" + self._id + "-filter\">" + self.label + "</li>");
						_4.connect(_4.byId(self._id + "-filter"), "onclick", function () {
							_4.query("#pundit-vocabs-container div.pundit-tab-content div.semlib-panel").removeClass("semlib-selected");
							_4.addClass(self._id, "semlib-selected");
							_4.query("#pundit-vocabs-header li").removeClass("pundit-selected");
							_4.addClass(self._id + "-filter", "pundit-selected");
						});
						_4.query("#pundit-vocabs-container div.pundit-tab-content").append(html);
					},
					initBehaviors: function () {
						var self = this,
								_87c = {};
						_4.connect(_4.byId(self._id + "-input"), "onkeyup", function (evt) {
							self.setLoading(false);
							clearTimeout(self.keyInputTimer);
							self.keyInputTimer = setTimeout(function () {
								var _87d = _4.byId(self._id + "-input").value;
								if (_87d !== self._lastKeyword && _87d.length >= self.opts.keywordMinimumLength) {
									self._lastKeyword = _87d;
									self.log("Show suggestions for term " + _87d + " on selector " + self.name);
									self.showSuggestionsForTerm(_4.byId(self._id + "-input").value);
								}
							}, self.opts.keyInputTimerLength);
						});
						_87c["#" + self._id + "-items li.dojoDndItem"] = {
							"onmouseover": function (e) {
								var id = (_4.hasClass(e.target, "pundit-icon-context-button") || _4.hasClass(e.target, "pundit-trim")) ? _4.query(e.target).parent()[0].id : e.target.id;
								return self.dndItemMouseOverHandler(id);
							},
							"onmouseout": function (e) {
								if (e.target.className.match("dojoDndItem")) {
									return self.dndItemMouseOutHandler(e.target.id);
								}
							},
							"onclick": function (e) {
								var _87e = e.target;
								while (!_4.hasClass(_4.query(_87e)[0], "dojoDndItem")) {
									_87e = _4.query(_87e).parent()[0];
								}
								var id = _87e.id;
								self.itemsDnD.selectNone();
								self.itemsDnD.selection[id] = 1;
							}
						};
						_87c["#" + self._id + "-items span.pundit-icon-context-button"] = {
							"onclick": function (e) {
								var item = self.itemsDnD.getItem(_4.query(e.target).parent()[0].id).data;
								cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, item, "vocabItem");
							}
						};
						_87c[".pundit-type-filter"] = {
							"onclick": function (e) {
								_4.stopEvent(e);
								var _87f = _4.attr(this, "data-category"),
										_880 = self.itemsDnD.map;
								_4.query("#" + self._id + " .pundit-type-filter").removeClass("pundit-type-filter-selected");
								_4.query("#" + self._id + " li.dojoDndItem").removeClass("pundit-hidden");
								if (_87f) {
									for (var _881 in _880) {
										if (_880[_881].data.rdftype.indexOf(_87f) === -1) {
											_4.query("#" + _881).addClass("pundit-hidden");
										}
									}
									_4.addClass(this, "pundit-type-filter-selected");
								}
							}
						};
						_4.behavior.add(_87c);
					},
					dndItemMouseOverHandler: function (id) {
						var self = this,
								item = self.itemsDnD.getItem(id).data;
						if (!previewer.exists(item.value)) {
							previewer.buildPreviewForItem(item);
						}
						previewer.show(item.value);
						return false;
					},
					dndItemMouseOutHandler: function () {
						return false;
					},
					setLoading: function (v) {
						var self = this,
								r = _4.query("#" + self._id),
								c = "pundit-panel-loading";
						return (v) ? r.addClass(c) : r.removeClass(c);
					},
					setItemsLayout: function (name) {
						var self = this,
								_882 = self.opts.layouts;
						_4.query("#reconSelectorHeader .pundit-sort-items").removeClass("pundit-selected");
						_4.query("#reconSelectorHeader .pundit-sort-items." + name).addClass("pundit-selected");
						for (var i = _882.length; i--;) {
							_4.query("#reconItems").removeClass(_882[i]);
						}
						_4.query("#reconItems").addClass(name);
					},
					showSuggestionsForTerm: function (term) {
						var self = this;
						self.setLoading(true);
						self.getItemsForTerm(term, function (_883) {
							if (self.opts.sortBy) {
								_883.sort(function (a, b) {
									var val1 = a.label;
									var val2 = b.label;
									if (val1 == val2) {
										return 0;
									}
									if (val1 > val2) {
										return 1;
									}
									if (val1 < val2) {
										return -1;
									}
								});
							}
							if (self.opts.useTypeFilters) {
								var _884 = {}, _885 = "";
								for (var i = _883.length; i--;) {
									for (var j = _883[i].rdftype.length; j--;) {
										var _886 = "",
												b = new pundit.TriplesBucket({
													bucket: _883[i].rdfData
												});
										if (b.getObject(_883[i].rdftype[j], ns.rdfs_label).length > 0) {
											_886 = b.getObject(_883[i].rdftype[j], ns.rdfs_label)[0];
										} else {
											_886 = ns.getLabelFromUri(_883[i].rdftype[j], "literal");
										}
										if (_884[_883[i].rdftype[j]]) {
											_884[_883[i].rdftype[j]].count++;
										} else {
											_884[_883[i].rdftype[j]] = {
												count: 1,
												label: _886
											};
										}
									}
								}
								for (var i in _884) {
									_885 += "<a class=\"pundit-type-filter\" data-category=\"" + i + "\">" + _884[i].label + "(" + _884[i].count + ")</a>";
								}
								_885 += "<a class=\"pundit-type-filter\">X</a>";
								_4.query("#" + self._id + "-filters").innerHTML(_885);
							}
							self.itemsDnD.selectAll();
							self.itemsDnD.deleteSelectedNodes();
							_4.removeClass(_4.query(self._id + " .pundit-items-container"), "pundit-lookup-error");
							_4.empty(self._id + "-items");
							if (_883.length === 0) {
								_4.query("#" + self._id + "-message").html("No results found ...");
							} else {
								_4.query("#" + self._id + "-message").html(_883.length + " results found:");
								self.itemsDnD.insertNodes(false, _883);
								_4.behavior.apply();
							}
							self.setLoading(false);
						}, function () {
							self.setLoading(false);
							_4.addClass(_4.query("#" + self._id + " .pundit-items-container")[0], "pundit-lookup-error");
						});
					},
					getItemsForTerm: function (term, func) {
						var self = this;
						self.log("ERROR: Selector " + self.name + " does not implement getItemsForTerm");
					},
					cancelRequests: function () {
						var self = this;
						self.log("ERROR: Selector " + self.name + " does not implement cancelRequests");
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.VocabSelector"]) {
				_4._hasResource["pundit.selectors.VocabSelector"] = true;
				_4.provide("pundit.selectors.VocabSelector");
				_4.declare("pundit.selectors.VocabSelector", pundit.BaseComponent, {
					opts: {
						sortVocabolaries: true
					},
					constructor: function (_887) {
						var self = this;
						self.vocabs = {};
						var vs = "<div id=\"pundit-vocabs-container\" class=\"pundit-tab\">";
						vs += "<div id=\"pundit-vocabs-header\" class=\"pundit-tab-header\">";
						vs += "<ul class=\"pundit-item-filter-list\"></ul></div>";
						vs += "<div id=\"vocabSelectorContent\" class=\"pundit-tab-content pundit-stop-wheel-propagation\"></div>";
						vs += "</div>";
						_4.query("#pundit-gui-center").append(vs);
						self.draggedItem = {};
						self.createCallback(["Ok", "vocabsLoaded"]);
						self.vocabState = {};
						self.reader = new pundit.AnnotationReader({
							debug: self.opts.debug
						});
						self.reader.onJsonpVocabLoaded(function (_888) {
							self.vocabState[_888] = true;
							for (var i in self.vocabState) {
								if (self.vocabState[i] === false) {
									return false;
								}
							}
							self.fireOnVocabsLoaded();
						});
						self.initContextualMenu();
						self.initVocabs();
						self.initBehaviors();
						_PUNDIT.init.onInitDone(function () {
							self.selectFirstTab();
						});
						self.log("VocabSelector up and running");
					},
					initJsonpVocab: function (v) {
						var self = this,
								len = 0;
						if ("items" in v && "type" in v && "identifier" in v && "label" in v) {
							return self._initLegacyJsonpVocab(v);
						}
						if (typeof (v.result) === "undefined" || typeof (v.error_code) === "undefined" || typeof (v.result) === "undefined" || typeof (v.result.vocab_type) === "undefined") {
							self.log("ERROR: malformed vocabulary in korbo format?");
							return;
						}
						if (parseInt(v.error_code, 10) !== 200) {
							self.log("ERROR: Vocab provider error. Code " + v.error_code + ": " + v.error_message);
							return;
						}
						v.result = self._prepareTreeJsonp(v.result);
						if (v.result.vocab_type === "subjects") {
							self.initInMemoryTree(v.result);
							self.log("Initialized " + v.result.tab_name + " taxonomy from json: " + v.result.items.length + " items.");
						} else {
							if (v.result.vocab_type === "predicates") {
								self.processRelations(v.result);
								self.log("Initialized " + v.result.tab_name + " relations from json: " + v.result.items.length + " items.");
							} else {
								self.log("ERROR: vocab_type wrong? " + v.result.vocab_type);
								return;
							}
						}
						if (v.result.vocab_type !== "predicates") {
							self.initBehaviorsForVocab(v.result.name);
							_4.behavior.apply();
							if (self.opts.sortVocabolaries) {
								self.sortVocabTree(v.result.name);
							}
						}
					},
					_prepareTreeJsonp: function (tree) {
						var self = this,
								_889 = tree.vocab_type === "predicates";
						if (!_889) {
							tree.label = "label";
							tree.identifier = "value";
							tree.name = tree.vocab_id;
							tree.tab_name = tree.vocab_label;
						}
						tree.query_for_root = {
							"nodetype": ns.pundit_VocabCategory
						};
						if (self.opts.sortVocabolaries) {
							tree.items = tree.items.sort(function (a, b) {
								var v1 = a.label,
										v2 = b.label;
								if (v1 == v2) {
									return 0;
								}
								if (v1 > v2) {
									return 1;
								}
								if (v1 < v2) {
									return -1;
								}
							});
						}
						for (var i = tree.items.length; i--;) {
							if (typeof (tree.items[i]["is_root_node"]) !== "undefined" && tree.items[i]["is_root_node"]) {
								self.log("Found a root node for " + tree.vocab_id + ": " + tree.items[i]["label"]);
								tree.query_for_root = {
									"is_root_node": true
								};
							}
							if (_889) {
								tree.items[i]["type"] = ["predicate"];
								if (typeof (tree.items[i]["domain"]) === "undefined") {
									self.log("WARNING: Predicate with no domain?" + tree.items[i]["label"]);
									tree.items[i]["domain"] = [];
								}
								if (typeof (tree.items[i]["range"]) === "undefined") {
									self.log("WARNING: Predicate with no range?" + tree.items[i]["label"]);
									tree.items[i]["range"] = [];
								}
								if (typeof (tree.items[i]["rdftype"]) === "undefined") {
									self.log("WARNING: Importing predicate with no RDF type: " + tree.items[i]["label"]);
									tree.items[i]["rdftype"] = [_PUNDIT.ns.rdf_type];
								}
								if (tree.items[i]["nodetype"] === "container") {
									self.log("WARNING: skipping container node inside predicates: " + tree.items[i]["label"]);
									tree.items[i]["rdftype"] = [];
									tree.items[i]["type"] = [];
								}
							} else {
								tree.items[i]["type"] = ["subject"];
								if (typeof (tree.items[i]["rdftype"]) === "undefined") {
									self.log("WARNING: Importing item with no RDF type: " + tree.items[i]["label"]);
									tree.items[i]["rdftype"] = [];
								}
								if (typeof (tree.items[i]["children"]) === "object" && tree.items[i]["children"].length === 0) {
									delete tree.items[i]["children"];
								}
								if (tree.items[i]["nodetype"] === "container") {
									tree.items[i]["nodetype"] = ns.pundit_VocabCategory;
									delete tree.items[i]["rdftype"];
									delete tree.items[i]["type"];
								}
							}
						}
						return tree;
					},
					_initLegacyJsonpVocab: function (v) {
						var self = this;
						if (typeof (v.items) !== "undefined") {
							len = v.items.length;
						} else {
							self.log("ERROR: 0-length vocabulary received?");
							return;
						}
						if (typeof (v.type) === "undefined") {
							self.log("ERROR: Vocabulary with no type received.");
							return;
						}
						if (v.type === "taxonomy") {
							self.initInMemoryTree(v);
							self.log("LEGACY VOCAB Initialized " + v.name + " taxonomy from jsonp loaded file with " + len + " items.");
						} else {
							if (v.type === "relations") {
								self.processRelations(v);
								self.log("LEGACY VOCAB Initialized " + v.name + " relations from jsonp loaded file with " + len + " items.");
							}
						}
						self.initBehaviorsForVocab(v.name);
						_4.behavior.apply();
					},
					initVocabs: function () {
						var self = this,
								_88a = _PUNDIT.config.vocabularies;
						for (var i = _88a.length; i--;) {
							self.vocabState[_88a[i]] = false;
							self.reader.getVocabularyFromJsonp(_88a[i]);
							self.log("Initializing vocab " + _88a[i]);
						}
						if (_PUNDIT.config.useBasicRelations) {
							self.log("Loading basic vocabolary");
							self.initJsonpVocab(_PUNDIT.config.basicRelations);
						}
					},
					initContextualMenu: function (_88b) {
						var self = this;
						cMenu.addAction({
							type: ["vocabItem"],
							name: "addVocabToMyItems",
							label: "Add to My Items",
							showIf: function (item) {
								return !semlibMyItems.uriInItems(item.value);
							},
							onclick: function (item) {
								if (!semlibItems.uriInItems(item.value)) {
									semlibItems.addItem(item);
								}
								semlibMyItems.addItem(item, true);
								return true;
							}
						});
						cMenu.addAction({
							type: ["vocabItem"],
							name: "removeVocabFromMyItems",
							label: "Remove from My Items",
							showIf: function (item) {
								return semlibMyItems.uriInItems(item.value);
							},
							onclick: function (item) {
								semlibMyItems.removeItemFromUri(item.value);
								return true;
							}
						});
						cMenu.addAction({
							type: ["vocabItem"],
							name: "openVocabWebPage",
							label: "Open Web Page",
							showIf: function (xp) {
								return true;
							},
							onclick: function (item) {
								window.open(item.value, "SemLibOpenedWebPage");
								return true;
							}
						});
						_4.behavior.apply();
					},
					initInMemoryTree: function (voc) {
						var self = this;
						self.vocabs[voc.name] = {};
						self.vocabs[voc.name].label = voc.tab_name;
						_4.query("#pundit-vocabs-container ul.pundit-item-filter-list").append("<li id=\"" + voc.name + "VocabFilter\">" + voc.tab_name + "</li>");
						_4.connect(_4.byId(voc.name + "VocabFilter"), "onclick", function () {
							self.showVocabByName(voc.name);
						});
						_4.query("#pundit-vocabs-container div.pundit-tab-content").append("<div id='" + voc.name + "VocabPanel' class='semlib-panel semlib-vocab'><div id='" + voc.name + "VocabTreePanel'></div><div>");
						self.vocabs[voc.name].store = new _4.data.ItemFileReadStore({
							data: voc
						});
						self.vocabs[voc.name].treeModel = new _5.tree.ForestStoreModel({
							store: self.vocabs[voc.name].store,
							query: voc.query_for_root,
							rootId: "root",
							rootLabel: "Things",
							pasteItem: function () {
							},
							childrenAttrs: ["children"]
						});
						self.vocabs[voc.name].tree = _5.Tree({
							onClick: function (x, y) {
							},
							onMouseOver: function (e) {
								var _88c;
								if (_4.hasClass(e.target, "dijitTreeLabel")) {
									self.getItemFromStore(self.vocabs[voc.name].store, _4.query(e.target).html());
									_88c = self.getItemFromLabel(self.vocabs[voc.name].store, _4.query(e.target).html());
									if (typeof (_88c) !== "undefined") {
										previewer.show(_88c.value[0]);
									}
									return;
								}
							},
							onMouseDown: function (e) {
								var _88d, _88e, _88f = e.target;
								while (!_4.hasClass(_4.query(_88f)[0], "dijitTreeRow")) {
									_88f = _4.query(_88f).parent()[0];
								}
								var _88e = _4.query(_88f).children("span").children("span").html();
								if (typeof _88e !== "undefined") {
									_88d = self.getItemFromLabel(self.vocabs[voc.name].store, _88e);
									self.vocabs[voc.name].dndTree.selectNone();
									if (typeof (_88d) !== "undefined") {
										self.selectTreeNodeById(self.vocabs[voc.name].tree, _88d.value[0]);
									}
								}
							},
							model: self.vocabs[voc.name].treeModel,
							getIconClass: function (item, _890) {
								return (!item || typeof (item.type) === "undefined") ? (_890 ? "dijitFolderOpened" : "dijitFolderClosed") : "pundit-vocabs-icon";
							}
						}, voc.name + "VocabTreePanel");
						self.vocabs[voc.name].dndTree = new _5.tree.dndSource(self.vocabs[voc.name].tree, {
							copyOnly: true,
							dragThreshold: 10,
							semlibTree: true
						});
						self.vocabs[voc.name].dndTree.checkAcceptance = function () {
							return false;
						};
						_4.behavior.apply();
						self.initTreeItemsPreview(self.vocabs[voc.name].store);
					},
					sortVocabTree: function (name) {
						var self = this,
								_891 = [self.vocabs[name].treeModel.root],
								node;
						while (node = _891.pop()) {
							var len = (typeof (node.children) !== "undefined") ? node.children.length : 0;
							if (len > 0) {
								for (var l = len; l--;) {
									_891.push(node.children[l]);
								}
								node.children.sort(function (a, b) {
									var v1 = a.label[0],
											v2 = b.label[0];
									if (v1 == v2) {
										return 0;
									}
									if (v1 > v2) {
										return 1;
									}
									if (v1 < v2) {
										return -1;
									}
								});
							}
						}
						self.vocabs[name].tree._itemNodesMap = {};
						if (self.vocabs[name].tree.rootNode) {
							self.vocabs[name].tree.rootNode.destroyRecursive();
						}
						self.vocabs[name].tree.model.root.children = null;
						self.vocabs[name].tree.rootNode.state = "UNCHECKED";
						self.vocabs[name].tree._load();
					},
					initTreeItemsPreview: function (_892) {
						var self = this,
								_893 = _892._arrayOfAllItems,
								item = {};
						for (var i = _893.length; i--;) {
							if ((typeof (_893[i].type) !== "undefined") && (typeof (_893[i].rdftype) !== "undefined")) {
								item = {
									description: _893[i].description[0],
									label: _893[i].label[0],
									rdftype: _893[i].rdftype,
									type: _893[i].type,
									value: _893[i].value[0]
								};
								if (typeof (_893[i].image) !== "undefined") {
									item.image = _893[i].image[0];
								}
								item.rdfData = semlibItems.createBucketForVocabItem(item).bucket;
								previewer.buildPreviewForItem(item);
							}
						}
					},
					displayMoreInfoForItem: function (item) {
						var self = this,
								_894 = item.description[0],
								_895 = null,
								tip = "<h3>" + item.name + " :</h3>";
						if (typeof (item.image) !== "undefined") {
							tip += "<img " + "src='" + item.image + "'/></br>";
						}
						if (_894.length > 250) {
							var i = 250;
							while (_894[i] != " ") {
								i = i - 1;
							}
							_894 = _894.substring(0, i) + "...";
							_895 = _4.create("a");
							_4.addClass(_895, "collapsed");
							_4.html.set(_895, "[More Info...]");
							_4.attr(_895, "href", "javascript:void(0)");
							_4.connect(_895, "onclick", function (evt) {
								self.toggleComment(evt.target, item.description[0], _894);
							});
							tip += "<span id='commentSpan'>" + _894 + "</span></br></br>";
						} else {
							tip += "<span id='commentSpan'>" + _894 + "</span></br></br>";
						}
						tip += "<span>Type: </span><span id='akaInfo'>" + item.type + "</span></br></br>";
						if ("comment" in item) {
							_4.query("#vocabMoreInfo").html(tip);
						}
						if ((typeof (_895) !== "undefined") && (_895 !== null)) {
							_4.place(_895, _4.byId("commentSpan"), "after");
						}
					},
					toggleComment: function (_896, text, _897) {
						if (_4.hasClass(_896, "collapsed")) {
							_4.html.set(_896, "[Collapse]");
							_4.html.set(_4.byId(commentSpan), text);
							_4.removeClass(_896, "collapsed");
							_4.addClass(_896, "expanded");
						} else {
							_4.html.set(_896, "[More Info...]");
							_4.html.set(_4.byId(commentSpan), _897);
							_4.removeClass(_896, "expanded");
							_4.addClass(_896, "collapsed");
						}
					},
					initBehaviorsForVocab: function (name) {
						var self = this;
						_4.behavior._behaviors["#" + name + "VocabPanel img.pundit-vocabs-icon"] = [
							{
								"onclick": [(function (_898) {
									return function (e) {
										var _899 = _4.query(e.target).parent().children("span").html(),
												_89a = self.getItemFromLabel(self.vocabs[name].store, _899),
												item = self.createItemFromVocabItem(_89a);
										cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, item, "vocabItem");
									};
								})(name)]
							}
						];
					},
					initBehaviors: function () {
						var self = this;
						_4.subscribe("/dnd/start", function (_89b, _89c, copy, _89d) {
							var _89e = false,
									_89f;
							for (var i in self.vocabs) {
								if (_89b === self.vocabs[i].dndTree) {
									_89e = true;
									_89f = self.vocabs[i].store;
									break;
								}
							}
							if (_89e) {
								var n = _4.query("#" + _89c[0].id + " div span img")[0];
								_4.forEach(_4.query("table.dojoDndAvatar .dijitTreeContainer"), function (item) {
									_4.destroy(item);
								});
								if (_4.hasClass(n, "dijitFolderOpened") || _4.hasClass(n, "dijitFolderClosed")) {
									setTimeout(function () {
										_4.publish("/dnd/cancel");
										_4.dnd._manager.stopDrag();
									}, 0);
									return;
								}
								for (var i = _89c.length - 1; i >= 0; i--) {
									self.getItemFromStore(_89f, _89b.getItem(_89c[i].id).data.label);
								}
							}
						});
					},
					getItemFromStore: function (_8a0, s) {
						var self = this;
						_8a0.fetch({
							query: {
								label: s
							},
							onComplete: function (i) {
								if (i.length > 0) {
									var item = self.createItemFromVocabItem(i[0]);
									self.draggedItem = item;
								}
							},
							onError: function () {
							}
						});
					},
					getItemFromLabel: function (_8a1, _8a2) {
						var self = this,
								_8a3 = _8a1._arrayOfAllItems,
								item = {};
						for (var i = _8a3.length; i--;) {
							if (_8a3[i].label[0] === _8a2) {
								return _8a3[i];
							}
						}
					},
					processRelations: function (g) {
						var self = this,
								_8a4 = g.items;
						self.log("Imported relations: " + g.name + ": " + g.description);
						for (var i = _8a4.length; i--;) {
							_8a4[i].rdfData = semlibItems.createBucketForPredicate(_8a4[i]).bucket;
							previewer.buildPreviewForItem(_8a4[i]);
							if (!semlibItems.uriInItems(_8a4[i].value)) {
								semlibItems.addItem(_8a4[i]);
							}
						}
					},
					selectFirstTab: function () {
						if (_4.query("#pundit-vocabs-container div.pundit-tab-content div.semlib-panel.semlib-selected").length === 0) {
							_4.query("#pundit-vocabs-container div.pundit-tab-content div.semlib-panel:first-child").addClass("semlib-selected");
							_4.query("#pundit-vocabs-header li:first-child").addClass("pundit-selected");
						}
					},
					showVocabByName: function (name) {
						var self = this;
						_4.query("#pundit-vocabs-container div.pundit-tab-content div.semlib-panel").forEach(function (item) {
							_4.removeClass(item, "semlib-selected");
						});
						_4.addClass(name + "VocabPanel", "semlib-selected");
						_4.query("#pundit-vocabs-header li").forEach(function (item) {
							_4.removeClass(item, "pundit-selected");
						});
						_4.addClass(name + "VocabFilter", "pundit-selected");
					},
					getItemsForTerm: function (term, _8a5) {
						var self = this,
								_8a6 = [],
								_8a7 = [];
						for (var i in self.vocabs) {
							_8a7 = self.getItemsForTermInVocab(term, i, _8a5);
							for (var j = _8a7.length; j--;) {
								if (!self.isItemInArrayByUri(_8a6, _8a7[j])) {
									_8a6.push(_8a7[j]);
								}
							}
						}
						return _8a6;
					},
					getItemsForTermInVocab: function (term, _8a8, _8a9) {
						var self = this,
								_8aa = [],
								_8ab = self.vocabs[_8a8].store._arrayOfAllItems;
						for (var i = _8ab.length - 1; i >= 0; i--) {
							if (typeof _8ab[i].type === "undefined") {
								continue;
							}
							if (_8ab[i].label[0].toLowerCase().indexOf(term.toLowerCase()) !== -1) {
								if (!self.isItemInArrayByUri(_8aa, _8ab[i].value[0])) {
									_8aa.push(self.createItemFromVocabItem(_8ab[i]));
								}
							}
						}
						if ((typeof _8a9 === "undefined") || (_8a9.length === 0)) {
							return _8aa;
						} else {
							return semlibItems.filterItemsByRdftype(_8aa, _8a9);
						}
					},
					createItemFromVocabItem: function (i) {
						var item = {
							description: i.description[0],
							label: i.label[0],
							type: i.type,
							rdftype: i.rdftype,
							value: i.value[0]
						};
						if (typeof (i.image) !== "undefined") {
							item.image = i.image[0];
						}
						item.rdfData = semlibItems.createBucketForVocabItem(item).bucket;
						return item;
					},
					isItemInArrayByUri: function (_8ac, uri) {
						for (var i = _8ac.length - 1; i >= 0; i--) {
							if (_8ac[i].value === uri) {
								return true;
							}
						}
						return false;
					},
					mergeItemsByUri: function (a1, a2) {
						var self = this;
						for (var i = a2.length - 1; i >= 0; i--) {
							if (!self.isItemInArrayByUri(a1, a2[i].value)) {
								a1.push(a2[i]);
							}
						}
						return a1;
					},
					recursiveHunt: function (_8ad, _8ae, _8af, item) {
						var self = this;
						var id = _8ae.getIdentity(item);
						_8af.push(id);
						if (id == _8ad) {
							return _8af;
						}
						if (typeof item.children === "undefined") {
							return undefined;
						}
						for (var idx = item.children.length; idx--;) {
							var _8b0 = _8af.slice(0);
							var r = self.recursiveHunt(_8ad, _8ae, _8b0, item.children[idx]);
							if (r) {
								return r;
							}
						}
						return undefined;
					},
					selectTreeNodeById: function (tree, _8b1) {
						var self = this;
						var _8b2 = [];
						var _8b3 = self.recursiveHunt(_8b1, tree.model, _8b2, tree.model.root);
						if (_8b3 && _8b3.length > 0) {
							tree.set("path", _8b3);
						}
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.DBPediaSelector"]) {
				_4._hasResource["pundit.selectors.DBPediaSelector"] = true;
				_4.provide("pundit.selectors.DBPediaSelector");
				_4.declare("pundit.selectors.DBPediaSelector", pundit.selectors.SelectorBase, {
					opts: {
						limit: 30,
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						dbpediaKeywordSearchURL: "http://lookup.dbpedia.org/api/search.asmx/KeywordSearch",
						layouts: ["list", "tile"]
					},
					constructor: function (_8b4) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func, _8b5) {
						var self = this,
								_8b6 = self.opts.dbpediaKeywordSearchURL + "?QueryString=" + encodeURIComponent(term) + "&MaxHits=" + self.opts.limit,
								_8b7 = ns.annotationServerVocabProxy + "?url=" + encodeURIComponent(_8b6),
								args;
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						if (typeof _8b5 !== "undefined") {
							self.requests[term].ef = _8b5;
						}
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("DBPedia Lookup query: " + term);
						args = {
							url: _8b7,
							failOk: true,
							load: function (data) {
								self._getItemsFromDBPediaResults(data, term);
							},
							error: function (_8b8) {
								if (_8b8.dojoType === "cancel") {
									return;
								}
								if (typeof self.requests[term].ef !== "undefined") {
									self.requests[term].ef();
								}
								self.log("Lookup Error: " + _8b8);
								_PUNDIT.loadingBox.setJobKo(self.requests[term].jobId);
								return false;
							}
						};
						requester.xGet(args);
					},
					_getItemsFromDBPediaResults: function (r, term) {
						var self = this,
								_8b9 = _6.xml.DomParser.parse(r),
								_8ba = _8b9.documentElement.getElementsByTagName("Result");
						self.requests[term].len = _8ba.length;
						if (_8ba.length === 0) {
							self._itemRequestDone(term);
							return;
						}
						for (var i = _8ba.length; i--;) {
							var item = {};
							item.type = ["subject"];
							item.value = _8ba[i].childrenByName("URI")[0].childNodes[0].nodeValue;
							item.label = _8ba[i].childrenByName("Label")[0].childNodes[0].nodeValue;
							try {
								item.description = _8ba[i].childrenByName("Description")[0].childNodes[0].nodeValue;
							} catch (e) {
							}
							var _8bb = _8ba[i].childrenByName("Classes")[0].childrenByName("Class");
							item.rdftype = [];
							for (var j = _8bb.length; j--;) {
								item.rdftype.push(_8bb[j].childrenByName("URI")[0].childNodes[0].nodeValue);
							}
							if (item.rdftype.length === 0) {
								item.rdftype = [ns.rdfs_resource];
							}
							self.requests[term].items.push(item);
							self._getItemDescription(item, term);
						}
					},
					_getItemDescription: function (item, term) {
						var self = this,
								_8bc, uri = item.value;
						_8bc = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";
						_8bc += "SELECT ?comment, ?depiction, ?label ";
						_8bc += "WHERE {<" + uri + "> rdfs:comment ?comment. ";
						_8bc += "<" + uri + "> rdfs:label ?label. ";
						_8bc += "OPTIONAL { <" + uri + "><http://dbpedia.org/ontology/thumbnail> ?depiction. }";
						_8bc += "FILTER ( lang(?label) = \"en\") ";
						_8bc += "FILTER ( lang(?comment) = \"en\")} ";
						var args = {
							url: ns.annotationServerVocabProxy + "?url=" + encodeURIComponent("http://dbpedia.org/sparql?query=" + encodeURIComponent(_8bc) + "&output=json"),
							handleAs: "json",
							headers: {
								"Accept": "application/sparql-results+json"
							},
							failOk: true,
							id: uri,
							load: function (data) {
								if (data.results.bindings.length > 0) {
									var foo = data.results.bindings[0];
									if (typeof (foo.comment) !== "undefined") {
										item.description = foo.comment.value;
									}
									if (typeof (foo.depiction) !== "undefined") {
										item.image = foo.depiction.value;
									}
								}
								item.rdfData = semlibItems.createBucketForItem(item).bucket;
								self._itemRequestDone(term);
							},
							error: function (_8bd) {
								if (_8bd.dojoType === "cancel") {
									return;
								}
								console.log("GETITEMDESC request error:" + _8bd);
							}
						};
						requester.xGet(args);
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						if (typeof req.canceled !== "undefined") {
							return;
						}
						req.done += 1;
						self.log("query: " + term + ", done: " + req.done + "/" + req.len);
						if (req.done < req.len) {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					},
					cancelRequests: function () {
						var self = this,
								reqs = self.requests;
						for (var i in reqs) {
							reqs[i].len = 0;
							self._itemRequestDone(i);
							reqs[i].canceled = true;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.FreebaseSelector"]) {
				_4._hasResource["pundit.selectors.FreebaseSelector"] = true;
				_4.provide("pundit.selectors.FreebaseSelector");
				_4.declare("pundit.selectors.FreebaseSelector", pundit.selectors.SelectorBase, {
					opts: {
						limit: 30,
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						freebaseSearchURL: "https://www.googleapis.com/freebase/v1/search",
						freebaseSchemaBaseURL: "http://www.freebase.com/schema",
						freebaseImagesBaseURL: "https://usercontent.googleapis.com/freebase/v1/image",
						freebaseTopicURL: "https://www.googleapis.com/freebase/v1/topic",
						freebaseMQLReadURL: "https://www.googleapis.com/freebase/v1/mqlread",
						freebaseItemsBaseURL: "http://www.freebase.com",
						freebaseAPIKey: "AIzaSyCJjAj7Nd2wKsZ8d7XQ9ZvUwN5SF0tZBsE",
						layouts: ["list", "tile"]
					},
					constructor: function (_8be) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func, _8bf) {
						var self = this;
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						if (typeof (_8bf) !== "undefined") {
							self.requests[term].ef = _8bf;
						}
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("Freebase query: " + term);
						_4.io.script.get({
							callbackParamName: "callback",
							url: self.opts.freebaseSearchURL,
							content: {
								key: self.opts.freebaseAPIKey,
								query: term,
								limit: self.opts.limit
							},
							load: function (r) {
								self.requests[term].len = r.result.length;
								if (r.hits === 0) {
									_PUNDIT.loadingBox.setJobOk(self.requests[term].jobId);
									self._itemRequestDone(term);
								} else {
									self._getItemsFromFreebaseResults(r, term);
								}
							},
							error: function (_8c0, _8c1) {
								self.log(self.name + " getItemsForTerm got an error :(");
								if (typeof self.requests[term].ef !== "undefined") {
									self.requests[term].ef();
								}
								func([]);
								_PUNDIT.loadingBox.setJobKo(req.jobId);
							}
						});
					},
					_getItemsFromFreebaseResults: function (r, term) {
						var self = this,
								len, ar;
						if (typeof (self.requests[term]) === "undefined") {
							return;
						}
						ar = r.result;
						len = ar.length;
						self.log("Getting details for " + len + "items");
						for (var i = 0; i < len; i++) {
							var item = {
								type: ["subject"],
								label: ar[i].name,
								mid: ar[i].mid,
								freebaseId: ar[i].id,
								image: self.opts.freebaseImagesBaseURL + ar[i].mid,
								description: -1,
								value: -1
							};
							self.requests[term].items.push(item);
							self._getItemDetails(item, term);
						}
					},
					_getItemDetails: function (item, term) {
						var self = this;
						_4.io.script.get({
							callbackParamName: "callback",
							url: self.opts.freebaseMQLReadURL,
							content: {
								query: _4.toJson({
									"id": null,
									"mid": item.mid,
									"type": [
										{}
									],
								}),
								limit: self.opts.limit,
								key: self.opts.freebaseAPIKey
							},
							load: function (r) {
								self.log("MQL read for " + item.mid + " done");
								item.value = self.opts.freebaseItemsBaseURL + r.result.mid;
								item.typeLabels = [];
								item.rdftype = [];
								for (var l = r.result.type.length; l--;) {
									var o = r.result.type[l],
											uri = self.opts.freebaseSchemaBaseURL + o.id;
									item.rdftype.push(uri);
									item.typeLabels.push({
										uri: uri,
										label: o.name
									});
								}
								if (item.description !== -1) {
									self.log("MQL was last, calling itemRequestDone for item " + item.label);
									item.rdfData = self._finalizeBucket(item);
									self._itemRequestDone(term);
								}
							}
						});
						_4.io.script.get({
							callbackParamName: "callback",
							url: self.opts.freebaseTopicURL + item.mid,
							content: {
								key: self.opts.freebaseAPIKey,
								filter: "/common/topic/description"
							},
							failOk: false,
							load: function (r) {
								self.log("TOPIC description for " + item.mid + " done");
								if (typeof (r.property) !== "undefined" && r.property["/common/topic/description"].values.length > 0) {
									item.description = r.property["/common/topic/description"].values[0].value;
								} else {
									item.description = item.label;
								}
								if (item.value !== -1) {
									self.log("TOPIC was last, calling itemRequestDone for item " + item.label);
									item.rdfData = self._finalizeBucket(item);
									self._itemRequestDone(term);
								}
							},
							error: function (e) {
								item.description = item.label;
								if (item.value !== -1) {
									item.rdfData = self._finalizeBucket(item);
									self._itemRequestDone(term);
								}
								return false;
							}
						});
					},
					_finalizeBucket: function (item) {
						var b = semlibItems.createBucketForItem(item);
						for (var l = item.typeLabels.length; l--;) {
							b.updateTripleObject(item.typeLabels[l].uri, ns.items.label, item.typeLabels[l].label, "literal");
						}
						return b.bucket;
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						if (typeof (req.canceled) !== "undefined") {
							self.log("Request was canceled, returning");
							return;
						}
						req.done += 1;
						self.log("Query: " + term + ", done: " + req.done + "/" + req.len);
						if (req.done < req.len) {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					},
					cancelRequests: function () {
						var self = this,
								reqs = self.requests;
						for (var i in reqs) {
							reqs[i].len = 0;
							self._itemRequestDone(i);
							reqs[i].canceled = true;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.KorboBasketSelector"]) {
				_4._hasResource["pundit.selectors.KorboBasketSelector"] = true;
				_4.provide("pundit.selectors.KorboBasketSelector");
				_4.declare("pundit.selectors.KorboBasketSelector", pundit.selectors.SelectorBase, {
					opts: {
						limit: 30,
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						korboBasketReconURL: "http://manager.korbo.org/api.php/basket/reconcile/",
						korboBasketMetadataURL: "http://manager.korbo.org/",
						korboItemsBaseURL: "http://purl.org/net7/korbo",
						korboSchemaBaseURL: "http://purl.org/net7/korbo/type/",
						baskets: [16],
						layouts: ["pundit-view-list", "pundit-view-tile"]
					},
					constructor: function (_8c2) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func) {
						var self = this;
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("Korbo query: " + term);
						_4.io.script.get({
							callbackParamName: "jsonp",
							url: self.opts.korboBasketReconURL + self.opts.baskets[0],
							content: {
								query: _4.toJson({
									query: term
								})
							},
							load: function (r) {
								self.requests[term].len = r.result.length;
								self.log("Loaded search term " + term + ": " + self.requests[term].len + " items");
								if (self.requests[term].len === 0) {
									_PUNDIT.loadingBox.setJobOk(self.requests[term].jobId);
									self._itemRequestDone(term);
								} else {
									self._getItemsFromKorboResults(r.result, term);
								}
							},
							error: function (_8c3, _8c4) {
								self.log(self.name + " getItemsForTerm got an error :(");
								console.log("ACF korbo ERRORz", _8c3, _8c4);
								_PUNDIT.loadingBox.setJobKo(req.jobId);
								self.setLoading(false);
								func([]);
							}
						});
					},
					_getItemsFromKorboResults: function (r, term) {
						var self = this,
								len = r.length,
								_8c5 = [];
						for (var i = 0; i < len; i++) {
							var _8c6 = r[i],
									item;
							item = {
								type: ["subject"],
								label: _8c6.name,
								value: _8c6.resource_url
							};
							self._getItemMetadata(item, term);
							self.requests[term].items.push(item);
							_8c5.push(item);
						}
					},
					_getItemMetadata: function (item, term) {
						var self = this;
						_4.io.script.get({
							callbackParamName: "jsonp",
							url: self.opts.korboBasketMetadataURL + self.opts.baskets[0],
							content: {
								url: item.value
							},
							load: function (r) {
								var o = r.result,
										_8c7 = [];
								self.log("Loading metadata for item " + item.value);
								if ("image" in o) {
									item.image = o.image;
								}
								if ("description" in o) {
									item.description = o.description;
								}
								if (("rdftype" in o) && ("length" in o.rdftype)) {
									for (var j = o.rdftype.length; j--;) {
										if (typeof (o.rdftype[j]) === "string") {
											_8c7.push(o.rdftype[j]);
										} else {
											self.log("ERROR: Weird type is weird? " + typeof (o.rdftype[j]) + ": " + o.rdftype[j]);
										}
									}
								}
								item.rdftype = _8c7;
								item.rdfData = semlibItems.createBucketForItem(item).bucket;
								self._itemRequestDone(term);
							}
						});
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						if (typeof (req.canceled) !== "undefined") {
							return;
						}
						req.done += 1;
						self.log("Query: " + term + ", done: " + req.done + "/" + req.len);
						if (req.done < req.len) {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					},
					cancelRequests: function () {
						var self = this,
								reqs = self.requests;
						for (var i in reqs) {
							reqs[i].len = 0;
							self._itemRequestDone(i);
							reqs[i].canceled = true;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.WordnetSelector"]) {
				_4._hasResource["pundit.selectors.WordnetSelector"] = true;
				_4.provide("pundit.selectors.WordnetSelector");
				_4.declare("pundit.selectors.WordnetSelector", pundit.selectors.SelectorBase, {
					opts: {
						limit: 30,
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						layouts: ["list", "tile"]
					},
					constructor: function (_8c8) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func, _8c9, _8ca) {
						var self = this;
						if (typeof (self.limit) === "undefined") {
							_8ca = 10;
						} else {
							_8ca = self.limit;
						}
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						if (typeof _8c9 !== "undefined") {
							self.requests[term].ef = _8c9;
						}
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("Wordnet query: " + term);
						var _8cb = "PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ";
						_8cb += "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ";
						_8cb += "PREFIX owl:  <http://www.w3.org/2002/07/owl#> ";
						_8cb += "PREFIX wordnet: <http://www.w3.org/2006/03/wn/wn20/schema/> ";
						_8cb += "SELECT ?uri ?s, ?label, ?description ";
						_8cb += "WHERE { ";
						_8cb += "?s rdfs:label ?label ";
						_8cb += "filter regex(?label, \"^" + term + "\"). ";
						_8cb += "?s rdf:type wordnet:NounSynset. ";
						_8cb += "?s owl:sameAs ?uri. ";
						_8cb += "?s wordnet:gloss ?description} LIMIT " + _8ca;
						var args = {
							url: ns.annotationServerVocabProxy + "?url=" + encodeURIComponent("http://wordnet.rkbexplorer.com/sparql/?format=json&query=" + encodeURIComponent(_8cb)),
							handleAs: "json",
							headers: {
								"Accept": "application/sparql-results+json"
							},
							load: function (r) {
								r = r.results.bindings;
								self.requests[term].len = r.length;
								if (r.length === 0) {
									self._itemRequestDone(term);
									return;
								}
								for (var i = r.length; i--;) {
									var item = {};
									item.type = ["subject"];
									item.value = r[i].uri.value;
									item.label = r[i].label.value;
									try {
										item.description = r[i].description.value;
									} catch (e) {
									}
									item.rdftype = [ns.rdfs_resource];
									item.rdfData = semlibItems.createBucketForItem(item).bucket;
									self.requests[term].items.push(item);
								}
								self._itemRequestDone(term);
							},
							error: function (_8cc) {
								self.log(_8cc);
								func([]);
								_PUNDIT.loadingBox.setJobKo(self.requests[term].jobId);
								if (typeof self.requests[term].ef !== "undefined") {
									self.requests[term].ef();
								}
							}
						};
						var _8cd = requester.xGet(args);
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						if (typeof req.canceled !== "undefined") {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					},
					cancelRequests: function () {
						var self = this,
								reqs = self.requests;
						for (var i in reqs) {
							reqs[i].len = 0;
							self._itemRequestDone(i);
							reqs[i].canceled = true;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.EuropeanaSelector"]) {
				_4._hasResource["pundit.selectors.EuropeanaSelector"] = true;
				_4.provide("pundit.selectors.EuropeanaSelector");
				_4.declare("pundit.selectors.EuropeanaSelector", pundit.selectors.SelectorBase, {
					opts: {
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						europeanaKey: "DGEQTCYXDE",
						europeanaSearchURL: "http://api.europeana.eu/api/opensearch.json",
						europeanaSchemaBaseURL: "http://thepund.it/fake-namespace/europeana/",
						europeanaPagesToQuery: 8,
						layouts: ["list", "tile"]
					},
					constructor: function (_8ce) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func, _8cf) {
						var self = this;
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						if (typeof _8cf !== "undefined") {
							self.requests[term].ef = _8cf;
						}
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("Europeana query: " + term);
						for (var j = 0; j < self.opts.europeanaPagesToQuery; j++) {
							_4.io.script.get({
								callbackParamName: "callback",
								url: self.opts.europeanaSearchURL,
								content: {
									"searchTerms": term,
									"wskey": self.opts.europeanaKey,
									"startPage": j
								},
								load: function (r) {
									self.requests[term].len = r["items"].length;
									if (r["items"].length === 0) {
										_PUNDIT.loadingBox.setJobOk(self.requests[term].jobId);
										self._itemRequestDone(term);
									} else {
										self._getItemsFromEuropeanaResults(r, term);
									}
								},
								error: function (_8d0, _8d1) {
									self.log(self.name + " getItemsForTerm got an error :(");
									if (typeof self.requests[term].ef !== "undefined") {
										self.requests[term].ef();
									}
									func([]);
									_PUNDIT.loadingBox.setJobKo(req.jobId);
								}
							});
						}
					},
					_getItemsFromEuropeanaResults: function (r, term) {
						var self = this,
								len = r.items.length;
						console.log("r 1: ", r, r.items);
						for (var i = 0; i < len; i++) {
							var _8d2 = [],
									item;
							item = {
								type: ["subject"],
								rdftype: [],
								label: "",
								value: "",
								description: "",
								altLabel: "",
								image: ""
							};
							self.requests[term].items.push(item);
							self._getItemDescription(item, term, r.items[i].link);
						}
					},
					_getItemDescription: function (item, term, URL) {
						var self = this;
						_4.io.script.get({
							callbackParamName: "callback",
							url: URL,
							content: {},
							load: function (r) {
								item.value = r["europeana:uri"];
								item.label = r["dc:title"] || r["dcterms:alternative"];
								if (typeof (r["dc:description"]) === "string") {
									item.description = r["dc:description"];
								} else {
									if (typeof (r["dc:description"]) === "object") {
										item.description = r["dc:description"].join("<br/>");
									} else {
										item.description = "No desc :(";
									}
								}
								item.altLabel = "From: " + r["europeana:dataProvider"];
								if (r["europeana:object"]) {
									item.image = r["europeana:object"];
								} else {
									if (r["europeana:isShownAt"]) {
										item.image = r["europeana:isShownAt"];
									}
								}
								item.rdftype = [];
								var _8d3 = [],
										_8d4;
								if (typeof (r["dc:type"]) === "string") {
									_8d4 = self.opts.europeanaSchemaBaseURL + encodeURI(r["dc:type"]);
									item.rdftype.push(_8d4);
									_8d3.push({
										uri: _8d4,
										label: r["dc:type"]
									});
								} else {
									if (typeof (r["dc:type"].length) !== "undefined" && r["dc:type"].length > 0) {
										for (var t = r["dc:type"].length; t--;) {
											_8d4 = self.opts.europeanaSchemaBaseURL + encodeURI(r["dc:type"][t]);
											item.rdftype.push(_8d4);
											_8d3.push({
												uri: _8d4,
												label: r["dc:type"][t]
											});
										}
									}
								}
								var _8d5 = semlibItems.createBucketForItem(item);
								for (var l = _8d3.length; l--;) {
									_8d5.updateTripleObject(_8d3[l].uri, ns.items.label, _8d3[l].label, "literal");
								}
								item.rdfData = _8d5.bucket;
								self._itemRequestDone(term);
							}
						});
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						req.done += 1;
						self.log("query: " + term + ", done: " + req.done + "/" + req.len);
						if (req.done < req.len) {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.EuropeanaEDMSelector"]) {
				_4._hasResource["pundit.selectors.EuropeanaEDMSelector"] = true;
				_4.provide("pundit.selectors.EuropeanaEDMSelector");
				_4.declare("pundit.selectors.EuropeanaEDMSelector", pundit.selectors.SelectorBase, {
					opts: {
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						europeanaKey: "RjMQqtwpP",
						europeanaSearchURL: "http://www.europeana.eu/api/v2/search.json?",
						europeanaPortalURL: "http://europeana.eu/portal/record/",
						europeanaPortalFileExt: ".html",
						europeanaSchemaBaseURL: "http://thepund.it/fake-namespace/europeana/",
						limit: 35,
						layouts: ["list", "tile"]
					},
					constructor: function (_8d6) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func, _8d7) {
						var self = this;
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						if (typeof _8d7 !== "undefined") {
							self.requests[term].ef = _8d7;
						}
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("Europeana EDM query: " + term);
						_4.io.script.get({
							callbackParamName: "callback",
							url: self.opts.europeanaSearchURL,
							content: {
								"query": term,
								"wskey": self.opts.europeanaKey,
								"start": 1,
								"rows": self.opts.limit
							},
							load: function (r) {
								self.requests[term].len = r["itemsCount"];
								if (self.requests[term].len === 0) {
									_PUNDIT.loadingBox.setJobOk(self.requests[term].jobId);
									self._itemRequestDone(term);
								} else {
									self._getItemsFromEuropeanaResults(r, term);
								}
							},
							error: function (_8d8, _8d9) {
								self.log(self.name + " getItemsForTerm got an error :(");
								if (typeof self.requests[term].ef !== "undefined") {
									self.requests[term].ef();
								}
								func([]);
								_PUNDIT.loadingBox.setJobKo(req.jobId);
							}
						});
					},
					_getItemsFromEuropeanaResults: function (r, term) {
						var self = this,
								len = r.items.length;
						for (var i = 0; i < len; i++) {
							var _8da = [],
									item;
							item = {
								type: ["subject"],
								rdftype: [],
								label: "",
								value: "",
								description: "",
								altLabel: "",
								image: ""
							};
							self.requests[term].items.push(item);
							self._getItemDescription(item, term, r.items[i].link);
						}
					},
					_getItemDescription: function (item, term, URL) {
						var self = this;
						_4.io.script.get({
							callbackParamName: "callback",
							url: URL,
							content: {},
							load: function (r) {
								item.value = self.opts.europeanaPortalURL + r.object.about + self.opts.europeanaPortalFileExt;
								item.label = r.object.title[0] || "Untitled item";
								if (typeof (r.object.proxies) !== "undefined" && r.object.proxies.length > 0) {
									for (var p = 0; p < r.object.proxies.length; p++) {
										if (typeof (r.object.proxies[p].dcDescription) !== "undefined") {
											item.description = r.object.proxies[p].dcDescription[0];
										} else {
											if (typeof (r.object.proxies[p].dcSubject) !== "undefined" && typeof (r.object.proxies[p].dcSubject.def) !== "undefined") {
												item.description = [];
												for (var s = 0; s < r.object.proxies[p].dcSubject.def.length; s++) {
													item.description.push(r.object.proxies[p].dcSubject.def[s]);
												}
											}
										}
									}
								}
								if (typeof (item.description) === "object") {
									item.description = item.description.join("<br/>");
								}
								self.log("Extracted desc");
								if (typeof (r.object.aggregations) !== "undefined" && r.object.aggregations.length > 0) {
									for (var ag = 0; ag < r.object.aggregations.length; ag++) {
										if (typeof (r.object.aggregations[ag].edmObject) !== "undefined") {
											item.image = r.object.aggregations[ag].edmObject;
										}
									}
								}
								self.log("Extracted image");
								item.rdftype = [];
								var _8db = [],
										_8dc;
								if (typeof (r.object.proxies) !== "undefined" && r.object.proxies.length > 0) {
									var pr = 0;
									if (r.object.proxies[pr].dcType && r.object.proxies[pr].dcType.def.length > 0) {
										for (ind = 0; ind < r.object.proxies[pr].dcType.def.length; ind++) {
											var _8dd = r.object.proxies[pr].dcType.def[ind];
											if (_8dd.match(/^http:*/)) {
												self.log("Found an URI inside dcType: " + _8dd);
											}
											_8dc = self.opts.europeanaSchemaBaseURL + encodeURI(_8dd);
											item.rdftype.push(_8dc);
											_8db.push({
												uri: _8dc,
												label: _8dd
											});
										}
									}
								}
								if (item.rdftype.length === 0) {
									self.log("Ops, " + item.label + " does not have any RDF type. Trying to fix at least one.");
									_8dc = self.opts.europeanaSchemaBaseURL + encodeURI(r.object.type);
									item.rdftype.push(_8dc);
									_8db.push(r.object.type);
								}
								self.log("extracted types");
								var _8de = semlibItems.createBucketForItem(item);
								for (var l = _8db.length; l--;) {
									_8de.updateTripleObject(_8db[l].uri, ns.items.label, _8db[l].label, "literal");
								}
								item.rdfData = _8de.bucket;
								self.log("Done with this item");
								self._itemRequestDone(term);
							},
							error: function () {
								self.log("JSONP And error functions dont get along that well...", arguments);
							}
						});
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						req.done += 1;
						self.log("query: " + term + ", done: " + req.done + "/" + req.len);
						self.log("query: " + term + ", done: " + req.done + "/" + req.len);
						if (req.done < req.len) {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.BibServerSelector"]) {
				_4._hasResource["pundit.selectors.BibServerSelector"] = true;
				_4.provide("pundit.selectors.BibServerSelector");
				_4.declare("pundit.selectors.BibServerSelector", pundit.selectors.SelectorBase, {
					opts: {
						limit: 30,
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						bibServerSearchURL: "http://big.bibsoup.net/search/?",
						bibServerSchemaBaseURL: "http://thepund.it/fake-namespace/bibserver/",
						bibServerItemRDFType: "http://thepund.it/fake-namespace/bibserver/item",
						layouts: ["list", "tile"]
					},
					constructor: function (_8df) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func, _8e0) {
						var self = this;
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						if (typeof _8e0 !== "undefined") {
							self.requests[term].ef = _8e0;
						}
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("BibServer query: " + term);
						_4.io.script.get({
							callbackParamName: "callback",
							url: self.opts.bibServerSearchURL,
							timeout: 10000,
							content: {
								"q": term,
								"format": "json"
							},
							load: function (r) {
								self.requests[term].len = r.length;
								if (r.length === 0) {
									_PUNDIT.loadingBox.setJobOk(self.requests[term].jobId);
									self._itemRequestDone(term);
								} else {
									self._getItemsFromBibServerResults(r, term);
								}
							},
							error: function (_8e1, _8e2) {
								self.log(self.name + " getItemsForTerm got an error :(");
								if (typeof self.requests[term].ef !== "undefined") {
									self.requests[term].ef();
								}
								func([]);
								_PUNDIT.loadingBox.setJobKo(req.jobId);
							}
						});
					},
					_getItemsFromBibServerResults: function (r, term) {
						var self = this,
								len = r.length,
								_8e3;
						for (var i = 0; i < len; i++) {
							var _8e4 = [],
									item, desc;
							desc = "Authors: ";
							for (var a in r[i]["author"]) {
								desc += r[i]["author"][a].name;
							}
							desc += "<br/><br />";
							if (r[i]["journal"]) {
								desc += "Journal: " + r[i]["journal"].name + ", vol. " + r[i]["journal"].volume + "<br />";
							}
							_8e3 = self.opts.bibServerSchemaBaseURL + encodeURI(r[i]["identifier"][0]["type"]) + "/" + encodeURI(r[i]["identifier"][0]["id"]);
							item = {
								type: ["subject"],
								rdftype: [self.opts.bibServerItemRDFType],
								label: r[i]["title"],
								value: _8e3,
								description: desc,
								altLabel: "",
								image: ""
							};
							self.requests[term].items.push(item);
							item.rdfData = semlibItems.createBucketForItem(item).bucket;
							self._itemRequestDone(term);
						}
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						req.done += 1;
						self.log("query: " + term + ", done: " + req.done + "/" + req.len);
						if (req.done < req.len) {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.DandelionGeoSelector"]) {
				_4._hasResource["pundit.selectors.DandelionGeoSelector"] = true;
				_4.provide("pundit.selectors.DandelionGeoSelector");
				_4.declare("pundit.selectors.DandelionGeoSelector", pundit.selectors.SelectorBase, {
					opts: {
						limit: 30,
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						layouts: ["list", "tile"],
						sortBy: true,
						dandelionBaseURL: "https://dandelion.eu/api/v1/datagem/26/data.json",
						basePOICategory: ["http://www.freebase.com/schema/location/location", "http://dbpedia.org/ontology/Place", "http://schema.org/Place", "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"],
						GeoCategoryLevels: {
							"0": "http://dandelion.eu/ontologies/GEO/v1#Country",
							"1": "http://dandelion.eu/ontologies/GEO/v1#MacroRegion",
							"2": "http://dandelion.eu/ontologies/GEO/v1#Region",
							"3": "http://dandelion.eu/ontologies/GEO/v1#Province",
							"4": "http://dandelion.eu/ontologies/GEO/v1#Municipality"
						}
					},
					constructor: function (_8e5) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func, _8e6, _8e7) {
						var self = this;
						if (typeof (self.limit) === "undefined") {
							_8e7 = 10;
						} else {
							_8e7 = self.limit;
						}
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						if (typeof _8e6 !== "undefined") {
							self.requests[term].ef = _8e6;
						}
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("DandelionGeo query: " + term);
						var args = {
							url: self.opts.dandelionBaseURL,
							callbackParamName: "callback",
							timeout: 2000,
							failOk: true,
							content: {
								"$limit": self.opts.limit,
								"$where": "fulltext(\"" + term + "\")",
								"$order": "localCode"
							},
							load: function (r) {
								self.requests[term].len = r.length;
								if (r.length === 0) {
									self._itemRequestDone(term);
									return;
								}
								for (var i = r.length; i--;) {
									var item = {};
									item.type = ["subject"];
									item.value = r[i].acheneID;
									switch (r[i].level) {
										case 0:
											item.label = r[i].country;
											break;
										case 1:
											item.label = r[i].macroregion;
											break;
										case 2:
											item.label = r[i].region;
											break;
										case 3:
											item.label = r[i].province;
											break;
										default:
											item.label = r[i].municipality;
									}
									item.description = r[i].municipality + "<br/>" + r[i].province + "<br/>" + r[i].region;
									item.rdftype = [self.opts.GeoCategoryLevels[r[i].level]];
									for (var j = self.opts.basePOICategory.length; j--;) {
										item.rdftype.push(self.opts.basePOICategory[j]);
									}
									item.rdfData = semlibItems.createBucketForItem(item).bucket;
									self.requests[term].items.push(item);
								}
								self._itemRequestDone(term);
							},
							error: function (_8e8) {
								self.log(_8e8);
								func([]);
								_PUNDIT.loadingBox.setJobKo(self.requests[term].jobId);
								if (typeof self.requests[term].ef !== "undefined") {
									self.requests[term].ef();
								}
								return false;
							}
						};
						var _8e9 = _4.io.script.get(args);
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						if (typeof req.canceled !== "undefined") {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					},
					cancelRequests: function () {
						var self = this,
								reqs = self.requests;
						for (var i in reqs) {
							reqs[i].len = 0;
							self._itemRequestDone(i);
							reqs[i].canceled = true;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.selectors.DandelionPOISelector"]) {
				_4._hasResource["pundit.selectors.DandelionPOISelector"] = true;
				_4.provide("pundit.selectors.DandelionPOISelector");
				_4.declare("pundit.selectors.DandelionPOISelector", pundit.selectors.SelectorBase, {
					opts: {
						limit: 30,
						keyInputTimerLength: 500,
						keywordMinimumLength: 3,
						layouts: ["list", "tile"],
						dandelionBaseURL: "https://dandelion.eu/api/v1/datagem/25/data.json",
						basePOICategory: ["http://www.freebase.com/schema/location/location", "http://dbpedia.org/ontology/Place", "http://schema.org/Place", "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"]
					},
					constructor: function (_8ea) {
						var self = this;
						self.requests = {};
						self.log("Selector " + self.name + " up and running.");
					},
					getItemsForTerm: function (term, func, _8eb, _8ec) {
						var self = this;
						if (typeof (self.limit) === "undefined") {
							_8ec = 10;
						} else {
							_8ec = self.limit;
						}
						self.requests[term] = {
							f: func,
							items: [],
							done: 0
						};
						if (typeof _8eb !== "undefined") {
							self.requests[term].ef = _8eb;
						}
						self.requests[term].jobId = _PUNDIT.loadingBox.addJob("DandelionPOI query: " + term);
						var args = {
							url: self.opts.dandelionBaseURL,
							callbackParamName: "callback",
							timeout: 2000,
							failOk: true,
							content: {
								"$limit": self.opts.limit,
								"$where": "icontains(name, \"" + term + "\")",
								"$order": "name"
							},
							load: function (r) {
								self.requests[term].len = r.length;
								if (r.length === 0) {
									self._itemRequestDone(term);
									return;
								}
								for (var i = r.length; i--;) {
									var item = {};
									item.type = ["subject"];
									item.value = r[i].acheneID;
									item.label = r[i].name;
									item.description = r[i].municipality + " (" + r[i].province + ")";
									item.rdftype = [r[i].category];
									for (var j = self.opts.basePOICategory.length; j--;) {
										item.rdftype.push(self.opts.basePOICategory[j]);
									}
									item.rdfData = semlibItems.createBucketForItem(item).bucket;
									self.requests[term].items.push(item);
								}
								self._itemRequestDone(term);
							},
							error: function (_8ed) {
								self.log(_8ed);
								func([]);
								_PUNDIT.loadingBox.setJobKo(self.requests[term].jobId);
								if (typeof self.requests[term].ef !== "undefined") {
									self.requests[term].ef();
								}
								return false;
							}
						};
						var _8ee = _4.io.script.get(args);
					},
					_itemRequestDone: function (term) {
						var self = this,
								req = self.requests[term];
						if (typeof req.canceled !== "undefined") {
							return;
						}
						self.log("Done loading items for term " + term + ".. calling the function.");
						req.f(req.items, term);
						_PUNDIT.loadingBox.setJobOk(req.jobId);
					},
					cancelRequests: function () {
						var self = this,
								reqs = self.requests;
						for (var i in reqs) {
							reqs[i].len = 0;
							self._itemRequestDone(i);
							reqs[i].canceled = true;
						}
					}
				});
			}
			if (!_4._hasResource["pundit.ImageFragmentHandler"]) {
				_4._hasResource["pundit.ImageFragmentHandler"] = true;
				_4.provide("pundit.ImageFragmentHandler");
				_4.declare("pundit.ImageFragmentHandler", pundit.BaseComponent, {
					constructor: function (_8ef) {
						var self = this;
						self.baloonEnabled = true;
						self.contextualMenuVisible = false;
						self.inBaloon = false;
						self.inImage = false;
						self.isOutTimer = null;
						self.helper = new pundit.XpointersHelper();
						self.initImageSelectionHelper();
						self.initBehaviours();
						_PUNDIT.init.onInitDone(function () {
							cMenu.onTypeHide_imageSelectionHelper(function (uri, e) {
								self.contextualMenuVisible = false;
								self.isOut();
							});
							semlibWindow.onWindowAnnotationResize(function () {
								self.baloonEnabled = false;
								if ((self.imgAnn !== null) || (typeof (self.imgAnn) !== "undefined")) {
									self.destroyBaloon();
								}
							});
							semlibWindow.onWindowClose(function () {
								self.baloonEnabled = false;
								if ((self.imgAnn !== null) || (typeof (self.imgAnn) !== "undefined")) {
									self.destroyBaloon();
								}
							});
							semlibWindow.onResizeEnd(function () {
								self.baloonEnabled = true;
								self.isOut();
							});
						});
						self.log("Image FragmentHandler up and running");
					},
					initImageSelectionHelper: function () {
						var self = this;
						cMenu.addAction({
							type: ["imageSelectionHelper"],
							name: "AddImageToMyItems",
							label: "Add this image to My Items",
							showIf: function (item) {
								if (typeof semlibMyItems.getItemFromUri(item.value) !== "undefined") {
									return false;
								} else {
									return true;
								}
							},
							onclick: function (item) {
								if (!semlibMyItems.uriInItems(item.value)) {
									item.rdfData = semlibItems.createBucketForImageFragment(item).bucket;
									previewer.buildPreviewForItem(item);
									semlibMyItems.addItem(item, true);
									semlibMyItems.show_pundittabfiltermyitemsimages();
								}
								if (!semlibItems.uriInItems(item.value)) {
									semlibItems.addItem(item);
								}
								if (!tooltip_viewer.isTempXpointer(item.value)) {
									tooltip_viewer.tempXpointers.push(item.value);
									tooltip_viewer.consolidate();
								}
								tooltip_viewer.highlightByXpointer(item.value);
								return true;
							}
						});
						cMenu.addAction({
							type: ["imageSelectionHelper"],
							name: "removeImageFromMyItems",
							label: "Remove from My Items",
							showIf: function (item) {
								if (typeof semlibMyItems.getItemFromUri(item.value) !== "undefined") {
									return true;
								} else {
									return false;
								}
							},
							onclick: function (item) {
								semlibMyItems.removeItemFromUri(item.value);
								tooltip_viewer.removeTempXpointer(item.value);
								tooltip_viewer.consolidate();
								return true;
							}
						});
						cMenu.addAction({
							type: ["imageSelectionHelper"],
							name: "AnnotateImageWithTripleComposer",
							label: "Annotate this image",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								tripleComposer.addItemToSubject(item);
								previewer.buildPreviewForItem(item);
								if (!_PUNDIT.GUI.isWindowOpen()) {
									_PUNDIT.GUI.toggleWindow();
								}
								return true;
							}
						});
						cMenu.addAction({
							type: ["imageSelectionHelper"],
							name: "AddCommentToImage",
							label: "Comment or tag this image",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								_PUNDIT["commentTag"].initPanel(item, "Comment and tags");
								_PUNDIT["commentTag"].saveComment = true;
							}
						});
					},
					initBehaviours: function () {
						var self = this;
						_4.query("img").connect("onmouseenter", function (e) {
							var _8f0 = true,
									_8f1 = e.target;
							while (_8f1.tagName.toLowerCase() !== "body") {
								if (_4.hasClass(_8f1, "pundit-disable-annotation")) {
									_8f0 = false;
									break;
								}
								_8f1 = _4.query(_8f1).parent()[0];
							}
							if (!_8f0) {
								return;
							}
							self.inImage = true;
							if (e.target !== self.thisIm) {
								self.destroyBaloon();
							}
							self.thisIm = e.target;
							if (!self.baloonEnabled) {
								return;
							} else {
								self.showBaloon();
							}
						});
						_4.query("img").connect("onmouseleave", function (e) {
							self.inImage = false;
							var pos = _4.position(e.target, true);
							if (self.isOut(pos, e.pageX, e.pageY)) {
								self.destroyBaloon();
							}
						});
					},
					hideImg: function (pos, x, y) {
						var self = this;
						if (self.isOut(pos, x, y)) {
							self.destroyBaloon();
						}
					},
					isOut: function (pos, x, y) {
						var self = this;
						clearTimeout(self.isOutTimer);
						self.isOutTimer = setTimeout(function () {
							if ((!self.inBaloon) && (!self.inImage)) {
								self.onIsOut();
							} else {
								self.onIsIn();
							}
						}, 100);
					},
					onIsOut: function () {
						var self = this;
						if ((self.imgAnn !== null) && (typeof (self.imgAnn) !== "undefined")) {
							if (!self.contextualMenuVisible) {
								self.destroyBaloon();
							}
						}
					},
					onIsIn: function () {
						var self = this;
						self.showBaloon();
					},
					createItemFromImage: function (_8f2) {
						var self = this,
								xp = self.helper.getXpFromNode(_8f2),
								_8f3 = self.helper.extractContentFromNode(_8f2),
								src = _8f2.src,
								_8f4 = window.location.href;
						if (_8f4.indexOf("#xpointer") !== -1) {
							_8f4 = _8f4.substring(0, _8f4.indexOf("#"));
						}
						var item = {
							type: ["subject"],
							rdftype: [ns.image],
							label: _8f3,
							description: _8f3,
							value: xp,
							image: src,
							isPartOf: xp.split("#")[0],
							pageContext: _8f4
						};
						item.rdfData = semlibItems.createBucketForImageFragment(item).bucket;
						return item;
					},
					destroyBaloon: function () {
						var self = this;
						_4.destroy(self.imgAnn);
						self.imgAnn = null;
					},
					showBaloon: function () {
						var self = this;
						if ((self.imgAnn === null) || (typeof (self.imgAnn) === "undefined")) {
							self.imgAnn = _4.create("span");
							self.pos = _4.position(self.thisIm, true);
							var x = self.pos.x - 10,
									y = self.pos.y - 10;
							_4.style(self.imgAnn, {
								position: "absolute",
								top: y + "px",
								left: x + "px"
							});
							_4.addClass(self.imgAnn, "pundit-ifh-annotate-image");
							_4.connect(self.imgAnn, "onmouseleave", function (e) {
								self.inBaloon = false;
								self.isOut();
							});
							_4.connect(self.imgAnn, "onmouseenter", function (e) {
								self.inBaloon = true;
							});
							_4.connect(self.imgAnn, "onclick", function (e) {
								var item = self.createItemFromImage(self.thisIm);
								cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, item, "imageSelectionHelper");
								self.contextualMenuVisible = true;
							});
							_4.query("body").append(self.imgAnn);
						}
					},
					getParentImageXpointer: function (_8f5) {
						var _8f6 = _PUNDIT.items.getItemByUri(_8f5);
						if (typeof (_8f6) !== "undefined" && typeof (_8f6.rdftype) !== "undefined") {
							for (var si = 0; si < _8f6.rdftype.length; si++) {
								if (_8f6.rdftype[si] === ns.fragments.image) {
									var _8f7 = _8f6.isPartOf;
									var imgs = _4.query("img");
									for (var ii = 0; ii < imgs.length; ii++) {
										if (imgs[ii].src === _8f7) {
											var _8f8 = new pundit.XpointersHelper();
											var _8f9 = _8f8.getXpFromNode(imgs[ii]);
											return _8f9;
										}
									}
								}
							}
						}
					}
				});
			}
			if (!_4._hasResource["pundit.NotebookManager"]) {
				_4._hasResource["pundit.NotebookManager"] = true;
				_4.provide("pundit.NotebookManager");
				_4.declare("pundit.NotebookManager", pundit.BasePanel, {
					constructor: function (_8fa) {
						var self = this;
						self.ownedNotebooksIds = [];
						self.activeNotebooksIds = [];
						self.notebooks = {};
						self.othersNotebooks = {};
						self.requests = {};
						self.initHTML();
						self.initContextMenu();
						self.initBehaviors();
						self.reader = new pundit.AnnotationReader();
						self.reader.onError(function () {
							console.log("An error occurred reading notebook information. ;(");
							self.setPanelLoading(false, "owned");
							self.setPanelLoading(false, "others");
						});
						self.writer = new pundit.AnnotationWriter();
						self.writer.onError(function () {
							console.log("An error occurred writing notebook information. ;(");
							self.setPanelLoading(false, "owned");
							self.setPanelLoading(false, "others");
						});
						tooltip_viewer.onNotebookActivationChanged(function () {
							if (self.isVisible()) {
								self.updateOtherNotebook();
							}
						});
						self.notebookSharePanel = new pundit.BasePanel({
							drag: true,
							title: "Share Notebook",
							name: "notebook-sharePanel"
						});
					},
					initHTML: function () {
						var self = this;
						self.log("Init HTML Notebook Panel");
						var c = "<div class=\"pundit-panel\"><span>Your annotations are written in the current notebook.</br>Your current notebook is: &nbsp;</span><span id=\"pundit-current-notebook-name\"></span></div>";
						c += "<div class=\"pundit-rp-notebook-creation pundit-panel\" style=\"width:390px;\">";
						c += "   <span class=\"pundit-pane-title\">Create a new Notebook</span></br>";
						c += "   <span>Notebook Name:</span><input type=\"text\" id=\"pundit-notebook-name-input\" style=\"width:200px;margin-left:10px;\"></input><input id=\"pundit-create-notebook-button\" type=\"button\" value=\"Create\" disabled=\"true\" style=\"margin-left:10px;\"></input></br>";
						c += "</div>";
						c += "<div class=\"pundit-rp-notebooks pundit-panel pundit-panel-loading\" style=\"margin-top:5px;\">";
						c += "   <span class=\"pundit-pane-title\">Your notebooks</span>";
						c += "    <ul id=\"pundit-notebook-list\" class=\"pundit-items pundit-view-list pundit-stop-wheel-propagation\" style=\"max-height:240px;overflow-y:auto\"></ul>";
						c += "</div>";
						c += "<div id=\"pundit-others-notebooks-div\" class=\"pundit-display-none pundit-rp-others-notebooks pundit-panel pundit-panel-loading\" style=\"margin-top:5px;\">";
						c += "   <span class=\"pundit-pane-title\" >Notebooks you are watching</span>";
						c += "    <ul id=\"pundit-other-notebook-list\" class=\"pundit-items pundit-view-list pundit-stop-wheel-propagation\" style=\"max-height:240px;overflow-y:auto\"></ul>";
						c += "</div>";
						self.addHTMLContent(c);
					},
					initContextMenu: function () {
						var self = this;
						if (_PUNDIT.config.modules["pundit.NotebookManager"].notebookActivation === true) {
							cMenu.addAction({
								type: ["notebookItem"],
								name: "punditNotebookDisactivate",
								label: "Deactivate Notebook",
								showIf: function (id) {
									if (self.notebooks[id].activated && !self.notebooks[id].current) {
										return true;
									} else {
										return false;
									}
								},
								onclick: function (id) {
									self.setPanelLoading(true, "owned");
									self.activateNotebook(id, "0", function (id, _8fb) {
										semlibWindow.closeAllPanels();
										self.updateNotebookActivation(id, _8fb);
										_PUNDIT["myPundit"].getAnnotationVisibility(function (mode) {
											if (mode === "active") {
												tooltip_viewer.refreshAnnotations();
											}
										});
									});
									return true;
								}
							});
							cMenu.addAction({
								type: ["notebookItem"],
								name: "punditNotebookActivate",
								label: "Activate Notebook",
								showIf: function (id) {
									if (!self.notebooks[id].activated) {
										return true;
									} else {
										return false;
									}
								},
								onclick: function (id) {
									self.setPanelLoading(true, "owned");
									self.activateNotebook(id, "1", function (id, _8fc) {
										semlibWindow.closeAllPanels();
										self.updateNotebookActivation(id, _8fc);
										_PUNDIT["myPundit"].getAnnotationVisibility(function (mode) {
											if (mode === "active") {
												tooltip_viewer.refreshAnnotations();
											}
										});
									});
									return true;
								}
							});
							cMenu.addAction({
								type: ["otherNotebookItem"],
								name: "punditOtherNotebookDisactivate",
								label: "Deactivate Notebook",
								showIf: function (id) {
									if (self.othersNotebooks[id].activated) {
										return true;
									} else {
										return false;
									}
								},
								onclick: function (id) {
									self.setPanelLoading(true, "others");
									self.activateNotebook(id, "0", function (id, _8fd) {
										semlibWindow.closeAllPanels();
										self.updateNotebookActivation(id, _8fd, "others");
										_PUNDIT["myPundit"].getAnnotationVisibility(function (mode) {
											if (mode === "active") {
												tooltip_viewer.refreshAnnotations();
											}
										});
									});
									return true;
								}
							});
							cMenu.addAction({
								type: ["otherNotebookItem"],
								name: "punditOtherNotebookActivate",
								label: "Activate Notebook",
								showIf: function (id) {
									if (!self.othersNotebooks[id].activated) {
										return true;
									} else {
										return false;
									}
								},
								onclick: function (id) {
									self.setPanelLoading(true, "others");
									self.activateNotebook(id, "1", function (id, _8fe) {
										semlibWindow.closeAllPanels();
										self.updateNotebookActivation(id, _8fe, "others");
										_PUNDIT["myPundit"].getAnnotationVisibility(function (mode) {
											if (mode === "active") {
												tooltip_viewer.refreshAnnotations();
											}
										});
									});
									return true;
								}
							});
						}
						cMenu.addAction({
							type: ["notebookItem"],
							name: "punditNotebookSetPublic",
							label: "Set Public",
							showIf: function (id) {
								if (self.notebooks[id].visibility !== "public") {
									return true;
								} else {
									return false;
								}
							},
							onclick: function (id) {
								self.setPanelLoading(true, "owned");
								self.writer.setNotebookVisibility(id, "public", function (id, _8ff) {
									self.updateNotebookVisibility(id, _8ff);
								});
								return true;
							}
						});
						cMenu.addAction({
							type: ["notebookItem"],
							name: "punditNotebookSetPrivate",
							label: "Set Private",
							showIf: function (id) {
								if (self.notebooks[id].visibility !== "private") {
									return true;
								} else {
									return false;
								}
							},
							onclick: function (id) {
								self.setPanelLoading(true, "owned");
								self.writer.setNotebookVisibility(id, "private", function (id, _900) {
									self.updateNotebookVisibility(id, _900);
								});
								return true;
							}
						});
						cMenu.addAction({
							type: ["notebookItem"],
							name: "punditNotebookCurrent",
							label: "Set as Current Notebook",
							showIf: function (id) {
								if (!self.notebooks[id].current) {
									return true;
								} else {
									return false;
								}
							},
							onclick: function (id) {
								self.setPanelLoading(true, "owned");
								self.writer.setNotebookCurrent(id, self.updateCurrentNotebook(id));
								return true;
							}
						});
						cMenu.addAction({
							type: ["notebookItem"],
							name: "punditNotebookViewInAsk",
							label: "View in Ask the Pundit",
							showIf: function () {
								return true;
							},
							onclick: function (id) {
								window.open(self.opts.askBaseURL + id);
								return true;
							}
						});
						if (_PUNDIT.config.modules["pundit.NotebookManager"].notebookSharing === true) {
							cMenu.addAction({
								type: ["notebookItem"],
								name: "punditShareNotebook",
								label: "Share Notebook",
								showIf: function (id) {
									if (self.notebooks[id].activated && self.notebooks[id].visibility === "public") {
										return true;
									} else {
										return false;
									}
								},
								onclick: function (id) {
									self.notebookSharePanel.emptyContent();
									var html = "<div class=\"pundit-panel\"><span class=\"pundit-pane-title\">This url is all you need to share your notebook:</span><br>";
									html += "<textarea style=\"width:390px;height:40px;margin-bottom:5px;margin-top:5px\">http://metasound.dibet.univpm.it/release_bot/build-development/pages/activate.html?id=" + id + "</textarea><br></div>";
									self.notebookSharePanel.addHTMLContent(html);
									var wdim = _4.window.getBox();
									self.notebookSharePanel.show((wdim.w - 400) / 2, (wdim.h - 200) / 2);
									return true;
								}
							});
						}
					},
					initBehaviors: function () {
						var self = this,
								beh = {};
						_4.connect(_4.byId("pundit-create-notebook-button"), "onclick", function (e) {
							self.setPanelLoading(true, "owned");
							self.writer.createNotebook(_4.byId("pundit-notebook-name-input").value, function (id) {
								self.getNotebookInfo(id, "owned");
							});
						});
						_4.connect(_4.byId("pundit-notebook-name-input"), "onkeyup", function (e) {
							if (e.target.value !== "") {
								self.updateCreateBtn(true);
							} else {
								self.updateCreateBtn(false);
							}
						});
						beh["#" + self._id + " div.pundit-rp-notebooks li span.pundit-icon-context-button"] = {
							"onclick": function (e) {
								var _901 = _4.query(e.target).parent()[0],
										id = _4.attr(_901, "about");
								cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, id, "notebookItem");
							}
						};
						if (_PUNDIT.config.modules["pundit.NotebookManager"].notebookActivation === true) {
							beh["#" + self._id + " div.pundit-rp-others-notebooks li span.pundit-icon-context-button"] = {
								"onclick": function (e) {
									var _902 = _4.query(e.target).parent()[0],
											id = _4.attr(_902, "about");
									cMenu.show(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, id, "otherNotebookItem");
								}
							};
						}
						_4.behavior.add(beh);
					},
					show: function () {
						this.inherited(arguments);
						var self = this;
						_4.byId("pundit-current-notebook-name").innerHTML = "";
						self.activesCompleted = false;
						self.ownedCompleted = false;
						self.reader.getActiveNotebooks(function (ids) {
							self.activeNotebooksIds = ids;
							self.activeCompleted = true;
							self.onNotebookIdsReceived();
						});
						self.reader.getOwnedNotebooks(function (ids) {
							self.ownedNotebooksIds = ids;
							self.ownedCompleted = true;
							self.onNotebookIdsReceived();
						});
						self.setPanelLoading("owned", true);
						self.setPanelLoading("others", true);
					},
					onNotebookInfoLoaded: function () {
						var self = this;
						self.requests = {};
						self.setPanelLoading(false, "others");
						self.reader.getCurrentNotebookId(function (id) {
							_4.addClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-current");
							_4.removeClass(_4.query("#" + self._id + " .pundit-rp-notebooks")[0], "pundit-panel-loading");
							self.notebooks[id].current = true;
							_4.byId("pundit-current-notebook-name").innerHTML = self.notebooks[id].label;
						});
						_4.behavior.apply();
					},
					activateNotebook: function (id, flag, cb) {
						var self = this;
						self.writer.setNotebookActive(id, flag, cb);
					},
					updateNotebookActivation: function (id, _903, type) {
						var self = this,
								_904;
						if (_903 === "1") {
							_904 = true;
							_4.removeClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-disactivated");
							_4.addClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-activated");
						} else {
							_904 = false;
							_4.removeClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-activated");
							_4.addClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-disactivated");
						}
						if (typeof (type) !== "undefined") {
							if (type === "others") {
								self.othersNotebooks[id].activated = _904;
								self.setPanelLoading(false, "others");
							}
						} else {
							self.notebooks[id].activated = _904;
							self.setPanelLoading(false, "owned");
						}
					},
					updateCurrentNotebook: function (id) {
						var self = this;
						for (var i in self.notebooks) {
							self.notebooks[i].current = false;
						}
						self.notebooks[id].current = true;
						_4.query("#" + self._id + " .pundit-rp-notebooks li").forEach(function (item) {
							_4.removeClass(item, "pundit-current");
						});
						_4.addClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-current");
						_4.byId("pundit-current-notebook-name").innerHTML = self.notebooks[id].label;
						self.setPanelLoading(false, "owned");
					},
					updateNotebookVisibility: function (id, _905) {
						var self = this;
						if (_905 === "public") {
							_4.removeClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-private");
							_4.addClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-public");
							self.notebooks[id].visibility = "public";
						}
						if (_905 === "private") {
							_4.addClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-private");
							_4.removeClass(_4.query("#" + self._id + " li[about = " + id + "]")[0], "pundit-public");
							self.notebooks[id].visibility = "private";
						}
						self.setPanelLoading(false, "owned");
					},
					setPanelLoading: function (s, type) {
						var self = this;
						if (s === true) {
							if (type === "owned") {
								_4.addClass(_4.query("#" + self._id + " .pundit-rp-notebooks")[0], "pundit-panel-loading");
							} else {
								_4.addClass(_4.query("#" + self._id + " .pundit-rp-others-notebooks")[0], "pundit-panel-loading");
							}
						} else {
							if (type === "owned") {
								_4.removeClass(_4.query("#" + self._id + " .pundit-rp-notebooks")[0], "pundit-panel-loading");
							} else {
								_4.removeClass(_4.query("#" + self._id + " .pundit-rp-others-notebooks")[0], "pundit-panel-loading");
							}
						}
					},
					hide: function () {
						this.inherited(arguments);
						var self = this;
						self.notebooks = {};
						self.othersnotebooks = {};
						self.ownedNotebooksIds = [];
						self.activeNotebooksIds = [];
						_4.empty(_4.query("#" + self._id + " .pundit-rp-notebooks ul")[0]);
					},
					updateCreateBtn: function (_906) {
						if (_906) {
							_4.attr(_4.byId("pundit-create-notebook-button"), "disabled", false);
						} else {
							_4.attr(_4.byId("pundit-create-notebook-button"), "disabled", true);
						}
					},
					onNotebookIdsReceived: function () {
						var self = this;
						if (self.ownedCompleted && self.activeCompleted) {
							self.setOtherNotebooks();
							self.getNotebooksInfo();
						}
					},
					setOtherNotebooks: function () {
						var self = this;
						for (var i = self.ownedNotebooksIds.length; i--;) {
							var _907 = _4.indexOf(self.activeNotebooksIds, self.ownedNotebooksIds[i]);
							if (_907 !== -1) {
								self.activeNotebooksIds.splice(_907, 1);
							}
						}
					},
					getNotebooksInfo: function () {
						var self = this;
						for (var i = self.activeNotebooksIds.length; i--;) {
							self.getNotebookInfo(self.activeNotebooksIds[i], "others");
						}
						for (var i = self.ownedNotebooksIds.length; i--;) {
							self.getNotebookInfo(self.ownedNotebooksIds[i], "owned");
						}
					},
					getNotebookInfo: function (_908, type) {
						var self = this;
						self.requests[_908] = false;
						self.reader.getNotebookMetadata(_908, (function (_909) {
							return function (id, _90a) {
								var _90b = {
									visibility: _90a["http://swickynotes.org/notebook/resource/" + id][ns.notebooks.visibility][0].value,
									created: _90a["http://swickynotes.org/notebook/resource/" + id][ns.notebooks.created][0].value,
									creator: _90a["http://swickynotes.org/notebook/resource/" + id][ns.notebooks.creator][0].value,
									creatorName: _90a["http://swickynotes.org/notebook/resource/" + id][ns.notebooks.creatorName][0].value,
									id: _90a["http://swickynotes.org/notebook/resource/" + id][ns.notebooks.id][0].value,
									includes: _90a["http://swickynotes.org/notebook/resource/" + id][ns.notebooks.includes],
									type: _90a["http://swickynotes.org/notebook/resource/" + id][ns.notebooks.type][0].value,
									label: _90a["http://swickynotes.org/notebook/resource/" + id][ns.notebooks.label][0].value
								};
								self.reader.checkNotebook(_90b.id, function (id, _90c) {
									var _90d = true;
									if (_90c === "0") {
										_90b.activated = false;
									} else {
										_90b.activated = true;
									}
									if (_909 === "owned") {
										self.notebooks[id] = _90b;
									} else {
										self.othersNotebooks[id] = _90b;
									}
									self.requests[id] = true;
									self.addNotebookItem(_90b, _909);
									for (var j in self.requests) {
										if (!self.requests[j]) {
											_90d = false;
											break;
										}
									}
									if (_90d) {
										self.onNotebookInfoLoaded();
									}
								});
							};
						})(type));
					},
					addNotebookItem: function (_90e, type) {
						var self = this,
								c = "<li about=\"" + _90e.id + "\" class=\"dojoDndItem pundit-shown\">";
						c += "   <span class=\"pundit-icon-context-button\"></span>";
						c += "   <span>" + _90e.label + " (id:" + _90e.id + ")</span>";
						c += "   <span class=\"pundit-item-visibility\"></span>";
						if (_PUNDIT.config.modules["pundit.NotebookManager"].notebookActivation === true) {
							c += "   <span class=\"pundit-item-activation pundit-disactivated\"></span>";
						}
						c += "   <span class=\"pundit-item-editability\"></span>";
						c += "   <span class=\"pundit-trim pundit-notebook-creator\">" + _90e.creatorName + "</span>";
						c += "</li>";
						if (type === "owned") {
							_4.query("#pundit-notebook-list").append(c);
						} else {
							_4.removeClass("pundit-others-notebooks-div", "pundit-display-none");
							_4.query("#pundit-other-notebook-list").append(c);
						}
						if (_90e.visibility === "public") {
							_4.removeClass(_4.query("#" + self._id + " li[about = " + _90e.id + "]")[0], "pundit-private");
							_4.addClass(_4.query("#" + self._id + " li[about = " + _90e.id + "]")[0], "pundit-public");
						}
						if (_90e.visibility === "private") {
							_4.addClass(_4.query("#" + self._id + " li[about = " + _90e.id + "]")[0], "pundit-private");
							_4.removeClass(_4.query("#" + self._id + " li[about = " + _90e.id + "]")[0], "pundit-public");
						}
						if (_90e.activated) {
							_4.addClass(_4.query("#" + self._id + " li[about = " + _90e.id + "]")[0], "pundit-activated");
							_4.removeClass(_4.query("#" + self._id + " li[about = " + _90e.id + "]")[0], "pundit-disactivated");
						} else {
							_4.addClass(_4.query("#" + self._id + " li[about = " + _90e.id + "]")[0], "pundit-disactivated");
							_4.removeClass(_4.query("#" + self._id + " li[about = " + _90e.id + "]")[0], "pundit-activated");
						}
					},
					updateOtherNotebook: function () {
						var self = this;
						self.setPanelLoading(true, "others");
						_4.empty("pundit-other-notebook-list");
						self.othersnotebooks = {};
						self.activeNotebooksIds = [];
						self.reader.getActiveNotebooks(function (ids) {
							self.activeNotebooksIds = ids;
							self.setOtherNotebooks();
							for (var i = self.activeNotebooksIds.length; i--;) {
								self.getNotebookInfo(self.activeNotebooksIds[i], "others");
							}
						});
					}
				});
			}
			if (!_4._hasResource["pundit.Recognizer"]) {
				_4._hasResource["pundit.Recognizer"] = true;
				_4.provide("pundit.Recognizer");
				_4.declare("pundit.Recognizer", pundit.BaseComponent, {
					constructor: function () {
						var self = this;
						self.initContextualMenu();
						self.initBehaviors();
						self.recognizerPanel = new pundit.RecognizerPanel({
							name: "recognize",
							preview: true,
							drag: true,
							searchType: "search",
							namedEntitiesSources: _PUNDIT.config.activeEntitySources
						});
						self.log("Recognizer up and running!");
					},
					init: function (_90f) {
					},
					initGUI: function () {
					},
					initBehaviors: function () {
					},
					initContextualMenu: function () {
						var self = this;
						if (_PUNDIT.config.modules["pundit.Recognizer"].showAction) {
							cMenu.addAction({
								type: ["textSelectionHelper"],
								name: "recognizeSelection",
								label: "Recognize selection",
								showIf: function (item) {
									return true;
								},
								onclick: function (item) {
									var term = fragmentHandler.getLastSelectedContent();
									self.recognizerPanel.performSearch(term);
									self.recognizerPanel.show(150, 150, {
										title: "Recognizer",
										target: item
									});
								}
							});
						}
					},
				});
			}
			if (!_4._hasResource["pundit.ImageAnnotationPanel"]) {
				_4._hasResource["pundit.ImageAnnotationPanel"] = true;
				_4.provide("pundit.ImageAnnotationPanel");
				_4.declare("pundit.ImageAnnotationPanel", pundit.BasePanel, {
					constructor: function (_910) {
						var self = this;
						(function () {
							var h = document.getElementsByTagName("head")[0],
									d = document.createElement("script");
							d.type = "text/javascript", d.src = "http://thepund.it/lib/kinetic/kinetic-v4.5.1.min.js";
							h.appendChild(d);
						})();
						self.deltaScale = 0.1;
						self.dotRadius = 5;
						self.strokeWidth = 10;
						self.lineStrokeWidth = 3;
						self.dashArray = [10, 5, 1, 5];
						self.crypto = new pundit.Crypto();
						self.createdShapes = [];
						self.selectedShape = null;
						self.containerSize = {
							w: 480,
							h: 360
						};
						cMenu.addAction({
							type: ["imageSelectionHelper"],
							name: "AnnotateImage",
							label: "Annotate a part of this image",
							showIf: function (item) {
								return true;
							},
							onclick: function (item) {
								self.initialize(item.image);
								return true;
							}
						});
					},
					initialize: function (_911) {
						var self = this;
						self.createdShapes = [];
						if (typeof (Kinetic) === "undefined") {
							alert("Kinetic Lib not loaded Yet... Try again! :P");
							return;
						}
						self.imageSrc = _911;
						self.initHTML();
						self.initBehavior();
						self.initAnnotationCanvas();
						self.show();
						_4.behavior.apply();
					},
					initHTML: function () {
						var self = this;
						self.log("Init HTML Resource Panel");
						self.log("Resource Panel Contructor");
						var c = "<ul id =\"" + self._id + "-image-ann-container\" class=\"pundit-horizontal-list\">";
						c += "  <li style=\"width:100px\">";
						c += "      <span id=\"pundit-image-annotation-zoom\" class=\"pundit-zoom-in-icon\" style=\"display:block;width:25px;height:25px;margin-left:auto;margin-right:auto;\"></span><span style=\"display:block;text-align:center;\">Zoom in</span></br>";
						c += "      <span id=\"pundit-image-annotation-pan\" class=\"pundit-zoom-out-icon\" style=\"display:block;width:25px;height:25px;margin-left:auto;margin-right:auto;\"></span><span style=\"display:block;text-align:center;\">Zoom out</span></br>";
						c += "      <span id=\"pundit-image-annotation-polygon\" class=\"pundit-draw-polygon-icon\" style=\"display:block;width:25px;height:25px;margin-left:auto;margin-right:auto;\"></span><span style=\"display:block;text-align:center;\">Draw Polygon</span></br>";
						c += "      <span id=\"pundit-image-annotation-delete\" class=\"pundit-delete-icon\" style=\"display:block;width:25px;height:25px;margin-left:auto;margin-right:auto;\"></span><span style=\"display:block;text-align:center;\">Delete Selected</span></br>";
						c += "      <span id=\"pundit-image-annotation-myitem\" class=\"pundit-favorite-icon\" style=\"display:block;width:25px;height:25px;margin-left:auto;margin-right:auto;\"></span><span style=\"display:block;text-align:center;\">Add to My Item</span></br>";
						c += "      <span id=\"pundit-image-annotation-add-comment\"\" class=\"pundit-tag-icon\" style=\"display:block;width:25px;height:25px;margin-left:auto;margin-right:auto;\"></span><span style=\"display:block;text-align:center;\">Add Comment/Tag</span></br>";
						c += "  </li>";
						c += "  <li>";
						c += "      <div id=\"" + self._id + "-image-annotation-container\" class=\"pundit-stop-wheel-propagation pundit-rp-image-annotation-container\" style=\"width:480px;height:360px;overflow:auto;z-index:1000000000;background:lightGrey\"></div>";
						c += "</li></ul>";
						self.addHTMLContent(c);
					},
					initAnnotationCanvas: function (_912) {
						var self = this,
								_913 = new Image();
						self.stage = new Kinetic.Stage({
							container: self._id + "-image-annotation-container"
						});
						self.layer = new Kinetic.Layer({});
						self.isDrawing = true;
						self.layer.drawingNewLine = false;
						self.layer.finishedDrawingNewLine = false;
						self.newDots = [];
						_4.connect(self.stage.getContent(), "onclick", function (e) {
							if (!self.isDrawing) {
								return;
							}
							if (self.layer.finishedDrawingNewLine) {
								return;
							}
							var pos = self.stage.getMousePosition(),
									_914 = self.stage.getScale(),
									len, _915, _916 = [];
							len = self.newDots.length;
							self.newDots[len] = self.buildAnchor(self.layer, (pos.x - self.stage.getX()) / _914.x, (pos.y - self.stage.getY()) / _914.y);
							_915 = self.strokeWidth / self.stage.getScale().x;
							for (var i = self.dashArray.length; i--;) {
								_916.push(self.dashArray[i] / self.stage.getScale().x);
							}
							self.layer.newLine = new Kinetic.Line({
								dashArray: _916,
								strokeWidth: self.lineStrokeWidth,
								stroke: "#f00",
								lineCap: "round",
								alpha: 1,
								name: "tempLine"
							});
							self.layer.add(self.layer.newLine);
							self.layer.draw();
							self.layer.drawingNewLine = true;
						});
						self.stage.on("click", function () {
							self.deselectShape();
							self.layer.draw();
						});
						self.stage.on("mousemove", function (evt) {
							if (!self.layer.drawingNewLine) {
								return;
							}
							self.stage.draw();
						});
						self.layer.on("beforeDraw", function () {
							if (self.layer.newLine) {
								self.updateNewLine(self.layer);
							}
							if (self.selectedShape !== null) {
								self.updatePoly(self.selectedShape);
							}
						});
						_913.onload = function () {
							var _917 = 1,
									_918 = new Kinetic.Image({
										x: 0,
										y: 0,
										image: _913
									}),
									iw = _913.width,
									ih = _913.height;
							self.iw = iw;
							self.ih = ih;
							self.layer.background = _918;
							self.layer.add(_918);
							_918.moveToBottom();
							_917 = Math.min(self.containerSize.w / iw, self.containerSize.h / ih);
							self.stage.setWidth(parseInt(iw * _917));
							self.stage.setHeight(parseInt(ih * _917));
							self.stage.setScale({
								x: _917,
								y: _917
							});
							if (iw > ih) {
								self.isPanImg = true;
								if (iw < self.containerSize.w) {
									_4.style(_4.query(self.stage.getContent())[0], {
										left: parseInt(0.5 * (self.containerSize.w - iw * _917)),
										top: parseInt(0.5 * (self.containerSize.h - ih * _917)),
										width: parseInt(iw * _917),
										height: parseInt(ih * _917)
									});
								} else {
									self.centerCanvasContainer();
								}
							} else {
								self.isPanImg = false;
								if (ih < self.containerSize.h) {
									_4.style(_4.query(self.stage.getContent())[0], {
										left: parseInt(0.5 * (self.containerSize.w - iw * _917)),
										top: parseInt(0.5 * (self.containerSize.h - ih * _917)),
										width: parseInt(iw * _917),
										height: parseInt(ih * _917)
									});
								} else {
									self.centerCanvasContainer();
								}
							}
							self.stage.draw();
						};
						_913.src = self.imageSrc;
						self.stage.add(self.layer);
						self.stage.draw();
					},
					initBehavior: function () {
						var self = this;
						_4.connect(_4.byId("pundit-image-annotation-zoom"), "onclick", function () {
							var _919 = self.stage.getScale();
							_919.x += self.deltaScale;
							_919.y += self.deltaScale;
							self.stage.setWidth(parseInt(self.stage.getWidth() * (1 + self.deltaScale)));
							self.stage.draw();
							self.stage.setHeight(parseInt(self.stage.getHeight() * (1 + self.deltaScale)));
							self.stage.setScale({
								x: self.stage.getWidth() / self.iw,
								y: self.stage.getHeight() / self.ih
							});
							self.centerCanvasContainer();
							self.updateShapeRendering(_919.x);
							self.stage.draw();
						});
						_4.connect(_4.byId("pundit-image-annotation-pan"), "onclick", function () {
							var _91a = null;
							_91a = self.stage.getScale();
							_91a.x = _91a.x - self.deltaScale;
							_91a.y = _91a.y - self.deltaScale;
							self.stage.setWidth(parseInt(self.stage.getWidth() * (1 - self.deltaScale)));
							self.stage.setHeight(parseInt(self.stage.getHeight() * (1 - self.deltaScale)));
							self.stage.setScale({
								x: self.stage.getWidth() / self.iw,
								y: self.stage.getHeight() / self.ih
							});
							self.centerCanvasContainer();
							self.updateShapeRendering(_91a.x);
							self.stage.draw();
						});
						_4.connect(_4.byId("pundit-image-annotation-polygon"), "onclick", function () {
							if (self.isDrawing) {
								return;
							} else {
								if (self.createdShapes.length > 0) {
									return;
								}
								self.isDrawing = true;
								self.layer.finishedDrawingNewLine = false;
								self.deselectShape();
							}
						});
						_4.connect(_4.byId("pundit-image-annotation-delete"), "onclick", function () {
							if (self.selectedShape !== null) {
								self.isDrawing = false;
								var dots = self.stage.get(".dot-" + self.selectedShape.getId());
								for (var i = dots.length; i--;) {
									dots[i].remove();
								}
								self.selectedShape.remove();
								for (var i = self.createdShapes.length; i--;) {
									if (self.createdShapes[i].getId() === self.selectedShape.getId()) {
										self.createdShapes.splice(i, 1);
									}
								}
								self.selectedShape = null;
								self.layer.finishedDrawingNewLine = true;
								self.stage.draw();
							}
						});
						_4.connect(_4.byId("pundit-image-annotation-myitem"), "onclick", function () {
							if (self.createdShapes.length > 0) {
								var item = self.createItemFromCreatedShape();
								if (!semlibMyItems.uriInItems(item.value)) {
									item.rdfData = semlibItems.createBucketForImageRegionFragment(item).bucket;
									previewer.buildPreviewForItem(item);
									semlibMyItems.addItem(item, true);
									semlibMyItems.show_pundittabfiltermyitemsimagesfragment();
								}
								self.selectedShape = null;
								self.hide();
							}
						});
						_4.connect(_4.byId("pundit-image-annotation-add-comment"), "onclick", function () {
							if (self.createdShapes.length > 0) {
								var item = self.createItemFromCreatedShape();
								item.rdfData = semlibItems.createBucketForImageRegionFragment(item).bucket;
								self.selectedShape = null;
								_PUNDIT["commentTag"].initPanel(item, "Comment and tags");
							} else {
							}
						});
					},
					updateNewLine: function (_91b) {
						var self = this,
								pos = self.stage.getMousePosition(),
								len = self.newDots.length,
								_91c = [];
						if (typeof pos === "undefined") {
							return false;
						}
						for (var i = 0; i < len; i++) {
							_91c = _91c.concat([self.newDots[i].attrs.x, self.newDots[i].attrs.y]);
						}
						if (_91b.drawingNewLine) {
							_91c = _91c.concat((pos.x - self.stage.getX()) / self.stage.getScale().x, (pos.y - self.stage.getY()) / self.stage.getScale().y);
						} else {
							_91c = _91c.concat([self.newDots[0].attrs.x, self.newDots[0].attrs.y]);
						}
						_91b.newLine.setPoints(_91c);
						_91b.newLine.setZIndex(1);
					},
					buildAnchor: function (_91d, x, y) {
						var self = this,
								len, _91e = self.dotRadius / self.stage.getScale().x,
								_91f = self.strokeWidth / self.stage.getScale().x,
								_920 = new Kinetic.Circle({
									x: x,
									y: y,
									radius: _91e,
									stroke: "#666",
									fill: "#fc0",
									strokeWidth: _91f,
									draggable: false,
									name: "dot"
								});
						len = self.newDots.length;
						if (len === 0) {
							_920.on("mouseover", function (evt) {
								document.body.style.cursor = "pointer";
								this.setStrokeWidth((self.strokeWidth + 1) / self.stage.getScale().x);
							});
							_920.on("mouseout", function () {
								document.body.style.cursor = "default";
								this.setStrokeWidth(self.strokeWidth / self.stage.getScale().x);
								_91d.draw();
							});
							_920.on("click", function (evt) {
								var len = self.newDots.length,
										_91f, _921, id, _922 = [],
										_923, poly, dots;
								self.layer.finishedDrawingNewLine = true;
								self.newDots[0].off("click");
								self.layer.drawingNewLine = false;
								self.layer.draw();
								evt.cancelBubble = true;
								_922 = [];
								for (var i = 0; i < len; i++) {
									_922 = _922.concat([self.newDots[i].attrs.x, self.newDots[i].attrs.y]);
								}
								_922.concat([self.newDots[0].attrs.x, self.newDots[0].attrs.y]);
								_91f = self.strokeWidth / self.stage.getScale().x;
								poly = new Kinetic.Polygon({
									points: _922,
									fill: "#ff0000",
									stroke: "black",
									strokeWidth: self.lineStrokeWidth,
									opacity: 0.3
								});
								_921 = new Date().getTime();
								id = "poly" + self.crypto.hex_md5(self.imageSrc + _921 + _4.toJson(_922));
								poly.setId(id);
								dots = self.newDots;
								for (var i = dots.length; i--;) {
									dots[i].remove();
								}
								self.newDots = [];
								_923 = self.stage.get(".tempLine");
								for (var i = _923.length; i--;) {
									_923[i].remove();
								}
								poly.on("click", function (e) {
									e.cancelBubble = true;
									if (typeof self.selectedShape === "undefined" || self.selectedShape !== this) {
										self.selectShape(this);
									}
									self.layer.draw();
								});
								poly.on("dragstart", function () {
									self.selectedShape = null;
									var dots = self.stage.get(".dot-" + this.getId());
									for (var i = dots.length; i--;) {
										dots[i].remove();
									}
									self.layer.draw();
								});
								poly.on("dragend", function () {
									self.selectedShape = this;
									var pos = this.getPosition(),
											dots = this.getPoints();
									for (var i = dots.length; i--;) {
										self.dragPoints.push(self.buildTempAnchor(self.layer, this.getId(), dots[i].x + pos.x, dots[i].y + pos.y));
									}
									this.setPosition({
										x: 0,
										y: 0
									});
									self.updatePoly(this);
									self.layer.draw();
								});
								self.createdShapes.push(poly);
								self.layer.add(poly);
								self.layer.newLine = null;
								self.layer.drawingNewLine = false;
								self.isDrawing = false;
								self.layer.draw();
								return;
							});
						}
						_91d.add(_920);
						return _920;
					},
					updatePoly: function (pol) {
						var self = this,
								_924 = pol.shapeType;
						if (_924 === "Polygon") {
							var dots = self.layer.get(".dot-" + pol.getId()),
									len = dots.length,
									_925 = [];
							for (var i = 0; i < len; i++) {
								_925 = _925.concat([dots[i].attrs.x, dots[i].attrs.y]);
							}
							_925.concat([dots[0].attrs.x, dots[0].attrs.y]);
							pol.setPoints(_925);
						}
					},
					buildTempAnchor: function (_926, _927, x, y) {
						var self = this,
								_928 = self.dotRadius / self.stage.getScale().x,
								_929 = self.strokeWidth / self.stage.getScale().x,
								_92a = new Kinetic.Circle({
									x: x,
									y: y,
									radius: _928,
									stroke: "#fc0",
									fill: "#ff0000",
									strokeWidth: _929,
									draggable: true,
									name: "dot-" + _927
								});
						_92a.on("mouseover", function (evt) {
							document.body.style.cursor = "pointer";
							this.setStrokeWidth((self.strokeWidth + 1) / self.stage.getScale().x);
							_926.draw();
						});
						_92a.on("mouseout", function () {
							document.body.style.cursor = "default";
							this.setStrokeWidth(_929);
							_926.draw();
						});
						_926.add(_92a);
						return _92a;
					},
					hide: function () {
						this.inherited(arguments);
						var self = this;
						_4.destroy(self._id + "-image-ann-container");
					},
					createItemFromCreatedShape: function () {
						var self = this,
								_92b = new Date().getTime(),
								_92c, _92d = self.stage.getScale(),
								sw = self.stage.getWidth(),
								sh = self.stage.getHeight(),
								_92e = [],
								item;
						for (var i = self.createdShapes.length; i--;) {
							if (self.createdShapes[i].shapeType === "Polygon") {
								_92c = self.createdShapes[i].getPoints();
								for (var j = _92c.length; j--;) {
									_92c[j].x = ((_92c[j].x * _92d.x) / sw);
									_92c[j].y = ((_92c[j].y * _92d.y) / sh);
								}
								var _92f = {
									type: self.createdShapes[i].shapeType.toLowerCase(),
									points: _92c
								};
								_92e.push(_92f);
							}
						}
						var _930;
						var imgs = _4.query("img");
						for (var ii = 0; ii < imgs.length; ii++) {
							if (imgs[ii].src === self.imageSrc && (imgs[ii].getAttribute("class") == null || imgs[ii].getAttribute("class").indexOf("pundit-") === -1)) {
								var _931 = new pundit.XpointersHelper();
								_930 = _931.getXpFromNode(imgs[ii]);
							}
						}
						item = {
							type: ["subject"],
							rdftype: [ns.fragments.image],
							label: "Fragment of " + self.imageSrc.substring(self.imageSrc.lastIndexOf("/") + 1, self.imageSrc.length),
							description: "This fragment represents a part of the image " + self.imageSrc.substring(self.imageSrc.lastIndexOf("/") + 1, self.imageSrc.length),
							value: ns.fragmentBaseUri + "image/" + self.crypto.hex_md5(self.imageSrc + _92b + _4.toJson(_92e)),
							image: self.imageSrc,
							parentItemXP: _930,
							isPartOf: self.imageSrc,
							pageContext: window.location.href,
							selectors: _92e
						};
						return item;
					},
					selectShape: function (_932) {
						var self = this;
						self.deselectShape();
						if (_932.shapeType === "Polygon") {
							var dots = _932.getPoints();
							self.dragPoints = [];
							for (var i = dots.length; i--;) {
								self.dragPoints.push(self.buildTempAnchor(self.layer, _932.getId(), dots[i].x, dots[i].y));
							}
							_932.setDraggable(true);
						}
						self.selectedShape = _932;
					},
					deselectShape: function () {
						var self = this;
						if (self.selectedShape === null) {
							return;
						}
						if (self.selectedShape.shapeType === "Polygon") {
							var _933 = self.layer.get(".dot-" + self.selectedShape.getId());
							for (var i = _933.length; i--;) {
								_933[i].remove();
							}
							self.selectedShape.setDraggable(false);
						}
						self.selectedShape = null;
						self.stage.draw();
					},
					updateShapeRendering: function (_934) {
						var self = this,
								_935 = self.layer.getChildren();
						for (var i = _935.length; i--;) {
							var _936 = _935[i];
							if (typeof _936.attrs["strokeWidth"] !== "undefined") {
								_936.setStrokeWidth(self.strokeWidth / _934);
							}
							if (typeof _936.attrs["radius"] !== "undefined") {
								_936.setRadius(self.dotRadius / _934);
							}
							if (typeof _936.attrs["dashArray"] !== "undefined") {
								var _937 = [];
								for (var j = self.dashArray.length; j--;) {
									_937.push(self.dashArray / _934);
								}
								_936.attrs["dashArray"] = _937;
							}
						}
					},
					centerCanvasContainer: function () {
						var self = this;
						if (self.stage.getWidth() < self.containerSize.w) {
							_4.style(_4.query(self.stage.getContent())[0], {
								left: 0.5 * (self.containerSize.w - self.stage.getWidth())
							});
						} else {
							_4.style(_4.query(self.stage.getContent())[0], {
								left: 0
							});
						}
						if (self.stage.getHeight() < self.containerSize.h) {
							_4.style(_4.query(self.stage.getContent())[0], {
								top: 0.5 * (self.containerSize.h - self.stage.getHeight())
							});
						} else {
							_4.style(_4.query(self.stage.getContent())[0], {
								top: 0
							});
						}
					}
				});
			}
			if (!_4._hasResource["pundit.Help"]) {
				_4._hasResource["pundit.Help"] = true;
				_4.provide("pundit.Help");
				_4.declare("pundit.Help", pundit.BaseComponent, {
					opts: {
						introductionFile: undefined,
						showIntroductionAtLogin: false,
						introductionWindowTitle: "Welcome :)"
					},
					constructor: function () {
						var self = this;
						self._initHTML();
						self._initBehaviors();
						if (typeof (self.opts.introductionFile) !== "undefined") {
							self._initIntroduction();
						}
					},
					_initHTML: function () {
						var self = this;
						help = "";
						help += "<span class=\"pundit-gui-button\" id=\"pundit-help-button\"><span class=\"pundit-bicon pundit-lifebuoy-icon\"></span> Help</span>";
						_4.query("#pundit-gui-topbar").append(help);
					},
					_initIntroduction: function () {
						var self = this,
								_938 = "";
						self.introductionDialog = new _5.Dialog({
							style: "width: 600px"
						});
						_4.addClass(_4.byId(self.introductionDialog.id), "tundra pundit-disable-annotation");
						_938 += "<div class=\"pundit-dialog-top\">";
						_938 += "<iframe class=\"pundit-dialog-content\" src=\"" + self.opts.introductionFile + "\"></iframe>";
						_938 += "</div>";
						_938 += "<div class=\"pundit-dialog-bottom\">";
						_938 += "<span id=\"pundit-intro-close-button\" class=\"pundit-gui-button\">Close</span>";
						_938 += "<input type=\"checkbox\" id=\"pundit-intro-dont-open-again\" />";
						_938 += "<span class=\"pundit-intro-dont-open-label\">Don't show me this introduction next time.</span>";
						_938 += "</div>";
						self.introductionDialog.attr("content", _938);
						self.introductionDialog.attr("title", self.opts.introductionWindowTitle);
						_PUNDIT.requester.checkLogin(function (data) {
							if (data.loginStatus !== 1) {
								return;
							}
							_PUNDIT.remoteStore.get("show-introduction", function (v) {
								self.log("Initializing dont-open-again checkbox to " + !v.value);
								_4.byId("pundit-intro-dont-open-again").checked = !v.value;
							});
						});
						self._initIntroductionBehaviors();
					},
					_initIntroductionBehaviors: function () {
						var self = this;
						_4.connect(_4.byId("pundit-intro-close-button"), "onclick", function (e) {
							self.introductionDialog.hide();
						});
						_4.connect(_4.byId("pundit-intro-dont-open-again"), "onchange", function (e) {
							if (!_PUNDIT.myPundit.logged) {
								self.log("Trying to modify users preferences while user is not logged in, ignoring.");
								return false;
							}
							self.log("Setting remote show-introduction to " + !this.checked);
							_PUNDIT.remoteStore.set("show-introduction", !this.checked);
						});
						_PUNDIT.cMenu.addAction({
							type: ["helpMenu"],
							name: "showIntroduction",
							label: "Show introduction",
							showIf: function () {
								return true;
							},
							onclick: function () {
								self.showIntroduction();
								return true;
							}
						});
						if (self.opts.showIntroductionAtLogin) {
							_PUNDIT.requester.onLogin(function () {
								_PUNDIT.remoteStore.get("show-introduction", function (res) {
									if (res.length === 0) {
										self.log("Perfectly virgin show-introduction: initializing");
										_PUNDIT.remoteStore.set("show-introduction", true);
										res = {
											value: true
										};
									}
									if (res.value) {
										self.log("Remote show-introduction is true, showing introduction.");
										self.showIntroduction();
									}
									self.log("After login initializing dont-open-again checkbox to " + !res.value);
									_4.byId("pundit-intro-dont-open-again").checked = !res.value;
								}, function () {
									self.log("ERROR: reading remote show-introduction??");
								});
							});
						}
					},
					_initBehaviors: function () {
						var self = this;
						_4.connect(_4.byId("pundit-help-button"), "onclick", function (e) {
							var x = _4.position(_4.byId("pundit-help-button")).x - 50;
							_PUNDIT.cMenu.show(x, 21, undefined, "helpMenu", "pundit-cm-bottom");
						});
					},
					showIntroduction: function () {
						var self = this;
						self.log("Opening introduction dialog.");
						self.introductionDialog.show();
					}
				});
			}
			if (!_4._hasResource["pundit.NamedContentHandler"]) {
				_4._hasResource["pundit.NamedContentHandler"] = true;
				_4.provide("pundit.NamedContentHandler");
				_4.declare("pundit.NamedContentHandler", pundit.BaseComponent, {
					opts: {
						moreInfoTag: "span",
						moreInfoAttribute: "rel",
						moreInfoURL: "http://purl.org/pundit/ont/json-metadata",
						consolidateNamedContents: true
					},
					constructor: function (_939) {
						var self = this;
						self._checkedIdentifiers = [];
						self.xphelper = new pundit.XpointersHelper();
						_PUNDIT.init.onInitDone(function () {
							setTimeout(function () {
							}, 1000);
							tooltip_viewer.onConsolidate(function () {
							});
						});
						self.loadJobId = _PUNDIT.init.waitBeforeInit();
						(function () {
							var h = document.getElementsByTagName("head")[0],
									d = document.createElement("script");
							d.type = "text/javascript";
							d.src = "https://raw.github.com/digitalbazaar/jsonld.js/master/js/jsonld.js";
							h.appendChild(d);
							d.onload = function () {
								self.log("Loaded JSONLD library: checking for named content");
								_PUNDIT.init.doneBeforeInit(self.loadJobId);
								self.checkForNamedContent();
							};
						})();
					},
					checkForNamedContent: function () {
						var self = this,
								uris = {}, num = 0,
								_93a = false;
						for (var i = self.xphelper.opts.contentClasses.length - 1; i >= 0; i--) {
							_4.query("." + self.xphelper.opts.contentClasses[i]).forEach(function (node) {
								var u = _4.attr(node, "about"),
										item = self.createItemForNode(node);
								if (_4.indexOf(self._checkedIdentifiers, u) !== -1) {
									self.log("Skipping " + item.value);
									return;
								}
								self._checkedIdentifiers.push(u);
								num++;
								uris[u] = {
									node: node,
									item: item
								};
								self.log("checkForNamedContent adding: " + u);
							});
						}
						self.log("checkForNamedContent: " + num + " new named contents found");
						for (var k in uris) {
							var _93b = _PUNDIT.tooltipViewer,
									_93c = _4.query(self.opts.moreInfoTag + "[rel=\"http://purl.org/pundit/ont/json-metadata\"]", uris[k].node);
							if (_93c.length > 0) {
								var res = _4.attr(_93c[0], "resource");
								self.log("Getting more info from " + res);
								_4.io.script.get({
									callbackParamName: "jsonp",
									url: res,
									load: (function (item) {
										return function (ld) {
											var _93d = jsonld.getValues(ld, "http://www.w3.org/2000/01/rdf-schema#label")[0],
													_93e = jsonld.getValues(ld, "@type");
											for (var l = _93e.length; l--;) {
												item.rdftype.push(_93e[l]);
											}
											item.label = _93d;
											item.rdfData = semlibItems.createBucketForNamedContent(item).bucket;
											semlibItems.addItem(item, true);
											previewer.buildPreviewForItem(item);
											self.log("Created item from rest service: " + item.label);
										};
									})(uris[k].item),
									error: function (_93f, _940) {
										self.log("Error :| zomg.");
									}
								});
							} else {
								uris[k].item.rdfData = semlibItems.createBucketForNamedContent(uris[k].item).bucket;
								semlibItems.addItem(uris[k].item, true);
								previewer.buildPreviewForItem(uris[k].item);
								self.log("Created item with no additional info: " + uris[k].item.label);
							}
							if (self.opts.consolidateNamedContents) {
								if (!_93b.isTempXpointer(uris[k].item.value) && (_93b.contentURIs.indexOf(uris[k].item.isPartOf) !== -1)) {
									_93b.tempXpointers.push(uris[k].item.value);
									_93a = true;
									self.log("Added named content item to temp xpointers");
								}
							}
						}
						if (_93a) {
						}
					},
					createItemForNode: function (node) {
						var self = this,
								_941, _942, _943 = window.location.href,
								item, _944 = _4.attr(node, "about"),
								xp;
						xp = self.xphelper.getXpFromChildNodes(node);
						_941 = self.xphelper.extractContentFromNode(node);
						_941 = _941.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, " ");
						_942 = _941.length > 50 ? _941.substr(0, 50) + " .." : _941;
						if (_943.indexOf("#xpointer") !== -1) {
							_943 = _943.substring(0, _943.indexOf("#"));
						}
						item = {
							type: ["subject"],
							rdftype: [ns.fragments.named, ns.fragments.text],
							label: _942,
							description: _941,
							value: xp,
							isPartOf: xp.split("#")[0],
							pageContext: _943
						};
						return item;
					},
				});
			}
			if (!_4._hasResource["pundit.ContactHelper"]) {
				_4._hasResource["pundit.ContactHelper"] = true;
				_4.provide("pundit.ContactHelper");
				_4.declare("pundit.ContactHelper", pundit.BaseComponent, {
					opts: {
						postAutomaticHideMS: 2000
					},
					constructor: function () {
						var self = this;
						self._dialogs = {};
						self._instances = {};
						for (var i in self.opts.instances) {
							var id = "form_" + i;
							self._instances[id] = self.opts.instances[i];
							self.log("Initializing contact form with title " + self._instances[id].title);
							self._initContactForm(id);
						}
					},
					_initContactForm: function (id) {
						var self = this,
								_945 = self._instances[id],
								_946 = "";
						_PUNDIT.cMenu.addAction({
							type: ["helpMenu"],
							name: "showContactForm_" + id,
							label: _945.title,
							showIf: function () {
								return true;
							},
							onclick: function () {
								self._showForm(id);
								return true;
							}
						});
						self._dialogs[id] = new _5.Dialog({
							style: "width: 500px"
						});
						_4.addClass(_4.byId(self._dialogs[id].id), "tundra pundit-disable-annotation");
						self._instances[id].contentNode = _4.query("#" + self._dialogs[id].id + " .dijitDialogPaneContent")[0];
						_946 += "<div class=\"pundit-dialog-top pundit-contact-form\">";
						_946 += "  <div class=\"pundit-dialog-errors\"></div>";
						_946 += "  <div class=\"pundit-dialog-content\">";
						_946 += "  <p>" + _945.comment + "</p>";
						_946 += "    <form id=\"pundit-contact-" + id + "\">";
						_946 += "      <label>Subject *</label><input type=\"text\" name=\"subject\" class=\"pundit-contact-subject\" /><br />";
						_946 += "      <label>From</label> <input type=\"text\" name=\"name\" class=\"pundit-contact-from\" /><br />";
						_946 += "      <label>Email</label> <input type=\"email\" name=\"email\" class=\"pundit-contact-email\" /><br />";
						_946 += "      <label>Message *</label> <textarea name=\"text\" class=\"pundit-contact-text\"></textarea><br />";
						_946 += "      <input type=\"hidden\" name=\"identifier\" value=\"" + _945.list + "\" />";
						_946 += "    <form>";
						_946 += "</div></div>";
						_946 += "<div class=\"pundit-dialog-bottom\">";
						_946 += "  <span id=\"pundit-contact-close-button-" + id + "\" class=\"pundit-gui-button\">Cancel</span>";
						_946 += "  <span id=\"pundit-contact-submit-button-" + id + "\" class=\"pundit-gui-button\">Submit</span>";
						_946 += "</div>";
						self._dialogs[id].attr("content", _946);
						self._dialogs[id].attr("title", _945.title);
						self._initFormBehaviors(id);
					},
					_initFormBehaviors: function (id) {
						var self = this;
						_4.connect(_4.byId("pundit-contact-close-button-" + id), "onclick", function (e) {
							if (_4.hasClass(self._instances[id].contentNode, "pundit-panel-loading")) {
								self.log("Contact window is still loading, cancel canceled");
								return;
							}
							self._dialogs[id].hide();
							self._clearForm(id);
						});
						_4.connect(_4.byId("pundit-contact-submit-button-" + id), "onclick", function (e) {
							if (_4.hasClass(self._instances[id].contentNode, "pundit-panel-loading")) {
								self.log("Contact window is still loading, post canceled");
								return;
							}
							self.log("Submitting contact form " + id);
							self._post(id);
						});
					},
					_post: function (id) {
						var self = this;
						self._instances[id].jobId = _PUNDIT.loadingBox.addJob("Sending form " + self._instances[id].title);
						_4.addClass(self._instances[id].contentNode, "pundit-panel-loading");
						var post = {
							url: ns.annotationServerContact,
							form: _4.byId("pundit-contact-" + id),
							load: function (data) {
								self.log("Correctly sent contact form " + id);
								_4.removeClass(self._instances[id].contentNode, "pundit-panel-loading");
								_4.addClass(self._instances[id].contentNode, "pundit-panel-done");
								setTimeout(function () {
									self._hideForm(id);
								}, self.opts.postAutomaticHideMS);
								_PUNDIT.loadingBox.setJobOk(self._instances[id].jobId);
							},
							error: function (_947) {
								self.log("Error sending form " + id);
								_4.removeClass(self._instances[id].contentNode, "pundit-panel-loading");
								_PUNDIT.loadingBox.setJobKo(self._instances[id].jobId);
							}
						};
						_PUNDIT.requester.xPost(post);
					},
					_showForm: function (id) {
						var self = this;
						if (self._dialogs[id].open) {
							self.log("Form " + id + " is already open.");
							return;
						}
						self.log("Showing form " + id);
						_4.removeClass(self._instances[id].contentNode, "pundit-panel-done");
						_4.removeClass(self._instances[id].contentNode, "pundit-panel-loading");
						self._clearForm(id);
						self._dialogs[id].show();
					},
					_hideForm: function (id) {
						var self = this;
						self._dialogs[id].hide();
					},
					_clearForm: function (id) {
						var self = this,
								_948 = self._dialogs[id].id;
						_4.query("#" + _948 + " input:not([type=hidden]), #" + _948 + " textarea").val("");
					}
				});
			}
			if (!_4._hasResource["pundit.Init"]) {
				_4._hasResource["pundit.Init"] = true;
				_4.provide("pundit.Init");
				_4.declare("pundit.Init", pundit.BaseComponent, {
					opts: {
						liveNamespace: "punditLive"
					},
					constructor: function (_949) {
						var self = this,
								p;
						self.log("Initializing Pundit...");
						self.addScoreFunction();
						if (typeof (window[self.opts.liveNamespace]) === "undefined") {
							window[self.opts.liveNamespace] = {};
						}
						p = window[self.opts.liveNamespace];
						window["_PUNDIT"] = window[self.opts.liveNamespace];
						window["PunditLiveNamespaceName"] = self.opts.liveNamespace;
						self.log("Registered '" + self.opts.liveNamespace + "' variable: pundit global namespace object. Also known as '_PUNDIT'.");
						p["init"] = self;
						p["configuration"] = new pundit.Configuration();
						self.createCallback(["initDone"]);
						self.loadJobs = [];
						ns = new pundit.NamespaceHelper();
						p["ns"] = ns;
						previewer = new pundit.Previewer();
						p["previewer"] = previewer;
						cMenu = new pundit.ContextualMenu();
						p["cMenu"] = cMenu;
						requester = new pundit.AuthenticatedRequests();
						p["requester"] = requester;
						semlibWindow = new pundit.GUI();
						p["GUI"] = semlibWindow;
						p["loadingBox"] = new pundit.LoadingBox();
						p["items"] = new pundit.ItemContainerManager();
						fragmentHandler = new pundit.TextFragmentHandler();
						p["fragmentHandler"] = fragmentHandler;
						if (p.config.isModuleActive("pundit.fasttexthandler")) {
							p["fasttexthandler"] = new pundit.FastTextHandler({
								name: "fast-text-handler",
								title: "Connect text",
								drag: true
							});
						}
						if (p.config.isModuleActive("pundit.PageHandler")) {
							p["pageHandler"] = new pundit.PageHandler({
								debug: false
							});
						}
						if (false) {
						}
						var _94a = _4.require;
						p["conductor"] = new pundit.annotators.AnnotatorsConductor();
						for (var an in p.config.modules.annotators) {
							var conf = p.config.modules.annotators[an];
							if (conf.active === true) {
								self.log("Loading annotator " + an);
								_94a("pundit.annotators." + an);
								p.conductor.registerAnnotator(new pundit.annotators[an](conf));
							}
						}
						p["vocab"] = new pundit.selectors.VocabSelector();
						if (false) {
						}
						p.config.activeSelectorsName = [];
						for (var se in p.config.modules.selectors) {
							var conf = p.config.modules.selectors[se];
							if (conf.active === true) {
								self.log("Loading selector " + se);
								_94a("pundit.selectors." + se + "Selector");
								p[conf.name + "Selector"] = new pundit.selectors[se + "Selector"](conf);
								p.config.activeSelectorsName.push(se);
							}
						}
						if (p.config.isModuleActive("pundit.ImageFragmentHandler")) {
							semlibImageFragmentHandler = new pundit.ImageFragmentHandler();
						}
						if (p.config.isModuleActive("pundit.NotebookManager")) {
						}
						semlibLiterals = new pundit.Literals();
						p["literals"] = semlibLiterals;
						p.config.activeEntitySources = {};
						for (var k = p.config.activeSelectorsName.length; k--;) {
							var se = p.config.activeSelectorsName[k],
									conf = p.config.modules.selectors[se];
							p.config.activeEntitySources[conf.name + "Selector"] = {
								label: conf.label
							};
						}
						if (p.config.isModuleActive("pundit.Recognizer")) {
							p["recognizer"] = new pundit.Recognizer();
						}
						p["commentTag"] = new pundit.CommentTagPanel({
							name: "commentTag",
							preview: true,
							drag: true,
							searchType: "search",
							namedEntitiesSources: p.config.activeEntitySources
						});
						if (p.config.isModuleActive("pundit.ImageAnnotationPanel")) {
							p["imageAnnotationPanel"] = new pundit.ImageAnnotationPanel({
								name: "imageAnnotationPanel",
								title: "Image Annotation Panel",
								width: 600,
								height: 400,
								drag: true
							});
						}
						tripleComposer = new pundit.TripleComposer();
						p["tripleComposer"] = tripleComposer;
						tooltip_viewer = new pundit.TooltipAnnotationViewer();
						p["tooltipViewer"] = tooltip_viewer;
						myPundit = new pundit.MyPundit();
						p["myPundit"] = myPundit;
						p["remoteStore"] = new pundit.RemoteStorageHandler();
						if (p.config.isModuleActive("pundit.Help")) {
							p["help"] = new pundit.Help();
						}
						if (p.config.isModuleActive("pundit.NamedContentHandler")) {
							p["namedContentHandler"] = new pundit.NamedContentHandler();
						}
						if (p.config.isModuleActive("pundit.ContactHelper")) {
							p["contact"] = new pundit.ContactHelper();
						}
						_4.style(_4.query("html")[0], "position", "static");
						_4.style(_4.query("body")[0], "position", "static");
						_4.addClass(_4.query("body")[0], "tundra");
						self.checkBeforeInit();
						self.log("Pundit suite components initialization completed!");
					},
					waitBeforeInit: function () {
						var self = this,
								_94b = "job" + (0 | Math.random() * 999999);
						self.loadJobs.push(_94b);
						self.log("A component is asking to wait for him. Job " + _94b);
						return _94b;
					},
					doneBeforeInit: function (_94c) {
						var self = this;
						if (self.loadJobs.indexOf(_94c) !== -1) {
							self.log("Job " + _94c + " is done. (" + self.loadJobs.indexOf(_94c) + ")");
							self.loadJobs.splice(self.loadJobs.indexOf(_94c), 1);
						} else {
							self.log("Non-existent job " + _94c + " is done. Cool.");
						}
						self.checkBeforeInit();
					},
					checkBeforeInit: function () {
						var self = this;
						if (self.loadJobs.length === 0) {
							self.log("No Load Jobs to wait for: Asynchronous component initialization is done!");
							self.fireOnInitDone();
						} else {
							self.log("Still " + self.loadJobs.length + " jobs to wait for ...");
						}
					},
					addScoreFunction: function () {
						String.prototype.score = function (_94d, _94e) {
							if (this === _94d) {
								return 1;
							}
							if (_94d === "") {
								return 0;
							}
							var _94f = 0,
									_950 = _94d.length,
									_951 = this,
									_952 = _951.length,
									_953, _954, _955 = 1,
									_956;
							for (var i = 0, _957, _958, c, _959, _95a, _95b; i < _950; ++i) {
								c = _94d.charAt(i);
								_959 = _951.indexOf(c.toLowerCase());
								_95a = _951.indexOf(c.toUpperCase());
								_95b = Math.min(_959, _95a);
								_958 = (_95b > -1) ? _95b : Math.max(_959, _95a);
								if (_958 === -1) {
									if (_94e) {
										_955 += 1 - _94e;
										continue;
									} else {
										return 0;
									}
								} else {
									_957 = 0.1;
								}
								if (_951[_958] === c) {
									_957 += 0.1;
								}
								if (_958 === 0) {
									_957 += 0.6;
									if (i === 0) {
										_953 = 1;
									}
								} else {
									if (_951.charAt(_958 - 1) === " ") {
										_957 += 0.8;
									}
								}
								_951 = _951.substring(_958 + 1, _952);
								_94f += _957;
							}
							_954 = _94f / _950;
							_956 = ((_954 * (_950 / _952)) + _954) / 2;
							_956 = _956 / _955;
							if (_953 && (_956 + 0.15 < 1)) {
								_956 += 0.15;
							}
							return _956;
						};
					}
				});
				_4.ready(function () {
					var init = new pundit.Init();
				});
			}
		}
	};
});