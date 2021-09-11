import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
	selector: 'tda-home-clients',
	templateUrl: './home-clients.component.html',
	styleUrls: ['./home-clients.component.scss'],
})
export class HomeClientsComponent {
	config: SwiperOptions = {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
		},
		speed: 1000,
	};
}
