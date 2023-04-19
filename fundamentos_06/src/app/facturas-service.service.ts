import { Injectable } from '@angular/core';
import { Factura } from './_modelo/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasServiceService {
  listaFacturas: Factura[];
  
  constructor() { 
    this.listaFacturas = [];
  }

  service_searchFactura(idFactura: number){
    return this.listaFacturas.find(f => f.idFactura == idFactura);
  }

  service_addFactura(f: Factura){
    this.listaFacturas.push(f);
  }

  service_deleteFactura(idFactura: number){
    this.listaFacturas = this.listaFacturas.filter(f => f.idFactura !== idFactura);
  }

  service_updateFactura(idFactura: number, idCliente: number, total: number, iva:number){
    let f = this.service_searchFactura(idFactura);
    if(f != undefined){
      let index = this.listaFacturas.indexOf(f);
      f.idCliente = idCliente;
      f.total = total;
      f.iva = iva;
      this.listaFacturas[index] = f;
    }
  }
}
