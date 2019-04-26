import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverse'
})
export class InversePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.split('').reverse().join('');
  }

}
