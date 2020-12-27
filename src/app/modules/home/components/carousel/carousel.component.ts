import { Component, HostListener, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {
  limit: number = 10; // <==== Edit this number to limit API results
  slides: any[];
  innerWidth: number;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  
  constructor() {

  }

  ngOnInit(): void {
    this.slides = [
      {
        id: 1,
        image: 'assets/images/carousel/img-5.jpg',
        title: 'Soupe Pho',
        subtitle: 'Soupe Phô au boeuf façon Mummy\'s Loy'
      },
      {
        id: 2,
        image: 'assets/images/carousel/img-2.jpg',
        title: 'Nouilles sautés',
        subtitle: 'Nouilles sautés au poulet façon Mummy\'s Loy'
      },
      {
        id: 3,
        image: 'assets/images/carousel/img-6.jpg',
        title: 'Riz Loc Lac',
        subtitle: 'Riz Loc Lac façon Mummy\'s Akira'
      },

    ]
  }

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth
  }

  hasSmallScreen() {
    return this.innerWidth < 768;
  }
}
