import { AppConfigService } from './../app-config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class BaseRepository {
    constructor(
        private http: HttpClient
    ) {

    }



    getAll<T>(endpoint: string):Observable<T[]> {
        return this.http
        .get(`${AppConfigService.baseAPIUrl}/${endpoint}`)
        .do(resp=>{
            console.log('Response in base repository do', resp);
        })
        .map(resp => resp as T[]);
      }

  getPaginatedUrl(entity: string, page: number, limit: number) {
    return `users?_page=${page}&_limit=${limit}`;
  }
}
