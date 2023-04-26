import { Component } from '@angular/core';
import { Alumno } from '../_modelo/alumno';
import { FormGroup, FormControl } from '@angular/forms';
import { AlumnoService } from '../alumno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  form: FormGroup;
  a: Alumno;

  constructor(public service: AlumnoService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe(data => {
      this.service.searchAlumno(data['id']).subscribe(a => {
        this.form = new FormGroup({
          id: new FormControl({value: a.id, disabled: !this.checkMenu()}),
          dni: new FormControl(a.dni),
          nombre: new FormControl(a.nombre),
          horas: new FormControl(a.horas)
        })
      })
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
    this.form.controls['id'].enable();
    this.service.updateAlumno(this.form.value.id, this.form.value.dni, this.form.value.nombre, this.form.value.horas);
    this.return();
  }

  add(){
    this.service.addAlumno({id: this.form.value.id, dni: this.form.value.dni, nombre: this.form.value.nombre, horas: this.form.value.horas});
    this.return();
  }

  checkMenu(){
    return this.route.snapshot.params['id'] == undefined;
  }

  return(){
    this.router.navigate(['']);
  }
}
