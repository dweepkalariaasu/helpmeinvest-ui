import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingIraComponent } from './existing-ira.component';

describe('ExistingIraComponent', () => {
  let component: ExistingIraComponent;
  let fixture: ComponentFixture<ExistingIraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingIraComponent]
    });
    fixture = TestBed.createComponent(ExistingIraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
