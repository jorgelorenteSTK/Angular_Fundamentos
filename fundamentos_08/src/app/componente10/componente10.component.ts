import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componente10',
  templateUrl: './componente10.component.html',
  styleUrls: ['./componente10.component.css']
})
export class Componente10Component {
  id: number;
  accion: number;

  constructor(private route: ActivatedRoute, private router:Router){
    this.id = route.snapshot.queryParams['id'];
    this.accion = route.snapshot.queryParams['accion'];
  }

  volver(){
    this.router.navigate(['/9']);
  }
}
