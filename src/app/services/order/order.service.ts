import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Order } from './../../models/order';

import { handleError } from './../services-utils';

@Injectable()
export class OrderService {
    private ordersUrl = 'api/orders';
    constructor(private http: HttpClient) { }
    getOrders(): Promise<Order[]> {
        return this.http.get(this.ordersUrl)
            .toPromise()
            .then(response => response as Order[])
            .catch(handleError);
    }
}
