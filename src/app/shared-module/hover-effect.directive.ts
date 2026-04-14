import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
@Input() appHoverEffect = '';
  constructor(private el:ElementRef, private render:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.el.nativeElement, 'background-color', this.appHoverEffect || 'red');
    this.render.setStyle(this.el.nativeElement, 'cursor', 'pointer');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.el.nativeElement, 'background-color', '');
  }

}
