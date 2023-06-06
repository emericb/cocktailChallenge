import { Injectable } from '@angular/core';
import { Cocktail } from "./models/Cocktail";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktails: Cocktail[] = [
    new Cocktail(
      "mojito",
      5,
      'https://images.pexels.com/photos/4457151/pexels-photo-4457151.jpeg'
    ),
    new Cocktail(
      "spritz",
      8,
      'https://images.pexels.com/photos/15146202/pexels-photo-15146202/free-photo-of-esprit-orange.jpeg'
    ),
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails
  }
}
