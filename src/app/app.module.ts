import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickMortyComponent } from './rick-morty/rick-morty.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { RickMortyAlternativeComponent } from './rick-morty/rick-morty-alternative/rick-morty-alternative.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RickMortyComponent,
    CardsComponent,
    RickMortyAlternativeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
