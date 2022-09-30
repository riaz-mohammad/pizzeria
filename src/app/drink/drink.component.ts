import { Component, HostBinding } from '@angular/core';
import { card, image } from '../animations';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: "app-drink",
  template: `
      <ng-container *ngFor='let drink of drinks.drink; index as i'>
         <app-card 
              [clickAble]="true"
              [index]="i" 
              [type]="'drink'" 
              [order]="drink">
            <app-image [source]="drink.image"></app-image>
            <app-detail [order]="drink"></app-detail>
         </app-card>
      </ng-container>
      <app-background-image @image
          [source]="'../../assets/drink/background.png'">
      </app-background-image>
        
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 1;
      }

      app-background-image{
        width: 70%;
        bottom: -8%;
        left: 15%;
        transform: scale(0.7) rotate(15deg)
      }
    `,
  ],
  animations: [card, image]
})
export class DrinkComponent {
  @HostBinding('@card') animation = {value: '', params: {translate: 'translateX(15%)'}}
  constructor(public drinks: DrinkService) { }
  
  
}
