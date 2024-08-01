import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliciousRecipesComponent } from './delicious-recipes.component';

describe('DeliciousRecipesComponent', () => {
  let component: DeliciousRecipesComponent;
  let fixture: ComponentFixture<DeliciousRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliciousRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliciousRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
