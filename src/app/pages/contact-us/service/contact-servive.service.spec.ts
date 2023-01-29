import { TestBed } from '@angular/core/testing';

import { ContactServiveService } from './contact-servive.service';

describe('ContactServiveService', () => {
  let service: ContactServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
