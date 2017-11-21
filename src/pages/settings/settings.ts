import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  cartQnt=0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public events:Events
  ) {
    this.events.subscribe('cart:updated', (count) => {
      this.cartQnt = count;
    });
  }

  ionViewDidLoad() {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
