import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosAddUpdateComponent } from './cursos-add-update/cursos-add-update.component';
const routes: Routes = [
  { path: '', component: CursosListComponent, children:
  [
    { path: 'alta', component: CursosAddUpdateComponent },
    { path: 'update/:id', component: CursosAddUpdateComponent }
  ] 
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
