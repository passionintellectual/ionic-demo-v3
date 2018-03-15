import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {PageInterface} from "../../app-models/page.interface";
import {MemberTabsPage} from "./member-tabs/member-tabs";
/**
 * Generated class for the MemberHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-home',
  templateUrl: 'member-home.html',
})
export class MemberHomePage {
  rootPage: any = MemberTabsPage;
  @ViewChild(Nav) nav: Nav;
  pages: PageInterface[] = [

    { title: 'Shown Interest', pageName: 'MemberTabsPage', tabComponent: 'InterestedCategoriesPage', index: 2, icon: 'home' },
    { title: 'My Orders', pageName: 'MemberTabsPage', tabComponent: 'MemberOrdersPage', index: 0, icon: 'cart' },
    { title: 'Contact', pageName: 'ContactPage', icon: 'contacts' },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberHomePage');
  }

  openMenuPage(p: PageInterface) {
    console.log(p);
    let activeChildNavs = this.nav.getActiveChildNavs();

    if(activeChildNavs && activeChildNavs.length && (p.index || p.index === 0)) {
      let activeTabs = activeChildNavs[0];
      activeTabs.select(p.index);
    }else{
      let params;
      if(p.index || p.index === 0) {
        params = {
          index:p.index
        }
      }
      this.nav.setRoot(p.pageName, params);
    }

  }

  isActive(p: PageInterface) {

  }
}
