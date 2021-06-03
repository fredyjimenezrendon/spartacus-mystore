import {Weather} from "../models/Weather";

export const WEATHER_FEATURE = 'weather';

export interface WeatherState{
  geoLocationPosition: Position;
  currentWeather: Weather;
}
