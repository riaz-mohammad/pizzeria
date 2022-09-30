import { Component } from '@angular/core';

@Component({
  selector: "app-button",
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      :host {
        display: flex;
        gap: 10px;
        outline: 1px solid transparent;
      }
      button {
        width: 100%;
        height: 100%;
        color: inherit;
        border-radius: inherit;
        font-weight: bold;
        font-size: inherit;
        border: none;
        outline: none;
        background: transparent;
        display: inherit;
        align-items: center;
        justify-content: center;
        gap: inherit;
      }
    `,
  ],
})
export class ButtonComponent {}
