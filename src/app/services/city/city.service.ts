import { Injectable } from '@angular/core';

import { City } from '../../models/city';
import { CITIES } from './mock-cities';

@Injectable()
export class CityService {

  constructor() { }
  getCities(): Promise<City[]> {
    return Promise.resolve(CITIES);
  }
}
