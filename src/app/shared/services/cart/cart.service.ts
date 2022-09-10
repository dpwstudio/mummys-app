import { Injectable } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProductList: Cart[] = [];

  constructor() {
    const tmpCart = JSON.parse(localStorage.getItem('tmpCart'));
    if (!tmpCart) {
      localStorage.setItem('tmpCart', JSON.stringify([]));
    }
    this.cartProductList = JSON.parse(localStorage.getItem('tmpCart'));
  }

  getTotalCurrentCart() {
    return this.cartProductList.length;
  }

  addProductToCart(product: Cart) {
    if (this.cartProductList) {
      const productExistInCart = this.productInCart(product);
      if (!productExistInCart) {
        this.cartProductList.push(product);
        this.saveCart(this.cartProductList);
      } else {
        this.cartProductList.map(product => this.productInCart(product));
        this.saveCart(this.cartProductList);
      }
    }
  }

  productInCart(product: Cart): boolean {
    return this.cartProductList.findIndex(o => o.id === product.id) > -1;
  }


  saveCart(productsList: Cart[]): void {
    localStorage.setItem('tmpCart', JSON.stringify(productsList));
  }

  removeProduct(product: any) {
    this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name);
  }

  removeCart() {
    localStorage.setItem('tmpCart', JSON.stringify([]));
    this.cartProductList = JSON.parse(localStorage.getItem('tmpCart') as string);
  }


}
