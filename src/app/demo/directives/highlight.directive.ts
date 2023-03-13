import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private _element: ElementRef) {}

  @HostListener('mouseover')
  onMouseover(){
    this._element.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseout')
  onMouseout(){
    this._element.nativeElement.style.background = 'none'
  }

}
