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

@NgModule({
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
export class AppModule { }
