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
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
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
        ViewChild(ErrorMsgComponent),
        __metadata("design:type", ErrorMsgComponent)
    ], CriarClienteComponent.prototype, "errorMsgComponent", void 0);
    CriarClienteComponent = __decorate([
        Component({
            selector: 'app-criar-cliente',
            templateUrl: './criar-cliente.component.html',
            styleUrls: ['./criar-cliente.component.css']
        }),
        __metadata("design:paramtypes", [ClienteService, Router])
    ], CriarClienteComponent);
    return CriarClienteComponent;
}());
export { CriarClienteComponent };
//# sourceMappingURL=criar-cliente.component.js.map