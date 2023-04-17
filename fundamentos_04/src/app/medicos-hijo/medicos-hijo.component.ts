import { Component, Input } from '@angular/core';
import { Medico } from '../modelo/medico';
@Component({
  selector: 'app-medicos-hijo',
  templateUrl: './medicos-hijo.component.html',
  styleUrls: ['./medicos-hijo.component.css']
})
export class MedicosHijoComponent {
  @Input() mh: Medico = new Medico("", "", 0, "");

  listaMedicos: Medico[] = [];

  enviarMedico(){
    this.listaMedicos.push(new Medico(this.mh.nombre, this.mh.apellidos, this.mh.cedula, this.mh.foto));
  }
}
