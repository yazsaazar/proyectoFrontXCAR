import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechasComponent } from './fechas.component';
import { ReservadasComponent } from './reservadas/reservadas.component';

const routes: Routes = [{
  path: '',
  component: FechasComponent,
  children: [
    {
      path: 'reservadas',
      component: ReservadasComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FechasRoutingModule { }
