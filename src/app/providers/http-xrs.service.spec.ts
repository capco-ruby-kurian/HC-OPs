import { TestBed, inject } from '@angular/core/testing';

import { HttpXrsService } from './http-xrs.service';

describe('HttpXrsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpXrsService]
    });
  });

  it('should be created', inject([HttpXrsService], (service: HttpXrsService) => {
    expect(service).toBeTruthy();
  }));
});
