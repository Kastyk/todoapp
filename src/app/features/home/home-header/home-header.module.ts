import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TdaButtonsModule } from '@shared/tda-buttons/tda-buttons.module';
import { TdaMobileLogoModule } from '@shared/tda-mobile-logo/tda-mobile-logo.module';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeDesktopLogoComponent } from './components/home-desktop-logo/home-desktop-logo.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { HomeMobileNavComponent } from './components/home-mobile-nav/home-mobile-nav.component';

@NgModule({
	declarations: [HomeHeaderComponent, HomeDesktopLogoComponent, HomeNavComponent, HomeMobileNavComponent],
	imports: [CommonModule, MatToolbarModule, TdaButtonsModule, TdaMobileLogoModule],
	exports: [HomeHeaderComponent, HomeMobileNavComponent],
})
export class HomeHeaderModule {}
