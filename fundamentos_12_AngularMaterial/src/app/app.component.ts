import { Component } from '@angular/core';
import { MenuService } from './menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundamentos_12_AngularMaterial';
  constructor(public menuService: MenuService){

  }
}
