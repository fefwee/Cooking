import {Component, OnInit} from '@angular/core';
import {GetRecipeService} from "../../../services/get-recipe.service";
import {Recipe} from "../../../types/types";

@Component({
  selector: 'app-best-recipe',
  templateUrl: './best-recipe.component.html',
  styleUrls: ['./best-recipe.component.css']
})
export class BestRecipeComponent implements OnInit {


  public recipe: Recipe[] = [];

  constructor(private getRecipeService: GetRecipeService) {
  }


  ngOnInit(): void {
    this.fetchRecipes(3);
  }

  private fetchRecipes(limit: number): void {
    this.getRecipeService.getRecipe(limit).subscribe({
      next: (val: Recipe[]) => {
        this.recipe = this.randomArr(val)
      }
    });
  }

  public addRecipe(status: boolean): void {
    if (!status) {
      this.fetchRecipes(6);
    }
  }


  public randomArr(array: Recipe[]): Recipe[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
