import { Component, ViewChild, TemplateRef, Renderer2, ElementRef } from '@angular/core';
import { LogoIdService } from '@features/home/home-companies/services/logo-id.service';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'tda-home-companies-opinions',
	templateUrl: './home-companies-opinions.component.html',
	styleUrls: ['./home-companies-opinions.component.scss'],
})
export class HomeCompaniesOpinionsComponent {
	faQuoteRight = faQuoteRight;

	@ViewChild('casterra', { static: true }) casterra: TemplateRef<any>;

	@ViewChild('eldlina', { static: true }) eldlina: TemplateRef<any>;

	@ViewChild('gamehacker', { static: true }) gamehacker: TemplateRef<any>;

	@ViewChild('gismondo', { static: true }) gismondo: TemplateRef<any>;

	@ViewChild('ittrends', { static: true }) ittrends: TemplateRef<any>;

	@ViewChild('marshale', { static: true }) marshale: TemplateRef<any>;

	@ViewChild('mkspb', { static: true }) mkspb: TemplateRef<any>;

	@ViewChild('theverde', { static: true }) theverde: TemplateRef<any>;

	@ViewChild('opinionsContent', { static: true }) opinionsContent: ElementRef<any>;

	id: any;

	constructor(private logoId: LogoIdService, private renderer: Renderer2) {
		this.logoId.logoId$.subscribe((id) => {
			this.id = id;
		});
	}

	changeOpinion(id: any): any {
		switch (id) {
			case 'casterra':
				return this.casterra;
			case 'eldlina':
				return this.eldlina;
			case 'gamehacker':
				return this.gamehacker;
			case 'gismondo':
				return this.gismondo;
			case 'ittrends':
				return this.ittrends;
			case 'marshale':
				return this.marshale;
			case 'mkspb':
				return this.mkspb;
			case 'theverde':
				return this.theverde;
			default:
				return this.casterra;
		}
	}
}
