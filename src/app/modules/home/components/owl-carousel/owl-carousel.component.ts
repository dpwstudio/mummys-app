import { Component, HostListener, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class OwlCarouselComponent implements OnInit {
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
        title: 'Mummy\'s day of Loy',
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
