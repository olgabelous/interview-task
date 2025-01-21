import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffListComponent } from './tariff-list.component';

describe('TarifListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
