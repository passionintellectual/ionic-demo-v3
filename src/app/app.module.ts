import {BaseRepository} from './../services/base-services/base-repository';
import {AppConfigService} from './../services/app-config.service';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule, InjectionToken} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {GuestPageModule} from "../pages/guest/guest.module";
import {SignupPageModule} from "../pages/signup/signup.module";
import {MemberHomePageModule} from "../pages/member-home/member-home.module";
import {ContactPageModule} from "../pages/contact/contact.module";
import {ProductCategoriesPageModule} from "../pages/product-categories/product-categories.module";
import {ProductListPageModule} from "../pages/product-list/product-list.module";
import {ProductDetailsPageModule} from "../pages/product-details/product-details.module";
import {UsersPageModule} from "../pages/users/users.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GuestPageModule,
    SignupPageModule,
    MemberHomePageModule,
    ProductCategoriesPageModule,
    ContactPageModule,
    ProductListPageModule,
    ProductDetailsPageModule,
    UsersPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppConfigService,
    BaseRepository,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
