import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/retry';
@Injectable()
export class ProductProvider {
  private urlBase:string = 'assets/json/';
  constructor(public http: Http) {

  }
  public getJSON() {
    /*buscar no servidor
    return this.http.get("https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot");
    .do(res => console.log(res));*/
    return this.http.get(this.urlBase+'produtos.json').retry(3)
    .map(res =>res.json());
  }
}
