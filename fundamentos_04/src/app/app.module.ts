import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentoTSComponent } from './fundamento-ts/fundamento-ts.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { PacientesPadreComponent } from './pacientes-padre/pacientes-padre.component';
import { PacientesHijoComponent } from './pacientes-hijo/pacientes-hijo.component';
import { MedicosPadreComponent } from './medicos-padre/medicos-padre.component';
import { MedicosHijoComponent } from './medicos-hijo/medicos-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentoTSComponent,
    DirectivasComponent,
    PacientesPadreComponent,
    PacientesHijoComponent,
    MedicosPadreComponent,
    MedicosHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
