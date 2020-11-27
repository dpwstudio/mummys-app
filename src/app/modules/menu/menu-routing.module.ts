import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoissonComponent } from './pages/boisson/boisson.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { EntreeComponent } from './pages/entree/entree.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PlatComponent } from './pages/plat/plat.component';

const routes: Routes = [{
  path: 'menus',
  component: MenuComponent,
  data: {
    title: 'Menu'
  }
}, {
  path: 'entrees',
  component: EntreeComponent,
  data: {
    title: 'Entrées'
  }
}, {
  path: 'plats',
  component: PlatComponent,
  data: {
    title: 'Plats'
  }
}, {
  path: 'desserts',
  component: DessertComponent,
  data: {
    title: 'Desserts'
  }
}, {
  path: 'boissons',
  component: BoissonComponent,
  data: {
    title: 'Boissons'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
