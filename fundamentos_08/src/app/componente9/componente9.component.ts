import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente9',
  templateUrl: './componente9.component.html',
  styleUrls: ['./componente9.component.css']
})
export class Componente9Component {
  id: number;
  accion: string;
  
  constructor(){
    this.id = 1;
    this.accion = "";

  }
}
