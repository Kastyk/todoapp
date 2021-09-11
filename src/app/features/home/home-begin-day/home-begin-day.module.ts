import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdaButtonsModule } from '@shared/tda-buttons/tda-buttons.module';
import { HomeBeginDayComponent } from './components/home-begin-day/home-begin-day.component';

@NgModule({
	declarations: [HomeBeginDayComponent],
	imports: [CommonModule, TdaButtonsModule],
	exports: [HomeBeginDayComponent],
})
export class HomeBeginDayModule {}
