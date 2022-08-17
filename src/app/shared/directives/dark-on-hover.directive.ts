import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[darkOnHoverDirective]' })
export class DarkOnHoverDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @Input() brightness: string = '70%';
  @HostListener('mouseenter')
  onMouseOver() {
    this.render.setStyle(
      this.element.nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.render.setStyle(
      this.element.nativeElement,
      'filter',
      'brightness(100%)'
    );
  }
}
