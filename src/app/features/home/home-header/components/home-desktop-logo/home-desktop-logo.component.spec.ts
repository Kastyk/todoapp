import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDesktopLogoComponent } from './home-desktop-logo.component';

describe('HomeDesktopLogoComponent', () => {
  let component: HomeDesktopLogoComponent;
  let fixture: ComponentFixture<HomeDesktopLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDesktopLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDesktopLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
