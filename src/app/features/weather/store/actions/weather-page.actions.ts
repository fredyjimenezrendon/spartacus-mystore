import {createAction, props} from "@ngrx/store";
import {Weather} from "../../models/Weather";

const LOAD_WEATHER = '[Weather] Load Weather Data';
const LOAD_WEATHER_FAIL = '[Weather] Load Weather Data Fail';

export const loadWeather= createAction(
  LOAD_WEATHER
);

export const loadWeatherFail = createAction(
  LOAD_WEATHER_FAIL,
  props<{error: string}>()
  );

