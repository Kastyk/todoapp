import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'tda-primary-button',
	templateUrl: './primary-button.component.html',
	styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
	@ViewChild('primaryButton', { static: true }) primaryButton: TemplateRef<any>;

	@ViewChild('fullPrimaryButton', { static: true }) fullPrimaryButton: TemplateRef<any>;

	@Input() full: boolean;

	@Input() text: string;

	@Input() label: string;

	constructor() {
		this.text = 'Zacznij teraz';
	}

	configButtonWidth(full: boolean): TemplateRef<any> {
		if (full) {
			return this.fullPrimaryButton;
		}
		return this.primaryButton;
	}
}
