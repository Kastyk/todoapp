import { TestBed } from '@angular/core/testing';

import { LogoIdService } from './logo-id.service';

describe('LogoIdService', () => {
	let service: LogoIdService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LogoIdService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
