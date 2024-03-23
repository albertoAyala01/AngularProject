import { Component } from '@angular/core';
import { RootService } from '../../services/root.service';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrl: './another.component.scss'
})
export class AnotherComponent {
  data:string;
  constructor(rootService:RootService){
    this.data= rootService.persistentData;
  }
  
}
