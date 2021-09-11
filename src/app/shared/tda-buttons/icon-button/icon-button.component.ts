import { Component, Input } from '@angular/core';

@Component({
	selector: 'tda-icon-button',
	templateUrl: './icon-button.component.html',
	styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
	@Input() label: string;
}
