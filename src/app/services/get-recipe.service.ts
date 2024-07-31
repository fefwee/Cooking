import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class GetRecipeService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.getRecipe;
  }

  public getRecipe(limit?: number): Observable<any> {
    const url = limit ? `${this.url}?filter=${limit}` : this.url;
    return this.http.get<any>(url);
  }

}
