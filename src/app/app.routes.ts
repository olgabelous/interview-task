import { Routes } from '@angular/router';
import { TariffDetailsComponent } from './tariff-list/tariff-details/tariff-details.component';
import { TariffListComponent } from './tariff-list/tariff-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tariffs', pathMatch: 'full' }, 
    { path: 'tariffs', component: TariffListComponent }, 
    { path: 'tariffs/:tariffId', component: TariffDetailsComponent }, 
];
