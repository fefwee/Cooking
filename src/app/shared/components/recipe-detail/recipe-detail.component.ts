import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetRecipeService} from "../../../services/get-recipe.service";
import {Comments, RecipeSingle} from "../../../types/types";
import {ModalNotificationComponent} from "../modal-notification/modal-notification.component";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @ViewChild('modalContainer', {read: ViewContainerRef, static: true}) modalContainer!: ViewContainerRef;
  modalRef!: ComponentRef<ModalNotificationComponent>;

  @Output() comments!: Comments[];


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


  constructor(
    private getRecipeService: GetRecipeService,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver) {
    route.url.subscribe({
      next: (() => {
        this.changeRecipe()
      })
    })
  }

  ngOnInit(): void {
    this.changeRecipe();
  }

  public changeRecipe() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getRecipeService.getRecipeId(id).subscribe({
      next: (recipe: RecipeSingle) => {
        this.recipe = recipe;
        this.comments = recipe.comments;
      }
    })
  }

  public shareRecipe() {
    this.modalContainer.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(ModalNotificationComponent);
    this.modalRef = this.modalContainer.createComponent(factory);
    this.modalRef.instance.title = 'Поделиться этим рецептом?';
    this.modalRef.instance.desc = 'Вы хотите поделиться этим рецептом со всеми?';
    this.modalRef.instance.deleteType = 'share';
    this.modalRef.instance.open.subscribe((isOpen: boolean) => {
      if (!isOpen) {
        this.modalContainer.clear();
      }
    });

    this.modalRef.instance.openModal();
  }

  public closeModal() {
    if (this.modalRef) {
      this.modalRef.instance.closeModal();
    }
  }

  public printPage(): void {
    window.print();
  }


}
