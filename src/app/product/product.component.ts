import { Component, Input } from '@angular/core';
import { Product } from './product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  // product: Product = {
  //   id: '1',
  //   name: 'Product 1',
  //   image: 'https://picsum.photos/200/300',
  //   price: 300,
  // };
  @Input('product') product: Product = {
    id: '',
    image: '',
    name: '',
    price: 0,
  };
}
