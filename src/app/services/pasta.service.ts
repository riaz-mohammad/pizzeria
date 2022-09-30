import { Injectable } from '@angular/core';
import { ImagesService } from './images.service';
import { Order } from './menu.service';

@Injectable({
  providedIn: "root",
})
export class PastaService {
  constructor(private images: ImagesService) {}
  pasta: Order[] = [
    new Order(
      this.images.pastaImages.one,
      "pasta bolognese",
      8.5,
      "pasta, tomato sauce, burro",
      false
    ),
    new Order(
      this.images.pastaImages.two,
      "pasta napoletana",
      7.5,
      "pasta, tomato sauce, burro, alio",
      false
    ),
    new Order(
      this.images.pastaImages.three,
      "pasta milanese",
      9.5,
      "pasta, tomato, shrimps",
      false
    ),
    new Order(
      this.images.pastaImages.four,
      "pasta romana",
      7.5,
      "pasta, tomato, tuna",
      false
    ),
    new Order(
      this.images.pastaImages.five,
      "pasta veneziana",
      8.5,
      "pasta, tomato, salmon, burro",
      false
    ),
    new Order(
      this.images.pastaImages.six,
      "pasta udenese",
      8.5,
      "pasta, tomato, alio, mozzarella",
      false
    ),
    new Order(
      this.images.pastaImages.seven,
      "pasta siciliana",
      8.5,
      "pasta, tomato, alio, olive",
      false
    ),
    new Order(
      this.images.pastaImages.eight,
      "pasta sarda",
      8.5,
      "pasta, tomato, cipolla, alio",
      false
    ),
  ];
}
