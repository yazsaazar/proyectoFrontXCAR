import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { TranslateService } from '@ngx-translate/core';
import { ConsumeService } from '../../services/consume.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})




export class LoginComponent extends NbLoginComponent implements OnInit {

  constructor(service: NbAuthService, @Inject(NB_AUTH_OPTIONS) options: {}, cd: ChangeDetectorRef, router: Router, private consumeService: ConsumeService, private translate: TranslateService,private http: HttpClient,private reporteService: ReporteService) {
    super(service, options, cd, router);
  }
  ngOnInit(): void {

  }

  login() {
    console.log(this.user);
    let token = localStorage.getItem("jwt");
    console.log(token);
    this.consumeService.login(this.user).subscribe(response => {
      console.log(response);
      localStorage.setItem("jwt", response.token);
      this.router.navigate(['/pages']);
    },
      error => {
        console.log(error);
      });
  }
  email: string = '';
  password: string = '';

  

  login2() {
    this.reporteService.login2(this.email, this.password)
      .subscribe(response => {
        // Manejar la respuesta del servidor, como almacenar el token
        if (response.access_token) {
          // Almacenar el token en localStorage o en algún otro lugar seguro
          localStorage.setItem('access_token', response.access_token);
          console.log('Token almacenado:', response.access_token);
          this.router.navigate(['/pages']);

          // Redirigir a la página de reportes u otra página
          // this.router.navigate(['/reportes']);
        }
      }, error => {
        console.error('Error de inicio de sesión:', error);
      });
  }
}