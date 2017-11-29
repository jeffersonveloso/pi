import { Endereco } from './../../domain/endereco';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-finalizar-pedido',
  templateUrl: 'finalizar-pedido.html',
})
export class FinalizarPedidoPage {
produtos:any[];
outroMetodo:boolean;
cartaoGravado;
cardCredit;
validade;
pedidos={"Pedidos":[]}
dadosPedido={
  dataEntrega:'',
  dataPedido: new Date(),
  endereco:null,
  numero:null,
  complemento:null,
  mensagem:'',
  totalPedido:0,
  parcelamento:null
}
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    this.produtos.map((row)=>{
    let subtotal = (row.produto.valorProduto)* row.quantidade;
    row.subtotal = subtotal;
     this.dadosPedido.totalPedido += (row.produto.valorProduto)* row.quantidade;
    });
  }
  ionViewDidEnter(){
   this.pedidos = JSON.parse(localStorage.getItem('Pedidos')) || {"Pedidos":[]};
   this.cartaoGravado = localStorage.getItem('Cartao') || null;
   this.cartaoGravado = JSON.parse(this.cartaoGravado);
   this.cardCredit = this.cartaoGravado.cardCredit;
   this.validade = this.cartaoGravado.validade;

   if(this.cartaoGravado != null){
    this.outroMetodo = false;
   }else{
     this.outroMetodo = true;
   }

  }
  openModal() {
      let modal = this.modalCtrl.create('ModalContentPage',{
        totalPedido:this.dadosPedido.totalPedido
      });
      modal.present();
  }

  finalizarPedido(){
    this.cartaoGravado = localStorage.getItem('Cartao');
    let pedido= {"produtos":this.produtos,"dadosPedido":this.dadosPedido,"MetodoPagamento":JSON.parse(this.cartaoGravado)};
    this.pedidos.Pedidos.push(pedido);
    localStorage.setItem('Pedidos', JSON.stringify(this.pedidos));
  }
}

