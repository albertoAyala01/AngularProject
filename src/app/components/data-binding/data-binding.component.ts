import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  textValue = "Hello world";
  textValueTwoWay = "Hello world";
  showAlert():void{
    window.alert("I was triggered by an event");
  }
}
