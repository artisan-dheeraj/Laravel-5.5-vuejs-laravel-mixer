/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_companies_CompaniesIndex_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_companies_CompaniesIndex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_companies_CompaniesIndex_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_companies_CompaniesCreate_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_companies_CompaniesCreate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_companies_CompaniesCreate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_companies_CompaniesEdit_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_companies_CompaniesEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_companies_CompaniesEdit_vue__);




var routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_0__components_companies_CompaniesIndex_vue___default.a, name: 'CompaniesIndex' }, { path: '/create', component: __WEBPACK_IMPORTED_MODULE_1__components_companies_CompaniesCreate_vue___default.a, name: 'createCompany' }, { path: '/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_companies_CompaniesEdit_vue___default.a, name: 'editCompany' }];

var router = new VueRouter({ routes: routes });
var app = new Vue({ router: router }).$mount('#app');

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(46)
/* template */
var __vue_template__ = __webpack_require__(47)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/companies/CompaniesIndex.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64406c22", Component.options)
  } else {
    hotAPI.reload("data-v-64406c22", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            companies: []
        };
    },
    mounted: function mounted() {
        var app = this;
        axios.get('/api/v1/companies').then(function (resp) {
            app.companies = resp.data;
        }).catch(function (resp) {
            console.log(resp);
            alert("Could not load companies");
        });
    },

    methods: {
        deleteEntry: function deleteEntry(id, index) {
            if (confirm("Do you really want to delete it?")) {
                var app = this;
                axios.delete('/api/v1/companies/' + id).then(function (resp) {
                    app.companies.splice(index, 1);
                }).catch(function (resp) {
                    alert("Could not delete company");
                });
            }
        }
    }
});

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "form-group" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-success",
            attrs: { to: { name: "createCompany" } }
          },
          [_vm._v("Create new company")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-heading" }, [_vm._v("Companies list")]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c("table", { staticClass: "table table-bordered table-striped" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.companies, function(company, index) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(company.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(company.address))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(company.website))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(company.email))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-xs btn-default",
                        attrs: {
                          to: {
                            name: "editCompany",
                            params: { id: company.id }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Edit\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-xs btn-danger",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            _vm.deleteEntry(company.id, index)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Delete\n                        "
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            })
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Website")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "100" } }, [_vm._v(" ")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64406c22", module.exports)
  }
}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(49)
/* template */
var __vue_template__ = __webpack_require__(50)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/companies/CompaniesCreate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b8162dc", Component.options)
  } else {
    hotAPI.reload("data-v-4b8162dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            company: {
                name: '',
                address: '',
                website: '',
                email: ''
            }
        };
    },
    methods: {
        validateForm: function validateForm() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (result) _this.saveForm();
            });
        },
        saveForm: function saveForm() {
            var app = this;
            var newCompany = app.company;
            axios.post('/api/v1/companies', newCompany).then(function (resp) {
                app.$router.push({ path: '/' });
            }).catch(function (resp) {
                console.log(resp);
                alert("Could not create your company");
            });
        }
    }
});

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "form-group" },
      [
        _c(
          "router-link",
          { staticClass: "btn btn-default", attrs: { to: "/" } },
          [_vm._v("Back")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _vm._v("Create new company")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                _vm.validateForm($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 form-group" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Company name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.name,
                      expression: "company.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "name" },
                  domProps: { value: _vm.company.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("name"),
                        expression: "errors.has('name')"
                      }
                    ],
                    staticClass: "help text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("name")))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 form-group" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Company address")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.address,
                      expression: "company.address"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "address", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 form-group" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Company website")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "url",
                      expression: "'url'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.website,
                      expression: "company.website"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "website" },
                  domProps: { value: _vm.company.website },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "website", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("website"),
                        expression: "errors.has('website')"
                      }
                    ],
                    staticClass: "help text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("website")))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 form-group" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Company email")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|email",
                      expression: "'required|email'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.email,
                      expression: "company.email"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "text-danger": _vm.errors.has("email") },
                  attrs: { type: "text", name: "email" },
                  domProps: { value: _vm.company.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("email"),
                        expression: "errors.has('email')"
                      }
                    ],
                    staticClass: "help text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("email")))]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12 form-group" }, [
        _c("button", { staticClass: "btn btn-success" }, [_vm._v("Create")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b8162dc", module.exports)
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(52)
/* template */
var __vue_template__ = __webpack_require__(53)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/companies/CompaniesEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81e6aa2c", Component.options)
  } else {
    hotAPI.reload("data-v-81e6aa2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        var app = this;
        var id = app.$route.params.id;
        app.companyId = id;
        axios.get('/api/v1/companies/' + id).then(function (resp) {
            app.company = resp.data;

            console.log(resp.data);
        }).catch(function () {
            alert("Could not load your company");
        });
    },

    data: function data() {
        return {
            companyId: null,
            company: {
                name: '',
                address: '',
                website: '',
                email: ''
            }
        };
    },
    methods: {
        saveForm: function saveForm() {
            event.preventDefault();
            var app = this;
            var newCompany = app.company;
            axios.patch('/api/v1/companies/' + app.companyId, newCompany).then(function (resp) {
                app.$router.replace('/');
            }).catch(function (resp) {
                console.log(resp);
                alert("Could not create your company");
            });
        }
    }
});

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "form-group" },
      [
        _c(
          "router-link",
          { staticClass: "btn btn-default", attrs: { to: "/" } },
          [_vm._v("Back")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-heading" }, [_vm._v("Edit company")]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                _vm.saveForm()
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 form-group" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Company name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.name,
                      expression: "company.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 form-group" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Company address")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.address,
                      expression: "company.address"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "address", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 form-group" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Company website")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.website,
                      expression: "company.website"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.website },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "website", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 form-group" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Company email")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.email,
                      expression: "company.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "email", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12 form-group" }, [
        _c("button", { staticClass: "btn btn-success" }, [_vm._v("Update")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-81e6aa2c", module.exports)
  }
}

/***/ })

/******/ });