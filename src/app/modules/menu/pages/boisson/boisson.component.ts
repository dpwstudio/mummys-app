import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
	selector: 'app-boisson',
	templateUrl: './boisson.component.html',
	styleUrls: ['./boisson.component.scss']
})
export class BoissonComponent implements OnInit {
	drinks: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts() {
		this.productService.getProducts().pipe(
			catchError(error => {
				return throwError(error);
			})
		).subscribe(products => {
			this.drinks = products.filter(product => product.category === 'boisson');
		})
	}
}
