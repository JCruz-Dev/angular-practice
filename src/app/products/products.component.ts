import { Component } from '@angular/core';
import { Product } from '../product/product.models';
import { ProductsService } from '../services/products.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  constructor(
    private productService: ProductsService,
    private store: StoreService
  ) {
    this.myShoppingCart = this.store.getShoppingCart();
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
  onPriceClick(event: number) {
    this.total = event;
  }
}
