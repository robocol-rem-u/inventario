(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Alvaro\Documents\Universidad\Robocol\inventario\frontend\FrontInventario\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
        baseUrl: "http://".concat(host, ":").concat(port, "/").concat(rootApi, "/")
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
    "Dh14":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/ingreso-usuario/ingreso-usuario.component.ts ***!
      \**********************************************************************/

    /*! exports provided: IngresoUsuarioComponent */

    /***/
    function Dh14(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function IngresoUsuarioComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Contrase\xF1a incorrecta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var IngresoUsuarioComponent = /*#__PURE__*/function () {
        function IngresoUsuarioComponent(usuarioService, formBuilder, router) {
          _classCallCheck(this, IngresoUsuarioComponent);

          this.usuarioService = usuarioService;
          this.formBuilder = formBuilder;
          this.router = router;
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
              _this.router.navigateByUrl("/robocol/menu"), _this.infoUsuario = res;
            });
            this.ingreso = false;
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
        return new (t || IngresoUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      IngresoUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: IngresoUsuarioComponent,
        selectors: [["app-ingreso-usuario"]],
        decls: 19,
        vars: 3,
        consts: [["id", "fondo"], [1, "container"], [3, "formGroup", "ngSubmit"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-25"], ["for", "fname", 2, "padding-top", "0px"], [1, "col-75"], ["novalidate", "", "id", "usuarioUniandes", "formControlName", "usuarioUniandes", "type", "text"], ["for", "pwd"], ["id", "contrasenia", "formControlName", "contrasenia", "type", "password", "name", "psw", "title", "Debe contener al menos 9 o m\xE1s caracteres", "required", ""], ["type", "submit", "value", "INGRESAR", "id", "ingresar", 2, "margin-top", "15px", "width", "150px", 3, "disabled"]],
        template: function IngresoUsuarioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function IngresoUsuarioComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onLogin(ctx.userForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IngresoUsuarioComponent_div_3_Template, 3, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "USUARIO ROBOCOL");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " INGRESAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ingreso == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.userForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]],
        styles: ["input[type=\"text\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #252525;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: vertical;\r\n  background-color: #282828;\r\n}\r\ninput[type=\"password\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #252525;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: vertical;\r\n  background-color: #282828;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  padding: 12px 12px 12px 0;\r\n  display: inline-block;\r\n  color: #e4b503;\r\n}\r\n\r\ninput[type=\"submit\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  background-color: #282828;\r\n  color: #e4b503;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  background-color: #161616;\r\n  padding: 0px;\r\n  flex-direction: row;\r\n  display: flex;\r\n  flex-flow: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 90vh;\r\n}\r\n\r\n.col-25[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 25%;\r\n  margin-top: 6px;\r\n}\r\n\r\n.col-75[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 70%;\r\n  margin-top: 6px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=\"submit\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n    \r\n  }\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  margin: 0;\r\n  background-color: #161616;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc28tdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTs7O0VBR0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBRUEsa0RBQWtEO0FBQ2xEO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLG1DQUFtQztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQSwrSUFBK0k7QUFDL0k7RUFDRTs7O0lBR0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7QUFDRjtBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJpbmdyZXNvLXVzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNTI1MjU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjUyNTI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGxhYmVsIHRvIGRpc3BsYXkgbmV4dCB0byB0aGUgaW5wdXRzICovXHJcbmxhYmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2U0YjUwMztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gIGNvbG9yOiAjZTRiNTAzO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xyXG4uY29sLTI1IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBpbnB1dHM6IDc1JSB3aWR0aCAqL1xyXG4uY29sLTc1IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29sLTI1LFxyXG4gIC5jb2wtNzUsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA7ICovXHJcbiAgfVxyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "HJkF":
    /*!**********************************************************!*\
      !*** ./src/app/modules/historial/historial.component.ts ***!
      \**********************************************************/

    /*! exports provided: HistorialComponent */

    /***/
    function HJkF(module, __webpack_exports__, __webpack_require__) {
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


      var src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/producto/producto.service */
      "pXUP");

      function HistorialComponent_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);

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
        function HistorialComponent(productoService) {
          _classCallCheck(this, HistorialComponent);

          this.productoService = productoService;
        }

        _createClass(HistorialComponent, [{
          key: "getHistorial",
          value: function getHistorial() {
            var _this2 = this;

            this.productoService.getHistorialProduct(this.idProducto).subscribe(function (historial) {
              return _this2.historial = historial;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.idProducto);
            this.getHistorial();
            console.log("este seria el historial" + this.historial);
          }
        }]);

        return HistorialComponent;
      }();

      HistorialComponent.ɵfac = function HistorialComponent_Factory(t) {
        return new (t || HistorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]));
      };

      HistorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HistorialComponent,
        selectors: [["app-historial"]],
        inputs: {
          idProducto: "idProducto"
        },
        decls: 18,
        vars: 1,
        consts: [["id", "fondo"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
        template: function HistorialComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Historial de movimientos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tipo de movimiento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Responsable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fecha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hora");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HistorialComponent_tr_17_Template, 13, 11, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historial);
          }
        },
        styles: ["table[_ngcontent-%COMP%]{\r\n  margin: 15px ;\r\n}\r\nh4[_ngcontent-%COMP%]{\r\n  margin-top: 15px  ;\r\n  color: #e4b503;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n#fondo[_ngcontent-%COMP%]{\r\n  padding-top: 15px;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiaGlzdG9yaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICBtYXJnaW46IDE1cHggO1xyXG59XHJcbmg0e1xyXG4gIG1hcmdpbi10b3A6IDE1cHggIDtcclxuICBjb2xvcjogI2U0YjUwMztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4jZm9uZG97XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgLyogcGFkZGluZzogMTVweDsgKi9cclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "PzkK":
    /*!******************************************************************!*\
      !*** ./src/app/modules/menu_opciones/menu_opciones.component.ts ***!
      \******************************************************************/

    /*! exports provided: Menu_opcionesComponent */

    /***/
    function PzkK(module, __webpack_exports__, __webpack_require__) {
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
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
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
        consts: [["id", "top-bar", 1, "navbar", "navbar-dark", "navbar-expand-sm", "navbar-fixed-top"], [1, "navbar-header", "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "../assets/images/logo_inventario.png", 2, "height", "48px", "padding", "2px 10px"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [4, "ngIf"], [1, "nav-item"], [1, "nav-link"], [1, "nav-link", 3, "click"]],
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
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _modules_catalogo_catalogo_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./modules/catalogo/catalogo.module */
      "eH5C");
      /* harmony import */


      var _modules_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./modules/catalogo/catalogo.component */
      "oI9u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
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

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]],
        imports: [[ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _modules_registro_producto_registro_producto_module__WEBPACK_IMPORTED_MODULE_8__["RegistroProductoModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
          path: 'robocol/registroProducto',
          component: _modules_registro_producto_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_9__["RegistroProductoPrincipalComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: '/robocol/menu',
          component: _modules_menu_opciones_menu_opciones_component__WEBPACK_IMPORTED_MODULE_11__["Menu_opcionesComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: '/robocol/ingreso-usuario',
          component: _modules_ingreso_usuario_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_13__["IngresoUsuarioComponent"]
        }, {
          path: '/robocol',
          pathMatch: 'full',
          redirectTo: 'ingreso-usuario'
        }, {
          path: '/robocol/historial',
          component: _modules_historial_historial_component__WEBPACK_IMPORTED_MODULE_14__["HistorialComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }, {
          path: '/robocol/catalogo',
          component: _modules_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_18__["CatalogoComponent"],
          canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_15__["UsuarioGuard"]]
        }]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxListModule"], _modules_menu_opciones_menu_opciones_module__WEBPACK_IMPORTED_MODULE_10__["Menu_opcionesModule"], _modules_ingreso_usuario_ingreso_usuario_module__WEBPACK_IMPORTED_MODULE_12__["IngresoUsuarioModule"], _modules_catalogo_catalogo_module__WEBPACK_IMPORTED_MODULE_17__["CatalogoModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _modules_registro_producto_registro_producto_module__WEBPACK_IMPORTED_MODULE_8__["RegistroProductoModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxListModule"], _modules_menu_opciones_menu_opciones_module__WEBPACK_IMPORTED_MODULE_10__["Menu_opcionesModule"], _modules_ingreso_usuario_ingreso_usuario_module__WEBPACK_IMPORTED_MODULE_12__["IngresoUsuarioModule"], _modules_catalogo_catalogo_module__WEBPACK_IMPORTED_MODULE_17__["CatalogoModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]]
        });
      })();
      /***/

    },

    /***/
    "aCEV":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/registro-producto/registro-producto.module.ts ***!
      \***********************************************************************/

    /*! exports provided: RegistroProductoModule */

    /***/
    function aCEV(module, __webpack_exports__, __webpack_require__) {
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

      RegistroProductoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: RegistroProductoModule
      });
      RegistroProductoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function RegistroProductoModule_Factory(t) {
          return new (t || RegistroProductoModule)();
        },
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
    "cxbk":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function cxbk(module, __webpack_exports__, __webpack_require__) {
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
    "eH5C":
    /*!*****************************************************!*\
      !*** ./src/app/modules/catalogo/catalogo.module.ts ***!
      \*****************************************************/

    /*! exports provided: CatalogoModule */

    /***/
    function eH5C(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CatalogoModule = function CatalogoModule() {
        _classCallCheck(this, CatalogoModule);
      };

      CatalogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: CatalogoModule
      });
      CatalogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function CatalogoModule_Factory(t) {
          return new (t || CatalogoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CatalogoModule, {
          declarations: [_catalogo_component__WEBPACK_IMPORTED_MODULE_1__["CatalogoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_catalogo_component__WEBPACK_IMPORTED_MODULE_1__["CatalogoComponent"]]
        });
      })();
      /***/

    },

    /***/
    "gWzw":
    /*!*****************************************************!*\
      !*** ./src/app/services/usuario/usuario.service.ts ***!
      \*****************************************************/

    /*! exports provided: UsuarioService */

    /***/
    function gWzw(module, __webpack_exports__, __webpack_require__) {
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
            var _this3 = this;

            return this.http.post(this.apiUrl + "/login", usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              if (res) {
                //guardar token
                _this3.saveToken(res.accessToken, res.expiresIn);
              }
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token = '';
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.removeItem("EXPIRES_IN");
            this.router.navigate(['/ingreso-usuario']);
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
    "hJWk":
    /*!****************************************!*\
      !*** ./src/app/guard/usuario.guard.ts ***!
      \****************************************/

    /*! exports provided: UsuarioGuard */

    /***/
    function hJWk(module, __webpack_exports__, __webpack_require__) {
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
              console.log("todo bien"); // this.router.navigate(['/menu'])

              return true;
            } //cuando ingresa
            else {
                this.router.navigate(['/ingreso-usuario']);
                console.log("todo mal :c");
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
    "imZ4":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/ingreso-usuario/ingreso-usuario.module.ts ***!
      \*******************************************************************/

    /*! exports provided: IngresoUsuarioModule */

    /***/
    function imZ4(module, __webpack_exports__, __webpack_require__) {
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

      IngresoUsuarioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: IngresoUsuarioModule
      });
      IngresoUsuarioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function IngresoUsuarioModule_Factory(t) {
          return new (t || IngresoUsuarioModule)();
        },
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
    "oI9u":
    /*!********************************************************!*\
      !*** ./src/app/modules/catalogo/catalogo.component.ts ***!
      \********************************************************/

    /*! exports provided: CatalogoComponent */

    /***/
    function oI9u(module, __webpack_exports__, __webpack_require__) {
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
        }

        _createClass(CatalogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.productoService.getProducts().subscribe(function (prs) {
              _this4.productos = prs;
              console.log(_this4.productos[1]._id);
            }, function (err) {
              console.log(err);

              _this4.toastr.error("Hubo un problema al buscar los productos", "Ups!", {
                timeOut: 0
              });
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
            this.router.navigateByUrl("/robocol/disponibilidad/" + pr._id);
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
    "pXUP":
    /*!*******************************************************!*\
      !*** ./src/app/services/producto/producto.service.ts ***!
      \*******************************************************/

    /*! exports provided: ProductoService */

    /***/
    function pXUP(module, __webpack_exports__, __webpack_require__) {
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
          }
        }, {
          key: "getHistorialProduct",
          value: function getHistorialProduct(idProducto) {
            console.warn(this.URL_API + "/" + idProducto + "/historial");
            return this.httpClient.get(this.URL_API + "/" + idProducto + "/historial");
          } //Se hizo así y no con un método normal para hacer un POST de producto, porque por alguna razón no estaba enviando bien la imagen.

        }, {
          key: "createProductByHtml",
          value: function createProductByHtml(nombre, proveedor, familia, ubicacionEnCubiculo, descripcion, cantidadTotal, image) {
            var fd = new FormData();
            fd.append("nombre", nombre);
            fd.append("proveedor", proveedor);
            fd.append("familia", familia);
            fd.append("ubicacionEnCubiculo", ubicacionEnCubiculo);
            fd.append("descripcion", descripcion);
            fd.append("cantidadTotal", cantidadTotal);
            fd.append("cantidadDisponiblesParaUso", "0");
            fd.append("cantidadDisponiblesParaArreglo", "0");
            fd.append("cantidadEnUso", "0");
            fd.append("cantidadEnArreglo", "0");
            fd.append("image", image);
            return this.httpClient.post(this.URL_API, fd);
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
    "rfj+":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/registro-producto/registro-producto-principal/registro-producto-principal.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: RegistroProductoPrincipalComponent */

    /***/
    function rfj(module, __webpack_exports__, __webpack_require__) {
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
          value: function addProductByHtml(nombre, proveedor, familia, ubicacionEnCubiculo, descripcion, cantidadTotal) {
            var _this5 = this;

            this.toastr.info("Estamos agregando tu producto al catálogo", "Un momento", {
              timeOut: 0
            });
            this.productoService.createProductByHtml(nombre.value, proveedor.value, familia.value, ubicacionEnCubiculo.value, descripcion.value, cantidadTotal.value, this.file).subscribe(function (res) {
              _this5.toastr.clear();

              console.log(res);

              _this5.toastr.success("El producto fue agregado al catálogo", "¡Listo!", {
                timeOut: 0
              });

              setTimeout(function () {
                window.location.reload();
              }, 3000);
            }, function (error) {
              _this5.toastr.clear();

              console.log(error);

              _this5.toastr.error("Lo sentimos, el producto no pudo ser agregado", "¡Ups!");
            });
          }
        }, {
          key: "onPhotoSelected",
          value: function onPhotoSelected(event) {
            var _this6 = this;

            if (event.target.files && event.target.files[0]) {
              this.file = event.target.files[0]; //image preview

              var reader = new FileReader();

              reader.onload = function (e) {
                return _this6.photoSelected = reader.result;
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
        decls: 81,
        vars: 1,
        consts: [[1, "atras"], ["routerLink", "/robocol/menu", "src", "../assets/images/regresar.png", 1, "regresar", 2, "height", "100%", "border-radius", "0", "margin", "auto", 3, "click"], [1, "out"], [1, "container"], ["id", "title"], [3, "submit"], [1, "row"], [1, "col-25"], ["for", "nombre"], [1, "col-75"], ["type", "text", "id", "nombre", "name", "nombre", "placeholder", "Ingresa el nombre del producto", "required", ""], ["nombre", ""], ["for", "proveedor"], ["id", "proveedor", "name", "proveedor", "required", ""], ["proveedor", ""], ["value", "vistronica"], ["value", "nasa"], ["value", "elmono"], ["for", "familia"], ["id", "familia", "name", "familia", "placeholder", "\xBFA qu\xE9 familia pertenece?", "required", ""], ["familia", ""], ["value", "rojo"], ["value", "verde"], ["value", "amarillo"], ["value", "negro"], ["for", "ubicacionEnCubiculo"], ["id", "ubicacionEnCubiculo", "name", "ubicacionEnCubiculo", "placeholder", "\xBFEn qu\xE9 parte del cub\xEDculo se encuentra?", "required", ""], ["ubicacionEnCubiculo", ""], ["value", "piso"], ["value", "repisa"], ["value", "caja"], ["value", "cajon"], ["for", "descripcion"], ["id", "descripcion", "name", "descripcion", "placeholder", "Escribe una breve descripci\xF3n del producto", "required", "", 2, "height", "200px"], ["descripcion", ""], ["type", "number", "id", "cantidadTotal", "name", "cantidadTotal", "placeholder", "\xBFCu\xE1ntas unidades existen en total?", "required", ""], ["cantidadTotal", ""], ["for", "foto"], ["type", "file", "id", "image", "name", "image", "placeholder", "Imagen del producto", 1, "d-none", 3, "change"], ["image", ""], ["alt", "Seleccionar imagen", 1, "foto", "img-fluid", 3, "src", "click"], [1, "row", 2, "margin-top", "12px"], ["type", "submit", "value", "Guardar"]],
        template: function RegistroProductoPrincipalComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);

              return ctx.addProductByHtml(_r0, _r1, _r2, _r3, _r4, _r5);
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Cantidad total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Imagen del producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 38, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegistroProductoPrincipalComponent_Template_input_change_76_listener($event) {
              return ctx.onPhotoSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroProductoPrincipalComponent_Template_img_click_78_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

              return _r6.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photoSelected || "../../../../assets/images/no-image.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
        styles: ["h3[_ngcontent-%COMP%] {\n  color: #e4b503;\n  margin-bottom: 2rem;\n}\n\n\n\n.atras[_ngcontent-%COMP%] {\n  height: 35px;\n  padding-left: 3%;\n  padding-top: 5px;\n}\n\n.regresar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 0;\n  margin: auto;\n}\n\n.foto[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  border-color: #e4b503;\n  box-sizing: border-box;\n  resize: vertical;\n  background-color: #282828;\n  color: white;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n  color: #e4b503;\n}\n\n\n\ninput[type=submit][_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.col-25[_ngcontent-%COMP%] {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n\n\n.col-75[_ngcontent-%COMP%] {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n\n\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.out[_ngcontent-%COMP%] {\n  background-color: #161616;\n}\n\n\n\n@media screen and (max-width: 600px) {\n  .col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0cm8tcHJvZHVjdG8tcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0EsZ0RBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0Usa0RBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFLDRCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFLHdCQUFBOztBQUNBO0VBQ0UsYUFBQTtBQUVKOztBQUNFLDBDQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0UsMENBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDRSxtQ0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNFO0VBQ0kseUJBQUE7QUFFTjs7QUFDRSwrSUFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFFSjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvLXByb2R1Y3RvLXByaW5jaXBhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gIGNvbG9yOiAjZTRiNTAzO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLyogU3R5bGUgaW5wdXRzLCBzZWxlY3QgZWxlbWVudHMgYW5kIHRleHRhcmVhcyAqL1xyXG4uYXRyYXMge1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5yZWdyZXNhcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDsgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZm90byB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgc2VsZWN0LCB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNGI1MDM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBsYWJlbCB0byBkaXNwbGF5IG5leHQgdG8gdGhlIGlucHV0cyAqL1xyXG4gIGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2U0YjUwMztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGNvbnRhaW5lciAqL1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xyXG4gIC5jb2wtMjUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBGbG9hdGluZyBjb2x1bW4gZm9yIGlucHV0czogNzUlIHdpZHRoICovXHJcbiAgLmNvbC03NSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdXR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XHJcbiAgfVxyXG5cclxuICAvKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbC0yNSwgLmNvbC03NSwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "x/zG":
    /*!***************************************************************!*\
      !*** ./src/app/modules/menu_opciones/menu_opciones.module.ts ***!
      \***************************************************************/

    /*! exports provided: Menu_opcionesModule */

    /***/
    function xZG(module, __webpack_exports__, __webpack_require__) {
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

      Menu_opcionesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: Menu_opcionesModule
      });
      Menu_opcionesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function Menu_opcionesModule_Factory(t) {
          return new (t || Menu_opcionesModule)();
        },
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
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
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
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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