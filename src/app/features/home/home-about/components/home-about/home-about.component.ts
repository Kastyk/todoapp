import { Component } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'tda-home-about',
	templateUrl: './home-about.component.html',
	styleUrls: ['./home-about.component.scss'],
})
export class HomeAboutComponent {
	faLongArrowAltRight = faLongArrowAltRight;

	animateLeft: any = { mobile: false, reset: true, duration: 1000, origin: 'left' };

	animateRight: any = { mobile: false, reset: true, duration: 1000, origin: 'right' };
}
