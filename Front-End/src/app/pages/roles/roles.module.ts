import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { PermisosComponent } from './permisos/permisos.component';
import { TranslateModule } from '@ngx-translate/core';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbSelectModule } from '@nebular/theme';


@NgModule({
  declarations: [
    RolesComponent,
    AgregarComponent,
    ConsultarComponent,
    PermisosComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TranslateModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbSelectModule
  ]
})
export class RolesModule { }
