import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {
  currentUser: User;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit(): void {
    this.cartService.removeCart();
  }

}
