import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart.model';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  private readonly notifier: NotifierService;
  p: number = 1;
  numberPerPage = 6;
  orders: Order[];
  ordersPending: number = 0;
  ordersDelivered: number = 0;
  ordersCancelled: number = 0;
  carts: Cart[];

  constructor(
    private modalService: NgbModal,
    private orderService: OrderService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.getOrders();
  }

  showDetail(content, carts) {
    this.carts = JSON.parse(carts);
    this.modalService.open(content, { centered: true });
  }

  getOrders() {
    this.orderService.getOrders().pipe(
      catchError(error => {
        return throwError(error)
      })
    ).subscribe(orders => {
      this.orders = orders.reverse();
      this.ordersPending = orders.filter(order => order.status === 'pending').length;
      this.ordersDelivered = orders.filter(order => order.status === 'delivered').length;
      this.ordersCancelled = orders.filter(order => order.status === 'cancelled').length;
    })
  }

  setOrderDelivered(id) {
    const status = {
      status: 'delivered'
    };
    this.orderService.editOrder(id, status).pipe(first()).subscribe(
      res => {
        this.getOrders()
        this.notifier.notify('success', 'La commande a bien été livré.')
      },
      error => {
        this.notifier.notify('error', error.message)
      });
  }

  setOrderCancelled(id) {
    const status = {
      status: 'cancelled'
    };
    this.orderService.editOrder(id, status).pipe(first()).subscribe(
      res => {
        this.getOrders()
        this.notifier.notify('success', 'La commande a bien été annulé.')
      },
      error => {
        this.notifier.notify('error', error.message)
      });
  }

  isPending(order) {
    return order.status === 'pending';
  }
}
