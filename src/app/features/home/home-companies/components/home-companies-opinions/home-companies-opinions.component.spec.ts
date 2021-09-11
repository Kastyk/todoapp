import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompaniesOpinionsComponent } from './home-companies-opinions.component';

describe('HomeCompaniesOpinionsComponent', () => {
  let component: HomeCompaniesOpinionsComponent;
  let fixture: ComponentFixture<HomeCompaniesOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompaniesOpinionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompaniesOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
