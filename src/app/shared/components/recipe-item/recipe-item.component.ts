import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../types/types";

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
  constructor() {
  }

  public addRecipe():void {
    this.favoriteAddBtn = true;
  this.moreRecipeBtn.emit(this.addMore)
  }
}
