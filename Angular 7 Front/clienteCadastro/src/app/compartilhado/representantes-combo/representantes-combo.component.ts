import { Component, OnInit } from '@angular/core';
import { RepresentanteService } from 'src/app/services/representante.service';
import { Representante } from 'src/app/interfaces/representante';

@Component({
  selector: 'app-representantes-combo',
  templateUrl: './representantes-combo.component.html',
  styleUrls: ['./representantes-combo.component.css']
})
export class RepresentantesComboComponent implements OnInit {
  public representante:Representante[];
  constructor(private representanteServ:RepresentanteService) { }

  ngOnInit() {
    this.getRepres();
  }

  getRepres(): void {
    this.representanteServ.getListaRepresentantes()
      .subscribe(representante => this.representante = representante);
  }

}
