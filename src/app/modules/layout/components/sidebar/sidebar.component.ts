import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private readonly notifier: NotifierService;
  currentUser: User;
  currentCart: Cart[];

  constructor(
    private router: Router,
    public authService: AuthService,
    private cartService: CartService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.currentUser;
  }
  
  isAdmin() {
    if (this.isLoggedIn()) {
      return this.currentUser[0].role === 'admin';
    }
  }

  getTotalCurrentCart() {
    return this.cartService.cartProductList.length;
  }

  logout() {
    this.authService.logout();
    this.notifier.notify('success', 'Vous êtes déconnecté')
    this.router.navigate(["/login"]);
  }

}
