import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import {AndroidPermissions} from "@ionic-native/android-permissions";

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
  providers:[
    AndroidPermissions,
    File,
    Transfer,
    Camera,
    FilePath,
  ]
})
export class CameraPageModule {}
