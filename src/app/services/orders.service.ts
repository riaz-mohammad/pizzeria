import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from './menu.service';

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private _ordersCount = new BehaviorSubject<number>(0);
  private _orders = new BehaviorSubject<Order[]>([]);
  ordersCount$ = this._ordersCount.asObservable();
  orders$ = this._orders.asObservable();

  clearOrder(): void {
    this._orders.next([]);
    this._ordersCount.next(0);
  }

  addOrder(order: Order): void {
    this._increaseOrder();
    let orders = [...this._orders.value, order];
    this._orders.next(orders);
  }
    
  removeOrder(order: Order): void {
    this._decreaseOrder();
    let orders = this._orders.value
      .filter(orders => orders.name !== order.name);
    this._orders.next(orders);
  }
    
  private _increaseOrder(): void { 
    this._ordersCount.next(this._ordersCount.value + 1);
  }
    
  private _decreaseOrder(): void { 
    this._ordersCount.next(this._ordersCount.value - 1);
  }
}

  
