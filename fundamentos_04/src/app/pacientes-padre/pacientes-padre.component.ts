import { Component } from '@angular/core';
import { Paciente } from '../modelo/paciente';

@Component({
  selector: 'app-pacientes-padre',
  templateUrl: './pacientes-padre.component.html',
  styleUrls: ['./pacientes-padre.component.css']
})
export class PacientesPadreComponent {
  listaPacientes: Paciente[];

  constructor(){
    this.listaPacientes = [];
  }

  addPaciente(p: Paciente){
    this.listaPacientes.push(p);
  }
}
