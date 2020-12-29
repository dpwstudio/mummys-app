import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { customNotifierOptions } from 'src/app/config/config';
import { NotifierModule } from 'angular-notifier';
import { NavMobFootComponent } from './components/nav-mob-foot/nav-mob-foot.component';

@NgModule({
  declarations: [SidebarComponent, FooterComponent, NavMobFootComponent],
  imports: [
    CommonModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    NavMobFootComponent
  ]
})
export class LayoutModule { }
