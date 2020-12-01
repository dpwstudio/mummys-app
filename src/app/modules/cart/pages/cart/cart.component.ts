import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: Cart[];
  p: number = 1;
  currentCart: Cart[];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts() {
    this.carts = this.cartService.cartProductList;
  }

  getTotalTTC() {
    return this.carts.reduce((acc, order) => acc = acc + order.price, 0)
  }

}
