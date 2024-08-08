import {Component, OnInit} from '@angular/core';
import {GetRecipeService} from "../../services/get-recipe.service";
import {CreateRecipe, Recipe} from "../../types/types";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor(
    private updateRecipeService: GetRecipeService,
    private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  public createRecipe(recipeBody: CreateRecipe): void {

    this.updateRecipeService.createRecipe(recipeBody).subscribe({
      next: (val: CreateRecipe) => {
        this.notificationService.setNotification('Успешно', 'Вы успешно добавили рецепт', false);
      },
      error: (err) => {
        this.notificationService.setNotification('Ошибка', 'Не удалось добавить рецепт', true);
      }
    });
  }


}
