import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from './../share/share.module';
import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';


@NgModule({
  declarations: [
    DrinkComponent
  ],
  imports: [
    CommonModule,
    DrinkRoutingModule,
    ShareModule
  ]
})
export class DrinkModule { }
