import { Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[direct]',
  standalone: true
})
export class DirectDirective {


  @HostListener('click')
  onClick(){
    console.log('testing standalone');
  }

}
