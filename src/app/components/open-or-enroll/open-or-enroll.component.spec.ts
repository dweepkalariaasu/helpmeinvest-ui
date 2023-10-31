import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrEnrollComponent } from './open-or-enroll.component';

describe('OpenOrEnrollComponent', () => {
  let component: OpenOrEnrollComponent;
  let fixture: ComponentFixture<OpenOrEnrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenOrEnrollComponent]
    });
    fixture = TestBed.createComponent(OpenOrEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
