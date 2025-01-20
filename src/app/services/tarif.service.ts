import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarif } from '../models/tarif';

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  constructor(private http: HttpClient) {}

  getTarifs(): Observable<Tarif[]> {
    return this.http.get<Tarif[]>('/mocks/mock-data.json');
  }
}
