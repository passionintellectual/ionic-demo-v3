import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";
import {ProductCategoriesPage} from "../product-categories/product-categories";
import {ProductListPage} from "../product-list/product-list";
import {UsersPage} from "../users/users";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  gotToProducts() {
    this.navCtrl.push(ProductListPage);
  }

  gotToUsers() {
    this.navCtrl.push(UsersPage);
  }
}
