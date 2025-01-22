import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffDetailsComponent } from './tariff-details.component';
import { MatCardModule } from '@angular/material/card';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';

describe('TariffDetailsComponent', () => {
  let component: TariffDetailsComponent;
  let fixture: ComponentFixture<TariffDetailsComponent>;
  const tariffId = 1234;

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
    // Set the required input
    fixture.componentRef.setInput('tariffId', tariffId);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the provided tariffId', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const subtitle = compiled.querySelector('mat-card-subtitle p');
    expect(subtitle?.textContent).toContain(
      `You selected tariff with ID: ${tariffId}`
    );
  });
});
