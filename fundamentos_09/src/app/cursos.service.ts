import { Injectable } from '@angular/core';
import { Curso } from './_modelo/curso';
import { Nivel } from './_modelo/nivel';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  listaCursos: Curso[];
  sw: boolean;

  constructor() {
    this.listaCursos = [
      new Curso(1, "Comenzando en TypeScript", 4, Nivel.principiante),
      new Curso(2, "Siguiendo en TypeScript", 5, Nivel.intermedio),
      new Curso(3, "TypeScript para lanzar un cohete", 1500, Nivel.avanzado)
    ];
    this.sw = true;
  }

  searchCurso(id: number){
    return this.listaCursos.find(c => c.id == id);
  }

  updateCurso(id: number, nombre: string, duracion: number, nivel: Nivel){
    let c = this.searchCurso(id);
    if(c != undefined){
      let index = this.listaCursos.indexOf(c);
      c.nombre = nombre;
      c.duracion = duracion;
      c.nivel = nivel;
      this.listaCursos[index] = c;
    }
  }

  addCurso(c: Curso){
    this.listaCursos.push(c);
  }

  activateInput(){
    this.sw = false;
  }

  deactivateInput(){
    this.sw = true;
  }
}
