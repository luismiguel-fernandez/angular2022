import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coche-tarjeta',
  templateUrl: './coche-tarjeta.component.html',
  styleUrls: ['./coche-tarjeta.component.css']
})
export class CocheTarjetaComponent implements OnInit {

  @Input() car:any

  constructor() { }

  ngOnInit(): void {
  }

}
