import {createFeatureSelector, createSelector} from "@ngrx/store";
import {WEATHER_FEATURE, WeatherState} from "../weather-state";

const getWeatherFeatureState = createFeatureSelector<WeatherState>(WEATHER_FEATURE);

export const getWeather = createSelector(
  getWeatherFeatureState,
  state => state.currentWeather
);
