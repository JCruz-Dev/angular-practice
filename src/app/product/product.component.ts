import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Product } from './product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  total = 0;
  constructor(private service: StoreService) {}
  @Input('product') product: Product = {
    id: '',
    title: '',
    image: '',
    name: '',
    price: 0,
    description: '',
    category: '',
  };
  @Output() itemEE = new EventEmitter();
  onAddProduct(product: Product) {
    this.service.addProduct(product);
    this.total = this.service.getTotal();
    this.itemEE.emit(this.total);
  }
}
