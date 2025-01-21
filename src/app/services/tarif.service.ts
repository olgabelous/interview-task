import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tariff } from '../models/tariff';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private http: HttpClient) {}

  getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>('/mocks/mock-data.json');
  }
}
