import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Country } from '../../models/country';

import { handleError } from './../services-utils';

@Injectable()
export class CountryService {
    private countriesUrl = 'api/countries';
    constructor(private http: HttpClient) { }
    getCountries(): Promise<Country[]> {
        return this.http.get(this.countriesUrl)
            .toPromise()
            .then(response => response as Country[])
            .catch(handleError);
    }
}
