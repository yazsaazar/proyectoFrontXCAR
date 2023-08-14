import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FechasComponent } from './fechas/fechas.component';
import { NbActionsModule, NbUserModule, NbAlertModule, NbButtonModule, NbCalendarKitModule, NbCalendarModule, NbCalendarRangeModule, NbCardModule, NbChatModule, NbIconModule, NbProgressBarModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { CalendarKitFullCalendarShowcaseComponent } from '../extra-components/calendar-kit/calendar-kit.component';
import { CalendarKitMonthCellComponent } from '../extra-components/calendar-kit/month-cell/month-cell.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ExtraComponentsRoutingModule } from '../extra-components/extra-components-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';


@NgModule({
  declarations: [
    AgendaComponent,
    NotificacionesComponent,
    CalendarioComponent

  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    NbCalendarModule,
    NbCalendarKitModule,
    NbCalendarRangeModule,
    NbCardModule,
    TranslateModule,
    NbAlertModule,
    NbActionsModule,
    NbButtonModule,
    NbChatModule,
    NbIconModule,
    NbProgressBarModule,
    NbSelectModule,
    NbSpinnerModule,
    NbTabsetModule,
    ThemeModule,
    ExtraComponentsRoutingModule,
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,

    NbUserModule,
  ]
})
export class AgendaModule { }
