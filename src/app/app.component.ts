import { Component } from '@angular/core';
import { CartService } from './shared/services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mummys-app';

  constructor(private cartService: CartService) {
  }

  getTotalCurrentCart() {
    return this.cartService.currentCartValue.length;
  }

}
