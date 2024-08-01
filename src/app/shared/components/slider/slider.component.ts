import {Component, OnInit, ViewChild} from '@angular/core';
import {GetRecipeService} from "../../../services/get-recipe.service";
import {Recipe} from "../../../types/types";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  @ViewChild('wrapper') myElement: any;

  constructor(private getRecipeService: GetRecipeService) {
  }

  ngOnInit(): void {
    this.getRecipeService.getRecipe().subscribe({
      next: (val: Recipe[]) => {
        this.slides = val;
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


}
