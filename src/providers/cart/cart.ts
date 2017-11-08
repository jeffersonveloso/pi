import { StorageProvider } from './../storage/storage';
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
novoProduto:any={
  quantidade:0,
  produto:{}
}
produtos:any[]=[];
  constructor(public http: Http,public storage:StorageProvider) {
  this.produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
  }

  addProduto(item:any ={}){
    this.produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    if(!item.idProduto){
      console.log("error é necessario um produto");
    }else{
      let existe = false;
      this.produtos.map((row)=>{
        if(row.produto.idProduto == item.idProduto){
          row.quantidade++;
          existe =true;
        }
      });
      if(!existe){
        this.novoProduto.produto =item;
        this.novoProduto.quantidade =1;
        this.produtos.push(this.novoProduto);
      }
    }
    localStorage.setItem('carrinho',JSON.stringify(this.produtos));
    console.log(localStorage.getItem('carrinho'));  

  }
  limparCarrinho(){
    localStorage.setItem('carrinho',null);
    this.produtos = [];
  }

}
