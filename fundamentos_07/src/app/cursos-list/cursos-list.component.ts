import { Component } from '@angular/core';
import { Curso } from '../_modelo/curso';
import { CursosService } from '../cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent {
  listaCursos: Curso[];

  constructor(private cursosService: CursosService, private router: Router){
    this.listaCursos = cursosService.listaCursos;
  }

}
