import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

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
        id: 1,
        imageUri: 'carousel/img-5.jpg',
        name: 'Soupe Pho',
        type: 'Plat chaud',
        size: 'Medium',
        price: 13
      }, {
        id: 2,
        imageUri: 'carousel/img-2.jpg',
        name: 'Nouilles sautés',
        type: 'Plat chaud',
        size: 'Medium',
        price: 13
      }, {
        id: 3,
        imageUri: 'carousel/img-6.jpg',
        name: 'Riz Loc Lac',
        type: 'Plat chaud',
        size: 'Medium',
        price: 13
      }
    ];
  }

}
