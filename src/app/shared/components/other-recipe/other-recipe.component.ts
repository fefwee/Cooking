import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../types/types";
import {GetRecipeService} from "../../../services/get-recipe.service";

@Component({
  selector: 'app-other-recipe',
  templateUrl: './other-recipe.component.html',
  styleUrls: ['./other-recipe.component.css']
})
export class OtherRecipeComponent implements OnInit {

  public otherRecipe: Recipe[] = [];

  constructor(private getRecipeService: GetRecipeService) {
  }

  ngOnInit(): void {
    this.getRecipeService.getRecipe(3).subscribe({
      next: (value: Recipe[]) => {
        this.otherRecipe = this.randomArr(value)
      }
    })
  }


  public randomArr(array: Recipe[]): Recipe[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
