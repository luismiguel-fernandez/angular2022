import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private results:any
  msgAddCityOK:boolean = false
  msgAddCityError:boolean = false

  constructor(private data:WeatherDataService) { }

  ngOnInit(): void {
  }

  searchCityByName(cityName:string) {
    if (cityName.trim().length) {
      this.data.getCitiesByName(cityName).subscribe(
        json => {
            let response:any = json
            this.results = response.list
          }
        )
    }
  }

  getResults() {
    return this.results
  }
}
