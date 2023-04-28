import { Injectable } from '@angular/core';
import { Menu } from './_modelo/menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Menu[];

  constructor() {
    this.menu = [
      new Menu('home', 'Inicio', ''),
      new Menu('search', 'Buscar', '/buscar'),
      new Menu('assignment', 'Registro', '/registro'),
      new Menu('grade', 'Especialidades', '/especialidades'),
      new Menu('assessment', 'Reportes', '/reportes')
    ]
   }
}
