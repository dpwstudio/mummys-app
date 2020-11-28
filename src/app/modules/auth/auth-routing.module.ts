import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/pages/login/login.component';
import { RegisterComponent } from '../auth/pages/register/register.component';
import { LostPasswordComponent } from '../auth/pages/lost-password/lost-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Se connecter'
    }
  }, {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'S\'inscrire'
    }
  }, {
    path: 'lost-password',
    component: LostPasswordComponent,
    data: {
      title: 'Mot de passe oublié'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
