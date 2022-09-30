import { Component, HostBinding } from '@angular/core';
import { sending } from '../../animations';

@Component({
  selector: "app-sending",
  template: ` <h3>Order Sending...</h3> `,
  styles: [],
  animations: [sending],
})
export class SendingComponent{
  @HostBinding('@sending') run = true;
}

  
