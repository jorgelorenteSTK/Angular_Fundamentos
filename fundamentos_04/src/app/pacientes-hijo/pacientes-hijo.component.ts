import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Paciente } from '../modelo/paciente';

@Component({
  selector: 'app-pacientes-hijo',
  templateUrl: './pacientes-hijo.component.html',
  styleUrls: ['./pacientes-hijo.component.css']
})
export class PacientesHijoComponent {
  @Output() newItemEvent = new EventEmitter<Paciente>();

  id: number = 1;
  nombre: string = "";
  apellidos: string = "";
  dni: string = "";
  telefono: number = 0;
  direccion: string = "";
  correo: string = "";

  constructor(){}

  enviarPaciente(){
    this.newItemEvent.emit(new Paciente(this.id, this.nombre, this.apellidos, this.dni, this.telefono, this.direccion, this.correo));
    this.id++;
  }
}
