import { TestBed } from '@angular/core/testing';

import { StateInfoService } from './state-info.service';

describe('StateInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateInfoService = TestBed.get(StateInfoService);
    expect(service).toBeTruthy();
  });
});
