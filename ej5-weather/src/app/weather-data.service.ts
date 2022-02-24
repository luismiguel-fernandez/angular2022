import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  //private response:any[] = []
  private url = "http://api.openweathermap.org/data/2.5/"
	private apiKey = "0617ecda468c5e9492d75f4388b1ddf5"

  constructor(private http:HttpClient) { }

  getCitiesByName(name:string) {
    return this.http.get(this.url + "find?q=" + name + "&appid=" + this.apiKey)
  }

  getWeatherById(id:string|number) {
    this.http.get(this.url + "weather?id=" + id + "&appid=" + this.apiKey + "&units=metric").subscribe(
      json => {
        /* this.response = json
        return this.response */
      }
    )
  }

}
