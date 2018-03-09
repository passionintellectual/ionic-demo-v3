import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseRepository} from "../../services/base-services/base-repository";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  products: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productRepo: BaseRepository) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
    this.productRepo.getAll('products').subscribe((prods) => {
      this.products = prods;
    });
  }

  getHeader(record, recordIndex, records) {

    let tag = record.tags[0];
    if (recordIndex === 0 || tag !== records[recordIndex - 1].tag) {
      return tag? tag: 'N/A'
    }
    return null;
  }


}
