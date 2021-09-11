import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMobileNavComponent } from './home-mobile-nav.component';

describe('HomeMobileNavComponent', () => {
	let component: HomeMobileNavComponent;
	let fixture: ComponentFixture<HomeMobileNavComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeMobileNavComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeMobileNavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
