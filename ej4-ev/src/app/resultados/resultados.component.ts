import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  private coches:any
  private cargando:boolean = true
  private vistaBigCard = true

  constructor(private bdCoches:BdCochesService) {
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
}
