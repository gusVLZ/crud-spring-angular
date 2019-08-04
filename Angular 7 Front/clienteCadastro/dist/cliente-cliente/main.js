(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _paginas_lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginas/lista-cliente/lista-cliente.component */ "./src/app/paginas/lista-cliente/lista-cliente.component.ts");
/* harmony import */ var _paginas_criar_cliente_criar_cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginas/criar-cliente/criar-cliente.component */ "./src/app/paginas/criar-cliente/criar-cliente.component.ts");
/* harmony import */ var _paginas_editar_cliente_editar_cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginas/editar-cliente/editar-cliente.component */ "./src/app/paginas/editar-cliente/editar-cliente.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _paginas_lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_2__["ListaClienteComponent"] },
    { path: 'cliente/criar', component: _paginas_criar_cliente_criar_cliente_component__WEBPACK_IMPORTED_MODULE_3__["CriarClienteComponent"] },
    { path: 'cliente/editar/:id', component: _paginas_editar_cliente_editar_cliente_component__WEBPACK_IMPORTED_MODULE_4__["EditarClienteComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">{{ titulo }}</a>\n</nav>\n<router-outlet></router-outlet>\n\n<app-error-msg></app-error-msg>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.titulo = 'Front do cadastro de visitas de clientes em Angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compartilhado/error-msg/error-msg.component */ "./src/app/compartilhado/error-msg/error-msg.component.ts");
/* harmony import */ var _paginas_lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginas/lista-cliente/lista-cliente.component */ "./src/app/paginas/lista-cliente/lista-cliente.component.ts");
/* harmony import */ var _compartilhado_form_cliente_form_cliente_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compartilhado/form-cliente/form-cliente.component */ "./src/app/compartilhado/form-cliente/form-cliente.component.ts");
/* harmony import */ var _paginas_criar_cliente_criar_cliente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paginas/criar-cliente/criar-cliente.component */ "./src/app/paginas/criar-cliente/criar-cliente.component.ts");
/* harmony import */ var _paginas_editar_cliente_editar_cliente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paginas/editar-cliente/editar-cliente.component */ "./src/app/paginas/editar-cliente/editar-cliente.component.ts");
/* harmony import */ var _compartilhado_representantes_combo_representantes_combo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./compartilhado/representantes-combo/representantes-combo.component */ "./src/app/compartilhado/representantes-combo/representantes-combo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_6__["ErrorMsgComponent"],
                _paginas_lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_7__["ListaClienteComponent"],
                _compartilhado_form_cliente_form_cliente_component__WEBPACK_IMPORTED_MODULE_8__["FormClienteComponent"],
                _paginas_criar_cliente_criar_cliente_component__WEBPACK_IMPORTED_MODULE_9__["CriarClienteComponent"],
                _paginas_editar_cliente_editar_cliente_component__WEBPACK_IMPORTED_MODULE_10__["EditarClienteComponent"],
                _compartilhado_representantes_combo_representantes_combo_component__WEBPACK_IMPORTED_MODULE_11__["RepresentantesComboComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: [_compartilhado_representantes_combo_representantes_combo_component__WEBPACK_IMPORTED_MODULE_11__["RepresentantesComboComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compartilhado/error-msg/error-msg.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/compartilhado/error-msg/error-msg.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhcnRpbGhhZG8vZXJyb3ItbXNnL2Vycm9yLW1zZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/compartilhado/error-msg/error-msg.component.html":
/*!******************************************************************!*\
  !*** ./src/app/compartilhado/error-msg/error-msg.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" *ngIf=\"error\">\n  {{ error }}\n</div>"

/***/ }),

/***/ "./src/app/compartilhado/error-msg/error-msg.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/compartilhado/error-msg/error-msg.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsgComponent", function() { return ErrorMsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorMsgComponent = /** @class */ (function () {
    function ErrorMsgComponent() {
    }
    ErrorMsgComponent.prototype.setError = function (error, tempo) {
        var _this = this;
        if (tempo === void 0) { tempo = 5000; }
        this.error = error;
        setTimeout(function () {
            _this.error = null;
        }, tempo);
    };
    ErrorMsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-msg',
            template: __webpack_require__(/*! ./error-msg.component.html */ "./src/app/compartilhado/error-msg/error-msg.component.html"),
            styles: [__webpack_require__(/*! ./error-msg.component.css */ "./src/app/compartilhado/error-msg/error-msg.component.css")]
        })
    ], ErrorMsgComponent);
    return ErrorMsgComponent;
}());



