import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversedButtonComponent } from './reversed-button.component';

describe('ReversedButtonComponent', () => {
	let component: ReversedButtonComponent;
	let fixture: ComponentFixture<ReversedButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ReversedButtonComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ReversedButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
