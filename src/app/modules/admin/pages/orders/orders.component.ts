import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  p: number = 1;
  numberPerPage = 6;
  orders: Order[];

  constructor(
    private modalService: NgbModal,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  showDetail(content) {
    this.modalService.open(content, { centered: true });
  }

  getProducts() {
    this.orderService.getOrders().pipe(
      catchError(error => {
        return throwError(error)
      })
    ).subscribe(orders => {
      this.orders = orders;
    })
  }

  orderDelivered(order) {
    console.log('order', order);
  }

  orderCancelled(order) {
    console.log('order', order);
  }


}
