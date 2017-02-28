import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Country } from '../../models/country';

import { handleError } from './../services-utils';

@Injectable()
export class CountryService {
  private countriesUrl = 'api/countries';
  constructor(private http: Http) { }
  getCountries(): Promise<Country[]> {
    return this.http.get(this.countriesUrl)
      .toPromise()
      .then(response => response.json().data as Country[])
      .catch(handleError);
  }
}
