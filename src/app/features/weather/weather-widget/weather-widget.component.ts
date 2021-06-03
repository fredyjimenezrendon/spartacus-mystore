import {Component, OnInit} from '@angular/core';
import {Weather} from "../models/Weather";
import {Observable} from "rxjs";
import {WeatherFacade} from "../facade/weather-facade";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  weather$: Observable<Weather> = this.weatherFacade.getCurrentWeather();

  constructor(private weatherFacade: WeatherFacade) { }

  ngOnInit(): void {
  }

}
