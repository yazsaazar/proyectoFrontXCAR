import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { JornadaComponent } from './jornada/jornada.component';


@NgModule({
  declarations: [
    ReportesComponent,
    AsistenciaComponent,
    JornadaComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
