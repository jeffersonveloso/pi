import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  cartQnt=0;
  produtos:any[]=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public events:Events
  ) {
  
  }
  ionViewDidEnter(){
    this.produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    this.cartQnt = this.produtos.length;
  }
  pushCartPage(){
    this.navCtrl.push('CartPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  pushMeusPedidos(){
    this.navCtrl.push('MeusPedidosPage');
  }
}
