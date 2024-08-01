import {Component, OnInit} from '@angular/core';
import {GetRecipeService} from "../../services/get-recipe.service";
import {Recipe} from "../../types/types";

@Component({
  selector: 'app-catalog-recipes',
  templateUrl: './catalog-recipes.component.html',
  styleUrls: ['./catalog-recipes.component.css']
})
export class CatalogRecipesComponent implements OnInit {


  public recipe: Recipe[] = [];

  constructor(private getRecipeService: GetRecipeService) {
  }

  ngOnInit(): void {
    this.getRecipeService.getRecipe().subscribe({
      next: (val: Recipe[]) => {
        this.recipe = val;
      }
    });
  }

}
