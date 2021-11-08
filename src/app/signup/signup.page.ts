import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  //unis: any[] = Array(5)
  //public datos: any;

  public nombre: any;
  public apellido: any;
  public mail: any;
  public contrasena: any;
  public datos: any =[];

  constructor(private signupService: SignupService) {}
 enviarInfo(){
    this.datos.push(this.nombre);
    this.datos.push(this.apellido);
    this.datos.push(this.mail);
    this.datos.push(this.contrasena);
    this.signupService.cargar_estudiante(this.datos).subscribe((d)=>{
      alert('Usuario creado');
    });
  }
}
