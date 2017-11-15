import { ToastController, Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
static cartQnt;
novoProduto:any={
  quantidade:0,
  subtotal:0,
  produto:{}
}
produtos:any[]=[];
  constructor(public http: Http, public toastCtrl: ToastController,public events: Events) {
  this.produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
  }

  addProduto(item:any ={}){
    let message:string;
    this.produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    if(!item.idProduto){
      console.log("error é necessario um produto");
    }else{
      let existe = false;
      this.produtos.map((row)=>{
        if(row.produto.idProduto == item.idProduto){
          row.quantidade++;
          existe =true;
          message="Quantidade atualizada para "+row.quantidade;
        }
      });
      if(!existe){
        this.novoProduto.produto =item;
        this.novoProduto.quantidade =1;
        this.produtos.push(this.novoProduto);
        message="Produto adicionado ao carrinho.";
      }
    }
    localStorage.setItem('carrinho',JSON.stringify(this.produtos));
    this.showToast('bottom',message);
    this.events.publish('cart:updated',this.produtos.length);
  }
  private showToast(position: string,message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  limparCarrinho(){
    localStorage.setItem('carrinho',null);
    this.produtos = [];
  }

}
