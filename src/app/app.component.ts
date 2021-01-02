import { Component, HostListener, OnInit } from '@angular/core';
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
	updateAvailable = false;
	deferredPrompt: any;
	showButton = false;

	constructor(
		private cartService: CartService,
		private sidebarService: SidebarService,
		private swUpdate: SwUpdate
	) {
	}

	ngOnInit() {
		if (this.swUpdate.isEnabled) {
			this.swUpdate.available.subscribe(() => {
				this.updateAvailable = true;
			})
		}
	}


	@HostListener('window:beforeinstallprompt', ['$event'])
	onbeforeinstallprompt(e: { preventDefault: () => void; }) {
		console.log(e);
		// Prevent Chrome 67 and earlier from automatically showing the prompt
		e.preventDefault();
		// Stash the event so it can be triggered later.
		this.deferredPrompt = e;
		this.showButton = true;
	}

	addToHomeScreen() {
		// hide our user interface that shows our A2HS button
		this.showButton = false;
		// Show the prompt
		this.deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		this.deferredPrompt.userChoice
			.then((choiceResult: { outcome: string; }) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the A2HS prompt');
				} else {
					console.log('User dismissed the A2HS prompt');
				}
				this.deferredPrompt = null;
			});
	}

	doUpdate() {
		this.updateAvailable = false;
		window.location.reload();
	}

	getTotalCurrentCart() {
		return this.cartService.cartProductList.length;
	}

	isSidebarVisible(): boolean {
		return this.sidebarService.isVisible;
	}
}
