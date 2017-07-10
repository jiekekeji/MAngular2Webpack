import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from "./user.routes";
import { RegisterComponent } from './register/register.component';
import { ContainerComponent } from './container/container.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [LoginComponent, RegisterComponent, ContainerComponent]
})
export class UserModule {
}
