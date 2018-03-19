import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path";

import { File } from '@ionic-native/file';


/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  lastImage: string = null;
  info: string[] = ['INfo comes here.'];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private androidPermissions: AndroidPermissions,
              private camera: Camera,
              private platform: Platform,
              private file: File,
              private filePath: FilePath,
              private toastCtrl: ToastController
  ) {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    this.androidPermissions.requestPermissions(
      [this.androidPermissions.PERMISSION.CAMERA,
        androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
        androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION

      ]);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }


  takePictureFromCamera(sourceType: number = 1) {



    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      this.info.push(imagePath);
      this.presentToast(imagePath);
      // Special handling for Android library
      if (this.platform.is('android') && options.sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.info.push('android');
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            this.info.push('filePath '+this.filePath);
            console.log('filePath', this.filePath);
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            this.info.push('correctPath '+correctPath);


            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.info.push('currentName '+currentName);

            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          }, (eerr) => {
            this.info.push('resolveNativePath gallery error'+eerr);
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        this.info.push('using camera currentName '+currentName);

        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.info.push('using camera correctPath '+correctPath);

        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      // this.presentToast('Error while selecting image.');
      this.presentToast(err);
    });
  }
  choosePicture(){
    this.takePictureFromCamera(0);
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

// Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName =  n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    console.log('copying from:' , namePath);
    this.info.push('from: namePath '+namePath);

    console.log('to: ', currentName);
    this.info.push('to: currentName '+currentName);
this.info.push('this.lastImage : '+this.lastImage);
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
      this.info.push('Copied to : ' + newFileName);
      this.info.push('newFileName '+newFileName);
      console.log('lastImage', this.lastImage);
    }, error => {
      this.presentToast('Error while storing file.');
      this.info.push(error);
    });
  }

  fromDataDirectory(lastImage: string) {
    this.info.push('adding path', this.lastImage);
    if(lastImage){

      let img = cordova.file.dataDirectory + lastImage;
      this.info.push('img returning:', img);
      return img;
    }
    return '';
  }
}
