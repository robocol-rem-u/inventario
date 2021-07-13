(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/franz/inventario/frontend/FrontInventario/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const host = 'vast-springs-05022.herokuapp.com';
const port = '8587';
const rootApi = 'api';
const environment = {
    production: false,
    baseUrl: `http://${host}:${port}/${rootApi}/`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dh14":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ingreso-usuario/ingreso-usuario.component.ts ***!
  \**********************************************************************/
/*! exports provided: IngresoUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoUsuarioComponent", function() { return IngresoUsuarioComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario/usuario.service */ "gWzw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function IngresoUsuarioComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Contrase\u00F1a incorrecta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class IngresoUsuarioComponent {
    constructor(usuarioService, formBuilder, router) {
        this.usuarioService = usuarioService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.ingreso = true;
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            usuarioUniandes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            contrasenia: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    onLogin(form) {
        this.usuarioService.loginUser(form.value).subscribe(res => {
            console.log("xd", form.value);
            this.router.navigateByUrl("/menu"),
                this.infoUsuario = res;
        });
        this.ingreso = false;
    }
    darInfoUsuario() {
        return this.infoUsuario;
    }
}
IngresoUsuarioComponent.ɵfac = function IngresoUsuarioComponent_Factory(t) { return new (t || IngresoUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IngresoUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IngresoUsuarioComponent, selectors: [["app-ingreso-usuario"]], decls: 19, vars: 3, consts: [["id", "fondo"], [1, "container"], [3, "formGroup", "ngSubmit"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-25"], ["for", "fname", 2, "padding-top", "0px"], [1, "col-75"], ["novalidate", "", "id", "usuarioUniandes", "formControlName", "usuarioUniandes", "type", "text"], ["for", "pwd"], ["id", "contrasenia", "formControlName", "contrasenia", "type", "password", "name", "psw", "title", "Debe contener al menos 9 o m\u00E1s caracteres", "required", ""], ["type", "submit", "value", "INGRESAR", "id", "ingresar", 2, "margin-top", "15px", "width", "150px", 3, "disabled"]], template: function IngresoUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function IngresoUsuarioComponent_Template_form_ngSubmit_2_listener() { return ctx.onLogin(ctx.userForm); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contrase\u00F1a");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ingreso == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.userForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], styles: ["input[type=\"text\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #252525;\n  border-radius: 4px;\n  box-sizing: border-box;\n  resize: vertical;\n  background-color: #282828;\n}\ninput[type=\"password\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #252525;\n  border-radius: 4px;\n  box-sizing: border-box;\n  resize: vertical;\n  background-color: #282828;\n}\n\nlabel[_ngcontent-%COMP%] {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n  color: #e4b503;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  background-color: #282828;\n  color: #e4b503;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #161616;\n  padding: 0px;\n  flex-direction: row;\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n}\n\n.col-25[_ngcontent-%COMP%] {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n.col-75[_ngcontent-%COMP%] {\n  float: left;\n  width: 70%;\n  margin-top: 6px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n@media screen and (max-width: 600px) {\n  .col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=\"submit\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 0;\n    \n  }\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  margin: 0;\n  background-color: #161616;\n}\nimg[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc28tdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTs7O0VBR0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBRUEsa0RBQWtEO0FBQ2xEO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLG1DQUFtQztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQSwrSUFBK0k7QUFDL0k7RUFDRTs7O0lBR0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7QUFDRjtBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJpbmdyZXNvLXVzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI1MjUyNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xufVxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI1MjUyNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xufVxuXG4vKiBTdHlsZSB0aGUgbGFiZWwgdG8gZGlzcGxheSBuZXh0IHRvIHRoZSBpbnB1dHMgKi9cbmxhYmVsIHtcbiAgcGFkZGluZzogMTJweCAxMnB4IDEycHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2U0YjUwMztcbn1cblxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gIGNvbG9yOiAjZTRiNTAzO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogU3R5bGUgdGhlIGNvbnRhaW5lciAqL1xuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG4vKiBGbG9hdGluZyBjb2x1bW4gZm9yIGxhYmVsczogMjUlIHdpZHRoICovXG4uY29sLTI1IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBpbnB1dHM6IDc1JSB3aWR0aCAqL1xuLmNvbC03NSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2wtMjUsXG4gIC5jb2wtNzUsXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICAvKiBtYXJnaW4tbGVmdDogOyAqL1xuICB9XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xufVxuXG5pbWcge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "HJkF":
/*!**********************************************************!*\
  !*** ./src/app/modules/historial/historial.component.ts ***!
  \**********************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/producto/producto.service */ "pXUP");


function HistorialComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const h_r1 = ctx.$implicit;
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
} }
class HistorialComponent {
    constructor(productoService) {
        this.productoService = productoService;
    }
    getHistorial() {
        this.productoService.getHistorialProduct(this.idProducto)
            .subscribe(historial => this.historial = historial);
    }
    ngOnInit() {
        console.log(this.idProducto);
        this.getHistorial();
        console.log("este seria el historial" + this.historial);
    }
}
HistorialComponent.ɵfac = function HistorialComponent_Factory(t) { return new (t || HistorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"])); };
HistorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistorialComponent, selectors: [["app-historial"]], inputs: { idProducto: "idProducto" }, decls: 18, vars: 1, consts: [["id", "fondo"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function HistorialComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historial);
    } }, styles: ["table[_ngcontent-%COMP%]{\n  margin: 15px ;\n}\nh4[_ngcontent-%COMP%]{\n  margin-top: 15px  ;\n  color: #e4b503;\n  text-align: center;\n  margin-bottom: 30px;\n}\n#fondo[_ngcontent-%COMP%]{\n  padding-top: 15px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiaGlzdG9yaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcbiAgbWFyZ2luOiAxNXB4IDtcbn1cbmg0e1xuICBtYXJnaW4tdG9wOiAxNXB4ICA7XG4gIGNvbG9yOiAjZTRiNTAzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4jZm9uZG97XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "PzkK":
/*!******************************************************************!*\
  !*** ./src/app/modules/menu_opciones/menu_opciones.component.ts ***!
  \******************************************************************/
/*! exports provided: Menu_opcionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu_opcionesComponent", function() { return Menu_opcionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class Menu_opcionesComponent {
    constructor() { }
    ngOnInit() { }
}
Menu_opcionesComponent.ɵfac = function Menu_opcionesComponent_Factory(t) { return new (t || Menu_opcionesComponent)(); };
Menu_opcionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Menu_opcionesComponent, selectors: [["app-menu_opciones"]], inputs: { usuario: "usuario" }, decls: 10, vars: 0, consts: [["id", "fondo"], ["type", "button", "routerLink", "/registroProducto", 1, "row", "btn-warning", 2, "margin-top", "0%"], [1, "col-7"], ["src", "../assets/images/registro.png"], [1, "col-5"]], template: function Menu_opcionesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["h6[_ngcontent-%COMP%] {\n  color: aliceblue;\n  height: 15%;\n  background-color: #282828;\n}\n.col-sm[_ngcontent-%COMP%] {\n  background-color: #282828;\n  margin-bottom: 15px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\nimg[_ngcontent-%COMP%] {\n  height: 90%;\n  border-radius: 50%;\n  margin: auto;\n}\n.col-8[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%] {\n  height: 100%;\n  \n  background-color: #282828;\n  display: flex;\n  align-items: center;\n}\n.row[_ngcontent-%COMP%] {\n  height: 25vh;\n  margin-bottom: 15px;\n  max-width: 400px;\n  width: 85%;\n  margin: auto;\n  margin-top: 20px;\n}\nbutton[_ngcontent-%COMP%]{\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n#atras[_ngcontent-%COMP%]{\n  height: 35px;\n  padding-left: 3%;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVfb3BjaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im1lbnVfb3BjaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg2IHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgaGVpZ2h0OiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG59XG4uY29sLXNtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbmltZyB7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jb2wtOCxcbi5jb2wtNCxcbi5jb2wtNyxcbi5jb2wtNSB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogcGFkZGluZy10b3A6IDEwcHg7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucm93IHtcbiAgaGVpZ2h0OiAyNXZoO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5idXR0b257XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuI2F0cmFze1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogMyU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cblxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/usuario/usuario.service */ "gWzw");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AppComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_6_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.usuario);
} }
class AppComponent {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.title = 'FrontInventario';
    }
    loggedIn() {
        return this.usuarioService.loggedIn();
    }
    logout() {
        this.usuarioService.logout();
    }
    actualizar() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 1, consts: [["id", "top-bar", 1, "navbar", "navbar-dark", "navbar-expand-sm", "navbar-fixed-top"], [1, "navbar-header", "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "../assets/images/logo_inventario.png", 2, "height", "48px", "padding", "2px 10px"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [4, "ngIf"], [1, "nav-item"], [1, "nav-link"], [1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\n{\n  margin-left: 10px;\n  margin-right:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW5hdiA+IGxpXG57XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular */ "YIDO");
/* harmony import */ var _modules_registro_producto_registro_producto_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/registro-producto/registro-producto.module */ "aCEV");
/* harmony import */ var _modules_registro_producto_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/registro-producto/registro-producto-principal/registro-producto-principal.component */ "rfj+");
/* harmony import */ var _modules_menu_opciones_menu_opciones_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menu_opciones/menu_opciones.module */ "x/zG");
/* harmony import */ var _modules_menu_opciones_menu_opciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/menu_opciones/menu_opciones.component */ "PzkK");
/* harmony import */ var _modules_ingreso_usuario_ingreso_usuario_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/ingreso-usuario/ingreso-usuario.module */ "imZ4");
/* harmony import */ var _modules_ingreso_usuario_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/ingreso-usuario/ingreso-usuario.component */ "Dh14");
/* harmony import */ var _modules_historial_historial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/historial/historial.component */ "HJkF");
/* harmony import */ var _guard_usuario_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guard/usuario.guard */ "hJWk");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");






