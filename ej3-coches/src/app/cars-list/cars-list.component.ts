import { Component, OnInit } from '@angular/core';
import { BdCarsService } from '../bd-cars.service';
import { Car } from './Car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  filtrar:boolean

  constructor(private bdCars:BdCarsService) {
    this.filtrar = false
  }

  ngOnInit(): void {
  }

  getCars() {
    return this.bdCars.getCars()
  }

  cbChanged() {
    this.filtrar = !this.filtrar
  }

  reduceStock(car:Car) {
    this.bdCars.reduceStock(car)
  }

  recuperarCoches() {
    this.bdCars.populateCars()
  }

  recuperarStock() {
    this.bdCars.enableStock()
  }

}
