import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  private alumnos;
  selectedAlumno: any;

  constructor() {
    this.alumnos = new Array()
    this.alumnos.push( {name: "Fulanito", age: "17"} )
    this.alumnos.push( {name: "Menganita", age: "18"} )
    this.alumnos.push( {name: "Jaimito", age: "19"} )
    this.selectedAlumno = "";
  }

  ngOnInit(): void {
  }

  getAlumnos() {
    return this.alumnos
  }

  onSelect(alumno:string) {
    this.selectedAlumno = alumno;
  }

  changeName($event:string) {
    let posicion = this.alumnos.indexOf(this.selectedAlumno)
    this.selectedAlumno.name = $event
    this.alumnos[posicion].name = $event
  }

}
