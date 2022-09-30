import { MenuService } from '../../services/menu.service';
import { OrdersService } from '../../services/orders.service';

import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { confirmation } from '../../animations';

@Component({
  selector: "app-confirmation",
  template: `
    <h3>Your Order has been sent!</h3>
    <img src="../../../assets/order.png"/>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }

      img {
        border-radius: 20px;
        width: 120px;
        height: 100px;
      }
      h3{
        height: max-content;
      }
    `,
  ],
  animations: [confirmation],
})
export class ConfirmationComponent {
  @HostBinding('@confirmation') run = true; 
  constructor(
    private router: Router,
    private menuService: MenuService
  ) { }
  ngOnInit() {
    timer(6000)
      .pipe(take(1))
      .subscribe(
        (_) => (
          this.menuService.OrderSent(),
          this.router.navigateByUrl('/menu/pizza')
        )
      );
  }
}
