import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossIncomeComponent } from './gross-income.component';

describe('GrossIncomeComponent', () => {
  let component: GrossIncomeComponent;
  let fixture: ComponentFixture<GrossIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrossIncomeComponent]
    });
    fixture = TestBed.createComponent(GrossIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
