import { TestBed, inject } from '@angular/core/testing';

import { IncattachmentService } from './incattachment.service';

describe('IncattachmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncattachmentService]
    });
  });

  it('should be created', inject([IncattachmentService], (service: IncattachmentService) => {
    expect(service).toBeTruthy();
  }));
});
