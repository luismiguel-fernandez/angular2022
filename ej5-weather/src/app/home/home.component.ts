import { Component, OnInit } from '@angular/core';
import { FavsService } from '../favs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private favs:FavsService) { }

  ngOnInit(): void {
  }

  getCityAtHome() {
    return this.favs.getCityAtHome()
  }

}
