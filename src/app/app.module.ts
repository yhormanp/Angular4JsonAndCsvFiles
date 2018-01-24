import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import { AppComponent } from './app.component';
import { PrimarySourcesService } from './primary-sources.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [PrimarySourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
