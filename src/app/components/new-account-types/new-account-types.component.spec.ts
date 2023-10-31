import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountTypesComponent } from './new-account-types.component';

describe('NewAccountTypesComponent', () => {
  let component: NewAccountTypesComponent;
  let fixture: ComponentFixture<NewAccountTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAccountTypesComponent]
    });
    fixture = TestBed.createComponent(NewAccountTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
