import { Component, input } from '@angular/core';
import { Tarif } from '../../models/tarif';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-tarif',
  imports: [MatButtonModule, CurrencyPipe, MatIconModule, MatChipsModule, MatListModule],
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.scss'
})
export class TarifComponent {
  tarif = input.required<Tarif>();
}
