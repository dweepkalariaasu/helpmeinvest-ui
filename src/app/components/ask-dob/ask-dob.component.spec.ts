import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskDobComponent } from './ask-dob.component';

describe('AskDobComponent', () => {
  let component: AskDobComponent;
  let fixture: ComponentFixture<AskDobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskDobComponent]
    });
    fixture = TestBed.createComponent(AskDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
