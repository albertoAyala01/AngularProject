import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponent } from '../components/my-first/my-first.component';

const routes: Routes = [{
  path: '',
  component: MyFirstComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFirstRoutingModule { }
