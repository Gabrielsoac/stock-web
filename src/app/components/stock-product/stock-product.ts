import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../interfaces/Product';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.html',
  styleUrls: ['./stock-product.scss'],
  imports: [CommonModule]
})
export class StockProduct implements OnInit {

  products!: IProduct[];
  @Output() showProductInfo = new EventEmitter();

  constructor() { }

  showProduct(product: IProduct) {
    this.showProductInfo.emit(product);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = [
    {
      id: '1',
      name: 'Switch Gigabit 8 Portas',
      category: 'Roteadores',
      icon: 'categories/router.png',
      inStock: 25,
      price: 210.00
    },
    {
      id: '2',
      name: 'Roteador Wi-Fi 6 TP-Link AX1800',
      category: 'Roteadores',
      icon: 'categories/router.png',
      inStock: 0,
      price: 350.00
    },
    {
      id: '3',
      name: 'Roteador Mesh D-Link COVR-1102',
      category: 'Roteadores',
      icon: 'categories/router.png',
      inStock: 7,
      price: 499.90
    },
    {
      id: '4',
      name: 'Cabo de Rede Cat6 10m',
      category: 'Cabos',
      icon: 'categories/cabo.png',
      inStock: 60,
      price: 45.00
    },
    {
      id: '5',
      name: 'Cabo de Rede Cat5e 5m',
      category: 'Cabos',
      icon: 'categories/cabo.png',
      inStock: 3,
      price: 25.00
    },
    {
      id: '6',
      name: 'ONT FiberHome AN5506-04',
      category: 'Fibra Óptica',
      icon: 'categories/caixa.png',
      inStock: 2,
      price: 320.00
    },
    {
      id: '7',
      name: 'Módulo SFP Gigabit Monomodo',
      category: 'Fibra Óptica',
      icon: 'categories/caixa.png',
      inStock: 50,
      price: 150.00
    },
    {
      id: '8',
      name: 'Splitter Óptico 1x8',
      category: 'Fibra Óptica',
      icon: 'categories/caixa.png',
      inStock: 0,
      price: 90.00
    },
    {
      id: '9',
      name: 'Patch Cord Óptico SC/UPC-SC/UPC 3m',
      category: 'Fibra Óptica',
      icon: 'categories/cabo.png',
      inStock: 100,
      price: 20.00
    },
    {
      id: '10',
      name: 'Roteador TP-Link AC1900 Archer C80',
      category: 'Roteadores',
      icon: 'categories/router.png',
      inStock: 5,
      price: 280.00
    },
    {
      id: '11',
      name: 'Cabo HDMI 2.0 2m',
      category: 'Cabos',
      icon: 'categories/cabo.png',
      inStock: 1,
      price: 35.00
    },
    {
      id: '12',
      name: 'Adaptador USB para Ethernet Gigabit',
      category: 'Acessórios',
      icon: 'categories/wi-fi.png',
      inStock: 45,
      price: 75.00
    },
    {
      id: '13',
      name: 'Roteador Mikrotik hAP ac²',
      category: 'Roteadores',
      icon: 'categories/router.png',
      inStock: 0,
      price: 420.00
    },
    {
      id: '14',
      name: 'Conversor Óptico para Ethernet',
      category: 'Fibra Óptica',
      icon: 'categories/caixa.png',
      inStock: 6,
      price: 130.00
    },
    {
      id: '15',
      name: 'Cabo Coaxial RG6 20m',
      category: 'Cabos',
      icon: 'categories/cabo.png',
      inStock: 8,
      price: 60.00
    },
    {
      id: '16',
      name: 'Repetidor de Sinal Wi-Fi TP-Link RE200',
      category: 'Roteadores',
      icon: 'categories/wi-fi.png',
      inStock: 2,
      price: 150.00
    },
    {
      id: '17',
      name: 'Caixa de Emenda Óptica 24 Fibras',
      category: 'Fibra Óptica',
      icon: 'categories/caixa.png',
      inStock: 4,
      price: 210.00
    },
    {
      id: '18',
      name: 'Cabo de Rede Cat7 15m',
      category: 'Cabos',
      icon: 'categories/cabo.png',
      inStock: 0,
      price: 85.00
    },
    {
      id: '19',
      name: 'ONU Huawei EchoLife HG8546M',
      category: 'Fibra Óptica',
      icon: 'categories/caixa.png',
      inStock: 1,
      price: 350.00
    },
    {
      id: '20',
      name: 'Roteador Wi-Fi Intelbras ACtion RF1200',
      category: 'Roteadores',
      icon: 'categories/router.png',
      inStock: 9,
      price: 200.00
    }
  ]
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
