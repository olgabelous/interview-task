import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TariffService } from './tariff.service';
import { Tariff } from '../models/tariff'; // Adjust the path to your Tariff interface
import { MOCK_TARIFFS } from '../testing/test-mock';

describe('TariffService', () => {
  let service: TariffService;
  let httpTestingController: HttpTestingController;

  const mockTariffs: Tariff[] = MOCK_TARIFFS;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), 
        provideHttpClientTesting(), 
        TariffService, 
      ],
    });
    service = TestBed.inject(TariffService); 
    httpTestingController = TestBed.inject(HttpTestingController); // Inject HttpTestingController
  });

  afterEach(() => {
    httpTestingController.verify(); // No unexpected HTTP calls were made
  });

  it('should retrieve tariffs from the API', () => {
    // Call the service
    service.getTariffs().subscribe((tariffs) => {
      expect(tariffs).toEqual(mockTariffs); // Returned data matches the mock data
    });

    // Mock the HTTP request
    const req = httpTestingController.expectOne('/mocks/mock-data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockTariffs);
  });
});
