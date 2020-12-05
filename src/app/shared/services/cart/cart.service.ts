import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Cart } from '../../models/cart.model';

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
    const tmpCart = JSON.parse(localStorage.getItem('tmpCart'));
    if (!tmpCart) {
      localStorage.setItem('tmpCart', JSON.stringify([]));
    }
    this.cartProductList = JSON.parse(localStorage.getItem('tmpCart'));
  }

  getTotalCurrentCart() {
    return this.cartProductList.length;
  }

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({ name }) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({ ...product }); // enhance "product" object with "quantity" property
      localStorage.setItem('tmpCart', JSON.stringify(this.cartProductList));
      return;
    }
    productExistInCart.quantity += 1;
    localStorage.setItem('tmpCart', JSON.stringify(productExistInCart));
  }

  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name);
  }


}
