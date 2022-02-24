import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ManageComponent } from './manage/manage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Page404Component } from './page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { FavIconComponent } from './fav-icon/fav-icon.component';
import { CityCardComponent } from './city-card/city-card.component';
import { CelsiusPipe } from './celsius.pipe';
import { CountryFromCodePipe } from './country-from-code.pipe';
import { CityAtHomeIconComponent } from './city-at-home-icon/city-at-home-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ManageComponent,
    NavBarComponent,
    Page404Component,
    FavIconComponent,
    CityCardComponent,
    CelsiusPipe,
    CountryFromCodePipe,
    CityAtHomeIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
