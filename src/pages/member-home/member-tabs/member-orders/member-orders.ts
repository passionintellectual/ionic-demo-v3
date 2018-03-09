import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BaseRepository} from "../../../../services/base-services/base-repository";

/**
 * Generated class for the MemberOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-orders',
  templateUrl: 'member-orders.html',
})
export class MemberOrdersPage {

  products: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public ordersRepo: BaseRepository
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberOrdersPage');
    this.ordersRepo.getAll('products').subscribe((prods) => {
      this.products = prods
    });
  }


  cancelOrder() {

  }

  goToProductDetails() {

  }
}
