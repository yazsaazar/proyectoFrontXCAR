/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbButtonModule,
  NbChatModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbInputModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RegisterComponent } from './pages/register/register.component';
import { BusquedaVehiculosComponent } from './pages/busqueda-vehiculos/busqueda-vehiculos.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [AppComponent, LoginComponent, BusquedaVehiculosComponent, ReporteComponent, ModalComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