/***/ }),

/***/ "./src/app/compartilhado/form-cliente/form-cliente.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/compartilhado/form-cliente/form-cliente.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhcnRpbGhhZG8vZm9ybS1jbGllbnRlL2Zvcm0tY2xpZW50ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/compartilhado/form-cliente/form-cliente.component.html":
/*!************************************************************************!*\
  !*** ./src/app/compartilhado/form-cliente/form-cliente.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"representante\">Representante</label>\n    <select class=\"form-control\" id=\"representante\" name=\"representante\" required #idRepresentante>\n      <option value=\"{{repres.id}}\" *ngFor=\"let repres of representante\">{{repres.nome}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"nome\">Cliente</label>\n    <input class=\"form-control\" id=\"nome\" placeholder=\"Nome cliente\" name=\"nome\" #nome=\"ngModel\"\n      [(ngModel)]=\"cliente.nome\" [class.is-invalid]=\"!nome.valid && nome.touched\" required />\n    <div *ngIf=\"!nome.valid && nome.touched\" class=\"text-danger\">\n      Informe o nome do cliente.\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"email\">E-mail</label>\n    <input class=\"form-control\" type=\"email\" id=\"email\" placeholder=\"E-Mail cliente\" name=\"email\" #email=\"ngModel\"\n      [(ngModel)]=\"cliente.email\" [class.is-invalid]=\"!email.valid && email.touched\" required />\n    <div *ngIf=\"!email.valid && email.touched\" class=\"text-danger\">\n      Informe o E-Mail do cliente.\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"dtVisita\">Data da visita</label>\n    <input class=\"form-control\" type=\"datetime-local\" id=\"dtVisita\" placeholder=\"Data de visita\" name=\"dtVisita\" #dtVisita=\"ngModel\"\n      [(ngModel)]=\"cliente.dtVisita\" [class.is-invalid]=\"!dtVisita.valid && dtVisita.touched\" required value=\"{{d}}\"/>\n    <div *ngIf=\"!dtVisita.valid && dtVisita.touched\" class=\"text-danger\">\n      Informe a data da visita.\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"valorDesloc\">Valor Deslocamento</label>\n    <input class=\"form-control\" type=\"number\" id=\"valorDesloc\" placeholder=\"R$ Deslocamento\" name=\"valorDesloc\" #valorDesloc=\"ngModel\"\n      [(ngModel)]=\"cliente.valorDesloc\" [class.is-invalid]=\"!valorDesloc.valid && valorDesloc.touched\" required value=\"{{d}}\"/>\n    <div *ngIf=\"!valorDesloc.valid && valorDesloc.touched\" class=\"text-danger\">\n      Informe o valor de deslocamento.\n    </div>\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Salvar</button>\n</form>"

/***/ }),

/***/ "./src/app/compartilhado/form-cliente/form-cliente.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/compartilhado/form-cliente/form-cliente.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClienteComponent", function() { return FormClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_representante_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/representante.service */ "./src/app/services/representante.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormClienteComponent = /** @class */ (function () {
    function FormClienteComponent(representanteServ) {
        this.representanteServ = representanteServ;
        this.cliente = {};
        this.outputCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormClienteComponent.prototype.ngOnInit = function () {
        this.getRepres();
    };
    FormClienteComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var idRepres = this.idRepresentante.nativeElement.value;
        this.representanteServ.getRepresentante(idRepres).subscribe(function (repres) {
            _this.cliente.representante = repres;
            _this.outputCliente.emit(_this.cliente);
        });
    };
    FormClienteComponent.prototype.getRepres = function () {
        var _this = this;
        this.representanteServ.getListaRepresentantes()
            .subscribe(function (representante) { return _this.representante = representante; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('idRepresentante'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FormClienteComponent.prototype, "idRepresentante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormClienteComponent.prototype, "cliente", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FormClienteComponent.prototype, "outputCliente", void 0);
    FormClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-cliente',
            template: __webpack_require__(/*! ./form-cliente.component.html */ "./src/app/compartilhado/form-cliente/form-cliente.component.html"),
            styles: [__webpack_require__(/*! ./form-cliente.component.css */ "./src/app/compartilhado/form-cliente/form-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_representante_service__WEBPACK_IMPORTED_MODULE_1__["RepresentanteService"]])
    ], FormClienteComponent);
    return FormClienteComponent;
}());



/***/ }),

/***/ "./src/app/compartilhado/representantes-combo/representantes-combo.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/compartilhado/representantes-combo/representantes-combo.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhcnRpbGhhZG8vcmVwcmVzZW50YW50ZXMtY29tYm8vcmVwcmVzZW50YW50ZXMtY29tYm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/compartilhado/representantes-combo/representantes-combo.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/compartilhado/representantes-combo/representantes-combo.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select \n    class=\"form-control\" \n    id=\"representante\"\n    name=\"representante\" \n    required>\n  <option value=\"{{repres.id}}\" *ngFor=\"let repres of representante\">{{repres.name}}</option>\n</select>"

/***/ }),

