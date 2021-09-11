import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeAboutModule } from '@features/home/home-about/home-about.module';
import { HomeAccessibilityModule } from '@features/home/home-accessibility/home-accessibility.module';
import { HomeBeginNowModule } from '@features/home/home-begin-now/home-begin-now.module';
import { HomeClientsModule } from '@features/home/home-clients/home-clients.module';
import { HomeCompaniesModule } from '@features/home/home-companies/home-companies.module';
import { HomeFooterModule } from '@features/home/home-footer/home-footer.module';
import { HomeHeaderModule } from '@features/home/home-header/home-header.module';
import { HomeBeginDayModule } from '@features/home/home-begin-day/home-begin-day.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MatSidenavModule,
		HomeAboutModule,
		HomeAccessibilityModule,
		HomeBeginNowModule,
		HomeClientsModule,
		HomeCompaniesModule,
		HomeFooterModule,
		HomeHeaderModule,
		HomeBeginDayModule,
	],
})
export class HomeModule {}
