var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
var ListaClienteComponent = /** @class */ (function () {
    function ListaClienteComponent(clienteService) {
        this.clienteService = clienteService;
    }
    ListaClienteComponent.prototype.ngOnInit = function () {
        this.getListaClientes();
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
        ViewChild(ErrorMsgComponent),
        __metadata("design:type", ErrorMsgComponent)
    ], ListaClienteComponent.prototype, "errorMsgComponent", void 0);
    ListaClienteComponent = __decorate([
        Component({
            selector: 'app-lista-cliente',
            templateUrl: './lista-cliente.component.html',
            styleUrls: ['./lista-cliente.component.css']
        }),
        __metadata("design:paramtypes", [ClienteService])
    ], ListaClienteComponent);
    return ListaClienteComponent;
}());
export { ListaClienteComponent };
//# sourceMappingURL=lista-cliente.component.js.map