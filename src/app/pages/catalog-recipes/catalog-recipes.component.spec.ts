import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogRecipesComponent } from './catalog-recipes.component';

describe('CatalogRecipesComponent', () => {
  let component: CatalogRecipesComponent;
  let fixture: ComponentFixture<CatalogRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
