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
  private urlId: string

  constructor(private http: HttpClient) {
    this.url = environment.getRecipe;
    this.urlId = environment.getRecipeId;
  }

  public getRecipe(limit?: number): Observable<Recipe[]> {
    const url = limit ? `${this.url}?filter=${limit}` : this.url;
    return this.http.get<Recipe[]>(url);
  }

  public getRecipeId(id: string | null): Observable<RecipeSingle> {
    const url = `${this.url}/${id}`
    return this.http.get<RecipeSingle>(url);
  }


}
