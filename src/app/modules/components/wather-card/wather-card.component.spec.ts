import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatherCardComponent } from './wather-card.component';

describe('WatherCardComponent', () => {
  let component: WatherCardComponent;
  let fixture: ComponentFixture<WatherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatherCardComponent]
    });
    fixture = TestBed.createComponent(WatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
