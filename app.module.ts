import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvellousEventComponent } from './marvellousevent/marvellousevent.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
