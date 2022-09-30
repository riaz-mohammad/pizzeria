import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-background-image",
  template: ` <img [src]="source" /> `,
  styles: [
    `
      :host {
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 25%;
        width: 50%;
        height: 50vh;
        filter: brightness(50%);
        & img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    `,
  ],
})
export class BackgroundImageComponent {
  @Input() source!: string;
}
