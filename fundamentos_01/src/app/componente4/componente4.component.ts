import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {
  constructor() {};
  pista: string = "(100)";
  contador: number = 0;

  sumaContador(){
    this.contador++;
  }
}
