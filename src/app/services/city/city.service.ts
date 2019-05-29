import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { City } from '../../models/city';

import { handleError } from './../services-utils';

@Injectable()
export class CityService {
  private citiesUrl = 'api/cities';
  constructor(private http: HttpClient) {}
  getCities(): Promise<City[]> {
    return this.http
      .get(this.citiesUrl)
      .toPromise()
      .then(response => response as City[])
      .catch(handleError);
  }
}
