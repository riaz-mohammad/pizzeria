import { Component, HostBinding, Input } from '@angular/core';
import { total } from '../../animations';
import { Order } from '../../services/menu.service';



@Component({
  selector: "app-total",
  template: `
    <h5>TOTAL:</h5>
    <h5>{{ orders | ordersTotal }} EURO</h5>
  `,
  styles: [
    `
      :host {
        width: 90%;
        display: flex;
        justify-content: space-between;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 20px;
        border-top: 1px solid white;
        padding-top: 10px;
      }
    `,
  ],
  animations: [total]
})
export class TotalComponent {
  @HostBinding('@total')
  @Input() orders!: Order[];
}
