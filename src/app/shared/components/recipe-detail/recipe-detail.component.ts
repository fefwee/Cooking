import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetRecipeService} from "../../../services/get-recipe.service";
import {RecipeSingle} from "../../../types/types";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipe: RecipeSingle = {
    author: {
      id: "",
      avatar: "",
      firstName: "",
      lastName: "",
      middleName: ""
    },
    body: "",
    comments: [],
    cookingSteps: [],
    createdOn: "",
    foodValue: {
      calories: 0,
      fats: 0,
      carbohydrates: 0,
      proteins: 0
    },
    id: "",
    image: "",
    ingredients: [],
    tags: [],
    timeCooking: 0,
    title: "",
    updatedOn: ""
  };

  public selectRecipe = [
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'As for me, I cant say that food is just a fuel but its surely',
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    }
  ]

  constructor(
    private getRecipeService: GetRecipeService,
    private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getRecipeService.getRecipeId(id).subscribe({
      next: (recipe: RecipeSingle) => {
        this.recipe = recipe
      }
    })
  }
}
