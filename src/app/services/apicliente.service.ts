import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente/models/cliente';
import { Response } from '../models/Response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'https://localhost:44336/api/cliente';

  constructor( private _http: HttpClient ) { }

  getClientes(): Observable<Response> {
      return this._http.get<Response>(this.url);
  }

  addCliente(cliente: Cliente): Observable<Response> {
    return this._http.post<Response>(this.url, cliente, httpOptions)
  }
  editCliente(cliente: Cliente): Observable<Response> {
    return this._http.put<Response>(this.url, cliente, httpOptions)
  }
  deleteCliente(id: number): Observable<Response> {
    return this._http.delete<Response>(`${this.url}/${id}`)
  }
}

