import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.scss']
})
export class EntreeComponent implements OnInit {
  starters: Product[];

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.starters = [
      {
        id: 1,
        imageUri: 'entrees/img-3.jpg',
        name: 'Salade César',
        type: 'Entrée',
        size: 'Small',
        price: 6.5
      }, {
        id: 2,
        imageUri: 'entrees/img-1.jpg',
        name: 'Tomate Mozarella Di Bufala',
        type: 'Entrée',
        size: 'Small',
        price: 6.5
      }, {
        id: 3,
        imageUri: 'entrees/img-2.jpg',
        name: 'Beignet de crevette',
        type: 'Entrée',
        size: 'Small',
        price: 6.5
      }
    ];
  }
}
