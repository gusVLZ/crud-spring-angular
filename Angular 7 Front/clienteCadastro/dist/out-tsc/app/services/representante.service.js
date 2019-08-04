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
var RepresentanteService = /** @class */ (function () {
    function RepresentanteService(http) {
        this.http = http;
    }
    RepresentanteService.prototype.getListaRepresentantes = function () {
        var url = environment.clientesApiUrl + "/repres";
        return this.http.get(url);
    };
    RepresentanteService.prototype.getRepresentante = function (id) {
        var url = environment.clientesApiUrl + "/repres/" + id;
        return this.http.get(url);
    };
    RepresentanteService.prototype.addRepresentante = function (Representante) {
        var url = environment.clientesApiUrl + "/Representante/";
        return this.http.post(url, Representante);
    };
    RepresentanteService.prototype.atualizaRepresentante = function (Representante) {
        var url = environment.clientesApiUrl + "/Representante/" + Representante.id;
        return this.http.put(url, Representante);
    };
    RepresentanteService.prototype.deletaRepresentante = function (id) {
        var url = environment.clientesApiUrl + "/Representante/" + id;
        return this.http.delete(url);
    };
    RepresentanteService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RepresentanteService);
    return RepresentanteService;
}());
export { RepresentanteService };
//# sourceMappingURL=representante.service.js.map