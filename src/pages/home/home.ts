import { CartProvider } from './../../providers/cart/cart';
import { Component } from '@angular/core';
import { LoadingController, NavController, ActionSheetController, ToastController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ProductProvider
  ]
})
export class HomePage {
  autenticado:string;
  grid = true;
  buscarProduto: string = '';
  public listaprodutos: any = [];
  public semFiltro: Array<any>;
  public comFiltro: boolean = false;

  constructor(
    public navCtrl: NavController,
    private productProvider: ProductProvider,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public carrinho:CartProvider,
    public modalCtrl: ModalController
  ) {
    this.autenticado = localStorage.getItem('autenticado');
    this.getProduct();

  }
  changeGrid() {
    this.grid = !this.grid;
  }
  //carregar os detalhes da pagina
  public verDetalhes(produto, indexProduto) {
    const loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Carregando'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push('DetalhesPage', {
        produto: produto,
        index: indexProduto
      });
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  //refresh na página
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  // dar unsubscribe quando sair da página para melhorar a performance
  ionViewWillLeave() {
    this.getProduct().unsubscribe();
  }

  public getProduct() {
    return this.productProvider.getJSON().subscribe(
      res => {
        this.listaprodutos = res;
        this.semFiltro = this.listaprodutos;
      },
      Error => {
        this.mostrarError(Error)
      });
  }

  mostrarError(Error): void {
    let error_message: string;
    if (Error.status === 404) {
      error_message = 'Conteudo não encontrado, código de erro: ' + Error.status;;
    } else if (Error.status === 500) {
      error_message = ' : Estamos com alguns problemas, tente mais tarde! Código do erro: ' + Error.status;
    }
    let toast = this.toastCtrl.create({
      message: error_message,
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

  mostrarFiltro(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Categorias:',
      buttons: [
        {
          text: 'Buquês',
          handler: () => {
            this.listaprodutos = this.semFiltro.filter((item) => {
              return item.categoria === 1;
            });
            this.comFiltro = true;
          }
        },
        {
          text: 'Combos',
          handler: () => {
            this.listaprodutos = this.semFiltro.filter((item) => {
              return item.categoria === 2;
            });
            this.comFiltro = true;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.listaprodutos = this.semFiltro;
            this.comFiltro = false;
          }
        }
      ]
    });

    actionSheet.present();
  }
  
  filtrarProdutos(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.listaprodutos = this.semFiltro.filter((item) => {
        return (item.nomeProduto.toLowerCase().indexOf(this.buscarProduto.toLowerCase()) > -1);
      })
      this.comFiltro = true;
    } else if (this.buscarProduto === '') {
      this.listaprodutos = this.semFiltro;
      this.comFiltro = false;
    }
  }
  openModal() {
    if(this.autenticado){
      let modal = this.modalCtrl.create('SettingsPage');
      modal.present();
    }else{
      let modal = this.modalCtrl.create('LoginPage');
      modal.present();
    }
  }
}
