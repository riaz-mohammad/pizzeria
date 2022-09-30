import { Component, Input } from '@angular/core';
import { Order } from '../../services/menu.service';

@Component({
  selector: "app-detail",
  template: `
    <h4>
      {{ order.name | titlecase }} 
      <span> {{ order.price }} €</span>
    </h4>
    <p>{{ order.ingredients }}</p>
  `,
  styles: [
    `
      :host {
        display: flex;
        width: 80%;
        flex-direction: column;
        justify-content: center;
        padding: 5px;
      }
      h4 {
        color: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: space-between;
        padding-right: 8px;
        
      }
      p {
        color: rgba(255, 255, 255, 0.7);
      }
    `,
  ],
})
export class DetailComponent {
  @Input() order!: Order;
}
