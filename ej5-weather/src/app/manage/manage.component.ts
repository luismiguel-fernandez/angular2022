import { Component, OnInit } from '@angular/core';
import { FavsService } from '../favs.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private favs:FavsService) { }

  ngOnInit(): void {
  }

  getFavs():any[] {
    return this.favs.getFavs()
  }

  setCityAtHome(city:any) {
    this.favs.setCityAtHome(city)
  }
}
