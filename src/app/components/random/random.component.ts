import { Component, Inject, inject } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss'
})
export class RandomComponent {
  randomVar:string;
  constructor(randomService:RandomService){
    this.randomVar = randomService.randomVar
  }
}
