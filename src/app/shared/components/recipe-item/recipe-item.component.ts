import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../types/types";
import {Router} from "@angular/router";
import {AddToFavorite} from "../../../store/models/favorite.model";
import {Store} from "@ngxs/store";
import {map, Observable} from "rxjs";
import {FavoriteState} from "../../../store/state/favorite.state";
import {NotificationService} from "../../../services/notification.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  @Input() recipe!: Recipe[];
  @Input() favoriteAddBtn: boolean = false;
  @Input() deliciousBlock: boolean = false;
  @Output() moreRecipeBtn = new EventEmitter<boolean>();
  favorites$!: Observable<Recipe[]>;
  public: boolean = false;

  public addMore: boolean = false;

  constructor(protected router: Router, private store: Store, private notificationService: NotificationService) {
  }

  public addRecipe(): void {

    this.favoriteAddBtn = false;
    this.moreRecipeBtn.emit(this.addMore)
  }

  addRecipeToFavorites(recipe: Recipe) {

    this.isFavorite(recipe).subscribe({

      next: (val: boolean) => {

        if (val) {
          this.notificationService.setNotification('Успешно', 'Вы успешно добавили рецепт', false);

        }
        if (!val) {
          this.notificationService.setNotification('Удален', 'Вы успешно удалили рецепт', false);

        }
      }
    })
    this.store.dispatch(new AddToFavorite(recipe))
  }


  public navigateToRecipeDetail(id: string): void {
    this.router.navigate([`recipes/${id}`]);
  }

  ngOnInit(): void {
    this.favorites$ = this.store.select(FavoriteState.getRecipe);
  }

  public isFavorite(recipe: Recipe): Observable<boolean> {
    return this.favorites$.pipe(
      map(favorites => favorites.some((fav: any) => fav.id === recipe.id))
    );
  }
}