/***/ "./src/app/compartilhado/representantes-combo/representantes-combo.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/compartilhado/representantes-combo/representantes-combo.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RepresentantesComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepresentantesComboComponent", function() { return RepresentantesComboComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_representante_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/representante.service */ "./src/app/services/representante.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepresentantesComboComponent = /** @class */ (function () {
    function RepresentantesComboComponent(representanteServ) {
        this.representanteServ = representanteServ;
    }
    RepresentantesComboComponent.prototype.ngOnInit = function () {
        this.getRepres();
    };
    RepresentantesComboComponent.prototype.getRepres = function () {
        var _this = this;
        this.representanteServ.getListaRepresentantes()
            .subscribe(function (representante) { return _this.representante = representante; });
    };
    RepresentantesComboComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-representantes-combo',
            template: __webpack_require__(/*! ./representantes-combo.component.html */ "./src/app/compartilhado/representantes-combo/representantes-combo.component.html"),
            styles: [__webpack_require__(/*! ./representantes-combo.component.css */ "./src/app/compartilhado/representantes-combo/representantes-combo.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_representante_service__WEBPACK_IMPORTED_MODULE_1__["RepresentanteService"]])
    ], RepresentantesComboComponent);
    return RepresentantesComboComponent;
}());



/***/ }),

/***/ "./src/app/paginas/criar-cliente/criar-cliente.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/criar-cliente/criar-cliente.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY3JpYXItY2xpZW50ZS9jcmlhci1jbGllbnRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/criar-cliente/criar-cliente.component.html":
/*!********************************************************************!*\
  !*** ./src/app/paginas/criar-cliente/criar-cliente.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8 mx-auto\">\n      <app-error-msg></app-error-msg>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Criar\n        </div>\n        <div class=\"card-body\">\n          <app-form-cliente (outputCliente)=\"addCliente($event)\"></app-form-cliente>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/paginas/criar-cliente/criar-cliente.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paginas/criar-cliente/criar-cliente.component.ts ***!
  \******************************************************************/
/*! exports provided: CriarClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarClienteComponent", function() { return CriarClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../compartilhado/error-msg/error-msg.component */ "./src/app/compartilhado/error-msg/error-msg.component.ts");
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cliente.service */ "./src/app/services/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CriarClienteComponent = /** @class */ (function () {
    function CriarClienteComponent(clienteService, router) {
        this.clienteService = clienteService;
        this.router = router;
    }
    CriarClienteComponent.prototype.addCliente = function (cliente) {
        var _this = this;
        this.clienteService.addCliente(cliente)
            .subscribe(function () { _this.router.navigateByUrl('/'); }, function () { _this.errorMsgComponent.setError('Falha ao adicionar cliente.'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_1__["ErrorMsgComponent"]),
        __metadata("design:type", _compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_1__["ErrorMsgComponent"])
    ], CriarClienteComponent.prototype, "errorMsgComponent", void 0);
    CriarClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-criar-cliente',
            template: __webpack_require__(/*! ./criar-cliente.component.html */ "./src/app/paginas/criar-cliente/criar-cliente.component.html"),
            styles: [__webpack_require__(/*! ./criar-cliente.component.css */ "./src/app/paginas/criar-cliente/criar-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CriarClienteComponent);
    return CriarClienteComponent;
}());



/***/ }),

