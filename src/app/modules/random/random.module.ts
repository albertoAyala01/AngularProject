import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomComponent } from '../../components/random/random.component';
import { RandomService } from '../../services/random.service';
import { RandomRoutingModule } from './random-routing.module';



@NgModule({
  declarations: [
    RandomComponent
  ],
  imports: [
    CommonModule,
    RandomRoutingModule
  ],
  providers: [RandomService]
})
export class RandomModule { }
