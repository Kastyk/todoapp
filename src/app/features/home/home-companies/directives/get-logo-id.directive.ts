import { Directive, ElementRef, HostListener } from '@angular/core';
import { LogoIdService } from '../services/logo-id.service';

@Directive({
	selector: '[tdaGetLogoId]',
})
export class GetLogoIdDirective {
	constructor(private el: ElementRef, private logoId: LogoIdService) {}

	@HostListener('click') getId(): void {
		const id = this.el.nativeElement.getAttribute('id');
		this.logoId.emitLogoId(id);
	}
}
