import { Usuario } from './../../domain/usuario';
import { AutenticacaoService } from './../../service/autenticacao.service';
import { ResourceMethodStrict } from 'ng2-resource-rest/index';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable, Injector } from '@angular/core';
import { Resource, ResourceMethod, ResourceParams, ResourceAction} from 'ng2-resource-rest';

@Injectable()
@ResourceParams({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
export class LoginService extends Resource {
    options: RequestOptions;
    headers: Headers;

    @ResourceAction({
        url: 'http://127.0.0.1:8080/cb/usuario/login-user/{!dsEmail}/{!dsPassword}'
    })
    loginUser: ResourceMethod<{ dsEmail: any, dsPassword: any }, Usuario>;

    constructor(http: Http, injector: Injector, private autenticacaoService: AutenticacaoService) {
        super(http, injector);
        this.getResourceOptions().headers['Authorization'] = this.autenticacaoService.getAuthorization();
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.options = new RequestOptions({ headers: this.headers });
        
      }

}
