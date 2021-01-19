import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import {Response} from '../models/Response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  url: string = 'https://localhost:44336/api/User/login';
  private usuarioSubject: BehaviorSubject<Usuario>;

  constructor(private _http: HttpClient ) { }


  login(email: string, password: string): Observable<Response> {
    return this._http.post<Response>(this.url, {email, password}, httpOptions);
  }
  
  // login(email: string, password: string): Observable<Response> {
  //   return this._http.post<Response>(this.url, {email, password}, httpOptions).pipe(
  //     map(res => {
  //       if (res.exito === 1) {
          
  //       }
  //       return res;
  //     });
  //   );
  // }

}
