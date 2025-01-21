import { TestBed } from '@angular/core/testing';

import { TariffService } from './tarif.service';

describe('TarifService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
