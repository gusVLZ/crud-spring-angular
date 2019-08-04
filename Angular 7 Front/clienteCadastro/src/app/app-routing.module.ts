import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClienteComponent } from './paginas/lista-cliente/lista-cliente.component';
import { CriarClienteComponent } from './paginas/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './paginas/editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path: '', component: ListaClienteComponent},
  { path: 'cliente/criar', component: CriarClienteComponent},
  { path: 'cliente/editar/:id', component: EditarClienteComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
