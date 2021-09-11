import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdaButtonsModule } from '@shared/tda-buttons/tda-buttons.module';
import { HomeAccessibilityComponent } from './components/home-accessibility/home-accessibility.component';

@NgModule({
	declarations: [HomeAccessibilityComponent],
	imports: [CommonModule, TdaButtonsModule],
	exports: [HomeAccessibilityComponent],
})
export class HomeAccessibilityModule {}
