import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { Representante } from 'src/app/interfaces/representante';
import { RepresentanteService } from 'src/app/services/representante.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit{
  
  public representante:Representante[];
  constructor(private representanteServ:RepresentanteService) { }
  @ViewChild('idRepresentante') idRepresentante: ElementRef;

  ngOnInit() {
    this.getRepres();
  }
  @Input() cliente: Cliente = <Cliente>{};
  @Output() outputCliente: EventEmitter<Cliente> = new EventEmitter();

  onSubmit(f: NgForm) {
    let idRepres:number = this.idRepresentante.nativeElement.value;
    this.representanteServ.getRepresentante(idRepres).subscribe(repres => {
      this.cliente.representante = repres;
      this.outputCliente.emit(this.cliente);
    });
  }

  getRepres(): void {
    this.representanteServ.getListaRepresentantes()
      .subscribe(representante => this.representante = representante);
  }

}
