import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { orders, routeToOrders, orderCount } from './../animations';
import { OrdersService } from '../services/orders.service';



@Component({
  selector: "app-menu",
  template: `
    <app-navigation-bar></app-navigation-bar>
    <router-container [@routeToOrders]="animateRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </router-container>

    <ng-container *ngIf="ordersService.ordersCount$ | async as orders">
      <app-button
        @orders
        routerLink="/menu/orders"
        [class.orders]="router.url === '/menu/orders'"
      >
        ORDERS
        <span [@orderCount]="orders" *ngIf="router.url !== '/menu/orders'">
          {{ orders }}
        </span>
      </app-button>
    </ng-container>
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;
      }

      router-container {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
      }

      app-navigation-bar {
        position: fixed;
        top: 1%;
        z-index: 100;
      }
      app-button {
        transition: all 500ms ease;
        position: fixed;
        bottom: 2%;
        background: white;
        width: 200px;
        height: 40px;
        border-radius: 30px;
        border: 1px solid rgba(0, 0, 0, 0);
        z-index: 100;
        box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
        &.orders {
          width: 140px;
          bottom: 94.3%;
          background: black;
          color: white; 
          height: 35px;
          
        }
        &.orders::after {
          content: "";
          position: absolute;
          width: 300%;
          height: 100%;
          left: -100%;
          
    
        }
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 6px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: black;
        color: white;
      }
    `,
  ],

  animations: [routeToOrders, orders, orderCount],
})
export class MenuComponent {
  constructor(public ordersService: OrdersService, public router: Router) {}

  get bottom(): string {
    return this.router.url === "/menu/orders" ? "805px" : "18px";
  }

  animateRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.["animation"];
  }
}
