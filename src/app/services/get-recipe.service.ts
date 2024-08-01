import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../types/types";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetRecipeService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.getRecipe;
  }

  public getRecipe(limit?: number): Observable<Recipe[]> {
    const url = limit ? `${this.url}?filter=${limit}` : this.url;
    return this.http.get<Recipe[]>(url);
  }

}
