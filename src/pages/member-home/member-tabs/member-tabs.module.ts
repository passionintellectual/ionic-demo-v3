import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberTabsPage } from './member-tabs';
import {InterestedCategoriesPageModule} from "./interested-categories/interested-categories.module";
import {MemberOrdersPageModule} from "./member-orders/member-orders.module";
import {MemberCartPageModule} from "../../member-cart/member-cart.module";

@NgModule({
  declarations: [
    MemberTabsPage,
  ],
  imports: [
    MemberCartPageModule,
    InterestedCategoriesPageModule,
    MemberOrdersPageModule,

    IonicPageModule.forChild(MemberTabsPage),
  ],
})
export class MemberTabsPageModule {}
