import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  constructor(){};

  //ngIf - else.
  userLogged: boolean = false;
  username: string = "";

  //ngFor.
  employees = [
    { name: "Ana", salary: 1500 },
    { name: "Juan", salary: 1700 },
    { name: "María", salary: 2100}
  ];

  //ngSwitch.
  movie = "mario";

  ngOnInit(){

  }

  logIn(){
    this.userLogged = true;
    this.username = "Pepe33";
  }

  logOut(){
    this.userLogged = false;
    this.username = "";
  }
}
