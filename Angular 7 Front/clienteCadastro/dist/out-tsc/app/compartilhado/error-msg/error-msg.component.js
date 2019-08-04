var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
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
        Component({
            selector: 'app-error-msg',
            templateUrl: './error-msg.component.html',
            styleUrls: ['./error-msg.component.css']
        })
    ], ErrorMsgComponent);
    return ErrorMsgComponent;
}());
export { ErrorMsgComponent };
//# sourceMappingURL=error-msg.component.js.map