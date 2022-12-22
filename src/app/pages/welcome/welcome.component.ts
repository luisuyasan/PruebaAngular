import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';

export interface PeriodicElement {
  nombre: string;
  edad: number;
  is: string;
  ciudad: string;
  estado:string;
}
     
let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

name = 'Luis Uyasan';
Ocupation = 'Software Developer'  
Title = `Hi, my name is Luis Uyasan, I like play the guitar, I am from Bogota, Colombia`;

displayedColumns: string[] = ['nombre','edad','is', 'ciudad', 'estado'];
dataSource = ELEMENT_DATA;
 

constructor(private welcomeservice : WelcomeService) { }
  
  ngOnInit(): void {
    this.welcomeservice.getData().subscribe(data =>{  
       ELEMENT_DATA = data.my_data; 
       console.log(ELEMENT_DATA)
       this.dataSource = ELEMENT_DATA;
    } )
  }
}




