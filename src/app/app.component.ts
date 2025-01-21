import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TariffListComponent } from "./tarif-list/tariff-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TariffListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview-task';
}
