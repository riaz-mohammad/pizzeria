import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastaRoutingModule } from './pasta-routing.module';
import { ShareModule } from './../share/share.module';
import { PastaComponent } from './pasta.component';


@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    PastaComponent
  ],
  imports: [
    CommonModule,
    PastaRoutingModule,
    ShareModule
  ]
})
export class PastaModule { }
