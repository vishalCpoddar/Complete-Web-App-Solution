import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../services/devices.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  devname: String;
  devcontrol: String;
  devfeild: String;
  response: String;


  constructor(private DEVICE: DevicesService, private router: Router) { }

  ngOnInit() {
  }
  AddDevice() {
    let User = JSON.parse(localStorage.getItem('user'));

    let body = {
      name: this.devname,
      id: User.id,
      controls: this.devcontrol,
      fields: this.devfeild
    }

    this.DEVICE.AddDev(body).subscribe(res => {
      console.log(res);

      if (res.success) {
        this.response = 'Device successfully added'
      }
      else {
        this.response = 'Operation failed!'
      }
    });
  }

  goto(route) {
    this.router.navigate(["/"+route]);
  }

}
