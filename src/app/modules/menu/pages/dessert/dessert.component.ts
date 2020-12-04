import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent implements OnInit {
  desserts: Product[];

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
			this.desserts = products.filter(product => product.category === 'dessert');
		})
	}

}
