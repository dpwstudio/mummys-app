import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '../layout/layout.module';

import { CountToModule } from 'angular-count-to';
import { MummysCounterComponent } from './components/mummys-counter/mummys-counter.component';
import { InstallAppComponent } from './components/install-app/install-app.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { AboutComponent } from './components/about/about.component';
import { ConceptComponent } from './components/concept/concept.component';
import { ModalityComponent } from './components/modality/modality.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, MummysCounterComponent, InstallAppComponent, DeliveryComponent, AboutComponent, ConceptComponent, ModalityComponent, CategoriesComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    LayoutModule,
    NgbModule,
    CountToModule,
    LazyLoadImageModule
  ],
  providers: [
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
  exports: [
    HomeComponent,
    MummysCounterComponent,
  ]
})
export class HomeModule { }
