import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ButtonComponent } from './button/button.component';
import { ReversedButtonComponent } from './reversed-button/reversed-button.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@NgModule({
	declarations: [IconButtonComponent, ButtonComponent, ReversedButtonComponent, PrimaryButtonComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule],
	exports: [IconButtonComponent, ButtonComponent, ReversedButtonComponent, PrimaryButtonComponent],
})
export class TdaButtonsModule {}
