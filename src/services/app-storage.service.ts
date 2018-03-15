import {Injectable} from '@angular/core';

@Injectable()
export class AppStorageService {


  constructor(public storage: Storage) {

  }

  get(key:string) : any{
    return this.storage.getItem(key);
  }

  set(key: string, data: any) {
    return this.storage.setItem(key, data);
  }

}
