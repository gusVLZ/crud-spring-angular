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
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
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
        ViewChild(ErrorMsgComponent),
        __metadata("design:type", ErrorMsgComponent)
    ], EditarClienteComponent.prototype, "errorMsgComponent", void 0);
    EditarClienteComponent = __decorate([
        Component({
            selector: 'app-editar-cliente',
            templateUrl: './editar-cliente.component.html',
            styleUrls: ['./editar-cliente.component.css']
        }),
        __metadata("design:paramtypes", [ClienteService,
            ActivatedRoute,
            Router])
    ], EditarClienteComponent);
    return EditarClienteComponent;
}());
export { EditarClienteComponent };
//# sourceMappingURL=editar-cliente.component.js.map