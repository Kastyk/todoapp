import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgsRevealModule } from 'ng-scrollreveal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeCompaniesComponent } from './components/home-companies/home-companies.component';
import { HomeCompaniesLogosComponent } from './components/home-companies-logos/home-companies-logos.component';
import { HomeCompaniesOpinionsComponent } from './components/home-companies-opinions/home-companies-opinions.component';
import { GetLogoIdDirective } from './directives/get-logo-id.directive';

@NgModule({
	declarations: [
		HomeCompaniesComponent,
		HomeCompaniesLogosComponent,
		HomeCompaniesOpinionsComponent,
		GetLogoIdDirective,
	],
	imports: [CommonModule, NgsRevealModule, FontAwesomeModule],
	exports: [HomeCompaniesComponent],
})
export class HomeCompaniesModule {}
