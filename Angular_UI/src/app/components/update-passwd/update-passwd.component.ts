import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-update-passwd',
  templateUrl: './update-passwd.component.html',
  styleUrls: ['./update-passwd.component.css']
})
export class UpdatePasswdComponent implements OnInit {

  password: String;
  newpassword: String;
  output: String;

  constructor(private USER: UsersService, private router: Router) { }

  ngOnInit() {
  }

  upPass() {
    if (this.password == this.newpassword) {
      this.output = 'Matched'
    }
    else {
      this.output = 'not Matched'
    }
  }

  goto(route) {
    this.router.navigate(['/' + route]);
  }
}

