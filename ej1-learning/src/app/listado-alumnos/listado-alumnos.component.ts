import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  private alumnos;
  selectedAlumno: string;

  constructor() {
    this.alumnos = new Array()
    this.alumnos.push("Fulanito")
    this.alumnos.push("Menganita")
    this.alumnos.push("Jaimito")
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
    this.alumnos.push($event)
  }

}
