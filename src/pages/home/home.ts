import { BaseRepository } from './../../services/base-services/base-repository';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidesModel } from '../../app-models/slides.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides: SlidesModel[];
  @ViewChild('nav') navControl: NavController;
  constructor(
    public slidesRepo: BaseRepository
  ) {
    // Sequence
    console.log('--> In Constructor');
  }
  skipSlider(){
    // this.navControl.setRoot(LoggedInHome);
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
