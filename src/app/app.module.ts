import { BaitapModule } from './baitap/baitap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaitapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
