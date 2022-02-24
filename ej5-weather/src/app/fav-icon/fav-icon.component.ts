import { Component, Input, OnInit } from '@angular/core';
import { FavsService } from '../favs.service';

@Component({
  selector: 'app-fav-icon',
  templateUrl: './fav-icon.component.html',
  styleUrls: ['./fav-icon.component.css']
})
export class FavIconComponent implements OnInit {

  @Input() city:any

  constructor(private favs:FavsService) { }

  ngOnInit(): void {
  }

  addFav() {
    this.favs.addFav(this.city)
  }

}
