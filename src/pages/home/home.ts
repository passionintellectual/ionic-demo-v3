import { BaseRepository } from './../../../app-models/slides-repository';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    public slidesRepo: BaseRepository
  ) {
    // Sequence
    console.log('--> In Constructor');
  }

  ionViewDidLoad(){
   console.log( '--> In ionViewDidLoad', '');
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
