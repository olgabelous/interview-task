import { Component } from '@angular/core';
import { TarifService } from '../../services/tarif.service';
import { Tarif } from '../../models/tarif';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-tarif-list',
  imports: [AsyncPipe, MatCardModule, MatButtonModule],
  templateUrl: './tarif-list.component.html',
  styleUrl: './tarif-list.component.scss'
})
export class TarifListComponent{
  tarifList$: Observable<Tarif[]>;

  constructor(private tarifService: TarifService) {
    this.tarifList$ = this.tarifService.getTarifs();
  }
}
