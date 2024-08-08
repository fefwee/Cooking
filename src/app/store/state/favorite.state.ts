import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {AddToFavorite, recipeFavoriteModel} from "../models/favorite.model";
import {Recipe} from "../../types/types";


@State<recipeFavoriteModel>({
    name: 'FavoriteState',
    defaults: {
      favorite: [],
    }
  }
)

@Injectable()
export class FavoriteState {


  @Selector()
  static getRecipe(state: recipeFavoriteModel) {
    return state.favorite;
  };

  @Action(AddToFavorite)
  addToFavorite({getState, setState}: StateContext<recipeFavoriteModel>, {payload}: AddToFavorite) {
    const state = getState();
    const isFavorite = state.favorite.some((item: Recipe) => item.id === payload.id);

    setState({
      ...state,
      favorite: isFavorite
        ? state.favorite.filter((item: Recipe) => item.id !== payload.id)
        : [...state.favorite, payload],
    });
  }

}
