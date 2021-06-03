import {EntityStatus} from "./EntityStatus";

export interface Weather {
  city: string;
  temperature: number;
  humidity: number;
  status?: EntityStatus;
}
