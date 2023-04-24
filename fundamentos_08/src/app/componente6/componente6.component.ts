import { Component } from '@angular/core';
import { PruebaService } from '../prueba.service';

@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.css']
})
export class Componente6Component {
  constructor(public service: PruebaService){
  }

  mostrarMensaje(){
    this.service.holaMundo();
  }
}
