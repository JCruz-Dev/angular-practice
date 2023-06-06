import { Injectable } from '@angular/core';
import { Product } from '../product/product.models';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
 private  myShoppingCart: Product[] = []
  constructor() {}

  addProduct(product: Product){
    this.myShoppingCart.push(product)
  }
  getTotal(): number {
    return this.myShoppingCart.reduce((acc,b) => acc + b.price, 0)
  }
  getShoppingCart(): Product[]{
    return this.myShoppingCart
  }
}
