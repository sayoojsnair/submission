import { TestBed } from '@angular/core/testing';

import { stdformService } from './stdform.service';

describe('stdformService', () => {
  let service: stdformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(stdformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
