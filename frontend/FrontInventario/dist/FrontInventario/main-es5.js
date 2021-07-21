(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/mKN": function mKN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrestamoService", function () {
        return PrestamoService;
      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var PrestamoService = /*#__PURE__*/function () {
        function PrestamoService(httpClient) {
          _classCallCheck(this, PrestamoService);

          this.httpClient = httpClient;
          this.URL_API = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'prestamos';
        }

        _createClass(PrestamoService, [{
          key: "getPrestamoProduct",
          value: function getPrestamoProduct(idProducto) {
            console.warn(this.URL_API + "/" + idProducto);
            return this.httpClient.get(this.URL_API + "/" + idProducto);
          }
        }]);

        return PrestamoService;
      }();

      PrestamoService.ɵfac = function PrestamoService_Factory(t) {
        return new (t || PrestamoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      PrestamoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PrestamoService,
        factory: PrestamoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Alvaro\Documents\Universidad\Robocol\inventario aux\inventario\frontend\FrontInventario\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "646K": function K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistorialService", function () {
        return HistorialService;
      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HistorialService = /*#__PURE__*/function () {
        function HistorialService(httpClient) {
          _classCallCheck(this, HistorialService);

          this.httpClient = httpClient;
          this.URL_API = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'historial';
        }

        _createClass(HistorialService, [{
          key: "getHistorialProduct",
          value: function getHistorialProduct(idProducto) {
            console.warn(this.URL_API + "/" + idProducto);
            return this.httpClient.get(this.URL_API + "/" + idProducto);
          }
        }]);

        return HistorialService;
      }();

      HistorialService.ɵfac = function HistorialService_Factory(t) {
        return new (t || HistorialService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      HistorialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HistorialService,
        factory: HistorialService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var host = 'localhost';
      var port = '5000';
      var rootApi = 'api';
      var environment = {
        production: false,
<<<<<<< HEAD
        baseUrl: "http://".concat(host, ":").concat(port, "/").concat(rootApi, "/")
=======
        // baseUrl:`https://${host}:${port}/${rootApi}/`
        baseUrl: "https://".concat(host, "/").concat(rootApi, "/")
>>>>>>> 0f5649a99543b3ed3f7961df4e7af1ddacb7fea5
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
    "Dh14": function Dh14(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IngresoUsuarioComponent", function () {
        return IngresoUsuarioComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usuario/usuario.service */
      "gWzw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var IngresoUsuarioComponent = /*#__PURE__*/function () {
        function IngresoUsuarioComponent(usuarioService, formBuilder, router, toastr) {
          _classCallCheck(this, IngresoUsuarioComponent);

          this.usuarioService = usuarioService;
          this.formBuilder = formBuilder;
          this.router = router;
          this.toastr = toastr;
          this.ingreso = true;
        }

        _createClass(IngresoUsuarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userForm = this.formBuilder.group({
              usuarioUniandes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              contrasenia: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin(form) {
            var _this = this;

            this.usuarioService.loginUser(form.value).subscribe(function (res) {
              console.log("xd", form.value);
              _this.ingreso = true;

              _this.toastr.success("¡Bienvenido!");

              _this.router.navigateByUrl("/robocol/menu"), _this.infoUsuario = res;
            }, function (err) {
              _this.toastr.error("Tu usuario o contraseña son incorrectos", "¡Ups!");

              _this.ingreso = false;
              console.log(err);
            });
          }
        }, {
          key: "darInfoUsuario",
          value: function darInfoUsuario() {
            return this.infoUsuario;
          }
        }]);

        return IngresoUsuarioComponent;
      }();

      IngresoUsuarioComponent.ɵfac = function IngresoUsuarioComponent_Factory(t) {
        return new (t || IngresoUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
      };

      IngresoUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: IngresoUsuarioComponent,
        selectors: [["app-ingreso-usuario"]],
        decls: 18,
        vars: 2,
        consts: [["id", "fondo"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-25"], ["for", "fname", 2, "padding-top", "0px"], [1, "col-75", 2, "margin-left", "2rem"], ["novalidate", "", "id", "usuarioUniandes", "formControlName", "usuarioUniandes", "type", "text", "required", ""], ["for", "pwd"], ["id", "contrasenia", "formControlName", "contrasenia", "type", "password", "name", "psw", "title", "Debe contener al menos 9 o m\xE1s caracteres", "required", ""], ["type", "submit", "value", "INGRESAR", "id", "ingresar", 2, "margin-top", "15px", "width", "150px", 3, "disabled"]],
        template: function IngresoUsuarioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function IngresoUsuarioComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onLogin(ctx.userForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Usuario Uniandes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " INGRESAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.userForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]],
        styles: ["input[type=\"text\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #252525;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: vertical;\r\n  background-color: #282828;\r\n}\r\ninput[type=\"password\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #252525;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: vertical;\r\n  background-color: #282828;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  padding: 12px 12px 12px 0;\r\n  display: inline-block;\r\n  color: #e4b503;\r\n}\r\n\r\ninput[type=\"submit\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  background-color: #282828;\r\n  color: #e4b503;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  background-color: #161616;\r\n  padding: 0px;\r\n  flex-direction: row;\r\n  display: flex;\r\n  flex-flow: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 90vh;\r\n}\r\n\r\n.col-25[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 25%;\r\n  margin-top: 6px;\r\n}\r\n\r\n.col-75[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 70%;\r\n  margin-top: 6px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=\"submit\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n    \r\n  }\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  margin: 0;\r\n  background-color: #161616;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc28tdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTs7O0VBR0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBRUEsa0RBQWtEO0FBQ2xEO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLG1DQUFtQztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQSwrSUFBK0k7QUFDL0k7RUFDRTs7O0lBR0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7QUFDRjtBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJpbmdyZXNvLXVzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNTI1MjU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjUyNTI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGxhYmVsIHRvIGRpc3BsYXkgbmV4dCB0byB0aGUgaW5wdXRzICovXHJcbmxhYmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2U0YjUwMztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gIGNvbG9yOiAjZTRiNTAzO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xyXG4uY29sLTI1IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBpbnB1dHM6IDc1JSB3aWR0aCAqL1xyXG4uY29sLTc1IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29sLTI1LFxyXG4gIC5jb2wtNzUsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA7ICovXHJcbiAgfVxyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "HJkF": function HJkF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistorialComponent", function () {
        return HistorialComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_historial_historial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/historial/historial.service */
      "646K");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      function HistorialComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var h_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r1.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r1.tipoMovimiento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r1.responsable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, h_r1.createdAt, "dd-MM-YYYY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 8, h_r1.createdAt, "HH:mm"));
        }
      }

      var HistorialComponent = /*#__PURE__*/function () {
        function HistorialComponent(router, historialService, route, toastr) {
          _classCallCheck(this, HistorialComponent);

          this.router = router;
          this.historialService = historialService;
          this.route = route;
          this.toastr = toastr;

          this.btnClick = function () {
            this.router.navigate(["/robocol/disponibilidad/", this.idProducto]);
          };
        }

        _createClass(HistorialComponent, [{
          key: "getHistorial",
          value: function getHistorial() {
            var _this2 = this;

            console.log("entre aca");
            this.historialService.getHistorialProduct(this.idProducto).subscribe(function (historial) {
              _this2.historial = historial;
              console.log("ssss", historial);

              if (_this2.historial.length == 0) {
                _this2.toastr.info("No hay ningún movimiento del producto", "Hey", {
                  timeOut: 0
                });
              }
            }, function (err) {
              console.log(err);

              _this2.toastr.error("Hubo un problema al buscar el historial", "Ups!", {
                timeOut: 0
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.idProducto = this.route.snapshot.paramMap.get('id');
            this.historialService.getHistorialProduct(this.idProducto).subscribe(function (his) {
              _this3.historial = his;
              console.log("ssss", his, "eeeeeeeeeeeee", _this3.historial);

              if (_this3.historial.length == 0) {
                _this3.toastr.info("No hay ningún producto para mostrar", "Hey", {
                  timeOut: 0
                });
              }
            }, function (err) {
              console.log(err);

              _this3.toastr.error("Hubo un problema al buscar los productos", "Ups!");
            });
            this.getHistorial();
            console.log("este seria el historial" + this.historial);
          }
        }]);

        return HistorialComponent;
      }();

      HistorialComponent.ɵfac = function HistorialComponent_Factory(t) {
        return new (t || HistorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_historial_historial_service__WEBPACK_IMPORTED_MODULE_2__["HistorialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      HistorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HistorialComponent,
        selectors: [["app-historial"]],
        decls: 20,
        vars: 1,
        consts: [["id", "atras"], ["id", "regresar", "src", "../assets/images/regresar.png", 2, "height", "100%", "border-radius", "0", "margin", "auto", 3, "click"], ["id", "fondo"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
        template: function HistorialComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistorialComponent_Template_img_click_1_listener() {
              return ctx.btnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Historial de movimientos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tipo de movimiento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Responsable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fecha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hora");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HistorialComponent_tr_19_Template, 13, 11, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historial);
          }
        },
        styles: ["table[_ngcontent-%COMP%]{\r\n  margin: 15px ;\r\n}\r\nh4[_ngcontent-%COMP%]{\r\n  margin-top: 15px  ;\r\n  color: #e4b503;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n#fondo[_ngcontent-%COMP%]{\r\n  padding-top: 15px;\r\n  \r\n}\r\n#atras[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  padding-left: 3%;\r\n  padding-top: 5px;\r\n}\r\n.form-check-input[_ngcontent-%COMP%]\r\n{\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Imhpc3RvcmlhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgbWFyZ2luOiAxNXB4IDtcclxufVxyXG5oNHtcclxuICBtYXJnaW4tdG9wOiAxNXB4ICA7XHJcbiAgY29sb3I6ICNlNGI1MDM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuI2ZvbmRve1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIC8qIHBhZGRpbmc6IDE1cHg7ICovXHJcbn1cclxuI2F0cmFze1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXRcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "PzkK": function PzkK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Menu_opcionesComponent", function () {
        return Menu_opcionesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Menu_opcionesComponent = /*#__PURE__*/function () {
        function Menu_opcionesComponent() {
          _classCallCheck(this, Menu_opcionesComponent);
        }

        _createClass(Menu_opcionesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Menu_opcionesComponent;
      }();

      Menu_opcionesComponent.ɵfac = function Menu_opcionesComponent_Factory(t) {
        return new (t || Menu_opcionesComponent)();
      };

      Menu_opcionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Menu_opcionesComponent,
        selectors: [["app-menu_opciones"]],
        inputs: {
          usuario: "usuario"
        },
        decls: 17,
        vars: 0,
        consts: [["id", "fondo"], ["type", "button", "routerLink", "/robocol/registroProducto", 1, "row", "btn-warning", 2, "margin-top", "0%"], [1, "col-7"], ["src", "../assets/images/registro.png"], [1, "col-5"], ["type", "button", "routerLink", "/robocol/catalogo", 1, "row", "btn-warning", 2, "margin-top", "4rem"], ["src", "../assets/images/consulta.png"]],
        template: function Menu_opcionesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registro de Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cat\xE1logo y movimientos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["h6[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  height: 15%;\r\n  background-color: #282828;\r\n}\r\n.col-sm[_ngcontent-%COMP%] {\r\n  background-color: #282828;\r\n  margin-bottom: 15px;\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  height: 90%;\r\n  border-radius: 50%;\r\n  margin: auto;\r\n}\r\n.col-8[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  \r\n  background-color: #282828;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  height: 25vh;\r\n  margin-bottom: 15px;\r\n  max-width: 400px;\r\n  width: 85%;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n#atras[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  padding-left: 3%;\r\n  padding-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVfb3BjaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im1lbnVfb3BjaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg2IHtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbn1cclxuLmNvbC1zbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5pbWcge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbC04LFxyXG4uY29sLTQsXHJcbi5jb2wtNyxcclxuLmNvbC01IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogcGFkZGluZy10b3A6IDEwcHg7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnJvdyB7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuI2F0cmFze1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/usuario/usuario.service */
      "gWzw");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AppComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_6_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Salir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.usuario);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(usuarioService) {
          _classCallCheck(this, AppComponent);

          this.usuarioService = usuarioService;
          this.title = 'FrontInventario';
        }

        _createClass(AppComponent, [{
          key: "loggedIn",
          value: function loggedIn() {
            return this.usuarioService.loggedIn();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.usuarioService.logout();
          }
        }, {
          key: "actualizar",
          value: function actualizar() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 8,
        vars: 1,
        consts: [["id", "top-bar", 1, "navbar", "navbar-dark", "navbar-expand-sm", "navbar-fixed-top"], [1, "navbar-header", "container-fluid"], ["href", "robocol/menu", 1, "navbar-brand"], ["src", "../assets/images/logo_inventario.png", 2, "height", "48px", "padding", "2px 10px"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [4, "ngIf"], [1, "nav-item"], [1, "nav-link"], [1, "nav-link", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_container_6_Template, 7, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: [".navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\r\n{\r\n  margin-left: 10px;\r\n  margin-right:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW5hdiA+IGxpXHJcbntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var igniteui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! igniteui-angular */
      "YIDO");
      /* harmony import */


      var _modules_registro_producto_registro_producto_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modules/registro-producto/registro-producto.module */
      "aCEV");
      /* harmony import */


      var _modules_registro_producto_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modules/registro-producto/registro-producto-principal/registro-producto-principal.component */
      "rfj+");
      /* harmony import */


      var _modules_menu_opciones_menu_opciones_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modules/menu_opciones/menu_opciones.module */
      "x/zG");
      /* harmony import */


      var _modules_menu_opciones_menu_opciones_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./modules/menu_opciones/menu_opciones.component */
      "PzkK");
      /* harmony import */


      var _modules_ingreso_usuario_ingreso_usuario_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modules/ingreso-usuario/ingreso-usuario.module */
      "imZ4");
      /* harmony import */


      var _modules_ingreso_usuario_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./modules/ingreso-usuario/ingreso-usuario.component */
      "Dh14");
      /* harmony import */


      var _modules_historial_historial_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modules/historial/historial.component */
      "HJkF");
      /* harmony import */


      var _guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./guard/usuario.guard */
      "hJWk");
      /* harmony import */


      var _guard_usuarioLogged_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./guard/usuarioLogged.guard */
      "j9p8");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _modules_catalogo_catalogo_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./modules/catalogo/catalogo.module */
      "eH5C");
      /* harmony import */


      var _modules_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./modules/catalogo/catalogo.component */
      "oI9u");
      /* harmony import */


      var _modules_catalogo_disponibilidad_disponibilidad_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./modules/catalogo/disponibilidad/disponibilidad.component */
      "qzVc");
      /* harmony import */


      var _modules_prestamo_prestamo_prestamo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./modules/prestamo/prestamo/prestamo.component */
      "bnTu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // Igx
      // Registro de Producto
      //menu de opciones
      //Ingreso de usuario
      //Historial
      //Catalogo


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
        providers: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]],
        imports: [[ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _modules_registro_producto_registro_producto_module__WEBPACK_IMPORTED_MODULE_8__["RegistroProductoModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
          path: 'robocol/registroProducto',
          component: _modules_registro_producto_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_9__["RegistroProductoPrincipalComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: 'robocol/menu',
          component: _modules_menu_opciones_menu_opciones_component__WEBPACK_IMPORTED_MODULE_11__["Menu_opcionesComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: 'robocol/ingreso-usuario',
          component: _modules_ingreso_usuario_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_13__["IngresoUsuarioComponent"],
          canActivate: [_guard_usuarioLogged_guard__WEBPACK_IMPORTED_MODULE_16__["UsuarioGuardLogged"]]
        }, {
          path: 'robocol/historial/:id',
          component: _modules_historial_historial_component__WEBPACK_IMPORTED_MODULE_14__["HistorialComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: 'robocol/catalogo',
          component: _modules_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_19__["CatalogoComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: 'robocol/disponibilidad/:id',
          component: _modules_catalogo_disponibilidad_disponibilidad_component__WEBPACK_IMPORTED_MODULE_20__["DisponibilidadComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: 'robocol/prestamos/:id',
          component: _modules_prestamo_prestamo_prestamo_component__WEBPACK_IMPORTED_MODULE_21__["PrestamoComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: '',
          redirectTo: 'robocol/ingreso-usuario',
          pathMatch: 'full'
        }]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxListModule"], _modules_menu_opciones_menu_opciones_module__WEBPACK_IMPORTED_MODULE_10__["Menu_opcionesModule"], _modules_ingreso_usuario_ingreso_usuario_module__WEBPACK_IMPORTED_MODULE_12__["IngresoUsuarioModule"], _modules_catalogo_catalogo_module__WEBPACK_IMPORTED_MODULE_18__["CatalogoModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _modules_registro_producto_registro_producto_module__WEBPACK_IMPORTED_MODULE_8__["RegistroProductoModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxListModule"], _modules_menu_opciones_menu_opciones_module__WEBPACK_IMPORTED_MODULE_10__["Menu_opcionesModule"], _modules_ingreso_usuario_ingreso_usuario_module__WEBPACK_IMPORTED_MODULE_12__["IngresoUsuarioModule"], _modules_catalogo_catalogo_module__WEBPACK_IMPORTED_MODULE_18__["CatalogoModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]]
        });
      })();
      /***/

    },

    /***/
    "aCEV": function aCEV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroProductoModule", function () {
        return RegistroProductoModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registro-producto-principal/registro-producto-principal.component */
      "rfj+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RegistroProductoModule = function RegistroProductoModule() {
        _classCallCheck(this, RegistroProductoModule);
      };

      RegistroProductoModule.ɵfac = function RegistroProductoModule_Factory(t) {
        return new (t || RegistroProductoModule)();
      };

      RegistroProductoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: RegistroProductoModule
      });
      RegistroProductoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegistroProductoModule, {
          declarations: [_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_2__["RegistroProductoPrincipalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          exports: [_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_2__["RegistroProductoPrincipalComponent"]]
        });
      })();
      /***/

    },

    /***/
    "bnTu": function bnTu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrestamoComponent", function () {
        return PrestamoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_prestamo_prestamo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/prestamo/prestamo.service */
      "/mKN");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      function PrestamoComponent_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.h.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.h.tipoMovimiento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.h.responsable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, ctx_r0.h.createdAt, "dd-MM-YYYY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 8, ctx_r0.h.createdAt, "HH:mm"));
        }
      }

      var PrestamoComponent = /*#__PURE__*/function () {
        function PrestamoComponent(router, prestamoService, route, toastr) {
          _classCallCheck(this, PrestamoComponent);

          this.router = router;
          this.prestamoService = prestamoService;
          this.route = route;
          this.toastr = toastr;

          this.btnClick = function () {
            this.router.navigate(["/robocol/disponibilidad/", this.idProducto]);
          };
        }

        _createClass(PrestamoComponent, [{
          key: "getPrestamos",
          value: function getPrestamos() {
            var _this4 = this;

            this.prestamoService.getPrestamoProduct(this.idProducto).subscribe(function (p) {
              _this4.prestamo = p;
              console.log("ssss", p);

              if (_this4.prestamo.length == 0) {
                _this4.toastr.info("No hay ninguna unidad en uso", "Hey", {
                  timeOut: 0
                });
              }
            }, function (err) {
              console.log(err);

              _this4.toastr.error("Hubo un problema al buscar tu solicitud", "Ups!", {
                timeOut: 0
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.idProducto = this.route.snapshot.paramMap.get('id');
            this.prestamoService.getPrestamoProduct(this.idProducto).subscribe(function (his) {
              _this5.prestamo = his;
              console.log("ssss", his, "eeeeeeeeeeeee", _this5.prestamo);

              if (_this5.prestamo.length == 0) {
                _this5.toastr.info("No hay ningún producto para mostrar", "Hey", {
                  timeOut: 0
                });
              }
            }, function (err) {
              console.log(err);

              _this5.toastr.error("Hubo un problema al buscar los productos", "Ups!");
            });
            this.getPrestamos();
            console.log("este seria el historial" + this.prestamo);
          }
        }]);

        return PrestamoComponent;
      }();

      PrestamoComponent.ɵfac = function PrestamoComponent_Factory(t) {
        return new (t || PrestamoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_prestamo_prestamo_service__WEBPACK_IMPORTED_MODULE_2__["PrestamoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      PrestamoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrestamoComponent,
        selectors: [["app-prestamo"]],
        decls: 18,
        vars: 1,
        consts: [["id", "atras"], ["id", "regresar", "src", "../assets/images/regresar.png", 2, "height", "100%", "border-radius", "0", "margin", "auto", 3, "click"], ["id", "fondo"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
        template: function PrestamoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrestamoComponent_Template_img_click_1_listener() {
              return ctx.btnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pr\xE9stamos actuales del producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Responsable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fecha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hora");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PrestamoComponent_tr_17_Template, 13, 11, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prestamo);
          }
        },
        styles: ["table[_ngcontent-%COMP%]{\r\n  margin: 15px ;\r\n}\r\nh4[_ngcontent-%COMP%]{\r\n  margin-top: 15px  ;\r\n  color: #e4b503;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n#fondo[_ngcontent-%COMP%]{\r\n  padding-top: 15px;\r\n  \r\n}\r\n#atras[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  padding-left: 3%;\r\n  padding-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXN0YW1vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoicHJlc3RhbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gIG1hcmdpbjogMTVweCA7XHJcbn1cclxuaDR7XHJcbiAgbWFyZ2luLXRvcDogMTVweCAgO1xyXG4gIGNvbG9yOiAjZTRiNTAzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbiNmb25kb3tcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xyXG59XHJcbiNhdHJhc3tcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "cxbk": function cxbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var host = 'vast-springs-05022.herokuapp.com';
      var rootApi = 'api';
      var environment = {
        production: true,
        baseUrl: "https://".concat(host, "/").concat(rootApi, "/")
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
    "eH5C": function eH5C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogoModule", function () {
        return CatalogoModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _catalogo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./catalogo.component */
      "oI9u");
      /* harmony import */


      var _disponibilidad_disponibilidad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./disponibilidad/disponibilidad.component */
      "qzVc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CatalogoModule = function CatalogoModule() {
        _classCallCheck(this, CatalogoModule);
      };

      CatalogoModule.ɵfac = function CatalogoModule_Factory(t) {
        return new (t || CatalogoModule)();
      };

      CatalogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: CatalogoModule
      });
      CatalogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CatalogoModule, {
          declarations: [_catalogo_component__WEBPACK_IMPORTED_MODULE_1__["CatalogoComponent"], _disponibilidad_disponibilidad_component__WEBPACK_IMPORTED_MODULE_2__["DisponibilidadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_catalogo_component__WEBPACK_IMPORTED_MODULE_1__["CatalogoComponent"], _disponibilidad_disponibilidad_component__WEBPACK_IMPORTED_MODULE_2__["DisponibilidadComponent"]]
        });
      })();
      /***/

    },

    /***/
    "gWzw": function gWzw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
        return UsuarioService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UsuarioService = /*#__PURE__*/function () {
        function UsuarioService(http, router) {
          _classCallCheck(this, UsuarioService);

          this.http = http;
          this.router = router;
          this.apiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'usuario';
          this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Content-Type": "application/json"
          });
        }

        _createClass(UsuarioService, [{
          key: "getUsuarioPorUsuarioUniandes",
          value: function getUsuarioPorUsuarioUniandes(usuarioUniandes) {
            var usuario = this.http.get(this.apiUrl + "/" + usuarioUniandes);
            console.log("esto del servicio" + usuario + "si desgloso");
            return usuario;
          }
        }, {
          key: "getUsuarios",
          value: function getUsuarios() {
            return this.http.get(this.apiUrl);
          }
        }, {
          key: "getUsuario",
          value: function getUsuario() {}
        }, {
          key: "postUsuario",
          value: function postUsuario() {}
        }, {
          key: "updateUsuario",
          value: function updateUsuario() {}
        }, {
          key: "deleteUsuario",
          value: function deleteUsuario() {}
        }, {
          key: "loginUser",
          value: function loginUser(usuario) {
            var _this6 = this;

            return this.http.post(this.apiUrl + "/login", usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              if (res) {
                //guardar token
                _this6.saveToken(res.accessToken, res.expiresIn);
              }
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token = '';
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.removeItem("EXPIRES_IN");
            this.router.navigate(['/robocol/ingreso-usuario']);
          }
        }, {
          key: "saveToken",
          value: function saveToken(token, expiresIn) {
            localStorage.setItem("ACCESS_TOKEN", token);
            localStorage.setItem("EXPIRES_IN", expiresIn);
            this.token = token;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            if (!this.token) {
              this.token = localStorage.getItem("ACCESS_TOKEN");
            }

            return this.token;
          }
        }, {
          key: "loggedIn",
          value: function loggedIn() {
            // si el token existe -> true
            return !!localStorage.getItem('ACCESS_TOKEN');
          }
        }]);

        return UsuarioService;
      }();

      UsuarioService.ɵfac = function UsuarioService_Factory(t) {
        return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: UsuarioService,
        factory: UsuarioService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "hJWk": function hJWk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioGuard", function () {
        return UsuarioGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/usuario/usuario.service */
      "gWzw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UsuarioGuard = /*#__PURE__*/function () {
        function UsuarioGuard(userService, router) {
          _classCallCheck(this, UsuarioGuard);

          this.userService = userService;
          this.router = router;
        }

        _createClass(UsuarioGuard, [{
          key: "canActivate",
          value: function canActivate() {
            console.log(this.userService.loggedIn()); //return true;

            if (this.userService.loggedIn()) {
              return true;
            } //cuando ingresa
            else {
              this.router.navigate(['/robocol/ingreso-usuario']);
              return false;
            }
          }
        }]);

        return UsuarioGuard;
      }();

      UsuarioGuard.ɵfac = function UsuarioGuard_Factory(t) {
        return new (t || UsuarioGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UsuarioGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsuarioGuard,
        factory: UsuarioGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "imZ4": function imZ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IngresoUsuarioModule", function () {
        return IngresoUsuarioModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ingreso-usuario.component */
      "Dh14");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IngresoUsuarioModule = function IngresoUsuarioModule() {
        _classCallCheck(this, IngresoUsuarioModule);
      };

      IngresoUsuarioModule.ɵfac = function IngresoUsuarioModule_Factory(t) {
        return new (t || IngresoUsuarioModule)();
      };

      IngresoUsuarioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: IngresoUsuarioModule
      });
      IngresoUsuarioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IngresoUsuarioModule, {
          declarations: [_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_1__["IngresoUsuarioComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          exports: [_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_1__["IngresoUsuarioComponent"]]
        });
      })();
      /***/

    },

    /***/
    "j9p8": function j9p8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioGuardLogged", function () {
        return UsuarioGuardLogged;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/usuario/usuario.service */
      "gWzw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UsuarioGuardLogged = /*#__PURE__*/function () {
        function UsuarioGuardLogged(userService, router) {
          _classCallCheck(this, UsuarioGuardLogged);

          this.userService = userService;
          this.router = router;
        }

        _createClass(UsuarioGuardLogged, [{
          key: "canActivate",
          value: function canActivate() {
            console.log(this.userService.loggedIn());

            if (this.userService.loggedIn()) {
              this.router.navigate(['/robocol/menu']);
              return false;
            } else {
              return true;
            }
          }
        }]);

        return UsuarioGuardLogged;
      }();

      UsuarioGuardLogged.ɵfac = function UsuarioGuardLogged_Factory(t) {
        return new (t || UsuarioGuardLogged)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UsuarioGuardLogged.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsuarioGuardLogged,
        factory: UsuarioGuardLogged.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "oI9u": function oI9u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogoComponent", function () {
        return CatalogoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/producto/producto.service */
      "pXUP");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CatalogoComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Proveedor:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Familia:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ubicaci\xF3n:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Descripci\xF3n:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cantidad:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogoComponent_div_6_Template_a_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var producto_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.irADisponibilidad(producto_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Disponibilidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var producto_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", producto_r1.fotoPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r1.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", producto_r1.proveedor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", producto_r1.familia, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", producto_r1.ubicacionEnCubiculo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", producto_r1.descripcion, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", producto_r1.cantidadTotal, "");
        }
      }

      var CatalogoComponent = /*#__PURE__*/function () {
        function CatalogoComponent(router, productoService, toastr) {
          _classCallCheck(this, CatalogoComponent);

          this.router = router;
          this.productoService = productoService;
          this.toastr = toastr;
          this.selected = false;
        }

        _createClass(CatalogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.productoService.getProducts().subscribe(function (prs) {
              _this7.productos = prs;

              if (_this7.productos.length == 0) {
                _this7.toastr.info("No hay ningún producto para mostrar", "Hey", {
                  timeOut: 0
                });
              }
            }, function (err) {
              console.log(err);

              _this7.toastr.error("Hubo un problema al buscar los productos", "Ups!");
            });
          }
        }, {
          key: "navigate",
          value: function navigate(url) {
            this.router.navigateByUrl('/robocol/' + url);
          }
        }, {
          key: "irADisponibilidad",
          value: function irADisponibilidad(pr) {
            this.router.navigate(["/robocol/disponibilidad/", pr._id]);
          }
        }]);

        return CatalogoComponent;
      }();

      CatalogoComponent.ɵfac = function CatalogoComponent_Factory(t) {
        return new (t || CatalogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      CatalogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CatalogoComponent,
        selectors: [["app-catalogo"]],
        decls: 7,
        vars: 1,
        consts: [[1, "atras"], ["routerLink", "/menu", "src", "../../../assets/images/regresar.png", 1, "regresar", 2, "height", "100%", "border-radius", "0", "margin", "auto", 3, "click"], [1, "container"], ["id", "title"], [1, "row", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4", "row-cols-xl-5"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [1, "card", "text-center"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "click"]],
        template: function CatalogoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogoComponent_Template_img_click_1_listener() {
              return ctx.navigate("menu");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " CAT\xC1LOGO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CatalogoComponent_div_6_Template, 28, 7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productos);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["h3[_ngcontent-%COMP%]{\r\n    color: #e4b503;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.atras[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n    padding-left: 3%;\r\n    padding-top: 5px;\r\n}\r\n\r\n.regresar[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    border-radius: 0; \r\n    margin: auto;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]{\r\n    color: #e4b503;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    border-color: #e4b503;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n@media (max-width: 576px) {  \r\n    .xs[_ngcontent-%COMP%] {color:red;font-weight:bold;}\r\n  }\r\n\r\n\r\n\r\n@media (min-width: 576px) and (max-width:768px) {  \r\n    .sm[_ngcontent-%COMP%] {color:red;font-weight:bold;}\r\n  }\r\n\r\n\r\n\r\n@media (min-width: 768px) and (max-width:992px) {  \r\n   .md[_ngcontent-%COMP%] {color:red;font-weight:bold;}\r\n  }\r\n\r\n\r\n\r\n@media (min-width: 992px) and (max-width:1200px) { \r\n   .lg[_ngcontent-%COMP%] {color:red;font-weight:bold;}\r\n  }\r\n\r\n\r\n\r\n@media (min-width: 1200px) {  \r\n      .xl[_ngcontent-%COMP%] {color:red;font-weight:bold;}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2dvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLEtBQUssU0FBUyxDQUFDLGdCQUFnQixDQUFDO0VBQ2xDOztBQUVBLG1EQUFtRDs7QUFDbkQ7SUFDRSxLQUFLLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNsQzs7QUFFQSx3RkFBd0Y7O0FBQ3hGO0dBQ0MsS0FBSyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7RUFDakM7O0FBRUEsMkNBQTJDOztBQUMzQztHQUNDLEtBQUssU0FBUyxDQUFDLGdCQUFnQixDQUFDO0VBQ2pDOztBQUVBLHdEQUF3RDs7QUFDeEQ7TUFDSSxLQUFLLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNwQyIsImZpbGUiOiJjYXRhbG9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgICBjb2xvcjogI2U0YjUwMztcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5hdHJhcyB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4gIFxyXG4ucmVncmVzYXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwOyBcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogI2U0YjUwMztcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNGI1MDM7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHsgIFxyXG4gICAgLnhzIHtjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDt9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7ICBcclxuICAgIC5zbSB7Y29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7fVxyXG4gIH1cclxuICAgXHJcbiAgLyogTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgVGhlIG5hdmJhciB0b2dnbGUgYXBwZWFycyBhdCB0aGlzIGJyZWFrcG9pbnQgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7ICBcclxuICAgLm1kIHtjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDt9XHJcbiAgfVxyXG4gICBcclxuICAvKiBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6MTIwMHB4KSB7IFxyXG4gICAubGcge2NvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO31cclxuICB9XHJcbiAgIFxyXG4gIC8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgIFxyXG4gICAgICAueGwge2NvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO31cclxuICB9XHJcbiAgICJdfQ== */"]
      });
      /***/
    },

    /***/
    "pXUP": function pXUP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoService", function () {
        return ProductoService;
      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductoService = /*#__PURE__*/function () {
        function ProductoService(httpClient) {
          _classCallCheck(this, ProductoService);

          this.httpClient = httpClient;
          this.URL_API = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'productos';
        }

        _createClass(ProductoService, [{
          key: "getProducts",
          value: function getProducts() {
            console.log(this.URL_API);
            return this.httpClient.get(this.URL_API);
          } //Se hizo así y no con un método normal para hacer un POST de producto, porque por alguna razón no estaba enviando bien la imagen.

        }, {
          key: "createProductByHtml",
          value: function createProductByHtml(nombre, proveedor, familia, ubicacionEnCubiculo, descripcion, cantidadDisponiblesParaUso, cantidadDisponiblesParaArreglo, cantidadEnUso, cantidadEnArreglo, image) {
            var fd = new FormData();
            fd.append("nombre", nombre);
            fd.append("proveedor", proveedor);
            fd.append("familia", familia);
            fd.append("ubicacionEnCubiculo", ubicacionEnCubiculo);
            fd.append("descripcion", descripcion);
            fd.append("cantidadTotal", String(Number(cantidadDisponiblesParaUso) + Number(cantidadDisponiblesParaArreglo) + Number(cantidadEnUso) + Number(cantidadEnArreglo)));
            fd.append("cantidadDisponiblesParaUso", cantidadDisponiblesParaUso);
            fd.append("cantidadDisponiblesParaArreglo", cantidadDisponiblesParaArreglo);
            fd.append("cantidadEnUso", cantidadEnUso);
            fd.append("cantidadEnArreglo", cantidadEnArreglo);
            fd.append("image", image);
            return this.httpClient.post(this.URL_API, fd);
          }
        }, {
          key: "getProductoPorId",
          value: function getProductoPorId(idProducto) {
            return this.httpClient.get(this.URL_API + "/" + idProducto);
          }
        }, {
          key: "deleteProductoId",
          value: function deleteProductoId(idProducto) {
            return this.httpClient["delete"](this.URL_API + "/" + idProducto);
          }
        }]);

        return ProductoService;
      }();

      ProductoService.ɵfac = function ProductoService_Factory(t) {
        return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProductoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProductoService,
        factory: ProductoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qzVc": function qzVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisponibilidadComponent", function () {
        return DisponibilidadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/producto/producto.service */
      "pXUP");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var DisponibilidadComponent = /*#__PURE__*/function () {
        function DisponibilidadComponent(router, route, productoService, toastr) {
          _classCallCheck(this, DisponibilidadComponent);

          this.router = router;
          this.route = route;
          this.productoService = productoService;
          this.toastr = toastr;

          this.btnClick = function () {
            this.router.navigate(['/robocol/catalogo']);
          };
        }

        _createClass(DisponibilidadComponent, [{
          key: "irAHistorial",
          value: function irAHistorial() {
            this.router.navigate(["/robocol/historial/", this.id_producto]);
          }
        }, {
          key: "irAPrestamos",
          value: function irAPrestamos() {
            console.log("ir a prestamos");
            this.router.navigate(["/robocol/prestamos/", this.id_producto]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.id_producto = this.route.snapshot.paramMap.get('id');
            this.productoService.getProductoPorId(this.id_producto).subscribe(function (prs) {
              _this8.producto = prs;
            }, function (err) {
              console.log(err);

              _this8.toastr.error("Hubo un problema al buscar el detalle del producto", "Ups!", {
                timeOut: 0
              });
            });
          }
        }]);

        return DisponibilidadComponent;
      }();

      DisponibilidadComponent.ɵfac = function DisponibilidadComponent_Factory(t) {
        return new (t || DisponibilidadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      DisponibilidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DisponibilidadComponent,
        selectors: [["app-disponibilidad"]],
        decls: 133,
        vars: 4,
        consts: [["id", "atras"], ["id", "regresar", "src", "../assets/images/regresar.png", 2, "height", "100%", "border-radius", "0", "margin", "auto", 3, "click"], ["id", "contenedor"], [1, "container"], [1, "row"], [1, "col-60"], [1, "col-8"], [1, "ficha"], [1, "col-4", "numero"], [1, "numero", "ficha"], [1, "col-8", 3, "click"], [1, "ficha", 3, "click"], [1, "col-50"], [1, "color"], ["id", "familia", "name", "Desde"], ["value", "Disp.uso"], ["value", "Disp.arreglo"], ["value", "uso"], ["value", "arreglo"], [1, "col-20"], ["type", "number", "id", "tentacles", "name", "tentacles", "min", "1", "max", "1000"], ["id", "familia", "name", "Hasta"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-success", "botonAgregar"], ["type", "button", 1, "btn", "btn-danger", "botonAgregar"], [1, "col"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger"]],
        template: function DisponibilidadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisponibilidadComponent_Template_img_click_1_listener() {
              return ctx.btnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Disponible para utilizar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisponibilidadComponent_Template_div_click_14_listener() {
              return ctx.irAPrestamos();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisponibilidadComponent_Template_label_click_15_listener() {
              return ctx.irAPrestamos();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "En uso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Disponible para arreglar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "En arreglo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Desde");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Disponible para utilizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Disponible para arreglar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "En uso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "En arreglo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Hasta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Disponible para utilizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Disponible para arreglar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "En uso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "En arreglo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Mover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Agregar a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Disponible para utilizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Disponible para arreglar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Agregar nueva cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Eliminar desde");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Disponible para utilizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Disponible para arreglar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "En uso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "En arreglo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Retirar/Botar cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisponibilidadComponent_Template_button_click_127_listener() {
              return ctx.irAHistorial();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Ver historial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Eliminar producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.producto.cantidadDisponiblesParaUso, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.producto.cantidadEnUso);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.producto.cantidadDisponiblesParaArreglo, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.producto.cantidadEnArreglo, "");
          }
        },
        styles: ["#atras[_ngcontent-%COMP%] {\n  height: 35px;\n  padding-left: 3%;\n  padding-top: 5px;\n}\n\n.col-8[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%] {\n  height: 100px;\n  padding: 0;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  padding: 0;\n  padding-bottom: 19px;\n}\n\n.ficha[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.col[_ngcontent-%COMP%] {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n  height: 100px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n}\n\n.color[_ngcontent-%COMP%] {\n  color: #e4b503;\n}\n\n.col-50[_ngcontent-%COMP%], .col-20[_ngcontent-%COMP%], .col-60[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  border-color: #e4b503;\n  box-sizing: border-box;\n  resize: vertical;\n  background-color: #282828;\n  color: white;\n}\n\n.botonAgregar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n}\n\n.numero[_ngcontent-%COMP%] {\n  background-color: #e4b503;\n  height: 81px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 2px solid #535353;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #e4b503;\n}\n\n.ficha[_ngcontent-%COMP%] {\n  background-color: #e4b503;\n  height: 100%;\n  width: 100%;\n  text-align: end;\n}\n\n.numero[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  background: azure;\n  padding-left: 15px;\n  height: auto;\n  width: 80%;\n  padding: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 90%;\n  \n  FONT-SIZE: 12pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGlzcG9uaWJpbGlkYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBRUUsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNFLG9CQUFBO0FBQ047O0FBQ0U7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBSUo7O0FBREU7RUFDRSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBT0o7O0FBSkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBT0o7O0FBTEU7RUFDRSw2QkFBQTtBQVFKOztBQUxFO0VBRUUseUJBQUE7QUFPSjs7QUFMRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUUo7O0FBTEU7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFRRjs7QUFORTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBU0oiLCJmaWxlIjoiZGlzcG9uaWJpbGlkYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXRyYXN7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgLmNvbC04LCAuY29sLTR7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxOXB4O1xyXG4gIH1cclxuICAuZmljaGF7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5jb2wge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4IDEycHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgfVxyXG4gIC5jb2xvcntcclxuICAgIGNvbG9yOiAjZTRiNTAzO1xyXG4gIH1cclxuICAuY29sLTUwLCAuY29sLTIwICwgLmNvbC02MHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1udW1iZXJdLCBzZWxlY3QsIHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2U0YjUwMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmJvdG9uQWdyZWdhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuXHJcbiAgfVxyXG4gIC5udW1lcm97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNGI1MDM7XHJcbiAgICBoZWlnaHQ6IDgxcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgaHJ7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDgzLDgzLDgzKTtcclxuICB9XHJcblxyXG4gIC5jYXJkXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTRiNTAzXHJcbiAgfVxyXG4gIC5maWNoYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2U0YjUwMztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG5cclxuICB9XHJcbiAgLm51bWVybyAuZmljaGF7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiBhenVyZTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gICAgRk9OVC1TSVpFOiAxMnB0O1xyXG4gIH1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "rfj+": function rfj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroProductoPrincipalComponent", function () {
        return RegistroProductoPrincipalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_producto_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/producto/producto.service */
      "pXUP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var RegistroProductoPrincipalComponent = /*#__PURE__*/function () {
        function RegistroProductoPrincipalComponent(productoService, router, toastr) {
          _classCallCheck(this, RegistroProductoPrincipalComponent);

          this.productoService = productoService;
          this.router = router;
          this.toastr = toastr;

          this.btnClick = function () {
            this.router.navigateByUrl('/robocol/menu');
          };
        }

        _createClass(RegistroProductoPrincipalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addProductByHtml",
          value: function addProductByHtml(nombre, proveedor, familia, ubicacionEnCubiculo, descripcion, cantidadDisponiblesParaUso, cantidadDisponiblesParaArreglo, cantidadEnUso, cantidadEnArreglo) {
            var _this9 = this;

            this.toastr.info("Estamos agregando tu producto al catálogo", "Un momento", {
              timeOut: 0
            });
            this.productoService.createProductByHtml(nombre.value, proveedor.value, familia.value, ubicacionEnCubiculo.value, descripcion.value, cantidadDisponiblesParaUso.value, cantidadDisponiblesParaArreglo.value, cantidadEnUso.value, cantidadEnArreglo.value, this.file).subscribe(function (res) {
              _this9.toastr.clear();

              console.log(res);

              _this9.toastr.success("El producto fue agregado al catálogo", "¡Listo!", {
                timeOut: 0
              });

              setTimeout(function () {
                window.location.reload();
              }, 3000);
            }, function (error) {
              _this9.toastr.clear();

              console.log(error);

              _this9.toastr.error("Lo sentimos, el producto no pudo ser agregado", "¡Ups!");
            });
          }
        }, {
          key: "onPhotoSelected",
          value: function onPhotoSelected(event) {
            var _this10 = this;

            if (event.target.files && event.target.files[0]) {
              this.file = event.target.files[0]; //image preview

              var reader = new FileReader();

              reader.onload = function (e) {
                return _this10.photoSelected = reader.result;
              };

              reader.readAsDataURL(this.file);
            }
          }
        }]);

        return RegistroProductoPrincipalComponent;
      }();

      RegistroProductoPrincipalComponent.ɵfac = function RegistroProductoPrincipalComponent_Factory(t) {
        return new (t || RegistroProductoPrincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      RegistroProductoPrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegistroProductoPrincipalComponent,
        selectors: [["app-registro-producto-principal"]],
        decls: 102,
        vars: 1,
        consts: [[1, "atras"], ["routerLink", "/robocol/menu", "src", "../assets/images/regresar.png", 1, "regresar", 2, "height", "100%", "border-radius", "0", "margin", "auto", 3, "click"], [1, "out"], [1, "container"], ["id", "title"], [3, "submit"], [1, "row"], [1, "col-25"], ["for", "nombre"], [1, "col-75"], ["type", "text", "id", "nombre", "name", "nombre", "placeholder", "Ingresa el nombre del producto", "required", ""], ["nombre", ""], ["for", "proveedor"], ["id", "proveedor", "name", "proveedor", "required", ""], ["proveedor", ""], ["value", "vistronica"], ["value", "nasa"], ["value", "elmono"], ["for", "familia"], ["id", "familia", "name", "familia", "placeholder", "\xBFA qu\xE9 familia pertenece?", "required", ""], ["familia", ""], ["value", "rojo"], ["value", "verde"], ["value", "amarillo"], ["value", "negro"], ["for", "ubicacionEnCubiculo"], ["id", "ubicacionEnCubiculo", "name", "ubicacionEnCubiculo", "placeholder", "\xBFEn qu\xE9 parte del cub\xEDculo se encuentra?", "required", ""], ["ubicacionEnCubiculo", ""], ["value", "piso"], ["value", "repisa"], ["value", "caja"], ["value", "cajon"], ["for", "descripcion"], ["id", "descripcion", "name", "descripcion", "placeholder", "Escribe una breve descripci\xF3n del producto", "required", "", 2, "height", "200px"], ["descripcion", ""], ["type", "number", "id", "cantidadDisponiblesParaUso", "name", "cantidadDisponiblesParaUso", "placeholder", "\xBFCu\xE1ntas unidades est\xE1n disponibles?", "required", ""], ["cantidadDisponiblesParaUso", ""], ["type", "number", "id", "cantidadDisponiblesParaArreglo", "name", "cantidadDisponiblesParaArreglo", "placeholder", "\xBFCu\xE1ntas unidades pueden arreglarse?", "required", ""], ["cantidadDisponiblesParaArreglo", ""], ["type", "number", "id", "cantidadEnUso", "name", "cantidadEnUso", "placeholder", "\xBFCu\xE1ntas unidades est\xE1n prestadas o siendo usadas?", "required", ""], ["cantidadEnUso", ""], ["type", "number", "id", "cantidadEnArreglo", "name", "cantidadEnArreglo", "placeholder", "\xBFCu\xE1ntas unidades est\xE1n siendo arregladas?", "required", ""], ["cantidadEnArreglo", ""], ["for", "foto"], ["type", "file", "id", "image", "name", "image", "placeholder", "Imagen del producto", 1, "d-none", 3, "change"], ["image", ""], ["alt", "Seleccionar imagen", 1, "foto", "img-fluid", 3, "src", "click"], [1, "row", 2, "margin-top", "12px"], ["type", "submit", "value", "Guardar"]],
        template: function RegistroProductoPrincipalComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroProductoPrincipalComponent_Template_img_click_1_listener() {
              return ctx.btnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "REGISTRO DE MATERIAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegistroProductoPrincipalComponent_Template_form_submit_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](91);

              return ctx.addProductByHtml(_r0, _r1, _r2, _r3, _r4, _r5, _r6, _r7, _r8);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Vistr\xF3nica");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NASA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "El Mono");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Familia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Rojo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Verde");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Amarillo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Negro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ubicaci\xF3n en el cub\xEDculo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Piso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Repisa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Caja");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Caj\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Descripci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "textarea", 33, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Cantidad disponibles para uso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Cantidad disponibles para arreglo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Cantidad en uso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 39, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Cantidad en arreglo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 41, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Imagen del producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 44, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegistroProductoPrincipalComponent_Template_input_change_97_listener($event) {
              return ctx.onPhotoSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroProductoPrincipalComponent_Template_img_click_99_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](98);

              return _r9.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photoSelected || "../../../../assets/images/no-image.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"]],
        styles: ["h3[_ngcontent-%COMP%] {\n  color: #e4b503;\n  margin-bottom: 2rem;\n}\n\n\n\n.atras[_ngcontent-%COMP%] {\n  height: 35px;\n  padding-left: 3%;\n  padding-top: 5px;\n}\n\n.regresar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 0;\n  margin: auto;\n}\n\n.foto[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  border-color: #e4b503;\n  box-sizing: border-box;\n  resize: vertical;\n  background-color: #282828;\n  color: white;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n  color: #e4b503;\n}\n\n\n\ninput[type=submit][_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.col-25[_ngcontent-%COMP%] {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n\n\n.col-75[_ngcontent-%COMP%] {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n\n\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.out[_ngcontent-%COMP%] {\n  background-color: #161616;\n}\n\n\n\n@media screen and (max-width: 600px) {\n  .col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0cm8tcHJvZHVjdG8tcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0EsZ0RBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0Usa0RBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFLDRCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFLHdCQUFBOztBQUNBO0VBQ0UsYUFBQTtBQUVKOztBQUNFLDBDQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0UsMENBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDRSxtQ0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNFO0VBQ0kseUJBQUE7QUFFTjs7QUFDRSwrSUFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFFSjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvLXByb2R1Y3RvLXByaW5jaXBhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gIGNvbG9yOiAjZTRiNTAzO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLyogU3R5bGUgaW5wdXRzLCBzZWxlY3QgZWxlbWVudHMgYW5kIHRleHRhcmVhcyAqL1xyXG4uYXRyYXMge1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5yZWdyZXNhcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDsgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZm90byB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgc2VsZWN0LCB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNGI1MDM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBsYWJlbCB0byBkaXNwbGF5IG5leHQgdG8gdGhlIGlucHV0cyAqL1xyXG4gIGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2U0YjUwMztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGNvbnRhaW5lciAqL1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xyXG4gIC5jb2wtMjUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBGbG9hdGluZyBjb2x1bW4gZm9yIGlucHV0czogNzUlIHdpZHRoICovXHJcbiAgLmNvbC03NSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdXR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XHJcbiAgfVxyXG5cclxuICAvKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbC0yNSwgLmNvbC03NSwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "x/zG": function xZG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Menu_opcionesModule", function () {
        return Menu_opcionesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu_opciones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu_opciones.component */
      "PzkK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Menu_opcionesModule = function Menu_opcionesModule() {
        _classCallCheck(this, Menu_opcionesModule);
      };

      Menu_opcionesModule.ɵfac = function Menu_opcionesModule_Factory(t) {
        return new (t || Menu_opcionesModule)();
      };

      Menu_opcionesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: Menu_opcionesModule
      });
      Menu_opcionesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](Menu_opcionesModule, {
          declarations: [_menu_opciones_component__WEBPACK_IMPORTED_MODULE_1__["Menu_opcionesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]],
          exports: [_menu_opciones_component__WEBPACK_IMPORTED_MODULE_1__["Menu_opcionesComponent"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map