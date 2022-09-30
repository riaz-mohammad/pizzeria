import { Component, Input } from '@angular/core';

@Component({
  selector: "app-image",
  template: ` <img [src]="source" /> `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        display: flex;
  
        overflow: hidden;
        width: 80px;
        --scale: 1;
      }
        
      img {
        transform: scale(var(--scale));
        object-fit: cover;
        height: 100%;
        width: 100%;
        filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))
      }
    `,
  ],
})
export class ImageComponent {
  @Input() source!: string;
}