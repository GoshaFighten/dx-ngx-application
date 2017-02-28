import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { City } from '../../models/city';

import { handleError } from './../services-utils';

@Injectable()
export class CityService {
  private citiesUrl = 'api/cities';
  constructor(private http: Http) { }
  getCities(): Promise<City[]> {
    return this.http.get(this.citiesUrl)
      .toPromise()
      .then(response => response.json().data as City[])
      .catch(handleError);
  }
}
