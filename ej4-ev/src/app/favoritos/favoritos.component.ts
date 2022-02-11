import { Component, OnInit } from '@angular/core';
import { BdCochesService } from '../bd-coches.service';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private favs:FavoritosService, private bdCars:BdCochesService) { }

  ngOnInit(): void {
  }

  getCarById(id:string):any { return this.bdCars.getCarById(id) }
  getFavs():any[] {
    let coches:any[] = []
    this.favs.getFavs().forEach( id => {
      coches.push(this.getCarById(id))
    })
    return coches
  }
}
