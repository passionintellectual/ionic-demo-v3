import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseRepository} from "../../services/base-services/base-repository";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: any = [];
  page: number = 0;
  limit: number = 10;
  totalPage: number = 50;
  private errorMessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public usersRepo: BaseRepository) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    this.usersRepo.getAll(this.usersRepo.getPaginatedUrl('users', this.page, this.limit))
      .subscribe((list) => {
        this.users.push(...list);
      });
  }


  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    setTimeout(() => {

      this.usersRepo.getAll(this.usersRepo.getPaginatedUrl('users', this.page, this.limit))
        .subscribe(
          res => {
            this.users.push(...res);
          },
          error => this.errorMessage = <any>error);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }
}
