import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DevicesService } from '../../services/devices.service'


@Component({
  selector: 'app-del-device',
  templateUrl: './del-device.component.html',
  styleUrls: ['./del-device.component.css']
})
export class DelDeviceComponent implements OnInit {

  output: String;
  username: String;
  devname: String;
  password: String;

  constructor(private DEVICE: DevicesService, private router: Router) { }

  ngOnInit() {
  }

  goto(route) {
    this.router.navigate(['/' + route]);
  }

  delDev() {
    let body = {
      name: this.devname,
      username: this.username,
      password: this.password
    }
    this.DEVICE.delDevice(body).subscribe(res=>{
      if(res.success){
        this.output='Device Successfully deleted!'
      }
      else{
        this.output='Error deleting device!'
      }
    });
  }
}
