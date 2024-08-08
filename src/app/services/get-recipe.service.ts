import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe, RecipeSingle} from "../types/types";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetRecipeService {

  private url: string;
  private urlId: string;
  private createUrl: string;
  private updateUrl: string;

  constructor(private http: HttpClient) {
    this.url = environment.getRecipe;
    this.urlId = environment.getRecipeId;
    this.createUrl = environment.createRecipe;
    this.updateUrl = environment.updateRecipe;
  }

  public getRecipe(limit?: number): Observable<Recipe[]> {
    const url = limit ? `${this.url}?filter=${limit}` : this.url;
    return this.http.get<Recipe[]>(url);
  }

  public getRecipeId(id: string | null): Observable<RecipeSingle> {
    const url = `${this.url}/${id}`
    return this.http.get<RecipeSingle>(url);
  }

  public createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.createUrl, recipe)
  }

  public updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.updateUrl, recipe)
  }


}
