import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserInfoProvider {
  private urlBase: string = 'http://127.0.0.1:8080/cb/';
  constructor(public http: Http) {
  
  }
  public insertUser(model) {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers,method:'POST'});
    return this.http.post(this.urlBase + 'usuario/save-usuario',model,options).map(res => {
      if (res) {
        return { response : res }
      }
    });
  }
}
export class cadastroUser {
  loginUser: String;
  password: String;
  dataCriacao: String;
  ativo: true;
  tipoUsuario:{}
}
export class dadosPessoais{
  nomeCompleto:string;
  endereco:string;
  id_usuario:number;
  dataNasc:string;
}

