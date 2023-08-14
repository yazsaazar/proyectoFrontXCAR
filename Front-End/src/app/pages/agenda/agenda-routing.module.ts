import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

const routes: Routes = [{
  path: '',
  component: AgendaComponent,
  children: [
    {
      path: 'notificaciones',
      component: NotificacionesComponent,
    },
    {
      path: 'calendario',
      component: CalendarioComponent,
    },
    {
      path: 'fechas',
      loadChildren: () => import('./fechas/fechas.module')
        .then(m => m.FechasModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
