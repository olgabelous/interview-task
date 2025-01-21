import { Component, input } from '@angular/core';
import { Tarif } from '../../models/tarif';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-tarif',
  imports: [MatButtonModule, CurrencyPipe, MatIconModule],
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.scss'
})
export class TarifComponent {
  tarif = input.required<Tarif>();
}
