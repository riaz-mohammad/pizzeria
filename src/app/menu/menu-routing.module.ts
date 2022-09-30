import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: "",
    component: MenuComponent,
    children: [
      {
        path: "",
        redirectTo: "pizza",
        pathMatch: "full",
      },
      {
        path: "pizza",
        loadChildren: () => import("../pizza/pizza.module").then((m) => m.PizzaModule),
        data: {animation: 'pizza'}
      },
    { 
      path: 'pasta', 
      loadChildren: () => import('../pasta/pasta.module').then(m => m.PastaModule),
      data: {animation: 'pasta'}
    },
    { 
      path: 'drink', 
      loadChildren: () => import('../drink/drink.module').then(m => m.DrinkModule),
      data: {animation: 'drink'}
    },
    {
      path: 'orders',
      loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule),
      data: {animation: 'orders'}
    }
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
