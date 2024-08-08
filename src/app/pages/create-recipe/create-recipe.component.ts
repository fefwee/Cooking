import {Component, OnInit} from '@angular/core';
import {GetRecipeService} from "../../services/get-recipe.service";
import {Recipe} from "../../types/types";

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit{

  constructor(private updateRecipeService:GetRecipeService ) {
  }

  ngOnInit(): void {
  }

  public createRecipe(recipeBody:Recipe): void {
    this.updateRecipeService.updateRecipe(recipeBody).subscribe({
      next: (val: Recipe) => {
        console.log(val)
      }
    })
  }

}
