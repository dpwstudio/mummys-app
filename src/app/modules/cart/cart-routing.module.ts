import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { AuthGuard } from 'src/app/shared/guard/auth/auth.guard';
import { OrderCancelledComponent } from './pages/order-cancelled/order-cancelled.component';

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
    canActivate: [AuthGuard],
    data: {
      title: 'Livraison'
    }
  }, {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Paiement'
    }
  }, {
    path: 'payment-success',
    component: PaymentSuccessComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Confirmation du paiement'
    }
  }, {
    path: 'order-cancelled',
    component: OrderCancelledComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Commande annulé'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
