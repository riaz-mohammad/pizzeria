import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastaComponent } from './pasta.component';

const routes: Routes = [
  {
    path: '',
    component: PastaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastaRoutingModule { }
