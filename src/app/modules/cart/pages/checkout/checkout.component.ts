import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  p: number = 1;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cartService: CartService  
  ) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      cardNumber: ["", Validators.required],
      fullName: ["", Validators.required],
      cardNumberExp: ["", Validators.required],
      cardNumberCVV: ["", Validators.required]
    });
    this.getCarts();
  }

  getCarts() {
    this.carts = this.cartService.cartProductList;
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
