import { Component, computed, OnInit, signal } from '@angular/core';
import { TarifService } from '../services/tarif.service';
import { Tarif } from '../models/tarif';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { TarifComponent } from './tarif/tarif.component';
import { SortingOption, SORTING_OPTIONS } from '../models/sorting-options'; 

@Component({
  selector: 'app-tarif-list',
  imports: [MatCardModule, TarifComponent, MatSelectModule],
  templateUrl: './tarif-list.component.html',
  styleUrl: './tarif-list.component.scss',
})
export class TarifListComponent implements OnInit{
  sortOrder = signal<string>('download-asc');
  sortingOptions: SortingOption[] = SORTING_OPTIONS;

  tarifs = signal<Tarif[]>([]);

  sortedTarifs = computed(() => {
    const order = this.sortOrder();
    const tarifs = [...this.tarifs()];
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


  constructor(private tarifService: TarifService) {}

  ngOnInit(): void {
    this.tarifService.getTarifs().subscribe((tarifs) => this.tarifs.set(tarifs));
  }
}
