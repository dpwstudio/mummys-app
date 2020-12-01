import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../../models/cart.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly notifier: NotifierService;
  cartProductList: Cart[] = [];

  constructor(
    private http: HttpClient,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({ name }) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, quantity: 1 }); // enhance "product" object with "quantity" property
      return;
    }
    productExistInCart.quantity += 1;
  }

  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name)
  }


}
