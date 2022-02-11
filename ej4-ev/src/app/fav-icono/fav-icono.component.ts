import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-fav-icono',
  templateUrl: './fav-icono.component.html',
  styleUrls: ['./fav-icono.component.css']
})
export class FavIconoComponent implements OnInit {
  @Input() car:any

  constructor(private favs:FavoritosService) { }

  ngOnInit(): void {
  }

  addFav() {
    this.favs.addFav(this.car.id)
  }

}
