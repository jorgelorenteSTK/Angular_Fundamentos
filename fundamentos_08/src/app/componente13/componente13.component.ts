import { Component } from '@angular/core';

@Component({
  selector: 'app-componente13',
  templateUrl: './componente13.component.html',
  styleUrls: ['./componente13.component.css']
})
export class Componente13Component {
  np: string;

  constructor(){
    this.np = "";
  }

  mostrarNombre(nombre: string){
    this.np = nombre;
  }
}
