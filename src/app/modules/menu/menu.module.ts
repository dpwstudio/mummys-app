import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { EntreeComponent } from './pages/entree/entree.component';
import { PlatComponent } from './pages/plat/plat.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { BoissonComponent } from './pages/boisson/boisson.component';


@NgModule({
  declarations: [MenuComponent, EntreeComponent, PlatComponent, DessertComponent, ListProductsComponent, BoissonComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    
  ]
})
export class MenuModule { }
