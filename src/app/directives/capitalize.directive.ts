import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private eleRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.capitalizeText();
  }

  capitalizeText():void{
    let txtContent:string = this.eleRef.nativeElement.innerText

    if(txtContent){
      const textArray:string[]= txtContent.split(" ");
      const totalWords:number = textArray.length;
      let textCapitalized:string = "";

      textArray.forEach((word:string, idx:number)=>{
        textCapitalized += word.charAt(0).toUpperCase() +word.slice(1);
        if( (idx+1) < totalWords){
          textCapitalized+=" ";
        }
      })
      this.eleRef.nativeElement.innerText = textCapitalized
    }
  }

}
