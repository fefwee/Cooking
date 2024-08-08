import {Recipe} from "../../types/types";

export interface recipeFavoriteModel {
  favorite: Recipe[],
}

export class getRecipe {
  static readonly type = '[Recipe] Get Recipe'
}

export class AddToFavorite {
  static readonly type = '[Favorite] Add';

  constructor(public payload: Recipe) {
  }

}

