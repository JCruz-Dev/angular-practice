import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  @Input() imagesrc: string = '';
  @Output() imageLoaded = new EventEmitter();
  constructor() {}
  imgDefault: string = '../../assets/placeholder-image.png';
  imgError() {
    this.imagesrc = this.imgDefault;
  }
  imgLoaded() {
    console.log('loaded from child');
    this.imageLoaded.emit(this.imagesrc);
  }
}
