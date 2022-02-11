import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

const routes: Routes = [
  { path: 'home', component: PresentacionComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Pagina404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
