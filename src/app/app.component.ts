import { Component } from '@angular/core';
import { Product } from './product/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-platzi';
  imageUrl = '';
  products: Product[] = [
    {
      id: '1',
      name: 'Automobil de juguete',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      name: 'Muñeca de trapo',
      price: 180,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '3',
      name: 'Pelota de futbol',
      price: 120,
      image: 'https://picsum.photos/200/300',
    },
  ];

  onLoaded(img: string) {
    console.log(img);
  }
}
