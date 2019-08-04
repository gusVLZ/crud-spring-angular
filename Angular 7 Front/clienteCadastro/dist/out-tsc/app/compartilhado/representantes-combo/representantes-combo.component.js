var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RepresentanteService } from 'src/app/services/representante.service';
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
        Component({
            selector: 'app-representantes-combo',
            templateUrl: './representantes-combo.component.html',
            styleUrls: ['./representantes-combo.component.css']
        }),
        __metadata("design:paramtypes", [RepresentanteService])
    ], RepresentantesComboComponent);
    return RepresentantesComboComponent;
}());
export { RepresentantesComboComponent };
//# sourceMappingURL=representantes-combo.component.js.map