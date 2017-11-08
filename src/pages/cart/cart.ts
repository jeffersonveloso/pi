import { CartProvider } from './../../providers/cart/cart';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class CartPage implements OnInit {
cart_list:any= [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartCtrl: CartProvider
  ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  ngOnInit() {
    this.cart_list = JSON.parse(localStorage.getItem('carrinho'));
    console.log(this.cart_list);
  }
}
