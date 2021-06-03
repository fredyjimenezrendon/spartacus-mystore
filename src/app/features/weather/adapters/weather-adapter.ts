import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

import {Weather} from "../models/Weather";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, switchMap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class WeatherAdapter {

  constructor(private httpClient: HttpClient) {

  }

  getGeolocationPosition(): Observable<Position> {
    if (navigator.geolocation) {
      return new Observable<Position>(subscriber => {
        navigator.geolocation.getCurrentPosition(position => {
            subscriber.next(position);
            subscriber.complete();
          },
          subscriber.error.bind(subscriber));
      })
    } else {
      return of(null as Position);
    }
  }

  fetchWeatherInfo(position: Position): Observable<Weather> {
    const { latitude, longitude } = position.coords;
    const data = {
      lat: String(latitude),
      lon: String(longitude),
      units: environment.weatherAPI.unit,
      appid: environment.weatherAPI.apiKey
    };

    const params = new HttpParams( {fromObject: data})

    return this.httpClient.get( `${environment.weatherAPI.url}/weather/`, {params} )
      .pipe(
        map( (response: any ) => ({
          city: response.name,
          humidity: response.main.humidity,
          temperature: response.main.temp
        }))
      )
  }

  getWeather(): Observable<Weather> {
    return this.getGeolocationPosition().pipe(
      switchMap(position => this.fetchWeatherInfo(position))
    );
  }
}
