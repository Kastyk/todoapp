import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LogoIdService {
	private logoId = new Subject();

	logoId$ = this.logoId.asObservable();

	emitLogoId(id: string): void {
		this.logoId.next(id);
	}
}
