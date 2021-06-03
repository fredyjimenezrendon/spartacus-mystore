import {ActionReducer} from "@ngrx/store";
import {WeatherState} from "../weather-state";
import * as fromWeather from './weather-reducer';
import {InjectionToken, Provider} from "@angular/core";

export function getReducers(): ActionReducer<WeatherState> {
  return fromWeather.weatherReducer;
}

export const reducerToken: InjectionToken<ActionReducer<WeatherState>> = new InjectionToken<ActionReducer<WeatherState>>('WeatherReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers
};
