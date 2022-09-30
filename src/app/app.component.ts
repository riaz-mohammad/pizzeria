import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './animations';

@Component({
  selector: "app-root",
  template: `
    <animate-route [@routeAnimation]="route(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </animate-route>
  `,
  styles: [
    `
      :host {
    
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 100%;
      }
        
        
        
      animate-route {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
        
  
    `,
  ],
  animations: [routeAnimation],
})
export class AppComponent {
  route(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.["animation"];
  }
}
