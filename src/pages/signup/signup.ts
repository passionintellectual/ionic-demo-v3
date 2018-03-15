import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import {CameraPage} from "../camera/camera";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload profile picture',
      buttons: [
        {
          text: 'Use Camera',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.navCtrl.push(CameraPage);
          }
        },
        {
          text: 'Choose from gallery',
          handler: () => {
            console.log('Choosing from Gallery');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // this will be called even if user clicks on the backdrop, because of the role setting to cancel.
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  openActionSeet() {
    this.presentActionSheet();
  }
}
