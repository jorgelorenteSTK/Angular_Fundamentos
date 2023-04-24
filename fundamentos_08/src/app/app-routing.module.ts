import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';
import { Componente6Component } from './componente6/componente6.component';
import { Componente7Component } from './componente7/componente7.component';
import { Componente8Component } from './componente8/componente8.component';
import { Componente9Component } from './componente9/componente9.component';
import { Componente10Component } from './componente10/componente10.component';
import { Componente11Component } from './componente11/componente11.component';
import { Componente13Component } from './componente13/componente13.component';

const routes: Routes = [
  { path: '', component: Componente1Component },
  { path: '2', component: Componente2Component },
  { path: '3', component: Componente3Component },
  { path: '4', component: Componente4Component },
  { path: '5', component: Componente5Component },
  { path: '6', component: Componente6Component },
  { path: '7', component: Componente7Component },
  { path: '8/:id', component: Componente8Component },
  { path: '9', component: Componente9Component },
  { path: '10', component: Componente10Component },
  { path: '11', component: Componente11Component },
  { path: '13', component: Componente13Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
