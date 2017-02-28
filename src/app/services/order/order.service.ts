import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Order } from './../../models/order';

import { handleError } from './../services-utils';

@Injectable()
export class OrderService {
  private ordersUrl = 'api/orders';
  constructor(private http: Http) { }
  getOrders(): Promise<Order[]> {
    return this.http.get(this.ordersUrl)
      .toPromise()
      .then(response => response.json().data as Order[])
      .catch(handleError);
  }
}
