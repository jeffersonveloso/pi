import { Events } from 'ionic-angular';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  cartQnt=0;
  tab1Root = HomePage;
  tab2Root = 'MeusPedidosPage';
  tab3Root = 'CartPage';
  tab4Root = AboutPage;

  constructor(public events:Events) {
    this.events.subscribe('cart:updated', (count) => {
      this.cartQnt = count;
    });
    let cart_list = JSON.parse(localStorage.getItem('carrinho')) || [];;
    this.cartQnt = cart_list.length;
  }

}
