import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AreaComponent } from './area/area.component';
import { ProductosComponent } from './productos/productos.component';
import { NbActionsModule, NbCardModule, NbUserModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { EmpleadosComponent } from './empleados/empleados.component';



@NgModule({
  declarations: [
    CatalogoComponent,
    UsuarioComponent,
    ClienteComponent,
    AreaComponent,
    ProductosComponent,
    EmpleadosComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
