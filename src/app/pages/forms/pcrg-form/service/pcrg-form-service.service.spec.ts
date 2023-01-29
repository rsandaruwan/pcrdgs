import { TestBed } from '@angular/core/testing';

import { PcrgFormServiceService } from './pcrg-form-service.service';

describe('PcrgFormServiceService', () => {
  let service: PcrgFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcrgFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
