import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, ...args: any): string {
    const maxLength = 15;
    if (value.length > 15 ) {
      return value.substring(0, (maxLength / 2) - 4) + '...' + value.substring(value.length - (maxLength / 2) + 3, value.length);
    }
    return value;
  }

}
