import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  
  cargar_estudiante(datos){
   return this.http.post('http://localhost:3001/cargar_estudiante', {datos});
  }
}

