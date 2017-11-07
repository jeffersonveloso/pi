import { cadastroUser, UserInfoProvider } from './../../providers/user-info/user-info';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-user',
  templateUrl: 'cadastro-user.html',
})
export class CadastroUserPage {
model: cadastroUser;
resultado:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userInfo:UserInfoProvider) {
    this.model = new cadastroUser();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUserPage');
  }

  private addUser(){
    
    this.userInfo.insertUser(this.model).subscribe(
      data => {
        if (data.response.status == 200) {
          this.resultado = data.response.json();
          console.log(this.resultado);          
        } else {
          console.log(data.response);
          
        }
      }, 
        err => {
        
          console.log(err);
      },
      () => {
      }
    );

  }
  
}
