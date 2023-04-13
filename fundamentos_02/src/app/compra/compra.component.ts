import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  constructor() {};
  email: string = "";
  direccion: string = "";
  tlf: number = 0;
  comunidad: string = "madrid";
  pago: string = "efectivo";
  acepta: boolean = false;
  cad: string = "";

  ngOnInit(){

  }

  enviar(){
    this.cad = "Datos de tu compra: ";
    this.cad += "email: "+this.email+ ", ";
    this.cad += "dirección: "+this.direccion+ ", ";
    this.cad += "teléfono: "+this.tlf+ ", ";
    this.cad += "comunidad: "+this.comunidad+ ", ";
    this.cad += "tipo de pago: "+this.pago+", ";
    if(this.acepta){
      this.cad += "acepta checkbox: Si";
    }else{
      this.cad += "acepta checkbox: No";
    }
    
  }
}
