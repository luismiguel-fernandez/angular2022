import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsFiltrosService {
  private patron:string = ""
  private fabricante:string = "0"
  private tecnologia:string = "0"

  constructor() { }

  getPattern() {
    return this.patron
  }
  getMaker() {
    return this.fabricante
  }
  getTech() {
    return this.tecnologia
  }

  setNewPattern(newPattern:string) {
    this.patron = newPattern
  }

  setNewMaker(newMaker:string) {
    this.fabricante = newMaker
  }

  setNewTech(newTech:string) {
    this.tecnologia = newTech
  }
}
