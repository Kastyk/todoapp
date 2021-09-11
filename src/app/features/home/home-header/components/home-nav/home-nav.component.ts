import { Component } from '@angular/core';
import { MobileNavService } from '@features/home/home-header/services/mobile-nav.service';

@Component({
	selector: 'tda-home-nav',
	templateUrl: './home-nav.component.html',
	styleUrls: ['./home-nav.component.scss'],
})
export class HomeNavComponent {
	constructor(private mobileNavService: MobileNavService) {}

	menuToggle(): void {
		this.mobileNavService.toggle();
	}
}
