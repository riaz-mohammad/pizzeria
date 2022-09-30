import { Injectable } from '@angular/core';
import { Images } from '../images';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  images = new Images();
  pizzaImages = this.images.pizzaImages;
  pastaImages = this.images.pastaImages;
  drinkImages = this.images.drinkImages;
}
