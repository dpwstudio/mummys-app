import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { LayoutModule } from '../layout/layout.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ConfirmPaymentComponent } from './pages/confirm-payment/confirm-payment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CartComponent, CheckoutComponent, DeliveryComponent, ConfirmPaymentComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    CartRoutingModule
  ]
})
export class CartModule { }
