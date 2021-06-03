import {Injectable} from "@angular/core";
import {WeatherAdapter} from "../adapters/weather-adapter";
import {Observable} from "rxjs";
import {Weather} from '../models/Weather';

@Injectable({providedIn: 'root'})
export class WeatherConnector {

  constructor(protected weatherAdapter: WeatherAdapter) {
  }

  public getWeather(): Observable<Weather> {
    return this.weatherAdapter.getWeather();
  }

}
