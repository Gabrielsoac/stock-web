import { Component } from '@angular/core';
import { InfoCard } from "../../shared/info-card/info-card";
import { ShowProduct } from '../show-product/show-product';
import { IProduct } from '../../../interfaces/Product';
import { StockProduct } from "../stock-product/stock-product";

@Component({
  selector: 'app-stock',
  imports: [InfoCard, ShowProduct, StockProduct],
  templateUrl: './stock.html',
  styleUrl: './stock.scss'
})
export class Stock {
  categories = ["Todas", "Roteadores", "Cabos", "Modems", "Switches"];
  status = ["Todos", "Disponível", "Estoque Baixo", "Sem Estoque"];

  viewingProduct = false;
  selectedProduct!: IProduct;

  showProduct(product: IProduct){
    this.viewingProduct = true;
    this.selectedProduct = product;
  }

  closeShowProduct(){
    this.viewingProduct = false;
  }
}

