import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { Order } from '../../models/order.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  currentUser: User;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  createOrder(order: Order) {
    console.log('order', order);
    return this.http.post(`${environment.mummysApi}/orders`, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get(`${environment.mummysApi}/orders`) as Observable<Order[]>;
  }

  editOrder(id, status) {
    console.log('id', id);
    return this.http.put(`${environment.mummysApi}/orders/${id}`, status);
  }

  deleteOrder(id) {
    return this.http.delete(`${environment.mummysApi}/orders/${id}`);
  }
}
