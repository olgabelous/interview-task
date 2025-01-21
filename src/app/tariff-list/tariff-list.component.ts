import { Component, computed, OnInit, signal } from '@angular/core';
import { TariffService } from '../services/tariff.service';
import { Tariff } from '../models/tariff';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { SortingOption, SORTING_OPTIONS } from '../models/sorting-options'; 
import { TariffComponent } from './tariff/tariff.component';

@Component({
  selector: 'app-tarif-list',
  imports: [MatCardModule, TariffComponent, MatSelectModule],
  templateUrl: './tariff-list.component.html',
  styleUrl: './tariff-list.component.scss',
})
export class TariffListComponent implements OnInit{
  sortOrder = signal<string>('download-asc');
  sortingOptions: SortingOption[] = SORTING_OPTIONS;

  tariffs = signal<Tariff[]>([]);

  sortedTariffs = computed(() => {
    const order = this.sortOrder();
    const tarifs = [...this.tariffs()];
    switch (order) {
      case 'download-asc':
        return tarifs.sort((a, b) => a.download - b.download);
      case 'download-desc':
        return tarifs.sort((a, b) => b.download - a.download);
      case 'upload-asc':
        return tarifs.sort((a, b) => a.upload - b.upload);
      case 'upload-desc':
        return tarifs.sort((a, b) => b.upload - a.upload);
        case 'price-asc':
        return tarifs.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return tarifs.sort((a, b) => b.price - a.price);
      default:
        return tarifs;
    }
  });


  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffService.getTariffs().subscribe((tariffs) => this.tariffs.set(tariffs));
  }
}
