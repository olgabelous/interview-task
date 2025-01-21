import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';

import { Tariff } from '../../models/tariff';
import { CurrencyPipe } from '@angular/common';
import { MbitUnitPipe } from '../../pipes/mbit-unit.pipe';

@Component({
  selector: 'app-tarif',
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
  tarif = input.required<Tariff>();
}
