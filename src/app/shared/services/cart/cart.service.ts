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
  currentCartSubject$: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([]);

  constructor(
    private http: HttpClient,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  public get currentCartValue(): Cart[] {
    return this.currentCartSubject$.getValue();
  }

  addToCart(dataObj) {
    const updatedValue = [...this.currentCartValue, dataObj];
    this.currentCartSubject$.next(updatedValue);
    this.notifier.notify("success", `L'article a bien été ajouté au panier.`);
  }


}