/***/ "./src/app/paginas/editar-cliente/editar-cliente.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/editar-cliente/editar-cliente.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZWRpdGFyLWNsaWVudGUvZWRpdGFyLWNsaWVudGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/paginas/editar-cliente/editar-cliente.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/paginas/editar-cliente/editar-cliente.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8 mx-auto\">\n      <app-error-msg></app-error-msg>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Editar\n        </div>\n        <div class=\"card-body\">\n          <app-form-cliente [cliente]=\"cliente\" (outputCliente)=\"atualizaCliente($event)\"></app-form-cliente>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/paginas/editar-cliente/editar-cliente.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/paginas/editar-cliente/editar-cliente.component.ts ***!
  \********************************************************************/
/*! exports provided: EditarClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarClienteComponent", function() { return EditarClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../compartilhado/error-msg/error-msg.component */ "./src/app/compartilhado/error-msg/error-msg.component.ts");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cliente.service */ "./src/app/services/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditarClienteComponent = /** @class */ (function () {
    function EditarClienteComponent(clienteService, activatedRoute, router) {
        this.clienteService = clienteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.cliente = {};
        this.getCliente(this.activatedRoute.snapshot.params.id);
    }
    EditarClienteComponent.prototype.getCliente = function (id) {
        var _this = this;
        this.clienteService.getCliente(id)
            .subscribe(function (cliente) {
            _this.cliente = cliente;
        }, function () { _this.errorMsgComponent.setError('Falha ao buscar cliente.'); });
    };
    EditarClienteComponent.prototype.atualizaCliente = function (cliente) {
        var _this = this;
        this.clienteService.atualizaCliente(cliente)
            .subscribe(function () { _this.router.navigateByUrl('/'); }, function () { _this.errorMsgComponent.setError('Falha ao atualizar cliente.'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_1__["ErrorMsgComponent"]),
        __metadata("design:type", _compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_1__["ErrorMsgComponent"])
    ], EditarClienteComponent.prototype, "errorMsgComponent", void 0);
    EditarClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar-cliente',
            template: __webpack_require__(/*! ./editar-cliente.component.html */ "./src/app/paginas/editar-cliente/editar-cliente.component.html"),
            styles: [__webpack_require__(/*! ./editar-cliente.component.css */ "./src/app/paginas/editar-cliente/editar-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditarClienteComponent);
    return EditarClienteComponent;
}());



/***/ }),

/***/ "./src/app/paginas/lista-cliente/lista-cliente.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/lista-cliente/lista-cliente.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvbGlzdGEtY2xpZW50ZS9saXN0YS1jbGllbnRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/lista-cliente/lista-cliente.component.html":
/*!********************************************************************!*\
  !*** ./src/app/paginas/lista-cliente/lista-cliente.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-12 mx-auto\">\n      <app-error-msg></app-error-msg>\n      <div class=\"text-right\">\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/cliente/criar\">Novo cliente</button>\n      </div>\n      <div class=\"text-center\" *ngIf=\"!existemClientes()\">\n        Nenhum cliente cadastrado.\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-4 mb-4\" *ngFor=\"let cliente of clientes\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <span class=\"badge badge-pill\">\n            Número do Cliente: {{cliente.id}}\n          </span>\n        </div>\n        <div class=\"card-body\">\n          <b>Nome: </b>\n          <p class=\"card-text\">{{cliente.nome}}</p>\n          <b>Representante: </b>\n          <p class=\"card-text\">{{cliente.representante.nome}}</p>\n          <b>Data da Visita: </b>\n          <p class=\"card-text\">{{cliente.dtVisita}}</p>\n          <b>Valor de deslocamento: </b>\n          <p class=\"card-text\">R$ {{cliente.valorDesloc}}</p>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"text-right\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm ml-1\"\n              routerLink=\"/cliente/editar/{{cliente.id}}\">Editar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm ml-1\"\n              (click)=\"deletaCliente(cliente.id)\">Deletar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row my-3\" *ngIf=\"existemClientes()\">\n    <div class=\"col-md-8 mx-auto text-center\">\n      <h5><b>{{metaDados.maiorCusto[0]}}</b> foi quem mais gastou com deslocamento, totalizando R$ <b>{{metaDados.maiorCusto[1]}}</b></h5>\n      <h5>Quem visitou mais clientes foi <b>{{metaDados.maiorVisitas[0]}}</b>, totalizando <b>{{metaDados.maiorVisitas[1]}}</b> visitas</h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/paginas/lista-cliente/lista-cliente.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paginas/lista-cliente/lista-cliente.component.ts ***!
  \******************************************************************/
