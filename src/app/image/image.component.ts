import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() imagesrc: string = '';
  @Output() imageLoaded = new EventEmitter();
  constructor() {
    //corre desde el inicio y antes del render
    console.log('constructur', this.imagesrc);
  }
  ngOnInit(): void {
    // Corre una sola vez
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //Detecta cambios en los inputs(props)_
  }
  ngAfterViewInit() {
    // Corre despues del render
  }
  imgDefault: string = '../../assets/placeholder-image.png';
  imgError() {
    this.imagesrc = this.imgDefault;
  }
  imgLoaded() {
    console.log('loaded from child');
    this.imageLoaded.emit(this.imagesrc);
  }
}
