import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @ViewChild('element') element: ElementRef;
  state = false;
  stateCategory = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    // console.log('scrollPosition', scrollPosition);
    if (scrollPosition >= 1650) {
      this.state = true;
    } else {
      this.state = false;
    }
    if (scrollPosition >= 1800) {
      this.stateCategory = true;
    } else {
      this.stateCategory = false;
    }
  }
}
