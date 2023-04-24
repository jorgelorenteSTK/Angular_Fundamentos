import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componente8',
  templateUrl: './componente8.component.html',
  styleUrls: ['./componente8.component.css']
})
export class Componente8Component {
  id: number;

  constructor(private router:Router, private route:ActivatedRoute){
    this.id = route.snapshot.params['id'];
  }

  volver(){
    this.router.navigate(['/7']);
  }
}
