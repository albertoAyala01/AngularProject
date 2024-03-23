import { Component } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrl: './format.component.scss'
})
export class FormatComponent {
  amount:number = 1234.43;
  message:string = "hello world";
}
