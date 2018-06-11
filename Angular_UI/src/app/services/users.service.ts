import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import "rxjs/add/operator/map";


@Injectable()
export class UsersService {

  constructor(private http:Http) { }

onLogin(body){
  const header = new Headers();
  header.append("Content-Type","application/json");
  return this.http
  .post("http://127.0.0.1:4000/users/login",body,{headers:header})
  .map(res=>res.json());
};

onRegister(body){

  const header = new Headers();
  header.append("Content-Type","application/json");
  return this.http
  .post("http://127.0.0.1:4000/users",body,{headers:header})
  .map(res=>res.json());
}

onDel(body){
  const header = new Headers();
  header.append("Content-Type","application/json");
  return this.http
  .post("http://127.0.0.1:4000/users/delete",body,{headers:header})
  .map(res=>res.json());
};


StoreLocal(body){
  localStorage.setItem("user",JSON.stringify(body));
}


isLoggedIn(){
  if(localStorage.getItem("user")){
    return true;
  }
  else{
    return false;
  }
}
getStoredUser(){
  return JSON.parse(localStorage.getItem("user"));
}
}
