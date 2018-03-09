import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MemberOrdersPage} from "./member-orders/member-orders";
import {InterestedCategoriesPage} from "./interested-categories/interested-categories";
import {MemberCartPage} from "../../member-cart/member-cart";

/**
 * Generated class for the MemberTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-tabs',
  templateUrl: 'member-tabs.html',
})
export class MemberTabsPage {
  memberTabIndex: number = 0;
  tabOrderPage: any = MemberOrdersPage;
  tabMemberCart: any = MemberCartPage;
  tabInterestedCategoriesPage: any = InterestedCategoriesPage;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let data = this.navParams.data;
    if(data && (data.index || data.index)) {
      this.memberTabIndex = data.index;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberTabsPage');
  }
}
