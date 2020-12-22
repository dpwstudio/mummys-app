import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { Order } from '../../models/order.model';
import { AuthService } from '../auth/auth.service';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  currentUser: User;
  stripePromise = loadStripe(environment.stripeKeyTest);
  priceId = 'price_1HyQaZK20tky2hQ76CDu4gMy';
  priceId2 = 'price_1HyQc3K20tky2hQ71sVzCVVj';
  quantity = 1;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x[0]);
  }

  createOrder(order: Order) {
    console.log('order', order);
    return this.http.post(`${environment.mummysApi}/orders`, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get(`${environment.mummysApi}/orders`) as Observable<Order[]>;
  }

  editOrder(id, status) {
    console.log('id', id);
    return this.http.put(`${environment.mummysApi}/orders/${id}`, status);
  }

  deleteOrder(id) {
    return this.http.delete(`${environment.mummysApi}/orders/${id}`);
  }

  async paidWithCreditCard(carts) {
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
}
