import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNewRecipeComponent } from './get-new-recipe.component';

describe('GetNewRecipeComponent', () => {
  let component: GetNewRecipeComponent;
  let fixture: ComponentFixture<GetNewRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNewRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
