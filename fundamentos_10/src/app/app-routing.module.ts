import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';

const routes: Routes = [
  { path: '', component: AlumnosListComponent, children:
  [
    { path: 'add', component: ReactiveFormComponent },
    { path: 'update/:id', component: ReactiveFormComponent }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
