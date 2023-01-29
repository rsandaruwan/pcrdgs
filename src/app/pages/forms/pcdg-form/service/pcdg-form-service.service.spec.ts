import { TestBed } from '@angular/core/testing';

import { PcdgFormServiceService } from './pcdg-form-service.service';

describe('PcdgFormServiceService', () => {
  let service: PcdgFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcdgFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
