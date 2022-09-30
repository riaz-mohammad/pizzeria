

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ImageComponent } from '../services/image/image.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { ArrowComponent } from './arrow/arrow.component';
import { DetailComponent } from './detail/detail.component';
import { OrdersTotalPipe } from './orders-total.pipe';
import { ConfirmComponent } from './confirm/confirm.component';
import { SendingComponent } from './sending/sending.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';




@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    ImageComponent,
    BackgroundImageComponent,
    ArrowComponent,
    DetailComponent,
    OrdersTotalPipe,
    ConfirmComponent,
    SendingComponent,
    ConfirmationComponent
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    CardComponent,
    ImageComponent,
    BackgroundImageComponent,
    ArrowComponent,
    DetailComponent,
    OrdersTotalPipe,
    ConfirmComponent,
    SendingComponent,
    ConfirmationComponent
  ],
})
export class ShareModule {}
