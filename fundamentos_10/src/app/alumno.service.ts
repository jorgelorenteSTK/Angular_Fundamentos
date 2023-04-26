import { Injectable } from '@angular/core';
import { Alumno } from './_modelo/alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  la: Alumno[];

  constructor() { 
    this.la = [
      { id: 1, dni: '12345678A', nombre: 'Pepe', horas: 10 },
      { id: 2, dni: '87654321B', nombre: 'Paco', horas: 20 },
      { id: 3, dni: '11111111C', nombre: 'Juan', horas: 30 }
    ]
  }

  searchAlumno(id: number): Observable<Alumno>{
    let a = this.la.find(a => a.id == id);
    return a != undefined? of(a) : of({id: 0, dni: '', nombre:'', horas: 0});
  }

  findAlumno(id: number): Alumno{
    let a = this.la.find(a => a.id == id);
    return a != undefined? a : {id: 0, dni: '', nombre:'', horas: 0};
  }

  addAlumno(a: Alumno){
    this.la.push(a);
  }

  updateAlumno(id: number, dni: string, nombre: string, horas: number){
    let a = this.findAlumno(id);
    if(a != undefined){
      let index = this.la.indexOf(a);
      a.id = id;
      a.dni = dni;
      a.nombre = nombre;
      a.horas = horas
      this.la[index] = a;
    }
  }

  showAlumnos(): Observable<Alumno[]>{
    return of(this.la);
  }
}
