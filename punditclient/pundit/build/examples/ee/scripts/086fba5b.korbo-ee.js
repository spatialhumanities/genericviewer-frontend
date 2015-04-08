angular.module("KorboEE", ["ui.bootstrap", "ngResource", "Confirm_module", "APIModule", "templates-main"]), angular.module("KorboEE").controller("EEDirectiveCtrl", ["$scope", "$modal", "APIService", "korboConf", function (a, b, c, d) {
	a.name = "Directive control";
	var e;
	a.$watch("conf", function () {
		a.errorGlobalObjName || (e = c.get(a.conf.globalObjectName), "undefined" != typeof e && (e.exposeOpenSearch(function (b) {
			d.getIsOpenModal() === !1 && ("" === b || "undefined" == typeof b ? (a.open(), a.$digest()) : (a.elemToSearch = b, a.open()))
		}), e.exposeOpenNew(function (b) {
			d.getIsOpenModal() === !1 && ("undefined" == typeof b || "" === b ? a.open("new") : a.open("new", b))
		})))
	}), a.open = function (c, f) {
		"undefined" != typeof e && e.fireOnOpen();
		var g = b.open({backdrop: "static", keyboard: !1, templateUrl: "src/ee-modal/modal.tmpl.html", controller: "modalCtrl", resolve: {DirectiveScope: function () {
			return a
		}, TabToOpen: function () {
			return c
		}, ObjectToSave: function () {
			return f
		}}});
		return d.setIsOpenModal(!0), g
	}
}]), angular.module("KorboEE").controller("modalCtrl", ["$scope", "$rootScope", "korboConf", "EntityResource", "ConfirmDialog", "DirectiveScope", "$modalInstance", "APIService", "TabToOpen", "ObjectToSave", "$window", function (a, b, c, d, e, f, g, h, i, j, k) {
	a.name = "Modal control", a.conf = f.conf, a.elemToSearch = f.elemToSearch, a.numSuccessWaiting = 0;
	var l = h.get(a.conf.globalObjectName);
	a.tabToSelect = "undefined" == typeof i ? "search" : i, "new" === i && "undefined" != typeof j && (a.isCopySelected = !0, a.itemToCopy = {}, "undefined" != typeof j.value && (a.itemToCopy.value = j.value), "undefined" != typeof j.label && (a.itemToCopy.label = j.label), "undefined" != typeof j.type && (a.itemToCopy.type = angular.copy(j.type)), "undefined" != typeof j.image && (a.itemToCopy.depiction = j.image), "undefined" != typeof j.description && (a.itemToCopy.abstract = j.description), "undefined" != typeof j.language && (a.itemToCopy.language_code = j.language)), a.defaultLan = a.conf.languages[0];
	for (var m in a.conf.languages)if (a.conf.languages[m].state === !0) {
		a.defaultLan = a.conf.languages[m];
		break
	}
	"undefined" != typeof a.elemToSearch && a.elemToSearch.length >= a.conf.labelMinLenght && (a.modalJustOpened = !0), a.setCurrentTab = function (b) {
		a.selectedTab = b, a.showItemError = !1, a.EEnewEntityForm.submitted = !1
	}, a.$watch("selectedTab", function () {
		var b = k.document.querySelector(".modal-dialog");
		a.selectedTab = a.selectedTab, "search" === a.selectedTab ? (angular.element(b).removeClass("ee-modal-small"), angular.element(b).addClass("ee-modal-large")) : "new" === a.selectedTab && (angular.element(b).removeClass("ee-modal-large"), angular.element(b).addClass("ee-modal-small"))
	}), a.close = function () {
		"undefined" != typeof l && l.fireOnCancel(), g.close(), c.setIsOpenModal(!1)
	}, "undefined" != typeof l && (l.exposeCancel(function () {
		c.getIsOpenModal() === !0 && (c.setIsOpenModal(!1), a.close(), a.$digest())
	}), l.exposeClearForm(function () {
		c.getIsOpenModal() === !0 && (a.clearEEForm(), a.$digest())
	})), a.clearEEForm = function () {
		a.resetForm = !0
	}, a.cancelEEForm = function () {
		a.EEnewEntityForm.$pristine ? (l.fireOnCancel(), c.setIsOpenModal(!1), g.close()) : a.EEnewEntityForm.$pristine && "searching" !== a.stateForm && "searchSucc" !== a.stateForm || e.confirmation("Are you sure you want to close the editor? You will lose any unsaved changes", "Are you sure?").then(function () {
			l.fireOnCancel(), c.setIsOpenModal(!1), g.close()
		}, function () {
		})
	}, a.submitEEForm = function () {
		if (a.EEnewEntityForm.$valid) {
			a.stateForm = "loading";
			var b = a.EEnewEntityForm.label.$viewValue, e = a.EEnewEntityForm.abstract.$viewValue || "", h = a.EEnewEntityForm.urlName.$viewValue || "", i = [];
			for (var j in a.EEnewEntityForm.types)a.EEnewEntityForm.types[j].checked && i.push(a.EEnewEntityForm.types[j].URI);
			var k = a.EEnewEntityForm.lan.$viewValue.value, m = {label: b, "abstract": e, type: i, depiction: h}, n = d(f.conf, k, "");
			n.save({}, m, function (b, d) {
				a.stateForm = "success", f.location = d("Location"), f.elemToSearch = m.label, f.abstract = m.abstract, f.type = m.type;
				var e = {};
				e.value = d("Location"), e.label = m.label, e.type = m.type, e.image = m.depiction, e.description = m.abstract, e.language = k, "undefined" != typeof l && (l.fireOnSave(e), l.fireOnCancel()), c.setIsOpenModal(!1), g.close()
			}, function () {
				a.stateForm = "error"
			})
		} else a.EEnewEntityForm.submitted = !0, "undefined" != typeof a.EEnewEntityForm.urlName.$viewValue && (a.EEnewEntityForm.urlName.activeValidation = !0)
	}, a.useItem = function (b, e) {
		if (a.conf.copyToKorboBeforeUse && "korbo" !== e) {
			a.stateForm = "loading";
			var h = a.defaultLan.value, i = {label: b.label, "abstract": b.abstract, type: b.type, depiction: b.depiction}, j = d(f.conf, h, "");
			j.save({}, i, function (b, d) {
				a.stateForm = "success", f.elemToSearch = i.label, f.location = d("Location"), f.abstract = i.abstract, f.type = i.type;
				var e = {};
				e.value = d("Location"), e.label = i.label, e.type = i.type, e.image = i.depiction, e.description = i.abstract, e.language = h, l.fireOnSave(e), l.fireOnCancel(), c.setIsOpenModal(!1), g.close()
			}, function () {
				a.stateForm = "error"
			})
		} else {
			f.elemToSearch = b.label;
			var k, m = a.defaultLan.value;
			k = "korbo" === e ? a.conf.endpoint + "/items/" + b.id : "http://location/" + b.label, f.location = k, f.abstract = b.abstract, f.type = b.type;
			var n = {};
			n.value = k, n.label = b.label, n.type = b.type, n.image = b.depiction, n.description = b.abstract, n.language = m, l.fireOnSave(n), l.fireOnCancel(), c.setIsOpenModal(!1), g.close()
		}
	}
}]), angular.module("KorboEE").controller("FormController", ["$scope", function (a) {
	a.name = "Form control";
	var b = a.$parent.$parent;
	b.EEnewEntityForm = a.EEnewEntityForm, a.$watch("EEnewEntityForm", function () {
		b.EEnewEntityForm = a.EEnewEntityForm
	})
}]), angular.module("KorboEE").controller("labelCtrl", ["$scope", function (a) {
	a.name = "Label control";
	var b = a.$parent.$parent.$parent.$parent;
	a.item = b.elemToSearch, a.conf = b.conf, b.$watch("selectedTab", function () {
		a.selectedTab = b.selectedTab
	}), b.$watch("stateForm", function () {
		a.stateForm = b.stateForm
	}), a.update = function () {
		b.elemToSearch = a.item
	}
}]), angular.module("KorboEE").controller("contentCtrl", ["$scope", function (a) {
	a.name = "Content content control";
	var b;
	b = a.$parent.$parent.$parent.$parent, a.tabs = {search: !0, "new": !1};
	for (var c in a.tabs)a.tabs[c] = c !== b.tabToSelect ? !1 : !0;
	b.$watch("stateForm", function () {
		a.stateForm = b.stateForm
	}), b.$watch("numberResult", function () {
		"undefined" == typeof b.numberResult || (a.numResTot = b.numberResult)
	}), a.onTabSelected = function (c) {
		b.setCurrentTab(c);
		for (var d in a.tabs)d !== c && (a.tabs[d] = !1)
	}, b.selectTab = function (b) {
		for (var c in a.tabs)a.tabs[c] = c !== b ? !1 : !0
	}
}]), angular.module("KorboEE").directive("korboEntityEditor", ["korboConf", "APIService", "$window", function (a, b, c) {
	return{restrict: "EA", templateUrl: function (d, e) {
		var f = e.confName || "", g = a.setConfiguration(f);
		if ("undefined" != typeof c[g.globalObjectName])return e.error = !0, "src/ee-directive-modal/korboee-error-config.tmpl.html";
		e.error = !1;
		var h = b.init(g), i = ["OpenSearch", "OpenNew", "Cancel", "ClearForm"], j = ["Open", "Cancel", "Save"];
		return h.addEvent(j), h.addFeature(i), null !== g.onLoad && "function" == typeof g.onLoad && g.onLoad(), g.useOnlyCallback || !g.useTafonyCompatibility && !g.useOnlyCallback ? "src/ee-directive-modal/korboee-callback.tmpl.html" : g.useTafonyCompatibility ? "src/ee-directive-modal/korboee-entity.tmpl.html" : void 0
	}, scope: {}, link: function (b, c, d) {
		var e = d.confName || "";
		b.conf = a.setConfiguration(e), b.abstract = "", b.location = "", b.errorGlobalObjName = d.error, a.setIsOpenModal(!1)
	}, controller: "EEDirectiveCtrl"}
}]), angular.module("KorboEE").controller("newContentCtrl", ["$scope", function (a) {
	a.name = "New content control";
	var b = a.$parent.$parent.$parent.$parent.$parent.$parent.$parent;
	a.countItem = 0, a.conf = b.conf, a.copyConf = angular.copy(a.conf), a.types = angular.copy(a.conf.type), a.newLan = a.copyConf.languages[0];
	for (var c in a.copyConf.languages)if (a.copyConf.languages[c].state === !0) {
		a.newLan = a.copyConf.languages[c];
		break
	}
	b.$watch("selectedTab", function () {
		a.currentTab = b.selectedTab
	}), b.$watch("resetForm", function () {
		if (b.resetForm) {
			a.newLan = a.copyConf.languages[0];
			for (var c in a.copyConf.languages)if (a.copyConf.languages[c].state === !0) {
				a.newLan = a.copyConf.languages[c];
				break
			}
			a.types = angular.copy(a.conf.type), a.newLabel = "", a.newAbstract = "", a.newUrl = "", a.originalUrl = "", a.updateTypes(), b.resetForm = !1
		}
	}), b.$watch("isCopySelected", function () {
		if (b.isCopySelected = !1, "undefined" != typeof b.itemToCopy) {
			if (a.newLabel = b.itemToCopy.label, a.newAbstract = b.itemToCopy.abstract, a.newUrl = b.itemToCopy.depiction, "undefined" != typeof b.itemToCopy.value)a.originalUrl = b.itemToCopy.value; else switch (b.providerCopy) {
				case"korbo":
					a.originalUrl = a.conf.endpoint + "/items/" + b.itemToCopy.id;
					break;
				case"freebase":
					a.originalUrl = "http://original_url/" + b.itemToCopy.id
			}
			for (var c in a.copyConf.languages)if (a.copyConf.languages[c].value === b.itemToCopy.language_code) {
				a.newLan = a.copyConf.languages[c];
				break
			}
			var d = !0;
			a.types = angular.copy(a.conf.type);
			for (var e in b.itemToCopy.type) {
				d = !0;
				var f = {};
				for (var g in a.types)if (a.types[g].URI === b.itemToCopy.type[e]) {
					d = !1, a.types[g].checked = !0;
					break
				}
				d && (f.label = b.itemToCopy.type[e], f.URI = b.itemToCopy.type[e], f.checked = !0, a.types.push(f))
			}
		}
		a.updateTypes()
	});
	for (var d in a.types)a.types[d].checked = a.types[d].state || !1;
	a.updateTypes = function () {
		a.countItem = 0;
		for (var c in a.types) {
			var d = a.types[c];
			d.checked && (a.countItem += 1)
		}
		b.EEnewEntityForm.types = a.types
	}, a.updateTypes()
}]).directive("checkType", function () {
	return{require: "ngModel", link: function (a, b, c, d) {
		a.$watch("countItem", function () {
			return a.countItem > 0 ? (d.$setValidity("minCheckReq", !0), void 0) : (d.$setValidity("minCheckReq", !1), void 0)
		})
	}}
}).directive("checkLen", function () {
	return{require: "ngModel", link: function (a, b, c, d) {
		a.$watch("newLabel", function () {
			return"undefined" != typeof a.newLabel && a.newLabel.length >= a.conf.labelMinLenght ? (d.$setValidity("minLenCheck", !0), void 0) : "undefined" != typeof a.newLabel && a.newLabel.length < a.conf.labelMinLenght ? (d.$setValidity("minLenCheck", !1), void 0) : void 0
		})
	}}
}), angular.module("KorboEE").controller("searchContentCtrl", ["$rootScope", "$scope", "EntityResource", "$timeout", function (a, b, c, d) {
	b.name = "Search content control";
	var e = b.$parent.$parent.$parent.$parent.$parent.$parent.$parent;
	b.conf = e.conf, b.elemToSearch = e.elemToSearch, b.fullPreview = !1, b.shortPreview = !1, b.numActiveProvider = 0, b.limit = b.conf.limitSearchResult, b.offset = 0, b.setPage = function (a, c) {
		b.offset = b.limit * (a - 1), b.currentPage = a, b.searchItem(c)
	}, b.resetPaginator = function () {
		b.currentPage = 0, b.offset = 0
	}, e.$watch("stateForm", function () {
		b.stateForm = e.stateForm
	}), b.results = {}, e.numberResult = "";
	for (var f in b.conf.providers)b.conf.providers[f] === !0 && (b.results[f] = {label: f, res: {}}, b.numActiveProvider++);
	e.numSuccessWaiting = b.numActiveProvider;
	var g, h = e.defaultLan.value, i = function (a, b) {
		var c = b();
		return c["Accept-Language"] = h, JSON.stringify(a)
	}, j = c(b.conf, "", i);
	e.$watch("elemToSearch", function () {
		e.modalJustOpened ? (e.modalJustOpened = !1, b.searchItem()) : (d.cancel(g), k())
	});
	var k = function () {
		g = d(function () {
			b.searchItem()
		}, b.conf.updateTime)
	};
	b.searchItem = function (a) {
		if (b.elemToSearch = e.elemToSearch, "undefined" != typeof a)j.query({q: b.elemToSearch, provider: a, lang: e.defaultLan.value, limit: b.limit, offset: b.offset}, function (c) {
			b.results[a].res = c, e.stateForm = "searchSucc"
		}, function () {
			e.stateForm = "searchErr"
		}); else if (b.elemToSearch = e.elemToSearch, e.numSuccessWaiting = b.numActiveProvider, "undefined" != typeof b.elemToSearch && b.elemToSearch.length >= b.conf.labelMinLenght) {
			var c = b.elemToSearch;
			e.stateForm = "searching";
			var d = 0;
			for (var f in b.results)b.results[f].res = j.query({q: c, provider: f, lang: e.defaultLan.value, limit: b.limit, offset: b.offset}, function (a) {
				e.stateForm = "searchSucc", e.numSuccessWaiting--, d += parseInt(a.metadata.totalCount, 10), e.numberResult = d
			}, function () {
				e.stateForm = "searchErr"
			})
		}
	}, b.getItem = function (a, c) {
		"undefined" != typeof b.itemSelected && b.itemSelected.id === a ? b.shortPreview = !1 : j.get({id: a, p: c}, function (d) {
			"" === d.label ? (h = d.available_languages[0], j.get({id: a, p: c}, function (a) {
				b.item = a, b.shortPreview = !0
			}, function () {
				b.shortPreview = !1
			})) : (b.item = d, b.shortPreview = !0)
		}, function () {
			b.shortPreview = !1
		})
	}, b.selectItem = function (a, c) {
		e.stateForm = "searchSucc", j.get({id: a, p: c}, function (d) {
			"" === d.label ? (h = d.available_languages[0], j.get({id: a, p: c}, function (a) {
				b.fullPreview = !0, b.shortPreview = !1, b.itemSelected = a, b.selectedItemProvider = c
			}, function () {
				b.fullPreview = !1
			})) : (b.fullPreview = !0, b.shortPreview = !1, b.itemSelected = d, b.selectedItemProvider = c)
		}, function () {
			b.fullPreview = !1
		})
	}, b.resetPrev = function () {
		b.shortPreview = !1
	}, b.useItem = function () {
		e.useItem(b.itemSelected, b.selectedItemProvider)
	}, b.copyItem = function () {
		e.isCopySelected = !0, e.itemToCopy = b.itemSelected, e.providerCopy = b.selectedItemProvider, e.selectTab("new"), e.resetForm = !1
	}, b.getClass = function (a) {
		return"undefined" != typeof b.itemSelected && b.itemSelected.id === a ? "ee-item-selected" : ""
	}
}]);
var KORBODEFAULTCONF;
KORBODEFAULTCONF = {endpoint: "http://korbo.default.local/v1", basketID: 1, updateTime: 1e3, labelMinLenght: 3, copyToKorboBeforeUse: !1, tafonyId: "default_tafony_id", tafonyName: "default_tafony_name", useTafonyCompatibility: !1, useOnlyCallback: !1, globalObjectName: "EE", onLoad: null, searchTypes: ["http://person.uri", "http://philosopher.uri", "http://place.uri"], limitSearchResult: 10, providers: {korbo: !0, freebase: !1, dbpedia: !1}, buttonLabel: "Default Search", type: [
	{label: "Person", state: !1, URI: "http://person.uri"},
	{label: "Philosopher", state: !0, URI: "http://philosopher.uri"},
	{label: "Place", state: !0, URI: "http://place.uri"}
], languages: [
	{name: "Italian", value: "it", state: !1},
	{name: "English", value: "en", state: !0},
	{name: "German", value: "de", state: !1}
]}, angular.module("KorboEE").factory("korboConf", function () {
	var a = angular.copy(KORBODEFAULTCONF), b = function (b) {
		return"undefined" == typeof b || "undefined" == typeof window[b] || "" === b ? angular.copy(KORBODEFAULTCONF) : (a = angular.copy(KORBODEFAULTCONF), angular.extend(a, window[b]), a)
	};
	return a.setConfiguration = b, a.setIsOpenModal = function (b) {
		a.modalOpen = b
	}, a.getIsOpenModal = function () {
		return a.modalOpen
	}, a
}), angular.module("KorboEE").factory("EntityResource", ["$resource", function (a) {
	return function (b, c, d) {
		var e = b.endpoint, f = b.basketID;
		return a(e, {}, {save: {method: "POST", headers: {"Access-Control-Expose-Headers": "Location", "Content-Language": c}, url: e + "/baskets/" + f + "/items"}, query: {method: "GET", url: e + "/search/items", transformRequest: d, cache: !1}, get: {method: "GET", url: e + "/baskets/" + f + "/items/:id", transformRequest: d, cache: !0}})
	}
}]), angular.module("Confirm_module", ["ui.bootstrap"]).factory("ConfirmDialog", ["$modal", function (a) {
	function b(b, c) {
		var d = a.open({templateUrl: "src/confirm/confirm.tmpl.html", backdrop: "static", keyboard: !1, resolve: {data: function () {
			return{title: c ? c : "Confirm", message: b}
		}}, controller: "ConfirmController"});
		return d.result
	}

	return{confirmation: b}
}]), angular.module("Confirm_module").controller("ConfirmController", ["$scope", "$modalInstance", "data", function (a, b, c) {
	a.name = "Confirm", a.data = c, a.ok = function () {
		b.close()
	}, a.cancel = function () {
		b.dismiss()
	}
}]), angular.module("APIModule", []).service("APIService", ["$window", function (a) {
	function b(a) {
		return this.conf = a, this.eventCallbacks = {}, this.featureCallbacks = {}, this.global = {}, this
	}

	var c = [], d = {};
	return b.prototype.addEvent = function (a) {
		var b = this, c = b.eventCallbacks, d = a;
		"string" == typeof a && (d = [a]);
		for (var e in d) {
			var f = d[e];
			c[f] = [], b.global["on" + f] = function (a) {
				return function (b) {
					"function" == typeof b && c[a].push(b)
				}
			}(f), b["fireOn" + f] = function (a) {
				return function () {
					var b = Array.prototype.splice.call(arguments, 0);
					for (var d in c[a])c[a][d].apply(this, b)
				}
			}(f)
		}
	}, b.prototype.addFeature = function (a) {
		var b = this, c = b.featureCallbacks, d = a;
		"string" == typeof a && (d = [a]);
		for (var e in d) {
			var f = d[e];
			b["expose" + f] = function (a) {
				return function (b) {
					"function" == typeof b && (c[a] = b)
				}
			}(f), b.global["call" + f] = function (a) {
				return function () {
					if (a in c) {
						var d = Array.prototype.splice.call(arguments, 0);
						return c[a].apply(b, d)
					}
				}
			}(f)
		}
	}, d.init = function (d) {
		if ("globalObjectName"in d) {
			var e = new b(d);
			return a[d.globalObjectName] = e.global, c[d.globalObjectName] = e, e
		}
	}, d.get = function (a) {
		return c[a]
	}, d
}]), angular.module("templates-main", ["src/confirm/confirm.tmpl.html", "src/ee-content/content.tmpl.html", "src/ee-content/ee-new/new-content.tmpl.html", "src/ee-content/ee-search/search-content.tmpl.html", "src/ee-directive-modal/korboee-callback.tmpl.html", "src/ee-directive-modal/korboee-entity.tmpl.html", "src/ee-directive-modal/korboee-error-config.tmpl.html", "src/ee-label/label.tmpl.html", "src/ee-modal/modal.tmpl.html"]), angular.module("src/confirm/confirm.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/confirm/confirm.tmpl.html", '<div class="modal-header">\n    <h3>{{ data.title }}</h3>\n</div>\n<div class="modal-body">\n    {{ data.message }}\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">OK</button>\n    <button class="btn btn-warning" ng-click="cancel()">Cancel</button>\n</div>')
}]), angular.module("src/ee-content/content.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/ee-content/content.tmpl.html", '<div ng-controller="contentCtrl">\n\n    <tabset class="ee-nav-tabset">\n        <tab class="ee-tab" select="onTabSelected(\'search\')" active="tabs[\'search\']">\n            <tab-heading >Search \n                <span class="badge ee-res-tot" ng-show="stateForm != \'searching\'">{{numResTot}}</span>\n            </tab-heading>\n            <ng-include src="\'src/ee-content/ee-search/search-content.tmpl.html\'"/>\n        </tab>\n\n        <tab class="ee-tab" heading="New" select="onTabSelected(\'new\')" active="tabs[\'new\']">\n            <ng-include src="\'src/ee-content/ee-new/new-content.tmpl.html\'"/>\n        </tab>\n\n    </tabset>\n\n</div>')
}]), angular.module("src/ee-content/ee-new/new-content.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/ee-content/ee-new/new-content.tmpl.html", '<div ng-controller="newContentCtrl" class="ee-new">\n    <div class="form-group">\n        <div class="input-group col-lg-10 ee-original-url-container" ng-show="originalUrl !== undefined && originalUrl !== \'\' ">\n            <span class="input-group-addon">Original URL</span>\n            <input\n                name="originalUrl"\n                type="url"\n                ng-model="originalUrl"\n                class="ee-original-url form-control"\n                ng-disabled="true"\n                >\n            </input>\n        </div> <!-- div input-group -->\n    </div> <!-- div form-group -->\n    \n    <div class="form-group">\n        <div class="input-group col-lg-10">\n            <span class="input-group-addon">Label</span>\n            <input type="text"\n                name="label"\n                class="form-control ee-modal-label-input"\n                ng-model="newLabel"\n                check-len\n                required />\n        </div>    <!-- div input-group -->\n\n        <div class="alert alert-danger error error-min-len"\n            ng-show="EEnewEntityForm.submitted && EEnewEntityForm.label.$error.minLenCheck && !EEnewEntityForm.label.$error.required">\n            Label must be at least {{conf.labelMinLenght}} characters.\n        </div> <!-- div error-min-len -->\n        \n        <div class="alert alert-danger error error-required" \n            ng-show="EEnewEntityForm.submitted && EEnewEntityForm.label.$error.required" >\n            Label is required.\n        </div> <!-- div error-label-req -->\n    </div> <!-- div form-group -->\n    \n    <div class="form-group">\n        <div class="input-group ol-lg-10">\n            <span class="input-group-addon">Abstract</span>\n            <textarea\n                rows="5"\n                cols="20"\n                ng-model="newAbstract"\n                name="abstract"\n                class="form-control ee-abstract-input">\n            </textarea>\n        </div>    \n    </div> <!-- div form-group -->\n    \n    <div class="form-group">\n        <div class="input-group col-lg-10">\n            <span class="input-group-addon">Image URL</span>\n            <input\n                name="urlName"\n                type="url"\n                ng-model="newUrl"\n                class="ee-url-input form-control"\n                >\n            </input>\n        </div> <!-- div input-group -->\n        <div class="alert alert-danger error error-url-invalid"\n            ng-show="EEnewEntityForm.submitted && EEnewEntityForm.urlName.$error.url && EEnewEntityForm.urlName.activeValidation">\n            Invalid URL\n        </div>\n    </div> <!-- div form-group -->    \n\n    <div class="row">\n        <div class="col-md-6">\n          <div class="form-group">\n              <label for="lan">Language</label>    \n              <select\n                  ng-model="newLan"\n                  name="lan"\n                  ng-options="l.name for l in copyConf.languages"\n                  class="ee-lan form-control">\n              </select>\n          </div> <!-- div form-group language-->\n      </div><!-- /.col-lg -->\n      \n          <div class="col-md-6">\n              <div class="form-group">\n                  <label for="items">Types</label>\n                  <div ng-repeat="item in types"\n                      class="ee-type form-group checkbox">\n                      <label>\n                      <input \n                          type="checkbox"\n                          class="ee-type-input"\n                          name="items"\n                          ng-change="updateTypes()"\n                          ng-model="item.checked"\n                          value="{{item.uri}}"\n                          check-type />\n                      {{item.label}}\n                      </label>\n                  </div> <!-- div ng-repeat item  -->\n              </div> <!-- div form-group types-->\n          </div><!-- /.col-lg -->\n    </div><!-- /.row -->    \n          \n        <div \n            class="alert alert-danger error error-type-required"\n            ng-show="EEnewEntityForm.submitted && EEnewEntityForm.items.$error.minCheckReq">\n            Must select at least 1 type\n        </div>\n    \n</div> <!-- div ng-controller-->\n\n\n            \n   \n\n')
}]), angular.module("src/ee-content/ee-search/search-content.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/ee-content/ee-search/search-content.tmpl.html", '<div ng-controller = "searchContentCtrl" class="ee-search">\n    \n    <tabset\n        vertical="true"\n        type="navType"\n        class="container ee-vertical-tab">\n        \n        <!-- SHOW A TAB FOR EACH PROVIDER -->\n            <tab ng-repeat = "r in results" class="ee-provider-tab" select="resetPaginator()">\n                <tab-heading\n                    class="ee-tab-provider">\n                    {{r.label}}\n                    <span class="badge ee-num-res" ng-show="stateForm != \'searching\'">{{r.res.metadata.totalCount}}</span>\n                </tab-heading>\n                <div class="row">\n                    <div class="col-md-2">\n                        <ul class="list-group ee-list-group-items">\n                            <li class="list-group-item ee-item-label"\n                                ng-repeat = "item in r.res.data"\n                                ng-mouseover = "getItem(item.id, r.label)"\n                                ng-mouseout="resetPrev()"\n                                ng-class="getClass(item.id)"\n                                ng-click="selectItem(item.id, r.label)">\n                                {{item.label}}\n                            </li>\n                            <pagination ng-show="r.res.metadata.totalCount > limit"\n                                total-items="r.res.metadata.totalCount"\n                                on-select-page="setPage(page, r.label)"\n                                items-per-page="limit"\n                                page="currentPage"\n                                max-size = "3"                            \n                                class = "pagination-sm ee-pagination"\n                                boundary-links="true"\n                                previous-text="&lsaquo;"\n                                next-text="&rsaquo;"\n                                first-text="&laquo;"\n                                last-text="&raquo;"\n                                >\n                            </pagination>   \n                        </ul>\n                        <div class="error error-search alert alert-danger" ng-show="r.res.metadata.totalCount == 0">\n                            No results for {{r.label}}\n                        </div> <!-- end div no results -->\n                    \n                    </div> <!-- end div col-md-2 list li -->\n                    \n                <!-- SHORT PREVIEW PANEL -->\n                <div class="panel panel-default col-md-2 ee-short-item-preview" ng-show="shortPreview">\n                    <div class="row">\n                        <div class="col-md-12">\n                             <div class="ee-item-label-short-preview"><h4>{{item.label}}</h4></div> \n                        </div>\n                    </div> <!-- row -->\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div>\n                                <div class="ee-item-pic-short-preview">\n                                    <div class="ee-no-depiction" ng-if="item.depiction == \'\'"></div>\n                                    <img ng-src="{{item.depiction}}" ng-if="item.depiction != \'\'">\n                                </div>\n                                <div class="ee-item-abstract-short-preview"> \n                                {{item.abstract | limitTo:80}}\n                                </div>\n                            </div>\n                        </div>\n                    </div> <!-- row -->\n                </div>  <!-- ee-short-item-preview -->\n <!-- end panel preview -->\n                \n\n                \n                <!-- FULL PREVIEW PANEL -->\n                <div class="panel panel-default col-md-2 ee-full-item-preview" ng-show="fullPreview && !shortPreview">\n                    <div class="row">\n                        <div class="col-md-12">\n                             <div class="ee-item-label-full-preview"><h4>{{itemSelected.label}}</h4></div> \n                            <div class="ee-button-container">\n                                <button type="button" class="btn btn-primary btn-xs ee-btn-use" ng-click="useItem()">Use</button>\n                                <button type="button" class="btn btn-primary btn-xs ee-btn-copy" ng-click="copyItem()">Copy</button>\n                                <button type="button" class="btn btn-primary btn-xs ee-btn-edit" ng-show = "selectedItemProvider === \'korbo\'">Edit</button>\n                            </div>\n                        </div>\n                    </div> <!-- row -->\n                    \n                    <div class="row">\n                        <div class="col-md-12">\n                            <div>\n                                <div class="ee-item-pic-full-preview">\n                                    <div class="ee-no-depiction" ng-if="itemSelected.depiction == \'\'"></div>\n                                    <img ng-src="{{itemSelected.depiction}}" ng-if="itemSelected.depiction != \'\'">\n                                </div>\n                                <!-- <div class="ee-item-label-full-preview">{{itemSelected.label}}</div> -->\n                                <div class="ee-item-abstract-full-preview"> \n                                {{itemSelected.abstract}}\n                                </div>\n                            </div>\n                        </div>\n                    </div> <!-- row -->\n                    \n                    <div class="row">\n                        <div class="col-md-12">\n                            <div class="ee-item-type-full-preview"><h5>Type:</h5> {{itemSelected.type}}</div>\n                        </div>\n                    </div> <!-- row -->\n                </div> <!-- end panel preview -->\n            </div>\n            \n            </tab>\n      </tabset>\n\n\n<div> <!-- fine div ng-controller -->\n')
}]), angular.module("src/ee-directive-modal/korboee-callback.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/ee-directive-modal/korboee-callback.tmpl.html", "<!-- \nUse only callback mode.\nYou can use API registered on Global Object defined in your configuration \n-->\n\n")
}]), angular.module("src/ee-directive-modal/korboee-entity.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/ee-directive-modal/korboee-entity.tmpl.html", '<div class="container" id="korbo-ee-container">\n    <div class="row">\n        <div class="input-group input-group-sm ee-input-container col-md-4">\n            <input class="form-control ee-input-elem-to-search" name="{{conf.tafonyName}}" id="{{conf.tafonyId}}" placeholder="Type in to search.." ng-keypress="$event.keyCode == 13 ? open() : null" type="text" ng-model="elemToSearch">\n            <span class="input-group-btn">\n                <span class="ee-input-button btn btn-primary btn-sm" ng-click="open()">{{conf.buttonLabel}}</span>\n            </span>\n        </div> <!-- div ee-input-container -->\n    </div> <!-- div row -->\n    \n    <!-- input hidden -->\n    <input type="hidden" name="{{conf.tafonyName}}_korbo_uri" value="{{location}}" class="ee-uri-hidden"></input>\n    <input type="hidden" name="{{conf.tafonyName}}_korbo_label" value="{{elemToSearch}}" class="ee-label-hidden"></input>\n    <!-- fine input hidden -->\n\n</div> <!-- div container -->\n\n\n\n')
}]), angular.module("src/ee-directive-modal/korboee-error-config.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/ee-directive-modal/korboee-error-config.tmpl.html", '<div class="container error-ee-config">\n    <div class="row container alert alert-danger error col-md-4">\n        Configuration Error. Object {{conf.globalObjectName}} existing. Please check your configuration!\n    </div>\n</div>')
}]), angular.module("src/ee-label/label.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/ee-label/label.tmpl.html", '<div class="ee-label-contr" ng-controller="labelCtrl">\n    <div class="form-group">\n        <div class="input-group">\n            <span class="input-group-addon">Search</span>\n            <input placeholder="Type at least {{conf.labelMinLenght}} characters..."\n                type="text"\n                ng-disabled="selectedTab === \'search\' && stateForm === \'searching\'"\n                class="form-control ee-modal-search-input"\n                ng-model="item"\n                ng-change="update()"\n                />\n        </div> <!-- div input-group-->\n    </div> <!-- div form-group label -->\n    \n\n</div> <!-- div ee-label-contr -->')
}]), angular.module("src/ee-modal/modal.tmpl.html", []).run(["$templateCache", function (a) {
	a.put("src/ee-modal/modal.tmpl.html", '<div id="ee-modal">\n    <div class="modal-header">\n        <h3>Edit Entity</h3>\n    </div> <!-- div modal-header -->\n\n    <div class="modal-body ee-container"\n        ng-class="{\'ee-loading\' : stateForm===\'loading\'}">\n    \n        <form role="form" \n            name="EEnewEntityForm"\n            novalidate\n            class="new-ee-form-class"\n            ng-controller="FormController">\n        \n            <div class="error error-form alert alert-danger"ng-show="stateForm===\'error\' || stateForm === \'searchErr\' ">Il server non risponde</div>\n        \n            <div ng-include src="\'src/ee-label/label.tmpl.html\'"></div>\n        \n            <div class="error error-item-select alert alert-danger" ng-show="showItemError">Must select an item</div>\n        \n            <div class="error search-warning alert alert-warning" \n                ng-show="numSuccessWaiting > 0 && selectedTab === \'search\' && elemToSearch !== undefined &&  elemToSearch.length >= conf.labelMinLenght">Searching...</div>\n        \n            <div ng-include src="\'src/ee-content/content.tmpl.html\'"></div>\n    \n        </form>\n    </div> <!-- div modal-body -->\n\n    <div class="modal-footer ee-footer" ng-class="{\'ee-loading\' : stateForm === \'loading\'}">\n    \n        <button class="ee-loading-button btn btn-success" disabled ng-show="stateForm === \'loading\'">\n            <i class=""></i>\n            Saving .....\n        </button> <!-- button saving... -->\n    \n        <button class="btn btn-primary ee-save-btn" ng-click="submitEEForm()" ng-show="stateForm !== \'loading\' && selectedTab === \'new\'">\n            <i class="glyphicon glyphicon-floppy-disk"></i>\n            Save\n        </button> <!-- button save -->\n    \n        <button class="btn btn-primary ee-clear-form" ng-click="clearEEForm()" ng-show="stateForm !== \'loading\' && selectedTab === \'new\'">Clear</button> <!-- button cancel -->\n        <button class="btn btn-warning" ng-click="cancelEEForm()" ng-show="stateForm !== \'loading\'">Cancel</button> <!-- button cancel -->\n    </div> <!-- div modal-footer -->\n</div>')
}]);