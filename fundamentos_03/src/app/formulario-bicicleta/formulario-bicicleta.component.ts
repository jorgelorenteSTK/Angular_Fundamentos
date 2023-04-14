import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/bicicleta';

@Component({
  selector: 'app-formulario-bicicleta',
  templateUrl: './formulario-bicicleta.component.html',
  styleUrls: ['./formulario-bicicleta.component.css']
})
export class FormularioBicicletaComponent {
  constructor(){};

  bicicleta: Bicicleta = new Bicicleta("","", 0, 0, 0, false);
  cad: string = "";
  cambioVel: number = 0;

  ngOnInit(){

  }
  
  mostrar(){
    this.cad = this.bicicleta.toString();
  }
}
