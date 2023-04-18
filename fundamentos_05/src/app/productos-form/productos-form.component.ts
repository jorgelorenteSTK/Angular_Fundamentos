import { Component } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { Tipos } from '../_modelo/tipos';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent {
  lp: Producto[];
  id: number;
  nombre: string;
  existencias: number;
  precio: number;
  tipo: Tipos;
  tipos: string[];

  constructor(){
    this.lp = [];
    this.id = 1;
    this.nombre = "";
    this.existencias = 0;
    this.precio = 0;
    this.tipo = Tipos.alimento;
    this.tipos = Object.values(Tipos);
  }

  ngOnInit(){

  }

  enviarProducto(){
      this.lp.push(new Producto(this.id, this.nombre, this.existencias, this.precio, this.tipo));
      this.id++;
  }

}
