import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  private favs:any[]
  private cityAtHome:any

  constructor() {
    let savedFavs = localStorage.getItem('favs') || "[]"
    this.favs = JSON.parse(savedFavs)
    let savedCityAtHome = localStorage.getItem('cityAtHome') || "{}"
    this.cityAtHome = JSON.parse(savedCityAtHome)
  }

  addFav(city:any) {
    if (!this.favs.includes(city)) {
      this.favs.push(city)
      localStorage.setItem('favs', JSON.stringify(this.favs))
    }
  }

  setCityAtHome(city:any) {
    if (city) {
      this.cityAtHome = city
      localStorage.setItem('cityAtHome', JSON.stringify(city))
    }
  }

  getCityAtHome() {return this.cityAtHome?this.cityAtHome:null}
  getFavs():any[] {return this.favs}
}
