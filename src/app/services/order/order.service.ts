import { Injectable } from '@angular/core';

import { Order } from './../../models/order';
import { ORDERS } from './mock-orders';

@Injectable()
export class OrderService {

  constructor() { }
  getOrders(): Promise<Order[]> {
    return Promise.resolve(ORDERS);
  }
}
