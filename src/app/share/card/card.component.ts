import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { MenuService, Type, Order } from "../../services/menu.service";



@Component({
  selector: "app-card",
  template: ` 
  
    <ng-content></ng-content>
  
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        border-radius: 15px;
        display: flex;
        gap: 10px;
        width: 300px;
        height: 75px;
        box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.5);
        background-image: linear-gradient(
          to right,
          rgba(52, 58, 64, 1),
          rgba(33, 37, 41, 1)
        );
      }

      :host.selected{
        background: rgba(0, 0, 0, 1);
      }
    `,
  ],
})
export class CardComponent {
  @Input() index!: number;
  @Input() type!: Type;
  @Input() order!: Order;
  @Input() clickAble!: boolean;
  constructor(private menuService: MenuService) {}

  @HostBinding("class.selected")
  get selected(): boolean {
    return this.clickAble && this.order.selected;
  }
  @HostListener("click")
  onClick(): void {
    if (this.clickAble) {
      if (!this.order.selected) {
        this.menuService
          .selectOrder(this.index, this.type, this.order);
        return;
      }

      this.menuService.deselectOrder(this.index, this.type, this.order);
    }
  }
}
