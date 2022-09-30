import { ShareModule } from './../share/share.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { TotalComponent } from './total/total.component';



@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    OrdersComponent,
    TotalComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ShareModule,
  ]
})
export class OrdersModule { }
