import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';



@NgModule({
    declarations: [WeatherWidgetComponent],
    exports: [
        WeatherWidgetComponent
    ],
    imports: [
        CommonModule
    ]
})
export class WeatherModule { }
