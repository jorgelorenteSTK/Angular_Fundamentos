import { Component } from '@angular/core';
import { Curso } from '../_modelo/curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent {
  listaCursos: Curso[];

  constructor(public cursosService: CursosService){
    this.listaCursos = cursosService.listaCursos;
  }
}