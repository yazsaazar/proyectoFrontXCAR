import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FechasRoutingModule } from './fechas-routing.module';
import { FechasComponent } from './fechas.component';
import { ReservadasComponent } from './reservadas/reservadas.component';


@NgModule({
  declarations: [
    FechasComponent,
    ReservadasComponent
  ],
  imports: [
    CommonModule,
    FechasRoutingModule
  ]
})
export class FechasModule { }
