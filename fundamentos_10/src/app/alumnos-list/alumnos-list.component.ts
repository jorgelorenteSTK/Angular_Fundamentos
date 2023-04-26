import { Component } from '@angular/core';
import { Alumno } from '../_modelo/alumno';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent {
  listaAlumnos: Alumno[];

  constructor(public service: AlumnoService){

  }

  ngOnInit(){
    this.service.showAlumnos().subscribe(data => {
      this.listaAlumnos = data;
    })
  }
}
