import {Injectable} from "@angular/core";
import {Converter} from "@spartacus/core";
import {Weather} from "../models/Weather";

@Injectable({providedIn: 'root'})
export class WeatherNormalizer implements Converter<any, Weather> {

  convert(source: any, target?: Weather): Weather {
    target = {
      city: source.name,
      humidity: source.main.humidity,
      temperature: source.main.temp
    };
    return target;
  }

}
