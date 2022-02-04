import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdCochesService {

  //private coches:any
  private urlBase:string = "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/"

  constructor(private http:HttpClient) {
  }

  getCoches() {
    return this.http.get(this.urlBase + "coches")
  }

  getFabricantes() {
    return this.http.get(this.urlBase+"fabricantes")
  }

  getTecnologias() {
    return this.http.get(this.urlBase+"tecnologias")
  }
}
