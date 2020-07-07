import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasing'
})
export class PascalCasingPipe implements PipeTransform {

  transform(value: string): string {
    const titleCased = value.split(" ")
    for (let i = 0; i < titleCased.length; i++) {
      titleCased[i] = titleCased[i][0].toLocaleUpperCase() + titleCased[i].slice(1)
    }
    return titleCased.join(' ');
  }

}
