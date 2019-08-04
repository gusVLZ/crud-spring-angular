var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
    }
    ClienteService.prototype.getListaClientes = function () {
        var url = environment.clientesApiUrl + "/cliente";
        return this.http.get(url);
    };
    ClienteService.prototype.getCliente = function (id) {
        var url = environment.clientesApiUrl + "/cliente/" + id;
        return this.http.get(url);
    };
    ClienteService.prototype.addCliente = function (cliente) {
        var url = environment.clientesApiUrl + "/cliente/";
        return this.http.post(url, cliente);
    };
    ClienteService.prototype.atualizaCliente = function (cliente) {
        var url = environment.clientesApiUrl + "/cliente/" + cliente.id;
        return this.http.put(url, cliente);
    };
    ClienteService.prototype.deletaCliente = function (id) {
        var url = environment.clientesApiUrl + "/cliente/" + id;
        return this.http.delete(url);
    };
    ClienteService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ClienteService);
    return ClienteService;
}());
export { ClienteService };
//# sourceMappingURL=cliente.service.js.map