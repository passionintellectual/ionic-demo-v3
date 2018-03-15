import {BaseRepository} from './../services/base-services/base-repository';
import {AppConfigService} from './../services/app-config.service';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
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
import {ReactiveFormsModule} from "@angular/forms";
import {SettingsPage} from "../pages/settings/settings";
import {IonicStorageModule} from "@ionic/storage";
import {UsersPage} from "../pages/users/users";
import {CameraPageModule} from "../pages/camera/camera.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    UsersPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    GuestPageModule,
    SignupPageModule,
    MemberHomePageModule,
    ProductCategoriesPageModule,
    ContactPageModule,
    ProductListPageModule,
    ProductDetailsPageModule,
    CameraPageModule,
    IonicStorageModule.forRoot({
      name: '__mydb'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    UsersPage
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
