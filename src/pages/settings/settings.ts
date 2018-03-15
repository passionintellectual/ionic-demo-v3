import {Component, Inject, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppStorageService} from "../../services/app-storage.service";
import {AppSettingsStorage} from "../../shared/shared.module";
import { Storage } from '@ionic/storage';
import {UsersPage} from "../users/users";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit{

  settingsForm: FormGroup;

  constructor(private navCtrl: NavController,
              private fb: FormBuilder,
              private storage: Storage) {
    this.storage.ready().then(() => console.log('storage is ready'));
  }

  ngOnInit(){
    // this.settingsForm = new FormGroup({
    //   defaultPageSize: new FormControl(10, [Validators.required]),
    //
    // });
    //

    this.settingsForm = this.fb.group({
      'defaultPageSize': [10, [Validators.required]]
    })

  }

  getSettingsFromStrorage() {
    this.storage.get('settings').then((settings)=> {
      console.log(settings);
    });

  }
  ionViewDidLoad() {
    this.getSettingsFromStrorage();
    console.log('ionViewDidLoad SettingsPage');
  }

  saveSettings() {
    if(this.settingsForm.value) {
      this.storage.set('settings', JSON.stringify(this.settingsForm.value));
    }

  }
  goToUsers() {
    this.navCtrl.push(UsersPage);
  }
}
