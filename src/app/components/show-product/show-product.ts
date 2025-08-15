import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-product',
  imports: [CommonModule],
  templateUrl: './show-product.html',
  styleUrl: './show-product.scss'
})
export class ShowProduct {
  @Input({ required: true }) productData!: IProduct;
  @Output() closeViewingProduct = new EventEmitter();

  closeViewing(){
    this.closeViewingProduct.emit();
  }
}
