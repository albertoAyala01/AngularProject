import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return this.capitalizeText(value);
  }

  capitalizeText(value: string): string {
    let textCapitalized: string = '';
    if (value) {
      const textArray: string[] = value.split(' ');
      const totalWords: number = textArray.length;

      textArray.forEach((word: string, idx: number) => {
        textCapitalized += word.charAt(0).toUpperCase() + word.slice(1);
        if ( (idx + 1) < totalWords) {
          textCapitalized += ' ';
        }
      });
    }
    return textCapitalized;
  }
}
