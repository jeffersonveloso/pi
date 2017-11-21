import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/retry';
@Injectable()
export class ProductProvider {
  private urlBase:string = 'http://homologacaoholic.com.br:10923/cb/';
  constructor(public http: Http) {

  }
  public getJSON() {
    return this.http.get(this.urlBase+'produto/get-produtos-for-home').retry(3)
    .map(res =>res.json());
  }
}
