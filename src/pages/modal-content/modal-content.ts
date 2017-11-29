import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {
  totalPedido=0;
  memorizarCartao:boolean= false;
  dadosCartao={
    cardCredit:null,
    nomeTitular:null,
    codSeguranca:null,
    validade:null
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.totalPedido = this.navParams.get('totalPedido'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContentPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  cadastrarCartao(){
    if(this.memorizarCartao==true){
      localStorage.setItem('Cartao',JSON.stringify(this.dadosCartao));
    }else{
      console.log(this.dadosCartao);
    }
  }

}
