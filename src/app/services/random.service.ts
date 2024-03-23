import { Injectable } from '@angular/core';
import { RandomModule } from '../modules/random/random.module';

@Injectable({
  providedIn: RandomModule
})
export class RandomService {

  constructor() { }

  randomVar:string = "what's up";
}
