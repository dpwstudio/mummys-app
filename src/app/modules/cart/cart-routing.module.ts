import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ConfirmPaymentComponent } from './pages/confirm-payment/confirm-payment.component';
import { AuthGuard } from 'src/app/shared/guard/auth/auth.guard';

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
    path: 'confirm-payment',
    component: ConfirmPaymentComponent,
    canActivate: [AuthGuard],
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
