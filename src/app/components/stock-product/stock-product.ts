import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.html',
  styleUrls: ['./stock-product.scss'],
  imports: [CommonModule]
})
export class StockProduct implements OnInit {

  produtos!: any; // O array de produtos agora é do tipo Product[]

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.produtos = [
      {
        id: 1,
        nome: 'Router TP-Link AC1900',
        categoria: 'Roteadores',
        iconeCategoria: 'roteador',
        estoque: 45,
        status: 'Disponível',
        preco: 120.00
      },
      {
        id: 2,
        nome: 'Cabo Ethernet Cat6',
        categoria: 'Cabos',
        iconeCategoria: 'cabo',
        estoque: 8,
        status: 'Estoque Baixo',
        preco: 15.50
      },
      {
        id: 3,
        nome: 'Modem DOCSIS 3.1',
        categoria: 'Modems',
        iconeCategoria: 'modem',
        estoque: 0,
        status: 'Sem Estoque',
        preco: 85.00
      },
    ];
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponível':
        return 'disponivel';
      case 'Estoque Baixo':
        return 'estoque-baixo';
      case 'Sem Estoque':
        return 'sem-estoque';
      default:
        return '';
    }
  }
}
