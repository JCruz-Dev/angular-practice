import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBgcolor]',
})
export class BgcolorDirective {
  @Input('color') color!: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'blue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '';
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }
}
