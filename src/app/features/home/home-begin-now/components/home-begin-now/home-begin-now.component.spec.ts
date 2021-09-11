import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeginNowComponent } from './home-begin-now.component';

describe('HomeBeginNowComponent', () => {
	let component: HomeBeginNowComponent;
	let fixture: ComponentFixture<HomeBeginNowComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeBeginNowComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeBeginNowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
