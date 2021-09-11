import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
	providedIn: 'root',
})
export class MobileNavService {
	private mobileNav: MatSidenav;

	public setMobileNav(mobileNav: MatSidenav) {
		this.mobileNav = mobileNav;
	}

	public toggle(): void {
		this.mobileNav.toggle();
	}
}
