import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  name:String;
  username:String;
  id:String;  
  User:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private USER: UserProvider) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    if (this.USER.isLoggedIn()) {
      this.id = localStorage.getItem('id')
      // let body = {
      //   id: this.id
      // }
      
      this.User=JSON.parse(localStorage.getItem('user'));
      this.name=this.User.name;
      this.username=this.User.username;
      this.id=this.User.id;
      
      }
  }
}

