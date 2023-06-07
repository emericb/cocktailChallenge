import { Injectable } from '@angular/core';
import { Cocktail } from "./models/Cocktail";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) {}

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

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }
}
