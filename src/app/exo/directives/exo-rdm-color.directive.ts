import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[rdmColor]'
})
export class ExoRdmColorDirective {

  constructor() {
  }

  private randomColor(): string{
    const min= 0, max = 255;

    const red= Math.floor(Math.random()*(max-min+1)+min)
    const green= Math.floor(Math.random()*(max-min+1)+min)
    const blue= Math.floor(Math.random()*(max-min+1)+min)

    return `rgb(${red}, ${green}, ${blue})`
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement){
    if( target )
      target.style.color = this.randomColor();
  }

}
