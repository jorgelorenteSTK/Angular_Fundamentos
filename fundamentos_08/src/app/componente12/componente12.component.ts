import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente12',
  templateUrl: './componente12.component.html',
  styleUrls: ['./componente12.component.css']
})
export class Componente12Component {
  @Input() nh: string;

  constructor(){
    this.nh = "";
  }
}
