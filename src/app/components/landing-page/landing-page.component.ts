
import { Component } from '@angular/core';
import { landing } from '../../animations';

@Component({
  selector: "app-landing-page",
  template: `
    <app-header></app-header>

    <container @landing>
      <image>
        <img src="../../../assets/one copy.png" />
      </image>
      <app-button [routerLink]="'/menu'">
        MENU
        <app-arrow></app-arrow>
      </app-button>
    </container>
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 80%;
      }
      image {
        height: 200px;
        width: 280px;
      }
      container {
        gap: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      app-arrow {
        height: 25px;
        transform: rotate(180deg);
      }
      img {
        width: 100%;
        filter: drop-shadow(1px 1px 20px rgba(0, 0, 0, 0.5));
        height: 100%;
      }
      app-button {
        border-radius: 30px;
        color: white;
        font-size: 1.1rem;
        background: black;
        height: 50px;
        width: 200px;
      }
      
    `,
  ],
  animations: [landing ],
})
export class LandingPageComponent {}