import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente14',
  templateUrl: './componente14.component.html',
  styleUrls: ['./componente14.component.css']
})
export class Componente14Component {
  @Output() evento;
  nh: string;

  constructor(){
    this.evento = new EventEmitter<string>();
    this.nh = "";
  }

  enviarNombre(){
    this.evento.emit(this.nh);
  }
}
