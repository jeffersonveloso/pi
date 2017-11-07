import { CadastroUserPage } from './../cadastro-user/cadastro-user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    LoginServiceProvider
  ]
})
export class LoginPage {
  public autenticado:boolean;
  email: string;
  senha: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private LoginServiceProvider: LoginServiceProvider,
  ){
  }
  ionViewDidLoad() {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  cadastrar(){
    this.navCtrl.push(CadastroUserPage);
  }
}
