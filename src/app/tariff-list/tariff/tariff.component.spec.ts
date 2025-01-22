import { TariffComponent } from './tariff.component';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MbitUnitPipe } from '../../pipes/mbit-unit.pipe';
import { Tariff } from '../../models/tariff';
import { MOCK_TARIFFS } from '../../testing/test-mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatButtonHarness } from '@angular/material/button/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatChipHarness } from '@angular/material/chips/testing';
import { DebugElement } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';

describe('TariffComponent', () => {
  let component: TariffComponent;
  let fixture: ComponentFixture<TariffComponent>;
  let router: Router;
  let responsiveService: ResponsiveService;
  let loader: HarnessLoader;
  const mockTariff: Tariff = MOCK_TARIFFS[0];

  // Reusable setup function
  async function setupComponent(isMobile: boolean, isTablet: boolean, isDesktop: boolean) {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatListModule,
        CurrencyPipe,
        MbitUnitPipe,
        TariffComponent,
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        { 
          provide: ResponsiveService, 
          useValue: new MockResponsiveService(isMobile, isTablet, isDesktop) 
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    responsiveService = TestBed.inject(ResponsiveService);

    // Set the required input
    fixture.componentRef.setInput('tariff', mockTariff);

    // Initialize the HarnessLoader
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  }

  describe('Mobile view', () => {
    let mobileContent: DebugElement;

    beforeEach(async () => {
      await setupComponent(true, false, false);

      fixture.detectChanges();
      mobileContent = fixture.debugElement.query(By.css('.mobile-content'));
    });

    it('should display mobile content correctly', () => {
      expect(mobileContent).toBeTruthy();
    });

    it('should display tariff name in mobile view correctly', async () => {
      const tariffName = mobileContent
        .query(By.css('.tariff-header'))
        .nativeElement.textContent.trim();
      expect(tariffName).toBe(mockTariff.tariffName);
    });

    it('should display download speed in mobile view correctly', async () => {
      const downloadSpeed = mobileContent
        .query(By.css('.download-speed'))
        .nativeElement.textContent.trim();
      expect(downloadSpeed).toBe('50 Mbit/s');
    });

    it('should display upload speed in mobile view correctly', async () => {
      const uploadSpeed = mobileContent
        .query(By.css('.upload-speed'))
        .nativeElement.textContent.trim();
      expect(uploadSpeed).toBe('10 Mbit/s');
    });

    it('should display price in mobile view correctly', async () => {
      const price = mobileContent
        .query(By.css('.price'))
        .nativeElement.textContent.trim();
      expect(price).toBe('€100.00');
    });

    it('should display button in mobile view', async () => {
      const button = mobileContent.query(By.css('.tariff-btn'));
      expect(button).toBeTruthy();
    });

    it('should not display benefits in mobile view', async () => {
    const benefitsList = fixture.debugElement.query(By.css('.benefit-item'));
    expect(benefitsList).toBeNull();
    });
  });

  describe('Tablet view', () => {
    beforeEach(async () => {
      //isTablet = true
      await setupComponent(false, true, false);

      fixture.detectChanges();
    });

    it('should display tablet content correctly', () => {
      const tabletContent = fixture.debugElement.query(
        By.css('.desktop-tablet-content')
      );
      expect(tabletContent).toBeTruthy();
    });

    it('should display tariff name in tablet view correctly', () => {
      const tariffName = fixture.debugElement
        .query(By.css('.tariff-header'))
        .nativeElement.textContent.trim();
      expect(tariffName).toBe(mockTariff.tariffName);
    });

    it('should display button name in tablet view correctly', async () => {
      // Use MatButtonHarness to find the button within the desktop content
      const button = await loader.getHarness(
        MatButtonHarness.with({
          ancestor: '.desktop-tablet-content',
        })
      );
      const buttonText = await button.getText();

      expect(buttonText).toContain('To Tariff');
    });

    it('should not display benefits in tablet view', () => {
      const benefitsList = fixture.debugElement.query(By.css('.benefit-item'));
    expect(benefitsList).toBeNull();
    });

    it('should display price in tablet view correctly', () => {
      const price = fixture.debugElement
        .query(By.css('.price'))
        .nativeElement.textContent.trim();

      expect(price).toBe('€100.00');
    });

    it('should retrieve MatChips in desktop view', async () => {
      // Use MatChipHarness to find the chips within the desktop content
      const chips = await loader.getAllHarnesses(
        MatChipHarness.with({
          selector: '.desktop-tablet-content .speed-chip',
        })
      );

      // Verify the number of chips
      expect(chips.length).toBe(2);

      // Verify download speed
      expect(await chips[0].getText()).toContain('50 Mbit/s');
      // Verify upload speed
      expect(await chips[1].getText()).toContain('10 Mbit/s');
    });

    it('should not display Download label in tablet view', async () => {
      // Use MatChipHarness to find the chips within the desktop content
      const downloadLabel = fixture.debugElement.query(By.css('.download-label'));
      expect(downloadLabel).toBeNull();
    });

    it('should not display Upload label in tablet view', async () => {
      // Use MatChipHarness to find the chips within the desktop content
      const downloadLabel = fixture.debugElement.query(By.css('.upload-label'));
      expect(downloadLabel).toBeNull();
    });
  });

  describe('Desktop view', () => {
    beforeEach(async () => {
      //isDesktop = true
      await setupComponent(false, false, true);

      fixture.detectChanges();
    });

    it('should display desktop content correctly', () => {
      const desktopContent = fixture.debugElement.query(
        By.css('.desktop-tablet-content')
      );
      expect(desktopContent).toBeTruthy();
    });

    it('should display tariff name in desktop view correctly', () => {
      const tariffName = fixture.debugElement
        .query(By.css('.tariff-header'))
        .nativeElement.textContent.trim();
      expect(tariffName).toBe(mockTariff.tariffName);
    });

    it('should display button name in desktop view correctly', async () => {
      // Use MatButtonHarness to find the button within the desktop content
      const button = await loader.getHarness(
        MatButtonHarness.with({
          ancestor: '.desktop-tablet-content',
        })
      );
      const buttonText = await button.getText();

      expect(buttonText).toContain('To Tariff');
    });

    it('should display benefits in desktop view correctly', () => {
      const benefits = fixture.debugElement.queryAll(By.css('.benefit-item'));
      expect(benefits.length).toBe(mockTariff.benefits.length);

      benefits.forEach((benefit, index) => {
        const benefitText = benefit.nativeElement.textContent.trim();
        expect(benefitText).toContain('check');
        expect(benefitText).toContain(mockTariff.benefits[index]);
      });
    });

    it('should display price in desktop view correctly', () => {
      const price = fixture.debugElement
        .query(By.css('.price'))
        .nativeElement.textContent.trim();

      expect(price).toBe('€100.00');
    });

    it('should retrieve MatChips in desktop view', async () => {
      // Use MatChipHarness to find the chips within the desktop content
      const chips = await loader.getAllHarnesses(
        MatChipHarness.with({
          selector: '.desktop-tablet-content .speed-chip',
        })
      );

      // Verify the number of chips
      expect(chips.length).toBe(2);

      // Verify download speed
      expect(await chips[0].getText()).toContain('50 Mbit/s');
      // Verify upload speed
      expect(await chips[1].getText()).toContain('10 Mbit/s');
    });
  });
});


// Mock ResponsiveService
class MockResponsiveService {
  constructor(
    private mobile: boolean,
    private tablet: boolean,
    private desktop: boolean
  ) {}

  isMobile = () => this.mobile;
  isTablet = () => this.tablet;
  isDesktop = () => this.desktop;
}