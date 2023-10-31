import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouClientComponent } from './are-you-client.component';

describe('AreYouClientComponent', () => {
  let component: AreYouClientComponent;
  let fixture: ComponentFixture<AreYouClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreYouClientComponent]
    });
    fixture = TestBed.createComponent(AreYouClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
