import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserInfoProvider {
  private urlBase: string = 'http://127.0.0.1:8080/cb/';
  constructor(public http: Http) {
  
  }
  public insertUser(model) {
    return this.http.post(this.urlBase + 'usuario/save-usuario', model).map(res => {
      if (res) {
        return { response : res }
      }
    });
  }
}
export class cadastroUser {

  idUser: number;
  loginUser: String;
  password: String;
  tipoUsuario: TipoUsuario;
  dataCriacao: Date;
  ativo: Boolean;

  constructor() {
    this.tipoUsuario = new TipoUsuario;
  }
}
export class TipoUsuario {

  idTipoUsuario: 1;
  descricao: String;

  constructor() {
  
  }
}
