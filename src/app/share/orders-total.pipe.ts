import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../services/menu.service';

@Pipe({
  name: 'ordersTotal'
})
export class OrdersTotalPipe implements PipeTransform {

  transform(orders: Order[]): number {
    let total = orders.reduce((sum, order) => (sum + order.price), 0);
    return total;
  }
    

}
