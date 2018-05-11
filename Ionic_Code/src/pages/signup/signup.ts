import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user'
import {LoginPage} from '../login/login'

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private USER:UserProvider) {
  }

  Name:String;
  Username:String;
  Password:String;
  repassword:String;
  output:String;
  response:String;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  chPasswd(){
    if(this.Password==this.repassword){
      this.output='matched!'
    }
    else{
      this.output="not matched"
    }
  }

  onsignup(){
    let body={
      name:this.Name,
      username:this.Username,
      password:this.Password
    }

    this.USER.onRegister(body).subscribe(res=>{
      console.log(res);
      if(res.success){
      this.navCtrl.push(LoginPage);
      }
      else{
        this.response='Username already in use.!'
      }
    })
  }
}
