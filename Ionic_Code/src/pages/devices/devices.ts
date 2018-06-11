import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DeviceProvider} from '../../providers/device/device'

/**
 * Generated class for the DevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private DEVICE: DeviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
    let ID = localStorage.getItem('user');
    if(this.DEVICE.getDevices(ID)){
      console.log('Received Devices');
    }
    else{
      console.log("Error recceiving Devices");
    }
  }

}
