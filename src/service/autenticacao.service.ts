import { Usuario } from './../domain/usuario';
import {LocationStrategy} from "@angular/common";
import {Injectable} from "@angular/core";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class AutenticacaoService {

  private XSRF_TOKEN = 'XSRF-TOKEN';

  constructor(private locationStrategy: LocationStrategy) {
  }

  loginToken(token: string, jsonString: string) {
    if (token !== undefined && token.match(/[\.]{1}/)) {
      const jwtHelper = new JwtHelper();
      const json = JSON.parse(jsonString);
      if (json) {
        const user = {
          id_token: token,
          usuario: {
            nome: json.sub,
            id: json.idSub
          },
          orgaoAtivo: json.orgaoAtivo,
          orgaosLotacoes: json.orgaosLotacoes
        };
        window.sessionStorage.setItem('cabyflower-currentUser', JSON.stringify(user));
      }
    }
  }

  getUser() {
    if (window.sessionStorage.getItem('cabyflower-currentUser')) {
      return JSON.parse(window.sessionStorage.getItem('cabyflower-currentUser'));
    }
  }

  insertUser(user: Usuario){
    window.sessionStorage.setItem('cabyflower-currentUser', JSON.stringify(user));
  }

  logout() {
    // remove user from local storage to log user outut
    window.sessionStorage.removeItem('cabyflower-currentUser');
  }

  getAuthorization() {
    // TODO: Aqui deverá vir a lógica para não redirecionar na consulta externa,
    // porém é necessário que algum token seja emitido
    // if (this.isConsultaExterna()) {
    //   return null;
    // }
    return true;
  }

  getXSFRToken() {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = `${this.XSRF_TOKEN}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
}
