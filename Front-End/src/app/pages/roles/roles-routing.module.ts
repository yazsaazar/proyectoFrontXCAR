import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from '../consulta/consulta.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { PermisosComponent } from './permisos/permisos.component';
import { RolesComponent } from './roles.component';

const routes: Routes = [{
  path: '',
  component: RolesComponent,
  children: [
    {
      path: 'agregar',
      component: AgregarComponent,
    },
    {
      path: 'consultar',
      component: ConsultarComponent,
    },
    {
      path: 'permisos',
      component: PermisosComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
