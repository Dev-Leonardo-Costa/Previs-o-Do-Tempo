import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatherHomeComponent } from './wather-home.component';

describe('WatherHomeComponent', () => {
  let component: WatherHomeComponent;
  let fixture: ComponentFixture<WatherHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatherHomeComponent]
    });
    fixture = TestBed.createComponent(WatherHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
