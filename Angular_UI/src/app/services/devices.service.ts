import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
//import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DevicesService {

  constructor(private http:Http) { }

  getDevice(ID){
    let body={
      id:ID
    }
    const  header=new Headers();
    header.append("Content-Type","application/json");
    return this.http
    .post('http://127.0.0.1:4000/devices/getDevice',body,{headers:header})
    .map(res=>res.json());
  }

  AddDev(body){
    const  header=new Headers();
    header.append("Content-Type","application/json");
    return this.http
    .post('http://127.0.0.1:4000/devices',body,{headers:header})
    .map(res=>res.json());
    // console.log(response);
  }

    delDevice(body){
      const  header=new Headers();
      header.append("Content-Type","application/json");
      return this.http
      .post('http://127.0.0.1:4000/devices/delete',body,{headers:header})
      .map(res=>res.json());

  }
}
