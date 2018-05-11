
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  onLogin(body) {
    let Header = new Headers();
    Header.append("Content-Type", "application/json");
    return this.http
      .post('http://127.0.0.1:4000/users/login', body, { headers: Header })
      .map(res => res.json());
  }

  storeLocal(body) {
    localStorage.setItem("user", body);
  }

  isLoggedIn() {
    if (localStorage.getItem("user")) {
      return true
    }
    else {
      return false
    }

  }

  // getLocalUser(){
  //   return localStorage.getItem('user');
  // }

  onRegister(body) {
    let Header = new Headers();
    Header.append("Content-Type", "application/json");
    return this.http
      .post("http://127.0.0.1:4000/users", body, { headers: Header })
      .map(res => res.json());
  }

  logout() {
    localStorage.removeItem('user');
    return true;
  }
}
