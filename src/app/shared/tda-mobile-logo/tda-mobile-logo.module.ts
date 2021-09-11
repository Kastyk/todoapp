import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileLogoComponent } from './mobile-logo/mobile-logo.component';

@NgModule({
	declarations: [MobileLogoComponent],
	imports: [CommonModule],
	exports: [MobileLogoComponent],
})
export class TdaMobileLogoModule {}
