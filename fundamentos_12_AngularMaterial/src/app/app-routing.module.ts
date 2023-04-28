import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RegistroComponent } from './registro/registro.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'reportes', component: ReportesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
