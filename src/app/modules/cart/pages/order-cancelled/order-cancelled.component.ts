import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-order-cancelled',
  templateUrl: './order-cancelled.component.html',
  styleUrls: ['./order-cancelled.component.scss']
})
export class OrderCancelledComponent implements OnInit {
  currentUser: User;

  constructor(
    private authService: AuthService,
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit() {
    
  }

}
