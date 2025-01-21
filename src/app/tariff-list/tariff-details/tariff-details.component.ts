import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-tariff-details',
  imports: [RouterModule, MatCardModule],
  templateUrl: './tariff-details.component.html',
  styleUrl: './tariff-details.component.scss'
})
export class TariffDetailsComponent {
  tariffId = input.required<string>();
}
