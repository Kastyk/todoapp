import { Component } from '@angular/core';
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'tda-home-footer',
	templateUrl: './home-footer.component.html',
	styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent {
	faFacebookSquare = faFacebookSquare;

	faYoutube = faYoutube;

	faTwitter = faTwitter;

	faInstagram = faInstagram;
}
