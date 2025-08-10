import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoCard } from "./shared/info-card/info-card";
import { Stock } from "./components/stock/stock";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Stock],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('stock-web');
}
