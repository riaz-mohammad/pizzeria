import { Component, HostBinding } from '@angular/core';
import { card, image } from '../animations';
import { PizzaService } from '../services/pizza.service';





@Component({
  selector: "app-pizza",
  template: `
    <ng-container *ngFor="let pizza of pizzas.pizza; index as i">
      <app-card 
            [clickAble]="true"
            [index]="i" 
            [type]="'pizza'" 
            [order]="pizza">
        <app-image [source]="pizza.image"></app-image>
        <app-detail [order]="pizza">
        </app-detail>
      </app-card>
    </ng-container>
    <app-background-image @image 
        [source]="'../../assets/pizza/background.png'">
    </app-background-image>
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 1;
      }


      app-image {
        --scale: 1.2;
      }

      :host app-card:first-child > app-image {
        --scale: 1;
      }

      app-background-image {
        bottom: -6%;
        transform: scale(1.3) rotate(35deg);
      }
    `,
  ],
  animations: [card, image],
})
export class PizzaComponent {
  @HostBinding("@card") card = {
      value: "",
      params: { translate: "translateY(20%)" }
  }
   
  constructor(public pizzas: PizzaService) {}
}