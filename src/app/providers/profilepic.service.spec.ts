import { TestBed, inject } from '@angular/core/testing';

import { ProfilepicService } from './profilepic.service';

describe('ProfilepicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilepicService]
    });
  });

  it('should be created', inject([ProfilepicService], (service: ProfilepicService) => {
    expect(service).toBeTruthy();
  }));
});