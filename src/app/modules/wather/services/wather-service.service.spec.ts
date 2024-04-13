import { TestBed } from '@angular/core/testing';

import { WatherService } from './wather-service.service';

describe('WatherServiceService', () => {
  let service: WatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
