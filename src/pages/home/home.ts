import { BaseRepository } from './../../services/base-services/base-repository';
import { Component, ViewChild } from '@angular/core';
import { SlidesModel } from '../../app-models/slides.interface';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides: SlidesModel[];
  constructor(
    private navController: NavController,
    public slidesRepo: BaseRepository
  ) {
    // Sequence
    console.log('--> In Constructor');
  }
  skipSlider(){
      // Not using this method, because we don't wan't back button when user goes to login page.
    // this.navController.push(LoginPage);
    this.navController.setRoot(LoginPage);
  }

  ionViewDidLoad(){
   console.log( '--> In ionViewDidLoad', '');
   this.slidesRepo.getAll<SlidesModel>('slides').subscribe((resp) => {
     this.slides = resp;
   })
  }

  ionViewWillEnter(){
    console.log( '--> In ionViewWillEnter', '');
  }

  ionViewDidEnter(){
    console.log( '--> In ionViewDidEnter', '');
  }

  ionViewWillLeave(){
    console.log( '--> In ionViewWillLeave', '');
  }

  ionViewDidLeave(){
    console.log( '--> In ionViewDidLeave', '');
  }

  ionViewWillUnload(){
    console.log( '--> In ionViewWillUnload', '');
  }

}
