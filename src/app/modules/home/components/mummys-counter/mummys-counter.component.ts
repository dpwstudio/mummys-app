import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mummys-counter',
  templateUrl: './mummys-counter.component.html',
  styleUrls: ['./mummys-counter.component.scss']
})
export class MummysCounterComponent implements OnInit {
  countStarters = {
    countTo: 3,
    from: 0,
    duration: 2
  };
  countDishes = {
    countTo: 3,
    from: 0,
    duration: 2
  };
  countDesserts = {
    countTo: 3,
    from: 0,
    duration: 2
  };
  countUsers = {
    countTo: 200,
    from: 0,
    duration: 4
  };
  state = false
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= 3650) {
      this.state = true;
    } else {
      this.state = false;
    }
  }

}
