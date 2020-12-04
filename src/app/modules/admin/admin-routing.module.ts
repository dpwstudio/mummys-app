import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminGuard } from '../../shared/guard/admin/admin.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    data: {
      title: 'Dashboard'
    }
  }, {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AdminGuard],
    data: {
      title: 'Liste des commandes'
    }
  }, {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AdminGuard],
    data: {
      title: 'Liste des clients'
    }
  }, {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AdminGuard],
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
