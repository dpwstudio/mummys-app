import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ConfirmPaymentComponent } from './pages/confirm-payment/confirm-payment.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'Mon panier'
    }
  }, {
    path: 'delivery',
    component: DeliveryComponent,
    data: {
      title: 'Livraison'
    }
  }, {
    path: 'checkout',
    component: CheckoutComponent,
    data: {
      title: 'Paiement'
    }
  }, {
    path: 'confirm-payment',
    component: ConfirmPaymentComponent,
    data: {
      title: 'Confirmation du paiement'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
