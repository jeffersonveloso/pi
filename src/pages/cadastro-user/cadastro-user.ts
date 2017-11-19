import { HomePage } from './../home/home';
import { DadosPessoaService } from './dados-pessoa.service';
import { Municipio } from './../../domain/municipio';
import { Uf } from './../../domain/uf';
import { DadosPessoais } from './../../domain/dados-pessoa';
import { AutenticacaoService } from './../../service/autenticacao.service';
import { TipoUsuario } from './../../domain/tipo-usuario';
import { Usuario } from './../../domain/usuario';
import { UserInfoProvider } from './../../providers/user-info/user-info';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-user',
  templateUrl: 'cadastro-user.html',
})
export class CadastroUserPage {
  model: Usuario = new Usuario;
  tipoUsuario: TipoUsuario = new TipoUsuario;
  dadosPessoais: Boolean = false;
  dadosPessoa: DadosPessoais = new DadosPessoais;
  resultado: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userInfo: UserInfoProvider,
    public loadCtrl: LoadingController,
    private autenticacaoService: AutenticacaoService,
    private dadosPessoaService: DadosPessoaService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUserPage');
  }

  tipoUsuarioComum() {
    this.tipoUsuario.idTipoUsuario = TipoUsuario.ID_USUARIO_COMUM;
  }

  addUser() {
    this.tipoUsuarioComum();
    this.model.ativo = true;
    this.model.dataCriacao = new Date;
    this.model.tipoUsuario = this.tipoUsuario;

    let loading = this.loadCtrl.create({
      spinner: 'bubbles',
      content: 'Cadastrando...'
    });
    loading.present();

    this.userInfo.insertUser(this.model).subscribe(
      usuario => {
        this.model = usuario.response.json();
        this.autenticacaoService.insertUser(this.model);
        this.dadosPessoais = true;
      },
      err => {
        console.log(err);
      },
      () => {
        loading.dismiss();
      }
    );
  }

  uf(): Uf {
    const uf: Uf = new Uf;
    uf.idUf = 1;
    return uf;
  }

  municipio(): Municipio {
    const municipio: Municipio = new Municipio;
    municipio.idMunicipio = 1;
    municipio.uf = this.uf();
    return municipio;
  }

  salvaDadosPessoa() {
    this.dadosPessoa.usuario = this.autenticacaoService.getUser();
    this.dadosPessoa.endereco.municipio = this.municipio();

    this.dadosPessoaService.save(this.dadosPessoa).$observable.subscribe(res => {
      this.dadosPessoa = res;
      this.navCtrl.push(HomePage);
    },
      error => {
        console.log('Error ao salvar os dados gerais da pessoa.')
      });
  }

}
