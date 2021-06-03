import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import {WEATHER_NORMALIZER, WEATHER_SERIALIZER} from "./converters/weather-converter";
import {WeatherNormalizer} from "./converters/weather-normalizer";
import {WeatherSerializer} from "./converters/weather-serializer";
import {WeatherStateModule} from "./store/weather-state/weather-state.module";



@NgModule({
    declarations: [WeatherWidgetComponent],
    exports: [
        WeatherWidgetComponent
    ],
    imports: [
        CommonModule,
        WeatherStateModule
    ],
  providers: [
    {
      provide: WEATHER_NORMALIZER,
      useExisting: WeatherNormalizer,
      multi: true
    },
    {
      provide: WEATHER_SERIALIZER,
      useExisting: WeatherSerializer,
      multi: true
    }
  ]
})
export class WeatherModule { }
