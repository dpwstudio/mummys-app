import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.scss']
})
export class EntreeComponent implements OnInit {
  starters: Product[];

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
			this.starters = products.filter(product => product.category === 'entree');
		})
	}
}
