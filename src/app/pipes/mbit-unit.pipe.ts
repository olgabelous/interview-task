import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mbitUnit'
})
export class MbitUnitPipe implements PipeTransform {

  transform(value: number | string): string {
    return `${value} Mbit/s`;
  }

}
