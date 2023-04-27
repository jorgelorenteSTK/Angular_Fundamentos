import { Component } from '@angular/core';
import { Detalle } from '../_modelo/detalle';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidosService } from '../pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-pedidos',
  templateUrl: './detalles-pedidos.component.html',
  styleUrls: ['./detalles-pedidos.component.css']
})
export class DetallesPedidosComponent {
  formDetalle: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, public pedidosService: PedidosService){
    this.formDetalle = new FormGroup({
      idProducto: new FormControl(''),
      cantidad: new FormControl('')
    })
  }

  addDetalle(){
    this.pedidosService.addCarrito(
    new Detalle(
        this.route.snapshot.params['idPedido'],
        this.formDetalle.value.idProducto,
        this.formDetalle.value.cantidad
      ));
    alert("Producto añadido con éxito.")
    this.resetForm();
  }

  resetForm(){
    this.formDetalle.get('idProducto')?.setValue('');
    this.formDetalle.get('cantidad')?.setValue('');
  }
}
