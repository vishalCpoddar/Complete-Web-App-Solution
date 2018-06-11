import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {Http, Headers, HttpModule} from '@angular/http'

import{LoginComponent} from './components/login/login.component'
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersService } from './services/users.service';
import {DevicesService} from './services/devices.service';
import { RegisterComponent } from './components/register/register.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DelDeviceComponent } from './components/del-device/del-device.component';
import { UpdatePasswdComponent } from './components/update-passwd/update-passwd.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';

const appRoutes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  //{path:'', component:AppComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'addDev',component:AddDeviceComponent},
  {path:'delDev', component:DelDeviceComponent},
  {path:'upPasswd',component:UpdatePasswdComponent},
  {path:'RMuser',component:RemoveUserComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AddDeviceComponent,
    DelDeviceComponent,
    UpdatePasswdComponent,
    RemoveUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService,
    DevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
