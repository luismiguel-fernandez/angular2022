import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftpaneComponent } from './leftpane/leftpane.component';
import { MidpaneComponent } from './midpane/midpane.component';
import { RightpaneComponent } from './rightpane/rightpane.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { CookieComponent } from './cookie/cookie.component';
import { ShopComponent } from './shop/shop.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftpaneComponent,
    MidpaneComponent,
    RightpaneComponent,
    ScoreboardComponent,
    CookieComponent,
    ShopComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
