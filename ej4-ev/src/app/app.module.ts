import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AsideFiltrosComponent } from './aside-filtros/aside-filtros.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BdCochesService } from './bd-coches.service';
import { HttpClientModule } from '@angular/common/http';
import { CocheTarjetaComponent } from './coche-tarjeta/coche-tarjeta.component';
import { PatronPipe } from './patron.pipe';
import { TecnologiaPipe } from './tecnologia.pipe';
import { FabricantePipe } from './fabricante.pipe';
import { BuscadorComponent } from './buscador/buscador.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FavIconoComponent } from './fav-icono/fav-icono.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AsideFiltrosComponent,
    ResultadosComponent,
    CocheTarjetaComponent,
    PatronPipe,
    TecnologiaPipe,
    FabricantePipe,
    BuscadorComponent,
    NavBarComponent,
    PresentacionComponent,
    ContactoComponent,
    Pagina404Component,
    FavoritosComponent,
    FavIconoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BdCochesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
