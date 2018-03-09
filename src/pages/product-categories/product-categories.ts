import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseRepository} from "../../services/base-services/base-repository";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the ProductCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-categories',
  templateUrl: 'product-categories.html',
})
export class ProductCategoriesPage {
  private tags$: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public tagsRepo: BaseRepository,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCategoriesPage');
    this.tags$ = this.tagsRepo.getAll('tags');
  }
  cancelOrder(tag: any) {
    this.presentConfirm(tag);
  }
  presentConfirm(tag) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want to delete this category?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Yes to be deleted', tag);
          }
        }
      ]
    });
    alert.present();
  }


}
