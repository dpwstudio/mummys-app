import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'Mon panier'
    }
  }, {
    path: 'checkout',
    component: CartComponent,
    data: {
      title: 'Paiement'
    }
  }, {
    path: 'delivery',
    component: DeliveryComponent,
    data: {
      title: 'Livraison'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
