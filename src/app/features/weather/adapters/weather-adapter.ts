import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

import {Weather} from "../models/Weather";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {switchMap} from "rxjs/operators";
import {ConverterService} from "@spartacus/core";
import {WEATHER_NORMALIZER, WEATHER_SERIALIZER} from "../converters/weather-converter";

@Injectable({providedIn: 'root'})
export class WeatherAdapter {

  constructor(private httpClient: HttpClient, private converterService: ConverterService) {

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
    const data = this.converterService.convert(position, WEATHER_SERIALIZER);

    const params = new HttpParams( {fromObject: data})

    return this.httpClient.get( `${environment.weatherAPI.url}/weather/`, {params} )
      .pipe(
        this.converterService.pipeable(WEATHER_NORMALIZER)
      )
  }

  getWeather(): Observable<Weather> {
    return this.getGeolocationPosition().pipe(
      switchMap(position => this.fetchWeatherInfo(position))
    );
  }
}
