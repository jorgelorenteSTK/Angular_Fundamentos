import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: CarruselComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
