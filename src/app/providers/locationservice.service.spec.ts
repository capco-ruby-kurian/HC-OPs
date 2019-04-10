import { TestBed, inject } from '@angular/core/testing';

import { LocationserviceService } from './locationservice.service';

describe('LocationserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationserviceService]
    });
  });

  it('should be created', inject([LocationserviceService], (service: LocationserviceService) => {
    expect(service).toBeTruthy();
  }));
});
