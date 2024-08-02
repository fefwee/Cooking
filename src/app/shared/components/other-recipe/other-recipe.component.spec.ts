import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRecipeComponent } from './other-recipe.component';

describe('OtherRecipeComponent', () => {
  let component: OtherRecipeComponent;
  let fixture: ComponentFixture<OtherRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
