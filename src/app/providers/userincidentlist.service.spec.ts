import { TestBed, inject } from '@angular/core/testing';

import { UserincidentlistService } from './userincidentlist.service';

describe('UserincidentlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserincidentlistService]
    });
  });

  it('should be created', inject([UserincidentlistService], (service: UserincidentlistService) => {
    expect(service).toBeTruthy();
  }));
});
