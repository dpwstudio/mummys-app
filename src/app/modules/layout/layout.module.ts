import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { customNotifierOptions } from 'src/app/config/config';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  exports: [
    SidebarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
