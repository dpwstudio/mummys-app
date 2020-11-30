import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { LayoutModule } from '../layout/layout.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';


@NgModule({
  declarations: [CartComponent, CheckoutComponent, DeliveryComponent],
  imports: [
    CommonModule,
    LayoutModule,
    CartRoutingModule
  ]
})
export class CartModule { }
