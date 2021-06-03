import {Injectable} from "@angular/core";
import {WeatherState} from "../store/weather-state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Weather} from "../models/Weather";
import {WeatherPageActions} from "../store/actions";
import {getWeather} from "../store/selectors/weather-selector";

@Injectable({providedIn: 'root'})
export class WeatherFacade {

  constructor(private store: Store<WeatherState>) {
  }

  getCurrentWeather(): Observable<Weather> {
    this.store.dispatch(WeatherPageActions.loadWeather());
    return this.store.select(getWeather);
  }

}
