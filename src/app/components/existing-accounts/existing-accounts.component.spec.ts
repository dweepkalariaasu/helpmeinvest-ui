import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingAccountsComponent } from './existing-accounts.component';

describe('ExistingAccountsComponent', () => {
  let component: ExistingAccountsComponent;
  let fixture: ComponentFixture<ExistingAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingAccountsComponent]
    });
    fixture = TestBed.createComponent(ExistingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
