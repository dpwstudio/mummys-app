import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LayoutModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
