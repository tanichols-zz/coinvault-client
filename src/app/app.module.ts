import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoinComponent } from './components/coin/coin.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinComponent,
    CoinListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
