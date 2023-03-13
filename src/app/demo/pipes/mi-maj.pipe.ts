import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mi_maj'
})
export class MiMajPipe implements PipeTransform {

  transform(value: string, upperStart: boolean = true ): string {

    let rslt = '';

    for(let i=0; i<value.length; i++ ){
      if( (upperStart && i % 2 == 0) || (!upperStart && i % 2 == 1) )
        rslt += value.charAt(i).toUpperCase()
      else
        rslt += value.charAt(i).toLowerCase()
    }

    return rslt;

  }

}
