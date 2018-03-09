import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MemberCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-cart',
  templateUrl: 'member-cart.html',
})
export class MemberCartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberCartPage');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
