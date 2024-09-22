import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { WeakTestComponent } from './weak-test/weak-test.component';
import { StrongTestComponent } from './strong-test/strong-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WeakTestComponent,
    StrongTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
