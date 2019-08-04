var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var FormClienteComponent = /** @class */ (function () {
    function FormClienteComponent() {
        this.cliente = {};
        this.outputCliente = new EventEmitter();
    }
    FormClienteComponent.prototype.onSubmit = function () {
        this.outputCliente.emit(this.cliente);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormClienteComponent.prototype, "cliente", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], FormClienteComponent.prototype, "outputCliente", void 0);
    FormClienteComponent = __decorate([
        Component({
            selector: 'app-form-cliente',
            templateUrl: './form-cliente.component.html',
            styleUrls: ['./form-cliente.component.css']
        })
    ], FormClienteComponent);
    return FormClienteComponent;
}());
export { FormClienteComponent };
//# sourceMappingURL=form-cliente.component.js.map