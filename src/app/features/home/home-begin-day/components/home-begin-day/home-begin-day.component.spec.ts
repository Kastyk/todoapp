import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeginDayComponent } from './home-begin-day.component';

describe('HomeBeginDayComponent', () => {
  let component: HomeBeginDayComponent;
  let fixture: ComponentFixture<HomeBeginDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBeginDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeginDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
