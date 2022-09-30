
import { Injectable } from '@angular/core';
import { Order } from './menu.service';
import { ImagesService } from './images.service';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  constructor(private images: ImagesService) {}
  drink: Order[] = [
    new Order(
      this.images.drinkImages.one,
      'drink bolognese',
      5.5,
      'vino bianco',
      false
    ),
    new Order(
      this.images.drinkImages.two,
      'drink napoletano',
      6.5,
      'vino rosso',
      false
    ),
    new Order(
      this.images.drinkImages.three,
      'drink milanese',
      5.5,
      'vino bianco',
      false
    ),
    new Order(
      this.images.drinkImages.four,
      'drink romano',
      6.5,
      'vino, tequila',
      false
    ),
    new Order(
      this.images.drinkImages.five,
      'drink veneziano',
      5.5,
      'vino rosso, lemon',
      false
    ),
    new Order(
      this.images.drinkImages.six,
      'drink udenese',
      5.5,
      'vino rosso, lemon,',
      false
    ),
    new Order(
      this.images.drinkImages.seven,
      'drink siciliano',
      6.5,
      'vino bianco, lemon,',
      false
    ),
    new Order(
      this.images.drinkImages.eight,
      'drink sardo',
      6.5,
      'vino bianco, lemon,',
      false
    ),
  ];
}
