import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../types/types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {


  @Input() recipe!: Recipe[];
  @Input() favoriteAddBtn:boolean = false;
  @Input() deliciousBlock:boolean = false;
  @Output() moreRecipeBtn = new EventEmitter<boolean>();

  public addMore:boolean = false;
  constructor(  protected router: Router) {
  }

  public addRecipe():void {
    this.favoriteAddBtn = true;
  this.moreRecipeBtn.emit(this.addMore)
  }

  public navigateToRecipeDetail(id: string): void {
    this.router.navigate([`recipes/${id}`]);
  }
}
