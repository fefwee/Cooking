import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Recipe} from "../../../types/types";
import {GetRecipeService} from "../../../services/get-recipe.service";
import {Router} from "@angular/router";
import {ModalNotificationComponent} from "../../../shared/components/modal-notification/modal-notification.component";

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent implements OnInit {


  @ViewChild('modalContainer', {read: ViewContainerRef, static: true}) modalContainer!: ViewContainerRef;
  modalRef!: ComponentRef<ModalNotificationComponent>;

  public recipes: Recipe[] = [];

  constructor(
    private getRecipeService: GetRecipeService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }


  ngOnInit(): void {
    this.getRecipeService.getRecipe().subscribe({
      next: (val: Recipe[]) => {
        this.recipes = val;
      }
    });
  }

  public deleteRecipe() {
    this.modalContainer.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(ModalNotificationComponent);
    this.modalRef = this.modalContainer.createComponent(factory);
    this.modalRef.instance.title = 'Удалить этот рецепт?';
    this.modalRef.instance.desc = 'Вы хотите удалить этот рецепт';
    this.modalRef.instance.error = true;
    this.modalRef.instance.open.subscribe((isOpen: boolean) => {
      if (!isOpen) {
        this.modalContainer.clear();
      }
    });

    this.modalRef.instance.openModal();
  }


  public navigateToRecipe(id: number) {
    this.router.navigate([`/admin/recipes//${id}`])
  };

}
