import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnotherComponent } from './components/another/another.component';
import { RandomModule } from './modules/random/random.module';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RandomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
