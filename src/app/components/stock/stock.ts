import { Component } from '@angular/core';
import { InfoCard } from "../../shared/info-card/info-card";

@Component({
  selector: 'app-stock',
  imports: [InfoCard],
  templateUrl: './stock.html',
  styleUrl: './stock.scss'
})
export class Stock {
  categories = ["Todas", "Roteadores", "Cabos", "Modems", "Switches"];
  status = ["Todos", "Disponível", "Estoque Baixo", "Sem Estoque"];
}

