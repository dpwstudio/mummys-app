import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  carts: Cart[];
  loading = false;
  checkoutForm: FormGroup;

  constructor(
    private router: Router,
    private cartService: CartService  
  ) { }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts() {
    this.carts = this.cartService.currentCartValue;
    console.log('this.carts', this.carts);
  }

  getTotalTTC() {
    return this.carts.reduce((acc, order) => acc = acc + order.price, 0)
  }

  paidWithCreditCard() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/confirm-payment'])
    }, 5000)
  }

  onSubmit() {
    console.log('test');
  }
}
