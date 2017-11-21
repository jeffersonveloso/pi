import { Endereco } from './../../domain/endereco';
import { AutenticacaoService } from './../../service/autenticacao.service';
import { ResourceMethodStrict } from 'ng2-resource-rest/index';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable, Injector } from '@angular/core';
import { Resource, ResourceMethod, ResourceParams, ResourceAction} from 'ng2-resource-rest';

@Injectable()
@ResourceParams({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
export class EnderecoService extends Resource {
    options: RequestOptions;
    headers: Headers;

    @ResourceAction({
        method: RequestMethod.Post,
        url: 'http://homologacaoholic.com.br:10923/cb/usuario-comum/save-usuario-comum'
    })
    save: ResourceMethod<Endereco, any>;

    constructor(http: Http, injector: Injector, private autenticacaoService: AutenticacaoService) {
        super(http, injector);
        this.getResourceOptions().headers['Authorization'] = this.autenticacaoService.getAuthorization();
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.options = new RequestOptions({ headers: this.headers });
      }

}
