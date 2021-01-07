import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-modality',
  templateUrl: './modality.component.html',
  styleUrls: ['./modality.component.scss']
})
export class ModalityComponent implements OnInit {
  state = false

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= 200) {
      this.state = true;
    } else {
      this.state = false;
    }
  }

}
