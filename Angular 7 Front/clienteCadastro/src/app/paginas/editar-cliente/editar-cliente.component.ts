import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  public cliente: Cliente = <Cliente>{};
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.getCliente(this.activatedRoute.snapshot.params.id);
    }

    getCliente(id: number) {
      this.clienteService.getCliente(id)
        .subscribe((cliente: Cliente) => {
          this.cliente = cliente;
        }, () => { this.errorMsgComponent.setError('Falha ao buscar cliente.'); });
    }

    atualizaCliente(cliente: Cliente) {
      this.clienteService.atualizaCliente(cliente)
        .subscribe(
          () => { this.router.navigateByUrl('/'); },
          () => { this.errorMsgComponent.setError('Falha ao atualizar cliente.'); });
    }

}
