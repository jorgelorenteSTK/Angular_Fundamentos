import { Component } from '@angular/core';
import { Nivel } from '../_modelo/nivel';
import { Curso } from '../_modelo/curso';
import { CursosService } from '../cursos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-add-update',
  templateUrl: './cursos-add-update.component.html',
  styleUrls: ['./cursos-add-update.component.css']
})
export class CursosAddUpdateComponent {
  id: number;
  nombre: string;
  duracion: number;
  nivel: Nivel;
  niveles: string[];

  constructor(public cursosService: CursosService, private router: Router, private route: ActivatedRoute){
    this.id = 0;
    this.nombre = "";
    this.duracion = 0;
    this.nivel = Nivel.principiante;
    this.niveles = Object.values(Nivel);
  }

  ngOnInit(){
    this.route.params.subscribe(data => {
      this.id = data['id'];
    })
  }

  send(){
    if(this.route.snapshot.params['id'] != undefined){
      this.update();
    }else{
      this.add();
    }
  }

  update(){
    this.cursosService.updateCurso(this.id, this.nombre, this.duracion, this.nivel);
    this.router.navigate(['']);
  }

  add(){
    this.cursosService.addCurso(new Curso(this.id, this.nombre, this.duracion, this.nivel));
    this.router.navigate(['']);
  }

  return(){
    this.router.navigate(['']);
  }
}
