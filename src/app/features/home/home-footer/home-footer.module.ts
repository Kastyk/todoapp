import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdaMobileLogoModule } from '@shared/tda-mobile-logo/tda-mobile-logo.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

@NgModule({
	declarations: [HomeFooterComponent],
	imports: [CommonModule, TdaMobileLogoModule, FontAwesomeModule],
	exports: [HomeFooterComponent],
})
export class HomeFooterModule {}
