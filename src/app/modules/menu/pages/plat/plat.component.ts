import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {
  dishes: Product[];

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.dishes = [
      {
        imageUri: 'carousel/img-5.jpg',
        name: 'Soupe Pho',
        type: 'Plat chaud',
        size: 'Medium',
        price: 13
      }, {
        imageUri: 'carousel/img-2.jpg',
        name: 'Nouilles sautés',
        type: 'Plat chaud',
        size: 'Medium',
        price: 13
      }, {
        imageUri: 'carousel/img-1.jpg',
        name: 'Plateau de maki',
        type: 'Plat froid',
        size: 'Medium',
        price: 13
      }
    ];
  }

}
