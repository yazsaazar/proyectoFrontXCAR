import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { CamarasComponent } from './camaras/camaras.component';
import{ BusquedaVehiculosComponent} from './busqueda-vehiculos/busqueda-vehiculos.component'
import { ReportesComponent } from './reportes/reportes.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ModeloVehiculoComponent } from './modelo-vehiculo/modelo-vehiculo.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'empleados',
      component: ConsultaComponent
    },
    {
      path: 'camaras',
      component: CamarasComponent
    },
    {
      path: 'modificacion',
      component: ModificacionComponent
    },
    {
      path: 'busqueda-vehiculos',
      component: BusquedaVehiculosComponent
    },
    {
      path: 'modelo-vehiculo',
      component: ModeloVehiculoComponent
    },
    {
      path: 'reportes-vehiculos',
      component: ReporteComponent
    },
    {
      path: 'operaciones',
      loadChildren: () => import('./operaciones/operaciones.module')
        .then(m => m.OperacionesModule),
    },
    {
      path: 'agenda',
      loadChildren: () => import('./agenda/agenda.module')
        .then(m => m.AgendaModule),
    },
    {
      path: 'roles',
      loadChildren: () => import('./roles/roles.module')
        .then(m => m.RolesModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'iot-dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
