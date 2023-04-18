import { Component, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.css']
})
export class PedidosFormComponent {
  @Output() newItemEvent;
  lh: Pedido[];
  idPedido: number;
  idCliente: number;
  nombre: string;
  total: number;
  importe: number;

  constructor(){
    this.newItemEvent = new EventEmitter<Pedido[]>();
    this.lh = []
    this.idPedido = 1;
    this.idCliente = 0;
    this.nombre = "";
    this.total = 0;
    this.importe = 0;
  }

  enviarPedido(){
    this.lh.push(new Pedido(this.idPedido, this.idCliente, this.nombre, this.total, this.importe));
    this.idPedido++;
    this.newItemEvent.emit(this.lh);
  }

}
