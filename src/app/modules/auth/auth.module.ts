import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutModule } from '../layout/layout.module';
import { LostPasswordComponent } from './pages/lost-password/lost-password.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, LostPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule 
  ]
})
export class AuthModule { }
