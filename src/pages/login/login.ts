import { Usuario } from './../../domain/usuario';
import { LoginService } from './login.service';
import { CadastroUserPage } from './../cadastro-user/cadastro-user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, LoadingController  } from 'ionic-angular';
import {Md5} from 'ts-md5/dist/md5';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
  ]
}) 
export class LoginPage {
  public autenticado:boolean;
  resultado:any
  usuario: Usuario = new Usuario;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public load : LoadingController,
    private loginService: LoginService
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
  
  login() {
    this.loginService.loginUser({ dsEmail: this.usuario.loginUser, dsPassword: this.usuario.password }).$observable.subscribe(
      usuario => {
        this.usuario = usuario;
      },
      erro => {
        console.log('Error ao logar!');
      }
    );
  }
}

