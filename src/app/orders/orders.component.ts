import { Component, HostBinding } from '@angular/core';
import { Location } from "@angular/common";
import { OrdersService } from '../services/orders.service';
import {backArrow, card, confirmButton } from '../animations';



@Component({
  selector: "app-orders",
  template: `
    <app-image
      class="background"
      [source]="'../../assets/pizza/background.png'"
    >
    </app-image>
    <orders-container>
      <app-arrow (click)="back()" @backArrow></app-arrow>

      <orders *ngIf="ordersService.orders$ | async as orders">
        <app-card *ngFor="let order of orders" [order]="order">
          <app-image [source]="order.image"></app-image>
          <app-detail [order]="order"></app-detail>
        </app-card>

        <app-total [orders]="orders"></app-total>
      </orders>

      <app-button (click)="confirm()" @confirmButton>CONFIRM</app-button>
    </orders-container>
    <app-confirm *ngIf="confirmed"></app-confirm>
  `,
  styleUrls: ['./orders.component.scss'],
  animations: [backArrow, card, confirmButton],
})
export class OrdersComponent {
  @HostBinding("@card") card = {
    value: "",
    params: { translate: "translateY(15%)", duration: "200ms", delay: "50ms" },
  };
  constructor(
    public ordersService: OrdersService,
    private location: Location
  ) { }
  
  confirmed = false;

  back(): void {
    this.location.back()
  }

  confirm(): void {
    this.confirmed = !this.confirmed;
  }
}
