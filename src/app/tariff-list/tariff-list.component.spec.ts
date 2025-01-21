import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TariffListComponent } from './tariff-list.component';
import { TariffService } from '../services/tariff.service';
import { Tariff } from '../models/tariff';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MOCK_TARIFFS } from '../testing/test-mock';

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;
  let httpTestingController: HttpTestingController;
  let tariffService: TariffService;

  const mockTariffs: Tariff[] = MOCK_TARIFFS;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatSelectModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(), // Enable HttpClientTesting
        provideAnimations(), 
        TariffService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController); 
    tariffService = TestBed.inject(TariffService);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verify that no unexpected HTTP calls were made
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch tariffs on initialization', () => {
    fixture.detectChanges(); // Trigger ngOnInit

    const req = httpTestingController.expectOne('/mocks/mock-data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockTariffs);

    expect(component.tariffs()).toEqual(mockTariffs); // Verify that tariffs were set correctly
  });

  it('should sort tariffs by download speed ascending', () => {
    component.tariffs.set(mockTariffs);
    component.sortOrder.set('download-asc'); 

    const sorted = component.sortedTariffs();
    expect(sorted.map(el => el.download)).toEqual([50, 75, 100]);
  });

  it('should sort tariffs by price descending', () => {
    component.tariffs.set(mockTariffs); 
    component.sortOrder.set('price-desc');

    const sorted = component.sortedTariffs();
    expect(sorted.map(el => el.price)).toEqual([200, 150, 100]);
  });
});
