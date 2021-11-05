import { Component } from '@angular/core';
import { Tab2Service } from './tab2.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cards: any[] = Array(5)
  public tutor: any;
 
  constructor(private tab2Service: Tab2Service) {}
  ngOnInit(){
    this.tab2Service.getData().subscribe(data =>{
      console.log(data);
    this.tutor=data;
    })
  }}
