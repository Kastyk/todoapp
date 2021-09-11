import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompaniesLogosComponent } from './home-companies-logos.component';

describe('HomeCompaniesLogosComponent', () => {
	let component: HomeCompaniesLogosComponent;
	let fixture: ComponentFixture<HomeCompaniesLogosComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeCompaniesLogosComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeCompaniesLogosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
