import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Refresher} from 'ionic-angular';
import {BaseRepository} from "../../services/base-services/base-repository";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

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
  private subscription: Subscription;

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
    this.getUsers();

    console.log('Async operation has ended');
    infiniteScroll.complete();
  }

  private getUsers() {
    this.page = this.page + 1;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.usersRepo.getAll(this.usersRepo.getPaginatedUrl('users', this.page, this.limit))
      .subscribe(
        res => {
          this.users.push(...res);
        },
        error => {
          this.errorMessage = <any>error
          --this.page;
        });
  }

  doRefresh($event: Refresher) {
    setTimeout(() => {
      this.getUsers();
      $event.complete();
    },1000);

  }
}
