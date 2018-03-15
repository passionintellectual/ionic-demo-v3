import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import {AndroidPermissions} from "@ionic-native/android-permissions";

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
  providers:[
    AndroidPermissions
  ]
})
export class CameraPageModule {}
