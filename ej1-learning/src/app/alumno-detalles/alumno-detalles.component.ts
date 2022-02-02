import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alumno-detalles',
  templateUrl: './alumno-detalles.component.html',
  styleUrls: ['./alumno-detalles.component.css']
})
export class AlumnoDetallesComponent implements OnInit {
  @Input() alumnoParam:any
  @Output() nameChanged = new EventEmitter<string>()

  constructor() {

   }

  ngOnInit(): void {
  }

  updateName(newName:string) {
    this.nameChanged.emit(newName)
  }
}
