import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent implements OnInit {
  desserts: Product[];

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.desserts = [
      {
        imageUri: 'desserts/img-1.jpg',
        name: 'Tiramisu aux fruits rouges',
        type: 'Plat chaud',
        size: 'Medium',
        price: 7.5
      }, {
        imageUri: 'desserts/img-2.jpeg',
        name: 'Nougat chinois',
        type: 'Plat chaud',
        size: 'Medium',
        price: 7.5
      }, {
        imageUri: 'desserts/img-3.jpg',
        name: 'Mizu Shingen Mochi',
        type: 'Plat froid',
        size: 'Medium',
        price: 7.5
      }
    ];
  }

}
