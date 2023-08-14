import { ChangeDetectorRef, Component,  Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html'
})
export class RegisterComponent extends NbRegisterComponent implements OnInit{

  
roles: any = [];

  ngOnInit(): void {
    this.roles = [
      {
        value: "1",
        desc: "Administrador"
      },
      {
        value: "2",
        desc: "Subscritor"
      },
      {
        value: "3",
        desc: "Editor"
      },
      {
        value: "4",
        desc: "Invitado"
      }
    ];
  }

  register(): void{

  }
  
  getConfigValue(key: string): any{
    return true;
  }

}
