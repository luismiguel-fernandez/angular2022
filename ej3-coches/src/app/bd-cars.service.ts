import { Injectable } from '@angular/core';
import { Car } from './cars-list/Car';

@Injectable({
  providedIn: 'root'
})
export class BdCarsService {
  private cars:Car[]
  private ls = window.localStorage

  constructor() {
    if (this.ls.getItem("cars")) {
      this.cars = JSON.parse(this.ls.getItem("cars"))
    } else {
      this.cars = new Array()
      this.populateCars()
      this.ls.setItem("cars", JSON.stringify(this.cars))
      console.log(this.cars)
    }
  }

  populateCars() {
    this.cars.push(new Car("Toyota","Auris",16900,4,"assets/img/auris.jpg"))
    this.cars.push(new Car("Ford","Mustang",35900,2,"assets/img/mustang.jpg"))
    this.cars.push(new Car("Tesla","Cybertruck",119900,1,"assets/img/cybertruck.jpg"))
  }

  getCars() {
    return this.cars
  }
}
