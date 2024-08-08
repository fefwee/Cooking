import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GetRecipeService} from "../../../services/get-recipe.service";
import {Recipe} from "../../../types/types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit,OnDestroy {


  @ViewChild('wrapper') myElement: any;

  private autoSlideInterval: any;
  public currentIndex = 0;
  public slides: Recipe[] = [];

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

        this.autoSlideInterval = setInterval(() => {
          this.nextSlide();
        }, 5000);
      }
    });
  }


  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }


  public navigateToRecipe(id: string) {
    this.route.navigate([`/recipes//${id}`])
  };

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

}
