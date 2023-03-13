import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSec'
})
export class ConvertSecPipe implements PipeTransform {

  transform(sec: number): string {
    
    let minutes: number = Math.floor(sec / 60);
    let secondes: number = sec % 60;
    let heures: number = Math.floor(minutes / 60);
    minutes %= 60;


    return (heures < 10 ? '0'+heures : heures) + ":" 
          + (minutes < 10 ? '0'+minutes : minutes) + ":"
          + (secondes < 10 ? '0'+secondes : secondes);
  }

}
