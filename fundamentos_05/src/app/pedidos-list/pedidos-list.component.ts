import { Component } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent {
  lp: Pedido[];

  constructor(){
    this.lp = []
  }

  agregarPedido(listaPedidos: Pedido[]){
    this.lp = listaPedidos;
  }
}
