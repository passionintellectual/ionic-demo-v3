import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {AppStorageService} from "../services/app-storage.service";
import {IonicStorageModule, StorageConfig} from "@ionic/storage";

export const AppSettingsStorage = new InjectionToken<string>("SettingsStorage");

@NgModule({
  imports: [ IonicStorageModule ],
  exports: [],
  declarations: [],
  providers:[
    {provide:
      AppSettingsStorage, useClass:AppStorageService}
  ]
})
export class SharedModule {
  static forRoot(storageConfig: StorageConfig = null): ModuleWithProviders {
    let obj =  IonicStorageModule.forRoot(storageConfig);
    return {
      ngModule: SharedModule,
      providers: obj.providers
    }
  }
}
