import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SettingsPage } from '../../pages/settings/settings';
import{LoginPage} from '../../pages/login/login'
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
 public autenticado:boolean;
  constructor(public modalCtrl: ModalController) {
   this.autenticado=true;
  }
  openModal() {
    if(this.autenticado){
      let modal = this.modalCtrl.create(SettingsPage);
      modal.present();
    }else{
      let modal = this.modalCtrl.create(LoginPage);
      modal.present();
    }
  }
}
