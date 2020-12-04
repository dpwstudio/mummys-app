import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  }, {
    path: 'orders',
    component: OrdersComponent,
    data: {
      title: 'Liste des commandes'
    }
  }, {
    path: 'clients',
    component: ClientsComponent,
    data: {
      title: 'Liste des clients'
    }
  }, {
    path: 'products',
    component: ProductsComponent,
    data: {
      title: 'Liste des produits'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
