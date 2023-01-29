import { TestBed } from '@angular/core/testing';

import { CcebdmServiceService } from './ccebdm-service.service';

describe('CcebdmServiceService', () => {
  let service: CcebdmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcebdmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
