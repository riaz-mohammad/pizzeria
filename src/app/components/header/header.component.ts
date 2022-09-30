import { Component, HostBinding } from '@angular/core';
import { header } from '../../animations';

@Component({
  selector: "app-header",
  template: `
    <image>
      <img src="../../assets/pizza-landing.jpeg" />
    </image>

    <h2>PIZZA BOLOGNESE</h2>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 100px;
        height: 35%;
      }
      image {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        img {
          border-radius: 0 0 50px 50px;
          height: 95%;
          width: 100%;
          object-fit: cover;
          filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.5));
        }
      }

      h2 {
        color: white;
        grid-column: 1 / -1;
        grid-row: 2 / -1;
        justify-self: center;
        align-self: center;
        z-index: 10;
      }
    `,
  ],
  animations: [header]
})
export class HeaderComponent {
  @HostBinding('@header') run = true;
}
