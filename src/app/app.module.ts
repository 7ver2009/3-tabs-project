import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main';
import {
  FirstTabDataResolver,
  SecondTabDataResolver,
  ThirdTabDataResolver,
 } from './data.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
  ],
  providers: [
    FirstTabDataResolver,
    SecondTabDataResolver,
    ThirdTabDataResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
