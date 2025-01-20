import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarifListComponent } from "./tarif-list/tarif-list/tarif-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarifListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview-task';
}
