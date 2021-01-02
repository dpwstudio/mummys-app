import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { first } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart.model';
import { Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { EmailService } from 'src/app/shared/services/email/email.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit, AfterViewInit {
  private readonly notifier: NotifierService;
  currentUser: User;
  carts: Cart[];
  order: Order;


  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService,
    private emailService: EmailService,
    private cdRef: ChangeDetectorRef,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
    this.authService.currentUser.subscribe(x => this.currentUser = x[0]);
  }

  ngOnInit(): void {
    this.getCarts();
    this.createOrders(this.carts);
  }

  getCarts() {
    this.carts = this.cartService.cartProductList;
  }

  getTotalTTC() {
    return this.carts.reduce((acc, product) => acc = acc + (product.price * product.quantity), 0)
  }

  createOrders(carts) {
    const { id, firstname, email, lastname, address, zipcode, city } = this.currentUser;
    if (carts.length > 0) {
      this.order = {
        clientName: firstname + ' ' + lastname,
        email: email,
        localization: address + ' ' + zipcode + ' ' + city,
        total: this.getTotalTTC(),
        carts: JSON.stringify(carts),
        status: 'pending',
        userId: id
      }
      this.orderService.createOrder(this.order).pipe(first())
        .subscribe(
          res => {
            this.notifier.notify('success', 'Votre paiement a été accepté.');
            this.emailService.sendEmailToNewOrder(this.order).subscribe(data => console.log('data', data));
            this.cartService.removeCart();
          },
          error => {
            this.notifier.notify('error', error.message)
          });
    } else {
      this.notifier.notify('error', 'Votre panier est vide.')
    }
  }

  ngAfterViewInit() {
    this.authService.currentUser.subscribe(x => this.currentUser = x[0]);
    this.cdRef.detectChanges();
  }

}
