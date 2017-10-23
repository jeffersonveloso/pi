import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TermosPage} from '../termos/termos';
import {DuvidasPage} from '../duvidas/duvidas';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController) {

  }
  goFacebookPage(){
    window.open('https://www.facebook.com','_system','location=yes');
  }
  openTermo(){
    this.navCtrl.push(TermosPage);
  }
  openDuvidas(){
    this.navCtrl.push(DuvidasPage);
  }
}
