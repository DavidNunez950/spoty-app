import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, truncate: number): string {
    return ( text.length > (truncate)  ) ? text.slice(0, truncate) + '...' : text;
  }

}
