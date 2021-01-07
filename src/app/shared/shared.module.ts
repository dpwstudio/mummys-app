import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateDirective } from 'src/app/shared/directives/animate/animate.directive';
import { LazyImgDirective } from './directives/lazy-img/lazy-img.directive';



@NgModule({
  declarations: [AnimateDirective, LazyImgDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AnimateDirective,
    LazyImgDirective
  ]
})
export class SharedModule { }
