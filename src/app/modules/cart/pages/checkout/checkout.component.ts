import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { first } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart.model';
import { Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  carts: Cart[];
  loading = false;
  p: number = 1;
  numberPerPage = 6;
  currentUser: User;


  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x[0]);
  }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts() {
    this.carts = this.cartService.cartProductList;
    console.log('this.carts', this.carts);
  }

  getTotalTTC() {
    return this.carts.reduce((acc, product) => acc = acc + (product.price * product.quantity), 0)
  }

  paidWithCreditCard(carts) {
    this.loading = true;
    this.orderService.paidWithCreditCard(carts);
  }


}
