import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutModule } from '../layout/layout.module';
import { LostPasswordComponent } from './pages/lost-password/lost-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { customNotifierOptions } from 'src/app/config/config';
import { NotifierModule } from 'angular-notifier';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, LostPasswordComponent, ProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    LayoutModule,
    NgbModule
  ]
})
export class AuthModule { }
