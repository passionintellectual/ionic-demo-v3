import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberCartPage } from './member-cart';

@NgModule({
  declarations: [
    MemberCartPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberCartPage),
  ],
})
export class MemberCartPageModule {}
