import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberHomePage } from './member-home';
import {MemberTabsPageModule} from "./member-tabs/member-tabs.module";

@NgModule({
  declarations: [
    MemberHomePage,
  ],
  imports: [
    MemberTabsPageModule,
    IonicPageModule.forChild(MemberHomePage),
  ],
})
export class MemberHomePageModule {}
