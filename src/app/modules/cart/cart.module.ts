import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { LayoutModule } from '../layout/layout.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ConfirmPaymentComponent } from './pages/confirm-payment/confirm-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CartComponent, CheckoutComponent, DeliveryComponent, ConfirmPaymentComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
    NgxPaginationModule,
  ]
})
export class CartModule { }
