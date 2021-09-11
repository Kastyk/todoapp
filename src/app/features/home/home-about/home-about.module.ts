import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgsRevealModule } from 'ng-scrollreveal';
import { HomeAboutComponent } from './components/home-about/home-about.component';

@NgModule({
	declarations: [HomeAboutComponent],
	imports: [CommonModule, FontAwesomeModule, NgsRevealModule],
	exports: [HomeAboutComponent],
})
export class HomeAboutModule {}
