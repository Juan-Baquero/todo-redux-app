function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _todos_todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./todos/todo-page/todo-page.component */
    "./src/app/todos/todo-page/todo-page.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'todoapp';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo-page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
        }
      },
      directives: [_todos_todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_1__["TodoPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _todos_todo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todos/todo.module */
    "./src/app/todos/todo.module.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.reducer */
    "./src/app/app.reducer.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _todos_todo_module__WEBPACK_IMPORTED_MODULE_4__["TodoModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_7__["appReducers"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _todos_todo_module__WEBPACK_IMPORTED_MODULE_4__["TodoModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _todos_todo_module__WEBPACK_IMPORTED_MODULE_4__["TodoModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_7__["appReducers"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.reducer.ts":
  /*!********************************!*\
    !*** ./src/app/app.reducer.ts ***!
    \********************************/

  /*! exports provided: appReducers */

  /***/
  function srcAppAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducers", function () {
      return appReducers;
    });
    /* harmony import */


    var _todos_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./todos/todo.reducer */
    "./src/app/todos/todo.reducer.ts");
    /* harmony import */


    var _filtro_filtro_reduder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./filtro/filtro.reduder */
    "./src/app/filtro/filtro.reduder.ts");

    var appReducers = {
      todos: _todos_todo_reducer__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
      filtro: _filtro_filtro_reduder__WEBPACK_IMPORTED_MODULE_1__["filtroReducer"]
    };
    /***/
  },

  /***/
  "./src/app/filtro/filtro.actions.ts":
  /*!******************************************!*\
    !*** ./src/app/filtro/filtro.actions.ts ***!
    \******************************************/

  /*! exports provided: setFiltro */

  /***/
  function srcAppFiltroFiltroActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setFiltro", function () {
      return setFiltro;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var setFiltro = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Filtro] Set Filtro', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/filtro/filtro.reduder.ts":
  /*!******************************************!*\
    !*** ./src/app/filtro/filtro.reduder.ts ***!
    \******************************************/

  /*! exports provided: initialState, filtroReducer */

  /***/
  function srcAppFiltroFiltroReduderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filtroReducer", function () {
      return filtroReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _filtro_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./filtro.actions */
    "./src/app/filtro/filtro.actions.ts");

    var initialState = 'todos';

    var _filtroReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_filtro_actions__WEBPACK_IMPORTED_MODULE_1__["setFiltro"], function (state, _ref) {
      var filtro = _ref.filtro;
      return filtro;
    }));

    function filtroReducer(state, action) {
      return _filtroReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 15,
      vars: 0,
      consts: [[1, "info"], ["href", "http://sindresorhus.com"], ["href", "http://todomvc.com"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Double-click to edit a todo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Template by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sindre Sorhus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "you");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Part of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TodoMVC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todos/filtro.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/todos/filtro.pipe.ts ***!
    \**************************************/

  /*! exports provided: FiltroPipe */

  /***/
  function srcAppTodosFiltroPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltroPipe", function () {
      return FiltroPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FiltroPipe = /*#__PURE__*/function () {
      function FiltroPipe() {
        _classCallCheck(this, FiltroPipe);
      }

      _createClass(FiltroPipe, [{
        key: "transform",
        value: function transform(todos, filtro) {
          switch (filtro) {
            case 'completados':
              return todos.filter(function (todo) {
                return todo.completado;
              });

            case 'pendientes':
              return todos.filter(function (todo) {
                return !todo.completado;
              });

            default:
              return todos;
          }
        }
      }]);

      return FiltroPipe;
    }();

    FiltroPipe.ɵfac = function FiltroPipe_Factory(t) {
      return new (t || FiltroPipe)();
    };

    FiltroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filtroTodo",
      type: FiltroPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltroPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filtroTodo'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/todos/models/todo.model.ts":
  /*!********************************************!*\
    !*** ./src/app/todos/models/todo.model.ts ***!
    \********************************************/

  /*! exports provided: Todo */

  /***/
  function srcAppTodosModelsTodoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });

    var Todo = /*#__PURE__*/_createClass(function Todo(texto) {
      _classCallCheck(this, Todo);

      this.texto = texto;
      this.id = Math.random();
      this.completado = false;
    });
    /***/

  },

  /***/
  "./src/app/todos/todo-add/todo-add.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/todos/todo-add/todo-add.component.ts ***!
    \******************************************************/

  /*! exports provided: TodoAddComponent */

  /***/
  function srcAppTodosTodoAddTodoAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function () {
      return TodoAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../todo.actions */
    "./src/app/todos/todo.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var TodoAddComponent = /*#__PURE__*/function () {
      function TodoAddComponent(store) {
        _classCallCheck(this, TodoAddComponent);

        this.store = store;
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
      }

      _createClass(TodoAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregar",
        value: function agregar() {
          if (this.txtInput.invalid) {
            return;
          }

          this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["crear"]({
            texto: this.txtInput.value
          }));
          this.txtInput.reset();
        }
      }]);

      return TodoAddComponent;
    }();

    TodoAddComponent.ɵfac = function TodoAddComponent_Factory(t) {
      return new (t || TodoAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    TodoAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoAddComponent,
      selectors: [["app-todo-add"]],
      decls: 4,
      vars: 1,
      consts: [[1, "header"], ["placeholder", "What needs to be done?", "autofocus", "", 1, "new-todo", 3, "formControl", "keyup.enter"]],
      template: function TodoAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TodoAddComponent_Template_input_keyup_enter_3_listener() {
            return ctx.agregar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.txtInput);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tYWRkL3RvZG8tYWRkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-add',
          templateUrl: './todo-add.component.html',
          styleUrls: ['./todo-add.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todos/todo-footer/todo-footer.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/todos/todo-footer/todo-footer.component.ts ***!
    \************************************************************/

  /*! exports provided: TodoFooterComponent */

  /***/
  function srcAppTodosTodoFooterTodoFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function () {
      return TodoFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _filtro_filtro_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../filtro/filtro.actions */
    "./src/app/filtro/filtro.actions.ts");
    /* harmony import */


    var _todos_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../todos/todo.actions */
    "./src/app/todos/todo.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TodoFooterComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoFooterComponent_li_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var filtro_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.cambiarFiltro(filtro_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var filtro_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", filtro_r1 == ctx_r0.filtroActual);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, filtro_r1));
      }
    }

    var TodoFooterComponent = /*#__PURE__*/function () {
      function TodoFooterComponent(store) {
        _classCallCheck(this, TodoFooterComponent);

        this.store = store;
        this.filtroActual = 'todos';
        this.filtros = ['todos', 'completados', 'pendientes'];
        this.pendientes = 0;
      }

      _createClass(TodoFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.store.subscribe(function (state) {
            _this.filtroActual = state.filtro;
            _this.pendientes = state.todos.filter(function (todo) {
              return !todo.completado;
            }).length;
          });
        }
      }, {
        key: "cambiarFiltro",
        value: function cambiarFiltro(filtro) {
          this.store.dispatch(_filtro_filtro_actions__WEBPACK_IMPORTED_MODULE_1__["setFiltro"]({
            filtro: filtro
          }));
        }
      }, {
        key: "eliminarCompletados",
        value: function eliminarCompletados() {
          this.store.dispatch(_todos_todo_actions__WEBPACK_IMPORTED_MODULE_2__["eliminarCompletados"]());
        }
      }]);

      return TodoFooterComponent;
    }();

    TodoFooterComponent.ɵfac = function TodoFooterComponent_Factory(t) {
      return new (t || TodoFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    TodoFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoFooterComponent,
      selectors: [["app-todo-footer"]],
      decls: 9,
      vars: 2,
      consts: [[1, "footer"], [1, "todo-count"], [1, "filters"], [4, "ngFor", "ngForOf"], [1, "clear-completed", 3, "click"], ["href", "#/", 3, "click"]],
      template: function TodoFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " item left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoFooterComponent_li_6_Template, 4, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoFooterComponent_Template_button_click_7_listener() {
            return ctx.eliminarCompletados();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Clear completed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pendientes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtros);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tZm9vdGVyL3RvZG8tZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-footer',
          templateUrl: './todo-footer.component.html',
          styleUrls: ['./todo-footer.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todos/todo-item/todo-item.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/todos/todo-item/todo-item.component.ts ***!
    \********************************************************/

  /*! exports provided: TodoItemComponent */

  /***/
  function srcAppTodosTodoItemTodoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function () {
      return TodoItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../todo.actions */
    "./src/app/todos/todo.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var _c0 = ["inputFisico"];

    var TodoItemComponent = /*#__PURE__*/function () {
      function TodoItemComponent(store) {
        _classCallCheck(this, TodoItemComponent);

        this.store = store;
        this.editando = false;
      }

      _createClass(TodoItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.chkCompletado = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.todo.completado);
          this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.todo.texto, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
          this.chkCompletado.valueChanges.subscribe(function (valor) {
            _this2.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["toogle"]({
              id: _this2.todo.id
            }));
          });
        }
      }, {
        key: "editar",
        value: function editar() {
          var _this3 = this;

          this.editando = true;
          this.txtInput.setValue(this.todo.texto);
          setTimeout(function () {
            _this3.txtInputFisico.nativeElement.select();
          }, 1);
        }
      }, {
        key: "terminarEdicion",
        value: function terminarEdicion() {
          this.editando = false;

          if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
            return;
          }

          this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["editar"]({
            id: this.todo.id,
            texto: this.txtInput.value
          }));
        }
      }, {
        key: "borrar",
        value: function borrar() {
          this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["borrar"]({
            id: this.todo.id
          }));
        }
      }]);

      return TodoItemComponent;
    }();

    TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) {
      return new (t || TodoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoItemComponent,
      selectors: [["app-todo-item"]],
      viewQuery: function TodoItemComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.txtInputFisico = _t.first);
        }
      },
      inputs: {
        todo: "todo"
      },
      decls: 8,
      vars: 7,
      consts: [[1, "view"], ["title", "completado", "type", "checkbox", "checked", "", 1, "toggle", 3, "formControl"], [3, "dblclick"], ["title", "destroy", 1, "destroy", 3, "click"], ["title", "edit", 1, "edit", 3, "formControl", "blur"], ["inputFisico", ""]],
      template: function TodoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TodoItemComponent_Template_label_dblclick_3_listener() {
            return ctx.editar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_5_listener() {
            return ctx.borrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TodoItemComponent_Template_input_blur_6_listener() {
            return ctx.terminarEdicion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", ctx.todo.completado)("editing", ctx.editando);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.chkCompletado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.texto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.txtInput);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-item',
          templateUrl: './todo-item.component.html',
          styleUrls: ['./todo-item.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, {
        todo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        txtInputFisico: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputFisico', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/todos/todo-list/todo-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/todos/todo-list/todo-list.component.ts ***!
    \********************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppTodosTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../todo-item/todo-item.component */
    "./src/app/todos/todo-item/todo-item.component.ts");
    /* harmony import */


    var _filtro_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../filtro.pipe */
    "./src/app/todos/filtro.pipe.ts");

    function TodoListComponent_app_todo_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo-item", 2);
      }

      if (rf & 2) {
        var todo_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r1);
      }
    }

    var TodoListComponent = /*#__PURE__*/function () {
      function TodoListComponent(store) {
        _classCallCheck(this, TodoListComponent);

        this.store = store;
        this.todos = [];
      }

      _createClass(TodoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.store.subscribe(function (_ref2) {
            var todos = _ref2.todos,
                filtro = _ref2.filtro;
            _this4.todos = todos;
            _this4.filtroActual = filtro;
          });
        }
      }]);

      return TodoListComponent;
    }();

    TodoListComponent.ɵfac = function TodoListComponent_Factory(t) {
      return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoListComponent,
      selectors: [["app-todo-list"]],
      decls: 3,
      vars: 4,
      consts: [[1, "todo-list"], [3, "todo", 4, "ngFor", "ngForOf"], [3, "todo"]],
      template: function TodoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_app_todo_item_1_Template, 1, 1, "app-todo-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filtroTodo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.todos, ctx.filtroActual));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__["TodoItemComponent"]],
      pipes: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-list',
          templateUrl: './todo-list.component.html',
          styleUrls: ['./todo-list.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todos/todo-page/todo-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/todos/todo-page/todo-page.component.ts ***!
    \********************************************************/

  /*! exports provided: TodoPageComponent */

  /***/
  function srcAppTodosTodoPageTodoPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoPageComponent", function () {
      return TodoPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../todo.actions */
    "./src/app/todos/todo.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../todo-add/todo-add.component */
    "./src/app/todos/todo-add/todo-add.component.ts");
    /* harmony import */


    var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../todo-list/todo-list.component */
    "./src/app/todos/todo-list/todo-list.component.ts");
    /* harmony import */


    var _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../todo-footer/todo-footer.component */
    "./src/app/todos/todo-footer/todo-footer.component.ts");

    var TodoPageComponent = /*#__PURE__*/function () {
      function TodoPageComponent(store) {
        _classCallCheck(this, TodoPageComponent);

        this.store = store;
        this.completado = false;
      }

      _createClass(TodoPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toogleAll",
        value: function toogleAll() {
          this.completado = !this.completado;
          this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["toogleAll"]({
            completado: this.completado
          }));
        }
      }]);

      return TodoPageComponent;
    }();

    TodoPageComponent.ɵfac = function TodoPageComponent_Factory(t) {
      return new (t || TodoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    TodoPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoPageComponent,
      selectors: [["app-todo-page"]],
      decls: 8,
      vars: 0,
      consts: [[1, "todoapp"], [1, "main"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all", 3, "click"], ["for", "toggle-all"]],
      template: function TodoPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-todo-add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoPageComponent_Template_input_click_3_listener() {
            return ctx.toogleAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mark all as complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-todo-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-todo-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_3__["TodoAddComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_5__["TodoFooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8tcGFnZS90b2RvLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-page',
          templateUrl: './todo-page.component.html',
          styleUrls: ['./todo-page.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todos/todo.actions.ts":
  /*!***************************************!*\
    !*** ./src/app/todos/todo.actions.ts ***!
    \***************************************/

  /*! exports provided: crear, toogle, editar, borrar, toogleAll, eliminarCompletados */

  /***/
  function srcAppTodosTodoActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "crear", function () {
      return crear;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toogle", function () {
      return toogle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "editar", function () {
      return editar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "borrar", function () {
      return borrar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toogleAll", function () {
      return toogleAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "eliminarCompletados", function () {
      return eliminarCompletados;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var crear = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Crear Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var toogle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Toogle Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var editar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Editar Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var borrar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Borrar Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var toogleAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Toogle All Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var eliminarCompletados = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Eliminar Completados');
    /***/
  },

  /***/
  "./src/app/todos/todo.module.ts":
  /*!**************************************!*\
    !*** ./src/app/todos/todo.module.ts ***!
    \**************************************/

  /*! exports provided: TodoModule */

  /***/
  function srcAppTodosTodoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoModule", function () {
      return TodoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todo-add/todo-add.component */
    "./src/app/todos/todo-add/todo-add.component.ts");
    /* harmony import */


    var _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./todo-footer/todo-footer.component */
    "./src/app/todos/todo-footer/todo-footer.component.ts");
    /* harmony import */


    var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todo-item/todo-item.component */
    "./src/app/todos/todo-item/todo-item.component.ts");
    /* harmony import */


    var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo-list/todo-list.component */
    "./src/app/todos/todo-list/todo-list.component.ts");
    /* harmony import */


    var _todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todo-page/todo-page.component */
    "./src/app/todos/todo-page/todo-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _filtro_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./filtro.pipe */
    "./src/app/todos/filtro.pipe.ts");

    var TodoModule = /*#__PURE__*/_createClass(function TodoModule() {
      _classCallCheck(this, TodoModule);
    });

    TodoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TodoModule
    });
    TodoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TodoModule_Factory(t) {
        return new (t || TodoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoModule, {
        declarations: [_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_2__["TodoAddComponent"], _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_3__["TodoFooterComponent"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__["TodoItemComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"], _todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_6__["TodoPageComponent"], _filtro_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
        exports: [_todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_6__["TodoPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_2__["TodoAddComponent"], _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_3__["TodoFooterComponent"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__["TodoItemComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"], _todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_6__["TodoPageComponent"], _filtro_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          exports: [_todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_6__["TodoPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/todos/todo.reducer.ts":
  /*!***************************************!*\
    !*** ./src/app/todos/todo.reducer.ts ***!
    \***************************************/

  /*! exports provided: initialState, todoReducer */

  /***/
  function srcAppTodosTodoReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "todoReducer", function () {
      return todoReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/todo.model */
    "./src/app/todos/models/todo.model.ts");
    /* harmony import */


    var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todo.actions */
    "./src/app/todos/todo.actions.ts");

    var initialState = [new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('prueba')];

    var _todoReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["crear"], function (state, _ref3) {
      var texto = _ref3.texto;
      return [].concat(_toConsumableArray(state), [new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](texto)]);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["toogle"], function (state, _ref4) {
      var id = _ref4.id;
      return state.map(function (todo) {
        if (todo.id === id) {
          return Object.assign(Object.assign({}, todo), {
            completado: !todo.completado
          });
        } else {
          return todo;
        }
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["toogleAll"], function (state, _ref5) {
      var completado = _ref5.completado;
      return state.map(function (todo) {
        return Object.assign(Object.assign({}, todo), {
          completado: completado
        });
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["editar"], function (state, _ref6) {
      var id = _ref6.id,
          texto = _ref6.texto;
      return state.map(function (todo) {
        if (todo.id === id) {
          return Object.assign(Object.assign({}, todo), {
            texto: texto
          });
        } else {
          return todo;
        }
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["borrar"], function (state, _ref7) {
      var id = _ref7.id;
      return state.filter(function (todo) {
        return todo.id !== id;
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_2__["eliminarCompletados"], function (state) {
      return state.filter(function (todo) {
        return !todo.completado;
      });
    }));

    function todoReducer(state, action) {
      return _todoReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\redux\03-todoapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map