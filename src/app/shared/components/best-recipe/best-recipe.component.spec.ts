import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRecipeComponent } from './best-recipe.component';

describe('BestRecipeComponent', () => {
  let component: BestRecipeComponent;
  let fixture: ComponentFixture<BestRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
