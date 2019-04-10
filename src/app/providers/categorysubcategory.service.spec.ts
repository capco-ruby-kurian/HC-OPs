import { TestBed, inject } from '@angular/core/testing';

import { CategorysubcategoryService } from './categorysubcategory.service';

describe('CategorysubcategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategorysubcategoryService]
    });
  });

  it('should be created', inject([CategorysubcategoryService], (service: CategorysubcategoryService) => {
    expect(service).toBeTruthy();
  }));
});
