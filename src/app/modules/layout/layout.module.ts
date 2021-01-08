import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { customNotifierOptions } from 'src/app/config/config';
import { NotifierModule } from 'angular-notifier';
import { NavMobFootComponent } from './components/nav-mob-foot/nav-mob-foot.component';
import { CookieComponent } from './components/cookie/cookie.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';

@NgModule({
  declarations: [SidebarComponent, FooterComponent, NavMobFootComponent, CookieComponent],
  imports: [
    CommonModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOptions),
    LazyLoadImageModule
  ],
  providers: [
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    NavMobFootComponent,
    CookieComponent
  ]
})
export class LayoutModule { }
