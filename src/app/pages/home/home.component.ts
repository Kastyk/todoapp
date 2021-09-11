import { Component, OnInit, ViewChild, Inject, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MobileNavService } from '@features/home/home-header/services/mobile-nav.service';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'tda-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	@ViewChild('tdaMobileNav', { static: true }) tdaMobileNav: MatSidenav;

	constructor(
		private mobileNavService: MobileNavService,
		@Inject(DOCUMENT) private document: Document,
		private renderer: Renderer2
	) {}

	ngOnInit(): void {
		this.mobileNavService.setMobileNav(this.tdaMobileNav);
	}

	openMobileNav(): void {
		this.renderer.setStyle(this.document.body, 'overflow-y', 'hidden');
	}

	closeMobileNav(): void {
		this.renderer.setStyle(this.document.body, 'overflow-y', 'visible');
	}
}
