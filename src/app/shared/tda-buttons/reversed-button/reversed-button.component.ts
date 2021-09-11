import { Component, Input } from '@angular/core';

@Component({
	selector: 'tda-reversed-button',
	templateUrl: './reversed-button.component.html',
	styleUrls: ['./reversed-button.component.scss'],
})
export class ReversedButtonComponent {
	@Input() full: string;

	@Input() text: string;

	@Input() label: string;

	constructor() {
		this.text = 'Zaloguj się';
	}
}
