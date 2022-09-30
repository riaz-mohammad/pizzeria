import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { ShareModule } from './../share/share.module';
import { PizzaComponent } from './pizza.component';


@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    PizzaComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule,
    ShareModule
  ]
})
export class PizzaModule { }
