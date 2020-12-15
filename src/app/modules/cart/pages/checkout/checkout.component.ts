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
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private readonly notifier: NotifierService;
  carts: Cart[];
  loading = false;
  checkoutForm: FormGroup;
  p: number = 1;
  order: Order;
  currentUser: User;
  stripePromise = loadStripe(environment.stripeKeyTest);
  priceId = 'price_1HyQaZK20tky2hQ76CDu4gMy';
  priceId2 = 'price_1HyQc3K20tky2hQ71sVzCVVj';
  quantity = 1;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
    this.authService.currentUser.subscribe(x => this.currentUser = x[0]);
  }

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
    return this.carts.reduce((acc, product) => acc = acc + (product.price * product.quantity), 0)
  }

  createOrders(carts) {
    const { id, firstname, lastname, address, zipcode, city } = this.currentUser;
    this.order = {
      clientName: firstname + ' ' + lastname,
      localization: address + ' ' + zipcode + ' ' + city,
      total: this.getTotalTTC(),
      carts: JSON.stringify(carts),
      status: 'pending',
      userId: id
    }
    this.orderService.createOrder(this.order).pipe(first())
      .subscribe(
        res => {
          this.router.navigate(['/payment-success']);
          this.cartService.removeCart();
          this.loading = false;
        },
        error => {
          this.notifier.notify('error', error.message)
          this.loading = false;
        });
  }

  async paidWithCreditCard(carts) {
    console.log('carts', carts)
    console.log('window.location.href', window.location.origin)
    
    // Call your backend to create the Checkout session.
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      customerEmail: this.currentUser.email,
      lineItems: [{ price: this.priceId, quantity: this.quantity }, { price: this.priceId2, quantity: this.quantity }],
      successUrl: `${window.location.origin}/#/payment-success`,
      cancelUrl: `${window.location.origin}/#/order-cancelled`,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.log(error);
    }
  }

  onSubmit() {
    console.log('test');
  }
}
