import { TestBed, inject } from '@angular/core/testing';

import { UserIncidentFormService } from './user-incident-form.service';

describe('UserIncidentFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserIncidentFormService]
    });
  });

  it('should be created', inject([UserIncidentFormService], (service: UserIncidentFormService) => {
    expect(service).toBeTruthy();
  }));
});
