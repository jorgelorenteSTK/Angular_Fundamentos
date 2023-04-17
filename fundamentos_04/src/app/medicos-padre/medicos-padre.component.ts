import { Component } from '@angular/core';
import { Medico } from '../modelo/medico';

@Component({
  selector: 'app-medicos-padre',
  templateUrl: './medicos-padre.component.html',
  styleUrls: ['./medicos-padre.component.css']
})
export class MedicosPadreComponent {
  mp: Medico = new Medico("", "", 0, "");
}
