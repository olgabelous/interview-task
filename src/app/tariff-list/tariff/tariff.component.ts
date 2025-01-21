import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';

import { Tariff } from '../../models/tariff';
import { CurrencyPipe } from '@angular/common';
import { MbitUnitPipe } from '../../pipes/mbit-unit.pipe';
import { Router } from '@angular/router';

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
export class TariffComponent {
  tariff = input.required<Tariff>();

  constructor(private router: Router) {}

  goToTariffDetails() {
    this.router.navigate(['tariffs', this.tariff().id]);
  }
}
