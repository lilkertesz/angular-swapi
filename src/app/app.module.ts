import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    StarshipDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