/*! exports provided: ListaClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaClienteComponent", function() { return ListaClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cliente.service */ "./src/app/services/cliente.service.ts");
/* harmony import */ var _compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../compartilhado/error-msg/error-msg.component */ "./src/app/compartilhado/error-msg/error-msg.component.ts");
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/meta.service */ "./src/app/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaClienteComponent = /** @class */ (function () {
    function ListaClienteComponent(clienteService, metaService) {
        this.clienteService = clienteService;
        this.metaService = metaService;
    }
    ListaClienteComponent.prototype.ngOnInit = function () {
        this.getListaClientes();
        this.getMeta();
    };
    ListaClienteComponent.prototype.getMeta = function () {
        var _this = this;
        this.metaService.getMetaObj().subscribe(function (dados) {
            _this.metaDados = dados;
            console.log(_this.metaDados);
        });
    };
    ListaClienteComponent.prototype.getListaClientes = function () {
        var _this = this;
        this.clienteService.getListaClientes()
            .subscribe(function (clientes) {
            _this.clientes = clientes;
        }, function () { _this.errorMsgComponent.setError('Falha ao buscar clientes.'); });
    };
    ListaClienteComponent.prototype.deletaCliente = function (id) {
        var _this = this;
        this.clienteService.deletaCliente(id)
            .subscribe(function () {
            _this.getListaClientes();
        }, function () { _this.errorMsgComponent.setError('Falha ao deletar cliente.'); });
    };
    ListaClienteComponent.prototype.existemClientes = function () {
        return this.clientes && this.clientes.length > 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMsgComponent"]),
        __metadata("design:type", _compartilhado_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMsgComponent"])
    ], ListaClienteComponent.prototype, "errorMsgComponent", void 0);
    ListaClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-cliente',
            template: __webpack_require__(/*! ./lista-cliente.component.html */ "./src/app/paginas/lista-cliente/lista-cliente.component.html"),
            styles: [__webpack_require__(/*! ./lista-cliente.component.css */ "./src/app/paginas/lista-cliente/lista-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"], src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"]])
    ], ListaClienteComponent);
    return ListaClienteComponent;
}());



/***/ }),

/***/ "./src/app/services/cliente.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cliente.service.ts ***!
  \*********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
    }
    ClienteService.prototype.getListaClientes = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/cliente";
        return this.http.get(url);
    };
    ClienteService.prototype.getCliente = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/cliente/" + id;
        return this.http.get(url);
    };
    ClienteService.prototype.addCliente = function (cliente) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/cliente/";
        return this.http.post(url, cliente);
    };
    ClienteService.prototype.atualizaCliente = function (cliente) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/cliente";
        return this.http.post(url, cliente);
    };
    ClienteService.prototype.deletaCliente = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/cliente/" + id;
        return this.http.delete(url);
    };
    ClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/services/meta.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/meta.service.ts ***!
  \******************************************/
/*! exports provided: MetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaService", function() { return MetaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetaService = /** @class */ (function () {
    function MetaService(http) {
        this.http = http;
    }
    MetaService.prototype.getMetaObj = function () {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/meta";
        return this.http.get(url);
    };
    MetaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MetaService);
    return MetaService;
}());



/***/ }),

/***/ "./src/app/services/representante.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/representante.service.ts ***!
  \***************************************************/
/*! exports provided: RepresentanteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepresentanteService", function() { return RepresentanteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepresentanteService = /** @class */ (function () {
    function RepresentanteService(http) {
        this.http = http;
    }
    RepresentanteService.prototype.getListaRepresentantes = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/repres";
        return this.http.get(url);
    };
    RepresentanteService.prototype.getRepresentante = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/repres/" + id;
        return this.http.get(url);
    };
    RepresentanteService.prototype.addRepresentante = function (Representante) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/Representante/";
        return this.http.post(url, Representante);
    };
    RepresentanteService.prototype.atualizaRepresentante = function (Representante) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/Representante/" + Representante.id;
        return this.http.put(url, Representante);
    };
    RepresentanteService.prototype.deletaRepresentante = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientesApiUrl + "/Representante/" + id;
        return this.http.delete(url);
    };
    RepresentanteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RepresentanteService);
    return RepresentanteService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    clientesApiUrl: 'http://localhost:8080'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gusVLZ\Desktop\Angular\clienteCadastro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map