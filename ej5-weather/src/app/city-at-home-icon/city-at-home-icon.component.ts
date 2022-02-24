import { Component, Input, OnInit } from '@angular/core';
import { FavsService } from '../favs.service';

@Component({
  selector: 'app-city-at-home-icon',
  templateUrl: './city-at-home-icon.component.html',
  styleUrls: ['./city-at-home-icon.component.css']
})
export class CityAtHomeIconComponent implements OnInit {

  @Input() city:any

  constructor(private favs:FavsService) { }

  ngOnInit(): void {
  }

  setCityAtHome() {
    this.favs.setCityAtHome(this.city)
  }
}
