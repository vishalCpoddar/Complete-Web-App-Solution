import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private USER:UsersService, private router:Router) { }

  ngOnInit() {
  }

  name:String;
  username:String;
  password:String;
  repassword:String;
  output:String;

  chPass(){
    if(this.password==this.repassword){
      this.output='Password  matched.!';
    }
    else{
      this.output='Password not matched.!'
    }
  }

  register(rp){
    let user={
      name:this.name,
      username:this.username,
      password:this.password
    }

    this.USER.onRegister(user).subscribe(res =>{
      console.log(res);
      if(res.success){
      this.router.navigate(['/'+rp]);
      }
    })
  }
}
