import { CartProvider } from './../../providers/cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  public index;
  public quantidade;
  public produto:any={};
  public produtos:any[]=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public carrinho:CartProvider,
    public alertCtrl: AlertController,
    public events:Events
    ){
    this.index = this.navParams.get('index'); 
    this.produto = this.navParams.get('produto');
    this.quantidade = this.navParams.get('quantidade');
    this.produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
  }

  ionViewDidLoad() {
  }

  aumentarQnt(item:number){
    this.produtos.map((row)=>{
      if(row.produto.idProduto == item){
        row.quantidade++;
      }});
      this.quantidade++;
      localStorage.setItem('carrinho',JSON.stringify(this.produtos));
  }
  diminuirQnt(item){
    this.produtos.map((row)=>{
      if(row.produto.idProduto == item){
        if(this.quantidade==1){
          let confirm = this.alertCtrl.create({
            title: 'Remover este produto ?',
            message: 'Só existe '+this.quantidade+' deste produto, se clicar em Sim'
            +' o produto será removido do carrinho, tem certeza que deseja remover? ',
            buttons: [
              {
                text: 'Não',
                handler: () => {  
                }
              },
              {
                text: 'Sim',
                handler: () => {
                  this.quantidade--;
                  this.produtos.splice(row,1);
                  this.events.publish('cart:updated',this.produtos.length);
                }
              }
            ]
          });
          confirm.present();
        }else{
          row.quantidade--;
          this.quantidade--;
        }
       
      }});
      localStorage.setItem('carrinho',JSON.stringify(this.produtos));
  }
}
