import { Component } from '@angular/core';
import { Meses } from '../_modelo/meses';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component {
  logged: boolean;
  mes: Meses;
  meses: string[];
  comida: string;

  constructor(){
    this.logged = true;
    this.mes = Meses.enero;
    this.meses = Object.values(Meses);
    this.comida = "patatas";
  }

  logIn(){
    this.logged = true;
  }

  logOut(){
    this.logged = false;
  }
}
