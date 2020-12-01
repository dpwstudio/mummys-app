import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from '../../../../shared/services/cart/cart.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  private readonly notifier: NotifierService;
  @Input() products: Product[];
  @Output() productAdded = new EventEmitter();
  closeResult = '';
  product: Product;

  constructor(
    private cartService: CartService,
    private modalService: NgbModal,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.getCart();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  goDetail(tmpl, product) {
    this.product = product;
    const modalRef = this.modalService.open(tmpl, {
      centered: true,
      size: 'lg',
    });
    modalRef.result.then(
      (result) => {
        console.log(result);
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  getCart() {
    return this.cartService.cartProductList;
  }

  addProductToCart(product) {
    this.cartService.addProductToCart(product);
    this.notifier.notify("success", `L'article a bien été ajouté au panier.`);
    this.modalService.dismissAll();
  }

}
