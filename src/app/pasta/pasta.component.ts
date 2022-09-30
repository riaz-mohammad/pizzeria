
import { MenuService } from '../services/menu.service';
import { Component, HostBinding} from '@angular/core';
import { card, image } from '../animations';
import { PastaService } from '../services/pasta.service';

@Component({
  selector: "app-pasta",
  template: `
    <ng-container 
    *ngFor='let pasta of pastas.pasta; index as i'>
      <app-card 
          [clickAble]="true"
         [index]="i" 
         [type]="'pasta'" 
         [order]="pasta">
        <app-image [source]="pasta.image"></app-image>
        <app-detail [order]="pasta"></app-detail>
      </app-card>
    </ng-container>
    <app-background-image @image
    [source]="'../../assets/pasta/pasta-background.png'">
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

   app-image {
     --scale: 2;
   }
      
      
    `,
  ],
  animations: [card, image],
})
export class PastaComponent {
  @HostBinding("@card") card =  { value: "", params: { translate: "translateX(-15%)" } };
  
  constructor(public pastas: PastaService) {}
}
