import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
public static baseUrl: string = 'http://localhost:3000/';
constructor() { }

}