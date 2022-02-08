import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';
import { ParamsFiltrosService } from '../params-filtros.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  private coches:any
  private cargando:boolean = true
  private vistaBigCard = true

  constructor(private bdCoches:BdCochesService, private filtros:ParamsFiltrosService) {
    //this.coches = new Array()
  }

  ngOnInit(): void {
    this.bdCoches.getCoches().subscribe( (response:any) => {
      this.coches = response
      this.cargando = false
    })
  }

  cambiarVista() {
    this.vistaBigCard = !this.vistaBigCard
  }

  estaCargando() {
    return this.cargando
  }

  esVistaTarjeta() {
    return this.vistaBigCard
  }

  getCoches() {
      return this.coches
  }

  getPattern() {
    return this.filtros.getPattern()
  }
  getMaker() {
    return this.filtros.getMaker()
  }
  getTech() {
    return this.filtros.getTech()
  }
}
