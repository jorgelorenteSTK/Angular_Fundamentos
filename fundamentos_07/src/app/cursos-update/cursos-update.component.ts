import { Component } from '@angular/core';
import { Nivel } from '../_modelo/nivel';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-update',
  templateUrl: './cursos-update.component.html',
  styleUrls: ['./cursos-update.component.css']
})
export class CursosUpdateComponent {
  id: number;
  nombre: string;
  duracion: number;
  nivel: Nivel;
  niveles: string[];

  constructor(private cursosService: CursosService, private router: Router, private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id'];
    this.nombre = "";
    this.duracion = 0;
    this.nivel = Nivel.principiante;
    this.niveles = Object.values(Nivel);
  }

  ngOnInit(){

  }

  update(){
    this.cursosService.updateCurso(this.id, this.nombre, this.duracion, this.nivel);
    this.router.navigate(['']);
  }

}
