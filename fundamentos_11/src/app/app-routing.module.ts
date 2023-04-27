import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallesPedidosComponent } from './detalles-pedidos/detalles-pedidos.component';

const routes: Routes = [
  { path: '', component: PedidosComponent, children:
  [
    { path: 'addDetalle/:idPedido', component: DetallesPedidosComponent }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
