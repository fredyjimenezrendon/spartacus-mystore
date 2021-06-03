import {createReducer, on} from "@ngrx/store";
import {WeatherState} from "../weather-state";
import {WeatherAPIActions, WeatherPageActions} from "../actions";

const initialState = {
  geoLocationPosition: null,
  currentWeather: null
};

export const weatherReducer = createReducer<WeatherState>(
  initialState,
  on(WeatherPageActions.loadWeather, state => {
    return {
      ...state,
      currentWeather: {
        ...state.currentWeather,
        status: {
          success: false,
          loading: true,
          error: false
        }
      }
    }
  }),

  on(WeatherAPIActions.loadWeatherSuccess, (state, action): WeatherState => {
    return {
      ...state,
      currentWeather: {
        ...action.weather,
        status: {
          success: true,
          loading: false,
          error: false
        }
      }
    }
  }),

  on(WeatherAPIActions.loadWeatherFail, (state, action): WeatherState => {
      return {
        ...state,
        currentWeather: {
          ...state.currentWeather,
          status: {
            success: false,
            loading: false,
            error: true
          }
        }
      }
    })
  )
