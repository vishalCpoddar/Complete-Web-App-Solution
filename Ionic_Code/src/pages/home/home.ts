import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  response: String;
  constructor(public navCtrl: NavController, private USER: UserProvider) { }

  goto(routes) {
    if (routes == 'login') {
      this.navCtrl.push(LoginPage);
    }
    else if (routes == 'signup') {
      this.navCtrl.push(SignupPage);
    }
  }
  logout(route) {
    if (this.USER.logout()) {
      this.navCtrl.push(LoginPage);
    }
    else {
      this.response = 'Error logging out.'
    }
  }
}