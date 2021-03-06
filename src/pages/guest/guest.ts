import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";
import {ProductCategoriesPage} from "../product-categories/product-categories";
import {ProductListPage} from "../product-list/product-list";
import {UsersPage} from "../users/users";
import {SettingsPage} from "../settings/settings";

/**
 * Generated class for the GuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToCategories() {
    this.navCtrl.push(ProductCategoriesPage);

  }

  goToProducts() {
    this.navCtrl.push(ProductListPage);
  }

  goToUsers() {
    this.navCtrl.push(UsersPage);
  }

  openRightMenu() {
    this.menuCtrl.open('right');
  }

  goToSettings() {
    this.navCtrl.push(SettingsPage)
  }
}
