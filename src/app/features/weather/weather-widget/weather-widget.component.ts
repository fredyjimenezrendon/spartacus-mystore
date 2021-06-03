import {Component, OnInit} from '@angular/core';
import {Weather} from "../models/Weather";
import {Observable} from "rxjs";
import {WeatherConnector} from "../connectors/weather-connector";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  weather$: Observable<Weather> = this.weatherConnector.getWeather();

  constructor(private weatherConnector: WeatherConnector) { }

  ngOnInit(): void {
  }

}
