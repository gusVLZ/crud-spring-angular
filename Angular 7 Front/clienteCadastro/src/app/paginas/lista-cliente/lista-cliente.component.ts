import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  public clientes: Cliente[];

  public metaDados;

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private clienteService: ClienteService, private metaService: MetaService) { }

  ngOnInit() {
    this.getListaClientes();
    this.getMeta();
  }

  getMeta() {
    this.metaService.getMetaObj().subscribe(dados => {
      this.metaDados = dados;
      console.log(this.metaDados);
    })
  }

  getListaClientes() {
    this.clienteService.getListaClientes()
      .subscribe((clientes: Cliente[]) => {
        this.clientes = clientes;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar clientes.'); });
  }

  deletaCliente(id: number) {
    this.clienteService.deletaCliente(id)
      .subscribe(() => {
        this.getListaClientes();
      }, () => { this.errorMsgComponent.setError('Falha ao deletar cliente.'); });
  }

  existemClientes(): boolean {
    return this.clientes && this.clientes.length > 0;
  }

}
