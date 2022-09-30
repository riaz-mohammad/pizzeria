

import { Injectable } from '@angular/core';
import { Order } from './menu.service';
import { ImagesService } from './images.service';




@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private images: ImagesService) {}
  pizza: Order[] = [
    new Order(
      this.images.pizzaImages.one,
      'pizza bolognese',
      9.5,
      'salmon, tomato, olio di olive',
      false
    ),
    new Order(
      this.images.pizzaImages.two,
      'pizza napoletana',
      9.5,
      'salmon, cipolla, olio di olive',
      false
    ),
    new Order(
      this.images.pizzaImages.three,
      'pizza milanese',
      8.5,
      'mozzarella, tomato, olio di olive',
      false
    ),
    new Order(
      this.images.pizzaImages.four,
      'pizza romana',
      8.5,
      'tomato, mozzarella, olio di olive',
      false
    ),
    new Order(
      this.images.pizzaImages.five,
      'pizza veneziana',
      9.5,
      'mozzarella, tomato, olio di olive',
      false
    ),
    new Order(
      this.images.pizzaImages.six,
      'pizza udenese',
      8.5,
      'cipolla, tomato, olive, olio di olive',
      false
    ),
    new Order(
      this.images.pizzaImages.seven,
      'pizza siciliana',
      9.5,
      'tuna, cipolla, olive, olio di olive',
      false
    ),
    new Order(
      this.images.pizzaImages.eight,
      'pizza sarda',
      8.5,
      'mozzarella, tomato, olive, olio di olive',
      false
    ),
  ];
}
