import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
	selector: 'app-boisson',
	templateUrl: './boisson.component.html',
	styleUrls: ['./boisson.component.scss']
})
export class BoissonComponent implements OnInit {
	drinks: Product[];

	constructor() { }

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts() {
		return this.drinks = [
			{
				imageUri: 'boissons.jpeg',
				name: 'Coca-Cola',
				type: 'Soda',
				size: '33cl',
				price: 2
			}, {
				imageUri: 'boissons.jpeg',
				name: 'Jus d\'orange',
				type: 'Jus de fruits',
				size: '33cl',
				price: 2
			}, {
				imageUri: 'boissons.jpeg',
				name: 'Fanta',
				type: 'Soda',
				size: '33cl',
				price: 2
			}
		];
	}

}
