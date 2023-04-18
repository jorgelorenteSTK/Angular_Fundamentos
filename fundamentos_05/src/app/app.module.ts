import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { FormsModule } from '@angular/forms';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosFormComponent,
    ProductosListComponent,
    PedidosFormComponent,
    PedidosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
