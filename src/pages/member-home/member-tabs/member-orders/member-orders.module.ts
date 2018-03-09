import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberOrdersPage } from './member-orders';

@NgModule({
  declarations: [
    MemberOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberOrdersPage),
  ],
})
export class MemberOrdersPageModule {}
