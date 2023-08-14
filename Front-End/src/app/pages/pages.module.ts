import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCalendarKitModule, NbCalendarModule, NbCalendarRangeModule, NbCardModule, NbCheckboxModule, NbInputModule, NbMenuModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RegisterComponent } from './register/register.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ConsultaComponent } from './consulta/consulta.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { CamarasComponent } from './camaras/camaras.component';
import { ModeloVehiculoComponent } from './modelo-vehiculo/modelo-vehiculo.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbCalendarModule,
    NbCalendarKitModule,
    NbCalendarRangeModule,

    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,

    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbSelectModule,
    TranslateModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule
  ],
  declarations: [
    PagesComponent,
    RegisterComponent,
    ConsultaComponent, 
    CamarasComponent,
    ModificacionComponent,
    ModeloVehiculoComponent,
  ],
})
export class PagesModule {
}
