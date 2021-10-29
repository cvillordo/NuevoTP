import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  constructor(private http: HttpClient) { }
  
    getData(){
      return this.http.get('http://localhost:3001/Materia');
    }
  }

