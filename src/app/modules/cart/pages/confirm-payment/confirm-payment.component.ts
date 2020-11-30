import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {
  currentUser: User;

  constructor(
    private authService: AuthService,
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit(): void {
  }

}
