import { Component } from '@angular/core';
import { IonicPage, ToastController , NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  public index;
  public produto:any={};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private nativeStorage: NativeStorage
    ){
    this.index = this.navParams.get('index'); 
    this.produto = this.navParams.get('produto');
  }

  ionViewDidLoad() {
  }
  private adicionarAoCarrinho(produto:any){
    console.log(produto);
    this.showToast('bottom');
    /*this.nativeStorage.setItem('myitem', produto)
    .then(
      () =>  this.showToast('bottom'),
      error => console.error('Error storing item', error)
    );
  */
   
  }
  private showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Produto adicionado ao carrinho!',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
}
