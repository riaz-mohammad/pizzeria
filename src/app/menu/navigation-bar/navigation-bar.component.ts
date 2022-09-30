import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-navigation-bar",
  template: `
    <nav>
      <app-button routerLink="/menu/pasta">
        PASTA
      </app-button>
      <app-button routerLink="/menu/pizza">
        PIZZA
      </app-button>
      <app-button routerLink="/menu/drink">
        DRINK
      </app-button>
      <app-button
        [style.--left]="position"
        [style.background]="
          router.url === '/menu/orders' ? 'rgba(73, 80, 87, 0.815)' : 'black'
        "
      ></app-button>
    </nav>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        height: 42px;
        width: 100%;
      }
      nav {
        display: flex;
        width: 90%;
        height: 100%;
        border-radius: 50px;
        background-color: rgba(73, 80, 87, 1);
        position: relative;
        z-index: 1;
      }
      app-button {
        border-radius: 30px;
        width: calc(100% / 3);
        color: white;
        border: 1px solid rgba(0, 0, 0, 0);
      }


      app-button:last-child {
        box-sizing: border-box;
        transition: all 300ms ease;
        z-index: -1;
        position: absolute;
        height: 100%;
        left: var(--left);
        & span {
          position: absolute;
          color: red;
          z-index: 100;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: white;
          border-radius: 30px;
        }
      }
    `,
  ],
})
export class NavigationBarComponent {
  constructor(public router: Router) {}

  get position(): string {
    if (this.router.url === "/menu/pizza") {
      return "33%";
    }
    if (this.router.url === "/menu/drink") {
      return "67%";
    }

    if (this.router.url === "/menu/pasta") {
      return "0%";
    }

    return "117px";
  }
}
