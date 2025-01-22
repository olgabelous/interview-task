import { Component, effect, input, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';

import { Tariff } from '../../models/tariff';
import { CurrencyPipe } from '@angular/common';
import { MbitUnitPipe } from '../../pipes/mbit-unit.pipe';
import { Router } from '@angular/router';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-tariff',
  imports: [
    CurrencyPipe,
    MatButtonModule, 
    MatIconModule, 
    MatChipsModule, 
    MatListModule, 
    MbitUnitPipe,   
  ],
  templateUrl: './tariff.component.html',
  styleUrl: './tariff.component.scss'
})
export class TariffComponent{
  tariff = input.required<Tariff>();
  isMobileView = signal(false);
  isTabletView = signal(false);
  isDesktopView = signal(false);

  constructor(
    private router: Router, 
    private responsiveService: ResponsiveService
  ) {
    this.isMobileView = this.responsiveService.isMobile;
    this.isTabletView = this.responsiveService.isTablet;
    this.isDesktopView = this.responsiveService.isDesktop;
  }

  goToTariffDetails() {
    this.router.navigate(['tariffs', this.tariff().id], {
      state: { tariff: this.tariff() }
    });
  }
}
