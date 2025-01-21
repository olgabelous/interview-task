import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';

import { Tarif } from '../../models/tarif';
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
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.scss'
})
export class TarifComponent {
  tarif = input.required<Tarif>();
}
