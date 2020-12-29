import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { CartService } from './shared/services/cart/cart.service';
import { SidebarService } from './shared/services/sidebar/sidebar.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'mummys-app';

	constructor(
		private cartService: CartService,
		private sidebarService: SidebarService,
		private swUpdate: SwUpdate
	) {
	}

	ngOnInit() {
		if (this.swUpdate.isEnabled) {
			this.swUpdate.available.subscribe(() => {
				if (confirm("New version available. Load New Version?")) {
					window.location.reload();
				}
			});
		}
	}

	getTotalCurrentCart() {
		return this.cartService.cartProductList.length;
	}

	isSidebarVisible(): boolean {
		return this.sidebarService.isVisible;
	}
}
