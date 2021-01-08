import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { CountToModule } from 'angular-count-to';
import { HomeModule } from '../home/home.module';
import { InstallAppComponent } from './components/install-app/install-app.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';


@NgModule({
  declarations: [AboutComponent, InstallAppComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LayoutModule,
    HomeModule,
    LazyLoadImageModule
  ],
  providers: [
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
