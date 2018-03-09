import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterestedCategoriesPage } from './interested-categories';

@NgModule({
  declarations: [
    InterestedCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(InterestedCategoriesPage),
  ],
})
export class InterestedCategoriesPageModule {}
