import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product/product.models';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();
  constructor() {}

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart)
  }
  getTotal(): number {
    return this.myShoppingCart.reduce((acc, b) => acc + b.price, 0);
  }
  getShoppingCart(): Product[] {
    return this.myShoppingCart;
  }
}
