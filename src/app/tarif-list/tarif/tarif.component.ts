import { Component, input } from '@angular/core';
import { Tarif } from '../../models/tarif';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-tarif',
  imports: [MatButtonModule],
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.scss'
})
export class TarifComponent {
  tarif = input.required<Tarif>();
}
