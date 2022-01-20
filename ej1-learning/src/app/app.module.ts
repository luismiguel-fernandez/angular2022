import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { AlumnoDetallesComponent } from './alumno-detalles/alumno-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoAlumnosComponent,
    AlumnoDetallesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
