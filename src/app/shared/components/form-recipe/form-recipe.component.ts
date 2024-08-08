  import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
  import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
  import {ActivatedRoute} from '@angular/router';
  import {GetRecipeService} from '../../../services/get-recipe.service';
  import {CreateRecipe, Recipe, RecipeSingle} from "../../../types/types";

  @Component({
    selector: 'app-form-recipe',
    templateUrl: './form-recipe.component.html',
    styleUrls: ['./form-recipe.component.css']
  })
  export class FormRecipeComponent implements OnInit {

    @Input() preloadData: boolean = true;
    @Output() OnSubmit = new EventEmitter<CreateRecipe>();
    public title: string = 'Создание рецепта';

    public createRecipeForm!: FormGroup;

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
      cookingSteps: [{title: '', description: ''}],
      createdOn: "",
      foodValue: {
        calories: 0,
        fats: 0,
        carbohydrates: 0,
        proteins: 0
      },
      id: "",
      image: "",
      ingredients: [{title: '', description: ''}],
      tags: [],
      timeCooking: 0,
      title: "",
      updatedOn: ""
    };

    constructor(
      private fb: FormBuilder,
      protected service: GetRecipeService,
      protected route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id && this.preloadData) {
        this.service.getRecipeId(id).subscribe({
          next: (value: RecipeSingle) => {
            this.recipe = value;
            this.createForm(this.recipe);
          },
        });
      } else {
        this.createForm(this.recipe);
      }
    }


    createForm(val: RecipeSingle) {
      this.createRecipeForm = this.fb.group({
        nameRecipe: [val.title || '', [Validators.required]],
        descRecipe: [val.body || '', [Validators.required]],
        categories: [val.tags.join(', ') || '', [Validators.required]],
        timeCooking: [val.timeCooking || '', [Validators.required]],
        belki: [val.foodValue.proteins || '', [Validators.required]],
        fats: [val.foodValue.fats || '', [Validators.required]],
        carbohydrates: [val.foodValue.carbohydrates || '', [Validators.required]],
        calories: [val.foodValue.calories || '', [Validators.required]],
        steps: this.fb.array(val.cookingSteps.map(step => this.createStep(step))),
        ingredients: this.fb.array(val.ingredients.map(ingredient => this.createIngredient(ingredient)))
      });
    }


    get steps(): FormArray {
      return this.createRecipeForm.get('steps') as FormArray;
    }

    createStep(step?: any): FormGroup {
      return this.fb.group({
        firstStep: [step?.title || '', [Validators.required]],
        descFirstStep: [step?.description || '', [Validators.required]]
      });
    }


    addStep(): void {
      this.steps.push(this.createStep());
    }

    get ingredients(): FormArray {
      return this.createRecipeForm.get('ingredients') as FormArray;
    }

    createIngredient(ingredient?: any): FormGroup {
      return this.fb.group({
        nameIngredient: [ingredient?.title || '', [Validators.required]],
        descIngredient: [ingredient?.description || '', [Validators.required]]
      });
    }


    addIngredient(): void {
      this.ingredients.push(this.createIngredient());
    }

    onSave() {
      const formData = this.createRecipeForm.value;

      const recipeCreateData: CreateRecipe = {
        body: formData.descRecipe,
        cookingSteps: formData.steps.map((step: any) => ({
          description: step.descFirstStep,
          title: step.firstStep
        })),
        foodValue: {
          calories: Number(formData.calories),
          carbohydrates: Number(formData.carbohydrates),
          fats: Number(formData.fats),
          proteins: Number(formData.belki)
        },
        image: formData.image,
        ingredients: formData.ingredients.map((ingredient: any) => ({
          description: ingredient.descIngredient,
          title: ingredient.nameIngredient
        })),
        tags: formData.categories.split(',').map((tag: string) => tag.trim()),
        timeCooking: Number(formData.timeCooking),
        title: formData.nameRecipe
      };
      this.OnSubmit.emit(recipeCreateData);
    }


  }
