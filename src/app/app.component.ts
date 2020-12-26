import { Component } from '@angular/core';
import { CartService } from './shared/services/cart/cart.service';
import { SidebarService } from './shared/services/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mummys-app';

  constructor(
    private cartService: CartService,
    private sidebarService: SidebarService
  ) {
  }

  getTotalCurrentCart() {
    return this.cartService.cartProductList.length;
  }

  isSidebarVisible(): boolean {
    return this.sidebarService.isVisible;
  }
}
