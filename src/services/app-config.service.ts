import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
public static baseAPIUrl: string = 'http://localhost:3000';
constructor() { }

}