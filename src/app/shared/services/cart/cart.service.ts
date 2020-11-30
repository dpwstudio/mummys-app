import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../../models/cart.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentCartSubject$: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([]);

  constructor(private http: HttpClient) {
  }

  public get currentCartValue(): Cart[] {
    return this.currentCartSubject$.getValue();
  }

  addToCart(dataObj) {
    const updatedValue = [...this.currentCartValue, dataObj];
    this.currentCartSubject$.next(updatedValue);
  }


}
