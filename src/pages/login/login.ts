import { CadastroUserPage } from './../cadastro-user/cadastro-user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, LoadingController  } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import {Md5} from 'ts-md5/dist/md5';
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
  resultado:any
  user = {
    email: '',
    senha: '',
    hash: ''
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private loginCtrl: LoginServiceProvider,
    public load : LoadingController
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
  login(){
    if (this.user.senha && this.user.senha != '') {
      this.user.hash = Md5.hashStr(this.user.senha).toString();
      this.user.senha = null;
    let carregando = this.load.create({
      content: 'Consultando...'
    });
    carregando.present();

    this.loginCtrl.autenticarUsuario(this.user.email,this.user.hash).subscribe(
      data => {
        if (data.response.status == 200) {
          this.resultado = data.response;     
          console.log(this.resultado);   
        } else {
          this.resultado = data.response.json();
          console.log("deu erro"+data.response);
          
        }
      }, 
        err => {
          this.resultado = err.response;
          carregando.dismiss();
          console.log(err);
      },
      () => {
        carregando.dismiss();
      }
    );
  }
}
}

