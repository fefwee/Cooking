import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetRecipeService } from '../../../services/get-recipe.service';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.css']
})
export class FormRecipeComponent {

  @Input() item: any | undefined;
  public title: string = 'Создание рецепта';
  public submitBtn = 'Отправить рецепт';
  public imageBlock = true;
  @Output() login: EventEmitter<any> = new EventEmitter();
  public createRecipeForm!: FormGroup;
  public isFormSubmited = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    protected service: GetRecipeService,
    protected route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createRecipeForm = this.fb.group({
      nameRecipe: ['', [Validators.required]],
      descRecipe: ['', [Validators.required]],
      categories: ['', [Validators.required]],
      timeCooking: ['', [Validators.required]],
      belki: ['', [Validators.required]],
      fats: ['', [Validators.required]],
      carbohydrates: ['', [Validators.required]],
      calories: ['', [Validators.required]],
      steps: this.fb.array([this.createStep()]),
      ingredients: this.fb.array([this.createIngredient()])
    });
  }

  get steps(): FormArray {
    return this.createRecipeForm.get('steps') as FormArray;
  }

  createStep(): FormGroup {
    return this.fb.group({
      firstStep: ['', [Validators.required]],
      descFirstStep: ['', [Validators.required]]
    });
  }

  addStep(): void {
    this.steps.push(this.createStep());
  }

  removeStep(index: number): void {
    if (this.steps.length > 1) {
      this.steps.removeAt(index);
    }
  }

  get ingredients(): FormArray {
    return this.createRecipeForm.get('ingredients') as FormArray;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      nameIngredient: ['', [Validators.required]],
      descIngredient: ['', [Validators.required]]
    });
  }

  addIngredient(): void {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(index: number): void {
    if (this.ingredients.length > 1) {
      this.ingredients.removeAt(index);
    }
  }

  onSave() {
    const formData = this.createRecipeForm.value;
    console.log('Данные формы:', formData);
  }
}
