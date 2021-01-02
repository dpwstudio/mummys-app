import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart.model';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private readonly notifier: NotifierService;
  p: number = 1;
  numberPerPage = 6;
  orders: Order[];
  totalOrders: number = 0;
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
      this.totalOrders = orders.reduce((acc, order) => {
        return acc = acc + order.total;
      }, 0);
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

}
