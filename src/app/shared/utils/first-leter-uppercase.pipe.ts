import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firstLeterUpperCase' })
export class FirstLeterUpperCase implements PipeTransform {
  transform(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
