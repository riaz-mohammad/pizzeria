import { ShareModule } from './../share/share.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [MenuComponent, NavigationBarComponent],
  imports: [CommonModule, MenuRoutingModule, ShareModule],
})
export class MenuModule {}
