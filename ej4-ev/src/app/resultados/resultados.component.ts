import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';
import { ParamsFiltrosService } from '../params-filtros.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  private vistaBigCard = true

  constructor(private bdCoches:BdCochesService, private filtros:ParamsFiltrosService) {
  }

  ngOnInit(): void {}

  cambiarVista() { this.vistaBigCard = !this.vistaBigCard }
  estaCargando() { return this.bdCoches.isLoading() }
  esVistaTarjeta() { return this.vistaBigCard }
  getCoches() { return this.bdCoches.getCars() }
  getPattern() { return this.filtros.getPattern() }
  getMaker() { return this.filtros.getMaker() }
  getTech() { return this.filtros.getTech() }
}
