import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit{

  settingsForm: FormGroup;
  constructor(private fb: FormBuilder) {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveSettings() {
    console.log(this.settingsForm.value);
  }
}
