import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getListaClientes(): Observable<Cliente[]> {
    const url = `${environment.clientesApiUrl}/cliente`;
    return this.http.get<Cliente[]>(url);
  }

  getCliente(id: number): Observable<Cliente> {
    const url = `${environment.clientesApiUrl}/cliente/${id}`;
    return this.http.get<Cliente>(url);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.clientesApiUrl}/cliente/`;
    return this.http.post<Cliente>(url, cliente);
  }

  atualizaCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.clientesApiUrl}/cliente`;
    return this.http.post<Cliente>(url, cliente);
  }

  deletaCliente(id: number): Observable<Cliente> {
    const url = `${environment.clientesApiUrl}/cliente/`+id;
    return this.http.delete<Cliente>(url);
  }

}
