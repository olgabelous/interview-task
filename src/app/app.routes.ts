import { Routes } from '@angular/router';
import { TariffListComponent } from './tariff-list/tariff-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tariffs', pathMatch: 'full' }, 
    { path: 'tariffs', component: TariffListComponent }, 
    { 
        path: 'tariffs/:tariffId', 
        loadComponent: () =>
        import('./tariff-list/tariff-details/tariff-details.component').then(
          (m) => m.TariffDetailsComponent
        ), 
    }, 
];
