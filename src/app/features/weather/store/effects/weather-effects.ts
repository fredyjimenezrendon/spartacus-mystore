import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {WeatherConnector} from "../../connectors/weather-connector";
import {WeatherAPIActions, WeatherPageActions} from "../actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private weatherConnector: WeatherConnector) {
  }

  loadWeatherData$ = createEffect( () => {
    return this.actions$
      .pipe(
        ofType(WeatherPageActions.loadWeather),
        mergeMap( () => this.weatherConnector.getWeather()
          .pipe(
            map(weather => WeatherAPIActions.loadWeatherSuccess({weather})),
            catchError(error => of(WeatherAPIActions.loadWeatherFail({error})))
          )
        )
      );
  });
}
