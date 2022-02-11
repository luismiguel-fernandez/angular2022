import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';
import { ParamsFiltrosService } from '../params-filtros.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aside-filtros',
  templateUrl: './aside-filtros.component.html',
  styleUrls: ['./aside-filtros.component.css']
})
export class AsideFiltrosComponent implements OnInit {

  private fabricantes:any
  private tecnologias:any

  constructor(private bdCoches:BdCochesService, private filtros:ParamsFiltrosService) { }

  ngOnInit(): void {
    this.bdCoches.getMakers().subscribe( (response:any) => {
      this.fabricantes = response
    })
    this.bdCoches.getTechnologies().subscribe( (response:any) => {
      this.tecnologias = response
    })
  }

  getFabricantes() { return this.fabricantes }
  getTecnologias() { return this.tecnologias }

  setNewPattern(newPattern:string) { this.filtros.setNewPattern(newPattern) }
  setNewMaker(newMaker:string) { this.filtros.setNewMaker(newMaker) }
  setNewTech(newTech:string) { this.filtros.setNewTech(newTech) }

  resetFilters() {
    this.filtros.setNewPattern('')
    this.filtros.setNewMaker('0')
    this.filtros.setNewTech('0')
  }
}
