import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Representante } from '../interfaces/Representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  constructor(private http: HttpClient) { }

  getListaRepresentantes(): Observable<Representante[]> {
    const url = `${environment.clientesApiUrl}/repres`;
    return this.http.get<Representante[]>(url);
  }

  getRepresentante(id: number): Observable<Representante> {
    const url = `${environment.clientesApiUrl}/repres/${id}`;
    return this.http.get<Representante>(url);
  }

  addRepresentante(Representante: Representante): Observable<Representante> {
    const url = `${environment.clientesApiUrl}/Representante/`;
    return this.http.post<Representante>(url, Representante);
  }

  atualizaRepresentante(Representante: Representante): Observable<Representante> {
    const url = `${environment.clientesApiUrl}/Representante/${Representante.id}`;
    return this.http.put<Representante>(url, Representante);
  }

  deletaRepresentante(id: number): Observable<Representante> {
    const url = `${environment.clientesApiUrl}/Representante/${id}`;
    return this.http.delete<Representante>(url);
  }

}
