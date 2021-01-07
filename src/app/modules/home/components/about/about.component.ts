import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  state = false; 
  stateApp = false; 

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 950) {
      this.state = true;
    } else {
      this.state = false;
    }
    if (scrollPosition >= 1200) {
      this.stateApp = true;
    } else {
      this.stateApp = false;
    }
  }

}
