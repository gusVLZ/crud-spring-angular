var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaClienteComponent } from './paginas/lista-cliente/lista-cliente.component';
import { FormClienteComponent } from './compartilhado/form-cliente/form-cliente.component';
import { CriarClienteComponent } from './paginas/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './paginas/editar-cliente/editar-cliente.component';
import { RepresentantesComboComponent } from './compartilhado/representantes-combo/representantes-combo.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ErrorMsgComponent,
                ListaClienteComponent,
                FormClienteComponent,
                CriarClienteComponent,
                EditarClienteComponent,
                RepresentantesComboComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent],
            exports: [RepresentantesComboComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map