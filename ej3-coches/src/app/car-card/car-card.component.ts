import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../cars-list/Car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() car:Car

  constructor() { }

  ngOnInit(): void {
  }

}
