import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  private _BASE_URL = environment.host;
  private _LOGIN_URL = this._BASE_URL + "/login"


  constructor(
    private http: HttpClient
  ) {
  }

  login(user: any) {
    return this.http.post<any>(this._LOGIN_URL, user);
  }
}
