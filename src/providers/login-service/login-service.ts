import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  private urlBase: string = 'http://127.0.0.1:8080/cb/';
  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  public autenticarUsuario(dsEmail, dsPassword) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers, method: 'GET'});

    return this.http.get(this.urlBase + 'usuario/login-user/'+dsEmail+'/'+dsPassword, { headers: headers})
      .map(res => {
        if (res) {
          return { response: res }
        }
      });
  }
}
