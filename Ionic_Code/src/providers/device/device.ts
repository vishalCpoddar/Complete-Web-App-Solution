import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the DeviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceProvider {

  constructor(public http: Http) {
    console.log('Hello DeviceProvider Provider');
  }

  getDevices(body){
    let Header = new Headers();
    Header.append("Content-Type","application/json");
    return this.http
    .post("http://127.0.0.1:4000/devices/getDeviceByUserId",body,{headers:Header})
    .map(res=>res.json());
  }
}
