import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {WEATHER_FEATURE} from "../weather-state";
import {reducerProvider, reducerToken} from "../reducers";
import {EffectsModule} from "@ngrx/effects";
import {WeatherEffects} from "../effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(WEATHER_FEATURE, reducerToken),
    EffectsModule.forFeature([WeatherEffects])
  ],
  providers: [
    reducerProvider
  ]
})
export class WeatherStateModule { }
