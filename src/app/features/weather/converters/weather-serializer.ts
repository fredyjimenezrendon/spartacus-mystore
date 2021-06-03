import {Injectable} from "@angular/core";
import {Converter} from "@spartacus/core";
import {environment} from "../../../../environments/environment";

@Injectable({providedIn: 'root'})
export class WeatherSerializer implements Converter<Position, any> {

  convert(source: Position, target?: any): any {
    target = {
      lat: String(source.coords.latitude),
      lon: String(source.coords.longitude),
      units: environment.weatherAPI.unit,
      appid: environment.weatherAPI.apiKey
    };
    return target;
  }

}
