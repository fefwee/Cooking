import {Component, Input} from '@angular/core';
import {Recipe} from "../../../types/types";
import {GetRecipeService} from "../../../services/get-recipe.service";

@Component({
  selector: 'app-delicious-recipes',
  templateUrl: './delicious-recipes.component.html',
  styleUrls: ['./delicious-recipes.component.css']
})
export class DeliciousRecipesComponent {

  @Input() forDetail:boolean = false;

  public recipe: Recipe[] = [];

  constructor(private getRecipeService: GetRecipeService) {
  }


  ngOnInit(): void {
    this.getRecipeService.getRecipe(4).subscribe({
      next: (val: Recipe[]) => {
        this.recipe = this.randomArr(val)
      }
    });
  }

  public randomArr(array: Recipe[]): Recipe[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