// Igx

// Registro de Producto


//menu de opciones


//Ingreso de usuario


//Historial





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_14__["UsuarioGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _modules_registro_producto_registro_producto_module__WEBPACK_IMPORTED_MODULE_7__["RegistroProductoModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: 'registroProducto', component: _modules_registro_producto_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_8__["RegistroProductoPrincipalComponent"], canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_14__["UsuarioGuard"]] },
                { path: 'menu', component: _modules_menu_opciones_menu_opciones_component__WEBPACK_IMPORTED_MODULE_10__["Menu_opcionesComponent"], canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_14__["UsuarioGuard"]] },
                { path: 'ingreso-usuario', component: _modules_ingreso_usuario_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_12__["IngresoUsuarioComponent"] },
                { path: '', pathMatch: 'full', redirectTo: 'ingreso-usuario' },
                { path: 'historial', component: _modules_historial_historial_component__WEBPACK_IMPORTED_MODULE_13__["HistorialComponent"], canActivate: [_guard_usuario_guard__WEBPACK_IMPORTED_MODULE_14__["UsuarioGuard"]] },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxListModule"],
            _modules_menu_opciones_menu_opciones_module__WEBPACK_IMPORTED_MODULE_9__["Menu_opcionesModule"],
            _modules_ingreso_usuario_ingreso_usuario_module__WEBPACK_IMPORTED_MODULE_11__["IngresoUsuarioModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _modules_registro_producto_registro_producto_module__WEBPACK_IMPORTED_MODULE_7__["RegistroProductoModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxListModule"],
        _modules_menu_opciones_menu_opciones_module__WEBPACK_IMPORTED_MODULE_9__["Menu_opcionesModule"],
        _modules_ingreso_usuario_ingreso_usuario_module__WEBPACK_IMPORTED_MODULE_11__["IngresoUsuarioModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]] }); })();


/***/ }),

