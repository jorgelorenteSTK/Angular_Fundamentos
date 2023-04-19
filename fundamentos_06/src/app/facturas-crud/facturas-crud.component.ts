import { Component } from '@angular/core';
import { Factura } from '../_modelo/factura';
import { FacturasServiceService } from '../facturas-service.service';

@Component({
  selector: 'app-facturas-crud',
  templateUrl: './facturas-crud.component.html',
  styleUrls: ['./facturas-crud.component.css']
})
export class FacturasCrudComponent {
  contador: number;
  idFactura: number;
  idCliente: number;
  total: number;
  iva: number;

  constructor(private facturasService: FacturasServiceService){
    this.contador = 1;
    this.idFactura = 0;
    this.idCliente = 0;
    this.total = 0;
    this.iva = 0;
  }

  addFactura(){
    this.facturasService.service_addFactura(new Factura(this.contador, this.idCliente, this.total, this.iva));
    this.contador++;
  }

  deleteFactura(){
    this.facturasService.service_deleteFactura(this.idFactura);
  }

  updateFactura(){
    this.facturasService.service_updateFactura(this.idFactura, this.idCliente, this.total, this.iva);
  }

  mostrarFacturas(){
    return this.facturasService.listaFacturas;
  }
}
