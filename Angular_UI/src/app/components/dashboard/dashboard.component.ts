import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  devices: any;

  constructor(private router: Router, private USER: UsersService, private DEVICE: DevicesService) { }



  ngOnInit() {
    if (this.USER.isLoggedIn()) {
      this.router.navigate(["/"]);
      //let user = this.USER.getStoredUser();
      this.user = JSON.parse(localStorage.getItem('user'));
      this.DEVICE.getDevice(this.user.id).subscribe(res => {
        // let response=JSON.parse(res.toString());
        console.log(res);
        this.devices = res.msg;
      });

    }
    else {
      this.router.navigate(["/login"])
    }
  }

  goto(route){
    this.router.navigate(["/"+route]);
  }
}