/***/ "aCEV":
/*!***********************************************************************!*\
  !*** ./src/app/modules/registro-producto/registro-producto.module.ts ***!
  \***********************************************************************/
/*! exports provided: RegistroProductoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroProductoModule", function() { return RegistroProductoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-producto-principal/registro-producto-principal.component */ "rfj+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class RegistroProductoModule {
}
RegistroProductoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RegistroProductoModule });
RegistroProductoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function RegistroProductoModule_Factory(t) { return new (t || RegistroProductoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegistroProductoModule, { declarations: [_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_2__["RegistroProductoPrincipalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], exports: [_registro_producto_principal_registro_producto_principal_component__WEBPACK_IMPORTED_MODULE_2__["RegistroProductoPrincipalComponent"]] }); })();


/***/ }),

/***/ "gWzw":
/*!*****************************************************!*\
  !*** ./src/app/services/usuario/usuario.service.ts ***!
  \*****************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class UsuarioService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'usuario';
        //URL_API= "http://localhost:4000/api/usuario"
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
    }
    getUsuarioPorUsuarioUniandes(usuarioUniandes) {
        const usuario = this.http.get(this.apiUrl + "/" + usuarioUniandes);
        console.log("esto del servicio" + usuario + "si desgloso");
        return usuario;
    }
    getUsuarios() {
        return this.http.get(this.apiUrl);
    }
    getUsuario() { }
    postUsuario() { }
    updateUsuario() { }
    deleteUsuario() { }
    loginUser(usuario) {
        return this.http.post(this.apiUrl + "/login", usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            if (res) {
                //guardar token
                this.saveToken(res.accessToken, res.expiresIn);
            }
        }));
    }
    logout() {
        this.token = '';
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("EXPIRES_IN");
        this.router.navigate(['/ingreso-usuario']);
    }
    saveToken(token, expiresIn) {
        localStorage.setItem("ACCESS_TOKEN", token);
        localStorage.setItem("EXPIRES_IN", expiresIn);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem("ACCESS_TOKEN");
        }
        return this.token;
    }
    loggedIn() {
        // si el token existe -> true
        return !!localStorage.getItem('ACCESS_TOKEN');
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hJWk":
/*!****************************************!*\
  !*** ./src/app/guard/usuario.guard.ts ***!
  \****************************************/
/*! exports provided: UsuarioGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioGuard", function() { return UsuarioGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuario/usuario.service */ "gWzw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UsuarioGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        console.log(this.userService.loggedIn());
        //return true;
        if (this.userService.loggedIn()) {
            console.log("todo bien");
            // this.router.navigate(['/menu'])
            return true;
        }
        //cuando ingresa
        else {
            this.router.navigate(['/ingreso-usuario']);
            console.log("todo mal :c");
            return false;
        }
    }
}
UsuarioGuard.ɵfac = function UsuarioGuard_Factory(t) { return new (t || UsuarioGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsuarioGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioGuard, factory: UsuarioGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "imZ4":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ingreso-usuario/ingreso-usuario.module.ts ***!
  \*******************************************************************/
/*! exports provided: IngresoUsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoUsuarioModule", function() { return IngresoUsuarioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-usuario.component */ "Dh14");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class IngresoUsuarioModule {
}
IngresoUsuarioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: IngresoUsuarioModule });
IngresoUsuarioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function IngresoUsuarioModule_Factory(t) { return new (t || IngresoUsuarioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IngresoUsuarioModule, { declarations: [_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_1__["IngresoUsuarioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_ingreso_usuario_component__WEBPACK_IMPORTED_MODULE_1__["IngresoUsuarioComponent"]] }); })();


/***/ }),

/***/ "pXUP":
/*!*******************************************************!*\
  !*** ./src/app/services/producto/producto.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ProductoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = 'http://localhost:4000/api/productos';
    }
    getProducts() {
        return this.httpClient.get(this.URL_API);
    }
    getHistorialProduct(idProducto) {
        console.warn(this.URL_API + "/" + idProducto + "/historial");
        return this.httpClient.get(this.URL_API + "/" + idProducto + "/historial");
    }
    //Se hizo así y no con un método normal para hacer un POST de producto, porque por alguna razón no estaba enviando bien la imagen.
    createProductByHtml(nombre, proveedor, familia, ubicacionEnCubiculo, descripcion, cantidadTotal, image) {
        const fd = new FormData();
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
}
ProductoService.ɵfac = function ProductoService_Factory(t) { return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductoService, factory: ProductoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rfj+":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/registro-producto/registro-producto-principal/registro-producto-principal.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RegistroProductoPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroProductoPrincipalComponent", function() { return RegistroProductoPrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_producto_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/producto/producto.service */ "pXUP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class RegistroProductoPrincipalComponent {
    constructor(productoService, router) {
        this.productoService = productoService;
        this.router = router;
        this.btnClick = function () {
            this.router.navigateByUrl('/menu');
        };
    }
    ngOnInit() {
    }
    addProductByHtml(nombre, proveedor, familia, ubicacionEnCubiculo, descripcion, cantidadTotal) {
        this.productoService.createProductByHtml(nombre.value, proveedor.value, familia.value, ubicacionEnCubiculo.value, descripcion.value, cantidadTotal.value, this.file).subscribe(res => console.log(res), err => console.log(err));
    }
    onPhotoSelected(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            //image preview
            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
}
RegistroProductoPrincipalComponent.ɵfac = function RegistroProductoPrincipalComponent_Factory(t) { return new (t || RegistroProductoPrincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegistroProductoPrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroProductoPrincipalComponent, selectors: [["app-registro-producto-principal"]], decls: 79, vars: 1, consts: [[1, "atras"], ["routerLink", "/menu", "src", "../assets/images/regresar.png", 1, "regresar", 2, "height", "100%", "border-radius", "0", "margin", "auto", 3, "click"], [1, "out"], [1, "container"], [3, "submit"], [1, "row"], [1, "col-25"], ["for", "nombre"], [1, "col-75"], ["type", "text", "id", "nombre", "name", "nombre", "placeholder", "Ingresa el nombre del producto", "required", ""], ["nombre", ""], ["for", "proveedor"], ["id", "proveedor", "name", "proveedor", "required", ""], ["proveedor", ""], ["value", "vistronica"], ["value", "nasa"], ["value", "elmono"], ["for", "familia"], ["id", "familia", "name", "familia", "placeholder", "\u00BFA qu\u00E9 familia pertenece?", "required", ""], ["familia", ""], ["value", "rojo"], ["value", "verde"], ["value", "amarillo"], ["value", "negro"], ["for", "ubicacionEnCubiculo"], ["id", "ubicacionEnCubiculo", "name", "ubicacionEnCubiculo", "placeholder", "\u00BFEn qu\u00E9 parte del cub\u00EDculo se encuentra?", "required", ""], ["ubicacionEnCubiculo", ""], ["value", "piso"], ["value", "repisa"], ["value", "caja"], ["value", "cajon"], ["for", "descripcion"], ["id", "descripcion", "name", "descripcion", "placeholder", "Escribe una breve descripci\u00F3n del producto", "required", "", 2, "height", "200px"], ["descripcion", ""], ["type", "number", "id", "cantidadTotal", "name", "cantidadTotal", "placeholder", "\u00BFCu\u00E1ntas unidades existen en total?", "required", ""], ["cantidadTotal", ""], ["for", "foto"], ["type", "file", "id", "image", "name", "image", "placeholder", "Imagen del producto", 1, "d-none", 3, "change"], ["image", ""], ["alt", "Seleccionar imagen", 1, "foto", "img-fluid", 3, "src", "click"], [1, "row", 2, "margin-top", "12px"], ["type", "submit", "value", "Guardar"]], template: function RegistroProductoPrincipalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroProductoPrincipalComponent_Template_img_click_1_listener() { return ctx.btnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegistroProductoPrincipalComponent_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); return ctx.addProductByHtml(_r0, _r1, _r2, _r3, _r4, _r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vistr\u00F3nica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "NASA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "El Mono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Familia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Rojo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Verde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Amarillo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Negro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ubicaci\u00F3n en el cub\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Piso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Repisa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Caja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Caj\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "textarea", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cantidad total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Imagen del producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegistroProductoPrincipalComponent_Template_input_change_74_listener($event) { return ctx.onPhotoSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroProductoPrincipalComponent_Template_img_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75); return _r6.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photoSelected || "../../../../assets/images/no-image.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".atras[_ngcontent-%COMP%] {\n  height: 35px;\n  padding-left: 3%;\n  padding-top: 5px;\n}\n.regresar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 0;\n  margin: auto;\n}\n.foto[_ngcontent-%COMP%] {\n  width: 100%;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  border-color: #e4b503;\n  box-sizing: border-box;\n  resize: vertical;\n  background-color: #282828;\n  color: white;\n}\n\nlabel[_ngcontent-%COMP%] {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n  color: #e4b503;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.col-25[_ngcontent-%COMP%] {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n.col-75[_ngcontent-%COMP%] {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.out[_ngcontent-%COMP%] {\n  background-color: #161616;\n}\n\n@media screen and (max-width: 600px) {\n  .col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdHJvLXByb2R1Y3RvLXByaW5jaXBhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0FBQ0Y7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUUsa0RBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRSw0QkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUUsd0JBQUE7QUFDQTtFQUNFLGFBQUE7QUFDSjtBQUVFLDBDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFLDBDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFLG1DQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjtBQUVFO0VBQ0kseUJBQUE7QUFDTjtBQUVFLCtJQUFBO0FBQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBQ0o7QUFDRiIsImZpbGUiOiJyZWdpc3Ryby1wcm9kdWN0by1wcmluY2lwYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSBpbnB1dHMsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXG4uYXRyYXMge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogMyU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5yZWdyZXNhcntcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwOyBcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm90byB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPW51bWJlcl0sIHNlbGVjdCwgdGV4dGFyZWF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItY29sb3I6ICNlNGI1MDM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgbGFiZWwgdG8gZGlzcGxheSBuZXh0IHRvIHRoZSBpbnB1dHMgKi9cbiAgbGFiZWwge1xuICAgIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjZTRiNTAzO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgc3VibWl0IGJ1dHRvbiAqL1xuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHRoZSBjb250YWluZXIgKi9cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xuICAuY29sLTI1IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICBcbiAgLyogRmxvYXRpbmcgY29sdW1uIGZvciBpbnB1dHM6IDc1JSB3aWR0aCAqL1xuICAuY29sLTc1IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICBcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4gIC5yb3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgXG4gIC5vdXR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xuICB9XG5cbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbC0yNSwgLmNvbC03NSwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH0iXX0= */"] });


/***/ }),

/***/ "x/zG":
/*!***************************************************************!*\
  !*** ./src/app/modules/menu_opciones/menu_opciones.module.ts ***!
  \***************************************************************/
/*! exports provided: Menu_opcionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu_opcionesModule", function() { return Menu_opcionesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_opciones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_opciones.component */ "PzkK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class Menu_opcionesModule {
}
Menu_opcionesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: Menu_opcionesModule });
Menu_opcionesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function Menu_opcionesModule_Factory(t) { return new (t || Menu_opcionesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](Menu_opcionesModule, { declarations: [_menu_opciones_component__WEBPACK_IMPORTED_MODULE_1__["Menu_opcionesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]], exports: [_menu_opciones_component__WEBPACK_IMPORTED_MODULE_1__["Menu_opcionesComponent"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map