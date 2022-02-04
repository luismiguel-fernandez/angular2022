import { TestBed } from '@angular/core/testing';

import { BdCochesService } from './bd-coches.service';

describe('BdCochesService', () => {
  let service: BdCochesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdCochesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
