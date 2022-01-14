import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithSeparator',
})
export class NumberWithSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    const numberArray = value.toString().split('.');
    const beforeComma = numberArray[0].replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    );
    return beforeComma + '.' + numberArray[1];
  }
}
