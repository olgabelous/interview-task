import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffDetailsComponent } from './tariff-details.component';
import { MatCardModule } from '@angular/material/card';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { MOCK_TARIFFS } from '../../testing/test-mock';
import { Tariff } from '../../models/tariff';

fdescribe('TariffDetailsComponent', () => {
  let component: TariffDetailsComponent;
  let fixture: ComponentFixture<TariffDetailsComponent>;
  const mockTariff: Tariff = MOCK_TARIFFS[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffDetailsComponent, MatCardModule],
      providers: [
        provideRouter([]),
        provideLocationMocks(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffDetailsComponent);
    component = fixture.componentInstance;
    component.tariff = mockTariff;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display tariff name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const subtitle = compiled.querySelector('.tariff-title');
    expect(subtitle?.textContent).toContain(
      'Tariff 1'
    );
  });
});
