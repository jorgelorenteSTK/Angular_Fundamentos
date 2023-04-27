import { Component } from '@angular/core';
import { Pedido } from '../_modelo/pedido';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidosService } from '../pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  formPedido: FormGroup;

  constructor(private router: Router, public pedidosService: PedidosService){
    this.formPedido = new FormGroup({
      idPedido: new FormControl(this.pedidosService.returnId()),
      idCliente: new FormControl(''),
      nombreCliente: new FormControl(''),
      formaPago: new FormControl(''),
      direccionEntrega: new FormControl('')
    })
  }

  travelDetalles(){
    Object.keys(this.formPedido.controls).forEach( key => this.formPedido.get(key)?.disable())
    this.router.navigate(['/addDetalle', this.formPedido.value.idPedido]);
  }
  
  addPedido(){
    this.pedidosService.addPedido(
    new Pedido(
        this.formPedido.value.idPedido,
        this.formPedido.value.idCliente, 
        this.formPedido.value.nombreCliente, 
        this.formPedido.value.formaPago, 
        this.formPedido.value.direccionEntrega
      ));
    this.pedidosService.addDetalle();
    this.resetForm();
    Object.keys(this.formPedido.controls).forEach(key => this.formPedido.get(key)?.enable())
    this.router.navigate(['']);
  }

  resetForm(){
    this.formPedido.get('idPedido')?.setValue(this.pedidosService.returnId());
    this.formPedido.get('idCliente')?.setValue('');
    this.formPedido.get('nombreCliente')?.setValue('');
    this.formPedido.get('formaPago')?.setValue('');
    this.formPedido.get('direccionEntrega')?.setValue('');
  }
}
