import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CITIES } from './services/city/mock-cities';

import { COUNTRIES } from './services/country/mock-countries';

import { ORDERS } from './services/order/mock-orders';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cities = CITIES;
        const countries = COUNTRIES;
        const orders = ORDERS;
        return { cities, countries, orders };
    }
}
