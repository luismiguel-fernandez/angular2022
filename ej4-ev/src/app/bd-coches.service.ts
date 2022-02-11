import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdCochesService {

  private cars:any
  private loading:boolean = true
  private urlBase:string = "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/"

  constructor(private http:HttpClient) {
    this.http.get(this.urlBase + "coches").subscribe(
      (response:any) => {
        this.cars = response
        this.loading = false
      }
    )
  }

  getCarById(id:string) { return this.cars?this.cars.find( (car:any) => car.id == id):{} }
  getCars() { return this.cars }
  getMakers() { return this.http.get(this.urlBase+"fabricantes") }
  getTechnologies() { return this.http.get(this.urlBase+"tecnologias") }
  isLoading() { return this.loading }
}
