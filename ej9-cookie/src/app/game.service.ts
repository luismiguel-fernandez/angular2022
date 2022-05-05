import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private cookies:number = 0
  private cookiesPerSecond:number = 0
  private upgrades:any[] = [
    {
      name: "Cursor",
      numberOf: 0,
      price: 15,
      perSecond: 0.1
    },
    {
      name: "Grandma",
      numberOf: 0,
      price: 100,
      perSecond: 1.0
    },
    {
      name: "Farm",
      numberOf: 0,
      price: 1100,
      perSecond: 10.0
    }
  ]

  constructor() { }

  addCookies(extra:number) {
    this.cookies += extra
  }
  buyUpgrade(index:number) {
    if (this.cookies >= this.upgrades[index].price) {
      this.upgrades[index].numberOf++
      this.cookies -= this.upgrades[index].price
      //además, habría que encarecer ese artículo
      this.upgrades[index].price = Math.round(this.upgrades[index].price * 1.15)
      //y habría que recalcular el CPS
      this.cookiesPerSecond += this.upgrades[index].perSecond
    }
  }
  getCookies() {
    return this.cookies
  }
  getCookiesPerSecond() {
    return this.cookiesPerSecond
  }
  getNumberOf(index:number) {
    return this.upgrades[index].numberOf
  }
  getPrice(index:number) {
    return this.upgrades[index].price
  }
}
