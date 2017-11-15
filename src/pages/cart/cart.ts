import { CartProvider } from './../../providers/cart/cart';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
cart_list:any= [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartCtrl: CartProvider,
    public loadingCtrl:LoadingController,
    public events:Events
  ){
  }

  ionViewDidLoad() {
  }
  ionViewDidEnter(){
    this.cart_list = JSON.parse(localStorage.getItem('carrinho'));
  }
  
  removerProduto(index){
    this.cart_list.splice(index,1);
    localStorage.setItem('carrinho',JSON.stringify(this.cart_list));
    this.events.publish('cart:updated',this.cart_list.length);
  }
    //carregar os detalhes da pagina
    public verDetalhes(prod) {
     let qnt = prod.quantidade;
     let produto = prod.produto;
      const loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Carregando'
      });
  
      loading.present();
  
      setTimeout(() => {
        this.navCtrl.push('DetalhesPage', {
          produto:produto,
          quantidade:qnt
        });
      }, 1000);
  
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    }
    finalizarPedido(){
      this.navCtrl.push('FinalizarPedidoPage');
    }
}
