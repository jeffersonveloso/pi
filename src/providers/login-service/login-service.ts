import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  private urlBase:string = 'assets/json/';
  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  public getUsers(){
    this.http.get(this.urlBase+"users.json").retry(3)
    .map(res =>res.json());
  }
}
