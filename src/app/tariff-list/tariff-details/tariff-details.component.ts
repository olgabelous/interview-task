import { Component, input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { Tariff } from '../../models/tariff';
import { CurrencyPipe } from '@angular/common';
import { MbitUnitPipe } from '../../pipes/mbit-unit.pipe';

@Component({
  selector: 'app-tariff-details',
  imports: [RouterModule, MatCardModule, CurrencyPipe, MbitUnitPipe],
  templateUrl: './tariff-details.component.html',
  styleUrl: './tariff-details.component.scss'
})
export class TariffDetailsComponent {
  tariff?: Tariff;

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    this.tariff = navigation?.extras.state?.['tariff'];
  }
}
