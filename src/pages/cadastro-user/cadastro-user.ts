import { cadastroUser, UserInfoProvider, dadosPessoais } from './../../providers/user-info/user-info';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-user',
  templateUrl: 'cadastro-user.html',
})
export class CadastroUserPage {
  model: cadastroUser;
  modelPessoais: dadosPessoais;
  dadosPessoais: Boolean = false;
  resultado: any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userInfo: UserInfoProvider,
    public loadCtrl: LoadingController
  ){
    this.model = new cadastroUser();
    this.modelPessoais = new dadosPessoais();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUserPage');
  }

  private addUser() {
    this.model.ativo = true;
    this.model.dataCriacao = "2012-04-23";
    this.model.tipoUsuario = { "idTipoUsuario": "1" };

    let loading = this.loadCtrl.create({
      spinner: 'bubbles',
      content: 'Cadastrando...'
    });
    loading.present();

    this.userInfo.insertUser(this.model).subscribe(
      data => {
        if (data.response.status == 200) {
          this.resultado = data.response.json();
          console.log(this.resultado);
          this.dadosPessoais = true;
        } else {
          console.log(data.response);
        }
      },
      err => {
        console.log(err);
      },
      () => {
         loading.dismiss();
      }
    );
  }

}
