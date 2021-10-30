import { Component } from '@angular/core';
import { Tab1Service } from './tab1.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cards: any[] = Array(5)
  public materias: any;

  constructor(private tab1Service: Tab1Service) {}

      ngOnInit(){
      this.tab1Service.getData().subscribe(data =>{
        console.log("Informacion" , data[0].nombre);
        this.materias=data;    

      })
  }  

}


  
  