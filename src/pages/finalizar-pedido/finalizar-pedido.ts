import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinalizarPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finalizar-pedido',
  templateUrl: 'finalizar-pedido.html',
})
export class FinalizarPedidoPage {
produtos:any[];
totalPedido=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    this.produtos.map((row)=>{
    let subtotal = (row.produto.valorProduto)* row.quantidade;
    row.subtotal = subtotal;
     this.totalPedido += (row.produto.valorProduto)* row.quantidade;
    })
    console.log(this.produtos);
    console.log(this.totalPedido);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizarPedidoPage');
  }

}
