import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.html',
  styleUrls: ['./stock-product.scss'],
  imports: [CommonModule]
})
export class StockProduct implements OnInit {

  produtos!: any;

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.produtos = [
  {
    id: 4,
    nome: 'Switch Gigabit 8 Portas',
    categoria: 'Roteadores',
    icon: 'categories/router.png',
    estoque: 25,
    preco: 210.00
  },
  {
    id: 5,
    nome: 'Adaptador USB Wi-Fi Dual Band',
    categoria: 'Cabos',
    icon: 'categories/cabo.png',
    estoque: 14,
    preco: 75.90
  },
  {
    id: 6,
    nome: 'Patch Panel 24 Portas Cat6',
    categoria: 'Modems',
    icon: '/categories/router.png',
    estoque: 5,
    preco: 340.00
  },
  {
    id: 7,
    nome: 'Fibra Óptica Monomodo 50m',
    categoria: 'Cabos',
    icon: 'categories/cabo.png',
    estoque: 32,
    preco: 125.00
  },
  {
    id: 8,
    nome: 'ONU GPON Wi-Fi',
    categoria: 'Roteadores',
    icon: 'categories/router.png',
    estoque: 18,
    preco: 199.99
  },
  {
    id: 9,
    nome: 'Rack 19" 12U',
    categoria: 'Modems',
    icon: '/categories/router.png',
    estoque: 7,
    preco: 890.00
  },
  {
    id: 10,
    nome: 'Fonte de Alimentação 12V 5A',
    categoria: 'Cabos',
    icon: 'categories/cabo.png',
    estoque: 40,
    preco: 45.50
  },
  {
    id: 11,
    nome: 'Splitter Óptico 1x8',
    categoria: 'Roteadores',
    icon: 'categories/router.png',
    estoque: 12,
    preco: 60.00
  },
  {
    id: 12,
    nome: 'Conector RJ45 Cat6',
    categoria: 'Cabos',
    icon: 'categories/cabo.png',
    estoque: 200,
    preco: 1.20
  },
  {
    id: 13,
    nome: 'Tester de Cabos de Rede',
    categoria: 'Modems',
    icon: '/categories/router.png',
    estoque: 9,
    preco: 89.90
  }
];

  }

  getStatusClass(quantity: number): string {
    const status = this.getStatus(quantity);
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

  getStatus(quantity: number): string {
    if(quantity == 0) return 'Sem Estoque';
    if(quantity <= 8) return 'Estoque Baixo';
    return 'Disponível';
  }

  priceFormat(price: number){
    return `R$${price}`;
  }
}
