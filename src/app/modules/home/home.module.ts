import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { OwlCarouselComponent } from './components/owl-carousel/owl-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '../layout/layout.module';

import { CountToModule } from 'angular-count-to';
import { MummysCounterComponent } from './components/mummys-counter/mummys-counter.component';

@NgModule({
  declarations: [HomeComponent, OwlCarouselComponent, MummysCounterComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    NgbModule,
    CountToModule
  ],
  exports: [
    HomeComponent,
    MummysCounterComponent
  ]
})
export class HomeModule { }
