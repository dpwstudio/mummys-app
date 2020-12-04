import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private readonly notifier: NotifierService;
  @Input() products: Product[];
  product: Product;
  p: number = 1;
  numberPerPage = 6;

  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  editProduct(id) {
    console.log('edit id', id);
  }

  deleteProductDialog(content, product) {
    this.product = product;
    this.modalService.open(content, { centered: true });
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).pipe(
      catchError(error => {
        this.notifier.notify('error', error.message)
        return throwError(error);
      })
    ).subscribe(result => {
      console.log('result', result)
      this.notifier.notify('success', 'Le produit a bien été supprimé.');
    });
    this.modalService.dismissAll();
  }

}
