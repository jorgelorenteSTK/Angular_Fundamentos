import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  constructor() {};
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  
  ngOnInit(){

  }

  mostrarSuma(){
    this.resultado = this.num1 + this.num2;
  }

  mostrarResta(){
    this.resultado = this.num1 - this.num2;
  }

  mostrarMultiplicacion(){
    this.resultado = this.num1 * this.num2;
  }
  
  mostrarDivision(){
    this.resultado = this.num1 / this.num2;
  }
}
