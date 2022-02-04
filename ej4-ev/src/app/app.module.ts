import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AsideFiltrosComponent } from './aside-filtros/aside-filtros.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BdCochesService } from './bd-coches.service';
import { HttpClientModule } from '@angular/common/http';
import { CocheTarjetaComponent } from './coche-tarjeta/coche-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AsideFiltrosComponent,
    ResultadosComponent,
    CocheTarjetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BdCochesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
