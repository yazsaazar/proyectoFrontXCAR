import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { CatalogoComponent } from './catalogo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: CatalogoComponent,
  children: [
    {
      path: 'usuario',
      component: UsuarioComponent,
    },
    {
      path: 'empleados',
      component:EmpleadosComponent,
    },
    {
      path: 'cliente',
      component: ClienteComponent,
    },
    {
      path: 'area',
      component: AreaComponent,
    },
    {
      path: 'productos',
      component: ProductosComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
