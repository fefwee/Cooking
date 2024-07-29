import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendetRecipeComponent } from './recomendet-recipe.component';

describe('RecomendetRecipeComponent', () => {
  let component: RecomendetRecipeComponent;
  let fixture: ComponentFixture<RecomendetRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendetRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendetRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
