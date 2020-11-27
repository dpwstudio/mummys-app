import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: Product[];

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.menus = [
      {
        imageUri: 'desserts/img-1.jpg',
        name: 'Mummy\'s discovery',
        type: 'Formule',
        size: 'Medium',
        price: 12
      }, {
        imageUri: 'desserts/img-2.jpeg',
        name: 'Mummy\'s food',
        type: 'Formule',
        size: 'Medium',
        price: 15
      }, {
        imageUri: 'desserts/img-3.jpg',
        name: 'Mummy\'s special',
        type: 'Formule',
        size: 'Medium',
        price: 20
      }
    ];
  }

}
