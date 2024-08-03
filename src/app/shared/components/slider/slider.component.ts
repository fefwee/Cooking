import {Component, OnInit, ViewChild} from '@angular/core';
import {GetRecipeService} from "../../../services/get-recipe.service";
import {Recipe} from "../../../types/types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  @ViewChild('wrapper') myElement: any;

  constructor(
    private getRecipeService: GetRecipeService,
    protected route: Router,
  ) {
  }

  ngOnInit(): void {
    this.getRecipeService.getRecipe().subscribe({
      next: (val: Recipe[]) => {
        this.slides = val;
        if (this.slides.length > 0) {
          this.slides.shift();
        }
      }
    })
  }

  public currentIndex = 0;

  public slides: Recipe[] = [];


  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }


  public navigateToRecipe(id:string) {
    this.route.navigate([`/recipes//${id}`])
  };

}
