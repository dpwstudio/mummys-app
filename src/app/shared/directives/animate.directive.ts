import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animate]'
})
export class AnimateDirective {
  @Input('animate') animate: string;
  state = false;

  constructor(public el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement;
    console.log('componentPosition', this.getPos(componentPosition));
    const scrollPosition = window.pageYOffset;
    console.log('scrollPosition', scrollPosition);
    if (scrollPosition >= componentPosition - 1000) {
      // this.renderer.addClass(this.el.nativeElement, this.animate)
    } else {
      this.state = false;
    }
  }

  getPos(el) {
    // yay readability
    for (var lx = 0, ly = 0;
      el != null;
      lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { x: lx, y: ly };
  }
}
