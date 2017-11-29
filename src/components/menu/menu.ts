import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  autenticado:string;
  constructor(public modalCtrl: ModalController) {
    this.autenticado = localStorage.getItem('autenticado');
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
