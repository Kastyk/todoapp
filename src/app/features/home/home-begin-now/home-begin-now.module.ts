import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgsRevealModule } from 'ng-scrollreveal';
import { TdaButtonsModule } from '@shared/tda-buttons/tda-buttons.module';
import { HomeBeginNowComponent } from './components/home-begin-now/home-begin-now.component';

@NgModule({
	declarations: [HomeBeginNowComponent],
	imports: [CommonModule, NgsRevealModule, TdaButtonsModule],
	exports: [HomeBeginNowComponent],
})
export class HomeBeginNowModule {}
