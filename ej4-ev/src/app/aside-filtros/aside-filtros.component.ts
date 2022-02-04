import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';

@Component({
  selector: 'app-aside-filtros',
  templateUrl: './aside-filtros.component.html',
  styleUrls: ['./aside-filtros.component.css']
})
export class AsideFiltrosComponent implements OnInit {

  private fabricantes:any
  private tecnologias:any

  constructor(private bdCoches:BdCochesService) { }

  ngOnInit(): void {
    this.bdCoches.getFabricantes().subscribe( (response:any) => {
      this.fabricantes = response
    })
    this.bdCoches.getTecnologias().subscribe( (response:any) => {
      this.tecnologias = response
    })
  }

  getFabricantes() {
    return this.fabricantes
  }

  getTecnologias() {
    return this.tecnologias
  }
}
