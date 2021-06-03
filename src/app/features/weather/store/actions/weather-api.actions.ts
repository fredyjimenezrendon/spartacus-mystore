import {createAction, props} from "@ngrx/store";
import {Weather} from "../../models/Weather";

const LOAD_WEATHER_SUCCESS = '[Weather] Load Weather Data Success';
const LOAD_WEATHER_FAIL = '[Weather] Load Weather Data Fail';

export const loadWeatherSuccess = createAction(
  LOAD_WEATHER_SUCCESS,
  props<{weather: Weather}>()
);

export const loadWeatherFail = createAction(
  LOAD_WEATHER_FAIL,
  props<{error: string}>()
  );

