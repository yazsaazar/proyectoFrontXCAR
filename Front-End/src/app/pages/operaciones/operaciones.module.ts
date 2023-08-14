import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { OperacionesComponent } from './operaciones.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    OperacionesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    OperacionesRoutingModule
  ]
})
export class OperacionesModule { }
