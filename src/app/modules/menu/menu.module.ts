import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { EntreeComponent } from './pages/entree/entree.component';
import { PlatComponent } from './pages/plat/plat.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { BoissonComponent } from './pages/boisson/boisson.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';


@NgModule({
  declarations: [MenuComponent, EntreeComponent, PlatComponent, DessertComponent, ListProductsComponent, BoissonComponent, CategoriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule,
    LayoutModule,
    LazyLoadImageModule
  ],
  providers: [
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
})
export class MenuModule { }
