import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosUpdateComponent } from './cursos-update/cursos-update.component';

const routes: Routes = [
  { path: '', component: CursosListComponent },
  { path: 'update/:id', component: CursosUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
