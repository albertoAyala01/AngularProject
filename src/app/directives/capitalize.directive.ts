import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.textTransform = 'capitalize';
  }

}
