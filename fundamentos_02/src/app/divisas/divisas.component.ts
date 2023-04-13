import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {
  constructor() {};
  num: number = 0;
  divisa: string = "dolar";
  resultado: number = 0;
  
  ngOnInit(){

  }

  convertir(){
    switch(this.divisa){
      case "dolar":
        this.resultado = (0.91 * this.num);
        break;
      
      case "libra":
        this.resultado = (1.14 * this.num);
        break;

      case "yen":
        this.resultado = (0.0068 * this.num);
        break;
    }
  }
}
