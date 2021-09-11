import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HomeClientsComponent } from './components/home-clients/home-clients.component';

@NgModule({
	declarations: [HomeClientsComponent],
	imports: [CommonModule, NgxUsefulSwiperModule],
	exports: [HomeClientsComponent],
})
export class HomeClientsModule {}
