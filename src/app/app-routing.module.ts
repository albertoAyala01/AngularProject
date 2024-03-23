import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './components/random/random.component';
import { AnotherComponent } from './components/another/another.component';

const routes: Routes = [{
  path:'',
  component: AnotherComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
