import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {
  state = false;
  stateIcon = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= 450) {
      this.state = true;
    } else {
      this.state = false;
    }
    if (scrollPosition >= 700) {
      this.stateIcon = true;
    } else {
      this.stateIcon = false;
    }
  }

}
