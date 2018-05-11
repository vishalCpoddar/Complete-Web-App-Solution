import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user'
import {ProfilePage} from '../profile/profile'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:String;
  password:String;
response:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, private USER:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(){
    let body={
      username:this.username,
      password:this.password
    }
    this.USER.onLogin(body).subscribe(res=>{
      console.log(res);
      if(res.success){
        this.USER.storeLocal(JSON.stringify(res.msg));
        this.navCtrl.push(ProfilePage);
      }
      else{
        this.response='wrong username or password.!'
      }
      
    })
  }

}
