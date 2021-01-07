import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { CountToModule } from 'angular-count-to';
import { HomeModule } from '../home/home.module';
import { InstallAppComponent } from './components/install-app/install-app.component';


@NgModule({
  declarations: [AboutComponent, InstallAppComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LayoutModule,
    HomeModule,
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
