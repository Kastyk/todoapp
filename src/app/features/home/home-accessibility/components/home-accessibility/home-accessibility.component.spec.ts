import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccessibilityComponent } from './home-accessibility.component';

describe('HomeAccessibilityComponent', () => {
	let component: HomeAccessibilityComponent;
	let fixture: ComponentFixture<HomeAccessibilityComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeAccessibilityComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeAccessibilityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
