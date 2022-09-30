

import { Injectable } from '@angular/core';
import { OrdersService } from './orders.service';
import { DrinkService } from './drink.service';
import { PastaService } from './pasta.service';
import { PizzaService } from './pizza.service';

 
 export class Order {
  constructor(
    public image: string,
    public name: string,
    public price: number,
    public ingredients: string,
    public selected: boolean
  ) {}
}

export type Type = 'pizza' | 'pasta' | 'drink';

@Injectable({
  providedIn: "root",
})
export class MenuService {
  constructor(
    private ordersService: OrdersService,
    private drinkService: DrinkService,
    private pastaService: PastaService,
    private pizzaService: PizzaService
  ) { }


  selectedOrder(index: number, type: Type): boolean {
    return this.menu(type)[index].selected;
  }

  selectOrder(index: number, type: Type, order: Order): void {
    this._order(index, type, true);
    this.ordersService.addOrder(order);
  }

  deselectOrder(index: number, type: Type, order: Order): void {
    this._order(index, type, false);
    this.ordersService.removeOrder(order);
  }

  private _order(index: number, type: Type, selected: boolean): void {
    let order = this.menu(type)[index];
    order.selected = selected;
  }
    
  OrderSent(): void {
    this.pizzaService.pizza.forEach(pizza => pizza.selected = false);
    this.pastaService.pasta.forEach(pasta => pasta.selected = false);
    this.drinkService.drink.forEach(drink => drink.selected = false);
    this.ordersService.clearOrder();
  }

  private menu(type: string): Order[] {
    switch (type) {
      case "drink":
        return this.drinkService.drink;
      
      case "pizza":
        return this.pizzaService.pizza;

      case "pasta":
        return this.pastaService.pasta;

     default:
        return [];
    }
  }

}

  
  

  
