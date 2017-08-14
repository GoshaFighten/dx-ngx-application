import { Component, OnInit } from '@angular/core';

import { Order } from './../../models/order';
import { OrderService } from './../../services/order/order.service';

import { Country } from './../../models/country';
import { CountryService } from './../../services/country/country.service';

import { City } from './../../models/city';
import { CityService } from './../../services/city/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    OrderService,
    CountryService,
    CityService
  ]
})
export class HomeComponent implements OnInit {
  orders: Order[];
  shipCountryLookupConfig: any;
  shipCityLookupConfig: any;
  constructor(
    private orderService: OrderService,
    private countryService: CountryService,
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.getOrders();
    this.getCountries();
    this.getCities();
  }

  getOrders(): void {
    this.orderService.getOrders().then(orders => this.orders = orders);
  }
  getCountries(): void {
    this.countryService.getCountries().then(countries => this.shipCountryLookupConfig = {
      dataSource: countries,
      valueExpr: 'countryName',
      displayExpr: 'countryName'
    });
  }
  getCities(): void {
    this.cityService.getCities().then(cities => this.shipCityLookupConfig = {
      dataSource: (options: any) => {
        const dataSourceConfiguration: any = {
          store: cities
        };
        if (options.data) {
          dataSourceConfiguration.filter = ['country', '=', options.data.shipCountry];
        }
        return dataSourceConfiguration;
      },
      valueExpr: 'cityName',
      displayExpr: 'cityName'
    });
  }

  setShipCountryValue(rowData: any, value: any): void {
    rowData.shipCity = null;
    (<any>this).defaultSetCellValue(rowData, value);
    for (j = 0; j < 10; j++) {  // Noncompliant; j is global now too
      // ...
    }
  }
}
