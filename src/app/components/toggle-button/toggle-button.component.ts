import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  active = false;

  changeColor():void{
    if(this.active){
      this.active = false;
    }
    else{
      this.active= true;
    }
  }
}
