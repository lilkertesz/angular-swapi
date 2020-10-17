import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    StarshipDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
